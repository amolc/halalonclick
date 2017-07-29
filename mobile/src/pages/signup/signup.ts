import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SelectStorePage } from '../select-store/select-store';
import { LoginPage } from '../login/login';
import { UserData } from '../../providers/user-data';

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
  submitted = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userData: UserData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onSignup(form) {
    this.submitted = true;
    console.log(this.signup);

    if (form.valid) {
      console.log("valid hoyechhe");
      this.userData.signup(this.signup).subscribe(
          x => console.log('onNext: %s', x),
          e => console.log('onError: %s', e),
        () => {
          console.log('onCompleted: registrationSuccess');
          //if(this.navParams.data.fromWhichPage)
          //  this.viewCtrl.dismiss("login successfull");
          //else
          //  this.navCtrl.setRoot(HomePage, {tabIndex: 1});
          this.navCtrl.setRoot(SelectStorePage, {tabIndex: 1});
        }//console.log('onCompleted')
      );
      //this.navCtrl.push(TabsPage);
      //this.navCtrl.push(HomePage);
    }
  }
  onLogin() {
    this.navCtrl.push(LoginPage);
  }
}
