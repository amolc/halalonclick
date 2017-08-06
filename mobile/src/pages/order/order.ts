import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { CheckoutPage } from '../checkout/checkout';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AppSettings } from '../../services/AppSettings.service';
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
  orderList:any = [];
  baseUrl:string = AppSettings.API_ENDPOINT;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp, public alertCtrl: AlertController) {
    this.getOrderList();
  }
  getOrderList(){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.authHttp.get(`${this.baseUrl}/api/cart`,options).subscribe(res => {
      console.log("orderList",res.json());
      this.orderList = res.json();

    });
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
  };
  onCheckout = function(){
    this.navCtrl.push(CheckoutPage);

  };
  removeOrderItem = function (item) {
    this.presentConfirm(ok => {
      if(ok){
        this.removeOrderFromList(item.id, status => {
          if(status){
            this.orderList.splice(item, 1);
          }
        })
      }
    });
    console.log("==", item)

  };
  removeOrderFromList(id, cb){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.authHttp.delete(`${this.baseUrl}/api/cart?order_id=${id}`, options).subscribe(res => {
      cb(res.json());
    });
  }
  presentConfirm = function(cb) {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to remove this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            cb(false);
          }
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('Buy clicked');
            cb(true);
          }
        }
      ]
    });
    alert.present();
  }
  getSubTotal = function () {
    return this.orderList.reduce(function (total, item) {
      return total + item.price* item.totalOrder;
    },0)
  }
  getDeliveryCharge = function () {
    return 5
  }
}
