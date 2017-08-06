import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { CounterModalPage } from '../counter-modal/counter-modal';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AppSettings } from '../../services/AppSettings.service';
/**
 * Generated class for the FoodStallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-food-stall',
  templateUrl: 'food-stall.html',
})
export class FoodStallPage {
  menuList:any = [];
  foodStallObj:any = {};
  baseUrl:string = AppSettings.API_ENDPOINT;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp, public alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.foodStallObj = navParams.data.foodStallObj  || {id:1};
    this.getFoodStallList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodStallPage');
  }
  getFoodStallList(){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.authHttp.get(`${this.baseUrl}/api/menu/${this.foodStallObj.id}`,options).subscribe(res => {
      this.menuList = res.json();
      this.menuList.forEach(row => {
        row.total = 1;
      })
    });
  }
  itemSelected = function(item){
    console.log(item);
  };
  onAddToCart= function(item){
    //this.navCtrl.push(OrderPage);
    this.presentConfirm(status => {
      if(status){
        let queryStr = JSON.stringify({
          userId: 1,
          menuId: item.id,
          name: item.name,
          price: item.price,
          totalOrder: item.total
        });

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.authHttp.post(`${this.baseUrl}/api/cart`,queryStr,options).subscribe(res => {
          console.log("added",res.json());


        });
      }
    });
  };
  increaseItem = function(item){

  };
  decreaseItem = function(item){

  };
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
  presentConfirm = function(cb) {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to add this item?',
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
          text: 'Add',
          handler: () => {
            console.log('Buy clicked');
            cb(true);
          }
        }
      ]
    });
    alert.present();
  }
  openModal = function(itemObj) {

    let modal = this.modalCtrl.create(CounterModalPage, {data:itemObj});
    modal.present();

    modal.onDidDismiss((data: any) => {
      if (data) {
        itemObj.total = data;
      }
    });
  }
}
