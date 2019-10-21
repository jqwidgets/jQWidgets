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
    useExisting: forwardRef(() => jqxDateTimeInputComponent),
    multi: true
};
let jqxDateTimeInputComponent = class jqxDateTimeInputComponent {
    constructor(containerElement) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDateTimeInput', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    get ngValue() {
        if (this.widgetObject) {
            const value = this.host.val();
            return value;
        }
        return '';
    }
    set ngValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(value);
        }
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.host.jqxDateTimeInput('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxDateTimeInput('setOptions', options);
    }
    // jqxDateTimeInputComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('animationType', arg);
        }
        else {
            return this.host.jqxDateTimeInput('animationType');
        }
    }
    allowNullDate(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowNullDate', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowNullDate');
        }
    }
    allowKeyboardDelete(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowKeyboardDelete', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowKeyboardDelete');
        }
    }
    clearString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('clearString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('clearString');
        }
    }
    culture(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('culture', arg);
        }
        else {
            return this.host.jqxDateTimeInput('culture');
        }
    }
    closeDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeDelay');
        }
    }
    closeCalendarAfterSelection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeCalendarAfterSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeCalendarAfterSelection');
        }
    }
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownHorizontalAlignment');
        }
    }
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownVerticalAlignment');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('disabled', arg);
        }
        else {
            return this.host.jqxDateTimeInput('disabled');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableBrowserBoundsDetection');
        }
    }
    enableAbsoluteSelection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableAbsoluteSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableAbsoluteSelection');
        }
    }
    firstDayOfWeek(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxDateTimeInput('firstDayOfWeek');
        }
    }
    formatString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('formatString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('formatString');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('height', arg);
        }
        else {
            return this.host.jqxDateTimeInput('height');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('min', arg);
        }
        else {
            return this.host.jqxDateTimeInput('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('max', arg);
        }
        else {
            return this.host.jqxDateTimeInput('max');
        }
    }
    openDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('openDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('openDelay');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('placeHolder', arg);
        }
        else {
            return this.host.jqxDateTimeInput('placeHolder');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxDateTimeInput('popupZIndex');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('rtl', arg);
        }
        else {
            return this.host.jqxDateTimeInput('rtl');
        }
    }
    readonly(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('readonly', arg);
        }
        else {
            return this.host.jqxDateTimeInput('readonly');
        }
    }
    showFooter(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showFooter', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showFooter');
        }
    }
    selectionMode(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('selectionMode', arg);
        }
        else {
            return this.host.jqxDateTimeInput('selectionMode');
        }
    }
    showWeekNumbers(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showWeekNumbers');
        }
    }
    showTimeButton(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showTimeButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showTimeButton');
        }
    }
    showCalendarButton(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showCalendarButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showCalendarButton');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('theme', arg);
        }
        else {
            return this.host.jqxDateTimeInput('theme');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('template', arg);
        }
        else {
            return this.host.jqxDateTimeInput('template');
        }
    }
    textAlign(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('textAlign', arg);
        }
        else {
            return this.host.jqxDateTimeInput('textAlign');
        }
    }
    todayString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('todayString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('todayString');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('value', arg);
        }
        else {
            return this.host.jqxDateTimeInput('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('width', arg);
        }
        else {
            return this.host.jqxDateTimeInput('width');
        }
    }
    // jqxDateTimeInputComponent functions
    close() {
        this.host.jqxDateTimeInput('close');
    }
    destroy() {
        this.host.jqxDateTimeInput('destroy');
    }
    focus() {
        this.host.jqxDateTimeInput('focus');
    }
    getRange() {
        return this.host.jqxDateTimeInput('getRange');
    }
    getText() {
        return this.host.jqxDateTimeInput('getText');
    }
    getDate() {
        return this.host.jqxDateTimeInput('getDate');
    }
    getMaxDate() {
        return this.host.jqxDateTimeInput('getMaxDate');
    }
    getMinDate() {
        return this.host.jqxDateTimeInput('getMinDate');
    }
    open() {
        this.host.jqxDateTimeInput('open');
    }
    setRange(date, date2) {
        this.host.jqxDateTimeInput('setRange', date, date2);
    }
    setMinDate(date) {
        this.host.jqxDateTimeInput('setMinDate', date);
    }
    setMaxDate(date) {
        this.host.jqxDateTimeInput('setMaxDate', date);
    }
    setDate(date) {
        this.host.jqxDateTimeInput('setDate', date);
    }
    val(value, value2) {
        if (value !== undefined) {
            return this.host.jqxDateTimeInput('val', value, value2);
        }
        else {
            return this.host.jqxDateTimeInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('textchanged', (eventData) => { this.onTextchanged.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('keyup', () => { this.onChangeCallback(this.host.val()); });
    }
}; //jqxDateTimeInputComponent
jqxDateTimeInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationType'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrAnimationType", void 0);
__decorate([
    Input('allowNullDate'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrAllowNullDate", void 0);
__decorate([
    Input('allowKeyboardDelete'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrAllowKeyboardDelete", void 0);
__decorate([
    Input('clearString'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrClearString", void 0);
__decorate([
    Input('culture'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrCulture", void 0);
__decorate([
    Input('closeDelay'),
    __metadata("design:type", Number)
], jqxDateTimeInputComponent.prototype, "attrCloseDelay", void 0);
__decorate([
    Input('closeCalendarAfterSelection'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrCloseCalendarAfterSelection", void 0);
__decorate([
    Input('dropDownHorizontalAlignment'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
__decorate([
    Input('dropDownVerticalAlignment'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrDropDownVerticalAlignment", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('enableBrowserBoundsDetection'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
__decorate([
    Input('enableAbsoluteSelection'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrEnableAbsoluteSelection", void 0);
__decorate([
    Input('firstDayOfWeek'),
    __metadata("design:type", Number)
], jqxDateTimeInputComponent.prototype, "attrFirstDayOfWeek", void 0);
__decorate([
    Input('formatString'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrFormatString", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Date)
], jqxDateTimeInputComponent.prototype, "attrMin", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Date)
], jqxDateTimeInputComponent.prototype, "attrMax", void 0);
__decorate([
    Input('openDelay'),
    __metadata("design:type", Number)
], jqxDateTimeInputComponent.prototype, "attrOpenDelay", void 0);
__decorate([
    Input('placeHolder'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    Input('popupZIndex'),
    __metadata("design:type", Number)
], jqxDateTimeInputComponent.prototype, "attrPopupZIndex", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrReadonly", void 0);
__decorate([
    Input('showFooter'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrShowFooter", void 0);
__decorate([
    Input('selectionMode'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrSelectionMode", void 0);
__decorate([
    Input('showWeekNumbers'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrShowWeekNumbers", void 0);
__decorate([
    Input('showTimeButton'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrShowTimeButton", void 0);
__decorate([
    Input('showCalendarButton'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "attrShowCalendarButton", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('textAlign'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrTextAlign", void 0);
__decorate([
    Input('todayString'),
    __metadata("design:type", String)
], jqxDateTimeInputComponent.prototype, "attrTodayString", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Date)
], jqxDateTimeInputComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxDateTimeInputComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onTextchanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDateTimeInputComponent.prototype, "onValueChanged", void 0);
jqxDateTimeInputComponent = __decorate([
    Component({
        selector: 'jqxDateTimeInput',
        template: '<input [(ngModel)]="ngValue">',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxDateTimeInputComponent);

let jqxDateTimeInputModule = class jqxDateTimeInputModule {
};
jqxDateTimeInputModule = __decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxDateTimeInputComponent],
        exports: [jqxDateTimeInputComponent]
    })
], jqxDateTimeInputModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDateTimeInputComponent, jqxDateTimeInputModule, ɵ0 };
