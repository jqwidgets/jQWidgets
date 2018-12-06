import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxScrollBarComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'largestep', 'min', 'max', 'rtl', 'step', 'showButtons', 'thumbMinSize', 'theme', 'vertical', 'value', 'width'];
        // jqxScrollBarComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScrollBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScrollBar(this.properties[i])) {
                        this.host.jqxScrollBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollBar', options);
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
        this.host.jqxScrollBar('setOptions', options);
    }
    // jqxScrollBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('disabled', arg);
        }
        else {
            return this.host.jqxScrollBar('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('height', arg);
        }
        else {
            return this.host.jqxScrollBar('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    largestep(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('largestep', arg);
        }
        else {
            return this.host.jqxScrollBar('largestep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('min', arg);
        }
        else {
            return this.host.jqxScrollBar('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('max', arg);
        }
        else {
            return this.host.jqxScrollBar('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('rtl', arg);
        }
        else {
            return this.host.jqxScrollBar('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    step(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('step', arg);
        }
        else {
            return this.host.jqxScrollBar('step');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('showButtons', arg);
        }
        else {
            return this.host.jqxScrollBar('showButtons');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    thumbMinSize(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('thumbMinSize', arg);
        }
        else {
            return this.host.jqxScrollBar('thumbMinSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('theme', arg);
        }
        else {
            return this.host.jqxScrollBar('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    vertical(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('vertical', arg);
        }
        else {
            return this.host.jqxScrollBar('vertical');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('value', arg);
        }
        else {
            return this.host.jqxScrollBar('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollBar('width', arg);
        }
        else {
            return this.host.jqxScrollBar('width');
        }
    }
    // jqxScrollBarComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxScrollBar('destroy');
    }
    /**
     * @return {?}
     */
    isScrolling() {
        return this.host.jqxScrollBar('isScrolling');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setPosition(index) {
        this.host.jqxScrollBar('setPosition', index);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
} //jqxScrollBarComponent
jqxScrollBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxScrollBar',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxScrollBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxScrollBarComponent.propDecorators = {
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrLargestep: [{ type: Input, args: ['largestep',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrStep: [{ type: Input, args: ['step',] }],
    attrShowButtons: [{ type: Input, args: ['showButtons',] }],
    attrThumbMinSize: [{ type: Input, args: ['thumbMinSize',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrVertical: [{ type: Input, args: ['vertical',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onValueChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrLargestep;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrMin;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrMax;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrRtl;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrStep;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrShowButtons;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrThumbMinSize;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrTheme;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrVertical;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrValue;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrWidth;
    /** @type {?} */
    jqxScrollBarComponent.prototype.attrHeight;
    /** @type {?} */
    jqxScrollBarComponent.prototype.autoCreate;
    /** @type {?} */
    jqxScrollBarComponent.prototype.properties;
    /** @type {?} */
    jqxScrollBarComponent.prototype.host;
    /** @type {?} */
    jqxScrollBarComponent.prototype.elementRef;
    /** @type {?} */
    jqxScrollBarComponent.prototype.widgetObject;
    /** @type {?} */
    jqxScrollBarComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
}
