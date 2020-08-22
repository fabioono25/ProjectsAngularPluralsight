import { Component } from '@angular/core';
import { LoggerService } from 'my-lib';

const num = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(logger: LoggerService) {
    logger.log('this is a test of library');
  }

  sayHello(): void {
    const x = 10;
  }
}
