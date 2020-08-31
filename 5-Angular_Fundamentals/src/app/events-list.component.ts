import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  //templateUrl: './events-list.component.html'
  template: `
    <div>
      <h1>Uncoming Angular Events</h1>
    </div>
    <event-thumbnail [event]="event1"
    (eventClick)="handleEventClicked($event)"
    #thumbnail
    ></event-thumbnail>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">log some foo</button>
  `
})
export class EventsListComponent {
  title = 'app';

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  handleEventClicked(data) {
    console.log(`event: ${data}`);
  }
}
