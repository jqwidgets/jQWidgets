require('../../jqwidgets/jqxcore');
require('../../jqwidgets/globalization/globalize');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxdatetimeinput');
require('../../jqwidgets/jqxcalendar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdatetimeinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdatetimeinput = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxDateTimeInputComponent; }),
        multi: true
    };
    var jqxDateTimeInputComponent = /** @class */ (function () {
        function jqxDateTimeInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationType', 'allowNullDate', 'allowKeyboardDelete', 'clearString', 'culture', 'closeDelay', 'closeCalendarAfterSelection', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'disabled', 'enableBrowserBoundsDetection', 'enableAbsoluteSelection', 'firstDayOfWeek', 'formatString', 'height', 'min', 'max', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'readonly', 'showFooter', 'selectionMode', 'showWeekNumbers', 'showTimeButton', 'showCalendarButton', 'theme', 'template', 'textAlign', 'todayString', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxDateTimeInputComponent events
            this.onChange = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onTextchanged = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.ngOnInit = /**
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
        jqxDateTimeInputComponent.prototype.ngOnChanges = /**
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
            };
        /**
         * @param {?} attrValue
         * @param {?} hostValue
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.arraysEqual = /**
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
        jqxDateTimeInputComponent.prototype.manageAttributes = /**
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
        jqxDateTimeInputComponent.prototype.moveClasses = /**
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
        jqxDateTimeInputComponent.prototype.moveStyles = /**
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
        jqxDateTimeInputComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDateTimeInput', options);
                this.host = this.widgetObject['host'];
                this.__wireEvents__();
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        Object.defineProperty(jqxDateTimeInputComponent.prototype, "ngValue", {
            get: /**
             * @return {?}
             */ function () {
                if (this.widgetObject) {
                    /** @type {?} */
                    var value = this.host.val();
                    return value;
                }
                return '';
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this.widgetObject) {
                    this.onChangeCallback(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) {
                    this.host.jqxDateTimeInput('val', value);
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.registerOnChange = /**
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
        jqxDateTimeInputComponent.prototype.registerOnTouched = /**
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
        jqxDateTimeInputComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxDateTimeInput('setOptions', options);
            };
        // jqxDateTimeInputComponent properties
        // jqxDateTimeInputComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.animationType =
            // jqxDateTimeInputComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('animationType', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.allowNullDate = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('allowNullDate', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('allowNullDate');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.allowKeyboardDelete = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('allowKeyboardDelete', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('allowKeyboardDelete');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.clearString = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('clearString', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('clearString');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.culture = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('culture', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('culture');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.closeDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('closeDelay', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('closeDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.closeCalendarAfterSelection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('closeCalendarAfterSelection', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('closeCalendarAfterSelection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.dropDownHorizontalAlignment = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('dropDownHorizontalAlignment', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('dropDownHorizontalAlignment');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.dropDownVerticalAlignment = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('dropDownVerticalAlignment', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('dropDownVerticalAlignment');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('disabled', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.enableBrowserBoundsDetection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('enableBrowserBoundsDetection', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('enableBrowserBoundsDetection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.enableAbsoluteSelection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('enableAbsoluteSelection', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('enableAbsoluteSelection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.firstDayOfWeek = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('firstDayOfWeek', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('firstDayOfWeek');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.formatString = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('formatString', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('formatString');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('height', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.min = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('min', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('min');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.max = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('max', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('max');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.openDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('openDelay', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('openDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.placeHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('placeHolder', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('placeHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.popupZIndex = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('popupZIndex', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('popupZIndex');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('rtl', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.readonly = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('readonly', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('readonly');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.showFooter = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('showFooter', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('showFooter');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.selectionMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('selectionMode', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('selectionMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.showWeekNumbers = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('showWeekNumbers', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('showWeekNumbers');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.showTimeButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('showTimeButton', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('showTimeButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.showCalendarButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('showCalendarButton', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('showCalendarButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('theme', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('template', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.textAlign = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('textAlign', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('textAlign');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.todayString = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('todayString', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('todayString');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('value', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('value');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDateTimeInput('width', arg);
                }
                else {
                    return this.host.jqxDateTimeInput('width');
                }
            };
        // jqxDateTimeInputComponent functions
        // jqxDateTimeInputComponent functions
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.close =
            // jqxDateTimeInputComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxDateTimeInput('close');
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxDateTimeInput('destroy');
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxDateTimeInput('focus');
            };
        /**
         * @param {?} date
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.getRange = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return this.host.jqxDateTimeInput('getRange', date);
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.getText = /**
         * @return {?}
         */
            function () {
                return this.host.jqxDateTimeInput('getText');
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.getDate = /**
         * @return {?}
         */
            function () {
                return this.host.jqxDateTimeInput('getDate');
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.getMaxDate = /**
         * @return {?}
         */
            function () {
                return this.host.jqxDateTimeInput('getMaxDate');
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.getMinDate = /**
         * @return {?}
         */
            function () {
                return this.host.jqxDateTimeInput('getMinDate');
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                this.host.jqxDateTimeInput('open');
            };
        /**
         * @param {?} date
         * @param {?} date2
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.setRange = /**
         * @param {?} date
         * @param {?} date2
         * @return {?}
         */
            function (date, date2) {
                this.host.jqxDateTimeInput('setRange', date, date2);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.setMinDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.host.jqxDateTimeInput('setMinDate', date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.setMaxDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.host.jqxDateTimeInput('setMaxDate', date);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.setDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this.host.jqxDateTimeInput('setDate', date);
            };
        /**
         * @param {?=} value
         * @param {?=} value2
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.val = /**
         * @param {?=} value
         * @param {?=} value2
         * @return {?}
         */
            function (value, value2) {
                if (value !== undefined) {
                    return this.host.jqxDateTimeInput('val', value, value2);
                }
                else {
                    return this.host.jqxDateTimeInput('val');
                }
            };
        /**
         * @return {?}
         */
        jqxDateTimeInputComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); });
                this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); _this.onChangeCallback(_this.host.val()); });
                this.host.on('keyup', function () { _this.onChangeCallback(_this.host.val()); });
            };
        jqxDateTimeInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxDateTimeInput',
                        template: '<input [(ngModel)]="ngValue">',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxDateTimeInputComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxDateTimeInputComponent.propDecorators = {
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrAllowNullDate: [{ type: core.Input, args: ['allowNullDate',] }],
            attrAllowKeyboardDelete: [{ type: core.Input, args: ['allowKeyboardDelete',] }],
            attrClearString: [{ type: core.Input, args: ['clearString',] }],
            attrCulture: [{ type: core.Input, args: ['culture',] }],
            attrCloseDelay: [{ type: core.Input, args: ['closeDelay',] }],
            attrCloseCalendarAfterSelection: [{ type: core.Input, args: ['closeCalendarAfterSelection',] }],
            attrDropDownHorizontalAlignment: [{ type: core.Input, args: ['dropDownHorizontalAlignment',] }],
            attrDropDownVerticalAlignment: [{ type: core.Input, args: ['dropDownVerticalAlignment',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEnableBrowserBoundsDetection: [{ type: core.Input, args: ['enableBrowserBoundsDetection',] }],
            attrEnableAbsoluteSelection: [{ type: core.Input, args: ['enableAbsoluteSelection',] }],
            attrFirstDayOfWeek: [{ type: core.Input, args: ['firstDayOfWeek',] }],
            attrFormatString: [{ type: core.Input, args: ['formatString',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrOpenDelay: [{ type: core.Input, args: ['openDelay',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrPopupZIndex: [{ type: core.Input, args: ['popupZIndex',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrReadonly: [{ type: core.Input, args: ['readonly',] }],
            attrShowFooter: [{ type: core.Input, args: ['showFooter',] }],
            attrSelectionMode: [{ type: core.Input, args: ['selectionMode',] }],
            attrShowWeekNumbers: [{ type: core.Input, args: ['showWeekNumbers',] }],
            attrShowTimeButton: [{ type: core.Input, args: ['showTimeButton',] }],
            attrShowCalendarButton: [{ type: core.Input, args: ['showCalendarButton',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTextAlign: [{ type: core.Input, args: ['textAlign',] }],
            attrTodayString: [{ type: core.Input, args: ['todayString',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }],
            onClose: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onTextchanged: [{ type: core.Output }],
            onValueChanged: [{ type: core.Output }]
        };
        return jqxDateTimeInputComponent;
    }()); //jqxDateTimeInputComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxDateTimeInputModule = /** @class */ (function () {
        function jqxDateTimeInputModule() {
        }
        jqxDateTimeInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxDateTimeInputComponent],
                        exports: [jqxDateTimeInputComponent]
                    },] }
        ];
        return jqxDateTimeInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxDateTimeInputComponent = jqxDateTimeInputComponent;
    exports.jqxDateTimeInputModule = jqxDateTimeInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

