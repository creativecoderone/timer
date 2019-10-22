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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">My time sheet</a>\n</nav>\n<br>\n<div class=\"container\">\n  <app-win></app-win>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'json-prime';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _win_win_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./win/win.component */ "./src/app/win/win.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _win_win_component__WEBPACK_IMPORTED_MODULE_6__["WinComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/win/win.component.html":
/*!****************************************!*\
  !*** ./src/app/win/win.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Time manager</h1>\n\n  <br>\n  <!-- [disabled]=\"time\" -->\n  <img src=\"./assets/start.png\" id=\"start\" alt=\"\" (click)=\"setTime()\">\n\n  <br>\n\n  <h2 class=\"text-center\" *ngIf=\"time\">\n    {{nday| date:'medium'}}\n  </h2>\n  <h4 class=\"text-center\" id=\"ss\"></h4>\n  {{co}}\n  <br>\n  <h6 class=\"text-center\">Started at <span class=\"badge badge-dark\">{{myday|date:'full'}}</span></h6>\n\n</div>\n"

/***/ }),

/***/ "./src/app/win/win.component.scss":
/*!****************************************!*\
  !*** ./src/app/win/win.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  box-shadow: none;\n  outline: none;\n  border: 0px solid white;\n  border-radius: 0px;\n  width: 80%;\n  border-bottom: 1px solid crimson; }\n\ninput:focus {\n  box-shadow: none;\n  outline: none;\n  width: 100%;\n  border-bottom: 1px solid crimson;\n  -webkit-animation: width;\n          animation: width;\n  transition: 1s width; }\n\n.yoyo {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 15px; }\n\n#ss {\n  -webkit-animation-name: colorchange;\n          animation-name: colorchange;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n@-webkit-keyframes colorchange {\n  0% {\n    color: white; }\n  50% {\n    color: lightslategray; }\n  100% {\n    color: black; } }\n\n@keyframes colorchange {\n  0% {\n    color: white; }\n  50% {\n    color: lightslategray; }\n  100% {\n    color: black; } }\n\n#start {\n  width: 150px;\n  cursor: pointer;\n  margin: auto;\n  display: block;\n  border-radius: 0px;\n  padding: 15px;\n  border: 1px solid white; }\n\n#start:hover {\n  transform: scale(0.8);\n  transition-delay: 0.5s;\n  transition-duration: 1s;\n  transition-timing-function: ease-in-out;\n  border: 1px solid violet;\n  transition-property: border 2s;\n  border-radius: 50%;\n  transition-property: border-radius 2s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2luL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcanNvbi1wcmltZS9zcmNcXGFwcFxcd2luXFx3aW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGlDQUFnQyxFQUNqQzs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsWUFBVztFQUNYLGlDQUFnQztFQUNoQyx5QkFBZ0I7VUFBaEIsaUJBQWdCO0VBQ2hCLHFCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxvQ0FBMkI7VUFBM0IsNEJBQTJCO0VBQzNCLDRCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsK0JBQXNCO1VBQXRCLHVCQUFzQjtFQUN0Qiw0Q0FBbUM7VUFBbkMsb0NBQW1DLEVBQ3BDOztBQUNEO0VBQ0U7SUFDRSxhQUFZLEVBQUE7RUFHZDtJQUNFLHNCQUFxQixFQUFBO0VBRXZCO0lBQ0UsYUFBWSxFQUFBLEVBQUE7O0FBVGhCO0VBQ0U7SUFDRSxhQUFZLEVBQUE7RUFHZDtJQUNFLHNCQUFxQixFQUFBO0VBRXZCO0lBQ0UsYUFBWSxFQUFBLEVBQUE7O0FBR2hCO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsd0JBQXVCO0VBQ3ZCLHdDQUF1QztFQUN2Qyx5QkFBd0I7RUFDeEIsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixzQ0FBcUMsRUFDdEMiLCJmaWxlIjoic3JjL2FwcC93aW4vd2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDBweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3JpbXNvbjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3JpbXNvbjtcclxuICBhbmltYXRpb246IHdpZHRoO1xyXG4gIHRyYW5zaXRpb246IDFzIHdpZHRoO1xyXG59XHJcblxyXG4ueW95byB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuI3NzIHtcclxuICBhbmltYXRpb24tbmFtZTogY29sb3JjaGFuZ2U7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgY29sb3JjaGFuZ2Uge1xyXG4gIDAlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgNTAlIHtcclxuICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcbiNzdGFydCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuI3N0YXJ0OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmlvbGV0O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlciAycztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLXJhZGl1cyAycztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/win/win.component.ts":
/*!**************************************!*\
  !*** ./src/app/win/win.component.ts ***!
  \**************************************/
/*! exports provided: WinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinComponent", function() { return WinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WinComponent = /** @class */ (function () {
    function WinComponent(http) {
        this.http = http;
    }
    WinComponent.prototype.ngOnInit = function () {
        this.myday = window.localStorage.getItem("myday");
        var timer = window.localStorage.getItem("time");
        if (timer === "true") {
            this.time = true;
            this.nday = window.localStorage.getItem("present");
            setInterval(function () {
                var d = new Date();
                var f = new Date(window.localStorage.getItem("present"));
                var diff = d.valueOf() - f.valueOf();
                document.getElementById("ss").innerHTML =
                    Math.abs(Math.round(diff / 1000 / 60 / 60)) +
                        "<small> hours </small>" +
                        Math.abs(Math.round((diff / 1000 / 60) % 60)) +
                        "<small> minutes left </small>";
            }, 1000);
        }
        var c = new Date(window.localStorage.getItem("present")).getSeconds();
    };
    WinComponent.prototype.setTime = function () {
        window.localStorage.setItem("time", "true");
        this.time = true;
        this.myday = new Date();
        window.localStorage.setItem("myday", this.nday);
        this.cday = this.myday.getDay();
        this.cdate = this.myday.getDate();
        this.cyear = this.myday.getYear();
        var d1 = new Date();
        var d2 = new Date();
        d1.setHours(+d2.getHours() + 9);
        d1.setMinutes(new Date().getMinutes() + 30);
        this.nday = d1;
        window.localStorage.setItem("present", this.nday);
    };
    WinComponent.prototype.clear = function () {
        window.localStorage.removeItem("time");
        window.localStorage.removeItem("present");
        window.localStorage.clear();
    };
    WinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-win",
            template: __webpack_require__(/*! ./win.component.html */ "./src/app/win/win.component.html"),
            styles: [__webpack_require__(/*! ./win.component.scss */ "./src/app/win/win.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WinComponent);
    return WinComponent;
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

module.exports = __webpack_require__(/*! C:\Users\manomuth\Desktop\WorkFromHere\StartHere\application-workHere\json-prime\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map