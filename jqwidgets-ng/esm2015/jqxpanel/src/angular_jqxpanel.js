import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxpanel from '../../jqwidgets/jqxpanel';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, ElementRef } from '@angular/core';
export class jqxPanelComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoUpdate', 'disabled', 'height', 'rtl', 'sizeMode', 'scrollBarSize', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPanel(this.properties[i])) {
                        this.host.jqxPanel(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);
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
        this.host.jqxPanel('setOptions', options);
    }
    // jqxPanelComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoUpdate(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('autoUpdate', arg);
        }
        else {
            return this.host.jqxPanel('autoUpdate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('disabled', arg);
        }
        else {
            return this.host.jqxPanel('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('height', arg);
        }
        else {
            return this.host.jqxPanel('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('rtl', arg);
        }
        else {
            return this.host.jqxPanel('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    sizeMode(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('sizeMode', arg);
        }
        else {
            return this.host.jqxPanel('sizeMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    scrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('scrollBarSize', arg);
        }
        else {
            return this.host.jqxPanel('scrollBarSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('theme', arg);
        }
        else {
            return this.host.jqxPanel('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('width', arg);
        }
        else {
            return this.host.jqxPanel('width');
        }
    }
    // jqxPanelComponent functions
    /**
     * @param {?} HTMLElement
     * @return {?}
     */
    append(HTMLElement) {
        this.host.jqxPanel('append', HTMLElement);
    }
    /**
     * @return {?}
     */
    clearcontent() {
        this.host.jqxPanel('clearcontent');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxPanel('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxPanel('focus');
    }
    /**
     * @return {?}
     */
    getScrollHeight() {
        return this.host.jqxPanel('getScrollHeight');
    }
    /**
     * @return {?}
     */
    getVScrollPosition() {
        return this.host.jqxPanel('getVScrollPosition');
    }
    /**
     * @return {?}
     */
    getScrollWidth() {
        return this.host.jqxPanel('getScrollWidth');
    }
    /**
     * @return {?}
     */
    getHScrollPosition() {
        return this.host.jqxPanel('getHScrollPosition');
    }
    /**
     * @param {?} HTMLElement
     * @return {?}
     */
    prepend(HTMLElement) {
        this.host.jqxPanel('prepend', HTMLElement);
    }
    /**
     * @param {?} HTMLElement
     * @return {?}
     */
    remove(HTMLElement) {
        this.host.jqxPanel('remove', HTMLElement);
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    scrollTo(left, top) {
        this.host.jqxPanel('scrollTo', left, top);
    }
    // jqxPanelComponent events
    /**
     * @return {?}
     */
    __wireEvents__() {
    }
} //jqxPanelComponent
jqxPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxPanel',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxPanelComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxPanelComponent.propDecorators = {
    attrAutoUpdate: [{ type: Input, args: ['autoUpdate',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrSizeMode: [{ type: Input, args: ['sizeMode',] }],
    attrScrollBarSize: [{ type: Input, args: ['scrollBarSize',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }]
};
if (false) {
    /** @type {?} */
    jqxPanelComponent.prototype.attrAutoUpdate;
    /** @type {?} */
    jqxPanelComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxPanelComponent.prototype.attrRtl;
    /** @type {?} */
    jqxPanelComponent.prototype.attrSizeMode;
    /** @type {?} */
    jqxPanelComponent.prototype.attrScrollBarSize;
    /** @type {?} */
    jqxPanelComponent.prototype.attrTheme;
    /** @type {?} */
    jqxPanelComponent.prototype.attrWidth;
    /** @type {?} */
    jqxPanelComponent.prototype.attrHeight;
    /** @type {?} */
    jqxPanelComponent.prototype.autoCreate;
    /** @type {?} */
    jqxPanelComponent.prototype.properties;
    /** @type {?} */
    jqxPanelComponent.prototype.host;
    /** @type {?} */
    jqxPanelComponent.prototype.elementRef;
    /** @type {?} */
    jqxPanelComponent.prototype.widgetObject;
    /* Skipping unhandled member: ;*/
}
