import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';
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
    () => jqxDateTimeInputComponent)),
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
     * @return {?}
     */
    getRange() {
        return this.host.jqxDateTimeInput('getRange');
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
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); }));
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
        this.host.on('textchanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onTextchanged.emit(eventData); }));
        this.host.on('valueChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onValueChanged.emit(eventData); this.onChangeCallback(this.host.val()); }));
        this.host.on('keyup', (/**
         * @return {?}
         */
        () => { this.onChangeCallback(this.host.val()); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkYXRldGltZWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGRhdGV0aW1laW5wdXQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGRhdGV0aW1laW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUE0Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRW5FLElBQUk7OztBQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTs7O01BR2hCLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFTRCxNQUFNLE9BQU8seUJBQXlCOzs7O0lBOENuQyxZQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMscUJBQXFCLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsNkJBQTZCLEVBQUMsMkJBQTJCLEVBQUMsVUFBVSxFQUFDLDhCQUE4QixFQUFDLHlCQUF5QixFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsZ0JBQWdCLEVBQUMsb0JBQW9CLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFB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TTs7OztJQW5nQlAsc0RBQWtEOztJQUNsRCxzREFBbUQ7O0lBQ25ELDREQUErRDs7SUFDL0Qsb0RBQThDOztJQUM5QyxnREFBc0M7O0lBQ3RDLG1EQUE0Qzs7SUFDNUMsb0VBQStFOztJQUMvRSxvRUFBOEU7O0lBQzlFLGtFQUEwRTs7SUFDMUUsaURBQXlDOztJQUN6QyxxRUFBaUY7O0lBQ2pGLGdFQUF1RTs7SUFDdkUsdURBQW9EOztJQUNwRCxxREFBZ0Q7O0lBQ2hELDRDQUE0Qjs7SUFDNUIsNENBQTRCOztJQUM1QixrREFBMEM7O0lBQzFDLG9EQUE4Qzs7SUFDOUMsb0RBQThDOztJQUM5Qyw0Q0FBK0I7O0lBQy9CLGlEQUF5Qzs7SUFDekMsbURBQTZDOztJQUM3QyxzREFBa0Q7O0lBQ2xELHdEQUF1RDs7SUFDdkQsdURBQXFEOztJQUNyRCwyREFBNkQ7O0lBQzdELDhDQUFrQzs7SUFDbEMsaURBQXdDOztJQUN4QyxrREFBMEM7O0lBQzFDLG9EQUE4Qzs7SUFDOUMsOENBQXVDOztJQUN2Qyw4Q0FBMkM7O0lBQzNDLCtDQUE2Qzs7SUFFN0MsK0NBQWlEOztJQUVqRCwrQ0FBZ2hCOztJQUNoaEIseUNBQVU7O0lBQ1YsK0NBQXVCOztJQUN2QixpREFBMEM7Ozs7O0lBRTFDLHNEQUE2Qzs7Ozs7SUFDN0MscURBQWtEOztJQXFkbEQsNkNBQXdDOztJQUN4Qyw0Q0FBdUM7O0lBQ3ZDLDJDQUFzQzs7SUFDdEMsa0RBQTZDOztJQUM3QyxtREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBqcXhEYXRlVGltZUlucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeERhdGVUaW1lSW5wdXQnLFxuICAgIHRlbXBsYXRlOiAnPGlucHV0IFsobmdNb2RlbCldPVwibmdWYWx1ZVwiPicsXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MganF4RGF0ZVRpbWVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMgXG57XG4gICBASW5wdXQoJ2FuaW1hdGlvblR5cGUnKSBhdHRyQW5pbWF0aW9uVHlwZTogc3RyaW5nO1xuICAgQElucHV0KCdhbGxvd051bGxEYXRlJykgYXR0ckFsbG93TnVsbERhdGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2FsbG93S2V5Ym9hcmREZWxldGUnKSBhdHRyQWxsb3dLZXlib2FyZERlbGV0ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2xlYXJTdHJpbmcnKSBhdHRyQ2xlYXJTdHJpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgnY3VsdHVyZScpIGF0dHJDdWx0dXJlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Nsb3NlRGVsYXknKSBhdHRyQ2xvc2VEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCdjbG9zZUNhbGVuZGFyQWZ0ZXJTZWxlY3Rpb24nKSBhdHRyQ2xvc2VDYWxlbmRhckFmdGVyU2VsZWN0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQnKSBhdHRyRHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50OiBzdHJpbmc7XG4gICBASW5wdXQoJ2Ryb3BEb3duVmVydGljYWxBbGlnbm1lbnQnKSBhdHRyRHJvcERvd25WZXJ0aWNhbEFsaWdubWVudDogc3RyaW5nO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicpIGF0dHJFbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVBYnNvbHV0ZVNlbGVjdGlvbicpIGF0dHJFbmFibGVBYnNvbHV0ZVNlbGVjdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZmlyc3REYXlPZldlZWsnKSBhdHRyRmlyc3REYXlPZldlZWs6IG51bWJlcjtcbiAgIEBJbnB1dCgnZm9ybWF0U3RyaW5nJykgYXR0ckZvcm1hdFN0cmluZzogc3RyaW5nO1xuICAgQElucHV0KCdtaW4nKSBhdHRyTWluOiBEYXRlO1xuICAgQElucHV0KCdtYXgnKSBhdHRyTWF4OiBEYXRlO1xuICAgQElucHV0KCdvcGVuRGVsYXknKSBhdHRyT3BlbkRlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ3BsYWNlSG9sZGVyJykgYXR0clBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BvcHVwWkluZGV4JykgYXR0clBvcHVwWkluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3JlYWRvbmx5JykgYXR0clJlYWRvbmx5OiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Rm9vdGVyJykgYXR0clNob3dGb290ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3NlbGVjdGlvbk1vZGUnKSBhdHRyU2VsZWN0aW9uTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdzaG93V2Vla051bWJlcnMnKSBhdHRyU2hvd1dlZWtOdW1iZXJzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93VGltZUJ1dHRvbicpIGF0dHJTaG93VGltZUJ1dHRvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0NhbGVuZGFyQnV0dG9uJykgYXR0clNob3dDYWxlbmRhckJ1dHRvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndGVtcGxhdGUnKSBhdHRyVGVtcGxhdGU6IHN0cmluZztcbiAgIEBJbnB1dCgndGV4dEFsaWduJykgYXR0clRleHRBbGlnbjogc3RyaW5nO1xuICAgQElucHV0KCd0b2RheVN0cmluZycpIGF0dHJUb2RheVN0cmluZzogc3RyaW5nO1xuICAgQElucHV0KCd2YWx1ZScpIGF0dHJWYWx1ZTogRGF0ZSB8IG51bGw7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uVHlwZScsJ2FsbG93TnVsbERhdGUnLCdhbGxvd0tleWJvYXJkRGVsZXRlJywnY2xlYXJTdHJpbmcnLCdjdWx0dXJlJywnY2xvc2VEZWxheScsJ2Nsb3NlQ2FsZW5kYXJBZnRlclNlbGVjdGlvbicsJ2Ryb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudCcsJ2Ryb3BEb3duVmVydGljYWxBbGlnbm1lbnQnLCdkaXNhYmxlZCcsJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nLCdlbmFibGVBYnNvbHV0ZVNlbGVjdGlvbicsJ2ZpcnN0RGF5T2ZXZWVrJywnZm9ybWF0U3RyaW5nJywnaGVpZ2h0JywnbWluJywnbWF4Jywnb3BlbkRlbGF5JywncGxhY2VIb2xkZXInLCdwb3B1cFpJbmRleCcsJ3J0bCcsJ3JlYWRvbmx5Jywnc2hvd0Zvb3RlcicsJ3NlbGVjdGlvbk1vZGUnLCdzaG93V2Vla051bWJlcnMnLCdzaG93VGltZUJ1dHRvbicsJ3Nob3dDYWxlbmRhckJ1dHRvbicsJ3RoZW1lJywndGVtcGxhdGUnLCd0ZXh0QWxpZ24nLCd0b2RheVN0cmluZycsJ3ZhbHVlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4RGF0ZVRpbWVJbnB1dDtcblxuICAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuICAgfTsgXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgbGV0IGFyZUVxdWFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbYXR0ck5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgIGFyZUVxdWFsID0gdGhpcy5hcnJheXNFcXVhbCh0aGlzW2F0dHJOYW1lXSwgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4RGF0ZVRpbWVJbnB1dCcsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5ob3N0ID0gdGhpcy53aWRnZXRPYmplY3RbJ2hvc3QnXTtcbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgZ2V0IG5nVmFsdWUoKTogYW55IHtcbiAgICAgICBpZiAodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmhvc3QudmFsKCk7XG4gICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICB9XG4gICAgICAgcmV0dXJuICcnO1xuICAgfVxuXG4gICBzZXQgbmdWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgaWYgKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgfVxuICAgfVxuXG4gICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICBpZih0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgndmFsJywgdmFsdWUpO1xuICAgICAgIH1cbiAgIH1cblxuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4RGF0ZVRpbWVJbnB1dENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbmltYXRpb25UeXBlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnYW5pbWF0aW9uVHlwZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnYW5pbWF0aW9uVHlwZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBhbGxvd051bGxEYXRlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdhbGxvd051bGxEYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdhbGxvd051bGxEYXRlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsbG93S2V5Ym9hcmREZWxldGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2FsbG93S2V5Ym9hcmREZWxldGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2FsbG93S2V5Ym9hcmREZWxldGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xlYXJTdHJpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdjbGVhclN0cmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnY2xlYXJTdHJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY3VsdHVyZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2N1bHR1cmUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2N1bHR1cmUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xvc2VEZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Nsb3NlRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Nsb3NlRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xvc2VDYWxlbmRhckFmdGVyU2VsZWN0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdjbG9zZUNhbGVuZGFyQWZ0ZXJTZWxlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Nsb3NlQ2FsZW5kYXJBZnRlclNlbGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdkcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Ryb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZHJvcERvd25WZXJ0aWNhbEFsaWdubWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZHJvcERvd25WZXJ0aWNhbEFsaWdubWVudCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2VuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlQWJzb2x1dGVTZWxlY3Rpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2VuYWJsZUFic29sdXRlU2VsZWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdlbmFibGVBYnNvbHV0ZVNlbGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaXJzdERheU9mV2Vlayhhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2ZpcnN0RGF5T2ZXZWVrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdmaXJzdERheU9mV2VlaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3JtYXRTdHJpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdmb3JtYXRTdHJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Zvcm1hdFN0cmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogRGF0ZSk6IERhdGUge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ21pbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBEYXRlKTogRGF0ZSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnbWF4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdtYXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb3BlbkRlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnb3BlbkRlbGF5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdvcGVuRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGxhY2VIb2xkZXIoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdwbGFjZUhvbGRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgncGxhY2VIb2xkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcG9wdXBaSW5kZXgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdwb3B1cFpJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgncG9wdXBaSW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZWFkb25seShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgncmVhZG9ubHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3JlYWRvbmx5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dGb290ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3Nob3dGb290ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3Nob3dGb290ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0aW9uTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3NlbGVjdGlvbk1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3NlbGVjdGlvbk1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1dlZWtOdW1iZXJzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdzaG93V2Vla051bWJlcnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3Nob3dXZWVrTnVtYmVycycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93VGltZUJ1dHRvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2hvd1RpbWVCdXR0b24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3Nob3dUaW1lQnV0dG9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dDYWxlbmRhckJ1dHRvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2hvd0NhbGVuZGFyQnV0dG9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdzaG93Q2FsZW5kYXJCdXR0b24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGVtcGxhdGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd0ZW1wbGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgndGVtcGxhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGV4dEFsaWduKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgndGV4dEFsaWduJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd0ZXh0QWxpZ24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9kYXlTdHJpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd0b2RheVN0cmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgndG9kYXlTdHJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWUoYXJnPzogRGF0ZSk6IERhdGUge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3ZhbHVlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd2YWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeERhdGVUaW1lSW5wdXRDb21wb25lbnQgZnVuY3Rpb25zXG4gICBjbG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdjbG9zZScpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0UmFuZ2UoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZ2V0UmFuZ2UnKTtcbiAgIH1cblxuICAgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdnZXRUZXh0Jyk7XG4gICB9XG5cbiAgIGdldERhdGUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZ2V0RGF0ZScpO1xuICAgfVxuXG4gICBnZXRNYXhEYXRlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2dldE1heERhdGUnKTtcbiAgIH1cblxuICAgZ2V0TWluRGF0ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdnZXRNaW5EYXRlJyk7XG4gICB9XG5cbiAgIG9wZW4oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnb3BlbicpO1xuICAgfVxuXG4gICBzZXRSYW5nZShkYXRlOiBhbnksIGRhdGUyOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdzZXRSYW5nZScsIGRhdGUsIGRhdGUyKTtcbiAgIH1cblxuICAgc2V0TWluRGF0ZShkYXRlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdzZXRNaW5EYXRlJywgZGF0ZSk7XG4gICB9XG5cbiAgIHNldE1heERhdGUoZGF0ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2V0TWF4RGF0ZScsIGRhdGUpO1xuICAgfVxuXG4gICBzZXREYXRlKGRhdGU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3NldERhdGUnLCBkYXRlKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogYW55LCB2YWx1ZTI/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgndmFsJywgdmFsdWUsIHZhbHVlMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4RGF0ZVRpbWVJbnB1dENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblRleHRjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5ob3N0LnZhbCgpKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2Nsb3NlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DbG9zZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdvcGVuJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25PcGVuLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3RleHRjaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25UZXh0Y2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd2YWx1ZUNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblZhbHVlQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmhvc3QudmFsKCkpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigna2V5dXAnLCAoKSA9PiB7IHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmhvc3QudmFsKCkpOyB9KTtcbiAgIH1cblxufSAvL2pxeERhdGVUaW1lSW5wdXRDb21wb25lbnRcbiJdfQ==