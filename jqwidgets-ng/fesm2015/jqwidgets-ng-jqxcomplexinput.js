import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxcomplexinput';
import { __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxComplexInputComponent),
    multi: true
};
let jqxComplexInputComponent = class jqxComplexInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['decimalNotation', 'disabled', 'height', 'placeHolder', 'roundedCorners', 'rtl', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxComplexInputComponent events
        this.onChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxComplexInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxComplexInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxComplexInput(this.properties[i])) {
                        this.host.jqxComplexInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComplexInput', options);
        setTimeout(_ => {
            let valueWithWS = 'JQXLite{options.value}';
            this.host.jqxComplexInput({ value: valueWithWS });
        });
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
            this.onChangeCallback(this.host.val());
            this.host.jqxComplexInput('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxComplexInput('setOptions', options);
    }
    // jqxComplexInputComponent properties
    decimalNotation(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxComplexInput('decimalNotation');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('disabled', arg);
        }
        else {
            return this.host.jqxComplexInput('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('height', arg);
        }
        else {
            return this.host.jqxComplexInput('height');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('placeHolder', arg);
        }
        else {
            return this.host.jqxComplexInput('placeHolder');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxComplexInput('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('rtl', arg);
        }
        else {
            return this.host.jqxComplexInput('rtl');
        }
    }
    spinButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('spinButtons', arg);
        }
        else {
            return this.host.jqxComplexInput('spinButtons');
        }
    }
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxComplexInput('spinButtonsStep');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('template', arg);
        }
        else {
            return this.host.jqxComplexInput('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('theme', arg);
        }
        else {
            return this.host.jqxComplexInput('theme');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('value', arg);
        }
        else {
            return this.host.jqxComplexInput('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('width', arg);
        }
        else {
            return this.host.jqxComplexInput('width');
        }
    }
    // jqxComplexInputComponent functions
    destroy() {
        this.host.jqxComplexInput('destroy');
    }
    getDecimalNotation(part, decimalNotation) {
        return this.host.jqxComplexInput('getDecimalNotation', part, decimalNotation);
    }
    getReal(complexnumber) {
        return this.host.jqxComplexInput('getReal', complexnumber);
    }
    getImaginary(complexnumber) {
        return this.host.jqxComplexInput('getImaginary', complexnumber);
    }
    render() {
        this.host.jqxComplexInput('render');
    }
    refresh() {
        this.host.jqxComplexInput('refresh');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxComplexInput('val', value);
        }
        else {
            return this.host.jqxComplexInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
    }
}; //jqxComplexInputComponent
jqxComplexInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('decimalNotation'),
    __metadata("design:type", String)
], jqxComplexInputComponent.prototype, "attrDecimalNotation", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxComplexInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('placeHolder'),
    __metadata("design:type", String)
], jqxComplexInputComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    Input('roundedCorners'),
    __metadata("design:type", Boolean)
], jqxComplexInputComponent.prototype, "attrRoundedCorners", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxComplexInputComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('spinButtons'),
    __metadata("design:type", Boolean)
], jqxComplexInputComponent.prototype, "attrSpinButtons", void 0);
__decorate([
    Input('spinButtonsStep'),
    __metadata("design:type", Number)
], jqxComplexInputComponent.prototype, "attrSpinButtonsStep", void 0);
__decorate([
    Input('template'),
    __metadata("design:type", String)
], jqxComplexInputComponent.prototype, "attrTemplate", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxComplexInputComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", String)
], jqxComplexInputComponent.prototype, "attrValue", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxComplexInputComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxComplexInputComponent.prototype, "onChange", void 0);
jqxComplexInputComponent = __decorate([
    Component({
        selector: 'jqxComplexInput',
        template: '<div style="display: inline-flex;"><input [(ngModel)]="ngValue"><div></div></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxComplexInputComponent);

let jqxComplexInputModule = class jqxComplexInputModule {
};
jqxComplexInputModule = __decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxComplexInputComponent],
        exports: [jqxComplexInputComponent]
    })
], jqxComplexInputModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxComplexInputComponent, jqxComplexInputModule, ɵ0 };
