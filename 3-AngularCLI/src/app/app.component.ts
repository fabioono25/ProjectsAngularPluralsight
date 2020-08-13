import { Component } from '@angular/core'

let num = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  sayHello() {
    var x = 10;
  }
}
