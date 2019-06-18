import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as globalize from '../../jqwidgets-scripts/jqwidgets/globalization/globalize';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxdatetimeinput from '../../jqwidgets-scripts/jqwidgets/jqxdatetimeinput';
import * as jqxcalendar from '../../jqwidgets-scripts/jqwidgets/jqxcalendar';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () { };
var ɵ0 = noop;
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
    jqxDateTimeInputComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxDateTimeInputComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    jqxDateTimeInputComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDateTimeInputComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDateTimeInputComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxDateTimeInputComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxDateTimeInputComponent.prototype.createComponent = function (options) {
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
    jqxDateTimeInputComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDateTimeInputComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxDateTimeInputComponent.prototype, "ngValue", {
        get: function () {
            if (this.widgetObject) {
                var value = this.host.val();
                return value;
            }
            return '';
        },
        set: function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    jqxDateTimeInputComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.host.jqxDateTimeInput('val', value);
        }
    };
    jqxDateTimeInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxDateTimeInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxDateTimeInputComponent.prototype.setOptions = function (options) {
        this.host.jqxDateTimeInput('setOptions', options);
    };
    // jqxDateTimeInputComponent properties
    jqxDateTimeInputComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('animationType', arg);
        }
        else {
            return this.host.jqxDateTimeInput('animationType');
        }
    };
    jqxDateTimeInputComponent.prototype.allowNullDate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowNullDate', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowNullDate');
        }
    };
    jqxDateTimeInputComponent.prototype.allowKeyboardDelete = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowKeyboardDelete', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowKeyboardDelete');
        }
    };
    jqxDateTimeInputComponent.prototype.clearString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('clearString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('clearString');
        }
    };
    jqxDateTimeInputComponent.prototype.culture = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('culture', arg);
        }
        else {
            return this.host.jqxDateTimeInput('culture');
        }
    };
    jqxDateTimeInputComponent.prototype.closeDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeDelay');
        }
    };
    jqxDateTimeInputComponent.prototype.closeCalendarAfterSelection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeCalendarAfterSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeCalendarAfterSelection');
        }
    };
    jqxDateTimeInputComponent.prototype.dropDownHorizontalAlignment = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownHorizontalAlignment');
        }
    };
    jqxDateTimeInputComponent.prototype.dropDownVerticalAlignment = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownVerticalAlignment');
        }
    };
    jqxDateTimeInputComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('disabled', arg);
        }
        else {
            return this.host.jqxDateTimeInput('disabled');
        }
    };
    jqxDateTimeInputComponent.prototype.enableBrowserBoundsDetection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableBrowserBoundsDetection');
        }
    };
    jqxDateTimeInputComponent.prototype.enableAbsoluteSelection = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableAbsoluteSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableAbsoluteSelection');
        }
    };
    jqxDateTimeInputComponent.prototype.firstDayOfWeek = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxDateTimeInput('firstDayOfWeek');
        }
    };
    jqxDateTimeInputComponent.prototype.formatString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('formatString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('formatString');
        }
    };
    jqxDateTimeInputComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('height', arg);
        }
        else {
            return this.host.jqxDateTimeInput('height');
        }
    };
    jqxDateTimeInputComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('min', arg);
        }
        else {
            return this.host.jqxDateTimeInput('min');
        }
    };
    jqxDateTimeInputComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('max', arg);
        }
        else {
            return this.host.jqxDateTimeInput('max');
        }
    };
    jqxDateTimeInputComponent.prototype.openDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('openDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('openDelay');
        }
    };
    jqxDateTimeInputComponent.prototype.placeHolder = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('placeHolder', arg);
        }
        else {
            return this.host.jqxDateTimeInput('placeHolder');
        }
    };
    jqxDateTimeInputComponent.prototype.popupZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxDateTimeInput('popupZIndex');
        }
    };
    jqxDateTimeInputComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('rtl', arg);
        }
        else {
            return this.host.jqxDateTimeInput('rtl');
        }
    };
    jqxDateTimeInputComponent.prototype.readonly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('readonly', arg);
        }
        else {
            return this.host.jqxDateTimeInput('readonly');
        }
    };
    jqxDateTimeInputComponent.prototype.showFooter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showFooter', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showFooter');
        }
    };
    jqxDateTimeInputComponent.prototype.selectionMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('selectionMode', arg);
        }
        else {
            return this.host.jqxDateTimeInput('selectionMode');
        }
    };
    jqxDateTimeInputComponent.prototype.showWeekNumbers = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showWeekNumbers');
        }
    };
    jqxDateTimeInputComponent.prototype.showTimeButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showTimeButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showTimeButton');
        }
    };
    jqxDateTimeInputComponent.prototype.showCalendarButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showCalendarButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showCalendarButton');
        }
    };
    jqxDateTimeInputComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('theme', arg);
        }
        else {
            return this.host.jqxDateTimeInput('theme');
        }
    };
    jqxDateTimeInputComponent.prototype.template = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('template', arg);
        }
        else {
            return this.host.jqxDateTimeInput('template');
        }
    };
    jqxDateTimeInputComponent.prototype.textAlign = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('textAlign', arg);
        }
        else {
            return this.host.jqxDateTimeInput('textAlign');
        }
    };
    jqxDateTimeInputComponent.prototype.todayString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('todayString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('todayString');
        }
    };
    jqxDateTimeInputComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('value', arg);
        }
        else {
            return this.host.jqxDateTimeInput('value');
        }
    };
    jqxDateTimeInputComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('width', arg);
        }
        else {
            return this.host.jqxDateTimeInput('width');
        }
    };
    // jqxDateTimeInputComponent functions
    jqxDateTimeInputComponent.prototype.close = function () {
        this.host.jqxDateTimeInput('close');
    };
    jqxDateTimeInputComponent.prototype.destroy = function () {
        this.host.jqxDateTimeInput('destroy');
    };
    jqxDateTimeInputComponent.prototype.focus = function () {
        this.host.jqxDateTimeInput('focus');
    };
    jqxDateTimeInputComponent.prototype.getRange = function () {
        return this.host.jqxDateTimeInput('getRange');
    };
    jqxDateTimeInputComponent.prototype.getText = function () {
        return this.host.jqxDateTimeInput('getText');
    };
    jqxDateTimeInputComponent.prototype.getDate = function () {
        return this.host.jqxDateTimeInput('getDate');
    };
    jqxDateTimeInputComponent.prototype.getMaxDate = function () {
        return this.host.jqxDateTimeInput('getMaxDate');
    };
    jqxDateTimeInputComponent.prototype.getMinDate = function () {
        return this.host.jqxDateTimeInput('getMinDate');
    };
    jqxDateTimeInputComponent.prototype.open = function () {
        this.host.jqxDateTimeInput('open');
    };
    jqxDateTimeInputComponent.prototype.setRange = function (date, date2) {
        this.host.jqxDateTimeInput('setRange', date, date2);
    };
    jqxDateTimeInputComponent.prototype.setMinDate = function (date) {
        this.host.jqxDateTimeInput('setMinDate', date);
    };
    jqxDateTimeInputComponent.prototype.setMaxDate = function (date) {
        this.host.jqxDateTimeInput('setMaxDate', date);
    };
    jqxDateTimeInputComponent.prototype.setDate = function (date) {
        this.host.jqxDateTimeInput('setDate', date);
    };
    jqxDateTimeInputComponent.prototype.val = function (value, value2) {
        if (value !== undefined) {
            return this.host.jqxDateTimeInput('val', value, value2);
        }
        else {
            return this.host.jqxDateTimeInput('val');
        }
    };
    ;
    jqxDateTimeInputComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('textchanged', function (eventData) { _this.onTextchanged.emit(eventData); });
        this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('keyup', function () { _this.onChangeCallback(_this.host.val()); });
    };
    tslib_1.__decorate([
        Input('animationType'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrAnimationType", void 0);
    tslib_1.__decorate([
        Input('allowNullDate'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrAllowNullDate", void 0);
    tslib_1.__decorate([
        Input('allowKeyboardDelete'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrAllowKeyboardDelete", void 0);
    tslib_1.__decorate([
        Input('clearString'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrClearString", void 0);
    tslib_1.__decorate([
        Input('culture'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrCulture", void 0);
    tslib_1.__decorate([
        Input('closeDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxDateTimeInputComponent.prototype, "attrCloseDelay", void 0);
    tslib_1.__decorate([
        Input('closeCalendarAfterSelection'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrCloseCalendarAfterSelection", void 0);
    tslib_1.__decorate([
        Input('dropDownHorizontalAlignment'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
    tslib_1.__decorate([
        Input('dropDownVerticalAlignment'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrDropDownVerticalAlignment", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('enableBrowserBoundsDetection'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
    tslib_1.__decorate([
        Input('enableAbsoluteSelection'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrEnableAbsoluteSelection", void 0);
    tslib_1.__decorate([
        Input('firstDayOfWeek'),
        tslib_1.__metadata("design:type", Number)
    ], jqxDateTimeInputComponent.prototype, "attrFirstDayOfWeek", void 0);
    tslib_1.__decorate([
        Input('formatString'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrFormatString", void 0);
    tslib_1.__decorate([
        Input('min'),
        tslib_1.__metadata("design:type", Date)
    ], jqxDateTimeInputComponent.prototype, "attrMin", void 0);
    tslib_1.__decorate([
        Input('max'),
        tslib_1.__metadata("design:type", Date)
    ], jqxDateTimeInputComponent.prototype, "attrMax", void 0);
    tslib_1.__decorate([
        Input('openDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxDateTimeInputComponent.prototype, "attrOpenDelay", void 0);
    tslib_1.__decorate([
        Input('placeHolder'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrPlaceHolder", void 0);
    tslib_1.__decorate([
        Input('popupZIndex'),
        tslib_1.__metadata("design:type", Number)
    ], jqxDateTimeInputComponent.prototype, "attrPopupZIndex", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('readonly'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrReadonly", void 0);
    tslib_1.__decorate([
        Input('showFooter'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrShowFooter", void 0);
    tslib_1.__decorate([
        Input('selectionMode'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrSelectionMode", void 0);
    tslib_1.__decorate([
        Input('showWeekNumbers'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrShowWeekNumbers", void 0);
    tslib_1.__decorate([
        Input('showTimeButton'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrShowTimeButton", void 0);
    tslib_1.__decorate([
        Input('showCalendarButton'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "attrShowCalendarButton", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('template'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrTemplate", void 0);
    tslib_1.__decorate([
        Input('textAlign'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrTextAlign", void 0);
    tslib_1.__decorate([
        Input('todayString'),
        tslib_1.__metadata("design:type", String)
    ], jqxDateTimeInputComponent.prototype, "attrTodayString", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Date)
    ], jqxDateTimeInputComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDateTimeInputComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onOpen", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onTextchanged", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDateTimeInputComponent.prototype, "onValueChanged", void 0);
    jqxDateTimeInputComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxDateTimeInput',
            template: '<input [(ngModel)]="ngValue">',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxDateTimeInputComponent);
    return jqxDateTimeInputComponent;
}()); //jqxDateTimeInputComponent
export { jqxDateTimeInputComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkYXRldGltZWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGRhdGV0aW1laW5wdXQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGRhdGV0aW1laW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xKLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxJQUFNLElBQUksR0FBRyxjQUFRLENBQUMsQ0FBQzs7QUFHdkIsSUFBTSxtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQTtBQVNEO0lBOENHLG1DQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMscUJBQXFCLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsNkJBQTZCLEVBQUMsNkJBQTZCLEVBQUMsMkJBQTJCLEVBQUMsVUFBVSxFQUFDLDhCQUE4QixFQUFDLHlCQUF5QixFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsZ0JBQWdCLEVBQUMsb0JBQW9CLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsYUFBYSxF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Q0FnaEJyQztJQUFELGdDQUFDO0NBQUEsQUFoaEJELElBZ2hCQyxDQUFDLDJCQUEyQjtTQWhoQmhCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeERhdGVUaW1lSW5wdXRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4RGF0ZVRpbWVJbnB1dCcsXG4gICAgdGVtcGxhdGU6ICc8aW5wdXQgWyhuZ01vZGVsKV09XCJuZ1ZhbHVlXCI+JyxcbiAgICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhEYXRlVGltZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyBcbntcbiAgIEBJbnB1dCgnYW5pbWF0aW9uVHlwZScpIGF0dHJBbmltYXRpb25UeXBlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2FsbG93TnVsbERhdGUnKSBhdHRyQWxsb3dOdWxsRGF0ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWxsb3dLZXlib2FyZERlbGV0ZScpIGF0dHJBbGxvd0tleWJvYXJkRGVsZXRlOiBib29sZWFuO1xuICAgQElucHV0KCdjbGVhclN0cmluZycpIGF0dHJDbGVhclN0cmluZzogc3RyaW5nO1xuICAgQElucHV0KCdjdWx0dXJlJykgYXR0ckN1bHR1cmU6IHN0cmluZztcbiAgIEBJbnB1dCgnY2xvc2VEZWxheScpIGF0dHJDbG9zZURlbGF5OiBudW1iZXI7XG4gICBASW5wdXQoJ2Nsb3NlQ2FsZW5kYXJBZnRlclNlbGVjdGlvbicpIGF0dHJDbG9zZUNhbGVuZGFyQWZ0ZXJTZWxlY3Rpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2Ryb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudCcpIGF0dHJEcm9wRG93bkhvcml6b250YWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgIEBJbnB1dCgnZHJvcERvd25WZXJ0aWNhbEFsaWdubWVudCcpIGF0dHJEcm9wRG93blZlcnRpY2FsQWxpZ25tZW50OiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVCcm93c2VyQm91bmRzRGV0ZWN0aW9uJykgYXR0ckVuYWJsZUJyb3dzZXJCb3VuZHNEZXRlY3Rpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUFic29sdXRlU2VsZWN0aW9uJykgYXR0ckVuYWJsZUFic29sdXRlU2VsZWN0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdmaXJzdERheU9mV2VlaycpIGF0dHJGaXJzdERheU9mV2VlazogbnVtYmVyO1xuICAgQElucHV0KCdmb3JtYXRTdHJpbmcnKSBhdHRyRm9ybWF0U3RyaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ21pbicpIGF0dHJNaW46IERhdGU7XG4gICBASW5wdXQoJ21heCcpIGF0dHJNYXg6IERhdGU7XG4gICBASW5wdXQoJ29wZW5EZWxheScpIGF0dHJPcGVuRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgncGxhY2VIb2xkZXInKSBhdHRyUGxhY2VIb2xkZXI6IHN0cmluZztcbiAgIEBJbnB1dCgncG9wdXBaSW5kZXgnKSBhdHRyUG9wdXBaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVhZG9ubHknKSBhdHRyUmVhZG9ubHk6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dGb290ZXInKSBhdHRyU2hvd0Zvb3RlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2VsZWN0aW9uTW9kZScpIGF0dHJTZWxlY3Rpb25Nb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Nob3dXZWVrTnVtYmVycycpIGF0dHJTaG93V2Vla051bWJlcnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dUaW1lQnV0dG9uJykgYXR0clNob3dUaW1lQnV0dG9uOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93Q2FsZW5kYXJCdXR0b24nKSBhdHRyU2hvd0NhbGVuZGFyQnV0dG9uOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd0ZW1wbGF0ZScpIGF0dHJUZW1wbGF0ZTogc3RyaW5nO1xuICAgQElucHV0KCd0ZXh0QWxpZ24nKSBhdHRyVGV4dEFsaWduOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RvZGF5U3RyaW5nJykgYXR0clRvZGF5U3RyaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ3ZhbHVlJykgYXR0clZhbHVlOiBEYXRlIHwgbnVsbDtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbmltYXRpb25UeXBlJywnYWxsb3dOdWxsRGF0ZScsJ2FsbG93S2V5Ym9hcmREZWxldGUnLCdjbGVhclN0cmluZycsJ2N1bHR1cmUnLCdjbG9zZURlbGF5JywnY2xvc2VDYWxlbmRhckFmdGVyU2VsZWN0aW9uJywnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50JywnZHJvcERvd25WZXJ0aWNhbEFsaWdubWVudCcsJ2Rpc2FibGVkJywnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicsJ2VuYWJsZUFic29sdXRlU2VsZWN0aW9uJywnZmlyc3REYXlPZldlZWsnLCdmb3JtYXRTdHJpbmcnLCdoZWlnaHQnLCdtaW4nLCdtYXgnLCdvcGVuRGVsYXknLCdwbGFjZUhvbGRlcicsJ3BvcHVwWkluZGV4JywncnRsJywncmVhZG9ubHknLCdzaG93Rm9vdGVyJywnc2VsZWN0aW9uTW9kZScsJ3Nob3dXZWVrTnVtYmVycycsJ3Nob3dUaW1lQnV0dG9uJywnc2hvd0NhbGVuZGFyQnV0dG9uJywndGhlbWUnLCd0ZW1wbGF0ZScsJ3RleHRBbGlnbicsJ3RvZGF5U3RyaW5nJywndmFsdWUnLCd3aWR0aCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhEYXRlVGltZUlucHV0O1xuXG4gICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhEYXRlVGltZUlucHV0Jywgb3B0aW9ucyk7XG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLndpZGdldE9iamVjdFsnaG9zdCddO1xuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBnZXQgbmdWYWx1ZSgpOiBhbnkge1xuICAgICAgIGlmICh0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaG9zdC52YWwoKTtcbiAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gJyc7XG4gICB9XG5cbiAgIHNldCBuZ1ZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICBpZiAodGhpcy53aWRnZXRPYmplY3QpIHtcbiAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICB9XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgIGlmKHRoaXMud2lkZ2V0T2JqZWN0KSB7XG4gICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd2YWwnLCB2YWx1ZSk7XG4gICAgICAgfVxuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhEYXRlVGltZUlucHV0Q29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGFuaW1hdGlvblR5cGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdhbmltYXRpb25UeXBlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdhbmltYXRpb25UeXBlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFsbG93TnVsbERhdGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2FsbG93TnVsbERhdGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2FsbG93TnVsbERhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWxsb3dLZXlib2FyZERlbGV0ZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnYWxsb3dLZXlib2FyZERlbGV0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnYWxsb3dLZXlib2FyZERlbGV0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbGVhclN0cmluZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2NsZWFyU3RyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdjbGVhclN0cmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjdWx0dXJlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnY3VsdHVyZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnY3VsdHVyZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZURlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnY2xvc2VEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnY2xvc2VEZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZUNhbGVuZGFyQWZ0ZXJTZWxlY3Rpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Nsb3NlQ2FsZW5kYXJBZnRlclNlbGVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnY2xvc2VDYWxlbmRhckFmdGVyU2VsZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Ryb3BEb3duSG9yaXpvbnRhbEFsaWdubWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZHJvcERvd25Ib3Jpem9udGFsQWxpZ25tZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BEb3duVmVydGljYWxBbGlnbm1lbnQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdkcm9wRG93blZlcnRpY2FsQWxpZ25tZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZW5hYmxlQnJvd3NlckJvdW5kc0RldGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVBYnNvbHV0ZVNlbGVjdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZW5hYmxlQWJzb2x1dGVTZWxlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2VuYWJsZUFic29sdXRlU2VsZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpcnN0RGF5T2ZXZWVrKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZmlyc3REYXlPZldlZWsnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2ZpcnN0RGF5T2ZXZWVrJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZvcm1hdFN0cmluZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Zvcm1hdFN0cmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZm9ybWF0U3RyaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbihhcmc/OiBEYXRlKTogRGF0ZSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnbWluJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdtaW4nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4KGFyZz86IERhdGUpOiBEYXRlIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdtYXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ21heCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBvcGVuRGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdvcGVuRGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ29wZW5EZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwbGFjZUhvbGRlcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3BsYWNlSG9sZGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdwbGFjZUhvbGRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBwb3B1cFpJbmRleChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3BvcHVwWkluZGV4JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdwb3B1cFpJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWRvbmx5KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdyZWFkb25seScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgncmVhZG9ubHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Zvb3Rlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2hvd0Zvb3RlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2hvd0Zvb3RlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3Rpb25Nb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2VsZWN0aW9uTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2VsZWN0aW9uTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93V2Vla051bWJlcnMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3Nob3dXZWVrTnVtYmVycycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2hvd1dlZWtOdW1iZXJzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dUaW1lQnV0dG9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdzaG93VGltZUJ1dHRvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2hvd1RpbWVCdXR0b24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0NhbGVuZGFyQnV0dG9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdzaG93Q2FsZW5kYXJCdXR0b24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3Nob3dDYWxlbmRhckJ1dHRvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0ZW1wbGF0ZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3RlbXBsYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd0ZW1wbGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0ZXh0QWxpZ24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd0ZXh0QWxpZ24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3RleHRBbGlnbicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2RheVN0cmluZyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3RvZGF5U3RyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd0b2RheVN0cmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZShhcmc/OiBEYXRlKTogRGF0ZSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgndmFsdWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4RGF0ZVRpbWVJbnB1dENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2Nsb3NlJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBmb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdmb2N1cycpO1xuICAgfVxuXG4gICBnZXRSYW5nZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdnZXRSYW5nZScpO1xuICAgfVxuXG4gICBnZXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2dldFRleHQnKTtcbiAgIH1cblxuICAgZ2V0RGF0ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdnZXREYXRlJyk7XG4gICB9XG5cbiAgIGdldE1heERhdGUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnZ2V0TWF4RGF0ZScpO1xuICAgfVxuXG4gICBnZXRNaW5EYXRlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ2dldE1pbkRhdGUnKTtcbiAgIH1cblxuICAgb3BlbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdvcGVuJyk7XG4gICB9XG5cbiAgIHNldFJhbmdlKGRhdGU6IGFueSwgZGF0ZTI6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3NldFJhbmdlJywgZGF0ZSwgZGF0ZTIpO1xuICAgfVxuXG4gICBzZXRNaW5EYXRlKGRhdGU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3NldE1pbkRhdGUnLCBkYXRlKTtcbiAgIH1cblxuICAgc2V0TWF4RGF0ZShkYXRlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCdzZXRNYXhEYXRlJywgZGF0ZSk7XG4gICB9XG5cbiAgIHNldERhdGUoZGF0ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RGF0ZVRpbWVJbnB1dCgnc2V0RGF0ZScsIGRhdGUpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBhbnksIHZhbHVlMj86IGFueSk6IGFueSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEYXRlVGltZUlucHV0KCd2YWwnLCB2YWx1ZSwgdmFsdWUyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERhdGVUaW1lSW5wdXQoJ3ZhbCcpO1xuICAgICAgfVxuICAgfTtcblxuXG4gICAvLyBqcXhEYXRlVGltZUlucHV0Q29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVGV4dGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNoYW5nZS5lbWl0KGV2ZW50RGF0YSk7IHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmhvc3QudmFsKCkpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNsb3NlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ29wZW4nLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk9wZW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndGV4dGNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblRleHRjaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3ZhbHVlQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVmFsdWVDaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaG9zdC52YWwoKSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdrZXl1cCcsICgpID0+IHsgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuaG9zdC52YWwoKSk7IH0pO1xuICAgfVxuXG59IC8vanF4RGF0ZVRpbWVJbnB1dENvbXBvbmVudFxuIl19