require('../../jqwidgets/jqxcore');
require('../../jqwidgets/globalization/globalize');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxdatetimeinput');
require('../../jqwidgets/jqxcalendar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcalendar', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcalendar = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = function () { };
    /** @type {?} */
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return jqxCalendarComponent; }),
        multi: true
    };
    var jqxCalendarComponent = /** @class */ (function () {
        function jqxCalendarComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['backText', 'columnHeaderHeight', 'clearString', 'culture', 'dayNameFormat', 'disabled', 'enableWeekend', 'enableViews', 'enableOtherMonthDays', 'enableFastNavigation', 'enableHover', 'enableAutoNavigation', 'enableTooltips', 'forwardText', 'firstDayOfWeek', 'height', 'min', 'max', 'navigationDelay', 'rowHeaderWidth', 'readOnly', 'restrictedDates', 'rtl', 'stepMonths', 'showWeekNumbers', 'showDayNames', 'showOtherMonthDays', 'showFooter', 'selectionMode', 'specialDates', 'theme', 'titleHeight', 'titleFormat', 'todayString', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxCalendarComponent events
            this.onBackButtonClick = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onNextButtonClick = new core.EventEmitter();
            this.onViewChange = new core.EventEmitter();
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
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
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
        /**
         * @return {?}
         */
        jqxCalendarComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('backButtonClick', function (eventData) { _this.onBackButtonClick.emit(eventData); });
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
                this.host.on('nextButtonClick', function (eventData) { _this.onNextButtonClick.emit(eventData); });
                this.host.on('viewChange', function (eventData) { _this.onViewChange.emit(eventData); });
            };
        jqxCalendarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxCalendar',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxCalendarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxCalendarComponent.propDecorators = {
            attrBackText: [{ type: core.Input, args: ['backText',] }],
            attrColumnHeaderHeight: [{ type: core.Input, args: ['columnHeaderHeight',] }],
            attrClearString: [{ type: core.Input, args: ['clearString',] }],
            attrCulture: [{ type: core.Input, args: ['culture',] }],
            attrDayNameFormat: [{ type: core.Input, args: ['dayNameFormat',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEnableWeekend: [{ type: core.Input, args: ['enableWeekend',] }],
            attrEnableViews: [{ type: core.Input, args: ['enableViews',] }],
            attrEnableOtherMonthDays: [{ type: core.Input, args: ['enableOtherMonthDays',] }],
            attrEnableFastNavigation: [{ type: core.Input, args: ['enableFastNavigation',] }],
            attrEnableHover: [{ type: core.Input, args: ['enableHover',] }],
            attrEnableAutoNavigation: [{ type: core.Input, args: ['enableAutoNavigation',] }],
            attrEnableTooltips: [{ type: core.Input, args: ['enableTooltips',] }],
            attrForwardText: [{ type: core.Input, args: ['forwardText',] }],
            attrFirstDayOfWeek: [{ type: core.Input, args: ['firstDayOfWeek',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrNavigationDelay: [{ type: core.Input, args: ['navigationDelay',] }],
            attrRowHeaderWidth: [{ type: core.Input, args: ['rowHeaderWidth',] }],
            attrReadOnly: [{ type: core.Input, args: ['readOnly',] }],
            attrRestrictedDates: [{ type: core.Input, args: ['restrictedDates',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrStepMonths: [{ type: core.Input, args: ['stepMonths',] }],
            attrShowWeekNumbers: [{ type: core.Input, args: ['showWeekNumbers',] }],
            attrShowDayNames: [{ type: core.Input, args: ['showDayNames',] }],
            attrShowOtherMonthDays: [{ type: core.Input, args: ['showOtherMonthDays',] }],
            attrShowFooter: [{ type: core.Input, args: ['showFooter',] }],
            attrSelectionMode: [{ type: core.Input, args: ['selectionMode',] }],
            attrSpecialDates: [{ type: core.Input, args: ['specialDates',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrTitleHeight: [{ type: core.Input, args: ['titleHeight',] }],
            attrTitleFormat: [{ type: core.Input, args: ['titleFormat',] }],
            attrTodayString: [{ type: core.Input, args: ['todayString',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onBackButtonClick: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onNextButtonClick: [{ type: core.Output }],
            onViewChange: [{ type: core.Output }]
        };
        return jqxCalendarComponent;
    }()); //jqxCalendarComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxCalendarModule = /** @class */ (function () {
        function jqxCalendarModule() {
        }
        jqxCalendarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxCalendarComponent],
                        exports: [jqxCalendarComponent]
                    },] }
        ];
        return jqxCalendarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxCalendarComponent = jqxCalendarComponent;
    exports.jqxCalendarModule = jqxCalendarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

