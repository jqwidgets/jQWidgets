import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxformattedinput';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxFormattedInputComponent),
    multi: true
};
let jqxFormattedInputComponent = class jqxFormattedInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'decimalNotation', 'dropDown', 'dropDownWidth', 'height', 'min', 'max', 'placeHolder', 'popupZIndex', 'roundedCorners', 'rtl', 'radix', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'upperCase', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxFormattedInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onRadixChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxFormattedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxFormattedInput(this.properties[i])) {
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
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
        if (this.attrRtl !== true) {
            if (this.attrSpinButtons === false) {
                this.host.children()[1].remove();
            }
            if (this.attrDropDown !== true) {
                this.host.children()[1].remove();
            }
        }
        else if (this.attrRtl === true) {
            this.host.children()[1].remove();
            this.host.children()[1].remove();
            if (this.attrSpinButtons !== false) {
                this.host.prepend('<div></div>');
            }
            if (this.attrDropDown === true) {
                this.host.prepend('<div></div>');
            }
        }
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFormattedInput', options);
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
            this.host.jqxFormattedInput('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxFormattedInput('setOptions', options);
    }
    // jqxFormattedInputComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('disabled', arg);
        }
        else {
            return this.host.jqxFormattedInput('disabled');
        }
    }
    decimalNotation(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxFormattedInput('decimalNotation');
        }
    }
    dropDown(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDown', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDown');
        }
    }
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDownWidth');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('height', arg);
        }
        else {
            return this.host.jqxFormattedInput('height');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('min', arg);
        }
        else {
            return this.host.jqxFormattedInput('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('max', arg);
        }
        else {
            return this.host.jqxFormattedInput('max');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('placeHolder', arg);
        }
        else {
            return this.host.jqxFormattedInput('placeHolder');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxFormattedInput('popupZIndex');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxFormattedInput('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('rtl', arg);
        }
        else {
            return this.host.jqxFormattedInput('rtl');
        }
    }
    radix(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('radix', arg);
        }
        else {
            return this.host.jqxFormattedInput('radix');
        }
    }
    spinButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtons', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtons');
        }
    }
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtonsStep');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('template', arg);
        }
        else {
            return this.host.jqxFormattedInput('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('theme', arg);
        }
        else {
            return this.host.jqxFormattedInput('theme');
        }
    }
    upperCase(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('upperCase', arg);
        }
        else {
            return this.host.jqxFormattedInput('upperCase');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('value', arg);
        }
        else {
            return this.host.jqxFormattedInput('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('width', arg);
        }
        else {
            return this.host.jqxFormattedInput('width');
        }
    }
    // jqxFormattedInputComponent functions
    close() {
        this.host.jqxFormattedInput('close');
    }
    destroy() {
        this.host.jqxFormattedInput('destroy');
    }
    focus() {
        this.host.jqxFormattedInput('focus');
    }
    open() {
        this.host.jqxFormattedInput('open');
    }
    render() {
        this.host.jqxFormattedInput('render');
    }
    refresh() {
        this.host.jqxFormattedInput('refresh');
    }
    selectAll() {
        this.host.jqxFormattedInput('selectAll');
    }
    selectFirst() {
        this.host.jqxFormattedInput('selectFirst');
    }
    selectLast() {
        this.host.jqxFormattedInput('selectLast');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxFormattedInput('val', value);
        }
        else {
            return this.host.jqxFormattedInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('radixChange', (eventData) => { this.onRadixChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
    }
}; //jqxFormattedInputComponent
jqxFormattedInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxFormattedInputComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('decimalNotation'),
    tslib_1.__metadata("design:type", String)
], jqxFormattedInputComponent.prototype, "attrDecimalNotation", void 0);
tslib_1.__decorate([
    Input('dropDown'),
    tslib_1.__metadata("design:type", Boolean)
], jqxFormattedInputComponent.prototype, "attrDropDown", void 0);
tslib_1.__decorate([
    Input('dropDownWidth'),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrDropDownWidth", void 0);
tslib_1.__decorate([
    Input('min'),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrMin", void 0);
tslib_1.__decorate([
    Input('max'),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrMax", void 0);
tslib_1.__decorate([
    Input('placeHolder'),
    tslib_1.__metadata("design:type", String)
], jqxFormattedInputComponent.prototype, "attrPlaceHolder", void 0);
tslib_1.__decorate([
    Input('popupZIndex'),
    tslib_1.__metadata("design:type", Number)
], jqxFormattedInputComponent.prototype, "attrPopupZIndex", void 0);
tslib_1.__decorate([
    Input('roundedCorners'),
    tslib_1.__metadata("design:type", Boolean)
], jqxFormattedInputComponent.prototype, "attrRoundedCorners", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxFormattedInputComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('radix'),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrRadix", void 0);
tslib_1.__decorate([
    Input('spinButtons'),
    tslib_1.__metadata("design:type", Boolean)
], jqxFormattedInputComponent.prototype, "attrSpinButtons", void 0);
tslib_1.__decorate([
    Input('spinButtonsStep'),
    tslib_1.__metadata("design:type", Number)
], jqxFormattedInputComponent.prototype, "attrSpinButtonsStep", void 0);
tslib_1.__decorate([
    Input('template'),
    tslib_1.__metadata("design:type", String)
], jqxFormattedInputComponent.prototype, "attrTemplate", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxFormattedInputComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('upperCase'),
    tslib_1.__metadata("design:type", Boolean)
], jqxFormattedInputComponent.prototype, "attrUpperCase", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxFormattedInputComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "onClose", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "onOpen", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxFormattedInputComponent.prototype, "onRadixChange", void 0);
jqxFormattedInputComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxFormattedInput',
        template: '<div><input type="text" [(ngModel)]="ngValue"><div></div><div></div></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxFormattedInputComponent);
export { jqxFormattedInputComponent };
export { ɵ0 };
