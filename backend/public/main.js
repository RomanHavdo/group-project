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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#main {\r\n    position: relative;\r\n    height: 900px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <header>\r\n        <app-nav-bar></app-nav-bar>\r\n    </header>\r\n    <div id=\"main\">\r\n        <app-appointment-window></app-appointment-window>\r\n        <app-carousel [images]=\"images\"></app-carousel>\r\n        <div class=\"itemGridBlock\"></div>\r\n    </div>\r\n    <footer>\r\n        <app-footer></app-footer>\r\n    </footer>\r\n</div>"

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
        this.images = [
            'assets/img/slides/slide1.jpg',
            'assets/img/slides/slide2.jpg',
            'assets/img/slides/slide3.jpg',
            'assets/img/slides/slide4.jpg',
            'assets/img/slides/slide5.jpg',
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _appointment_window_appointment_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment-window/appointment-window.component */ "./src/app/appointment-window/appointment-window.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel/carousel.module */ "./src/app/carousel/carousel.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _appointment_window_appointment_window_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentWindowComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appointment-window/appointment-window.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/appointment-window/appointment-window.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modalBtn {\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 20px;\r\n    background: -webkit-linear-gradient(#fbc315, #fded1a);\r\n    color: white;\r\n}\r\n\r\n.modalBtn:hover {\r\n    background: -webkit-linear-gradient(#fded1a, #fffea5);\r\n}\r\n"

/***/ }),

/***/ "./src/app/appointment-window/appointment-window.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/appointment-window/appointment-window.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Запис на прийом</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\"></div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Записатися</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn  modalBtn\" (click)=\"open(content)\">&#43;</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/appointment-window/appointment-window.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/appointment-window/appointment-window.component.ts ***!
  \********************************************************************/
/*! exports provided: AppointmentWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentWindowComponent", function() { return AppointmentWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentWindowComponent = /** @class */ (function () {
    function AppointmentWindowComponent(modalService) {
        this.modalService = modalService;
    }
    AppointmentWindowComponent.prototype.ngOnInit = function () {
    };
    AppointmentWindowComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    AppointmentWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appointment-window',
            template: __webpack_require__(/*! ./appointment-window.component.html */ "./src/app/appointment-window/appointment-window.component.html"),
            styles: [__webpack_require__(/*! ./appointment-window.component.css */ "./src/app/appointment-window/appointment-window.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], AppointmentWindowComponent);
    return AppointmentWindowComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tmb{\r\n    position: absolute;\r\n    left: 180px;\r\n}\r\n.tmb img{\r\n    position: absolute;\r\n}\r\n.carousel-btn{\r\n    cursor: pointer;\r\n}\r\n.btn-change-dec{\r\n    position: absolute;\r\n    top: 400px;\r\n    left: 106px;\r\n    height: 115px;\r\n    width: 60px;\r\n    font-size: 75px;\r\n}\r\n.btn-change-inc{\r\n    position: absolute;\r\n    top: 400px;\r\n    height: 115px;\r\n    width: 60px;\r\n    font-size: 75px;\r\n    left: 1400px;\r\n}\r\n.indecator-1{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 670px;\r\n    background-color: initial;;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 750px;\r\n}\r\n.indecator-2{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 700px;\r\n    background-color: initial;;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 750px;\r\n}\r\n.indecator-3{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 730px;\r\n    background-color: initial;;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 750px;\r\n}\r\n.indecator-4{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 760px;\r\n    background-color: initial;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 750px;\r\n}\r\n.indecator-5{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 790px;\r\n    background-color: initial;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 750px;\r\n}\r\n.indecators button:hover,\r\n.active{\r\n    background-color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmb\">\r\n    <a href=\"#\">\r\n        <img [@imgState]=\"idi === counter ? 'active': 'inactive'\" *ngFor=\"let img of images;let idi=index\" [src]=\"img\" />\r\n    </a>\r\n</div>\r\n<div class=\"carousel-btn\">\r\n    <span class=\"btn-change-inc\" (click)=\"onClickInc()\">&#x3e;</span>\r\n    <span class=\"btn-change-dec\" (click)=\"onClickDec()\">&#x3c;</span>\r\n</div>\r\n<div class=\"indecators\">\r\n    <button [class.active]=\"isActive('btn0')\" (click)=\"setActive('btn1')\" (click)=\"onClickItem($event)\" value=\"0\" class=\"indecator-1\"></button>\r\n    <button [class.active]=\"isActive('btn1')\" (click)=\"setActive('btn2')\" (click)=\"onClickItem($event)\" value=\"1\" class=\"indecator-2\"></button>\r\n    <button [class.active]=\"isActive('btn2')\" (click)=\"setActive('btn3')\" (click)=\"onClickItem($event)\" value=\"2\" class=\"indecator-3\"></button>\r\n    <button [class.active]=\"isActive('btn3')\" (click)=\"setActive('btn4')\" (click)=\"onClickItem($event)\" value=\"3\" class=\"indecator-4\"></button>\r\n    <button [class.active]=\"isActive('btn4')\" (click)=\"setActive('btn5')\" (click)=\"onClickItem($event)\" value=\"4\" class=\"indecator-5\"></button>\r\n</div>"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        var _this = this;
        this.counter = 0;
        this.setActive = function (buttonName) {
            this.activeButton = buttonName;
        };
        this.isActive = function (buttonName) {
            return this.activeButton === buttonName;
        };
        ;
        setInterval(function () {
            _this.onClickInc();
        }, 3000);
    }
    CarouselComponent.prototype.onClickInc = function () {
        var total = this.images.length - 1;
        this.counter = this.counter < total ? this.counter + 1 : 0;
        this.setActive("btn" + this.counter);
    };
    CarouselComponent.prototype.onClickDec = function () {
        var total = this.images.length - 1;
        this.counter = this.counter > 0 ? this.counter - 1 : total;
        this.setActive("btn" + this.counter);
    };
    CarouselComponent.prototype.onClickItem = function (event) {
        this.counter = Number(event.explicitOriginalTarget.value);
        this.setActive("btn" + this.counter);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "images", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('imgState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.module.ts":
/*!*********************************************!*\
  !*** ./src/app/carousel/carousel.module.ts ***!
  \*********************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.component */ "./src/app/carousel/carousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
            exports: [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]],
            declarations: [_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]]
        })
    ], CarouselModule);
    return CarouselModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerItem {\r\n    border-right: 2px solid;\r\n    padding: 0 10px;\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n.footerElement {\r\n    text-align: center;\r\n    background-color: #96984f;\r\n    height: 100px;\r\n}\r\n\r\n.footerItem:last-child {\r\n    border: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footerElement d-flex justify-content-center\">\r\n    <div class=\" d-flex align-items-center\">\r\n        <a href=\"#\" class=\"footerItem\">Ліцензія МОЗ України</a>\r\n        <a href=\"#\" class=\"footerItem\">Наші партнери</a>\r\n        <a href=\"#\" class=\"footerItem\">Контакти</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    text-align: center;\r\n    width: 40%;\r\n}\r\n\r\n.logoName {\r\n    font-size: 1.5em;\r\n    padding-top: 0;\r\n    /*color: black;*/\r\n    background: -webkit-linear-gradient(white, black);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-weight: bold;\r\n}\r\n\r\n.logoImg {\r\n    width: 100%;\r\n}\r\n\r\n.menuItem {\r\n    padding: 0 10px;\r\n}\r\n\r\n.menuItem a {\r\n    color: black;\r\n}\r\n\r\n.menuItem:hover a, .loginMenuItem:hover {\r\n    color: #96984f;\r\n}\r\n\r\n.loginMenuElement {\r\n    text-align: center;\r\n}\r\n\r\n.loginMenuItem {\r\n    color: black;\r\n    padding: 0 10px;\r\n    text-decoration: none;\r\n}\r\n\r\n.loginMenuItem:first-child {\r\n    border-right: 2px solid #96984f;\r\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex align-items-center\">\r\n    <div class=\"col-md-2 col-lg-2 d-flex flex-column align-items-center\">\r\n        <a class=\"navbar-brand logo\" href=\"#\">\r\n            <img [src]=\"logo\" class=\"logoImg\">\r\n        </a>\r\n        <a href=\"\" class=\"navbar-brand logoName\">{{clinicName}}</a>\r\n    </div>\r\n    <div class=\"col-md-8 col-lg-8\">\r\n        <nav class=\"navbar navbar-expand-lg menu\">\r\n\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                <ul class=\"navbar-nav mx-auto\">\r\n                    <li class=\"nav-item active menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">Головна<span class=\"sr-only\">(current)</span></a>\r\n                    </li>\r\n                    <li class=\"nav-item menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">Про нас</a>\r\n                    </li>\r\n                    <li class=\"nav-item menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">Послуги та ціни</a>\r\n                    </li>\r\n                    <li class=\"nav-item menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">Наші лікарі</a>\r\n                    </li>\r\n                    <li class=\"nav-item menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">Контакти</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n    <div class=\" col-md-2 col-lg-2\">\r\n        <div class=\"loginMenuElement\">\r\n            <a href=\"#\" class=\"loginMenuItem\">Увійти</a>\r\n            <a href=\"#\" class=\"loginMenuItem\">Зареєструватися</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.logo = '/assets/img/logo.png';
        this.clinicName = 'BabyMed';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cook\Documents\GitHub\group-project\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map