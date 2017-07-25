import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FoodStallPage } from '../food-stall/food-stall';

/**
 * Generated class for the FoodCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-food-center',
  templateUrl: 'food-center.html',
})
export class FoodCenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodCenterPage');
  }
  onSelectFoodCenter() {
    this.navCtrl.push(FoodStallPage);
  }

}
