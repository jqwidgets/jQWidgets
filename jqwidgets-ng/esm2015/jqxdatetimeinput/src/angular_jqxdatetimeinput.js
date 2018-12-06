import * as jqxcore from '../../jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
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
    useExisting: forwardRef(() => jqxDateTimeInputComponent),
    multi: true
};
export class jqxDateTimeInputComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'allowNullDate', 'allowKeyboardDelete', 'clearString', 'culture', 'closeDelay', 'closeCalendarAfterSelection', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'disabled', 'enableBrowserBoundsDetection', 'enableAbsoluteSelection', 'firstDayOfWeek', 'formatString', 'height', 'min', 'max', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'readonly', 'showFooter', 'selectionMode', 'showWeekNumbers', 'showTimeButton', 'showCalendarButton', 'theme', 'template', 'textAlign', 'todayString', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxDateTimeInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDateTimeInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDateTimeInput(this.properties[i])) {
                        this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDateTimeInput', options);
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
            this.host.jqxDateTimeInput('val', value);
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
        this.host.jqxDateTimeInput('setOptions', options);
    }
    // jqxDateTimeInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('animationType', arg);
        }
        else {
            return this.host.jqxDateTimeInput('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowNullDate(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowNullDate', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowNullDate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    allowKeyboardDelete(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowKeyboardDelete', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowKeyboardDelete');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    clearString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('clearString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('clearString');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    culture(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('culture', arg);
        }
        else {
            return this.host.jqxDateTimeInput('culture');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    closeCalendarAfterSelection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeCalendarAfterSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeCalendarAfterSelection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownHorizontalAlignment');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownVerticalAlignment');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('disabled', arg);
        }
        else {
            return this.host.jqxDateTimeInput('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableBrowserBoundsDetection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableAbsoluteSelection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableAbsoluteSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableAbsoluteSelection');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    firstDayOfWeek(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxDateTimeInput('firstDayOfWeek');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    formatString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('formatString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('formatString');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('height', arg);
        }
        else {
            return this.host.jqxDateTimeInput('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('min', arg);
        }
        else {
            return this.host.jqxDateTimeInput('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('max', arg);
        }
        else {
            return this.host.jqxDateTimeInput('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    openDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('openDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('openDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('placeHolder', arg);
        }
        else {
            return this.host.jqxDateTimeInput('placeHolder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxDateTimeInput('popupZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('rtl', arg);
        }
        else {
            return this.host.jqxDateTimeInput('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    readonly(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('readonly', arg);
        }
        else {
            return this.host.jqxDateTimeInput('readonly');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showFooter(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showFooter', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showFooter');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectionMode(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('selectionMode', arg);
        }
        else {
            return this.host.jqxDateTimeInput('selectionMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showWeekNumbers(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showWeekNumbers');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showTimeButton(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showTimeButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showTimeButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showCalendarButton(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showCalendarButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showCalendarButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('theme', arg);
        }
        else {
            return this.host.jqxDateTimeInput('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('template', arg);
        }
        else {
            return this.host.jqxDateTimeInput('template');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    textAlign(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('textAlign', arg);
        }
        else {
            return this.host.jqxDateTimeInput('textAlign');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    todayString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('todayString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('todayString');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('value', arg);
        }
        else {
            return this.host.jqxDateTimeInput('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('width', arg);
        }
        else {
            return this.host.jqxDateTimeInput('width');
        }
    }
    // jqxDateTimeInputComponent functions
    /**
     * @return {?}
     */
    close() {
        this.host.jqxDateTimeInput('close');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxDateTimeInput('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxDateTimeInput('focus');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getRange(date) {
        return this.host.jqxDateTimeInput('getRange', date);
    }
    /**
     * @return {?}
     */
    getText() {
        return this.host.jqxDateTimeInput('getText');
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.host.jqxDateTimeInput('getDate');
    }
    /**
     * @return {?}
     */
    getMaxDate() {
        return this.host.jqxDateTimeInput('getMaxDate');
    }
    /**
     * @return {?}
     */
    getMinDate() {
        return this.host.jqxDateTimeInput('getMinDate');
    }
    /**
     * @return {?}
     */
    open() {
        this.host.jqxDateTimeInput('open');
    }
    /**
     * @param {?} date
     * @param {?} date2
     * @return {?}
     */
    setRange(date, date2) {
        this.host.jqxDateTimeInput('setRange', date, date2);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setMinDate(date) {
        this.host.jqxDateTimeInput('setMinDate', date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setMaxDate(date) {
        this.host.jqxDateTimeInput('setMaxDate', date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setDate(date) {
        this.host.jqxDateTimeInput('setDate', date);
    }
    /**
     * @param {?=} value
     * @param {?=} value2
     * @return {?}
     */
    val(value, value2) {
        if (value !== undefined) {
            return this.host.jqxDateTimeInput('val', value, value2);
        }
        else {
            return this.host.jqxDateTimeInput('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('textchanged', (eventData) => { this.onTextchanged.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('keyup', () => { this.onChangeCallback(this.host.val()); });
    }
} //jqxDateTimeInputComponent
jqxDateTimeInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDateTimeInput',
                template: '<input [(ngModel)]="ngValue">',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxDateTimeInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDateTimeInputComponent.propDecorators = {
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrAllowNullDate: [{ type: Input, args: ['allowNullDate',] }],
    attrAllowKeyboardDelete: [{ type: Input, args: ['allowKeyboardDelete',] }],
    attrClearString: [{ type: Input, args: ['clearString',] }],
    attrCulture: [{ type: Input, args: ['culture',] }],
    attrCloseDelay: [{ type: Input, args: ['closeDelay',] }],
    attrCloseCalendarAfterSelection: [{ type: Input, args: ['closeCalendarAfterSelection',] }],
    attrDropDownHorizontalAlignment: [{ type: Input, args: ['dropDownHorizontalAlignment',] }],
    attrDropDownVerticalAlignment: [{ type: Input, args: ['dropDownVerticalAlignment',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableBrowserBoundsDetection: [{ type: Input, args: ['enableBrowserBoundsDetection',] }],
    attrEnableAbsoluteSelection: [{ type: Input, args: ['enableAbsoluteSelection',] }],
    attrFirstDayOfWeek: [{ type: Input, args: ['firstDayOfWeek',] }],
    attrFormatString: [{ type: Input, args: ['formatString',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrOpenDelay: [{ type: Input, args: ['openDelay',] }],
    attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
    attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrReadonly: [{ type: Input, args: ['readonly',] }],
    attrShowFooter: [{ type: Input, args: ['showFooter',] }],
    attrSelectionMode: [{ type: Input, args: ['selectionMode',] }],
    attrShowWeekNumbers: [{ type: Input, args: ['showWeekNumbers',] }],
    attrShowTimeButton: [{ type: Input, args: ['showTimeButton',] }],
    attrShowCalendarButton: [{ type: Input, args: ['showCalendarButton',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrTemplate: [{ type: Input, args: ['template',] }],
    attrTextAlign: [{ type: Input, args: ['textAlign',] }],
    attrTodayString: [{ type: Input, args: ['todayString',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    onOpen: [{ type: Output }],
    onTextchanged: [{ type: Output }],
    onValueChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrAllowNullDate;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrAllowKeyboardDelete;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrClearString;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrCulture;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrCloseDelay;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrCloseCalendarAfterSelection;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrDropDownHorizontalAlignment;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrDropDownVerticalAlignment;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrEnableBrowserBoundsDetection;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrEnableAbsoluteSelection;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrFirstDayOfWeek;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrFormatString;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrMin;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrMax;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrOpenDelay;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrReadonly;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrShowFooter;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrSelectionMode;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrShowWeekNumbers;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrShowTimeButton;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrShowCalendarButton;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrTextAlign;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrTodayString;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.properties;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.host;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxDateTimeInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxDateTimeInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.onChange;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.onClose;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.onOpen;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.onTextchanged;
    /** @type {?} */
    jqxDateTimeInputComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
