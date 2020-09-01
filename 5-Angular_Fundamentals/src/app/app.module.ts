import { EventService } from './events/shared/event.service';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './event-thumbnail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list.component';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent, EventRouteActivator } from './events/event-details';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events-list-resolver.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
                EventRouteActivator,
                EventService, //{ provide: EventService, useValue: EventService } //long form
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }, //long form
                EventListResolver
             ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){

  if (component.isDirty)
    return window.confirm(`are you sure you want to leave?`);

  return true;
}
