require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxdata');
require('../jqwidgets/jqxbuttons');
require('../jqwidgets/jqxscrollbar');
require('../jqwidgets/jqxlistbox');
require('../jqwidgets/jqxdropdownlist');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdropdownlist', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdropdownlist = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxDropDownListComponent; }),
        multi: true
    };
    var jqxDropDownListComponent = /** @class */ (function () {
        function jqxDropDownListComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoOpen', 'autoDropDownHeight', 'animationType', 'checkboxes', 'closeDelay', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableSelection', 'enableBrowserBoundsDetection', 'enableHover', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'incrementalSearch', 'incrementalSearchDelay', 'itemHeight', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'renderer', 'selectionRenderer', 'searchMode', 'source', 'selectedIndex', 'theme', 'template', 'valueMember', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxDropDownListComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onCheckChange = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUnselect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxDropDownListComponent.prototype.ngOnInit = function () {
        };
        ;
        jqxDropDownListComponent.prototype.ngAfterViewInit = function () {
            var children = JQXLite(this.elementRef.nativeElement.children).find('li');
            var html = '';
            var options = {};
            if (children.length > 0) {
                this.container = document.createElement('div');
                html = this.elementRef.nativeElement.innerHTML;
                this.container.appendChild(this.elementRef.nativeElement.firstChild);
                this.elementRef.nativeElement.innerHTML = html;
                this.content = html;
                var result = JQXLite.jqx.parseSourceTag(this.container);
                options['source'] = result.items;
            }
            if (this.autoCreate) {
                this.createComponent(options);
            }
        };
        ;
        jqxDropDownListComponent.prototype.ngAfterViewChecked = function () {
            if (this.container) {
                if (this.content !== this.container.innerHTML) {
                    this.content = this.container.innerHTML;
                    var result = JQXLite.jqx.parseSourceTag(this.container);
                    this.host.jqxDropDownList({ source: result.items });
                }
            }
        };
        ;
        jqxDropDownListComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownList(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxDropDownList(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxDropDownList(this.properties[i])) {
                            this.host.jqxDropDownList(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxDropDownListComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxDropDownListComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxDropDownListComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxDropDownListComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxDropDownListComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownList', options);
        };
        jqxDropDownListComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxDropDownListComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxDropDownListComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(this.host.val());
            }
        };
        jqxDropDownListComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxDropDownListComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxDropDownListComponent.prototype.setOptions = function (options) {
            this.host.jqxDropDownList('setOptions', options);
        };
        // jqxDropDownListComponent properties
        jqxDropDownListComponent.prototype.autoOpen = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('autoOpen', arg);
            }
            else {
                return this.host.jqxDropDownList('autoOpen');
            }
        };
        jqxDropDownListComponent.prototype.autoDropDownHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('autoDropDownHeight', arg);
            }
            else {
                return this.host.jqxDropDownList('autoDropDownHeight');
            }
        };
        jqxDropDownListComponent.prototype.animationType = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('animationType', arg);
            }
            else {
                return this.host.jqxDropDownList('animationType');
            }
        };
        jqxDropDownListComponent.prototype.checkboxes = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('checkboxes', arg);
            }
            else {
                return this.host.jqxDropDownList('checkboxes');
            }
        };
        jqxDropDownListComponent.prototype.closeDelay = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('closeDelay', arg);
            }
            else {
                return this.host.jqxDropDownList('closeDelay');
            }
        };
        jqxDropDownListComponent.prototype.disabled = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('disabled', arg);
            }
            else {
                return this.host.jqxDropDownList('disabled');
            }
        };
        jqxDropDownListComponent.prototype.displayMember = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('displayMember', arg);
            }
            else {
                return this.host.jqxDropDownList('displayMember');
            }
        };
        jqxDropDownListComponent.prototype.dropDownHorizontalAlignment = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('dropDownHorizontalAlignment', arg);
            }
            else {
                return this.host.jqxDropDownList('dropDownHorizontalAlignment');
            }
        };
        jqxDropDownListComponent.prototype.dropDownVerticalAlignment = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('dropDownVerticalAlignment', arg);
            }
            else {
                return this.host.jqxDropDownList('dropDownVerticalAlignment');
            }
        };
        jqxDropDownListComponent.prototype.dropDownHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('dropDownHeight', arg);
            }
            else {
                return this.host.jqxDropDownList('dropDownHeight');
            }
        };
        jqxDropDownListComponent.prototype.dropDownWidth = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('dropDownWidth', arg);
            }
            else {
                return this.host.jqxDropDownList('dropDownWidth');
            }
        };
        jqxDropDownListComponent.prototype.enableSelection = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('enableSelection', arg);
            }
            else {
                return this.host.jqxDropDownList('enableSelection');
            }
        };
        jqxDropDownListComponent.prototype.enableBrowserBoundsDetection = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('enableBrowserBoundsDetection', arg);
            }
            else {
                return this.host.jqxDropDownList('enableBrowserBoundsDetection');
            }
        };
        jqxDropDownListComponent.prototype.enableHover = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('enableHover', arg);
            }
            else {
                return this.host.jqxDropDownList('enableHover');
            }
        };
        jqxDropDownListComponent.prototype.filterable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('filterable', arg);
            }
            else {
                return this.host.jqxDropDownList('filterable');
            }
        };
        jqxDropDownListComponent.prototype.filterHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('filterHeight', arg);
            }
            else {
                return this.host.jqxDropDownList('filterHeight');
            }
        };
        jqxDropDownListComponent.prototype.filterDelay = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('filterDelay', arg);
            }
            else {
                return this.host.jqxDropDownList('filterDelay');
            }
        };
        jqxDropDownListComponent.prototype.filterPlaceHolder = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('filterPlaceHolder', arg);
            }
            else {
                return this.host.jqxDropDownList('filterPlaceHolder');
            }
        };
        jqxDropDownListComponent.prototype.height = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('height', arg);
            }
            else {
                return this.host.jqxDropDownList('height');
            }
        };
        jqxDropDownListComponent.prototype.incrementalSearch = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('incrementalSearch', arg);
            }
            else {
                return this.host.jqxDropDownList('incrementalSearch');
            }
        };
        jqxDropDownListComponent.prototype.incrementalSearchDelay = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('incrementalSearchDelay', arg);
            }
            else {
                return this.host.jqxDropDownList('incrementalSearchDelay');
            }
        };
        jqxDropDownListComponent.prototype.itemHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('itemHeight', arg);
            }
            else {
                return this.host.jqxDropDownList('itemHeight');
            }
        };
        jqxDropDownListComponent.prototype.openDelay = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('openDelay', arg);
            }
            else {
                return this.host.jqxDropDownList('openDelay');
            }
        };
        jqxDropDownListComponent.prototype.placeHolder = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('placeHolder', arg);
            }
            else {
                return this.host.jqxDropDownList('placeHolder');
            }
        };
        jqxDropDownListComponent.prototype.popupZIndex = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('popupZIndex', arg);
            }
            else {
                return this.host.jqxDropDownList('popupZIndex');
            }
        };
        jqxDropDownListComponent.prototype.rtl = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('rtl', arg);
            }
            else {
                return this.host.jqxDropDownList('rtl');
            }
        };
        jqxDropDownListComponent.prototype.renderer = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('renderer', arg);
            }
            else {
                return this.host.jqxDropDownList('renderer');
            }
        };
        jqxDropDownListComponent.prototype.selectionRenderer = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('selectionRenderer', arg);
            }
            else {
                return this.host.jqxDropDownList('selectionRenderer');
            }
        };
        jqxDropDownListComponent.prototype.searchMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('searchMode', arg);
            }
            else {
                return this.host.jqxDropDownList('searchMode');
            }
        };
        jqxDropDownListComponent.prototype.source = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('source', arg);
            }
            else {
                return this.host.jqxDropDownList('source');
            }
        };
        jqxDropDownListComponent.prototype.selectedIndex = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('selectedIndex', arg);
            }
            else {
                return this.host.jqxDropDownList('selectedIndex');
            }
        };
        jqxDropDownListComponent.prototype.theme = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('theme', arg);
            }
            else {
                return this.host.jqxDropDownList('theme');
            }
        };
        jqxDropDownListComponent.prototype.template = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('template', arg);
            }
            else {
                return this.host.jqxDropDownList('template');
            }
        };
        jqxDropDownListComponent.prototype.valueMember = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('valueMember', arg);
            }
            else {
                return this.host.jqxDropDownList('valueMember');
            }
        };
        jqxDropDownListComponent.prototype.width = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxDropDownList('width', arg);
            }
            else {
                return this.host.jqxDropDownList('width');
            }
        };
        // jqxDropDownListComponent functions
        jqxDropDownListComponent.prototype.addItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDropDownList('addItem', item);
        };
        jqxDropDownListComponent.prototype.clearSelection = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('clearSelection');
        };
        jqxDropDownListComponent.prototype.clear = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('clear');
        };
        jqxDropDownListComponent.prototype.close = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('close');
        };
        jqxDropDownListComponent.prototype.checkIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('checkIndex', index);
        };
        jqxDropDownListComponent.prototype.checkItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('checkItem', item);
        };
        jqxDropDownListComponent.prototype.checkAll = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('checkAll');
        };
        jqxDropDownListComponent.prototype.clearFilter = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('clearFilter');
        };
        jqxDropDownListComponent.prototype.destroy = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('destroy');
        };
        jqxDropDownListComponent.prototype.disableItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('disableItem', item);
        };
        jqxDropDownListComponent.prototype.disableAt = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('disableAt', index);
        };
        jqxDropDownListComponent.prototype.enableItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('enableItem', item);
        };
        jqxDropDownListComponent.prototype.enableAt = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('enableAt', index);
        };
        jqxDropDownListComponent.prototype.ensureVisible = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('ensureVisible', index);
        };
        jqxDropDownListComponent.prototype.focus = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('focus');
        };
        jqxDropDownListComponent.prototype.getItem = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDropDownList('getItem', index);
        };
        jqxDropDownListComponent.prototype.getItemByValue = function (itemValue) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDropDownList('getItemByValue', itemValue);
        };
        jqxDropDownListComponent.prototype.getItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDropDownList('getItems');
        };
        jqxDropDownListComponent.prototype.getCheckedItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDropDownList('getCheckedItems');
        };
        jqxDropDownListComponent.prototype.getSelectedItem = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDropDownList('getSelectedItem');
        };
        jqxDropDownListComponent.prototype.getSelectedIndex = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDropDownList('getSelectedIndex');
        };
        jqxDropDownListComponent.prototype.insertAt = function (item, index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('insertAt', item, index);
        };
        jqxDropDownListComponent.prototype.isOpened = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxDropDownList('isOpened');
        };
        jqxDropDownListComponent.prototype.indeterminateIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('indeterminateIndex', index);
        };
        jqxDropDownListComponent.prototype.indeterminateItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('indeterminateItem', item);
        };
        jqxDropDownListComponent.prototype.loadFromSelect = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('loadFromSelect', arg);
        };
        jqxDropDownListComponent.prototype.open = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('open');
        };
        jqxDropDownListComponent.prototype.removeItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('removeItem', item);
        };
        jqxDropDownListComponent.prototype.removeAt = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('removeAt', index);
        };
        jqxDropDownListComponent.prototype.selectIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('selectIndex', index);
        };
        jqxDropDownListComponent.prototype.selectItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('selectItem', item);
        };
        jqxDropDownListComponent.prototype.setContent = function (content) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('setContent', content);
        };
        jqxDropDownListComponent.prototype.updateItem = function (newItem, item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('updateItem', newItem, item);
        };
        jqxDropDownListComponent.prototype.updateAt = function (item, index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('updateAt', item, index);
        };
        jqxDropDownListComponent.prototype.unselectIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('unselectIndex', index);
        };
        jqxDropDownListComponent.prototype.unselectItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('unselectItem', item);
        };
        jqxDropDownListComponent.prototype.uncheckIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('uncheckIndex', index);
        };
        jqxDropDownListComponent.prototype.uncheckItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('uncheckItem', item);
        };
        jqxDropDownListComponent.prototype.uncheckAll = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxDropDownList('uncheckAll');
        };
        jqxDropDownListComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxDropDownList('val', value);
            }
            else {
                return this.host.jqxDropDownList('val');
            }
        };
        ;
        jqxDropDownListComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.item.value); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
            this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
            this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
        };
        jqxDropDownListComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('autoOpen'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrAutoOpen", void 0);
        __decorate([
            core.Input('autoDropDownHeight'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrAutoDropDownHeight", void 0);
        __decorate([
            core.Input('animationType'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrAnimationType", void 0);
        __decorate([
            core.Input('checkboxes'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrCheckboxes", void 0);
        __decorate([
            core.Input('closeDelay'),
            __metadata("design:type", Number)
        ], jqxDropDownListComponent.prototype, "attrCloseDelay", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('displayMember'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrDisplayMember", void 0);
        __decorate([
            core.Input('dropDownHorizontalAlignment'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
        __decorate([
            core.Input('dropDownVerticalAlignment'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrDropDownVerticalAlignment", void 0);
        __decorate([
            core.Input('dropDownHeight'),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "attrDropDownHeight", void 0);
        __decorate([
            core.Input('dropDownWidth'),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "attrDropDownWidth", void 0);
        __decorate([
            core.Input('enableSelection'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrEnableSelection", void 0);
        __decorate([
            core.Input('enableBrowserBoundsDetection'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
        __decorate([
            core.Input('enableHover'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrEnableHover", void 0);
        __decorate([
            core.Input('filterable'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrFilterable", void 0);
        __decorate([
            core.Input('filterHeight'),
            __metadata("design:type", Number)
        ], jqxDropDownListComponent.prototype, "attrFilterHeight", void 0);
        __decorate([
            core.Input('filterDelay'),
            __metadata("design:type", Number)
        ], jqxDropDownListComponent.prototype, "attrFilterDelay", void 0);
        __decorate([
            core.Input('filterPlaceHolder'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrFilterPlaceHolder", void 0);
        __decorate([
            core.Input('incrementalSearch'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrIncrementalSearch", void 0);
        __decorate([
            core.Input('incrementalSearchDelay'),
            __metadata("design:type", Number)
        ], jqxDropDownListComponent.prototype, "attrIncrementalSearchDelay", void 0);
        __decorate([
            core.Input('itemHeight'),
            __metadata("design:type", Number)
        ], jqxDropDownListComponent.prototype, "attrItemHeight", void 0);
        __decorate([
            core.Input('openDelay'),
            __metadata("design:type", Number)
        ], jqxDropDownListComponent.prototype, "attrOpenDelay", void 0);
        __decorate([
            core.Input('placeHolder'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrPlaceHolder", void 0);
        __decorate([
            core.Input('popupZIndex'),
            __metadata("design:type", Number)
        ], jqxDropDownListComponent.prototype, "attrPopupZIndex", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('renderer'),
            __metadata("design:type", Function)
        ], jqxDropDownListComponent.prototype, "attrRenderer", void 0);
        __decorate([
            core.Input('selectionRenderer'),
            __metadata("design:type", Function)
        ], jqxDropDownListComponent.prototype, "attrSelectionRenderer", void 0);
        __decorate([
            core.Input('searchMode'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrSearchMode", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Array)
        ], jqxDropDownListComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('selectedIndex'),
            __metadata("design:type", Number)
        ], jqxDropDownListComponent.prototype, "attrSelectedIndex", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('template'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrTemplate", void 0);
        __decorate([
            core.Input('valueMember'),
            __metadata("design:type", String)
        ], jqxDropDownListComponent.prototype, "attrValueMember", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxDropDownListComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "onBindingComplete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "onCheckChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "onSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDropDownListComponent.prototype, "onUnselect", void 0);
        jqxDropDownListComponent = __decorate([
            core.Component({
                selector: 'jqxDropDownList',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxDropDownListComponent);
        return jqxDropDownListComponent;
    }()); //jqxDropDownListComponent

    var jqxDropDownListModule = /** @class */ (function () {
        function jqxDropDownListModule() {
        }
        jqxDropDownListModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxDropDownListComponent],
                exports: [jqxDropDownListComponent]
            })
        ], jqxDropDownListModule);
        return jqxDropDownListModule;
    }());

    exports.jqxDropDownListComponent = jqxDropDownListComponent;
    exports.jqxDropDownListModule = jqxDropDownListModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
