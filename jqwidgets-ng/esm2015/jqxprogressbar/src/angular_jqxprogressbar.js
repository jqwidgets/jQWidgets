import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxprogressbar from '../../jqwidgets/jqxprogressbar';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxProgressBarComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'colorRanges', 'disabled', 'height', 'layout', 'max', 'min', 'orientation', 'rtl', 'renderText', 'showText', 'template', 'theme', 'value', 'width'];
        // jqxProgressBarComponent events
        this.onComplete = new EventEmitter();
        this.onInvalidValue = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxProgressBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxProgressBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxProgressBar(this.properties[i])) {
                        this.host.jqxProgressBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxProgressBar', options);
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
        this.host.jqxProgressBar('setOptions', options);
    }
    // jqxProgressBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('animationDuration', arg);
        }
        else {
            return this.host.jqxProgressBar('animationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    colorRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('colorRanges', arg);
        }
        else {
            return this.host.jqxProgressBar('colorRanges');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('disabled', arg);
        }
        else {
            return this.host.jqxProgressBar('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('height', arg);
        }
        else {
            return this.host.jqxProgressBar('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('layout', arg);
        }
        else {
            return this.host.jqxProgressBar('layout');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('max', arg);
        }
        else {
            return this.host.jqxProgressBar('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('min', arg);
        }
        else {
            return this.host.jqxProgressBar('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('orientation', arg);
        }
        else {
            return this.host.jqxProgressBar('orientation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('rtl', arg);
        }
        else {
            return this.host.jqxProgressBar('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderText(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('renderText', arg);
        }
        else {
            return this.host.jqxProgressBar('renderText');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showText(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('showText', arg);
        }
        else {
            return this.host.jqxProgressBar('showText');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('template', arg);
        }
        else {
            return this.host.jqxProgressBar('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('theme', arg);
        }
        else {
            return this.host.jqxProgressBar('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('value', arg);
        }
        else {
            return this.host.jqxProgressBar('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxProgressBar('width', arg);
        }
        else {
            return this.host.jqxProgressBar('width');
        }
    }
    // jqxProgressBarComponent functions
    /**
     * @param {?} value
     * @return {?}
     */
    actualValue(value) {
        this.host.jqxProgressBar('actualValue', value);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxProgressBar('destroy');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxProgressBar('val', value);
        }
        else {
            return this.host.jqxProgressBar('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('complete', (eventData) => { this.onComplete.emit(eventData); });
        this.host.on('invalidValue', (eventData) => { this.onInvalidValue.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
} //jqxProgressBarComponent
jqxProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxProgressBar',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxProgressBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxProgressBarComponent.propDecorators = {
    attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
    attrColorRanges: [{ type: Input, args: ['colorRanges',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrLayout: [{ type: Input, args: ['layout',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrOrientation: [{ type: Input, args: ['orientation',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrRenderText: [{ type: Input, args: ['renderText',] }],
    attrShowText: [{ type: Input, args: ['showText',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onComplete: [{ type: Output }],
    onInvalidValue: [{ type: Output }],
    onValueChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrColorRanges;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrLayout;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrMax;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrMin;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrOrientation;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrRtl;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrRenderText;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrShowText;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrTheme;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrValue;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrWidth;
    /** @type {?} */
    jqxProgressBarComponent.prototype.attrHeight;
    /** @type {?} */
    jqxProgressBarComponent.prototype.autoCreate;
    /** @type {?} */
    jqxProgressBarComponent.prototype.properties;
    /** @type {?} */
    jqxProgressBarComponent.prototype.host;
    /** @type {?} */
    jqxProgressBarComponent.prototype.elementRef;
    /** @type {?} */
    jqxProgressBarComponent.prototype.widgetObject;
    /** @type {?} */
    jqxProgressBarComponent.prototype.onComplete;
    /** @type {?} */
    jqxProgressBarComponent.prototype.onInvalidValue;
    /** @type {?} */
    jqxProgressBarComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
