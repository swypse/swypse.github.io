webpackJsonp([0,3],{

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__word_model__ = __webpack_require__(210);
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
    function ApiService(af, http) {
        this.af = af;
        this.http = http;
        this.getIds();
    }
    ApiService.prototype.getRandomWordObservable = function () {
        var randomKey = this.ids[Math.ceil(Math.random() * this.count)];
        var ref = this.af.database.list('/words', {
            query: {
                startAt: randomKey,
                limitToFirst: 1,
                orderByKey: true,
            }
        });
        return ref.map(function (res) { return new __WEBPACK_IMPORTED_MODULE_3__word_model__["a" /* Word */](res[0]); });
    };
    ApiService.prototype.getWords = function () {
        return this.af.database.list('words');
    };
    ApiService.prototype.getIds = function () {
        var _this = this;
        this.http.get('https://croco-feff1.firebaseio.com/words.json?shallow=true')
            .map(function (res) { return Object.keys(res.json()); })
            .subscribe(function (ids) {
            _this.ids = ids;
            _this.count = ids.length;
        });
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === 'function' && _b) || Object])
    ], ApiService);
    return ApiService;
    var _a, _b;
}());
//# sourceMappingURL=C:/web/croco/src/api.service.js.map

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Word; });
var Word = (function () {
    function Word(data) {
        this.$id = String(data.id);
        this.content = data.content;
        this.desc = data.desc;
        this.level = Number(data.level);
    }
    return Word;
}());
//# sourceMappingURL=C:/web/croco/src/word.model.js.map

/***/ },

/***/ 369:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 369;


/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(478);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/web/croco/src/main.js.map

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__word_model__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operators__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rxjs_operators__);
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
    function AppComponent(api) {
        this.api = api;
        this.word = new __WEBPACK_IMPORTED_MODULE_1__word_model__["a" /* Word */]({ content: "Waiting for a word" });
    }
    AppComponent.prototype.button = function () {
        this.getWord();
    };
    AppComponent.prototype.getWord = function () {
        var _this = this;
        this.api.getRandomWordObservable()
            .subscribe(function (word) {
            _this.word = word;
        }, function (error) { return console.error(error); });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(656),
            styles: [__webpack_require__(651)],
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/web/croco/src/app.component.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_api_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__words_words_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__word_form_word_form_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__croco_svg_croco_svg_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recently_used_words_recently_used_words_component__ = __webpack_require__(480);
/* unused harmony export firebaseConfig */
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











var firebaseConfig = {
    apiKey: ' AIzaSyCp_jGuzcDi6vzvzcT4B2XZHlVcew_Y0rg',
    authDomain: "croco-feff1.firebaseapp.com",
    databaseURL: "https://croco-feff1.firebaseio.com",
    storageBucket: "croco-feff1.appspot.com",
    messagingSenderId: "300205376501"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__words_words_component__["a" /* WordsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__word_form_word_form_component__["a" /* WordFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__croco_svg_croco_svg_component__["a" /* CrocoSvgComponent */],
                __WEBPACK_IMPORTED_MODULE_10__recently_used_words_recently_used_words_component__["a" /* RecentlyUsedWordsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseConfig)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/web/croco/src/app.module.js.map

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CrocoSvgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrocoSvgComponent = (function () {
    function CrocoSvgComponent() {
    }
    CrocoSvgComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-croco-svg',
            template: __webpack_require__(657),
            styles: [__webpack_require__(652)],
            inputs: ['word']
        }), 
        __metadata('design:paramtypes', [])
    ], CrocoSvgComponent);
    return CrocoSvgComponent;
}());
//# sourceMappingURL=C:/web/croco/src/croco-svg.component.js.map

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RecentlyUsedWordsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentlyUsedWordsComponent = (function () {
    function RecentlyUsedWordsComponent() {
    }
    RecentlyUsedWordsComponent.prototype.ngOnInit = function () {
    };
    RecentlyUsedWordsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-recently-used-words',
            template: __webpack_require__(658),
            styles: [__webpack_require__(653)]
        }), 
        __metadata('design:paramtypes', [])
    ], RecentlyUsedWordsComponent);
    return RecentlyUsedWordsComponent;
}());
//# sourceMappingURL=C:/web/croco/src/recently-used-words.component.js.map

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable







//# sourceMappingURL=C:/web/croco/src/rxjs-operators.js.map

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__word_model__ = __webpack_require__(210);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WordFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WordFormComponent = (function () {
    function WordFormComponent(api) {
        this.api = api;
    }
    WordFormComponent.prototype.ngOnInit = function () {
        this.word = new __WEBPACK_IMPORTED_MODULE_2__word_model__["a" /* Word */]({});
    };
    WordFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-word-form',
            template: __webpack_require__(659),
            styles: [__webpack_require__(654)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], WordFormComponent);
    return WordFormComponent;
    var _a;
}());
//# sourceMappingURL=C:/web/croco/src/word-form.component.js.map

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_service__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WordsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsComponent = (function () {
    function WordsComponent(api) {
        this.api = api;
    }
    WordsComponent.prototype.ngOnInit = function () {
        this.words = this.api.getWords();
    };
    WordsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-words',
            template: __webpack_require__(660),
            styles: [__webpack_require__(655)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], WordsComponent);
    return WordsComponent;
    var _a;
}());
//# sourceMappingURL=C:/web/croco/src/words.component.js.map

/***/ },

/***/ 484:
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

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/web/croco/src/polyfills.js.map

/***/ },

/***/ 651:
/***/ function(module, exports) {

module.exports = ".croco-container {\r\n\tfont-family: 'Open Sans Condensed', sans-serif;\r\n\tbackground: #0b4c49;\r\n\tcolor: #fff;\r\n}\r\n\r\n.croco {\r\n\tposition: relative;\r\n}\r\n\r\n.croco .top {\r\n\theight: 75vh;\r\n\tposition: relative;\r\n}\r\n\r\n.croco .bottom {\r\n\theight: 25vh;\r\n\ttext-align: center;\r\n}\r\n\r\n.btn {\r\n\tbackground: #fff !important;\r\n\tcolor: #0b4c49 !important;\r\n\tborder: none !important;\r\n\tborder-radius: 2px !important;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n\r\n/* animation */\r\n\r\n@-webkit-keyframes eye {\r\n\t0% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\t        transform: translate3d(0, 0, 0);\r\n\t}\r\n\t5% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\t        transform: translate3d(0, 0, 0);\r\n\t}\r\n\t45% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t\t        transform: translate3d(5px, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t}\r\n\t55% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0);\r\n\t\t        transform: translate3d(5px, 0, 0);\r\n\t}\r\n\t90% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0);\r\n\t\t        transform: translate3d(5px, 0, 0);\r\n\t}\r\n\t91% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t\t        transform: translate3d(0, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t}\r\n}\r\n\r\n@keyframes eye {\r\n\t0% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\t        transform: translate3d(0, 0, 0);\r\n\t}\r\n\t5% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\t        transform: translate3d(0, 0, 0);\r\n\t}\r\n\t45% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t\t        transform: translate3d(5px, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t}\r\n\t55% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0);\r\n\t\t        transform: translate3d(5px, 0, 0);\r\n\t}\r\n\t90% {\r\n\t\t-webkit-transform: translate3d(5px, 0, 0);\r\n\t\t        transform: translate3d(5px, 0, 0);\r\n\t}\r\n\t91% {\r\n\t\t-webkit-transform: translate3d(0, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t\t        transform: translate3d(0, 0, 0) cubic-bezier(.5, -1, .5, 2);\r\n\t}\r\n}\r\n\r\n#eye-r-3, #eye-l-3 {\r\n\t-webkit-animation: eye 5s infinite alternate;\r\n\t        animation: eye 5s infinite alternate;\r\n}"

/***/ },

/***/ 652:
/***/ function(module, exports) {

module.exports = "svg {\r\n\tmax-height: 100%;\r\n\tdisplay: block;\r\n\tmargin: auto;\r\n}"

/***/ },

/***/ 653:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 654:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 655:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 656:
/***/ function(module, exports) {

module.exports = "<div class=\"croco-container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-9\">\n\t\t\t<div class=\"croco\">\n\t\t\t\t<div class=\"top\">\n\t\t\t\t\t<app-croco-svg [word]=\"word.content\"></app-croco-svg>\n\t\t\t\t\t<div class=\"bottom\">\n\t\t\t\t\t\t<div class=\"btn btn-primary btn-lg\" (click)=\"button()\">\n\t\t\t\t\t\t\t<i class=\"material-icons\">cached</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3\">\n\t\t\t<app-recently-used-words></app-recently-used-words>\n\t\t</div>\n\t</div>\n</div>"

/***/ },

/***/ 657:
/***/ function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Слой_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\tviewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n\t<path fill=\"#2A935A\" d=\"M841,769.6v-11.3c0-14.8-12.1-27-27-27H581.2c-14.8,0-27,12.1-27,27v11.3c0,14.8,12.1,27,27,27H814\n\tC828.8,796.6,841,784.5,841,769.6z\" />\n\t<path fill=\"#2A935A\" d=\"M768.4,733.3V722c0-14.8-12.1-27-27-27H508.6c-14.8,0-27,12.1-27,27v11.3c0,14.8,12.1,27,27,27h232.8\n\tC756.3,760.3,768.4,748.2,768.4,733.3z\" />\n\t<path fill=\"#2A935A\" d=\"M695.9,697.1v-11.3c0-14.8-12.1-27-27-27H436.1c-14.8,0-27,12.1-27,27v11.3c0,14.8,12.1,27,27,27h232.8\n\tC683.7,724,695.9,711.9,695.9,697.1z\" />\n\t<g>\n\t\t<g>\n\t\t\t<defs>\n\t\t\t\t<path id=\"SVGID_1_\" d=\"M821.2,731.3h-45.6V722c0-14.8-12.1-27-27-27h-45.6v-9.3c0-14.8-12.1-27-27-27H443.3\n\t\t\t\tc-14.8,0-27,12.1-27,27v11.3c0,14.8,12.1,27,27,27h45.6v9.3c0,14.8,12.1,27,27,27h45.6v9.3c0,14.8,12.1,27,27,27h232.8\n\t\t\t\tc14.8,0,27-12.1,27-27v-11.3C848.2,743.4,836.1,731.3,821.2,731.3z\" />\n\t\t\t</defs>\n\t\t\t<clipPath id=\"SVGID_2_\">\n\t\t\t\t<use xlink:href=\"#SVGID_1_\" overflow=\"visible\" />\n\t\t\t</clipPath>\n\t\t\t<path clip-path=\"url(#SVGID_2_)\" fill=\"#21834B\" d=\"M660.4,804.2h-30.9v-51.3c0-10.9-8.9-19.8-19.8-19.8h-15.5V245.6\n\t\t\tc0-10.2-8.4-18.6-18.6-18.6H431.4c-10.2,0-18.6,8.4-18.6,18.6V778c0,10.2,8.4,18.6,18.6,18.6h119v43.7c0,10.9,8.9,19.8,19.8,19.8\n\t\t\th39.6c0,0,0,0,0.1,0c0,0,0,0,0,0h50.6c7.1,0,12.9-5.8,12.9-12.9V817C673.3,810,667.5,804.2,660.4,804.2z\" />\n\t\t</g>\n\t</g>\n\t<path id=\"Body\" fill=\"#49B279\" d=\"M568.4,796.6H424.1c-10.2,0-18.6-8.4-18.6-18.6V245.6c0-10.2,8.4-18.6,18.6-18.6h144.3\n\tc10.2,0,18.6,8.4,18.6,18.6V778C586.9,788.2,578.6,796.6,568.4,796.6z\" />\n\t<path fill=\"#49B279\" d=\"M433.7,860.1h-39.6c-10.9,0-19.8-8.9-19.8-19.8v-87.5c0-10.9,8.9-19.8,19.8-19.8h39.6\n\tc10.9,0,19.8,8.9,19.8,19.8v87.5C453.5,851.2,444.6,860.1,433.7,860.1z\" />\n\t<path fill=\"#49B279\" d=\"M343.4,860.1H394c7.1,0,12.9-5.8,12.9-12.9V817c0-7.1-5.8-12.9-12.9-12.9h-50.6c-7.1,0-12.9,5.8-12.9,12.9\n\tv30.2C330.6,854.3,336.4,860.1,343.4,860.1z\" />\n\t<path fill=\"#49B279\" d=\"M562.9,860.1h39.6c10.9,0,19.8-8.9,19.8-19.8v-87.5c0-10.9-8.9-19.8-19.8-19.8h-39.6\n\tc-10.9,0-19.8,8.9-19.8,19.8v87.5C543.1,851.2,552,860.1,562.9,860.1z\" />\n\t<path fill=\"#49B279\" d=\"M653.1,860.1h-50.6c-7.1,0-12.9-5.8-12.9-12.9V817c0-7.1,5.8-12.9,12.9-12.9h50.6c7.1,0,12.9,5.8,12.9,12.9\n\tv30.2C666,854.3,660.2,860.1,653.1,860.1z\" />\n\t<path id=\"Tummy\" fill=\"#7BC299\" d=\"M542.9,696.2h-93.3c-5.9,0-10.8-4.9-10.8-10.8V402.3c0-5.9,4.9-10.8,10.8-10.8h93.3\n\tc5.9,0,10.8,4.9,10.8,10.8v283.1C553.7,691.4,548.8,696.2,542.9,696.2z\" />\n\t<path fill=\"#49B279\" d=\"M478.5,321.3h-54.4c-10,0-18.1-8.2-18.1-18.1V158.1c0-10,8.2-18.1,18.1-18.1h54.4c10,0,18.1,8.2,18.1,18.1\n\tv145.1C496.6,313.1,488.4,321.3,478.5,321.3z\" />\n\t<path fill=\"#FFFFFF\" d=\"M469.5,300.2H433c-8,0-14.5-6.5-14.5-14.5V168.3c0-8,6.5-14.5,14.5-14.5h36.5c8,0,14.5,6.5,14.5,14.5v117.4\n\tC484,293.6,477.5,300.2,469.5,300.2z\" />\n\t<path fill=\"#454545\" d=\"M461.7,280.1h-20.8c-6,0-10.9-4.9-10.9-10.9v-91.7c0-6,4.9-10.9,10.9-10.9h20.8c6,0,10.9,4.9,10.9,10.9v91.7\n\tC472.6,275.2,467.7,280.1,461.7,280.1z\" />\n\t<path fill=\"#FFFFFF\" d=\"M441.7,208.5H439c-1.1,0-2-0.9-2-2v-21.1c0-1.1,0.9-2,2-2h2.7c1.1,0,2,0.9,2,2v21.1\n\tC443.8,207.6,442.9,208.5,441.7,208.5z\" />\n\t<path fill=\"#49B279\" d=\"M568.8,321.3h-54.4c-10,0-18.1-8.2-18.1-18.1V158.1c0-10,8.2-18.1,18.1-18.1h54.4c10,0,18.1,8.2,18.1,18.1\n\tv145.1C586.9,313.1,578.8,321.3,568.8,321.3z\" />\n\t<path fill=\"#FFFFFF\" d=\"M559.8,300.2h-36.5c-8,0-14.5-6.5-14.5-14.5V168.3c0-8,6.5-14.5,14.5-14.5h36.5c8,0,14.5,6.5,14.5,14.5\n\tv117.4C574.4,293.6,567.8,300.2,559.8,300.2z\" />\n\t<path fill=\"#454545\" d=\"M552,280.1h-20.8c-6,0-10.9-4.9-10.9-10.9v-91.7c0-6,4.9-10.9,10.9-10.9H552c6,0,10.9,4.9,10.9,10.9v91.7\n\tC562.9,275.2,558,280.1,552,280.1z\" />\n\t<path fill=\"#FFFFFF\" d=\"M532.1,208.5h-2.7c-1.1,0-2-0.9-2-2v-21.1c0-1.1,0.9-2,2-2h2.7c1.1,0,2,0.9,2,2v21.1\n\tC534.1,207.6,533.2,208.5,532.1,208.5z\" />\n\t<path fill=\"#49B279\" d=\"M223.6,263.3h-14.5c-6,0-10.9-4.9-10.9-10.9v-50.8c0-6,4.9-10.9,10.9-10.9h14.5c6,0,10.9,4.9,10.9,10.9v50.8\n\tC234.4,258.4,229.6,263.3,223.6,263.3z\" />\n\t<path fill=\"#2A935A\" d=\"M220.7,241.6H212c-3.6,0-6.5-2.9-6.5-6.5v-30.5c0-3.6,2.9-6.5,6.5-6.5h8.7c3.6,0,6.5,2.9,6.5,6.5V235\n\tC227.2,238.6,224.3,241.6,220.7,241.6z\" />\n\t<path fill=\"#49B279\" d=\"M259.5,263.3H245c-6,0-10.9-4.9-10.9-10.9v-50.8c0-6,4.9-10.9,10.9-10.9h14.5c6,0,10.9,4.9,10.9,10.9v50.8\n\tC270.4,258.4,265.5,263.3,259.5,263.3z\" />\n\t<path fill=\"#2A935A\" d=\"M256.6,241.6h-8.7c-3.6,0-6.5-2.9-6.5-6.5v-30.5c0-3.6,2.9-6.5,6.5-6.5h8.7c3.6,0,6.5,2.9,6.5,6.5V235\n\tC263.1,238.6,260.2,241.6,256.6,241.6z\" />\n\t<g id=\"Face_Shadow\">\n\t\t<g>\n\t\t\t<defs>\n\t\t\t\t<path id=\"SVGID_3_\" d=\"M568.4,796.6H424.1c-10.2,0-18.6-8.4-18.6-18.6V245.6c0-10.2,8.4-18.6,18.6-18.6h144.3\n\t\t\t\tc10.2,0,18.6,8.4,18.6,18.6V778C586.9,788.2,578.6,796.6,568.4,796.6z\" />\n\t\t\t</defs>\n\t\t\t<clipPath id=\"SVGID_4_\">\n\t\t\t\t<use xlink:href=\"#SVGID_3_\" overflow=\"visible\" />\n\t\t\t</clipPath>\n\t\t\t<path clip-path=\"url(#SVGID_4_)\" fill=\"#2A935A\" d=\"M568.6,343.1H216.3c-10,0-18.1-8.2-18.1-18.1v-90.7h388.5V325\n\t\t\tC586.7,335,578.5,343.1,568.6,343.1z\" />\n\t\t</g>\n\t</g>\n\t<path id=\"Face\" fill=\"#49B279\" d=\"M568.6,335.9H216.3c-10,0-18.1-8.2-18.1-18.1v-90.7h388.5v90.7\n\tC586.7,327.7,578.5,335.9,568.6,335.9z\" />\n\t<path fill=\"#FFFFFF\" d=\"M241.7,281.5h-14.5c-1,0-1.8-0.8-1.8-1.8v-14.5c0-1,0.8-1.8,1.8-1.8h14.5c1,0,1.8,0.8,1.8,1.8v14.5\n\tC243.5,280.7,242.7,281.5,241.7,281.5z\" />\n\t<path fill=\"#FFFFFF\" d=\"M314.3,281.5h-14.5c-1,0-1.8-0.8-1.8-1.8v-14.5c0-1,0.8-1.8,1.8-1.8h14.5c1,0,1.8,0.8,1.8,1.8v14.5\n\tC316.1,280.7,315.3,281.5,314.3,281.5z\" />\n\t<path fill=\"#FFFFFF\" d=\"M386.8,281.5h-14.5c-1,0-1.8-0.8-1.8-1.8v-14.5c0-1,0.8-1.8,1.8-1.8h14.5c1,0,1.8,0.8,1.8,1.8v14.5\n\tC388.6,280.7,387.8,281.5,386.8,281.5z\" />\n\t<path fill=\"#FFFFFF\" d=\"M277.4,300.2h-14.5c-1,0-1.8-0.8-1.8-1.8v-14.5c0-1,0.8-1.8,1.8-1.8h14.5c1,0,1.8,0.8,1.8,1.8v14.5\n\tC279.2,299.4,278.4,300.2,277.4,300.2z\" />\n\t<path fill=\"#FFFFFF\" d=\"M349.9,300.2h-14.5c-1,0-1.8-0.8-1.8-1.8v-14.5c0-1,0.8-1.8,1.8-1.8h14.5c1,0,1.8,0.8,1.8,1.8v14.5\n\tC351.7,299.4,350.9,300.2,349.9,300.2z\" />\n\t<path fill=\"#FFFFFF\" d=\"M422.5,300.2H408c-1,0-1.8-0.8-1.8-1.8v-14.5c0-1,0.8-1.8,1.8-1.8h14.5c1,0,1.8,0.8,1.8,1.8v14.5\n\tC424.3,299.4,423.5,300.2,422.5,300.2z\" />\n\t<line id=\"Mouth\" fill=\"none\" stroke=\"#2A935A\" stroke-miterlimit=\"10\" x1=\"198.2\" y1=\"281.5\" x2=\"471.5\" y2=\"281.5\" />\n\t<g>\n\t\t<g>\n\t\t\t<defs>\n\t\t\t\t<path id=\"SVGID_5_\" d=\"M568.4,814.7H424.1c-10.2,0-18.6-8.4-18.6-18.6V263.8c0-10.2,8.4-18.6,18.6-18.6h144.3\n\t\t\t\tc10.2,0,18.6,8.4,18.6,18.6v532.4C586.9,806.4,578.6,814.7,568.4,814.7z\" />\n\t\t\t</defs>\n\t\t\t<clipPath id=\"SVGID_6_\">\n\t\t\t\t<use xlink:href=\"#SVGID_5_\" overflow=\"visible\" />\n\t\t\t</clipPath>\n\t\t\t<path clip-path=\"url(#SVGID_6_)\" fill=\"#2A935A\" d=\"M770,524.2H185.7c-8.7,0-15.8-7.1-15.8-15.8V407c0-8.7,7.1-15.8,15.8-15.8H770\n\t\t\tc8.7,0,15.8,7.1,15.8,15.8v101.4C785.8,517.1,778.7,524.2,770,524.2z\" />\n\t\t</g>\n\t</g>\n\t<g>\n\t\t<g>\n\t\t\t<defs>\n\t\t\t\t<path id=\"SVGID_7_\" d=\"M542.9,714.4h-93.3c-5.9,0-10.8-4.9-10.8-10.8V420.5c0-5.9,4.9-10.8,10.8-10.8h93.3\n\t\t\t\tc5.9,0,10.8,4.9,10.8,10.8v283.1C553.7,709.5,548.8,714.4,542.9,714.4z\" />\n\t\t\t</defs>\n\t\t\t<clipPath id=\"SVGID_8_\">\n\t\t\t\t<use xlink:href=\"#SVGID_7_\" overflow=\"visible\" />\n\t\t\t</clipPath>\n\t\t\t<path clip-path=\"url(#SVGID_8_)\" fill=\"#49B279\" d=\"M770,524.2H185.7c-8.7,0-15.8-7.1-15.8-15.8V407c0-8.7,7.1-15.8,15.8-15.8H770\n\t\t\tc8.7,0,15.8,7.1,15.8,15.8v101.4C785.8,517.1,778.7,524.2,770,524.2z\" />\n\t\t</g>\n\t</g>\n\t<path fill=\"#FFFFFF\" d=\"M770,513.3H185.7c-8.7,0-15.8-7.1-15.8-15.8V396.1c0-8.7,7.1-15.8,15.8-15.8H770c8.7,0,15.8,7.1,15.8,15.8\n\tv101.4C785.8,506.2,778.7,513.3,770,513.3z\" />\n\t<g>\n\t\t<g>\n\t\t\t<defs>\n\t\t\t\t<path id=\"SVGID_9_\" d=\"M770,513.3H185.7c-8.7,0-15.8-7.1-15.8-15.8V396.1c0-8.7,7.1-15.8,15.8-15.8H770c8.7,0,15.8,7.1,15.8,15.8\n\t\t\t\tv101.4C785.8,506.2,778.7,513.3,770,513.3z\" />\n\t\t\t</defs>\n\t\t\t<clipPath id=\"SVGID_10_\">\n\t\t\t\t<use xlink:href=\"#SVGID_9_\" overflow=\"visible\" />\n\t\t\t</clipPath>\n\t\t\t<path clip-path=\"url(#SVGID_10_)\" fill=\"#D3D3D3\" d=\"M190.6,478.3h-28c-2.3,0-4.1-1.9-4.1-4.1v-42.6c0-2.3,1.9-4.1,4.1-4.1h28\n\t\t\tc2.3,0,4.1,1.9,4.1,4.1v42.6C194.7,476.4,192.8,478.3,190.6,478.3z\" />\n\t\t</g>\n\t\t<g>\n\t\t\t<defs>\n\t\t\t\t<path id=\"SVGID_11_\" d=\"M770,513.3H185.7c-8.7,0-15.8-7.1-15.8-15.8V396.1c0-8.7,7.1-15.8,15.8-15.8H770\n\t\t\t\tc8.7,0,15.8,7.1,15.8,15.8v101.4C785.8,506.2,778.7,513.3,770,513.3z\" />\n\t\t\t</defs>\n\t\t\t<clipPath id=\"SVGID_12_\">\n\t\t\t\t<use xlink:href=\"#SVGID_11_\" overflow=\"visible\" />\n\t\t\t</clipPath>\n\t\t\t<path clip-path=\"url(#SVGID_12_)\" fill=\"#D3D3D3\" d=\"M806.5,478.3h-28c-2.3,0-4.1-1.9-4.1-4.1v-42.6c0-2.3,1.9-4.1,4.1-4.1h28\n\t\t\tc2.3,0,4.1,1.9,4.1,4.1v42.6C810.6,476.4,808.8,478.3,806.5,478.3z\" />\n\t\t</g>\n\t</g>\n\t<path fill=\"#49B279\" d=\"M183.9,472.2h-28c-2.3,0-4.1-1.9-4.1-4.1v-42.6c0-2.3,1.9-4.1,4.1-4.1h28c2.3,0,4.1,1.9,4.1,4.1v42.6\n\t\tC188,470.4,186.2,472.2,183.9,472.2z\" />\n\t<path fill=\"#49B279\" d=\"M799.9,472.2h-28c-2.3,0-4.1-1.9-4.1-4.1v-42.6c0-2.3,1.9-4.1,4.1-4.1h28c2.3,0,4.1,1.9,4.1,4.1v42.6\n\t\tC804,470.4,802.1,472.2,799.9,472.2z\" />\n\t<text transform=\"matrix(1 0 0 1 488.8423 461)\" font-size=\"40\" style=\"text-anchor: middle;\" *ngIf=\"word\">{{word}}</text>\n</svg>"

/***/ },

/***/ 658:
/***/ function(module, exports) {

module.exports = "<p>\n  recently-used-words works!\n</p>\n"

/***/ },

/***/ 659:
/***/ function(module, exports) {

module.exports = "<div class=\"word-form\">\n\t<div class=\"form-group\">\n\t\t<input type=\"text\" class=\"form-control\" ([ngModel])=\"word.content\" placeholder=\"Новое слово\">\n\t</div>\n</div>"

/***/ },

/***/ 660:
/***/ function(module, exports) {

module.exports = "<div class=\"words\">\n\t<div class=\"word-item\" *ngFor=\"let word of words | async\">\n\t\t{{word.content}}\n\t</div>\n</div>"

/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(370);


/***/ }

},[693]);
//# sourceMappingURL=main.bundle.map