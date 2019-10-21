require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxbuttons');
require('../jqwidgets/jqxnumberinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxnumberinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxnumberinput = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxNumberInputComponent; }),
        multi: true
    };
    var jqxNumberInputComponent = /** @class */ (function () {
        function jqxNumberInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxNumberInputComponent events
            this.onChange = new core.EventEmitter();
            this.onTextchanged = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxNumberInputComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        ;
        jqxNumberInputComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxNumberInput(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                            this.host.jqxNumberInput(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxNumberInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxNumberInputComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxNumberInputComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxNumberInputComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxNumberInputComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
            this.host = this.widgetObject['host'];
            this.__wireEvents__();
        };
        jqxNumberInputComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxNumberInputComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxNumberInputComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.host.jqxNumberInput('val', value);
            }
        };
        jqxNumberInputComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxNumberInputComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxNumberInputComponent.prototype.setOptions = function (options) {
            this.host.jqxNumberInput('setOptions', options);
        };
        // jqxNumberInputComponent properties
        jqxNumberInputComponent.prototype.allowNull = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('allowNull', arg);
            }
            else {
                return this.host.jqxNumberInput('allowNull');
            }
        };
        jqxNumberInputComponent.prototype.decimal = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('decimal', arg);
            }
            else {
                return this.host.jqxNumberInput('decimal');
            }
        };
        jqxNumberInputComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('disabled', arg);
            }
            else {
                return this.host.jqxNumberInput('disabled');
            }
        };
        jqxNumberInputComponent.prototype.decimalDigits = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('decimalDigits', arg);
            }
            else {
                return this.host.jqxNumberInput('decimalDigits');
            }
        };
        jqxNumberInputComponent.prototype.decimalSeparator = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('decimalSeparator', arg);
            }
            else {
                return this.host.jqxNumberInput('decimalSeparator');
            }
        };
        jqxNumberInputComponent.prototype.digits = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('digits', arg);
            }
            else {
                return this.host.jqxNumberInput('digits');
            }
        };
        jqxNumberInputComponent.prototype.groupSeparator = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('groupSeparator', arg);
            }
            else {
                return this.host.jqxNumberInput('groupSeparator');
            }
        };
        jqxNumberInputComponent.prototype.groupSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('groupSize', arg);
            }
            else {
                return this.host.jqxNumberInput('groupSize');
            }
        };
        jqxNumberInputComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('height', arg);
            }
            else {
                return this.host.jqxNumberInput('height');
            }
        };
        jqxNumberInputComponent.prototype.inputMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('inputMode', arg);
            }
            else {
                return this.host.jqxNumberInput('inputMode');
            }
        };
        jqxNumberInputComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('min', arg);
            }
            else {
                return this.host.jqxNumberInput('min');
            }
        };
        jqxNumberInputComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('max', arg);
            }
            else {
                return this.host.jqxNumberInput('max');
            }
        };
        jqxNumberInputComponent.prototype.negativeSymbol = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('negativeSymbol', arg);
            }
            else {
                return this.host.jqxNumberInput('negativeSymbol');
            }
        };
        jqxNumberInputComponent.prototype.placeHolder = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('placeHolder', arg);
            }
            else {
                return this.host.jqxNumberInput('placeHolder');
            }
        };
        jqxNumberInputComponent.prototype.promptChar = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('promptChar', arg);
            }
            else {
                return this.host.jqxNumberInput('promptChar');
            }
        };
        jqxNumberInputComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('rtl', arg);
            }
            else {
                return this.host.jqxNumberInput('rtl');
            }
        };
        jqxNumberInputComponent.prototype.readOnly = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('readOnly', arg);
            }
            else {
                return this.host.jqxNumberInput('readOnly');
            }
        };
        jqxNumberInputComponent.prototype.spinMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('spinMode', arg);
            }
            else {
                return this.host.jqxNumberInput('spinMode');
            }
        };
        jqxNumberInputComponent.prototype.spinButtons = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('spinButtons', arg);
            }
            else {
                return this.host.jqxNumberInput('spinButtons');
            }
        };
        jqxNumberInputComponent.prototype.spinButtonsWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('spinButtonsWidth', arg);
            }
            else {
                return this.host.jqxNumberInput('spinButtonsWidth');
            }
        };
        jqxNumberInputComponent.prototype.spinButtonsStep = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('spinButtonsStep', arg);
            }
            else {
                return this.host.jqxNumberInput('spinButtonsStep');
            }
        };
        jqxNumberInputComponent.prototype.symbol = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('symbol', arg);
            }
            else {
                return this.host.jqxNumberInput('symbol');
            }
        };
        jqxNumberInputComponent.prototype.symbolPosition = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('symbolPosition', arg);
            }
            else {
                return this.host.jqxNumberInput('symbolPosition');
            }
        };
        jqxNumberInputComponent.prototype.textAlign = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('textAlign', arg);
            }
            else {
                return this.host.jqxNumberInput('textAlign');
            }
        };
        jqxNumberInputComponent.prototype.template = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('template', arg);
            }
            else {
                return this.host.jqxNumberInput('template');
            }
        };
        jqxNumberInputComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('theme', arg);
            }
            else {
                return this.host.jqxNumberInput('theme');
            }
        };
        jqxNumberInputComponent.prototype.value = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('value', arg);
            }
            else {
                return this.host.jqxNumberInput('value');
            }
        };
        jqxNumberInputComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxNumberInput('width', arg);
            }
            else {
                return this.host.jqxNumberInput('width');
            }
        };
        // jqxNumberInputComponent functions
        jqxNumberInputComponent.prototype.clear = function () {
            this.host.jqxNumberInput('clear');
        };
        jqxNumberInputComponent.prototype.destroy = function () {
            this.host.jqxNumberInput('destroy');
        };
        jqxNumberInputComponent.prototype.focus = function () {
            this.host.jqxNumberInput('focus');
        };
        jqxNumberInputComponent.prototype.getDecimal = function () {
            return this.host.jqxNumberInput('getDecimal');
        };
        jqxNumberInputComponent.prototype.setDecimal = function (index) {
            this.host.jqxNumberInput('setDecimal', index);
        };
        jqxNumberInputComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxNumberInput('val', value);
            }
            else {
                return this.host.jqxNumberInput('val');
            }
        };
        ;
        jqxNumberInputComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.value); });
            this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.value); });
            this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.value); });
        };
        jqxNumberInputComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('allowNull'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrAllowNull", void 0);
        __decorate([
            core.Input('decimal'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrDecimal", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('decimalDigits'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrDecimalDigits", void 0);
        __decorate([
            core.Input('decimalSeparator'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrDecimalSeparator", void 0);
        __decorate([
            core.Input('digits'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrDigits", void 0);
        __decorate([
            core.Input('groupSeparator'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrGroupSeparator", void 0);
        __decorate([
            core.Input('groupSize'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrGroupSize", void 0);
        __decorate([
            core.Input('inputMode'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrInputMode", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('negativeSymbol'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrNegativeSymbol", void 0);
        __decorate([
            core.Input('placeHolder'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrPlaceHolder", void 0);
        __decorate([
            core.Input('promptChar'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrPromptChar", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('readOnly'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrReadOnly", void 0);
        __decorate([
            core.Input('spinMode'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrSpinMode", void 0);
        __decorate([
            core.Input('spinButtons'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "attrSpinButtons", void 0);
        __decorate([
            core.Input('spinButtonsWidth'),
            __metadata("design:type", Number)
        ], jqxNumberInputComponent.prototype, "attrSpinButtonsWidth", void 0);
        __decorate([
            core.Input('spinButtonsStep'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrSpinButtonsStep", void 0);
        __decorate([
            core.Input('symbol'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrSymbol", void 0);
        __decorate([
            core.Input('symbolPosition'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrSymbolPosition", void 0);
        __decorate([
            core.Input('textAlign'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrTextAlign", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxNumberInputComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('value'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrValue", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxNumberInputComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "onTextchanged", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxNumberInputComponent.prototype, "onValueChanged", void 0);
        jqxNumberInputComponent = __decorate([
            core.Component({
                selector: 'jqxNumberInput',
                template: '<input>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxNumberInputComponent);
        return jqxNumberInputComponent;
    }()); //jqxNumberInputComponent

    var jqxNumberInputModule = /** @class */ (function () {
        function jqxNumberInputModule() {
        }
        jqxNumberInputModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxNumberInputComponent],
                exports: [jqxNumberInputComponent]
            })
        ], jqxNumberInputModule);
        return jqxNumberInputModule;
    }());

    exports.jqxNumberInputComponent = jqxNumberInputComponent;
    exports.jqxNumberInputModule = jqxNumberInputModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
