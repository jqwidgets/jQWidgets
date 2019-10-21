import '../jqwidgets/jqxcore';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxcalendar';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var noop = function () { };
var ɵ0 = noop;
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxCalendarComponent; }),
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
    jqxCalendarComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxCalendarComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    jqxCalendarComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxCalendarComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxCalendarComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxCalendarComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxCalendarComponent.prototype.createComponent = function (options) {
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
    jqxCalendarComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxCalendarComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxCalendarComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxCalendarComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxCalendarComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxCalendarComponent.prototype.setOptions = function (options) {
        this.host.jqxCalendar('setOptions', options);
    };
    // jqxCalendarComponent properties
    jqxCalendarComponent.prototype.backText = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('backText', arg);
        }
        else {
            return this.host.jqxCalendar('backText');
        }
    };
    jqxCalendarComponent.prototype.columnHeaderHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('columnHeaderHeight', arg);
        }
        else {
            return this.host.jqxCalendar('columnHeaderHeight');
        }
    };
    jqxCalendarComponent.prototype.clearString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('clearString', arg);
        }
        else {
            return this.host.jqxCalendar('clearString');
        }
    };
    jqxCalendarComponent.prototype.culture = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('culture', arg);
        }
        else {
            return this.host.jqxCalendar('culture');
        }
    };
    jqxCalendarComponent.prototype.dayNameFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('dayNameFormat', arg);
        }
        else {
            return this.host.jqxCalendar('dayNameFormat');
        }
    };
    jqxCalendarComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('disabled', arg);
        }
        else {
            return this.host.jqxCalendar('disabled');
        }
    };
    jqxCalendarComponent.prototype.enableWeekend = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableWeekend', arg);
        }
        else {
            return this.host.jqxCalendar('enableWeekend');
        }
    };
    jqxCalendarComponent.prototype.enableViews = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableViews', arg);
        }
        else {
            return this.host.jqxCalendar('enableViews');
        }
    };
    jqxCalendarComponent.prototype.enableOtherMonthDays = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('enableOtherMonthDays');
        }
    };
    jqxCalendarComponent.prototype.enableFastNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableFastNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableFastNavigation');
        }
    };
    jqxCalendarComponent.prototype.enableHover = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableHover', arg);
        }
        else {
            return this.host.jqxCalendar('enableHover');
        }
    };
    jqxCalendarComponent.prototype.enableAutoNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableAutoNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableAutoNavigation');
        }
    };
    jqxCalendarComponent.prototype.enableTooltips = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableTooltips', arg);
        }
        else {
            return this.host.jqxCalendar('enableTooltips');
        }
    };
    jqxCalendarComponent.prototype.forwardText = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('forwardText', arg);
        }
        else {
            return this.host.jqxCalendar('forwardText');
        }
    };
    jqxCalendarComponent.prototype.firstDayOfWeek = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxCalendar('firstDayOfWeek');
        }
    };
    jqxCalendarComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('height', arg);
        }
        else {
            return this.host.jqxCalendar('height');
        }
    };
    jqxCalendarComponent.prototype.min = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('min', arg);
        }
        else {
            return this.host.jqxCalendar('min');
        }
    };
    jqxCalendarComponent.prototype.max = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('max', arg);
        }
        else {
            return this.host.jqxCalendar('max');
        }
    };
    jqxCalendarComponent.prototype.navigationDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('navigationDelay', arg);
        }
        else {
            return this.host.jqxCalendar('navigationDelay');
        }
    };
    jqxCalendarComponent.prototype.rowHeaderWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rowHeaderWidth', arg);
        }
        else {
            return this.host.jqxCalendar('rowHeaderWidth');
        }
    };
    jqxCalendarComponent.prototype.readOnly = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('readOnly', arg);
        }
        else {
            return this.host.jqxCalendar('readOnly');
        }
    };
    jqxCalendarComponent.prototype.restrictedDates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('restrictedDates', arg);
        }
        else {
            return this.host.jqxCalendar('restrictedDates');
        }
    };
    jqxCalendarComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rtl', arg);
        }
        else {
            return this.host.jqxCalendar('rtl');
        }
    };
    jqxCalendarComponent.prototype.stepMonths = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('stepMonths', arg);
        }
        else {
            return this.host.jqxCalendar('stepMonths');
        }
    };
    jqxCalendarComponent.prototype.showWeekNumbers = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxCalendar('showWeekNumbers');
        }
    };
    jqxCalendarComponent.prototype.showDayNames = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showDayNames', arg);
        }
        else {
            return this.host.jqxCalendar('showDayNames');
        }
    };
    jqxCalendarComponent.prototype.showOtherMonthDays = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('showOtherMonthDays');
        }
    };
    jqxCalendarComponent.prototype.showFooter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showFooter', arg);
        }
        else {
            return this.host.jqxCalendar('showFooter');
        }
    };
    jqxCalendarComponent.prototype.selectionMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('selectionMode', arg);
        }
        else {
            return this.host.jqxCalendar('selectionMode');
        }
    };
    jqxCalendarComponent.prototype.specialDates = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('specialDates', arg);
        }
        else {
            return this.host.jqxCalendar('specialDates');
        }
    };
    jqxCalendarComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('theme', arg);
        }
        else {
            return this.host.jqxCalendar('theme');
        }
    };
    jqxCalendarComponent.prototype.titleHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleHeight', arg);
        }
        else {
            return this.host.jqxCalendar('titleHeight');
        }
    };
    jqxCalendarComponent.prototype.titleFormat = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleFormat', arg);
        }
        else {
            return this.host.jqxCalendar('titleFormat');
        }
    };
    jqxCalendarComponent.prototype.todayString = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('todayString', arg);
        }
        else {
            return this.host.jqxCalendar('todayString');
        }
    };
    jqxCalendarComponent.prototype.value = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('value', arg);
        }
        else {
            return this.host.jqxCalendar('value');
        }
    };
    jqxCalendarComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('width', arg);
        }
        else {
            return this.host.jqxCalendar('width');
        }
    };
    // jqxCalendarComponent functions
    jqxCalendarComponent.prototype.clear = function () {
        this.host.jqxCalendar('clear');
    };
    jqxCalendarComponent.prototype.destroy = function () {
        this.host.jqxCalendar('destroy');
    };
    jqxCalendarComponent.prototype.focus = function () {
        this.host.jqxCalendar('focus');
    };
    jqxCalendarComponent.prototype.addSpecialDate = function (date, specialDateClass, text) {
        this.host.jqxCalendar('addSpecialDate', date, specialDateClass, text);
    };
    jqxCalendarComponent.prototype.getMinDate = function () {
        return this.host.jqxCalendar('getMinDate');
    };
    jqxCalendarComponent.prototype.getMaxDate = function () {
        return this.host.jqxCalendar('getMaxDate');
    };
    jqxCalendarComponent.prototype.getDate = function () {
        return this.host.jqxCalendar('getDate');
    };
    jqxCalendarComponent.prototype.getRange = function () {
        return this.host.jqxCalendar('getRange');
    };
    jqxCalendarComponent.prototype.navigateForward = function (months) {
        this.host.jqxCalendar('navigateForward', months);
    };
    jqxCalendarComponent.prototype.navigateBackward = function (months) {
        this.host.jqxCalendar('navigateBackward', months);
    };
    jqxCalendarComponent.prototype.render = function () {
        this.host.jqxCalendar('render');
    };
    jqxCalendarComponent.prototype.refresh = function () {
        this.host.jqxCalendar('refresh');
    };
    jqxCalendarComponent.prototype.setMinDate = function (date) {
        this.host.jqxCalendar('setMinDate', date);
    };
    jqxCalendarComponent.prototype.setMaxDate = function (date) {
        this.host.jqxCalendar('setMaxDate', date);
    };
    jqxCalendarComponent.prototype.setDate = function (date) {
        this.host.jqxCalendar('setDate', date);
    };
    jqxCalendarComponent.prototype.setRange = function (date, date2) {
        this.host.jqxCalendar('setRange', date, date2);
    };
    jqxCalendarComponent.prototype.today = function () {
        this.host.jqxCalendar('today');
    };
    jqxCalendarComponent.prototype.val = function (value, value2) {
        if (value !== undefined) {
            return this.host.jqxCalendar('val', value, value2);
        }
        else {
            return this.host.jqxCalendar('val');
        }
    };
    ;
    jqxCalendarComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('backButtonClick', function (eventData) { _this.onBackButtonClick.emit(eventData); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.on('nextButtonClick', function (eventData) { _this.onNextButtonClick.emit(eventData); });
        this.host.on('viewChange', function (eventData) { _this.onViewChange.emit(eventData); });
    };
    jqxCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('backText'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrBackText", void 0);
    tslib_1.__decorate([
        Input('columnHeaderHeight'),
        tslib_1.__metadata("design:type", Number)
    ], jqxCalendarComponent.prototype, "attrColumnHeaderHeight", void 0);
    tslib_1.__decorate([
        Input('clearString'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrClearString", void 0);
    tslib_1.__decorate([
        Input('culture'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrCulture", void 0);
    tslib_1.__decorate([
        Input('dayNameFormat'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrDayNameFormat", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('enableWeekend'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrEnableWeekend", void 0);
    tslib_1.__decorate([
        Input('enableViews'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrEnableViews", void 0);
    tslib_1.__decorate([
        Input('enableOtherMonthDays'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrEnableOtherMonthDays", void 0);
    tslib_1.__decorate([
        Input('enableFastNavigation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrEnableFastNavigation", void 0);
    tslib_1.__decorate([
        Input('enableHover'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrEnableHover", void 0);
    tslib_1.__decorate([
        Input('enableAutoNavigation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrEnableAutoNavigation", void 0);
    tslib_1.__decorate([
        Input('enableTooltips'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrEnableTooltips", void 0);
    tslib_1.__decorate([
        Input('forwardText'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrForwardText", void 0);
    tslib_1.__decorate([
        Input('firstDayOfWeek'),
        tslib_1.__metadata("design:type", Number)
    ], jqxCalendarComponent.prototype, "attrFirstDayOfWeek", void 0);
    tslib_1.__decorate([
        Input('min'),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "attrMin", void 0);
    tslib_1.__decorate([
        Input('max'),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "attrMax", void 0);
    tslib_1.__decorate([
        Input('navigationDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxCalendarComponent.prototype, "attrNavigationDelay", void 0);
    tslib_1.__decorate([
        Input('rowHeaderWidth'),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "attrRowHeaderWidth", void 0);
    tslib_1.__decorate([
        Input('readOnly'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrReadOnly", void 0);
    tslib_1.__decorate([
        Input('restrictedDates'),
        tslib_1.__metadata("design:type", Array)
    ], jqxCalendarComponent.prototype, "attrRestrictedDates", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('stepMonths'),
        tslib_1.__metadata("design:type", Number)
    ], jqxCalendarComponent.prototype, "attrStepMonths", void 0);
    tslib_1.__decorate([
        Input('showWeekNumbers'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrShowWeekNumbers", void 0);
    tslib_1.__decorate([
        Input('showDayNames'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrShowDayNames", void 0);
    tslib_1.__decorate([
        Input('showOtherMonthDays'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrShowOtherMonthDays", void 0);
    tslib_1.__decorate([
        Input('showFooter'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "attrShowFooter", void 0);
    tslib_1.__decorate([
        Input('selectionMode'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrSelectionMode", void 0);
    tslib_1.__decorate([
        Input('specialDates'),
        tslib_1.__metadata("design:type", Array)
    ], jqxCalendarComponent.prototype, "attrSpecialDates", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('titleHeight'),
        tslib_1.__metadata("design:type", Number)
    ], jqxCalendarComponent.prototype, "attrTitleHeight", void 0);
    tslib_1.__decorate([
        Input('titleFormat'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrTitleFormat", void 0);
    tslib_1.__decorate([
        Input('todayString'),
        tslib_1.__metadata("design:type", String)
    ], jqxCalendarComponent.prototype, "attrTodayString", void 0);
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Date)
    ], jqxCalendarComponent.prototype, "attrValue", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxCalendarComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "onBackButtonClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "onChange", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "onNextButtonClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxCalendarComponent.prototype, "onViewChange", void 0);
    jqxCalendarComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxCalendar',
            template: '<div><ng-content></ng-content></div>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxCalendarComponent);
    return jqxCalendarComponent;
}()); //jqxCalendarComponent
export { jqxCalendarComponent };
export { ɵ0 };
