import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([  //configure routes for our root component
      { path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
