import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LocationPage } from '../pages/location/location';
import { CheckoutPage } from '../pages/checkout/checkout';
import { SelectStorePage } from '../pages/select-store/select-store';
import { FoodCenterPage } from '../pages/food-center/food-center';
import { FoodStallPage } from '../pages/food-stall/food-stall';
import { OrderPage } from '../pages/order/order';
//import { MapPage } from '../pages/map/map';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;
  //rootPage: any = SelectStorePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: 'Welcome', component: WelcomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Location', component: LocationPage },
      { title: 'Checkout', component: CheckoutPage },
      { title: 'Order', component: OrderPage },
      { title: 'SelectStore', component: SelectStorePage },
      { title: 'Food Center', component: FoodCenterPage },
      { title: 'Food Stall', component: FoodStallPage },
      //{ title: 'MapPage', component: MapPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
