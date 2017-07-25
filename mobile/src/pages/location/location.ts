import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FoodCenterPage } from '../food-center/food-center';

/**
 * Generated class for the LocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  onSelectLocation() {
    this.navCtrl.push(FoodCenterPage);
  }

}
