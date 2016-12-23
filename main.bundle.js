webpackJsonp([0,3],{

/***/ 346:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 346;


/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(456);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/web/croco/src/main.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__word_model__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.url = 'http://134-0-117-60.ovz.vps.regruhosting.ru:8080/crocoapi';
    }
    ApiService.prototype.getRandomWord = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.put = function (word) {
        return this.http.post(this.url, {
            word: word
        })
            .catch(this.handleError);
    };
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        return body ? new __WEBPACK_IMPORTED_MODULE_3__word_model__["a" /* Word */](body) : {};
    };
    ApiService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=C:/web/croco/src/api.service.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(wordService) {
        this.wordService = wordService;
        this.runPermanentAnimations();
        this.getWord();
        this.setupAnimationElements();
    }
    AppComponent.prototype.button = function () {
        var _this = this;
        this.runAnimation();
        setTimeout(function () { return _this.getWord(); }, 200);
    };
    AppComponent.prototype.runPermanentAnimations = function () {
        var _this = this;
        setInterval(function () {
            _this.eyesAnimation();
        }, 5000);
    };
    AppComponent.prototype.eyesAnimation = function () {
    };
    AppComponent.prototype.runAnimation = function () {
    };
    AppComponent.prototype.setupAnimationElements = function () {
        this.leftEye3 = '#eye-l-3';
        this.rightEye3 = '#eye-r-3';
    };
    AppComponent.prototype.getWord = function () {
        var _this = this;
        this.wordService.getRandomWord().subscribe(function (word) {
            _this.word = word;
        }, function (e) { return console.error(e); }, function () { return console.log('finished'); });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(614),
            styles: [__webpack_require__(613)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/web/croco/src/app.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/web/croco/src/app.module.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable







//# sourceMappingURL=C:/web/croco/src/rxjs-operators.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Word; });
var Word = (function () {
    function Word(data) {
        this.id = Number(data.id);
        this.content = data.content;
        this.desc = data.desc;
        this.level = Number(data.level);
        this.user_id = Number(data.user_id);
    }
    return Word;
}());
//# sourceMappingURL=C:/web/croco/src/word.model.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/web/croco/src/environment.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/web/croco/src/polyfills.js.map

/***/ },

/***/ 613:
/***/ function(module, exports) {

module.exports = ".croco-container {\r\n\tfont-family: 'Open Sans Condensed', sans-serif;\r\n\tbackground: #0b4c49;\r\n\tcolor: #fff;\r\n}\r\n\r\n.croco {\r\n\tposition: relative;\r\n}\r\n\r\n.croco .top {\r\n\theight: 90vh;\r\n\tmargin: 100px auto 100px auto;\r\n\theight: 400px;\r\n\tposition: relative;\r\n}\r\n\r\n.croco .bottom {\r\n\theight: 10vh;\r\n}\r\n\r\n.croco svg {\r\n\tmax-height: 100%;\r\n}\r\n\r\n.croco .word {\r\n\tposition: absolute;\r\n\ttop: 135px;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate3d(-55%, 0, 0);\r\n\t        transform: translate3d(-55%, 0, 0);\r\n\tcolor: #444;\r\n\tfont-size: 45px;\r\n}\r\n\r\n.btn {\r\n\tbackground: #fff !important;\r\n\tcolor: #0b4c49 !important;\r\n\tborder: none !important;\r\n\tborder-radius: 2px !important;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n\r\n/* animation */\r\n\r\n@-webkit-keyframes eye {\r\n\t0% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\t        transform: translate3d(0, 0, 0);\r\n\t}\r\n\t5% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\t        transform: translate3d(0, 0, 0);\r\n\t}\r\n\t45% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t\t        transform: translate3d(5px, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t}\r\n\t55% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0);\r\n\t\t        transform: translate3d(5px, 0, 0);\r\n\t}\r\n\t90% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0);\r\n\t\t        transform: translate3d(5px, 0, 0);\r\n\t}\r\n\t91% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t\t        transform: translate3d(0, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t}\r\n}\r\n\r\n@keyframes eye {\r\n\t0% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\t        transform: translate3d(0, 0, 0);\r\n\t}\r\n\t5% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\t        transform: translate3d(0, 0, 0);\r\n\t}\r\n\t45% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t\t        transform: translate3d(5px, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t}\r\n\t55% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0);\r\n\t\t        transform: translate3d(5px, 0, 0);\r\n\t}\r\n\t90% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0);\r\n\t\t        transform: translate3d(5px, 0, 0);\r\n\t}\r\n\t91% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t\t        transform: translate3d(0, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t}\r\n}\r\n\r\n#eye-r-3, #eye-l-3 {\r\n\t-webkit-animation: eye 5s infinite alternate;\r\n\t        animation: eye 5s infinite alternate;\r\n}"

/***/ },

/***/ 614:
/***/ function(module, exports) {

module.exports = "<div class=\"croco-container container\">\n\t<div class=\"croco\">\n\n\t\t<div class=\"top\">\n\t\t\t<svg version=\"1.0\" id=\"Слой_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t\tviewBox=\"0 0 275.665771 275.665771\" style=\"enable-background:new 0 0 275.665771 275.665771;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.st0{fill:#2A935A;}\n\t.st1{clip-path:url(#SVGID_1_);fill:#21834B;}\n\t.st2{fill:#49B279;}\n\t.st3{fill:#7BC299;}\n\t.st4{fill:#FFFFFF;}\n\t.st5{fill:#454545;}\n\t.st6{clip-path:url(#SVGID_2_);fill:#2A935A;}\n\t.st7{fill:none;stroke:#2A935A;stroke-miterlimit:10;}\n\t.st8{clip-path:url(#SVGID_3_);fill:#2A935A;}\n\t.st9{clip-path:url(#SVGID_4_);fill:#49B279;}\n\t.st10{clip-path:url(#SVGID_5_);fill:#D3D3D3;}\n</style>\n<path class=\"st0\" d=\"M231.82753,212.154587v-3.120193c0-4.091949-3.347961-7.439911-7.439896-7.439911h-64.182709\n\tc-4.091934,0-7.439896,3.347961-7.439896,7.439911v3.120193c0,4.091934,3.347961,7.439896,7.439896,7.439896h64.182709\n\tC228.479568,219.594482,231.82753,216.246521,231.82753,212.154587z\"/>\n<path class=\"st0\" d=\"M211.82753,202.154587v-3.120193c0-4.091949-3.347961-7.439911-7.439896-7.439911h-64.182709\n\tc-4.091934,0-7.439896,3.347961-7.439896,7.439911v3.120193c0,4.091934,3.347961,7.439896,7.439896,7.439896h64.182709\n\tC208.479568,209.594482,211.82753,206.246521,211.82753,202.154587z\"/>\n<path class=\"st0\" d=\"M191.82753,192.154587v-3.120193c0-4.091949-3.347961-7.439911-7.439896-7.439911h-64.182701\n\tc-4.091949,0-7.439903,3.347961-7.439903,7.439911v3.120193c0,4.091934,3.347954,7.439896,7.439903,7.439896h64.182701\n\tC188.479568,199.594482,191.82753,196.246521,191.82753,192.154587z\"/>\n<g>\n\t<defs>\n\t\t<path id=\"SVGID_11_\" d=\"M226.38765,201.594482h-12.56012v-2.56012c0-4.091919-3.347961-7.43988-7.43988-7.43988h-12.56012\n\t\t\tv-2.56012c0-4.091919-3.347961-7.43988-7.43988-7.43988H122.20491c-4.091919,0-7.43988,3.347961-7.43988,7.43988v3.120178\n\t\t\tc0,4.09198,3.347961,7.439941,7.43988,7.439941h12.56012v2.560059c0,4.09198,3.347961,7.439941,7.43988,7.439941h12.56012\n\t\t\tv2.560059c0,4.09198,3.347961,7.439941,7.43988,7.439941h64.182739c4.091919,0,7.43988-3.347961,7.43988-7.439941v-3.120178\n\t\t\tC233.82753,204.942444,230.479568,201.594482,226.38765,201.594482z\"/>\n\t</defs>\n\t<clipPath id=\"SVGID_1_\">\n\t\t<use xlink:href=\"#SVGID_11_\"  style=\"overflow:visible;\"/>\n\t</clipPath>\n\t<path class=\"st1\" d=\"M182.046585,221.677979h-8.527222V207.5401c0-2.995056-2.450562-5.445618-5.445679-5.445618h-4.277405\n\t\tV67.709778c0-2.813416-2.30188-5.115295-5.115356-5.115295h-39.769287c-2.813477,0-5.115356,2.30188-5.115356,5.115295v146.769348\n\t\tc0,2.813416,2.30188,5.115356,5.115356,5.115356h32.806396v12.054321c0,2.995117,2.450562,5.445679,5.445679,5.445679h10.909973\n\t\tc0.006409,0,0.012512-0.000977,0.018921-0.000977c0.003235,0,0.006287,0.000977,0.009521,0.000977h13.944458\n\t\tc1.953064,0,3.551025-1.598022,3.551025-3.551086v-8.314392C185.59761,223.27594,183.999649,221.677979,182.046585,221.677979z\"/>\n</g>\n<path id=\"Body\" class=\"st2\" d=\"M156.680939,219.594482h-39.769325c-2.813431,0-5.115334-2.301895-5.115334-5.115341V67.709824\n\tc0-2.813438,2.301903-5.115341,5.115334-5.115341h39.769325c2.813446,0,5.115341,2.301903,5.115341,5.115341v146.769318\n\tC161.79628,217.292587,159.494385,219.594482,156.680939,219.594482z\"/>\n<path class=\"st2\" d=\"M119.558617,237.094482h-10.910019c-2.99511,0-5.445663-2.450546-5.445663-5.445663v-24.108673\n\tc0-2.995117,2.450554-5.445663,5.445663-5.445663h10.910019c2.995117,0,5.445663,2.450546,5.445663,5.445663v24.108673\n\tC125.00428,234.643936,122.553734,237.094482,119.558617,237.094482z\"/>\n<path class=\"st2\" d=\"M94.675758,237.094482h13.944458c1.953087,0,3.551064-1.597977,3.551064-3.551071v-8.314362\n\tc0-1.953079-1.597977-3.551071-3.551064-3.551071H94.675758c-1.953087,0-3.551071,1.597992-3.551071,3.551071v8.314362\n\tC91.124687,235.496506,92.722672,237.094482,94.675758,237.094482z\"/>\n<path class=\"st2\" d=\"M155.163696,237.094482h10.910019c2.995117,0,5.445663-2.450546,5.445663-5.445663v-24.108673\n\tc0-2.995117-2.450546-5.445663-5.445663-5.445663h-10.910019c-2.995117,0-5.445663,2.450546-5.445663,5.445663v24.108673\n\tC149.718033,234.643936,152.168579,237.094482,155.163696,237.094482z\"/>\n<path class=\"st2\" d=\"M180.046555,237.094482h-13.944458c-1.953079,0-3.551056-1.597977-3.551056-3.551071v-8.314362\n\tc0-1.953079,1.597977-3.551071,3.551056-3.551071h13.944458c1.953094,0,3.551071,1.597992,3.551071,3.551071v8.314362\n\tC183.597626,235.496506,181.999649,237.094482,180.046555,237.094482z\"/>\n<path id=\"Tummy\" class=\"st3\" d=\"M149.651917,191.927811h-25.711273c-1.637733,0-2.977699-1.339951-2.977699-2.977692V110.90551\n\tc0-1.637733,1.339966-2.977692,2.977699-2.977692h25.711273c1.637741,0,2.977692,1.339958,2.977692,2.977692v78.044609\n\tC152.629608,190.58786,151.289658,191.927811,149.651917,191.927811z\"/>\n<path class=\"st2\" d=\"M131.896286,88.571281h-15.000008c-2.75,0-5-2.25-5-5v-40c0-2.75,2.25-5,5-5h15.000008c2.75,0,5,2.25,5,5v40\n\tC136.896286,86.321281,134.646286,88.571281,131.896286,88.571281z\"/>\n<path class=\"st4\" d=\"M129.430374,82.747421H119.36219c-2.199997,0-4-1.800003-4-4V46.395145c0-2.200001,1.800003-4,4-4h10.068184\n\tc2.199997,0,4,1.799999,4,4v32.352276C133.430374,80.947418,131.630371,82.747421,129.430374,82.747421z\"/>\n<path class=\"st5\" d=\"M127.26844,77.207787h-5.744316c-1.650002,0-3-1.349998-3-3v-25.27301c0-1.649998,1.349998-3,3-3h5.744316\n\tc1.650002,0,2.999992,1.350002,2.999992,3v25.27301C130.268433,75.857788,128.918442,77.207787,127.26844,77.207787z\"/>\n<path id=\"eye-l-3\" class=\"st4\" d=\"M121.769005,57.469482h-0.745453c-0.310623,0-0.564774-0.254147-0.564774-0.564774v-5.812759\n\tc0-0.310627,0.25415-0.564774,0.564774-0.564774h0.745453c0.310631,0,0.564774,0.254147,0.564774,0.564774v5.812759\n\tC122.333778,57.215336,122.079636,57.469482,121.769005,57.469482z\"/>\n<path class=\"st2\" d=\"M156.79628,88.571281h-15c-2.75,0-5-2.25-5-5v-40c0-2.75,2.25-5,5-5h15c2.75,0,5,2.25,5,5v40\n\tC161.79628,86.321281,159.54628,88.571281,156.79628,88.571281z\"/>\n<path class=\"st4\" d=\"M154.330368,82.747421h-10.068176c-2.199997,0-4-1.800003-4-4V46.395145c0-2.200001,1.800003-4,4-4h10.068176\n\tc2.199997,0,4,1.799999,4,4v32.352276C158.330368,80.947418,156.530365,82.747421,154.330368,82.747421z\"/>\n<path class=\"st5\" d=\"M152.168442,77.207787h-5.744324c-1.649994,0-3-1.349998-3-3v-25.27301c0-1.649998,1.350006-3,3-3h5.744324\n\tc1.649994,0,3,1.350002,3,3v25.27301C155.168442,75.857788,153.818436,77.207787,152.168442,77.207787z\"/>\n<path id=\"eye-r-3\" class=\"st4\" d=\"M146.669006,57.469482h-0.745453c-0.310623,0-0.564774-0.254147-0.564774-0.564774v-5.812759\n\tc0-0.310627,0.25415-0.564774,0.564774-0.564774h0.745453c0.310623,0,0.564774,0.254147,0.564774,0.564774v5.812759\n\tC147.23378,57.215336,146.97963,57.469482,146.669006,57.469482z\"/>\n<path class=\"st2\" d=\"M61.629616,72.594482h-4c-1.650002,0-3-1.349998-3-3v-14c0-1.649998,1.349998-3,3-3h4\n\tc1.649998,0,3,1.350002,3,3v14C64.629616,71.244484,63.279613,72.594482,61.629616,72.594482z\"/>\n<path class=\"st0\" d=\"M60.829613,66.594482h-2.399998c-0.990002,0-1.799999-0.809998-1.799999-1.799995v-8.400002\n\tc0-0.990002,0.809998-1.800003,1.799999-1.800003h2.399998c0.990002,0,1.800003,0.810001,1.800003,1.800003v8.400002\n\tC62.629616,65.784485,61.819614,66.594482,60.829613,66.594482z\"/>\n<path class=\"st2\" d=\"M71.529282,72.594482h-4c-1.650002,0-3-1.349998-3-3v-14c0-1.649998,1.349998-3,3-3h4\n\tc1.650002,0,3,1.350002,3,3v14C74.529282,71.244484,73.179283,72.594482,71.529282,72.594482z\"/>\n<path class=\"st0\" d=\"M70.729279,66.594482h-2.400002c-0.989998,0-1.799995-0.809998-1.799995-1.799995v-8.400002\n\tc0-0.990002,0.809998-1.800003,1.799995-1.800003h2.400002c0.990005,0,1.800003,0.810001,1.800003,1.800003v8.400002\n\tC72.529282,65.784485,71.719284,66.594482,70.729279,66.594482z\"/>\n<g id=\"Face_Shadow\">\n\t<defs>\n\t\t<path id=\"SVGID_13_\" d=\"M156.680939,219.594482h-39.769325c-2.813431,0-5.115334-2.301895-5.115334-5.115341V67.709824\n\t\t\tc0-2.813438,2.301903-5.115341,5.115334-5.115341h39.769325c2.813446,0,5.115341,2.301903,5.115341,5.115341v146.769318\n\t\t\tC161.79628,217.292587,159.494385,219.594482,156.680939,219.594482z\"/>\n\t</defs>\n\t<clipPath id=\"SVGID_2_\">\n\t\t<use xlink:href=\"#SVGID_13_\"  style=\"overflow:visible;\"/>\n\t</clipPath>\n\t<path class=\"st6\" d=\"M156.734619,94.594482H59.629616c-2.75,0-5-2.25-5-5v-25h107.105003v25\n\t\tC161.734619,92.344482,159.484619,94.594482,156.734619,94.594482z\"/>\n</g>\n<path id=\"Face\" class=\"st2\" d=\"M156.734619,92.594482H59.629616c-2.75,0-5-2.25-5-5v-25h107.105003v25\n\tC161.734619,90.344482,159.484619,92.594482,156.734619,92.594482z\"/>\n<path class=\"st4\" d=\"M66.629616,77.594482h-4c-0.275002,0-0.5-0.224998-0.5-0.5v-4c0-0.275002,0.224998-0.5,0.5-0.5h4\n\tc0.275002,0,0.5,0.224998,0.5,0.5v4C67.129616,77.369484,66.904617,77.594482,66.629616,77.594482z\"/>\n<path class=\"st4\" d=\"M86.62928,77.594482h-4c-0.275002,0-0.5-0.224998-0.5-0.5v-4c0-0.275002,0.224998-0.5,0.5-0.5h4\n\tc0.275002,0,0.5,0.224998,0.5,0.5v4C87.12928,77.369484,86.904282,77.594482,86.62928,77.594482z\"/>\n<path class=\"st4\" d=\"M106.62928,77.594482h-4c-0.275002,0-0.5-0.224998-0.5-0.5v-4c0-0.275002,0.224998-0.5,0.5-0.5h4\n\tc0.275002,0,0.5,0.224998,0.5,0.5v4C107.12928,77.369484,106.904282,77.594482,106.62928,77.594482z\"/>\n<path class=\"st4\" d=\"M76.462944,82.747421h-4c-0.274994,0-0.5-0.224998-0.5-0.5v-4c0-0.275002,0.225006-0.5,0.5-0.5h4\n\tc0.275002,0,0.5,0.224998,0.5,0.5v4C76.962944,82.522423,76.737946,82.747421,76.462944,82.747421z\"/>\n<path class=\"st4\" d=\"M96.462616,82.747421h-4c-0.275002,0-0.5-0.224998-0.5-0.5v-4c0-0.275002,0.224998-0.5,0.5-0.5h4\n\tc0.275002,0,0.5,0.224998,0.5,0.5v4C96.962616,82.522423,96.737617,82.747421,96.462616,82.747421z\"/>\n<path class=\"st4\" d=\"M116.462616,82.747421h-4c-0.275002,0-0.5-0.224998-0.5-0.5v-4c0-0.275002,0.224998-0.5,0.5-0.5h4\n\tc0.275002,0,0.5,0.224998,0.5,0.5v4C116.962616,82.522423,116.737617,82.747421,116.462616,82.747421z\"/>\n<line id=\"Mouth\" class=\"st7\" x1=\"54.629616\" y1=\"77.594482\" x2=\"129.962952\" y2=\"77.594482\"/>\n<g>\n\t<defs>\n\t\t<path id=\"SVGID_15_\" d=\"M156.680939,224.594482h-39.769325c-2.813431,0-5.115334-2.301895-5.115334-5.115341V72.709824\n\t\t\tc0-2.813438,2.301903-5.115341,5.115334-5.115341h39.769325c2.813446,0,5.115341,2.301903,5.115341,5.115341v146.769318\n\t\t\tC161.79628,222.292587,159.494385,224.594482,156.680939,224.594482z\"/>\n\t</defs>\n\t<clipPath id=\"SVGID_3_\">\n\t\t<use xlink:href=\"#SVGID_15_\"  style=\"overflow:visible;\"/>\n\t</clipPath>\n\t<path class=\"st8\" d=\"M212.273544,144.511154H51.194298c-2.395832,0-4.356064-1.960236-4.356064-4.356064v-27.954544\n\t\tc0-2.395836,1.960232-4.356064,4.356064-4.356064h161.079254c2.395844,0,4.356064,1.960228,4.356064,4.356064v27.954544\n\t\tC216.629608,142.550919,214.669388,144.511154,212.273544,144.511154z\"/>\n</g>\n<g>\n\t<defs>\n\t\t<path id=\"SVGID_17_\" d=\"M149.651917,196.927811h-25.711273c-1.637733,0-2.977699-1.339951-2.977699-2.977692V115.90551\n\t\t\tc0-1.637733,1.339966-2.977692,2.977699-2.977692h25.711273c1.637741,0,2.977692,1.339958,2.977692,2.977692v78.044609\n\t\t\tC152.629608,195.58786,151.289658,196.927811,149.651917,196.927811z\"/>\n\t</defs>\n\t<clipPath id=\"SVGID_4_\">\n\t\t<use xlink:href=\"#SVGID_17_\"  style=\"overflow:visible;\"/>\n\t</clipPath>\n\t<path class=\"st9\" d=\"M212.273544,144.511154H51.194298c-2.395832,0-4.356064-1.960236-4.356064-4.356064v-27.954544\n\t\tc0-2.395836,1.960232-4.356064,4.356064-4.356064h161.079254c2.395844,0,4.356064,1.960228,4.356064,4.356064v27.954544\n\t\tC216.629608,142.550919,214.669388,144.511154,212.273544,144.511154z\"/>\n</g>\n<path class=\"st4\" d=\"M212.273544,141.511154H51.194298c-2.395832,0-4.356064-1.960236-4.356064-4.356064v-27.954544\n\tc0-2.395836,1.960232-4.356064,4.356064-4.356064h161.079254c2.395844,0,4.356064,1.960228,4.356064,4.356064v27.954544\n\tC216.629608,139.550919,214.669388,141.511154,212.273544,141.511154z\"/>\n<g>\n\t<defs>\n\t\t<path id=\"SVGID_19_\" d=\"M212.273544,141.511154H51.194298c-2.395832,0-4.356064-1.960236-4.356064-4.356064v-27.954544\n\t\t\tc0-2.395836,1.960232-4.356064,4.356064-4.356064h161.079254c2.395844,0,4.356064,1.960228,4.356064,4.356064v27.954544\n\t\t\tC216.629608,139.550919,214.669388,141.511154,212.273544,141.511154z\"/>\n\t</defs>\n\t<clipPath id=\"SVGID_5_\">\n\t\t<use xlink:href=\"#SVGID_19_\"  style=\"overflow:visible;\"/>\n\t</clipPath>\n\t<path class=\"st10\" d=\"M52.536518,131.844482h-7.729897c-0.624279,0-1.135052-0.510773-1.135052-1.135056v-11.729889\n\t\tc0-0.624283,0.510773-1.135056,1.135052-1.135056h7.729897c0.624279,0,1.135052,0.510773,1.135052,1.135056v11.729889\n\t\tC53.67157,131.33371,53.160797,131.844482,52.536518,131.844482z\"/>\n\t<path class=\"st10\" d=\"M222.327896,131.844482h-7.729904c-0.624268,0-1.13504-0.510773-1.13504-1.135056v-11.729889\n\t\tc0-0.624283,0.510773-1.135056,1.13504-1.135056h7.729904c0.624283,0,1.135056,0.510773,1.135056,1.135056v11.729889\n\t\tC223.462952,131.33371,222.952179,131.844482,222.327896,131.844482z\"/>\n</g>\n<path class=\"st2\" d=\"M50.703182,130.177811h-7.729893c-0.624279,0-1.135052-0.510773-1.135052-1.13504v-11.729904\n\tc0-0.624275,0.510773-1.135048,1.135052-1.135048h7.729893c0.624279,0,1.135056,0.510773,1.135056,1.135048v11.729904\n\tC51.838238,129.667038,51.327461,130.177811,50.703182,130.177811z\"/>\n<path class=\"st2\" d=\"M220.494568,130.177811h-7.729904c-0.624283,0-1.135056-0.510773-1.135056-1.13504v-11.729904\n\tc0-0.624275,0.510773-1.135048,1.135056-1.135048h7.729904c0.624268,0,1.13504,0.510773,1.13504,1.135048v11.729904\n\tC221.629608,129.667038,221.118835,130.177811,220.494568,130.177811z\"/>\n</svg>\n\n\t\t\t<div class=\"bottom\">\n\t\t\t\t<div *ngIf=\"word\">\n\t\t\t\t\t<div class=\"word\">\n\t\t\t\t\t\t{{word.content}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"text-sm-center\">\n\t\t\t<div class=\"btn btn-primary btn-lg\" (click)=\"button()\">\n\t\t\t\tНовое слово\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>"

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ }

},[644]);
//# sourceMappingURL=main.bundle.map