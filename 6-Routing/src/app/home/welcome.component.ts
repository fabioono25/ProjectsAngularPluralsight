import { Component } from '@angular/core';

@Component({ //don't need the selector here, because we are routing directing, instead of using as a nested component
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
