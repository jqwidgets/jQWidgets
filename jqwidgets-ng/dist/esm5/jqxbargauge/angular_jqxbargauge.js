import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxbargauge from '../../jqwidgets-scripts/jqwidgets/jqxbargauge';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxBarGaugeComponent = /** @class */ (function () {
    function jqxBarGaugeComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'backgroundColor', 'barSpacing', 'baseValue', 'colorScheme', 'customColorScheme', 'disabled', 'endAngle', 'formatFunction', 'height', 'labels', 'max', 'min', 'relativeInnerRadius', 'rendered', 'startAngle', 'title', 'tooltip', 'useGradient', 'values', 'width'];
        // jqxBarGaugeComponent events
        this.onDrawEnd = new EventEmitter();
        this.onDrawStart = new EventEmitter();
        this.onInitialized = new EventEmitter();
        this.onTooltipClose = new EventEmitter();
        this.onTooltipOpen = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxBarGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxBarGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxBarGauge(this.properties[i])) {
                        this.host.jqxBarGauge(this.properties[i], this[attrName]);
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
    jqxBarGaugeComponent.prototype.arraysEqual = /**
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
    jqxBarGaugeComponent.prototype.manageAttributes = /**
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
    jqxBarGaugeComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.moveStyles = /**
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
    jqxBarGaugeComponent.prototype.createComponent = /**
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
        if (typeof options.width === 'string' && options.width.indexOf('%') !== -1) {
            options.width = parseInt(options.width, 10) / 100 * this.host.parent().parent().parent().width();
        }
        if (typeof options.height === 'string' && options.height.indexOf('%') !== -1) {
            options.height = parseInt(options.height, 10) / 100 * this.host.parent().parent().parent().height();
        }
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarGauge', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.__updateRect__ = /**
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
    jqxBarGaugeComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxBarGauge('setOptions', options);
    };
    // jqxBarGaugeComponent properties
    // jqxBarGaugeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.animationDuration = 
    // jqxBarGaugeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxBarGauge('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.backgroundColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('backgroundColor', arg);
        }
        else {
            return this.host.jqxBarGauge('backgroundColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.barSpacing = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('barSpacing', arg);
        }
        else {
            return this.host.jqxBarGauge('barSpacing');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.baseValue = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('baseValue', arg);
        }
        else {
            return this.host.jqxBarGauge('baseValue');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.colorScheme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxBarGauge('colorScheme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.customColorScheme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('customColorScheme', arg);
        }
        else {
            return this.host.jqxBarGauge('customColorScheme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('disabled', arg);
        }
        else {
            return this.host.jqxBarGauge('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.endAngle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('endAngle', arg);
        }
        else {
            return this.host.jqxBarGauge('endAngle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.formatFunction = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('formatFunction', arg);
        }
        else {
            return this.host.jqxBarGauge('formatFunction');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('height', arg);
        }
        else {
            return this.host.jqxBarGauge('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.labels = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('labels', arg);
        }
        else {
            return this.host.jqxBarGauge('labels');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('max', arg);
        }
        else {
            return this.host.jqxBarGauge('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('min', arg);
        }
        else {
            return this.host.jqxBarGauge('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.relativeInnerRadius = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('relativeInnerRadius', arg);
        }
        else {
            return this.host.jqxBarGauge('relativeInnerRadius');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.rendered = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('rendered', arg);
        }
        else {
            return this.host.jqxBarGauge('rendered');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.startAngle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('startAngle', arg);
        }
        else {
            return this.host.jqxBarGauge('startAngle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.title = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('title', arg);
        }
        else {
            return this.host.jqxBarGauge('title');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.tooltip = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('tooltip', arg);
        }
        else {
            return this.host.jqxBarGauge('tooltip');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.useGradient = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('useGradient', arg);
        }
        else {
            return this.host.jqxBarGauge('useGradient');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.values = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('values', arg);
        }
        else {
            return this.host.jqxBarGauge('values');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxBarGauge('width', arg);
        }
        else {
            return this.host.jqxBarGauge('width');
        }
    };
    // jqxBarGaugeComponent functions
    // jqxBarGaugeComponent functions
    /**
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.refresh = 
    // jqxBarGaugeComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxBarGauge('refresh');
    };
    /**
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxBarGauge('render');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxBarGauge('val', value);
        }
        else {
            return this.host.jqxBarGauge('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('drawEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDrawEnd.emit(eventData); }));
        this.host.on('drawStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onDrawStart.emit(eventData); }));
        this.host.on('initialized', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onInitialized.emit(eventData); }));
        this.host.on('tooltipClose', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onTooltipClose.emit(eventData); }));
        this.host.on('tooltipOpen', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onTooltipOpen.emit(eventData); }));
        this.host.on('valueChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onValueChanged.emit(eventData); }));
    };
    jqxBarGaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxBarGauge',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxBarGaugeComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxBarGaugeComponent.propDecorators = {
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrBackgroundColor: [{ type: Input, args: ['backgroundColor',] }],
        attrBarSpacing: [{ type: Input, args: ['barSpacing',] }],
        attrBaseValue: [{ type: Input, args: ['baseValue',] }],
        attrColorScheme: [{ type: Input, args: ['colorScheme',] }],
        attrCustomColorScheme: [{ type: Input, args: ['customColorScheme',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEndAngle: [{ type: Input, args: ['endAngle',] }],
        attrFormatFunction: [{ type: Input, args: ['formatFunction',] }],
        attrLabels: [{ type: Input, args: ['labels',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrRelativeInnerRadius: [{ type: Input, args: ['relativeInnerRadius',] }],
        attrRendered: [{ type: Input, args: ['rendered',] }],
        attrStartAngle: [{ type: Input, args: ['startAngle',] }],
        attrTitle: [{ type: Input, args: ['title',] }],
        attrTooltip: [{ type: Input, args: ['tooltip',] }],
        attrUseGradient: [{ type: Input, args: ['useGradient',] }],
        attrValues: [{ type: Input, args: ['values',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onDrawEnd: [{ type: Output }],
        onDrawStart: [{ type: Output }],
        onInitialized: [{ type: Output }],
        onTooltipClose: [{ type: Output }],
        onTooltipOpen: [{ type: Output }],
        onValueChanged: [{ type: Output }]
    };
    return jqxBarGaugeComponent;
}()); //jqxBarGaugeComponent
export { jqxBarGaugeComponent };
if (false) {
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrBackgroundColor;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrBarSpacing;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrBaseValue;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrColorScheme;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrCustomColorScheme;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrEndAngle;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrFormatFunction;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrLabels;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrMax;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrMin;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrRelativeInnerRadius;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrRendered;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrStartAngle;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrTitle;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrTooltip;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrUseGradient;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrValues;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrWidth;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.attrHeight;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.autoCreate;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.properties;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.host;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.elementRef;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.widgetObject;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onDrawEnd;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onDrawStart;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onInitialized;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onTooltipClose;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onTooltipOpen;
    /** @type {?} */
    jqxBarGaugeComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhiYXJnYXVnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhiYXJnYXVnZS8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4YmFyZ2F1Z2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQW9DRyw4QkFBWSxnQkFBNEI7UUFQbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxtQkFBbUIsRUFBQyxpQkFBaUIsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxxQkFBcUIsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQzs7UUFxVHBSLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFwVDNDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENB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S0FBSyxTQUFDLEtBQUs7MENBQ1gsS0FBSyxTQUFDLHFCQUFxQjsrQkFDM0IsS0FBSyxTQUFDLFVBQVU7aUNBQ2hCLEtBQUssU0FBQyxZQUFZOzRCQUNsQixLQUFLLFNBQUMsT0FBTzs4QkFDYixLQUFLLFNBQUMsU0FBUztrQ0FDZixLQUFLLFNBQUMsYUFBYTs2QkFDbkIsS0FBSyxTQUFDLFFBQVE7NEJBQ2QsS0FBSyxTQUFDLE9BQU87NkJBQ2IsS0FBSyxTQUFDLFFBQVE7NkJBRWQsS0FBSyxTQUFDLGFBQWE7NEJBdVRuQixNQUFNOzhCQUNOLE1BQU07Z0NBQ04sTUFBTTtpQ0FDTixNQUFNO2dDQUNOLE1BQU07aUNBQ04sTUFBTTs7SUFXViwyQkFBQztDQUFBLEFBcFdELElBb1dDLENBQUMsc0JBQXNCO1NBL1ZYLG9CQUFvQjs7O0lBRTlCLHFEQUEwRDs7SUFDMUQsbURBQXNEOztJQUN0RCw4Q0FBNEM7O0lBQzVDLDZDQUEwQzs7SUFDMUMsK0NBQThDOztJQUM5QyxxREFBdUY7O0lBQ3ZGLDRDQUF5Qzs7SUFDekMsNENBQXdDOztJQUN4QyxrREFBaUg7O0lBQ2pILDBDQUFzRDs7SUFDdEQsdUNBQXVDOztJQUN2Qyx1Q0FBOEI7O0lBQzlCLHVEQUF1RTs7SUFDdkUsNENBQTRDOztJQUM1Qyw4Q0FBNEM7O0lBQzVDLHlDQUFtRDs7SUFDbkQsMkNBQXlEOztJQUN6RCwrQ0FBK0M7O0lBQy9DLDBDQUEyQzs7SUFDM0MseUNBQTJDOztJQUMzQywwQ0FBNkM7O0lBRTdDLDBDQUFpRDs7SUFFakQsMENBQThSOztJQUM5UixvQ0FBVTs7SUFDViwwQ0FBdUI7O0lBQ3ZCLDRDQUFxQzs7SUFrVHJDLHlDQUF5Qzs7SUFDekMsMkNBQTJDOztJQUMzQyw2Q0FBNkM7O0lBQzdDLDhDQUE4Qzs7SUFDOUMsNkNBQTZDOztJQUM3Qyw4Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEJhckdhdWdlJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhCYXJHYXVnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGF0dHJBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBhdHRyQmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICBASW5wdXQoJ2JhclNwYWNpbmcnKSBhdHRyQmFyU3BhY2luZzogbnVtYmVyO1xuICAgQElucHV0KCdiYXNlVmFsdWUnKSBhdHRyQmFzZVZhbHVlOiBudW1iZXI7XG4gICBASW5wdXQoJ2NvbG9yU2NoZW1lJykgYXR0ckNvbG9yU2NoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ2N1c3RvbUNvbG9yU2NoZW1lJykgYXR0ckN1c3RvbUNvbG9yU2NoZW1lOiBqcXdpZGdldHMuQmFyR2F1Z2VDdXN0b21Db2xvclNjaGVtZTtcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuZEFuZ2xlJykgYXR0ckVuZEFuZ2xlOiBudW1iZXI7XG4gICBASW5wdXQoJ2Zvcm1hdEZ1bmN0aW9uJykgYXR0ckZvcm1hdEZ1bmN0aW9uOiAodmFsdWU/OiBudW1iZXIgfCBzdHJpbmcsIGluZGV4PzogbnVtYmVyLCBjb2xvcj86IHN0cmluZykgPT4gc3RyaW5nO1xuICAgQElucHV0KCdsYWJlbHMnKSBhdHRyTGFiZWxzOiBqcXdpZGdldHMuQmFyR2F1Z2VMYWJlbHM7XG4gICBASW5wdXQoJ21heCcpIGF0dHJNYXg6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogbnVtYmVyO1xuICAgQElucHV0KCdyZWxhdGl2ZUlubmVyUmFkaXVzJykgYXR0clJlbGF0aXZlSW5uZXJSYWRpdXM6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncmVuZGVyZWQnKSBhdHRyUmVuZGVyZWQ6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3N0YXJ0QW5nbGUnKSBhdHRyU3RhcnRBbmdsZTogbnVtYmVyO1xuICAgQElucHV0KCd0aXRsZScpIGF0dHJUaXRsZToganF3aWRnZXRzLkJhckdhdWdlVGl0bGU7XG4gICBASW5wdXQoJ3Rvb2x0aXAnKSBhdHRyVG9vbHRpcDoganF3aWRnZXRzLkJhckdhdWdlVG9vbHRpcDtcbiAgIEBJbnB1dCgndXNlR3JhZGllbnQnKSBhdHRyVXNlR3JhZGllbnQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ3ZhbHVlcycpIGF0dHJWYWx1ZXM6IEFycmF5PG51bWJlcj47XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uRHVyYXRpb24nLCdiYWNrZ3JvdW5kQ29sb3InLCdiYXJTcGFjaW5nJywnYmFzZVZhbHVlJywnY29sb3JTY2hlbWUnLCdjdXN0b21Db2xvclNjaGVtZScsJ2Rpc2FibGVkJywnZW5kQW5nbGUnLCdmb3JtYXRGdW5jdGlvbicsJ2hlaWdodCcsJ2xhYmVscycsJ21heCcsJ21pbicsJ3JlbGF0aXZlSW5uZXJSYWRpdXMnLCdyZW5kZXJlZCcsJ3N0YXJ0QW5nbGUnLCd0aXRsZScsJ3Rvb2x0aXAnLCd1c2VHcmFkaWVudCcsJ3ZhbHVlcycsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeEJhckdhdWdlO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeEJhckdhdWdlKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhCYXJHYXVnZSh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53aWR0aCA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy53aWR0aC5pbmRleE9mKCclJykgIT09IC0xKSB7XG4gICAgICAgICBvcHRpb25zLndpZHRoID0gcGFyc2VJbnQob3B0aW9ucy53aWR0aCwgMTApIC8gMTAwICogdGhpcy5ob3N0LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLndpZHRoKCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmhlaWdodC5pbmRleE9mKCclJykgIT09IC0xKSB7XG4gICAgICAgICBvcHRpb25zLmhlaWdodCA9IHBhcnNlSW50KG9wdGlvbnMuaGVpZ2h0LCAxMCkgLyAxMDAgKiB0aGlzLmhvc3QucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGVpZ2h0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhCYXJHYXVnZScsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhCYXJHYXVnZUNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25EdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdhbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2FuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGJhY2tncm91bmRDb2xvcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdiYWNrZ3JvdW5kQ29sb3InLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdiYWNrZ3JvdW5kQ29sb3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYmFyU3BhY2luZyhhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdiYXJTcGFjaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnYmFyU3BhY2luZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBiYXNlVmFsdWUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnYmFzZVZhbHVlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnYmFzZVZhbHVlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbG9yU2NoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2NvbG9yU2NoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnY29sb3JTY2hlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY3VzdG9tQ29sb3JTY2hlbWUoYXJnPzoganF3aWRnZXRzLkJhckdhdWdlQ3VzdG9tQ29sb3JTY2hlbWUpOiBqcXdpZGdldHMuQmFyR2F1Z2VDdXN0b21Db2xvclNjaGVtZSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2N1c3RvbUNvbG9yU2NoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnY3VzdG9tQ29sb3JTY2hlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuZEFuZ2xlKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2VuZEFuZ2xlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnZW5kQW5nbGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9ybWF0RnVuY3Rpb24oYXJnPzogKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nLCBpbmRleD86IG51bWJlciwgY29sb3I/OiBzdHJpbmcpID0+IHN0cmluZyk6ICh2YWx1ZT86IG51bWJlciB8IHN0cmluZywgaW5kZXg/OiBudW1iZXIsIGNvbG9yPzogc3RyaW5nKSA9PiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdmb3JtYXRGdW5jdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2Zvcm1hdEZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGFiZWxzKGFyZz86IGpxd2lkZ2V0cy5CYXJHYXVnZUxhYmVscyk6IGpxd2lkZ2V0cy5CYXJHYXVnZUxhYmVscyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2xhYmVscycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ2xhYmVscycpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnbWF4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnbWF4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdtaW4nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdtaW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVsYXRpdmVJbm5lclJhZGl1cyhhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdyZWxhdGl2ZUlubmVyUmFkaXVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgncmVsYXRpdmVJbm5lclJhZGl1cycpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJlZChhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3JlbmRlcmVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgncmVuZGVyZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhcnRBbmdsZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdzdGFydEFuZ2xlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgnc3RhcnRBbmdsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aXRsZShhcmc/OiBqcXdpZGdldHMuQmFyR2F1Z2VUaXRsZSk6IGpxd2lkZ2V0cy5CYXJHYXVnZVRpdGxlIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgndGl0bGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd0aXRsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sdGlwKGFyZz86IGpxd2lkZ2V0cy5CYXJHYXVnZVRvb2x0aXApOiBqcXdpZGdldHMuQmFyR2F1Z2VUb29sdGlwIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgndG9vbHRpcCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3Rvb2x0aXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdXNlR3JhZGllbnQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd1c2VHcmFkaWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3VzZUdyYWRpZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbHVlcyhhcmc/OiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3ZhbHVlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3ZhbHVlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4QmFyR2F1Z2VDb21wb25lbnQgZnVuY3Rpb25zXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEJhckdhdWdlKCdyZWZyZXNoJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhCYXJHYXVnZSgncmVuZGVyJyk7XG4gICB9XG5cbiAgIHZhbCh2YWx1ZT86IEFycmF5PG51bWJlcj4pOiBhbnkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4QmFyR2F1Z2UoJ3ZhbCcsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEJhckdhdWdlKCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4QmFyR2F1Z2VDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25EcmF3RW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRHJhd1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uSW5pdGlhbGl6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Ub29sdGlwQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Ub29sdGlwT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYXdFbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRyYXdFbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhd1N0YXJ0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25EcmF3U3RhcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignaW5pdGlhbGl6ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkluaXRpYWxpemVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Rvb2x0aXBDbG9zZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVG9vbHRpcENsb3NlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Rvb2x0aXBPcGVuJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Ub29sdGlwT3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd2YWx1ZUNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblZhbHVlQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4QmFyR2F1Z2VDb21wb25lbnRcbiJdfQ==