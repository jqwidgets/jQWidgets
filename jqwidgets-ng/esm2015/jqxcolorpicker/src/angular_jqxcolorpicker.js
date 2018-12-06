import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxdropdownbutton from '../../jqwidgets/jqxdropdownbutton';
import * as jqxradiobutton from '../../jqwidgets/jqxradiobutton';
import * as jqxcolorpicker from '../../jqwidgets/jqxcolorpicker';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxColorPickerComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['color', 'colorMode', 'disabled', 'height', 'showTransparent', 'width'];
        // jqxColorPickerComponent events
        this.onColorchange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxColorPicker(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxColorPicker(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxColorPicker(this.properties[i])) {
                        this.host.jqxColorPicker(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxColorPicker', options);
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
        this.host.jqxColorPicker('setOptions', options);
    }
    // jqxColorPickerComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    color(arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('color', arg);
        }
        else {
            return this.host.jqxColorPicker('color');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    colorMode(arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('colorMode', arg);
        }
        else {
            return this.host.jqxColorPicker('colorMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('disabled', arg);
        }
        else {
            return this.host.jqxColorPicker('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('height', arg);
        }
        else {
            return this.host.jqxColorPicker('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showTransparent(arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('showTransparent', arg);
        }
        else {
            return this.host.jqxColorPicker('showTransparent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxColorPicker('width', arg);
        }
        else {
            return this.host.jqxColorPicker('width');
        }
    }
    // jqxColorPickerComponent functions
    /**
     * @return {?}
     */
    getColor() {
        return this.host.jqxColorPicker('getColor');
    }
    /**
     * @param {?} color
     * @return {?}
     */
    setColor(color) {
        this.host.jqxColorPicker('setColor', color);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('colorchange', (eventData) => { this.onColorchange.emit(eventData); });
    }
} //jqxColorPickerComponent
jqxColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxColorPicker',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxColorPickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxColorPickerComponent.propDecorators = {
    attrColor: [{ type: Input, args: ['color',] }],
    attrColorMode: [{ type: Input, args: ['colorMode',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrShowTransparent: [{ type: Input, args: ['showTransparent',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onColorchange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxColorPickerComponent.prototype.attrColor;
    /** @type {?} */
    jqxColorPickerComponent.prototype.attrColorMode;
    /** @type {?} */
    jqxColorPickerComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxColorPickerComponent.prototype.attrShowTransparent;
    /** @type {?} */
    jqxColorPickerComponent.prototype.attrWidth;
    /** @type {?} */
    jqxColorPickerComponent.prototype.attrHeight;
    /** @type {?} */
    jqxColorPickerComponent.prototype.autoCreate;
    /** @type {?} */
    jqxColorPickerComponent.prototype.properties;
    /** @type {?} */
    jqxColorPickerComponent.prototype.host;
    /** @type {?} */
    jqxColorPickerComponent.prototype.elementRef;
    /** @type {?} */
    jqxColorPickerComponent.prototype.widgetObject;
    /** @type {?} */
    jqxColorPickerComponent.prototype.onColorchange;
    /* Skipping unhandled member: ;*/
}
