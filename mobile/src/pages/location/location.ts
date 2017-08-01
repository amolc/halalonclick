import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FoodCenterPage } from '../food-center/food-center';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AppSettings } from '../../services/AppSettings.service';

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
  foodCenterList:any = [];
  baseUrl:string = AppSettings.API_ENDPOINT;
  storeType:string = "";

  constructor(public navCtrl:NavController, public navParams:NavParams, public authHttp:AuthHttp) {
    this.storeType = navParams.data.storeType;
    this.getFoodCenterList();
  }

  getFoodCenterList() {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.authHttp.get(`${this.baseUrl}/api/food-center/${this.storeType}`, options).subscribe(res => {
      console.log(res.json());
      this.foodCenterList = res.json();

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

  onSelectLocation(foodCenterObj) {
    console.log(foodCenterObj);

    this.navCtrl.push(FoodCenterPage, {
      foodCenterObj: foodCenterObj
    });
  }

}
