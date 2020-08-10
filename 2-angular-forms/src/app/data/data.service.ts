import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    //return of(userSettings);

    return this.http.post('http://demo7805614.mockable.io/user-settings', userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annyal', 'Lifetime']);
  }
}
