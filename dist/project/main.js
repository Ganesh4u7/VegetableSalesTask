(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wholesale_wholesale_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wholesale/wholesale.component */ "./src/app/wholesale/wholesale.component.ts");
/* harmony import */ var _streetsales_streetsales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./streetsales/streetsales.component */ "./src/app/streetsales/streetsales.component.ts");
/* harmony import */ var _sale_analysis_sale_analysis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-analysis/sale-analysis.component */ "./src/app/sale-analysis/sale-analysis.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suggestions/suggestions.component */ "./src/app/suggestions/suggestions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'wholesale', component: _wholesale_wholesale_component__WEBPACK_IMPORTED_MODULE_2__["WholesaleComponent"] },
    { path: 'streetsales', component: _streetsales_streetsales_component__WEBPACK_IMPORTED_MODULE_3__["StreetsalesComponent"] },
    { path: 'saleAnalysis', component: _sale_analysis_sale_analysis_component__WEBPACK_IMPORTED_MODULE_4__["SaleAnalysisComponent"] },
    { path: 'sales', component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_5__["SalesComponent"] },
    { path: 'suggestions', component: _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_6__["SuggestionsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _wholesale_wholesale_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wholesale/wholesale.component */ "./src/app/wholesale/wholesale.component.ts");
/* harmony import */ var _streetsales_streetsales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./streetsales/streetsales.component */ "./src/app/streetsales/streetsales.component.ts");
/* harmony import */ var _sale_analysis_sale_analysis_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sale-analysis/sale-analysis.component */ "./src/app/sale-analysis/sale-analysis.component.ts");
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sales/sales.component */ "./src/app/sales/sales.component.ts");
/* harmony import */ var _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./suggestions/suggestions.component */ "./src/app/suggestions/suggestions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _wholesale_wholesale_component__WEBPACK_IMPORTED_MODULE_7__["WholesaleComponent"],
                _streetsales_streetsales_component__WEBPACK_IMPORTED_MODULE_8__["StreetsalesComponent"],
                _sale_analysis_sale_analysis_component__WEBPACK_IMPORTED_MODULE_9__["SaleAnalysisComponent"],
                _sales_sales_component__WEBPACK_IMPORTED_MODULE_10__["SalesComponent"],
                _suggestions_suggestions_component__WEBPACK_IMPORTED_MODULE_11__["SuggestionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/wholesale\">WholeSale Purchase</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/streetsales\">Street Sales</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/sales\"> Sales </a> </li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/saleAnalysis\">Sale Analysis</a>  </li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/suggestions\">Suggestions</a>  </li>\n      </ul>\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\n        <!--&lt;!&ndash;<ng-template [ngIf]=\"!authService.isAuthenticated()\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<li><a routerLink=\"/signup\">Register</a></li>&ndash;&gt;-->\n          <!--&lt;!&ndash;<li><a routerLink=\"/signin\">Login</a></li>&ndash;&gt;-->\n        <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->\n\n        <!--<li><a-->\n          <!--style=\"cursor: pointer;\"-->\n          <!--(click)=\"onLogout()\"-->\n          <!--*ngIf=\"authService.isAuthenticated()\">Logout</a></li>-->\n\n        <!--<li class=\"dropdown\" appDropdown *ngIf=\"authService.isAuthenticated()\">-->\n          <!--<a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>-->\n          <!--<ul class=\"dropdown-menu\">-->\n            <!--<li><a style=\"cursor: pointer;\" (click)=\"onSaveData()\">Save Data</a></li>-->\n            <!--<li><a style=\"cursor: pointer;\" (click)=\"onFetchData()\">Fetch Data</a></li>-->\n          <!--</ul>-->\n        <!--</li>-->\n      <!--</ul>-->\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/sale-analysis/sale-analysis.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sale-analysis/sale-analysis.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sale-analysis/sale-analysis.component.html":
/*!************************************************************!*\
  !*** ./src/app/sale-analysis/sale-analysis.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <table class=\"table\">\n     <thead>\n      <tr>\n        <th>Street Name</th>\n        <th>Best Sold Vegetable</th>\n        <th>Quantity</th>\n      </tr>\n     </thead>\n      <tbody>\n      <tr *ngFor=\"let sale of salesAnalysis;\">\n      <td>{{sale.streetName}}</td>\n      <td>{{sale.vegetable}}</td>\n      <td>{{sale.amount}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>Vegetable</th>\n        <th>Sold</th>\n        <th>Left</th>\n        <th>Bought price</th>\n        <th>Price Made</th>\n        <th>Profit/Loss</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let sale of salesDetails;\">\n        <td>{{sale.name}}</td>\n        <td>{{sale.sold}}</td>\n        <td>{{sale.left}}</td>\n        <td>{{sale.boughtPrice}}</td>\n        <td>{{sale.priceMade}}</td>\n        <td *ngIf=\"sale.boughtPrice > sale.priceMade;\" >\n          {{sale.boughtPrice - sale.priceMade}} Loss\n        </td>\n          <td *ngIf=\"sale.boughtPrice < sale.priceMade;\" >\n            {{sale.priceMade - sale.boughtPrice}} Profit\n          </td>\n\n\n\n      </tr>\n      </tbody>\n    </table>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sale-analysis/sale-analysis.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sale-analysis/sale-analysis.component.ts ***!
  \**********************************************************/
/*! exports provided: SaleAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleAnalysisComponent", function() { return SaleAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sales.service */ "./src/app/sales.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaleAnalysisComponent = /** @class */ (function () {
    function SaleAnalysisComponent(salesService) {
        this.salesService = salesService;
        this.sales = this.salesService.sales;
        this.salesAnalysis = this.salesService.saleAnalysis;
        this.salesDetails = this.salesService.saleDetails;
    }
    SaleAnalysisComponent.prototype.ngOnInit = function () {
    };
    SaleAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sale-analysis',
            template: __webpack_require__(/*! ./sale-analysis.component.html */ "./src/app/sale-analysis/sale-analysis.component.html"),
            styles: [__webpack_require__(/*! ./sale-analysis.component.css */ "./src/app/sale-analysis/sale-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [_sales_service__WEBPACK_IMPORTED_MODULE_1__["SalesService"]])
    ], SaleAnalysisComponent);
    return SaleAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/sales.service.ts":
/*!**********************************!*\
  !*** ./src/app/sales.service.ts ***!
  \**********************************/
/*! exports provided: SalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesService", function() { return SalesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesService = /** @class */ (function () {
    function SalesService() {
        this.PurchasedVegetables = [];
        this.PurchasedVegetables1 = [];
        this.saleDetails = [];
        this.PurchasedVegitablesCost = 0;
        this.sales = [];
        this.saleAnalysis = [];
        this.startedEditing = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.suggestions = [];
    }
    SalesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SalesService);
    return SalesService;
}());



/***/ }),

/***/ "./src/app/sales/sales.component.css":
/*!*******************************************!*\
  !*** ./src/app/sales/sales.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sales/sales.component.html":
/*!********************************************!*\
  !*** ./src/app/sales/sales.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>Street Name</th>\n        <th>Locality</th>\n        <th>Vegetable</th>\n        <th>Quantity</th>\n        <th>Amount</th>\n      </tr>\n      </thead>\n      <tbody *ngFor=\"let sale of sales;\">\n      <tr>\n        <td>{{sale.street}}</td>\n        <td>{{sale.locality}}</td>\n        <td></td>\n        <td></td>\n        <td></td>\n\n      <tr *ngFor=\" let s of sale.sale;\">\n        <td></td>\n        <td></td>\n        <td >{{s.vegetable}}</td>\n        <td >{{s.quantity}}</td>\n        <td >{{s.amount}}</td>\n      </tr>\n\n      </tbody>\n\n    </table>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sales/sales.component.ts":
/*!******************************************!*\
  !*** ./src/app/sales/sales.component.ts ***!
  \******************************************/
/*! exports provided: SalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponent", function() { return SalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sales.service */ "./src/app/sales.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesComponent = /** @class */ (function () {
    function SalesComponent(salesService) {
        this.salesService = salesService;
        this.sales = this.salesService.sales;
    }
    SalesComponent.prototype.ngOnInit = function () {
    };
    SalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.component.html */ "./src/app/sales/sales.component.html"),
            styles: [__webpack_require__(/*! ./sales.component.css */ "./src/app/sales/sales.component.css")]
        }),
        __metadata("design:paramtypes", [_sales_service__WEBPACK_IMPORTED_MODULE_1__["SalesService"]])
    ], SalesComponent);
    return SalesComponent;
}());



/***/ }),

/***/ "./src/app/streetsales/streetsales.component.css":
/*!*******************************************************!*\
  !*** ./src/app/streetsales/streetsales.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/streetsales/streetsales.component.html":
/*!********************************************************!*\
  !*** ./src/app/streetsales/streetsales.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n  <div class=\"col-xs-12\">\r\n    <form  #f=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4 form-group\">\r\n          <label for=\"street\">Street Name</label>\r\n          <input\r\n            type=\"text\"\r\n            id=\"street\"\r\n            class=\"form-control\"\r\n            name=\"street\"\r\n            ngModel\r\n            required\r\n          >\r\n        </div>\r\n          <div class=\"col-sm-4 form-group\">\r\n            <label for=\"locality\">Locality</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"locality\"\r\n              class=\"form-control\"\r\n              name=\"locality\"\r\n              ngModel\r\n              required\r\n            >\r\n          </div>\r\n      </div>\r\n    </form>\r\n    <form #f1=\"ngForm\">\r\n      <div class=\"row\">\r\n        <table>\r\n        <div class=\"col-sm-4 form-group\">\r\n             <label for=\"type\">Select Vegetable &nbsp; </label>\r\n             <select class=\"form-control\" id=\"type\" name=\"name\" ngModel >\r\n               <option *ngFor=\"let vegetable of availableVegitables; let i = index;\">{{vegetable.name}}({{vegetable.amount}}) </option>\r\n             </select>\r\n         </div>\r\n        <div class=\"col-sm-4 form-group\">\r\n          <label for=\"quantity\">Quantity</label>\r\n          <input type=\"number\"\r\n                 id=\"quantity\"\r\n                 class=\"form-control\"\r\n                 name=\"quantity\"\r\n                 ngModel\r\n                 required>\r\n        </div>\r\n        <div class=\"col-sm-4 form-group\">\r\n          <label for=\"amount\">Amount</label>\r\n          <input type=\"number\"\r\n                 id=\"amount\"\r\n                 class=\"form-control\"\r\n                 name=\"amount\"\r\n                 ngModel\r\n                 required\r\n                 >\r\n\r\n        </div>\r\n          <div class=\"col-sm-3 form-group\">\r\n            <label></label>\r\n            <button class=\"btn btn-primary\" (click)=\"add(f1)\" [disabled]=\"!f1.valid\">Add</button>\r\n          </div>\r\n        </table>\r\n      </div>\r\n      <div class=\"container\" >\r\n        <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n            <th>Vegetable Name</th>\r\n            <th>Quantity</th>\r\n            <th>Cost</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\" let vegetable of saledetails; let i = index\">\r\n            <td>{{vegetable.vegetable}}</td>\r\n            <td>{{vegetable.quantity}}</td>\r\n            <td>{{vegetable.amount}} </td>\r\n          </tr>\r\n          <!--<tr>-->\r\n            <!--<td></td>-->\r\n            <!--<td>Todays Expenditure :</td>-->\r\n            <!--<td>{{TotalCost}}</td>-->\r\n          <!--</tr>-->\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      &nbsp;&nbsp;\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-success\"  (click)=Submit(f) [disabled]=\"!f.valid\">Save Sale</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/streetsales/streetsales.component.ts":
/*!******************************************************!*\
  !*** ./src/app/streetsales/streetsales.component.ts ***!
  \******************************************************/
/*! exports provided: StreetsalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetsalesComponent", function() { return StreetsalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sales.service */ "./src/app/sales.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StreetsalesComponent = /** @class */ (function () {
    function StreetsalesComponent(salesService) {
        this.salesService = salesService;
        this.availableVegitables = this.salesService.PurchasedVegetables;
        this.expand1 = 0;
        this.saledetails = [];
        this.Sales = this.salesService.sales;
        this.totalCost = 0;
    }
    StreetsalesComponent.prototype.ngOnInit = function () {
    };
    StreetsalesComponent.prototype.add = function (form) {
        var value = form.value;
        var i = 0, j = 0;
        var val = value.name;
        //console.log(val)
        var n1 = val.substring(0, (val.indexOf('(')));
        //console.log(n1)
        for (i = 0; i < this.availableVegitables.length; i++) {
            if (this.salesService.PurchasedVegetables[i].name == n1) {
                if (this.salesService.PurchasedVegetables[i].amount >= value.quantity) {
                    // console.log(this.salesService.PurchasedVegetables1[i].amount);
                    // console.log(this.salesService.PurchasedVegetables[i].amount);
                    this.salesService.PurchasedVegetables[i].amount = this.salesService.PurchasedVegetables[i].amount - value.quantity;
                    // console.log(this.salesService.PurchasedVegetables1[i].amount);
                    // console.log(this.salesService.PurchasedVegetables[i].amount);
                    //  console.log(n1,value.quantity,value.amount);
                    if (this.saledetails.length > 0) {
                        for (j = 0; j < this.saledetails.length; j++) {
                            if (this.saledetails[j].vegetable == n1) {
                                // console.log(n1,value.quantity,value.amount);
                                this.saledetails[j].amount = this.saledetails[j].amount + value.amount;
                                this.saledetails[j].quantity = this.saledetails[j].quantity + value.quantity;
                                break;
                            }
                            else if (j == this.saledetails.length - 1) {
                                this.saledetails.push({ vegetable: n1, quantity: value.quantity, amount: value.amount });
                                break;
                            }
                        }
                    }
                    else {
                        this.saledetails.push({ vegetable: n1, quantity: value.quantity, amount: value.amount });
                        break;
                    }
                    // console.log(this.salesService.PurchasedVegetables1);
                    // console.log(this.salesService.PurchasedVegetables);
                    // console.log(this.saledetails);
                    // console.log(this.salesService.PurchasedVegetables1[i].amount);
                    break;
                }
                else {
                    alert("Don't have enough Quantity for this item , Available Quantity is " + this.availableVegitables[i].amount);
                    break;
                }
            }
        }
        // console.log(amount);
        this.slForm1.reset();
    };
    StreetsalesComponent.prototype.Submit = function (form) {
        if (confirm("Are you sure you want to save this sale ?")) {
            var value = form.value;
            //console.log(value);
            this.salesService.sales.push({ street: value.street, locality: value.locality, sale: this.saledetails });
            var i = 0, j = 0;
            var index = 0, temp = 0;
            for (i = 0; i < this.saledetails.length; i++) {
                this.totalCost = this.totalCost + this.saledetails[i].amount;
                if (this.saledetails[i].quantity > temp) {
                    index = i;
                    temp = this.saledetails[i].quantity;
                }
                for (j = 0; j < this.salesService.saleDetails.length; j++) {
                    if (this.saledetails[i].vegetable == this.salesService.saleDetails[j].name) {
                        this.salesService.saleDetails[j].left = this.salesService.saleDetails[j].left - this.saledetails[i].quantity;
                        this.salesService.saleDetails[j].sold = this.salesService.saleDetails[j].sold + this.saledetails[i].quantity;
                        this.salesService.saleDetails[j].priceMade = this.salesService.saleDetails[j].priceMade + this.saledetails[i].amount;
                        break;
                    }
                }
            }
            this.salesService.totalSalesCost = this.totalCost;
            this.salesService.saleAnalysis.push({ streetName: value.street, vegetable: this.saledetails[index].vegetable, amount: this.saledetails[index].quantity });
            // console.log(this.Sales);
            // this.saledetails = {};
        }
        //console.log(this.salesService.sales.length);
        this.slForm.reset();
        this.slForm1.reset();
        this.saledetails = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], StreetsalesComponent.prototype, "slForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f1'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], StreetsalesComponent.prototype, "slForm1", void 0);
    StreetsalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-streetsales',
            template: __webpack_require__(/*! ./streetsales.component.html */ "./src/app/streetsales/streetsales.component.html"),
            styles: [__webpack_require__(/*! ./streetsales.component.css */ "./src/app/streetsales/streetsales.component.css")]
        }),
        __metadata("design:paramtypes", [_sales_service__WEBPACK_IMPORTED_MODULE_1__["SalesService"]])
    ], StreetsalesComponent);
    return StreetsalesComponent;
}());



/***/ }),

/***/ "./src/app/suggestions/suggestions.component.css":
/*!*******************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/suggestions/suggestions.component.html":
/*!********************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" xmlns=\"\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n    Suggestion:\n    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" type=\"\"\n              id=\"message\"\n              class=\"form-control\"\n              name=\"message\"\n              ngModel\n              required\n    ></textarea>\n    Date:\n    <input type=\"date\" class=\"form-control\"\n\n           id=\"date\"\n           class=\"form-control\"\n           name=\"date\"\n           ngModel\n           required>\n      <button\n        class=\"btn btn-success\"\n        type=\"submit\"\n        [disabled]=\"!f.valid\">Submit</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/suggestions/suggestions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/suggestions/suggestions.component.ts ***!
  \******************************************************/
/*! exports provided: SuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsComponent", function() { return SuggestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sales.service */ "./src/app/sales.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuggestionsComponent = /** @class */ (function () {
    function SuggestionsComponent(saleService) {
        this.saleService = saleService;
    }
    SuggestionsComponent.prototype.ngOnInit = function () {
    };
    SuggestionsComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        this.saleService.suggestions.push(value);
    };
    SuggestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suggestions',
            template: __webpack_require__(/*! ./suggestions.component.html */ "./src/app/suggestions/suggestions.component.html"),
            styles: [__webpack_require__(/*! ./suggestions.component.css */ "./src/app/suggestions/suggestions.component.css")]
        }),
        __metadata("design:paramtypes", [_sales_service__WEBPACK_IMPORTED_MODULE_1__["SalesService"]])
    ], SuggestionsComponent);
    return SuggestionsComponent;
}());



/***/ }),

/***/ "./src/app/wholesale/wholesale.component.css":
/*!***************************************************!*\
  !*** ./src/app/wholesale/wholesale.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wholesale/wholesale.component.html":
/*!****************************************************!*\
  !*** ./src/app/wholesale/wholesale.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Vegetable Name</label>\n          <input\n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            name=\"name\"\n            ngModel\n            required\n          >\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Quantity</label>\n          <input\n            type=\"number\"\n            id=\"amount\"\n            class=\"form-control\"\n            name=\"amount\"\n            ngModel\n            required\n            pattern=\"^[1-9]+[0-9]*$\"\n          >\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Cost</label>\n          <input\n            type=\"number\"\n            id=\"cost\"\n            class=\"form-control\"\n            name=\"cost\"\n            ngModel\n            required\n            pattern=\"^[1-9]+[0-9]*$\"\n          >\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <button\n            class=\"btn btn-success\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\n          <button\n            class=\"btn btn-danger\"\n            type=\"button\"\n            (click)=\"onDelete()\"\n            *ngIf=\"editMode\">Delete</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n        <hr>\n        <!--<ul class=\"list-group\">-->\n          <!--<a-->\n            <!--class=\"list-group-item\"-->\n            <!--style=\"cursor: pointer\"-->\n            <!--*ngFor=\"let vegetable of Vegetables; let i = index\"-->\n            <!--(click)=\"onEditItem(i)\"-->\n          <!--&gt;-->\n            <!--{{ vegetable.name }} ({{ vegetable.amount }}) = {{vegetable.cost}}-->\n          <!--</a>-->\n        <!--</ul>-->\n        <div class=\"container\">\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th>Vegetable Name</th>\n              <th>Quantity</th>\n              <th>Cost</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\" let vegetable of Vegetables; let i = index;\"\n                (click)=\"onEditItem(i)\">\n              <td>{{vegetable.name}}</td>\n              <td>{{vegetable.amount}}</td>\n              <td>{{vegetable.cost}} </td>\n            </tr>\n            <tr>\n            <td></td>\n            <th>Todays Expenditure :</th>\n            <td>{{TotalCost}}</td>\n            </tr>\n            </tbody>\n            <thead>\n            <tr>\n              <th>Suggesion of the Day:</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>{{suggestion}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/wholesale/wholesale.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wholesale/wholesale.component.ts ***!
  \**************************************************/
/*! exports provided: WholesaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WholesaleComponent", function() { return WholesaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sales.service */ "./src/app/sales.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WholesaleComponent = /** @class */ (function () {
    function WholesaleComponent(salesService, formBuilder) {
        this.salesService = salesService;
        this.formBuilder = formBuilder;
        this.Vegetables = this.salesService.PurchasedVegetables1;
        this.TotalCost = this.salesService.PurchasedVegitablesCost;
        this.editMode = false;
        this.editedItem = {};
    }
    WholesaleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.salesService.startedEditing
            .subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.slForm.setValue({
                name: _this.salesService.PurchasedVegetables[index].name,
                amount: _this.salesService.PurchasedVegetables[index].amount,
                cost: _this.salesService.PurchasedVegetables[index].cost
            });
        });
        this.suggestions();
    };
    WholesaleComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var name1 = value.name;
        var cost = value.cost;
        var amount = value.amount;
        var value1 = form.value;
        // this.Vegetables.push(value);
        if (this.editMode) {
            var cost = this.salesService.PurchasedVegetables[this.editedItemIndex].cost;
            this.salesService.PurchasedVegetables[this.editedItemIndex].name = value.name;
            this.salesService.PurchasedVegetables1[this.editedItemIndex].name = name1;
            this.salesService.saleDetails[this.editedItemIndex].name = name1;
            this.salesService.PurchasedVegetables[this.editedItemIndex].amount = value.amount;
            this.salesService.PurchasedVegetables1[this.editedItemIndex].amount = amount;
            this.salesService.saleDetails[this.editedItemIndex].left = amount;
            this.salesService.PurchasedVegetables[this.editedItemIndex].cost = value.cost;
            this.salesService.PurchasedVegetables1[this.editedItemIndex].cost = cost;
            this.salesService.saleDetails[this.editedItemIndex].boughtPrice = cost;
            this.TotalCost = this.TotalCost - cost + this.salesService.PurchasedVegetables[this.editedItemIndex].cost;
        }
        else {
            this.salesService.PurchasedVegetables.push(value);
            this.salesService.PurchasedVegetables1.push({ name: name1, amount: amount, cost: cost });
            this.salesService.saleDetails.push({ name: name1, sold: 0, left: amount, boughtPrice: cost, priceMade: 0 });
            //  console.log(this.salesService.saleDetails.length);
            //  console.log(formatDate(new Date(), 'dd-MM-yyyy', 'en'));
            this.TotalCost = this.TotalCost + value.cost;
            this.salesService.PurchasedVegitablesCost = this.TotalCost;
        }
    };
    WholesaleComponent.prototype.onEditItem = function (index) {
        this.salesService.startedEditing.next(index);
    };
    WholesaleComponent.prototype.suggestions = function () {
        var date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en');
        // console.log(this.salesService.suggestions[0].date == date);
        for (var i = 0; i < this.salesService.suggestions.length; i++) {
            if (date == this.salesService.suggestions[i].date) {
                this.suggestion = this.salesService.suggestions[i].message;
                break;
            }
        }
    };
    WholesaleComponent.prototype.onClear = function () {
        this.editMode = false;
    };
    WholesaleComponent.prototype.onDelete = function () {
        this.salesService.PurchasedVegetables.splice(this.editedItemIndex, 1);
        this.salesService.PurchasedVegetables1.splice(this.editedItemIndex, 1);
        this.salesService.saleDetails.splice(this.editedItemIndex, 1);
        this.onClear();
    };
    WholesaleComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], WholesaleComponent.prototype, "slForm", void 0);
    WholesaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wholesale',
            template: __webpack_require__(/*! ./wholesale.component.html */ "./src/app/wholesale/wholesale.component.html"),
            styles: [__webpack_require__(/*! ./wholesale.component.css */ "./src/app/wholesale/wholesale.component.css")]
        }),
        __metadata("design:paramtypes", [_sales_service__WEBPACK_IMPORTED_MODULE_2__["SalesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WholesaleComponent);
    return WholesaleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RogerFederer\WebstormProjects\untitled2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map