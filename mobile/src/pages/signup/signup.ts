import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SelectStorePage } from '../select-store/select-store';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signup: {name?: string, email?: string, password?: string, confirmPassword?: string} = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSignup() {
    this.navCtrl.push(SelectStorePage);
  }
  onLogin() {
    this.navCtrl.push(LoginPage);
  }
}
