import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxToggleButtonComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxToggleButtonComponent events
        this.onClick = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToggleButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToggleButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToggleButton(this.properties[i])) {
                        this.host.jqxToggleButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToggleButton', options);
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
        this.host.jqxToggleButton('setOptions', options);
    }
    // jqxToggleButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('disabled', arg);
        }
        else {
            return this.host.jqxToggleButton('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('height', arg);
        }
        else {
            return this.host.jqxToggleButton('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    imgSrc(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgSrc', arg);
        }
        else {
            return this.host.jqxToggleButton('imgSrc');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    imgWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgWidth', arg);
        }
        else {
            return this.host.jqxToggleButton('imgWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    imgHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgHeight', arg);
        }
        else {
            return this.host.jqxToggleButton('imgHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    imgPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('imgPosition', arg);
        }
        else {
            return this.host.jqxToggleButton('imgPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxToggleButton('roundedCorners');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('rtl', arg);
        }
        else {
            return this.host.jqxToggleButton('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    textPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('textPosition', arg);
        }
        else {
            return this.host.jqxToggleButton('textPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    textImageRelation(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxToggleButton('textImageRelation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('theme', arg);
        }
        else {
            return this.host.jqxToggleButton('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('template', arg);
        }
        else {
            return this.host.jqxToggleButton('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggled(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('toggled', arg);
        }
        else {
            return this.host.jqxToggleButton('toggled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('width', arg);
        }
        else {
            return this.host.jqxToggleButton('width');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxToggleButton('value', arg);
        }
        else {
            return this.host.jqxToggleButton('value');
        }
    }
    // jqxToggleButtonComponent functions
    /**
     * @return {?}
     */
    check() {
        this.host.jqxToggleButton('check');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxToggleButton('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxToggleButton('focus');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxToggleButton('render');
    }
    /**
     * @return {?}
     */
    toggle() {
        this.host.jqxToggleButton('toggle');
    }
    /**
     * @return {?}
     */
    unCheck() {
        this.host.jqxToggleButton('unCheck');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxToggleButton('val', value);
        }
        else {
            return this.host.jqxToggleButton('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
    }
} //jqxToggleButtonComponent
jqxToggleButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxToggleButton',
                template: '<button><ng-content></ng-content></button>'
            }] }
];
/** @nocollapse */
jqxToggleButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxToggleButtonComponent.propDecorators = {
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrImgSrc: [{ type: Input, args: ['imgSrc',] }],
    attrImgWidth: [{ type: Input, args: ['imgWidth',] }],
    attrImgHeight: [{ type: Input, args: ['imgHeight',] }],
    attrImgPosition: [{ type: Input, args: ['imgPosition',] }],
    attrRoundedCorners: [{ type: Input, args: ['roundedCorners',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTextPosition: [{ type: Input, args: ['textPosition',] }],
    attrTextImageRelation: [{ type: Input, args: ['textImageRelation',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrToggled: [{ type: Input, args: ['toggled',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrImgSrc;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrImgWidth;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrImgHeight;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrImgPosition;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrRoundedCorners;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrTextPosition;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrTextImageRelation;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrToggled;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrValue;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.properties;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.host;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.elementRef;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.widgetObject;
    /** @type {?} */
    jqxToggleButtonComponent.prototype.onClick;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
