import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxpopover from '../../jqwidgets/jqxpopover';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxPopoverComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['arrowOffsetValue', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'animationType', 'height', 'initContent', 'isModal', 'offset', 'position', 'rtl', 'selector', 'showArrow', 'showCloseButton', 'width', 'title', 'theme'];
        // jqxPopoverComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPopover(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPopover(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPopover(this.properties[i])) {
                        this.host.jqxPopover(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPopover', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
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
        this.host.jqxPopover('setOptions', options);
    }
    // jqxPopoverComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    arrowOffsetValue(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('arrowOffsetValue', arg);
        }
        else {
            return this.host.jqxPopover('arrowOffsetValue');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationOpenDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationOpenDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationCloseDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxPopover('animationCloseDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoClose(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('autoClose', arg);
        }
        else {
            return this.host.jqxPopover('autoClose');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('animationType', arg);
        }
        else {
            return this.host.jqxPopover('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('height', arg);
        }
        else {
            return this.host.jqxPopover('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('initContent', arg);
        }
        else {
            return this.host.jqxPopover('initContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    isModal(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('isModal', arg);
        }
        else {
            return this.host.jqxPopover('isModal');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    offset(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('offset', arg);
        }
        else {
            return this.host.jqxPopover('offset');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('position', arg);
        }
        else {
            return this.host.jqxPopover('position');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('rtl', arg);
        }
        else {
            return this.host.jqxPopover('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selector(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('selector', arg);
        }
        else {
            return this.host.jqxPopover('selector');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showArrow', arg);
        }
        else {
            return this.host.jqxPopover('showArrow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showCloseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('showCloseButton', arg);
        }
        else {
            return this.host.jqxPopover('showCloseButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('width', arg);
        }
        else {
            return this.host.jqxPopover('width');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('title', arg);
        }
        else {
            return this.host.jqxPopover('title');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxPopover('theme', arg);
        }
        else {
            return this.host.jqxPopover('theme');
        }
    }
    // jqxPopoverComponent functions
    /**
     * @return {?}
     */
    close() {
        this.host.jqxPopover('close');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxPopover('destroy');
    }
    /**
     * @return {?}
     */
    open() {
        this.host.jqxPopover('open');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        setTimeout(() => {
            this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
            this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        });
    }
} //jqxPopoverComponent
jqxPopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxPopover',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxPopoverComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxPopoverComponent.propDecorators = {
    attrArrowOffsetValue: [{ type: Input, args: ['arrowOffsetValue',] }],
    attrAnimationOpenDelay: [{ type: Input, args: ['animationOpenDelay',] }],
    attrAnimationCloseDelay: [{ type: Input, args: ['animationCloseDelay',] }],
    attrAutoClose: [{ type: Input, args: ['autoClose',] }],
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrInitContent: [{ type: Input, args: ['initContent',] }],
    attrIsModal: [{ type: Input, args: ['isModal',] }],
    attrOffset: [{ type: Input, args: ['offset',] }],
    attrPosition: [{ type: Input, args: ['position',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrSelector: [{ type: Input, args: ['selector',] }],
    attrShowArrow: [{ type: Input, args: ['showArrow',] }],
    attrShowCloseButton: [{ type: Input, args: ['showCloseButton',] }],
    attrTitle: [{ type: Input, args: ['title',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onClose: [{ type: Output }],
    onOpen: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxPopoverComponent.prototype.attrArrowOffsetValue;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrAnimationOpenDelay;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrAnimationCloseDelay;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrAutoClose;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrInitContent;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrIsModal;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrOffset;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrPosition;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrRtl;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrSelector;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrShowArrow;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrShowCloseButton;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrTitle;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrTheme;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrWidth;
    /** @type {?} */
    jqxPopoverComponent.prototype.attrHeight;
    /** @type {?} */
    jqxPopoverComponent.prototype.autoCreate;
    /** @type {?} */
    jqxPopoverComponent.prototype.properties;
    /** @type {?} */
    jqxPopoverComponent.prototype.host;
    /** @type {?} */
    jqxPopoverComponent.prototype.elementRef;
    /** @type {?} */
    jqxPopoverComponent.prototype.widgetObject;
    /** @type {?} */
    jqxPopoverComponent.prototype.onClose;
    /** @type {?} */
    jqxPopoverComponent.prototype.onOpen;
    /* Skipping unhandled member: ;*/
}
