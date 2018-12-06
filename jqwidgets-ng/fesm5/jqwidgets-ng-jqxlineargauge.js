import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
import * as jqxgauge from '../../jqwidgets/jqxgauge';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxLinearGaugeComponent = /** @class */ (function () {
    function jqxLinearGaugeComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'background', 'colorScheme', 'disabled', 'easing', 'height', 'int64', 'labels', 'min', 'max', 'orientation', 'pointer', 'rangesOffset', 'rangeSize', 'ranges', 'showRanges', 'scaleStyle', 'scaleLength', 'ticksOffset', 'ticksPosition', 'ticksMinor', 'ticksMajor', 'value', 'width'];
        // jqxLinearGaugeComponent events
        this.onValueChanging = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
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
    /**
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxLinearGauge('setOptions', options);
    };
    // jqxLinearGaugeComponent properties
    // jqxLinearGaugeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.animationDuration = 
    // jqxLinearGaugeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxLinearGauge('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.background = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('background', arg);
        }
        else {
            return this.host.jqxLinearGauge('background');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.colorScheme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxLinearGauge('colorScheme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('disabled', arg);
        }
        else {
            return this.host.jqxLinearGauge('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.easing = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('easing', arg);
        }
        else {
            return this.host.jqxLinearGauge('easing');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('height', arg);
        }
        else {
            return this.host.jqxLinearGauge('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.int64 = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('int64', arg);
        }
        else {
            return this.host.jqxLinearGauge('int64');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.labels = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('labels', arg);
        }
        else {
            return this.host.jqxLinearGauge('labels');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('min', arg);
        }
        else {
            return this.host.jqxLinearGauge('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('max', arg);
        }
        else {
            return this.host.jqxLinearGauge('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.orientation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('orientation', arg);
        }
        else {
            return this.host.jqxLinearGauge('orientation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.pointer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('pointer', arg);
        }
        else {
            return this.host.jqxLinearGauge('pointer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.rangesOffset = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangesOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangesOffset');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.rangeSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangeSize', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangeSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.ranges = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ranges', arg);
        }
        else {
            return this.host.jqxLinearGauge('ranges');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.showRanges = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('showRanges', arg);
        }
        else {
            return this.host.jqxLinearGauge('showRanges');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.scaleStyle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleStyle', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleStyle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.scaleLength = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleLength', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleLength');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.ticksOffset = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksOffset');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.ticksPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksPosition', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.ticksMinor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMinor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.ticksMajor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMajor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('value', arg);
        }
        else {
            return this.host.jqxLinearGauge('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('width', arg);
        }
        else {
            return this.host.jqxLinearGauge('width');
        }
    };
    // jqxLinearGaugeComponent functions
    // jqxLinearGaugeComponent functions
    /**
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.disable = 
    // jqxLinearGaugeComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxLinearGauge('disable');
    };
    /**
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxLinearGauge('enable');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxLinearGauge('val', value);
        }
        else {
            return this.host.jqxLinearGauge('val');
        }
    };
    /**
     * @return {?}
     */
    jqxLinearGaugeComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('valueChanging', function (eventData) { _this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
    };
    jqxLinearGaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxLinearGauge',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxLinearGaugeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxLinearGaugeComponent.propDecorators = {
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrBackground: [{ type: Input, args: ['background',] }],
        attrColorScheme: [{ type: Input, args: ['colorScheme',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEasing: [{ type: Input, args: ['easing',] }],
        attrInt64: [{ type: Input, args: ['int64',] }],
        attrLabels: [{ type: Input, args: ['labels',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrOrientation: [{ type: Input, args: ['orientation',] }],
        attrPointer: [{ type: Input, args: ['pointer',] }],
        attrRangesOffset: [{ type: Input, args: ['rangesOffset',] }],
        attrRangeSize: [{ type: Input, args: ['rangeSize',] }],
        attrRanges: [{ type: Input, args: ['ranges',] }],
        attrShowRanges: [{ type: Input, args: ['showRanges',] }],
        attrScaleStyle: [{ type: Input, args: ['scaleStyle',] }],
        attrScaleLength: [{ type: Input, args: ['scaleLength',] }],
        attrTicksOffset: [{ type: Input, args: ['ticksOffset',] }],
        attrTicksPosition: [{ type: Input, args: ['ticksPosition',] }],
        attrTicksMinor: [{ type: Input, args: ['ticksMinor',] }],
        attrTicksMajor: [{ type: Input, args: ['ticksMajor',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onValueChanging: [{ type: Output }],
        onValueChanged: [{ type: Output }]
    };
    return jqxLinearGaugeComponent;
}()); //jqxLinearGaugeComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxLinearGaugeModule = /** @class */ (function () {
    function jqxLinearGaugeModule() {
    }
    jqxLinearGaugeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxLinearGaugeComponent],
                    exports: [jqxLinearGaugeComponent]
                },] }
    ];
    return jqxLinearGaugeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxLinearGaugeComponent, jqxLinearGaugeModule };

