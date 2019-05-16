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
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = (/**
 * @return {?}
 */
function () { });
var ɵ0 = noop;
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return jqxCalendarComponent; })),
    multi: true
};
var jqxCalendarComponent = /** @class */ (function () {
    function jqxCalendarComponent(containerElement) {
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
    jqxCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                var areEqual = false;
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
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxCalendarComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxCalendarComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxCalendarComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxCalendarComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxCalendarComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    jqxCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxCalendarComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxCalendar('setOptions', options);
    };
    // jqxCalendarComponent properties
    // jqxCalendarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.backText = 
    // jqxCalendarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('backText', arg);
        }
        else {
            return this.host.jqxCalendar('backText');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.columnHeaderHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('columnHeaderHeight', arg);
        }
        else {
            return this.host.jqxCalendar('columnHeaderHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.clearString = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('clearString', arg);
        }
        else {
            return this.host.jqxCalendar('clearString');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.culture = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('culture', arg);
        }
        else {
            return this.host.jqxCalendar('culture');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.dayNameFormat = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('dayNameFormat', arg);
        }
        else {
            return this.host.jqxCalendar('dayNameFormat');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('disabled', arg);
        }
        else {
            return this.host.jqxCalendar('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.enableWeekend = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableWeekend', arg);
        }
        else {
            return this.host.jqxCalendar('enableWeekend');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.enableViews = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableViews', arg);
        }
        else {
            return this.host.jqxCalendar('enableViews');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.enableOtherMonthDays = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('enableOtherMonthDays');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.enableFastNavigation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableFastNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableFastNavigation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.enableHover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableHover', arg);
        }
        else {
            return this.host.jqxCalendar('enableHover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.enableAutoNavigation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableAutoNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableAutoNavigation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.enableTooltips = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableTooltips', arg);
        }
        else {
            return this.host.jqxCalendar('enableTooltips');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.forwardText = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('forwardText', arg);
        }
        else {
            return this.host.jqxCalendar('forwardText');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.firstDayOfWeek = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxCalendar('firstDayOfWeek');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('height', arg);
        }
        else {
            return this.host.jqxCalendar('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('min', arg);
        }
        else {
            return this.host.jqxCalendar('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('max', arg);
        }
        else {
            return this.host.jqxCalendar('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.navigationDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('navigationDelay', arg);
        }
        else {
            return this.host.jqxCalendar('navigationDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.rowHeaderWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rowHeaderWidth', arg);
        }
        else {
            return this.host.jqxCalendar('rowHeaderWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.readOnly = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('readOnly', arg);
        }
        else {
            return this.host.jqxCalendar('readOnly');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.restrictedDates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('restrictedDates', arg);
        }
        else {
            return this.host.jqxCalendar('restrictedDates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rtl', arg);
        }
        else {
            return this.host.jqxCalendar('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.stepMonths = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('stepMonths', arg);
        }
        else {
            return this.host.jqxCalendar('stepMonths');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.showWeekNumbers = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxCalendar('showWeekNumbers');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.showDayNames = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showDayNames', arg);
        }
        else {
            return this.host.jqxCalendar('showDayNames');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.showOtherMonthDays = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('showOtherMonthDays');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.showFooter = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showFooter', arg);
        }
        else {
            return this.host.jqxCalendar('showFooter');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.selectionMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('selectionMode', arg);
        }
        else {
            return this.host.jqxCalendar('selectionMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.specialDates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('specialDates', arg);
        }
        else {
            return this.host.jqxCalendar('specialDates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('theme', arg);
        }
        else {
            return this.host.jqxCalendar('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.titleHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleHeight', arg);
        }
        else {
            return this.host.jqxCalendar('titleHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.titleFormat = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleFormat', arg);
        }
        else {
            return this.host.jqxCalendar('titleFormat');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.todayString = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('todayString', arg);
        }
        else {
            return this.host.jqxCalendar('todayString');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('value', arg);
        }
        else {
            return this.host.jqxCalendar('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxCalendarComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('width', arg);
        }
        else {
            return this.host.jqxCalendar('width');
        }
    };
    // jqxCalendarComponent functions
    // jqxCalendarComponent functions
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.clear = 
    // jqxCalendarComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxCalendar('clear');
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxCalendar('destroy');
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxCalendar('focus');
    };
    /**
     * @param {?} date
     * @param {?} specialDateClass
     * @param {?} text
     * @return {?}
     */
    jqxCalendarComponent.prototype.addSpecialDate = /**
     * @param {?} date
     * @param {?} specialDateClass
     * @param {?} text
     * @return {?}
     */
    function (date, specialDateClass, text) {
        this.host.jqxCalendar('addSpecialDate', date, specialDateClass, text);
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.getMinDate = /**
     * @return {?}
     */
    function () {
        return this.host.jqxCalendar('getMinDate');
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.getMaxDate = /**
     * @return {?}
     */
    function () {
        return this.host.jqxCalendar('getMaxDate');
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.host.jqxCalendar('getDate');
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.getRange = /**
     * @return {?}
     */
    function () {
        return this.host.jqxCalendar('getRange');
    };
    /**
     * @param {?} months
     * @return {?}
     */
    jqxCalendarComponent.prototype.navigateForward = /**
     * @param {?} months
     * @return {?}
     */
    function (months) {
        this.host.jqxCalendar('navigateForward', months);
    };
    /**
     * @param {?} months
     * @return {?}
     */
    jqxCalendarComponent.prototype.navigateBackward = /**
     * @param {?} months
     * @return {?}
     */
    function (months) {
        this.host.jqxCalendar('navigateBackward', months);
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxCalendar('render');
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxCalendar('refresh');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    jqxCalendarComponent.prototype.setMinDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.host.jqxCalendar('setMinDate', date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    jqxCalendarComponent.prototype.setMaxDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.host.jqxCalendar('setMaxDate', date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    jqxCalendarComponent.prototype.setDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.host.jqxCalendar('setDate', date);
    };
    /**
     * @param {?} date
     * @param {?} date2
     * @return {?}
     */
    jqxCalendarComponent.prototype.setRange = /**
     * @param {?} date
     * @param {?} date2
     * @return {?}
     */
    function (date, date2) {
        this.host.jqxCalendar('setRange', date, date2);
    };
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.today = /**
     * @return {?}
     */
    function () {
        this.host.jqxCalendar('today');
    };
    /**
     * @param {?=} value
     * @param {?=} value2
     * @return {?}
     */
    jqxCalendarComponent.prototype.val = /**
     * @param {?=} value
     * @param {?=} value2
     * @return {?}
     */
    function (value, value2) {
        if (value !== undefined) {
            return this.host.jqxCalendar('val', value, value2);
        }
        else {
            return this.host.jqxCalendar('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxCalendarComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('backButtonClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBackButtonClick.emit(eventData); }));
        this.host.on('change', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); }));
        this.host.on('nextButtonClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onNextButtonClick.emit(eventData); }));
        this.host.on('viewChange', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onViewChange.emit(eventData); }));
    };
    jqxCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxCalendar',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return jqxCalendarComponent;
}()); //jqxCalendarComponent
export { jqxCalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhjYWxlbmRhci8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Y2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBNEIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEosT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVuRSxJQUFJOzs7QUFBRyxjQUFRLENBQUMsQ0FBQTs7O0lBR2hCLG1DQUFtQyxHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNkO0FBRUQ7SUF3REcsOEJBQVksZ0JBQTRCO1FBVmxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLG9CQUFvQixFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLHNCQUFzQixFQUFDLHNCQUFzQixFQUFDLGFBQWEsRUFBQyxzQkFBc0IsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsaUJBQWlCLEVBQUMsY0FBYyxFQUFDLG9CQUFvQixFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsYUFB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QUM5QywyQ0FBc0M7O0lBQ3RDLGlEQUFrRDs7SUFDbEQsNENBQXlDOztJQUN6QyxpREFBbUQ7O0lBQ25ELCtDQUErQzs7SUFDL0Msd0RBQWlFOztJQUNqRSx3REFBaUU7O0lBQ2pFLCtDQUErQzs7SUFDL0Msd0RBQWlFOztJQUNqRSxrREFBcUQ7O0lBQ3JELCtDQUE4Qzs7SUFDOUMsa0RBQW9EOztJQUNwRCx1Q0FBMkI7O0lBQzNCLHVDQUEyQjs7SUFDM0IsbURBQXNEOztJQUN0RCxrREFBNkQ7O0lBQzdELDRDQUF5Qzs7SUFDekMsbURBQTJEOztJQUMzRCx1Q0FBK0I7O0lBQy9CLDhDQUE0Qzs7SUFDNUMsbURBQXVEOztJQUN2RCxnREFBaUQ7O0lBQ2pELHNEQUE2RDs7SUFDN0QsOENBQTZDOztJQUM3QyxpREFBa0Q7O0lBQ2xELGdEQUFvRDs7SUFDcEQseUNBQWtDOztJQUNsQywrQ0FBOEM7O0lBQzlDLCtDQUE4Qzs7SUFDOUMsK0NBQThDOztJQUM5Qyx5Q0FBZ0M7O0lBQ2hDLHlDQUEyQzs7SUFDM0MsMENBQTZDOztJQUU3QywwQ0FBaUQ7O0lBRWpELDBDQUF5aEI7O0lBQ3poQixvQ0FBVTs7SUFDViwwQ0FBdUI7O0lBQ3ZCLDRDQUFxQzs7Ozs7SUFFckMsaURBQTZDOzs7OztJQUM3QyxnREFBa0Q7O0lBOGVsRCxpREFBaUQ7O0lBQ2pELHdDQUF3Qzs7SUFDeEMsaURBQWlEOztJQUNqRCw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBqcXhDYWxlbmRhckNvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWVcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhDYWxlbmRhcicsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nLFxuICAgIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIGpxeENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyBcbntcbiAgIEBJbnB1dCgnYmFja1RleHQnKSBhdHRyQmFja1RleHQ6IHN0cmluZztcbiAgIEBJbnB1dCgnY29sdW1uSGVhZGVySGVpZ2h0JykgYXR0ckNvbHVtbkhlYWRlckhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdjbGVhclN0cmluZycpIGF0dHJDbGVhclN0cmluZzogc3RyaW5nO1xuICAgQElucHV0KCdjdWx0dXJlJykgYXR0ckN1bHR1cmU6IHN0cmluZztcbiAgIEBJbnB1dCgnZGF5TmFtZUZvcm1hdCcpIGF0dHJEYXlOYW1lRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVXZWVrZW5kJykgYXR0ckVuYWJsZVdlZWtlbmQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZVZpZXdzJykgYXR0ckVuYWJsZVZpZXdzOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVPdGhlck1vbnRoRGF5cycpIGF0dHJFbmFibGVPdGhlck1vbnRoRGF5czogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlRmFzdE5hdmlnYXRpb24nKSBhdHRyRW5hYmxlRmFzdE5hdmlnYXRpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUhvdmVyJykgYXR0ckVuYWJsZUhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVBdXRvTmF2aWdhdGlvbicpIGF0dHJFbmFibGVBdXRvTmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlVG9vbHRpcHMnKSBhdHRyRW5hYmxlVG9vbHRpcHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZvcndhcmRUZXh0JykgYXR0ckZvcndhcmRUZXh0OiBzdHJpbmc7XG4gICBASW5wdXQoJ2ZpcnN0RGF5T2ZXZWVrJykgYXR0ckZpcnN0RGF5T2ZXZWVrOiBudW1iZXI7XG4gICBASW5wdXQoJ21pbicpIGF0dHJNaW46IGFueTtcbiAgIEBJbnB1dCgnbWF4JykgYXR0ck1heDogYW55O1xuICAgQElucHV0KCduYXZpZ2F0aW9uRGVsYXknKSBhdHRyTmF2aWdhdGlvbkRlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ3Jvd0hlYWRlcldpZHRoJykgYXR0clJvd0hlYWRlcldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ3JlYWRPbmx5JykgYXR0clJlYWRPbmx5OiBib29sZWFuO1xuICAgQElucHV0KCdyZXN0cmljdGVkRGF0ZXMnKSBhdHRyUmVzdHJpY3RlZERhdGVzOiBBcnJheTxEYXRlPjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc3RlcE1vbnRocycpIGF0dHJTdGVwTW9udGhzOiBudW1iZXI7XG4gICBASW5wdXQoJ3Nob3dXZWVrTnVtYmVycycpIGF0dHJTaG93V2Vla051bWJlcnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dEYXlOYW1lcycpIGF0dHJTaG93RGF5TmFtZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dPdGhlck1vbnRoRGF5cycpIGF0dHJTaG93T3RoZXJNb250aERheXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dGb290ZXInKSBhdHRyU2hvd0Zvb3RlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2VsZWN0aW9uTW9kZScpIGF0dHJTZWxlY3Rpb25Nb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3NwZWNpYWxEYXRlcycpIGF0dHJTcGVjaWFsRGF0ZXM6IEFycmF5PGFueT47XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RpdGxlSGVpZ2h0JykgYXR0clRpdGxlSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3RpdGxlRm9ybWF0JykgYXR0clRpdGxlRm9ybWF0OiBzdHJpbmc7XG4gICBASW5wdXQoJ3RvZGF5U3RyaW5nJykgYXR0clRvZGF5U3RyaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ3ZhbHVlJykgYXR0clZhbHVlOiBEYXRlO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2JhY2tUZXh0JywnY29sdW1uSGVhZGVySGVpZ2h0JywnY2xlYXJTdHJpbmcnLCdjdWx0dXJlJywnZGF5TmFtZUZvcm1hdCcsJ2Rpc2FibGVkJywnZW5hYmxlV2Vla2VuZCcsJ2VuYWJsZVZpZXdzJywnZW5hYmxlT3RoZXJNb250aERheXMnLCdlbmFibGVGYXN0TmF2aWdhdGlvbicsJ2VuYWJsZUhvdmVyJywnZW5hYmxlQXV0b05hdmlnYXRpb24nLCdlbmFibGVUb29sdGlwcycsJ2ZvcndhcmRUZXh0JywnZmlyc3REYXlPZldlZWsnLCdoZWlnaHQnLCdtaW4nLCdtYXgnLCduYXZpZ2F0aW9uRGVsYXknLCdyb3dIZWFkZXJXaWR0aCcsJ3JlYWRPbmx5JywncmVzdHJpY3RlZERhdGVzJywncnRsJywnc3RlcE1vbnRocycsJ3Nob3dXZWVrTnVtYmVycycsJ3Nob3dEYXlOYW1lcycsJ3Nob3dPdGhlck1vbnRoRGF5cycsJ3Nob3dGb290ZXInLCdzZWxlY3Rpb25Nb2RlJywnc3BlY2lhbERhdGVzJywndGhlbWUnLCd0aXRsZUhlaWdodCcsJ3RpdGxlRm9ybWF0JywndG9kYXlTdHJpbmcnLCd2YWx1ZScsJ3dpZHRoJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeENhbGVuZGFyO1xuXG4gICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4Q2FsZW5kYXIodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeENhbGVuZGFyKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcih0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4Q2FsZW5kYXInLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgaWYodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaG9zdC52YWwoKSk7XG4gICAgICAgfVxuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4Q2FsZW5kYXJDb21wb25lbnQgcHJvcGVydGllc1xuICAgYmFja1RleHQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignYmFja1RleHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdiYWNrVGV4dCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5IZWFkZXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignY29sdW1uSGVhZGVySGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignY29sdW1uSGVhZGVySGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNsZWFyU3RyaW5nKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2NsZWFyU3RyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignY2xlYXJTdHJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY3VsdHVyZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjdWx0dXJlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignY3VsdHVyZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkYXlOYW1lRm9ybWF0KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2RheU5hbWVGb3JtYXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdkYXlOYW1lRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVXZWVrZW5kKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlV2Vla2VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZVdlZWtlbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlVmlld3MoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVWaWV3cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZVZpZXdzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZU90aGVyTW9udGhEYXlzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlT3RoZXJNb250aERheXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVPdGhlck1vbnRoRGF5cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVGYXN0TmF2aWdhdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZUZhc3ROYXZpZ2F0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlRmFzdE5hdmlnYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlSG92ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVIb3ZlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUF1dG9OYXZpZ2F0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlQXV0b05hdmlnYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVBdXRvTmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVUb29sdGlwcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZVRvb2x0aXBzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlVG9vbHRpcHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9yd2FyZFRleHQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZm9yd2FyZFRleHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdmb3J3YXJkVGV4dCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaXJzdERheU9mV2Vlayhhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdmaXJzdERheU9mV2VlaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2ZpcnN0RGF5T2ZXZWVrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWluKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ21pbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ21pbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXgoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbWF4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbWF4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG5hdmlnYXRpb25EZWxheShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCduYXZpZ2F0aW9uRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCduYXZpZ2F0aW9uRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcm93SGVhZGVyV2lkdGgoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncm93SGVhZGVyV2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyb3dIZWFkZXJXaWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZWFkT25seShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3JlYWRPbmx5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncmVhZE9ubHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVzdHJpY3RlZERhdGVzKGFyZz86IERhdGUpOiBEYXRlIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncmVzdHJpY3RlZERhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncmVzdHJpY3RlZERhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzdGVwTW9udGhzKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3N0ZXBNb250aHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzdGVwTW9udGhzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dXZWVrTnVtYmVycyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Nob3dXZWVrTnVtYmVycycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Nob3dXZWVrTnVtYmVycycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93RGF5TmFtZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93RGF5TmFtZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93RGF5TmFtZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd090aGVyTW9udGhEYXlzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2hvd090aGVyTW9udGhEYXlzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2hvd090aGVyTW9udGhEYXlzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dGb290ZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93Rm9vdGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2hvd0Zvb3RlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3Rpb25Nb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NlbGVjdGlvbk1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzZWxlY3Rpb25Nb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNwZWNpYWxEYXRlcyhhcmc/OiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NwZWNpYWxEYXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NwZWNpYWxEYXRlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRpdGxlSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RpdGxlSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndGl0bGVIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGl0bGVGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndGl0bGVGb3JtYXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0aXRsZUZvcm1hdCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2RheVN0cmluZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0b2RheVN0cmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RvZGF5U3RyaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbHVlKGFyZz86IERhdGUpOiBEYXRlIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndmFsdWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd2YWx1ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4Q2FsZW5kYXJDb21wb25lbnQgZnVuY3Rpb25zXG4gICBjbGVhcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignY2xlYXInKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZGVzdHJveScpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZm9jdXMnKTtcbiAgIH1cblxuICAgYWRkU3BlY2lhbERhdGUoZGF0ZTogYW55LCBzcGVjaWFsRGF0ZUNsYXNzOiBhbnksIHRleHQ6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdhZGRTcGVjaWFsRGF0ZScsIGRhdGUsIHNwZWNpYWxEYXRlQ2xhc3MsIHRleHQpO1xuICAgfVxuXG4gICBnZXRNaW5EYXRlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdnZXRNaW5EYXRlJyk7XG4gICB9XG5cbiAgIGdldE1heERhdGUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2dldE1heERhdGUnKTtcbiAgIH1cblxuICAgZ2V0RGF0ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZ2V0RGF0ZScpO1xuICAgfVxuXG4gICBnZXRSYW5nZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZ2V0UmFuZ2UnKTtcbiAgIH1cblxuICAgbmF2aWdhdGVGb3J3YXJkKG1vbnRoczogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ25hdmlnYXRlRm9yd2FyZCcsIG1vbnRocyk7XG4gICB9XG5cbiAgIG5hdmlnYXRlQmFja3dhcmQobW9udGhzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbmF2aWdhdGVCYWNrd2FyZCcsIG1vbnRocyk7XG4gICB9XG5cbiAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncmVuZGVyJyk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgc2V0TWluRGF0ZShkYXRlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2V0TWluRGF0ZScsIGRhdGUpO1xuICAgfVxuXG4gICBzZXRNYXhEYXRlKGRhdGU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzZXRNYXhEYXRlJywgZGF0ZSk7XG4gICB9XG5cbiAgIHNldERhdGUoZGF0ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NldERhdGUnLCBkYXRlKTtcbiAgIH1cblxuICAgc2V0UmFuZ2UoZGF0ZTogYW55LCBkYXRlMjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NldFJhbmdlJywgZGF0ZSwgZGF0ZTIpO1xuICAgfVxuXG4gICB0b2RheSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndG9kYXknKTtcbiAgIH1cblxuICAgdmFsKHZhbHVlPzogRGF0ZSwgdmFsdWUyPzogRGF0ZSk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndmFsJywgdmFsdWUsIHZhbHVlMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndmFsJyk7XG4gICAgICB9XG4gICB9O1xuXG5cbiAgIC8vIGpxeENhbGVuZGFyQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQmFja0J1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uTmV4dEJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVmlld0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2JhY2tCdXR0b25DbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQmFja0J1dHRvbkNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NoYW5nZScsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaG9zdC52YWwoKSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCduZXh0QnV0dG9uQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk5leHRCdXR0b25DbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCd2aWV3Q2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25WaWV3Q2hhbmdlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhDYWxlbmRhckNvbXBvbmVudFxuIl19