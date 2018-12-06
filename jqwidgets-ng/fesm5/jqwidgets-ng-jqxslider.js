import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxslider from '../../jqwidgets/jqxslider';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var noop = function () { };
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxSliderComponent; }),
    multi: true
};
var jqxSliderComponent = /** @class */ (function () {
    function jqxSliderComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['buttonsPosition', 'disabled', 'height', 'layout', 'mode', 'minorTicksFrequency', 'minorTickSize', 'max', 'min', 'orientation', 'rangeSlider', 'rtl', 'step', 'showTicks', 'showMinorTicks', 'showTickLabels', 'showButtons', 'showRange', 'template', 'theme', 'ticksPosition', 'ticksFrequency', 'tickSize', 'tickLabelFormatFunction', 'tooltip', 'tooltipHideDelay', 'tooltipPosition', 'tooltipFormatFunction', 'value', 'values', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxSliderComponent events
        this.onChange = new EventEmitter();
        this.onSlide = new EventEmitter();
        this.onSlideStart = new EventEmitter();
        this.onSlideEnd = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.ngOnInit = /**
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
    jqxSliderComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSlider(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSlider(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSlider(this.properties[i])) {
                        this.host.jqxSlider(this.properties[i], this[attrName]);
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
    jqxSliderComponent.prototype.arraysEqual = /**
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
    jqxSliderComponent.prototype.manageAttributes = /**
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
    jqxSliderComponent.prototype.moveClasses = /**
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
    jqxSliderComponent.prototype.moveStyles = /**
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
    jqxSliderComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSlider', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxSliderComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxSliderComponent.prototype, "ngValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.widgetObject) {
                /** @type {?} */
                var value = this.host.val();
                return value;
            }
            return '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    jqxSliderComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxSliderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxSliderComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxSlider('setOptions', options);
    };
    // jqxSliderComponent properties
    // jqxSliderComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.buttonsPosition = 
    // jqxSliderComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('buttonsPosition', arg);
        }
        else {
            return this.host.jqxSlider('buttonsPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('disabled', arg);
        }
        else {
            return this.host.jqxSlider('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('height', arg);
        }
        else {
            return this.host.jqxSlider('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.layout = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('layout', arg);
        }
        else {
            return this.host.jqxSlider('layout');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.mode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('mode', arg);
        }
        else {
            return this.host.jqxSlider('mode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.minorTicksFrequency = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTicksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('minorTicksFrequency');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.minorTickSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTickSize', arg);
        }
        else {
            return this.host.jqxSlider('minorTickSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('max', arg);
        }
        else {
            return this.host.jqxSlider('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('min', arg);
        }
        else {
            return this.host.jqxSlider('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.orientation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('orientation', arg);
        }
        else {
            return this.host.jqxSlider('orientation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.rangeSlider = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rangeSlider', arg);
        }
        else {
            return this.host.jqxSlider('rangeSlider');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rtl', arg);
        }
        else {
            return this.host.jqxSlider('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.step = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('step', arg);
        }
        else {
            return this.host.jqxSlider('step');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.showTicks = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTicks', arg);
        }
        else {
            return this.host.jqxSlider('showTicks');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.showMinorTicks = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showMinorTicks', arg);
        }
        else {
            return this.host.jqxSlider('showMinorTicks');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.showTickLabels = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTickLabels', arg);
        }
        else {
            return this.host.jqxSlider('showTickLabels');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.showButtons = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showButtons', arg);
        }
        else {
            return this.host.jqxSlider('showButtons');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.showRange = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showRange', arg);
        }
        else {
            return this.host.jqxSlider('showRange');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('template', arg);
        }
        else {
            return this.host.jqxSlider('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('theme', arg);
        }
        else {
            return this.host.jqxSlider('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.ticksPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksPosition', arg);
        }
        else {
            return this.host.jqxSlider('ticksPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.ticksFrequency = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('ticksFrequency');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.tickSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickSize', arg);
        }
        else {
            return this.host.jqxSlider('tickSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.tickLabelFormatFunction = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickLabelFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tickLabelFormatFunction');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.tooltip = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltip', arg);
        }
        else {
            return this.host.jqxSlider('tooltip');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.tooltipHideDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipHideDelay', arg);
        }
        else {
            return this.host.jqxSlider('tooltipHideDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.tooltipPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipPosition', arg);
        }
        else {
            return this.host.jqxSlider('tooltipPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.tooltipFormatFunction = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tooltipFormatFunction');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('value', arg);
        }
        else {
            return this.host.jqxSlider('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.values = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('values', arg);
        }
        else {
            return this.host.jqxSlider('values');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxSliderComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('width', arg);
        }
        else {
            return this.host.jqxSlider('width');
        }
    };
    // jqxSliderComponent functions
    // jqxSliderComponent functions
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.destroy = 
    // jqxSliderComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxSlider('destroy');
    };
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.decrementValue = /**
     * @return {?}
     */
    function () {
        this.host.jqxSlider('decrementValue');
    };
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.host.jqxSlider('disable');
    };
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxSlider('enable');
    };
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxSlider('focus');
    };
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.host.jqxSlider('getValue');
    };
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.incrementValue = /**
     * @return {?}
     */
    function () {
        this.host.jqxSlider('incrementValue');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxSliderComponent.prototype.setValue = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxSlider('setValue', index);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxSliderComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxSlider('val', value);
        }
        else {
            return this.host.jqxSlider('val');
        }
    };
    /**
     * @return {?}
     */
    jqxSliderComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('slide', function (eventData) { _this.onSlide.emit(eventData); });
        this.host.on('slideStart', function (eventData) { _this.onSlideStart.emit(eventData); });
        this.host.on('slideEnd', function (eventData) { _this.onSlideEnd.emit(eventData); });
    };
    jqxSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxSlider',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxSliderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxSliderComponent.propDecorators = {
        attrButtonsPosition: [{ type: Input, args: ['buttonsPosition',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrLayout: [{ type: Input, args: ['layout',] }],
        attrMode: [{ type: Input, args: ['mode',] }],
        attrMinorTicksFrequency: [{ type: Input, args: ['minorTicksFrequency',] }],
        attrMinorTickSize: [{ type: Input, args: ['minorTickSize',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrOrientation: [{ type: Input, args: ['orientation',] }],
        attrRangeSlider: [{ type: Input, args: ['rangeSlider',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrStep: [{ type: Input, args: ['step',] }],
        attrShowTicks: [{ type: Input, args: ['showTicks',] }],
        attrShowMinorTicks: [{ type: Input, args: ['showMinorTicks',] }],
        attrShowTickLabels: [{ type: Input, args: ['showTickLabels',] }],
        attrShowButtons: [{ type: Input, args: ['showButtons',] }],
        attrShowRange: [{ type: Input, args: ['showRange',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrTicksPosition: [{ type: Input, args: ['ticksPosition',] }],
        attrTicksFrequency: [{ type: Input, args: ['ticksFrequency',] }],
        attrTickSize: [{ type: Input, args: ['tickSize',] }],
        attrTickLabelFormatFunction: [{ type: Input, args: ['tickLabelFormatFunction',] }],
        attrTooltip: [{ type: Input, args: ['tooltip',] }],
        attrTooltipHideDelay: [{ type: Input, args: ['tooltipHideDelay',] }],
        attrTooltipPosition: [{ type: Input, args: ['tooltipPosition',] }],
        attrTooltipFormatFunction: [{ type: Input, args: ['tooltipFormatFunction',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrValues: [{ type: Input, args: ['values',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }],
        onSlide: [{ type: Output }],
        onSlideStart: [{ type: Output }],
        onSlideEnd: [{ type: Output }]
    };
    return jqxSliderComponent;
}()); //jqxSliderComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxSliderModule = /** @class */ (function () {
    function jqxSliderModule() {
    }
    jqxSliderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxSliderComponent],
                    exports: [jqxSliderComponent]
                },] }
    ];
    return jqxSliderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxSliderComponent, jqxSliderModule };

