require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxbuttons');
require('../jqwidgets/jqxwindow');
require('../jqwidgets/jqxdocking');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdocking', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdocking = {}), global.ng.core));
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
    var jqxDockingComponent = /** @class */ (function () {
        function jqxDockingComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['cookies', 'cookieOptions', 'disabled', 'floatingWindowOpacity', 'height', 'keyboardNavigation', 'mode', 'orientation', 'rtl', 'theme', 'width', 'windowsMode', 'windowsOffset'];
            // jqxDockingComponent events
            this.onDragStart = new core.EventEmitter();
            this.onDragEnd = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxDockingComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        ;
        jqxDockingComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxDocking(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxDocking(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxDocking(this.properties[i])) {
                            this.host.jqxDocking(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxDockingComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxDockingComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxDockingComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxDockingComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxDockingComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDocking', options);
        };
        jqxDockingComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxDockingComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxDockingComponent.prototype.setOptions = function (options) {
            this.host.jqxDocking('setOptions', options);
        };
        // jqxDockingComponent properties
        jqxDockingComponent.prototype.cookies = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('cookies', arg);
            }
            else {
                return this.host.jqxDocking('cookies');
            }
        };
        jqxDockingComponent.prototype.cookieOptions = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('cookieOptions', arg);
            }
            else {
                return this.host.jqxDocking('cookieOptions');
            }
        };
        jqxDockingComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('disabled', arg);
            }
            else {
                return this.host.jqxDocking('disabled');
            }
        };
        jqxDockingComponent.prototype.floatingWindowOpacity = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('floatingWindowOpacity', arg);
            }
            else {
                return this.host.jqxDocking('floatingWindowOpacity');
            }
        };
        jqxDockingComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('height', arg);
            }
            else {
                return this.host.jqxDocking('height');
            }
        };
        jqxDockingComponent.prototype.keyboardNavigation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('keyboardNavigation', arg);
            }
            else {
                return this.host.jqxDocking('keyboardNavigation');
            }
        };
        jqxDockingComponent.prototype.mode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('mode', arg);
            }
            else {
                return this.host.jqxDocking('mode');
            }
        };
        jqxDockingComponent.prototype.orientation = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('orientation', arg);
            }
            else {
                return this.host.jqxDocking('orientation');
            }
        };
        jqxDockingComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('rtl', arg);
            }
            else {
                return this.host.jqxDocking('rtl');
            }
        };
        jqxDockingComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('theme', arg);
            }
            else {
                return this.host.jqxDocking('theme');
            }
        };
        jqxDockingComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('width', arg);
            }
            else {
                return this.host.jqxDocking('width');
            }
        };
        jqxDockingComponent.prototype.windowsMode = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('windowsMode', arg);
            }
            else {
                return this.host.jqxDocking('windowsMode');
            }
        };
        jqxDockingComponent.prototype.windowsOffset = function (arg) {
            if (arg !== undefined) {
                this.host.jqxDocking('windowsOffset', arg);
            }
            else {
                return this.host.jqxDocking('windowsOffset');
            }
        };
        // jqxDockingComponent functions
        jqxDockingComponent.prototype.addWindow = function (windowId, mode, panel, position) {
            this.host.jqxDocking('addWindow', windowId, mode, panel, position);
        };
        jqxDockingComponent.prototype.closeWindow = function (windowId) {
            this.host.jqxDocking('closeWindow', windowId);
        };
        jqxDockingComponent.prototype.collapseWindow = function (windowId) {
            this.host.jqxDocking('collapseWindow', windowId);
        };
        jqxDockingComponent.prototype.destroy = function () {
            this.host.jqxDocking('destroy');
        };
        jqxDockingComponent.prototype.disableWindowResize = function (windowId) {
            this.host.jqxDocking('disableWindowResize', windowId);
        };
        jqxDockingComponent.prototype.disable = function () {
            this.host.jqxDocking('disable');
        };
        jqxDockingComponent.prototype.exportLayout = function () {
            return this.host.jqxDocking('exportLayout');
        };
        jqxDockingComponent.prototype.enable = function () {
            this.host.jqxDocking('enable');
        };
        jqxDockingComponent.prototype.expandWindow = function (windowId) {
            this.host.jqxDocking('expandWindow', windowId);
        };
        jqxDockingComponent.prototype.enableWindowResize = function (windowId) {
            this.host.jqxDocking('enableWindowResize', windowId);
        };
        jqxDockingComponent.prototype.focus = function () {
            this.host.jqxDocking('focus');
        };
        jqxDockingComponent.prototype.hideAllCloseButtons = function () {
            this.host.jqxDocking('hideAllCloseButtons');
        };
        jqxDockingComponent.prototype.hideAllCollapseButtons = function () {
            this.host.jqxDocking('hideAllCollapseButtons');
        };
        jqxDockingComponent.prototype.hideCollapseButton = function (windowId) {
            this.host.jqxDocking('hideCollapseButton', windowId);
        };
        jqxDockingComponent.prototype.hideCloseButton = function (windowId) {
            this.host.jqxDocking('hideCloseButton', windowId);
        };
        jqxDockingComponent.prototype.importLayout = function (Json) {
            this.host.jqxDocking('importLayout', Json);
        };
        jqxDockingComponent.prototype.move = function (windowId, panel, position) {
            this.host.jqxDocking('move', windowId, panel, position);
        };
        jqxDockingComponent.prototype.pinWindow = function (windowId) {
            this.host.jqxDocking('pinWindow', windowId);
        };
        jqxDockingComponent.prototype.setWindowMode = function (windowId, mode) {
            this.host.jqxDocking('setWindowMode', windowId, mode);
        };
        jqxDockingComponent.prototype.showCloseButton = function (windowId) {
            this.host.jqxDocking('showCloseButton', windowId);
        };
        jqxDockingComponent.prototype.showCollapseButton = function (windowId) {
            this.host.jqxDocking('showCollapseButton', windowId);
        };
        jqxDockingComponent.prototype.setWindowPosition = function (windowId, top, left) {
            this.host.jqxDocking('setWindowPosition', windowId, top, left);
        };
        jqxDockingComponent.prototype.showAllCloseButtons = function () {
            this.host.jqxDocking('showAllCloseButtons');
        };
        jqxDockingComponent.prototype.showAllCollapseButtons = function () {
            this.host.jqxDocking('showAllCollapseButtons');
        };
        jqxDockingComponent.prototype.unpinWindow = function (windowId) {
            this.host.jqxDocking('unpinWindow', windowId);
        };
        jqxDockingComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
            this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
        };
        jqxDockingComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('cookies'),
            __metadata("design:type", Boolean)
        ], jqxDockingComponent.prototype, "attrCookies", void 0);
        __decorate([
            core.Input('cookieOptions'),
            __metadata("design:type", Object)
        ], jqxDockingComponent.prototype, "attrCookieOptions", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxDockingComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('floatingWindowOpacity'),
            __metadata("design:type", Number)
        ], jqxDockingComponent.prototype, "attrFloatingWindowOpacity", void 0);
        __decorate([
            core.Input('keyboardNavigation'),
            __metadata("design:type", Boolean)
        ], jqxDockingComponent.prototype, "attrKeyboardNavigation", void 0);
        __decorate([
            core.Input('mode'),
            __metadata("design:type", String)
        ], jqxDockingComponent.prototype, "attrMode", void 0);
        __decorate([
            core.Input('orientation'),
            __metadata("design:type", String)
        ], jqxDockingComponent.prototype, "attrOrientation", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxDockingComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxDockingComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('windowsMode'),
            __metadata("design:type", Object)
        ], jqxDockingComponent.prototype, "attrWindowsMode", void 0);
        __decorate([
            core.Input('windowsOffset'),
            __metadata("design:type", Number)
        ], jqxDockingComponent.prototype, "attrWindowsOffset", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxDockingComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxDockingComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxDockingComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDockingComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxDockingComponent.prototype, "onDragEnd", void 0);
        jqxDockingComponent = __decorate([
            core.Component({
                selector: 'jqxDocking',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxDockingComponent);
        return jqxDockingComponent;
    }()); //jqxDockingComponent

    var jqxDockingModule = /** @class */ (function () {
        function jqxDockingModule() {
        }
        jqxDockingModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxDockingComponent],
                exports: [jqxDockingComponent]
            })
        ], jqxDockingModule);
        return jqxDockingModule;
    }());

    exports.jqxDockingComponent = jqxDockingComponent;
    exports.jqxDockingModule = jqxDockingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
