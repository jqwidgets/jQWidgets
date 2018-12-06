import * as jqxcore from '../../jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets/jqxcalendar';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var noop = function () { };
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxDateTimeInputComponent; }),
    multi: true
};
var jqxDateTimeInputComponent = /** @class */ (function () {
    function jqxDateTimeInputComponent(containerElement) {
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
         */
        function () {
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
         */
        function (value) {
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
        { type: Component, args: [{
                    selector: 'jqxDateTimeInput',
                    template: '<input [(ngModel)]="ngValue">',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxDateTimeInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [
                        FormsModule
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

export { jqxDateTimeInputComponent, jqxDateTimeInputModule };

