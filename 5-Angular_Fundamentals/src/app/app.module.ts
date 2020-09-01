import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './event-thumbnail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list.component';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent, EventRouteActivator } from './events/event-details';
import { EventService } from './events/shared';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventRouteActivator, EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
