import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxmaskedinput';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxMaskedInputComponent),
    multi: true
};
let jqxMaskedInputComponent = class jqxMaskedInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'mask', 'promptChar', 'readOnly', 'rtl', 'theme', 'textAlign', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxMaskedInputComponent events
        this.onChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMaskedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMaskedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMaskedInput(this.properties[i])) {
                        this.host.jqxMaskedInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMaskedInput', options);
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
            this.host.jqxMaskedInput('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxMaskedInput('setOptions', options);
    }
    // jqxMaskedInputComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('disabled', arg);
        }
        else {
            return this.host.jqxMaskedInput('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('height', arg);
        }
        else {
            return this.host.jqxMaskedInput('height');
        }
    }
    mask(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('mask', arg);
        }
        else {
            return this.host.jqxMaskedInput('mask');
        }
    }
    promptChar(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('promptChar', arg);
        }
        else {
            return this.host.jqxMaskedInput('promptChar');
        }
    }
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('readOnly', arg);
        }
        else {
            return this.host.jqxMaskedInput('readOnly');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('rtl', arg);
        }
        else {
            return this.host.jqxMaskedInput('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('theme', arg);
        }
        else {
            return this.host.jqxMaskedInput('theme');
        }
    }
    textAlign(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('textAlign', arg);
        }
        else {
            return this.host.jqxMaskedInput('textAlign');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('value', arg);
        }
        else {
            return this.host.jqxMaskedInput('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('width', arg);
        }
        else {
            return this.host.jqxMaskedInput('width');
        }
    }
    // jqxMaskedInputComponent functions
    clear() {
        this.host.jqxMaskedInput('clear');
    }
    destroy() {
        this.host.jqxMaskedInput('destroy');
    }
    focus() {
        this.host.jqxMaskedInput('focus');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxMaskedInput('val', value);
        }
        else {
            return this.host.jqxMaskedInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.parent().on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.parent().on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); this.onChangeCallback(this.host.val()); });
    }
}; //jqxMaskedInputComponent
jqxMaskedInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxMaskedInputComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('mask'),
    tslib_1.__metadata("design:type", String)
], jqxMaskedInputComponent.prototype, "attrMask", void 0);
tslib_1.__decorate([
    Input('promptChar'),
    tslib_1.__metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrPromptChar", void 0);
tslib_1.__decorate([
    Input('readOnly'),
    tslib_1.__metadata("design:type", Boolean)
], jqxMaskedInputComponent.prototype, "attrReadOnly", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxMaskedInputComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxMaskedInputComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('textAlign'),
    tslib_1.__metadata("design:type", String)
], jqxMaskedInputComponent.prototype, "attrTextAlign", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxMaskedInputComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxMaskedInputComponent.prototype, "onValueChanged", void 0);
jqxMaskedInputComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxMaskedInput',
        template: '<input>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxMaskedInputComponent);
export { jqxMaskedInputComponent };
export { ɵ0 };
