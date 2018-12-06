import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxRepeatButtonComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['delay', 'disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxRepeatButtonComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRepeatButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRepeatButton(this.properties[i])) {
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRepeatButton', options);
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
        this.host.jqxRepeatButton('setOptions', options);
    }
    // jqxRepeatButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    delay(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('delay', arg);
        }
        else {
            return this.host.jqxRepeatButton('delay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('disabled', arg);
        }
        else {
            return this.host.jqxRepeatButton('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('height', arg);
        }
        else {
            return this.host.jqxRepeatButton('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    imgSrc(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgSrc', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgSrc');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    imgWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgWidth', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    imgHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgHeight', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    imgPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxRepeatButton('roundedCorners');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('rtl', arg);
        }
        else {
            return this.host.jqxRepeatButton('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    textPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('textPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    textImageRelation(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxRepeatButton('textImageRelation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('theme', arg);
        }
        else {
            return this.host.jqxRepeatButton('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('template', arg);
        }
        else {
            return this.host.jqxRepeatButton('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggled(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('toggled', arg);
        }
        else {
            return this.host.jqxRepeatButton('toggled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('width', arg);
        }
        else {
            return this.host.jqxRepeatButton('width');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('value', arg);
        }
        else {
            return this.host.jqxRepeatButton('value');
        }
    }
    // jqxRepeatButtonComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxRepeatButton('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxRepeatButton('focus');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxRepeatButton('render');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRepeatButton('val', value);
        }
        else {
            return this.host.jqxRepeatButton('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
    }
} //jqxRepeatButtonComponent
jqxRepeatButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxRepeatButton',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxRepeatButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxRepeatButtonComponent.propDecorators = {
    attrDelay: [{ type: Input, args: ['delay',] }],
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
    jqxRepeatButtonComponent.prototype.attrDelay;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrImgSrc;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrImgWidth;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrImgHeight;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrImgPosition;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrRoundedCorners;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrTextPosition;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrTextImageRelation;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrToggled;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrValue;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.properties;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.host;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.elementRef;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.widgetObject;
    /** @type {?} */
    jqxRepeatButtonComponent.prototype.onClick;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
