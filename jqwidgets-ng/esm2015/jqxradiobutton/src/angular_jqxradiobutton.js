import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxradiobutton from '../../jqwidgets/jqxradiobutton';
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
    useExisting: forwardRef(() => jqxRadioButtonComponent),
    multi: true
};
export class jqxRadioButtonComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'hasThreeStates', 'height', 'rtl', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxRadioButtonComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRadioButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRadioButton(this.properties[i])) {
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);
        this.valueAttr = this.host[0].parentElement.getAttribute('value');
        if (options.checked === true)
            this.onChangeCallback(this.valueAttr);
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
        this.host.jqxRadioButton('setOptions', options);
    }
    // jqxRadioButtonComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationShowDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationShowDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationHideDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    boxSize(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('boxSize', arg);
        }
        else {
            return this.host.jqxRadioButton('boxSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('checked', arg);
        }
        else {
            return this.host.jqxRadioButton('checked');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('disabled', arg);
        }
        else {
            return this.host.jqxRadioButton('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableContainerClick(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('enableContainerClick', arg);
        }
        else {
            return this.host.jqxRadioButton('enableContainerClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupName(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('groupName', arg);
        }
        else {
            return this.host.jqxRadioButton('groupName');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('hasThreeStates', arg);
        }
        else {
            return this.host.jqxRadioButton('hasThreeStates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('height', arg);
        }
        else {
            return this.host.jqxRadioButton('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('rtl', arg);
        }
        else {
            return this.host.jqxRadioButton('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('theme', arg);
        }
        else {
            return this.host.jqxRadioButton('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('width', arg);
        }
        else {
            return this.host.jqxRadioButton('width');
        }
    }
    // jqxRadioButtonComponent functions
    /**
     * @return {?}
     */
    check() {
        this.host.jqxRadioButton('check');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxRadioButton('disable');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxRadioButton('destroy');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxRadioButton('enable');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxRadioButton('focus');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxRadioButton('render');
    }
    /**
     * @return {?}
     */
    uncheck() {
        this.host.jqxRadioButton('uncheck');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRadioButton('val', value);
        }
        else {
            return this.host.jqxRadioButton('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); this.onChangeCallback(this.valueAttr); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
    }
} //jqxRadioButtonComponent
jqxRadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxRadioButton',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxRadioButtonComponent.propDecorators = {
    attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
    attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
    attrBoxSize: [{ type: Input, args: ['boxSize',] }],
    attrChecked: [{ type: Input, args: ['checked',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableContainerClick: [{ type: Input, args: ['enableContainerClick',] }],
    attrGroupName: [{ type: Input, args: ['groupName',] }],
    attrHasThreeStates: [{ type: Input, args: ['hasThreeStates',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChecked: [{ type: Output }],
    onChange: [{ type: Output }],
    onUnchecked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrBoxSize;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrChecked;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrEnableContainerClick;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrGroupName;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrHasThreeStates;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrRtl;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrTheme;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrWidth;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.attrHeight;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.autoCreate;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.properties;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.valueAttr;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.host;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.elementRef;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxRadioButtonComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxRadioButtonComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.onChecked;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.onChange;
    /** @type {?} */
    jqxRadioButtonComponent.prototype.onUnchecked;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
