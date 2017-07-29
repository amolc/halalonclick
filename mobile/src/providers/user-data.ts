import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Observable }     from 'rxjs/Observable';
import { AppSettings } from '../services/AppSettings.service'

@Injectable()
export class UserData {
  _favorites = [];
  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(public authHttp: AuthHttp, public http: Http, public events: Events, public storage: Storage) {
    //console.log('this.authHttp');
    //console.log(this.authHttp);
    //console.log(this.storage);
  }

  hasFavorite(sessionName) {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName) {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName) {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  login(username, password) {

    let queryStr = JSON.stringify({email:username,password:password});

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return Observable.create(observer => {
      this.authHttp.post(`${AppSettings.API_ENDPOINT}/api/authenticate`,queryStr,options)
        .subscribe(
          res => {
            var tokenData=res.json();
            this.storage.set("id_token",tokenData.token);
            this.storage.set(this.HAS_LOGGED_IN, true);
            this.setUsername(username);
            this.events.publish('user:login');
            console.log("login success");
            observer.complete("login success");
         },
          error => {
          console.log('this.errorMessage');
          console.log(error);
            observer.error("login failed");
        }
      );
    });
  }

  signup(signup) {
    //this.storage.set(this.HAS_LOGGED_IN, true);
    //this.setUsername(signup.name);
    //this.events.publish('user:signup');


    let queryStr = JSON.stringify(signup);

    console.log(signup);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return Observable.create(observer => {
      this.authHttp.post(`${AppSettings.API_ENDPOINT}/api/signup`,queryStr,options)
        .subscribe(
          res => {
          var tokenData=res.json();
          this.storage.set("id_token",tokenData.token);
          this.storage.set(this.HAS_LOGGED_IN, true);
          //this.setUsername(username);
          this.events.publish('user:signup');
          console.log("registration success");
          console.log(tokenData);
          observer.complete("registration success");
        },
          error => {
          console.log('this.errorMessage');
          console.log(error);
          observer.error("registration failed");
        }
      );
    });
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.storage.remove('id_token');
    this.events.publish('user:logout');
  }

  setUsername(username) {
    this.storage.set('username', username);
  }

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  // return a promise
  hasLoggedIn() {
    //return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
    //  return value === true;
    //});

    return this.storage.get('id_token').then(token => {
      //console.log('tokenNotExpired(null, token)'); // Returns true/false
      //console.log(); // Returns true/false
      return tokenNotExpired(null, token) === true;
    });
  }
}
