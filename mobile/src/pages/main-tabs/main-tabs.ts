import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the MainTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html'
})
export class MainTabsPage {

  itemRoot = 'ItemPage'
  cartRoot = 'CartPage'
  settingRoot = 'SettingPage'


  constructor(public navCtrl: NavController) {}

}
