import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import { SelectStorePage } from '../select-store/select-store';
import { SignupPage } from '../signup/signup';
import { UserData } from '../../providers/user-data';
import { HomePage } from '../home/home';

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
  submitted = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public userData: UserData,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  //onLogin() {
  //  this.navCtrl.push(SelectStorePage);
  //}

  onLogin(form) {
    console.log('this.navParams');
    console.log(this.navParams);

    this.submitted = true;

    console.log('form.valid');
    console.log(form.valid);

    if (form.valid) {
      //this.navCtrl.push(TabsPage); //this.navCtrl.push(MasterPage);//this.navCtrl.push(HomePage);
      this.userData.login(this.login.username, this.login.password)
        .subscribe(
          x => console.log('onNext: %s', x),
          e => {
          console.log('onError: %s', e);
          this.showAlert("Error", e);
        },
        () => {
          console.log('onCompleted: loginSuccess');
          if(this.navParams.data.fromWhichPage)
            this.viewCtrl.dismiss("login successfull");
          else
            this.navCtrl.setRoot(SelectStorePage, {tabIndex: 1});
        }//console.log('onCompleted')
      );
    }
  }

  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [{
        text: 'Close',
        handler: () => {
          console.log('Close clicked');
          // this.nav.pop();
        }
      }]
    });
    alert.present();
  }

}
