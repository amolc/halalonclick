import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, HttpModule} from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from "rxjs/Observable";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserData } from '../providers/user-data';

//import { ListPage } from '../pages/list/list';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LocationPage } from '../pages/location/location';
import { CheckoutPage } from '../pages/checkout/checkout';
import { OrderPage } from '../pages/order/order';
import { SelectStorePage } from '../pages/select-store/select-store';
import { FoodCenterPage } from '../pages/food-center/food-center';
import { FoodStallPage } from '../pages/food-stall/food-stall';
import { CounterModalPage } from '../pages/counter-modal/counter-modal';
//import { MapPage } from '../pages/map/map';


//import { GoogleMaps } from '@ionic-native/google-maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

let storage = new Storage();
let YOUR_HEADER_PREFIX = "Bearer";

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: YOUR_HEADER_PREFIX,
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,

    WelcomePage,
    LoginPage,
    SignupPage,
    LocationPage,
    CheckoutPage,
    OrderPage,
    SelectStorePage,
    FoodCenterPage,
    FoodStallPage,
    CounterModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    LocationPage,
    CheckoutPage,
    OrderPage,
    SelectStorePage,
    FoodCenterPage,
    FoodStallPage,
    CounterModalPage
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //GoogleMaps
    UserData,
    Storage
  ]
})
export class AppModule {}
