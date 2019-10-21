import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxsortable';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxSortableComponent = /** @class */ (function () {
    function jqxSortableComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'axis', 'cancel', 'connectWith', 'containment', 'cursor', 'cursorAt', 'delay', 'disabled', 'distance', 'dropOnEmpty', 'forceHelperSize', 'forcePlaceholderSize', 'grid', 'handle', 'helper', 'items', 'opacity', 'placeholderShow', 'revert', 'scroll', 'scrollSensitivity', 'scrollSpeed', 'tolerance', 'zIndex'];
        // jqxSortableComponent events
        this.onActivate = new EventEmitter();
        this.onBeforeStop = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onOut = new EventEmitter();
        this.onOver = new EventEmitter();
        this.onReceive = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onStart = new EventEmitter();
        this.onStop = new EventEmitter();
        this.onUpdate = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxSortableComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    jqxSortableComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('appendTo'),
        tslib_1.__metadata("design:type", String)
    ], jqxSortableComponent.prototype, "attrAppendTo", void 0);
    tslib_1.__decorate([
        Input('axis'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrAxis", void 0);
    tslib_1.__decorate([
        Input('cancel'),
        tslib_1.__metadata("design:type", String)
    ], jqxSortableComponent.prototype, "attrCancel", void 0);
    tslib_1.__decorate([
        Input('connectWith'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrConnectWith", void 0);
    tslib_1.__decorate([
        Input('containment'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrContainment", void 0);
    tslib_1.__decorate([
        Input('cursor'),
        tslib_1.__metadata("design:type", String)
    ], jqxSortableComponent.prototype, "attrCursor", void 0);
    tslib_1.__decorate([
        Input('cursorAt'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrCursorAt", void 0);
    tslib_1.__decorate([
        Input('delay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxSortableComponent.prototype, "attrDelay", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSortableComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('distance'),
        tslib_1.__metadata("design:type", Number)
    ], jqxSortableComponent.prototype, "attrDistance", void 0);
    tslib_1.__decorate([
        Input('dropOnEmpty'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSortableComponent.prototype, "attrDropOnEmpty", void 0);
    tslib_1.__decorate([
        Input('forceHelperSize'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSortableComponent.prototype, "attrForceHelperSize", void 0);
    tslib_1.__decorate([
        Input('forcePlaceholderSize'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSortableComponent.prototype, "attrForcePlaceholderSize", void 0);
    tslib_1.__decorate([
        Input('grid'),
        tslib_1.__metadata("design:type", Array)
    ], jqxSortableComponent.prototype, "attrGrid", void 0);
    tslib_1.__decorate([
        Input('handle'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrHandle", void 0);
    tslib_1.__decorate([
        Input('helper'),
        tslib_1.__metadata("design:type", Function)
    ], jqxSortableComponent.prototype, "attrHelper", void 0);
    tslib_1.__decorate([
        Input('items'),
        tslib_1.__metadata("design:type", String)
    ], jqxSortableComponent.prototype, "attrItems", void 0);
    tslib_1.__decorate([
        Input('opacity'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrOpacity", void 0);
    tslib_1.__decorate([
        Input('placeholderShow'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrPlaceholderShow", void 0);
    tslib_1.__decorate([
        Input('revert'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrRevert", void 0);
    tslib_1.__decorate([
        Input('scroll'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSortableComponent.prototype, "attrScroll", void 0);
    tslib_1.__decorate([
        Input('scrollSensitivity'),
        tslib_1.__metadata("design:type", Number)
    ], jqxSortableComponent.prototype, "attrScrollSensitivity", void 0);
    tslib_1.__decorate([
        Input('scrollSpeed'),
        tslib_1.__metadata("design:type", Number)
    ], jqxSortableComponent.prototype, "attrScrollSpeed", void 0);
    tslib_1.__decorate([
        Input('tolerance'),
        tslib_1.__metadata("design:type", String)
    ], jqxSortableComponent.prototype, "attrTolerance", void 0);
    tslib_1.__decorate([
        Input('zIndex'),
        tslib_1.__metadata("design:type", Number)
    ], jqxSortableComponent.prototype, "attrZIndex", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxSortableComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onActivate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onBeforeStop", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onDeactivate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onOut", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onOver", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onReceive", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onRemove", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onSort", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onStart", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onStop", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxSortableComponent.prototype, "onUpdate", void 0);
    jqxSortableComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxSortable',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxSortableComponent);
    return jqxSortableComponent;
}()); //jqxSortableComponent
export { jqxSortableComponent };
