import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxformattedinput from '../../jqwidgets-scripts/jqwidgets/jqxformattedinput';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
const noop = (/**
 * @return {?}
 */
() => { });
const ɵ0 = noop;
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => jqxFormattedInputComponent)),
    multi: true
};
export class jqxFormattedInputComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'decimalNotation', 'dropDown', 'dropDownWidth', 'height', 'min', 'max', 'placeHolder', 'popupZIndex', 'roundedCorners', 'rtl', 'radix', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'upperCase', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxFormattedInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onRadixChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxFormattedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxFormattedInput(this.properties[i])) {
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
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
        if (this.attrRtl !== true) {
            if (this.attrSpinButtons === false) {
                this.host.children()[1].remove();
            }
            if (this.attrDropDown !== true) {
                this.host.children()[1].remove();
            }
        }
        else if (this.attrRtl === true) {
            this.host.children()[1].remove();
            this.host.children()[1].remove();
            if (this.attrSpinButtons !== false) {
                this.host.prepend('<div></div>');
            }
            if (this.attrDropDown === true) {
                this.host.prepend('<div></div>');
            }
        }
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFormattedInput', options);
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
     * @return {?}
     */
    get ngValue() {
        if (this.widgetObject) {
            /** @type {?} */
            const value = this.host.val();
            return value;
        }
        return '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.widgetObject) {
            this.host.jqxFormattedInput('val', value);
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
        this.host.jqxFormattedInput('setOptions', options);
    }
    // jqxFormattedInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('disabled', arg);
        }
        else {
            return this.host.jqxFormattedInput('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    decimalNotation(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxFormattedInput('decimalNotation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDown(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDown', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDown');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDownWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('height', arg);
        }
        else {
            return this.host.jqxFormattedInput('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('min', arg);
        }
        else {
            return this.host.jqxFormattedInput('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('max', arg);
        }
        else {
            return this.host.jqxFormattedInput('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('placeHolder', arg);
        }
        else {
            return this.host.jqxFormattedInput('placeHolder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxFormattedInput('popupZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxFormattedInput('roundedCorners');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('rtl', arg);
        }
        else {
            return this.host.jqxFormattedInput('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    radix(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('radix', arg);
        }
        else {
            return this.host.jqxFormattedInput('radix');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    spinButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtons', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtons');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtonsStep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('template', arg);
        }
        else {
            return this.host.jqxFormattedInput('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('theme', arg);
        }
        else {
            return this.host.jqxFormattedInput('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    upperCase(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('upperCase', arg);
        }
        else {
            return this.host.jqxFormattedInput('upperCase');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('value', arg);
        }
        else {
            return this.host.jqxFormattedInput('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('width', arg);
        }
        else {
            return this.host.jqxFormattedInput('width');
        }
    }
    // jqxFormattedInputComponent functions
    /**
     * @return {?}
     */
    close() {
        this.host.jqxFormattedInput('close');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxFormattedInput('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxFormattedInput('focus');
    }
    /**
     * @return {?}
     */
    open() {
        this.host.jqxFormattedInput('open');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxFormattedInput('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxFormattedInput('refresh');
    }
    /**
     * @return {?}
     */
    selectAll() {
        this.host.jqxFormattedInput('selectAll');
    }
    /**
     * @return {?}
     */
    selectFirst() {
        this.host.jqxFormattedInput('selectFirst');
    }
    /**
     * @return {?}
     */
    selectLast() {
        this.host.jqxFormattedInput('selectLast');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxFormattedInput('val', value);
        }
        else {
            return this.host.jqxFormattedInput('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); }));
        this.host.on('close', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onClose.emit(eventData); }));
        this.host.on('open', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onOpen.emit(eventData); }));
        this.host.on('radixChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRadixChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); }));
    }
} //jqxFormattedInputComponent
jqxFormattedInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxFormattedInput',
                template: '<div><input type="text" [(ngModel)]="ngValue"><div></div><div></div></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxFormattedInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxFormattedInputComponent.propDecorators = {
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDecimalNotation: [{ type: Input, args: ['decimalNotation',] }],
    attrDropDown: [{ type: Input, args: ['dropDown',] }],
    attrDropDownWidth: [{ type: Input, args: ['dropDownWidth',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
    attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
    attrRoundedCorners: [{ type: Input, args: ['roundedCorners',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrRadix: [{ type: Input, args: ['radix',] }],
    attrSpinButtons: [{ type: Input, args: ['spinButtons',] }],
    attrSpinButtonsStep: [{ type: Input, args: ['spinButtonsStep',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrUpperCase: [{ type: Input, args: ['upperCase',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    onOpen: [{ type: Output }],
    onRadixChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrDecimalNotation;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrDropDown;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrDropDownWidth;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrMin;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrMax;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrRoundedCorners;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrRadix;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrSpinButtons;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrSpinButtonsStep;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrUpperCase;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.properties;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.host;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxFormattedInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxFormattedInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.onChange;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.onClose;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.onOpen;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.onRadixChange;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhmb3JtYXR0ZWRpbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhmb3JtYXR0ZWRpbnB1dC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Zm9ybWF0dGVkaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUE0Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRW5FLElBQUk7OztBQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTs7O01BR2hCLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLDBCQUEwQixFQUFDO0lBQ3pELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFTRCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBZ0NwQyxZQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBS3hPLHNCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxxQkFBZ0IsR0FBcUIsSUFBSSxDQUFDOztRQXFXeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsWUFB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LFNBQUMsT0FBTzt3QkFDYixLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsUUFBUTt5QkFFZCxLQUFLLFNBQUMsYUFBYTt1QkE2V25CLE1BQU07c0JBQ04sTUFBTTtxQkFDTixNQUFNOzRCQUNOLE1BQU07Ozs7SUFwWVAsa0RBQXlDOztJQUN6Qyx5REFBc0Q7O0lBQ3RELGtEQUF5Qzs7SUFDekMsdURBQTJEOztJQUMzRCw2Q0FBdUM7O0lBQ3ZDLDZDQUF1Qzs7SUFDdkMscURBQThDOztJQUM5QyxxREFBOEM7O0lBQzlDLHdEQUFxRDs7SUFDckQsNkNBQStCOztJQUMvQiwrQ0FBMkM7O0lBQzNDLHFEQUErQzs7SUFDL0MseURBQXNEOztJQUN0RCxrREFBd0M7O0lBQ3hDLCtDQUFrQzs7SUFDbEMsbURBQTJDOztJQUMzQywrQ0FBMkM7O0lBQzNDLCtDQUEyQzs7SUFDM0MsZ0RBQTZDOztJQUU3QyxnREFBaUQ7O0lBRWpELGdEQUFnUDs7SUFDaFAsMENBQVU7O0lBQ1YsZ0RBQXVCOztJQUN2QixrREFBMkM7Ozs7O0lBRTNDLHVEQUE2Qzs7Ozs7SUFDN0Msc0RBQWtEOztJQXFXbEQsOENBQXdDOztJQUN4Qyw2Q0FBdUM7O0lBQ3ZDLDRDQUFzQzs7SUFDdEMsbURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4ganF4Rm9ybWF0dGVkSW5wdXRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4Rm9ybWF0dGVkSW5wdXQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5nVmFsdWVcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+JyxcbiAgICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhGb3JtYXR0ZWRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMgXG57XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdkZWNpbWFsTm90YXRpb24nKSBhdHRyRGVjaW1hbE5vdGF0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Ryb3BEb3duJykgYXR0ckRyb3BEb3duOiBib29sZWFuO1xuICAgQElucHV0KCdkcm9wRG93bldpZHRoJykgYXR0ckRyb3BEb3duV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdtYXgnKSBhdHRyTWF4OiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3BsYWNlSG9sZGVyJykgYXR0clBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BvcHVwWkluZGV4JykgYXR0clBvcHVwWkluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3JvdW5kZWRDb3JuZXJzJykgYXR0clJvdW5kZWRDb3JuZXJzOiBib29sZWFuO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdyYWRpeCcpIGF0dHJSYWRpeDogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCdzcGluQnV0dG9ucycpIGF0dHJTcGluQnV0dG9uczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc3BpbkJ1dHRvbnNTdGVwJykgYXR0clNwaW5CdXR0b25zU3RlcDogbnVtYmVyO1xuICAgQElucHV0KCd0ZW1wbGF0ZScpIGF0dHJUZW1wbGF0ZTogc3RyaW5nO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd1cHBlckNhc2UnKSBhdHRyVXBwZXJDYXNlOiBib29sZWFuO1xuICAgQElucHV0KCd2YWx1ZScpIGF0dHJWYWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2Rpc2FibGVkJywnZGVjaW1hbE5vdGF0aW9uJywnZHJvcERvd24nLCdkcm9wRG93bldpZHRoJywnaGVpZ2h0JywnbWluJywnbWF4JywncGxhY2VIb2xkZXInLCdwb3B1cFpJbmRleCcsJ3JvdW5kZWRDb3JuZXJzJywncnRsJywncmFkaXgnLCdzcGluQnV0dG9ucycsJ3NwaW5CdXR0b25zU3RlcCcsJ3RlbXBsYXRlJywndGhlbWUnLCd1cHBlckNhc2UnLCd2YWx1ZScsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeEZvcm1hdHRlZElucHV0O1xuXG4gICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgaWYgKHRoaXMuYXR0clJ0bCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmF0dHJTcGluQnV0dG9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5ob3N0LmNoaWxkcmVuKClbMV0ucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmF0dHJEcm9wRG93biAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLmhvc3QuY2hpbGRyZW4oKVsxXS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0clJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuaG9zdC5jaGlsZHJlbigpWzFdLnJlbW92ZSgpO1xuICAgICAgICAgIHRoaXMuaG9zdC5jaGlsZHJlbigpWzFdLnJlbW92ZSgpO1xuICAgICAgICAgIGlmICh0aGlzLmF0dHJTcGluQnV0dG9ucyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5ob3N0LnByZXBlbmQoJzxkaXY+PC9kaXY+Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmF0dHJEcm9wRG93biA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB0aGlzLmhvc3QucHJlcGVuZCgnPGRpdj48L2Rpdj4nKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhGb3JtYXR0ZWRJbnB1dCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBnZXQgbmdWYWx1ZSgpOiBhbnkge1xuICAgICAgIGlmICh0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaG9zdC52YWwoKTtcbiAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gJyc7XG4gICB9XG5cbiAgIHNldCBuZ1ZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICBpZiAodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICB9XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgIGlmKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgndmFsJywgdmFsdWUpO1xuICAgICAgIH1cbiAgIH1cblxuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdzZXRPcHRpb25zJywgb3B0aW9ucyk7XG4gICB9XG5cbiAgIC8vIGpxeEZvcm1hdHRlZElucHV0Q29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkZWNpbWFsTm90YXRpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnZGVjaW1hbE5vdGF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnZGVjaW1hbE5vdGF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnZHJvcERvd24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdkcm9wRG93bicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcm9wRG93bldpZHRoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ2Ryb3BEb3duV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdkcm9wRG93bldpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ21pbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ21pbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnbWF4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnbWF4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBsYWNlSG9sZGVyKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3BsYWNlSG9sZGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncGxhY2VIb2xkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9wdXBaSW5kZXgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncG9wdXBaSW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdwb3B1cFpJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3VuZGVkQ29ybmVycyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3JvdW5kZWRDb3JuZXJzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncm91bmRlZENvcm5lcnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJhZGl4KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3JhZGl4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncmFkaXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3BpbkJ1dHRvbnMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdzcGluQnV0dG9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3NwaW5CdXR0b25zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNwaW5CdXR0b25zU3RlcChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdzcGluQnV0dG9uc1N0ZXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdzcGluQnV0dG9uc1N0ZXAnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGVtcGxhdGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgndGVtcGxhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCd0ZW1wbGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHVwcGVyQ2FzZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3VwcGVyQ2FzZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3VwcGVyQ2FzZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZShhcmc/OiB1bmRlZmluZWQpOiB1bmRlZmluZWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCd2YWx1ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhGb3JtYXR0ZWRJbnB1dENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdjbG9zZScpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdmb2N1cycpO1xuICAgfVxuXG4gICBvcGVuKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdvcGVuJyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgncmVuZGVyJyk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgc2VsZWN0QWxsKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCdzZWxlY3RBbGwnKTtcbiAgIH1cblxuICAgc2VsZWN0Rmlyc3QoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3NlbGVjdEZpcnN0Jyk7XG4gICB9XG5cbiAgIHNlbGVjdExhc3QoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Rm9ybWF0dGVkSW5wdXQoJ3NlbGVjdExhc3QnKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZvcm1hdHRlZElucHV0KCd2YWwnLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGb3JtYXR0ZWRJbnB1dCgndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeEZvcm1hdHRlZElucHV0Q29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmFkaXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IGlmIChldmVudERhdGEuYXJncykgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGV2ZW50RGF0YS5hcmdzLnZhbHVlKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdvcGVuJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25PcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3JhZGl4Q2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SYWRpeENoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IGlmIChldmVudERhdGEuYXJncykgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKGV2ZW50RGF0YS5hcmdzLnZhbHVlKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhGb3JtYXR0ZWRJbnB1dENvbXBvbmVudFxuIl19