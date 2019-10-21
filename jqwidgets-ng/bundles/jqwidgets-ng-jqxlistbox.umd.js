require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxdata');
require('../jqwidgets/jqxbuttons');
require('../jqwidgets/jqxscrollbar');
require('../jqwidgets/jqxlistbox');
require('../jqwidgets/jqxdragdrop');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxlistbox', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxlistbox = {}), global.ng.core, global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxListBoxComponent; }),
        multi: true
    };
    var jqxListBoxComponent = /** @class */ (function () {
        function jqxListBoxComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoHeight', 'allowDrag', 'allowDrop', 'checkboxes', 'disabled', 'displayMember', 'dropAction', 'dragStart', 'dragEnd', 'enableHover', 'enableSelection', 'equalItemsWidth', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'hasThreeStates', 'itemHeight', 'incrementalSearch', 'incrementalSearchDelay', 'multiple', 'multipleextended', 'renderer', 'rendered', 'rtl', 'selectedIndex', 'selectedIndexes', 'source', 'scrollBarSize', 'searchMode', 'theme', 'valueMember', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxListBoxComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onCheckChange = new core.EventEmitter();
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUnselect = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxListBoxComponent.prototype.ngOnInit = function () {
        };
        ;
        jqxListBoxComponent.prototype.ngAfterViewInit = function () {
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
        jqxListBoxComponent.prototype.ngAfterViewChecked = function () {
            if (this.container) {
                if (this.content !== this.container.innerHTML) {
                    this.content = this.container.innerHTML;
                    var result = JQXLite.jqx.parseSourceTag(this.container);
                    this.host.jqxListBox({ source: result.items });
                }
            }
        };
        ;
        jqxListBoxComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxListBox(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxListBox(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxListBox(this.properties[i])) {
                            this.host.jqxListBox(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxListBoxComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxListBoxComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxListBoxComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxListBoxComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxListBoxComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListBox', options);
        };
        jqxListBoxComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxListBoxComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxListBoxComponent.prototype.writeValue = function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(this.host.val());
            }
        };
        jqxListBoxComponent.prototype.registerOnChange = function (fn) {
            this.onChangeCallback = fn;
        };
        jqxListBoxComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchedCallback = fn;
        };
        jqxListBoxComponent.prototype.setOptions = function (options) {
            this.host.jqxListBox('setOptions', options);
        };
        // jqxListBoxComponent properties
        jqxListBoxComponent.prototype.autoHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('autoHeight', arg);
            }
            else {
                return this.host.jqxListBox('autoHeight');
            }
        };
        jqxListBoxComponent.prototype.allowDrag = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('allowDrag', arg);
            }
            else {
                return this.host.jqxListBox('allowDrag');
            }
        };
        jqxListBoxComponent.prototype.allowDrop = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('allowDrop', arg);
            }
            else {
                return this.host.jqxListBox('allowDrop');
            }
        };
        jqxListBoxComponent.prototype.checkboxes = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('checkboxes', arg);
            }
            else {
                return this.host.jqxListBox('checkboxes');
            }
        };
        jqxListBoxComponent.prototype.disabled = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('disabled', arg);
            }
            else {
                return this.host.jqxListBox('disabled');
            }
        };
        jqxListBoxComponent.prototype.displayMember = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('displayMember', arg);
            }
            else {
                return this.host.jqxListBox('displayMember');
            }
        };
        jqxListBoxComponent.prototype.dropAction = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('dropAction', arg);
            }
            else {
                return this.host.jqxListBox('dropAction');
            }
        };
        jqxListBoxComponent.prototype.dragStart = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('dragStart', arg);
            }
            else {
                return this.host.jqxListBox('dragStart');
            }
        };
        jqxListBoxComponent.prototype.dragEnd = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('dragEnd', arg);
            }
            else {
                return this.host.jqxListBox('dragEnd');
            }
        };
        jqxListBoxComponent.prototype.enableHover = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('enableHover', arg);
            }
            else {
                return this.host.jqxListBox('enableHover');
            }
        };
        jqxListBoxComponent.prototype.enableSelection = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('enableSelection', arg);
            }
            else {
                return this.host.jqxListBox('enableSelection');
            }
        };
        jqxListBoxComponent.prototype.equalItemsWidth = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('equalItemsWidth', arg);
            }
            else {
                return this.host.jqxListBox('equalItemsWidth');
            }
        };
        jqxListBoxComponent.prototype.filterable = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('filterable', arg);
            }
            else {
                return this.host.jqxListBox('filterable');
            }
        };
        jqxListBoxComponent.prototype.filterHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('filterHeight', arg);
            }
            else {
                return this.host.jqxListBox('filterHeight');
            }
        };
        jqxListBoxComponent.prototype.filterDelay = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('filterDelay', arg);
            }
            else {
                return this.host.jqxListBox('filterDelay');
            }
        };
        jqxListBoxComponent.prototype.filterPlaceHolder = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('filterPlaceHolder', arg);
            }
            else {
                return this.host.jqxListBox('filterPlaceHolder');
            }
        };
        jqxListBoxComponent.prototype.height = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('height', arg);
            }
            else {
                return this.host.jqxListBox('height');
            }
        };
        jqxListBoxComponent.prototype.hasThreeStates = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('hasThreeStates', arg);
            }
            else {
                return this.host.jqxListBox('hasThreeStates');
            }
        };
        jqxListBoxComponent.prototype.itemHeight = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('itemHeight', arg);
            }
            else {
                return this.host.jqxListBox('itemHeight');
            }
        };
        jqxListBoxComponent.prototype.incrementalSearch = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('incrementalSearch', arg);
            }
            else {
                return this.host.jqxListBox('incrementalSearch');
            }
        };
        jqxListBoxComponent.prototype.incrementalSearchDelay = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('incrementalSearchDelay', arg);
            }
            else {
                return this.host.jqxListBox('incrementalSearchDelay');
            }
        };
        jqxListBoxComponent.prototype.multiple = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('multiple', arg);
            }
            else {
                return this.host.jqxListBox('multiple');
            }
        };
        jqxListBoxComponent.prototype.multipleextended = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('multipleextended', arg);
            }
            else {
                return this.host.jqxListBox('multipleextended');
            }
        };
        jqxListBoxComponent.prototype.renderer = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('renderer', arg);
            }
            else {
                return this.host.jqxListBox('renderer');
            }
        };
        jqxListBoxComponent.prototype.rendered = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('rendered', arg);
            }
            else {
                return this.host.jqxListBox('rendered');
            }
        };
        jqxListBoxComponent.prototype.rtl = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('rtl', arg);
            }
            else {
                return this.host.jqxListBox('rtl');
            }
        };
        jqxListBoxComponent.prototype.selectedIndex = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('selectedIndex', arg);
            }
            else {
                return this.host.jqxListBox('selectedIndex');
            }
        };
        jqxListBoxComponent.prototype.selectedIndexes = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('selectedIndexes', arg);
            }
            else {
                return this.host.jqxListBox('selectedIndexes');
            }
        };
        jqxListBoxComponent.prototype.source = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('source', arg);
            }
            else {
                return this.host.jqxListBox('source');
            }
        };
        jqxListBoxComponent.prototype.scrollBarSize = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('scrollBarSize', arg);
            }
            else {
                return this.host.jqxListBox('scrollBarSize');
            }
        };
        jqxListBoxComponent.prototype.searchMode = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('searchMode', arg);
            }
            else {
                return this.host.jqxListBox('searchMode');
            }
        };
        jqxListBoxComponent.prototype.theme = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('theme', arg);
            }
            else {
                return this.host.jqxListBox('theme');
            }
        };
        jqxListBoxComponent.prototype.valueMember = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('valueMember', arg);
            }
            else {
                return this.host.jqxListBox('valueMember');
            }
        };
        jqxListBoxComponent.prototype.width = function (arg) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            if (arg !== undefined) {
                this.host.jqxListBox('width', arg);
            }
            else {
                return this.host.jqxListBox('width');
            }
        };
        // jqxListBoxComponent functions
        jqxListBoxComponent.prototype.addItem = function (Item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxListBox('addItem', Item);
        };
        jqxListBoxComponent.prototype.beginUpdate = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('beginUpdate');
        };
        jqxListBoxComponent.prototype.clear = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('clear');
        };
        jqxListBoxComponent.prototype.clearSelection = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('clearSelection');
        };
        jqxListBoxComponent.prototype.checkIndex = function (Index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('checkIndex', Index);
        };
        jqxListBoxComponent.prototype.checkItem = function (Item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('checkItem', Item);
        };
        jqxListBoxComponent.prototype.checkAll = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('checkAll');
        };
        jqxListBoxComponent.prototype.clearFilter = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('clearFilter');
        };
        jqxListBoxComponent.prototype.destroy = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('destroy');
        };
        jqxListBoxComponent.prototype.disableItem = function (Item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('disableItem', Item);
        };
        jqxListBoxComponent.prototype.disableAt = function (Index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('disableAt', Index);
        };
        jqxListBoxComponent.prototype.enableItem = function (Item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('enableItem', Item);
        };
        jqxListBoxComponent.prototype.enableAt = function (Index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('enableAt', Index);
        };
        jqxListBoxComponent.prototype.ensureVisible = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('ensureVisible', item);
        };
        jqxListBoxComponent.prototype.endUpdate = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('endUpdate');
        };
        jqxListBoxComponent.prototype.focus = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('focus');
        };
        jqxListBoxComponent.prototype.getItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxListBox('getItems');
        };
        jqxListBoxComponent.prototype.getSelectedItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxListBox('getSelectedItems');
        };
        jqxListBoxComponent.prototype.getCheckedItems = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxListBox('getCheckedItems');
        };
        jqxListBoxComponent.prototype.getItem = function (Index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxListBox('getItem', Index);
        };
        jqxListBoxComponent.prototype.getItemByValue = function (Item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxListBox('getItemByValue', Item);
        };
        jqxListBoxComponent.prototype.getSelectedItem = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxListBox('getSelectedItem');
        };
        jqxListBoxComponent.prototype.getSelectedIndex = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            return this.host.jqxListBox('getSelectedIndex');
        };
        jqxListBoxComponent.prototype.insertAt = function (Item, Index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('insertAt', Item, Index);
        };
        jqxListBoxComponent.prototype.invalidate = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('invalidate');
        };
        jqxListBoxComponent.prototype.indeterminateItem = function (Item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('indeterminateItem', Item);
        };
        jqxListBoxComponent.prototype.indeterminateIndex = function (Index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('indeterminateIndex', Index);
        };
        jqxListBoxComponent.prototype.loadFromSelect = function (selector) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('loadFromSelect', selector);
        };
        jqxListBoxComponent.prototype.removeItem = function (Item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('removeItem', Item);
        };
        jqxListBoxComponent.prototype.removeAt = function (Index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('removeAt', Index);
        };
        jqxListBoxComponent.prototype.render = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('render');
        };
        jqxListBoxComponent.prototype.refresh = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('refresh');
        };
        jqxListBoxComponent.prototype.selectItem = function (Item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('selectItem', Item);
        };
        jqxListBoxComponent.prototype.selectIndex = function (Index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('selectIndex', Index);
        };
        jqxListBoxComponent.prototype.updateItem = function (Item, Value) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('updateItem', Item, Value);
        };
        jqxListBoxComponent.prototype.updateAt = function (item, index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('updateAt', item, index);
        };
        jqxListBoxComponent.prototype.unselectIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('unselectIndex', index);
        };
        jqxListBoxComponent.prototype.unselectItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('unselectItem', item);
        };
        jqxListBoxComponent.prototype.uncheckIndex = function (index) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('uncheckIndex', index);
        };
        jqxListBoxComponent.prototype.uncheckItem = function (item) {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('uncheckItem', item);
        };
        jqxListBoxComponent.prototype.uncheckAll = function () {
            if (this.autoCreate && !this.host) {
                this.createComponent();
            }
            this.host.jqxListBox('uncheckAll');
        };
        jqxListBoxComponent.prototype.val = function (value) {
            if (value !== undefined) {
                return this.host.jqxListBox('val', value);
            }
            else {
                return this.host.jqxListBox('val');
            }
        };
        ;
        jqxListBoxComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
                _this.onChangeCallback(eventData.args.item.value); });
            this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
            this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
            this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
            this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
            this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
        };
        jqxListBoxComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('autoHeight'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrAutoHeight", void 0);
        __decorate([
            core.Input('allowDrag'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrAllowDrag", void 0);
        __decorate([
            core.Input('allowDrop'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrAllowDrop", void 0);
        __decorate([
            core.Input('checkboxes'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrCheckboxes", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('displayMember'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrDisplayMember", void 0);
        __decorate([
            core.Input('dropAction'),
            __metadata("design:type", String)
        ], jqxListBoxComponent.prototype, "attrDropAction", void 0);
        __decorate([
            core.Input('dragStart'),
            __metadata("design:type", Function)
        ], jqxListBoxComponent.prototype, "attrDragStart", void 0);
        __decorate([
            core.Input('dragEnd'),
            __metadata("design:type", Function)
        ], jqxListBoxComponent.prototype, "attrDragEnd", void 0);
        __decorate([
            core.Input('enableHover'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrEnableHover", void 0);
        __decorate([
            core.Input('enableSelection'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrEnableSelection", void 0);
        __decorate([
            core.Input('equalItemsWidth'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrEqualItemsWidth", void 0);
        __decorate([
            core.Input('filterable'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrFilterable", void 0);
        __decorate([
            core.Input('filterHeight'),
            __metadata("design:type", Number)
        ], jqxListBoxComponent.prototype, "attrFilterHeight", void 0);
        __decorate([
            core.Input('filterDelay'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrFilterDelay", void 0);
        __decorate([
            core.Input('filterPlaceHolder'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrFilterPlaceHolder", void 0);
        __decorate([
            core.Input('hasThreeStates'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrHasThreeStates", void 0);
        __decorate([
            core.Input('itemHeight'),
            __metadata("design:type", Number)
        ], jqxListBoxComponent.prototype, "attrItemHeight", void 0);
        __decorate([
            core.Input('incrementalSearch'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrIncrementalSearch", void 0);
        __decorate([
            core.Input('incrementalSearchDelay'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrIncrementalSearchDelay", void 0);
        __decorate([
            core.Input('multiple'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrMultiple", void 0);
        __decorate([
            core.Input('multipleextended'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrMultipleextended", void 0);
        __decorate([
            core.Input('renderer'),
            __metadata("design:type", Function)
        ], jqxListBoxComponent.prototype, "attrRenderer", void 0);
        __decorate([
            core.Input('rendered'),
            __metadata("design:type", Function)
        ], jqxListBoxComponent.prototype, "attrRendered", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('selectedIndex'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrSelectedIndex", void 0);
        __decorate([
            core.Input('selectedIndexes'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrSelectedIndexes", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Array)
        ], jqxListBoxComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('scrollBarSize'),
            __metadata("design:type", Number)
        ], jqxListBoxComponent.prototype, "attrScrollBarSize", void 0);
        __decorate([
            core.Input('searchMode'),
            __metadata("design:type", String)
        ], jqxListBoxComponent.prototype, "attrSearchMode", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxListBoxComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('valueMember'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrValueMember", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxListBoxComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "onBindingComplete", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "onCheckChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "onSelect", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxListBoxComponent.prototype, "onUnselect", void 0);
        jqxListBoxComponent = __decorate([
            core.Component({
                selector: 'jqxListBox',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxListBoxComponent);
        return jqxListBoxComponent;
    }()); //jqxListBoxComponent

    var jqxListBoxModule = /** @class */ (function () {
        function jqxListBoxModule() {
        }
        jqxListBoxModule = __decorate([
            core.NgModule({
                imports: [
                    forms.FormsModule
                ],
                declarations: [jqxListBoxComponent],
                exports: [jqxListBoxComponent]
            })
        ], jqxListBoxModule);
        return jqxListBoxModule;
    }());

    exports.jqxListBoxComponent = jqxListBoxComponent;
    exports.jqxListBoxModule = jqxListBoxModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
