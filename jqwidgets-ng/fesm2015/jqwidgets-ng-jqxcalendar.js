import '../jqwidgets/jqxcore';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxcalendar';
import { __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxCalendarComponent),
    multi: true
};
let jqxCalendarComponent = class jqxCalendarComponent {
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
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
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
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxCalendar('setOptions', options);
    }
    // jqxCalendarComponent properties
    backText(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('backText', arg);
        }
        else {
            return this.host.jqxCalendar('backText');
        }
    }
    columnHeaderHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('columnHeaderHeight', arg);
        }
        else {
            return this.host.jqxCalendar('columnHeaderHeight');
        }
    }
    clearString(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('clearString', arg);
        }
        else {
            return this.host.jqxCalendar('clearString');
        }
    }
    culture(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('culture', arg);
        }
        else {
            return this.host.jqxCalendar('culture');
        }
    }
    dayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('dayNameFormat', arg);
        }
        else {
            return this.host.jqxCalendar('dayNameFormat');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('disabled', arg);
        }
        else {
            return this.host.jqxCalendar('disabled');
        }
    }
    enableWeekend(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableWeekend', arg);
        }
        else {
            return this.host.jqxCalendar('enableWeekend');
        }
    }
    enableViews(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableViews', arg);
        }
        else {
            return this.host.jqxCalendar('enableViews');
        }
    }
    enableOtherMonthDays(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('enableOtherMonthDays');
        }
    }
    enableFastNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableFastNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableFastNavigation');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableHover', arg);
        }
        else {
            return this.host.jqxCalendar('enableHover');
        }
    }
    enableAutoNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableAutoNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableAutoNavigation');
        }
    }
    enableTooltips(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableTooltips', arg);
        }
        else {
            return this.host.jqxCalendar('enableTooltips');
        }
    }
    forwardText(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('forwardText', arg);
        }
        else {
            return this.host.jqxCalendar('forwardText');
        }
    }
    firstDayOfWeek(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxCalendar('firstDayOfWeek');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('height', arg);
        }
        else {
            return this.host.jqxCalendar('height');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('min', arg);
        }
        else {
            return this.host.jqxCalendar('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('max', arg);
        }
        else {
            return this.host.jqxCalendar('max');
        }
    }
    navigationDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('navigationDelay', arg);
        }
        else {
            return this.host.jqxCalendar('navigationDelay');
        }
    }
    rowHeaderWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rowHeaderWidth', arg);
        }
        else {
            return this.host.jqxCalendar('rowHeaderWidth');
        }
    }
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('readOnly', arg);
        }
        else {
            return this.host.jqxCalendar('readOnly');
        }
    }
    restrictedDates(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('restrictedDates', arg);
        }
        else {
            return this.host.jqxCalendar('restrictedDates');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rtl', arg);
        }
        else {
            return this.host.jqxCalendar('rtl');
        }
    }
    stepMonths(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('stepMonths', arg);
        }
        else {
            return this.host.jqxCalendar('stepMonths');
        }
    }
    showWeekNumbers(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxCalendar('showWeekNumbers');
        }
    }
    showDayNames(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showDayNames', arg);
        }
        else {
            return this.host.jqxCalendar('showDayNames');
        }
    }
    showOtherMonthDays(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('showOtherMonthDays');
        }
    }
    showFooter(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showFooter', arg);
        }
        else {
            return this.host.jqxCalendar('showFooter');
        }
    }
    selectionMode(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('selectionMode', arg);
        }
        else {
            return this.host.jqxCalendar('selectionMode');
        }
    }
    specialDates(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('specialDates', arg);
        }
        else {
            return this.host.jqxCalendar('specialDates');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('theme', arg);
        }
        else {
            return this.host.jqxCalendar('theme');
        }
    }
    titleHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleHeight', arg);
        }
        else {
            return this.host.jqxCalendar('titleHeight');
        }
    }
    titleFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleFormat', arg);
        }
        else {
            return this.host.jqxCalendar('titleFormat');
        }
    }
    todayString(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('todayString', arg);
        }
        else {
            return this.host.jqxCalendar('todayString');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('value', arg);
        }
        else {
            return this.host.jqxCalendar('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('width', arg);
        }
        else {
            return this.host.jqxCalendar('width');
        }
    }
    // jqxCalendarComponent functions
    clear() {
        this.host.jqxCalendar('clear');
    }
    destroy() {
        this.host.jqxCalendar('destroy');
    }
    focus() {
        this.host.jqxCalendar('focus');
    }
    addSpecialDate(date, specialDateClass, text) {
        this.host.jqxCalendar('addSpecialDate', date, specialDateClass, text);
    }
    getMinDate() {
        return this.host.jqxCalendar('getMinDate');
    }
    getMaxDate() {
        return this.host.jqxCalendar('getMaxDate');
    }
    getDate() {
        return this.host.jqxCalendar('getDate');
    }
    getRange() {
        return this.host.jqxCalendar('getRange');
    }
    navigateForward(months) {
        this.host.jqxCalendar('navigateForward', months);
    }
    navigateBackward(months) {
        this.host.jqxCalendar('navigateBackward', months);
    }
    render() {
        this.host.jqxCalendar('render');
    }
    refresh() {
        this.host.jqxCalendar('refresh');
    }
    setMinDate(date) {
        this.host.jqxCalendar('setMinDate', date);
    }
    setMaxDate(date) {
        this.host.jqxCalendar('setMaxDate', date);
    }
    setDate(date) {
        this.host.jqxCalendar('setDate', date);
    }
    setRange(date, date2) {
        this.host.jqxCalendar('setRange', date, date2);
    }
    today() {
        this.host.jqxCalendar('today');
    }
    val(value, value2) {
        if (value !== undefined) {
            return this.host.jqxCalendar('val', value, value2);
        }
        else {
            return this.host.jqxCalendar('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('backButtonClick', (eventData) => { this.onBackButtonClick.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('nextButtonClick', (eventData) => { this.onNextButtonClick.emit(eventData); });
        this.host.on('viewChange', (eventData) => { this.onViewChange.emit(eventData); });
    }
}; //jqxCalendarComponent
jqxCalendarComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('backText'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrBackText", void 0);
__decorate([
    Input('columnHeaderHeight'),
    __metadata("design:type", Number)
], jqxCalendarComponent.prototype, "attrColumnHeaderHeight", void 0);
__decorate([
    Input('clearString'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrClearString", void 0);
__decorate([
    Input('culture'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrCulture", void 0);
__decorate([
    Input('dayNameFormat'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrDayNameFormat", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('enableWeekend'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrEnableWeekend", void 0);
__decorate([
    Input('enableViews'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrEnableViews", void 0);
__decorate([
    Input('enableOtherMonthDays'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrEnableOtherMonthDays", void 0);
__decorate([
    Input('enableFastNavigation'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrEnableFastNavigation", void 0);
__decorate([
    Input('enableHover'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrEnableHover", void 0);
__decorate([
    Input('enableAutoNavigation'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrEnableAutoNavigation", void 0);
__decorate([
    Input('enableTooltips'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrEnableTooltips", void 0);
__decorate([
    Input('forwardText'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrForwardText", void 0);
__decorate([
    Input('firstDayOfWeek'),
    __metadata("design:type", Number)
], jqxCalendarComponent.prototype, "attrFirstDayOfWeek", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrMin", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrMax", void 0);
__decorate([
    Input('navigationDelay'),
    __metadata("design:type", Number)
], jqxCalendarComponent.prototype, "attrNavigationDelay", void 0);
__decorate([
    Input('rowHeaderWidth'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrRowHeaderWidth", void 0);
__decorate([
    Input('readOnly'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrReadOnly", void 0);
__decorate([
    Input('restrictedDates'),
    __metadata("design:type", Array)
], jqxCalendarComponent.prototype, "attrRestrictedDates", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('stepMonths'),
    __metadata("design:type", Number)
], jqxCalendarComponent.prototype, "attrStepMonths", void 0);
__decorate([
    Input('showWeekNumbers'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrShowWeekNumbers", void 0);
__decorate([
    Input('showDayNames'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrShowDayNames", void 0);
__decorate([
    Input('showOtherMonthDays'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrShowOtherMonthDays", void 0);
__decorate([
    Input('showFooter'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "attrShowFooter", void 0);
__decorate([
    Input('selectionMode'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrSelectionMode", void 0);
__decorate([
    Input('specialDates'),
    __metadata("design:type", Array)
], jqxCalendarComponent.prototype, "attrSpecialDates", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('titleHeight'),
    __metadata("design:type", Number)
], jqxCalendarComponent.prototype, "attrTitleHeight", void 0);
__decorate([
    Input('titleFormat'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrTitleFormat", void 0);
__decorate([
    Input('todayString'),
    __metadata("design:type", String)
], jqxCalendarComponent.prototype, "attrTodayString", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Date)
], jqxCalendarComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxCalendarComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "onBackButtonClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "onNextButtonClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxCalendarComponent.prototype, "onViewChange", void 0);
jqxCalendarComponent = __decorate([
    Component({
        selector: 'jqxCalendar',
        template: '<div><ng-content></ng-content></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxCalendarComponent);

let jqxCalendarModule = class jqxCalendarModule {
};
jqxCalendarModule = __decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxCalendarComponent],
        exports: [jqxCalendarComponent]
    })
], jqxCalendarModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxCalendarComponent, jqxCalendarModule, ɵ0 };
