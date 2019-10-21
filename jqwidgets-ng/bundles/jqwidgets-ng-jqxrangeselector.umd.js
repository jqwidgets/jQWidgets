require('../jqwidgets/jqxcore');
require('../jqwidgets/jqxdata');
require('../jqwidgets/jqxtooltip');
require('../jqwidgets/jqxrangeselector');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxrangeselector', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxrangeselector = {}), global.ng.core));
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
    var jqxRangeSelectorComponent = /** @class */ (function () {
        function jqxRangeSelectorComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'groupLabelsFormatFunction', 'height', 'labelsFormat', 'labelsFormatFunction', 'labelsOnTicks', 'markersFormat', 'markersFormatFunction', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'moveOnClick', 'padding', 'range', 'resizable', 'rtl', 'showGroupLabels', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
            // jqxRangeSelectorComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxRangeSelectorComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        ;
        jqxRangeSelectorComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxRangeSelector(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxRangeSelector(this.properties[i])) {
                            this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxRangeSelectorComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxRangeSelectorComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxRangeSelectorComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxRangeSelectorComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxRangeSelectorComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRangeSelector', options);
        };
        jqxRangeSelectorComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxRangeSelectorComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxRangeSelectorComponent.prototype.setOptions = function (options) {
            this.host.jqxRangeSelector('setOptions', options);
        };
        // jqxRangeSelectorComponent properties
        jqxRangeSelectorComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('disabled', arg);
            }
            else {
                return this.host.jqxRangeSelector('disabled');
            }
        };
        jqxRangeSelectorComponent.prototype.groupLabelsFormatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('groupLabelsFormatFunction', arg);
            }
            else {
                return this.host.jqxRangeSelector('groupLabelsFormatFunction');
            }
        };
        jqxRangeSelectorComponent.prototype.height = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('height', arg);
            }
            else {
                return this.host.jqxRangeSelector('height');
            }
        };
        jqxRangeSelectorComponent.prototype.labelsFormat = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('labelsFormat', arg);
            }
            else {
                return this.host.jqxRangeSelector('labelsFormat');
            }
        };
        jqxRangeSelectorComponent.prototype.labelsFormatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('labelsFormatFunction', arg);
            }
            else {
                return this.host.jqxRangeSelector('labelsFormatFunction');
            }
        };
        jqxRangeSelectorComponent.prototype.labelsOnTicks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('labelsOnTicks', arg);
            }
            else {
                return this.host.jqxRangeSelector('labelsOnTicks');
            }
        };
        jqxRangeSelectorComponent.prototype.markersFormat = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('markersFormat', arg);
            }
            else {
                return this.host.jqxRangeSelector('markersFormat');
            }
        };
        jqxRangeSelectorComponent.prototype.markersFormatFunction = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('markersFormatFunction', arg);
            }
            else {
                return this.host.jqxRangeSelector('markersFormatFunction');
            }
        };
        jqxRangeSelectorComponent.prototype.majorTicksInterval = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('majorTicksInterval', arg);
            }
            else {
                return this.host.jqxRangeSelector('majorTicksInterval');
            }
        };
        jqxRangeSelectorComponent.prototype.minorTicksInterval = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('minorTicksInterval', arg);
            }
            else {
                return this.host.jqxRangeSelector('minorTicksInterval');
            }
        };
        jqxRangeSelectorComponent.prototype.max = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('max', arg);
            }
            else {
                return this.host.jqxRangeSelector('max');
            }
        };
        jqxRangeSelectorComponent.prototype.min = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('min', arg);
            }
            else {
                return this.host.jqxRangeSelector('min');
            }
        };
        jqxRangeSelectorComponent.prototype.moveOnClick = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('moveOnClick', arg);
            }
            else {
                return this.host.jqxRangeSelector('moveOnClick');
            }
        };
        jqxRangeSelectorComponent.prototype.padding = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('padding', arg);
            }
            else {
                return this.host.jqxRangeSelector('padding');
            }
        };
        jqxRangeSelectorComponent.prototype.range = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('range', arg);
            }
            else {
                return this.host.jqxRangeSelector('range');
            }
        };
        jqxRangeSelectorComponent.prototype.resizable = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('resizable', arg);
            }
            else {
                return this.host.jqxRangeSelector('resizable');
            }
        };
        jqxRangeSelectorComponent.prototype.rtl = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('rtl', arg);
            }
            else {
                return this.host.jqxRangeSelector('rtl');
            }
        };
        jqxRangeSelectorComponent.prototype.showGroupLabels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('showGroupLabels', arg);
            }
            else {
                return this.host.jqxRangeSelector('showGroupLabels');
            }
        };
        jqxRangeSelectorComponent.prototype.showMinorTicks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('showMinorTicks', arg);
            }
            else {
                return this.host.jqxRangeSelector('showMinorTicks');
            }
        };
        jqxRangeSelectorComponent.prototype.snapToTicks = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('snapToTicks', arg);
            }
            else {
                return this.host.jqxRangeSelector('snapToTicks');
            }
        };
        jqxRangeSelectorComponent.prototype.showMajorLabels = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('showMajorLabels', arg);
            }
            else {
                return this.host.jqxRangeSelector('showMajorLabels');
            }
        };
        jqxRangeSelectorComponent.prototype.showMarkers = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('showMarkers', arg);
            }
            else {
                return this.host.jqxRangeSelector('showMarkers');
            }
        };
        jqxRangeSelectorComponent.prototype.theme = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('theme', arg);
            }
            else {
                return this.host.jqxRangeSelector('theme');
            }
        };
        jqxRangeSelectorComponent.prototype.width = function (arg) {
            if (arg !== undefined) {
                this.host.jqxRangeSelector('width', arg);
            }
            else {
                return this.host.jqxRangeSelector('width');
            }
        };
        // jqxRangeSelectorComponent functions
        jqxRangeSelectorComponent.prototype.destroy = function () {
            this.host.jqxRangeSelector('destroy');
        };
        jqxRangeSelectorComponent.prototype.getRange = function () {
            return this.host.jqxRangeSelector('getRange');
        };
        jqxRangeSelectorComponent.prototype.render = function () {
            this.host.jqxRangeSelector('render');
        };
        jqxRangeSelectorComponent.prototype.refresh = function () {
            this.host.jqxRangeSelector('refresh');
        };
        jqxRangeSelectorComponent.prototype.setRange = function (from, to) {
            this.host.jqxRangeSelector('setRange', from, to);
        };
        jqxRangeSelectorComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
        };
        jqxRangeSelectorComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('groupLabelsFormatFunction'),
            __metadata("design:type", Function)
        ], jqxRangeSelectorComponent.prototype, "attrGroupLabelsFormatFunction", void 0);
        __decorate([
            core.Input('labelsFormat'),
            __metadata("design:type", String)
        ], jqxRangeSelectorComponent.prototype, "attrLabelsFormat", void 0);
        __decorate([
            core.Input('labelsFormatFunction'),
            __metadata("design:type", Function)
        ], jqxRangeSelectorComponent.prototype, "attrLabelsFormatFunction", void 0);
        __decorate([
            core.Input('labelsOnTicks'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrLabelsOnTicks", void 0);
        __decorate([
            core.Input('markersFormat'),
            __metadata("design:type", String)
        ], jqxRangeSelectorComponent.prototype, "attrMarkersFormat", void 0);
        __decorate([
            core.Input('markersFormatFunction'),
            __metadata("design:type", Function)
        ], jqxRangeSelectorComponent.prototype, "attrMarkersFormatFunction", void 0);
        __decorate([
            core.Input('majorTicksInterval'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrMajorTicksInterval", void 0);
        __decorate([
            core.Input('minorTicksInterval'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrMinorTicksInterval", void 0);
        __decorate([
            core.Input('max'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrMax", void 0);
        __decorate([
            core.Input('min'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrMin", void 0);
        __decorate([
            core.Input('moveOnClick'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrMoveOnClick", void 0);
        __decorate([
            core.Input('padding'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrPadding", void 0);
        __decorate([
            core.Input('range'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrRange", void 0);
        __decorate([
            core.Input('resizable'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrResizable", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('showGroupLabels'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrShowGroupLabels", void 0);
        __decorate([
            core.Input('showMinorTicks'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrShowMinorTicks", void 0);
        __decorate([
            core.Input('snapToTicks'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrSnapToTicks", void 0);
        __decorate([
            core.Input('showMajorLabels'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrShowMajorLabels", void 0);
        __decorate([
            core.Input('showMarkers'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "attrShowMarkers", void 0);
        __decorate([
            core.Input('theme'),
            __metadata("design:type", String)
        ], jqxRangeSelectorComponent.prototype, "attrTheme", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxRangeSelectorComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxRangeSelectorComponent.prototype, "onChange", void 0);
        jqxRangeSelectorComponent = __decorate([
            core.Component({
                selector: 'jqxRangeSelector',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxRangeSelectorComponent);
        return jqxRangeSelectorComponent;
    }()); //jqxRangeSelectorComponent

    var jqxRangeSelectorModule = /** @class */ (function () {
        function jqxRangeSelectorModule() {
        }
        jqxRangeSelectorModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxRangeSelectorComponent],
                exports: [jqxRangeSelectorComponent]
            })
        ], jqxRangeSelectorModule);
        return jqxRangeSelectorModule;
    }());

    exports.jqxRangeSelectorComponent = jqxRangeSelectorComponent;
    exports.jqxRangeSelectorModule = jqxRangeSelectorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
