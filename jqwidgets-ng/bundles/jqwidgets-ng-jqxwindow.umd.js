require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxbuttons');
require('../jqwidgets/jqxwindow');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxwindow', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxwindow = {}), global.ng.core));
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
    var jqxWindowComponent = /** @class */ (function () {
        function jqxWindowComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoOpen', 'animationType', 'collapsed', 'collapseAnimationDuration', 'content', 'closeAnimationDuration', 'closeButtonSize', 'closeButtonAction', 'cancelButton', 'dragArea', 'draggable', 'disabled', 'height', 'initContent', 'isModal', 'keyboardCloseKey', 'keyboardNavigation', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'modalOpacity', 'modalZIndex', 'modalBackgroundZIndex', 'okButton', 'position', 'rtl', 'resizable', 'showAnimationDuration', 'showCloseButton', 'showCollapseButton', 'theme', 'title', 'width', 'zIndex'];
            // jqxWindowComponent events
            this.onClose = new core.EventEmitter();
            this.onCollapse = new core.EventEmitter();
            this.onExpand = new core.EventEmitter();
            this.onMoving = new core.EventEmitter();
            this.onMoved = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onResizing = new core.EventEmitter();
            this.onResized = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxWindowComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        ;
        jqxWindowComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxWindow(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxWindow(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxWindow(this.properties[i])) {
                            this.host.jqxWindow(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxWindowComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxWindowComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxWindowComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxWindowComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxWindowComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxWindow', options);
        };
        jqxWindowComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxWindowComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxWindowComponent.prototype.setOptions = function (options) {
            this.host.jqxWindow('setOptions', options);
        };
        // jqxWindowComponent properties
        jqxWindowComponent.prototype.autoOpen = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('autoOpen', arg);
            }
            else {
                return this.host.jqxWindow('autoOpen');
            }
        };
        jqxWindowComponent.prototype.animationType = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('animationType', arg);
            }
            else {
                return this.host.jqxWindow('animationType');
            }
        };
        jqxWindowComponent.prototype.collapsed = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('collapsed', arg);
            }
            else {
                return this.host.jqxWindow('collapsed');
            }
        };
        jqxWindowComponent.prototype.collapseAnimationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('collapseAnimationDuration', arg);
            }
            else {
                return this.host.jqxWindow('collapseAnimationDuration');
            }
        };
        jqxWindowComponent.prototype.content = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('content', arg);
            }
            else {
                return this.host.jqxWindow('content');
            }
        };
        jqxWindowComponent.prototype.closeAnimationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('closeAnimationDuration', arg);
            }
            else {
                return this.host.jqxWindow('closeAnimationDuration');
            }
        };
        jqxWindowComponent.prototype.closeButtonSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('closeButtonSize', arg);
            }
            else {
                return this.host.jqxWindow('closeButtonSize');
            }
        };
        jqxWindowComponent.prototype.closeButtonAction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('closeButtonAction', arg);
            }
            else {
                return this.host.jqxWindow('closeButtonAction');
            }
        };
        jqxWindowComponent.prototype.cancelButton = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('cancelButton', arg);
            }
            else {
                return this.host.jqxWindow('cancelButton');
            }
        };
        jqxWindowComponent.prototype.dragArea = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('dragArea', arg);
            }
            else {
                return this.host.jqxWindow('dragArea');
            }
        };
        jqxWindowComponent.prototype.draggable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('draggable', arg);
            }
            else {
                return this.host.jqxWindow('draggable');
            }
        };
        jqxWindowComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('disabled', arg);
            }
            else {
                return this.host.jqxWindow('disabled');
            }
        };
        jqxWindowComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('height', arg);
            }
            else {
                return this.host.jqxWindow('height');
            }
        };
        jqxWindowComponent.prototype.initContent = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('initContent', arg);
            }
            else {
                return this.host.jqxWindow('initContent');
            }
        };
        jqxWindowComponent.prototype.isModal = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('isModal', arg);
            }
            else {
                return this.host.jqxWindow('isModal');
            }
        };
        jqxWindowComponent.prototype.keyboardCloseKey = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('keyboardCloseKey', arg);
            }
            else {
                return this.host.jqxWindow('keyboardCloseKey');
            }
        };
        jqxWindowComponent.prototype.keyboardNavigation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('keyboardNavigation', arg);
            }
            else {
                return this.host.jqxWindow('keyboardNavigation');
            }
        };
        jqxWindowComponent.prototype.minHeight = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('minHeight', arg);
            }
            else {
                return this.host.jqxWindow('minHeight');
            }
        };
        jqxWindowComponent.prototype.maxHeight = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('maxHeight', arg);
            }
            else {
                return this.host.jqxWindow('maxHeight');
            }
        };
        jqxWindowComponent.prototype.minWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('minWidth', arg);
            }
            else {
                return this.host.jqxWindow('minWidth');
            }
        };
        jqxWindowComponent.prototype.maxWidth = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('maxWidth', arg);
            }
            else {
                return this.host.jqxWindow('maxWidth');
            }
        };
        jqxWindowComponent.prototype.modalOpacity = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('modalOpacity', arg);
            }
            else {
                return this.host.jqxWindow('modalOpacity');
            }
        };
        jqxWindowComponent.prototype.modalZIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('modalZIndex', arg);
            }
            else {
                return this.host.jqxWindow('modalZIndex');
            }
        };
        jqxWindowComponent.prototype.modalBackgroundZIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('modalBackgroundZIndex', arg);
            }
            else {
                return this.host.jqxWindow('modalBackgroundZIndex');
            }
        };
        jqxWindowComponent.prototype.okButton = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('okButton', arg);
            }
            else {
                return this.host.jqxWindow('okButton');
            }
        };
        jqxWindowComponent.prototype.position = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('position', arg);
            }
            else {
                return this.host.jqxWindow('position');
            }
        };
        jqxWindowComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('rtl', arg);
            }
            else {
                return this.host.jqxWindow('rtl');
            }
        };
        jqxWindowComponent.prototype.resizable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('resizable', arg);
            }
            else {
                return this.host.jqxWindow('resizable');
            }
        };
        jqxWindowComponent.prototype.showAnimationDuration = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('showAnimationDuration', arg);
            }
            else {
                return this.host.jqxWindow('showAnimationDuration');
            }
        };
        jqxWindowComponent.prototype.showCloseButton = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('showCloseButton', arg);
            }
            else {
                return this.host.jqxWindow('showCloseButton');
            }
        };
        jqxWindowComponent.prototype.showCollapseButton = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('showCollapseButton', arg);
            }
            else {
                return this.host.jqxWindow('showCollapseButton');
            }
        };
        jqxWindowComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('theme', arg);
            }
            else {
                return this.host.jqxWindow('theme');
            }
        };
        jqxWindowComponent.prototype.title = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('title', arg);
            }
            else {
                return this.host.jqxWindow('title');
            }
        };
        jqxWindowComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('width', arg);
            }
            else {
                return this.host.jqxWindow('width');
            }
        };
        jqxWindowComponent.prototype.zIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxWindow('zIndex', arg);
            }
            else {
                return this.host.jqxWindow('zIndex');
            }
        };
        // jqxWindowComponent functions
        jqxWindowComponent.prototype.bringToFront = function () {
            this.host.jqxWindow('bringToFront');
        };
        jqxWindowComponent.prototype.close = function () {
            this.host.jqxWindow('close');
        };
        jqxWindowComponent.prototype.collapse = function () {
            this.host.jqxWindow('collapse');
        };
        jqxWindowComponent.prototype.closeAll = function () {
            this.host.jqxWindow('closeAll');
        };
        jqxWindowComponent.prototype.disable = function () {
            this.host.jqxWindow('disable');
        };
        jqxWindowComponent.prototype.destroy = function () {
            this.host.jqxWindow('destroy');
        };
        jqxWindowComponent.prototype.enable = function () {
            this.host.jqxWindow('enable');
        };
        jqxWindowComponent.prototype.expand = function () {
            this.host.jqxWindow('expand');
        };
        jqxWindowComponent.prototype.focus = function () {
            this.host.jqxWindow('focus');
        };
        jqxWindowComponent.prototype.isOpen = function () {
            return this.host.jqxWindow('isOpen');
        };
        jqxWindowComponent.prototype.move = function (top, left) {
            this.host.jqxWindow('move', top, left);
        };
        jqxWindowComponent.prototype.open = function () {
            this.host.jqxWindow('open');
        };
        jqxWindowComponent.prototype.hide = function () {
            this.host.jqxWindow('hide');
        };
        jqxWindowComponent.prototype.resize = function (top, left) {
            this.host.jqxWindow('resize', top, left);
        };
        jqxWindowComponent.prototype.setTitle = function (title) {
            this.host.jqxWindow('setTitle', title);
        };
        jqxWindowComponent.prototype.setContent = function (content) {
            this.host.jqxWindow('setContent', content);
        };
        jqxWindowComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
            this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
            this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
            this.host.on('moving', function (eventData) { _this.onMoving.emit(eventData); });
            this.host.on('moved', function (eventData) { _this.onMoved.emit(eventData); });
            this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
            this.host.on('resizing', function (eventData) { _this.onResizing.emit(eventData); });
            this.host.on('resized', function (eventData) { _this.onResized.emit(eventData); });
        };
        jqxWindowComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('autoOpen'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrAutoOpen", void 0);
        __decorate([
            core.Input('animationType'),
            __metadata("design:type", String)
        ], jqxWindowComponent.prototype, "attrAnimationType", void 0);
        __decorate([
            core.Input('collapsed'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrCollapsed", void 0);
        __decorate([
            core.Input('collapseAnimationDuration'),
            __metadata("design:type", Number)
        ], jqxWindowComponent.prototype, "attrCollapseAnimationDuration", void 0);
        __decorate([
            core.Input('content'),
            __metadata("design:type", String)
        ], jqxWindowComponent.prototype, "attrContent", void 0);
        __decorate([
            core.Input('closeAnimationDuration'),
            __metadata("design:type", Number)
        ], jqxWindowComponent.prototype, "attrCloseAnimationDuration", void 0);
        __decorate([
            core.Input('closeButtonSize'),
            __metadata("design:type", Number)
        ], jqxWindowComponent.prototype, "attrCloseButtonSize", void 0);
        __decorate([
            core.Input('closeButtonAction'),
            __metadata("design:type", String)
        ], jqxWindowComponent.prototype, "attrCloseButtonAction", void 0);
        __decorate([
            core.Input('cancelButton'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrCancelButton", void 0);
        __decorate([
            core.Input('dragArea'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrDragArea", void 0);
        __decorate([
            core.Input('draggable'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrDraggable", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('initContent'),
            __metadata("design:type", Function)
        ], jqxWindowComponent.prototype, "attrInitContent", void 0);
        __decorate([
            core.Input('isModal'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrIsModal", void 0);
        __decorate([
            core.Input('keyboardCloseKey'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrKeyboardCloseKey", void 0);
        __decorate([
            core.Input('keyboardNavigation'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrKeyboardNavigation", void 0);
        __decorate([
            core.Input('minHeight'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrMinHeight", void 0);
        __decorate([
            core.Input('maxHeight'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrMaxHeight", void 0);
        __decorate([
            core.Input('minWidth'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrMinWidth", void 0);
        __decorate([
            core.Input('maxWidth'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrMaxWidth", void 0);
        __decorate([
            core.Input('modalOpacity'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrModalOpacity", void 0);
        __decorate([
            core.Input('modalZIndex'),
            __metadata("design:type", Number)
        ], jqxWindowComponent.prototype, "attrModalZIndex", void 0);
        __decorate([
            core.Input('modalBackgroundZIndex'),
            __metadata("design:type", Number)
        ], jqxWindowComponent.prototype, "attrModalBackgroundZIndex", void 0);
        __decorate([
            core.Input('okButton'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrOkButton", void 0);
        __decorate([
            core.Input('position'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrPosition", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('resizable'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrResizable", void 0);
        __decorate([
            core.Input('showAnimationDuration'),
            __metadata("design:type", Number)
        ], jqxWindowComponent.prototype, "attrShowAnimationDuration", void 0);
        __decorate([
            core.Input('showCloseButton'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrShowCloseButton", void 0);
        __decorate([
            core.Input('showCollapseButton'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "attrShowCollapseButton", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxWindowComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('title'),
            __metadata("design:type", String)
        ], jqxWindowComponent.prototype, "attrTitle", void 0);
        __decorate([
            core.Input('zIndex'),
            __metadata("design:type", Number)
        ], jqxWindowComponent.prototype, "attrZIndex", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxWindowComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "onExpand", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "onMoving", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "onMoved", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "onResizing", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxWindowComponent.prototype, "onResized", void 0);
        jqxWindowComponent = __decorate([
            core.Component({
                selector: 'jqxWindow',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxWindowComponent);
        return jqxWindowComponent;
    }()); //jqxWindowComponent

    var jqxWindowModule = /** @class */ (function () {
        function jqxWindowModule() {
        }
        jqxWindowModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxWindowComponent],
                exports: [jqxWindowComponent]
            })
        ], jqxWindowModule);
        return jqxWindowModule;
    }());

    exports.jqxWindowComponent = jqxWindowComponent;
    exports.jqxWindowModule = jqxWindowModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
