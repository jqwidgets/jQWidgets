require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxbuttons');
require('../jqwidgets/jqxslider');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxslider', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxslider = {}), global.ng.core, global.ng.forms));
}(this, function (exports, core, forms) { 'use strict';

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
    var noop = function () { };
    var ɵ0 = noop;
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return jqxSliderComponent; }),
        multi: true
    };
    var jqxSliderComponent = /** @class */ (function () {
        function jqxSliderComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['buttonsPosition', 'disabled', 'height', 'layout', 'mode', 'minorTicksFrequency', 'minorTickSize', 'max', 'min', 'orientation', 'rangeSlider', 'rtl', 'step', 'showTicks', 'showMinorTicks', 'showTickLabels', 'showButtons', 'showRange', 'template', 'theme', 'ticksPosition', 'ticksFrequency', 'tickSize', 'tickLabelFormatFunction', 'tooltip', 'tooltipHideDelay', 'tooltipPosition', 'tooltipFormatFunction', 'value', 'values', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxSliderComponent events
            this.onChange = new core.EventEmitter();
            this.onSlide = new core.EventEmitter();
            this.onSlideStart = new core.EventEmitter();
            this.onSlideEnd = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxSliderComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        ;
        jqxSliderComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxSlider(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxSlider(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxSlider(this.properties[i])) {
                            this.host.jqxSlider(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxSliderComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxSliderComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxSliderComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxSliderComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxSliderComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSlider', options);
        };
        jqxSliderComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxSliderComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        Object.defineProperty(jqxSliderComponent.prototype, "ngValue", {
            get: function () {
                if (this.widgetObject) {
                    var value = this.host.val();
                    return value;
                }
                return '';
            },
            set: function (value) {
                if (this.widgetObject) {
                    this.onChangeCallback(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        jqxSliderComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(this.host.val());
            }
        };
        jqxSliderComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxSliderComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxSliderComponent.prototype.setOptions = function (options) {
            this.host.jqxSlider('setOptions', options);
        };
        // jqxSliderComponent properties
        jqxSliderComponent.prototype.buttonsPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('buttonsPosition', arg);
            }
            else {
                return this.host.jqxSlider('buttonsPosition');
            }
        };
        jqxSliderComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('disabled', arg);
            }
            else {
                return this.host.jqxSlider('disabled');
            }
        };
        jqxSliderComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('height', arg);
            }
            else {
                return this.host.jqxSlider('height');
            }
        };
        jqxSliderComponent.prototype.layout = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('layout', arg);
            }
            else {
                return this.host.jqxSlider('layout');
            }
        };
        jqxSliderComponent.prototype.mode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('mode', arg);
            }
            else {
                return this.host.jqxSlider('mode');
            }
        };
        jqxSliderComponent.prototype.minorTicksFrequency = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('minorTicksFrequency', arg);
            }
            else {
                return this.host.jqxSlider('minorTicksFrequency');
            }
        };
        jqxSliderComponent.prototype.minorTickSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('minorTickSize', arg);
            }
            else {
                return this.host.jqxSlider('minorTickSize');
            }
        };
        jqxSliderComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('max', arg);
            }
            else {
                return this.host.jqxSlider('max');
            }
        };
        jqxSliderComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('min', arg);
            }
            else {
                return this.host.jqxSlider('min');
            }
        };
        jqxSliderComponent.prototype.orientation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('orientation', arg);
            }
            else {
                return this.host.jqxSlider('orientation');
            }
        };
        jqxSliderComponent.prototype.rangeSlider = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('rangeSlider', arg);
            }
            else {
                return this.host.jqxSlider('rangeSlider');
            }
        };
        jqxSliderComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('rtl', arg);
            }
            else {
                return this.host.jqxSlider('rtl');
            }
        };
        jqxSliderComponent.prototype.step = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('step', arg);
            }
            else {
                return this.host.jqxSlider('step');
            }
        };
        jqxSliderComponent.prototype.showTicks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('showTicks', arg);
            }
            else {
                return this.host.jqxSlider('showTicks');
            }
        };
        jqxSliderComponent.prototype.showMinorTicks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('showMinorTicks', arg);
            }
            else {
                return this.host.jqxSlider('showMinorTicks');
            }
        };
        jqxSliderComponent.prototype.showTickLabels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('showTickLabels', arg);
            }
            else {
                return this.host.jqxSlider('showTickLabels');
            }
        };
        jqxSliderComponent.prototype.showButtons = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('showButtons', arg);
            }
            else {
                return this.host.jqxSlider('showButtons');
            }
        };
        jqxSliderComponent.prototype.showRange = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('showRange', arg);
            }
            else {
                return this.host.jqxSlider('showRange');
            }
        };
        jqxSliderComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('template', arg);
            }
            else {
                return this.host.jqxSlider('template');
            }
        };
        jqxSliderComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('theme', arg);
            }
            else {
                return this.host.jqxSlider('theme');
            }
        };
        jqxSliderComponent.prototype.ticksPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('ticksPosition', arg);
            }
            else {
                return this.host.jqxSlider('ticksPosition');
            }
        };
        jqxSliderComponent.prototype.ticksFrequency = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('ticksFrequency', arg);
            }
            else {
                return this.host.jqxSlider('ticksFrequency');
            }
        };
        jqxSliderComponent.prototype.tickSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('tickSize', arg);
            }
            else {
                return this.host.jqxSlider('tickSize');
            }
        };
        jqxSliderComponent.prototype.tickLabelFormatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('tickLabelFormatFunction', arg);
            }
            else {
                return this.host.jqxSlider('tickLabelFormatFunction');
            }
        };
        jqxSliderComponent.prototype.tooltip = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('tooltip', arg);
            }
            else {
                return this.host.jqxSlider('tooltip');
            }
        };
        jqxSliderComponent.prototype.tooltipHideDelay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('tooltipHideDelay', arg);
            }
            else {
                return this.host.jqxSlider('tooltipHideDelay');
            }
        };
        jqxSliderComponent.prototype.tooltipPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('tooltipPosition', arg);
            }
            else {
                return this.host.jqxSlider('tooltipPosition');
            }
        };
        jqxSliderComponent.prototype.tooltipFormatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('tooltipFormatFunction', arg);
            }
            else {
                return this.host.jqxSlider('tooltipFormatFunction');
            }
        };
        jqxSliderComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('value', arg);
            }
            else {
                return this.host.jqxSlider('value');
            }
        };
        jqxSliderComponent.prototype.values = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('values', arg);
            }
            else {
                return this.host.jqxSlider('values');
            }
        };
        jqxSliderComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSlider('width', arg);
            }
            else {
                return this.host.jqxSlider('width');
            }
        };
        // jqxSliderComponent functions
        jqxSliderComponent.prototype.destroy = function () {
            this.host.jqxSlider('destroy');
        };
        jqxSliderComponent.prototype.decrementValue = function () {
            this.host.jqxSlider('decrementValue');
        };
        jqxSliderComponent.prototype.disable = function () {
            this.host.jqxSlider('disable');
        };
        jqxSliderComponent.prototype.enable = function () {
            this.host.jqxSlider('enable');
        };
        jqxSliderComponent.prototype.focus = function () {
            this.host.jqxSlider('focus');
        };
        jqxSliderComponent.prototype.getValue = function () {
            return this.host.jqxSlider('getValue');
        };
        jqxSliderComponent.prototype.incrementValue = function () {
            this.host.jqxSlider('incrementValue');
        };
        jqxSliderComponent.prototype.setValue = function (index) {
            this.host.jqxSlider('setValue', index);
        };
        jqxSliderComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxSlider('val', value);
            }
            else {
                return this.host.jqxSlider('val');
            }
        };
        ;
        jqxSliderComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
            this.host.on('slide', function (eventData) { _this.onSlide.emit(eventData); });
            this.host.on('slideStart', function (eventData) { _this.onSlideStart.emit(eventData); });
            this.host.on('slideEnd', function (eventData) { _this.onSlideEnd.emit(eventData); });
        };
        jqxSliderComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('buttonsPosition'),
            __metadata("design:type", String)
        ], jqxSliderComponent.prototype, "attrButtonsPosition", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('layout'),
            __metadata("design:type", String)
        ], jqxSliderComponent.prototype, "attrLayout", void 0);
        __decorate([
            core.Input('mode'),
            __metadata("design:type", String)
        ], jqxSliderComponent.prototype, "attrMode", void 0);
        __decorate([
            core.Input('minorTicksFrequency'),
            __metadata("design:type", Number)
        ], jqxSliderComponent.prototype, "attrMinorTicksFrequency", void 0);
        __decorate([
            core.Input('minorTickSize'),
            __metadata("design:type", Number)
        ], jqxSliderComponent.prototype, "attrMinorTickSize", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Number)
        ], jqxSliderComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Number)
        ], jqxSliderComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('orientation'),
            __metadata("design:type", String)
        ], jqxSliderComponent.prototype, "attrOrientation", void 0);
        __decorate([
            core.Input('rangeSlider'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrRangeSlider", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('step'),
            __metadata("design:type", Number)
        ], jqxSliderComponent.prototype, "attrStep", void 0);
        __decorate([
            core.Input('showTicks'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrShowTicks", void 0);
        __decorate([
            core.Input('showMinorTicks'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrShowMinorTicks", void 0);
        __decorate([
            core.Input('showTickLabels'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrShowTickLabels", void 0);
        __decorate([
            core.Input('showButtons'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrShowButtons", void 0);
        __decorate([
            core.Input('showRange'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrShowRange", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxSliderComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxSliderComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('ticksPosition'),
            __metadata("design:type", String)
        ], jqxSliderComponent.prototype, "attrTicksPosition", void 0);
        __decorate([
            core.Input('ticksFrequency'),
            __metadata("design:type", Number)
        ], jqxSliderComponent.prototype, "attrTicksFrequency", void 0);
        __decorate([
            core.Input('tickSize'),
            __metadata("design:type", Number)
        ], jqxSliderComponent.prototype, "attrTickSize", void 0);
        __decorate([
            core.Input('tickLabelFormatFunction'),
            __metadata("design:type", Function)
        ], jqxSliderComponent.prototype, "attrTickLabelFormatFunction", void 0);
        __decorate([
            core.Input('tooltip'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "attrTooltip", void 0);
        __decorate([
            core.Input('tooltipHideDelay'),
            __metadata("design:type", Number)
        ], jqxSliderComponent.prototype, "attrTooltipHideDelay", void 0);
        __decorate([
            core.Input('tooltipPosition'),
            __metadata("design:type", String)
        ], jqxSliderComponent.prototype, "attrTooltipPosition", void 0);
        __decorate([
            core.Input('tooltipFormatFunction'),
            __metadata("design:type", Function)
        ], jqxSliderComponent.prototype, "attrTooltipFormatFunction", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Object)
        ], jqxSliderComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('values'),
            __metadata("design:type", Array)
        ], jqxSliderComponent.prototype, "attrValues", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxSliderComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxSliderComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxSliderComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSliderComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSliderComponent.prototype, "onSlide", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSliderComponent.prototype, "onSlideStart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSliderComponent.prototype, "onSlideEnd", void 0);
        jqxSliderComponent = __decorate([
            core.Component({
                selector: 'jqxSlider',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxSliderComponent);
        return jqxSliderComponent;
    }()); //jqxSliderComponent

    var jqxSliderModule = /** @class */ (function () {
        function jqxSliderModule() {
        }
        jqxSliderModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxSliderComponent],
                exports: [jqxSliderComponent]
            })
        ], jqxSliderModule);
        return jqxSliderModule;
    }());

    exports.jqxSliderComponent = jqxSliderComponent;
    exports.jqxSliderModule = jqxSliderModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
