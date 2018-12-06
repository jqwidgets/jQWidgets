import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
import * as jqxgauge from '../../jqwidgets/jqxgauge';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxGaugeComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'border', 'caption', 'cap', 'colorScheme', 'disabled', 'easing', 'endAngle', 'height', 'int64', 'labels', 'min', 'max', 'pointer', 'radius', 'ranges', 'startAngle', 'showRanges', 'styles', 'ticksMajor', 'ticksMinor', 'ticksDistance', 'value', 'width'];
        // jqxGaugeComponent events
        this.onValueChanging = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxGauge(this.properties[i])) {
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createComponent(options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGauge', options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxGauge('setOptions', options);
    }
    // jqxGaugeComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxGauge('animationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    border(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('border', arg);
        }
        else {
            return this.host.jqxGauge('border');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    caption(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('caption', arg);
        }
        else {
            return this.host.jqxGauge('caption');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cap(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('cap', arg);
        }
        else {
            return this.host.jqxGauge('cap');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxGauge('colorScheme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('disabled', arg);
        }
        else {
            return this.host.jqxGauge('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('easing', arg);
        }
        else {
            return this.host.jqxGauge('easing');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    endAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('endAngle', arg);
        }
        else {
            return this.host.jqxGauge('endAngle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('height', arg);
        }
        else {
            return this.host.jqxGauge('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    int64(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('int64', arg);
        }
        else {
            return this.host.jqxGauge('int64');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('labels', arg);
        }
        else {
            return this.host.jqxGauge('labels');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('min', arg);
        }
        else {
            return this.host.jqxGauge('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('max', arg);
        }
        else {
            return this.host.jqxGauge('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('pointer', arg);
        }
        else {
            return this.host.jqxGauge('pointer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    radius(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('radius', arg);
        }
        else {
            return this.host.jqxGauge('radius');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ranges(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ranges', arg);
        }
        else {
            return this.host.jqxGauge('ranges');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    startAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('startAngle', arg);
        }
        else {
            return this.host.jqxGauge('startAngle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('showRanges', arg);
        }
        else {
            return this.host.jqxGauge('showRanges');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    styles(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('styles', arg);
        }
        else {
            return this.host.jqxGauge('styles');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ticksMajor(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMajor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ticksMinor(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMinor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    ticksDistance(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksDistance', arg);
        }
        else {
            return this.host.jqxGauge('ticksDistance');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('value', arg);
        }
        else {
            return this.host.jqxGauge('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('width', arg);
        }
        else {
            return this.host.jqxGauge('width');
        }
    }
    // jqxGaugeComponent functions
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxGauge('disable');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxGauge('enable');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxGauge('val', value);
        }
        else {
            return this.host.jqxGauge('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('valueChanging', (eventData) => { this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
} //jqxGaugeComponent
jqxGaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxGauge',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxGaugeComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxGaugeComponent.propDecorators = {
    attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
    attrBorder: [{ type: Input, args: ['border',] }],
    attrCaption: [{ type: Input, args: ['caption',] }],
    attrCap: [{ type: Input, args: ['cap',] }],
    attrColorScheme: [{ type: Input, args: ['colorScheme',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEasing: [{ type: Input, args: ['easing',] }],
    attrEndAngle: [{ type: Input, args: ['endAngle',] }],
    attrInt64: [{ type: Input, args: ['int64',] }],
    attrLabels: [{ type: Input, args: ['labels',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrPointer: [{ type: Input, args: ['pointer',] }],
    attrRadius: [{ type: Input, args: ['radius',] }],
    attrRanges: [{ type: Input, args: ['ranges',] }],
    attrStartAngle: [{ type: Input, args: ['startAngle',] }],
    attrShowRanges: [{ type: Input, args: ['showRanges',] }],
    attrStyles: [{ type: Input, args: ['styles',] }],
    attrTicksMajor: [{ type: Input, args: ['ticksMajor',] }],
    attrTicksMinor: [{ type: Input, args: ['ticksMinor',] }],
    attrTicksDistance: [{ type: Input, args: ['ticksDistance',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onValueChanging: [{ type: Output }],
    onValueChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxGaugeComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrBorder;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrCaption;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrCap;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrColorScheme;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrEasing;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrEndAngle;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrInt64;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrLabels;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrMin;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrMax;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrPointer;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrRadius;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrRanges;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrStartAngle;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrShowRanges;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrStyles;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrTicksMajor;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrTicksMinor;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrTicksDistance;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrValue;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrWidth;
    /** @type {?} */
    jqxGaugeComponent.prototype.attrHeight;
    /** @type {?} */
    jqxGaugeComponent.prototype.autoCreate;
    /** @type {?} */
    jqxGaugeComponent.prototype.properties;
    /** @type {?} */
    jqxGaugeComponent.prototype.host;
    /** @type {?} */
    jqxGaugeComponent.prototype.elementRef;
    /** @type {?} */
    jqxGaugeComponent.prototype.widgetObject;
    /** @type {?} */
    jqxGaugeComponent.prototype.onValueChanging;
    /** @type {?} */
    jqxGaugeComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
