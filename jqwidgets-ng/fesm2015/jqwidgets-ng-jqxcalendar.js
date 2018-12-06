import * as jqxcore from '../../jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const noop = () => { };
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxCalendarComponent),
    multi: true
};
class jqxCalendarComponent {
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
        this.host.on('backButtonClick', (eventData) => { this.onBackButtonClick.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('nextButtonClick', (eventData) => { this.onNextButtonClick.emit(eventData); });
        this.host.on('viewChange', (eventData) => { this.onViewChange.emit(eventData); });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxCalendarModule {
}
jqxCalendarModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule
                ],
                declarations: [jqxCalendarComponent],
                exports: [jqxCalendarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxCalendarComponent, jqxCalendarModule };

