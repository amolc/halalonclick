import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodStallPage } from '../food-stall/food-stall';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AppSettings } from '../../services/AppSettings.service';

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
  foodStallList:any = [];
  foodCenterObj:any = {};
  baseUrl:string = AppSettings.API_ENDPOINT;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp) {
    this.foodCenterObj = navParams.data.foodCenterObj || {id:1};
    console.log(this.foodCenterObj );

    this.getFoodStallList();
  }
  getFoodStallList(){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.authHttp.get(`${this.baseUrl}/api/food-stall/${this.foodCenterObj.id}`,options).subscribe(res => {
      console.log("......................",res.json());
      this.foodStallList = res.json();

    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodCenterPage');
  }
  onSelectFoodCenter(foodStallObj) {

    this.navCtrl.push(FoodStallPage,{
      foodStallObj:foodStallObj
    });
  }
}
