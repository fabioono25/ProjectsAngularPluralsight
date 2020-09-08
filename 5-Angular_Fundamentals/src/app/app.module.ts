import { SimpleModalComponent } from './common/simpleModal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';

import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent} from './common/index';

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

//declare let toastr: Toastr;
let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

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
    DurationPipe,
    SimpleModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
                //EventRouteActivator,
                {
                  provide: EventRouteActivator, useClass: EventRouteActivator
                },
                {
                  provide: TOASTR_TOKEN, useValue: toastr
                },
                {
                  provide: JQ_TOKEN, useValue: jQuery
                },
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
