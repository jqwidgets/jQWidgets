import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
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
    useExisting: forwardRef(() => jqxCheckBoxComponent),
    multi: true
};
export class jqxCheckBoxComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'height', 'hasThreeStates', 'locked', 'rtl', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxCheckBoxComponent events
        this.onChecked = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onIndeterminate = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxCheckBox(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxCheckBox(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxCheckBox(this.properties[i])) {
                        this.host.jqxCheckBox(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCheckBox', options);
        options.checked !== undefined ? this.onChangeCallback(options.checked) : this.onChangeCallback(false);
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
        this.host.jqxCheckBox('setOptions', options);
    }
    // jqxCheckBoxComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('animationShowDelay', arg);
        }
        else {
            return this.host.jqxCheckBox('animationShowDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('animationHideDelay', arg);
        }
        else {
            return this.host.jqxCheckBox('animationHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    boxSize(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('boxSize', arg);
        }
        else {
            return this.host.jqxCheckBox('boxSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('checked', arg);
        }
        else {
            return this.host.jqxCheckBox('checked');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('disabled', arg);
        }
        else {
            return this.host.jqxCheckBox('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableContainerClick(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('enableContainerClick', arg);
        }
        else {
            return this.host.jqxCheckBox('enableContainerClick');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupName(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('groupName', arg);
        }
        else {
            return this.host.jqxCheckBox('groupName');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('height', arg);
        }
        else {
            return this.host.jqxCheckBox('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('hasThreeStates', arg);
        }
        else {
            return this.host.jqxCheckBox('hasThreeStates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    locked(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('locked', arg);
        }
        else {
            return this.host.jqxCheckBox('locked');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('rtl', arg);
        }
        else {
            return this.host.jqxCheckBox('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('theme', arg);
        }
        else {
            return this.host.jqxCheckBox('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('width', arg);
        }
        else {
            return this.host.jqxCheckBox('width');
        }
    }
    // jqxCheckBoxComponent functions
    /**
     * @return {?}
     */
    check() {
        this.host.jqxCheckBox('check');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxCheckBox('disable');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxCheckBox('destroy');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxCheckBox('enable');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxCheckBox('focus');
    }
    /**
     * @return {?}
     */
    indeterminate() {
        this.host.jqxCheckBox('indeterminate');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxCheckBox('render');
    }
    /**
     * @return {?}
     */
    toggle() {
        this.host.jqxCheckBox('toggle');
    }
    /**
     * @return {?}
     */
    uncheck() {
        this.host.jqxCheckBox('uncheck');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxCheckBox('val', value);
        }
        else {
            return this.host.jqxCheckBox('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.checked); });
        this.host.on('indeterminate', (eventData) => { this.onIndeterminate.emit(eventData); });
        this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
    }
} //jqxCheckBoxComponent
jqxCheckBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxCheckBox',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxCheckBoxComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxCheckBoxComponent.propDecorators = {
    attrAnimationShowDelay: [{ type: Input, args: ['animationShowDelay',] }],
    attrAnimationHideDelay: [{ type: Input, args: ['animationHideDelay',] }],
    attrBoxSize: [{ type: Input, args: ['boxSize',] }],
    attrChecked: [{ type: Input, args: ['checked',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableContainerClick: [{ type: Input, args: ['enableContainerClick',] }],
    attrGroupName: [{ type: Input, args: ['groupName',] }],
    attrHasThreeStates: [{ type: Input, args: ['hasThreeStates',] }],
    attrLocked: [{ type: Input, args: ['locked',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChecked: [{ type: Output }],
    onChange: [{ type: Output }],
    onIndeterminate: [{ type: Output }],
    onUnchecked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrAnimationShowDelay;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrAnimationHideDelay;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrBoxSize;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrChecked;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrEnableContainerClick;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrGroupName;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrHasThreeStates;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrLocked;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrRtl;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrTheme;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrWidth;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.attrHeight;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.autoCreate;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.properties;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.host;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.elementRef;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxCheckBoxComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxCheckBoxComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.onChecked;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.onChange;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.onIndeterminate;
    /** @type {?} */
    jqxCheckBoxComponent.prototype.onUnchecked;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
