import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxnumberinput from '../../jqwidgets/jqxnumberinput';
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
    useExisting: forwardRef(() => jqxNumberInputComponent),
    multi: true
};
export class jqxNumberInputComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxNumberInputComponent events
        this.onChange = new EventEmitter();
        this.onTextchanged = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
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
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.widgetObject) {
            this.host.jqxNumberInput('val', value);
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
        this.host.jqxNumberInput('setOptions', options);
    }
    // jqxNumberInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowNull(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('allowNull', arg);
        }
        else {
            return this.host.jqxNumberInput('allowNull');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    decimal(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimal', arg);
        }
        else {
            return this.host.jqxNumberInput('decimal');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('disabled', arg);
        }
        else {
            return this.host.jqxNumberInput('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    decimalDigits(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalDigits', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalDigits');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    decimalSeparator(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalSeparator');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    digits(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('digits', arg);
        }
        else {
            return this.host.jqxNumberInput('digits');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupSeparator(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSeparator');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupSize(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSize', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSize');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('height', arg);
        }
        else {
            return this.host.jqxNumberInput('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    inputMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('inputMode', arg);
        }
        else {
            return this.host.jqxNumberInput('inputMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('min', arg);
        }
        else {
            return this.host.jqxNumberInput('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('max', arg);
        }
        else {
            return this.host.jqxNumberInput('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    negativeSymbol(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('negativeSymbol', arg);
        }
        else {
            return this.host.jqxNumberInput('negativeSymbol');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('placeHolder', arg);
        }
        else {
            return this.host.jqxNumberInput('placeHolder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    promptChar(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('promptChar', arg);
        }
        else {
            return this.host.jqxNumberInput('promptChar');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('rtl', arg);
        }
        else {
            return this.host.jqxNumberInput('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('readOnly', arg);
        }
        else {
            return this.host.jqxNumberInput('readOnly');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    spinMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinMode', arg);
        }
        else {
            return this.host.jqxNumberInput('spinMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    spinButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtons', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtons');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    spinButtonsWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsWidth', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsStep');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    symbol(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbol', arg);
        }
        else {
            return this.host.jqxNumberInput('symbol');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    symbolPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbolPosition', arg);
        }
        else {
            return this.host.jqxNumberInput('symbolPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    textAlign(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('textAlign', arg);
        }
        else {
            return this.host.jqxNumberInput('textAlign');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('template', arg);
        }
        else {
            return this.host.jqxNumberInput('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('theme', arg);
        }
        else {
            return this.host.jqxNumberInput('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('value', arg);
        }
        else {
            return this.host.jqxNumberInput('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('width', arg);
        }
        else {
            return this.host.jqxNumberInput('width');
        }
    }
    // jqxNumberInputComponent functions
    /**
     * @return {?}
     */
    clear() {
        this.host.jqxNumberInput('clear');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxNumberInput('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxNumberInput('focus');
    }
    /**
     * @return {?}
     */
    getDecimal() {
        return this.host.jqxNumberInput('getDecimal');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setDecimal(index) {
        this.host.jqxNumberInput('setDecimal', index);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxNumberInput('val', value);
        }
        else {
            return this.host.jqxNumberInput('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
        this.host.on('textchanged', (eventData) => { this.onTextchanged.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
    }
} //jqxNumberInputComponent
jqxNumberInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxNumberInput',
                template: '<input>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxNumberInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxNumberInputComponent.propDecorators = {
    attrAllowNull: [{ type: Input, args: ['allowNull',] }],
    attrDecimal: [{ type: Input, args: ['decimal',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDecimalDigits: [{ type: Input, args: ['decimalDigits',] }],
    attrDecimalSeparator: [{ type: Input, args: ['decimalSeparator',] }],
    attrDigits: [{ type: Input, args: ['digits',] }],
    attrGroupSeparator: [{ type: Input, args: ['groupSeparator',] }],
    attrGroupSize: [{ type: Input, args: ['groupSize',] }],
    attrInputMode: [{ type: Input, args: ['inputMode',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrNegativeSymbol: [{ type: Input, args: ['negativeSymbol',] }],
    attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
    attrPromptChar: [{ type: Input, args: ['promptChar',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrReadOnly: [{ type: Input, args: ['readOnly',] }],
    attrSpinMode: [{ type: Input, args: ['spinMode',] }],
    attrSpinButtons: [{ type: Input, args: ['spinButtons',] }],
    attrSpinButtonsWidth: [{ type: Input, args: ['spinButtonsWidth',] }],
    attrSpinButtonsStep: [{ type: Input, args: ['spinButtonsStep',] }],
    attrSymbol: [{ type: Input, args: ['symbol',] }],
    attrSymbolPosition: [{ type: Input, args: ['symbolPosition',] }],
    attrTextAlign: [{ type: Input, args: ['textAlign',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }],
    onTextchanged: [{ type: Output }],
    onValueChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrAllowNull;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDecimal;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDecimalDigits;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDecimalSeparator;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrDigits;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrGroupSeparator;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrGroupSize;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrInputMode;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrMin;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrMax;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrNegativeSymbol;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrPromptChar;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrReadOnly;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSpinMode;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSpinButtons;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSpinButtonsWidth;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSpinButtonsStep;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSymbol;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrSymbolPosition;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrTextAlign;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxNumberInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxNumberInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxNumberInputComponent.prototype.properties;
    /** @type {?} */
    jqxNumberInputComponent.prototype.host;
    /** @type {?} */
    jqxNumberInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxNumberInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxNumberInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxNumberInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxNumberInputComponent.prototype.onChange;
    /** @type {?} */
    jqxNumberInputComponent.prototype.onTextchanged;
    /** @type {?} */
    jqxNumberInputComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
