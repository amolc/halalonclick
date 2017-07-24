import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LocationPage } from '../pages/location/location';
import { CheckoutPage } from '../pages/checkout/checkout';
import { SelectStorePage } from '../pages/select-store/select-store';
import { FoodCenterPage } from '../pages/food-center/food-center';
import { FoodStallPage } from '../pages/food-stall/food-stall';
import { MapPage } from '../pages/map/map';


import { GoogleMaps } from '@ionic-native/google-maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

    WelcomePage,
    LoginPage,
    SignupPage,
    LocationPage,
    CheckoutPage,
    SelectStorePage,
    FoodCenterPage,
    FoodStallPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    LocationPage,
    CheckoutPage,
    SelectStorePage,
    FoodCenterPage,
    FoodStallPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMaps
  ]
})
export class AppModule {}
