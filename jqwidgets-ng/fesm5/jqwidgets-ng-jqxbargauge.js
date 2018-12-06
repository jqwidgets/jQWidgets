import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
import * as jqxbargauge from '../../jqwidgets/jqxbargauge';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            (_a = childEl.classList).add.apply(_a, __spread(classes));
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
    /**
     * @return {?}
     */
    jqxBarGaugeComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('drawEnd', function (eventData) { _this.onDrawEnd.emit(eventData); });
        this.host.on('drawStart', function (eventData) { _this.onDrawStart.emit(eventData); });
        this.host.on('initialized', function (eventData) { _this.onInitialized.emit(eventData); });
        this.host.on('tooltipClose', function (eventData) { _this.onTooltipClose.emit(eventData); });
        this.host.on('tooltipOpen', function (eventData) { _this.onTooltipOpen.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxBarGaugeModule = /** @class */ (function () {
    function jqxBarGaugeModule() {
    }
    jqxBarGaugeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxBarGaugeComponent],
                    exports: [jqxBarGaugeComponent]
                },] }
    ];
    return jqxBarGaugeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxBarGaugeComponent, jqxBarGaugeModule };

