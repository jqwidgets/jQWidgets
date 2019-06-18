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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhjYWxlbmRhci8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Y2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQTRCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xKLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxJQUFNLElBQUksR0FBRyxjQUFRLENBQUMsQ0FBQzs7QUFHdkIsSUFBTSxtQ0FBbUMsR0FBUTtJQUM3QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQTtBQVNEO0lBaURHLDhCQUFZLGdCQUE0QjtRQVZsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFVBQVUsRUFBQyxvQkFBb0IsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQyxzQkFBc0IsRUFBQyxzQkFBc0IsRUFBQyxhQUFhLEVBQUMsc0JBQXNCLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixFQUFDLGNBQWMsRUFBQyxvQkFBb0IsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFD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d0M7SUFDdkM7UUFBVCxNQUFNLEVBQUU7OzBEQUErQjtJQUM5QjtRQUFULE1BQU0sRUFBRTs7bUVBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFOzs4REFBbUM7SUFoaUJsQyxvQkFBb0I7UUFQaEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHNDQUFzQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztZQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDO2lEQW1EK0IsVUFBVTtPQWpEOUIsb0JBQW9CLENBeWlCaEM7SUFBRCwyQkFBQztDQUFBLEFBemlCRCxJQXlpQkMsQ0FBQyxzQkFBc0I7U0F6aUJYLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGpxeENhbGVuZGFyQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeENhbGVuZGFyJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PicsXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MganF4Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIFxue1xuICAgQElucHV0KCdiYWNrVGV4dCcpIGF0dHJCYWNrVGV4dDogc3RyaW5nO1xuICAgQElucHV0KCdjb2x1bW5IZWFkZXJIZWlnaHQnKSBhdHRyQ29sdW1uSGVhZGVySGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2NsZWFyU3RyaW5nJykgYXR0ckNsZWFyU3RyaW5nOiBzdHJpbmc7XG4gICBASW5wdXQoJ2N1bHR1cmUnKSBhdHRyQ3VsdHVyZTogc3RyaW5nO1xuICAgQElucHV0KCdkYXlOYW1lRm9ybWF0JykgYXR0ckRheU5hbWVGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZVdlZWtlbmQnKSBhdHRyRW5hYmxlV2Vla2VuZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlVmlld3MnKSBhdHRyRW5hYmxlVmlld3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZU90aGVyTW9udGhEYXlzJykgYXR0ckVuYWJsZU90aGVyTW9udGhEYXlzOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVGYXN0TmF2aWdhdGlvbicpIGF0dHJFbmFibGVGYXN0TmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlSG92ZXInKSBhdHRyRW5hYmxlSG92ZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZUF1dG9OYXZpZ2F0aW9uJykgYXR0ckVuYWJsZUF1dG9OYXZpZ2F0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVUb29sdGlwcycpIGF0dHJFbmFibGVUb29sdGlwczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZm9yd2FyZFRleHQnKSBhdHRyRm9yd2FyZFRleHQ6IHN0cmluZztcbiAgIEBJbnB1dCgnZmlyc3REYXlPZldlZWsnKSBhdHRyRmlyc3REYXlPZldlZWs6IG51bWJlcjtcbiAgIEBJbnB1dCgnbWluJykgYXR0ck1pbjogYW55O1xuICAgQElucHV0KCdtYXgnKSBhdHRyTWF4OiBhbnk7XG4gICBASW5wdXQoJ25hdmlnYXRpb25EZWxheScpIGF0dHJOYXZpZ2F0aW9uRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgncm93SGVhZGVyV2lkdGgnKSBhdHRyUm93SGVhZGVyV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgncmVhZE9ubHknKSBhdHRyUmVhZE9ubHk6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Jlc3RyaWN0ZWREYXRlcycpIGF0dHJSZXN0cmljdGVkRGF0ZXM6IEFycmF5PERhdGU+O1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzdGVwTW9udGhzJykgYXR0clN0ZXBNb250aHM6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2hvd1dlZWtOdW1iZXJzJykgYXR0clNob3dXZWVrTnVtYmVyczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0RheU5hbWVzJykgYXR0clNob3dEYXlOYW1lczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd090aGVyTW9udGhEYXlzJykgYXR0clNob3dPdGhlck1vbnRoRGF5czogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0Zvb3RlcicpIGF0dHJTaG93Rm9vdGVyOiBib29sZWFuO1xuICAgQElucHV0KCdzZWxlY3Rpb25Nb2RlJykgYXR0clNlbGVjdGlvbk1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnc3BlY2lhbERhdGVzJykgYXR0clNwZWNpYWxEYXRlczogQXJyYXk8YW55PjtcbiAgIEBJbnB1dCgndGhlbWUnKSBhdHRyVGhlbWU6IHN0cmluZztcbiAgIEBJbnB1dCgndGl0bGVIZWlnaHQnKSBhdHRyVGl0bGVIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndGl0bGVGb3JtYXQnKSBhdHRyVGl0bGVGb3JtYXQ6IHN0cmluZztcbiAgIEBJbnB1dCgndG9kYXlTdHJpbmcnKSBhdHRyVG9kYXlTdHJpbmc6IHN0cmluZztcbiAgIEBJbnB1dCgndmFsdWUnKSBhdHRyVmFsdWU6IERhdGU7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYmFja1RleHQnLCdjb2x1bW5IZWFkZXJIZWlnaHQnLCdjbGVhclN0cmluZycsJ2N1bHR1cmUnLCdkYXlOYW1lRm9ybWF0JywnZGlzYWJsZWQnLCdlbmFibGVXZWVrZW5kJywnZW5hYmxlVmlld3MnLCdlbmFibGVPdGhlck1vbnRoRGF5cycsJ2VuYWJsZUZhc3ROYXZpZ2F0aW9uJywnZW5hYmxlSG92ZXInLCdlbmFibGVBdXRvTmF2aWdhdGlvbicsJ2VuYWJsZVRvb2x0aXBzJywnZm9yd2FyZFRleHQnLCdmaXJzdERheU9mV2VlaycsJ2hlaWdodCcsJ21pbicsJ21heCcsJ25hdmlnYXRpb25EZWxheScsJ3Jvd0hlYWRlcldpZHRoJywncmVhZE9ubHknLCdyZXN0cmljdGVkRGF0ZXMnLCdydGwnLCdzdGVwTW9udGhzJywnc2hvd1dlZWtOdW1iZXJzJywnc2hvd0RheU5hbWVzJywnc2hvd090aGVyTW9udGhEYXlzJywnc2hvd0Zvb3RlcicsJ3NlbGVjdGlvbk1vZGUnLCdzcGVjaWFsRGF0ZXMnLCd0aGVtZScsJ3RpdGxlSGVpZ2h0JywndGl0bGVGb3JtYXQnLCd0b2RheVN0cmluZycsJ3ZhbHVlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4Q2FsZW5kYXI7XG5cbiAgIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xuICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhDYWxlbmRhcih0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4Q2FsZW5kYXIodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhDYWxlbmRhcicsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICBpZih0aGlzLndpZGdldE9iamVjdCkge1xuICAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5ob3N0LnZhbCgpKTtcbiAgICAgICB9XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhDYWxlbmRhckNvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBiYWNrVGV4dChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdiYWNrVGV4dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2JhY2tUZXh0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbkhlYWRlckhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjb2x1bW5IZWFkZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjb2x1bW5IZWFkZXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xlYXJTdHJpbmcoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignY2xlYXJTdHJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjbGVhclN0cmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjdWx0dXJlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2N1bHR1cmUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjdWx0dXJlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRheU5hbWVGb3JtYXQoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZGF5TmFtZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2RheU5hbWVGb3JtYXQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZVdlZWtlbmQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVXZWVrZW5kJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlV2Vla2VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVWaWV3cyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZVZpZXdzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlVmlld3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlT3RoZXJNb250aERheXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVPdGhlck1vbnRoRGF5cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZU90aGVyTW9udGhEYXlzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUZhc3ROYXZpZ2F0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlRmFzdE5hdmlnYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVGYXN0TmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZUhvdmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlSG92ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZW5hYmxlQXV0b05hdmlnYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVBdXRvTmF2aWdhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2VuYWJsZUF1dG9OYXZpZ2F0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZVRvb2x0aXBzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZW5hYmxlVG9vbHRpcHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdlbmFibGVUb29sdGlwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3J3YXJkVGV4dChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdmb3J3YXJkVGV4dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2ZvcndhcmRUZXh0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpcnN0RGF5T2ZXZWVrKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2ZpcnN0RGF5T2ZXZWVrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZmlyc3REYXlPZldlZWsnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW4oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbWluJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbWluJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1heChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdtYXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdtYXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmF2aWdhdGlvbkRlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ25hdmlnYXRpb25EZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ25hdmlnYXRpb25EZWxheScpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dIZWFkZXJXaWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyb3dIZWFkZXJXaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Jvd0hlYWRlcldpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWRPbmx5KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncmVhZE9ubHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyZWFkT25seScpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXN0cmljdGVkRGF0ZXMoYXJnPzogRGF0ZSk6IERhdGUge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyZXN0cmljdGVkRGF0ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyZXN0cmljdGVkRGF0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0ZXBNb250aHMoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc3RlcE1vbnRocycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3N0ZXBNb250aHMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1dlZWtOdW1iZXJzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2hvd1dlZWtOdW1iZXJzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2hvd1dlZWtOdW1iZXJzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dEYXlOYW1lcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Nob3dEYXlOYW1lcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Nob3dEYXlOYW1lcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93T3RoZXJNb250aERheXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93T3RoZXJNb250aERheXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93T3RoZXJNb250aERheXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Zvb3Rlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3Nob3dGb290ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzaG93Rm9vdGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNlbGVjdGlvbk1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2VsZWN0aW9uTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NlbGVjdGlvbk1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3BlY2lhbERhdGVzKGFyZz86IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc3BlY2lhbERhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc3BlY2lhbERhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndGhlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGl0bGVIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndGl0bGVIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0aXRsZUhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aXRsZUZvcm1hdChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0aXRsZUZvcm1hdCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RpdGxlRm9ybWF0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvZGF5U3RyaW5nKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3RvZGF5U3RyaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigndG9kYXlTdHJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmFsdWUoYXJnPzogRGF0ZSk6IERhdGUge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd2YWx1ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhDYWxlbmRhckNvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdjbGVhcicpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdmb2N1cycpO1xuICAgfVxuXG4gICBhZGRTcGVjaWFsRGF0ZShkYXRlOiBhbnksIHNwZWNpYWxEYXRlQ2xhc3M6IGFueSwgdGV4dDogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2FkZFNwZWNpYWxEYXRlJywgZGF0ZSwgc3BlY2lhbERhdGVDbGFzcywgdGV4dCk7XG4gICB9XG5cbiAgIGdldE1pbkRhdGUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ2dldE1pbkRhdGUnKTtcbiAgIH1cblxuICAgZ2V0TWF4RGF0ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignZ2V0TWF4RGF0ZScpO1xuICAgfVxuXG4gICBnZXREYXRlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdnZXREYXRlJyk7XG4gICB9XG5cbiAgIGdldFJhbmdlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdnZXRSYW5nZScpO1xuICAgfVxuXG4gICBuYXZpZ2F0ZUZvcndhcmQobW9udGhzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignbmF2aWdhdGVGb3J3YXJkJywgbW9udGhzKTtcbiAgIH1cblxuICAgbmF2aWdhdGVCYWNrd2FyZChtb250aHM6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCduYXZpZ2F0ZUJhY2t3YXJkJywgbW9udGhzKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdyZW5kZXInKTtcbiAgIH1cblxuICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcigncmVmcmVzaCcpO1xuICAgfVxuXG4gICBzZXRNaW5EYXRlKGRhdGU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCdzZXRNaW5EYXRlJywgZGF0ZSk7XG4gICB9XG5cbiAgIHNldE1heERhdGUoZGF0ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2FsZW5kYXIoJ3NldE1heERhdGUnLCBkYXRlKTtcbiAgIH1cblxuICAgc2V0RGF0ZShkYXRlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2V0RGF0ZScsIGRhdGUpO1xuICAgfVxuXG4gICBzZXRSYW5nZShkYXRlOiBhbnksIGRhdGUyOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDYWxlbmRhcignc2V0UmFuZ2UnLCBkYXRlLCBkYXRlMik7XG4gICB9XG5cbiAgIHRvZGF5KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd0b2RheScpO1xuICAgfVxuXG4gICB2YWwodmFsdWU/OiBEYXRlLCB2YWx1ZTI/OiBEYXRlKTogYW55IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd2YWwnLCB2YWx1ZSwgdmFsdWUyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENhbGVuZGFyKCd2YWwnKTtcbiAgICAgIH1cbiAgIH07XG5cblxuICAgLy8ganF4Q2FsZW5kYXJDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25CYWNrQnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25OZXh0QnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25WaWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmFja0J1dHRvbkNsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CYWNrQnV0dG9uQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2hhbmdlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DaGFuZ2UuZW1pdChldmVudERhdGEpOyB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5ob3N0LnZhbCgpKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ25leHRCdXR0b25DbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uTmV4dEJ1dHRvbkNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3ZpZXdDaGFuZ2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblZpZXdDaGFuZ2UuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeENhbGVuZGFyQ29tcG9uZW50XG4iXX0=