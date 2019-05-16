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
    () => jqxCalendarComponent)),
    multi: true
};
export class jqxCalendarComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['backText', 'columnHeaderHeight', 'clearString', 'culture', 'dayNameFormat', 'disabled', 'enableWeekend', 'enableViews', 'enableOtherMonthDays', 'enableFastNavigation', 'enableHover', 'enableAutoNavigation', 'enableTooltips', 'forwardText', 'firstDayOfWeek', 'height', 'min', 'max', 'navigationDelay', 'rowHeaderWidth', 'readOnly', 'restrictedDates', 'rtl', 'stepMonths', 'showWeekNumbers', 'showDayNames', 'showOtherMonthDays', 'showFooter', 'selectionMode', 'specialDates', 'theme', 'titleHeight', 'titleFormat', 'todayString', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxCalendarComponent events
        this.onBackButtonClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onNextButtonClick = new EventEmitter();
        this.onViewChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxCalendar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxCalendar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxCalendar(this.properties[i])) {
                        this.host.jqxCalendar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCalendar', options);
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
        this.host.jqxCalendar('setOptions', options);
    }
    // jqxCalendarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    backText(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('backText', arg);
        }
        else {
            return this.host.jqxCalendar('backText');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnHeaderHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('columnHeaderHeight', arg);
        }
        else {
            return this.host.jqxCalendar('columnHeaderHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    clearString(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('clearString', arg);
        }
        else {
            return this.host.jqxCalendar('clearString');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    culture(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('culture', arg);
        }
        else {
            return this.host.jqxCalendar('culture');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('dayNameFormat', arg);
        }
        else {
            return this.host.jqxCalendar('dayNameFormat');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('disabled', arg);
        }
        else {
            return this.host.jqxCalendar('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableWeekend(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableWeekend', arg);
        }
        else {
            return this.host.jqxCalendar('enableWeekend');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableViews(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableViews', arg);
        }
        else {
            return this.host.jqxCalendar('enableViews');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableOtherMonthDays(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('enableOtherMonthDays');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableFastNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableFastNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableFastNavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableHover', arg);
        }
        else {
            return this.host.jqxCalendar('enableHover');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableAutoNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableAutoNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableAutoNavigation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableTooltips(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableTooltips', arg);
        }
        else {
            return this.host.jqxCalendar('enableTooltips');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    forwardText(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('forwardText', arg);
        }
        else {
            return this.host.jqxCalendar('forwardText');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    firstDayOfWeek(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxCalendar('firstDayOfWeek');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('height', arg);
        }
        else {
            return this.host.jqxCalendar('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('min', arg);
        }
        else {
            return this.host.jqxCalendar('min');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('max', arg);
        }
        else {
            return this.host.jqxCalendar('max');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    navigationDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('navigationDelay', arg);
        }
        else {
            return this.host.jqxCalendar('navigationDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rowHeaderWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rowHeaderWidth', arg);
        }
        else {
            return this.host.jqxCalendar('rowHeaderWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('readOnly', arg);
        }
        else {
            return this.host.jqxCalendar('readOnly');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    restrictedDates(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('restrictedDates', arg);
        }
        else {
            return this.host.jqxCalendar('restrictedDates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rtl', arg);
        }
        else {
            return this.host.jqxCalendar('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    stepMonths(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('stepMonths', arg);
        }
        else {
            return this.host.jqxCalendar('stepMonths');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showWeekNumbers(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxCalendar('showWeekNumbers');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showDayNames(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showDayNames', arg);
        }
        else {
            return this.host.jqxCalendar('showDayNames');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showOtherMonthDays(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('showOtherMonthDays');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showFooter(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showFooter', arg);
        }
        else {
            return this.host.jqxCalendar('showFooter');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    selectionMode(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('selectionMode', arg);
        }
        else {
            return this.host.jqxCalendar('selectionMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    specialDates(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('specialDates', arg);
        }
        else {
            return this.host.jqxCalendar('specialDates');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('theme', arg);
        }
        else {
            return this.host.jqxCalendar('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    titleHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleHeight', arg);
        }
        else {
            return this.host.jqxCalendar('titleHeight');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    titleFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleFormat', arg);
        }
        else {
            return this.host.jqxCalendar('titleFormat');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    todayString(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('todayString', arg);
        }
        else {
            return this.host.jqxCalendar('todayString');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('value', arg);
        }
        else {
            return this.host.jqxCalendar('value');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('width', arg);
        }
        else {
            return this.host.jqxCalendar('width');
        }
    }
    // jqxCalendarComponent functions
    /**
     * @return {?}
     */
    clear() {
        this.host.jqxCalendar('clear');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxCalendar('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxCalendar('focus');
    }
    /**
     * @param {?} date
     * @param {?} specialDateClass
     * @param {?} text
     * @return {?}
     */
    addSpecialDate(date, specialDateClass, text) {
        this.host.jqxCalendar('addSpecialDate', date, specialDateClass, text);
    }
    /**
     * @return {?}
     */
    getMinDate() {
        return this.host.jqxCalendar('getMinDate');
    }
    /**
     * @return {?}
     */
    getMaxDate() {
        return this.host.jqxCalendar('getMaxDate');
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.host.jqxCalendar('getDate');
    }
    /**
     * @return {?}
     */
    getRange() {
        return this.host.jqxCalendar('getRange');
    }
    /**
     * @param {?} months
     * @return {?}
     */
    navigateForward(months) {
        this.host.jqxCalendar('navigateForward', months);
    }
    /**
     * @param {?} months
     * @return {?}
     */
    navigateBackward(months) {
        this.host.jqxCalendar('navigateBackward', months);
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxCalendar('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxCalendar('refresh');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setMinDate(date) {
        this.host.jqxCalendar('setMinDate', date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setMaxDate(date) {
        this.host.jqxCalendar('setMaxDate', date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    setDate(date) {
        this.host.jqxCalendar('setDate', date);
    }
    /**
     * @param {?} date
     * @param {?} date2
     * @return {?}
     */
    setRange(date, date2) {
        this.host.jqxCalendar('setRange', date, date2);
    }
    /**
     * @return {?}
     */
    today() {
        this.host.jqxCalendar('today');
    }
    /**
     * @param {?=} value
     * @param {?=} value2
     * @return {?}
     */
    val(value, value2) {
        if (value !== undefined) {
            return this.host.jqxCalendar('val', value, value2);
        }
        else {
            return this.host.jqxCalendar('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('backButtonClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onBackButtonClick.emit(eventData); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); }));
        this.host.on('nextButtonClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onNextButtonClick.emit(eventData); }));
        this.host.on('viewChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onViewChange.emit(eventData); }));
    }
} //jqxCalendarComponent
jqxCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxCalendar',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxCalendarComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxCalendarComponent.propDecorators = {
    attrBackText: [{ type: Input, args: ['backText',] }],
    attrColumnHeaderHeight: [{ type: Input, args: ['columnHeaderHeight',] }],
    attrClearString: [{ type: Input, args: ['clearString',] }],
    attrCulture: [{ type: Input, args: ['culture',] }],
    attrDayNameFormat: [{ type: Input, args: ['dayNameFormat',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableWeekend: [{ type: Input, args: ['enableWeekend',] }],
    attrEnableViews: [{ type: Input, args: ['enableViews',] }],
    attrEnableOtherMonthDays: [{ type: Input, args: ['enableOtherMonthDays',] }],
    attrEnableFastNavigation: [{ type: Input, args: ['enableFastNavigation',] }],
    attrEnableHover: [{ type: Input, args: ['enableHover',] }],
    attrEnableAutoNavigation: [{ type: Input, args: ['enableAutoNavigation',] }],
    attrEnableTooltips: [{ type: Input, args: ['enableTooltips',] }],
    attrForwardText: [{ type: Input, args: ['forwardText',] }],
    attrFirstDayOfWeek: [{ type: Input, args: ['firstDayOfWeek',] }],
    attrMin: [{ type: Input, args: ['min',] }],
    attrMax: [{ type: Input, args: ['max',] }],
    attrNavigationDelay: [{ type: Input, args: ['navigationDelay',] }],
    attrRowHeaderWidth: [{ type: Input, args: ['rowHeaderWidth',] }],
    attrReadOnly: [{ type: Input, args: ['readOnly',] }],
    attrRestrictedDates: [{ type: Input, args: ['restrictedDates',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrStepMonths: [{ type: Input, args: ['stepMonths',] }],
    attrShowWeekNumbers: [{ type: Input, args: ['showWeekNumbers',] }],
    attrShowDayNames: [{ type: Input, args: ['showDayNames',] }],
    attrShowOtherMonthDays: [{ type: Input, args: ['showOtherMonthDays',] }],
    attrShowFooter: [{ type: Input, args: ['showFooter',] }],
    attrSelectionMode: [{ type: Input, args: ['selectionMode',] }],
    attrSpecialDates: [{ type: Input, args: ['specialDates',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrTitleHeight: [{ type: Input, args: ['titleHeight',] }],
    attrTitleFormat: [{ type: Input, args: ['titleFormat',] }],
    attrTodayString: [{ type: Input, args: ['todayString',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onBackButtonClick: [{ type: Output }],
    onChange: [{ type: Output }],
    onNextButtonClick: [{ type: Output }],
    onViewChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxCalendarComponent.prototype.attrBackText;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrColumnHeaderHeight;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrClearString;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrCulture;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrDayNameFormat;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrEnableWeekend;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrEnableViews;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrEnableOtherMonthDays;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrEnableFastNavigation;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrEnableAutoNavigation;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrEnableTooltips;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrForwardText;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrFirstDayOfWeek;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrMin;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrMax;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrNavigationDelay;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrRowHeaderWidth;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrReadOnly;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrRestrictedDates;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrRtl;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrStepMonths;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrShowWeekNumbers;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrShowDayNames;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrShowOtherMonthDays;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrShowFooter;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrSelectionMode;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrSpecialDates;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrTheme;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrTitleHeight;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrTitleFormat;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrTodayString;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrValue;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrWidth;
    /** @type {?} */
    jqxCalendarComponent.prototype.attrHeight;
    /** @type {?} */
    jqxCalendarComponent.prototype.autoCreate;
    /** @type {?} */
    jqxCalendarComponent.prototype.properties;
    /** @type {?} */
    jqxCalendarComponent.prototype.host;
    /** @type {?} */
    jqxCalendarComponent.prototype.elementRef;
    /** @type {?} */
    jqxCalendarComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxCalendarComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxCalendarComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxCalendarComponent.prototype.onBackButtonClick;
    /** @type {?} */
    jqxCalendarComponent.prototype.onChange;
    /** @type {?} */
    jqxCalendarComponent.prototype.onNextButtonClick;
    /** @type {?} */
    jqxCalendarComponent.prototype.onViewChange;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhjYWxlbmRhci8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Y2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUE0Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsSixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRW5FLElBQUk7OztBQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTs7O01BR2hCLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFTRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBaUQ5QixZQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFVBQVUsRUFBQyxvQkFBb0IsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxzQkFBc0IsRUFBQyxzQkFBc0IsRUFBQyxhQUFhLEVBQUMsc0JBQXNCLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixFQUFDLGNBQWMsRUFBQyxvQkFBb0IsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxP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ZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeENhbGVuZGFyQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeENhbGVuZGFyJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MganF4Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIFxue1xuICAgQElucHV0KCdiYWNrVGV4dCcpIGF0dHJCYWNrVGV4dDogc3RyaW5nO1xuICAgQElucHV0KCdjb2x1bW5IZWFkZXJIZWlnaHQnKSBhdHRyQ29sdW1uSGVhZGVySGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2NsZWFyU3RyaW5nJykgYXR0ckNsZWFyU3RyaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ2N1bHR1cmUnKSBhdHRyQ3VsdHVyZTogc3RyaW5nO1xuICAgQElucHV0KCdkYXlOYW1lRm9ybWF0JykgYXR0ckRheU5hbWVGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZVdlZWtlbmQnKSBhdHRyRW5hYmxlV2Vla2VuZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlVmlld3MnKSBhdHRyRW5hYmxlVmlld3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZU90aGVyTW9udGhEYXlzJykgYXR0ckVuYWJsZU90aGVyTW9udGhEYXlzOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVGYXN0TmF2aWdhdGlvbicpIGF0dHJFbmFibGVGYXN0TmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUF1dG9OYXZpZ2F0aW9uJykgYXR0ckVuYWJsZUF1dG9OYXZpZ2F0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVUb29sdGlwcycpIGF0dHJFbmFibGVUb29sdGlwczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZm9yd2FyZFRleHQnKSBhdHRyRm9yd2FyZFRleHQ6IHN0cmluZztcbiAgIEBJbnB1dCgnZmlyc3REYXlPZldlZWsnKSBhdHRyRmlyc3REYXlPZldlZWs6IG51bWJlcjtcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogYW55O1xuICAgQElucHV0KCdtYXgnKSBhdHRyTWF4OiBhbnk7XG4gICBASW5wdXQoJ25hdmlnYXRpb25EZWxheScpIGF0dHJOYXZpZ2F0aW9uRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgncm93SGVhZGVyV2lkdGgnKSBhdHRyUm93SGVhZGVyV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncmVhZE9ubHknKSBhdHRyUmVhZE9ubHk6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Jlc3RyaWN0ZWREYXRlcycpIGF0dHJSZXN0cmljdGVkRGF0ZXM6IEFycmF5PERhdGU+O1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzdGVwTW9udGhzJykgYXR0clN0ZXBNb250aHM6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2hvd1dlZWtOdW1iZXJzJykgYXR0clNob3dXZWVrTnVtYmVyczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0RheU5hbWVzJykgYXR0clNob3dEYXlOYW1lczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd090aGVyTW9udGhEYXlzJykgYXR0clNob3dPdGhlck1vbnRoRGF5czogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0Zvb3RlcicpIGF0dHJTaG93Rm9vdGVyOiBib29sZWFuO1xuICAgQElucHV0KCdzZWxlY3Rpb25Nb2RlJykgYXR0clNlbGVjdGlvbk1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnc3BlY2lhbERhdGVzJykgYXR0clNwZWNpYWxEYXRlczogQXJyYXk8YW55PjtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndGl0bGVIZWlnaHQnKSBhdHRyVGl0bGVIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndGl0bGVGb3JtYXQnKSBhdHRyVGl0bGVGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgndG9kYXlTdHJpbmcnKSBhdHRyVG9kYXlTdHJpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgndmFsdWUnKSBhdHRyVmFsdWU6IERhdGU7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYmFja1RleHQnLCdjb2x1bW5IZWFkZXJIZWlnaHQnLCdjbGVhclN0cmluZycsJ2N1bHR1cmUnLCdkYXlOYW1lRm9ybWF0JywnZGlzYWJsZWQnLCdlbmFibGVXZWVrZW5kJywnZW5hYmxlVmlld3MnLCdlbmFibGVPdGhlck1vbnRoRGF5cycsJ2VuYWJsZUZhc3ROYXZpZ2F0aW9uJywnZW5hYmxlSG92ZXInLCdlbmFibGVBdXRvTmF2aWdhdGlvbicsJ2VuYWJsZVRvb2x0aXBzJywnZm9yd2FyZFRleHQnLCdmaXJzdERheU9mV2VlaycsJ2hlaWdodCcsJ21pbicsJ21heCcsJ25hdmlnYXRpb25EZWxheScsJ3Jvd0hlYWRlcldpZHRoJywncmVhZE9ubHknLCdyZXN0cmljdGVkRGF0ZXMnLCdydGwnLCdzdGVwTW9udGhzJywnc2hvd1dlZWtOdW1iZXJzJywnc2hvd0RheU5hbWVzJywnc2hvd090aGVyTW9udGhEYXlzJywnc2hvd0Zvb3RlcicsJ3NlbGVjdGlvbk1vZGUnLCdzcGVjaWFsRGF0ZXMnLCd0aGVtZScsJ3RpdGxlSGVpZ2h0JywndGl0bGVGb3JtYXQnLCd0b2RheVN0cmluZycsJ3ZhbHVlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4Q2FsZW5kYXI7XG5cbiAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhDYWxlbmRhcih0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4Q2FsZW5kYXIodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhDYWxlbmRhcicsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICBpZih0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5ob3N0LnZhbCgpKTtcbiAgICAgICB9XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhDYWxlbmRhckNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBiYWNrVGV4dChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdiYWNrVGV4dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2JhY2tUZXh0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbkhlYWRlckhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjb2x1bW5IZWFkZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjb2x1bW5IZWFkZXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xlYXJTdHJpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignY2xlYXJTdHJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjbGVhclN0cmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjdWx0dXJlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2N1bHR1cmUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjdWx0dXJlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRheU5hbWVGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZGF5TmFtZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2RheU5hbWVGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZVdlZWtlbmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVXZWVrZW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlV2Vla2VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVWaWV3cyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZVZpZXdzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlVmlld3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlT3RoZXJNb250aERheXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVPdGhlck1vbnRoRGF5cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZU90aGVyTW9udGhEYXlzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUZhc3ROYXZpZ2F0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlRmFzdE5hdmlnYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVGYXN0TmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZUhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlSG92ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlQXV0b05hdmlnYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVBdXRvTmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZUF1dG9OYXZpZ2F0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZVRvb2x0aXBzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlVG9vbHRpcHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVUb29sdGlwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3J3YXJkVGV4dChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdmb3J3YXJkVGV4dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2ZvcndhcmRUZXh0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpcnN0RGF5T2ZXZWVrKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2ZpcnN0RGF5T2ZXZWVrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZmlyc3REYXlPZldlZWsnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbWluJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdtYXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdtYXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmF2aWdhdGlvbkRlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ25hdmlnYXRpb25EZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ25hdmlnYXRpb25EZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dIZWFkZXJXaWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyb3dIZWFkZXJXaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Jvd0hlYWRlcldpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWRPbmx5KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncmVhZE9ubHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyZWFkT25seScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXN0cmljdGVkRGF0ZXMoYXJnPzogRGF0ZSk6IERhdGUge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyZXN0cmljdGVkRGF0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyZXN0cmljdGVkRGF0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0ZXBNb250aHMoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc3RlcE1vbnRocycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3N0ZXBNb250aHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1dlZWtOdW1iZXJzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2hvd1dlZWtOdW1iZXJzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2hvd1dlZWtOdW1iZXJzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dEYXlOYW1lcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Nob3dEYXlOYW1lcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Nob3dEYXlOYW1lcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93T3RoZXJNb250aERheXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93T3RoZXJNb250aERheXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93T3RoZXJNb250aERheXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Zvb3Rlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Nob3dGb290ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93Rm9vdGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGlvbk1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2VsZWN0aW9uTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NlbGVjdGlvbk1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3BlY2lhbERhdGVzKGFyZz86IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc3BlY2lhbERhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc3BlY2lhbERhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGl0bGVIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndGl0bGVIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0aXRsZUhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aXRsZUZvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0aXRsZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RpdGxlRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvZGF5U3RyaW5nKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RvZGF5U3RyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndG9kYXlTdHJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWUoYXJnPzogRGF0ZSk6IERhdGUge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd2YWx1ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhDYWxlbmRhckNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjbGVhcicpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdmb2N1cycpO1xuICAgfVxuXG4gICBhZGRTcGVjaWFsRGF0ZShkYXRlOiBhbnksIHNwZWNpYWxEYXRlQ2xhc3M6IGFueSwgdGV4dDogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2FkZFNwZWNpYWxEYXRlJywgZGF0ZSwgc3BlY2lhbERhdGVDbGFzcywgdGV4dCk7XG4gICB9XG5cbiAgIGdldE1pbkRhdGUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2dldE1pbkRhdGUnKTtcbiAgIH1cblxuICAgZ2V0TWF4RGF0ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZ2V0TWF4RGF0ZScpO1xuICAgfVxuXG4gICBnZXREYXRlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdnZXREYXRlJyk7XG4gICB9XG5cbiAgIGdldFJhbmdlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdnZXRSYW5nZScpO1xuICAgfVxuXG4gICBuYXZpZ2F0ZUZvcndhcmQobW9udGhzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbmF2aWdhdGVGb3J3YXJkJywgbW9udGhzKTtcbiAgIH1cblxuICAgbmF2aWdhdGVCYWNrd2FyZChtb250aHM6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCduYXZpZ2F0ZUJhY2t3YXJkJywgbW9udGhzKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncmVmcmVzaCcpO1xuICAgfVxuXG4gICBzZXRNaW5EYXRlKGRhdGU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzZXRNaW5EYXRlJywgZGF0ZSk7XG4gICB9XG5cbiAgIHNldE1heERhdGUoZGF0ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NldE1heERhdGUnLCBkYXRlKTtcbiAgIH1cblxuICAgc2V0RGF0ZShkYXRlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2V0RGF0ZScsIGRhdGUpO1xuICAgfVxuXG4gICBzZXRSYW5nZShkYXRlOiBhbnksIGRhdGUyOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2V0UmFuZ2UnLCBkYXRlLCBkYXRlMik7XG4gICB9XG5cbiAgIHRvZGF5KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0b2RheScpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBEYXRlLCB2YWx1ZTI/OiBEYXRlKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd2YWwnLCB2YWx1ZSwgdmFsdWUyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4Q2FsZW5kYXJDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25CYWNrQnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25OZXh0QnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WaWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmFja0J1dHRvbkNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CYWNrQnV0dG9uQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5ob3N0LnZhbCgpKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ25leHRCdXR0b25DbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uTmV4dEJ1dHRvbkNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3ZpZXdDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblZpZXdDaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeENhbGVuZGFyQ29tcG9uZW50XG4iXX0=