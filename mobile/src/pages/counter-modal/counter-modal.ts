import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CounterModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-counter-modal',
  templateUrl: 'counter-modal.html',
})
export class CounterModalPage {
  counterArray:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    for(var i=0; i < 10; i++ ){
      this.counterArray[i] = i+1;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CounterModalPage');
  }
  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(false);
  }
  selectItem(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }

}
