require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxbuttons');
require('../jqwidgets/jqxscrollview');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxscrollview', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxscrollview = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /// <reference path="../../jqwidgets.d.ts" />
    var jqxScrollViewComponent = /** @class */ (function () {
        function jqxScrollViewComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'bounceEnabled', 'buttonsOffset', 'currentPage', 'disabled', 'height', 'moveThreshold', 'showButtons', 'slideShow', 'slideDuration', 'theme', 'width'];
            // jqxScrollViewComponent events
            this.onPageChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxScrollViewComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        ;
        jqxScrollViewComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollView(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxScrollView(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxScrollView(this.properties[i])) {
                            this.host.jqxScrollView(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxScrollViewComponent.prototype.arraysEqual = function (attrValue, hostValue) {
            if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
                return false;
            }
            if (attrValue.length != hostValue.length) {
                return false;
            }
            for (var i = 0; i < attrValue.length; i++) {
                if (attrValue[i] !== hostValue[i]) {
                    return false;
                }
            }
            return true;
        };
        jqxScrollViewComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxScrollViewComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxScrollViewComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxScrollViewComponent.prototype.createComponent = function (options) {
            if (this.host) {
                return;
            }
            if (options) {
                JQXLite.extend(options, this.manageAttributes());
            }
            else {
                options = this.manageAttributes();
            }
            this.host = JQXLite(this.elementRef.nativeElement.firstChild);
            this.moveClasses(this.elementRef.nativeElement, this.host[0]);
            this.moveStyles(this.elementRef.nativeElement, this.host[0]);
            this.__wireEvents__();
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
        };
        jqxScrollViewComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxScrollViewComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxScrollViewComponent.prototype.setOptions = function (options) {
            this.host.jqxScrollView('setOptions', options);
        };
        // jqxScrollViewComponent properties
        jqxScrollViewComponent.prototype.animationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('animationDuration', arg);
            }
            else {
                return this.host.jqxScrollView('animationDuration');
            }
        };
        jqxScrollViewComponent.prototype.bounceEnabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('bounceEnabled', arg);
            }
            else {
                return this.host.jqxScrollView('bounceEnabled');
            }
        };
        jqxScrollViewComponent.prototype.buttonsOffset = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('buttonsOffset', arg);
            }
            else {
                return this.host.jqxScrollView('buttonsOffset');
            }
        };
        jqxScrollViewComponent.prototype.currentPage = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('currentPage', arg);
            }
            else {
                return this.host.jqxScrollView('currentPage');
            }
        };
        jqxScrollViewComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('disabled', arg);
            }
            else {
                return this.host.jqxScrollView('disabled');
            }
        };
        jqxScrollViewComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('height', arg);
            }
            else {
                return this.host.jqxScrollView('height');
            }
        };
        jqxScrollViewComponent.prototype.moveThreshold = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('moveThreshold', arg);
            }
            else {
                return this.host.jqxScrollView('moveThreshold');
            }
        };
        jqxScrollViewComponent.prototype.showButtons = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('showButtons', arg);
            }
            else {
                return this.host.jqxScrollView('showButtons');
            }
        };
        jqxScrollViewComponent.prototype.slideShow = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('slideShow', arg);
            }
            else {
                return this.host.jqxScrollView('slideShow');
            }
        };
        jqxScrollViewComponent.prototype.slideDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('slideDuration', arg);
            }
            else {
                return this.host.jqxScrollView('slideDuration');
            }
        };
        jqxScrollViewComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('theme', arg);
            }
            else {
                return this.host.jqxScrollView('theme');
            }
        };
        jqxScrollViewComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxScrollView('width', arg);
            }
            else {
                return this.host.jqxScrollView('width');
            }
        };
        // jqxScrollViewComponent functions
        jqxScrollViewComponent.prototype.back = function () {
            this.host.jqxScrollView('back');
        };
        jqxScrollViewComponent.prototype.changePage = function (index) {
            this.host.jqxScrollView('changePage', index);
        };
        jqxScrollViewComponent.prototype.forward = function () {
            this.host.jqxScrollView('forward');
        };
        jqxScrollViewComponent.prototype.refresh = function () {
            this.host.jqxScrollView('refresh');
        };
        jqxScrollViewComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
        };
        jqxScrollViewComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('animationDuration'),
            __metadata("design:type", Number)
        ], jqxScrollViewComponent.prototype, "attrAnimationDuration", void 0);
        __decorate([
            core.Input('bounceEnabled'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "attrBounceEnabled", void 0);
        __decorate([
            core.Input('buttonsOffset'),
            __metadata("design:type", Array)
        ], jqxScrollViewComponent.prototype, "attrButtonsOffset", void 0);
        __decorate([
            core.Input('currentPage'),
            __metadata("design:type", Number)
        ], jqxScrollViewComponent.prototype, "attrCurrentPage", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('moveThreshold'),
            __metadata("design:type", Number)
        ], jqxScrollViewComponent.prototype, "attrMoveThreshold", void 0);
        __decorate([
            core.Input('showButtons'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "attrShowButtons", void 0);
        __decorate([
            core.Input('slideShow'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "attrSlideShow", void 0);
        __decorate([
            core.Input('slideDuration'),
            __metadata("design:type", Number)
        ], jqxScrollViewComponent.prototype, "attrSlideDuration", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxScrollViewComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxScrollViewComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxScrollViewComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxScrollViewComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxScrollViewComponent.prototype, "onPageChanged", void 0);
        jqxScrollViewComponent = __decorate([
            core.Component({
                selector: 'jqxScrollView',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxScrollViewComponent);
        return jqxScrollViewComponent;
    }()); //jqxScrollViewComponent

    var jqxScrollViewModule = /** @class */ (function () {
        function jqxScrollViewModule() {
        }
        jqxScrollViewModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxScrollViewComponent],
                exports: [jqxScrollViewComponent]
            })
        ], jqxScrollViewModule);
        return jqxScrollViewModule;
    }());

    exports.jqxScrollViewComponent = jqxScrollViewComponent;
    exports.jqxScrollViewModule = jqxScrollViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
