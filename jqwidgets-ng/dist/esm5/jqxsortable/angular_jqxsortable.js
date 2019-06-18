import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxsortable from '../../jqwidgets-scripts/jqwidgets/jqxsortable';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhzb3J0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhzb3J0YWJsZS8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4c29ydGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUFxQ0csOEJBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFBQyxzQkFBc0IsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxRQUFRLENBQUMsQ0FBQztRQThWL1QsOEJBQThCO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFH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RUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFB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dHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFNvcnRhYmxlJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhTb3J0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhcHBlbmRUbycpIGF0dHJBcHBlbmRUbzogc3RyaW5nO1xuICAgQElucHV0KCdheGlzJykgYXR0ckF4aXM6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnY2FuY2VsJykgYXR0ckNhbmNlbDogc3RyaW5nO1xuICAgQElucHV0KCdjb25uZWN0V2l0aCcpIGF0dHJDb25uZWN0V2l0aDogc3RyaW5nIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29udGFpbm1lbnQnKSBhdHRyQ29udGFpbm1lbnQ6IHN0cmluZyB8IGJvb2xlYW47XG4gICBASW5wdXQoJ2N1cnNvcicpIGF0dHJDdXJzb3I6IHN0cmluZztcbiAgIEBJbnB1dCgnY3Vyc29yQXQnKSBhdHRyQ3Vyc29yQXQ6IGpxd2lkZ2V0cy5Tb3J0YWJsZUN1cnNvckF0O1xuICAgQElucHV0KCdkZWxheScpIGF0dHJEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzdGFuY2UnKSBhdHRyRGlzdGFuY2U6IG51bWJlcjtcbiAgIEBJbnB1dCgnZHJvcE9uRW1wdHknKSBhdHRyRHJvcE9uRW1wdHk6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZvcmNlSGVscGVyU2l6ZScpIGF0dHJGb3JjZUhlbHBlclNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZvcmNlUGxhY2Vob2xkZXJTaXplJykgYXR0ckZvcmNlUGxhY2Vob2xkZXJTaXplOiBib29sZWFuO1xuICAgQElucHV0KCdncmlkJykgYXR0ckdyaWQ6IEFycmF5PG51bWJlcj47XG4gICBASW5wdXQoJ2hhbmRsZScpIGF0dHJIYW5kbGU6IHN0cmluZyB8IGJvb2xlYW47XG4gICBASW5wdXQoJ2hlbHBlcicpIGF0dHJIZWxwZXI6IChvcmlnaW5hbEV2ZW50PzogYW55LCBjb250ZW50PzogYW55KSA9PiB2b2lkIHwgJ29yaWdpbmFsJyB8ICdjbG9uZSc7XG4gICBASW5wdXQoJ2l0ZW1zJykgYXR0ckl0ZW1zOiBzdHJpbmc7XG4gICBASW5wdXQoJ29wYWNpdHknKSBhdHRyT3BhY2l0eTogbnVtYmVyIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgncGxhY2Vob2xkZXJTaG93JykgYXR0clBsYWNlaG9sZGVyU2hvdzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgncmV2ZXJ0JykgYXR0clJldmVydDogbnVtYmVyIHwgYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2Nyb2xsJykgYXR0clNjcm9sbDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2Nyb2xsU2Vuc2l0aXZpdHknKSBhdHRyU2Nyb2xsU2Vuc2l0aXZpdHk6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2Nyb2xsU3BlZWQnKSBhdHRyU2Nyb2xsU3BlZWQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndG9sZXJhbmNlJykgYXR0clRvbGVyYW5jZTogc3RyaW5nO1xuICAgQElucHV0KCd6SW5kZXgnKSBhdHRyWkluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXBwZW5kVG8nLCdheGlzJywnY2FuY2VsJywnY29ubmVjdFdpdGgnLCdjb250YWlubWVudCcsJ2N1cnNvcicsJ2N1cnNvckF0JywnZGVsYXknLCdkaXNhYmxlZCcsJ2Rpc3RhbmNlJywnZHJvcE9uRW1wdHknLCdmb3JjZUhlbHBlclNpemUnLCdmb3JjZVBsYWNlaG9sZGVyU2l6ZScsJ2dyaWQnLCdoYW5kbGUnLCdoZWxwZXInLCdpdGVtcycsJ29wYWNpdHknLCdwbGFjZWhvbGRlclNob3cnLCdyZXZlcnQnLCdzY3JvbGwnLCdzY3JvbGxTZW5zaXRpdml0eScsJ3Njcm9sbFNwZWVkJywndG9sZXJhbmNlJywnekluZGV4J107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeFNvcnRhYmxlO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhTb3J0YWJsZSh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFNvcnRhYmxlJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeFNvcnRhYmxlQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFwcGVuZFRvKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2FwcGVuZFRvJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnYXBwZW5kVG8nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXhpcyhhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdheGlzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnYXhpcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjYW5jZWwoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY2FuY2VsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY2FuY2VsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbm5lY3RXaXRoKGFyZz86IHN0cmluZyB8IGJvb2xlYW4pOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY29ubmVjdFdpdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjb25uZWN0V2l0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb250YWlubWVudChhcmc/OiBzdHJpbmcgfCBib29sZWFuKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2NvbnRhaW5tZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY29udGFpbm1lbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY3Vyc29yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2N1cnNvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2N1cnNvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjdXJzb3JBdChhcmc/OiBqcXdpZGdldHMuU29ydGFibGVDdXJzb3JBdCk6IGpxd2lkZ2V0cy5Tb3J0YWJsZUN1cnNvckF0IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY3Vyc29yQXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdjdXJzb3JBdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2RlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXN0YW5jZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkaXN0YW5jZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2Rpc3RhbmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BPbkVtcHR5KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZHJvcE9uRW1wdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdkcm9wT25FbXB0eScpO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3JjZUhlbHBlclNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdmb3JjZUhlbHBlclNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdmb3JjZUhlbHBlclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9yY2VQbGFjZWhvbGRlclNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdmb3JjZVBsYWNlaG9sZGVyU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2ZvcmNlUGxhY2Vob2xkZXJTaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGdyaWQoYXJnPzogQXJyYXk8bnVtYmVyPik6IEFycmF5PG51bWJlcj4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdncmlkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZ3JpZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoYW5kbGUoYXJnPzogc3RyaW5nIHwgYm9vbGVhbik6IHN0cmluZyB8IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdoYW5kbGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdoYW5kbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVscGVyKGFyZz86IChvcmlnaW5hbEV2ZW50PzogYW55LCBjb250ZW50PzogYW55KSA9PiB2b2lkIHwgJ29yaWdpbmFsJyB8ICdjbG9uZScpOiAob3JpZ2luYWxFdmVudD86IGFueSwgY29udGVudD86IGFueSkgPT4gdm9pZCB8ICdvcmlnaW5hbCcgfCAnY2xvbmUnIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnaGVscGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnaGVscGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGl0ZW1zKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2l0ZW1zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnaXRlbXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb3BhY2l0eShhcmc/OiBudW1iZXIgfCBib29sZWFuKTogbnVtYmVyIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ29wYWNpdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdvcGFjaXR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBsYWNlaG9sZGVyU2hvdyhhcmc/OiBzdHJpbmcgfCBib29sZWFuKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3BsYWNlaG9sZGVyU2hvdycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3BsYWNlaG9sZGVyU2hvdycpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXZlcnQoYXJnPzogbnVtYmVyIHwgYm9vbGVhbik6IG51bWJlciB8IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdyZXZlcnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdyZXZlcnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbFNlbnNpdGl2aXR5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3Njcm9sbFNlbnNpdGl2aXR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsU2Vuc2l0aXZpdHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2Nyb2xsU3BlZWQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnc2Nyb2xsU3BlZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdzY3JvbGxTcGVlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2xlcmFuY2UoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgndG9sZXJhbmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgndG9sZXJhbmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHpJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCd6SW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCd6SW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhTb3J0YWJsZUNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNhbmNlbE1ldGhvZCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnY2FuY2VsTWV0aG9kJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhTb3J0YWJsZSgnZGlzYWJsZScpO1xuICAgfVxuXG4gICBlbmFibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ2VuYWJsZScpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHJlZnJlc2hQb3NpdGlvbnMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3JlZnJlc2hQb3NpdGlvbnMnKTtcbiAgIH1cblxuICAgc2VyaWFsaXplKG9iamVjdDogdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4U29ydGFibGUoJ3NlcmlhbGl6ZScsIG9iamVjdCk7XG4gICB9XG5cbiAgIHRvQXJyYXkoKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFNvcnRhYmxlKCd0b0FycmF5Jyk7XG4gICB9XG5cblxuICAgLy8ganF4U29ydGFibGVDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25BY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkJlZm9yZVN0b3AgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25EZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJlY2VpdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25SZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25TdG9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYWN0aXZhdGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkFjdGl2YXRlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2JlZm9yZVN0b3AnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkJlZm9yZVN0b3AuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZGVhY3RpdmF0ZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRGVhY3RpdmF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdvdXQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk91dC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdvdmVyJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25PdmVyLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3JlY2VpdmUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJlY2VpdmUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVtb3ZlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SZW1vdmUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc29ydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU29ydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzdGFydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU3RhcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc3RvcCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uU3RvcC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd1cGRhdGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVwZGF0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4U29ydGFibGVDb21wb25lbnRcbiJdfQ==