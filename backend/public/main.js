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

module.exports = "\n#main {\n    position: relative;\n    margin: 10px auto;\n    box-sizing: border-box;\n}\n\n.carousel__container{\n    position: relative;\n    width: 90%;\n    height: 900px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <header>\n        <app-nav-bar [menuItems]=\"menuItems\"></app-nav-bar>\n    </header>\n    <div id=\"main\">\n        <app-appointment-window></app-appointment-window>\n        <div class=\"carousel__container\">\n            <app-carousel [images]=\"images\"></app-carousel>\n        </div>\n    </div>\n\n    <div class=\"itemGridBlock\">\n            <app-cards-container></app-cards-container>\n        </div>\n    <footer>\n        <app-footer></app-footer>\n    </footer>\n</div>\n"

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
/* harmony import */ var _card_components_cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-components/cards-container/cards-container.component */ "./src/app/card-components/cards-container/cards-container.component.ts");
/* harmony import */ var _card_components_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card-components/card/card.component */ "./src/app/card-components/card/card.component.ts");
/* harmony import */ var _card_components_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card-components/link-button/link-button.component */ "./src/app/card-components/link-button/link-button.component.ts");
/* harmony import */ var _card_components_card_on_hover_link_button_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-components/card/on-hover-link-button.directive */ "./src/app/card-components/card/on-hover-link-button.directive.ts");
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
                _card_components_cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_9__["CardsContainerComponent"],
                _card_components_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _card_components_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_11__["LinkButtonComponent"],
                _card_components_card_on_hover_link_button_directive__WEBPACK_IMPORTED_MODULE_12__["OnHoverLinkButtonDirective"]
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

module.exports = ".modalBtn {\n    border-radius: 50%;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    background: -webkit-linear-gradient(#fbc315, #fded1a);\n    color: white;\n}\n\n.modalBtn:hover {\n    background: -webkit-linear-gradient(#fded1a, #fffea5);\n}\n"

/***/ }),

/***/ "./src/app/appointment-window/appointment-window.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/appointment-window/appointment-window.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Запис на прийом</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"></div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Записатися</button>\n    </div>\n</ng-template>\n\n<button class=\"btn  modalBtn\" (click)=\"open(content)\">&#43;</button>\n\n"

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

/***/ "./src/app/card-components/card/card.component.html":
/*!**********************************************************!*\
  !*** ./src/app/card-components/card/card.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@show]=\"isVisible ? 'visible' : 'hidden'\" class=\"card\">\r\n    <a class=\"card__link\" href=\"/\">\r\n        <div class=\"card__image-container\">\r\n            <img class=\"card__image\" src=\"{{card.url}}\" alt=\"clinic\">\r\n            <div class=\"card__button\" appOnHover>\r\n                <app-link-button [link]=\"card.link\"></app-link-button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card__subscribe\">\r\n            <span>{{card.subscribe}}</span>\r\n        </div>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "./src/app/card-components/card/card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/card-components/card/card.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 50%;\n  margin-bottom: 50px; }\n\n* {\n  box-sizing: border-box; }\n\n.card {\n  width: 80%;\n  height: 320px;\n  margin: auto;\n  color: #fafafa;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2); }\n\n.card .card__link {\n    text-decoration: none;\n    color: white; }\n\n.card__image-container {\n  width: 100%;\n  height: 320px; }\n\n.card__image-container .card__image {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n\n.card__button {\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  background: rgba(54, 54, 54, 0.6);\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2); }\n\n.card__subscribe {\n  padding: 10px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  height: 70px;\n  background: rgba(54, 54, 54, 0.75);\n  box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.3), 0 -6px 20px 0 rgba(0, 0, 0, 0.2); }\n"

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


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.isVisible = false;
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.ngAfterViewChecked = function () {
        this.show();
    };
    CardComponent.prototype.show = function () {
        this.isVisible = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-component',
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('show', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        width: '30%',
                        right: '0%',
                        top: '0%',
                        transform: 'rotateX(90deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 1,
                        width: '80%',
                        right: '0%',
                        top: '0%',
                        transform: 'rotateX(0deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s')])
                ])
            ],
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card-components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card-components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card-components/card/on-hover-link-button.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/card-components/card/on-hover-link-button.directive.ts ***!
  \************************************************************************/
/*! exports provided: OnHoverLinkButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnHoverLinkButtonDirective", function() { return OnHoverLinkButtonDirective; });
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

var OnHoverLinkButtonDirective = /** @class */ (function () {
    function OnHoverLinkButtonDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    OnHoverLinkButtonDirective.prototype.onMouseEnter = function () {
        this.setButtonBg('rgba(54, 54, 54, 0.75)', '0.3s all');
    };
    OnHoverLinkButtonDirective.prototype.onMouseLeave = function () {
        this.setButtonBg('rgba(54, 54, 54, 0.6)', '0.2s all');
    };
    OnHoverLinkButtonDirective.prototype.setButtonBg = function (bgSet, effect) {
        this.renderer.setStyle(this.element.nativeElement, 'background', bgSet);
        this.renderer.setStyle(this.element.nativeElement, 'transition', effect);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OnHoverLinkButtonDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OnHoverLinkButtonDirective.prototype, "onMouseLeave", null);
    OnHoverLinkButtonDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appOnHover]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], OnHoverLinkButtonDirective);
    return OnHoverLinkButtonDirective;
}());



/***/ }),

/***/ "./src/app/card-components/cards-container/cards-container.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/card-components/cards-container/cards-container.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards-container\">\r\n\r\n  <app-card-component *ngFor=\"let card of cards\" [card]=\"card\"></app-card-component>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/card-components/cards-container/cards-container.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/card-components/cards-container/cards-container.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-container {\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  position: relative;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  box-sizing: border-box; }\n"

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
    }
    CardsContainerComponent.prototype.ngOnInit = function () {
        this.cards = this.cardsDataService.getData();
    };
    CardsContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards-container',
            template: __webpack_require__(/*! ./cards-container.component.html */ "./src/app/card-components/cards-container/cards-container.component.html"),
            styles: [__webpack_require__(/*! ./cards-container.component.scss */ "./src/app/card-components/cards-container/cards-container.component.scss")],
            providers: [_cards_data_service__WEBPACK_IMPORTED_MODULE_1__["CardsDataService"]]
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
            { url: '../../../assets/img/cards/call-doctor.jpg', link: {
                    name: 'Виклик лікаря додому',
                    route: '/some-rote-link'
                },
                subscribe: 'Якісна медична допомога у доступна з максимальною зручністю.'
            },
            { url: '../../../assets/img/cards/review.jpg', link: {
                    name: 'Комплексні обстеження',
                    route: '/some-rote-link'
                },
                subscribe: 'Консультації та обстеження у спеціалістів дозволяють отримати найдетальнішу інформацію про стан вашої дитини.'
            },
            { url: '../../../assets/img/cards/contact.jpg', link: {
                    name: 'Контакти',
                    route: '/some-rote-link'
                },
                subscribe: 'Ми на зв’язку цілодобово.'
            },
            { url: '../../../assets/img/cards/services.jpg', link: {
                    name: 'Послуги',
                    route: '/some-rote-link',
                },
                subscribe: 'Широкий вибір медичних послуг для забезпечення міцного здоров’я ваших дітей.'
            },
            { url: '../../../assets/img/cards/patients.jpg', link: {
                    name: 'Пацієнтам',
                    route: '/some-rote-link'
                },
                subscribe: 'Ми піклуємося про ваших дітей.'
            },
            { url: '../../../assets/img/cards/doctors.jpg', link: {
                    name: 'Наші лікарі',
                    route: '/some-rote-link'
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

/***/ "./src/app/card-components/link-button/link-button.component.html":
/*!************************************************************************!*\
  !*** ./src/app/card-components/link-button/link-button.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <a href=\"/\">{{link.name}}</a>\r\n</div>"

/***/ }),

/***/ "./src/app/card-components/link-button/link-button.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/card-components/link-button/link-button.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  padding: 0; }\n  .wrapper a {\n    padding: 5px 0;\n    display: block;\n    width: 100%;\n    height: auto;\n    color: white;\n    text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/card-components/link-button/link-button.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/card-components/link-button/link-button.component.ts ***!
  \**********************************************************************/
/*! exports provided: LinkButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButtonComponent", function() { return LinkButtonComponent; });
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

var LinkButtonComponent = /** @class */ (function () {
    function LinkButtonComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LinkButtonComponent.prototype, "link", void 0);
    LinkButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-link-button',
            template: __webpack_require__(/*! ./link-button.component.html */ "./src/app/card-components/link-button/link-button.component.html"),
            styles: [__webpack_require__(/*! ./link-button.component.scss */ "./src/app/card-components/link-button/link-button.component.scss")]
        })
    ], LinkButtonComponent);
    return LinkButtonComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tmb{\n    position: absolute;\n    left: 180px;\n}\n.tmb img{\n    position: absolute;\n}\n.carousel-btn{\n    cursor: pointer;\n}\n.btn-change-dec{\n    position: absolute;\n    top: 400px;\n    left: 106px;\n    height: 115px;\n    width: 60px;\n    font-size: 75px;\n}\n.btn-change-inc{\n    position: absolute;\n    top: 400px;\n    height: 115px;\n    width: 60px;\n    font-size: 75px;\n    left: 1400px;\n}\n.indecator-1{\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    left: 670px;\n    background-color: initial;;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    top: 750px;\n}\n.indecator-2{\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    left: 700px;\n    background-color: initial;;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    top: 750px;\n}\n.indecator-3{\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    left: 730px;\n    background-color: initial;;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    top: 750px;\n}\n.indecator-4{\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    left: 760px;\n    background-color: initial;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    top: 750px;\n}\n.indecator-5{\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    left: 790px;\n    background-color: initial;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    top: 750px;\n}\n.indecators button:hover,\n.active{\n    background-color: white;\n}\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tmb\">\n    <a href=\"#\">\n        <img [@imgState]=\"idi === counter ? 'active': 'inactive'\" *ngFor=\"let img of images;let idi=index\" [src]=\"img\" />\n    </a>\n</div>\n<div class=\"carousel-btn\">\n    <span class=\"btn-change-inc\" (click)=\"onClickInc()\">&#x3e;</span>\n    <span class=\"btn-change-dec\" (click)=\"onClickDec()\">&#x3c;</span>\n</div>\n<div class=\"indecators\">\n    <button [class.active]=\"isActive('btn0')\" (click)=\"setActive('btn1')\" (click)=\"onClickItem($event)\" value=\"0\" class=\"indecator-1\"></button>\n    <button [class.active]=\"isActive('btn1')\" (click)=\"setActive('btn2')\" (click)=\"onClickItem($event)\" value=\"1\" class=\"indecator-2\"></button>\n    <button [class.active]=\"isActive('btn2')\" (click)=\"setActive('btn3')\" (click)=\"onClickItem($event)\" value=\"2\" class=\"indecator-3\"></button>\n    <button [class.active]=\"isActive('btn3')\" (click)=\"setActive('btn4')\" (click)=\"onClickItem($event)\" value=\"3\" class=\"indecator-4\"></button>\n    <button [class.active]=\"isActive('btn4')\" (click)=\"setActive('btn5')\" (click)=\"onClickItem($event)\" value=\"4\" class=\"indecator-5\"></button>\n</div>"

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
        this.activeButton = "";
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
    CarouselComponent.prototype.setActive = function (buttonName) {
        this.activeButton = buttonName;
    };
    CarouselComponent.prototype.isActive = function (buttonName) {
        return this.activeButton === buttonName;
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

module.exports = ".footerItem {\n    border-right: 2px solid;\n    padding: 0 10px;\n    color: black;\n    text-decoration: none;\n}\n\n.footerElement {\n    text-align: center;\n    background-color: #96984f;\n    height: 100px;\n}\n\n.footerItem:last-child {\n    border: none;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footerElement d-flex justify-content-center\">\n    <div class=\" d-flex align-items-center\">\n        <a href=\"#\" class=\"footerItem\">Ліцензія МОЗ України</a>\n        <a href=\"#\" class=\"footerItem\">Наші партнери</a>\n        <a href=\"#\" class=\"footerItem\">Контакти</a>\n    </div>\n</div>\n"

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

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n    text-align: center;\n    width: 40%;\n}\n\n.logoName {\n    font-size: 1.5em;\n    padding-top: 0;\n    /*color: black;*/\n    background: -webkit-linear-gradient(white, black);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: bold;\n}\n\n.logoImg {\n    width: 100%;\n}\n\n.menuItem {\n    padding: 0 10px;\n}\n\n.menuItem a {\n    color: black;\n}\n\n.menuItem:hover a, .loginMenuItem:hover {\n    color: #96984f;\n}\n\n.loginMenuElement {\n    text-align: center;\n}\n\n.loginMenuItem {\n    color: black;\n    padding: 0 10px;\n    text-decoration: none;\n}\n\n.loginMenuItem:first-child {\n    border-right: 2px solid #96984f;\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex align-items-center\">\n    <div class=\"col-md-2 col-lg-2 d-flex flex-column align-items-center\">\n        <a class=\"navbar-brand logo\" href=\"#\">\n            <img [src]=\"menuItems.logo\" class=\"logoImg\">\n        </a>\n        <a href=\"\" class=\"navbar-brand logoName\">{{menuItems.clinicName}}</a>\n    </div>\n    <div class=\"col-md-8 col-lg-8\">\n        <nav class=\"navbar navbar-expand-lg menu\">\n\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav mx-auto\">\n                    <li class=\"nav-item active menuItem\">\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.main}}<span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"nav-item menuItem\">\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.about}}</a>\n                    </li>\n                    <li class=\"nav-item menuItem\">\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.services}}</a>\n                    </li>\n                    <li class=\"nav-item menuItem\">\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.doctors}}</a>\n                    </li>\n                    <li class=\"nav-item menuItem\">\n                        <a class=\"nav-link\" href=\"#\">{{menuItems.contacts}}</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n    <div class=\" col-md-2 col-lg-2\">\n        <div class=\"loginMenuElement\">\n            <a href=\"#\" class=\"loginMenuItem\">{{menuItems.signIn}}</a>\n            <a href=\"#\" class=\"loginMenuItem\">{{menuItems.logIn}}</a>\n        </div>\n    </div>\n</div>\n"

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

module.exports = __webpack_require__(/*! C:\Users\Andrew\Documents\group-project\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map