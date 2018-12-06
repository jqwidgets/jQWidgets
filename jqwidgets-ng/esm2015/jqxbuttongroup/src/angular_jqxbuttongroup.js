import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxbuttongroup from '../../jqwidgets/jqxbuttongroup';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxButtonGroupComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'enableHover', 'mode', 'rtl', 'template', 'theme'];
        // jqxButtonGroupComponent events
        this.onButtonclick = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.onUnselected = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxButtonGroup(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxButtonGroup(this.properties[i])) {
                        this.host.jqxButtonGroup(this.properties[i], this[attrName]);
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
        this.host[0].style.marginLeft = '1px';
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButtonGroup', options);
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
        this.host.jqxButtonGroup('setOptions', options);
    }
    // jqxButtonGroupComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('disabled', arg);
        }
        else {
            return this.host.jqxButtonGroup('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('enableHover', arg);
        }
        else {
            return this.host.jqxButtonGroup('enableHover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('mode', arg);
        }
        else {
            return this.host.jqxButtonGroup('mode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('rtl', arg);
        }
        else {
            return this.host.jqxButtonGroup('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('template', arg);
        }
        else {
            return this.host.jqxButtonGroup('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxButtonGroup('theme', arg);
        }
        else {
            return this.host.jqxButtonGroup('theme');
        }
    }
    // jqxButtonGroupComponent functions
    /**
     * @param {?} index
     * @return {?}
     */
    disableAt(index) {
        this.host.jqxButtonGroup('disableAt', index);
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxButtonGroup('disable');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxButtonGroup('destroy');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxButtonGroup('enable');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    enableAt(index) {
        this.host.jqxButtonGroup('enableAt', index);
    }
    /**
     * @return {?}
     */
    getSelection() {
        return this.host.jqxButtonGroup('getSelection');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxButtonGroup('render');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setSelection(index) {
        this.host.jqxButtonGroup('setSelection', index);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('buttonclick', (eventData) => { this.onButtonclick.emit(eventData); });
        this.host.on('selected', (eventData) => { this.onSelected.emit(eventData); });
        this.host.on('unselected', (eventData) => { this.onUnselected.emit(eventData); });
    }
} //jqxButtonGroupComponent
jqxButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxButtonGroup',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxButtonGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxButtonGroupComponent.propDecorators = {
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableHover: [{ type: Input, args: ['enableHover',] }],
    attrMode: [{ type: Input, args: ['mode',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onButtonclick: [{ type: Output }],
    onSelected: [{ type: Output }],
    onUnselected: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrMode;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrRtl;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrTheme;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrWidth;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.attrHeight;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.autoCreate;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.properties;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.host;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.elementRef;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.widgetObject;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.onButtonclick;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.onSelected;
    /** @type {?} */
    jqxButtonGroupComponent.prototype.onUnselected;
    /* Skipping unhandled member: ;*/
}
