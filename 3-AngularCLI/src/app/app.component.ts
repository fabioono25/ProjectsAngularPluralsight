import { Component } from '@angular/core';

const num = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  sayHello(): void {
    const x = 10;
  }
}
