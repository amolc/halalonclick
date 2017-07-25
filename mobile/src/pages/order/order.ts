import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  items = [
    { name: 'Pokémon Yellow', price: 5.20},
    { name: 'Super Metroid', price: 5.20},
    { name: 'Mega Man X', price: 5.20},
    { name: 'Star Fox', price: 5.20},
  ];
  itemSelected = function(item){
    console.log(item)
  }
  onCheckout = function(){
    this.navCtrl.push(CheckoutPage);

  }
}
