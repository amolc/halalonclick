webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_center_food_center__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AppSettings_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, authHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authHttp = authHttp;
        this.foodCenterList = [];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__services_AppSettings_service__["a" /* AppSettings */].API_ENDPOINT;
        this.storeType = "";
        this.storeType = navParams.data.storeType;
        this.getFoodCenterList();
    }
    LocationPage.prototype.getFoodCenterList = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        this.authHttp.get(this.baseUrl + "/api/food-center/" + this.storeType, options).subscribe(function (res) {
            console.log(res.json());
            _this.foodCenterList = res.json();
        });
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.onSelectLocation = function (foodCenterObj) {
        console.log(foodCenterObj);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__food_center_food_center__["a" /* FoodCenterPage */], {
            foodCenterObj: foodCenterObj
        });
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-location',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\location\location.html"*/'<!--\n\n  Generated template for the LocationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="cards-bg">\n\n  <ion-card class="map">\n\n    <img src="assets/map.png"/>\n\n    <div class="card-title">Your Location</div>\n\n    <div class="card-subtitle">144 Ny, 16545</div>\n\n  </ion-card>\n\n  <div padding>\n\n    <button ion-button color="secondary" full>Change Location</button>\n\n  </div>\n\n  <ion-card (click)="onSelectLocation(item)" *ngFor="let item of foodCenterList; let i = index">\n\n    <img src="{{baseUrl + item.imageUrl}}"/>\n\n    <ion-card-content>\n\n      <ion-card-title text-center>\n\n        {{item.name}}\n\n      </ion-card-title>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_stall_food_stall__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AppSettings_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FoodCenterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FoodCenterPage = (function () {
    function FoodCenterPage(navCtrl, navParams, authHttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authHttp = authHttp;
        this.foodStallList = [];
        this.foodCenterObj = {};
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__services_AppSettings_service__["a" /* AppSettings */].API_ENDPOINT;
        this.foodCenterObj = navParams.data.foodCenterObj || { id: 1 };
        console.log(this.foodCenterObj);
        this.getFoodStallList();
    }
    FoodCenterPage.prototype.getFoodStallList = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        this.authHttp.get(this.baseUrl + "/api/food-stall/" + this.foodCenterObj.id, options).subscribe(function (res) {
            console.log("......................", res.json());
            _this.foodStallList = res.json();
        });
    };
    FoodCenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodCenterPage');
    };
    FoodCenterPage.prototype.onSelectFoodCenter = function (foodStallObj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__food_stall_food_stall__["a" /* FoodStallPage */], {
            foodStallObj: foodStallObj
        });
    };
    return FoodCenterPage;
}());
FoodCenterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-food-center',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\food-center\food-center.html"*/'<!--\n\n  Generated template for the FoodCenterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Food-center</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="assets/map.png"/>\n\n    <div class="card-title">{{foodCenterObj.name}}</div>\n\n    <div class="card-subtitle">{{foodStallList.length}} STALLS</div>\n\n  </ion-card>\n\n  <div>\n\n    <p text-center>\n\n     {{foodCenterObj.hours}}\n\n    </p>\n\n    <p text-center>\n\n      {{foodCenterObj.address}}\n\n    </p>\n\n  </div>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6  *ngFor="let item of foodStallList; let i = index">\n\n        <div text-center (click)="onSelectFoodCenter(item)">\n\n          <img src="{{baseUrl + item.imageUrl}}" alt=""/>\n\n          <h3 >{{item.name}}</h3>\n\n          <p>{{item.type}} </p>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\food-center\food-center.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"]])
], FoodCenterPage);

//# sourceMappingURL=food-center.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodStallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__counter_modal_counter_modal__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AppSettings_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FoodStallPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FoodStallPage = (function () {
    function FoodStallPage(navCtrl, navParams, authHttp, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authHttp = authHttp;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.menuList = [];
        this.foodStallObj = {};
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__services_AppSettings_service__["a" /* AppSettings */].API_ENDPOINT;
        this.itemSelected = function (item) {
            console.log(item);
        };
        this.onAddToCart = function (item) {
            var _this = this;
            //this.navCtrl.push(OrderPage);
            this.presentConfirm(function (status) {
                if (status) {
                    var queryStr = JSON.stringify({
                        userId: 1,
                        menuId: item.id,
                        name: item.name,
                        price: item.price,
                        totalOrder: item.total
                    });
                    var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
                    var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
                    _this.authHttp.post(_this.baseUrl + "/api/cart", queryStr, options).subscribe(function (res) {
                        console.log("added", res.json());
                    });
                }
            });
        };
        this.increaseItem = function (item) {
        };
        this.decreaseItem = function (item) {
        };
        this.presentConfirm = function (cb) {
            var alert = this.alertCtrl.create({
                title: 'Confirm purchase',
                message: 'Do you want to add this item?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                            cb(false);
                        }
                    },
                    {
                        text: 'Add',
                        handler: function () {
                            console.log('Buy clicked');
                            cb(true);
                        }
                    }
                ]
            });
            alert.present();
        };
        this.openModal = function (itemObj) {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__counter_modal_counter_modal__["a" /* CounterModalPage */], { data: itemObj });
            modal.present();
            modal.onDidDismiss(function (data) {
                if (data) {
                    itemObj.total = data;
                }
            });
        };
        this.foodStallObj = navParams.data.foodStallObj || { id: 1 };
        this.getFoodStallList();
    }
    FoodStallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodStallPage');
    };
    FoodStallPage.prototype.getFoodStallList = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        this.authHttp.get(this.baseUrl + "/api/menu/" + this.foodStallObj.id, options).subscribe(function (res) {
            _this.menuList = res.json();
            _this.menuList.forEach(function (row) {
                row.total = 1;
            });
        });
    };
    FoodStallPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Close',
                    handler: function () {
                        console.log('Close clicked');
                        // this.nav.pop();
                    }
                }]
        });
        alert.present();
    };
    return FoodStallPage;
}());
FoodStallPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-food-stall',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\food-stall\food-stall.html"*/'<!--\n\n  Generated template for the FoodStallPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Food-stall</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="assets/bg-food.png"/>\n\n    <div class="card-title">{{foodStallObj.name}}</div>\n\n    <div class="card-subtitle">{{foodStallObj.foodType}}</div>\n\n  </ion-card>\n\n  <div>\n\n    <p text-center>\n\n      {{foodStallObj.hours}}\n\n    </p>\n\n    <p text-center>\n\n      {{foodStallObj.address}}\n\n    </p>\n\n  </div>\n\n\n\n\n\n  <ion-list no-lines>\n\n    <div  *ngFor="let item of menuList" >\n\n\n\n      <ion-row>\n\n        <ion-col col-5><div>{{ item.name }}</div></ion-col>\n\n\n\n        <ion-col col-2><div><button color="primary" ion-button small round (click)="openModal(item)">{{item.total}} &nbsp;<ion-icon name="arrow-down"></ion-icon></button></div></ion-col>\n\n\n\n        <ion-col col-2><div>${{ item.price*item.total | number:\'1.2-2\' }}</div></ion-col>\n\n        <ion-col col-2><div><button color="primary" ion-button small round (click)="onAddToCart(item)">Add</button></div></ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\food-stall\food-stall.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], FoodStallPage);

//# sourceMappingURL=food-stall.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AppSettings_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserData = (function () {
    function UserData(authHttp, http, events, storage) {
        this.authHttp = authHttp;
        this.http = http;
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        //console.log('this.authHttp');
        //console.log(this.authHttp);
        //console.log(this.storage);
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    UserData.prototype.login = function (username, password) {
        var _this = this;
        var queryStr = JSON.stringify({ email: username, password: password });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            _this.authHttp.post(__WEBPACK_IMPORTED_MODULE_6__services_AppSettings_service__["a" /* AppSettings */].API_ENDPOINT + "/api/authenticate", queryStr, options)
                .subscribe(function (res) {
                var tokenData = res.json();
                _this.storage.set("id_token", tokenData.token);
                _this.storage.set(_this.HAS_LOGGED_IN, true);
                _this.setUsername(username);
                _this.events.publish('user:login');
                console.log("login success");
                observer.complete("login success");
            }, function (error) {
                console.log('this.errorMessage');
                console.log(error);
                observer.error("login failed");
            });
        });
    };
    UserData.prototype.signup = function (signup) {
        //this.storage.set(this.HAS_LOGGED_IN, true);
        //this.setUsername(signup.name);
        //this.events.publish('user:signup');
        var _this = this;
        var queryStr = JSON.stringify(signup);
        console.log(signup);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].create(function (observer) {
            _this.authHttp.post(__WEBPACK_IMPORTED_MODULE_6__services_AppSettings_service__["a" /* AppSettings */].API_ENDPOINT + "/api/signup", queryStr, options)
                .subscribe(function (res) {
                var tokenData = res.json();
                _this.storage.set("id_token", tokenData.token);
                _this.storage.set(_this.HAS_LOGGED_IN, true);
                //this.setUsername(username);
                _this.events.publish('user:signup');
                console.log("registration success");
                console.log(tokenData);
                observer.complete("registration success");
            }, function (error) {
                console.log('this.errorMessage');
                console.log(error);
                observer.error("registration failed");
            });
        });
    };
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.storage.remove('id_token');
        this.events.publish('user:logout');
    };
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    // return a promise
    UserData.prototype.hasLoggedIn = function () {
        //return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
        //  return value === true;
        //});
        return this.storage.get('id_token').then(function (token) {
            //console.log('tokenNotExpired(null, token)'); // Returns true/false
            //console.log(); // Returns true/false
            return Object(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])(null, token) === true;
        });
    };
    return UserData;
}());
UserData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
], UserData);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\checkout\checkout.html"*/'<!--\n\n  Generated template for the CheckoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Checkout</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card full>\n\n    <img src="assets/bg-food.png"/>\n\n    <div class="card-title">Checkout</div>\n\n  </ion-card>\n\n  <div>\n\n    <p text-center>\n\n      25-30 minutes\n\n    </p>\n\n    <p text-center>\n\n      116, Jurong East Street 21, Singapore 600116\n\n      </p>\n\n  </div>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Your Address\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list inset>\n\n        <ion-item>\n\n          <ion-label>Address</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n         <ion-item>\n\n          <ion-label>Unit No.</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n         <ion-item>\n\n          <ion-label>Postal Code</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <div padding>\n\n    <button ion-button color="secondary" full>PLACE ORDER</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\checkout\checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.onLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.onBrowseEateries = function () {
        //this.navCtrl.push(SignupPage);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Welcome</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <h2 center text-center><img class="welcome-img" src="assets/80_logo.png" alt=""></h2>\n\n  </div>\n\n  <button ion-button block (click)="onSignup()">Sign Up</button>\n\n  <button ion-button block (click)="onLogin()">Log In</button>\n\n  <button ion-button block (click)="onBrowseEateries()">Browse Eateries</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CounterModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CounterModalPage = (function () {
    function CounterModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.counterArray = [];
        for (var i = 0; i < 10; i++) {
            this.counterArray[i] = i + 1;
        }
    }
    CounterModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CounterModalPage');
    };
    CounterModalPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(false);
    };
    CounterModalPage.prototype.selectItem = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    return CounterModalPage;
}());
CounterModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-counter-modal',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\counter-modal\counter-modal.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>\n\n      Select Total Order\n\n    </ion-title>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of counterArray" (click)="selectItem(item)">\n\n      {{item}}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\counter-modal\counter-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], CounterModalPage);

//# sourceMappingURL=counter-modal.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_checkout__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AppSettings_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, authHttp, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authHttp = authHttp;
        this.alertCtrl = alertCtrl;
        this.orderList = [];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__services_AppSettings_service__["a" /* AppSettings */].API_ENDPOINT;
        this.items = [
            { name: 'Pokémon Yellow', price: 5.20 },
            { name: 'Super Metroid', price: 5.20 },
            { name: 'Mega Man X', price: 5.20 },
            { name: 'Star Fox', price: 5.20 },
        ];
        this.itemSelected = function (item) {
            console.log(item);
        };
        this.onCheckout = function () {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checkout_checkout__["a" /* CheckoutPage */]);
        };
        this.removeOrderItem = function (item) {
            var _this = this;
            this.presentConfirm(function (ok) {
                if (ok) {
                    _this.removeOrderFromList(item.id, function (status) {
                        if (status) {
                            _this.orderList.splice(item, 1);
                        }
                    });
                }
            });
            console.log("==", item);
        };
        this.presentConfirm = function (cb) {
            var alert = this.alertCtrl.create({
                title: 'Confirm purchase',
                message: 'Do you want to remove this item?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                            cb(false);
                        }
                    },
                    {
                        text: 'Remove',
                        handler: function () {
                            console.log('Buy clicked');
                            cb(true);
                        }
                    }
                ]
            });
            alert.present();
        };
        this.getSubTotal = function () {
            return this.orderList.reduce(function (total, item) {
                return total + item.price * item.totalOrder;
            }, 0);
        };
        this.getDeliveryCharge = function () {
            return 5;
        };
        this.getOrderList();
    }
    OrderPage.prototype.getOrderList = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        this.authHttp.get(this.baseUrl + "/api/cart", options).subscribe(function (res) {
            console.log("orderList", res.json());
            _this.orderList = res.json();
        });
    };
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage.prototype.removeOrderFromList = function (id, cb) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]({ headers: headers });
        this.authHttp.delete(this.baseUrl + "/api/cart?order_id=" + id, options).subscribe(function (res) {
            cb(res.json());
        });
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\order\order.html"*/'<!--\n\n  Generated template for the OrderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Order</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="assets/bg-food.png"/>\n\n    <div class="card-title">Your Order</div>\n\n  </ion-card>\n\n  <div>\n\n    <p text-center>\n\n      25-30 minutes\n\n    </p>\n\n    <p text-center>\n\n      116, Jurong East Street 21, Singapore 600116\n\n    </p>\n\n  </div>\n\n\n\n  <!--</ion-content>-->\n\n  <!--<ion-content>-->\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Order Summary\n\n    </ion-card-header>\n\n    <ion-list no-lines>\n\n      <ion-grid ion-item *ngFor="let item of orderList">\n\n\n\n        <ion-row>\n\n          <ion-col col-4>{{ item.name }}</ion-col>\n\n          <ion-col col-2>{{ item.total }}</ion-col>\n\n          <ion-col col-4><button color="danger" ion-button small round (click)="removeOrderItem(item)">remove</button></ion-col>\n\n          <ion-col col-2 text-right>${{ item.price* item.totalOrder }}</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <button ion-item>\n\n\n\n        <ion-row >\n\n          <ion-col text-right offset-6 col-4>\n\n            Subtotal\n\n          </ion-col>\n\n          <ion-col text-right col-2>${{getSubTotal()}}</ion-col>\n\n        </ion-row>\n\n        <ion-row >\n\n          <ion-col text-right offset-6 col-4>\n\n            Delivery Fee\n\n          </ion-col>\n\n          <ion-col text-right col-2>${{getDeliveryCharge()}}</ion-col>\n\n        </ion-row>\n\n        <hr/>\n\n        <ion-row >\n\n          <ion-col text-right offset-6 col-4>\n\n            <b>Total</b>\n\n          </ion-col>\n\n          <ion-col text-right col-2><b>${{getSubTotal() + getDeliveryCharge()}}</b></ion-col>\n\n        </ion-row>\n\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n\n  <div padding>\n\n    <button ion-button color="secondary" full (click)="onCheckout()">Proceed to checkout</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\order\order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_data__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checkout_checkout__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_order__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_select_store_select_store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_food_center_food_center__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_food_stall_food_stall__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_counter_modal_counter_modal__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { AUTH_PROVIDERS } from 'angular2-jwt';






//import { ListPage } from '../pages/list/list';










//import { MapPage } from '../pages/map/map';
//import { GoogleMaps } from '@ionic-native/google-maps';


var storage = new __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */]();
var YOUR_HEADER_PREFIX = "Bearer";
function getAuthHttp(http) {
    return new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthConfig"]({
        headerPrefix: YOUR_HEADER_PREFIX,
        noJwtError: true,
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return storage.get('id_token'); }),
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            //ListPage,
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_select_store_select_store__["a" /* SelectStorePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_food_center_food_center__["a" /* FoodCenterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_food_stall_food_stall__["a" /* FoodStallPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_counter_modal_counter_modal__["a" /* CounterModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            //ListPage,
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_select_store_select_store__["a" /* SelectStorePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_food_center_food_center__["a" /* FoodCenterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_food_stall_food_stall__["a" /* FoodStallPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_counter_modal_counter_modal__["a" /* CounterModalPage */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"],
                useFactory: getAuthHttp,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]]
            },
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            //GoogleMaps
            __WEBPACK_IMPORTED_MODULE_8__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* Storage */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_checkout_checkout__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_select_store_select_store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_food_center_food_center__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_food_stall_food_stall__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_order_order__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ListPage } from '../pages/list/list';









//import { MapPage } from '../pages/map/map';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage },
            //{ title: 'List', component: ListPage },
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */] },
            { title: 'Location', component: __WEBPACK_IMPORTED_MODULE_7__pages_location_location__["a" /* LocationPage */] },
            { title: 'Checkout', component: __WEBPACK_IMPORTED_MODULE_8__pages_checkout_checkout__["a" /* CheckoutPage */] },
            { title: 'Order', component: __WEBPACK_IMPORTED_MODULE_12__pages_order_order__["a" /* OrderPage */] },
            { title: 'SelectStore', component: __WEBPACK_IMPORTED_MODULE_9__pages_select_store_select_store__["a" /* SelectStorePage */] },
            { title: 'Food Center', component: __WEBPACK_IMPORTED_MODULE_10__pages_food_center_food_center__["a" /* FoodCenterPage */] },
            { title: 'Food Stall', component: __WEBPACK_IMPORTED_MODULE_11__pages_food_stall_food_stall__["a" /* FoodStallPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () { return 'http://80startups.com:3000'; },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
AppSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppSettings);

//# sourceMappingURL=AppSettings.service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_store_select_store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, userData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.signup = {};
        this.submitted = false;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.submitted = true;
        console.log(this.signup);
        if (form.valid) {
            console.log("valid hoyechhe");
            this.userData.signup(this.signup).subscribe(function (x) { return console.log('onNext: %s', x); }, function (e) { return console.log('onError: %s', e); }, function () {
                console.log('onCompleted: registrationSuccess');
                //if(this.navParams.data.fromWhichPage)
                //  this.viewCtrl.dismiss("login successfull");
                //else
                //  this.navCtrl.setRoot(HomePage, {tabIndex: 1});
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__select_store_select_store__["a" /* SelectStorePage */], { tabIndex: 1 });
            } //console.log('onCompleted')
            );
            //this.navCtrl.push(TabsPage);
            //this.navCtrl.push(HomePage);
        }
    };
    SignupPage.prototype.onLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <div>\n\n      <h2 center text-center><img class="welcome-img" src="assets/80_logo.png" alt=""></h2>\n\n    </div>\n\n\n\n    <form #signupForm="ngForm" novalidate>\n\n      <ion-item>\n\n        <ion-label floating color="primary">First Name</ion-label>\n\n        <ion-input [(ngModel)]="signup.firstName" name="firstName" type="text" #name="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p [hidden]="name.valid || submitted == false" color="danger" padding-left>\n\n        First Name is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Last Name</ion-label>\n\n        <ion-input [(ngModel)]="signup.lastName" name="lastName" type="text" #name="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p [hidden]="name.valid || submitted == false" color="danger" padding-left>\n\n        Last Name is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Email</ion-label>\n\n        <ion-input [(ngModel)]="signup.email" name="email" type="text" #email="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p [hidden]="email.valid || submitted == false" color="danger" padding-left>\n\n        Email is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Password</ion-label>\n\n        <ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n        Password is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Confirm Password</ion-label>\n\n        <ion-input [(ngModel)]="signup.confirmPassword" name="confirmPassword" type="password" #confirmPassword="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p [hidden]="confirmPassword.valid || submitted == false" color="danger" padding-left>\n\n        Confirm Password is required\n\n      </p>\n\n      <ion-row responsive-sm>\n\n        <ion-col>\n\n          <button ion-button (click)="onSignup(signupForm)" type="submit" block color="primary">Sign Up</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <hr/>\n\n      <p center text-center>\n\n        Already have an account? Log in <a  (click)="onLogin()" >here</a>\n\n      </p>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_location__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SelectStorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SelectStorePage = (function () {
    function SelectStorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelectStorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectStorePage');
    };
    SelectStorePage.prototype.onSelectStore = function (storeType) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__location_location__["a" /* LocationPage */], {
            storeType: storeType
        });
    };
    return SelectStorePage;
}());
SelectStorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-select-store',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\select-store\select-store.html"*/'<!--\n\n  Generated template for the SelectStorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Select-store</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div text-center (click)="onSelectStore(\'halal\')">\n\n          <img padding src="assets/halal.png" alt=""/>\n\n          <h3>Halal Food Delivery</h3>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div text-center (click)="onSelectStore(\'fresh\')">\n\n          <img padding src="assets/fresh.png" alt=""/>\n\n          <h3>Fresh Food</h3>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\select-store\select-store.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SelectStorePage);

//# sourceMappingURL=select-store.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_store_select_store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, userData, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.login = {};
        this.submitted = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    //onLogin() {
    //  this.navCtrl.push(SelectStorePage);
    //}
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        console.log('this.navParams');
        console.log(this.navParams);
        this.submitted = true;
        console.log('form.valid');
        console.log(form.valid);
        if (form.valid) {
            //this.navCtrl.push(TabsPage); //this.navCtrl.push(MasterPage);//this.navCtrl.push(HomePage);
            this.userData.login(this.login.username, this.login.password)
                .subscribe(function (x) { return console.log('onNext: %s', x); }, function (e) {
                console.log('onError: %s', e);
                _this.showAlert("Error", e);
            }, function () {
                console.log('onCompleted: loginSuccess');
                if (_this.navParams.data.fromWhichPage)
                    _this.viewCtrl.dismiss("login successfull");
                else
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__select_store_select_store__["a" /* SelectStorePage */], { tabIndex: 1 });
            } //console.log('onCompleted')
            );
        }
    };
    LoginPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Close',
                    handler: function () {
                        console.log('Close clicked');
                        // this.nav.pop();
                    }
                }]
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <div>\n\n      <h2 center text-center><img class="welcome-img" src="assets/80_logo.png" alt=""></h2>\n\n    </div>\n\n\n\n    <form #loginForm="ngForm" novalidate>\n\n      <ion-item>\n\n        <ion-label floating color="primary">Email</ion-label>\n\n        <ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n        Email is required\n\n      </p>\n\n\n\n      <ion-item>\n\n        <ion-label floating color="primary">Password</ion-label>\n\n        <ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n        Password is required\n\n      </p>\n\n\n\n      <ion-row responsive-sm>\n\n        <ion-col>\n\n          <button ion-button (click)="onLogin(loginForm)" type="submit" color="primary" block>Login</button>\n\n        </ion-col>\n\n        <!--<ion-col>-->\n\n          <!--<button ion-button (click)="onSignup()" color="light" block>Signup</button>-->\n\n        <!--</ion-col>-->\n\n      </ion-row>\n\n      <hr/>\n\n      <p center text-center>\n\n        Forgot Password? <br/>\n\n        New to Halalonclick? Register <a (click)="onSignup()" >here</a>\n\n      </p>\n\n    </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\MohammadAbdul\Desktop\Halalonclick\mobile\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map