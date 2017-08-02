import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp) {
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
      console.log("......................",res.json());
      this.menuList = res.json();

    });
  }
  itemSelected = function(item){
    console.log(item);
  }
  onAddToCart= function(){
    this.navCtrl.push(OrderPage);

  }
}
