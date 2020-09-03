import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent, CreateSessionComponent } from './events/event-details';
import { Error404Component } from './errors/404.component';

import { EventsListComponent,
         EventThumbnailComponent,
         EventService,
         CreateEventComponent,
         EventRouteActivator,
         EventListResolver,
         DurationPipe } from './events/index';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
                EventRouteActivator,
                EventService, //{ provide: EventService, useValue: EventService } //long form
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }, //long form
                EventListResolver,
                AuthService
             ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){

  if (component.isDirty)
    return window.confirm(`are you sure you want to leave?`);

  return true;
}
