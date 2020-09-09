import { IEvent, ISession } from '../shared/index';
import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .event-image { height: 100px; },
    a {cursor:pointer}
  `]
})
export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    //only work first time... when searching, it's a problem
    //this.event = this.eventService.getEvent(+this.route.snapshot.params['id']); //snapshot is not observable

    //reset states so we can react to changes directly in this component
    //this allows in this case to route a component to itself
    //this.route.params.forEach((params: Params) => {
      //this.event = this.eventService.getEvent(+params['id']); //reseting the event property
      //this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
    //     this.event = this.route.snapshot.data['event'];
    //     this.addMode = false;
    // });
    this.route.data.forEach((data) => {
      this.event = data['event'];
        this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }

}
