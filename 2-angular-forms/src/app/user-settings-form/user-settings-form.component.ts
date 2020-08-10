import { DataService } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { UserSettings } from './../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  //copying form data
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onHttpError(errorResponse: any) {
    console.log(`error: ${errorResponse}.`);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log(form.valid);

    if (form.invalid) {
      this.postError = true;
      this.postErrorMessage = 'Please fix some above errors';
    }

    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => console.log(`success: ${result}.`),
      error => onHttpError(error)
      // error => console.log(`error: ${error}.`)
    );
  }

  onBlur(field: NgModel) {
    console.log(field.valid);
  }
}
