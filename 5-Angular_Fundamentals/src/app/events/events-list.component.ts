import { Component, OnInit } from '@angular/core';
//import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router';
import { EventService, IEvent } from './shared/index';

//declare let toastr

@Component({
 template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']; //events: property on the route
    //this.eventService.getEvents().subscribe(events => { this.events = events; } );
  }

  handleThumbnailClick(eventName) {
    //this.toastr.success(eventName)
  }
}
