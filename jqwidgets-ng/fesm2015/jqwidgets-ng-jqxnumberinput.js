import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxnumberinput';
import { __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxNumberInputComponent),
    multi: true
};
let jqxNumberInputComponent = class jqxNumberInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxNumberInputComponent events
        this.onChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
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
    writeValue(value) {
        if (this.widgetObject) {
            this.host.jqxNumberInput('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxNumberInput('setOptions', options);
    }
    // jqxNumberInputComponent properties
    allowNull(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('allowNull', arg);
        }
        else {
            return this.host.jqxNumberInput('allowNull');
        }
    }
    decimal(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimal', arg);
        }
        else {
            return this.host.jqxNumberInput('decimal');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('disabled', arg);
        }
        else {
            return this.host.jqxNumberInput('disabled');
        }
    }
    decimalDigits(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalDigits', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalDigits');
        }
    }
    decimalSeparator(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalSeparator');
        }
    }
    digits(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('digits', arg);
        }
        else {
            return this.host.jqxNumberInput('digits');
        }
    }
    groupSeparator(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSeparator');
        }
    }
    groupSize(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSize', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSize');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('height', arg);
        }
        else {
            return this.host.jqxNumberInput('height');
        }
    }
    inputMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('inputMode', arg);
        }
        else {
            return this.host.jqxNumberInput('inputMode');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('min', arg);
        }
        else {
            return this.host.jqxNumberInput('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('max', arg);
        }
        else {
            return this.host.jqxNumberInput('max');
        }
    }
    negativeSymbol(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('negativeSymbol', arg);
        }
        else {
            return this.host.jqxNumberInput('negativeSymbol');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('placeHolder', arg);
        }
        else {
            return this.host.jqxNumberInput('placeHolder');
        }
    }
    promptChar(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('promptChar', arg);
        }
        else {
            return this.host.jqxNumberInput('promptChar');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('rtl', arg);
        }
        else {
            return this.host.jqxNumberInput('rtl');
        }
    }
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('readOnly', arg);
        }
        else {
            return this.host.jqxNumberInput('readOnly');
        }
    }
    spinMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinMode', arg);
        }
        else {
            return this.host.jqxNumberInput('spinMode');
        }
    }
    spinButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtons', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtons');
        }
    }
    spinButtonsWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsWidth', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsWidth');
        }
    }
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsStep');
        }
    }
    symbol(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbol', arg);
        }
        else {
            return this.host.jqxNumberInput('symbol');
        }
    }
    symbolPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbolPosition', arg);
        }
        else {
            return this.host.jqxNumberInput('symbolPosition');
        }
    }
    textAlign(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('textAlign', arg);
        }
        else {
            return this.host.jqxNumberInput('textAlign');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('template', arg);
        }
        else {
            return this.host.jqxNumberInput('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('theme', arg);
        }
        else {
            return this.host.jqxNumberInput('theme');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('value', arg);
        }
        else {
            return this.host.jqxNumberInput('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('width', arg);
        }
        else {
            return this.host.jqxNumberInput('width');
        }
    }
    // jqxNumberInputComponent functions
    clear() {
        this.host.jqxNumberInput('clear');
    }
    destroy() {
        this.host.jqxNumberInput('destroy');
    }
    focus() {
        this.host.jqxNumberInput('focus');
    }
    getDecimal() {
        return this.host.jqxNumberInput('getDecimal');
    }
    setDecimal(index) {
        this.host.jqxNumberInput('setDecimal', index);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxNumberInput('val', value);
        }
        else {
            return this.host.jqxNumberInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
        this.host.on('textchanged', (eventData) => { this.onTextchanged.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
    }
}; //jqxNumberInputComponent
jqxNumberInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('allowNull'),
    __metadata("design:type", Boolean)
], jqxNumberInputComponent.prototype, "attrAllowNull", void 0);
__decorate([
    Input('decimal'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDecimal", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxNumberInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('decimalDigits'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDecimalDigits", void 0);
__decorate([
    Input('decimalSeparator'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDecimalSeparator", void 0);
__decorate([
    Input('digits'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrDigits", void 0);
__decorate([
    Input('groupSeparator'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrGroupSeparator", void 0);
__decorate([
    Input('groupSize'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrGroupSize", void 0);
__decorate([
    Input('inputMode'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrInputMode", void 0);
__decorate([
    Input('min'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrMin", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrMax", void 0);
__decorate([
    Input('negativeSymbol'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrNegativeSymbol", void 0);
__decorate([
    Input('placeHolder'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    Input('promptChar'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrPromptChar", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxNumberInputComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('readOnly'),
    __metadata("design:type", Boolean)
], jqxNumberInputComponent.prototype, "attrReadOnly", void 0);
__decorate([
    Input('spinMode'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrSpinMode", void 0);
__decorate([
    Input('spinButtons'),
    __metadata("design:type", Boolean)
], jqxNumberInputComponent.prototype, "attrSpinButtons", void 0);
__decorate([
    Input('spinButtonsWidth'),
    __metadata("design:type", Number)
], jqxNumberInputComponent.prototype, "attrSpinButtonsWidth", void 0);
__decorate([
    Input('spinButtonsStep'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrSpinButtonsStep", void 0);
__decorate([
    Input('symbol'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrSymbol", void 0);
__decorate([
    Input('symbolPosition'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrSymbolPosition", void 0);
__decorate([
    Input('textAlign'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrTextAlign", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxNumberInputComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxNumberInputComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "onTextchanged", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxNumberInputComponent.prototype, "onValueChanged", void 0);
jqxNumberInputComponent = __decorate([
    Component({
        selector: 'jqxNumberInput',
        template: '<input>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxNumberInputComponent);

let jqxNumberInputModule = class jqxNumberInputModule {
};
jqxNumberInputModule = __decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxNumberInputComponent],
        exports: [jqxNumberInputComponent]
    })
], jqxNumberInputModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxNumberInputComponent, jqxNumberInputModule, ɵ0 };
