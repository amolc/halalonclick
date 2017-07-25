import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SelectStorePage } from '../select-store/select-store';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: {username?: string, password?: string} = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  onLogin() {
    this.navCtrl.push(SelectStorePage);
  }

}
