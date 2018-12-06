import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxswitchbutton from '../../jqwidgets/jqxswitchbutton';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSwitchButtonComponent),
    multi: true
};
export class jqxSwitchButtonComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['checked', 'disabled', 'height', 'orientation', 'onLabel', 'offLabel', 'thumbSize', 'rtl', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxSwitchButtonComponent events
        this.onChecked = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onUnchecked = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSwitchButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSwitchButton(this.properties[i])) {
                        this.host.jqxSwitchButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSwitchButton', options);
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
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxSwitchButton('setOptions', options);
    }
    // jqxSwitchButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('checked', arg);
        }
        else {
            return this.host.jqxSwitchButton('checked');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('disabled', arg);
        }
        else {
            return this.host.jqxSwitchButton('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('height', arg);
        }
        else {
            return this.host.jqxSwitchButton('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('orientation', arg);
        }
        else {
            return this.host.jqxSwitchButton('orientation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    onLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('onLabel', arg);
        }
        else {
            return this.host.jqxSwitchButton('onLabel');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    offLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('offLabel', arg);
        }
        else {
            return this.host.jqxSwitchButton('offLabel');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    thumbSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('thumbSize', arg);
        }
        else {
            return this.host.jqxSwitchButton('thumbSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('rtl', arg);
        }
        else {
            return this.host.jqxSwitchButton('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('width', arg);
        }
        else {
            return this.host.jqxSwitchButton('width');
        }
    }
    // jqxSwitchButtonComponent functions
    /**
     * @return {?}
     */
    check() {
        this.host.jqxSwitchButton('check');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxSwitchButton('disable');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxSwitchButton('enable');
    }
    /**
     * @return {?}
     */
    toggle() {
        this.host.jqxSwitchButton('toggle');
    }
    /**
     * @return {?}
     */
    uncheck() {
        this.host.jqxSwitchButton('uncheck');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxSwitchButton('val', value);
        }
        else {
            return this.host.jqxSwitchButton('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
    }
} //jqxSwitchButtonComponent
jqxSwitchButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxSwitchButton',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxSwitchButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxSwitchButtonComponent.propDecorators = {
    attrChecked: [{ type: Input, args: ['checked',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrOrientation: [{ type: Input, args: ['orientation',] }],
    attrOnLabel: [{ type: Input, args: ['onLabel',] }],
    attrOffLabel: [{ type: Input, args: ['offLabel',] }],
    attrThumbSize: [{ type: Input, args: ['thumbSize',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChecked: [{ type: Output }],
    onChange: [{ type: Output }],
    onUnchecked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrChecked;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrOrientation;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrOnLabel;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrOffLabel;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrThumbSize;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.properties;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.host;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.elementRef;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxSwitchButtonComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxSwitchButtonComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.onChecked;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.onChange;
    /** @type {?} */
    jqxSwitchButtonComponent.prototype.onUnchecked;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
