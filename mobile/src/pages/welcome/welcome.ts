import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';

import { LoginPage } from '../login/login';
/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  onLogin() {
    this.navCtrl.push(LoginPage);
  }
  onBrowseEateries() {
    //this.navCtrl.push(SignupPage);
  }
}
