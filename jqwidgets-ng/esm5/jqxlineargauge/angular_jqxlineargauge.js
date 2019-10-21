import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxgauge';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxLinearGaugeComponent = /** @class */ (function () {
    function jqxLinearGaugeComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'background', 'colorScheme', 'disabled', 'easing', 'height', 'int64', 'labels', 'min', 'max', 'orientation', 'pointer', 'rangesOffset', 'rangeSize', 'ranges', 'showRanges', 'scaleStyle', 'scaleLength', 'ticksOffset', 'ticksPosition', 'ticksMinor', 'ticksMajor', 'value', 'width'];
        // jqxLinearGaugeComponent events
        this.onValueChanging = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxLinearGaugeComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxLinearGaugeComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLinearGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLinearGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLinearGauge(this.properties[i])) {
                        this.host.jqxLinearGauge(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxLinearGaugeComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxLinearGaugeComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxLinearGaugeComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxLinearGaugeComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxLinearGaugeComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinearGauge', options);
    };
    jqxLinearGaugeComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxLinearGaugeComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxLinearGaugeComponent.prototype.setOptions = function (options) {
        this.host.jqxLinearGauge('setOptions', options);
    };
    // jqxLinearGaugeComponent properties
    jqxLinearGaugeComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxLinearGauge('animationDuration');
        }
    };
    jqxLinearGaugeComponent.prototype.background = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('background', arg);
        }
        else {
            return this.host.jqxLinearGauge('background');
        }
    };
    jqxLinearGaugeComponent.prototype.colorScheme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxLinearGauge('colorScheme');
        }
    };
    jqxLinearGaugeComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('disabled', arg);
        }
        else {
            return this.host.jqxLinearGauge('disabled');
        }
    };
    jqxLinearGaugeComponent.prototype.easing = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('easing', arg);
        }
        else {
            return this.host.jqxLinearGauge('easing');
        }
    };
    jqxLinearGaugeComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('height', arg);
        }
        else {
            return this.host.jqxLinearGauge('height');
        }
    };
    jqxLinearGaugeComponent.prototype.int64 = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('int64', arg);
        }
        else {
            return this.host.jqxLinearGauge('int64');
        }
    };
    jqxLinearGaugeComponent.prototype.labels = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('labels', arg);
        }
        else {
            return this.host.jqxLinearGauge('labels');
        }
    };
    jqxLinearGaugeComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('min', arg);
        }
        else {
            return this.host.jqxLinearGauge('min');
        }
    };
    jqxLinearGaugeComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('max', arg);
        }
        else {
            return this.host.jqxLinearGauge('max');
        }
    };
    jqxLinearGaugeComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('orientation', arg);
        }
        else {
            return this.host.jqxLinearGauge('orientation');
        }
    };
    jqxLinearGaugeComponent.prototype.pointer = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('pointer', arg);
        }
        else {
            return this.host.jqxLinearGauge('pointer');
        }
    };
    jqxLinearGaugeComponent.prototype.rangesOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangesOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangesOffset');
        }
    };
    jqxLinearGaugeComponent.prototype.rangeSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangeSize', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangeSize');
        }
    };
    jqxLinearGaugeComponent.prototype.ranges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ranges', arg);
        }
        else {
            return this.host.jqxLinearGauge('ranges');
        }
    };
    jqxLinearGaugeComponent.prototype.showRanges = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('showRanges', arg);
        }
        else {
            return this.host.jqxLinearGauge('showRanges');
        }
    };
    jqxLinearGaugeComponent.prototype.scaleStyle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleStyle', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleStyle');
        }
    };
    jqxLinearGaugeComponent.prototype.scaleLength = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleLength', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleLength');
        }
    };
    jqxLinearGaugeComponent.prototype.ticksOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksOffset');
        }
    };
    jqxLinearGaugeComponent.prototype.ticksPosition = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksPosition', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksPosition');
        }
    };
    jqxLinearGaugeComponent.prototype.ticksMinor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMinor');
        }
    };
    jqxLinearGaugeComponent.prototype.ticksMajor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMajor');
        }
    };
    jqxLinearGaugeComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('value', arg);
        }
        else {
            return this.host.jqxLinearGauge('value');
        }
    };
    jqxLinearGaugeComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('width', arg);
        }
        else {
            return this.host.jqxLinearGauge('width');
        }
    };
    // jqxLinearGaugeComponent functions
    jqxLinearGaugeComponent.prototype.disable = function () {
        this.host.jqxLinearGauge('disable');
    };
    jqxLinearGaugeComponent.prototype.enable = function () {
        this.host.jqxLinearGauge('enable');
    };
    jqxLinearGaugeComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxLinearGauge('val', value);
        }
        else {
            return this.host.jqxLinearGauge('val');
        }
    };
    ;
    jqxLinearGaugeComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('valueChanging', function (eventData) { _this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
    };
    jqxLinearGaugeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('animationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('background'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrBackground", void 0);
    tslib_1.__decorate([
        Input('colorScheme'),
        tslib_1.__metadata("design:type", String)
    ], jqxLinearGaugeComponent.prototype, "attrColorScheme", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxLinearGaugeComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('easing'),
        tslib_1.__metadata("design:type", String)
    ], jqxLinearGaugeComponent.prototype, "attrEasing", void 0);
    tslib_1.__decorate([
        Input('int64'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxLinearGaugeComponent.prototype, "attrInt64", void 0);
    tslib_1.__decorate([
        Input('labels'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrLabels", void 0);
    tslib_1.__decorate([
        Input('min'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrMin", void 0);
    tslib_1.__decorate([
        Input('max'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrMax", void 0);
    tslib_1.__decorate([
        Input('orientation'),
        tslib_1.__metadata("design:type", String)
    ], jqxLinearGaugeComponent.prototype, "attrOrientation", void 0);
    tslib_1.__decorate([
        Input('pointer'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrPointer", void 0);
    tslib_1.__decorate([
        Input('rangesOffset'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrRangesOffset", void 0);
    tslib_1.__decorate([
        Input('rangeSize'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrRangeSize", void 0);
    tslib_1.__decorate([
        Input('ranges'),
        tslib_1.__metadata("design:type", Array)
    ], jqxLinearGaugeComponent.prototype, "attrRanges", void 0);
    tslib_1.__decorate([
        Input('showRanges'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxLinearGaugeComponent.prototype, "attrShowRanges", void 0);
    tslib_1.__decorate([
        Input('scaleStyle'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrScaleStyle", void 0);
    tslib_1.__decorate([
        Input('scaleLength'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrScaleLength", void 0);
    tslib_1.__decorate([
        Input('ticksOffset'),
        tslib_1.__metadata("design:type", Array)
    ], jqxLinearGaugeComponent.prototype, "attrTicksOffset", void 0);
    tslib_1.__decorate([
        Input('ticksPosition'),
        tslib_1.__metadata("design:type", String)
    ], jqxLinearGaugeComponent.prototype, "attrTicksPosition", void 0);
    tslib_1.__decorate([
        Input('ticksMinor'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrTicksMinor", void 0);
    tslib_1.__decorate([
        Input('ticksMajor'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrTicksMajor", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Number)
    ], jqxLinearGaugeComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxLinearGaugeComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "onValueChanging", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxLinearGaugeComponent.prototype, "onValueChanged", void 0);
    jqxLinearGaugeComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxLinearGauge',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxLinearGaugeComponent);
    return jqxLinearGaugeComponent;
}()); //jqxLinearGaugeComponent
export { jqxLinearGaugeComponent };
