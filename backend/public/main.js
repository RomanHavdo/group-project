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

module.exports = "\r\n#main {\r\n    position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <header>\r\n        <app-nav-bar [menuItems]=\"menuItems\"></app-nav-bar>\r\n    </header>\r\n    <div id=\"main\">\r\n        <app-appointment-window></app-appointment-window>\r\n        <app-carousel [images]=\"images\"></app-carousel>\r\n        <app-cards-container></app-cards-container>\r\n    </div>\r\n    <app-cards-container></app-cards-container>\r\n    <footer>\r\n        <app-footer></app-footer>\r\n    </footer>\r\n</div>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.images = {};
        this.menuItems = {
            logo: '/assets/img/logo.png',
            clinicName: 'BabyMed',
            main: 'Головна',
            about: 'Про нас',
            services: 'Послуги та ціни',
            doctors: 'Наші лікарі',
            contacts: 'Контакти',
            signIn: 'Увійти',
            logIn: 'Зареєструватися'
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getCarouselData().subscribe(function (data) { return _this.images = data; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _appointment_window_appointment_window_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appointment-window/appointment-window.component */ "./src/app/appointment-window/appointment-window.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel/carousel.module */ "./src/app/carousel/carousel.module.ts");
/* harmony import */ var _card_components_cards_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-components/cards-component.module */ "./src/app/card-components/cards-component.module.ts");
// TODO: use ProdMod after dev stage, uncomment two lines of code below
// import { enableProdMode} from '@angular/core';
// enableProdMode();
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
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _appointment_window_appointment_window_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentWindowComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _carousel_carousel_module__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _card_components_cards_component_module__WEBPACK_IMPORTED_MODULE_10__["CardsComponentModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

/***/ "./src/app/card-components/card/card-hover.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/card-components/card/card-hover.directive.ts ***!
  \**************************************************************/
/*! exports provided: OnHoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnHoverDirective", function() { return OnHoverDirective; });
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

var OnHoverDirective = /** @class */ (function () {
    function OnHoverDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    OnHoverDirective.prototype.onMouseEnter = function () {
        this.setScale('scale(1.05, 1.05)', '0.3s all');
    };
    OnHoverDirective.prototype.onMouseLeave = function () {
        this.setScale('scale(1, 1)', '0.2s all');
    };
    OnHoverDirective.prototype.setScale = function (val, duration) {
        this.renderer.setStyle(this.element.nativeElement, 'transform', val);
        this.renderer.setStyle(this.element.nativeElement, 'transition', duration);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OnHoverDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OnHoverDirective.prototype, "onMouseLeave", null);
    OnHoverDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appOnHover]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], OnHoverDirective);
    return OnHoverDirective;
}());



/***/ }),

/***/ "./src/app/card-components/card/card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/card-components/card/card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\" appOnHover>\r\n    <a class=\"card__link\" href=\"/\">\r\n        <div class=\"card__image-container\">\r\n            <img class=\"card__image\" src=\"{{card.imgUrl}}\" alt=\"clinic\">\r\n            <div class=\"card__button\">{{card.link.name}}</div>\r\n        </div>\r\n        <div class=\"card__subscribe\">\r\n            <span>{{card.subscribe}}</span>\r\n        </div>\r\n    </a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/card-components/card/card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/card-components/card/card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 20px 0; }\n\n* {\n  box-sizing: border-box; }\n\n.card {\n  width: 90%;\n  margin: auto;\n  color: #fafafa;\n  position: relative;\n  border-radius: 0;\n  overflow: hidden;\n  padding: 0;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2); }\n\n.card .card__link {\n    text-decoration: none;\n    color: white; }\n\n.card__image-container {\n  width: 100%;\n  height: 360px; }\n\n.card__image-container .card__image {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.card__button {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  background: rgba(54, 54, 54, 0.6);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2); }\n\n.card__subscribe {\n  padding: 10px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 70px;\n  background: rgba(54, 54, 54, 0.75);\n  box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.3), 0 -6px 20px 0 rgba(0, 0, 0, 0.2); }\n"

/***/ }),

/***/ "./src/app/card-components/card/card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/card-components/card/card.component.ts ***!
  \********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
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

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-component',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card-components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card-components/card/card.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card-components/cards-component.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/card-components/cards-component.module.ts ***!
  \***********************************************************/
/*! exports provided: CardsComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponentModule", function() { return CardsComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _cards_container_cards_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards-container/cards-data.service */ "./src/app/card-components/cards-container/cards-data.service.ts");
/* harmony import */ var _card_card_hover_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card-hover.directive */ "./src/app/card-components/card/card-hover.directive.ts");
/* harmony import */ var _cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards-container/cards-container.component */ "./src/app/card-components/cards-container/cards-container.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card-components/card/card.component.ts");
/* harmony import */ var _left_cards_column_left_cards_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left-cards-column/left-cards-column.component */ "./src/app/card-components/left-cards-column/left-cards-column.component.ts");
/* harmony import */ var _right_cards_column_right_cards_column_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./right-cards-column/right-cards-column.component */ "./src/app/card-components/right-cards-column/right-cards-column.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CardsComponentModule = /** @class */ (function () {
    function CardsComponentModule() {
    }
    CardsComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_4__["CardsContainerComponent"],
                _left_cards_column_left_cards_column_component__WEBPACK_IMPORTED_MODULE_6__["LeftCardsColumnComponent"],
                _right_cards_column_right_cards_column_component__WEBPACK_IMPORTED_MODULE_7__["RightCardsColumnComponent"],
                _card_card_hover_directive__WEBPACK_IMPORTED_MODULE_3__["OnHoverDirective"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
            providers: [_cards_container_cards_data_service__WEBPACK_IMPORTED_MODULE_2__["CardsDataService"]],
            exports: [_cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_4__["CardsContainerComponent"]]
        })
    ], CardsComponentModule);
    return CardsComponentModule;
}());



/***/ }),

/***/ "./src/app/card-components/cards-container/cards-container.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/card-components/cards-container/cards-container.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards-container\">\r\n  <app-left-cards-column [cards] = \"leftCardsColumn\"></app-left-cards-column>\r\n  <app-right-cards-column [cards] = \"rightCardsColumn\"></app-right-cards-column>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/card-components/cards-container/cards-container.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/card-components/cards-container/cards-container.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-container {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  position: relative;\n  flex-flow: row nowrap;\n  justify-content: space-evenly;\n  box-sizing: border-box;\n  margin-bottom: 50px;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/card-components/cards-container/cards-container.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/card-components/cards-container/cards-container.component.ts ***!
  \******************************************************************************/
/*! exports provided: CardsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsContainerComponent", function() { return CardsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cards_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards-data.service */ "./src/app/card-components/cards-container/cards-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsContainerComponent = /** @class */ (function () {
    function CardsContainerComponent(cardsDataService) {
        this.cardsDataService = cardsDataService;
        this.cards = [];
        this.leftCardsColumn = [];
        this.rightCardsColumn = [];
    }
    CardsContainerComponent.prototype.ngOnInit = function () {
        this.cards = this.cardsDataService.getData();
        this.leftCardsColumn = this.cards.slice(0, this.cards.length / 2);
        this.rightCardsColumn = this.cards.slice(this.cards.length / 2);
    };
    CardsContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards-container',
            template: __webpack_require__(/*! ./cards-container.component.html */ "./src/app/card-components/cards-container/cards-container.component.html"),
            styles: [__webpack_require__(/*! ./cards-container.component.scss */ "./src/app/card-components/cards-container/cards-container.component.scss")],
            providers: [_cards_data_service__WEBPACK_IMPORTED_MODULE_1__["CardsDataService"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_cards_data_service__WEBPACK_IMPORTED_MODULE_1__["CardsDataService"]])
    ], CardsContainerComponent);
    return CardsContainerComponent;
}());



/***/ }),

/***/ "./src/app/card-components/cards-container/cards-data.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/card-components/cards-container/cards-data.service.ts ***!
  \***********************************************************************/
/*! exports provided: CardsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsDataService", function() { return CardsDataService; });
var CardsDataService = /** @class */ (function () {
    function CardsDataService() {
        this.cards = [
            { imgUrl: '../../../assets/img/cards/call-doctor.jpg', link: {
                    name: 'Виклик лікаря додому',
                    route: '/link-from-router'
                },
                subscribe: 'Якісна медична допомога у доступна з максимальною зручністю.'
            },
            { imgUrl: '../../../assets/img/cards/review.jpg', link: {
                    name: 'Комплексні обстеження',
                    route: '/link-from-router'
                },
                subscribe: 'Консультації та обстеження у спеціалістів дозволяють отримати найдетальнішу інформацію про стан вашої дитини.'
            },
            { imgUrl: '../../../assets/img/cards/contact.jpg', link: {
                    name: 'Контакти',
                    route: '/link-from-router'
                },
                subscribe: 'Ми на зв’язку цілодобово.'
            },
            { imgUrl: '../../../assets/img/cards/services.jpg', link: {
                    name: 'Послуги',
                    route: '/link-from-router'
                },
                subscribe: 'Широкий вибір медичних послуг для забезпечення міцного здоров’я ваших дітей.'
            },
            { imgUrl: '../../../assets/img/cards/patients.jpg', link: {
                    name: 'Пацієнтам',
                    route: '/link-from-router'
                },
                subscribe: 'Ми піклуємося про ваших дітей.'
            },
            { imgUrl: '../../../assets/img/cards/doctors.jpg', link: {
                    name: 'Наші лікарі',
                    route: '/link-from-router'
                },
                subscribe: 'Висококваліфіковані різнопрофільні спеціалісти завжди готові допомогти вашим дітям.'
            }
        ];
    }
    CardsDataService.prototype.getData = function () {
        return this.cards;
    };
    return CardsDataService;
}());



/***/ }),

/***/ "./src/app/card-components/left-cards-column/left-cards-column.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/card-components/left-cards-column/left-cards-column.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-cards-column\">\r\n\r\n    <app-card-component [@appearLeft]=\"appear ? 'visible' : 'hidden'\" *ngFor = \"let card of cards\" [card]=\"card\"></app-card-component>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/card-components/left-cards-column/left-cards-column.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/card-components/left-cards-column/left-cards-column.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 50%; }\n\n.left-cards-column {\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/card-components/left-cards-column/left-cards-column.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/card-components/left-cards-column/left-cards-column.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LeftCardsColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftCardsColumnComponent", function() { return LeftCardsColumnComponent; });
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


var LeftCardsColumnComponent = /** @class */ (function () {
    function LeftCardsColumnComponent(cd) {
        this.cd = cd;
        this.appear = false;
    }
    LeftCardsColumnComponent.prototype.ngOnInit = function () { };
    LeftCardsColumnComponent.prototype.ngAfterViewChecked = function () {
        this.show();
        this.cd.detectChanges();
    };
    LeftCardsColumnComponent.prototype.show = function () {
        this.appear = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LeftCardsColumnComponent.prototype, "cards", void 0);
    LeftCardsColumnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-cards-column',
            template: __webpack_require__(/*! ./left-cards-column.component.html */ "./src/app/card-components/left-cards-column/left-cards-column.component.html"),
            styles: [__webpack_require__(/*! ./left-cards-column.component.scss */ "./src/app/card-components/left-cards-column/left-cards-column.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('appearLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s 100ms ease-out')])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LeftCardsColumnComponent);
    return LeftCardsColumnComponent;
}());



/***/ }),

/***/ "./src/app/card-components/right-cards-column/right-cards-column.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/card-components/right-cards-column/right-cards-column.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-cards-column\">\r\n\r\n    <app-card-component  [@appearLeft]=\"appear ? 'visible' : 'hidden'\" *ngFor = \"let card of cards\" [card]=\"card\"></app-card-component>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/card-components/right-cards-column/right-cards-column.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/card-components/right-cards-column/right-cards-column.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 50%; }\n\n.right-cards-column {\n  box-sizing: border-box;\n  width: 100%;\n  display: block;\n  display: flex;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/card-components/right-cards-column/right-cards-column.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/card-components/right-cards-column/right-cards-column.component.ts ***!
  \************************************************************************************/
/*! exports provided: RightCardsColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightCardsColumnComponent", function() { return RightCardsColumnComponent; });
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


var RightCardsColumnComponent = /** @class */ (function () {
    function RightCardsColumnComponent(cd) {
        this.cd = cd;
        this.appear = false;
    }
    RightCardsColumnComponent.prototype.ngOnInit = function () { };
    RightCardsColumnComponent.prototype.ngAfterViewChecked = function () {
        this.show();
        this.cd.detectChanges();
    };
    RightCardsColumnComponent.prototype.show = function () {
        this.appear = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RightCardsColumnComponent.prototype, "cards", void 0);
    RightCardsColumnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-cards-column',
            template: __webpack_require__(/*! ./right-cards-column.component.html */ "./src/app/card-components/right-cards-column/right-cards-column.component.html"),
            styles: [__webpack_require__(/*! ./right-cards-column.component.scss */ "./src/app/card-components/right-cards-column/right-cards-column.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('appearLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s 300ms ease-out')])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RightCardsColumnComponent);
    return RightCardsColumnComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tmb{\r\n    height: 650px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.tmb img{\r\n    position: absolute;\r\n    width: 95%;\r\n    left: 70px;\r\n    height: 650px;\r\n}\r\n.tmb h3{\r\n    position: absolute;\r\n    top: 29%;\r\n    left: 10%;\r\n    width: 110%;\r\n    text-shadow: 5px 5px 1px rgba(28,110,164,0.57);\r\n}\r\n.tmb p{\r\n    position: absolute;\r\n    top: 31%;\r\n    left: 10%;\r\n    width: 110%;\r\n    text-shadow: 3px 5px 6px #6C9, -6px -7px 6px #D9FFA7;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: rgb(120, 107, 192);\r\n}\r\n.carousel-btn{\r\n    cursor: pointer;\r\n}\r\n.btn-change-dec{\r\n    position: absolute;\r\n    top:0;\r\n    padding-top: 250px;\r\n    left: 69px;\r\n    height: 650px;\r\n    width: 60px;\r\n    font-size: 75px;\r\n    background-color: white;\r\n    opacity: 0.4;\r\n}\r\n.btn-change-inc{\r\n    position: absolute;\r\n    top:0;\r\n    padding-top: 250px;\r\n    height: 650px;\r\n    width: 60px;\r\n    font-size: 75px;\r\n    right: 6px;\r\n    background-color: white;\r\n    opacity: 0.4;\r\n}\r\n.indecator-1{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 45%;\r\n    background-color: initial;;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 600px;\r\n}\r\n.indecator-2{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 47%;\r\n    background-color: initial;;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 600px;\r\n}\r\n.indecator-3{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 49%;\r\n    background-color: initial;;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 600px;\r\n}\r\n.indecator-4{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 51%;\r\n    background-color: initial;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 600px;\r\n}\r\n.indecator-5{\r\n    position: absolute;\r\n    height: 20px;\r\n    width: 20px;\r\n    left: 53%;\r\n    background-color: initial;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    top: 600px;\r\n}\r\n.indecators button:hover,\r\n.active{\r\n    background-color: white;\r\n}\r\n.span-btn-none{\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmb\">\r\n    <a href=\"#\">\r\n        <img [@imgState]=\"idi === counter ? 'active': getState()\" *ngFor=\"let img of images.pictures;let idi=index\" [src]=\"img\"(mouseenter)=\"mouseEnterSpan()\" (mouseleave)=\"mouseLeaveSpan()\" />\r\n        <h3 [@imgState]=\"idi === counterText ? 'active': getState()\" *ngFor=\"let text of images.textH1;let idi=index\">{{text}}</h3>\r\n        <p  [@imgState]=\"idi === counterInfo ? 'active': getState()\" *ngFor=\"let textInfo of images.textInfo;let idi=index\">{{textInfo}}</p>\r\n    </a>\r\n</div>\r\n<div id=\"carousel-btn\" class=\"carousel-btn span-btn-none\">\r\n    <span  class=\"btn-change-inc\" (mouseenter)=\"mouseEnterSpan()\" (mouseleave)=\"mouseLeaveSpan()\" (click)=\"onClickInc()\">&#x3e;</span>\r\n    <span class=\"btn-change-dec\" (mouseenter)=\"mouseEnterSpan()\" (mouseleave)=\"mouseLeaveSpan()\" (click)=\"onClickDec()\">&#x3c;</span>\r\n</div>\r\n<div class=\"indecators\">\r\n    <button [class.active]=\"isActive('btn0')\" (click)=\"setActive('btn1')\" (click)=\"onClickItem($event)\" value=\"0\" class=\"indecator-1\"></button>\r\n    <button [class.active]=\"isActive('btn1')\" (click)=\"setActive('btn2')\" (click)=\"onClickItem($event)\" value=\"1\" class=\"indecator-2\"></button>\r\n    <button [class.active]=\"isActive('btn2')\" (click)=\"setActive('btn3')\" (click)=\"onClickItem($event)\" value=\"2\" class=\"indecator-3\"></button>\r\n    <button [class.active]=\"isActive('btn3')\" (click)=\"setActive('btn4')\" (click)=\"onClickItem($event)\" value=\"3\" class=\"indecator-4\"></button>\r\n    <button [class.active]=\"isActive('btn4')\" (click)=\"setActive('btn5')\" (click)=\"onClickItem($event)\" value=\"4\" class=\"indecator-5\"></button>\r\n</div>"

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
        this.counterText = 0;
        this.counterInfo = 0;
        this.activeButton = "";
        this.stan = 'inactive';
        setInterval(function () {
            _this.onClickInc();
        }, 3000);
    }
    CarouselComponent.prototype.getState = function () {
        return this.stan;
    };
    CarouselComponent.prototype.mouseEnterSpan = function () {
        document.getElementById('carousel-btn').classList.remove('span-btn-none');
    };
    CarouselComponent.prototype.mouseLeaveSpan = function () {
        document.getElementById('carousel-btn').classList.add('span-btn-none');
    };
    CarouselComponent.prototype.onClickInc = function () {
        this.stan = 'inactive';
        var total = this.images.pictures.length - 1;
        var totalText = this.images.textH1.length - 1;
        var totalInfo = this.images.textInfo.length - 1;
        this.counter = this.counter < total ? this.counter + 1 : 0;
        this.counterText = this.counterText < totalText ? this.counterText + 1 : 0;
        this.counterInfo = this.counterInfo < totalInfo ? this.counterInfo + 1 : 0;
        this.setActive("btn" + this.counter);
    };
    CarouselComponent.prototype.onClickDec = function () {
        this.stan = 'inactive-left';
        var total = this.images.pictures.length - 1;
        var totalText = this.images.textH1.length - 1;
        var totalInfo = this.images.textInfo.length - 1;
        this.counterInfo = this.counterInfo > 0 ? this.counterInfo - 1 : totalInfo;
        this.counterText = this.counterText > 0 ? this.counterText - 1 : totalText;
        this.counter = this.counter > 0 ? this.counter - 1 : total;
        this.setActive("btn" + this.counter);
    };
    CarouselComponent.prototype.onClickItem = function (event) {
        this.counter = Number(event.explicitOriginalTarget.value);
        this.counterText = Number(event.explicitOriginalTarget.value);
        this.counterInfo = Number(event.explicitOriginalTarget.value);
        this.setActive("btn" + this.counter);
    };
    CarouselComponent.prototype.setActive = function (buttonName) {
        this.activeButton = buttonName;
    };
    CarouselComponent.prototype.isActive = function (buttonName) {
        return this.activeButton === buttonName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "images", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('imgState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(110%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive-left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(-110%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(0%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-110%)' }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive-left => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive-left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(110%)' }))),
                ]),
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

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getCarouselData = function () {
        return this.http.get('./assets/db/carousel.json');
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = "<div class=\"row d-flex align-items-center\">\r\n    <div class=\"col-md-2 col-lg-2 d-flex flex-column align-items-center\">\r\n        <a class=\"navbar-brand logo\" href=\"#\">\r\n            <img [src]=\"menuItems.logo\" class=\"logoImg\">\r\n        </a>\r\n        <a href=\"\" class=\"navbar-brand logoName\">{{menuItems.clinicName}}</a>\r\n    </div>\r\n    <div class=\"col-md-8 col-lg-8\">\r\n        <nav class=\"navbar navbar-expand-lg menu\">\r\n\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                <ul class=\"navbar-nav mx-auto\">\r\n                    <li class=\"nav-item active menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.main}}<span class=\"sr-only\">(current)</span></a>\r\n                    </li>\r\n                    <li class=\"nav-item menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.about}}</a>\r\n                    </li>\r\n                    <li class=\"nav-item menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.services}}</a>\r\n                    </li>\r\n                    <li class=\"nav-item menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.doctors}}</a>\r\n                    </li>\r\n                    <li class=\"nav-item menuItem\">\r\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.contacts}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n    <div class=\" col-md-2 col-lg-2\">\r\n        <div class=\"loginMenuElement\">\r\n            <a href=\"#\" class=\"loginMenuItem\">{{menuItems.signIn}}</a>\r\n            <a href=\"#\" class=\"loginMenuItem\">{{menuItems.logIn}}</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavBarComponent.prototype, "menuItems", void 0);
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