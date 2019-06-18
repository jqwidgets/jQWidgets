require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxbuttons');
require('../../jqwidgets-scripts/jqwidgets/jqxsortable');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxsortable', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxsortable = {}), global.ng.core));
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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
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

    /// <reference path="../../jqwidgets.d.ts" />
    var jqxSortableComponent = /** @class */ (function () {
        function jqxSortableComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['appendTo', 'axis', 'cancel', 'connectWith', 'containment', 'cursor', 'cursorAt', 'delay', 'disabled', 'distance', 'dropOnEmpty', 'forceHelperSize', 'forcePlaceholderSize', 'grid', 'handle', 'helper', 'items', 'opacity', 'placeholderShow', 'revert', 'scroll', 'scrollSensitivity', 'scrollSpeed', 'tolerance', 'zIndex'];
            // jqxSortableComponent events
            this.onActivate = new core.EventEmitter();
            this.onBeforeStop = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onDeactivate = new core.EventEmitter();
            this.onOut = new core.EventEmitter();
            this.onOver = new core.EventEmitter();
            this.onReceive = new core.EventEmitter();
            this.onRemove = new core.EventEmitter();
            this.onSort = new core.EventEmitter();
            this.onStart = new core.EventEmitter();
            this.onStop = new core.EventEmitter();
            this.onUpdate = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        jqxSortableComponent.prototype.ngOnInit = function () {
            if (this.autoCreate) {
                this.createComponent();
            }
        };
        jqxSortableComponent.prototype.ngOnChanges = function (changes) {
            if (this.host) {
                for (var i = 0; i < this.properties.length; i++) {
                    var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                    var areEqual = false;
                    if (this[attrName] !== undefined) {
                        if (typeof this[attrName] === 'object') {
                            if (this[attrName] instanceof Array) {
                                areEqual = this.arraysEqual(this[attrName], this.host.jqxSortable(this.properties[i]));
                            }
                            if (areEqual) {
                                return false;
                            }
                            this.host.jqxSortable(this.properties[i], this[attrName]);
                            continue;
                        }
                        if (this[attrName] !== this.host.jqxSortable(this.properties[i])) {
                            this.host.jqxSortable(this.properties[i], this[attrName]);
                        }
                    }
                }
            }
        };
        jqxSortableComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
        jqxSortableComponent.prototype.manageAttributes = function () {
            var options = {};
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                if (this[attrName] !== undefined) {
                    options[this.properties[i]] = this[attrName];
                }
            }
            return options;
        };
        jqxSortableComponent.prototype.moveClasses = function (parentEl, childEl) {
            var _a;
            var classes = parentEl.classList;
            if (classes.length > 0) {
                (_a = childEl.classList).add.apply(_a, __spread(classes));
            }
            parentEl.className = '';
        };
        jqxSortableComponent.prototype.moveStyles = function (parentEl, childEl) {
            var style = parentEl.style.cssText;
            childEl.style.cssText = style;
            parentEl.style.cssText = '';
        };
        jqxSortableComponent.prototype.createComponent = function (options) {
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
            this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSortable', options);
        };
        jqxSortableComponent.prototype.createWidget = function (options) {
            this.createComponent(options);
        };
        jqxSortableComponent.prototype.__updateRect__ = function () {
            if (this.host)
                this.host.css({ width: this.attrWidth, height: this.attrHeight });
        };
        jqxSortableComponent.prototype.setOptions = function (options) {
            this.host.jqxSortable('setOptions', options);
        };
        // jqxSortableComponent properties
        jqxSortableComponent.prototype.appendTo = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('appendTo', arg);
            }
            else {
                return this.host.jqxSortable('appendTo');
            }
        };
        jqxSortableComponent.prototype.axis = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('axis', arg);
            }
            else {
                return this.host.jqxSortable('axis');
            }
        };
        jqxSortableComponent.prototype.cancel = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('cancel', arg);
            }
            else {
                return this.host.jqxSortable('cancel');
            }
        };
        jqxSortableComponent.prototype.connectWith = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('connectWith', arg);
            }
            else {
                return this.host.jqxSortable('connectWith');
            }
        };
        jqxSortableComponent.prototype.containment = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('containment', arg);
            }
            else {
                return this.host.jqxSortable('containment');
            }
        };
        jqxSortableComponent.prototype.cursor = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('cursor', arg);
            }
            else {
                return this.host.jqxSortable('cursor');
            }
        };
        jqxSortableComponent.prototype.cursorAt = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('cursorAt', arg);
            }
            else {
                return this.host.jqxSortable('cursorAt');
            }
        };
        jqxSortableComponent.prototype.delay = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('delay', arg);
            }
            else {
                return this.host.jqxSortable('delay');
            }
        };
        jqxSortableComponent.prototype.disabled = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('disabled', arg);
            }
            else {
                return this.host.jqxSortable('disabled');
            }
        };
        jqxSortableComponent.prototype.distance = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('distance', arg);
            }
            else {
                return this.host.jqxSortable('distance');
            }
        };
        jqxSortableComponent.prototype.dropOnEmpty = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('dropOnEmpty', arg);
            }
            else {
                return this.host.jqxSortable('dropOnEmpty');
            }
        };
        jqxSortableComponent.prototype.forceHelperSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('forceHelperSize', arg);
            }
            else {
                return this.host.jqxSortable('forceHelperSize');
            }
        };
        jqxSortableComponent.prototype.forcePlaceholderSize = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('forcePlaceholderSize', arg);
            }
            else {
                return this.host.jqxSortable('forcePlaceholderSize');
            }
        };
        jqxSortableComponent.prototype.grid = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('grid', arg);
            }
            else {
                return this.host.jqxSortable('grid');
            }
        };
        jqxSortableComponent.prototype.handle = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('handle', arg);
            }
            else {
                return this.host.jqxSortable('handle');
            }
        };
        jqxSortableComponent.prototype.helper = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('helper', arg);
            }
            else {
                return this.host.jqxSortable('helper');
            }
        };
        jqxSortableComponent.prototype.items = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('items', arg);
            }
            else {
                return this.host.jqxSortable('items');
            }
        };
        jqxSortableComponent.prototype.opacity = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('opacity', arg);
            }
            else {
                return this.host.jqxSortable('opacity');
            }
        };
        jqxSortableComponent.prototype.placeholderShow = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('placeholderShow', arg);
            }
            else {
                return this.host.jqxSortable('placeholderShow');
            }
        };
        jqxSortableComponent.prototype.revert = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('revert', arg);
            }
            else {
                return this.host.jqxSortable('revert');
            }
        };
        jqxSortableComponent.prototype.scroll = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('scroll', arg);
            }
            else {
                return this.host.jqxSortable('scroll');
            }
        };
        jqxSortableComponent.prototype.scrollSensitivity = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('scrollSensitivity', arg);
            }
            else {
                return this.host.jqxSortable('scrollSensitivity');
            }
        };
        jqxSortableComponent.prototype.scrollSpeed = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('scrollSpeed', arg);
            }
            else {
                return this.host.jqxSortable('scrollSpeed');
            }
        };
        jqxSortableComponent.prototype.tolerance = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('tolerance', arg);
            }
            else {
                return this.host.jqxSortable('tolerance');
            }
        };
        jqxSortableComponent.prototype.zIndex = function (arg) {
            if (arg !== undefined) {
                this.host.jqxSortable('zIndex', arg);
            }
            else {
                return this.host.jqxSortable('zIndex');
            }
        };
        // jqxSortableComponent functions
        jqxSortableComponent.prototype.cancelMethod = function () {
            this.host.jqxSortable('cancelMethod');
        };
        jqxSortableComponent.prototype.destroy = function () {
            this.host.jqxSortable('destroy');
        };
        jqxSortableComponent.prototype.disable = function () {
            this.host.jqxSortable('disable');
        };
        jqxSortableComponent.prototype.enable = function () {
            this.host.jqxSortable('enable');
        };
        jqxSortableComponent.prototype.refresh = function () {
            this.host.jqxSortable('refresh');
        };
        jqxSortableComponent.prototype.refreshPositions = function () {
            this.host.jqxSortable('refreshPositions');
        };
        jqxSortableComponent.prototype.serialize = function (object) {
            return this.host.jqxSortable('serialize', object);
        };
        jqxSortableComponent.prototype.toArray = function () {
            return this.host.jqxSortable('toArray');
        };
        jqxSortableComponent.prototype.__wireEvents__ = function () {
            var _this = this;
            this.host.on('activate', function (eventData) { _this.onActivate.emit(eventData); });
            this.host.on('beforeStop', function (eventData) { _this.onBeforeStop.emit(eventData); });
            this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
            this.host.on('deactivate', function (eventData) { _this.onDeactivate.emit(eventData); });
            this.host.on('out', function (eventData) { _this.onOut.emit(eventData); });
            this.host.on('over', function (eventData) { _this.onOver.emit(eventData); });
            this.host.on('receive', function (eventData) { _this.onReceive.emit(eventData); });
            this.host.on('remove', function (eventData) { _this.onRemove.emit(eventData); });
            this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
            this.host.on('start', function (eventData) { _this.onStart.emit(eventData); });
            this.host.on('stop', function (eventData) { _this.onStop.emit(eventData); });
            this.host.on('update', function (eventData) { _this.onUpdate.emit(eventData); });
        };
        __decorate([
            core.Input('appendTo'),
            __metadata("design:type", String)
        ], jqxSortableComponent.prototype, "attrAppendTo", void 0);
        __decorate([
            core.Input('axis'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrAxis", void 0);
        __decorate([
            core.Input('cancel'),
            __metadata("design:type", String)
        ], jqxSortableComponent.prototype, "attrCancel", void 0);
        __decorate([
            core.Input('connectWith'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrConnectWith", void 0);
        __decorate([
            core.Input('containment'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrContainment", void 0);
        __decorate([
            core.Input('cursor'),
            __metadata("design:type", String)
        ], jqxSortableComponent.prototype, "attrCursor", void 0);
        __decorate([
            core.Input('cursorAt'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrCursorAt", void 0);
        __decorate([
            core.Input('delay'),
            __metadata("design:type", Number)
        ], jqxSortableComponent.prototype, "attrDelay", void 0);
        __decorate([
            core.Input('disabled'),
            __metadata("design:type", Boolean)
        ], jqxSortableComponent.prototype, "attrDisabled", void 0);
        __decorate([
            core.Input('distance'),
            __metadata("design:type", Number)
        ], jqxSortableComponent.prototype, "attrDistance", void 0);
        __decorate([
            core.Input('dropOnEmpty'),
            __metadata("design:type", Boolean)
        ], jqxSortableComponent.prototype, "attrDropOnEmpty", void 0);
        __decorate([
            core.Input('forceHelperSize'),
            __metadata("design:type", Boolean)
        ], jqxSortableComponent.prototype, "attrForceHelperSize", void 0);
        __decorate([
            core.Input('forcePlaceholderSize'),
            __metadata("design:type", Boolean)
        ], jqxSortableComponent.prototype, "attrForcePlaceholderSize", void 0);
        __decorate([
            core.Input('grid'),
            __metadata("design:type", Array)
        ], jqxSortableComponent.prototype, "attrGrid", void 0);
        __decorate([
            core.Input('handle'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrHandle", void 0);
        __decorate([
            core.Input('helper'),
            __metadata("design:type", Function)
        ], jqxSortableComponent.prototype, "attrHelper", void 0);
        __decorate([
            core.Input('items'),
            __metadata("design:type", String)
        ], jqxSortableComponent.prototype, "attrItems", void 0);
        __decorate([
            core.Input('opacity'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrOpacity", void 0);
        __decorate([
            core.Input('placeholderShow'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrPlaceholderShow", void 0);
        __decorate([
            core.Input('revert'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrRevert", void 0);
        __decorate([
            core.Input('scroll'),
            __metadata("design:type", Boolean)
        ], jqxSortableComponent.prototype, "attrScroll", void 0);
        __decorate([
            core.Input('scrollSensitivity'),
            __metadata("design:type", Number)
        ], jqxSortableComponent.prototype, "attrScrollSensitivity", void 0);
        __decorate([
            core.Input('scrollSpeed'),
            __metadata("design:type", Number)
        ], jqxSortableComponent.prototype, "attrScrollSpeed", void 0);
        __decorate([
            core.Input('tolerance'),
            __metadata("design:type", String)
        ], jqxSortableComponent.prototype, "attrTolerance", void 0);
        __decorate([
            core.Input('zIndex'),
            __metadata("design:type", Number)
        ], jqxSortableComponent.prototype, "attrZIndex", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxSortableComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onActivate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onBeforeStop", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onDeactivate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onOut", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onOver", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onReceive", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onRemove", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onSort", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onStart", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onStop", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxSortableComponent.prototype, "onUpdate", void 0);
        jqxSortableComponent = __decorate([
            core.Component({
                selector: 'jqxSortable',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxSortableComponent);
        return jqxSortableComponent;
    }()); //jqxSortableComponent

    var jqxSortableModule = /** @class */ (function () {
        function jqxSortableModule() {
        }
        jqxSortableModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxSortableComponent],
                exports: [jqxSortableComponent]
            })
        ], jqxSortableModule);
        return jqxSortableModule;
    }());

    exports.jqxSortableComponent = jqxSortableComponent;
    exports.jqxSortableModule = jqxSortableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxsortable.umd.js.map
