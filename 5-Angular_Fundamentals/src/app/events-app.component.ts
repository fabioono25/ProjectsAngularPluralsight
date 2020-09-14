import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <!-- <events-list></events-list> -->
    <!-- <img src="/assets/images/basic-shield.png"/> -->
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'app';
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
