import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodStallPage');
  }
  items = [
    { name: 'Pokémon Yellow', price: 5.20},
    { name: 'Super Metroid', price: 5.20},
    { name: 'Mega Man X', price: 5.20},
    { name: 'Pac-Man', price: 5.20},
    { name: 'Super Mario World', price: 5.20},
    { name: 'Street Fighter II', price: 5.20},
    { name: 'Half Life', price: 5.20},
    { name: 'Final Fantasy VII', price: 5.20},
    { name: 'Star Fox', price: 5.20},
    { name: 'Tetris', price: 5.20},
    { name: 'Donkey Kong III', price: 5.20}
  ];
  itemSelected = function(item){
    console.log(item)
  }
}
