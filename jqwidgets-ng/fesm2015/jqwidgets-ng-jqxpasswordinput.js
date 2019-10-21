import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxpasswordinput';
import { __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxPasswordInputComponent),
    multi: true
};
let jqxPasswordInputComponent = class jqxPasswordInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'localization', 'maxLength', 'placeHolder', 'passwordStrength', 'rtl', 'strengthColors', 'showStrength', 'showStrengthPosition', 'strengthTypeRenderer', 'showPasswordIcon', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxPasswordInputComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPasswordInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPasswordInput(this.properties[i])) {
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
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
            this.host.jqxPasswordInput('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxPasswordInput('setOptions', options);
    }
    // jqxPasswordInputComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('disabled', arg);
        }
        else {
            return this.host.jqxPasswordInput('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('height', arg);
        }
        else {
            return this.host.jqxPasswordInput('height');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('localization', arg);
        }
        else {
            return this.host.jqxPasswordInput('localization');
        }
    }
    maxLength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('maxLength', arg);
        }
        else {
            return this.host.jqxPasswordInput('maxLength');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('placeHolder', arg);
        }
        else {
            return this.host.jqxPasswordInput('placeHolder');
        }
    }
    passwordStrength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('passwordStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('passwordStrength');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('rtl', arg);
        }
        else {
            return this.host.jqxPasswordInput('rtl');
        }
    }
    strengthColors(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthColors', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthColors');
        }
    }
    showStrength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrength');
        }
    }
    showStrengthPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrengthPosition', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrengthPosition');
        }
    }
    strengthTypeRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthTypeRenderer', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthTypeRenderer');
        }
    }
    showPasswordIcon(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showPasswordIcon', arg);
        }
        else {
            return this.host.jqxPasswordInput('showPasswordIcon');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('theme', arg);
        }
        else {
            return this.host.jqxPasswordInput('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('width', arg);
        }
        else {
            return this.host.jqxPasswordInput('width');
        }
    }
    // jqxPasswordInputComponent functions
    render() {
        this.host.jqxPasswordInput('render');
    }
    refresh() {
        this.host.jqxPasswordInput('refresh');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxPasswordInput('val', value);
        }
        else {
            return this.host.jqxPasswordInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
}; //jqxPasswordInputComponent
jqxPasswordInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('localization'),
    __metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrLocalization", void 0);
__decorate([
    Input('maxLength'),
    __metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrMaxLength", void 0);
__decorate([
    Input('placeHolder'),
    __metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrPlaceHolder", void 0);
__decorate([
    Input('passwordStrength'),
    __metadata("design:type", Function)
], jqxPasswordInputComponent.prototype, "attrPasswordStrength", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('strengthColors'),
    __metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrStrengthColors", void 0);
__decorate([
    Input('showStrength'),
    __metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "attrShowStrength", void 0);
__decorate([
    Input('showStrengthPosition'),
    __metadata("design:type", String)
], jqxPasswordInputComponent.prototype, "attrShowStrengthPosition", void 0);
__decorate([
    Input('strengthTypeRenderer'),
    __metadata("design:type", Function)
], jqxPasswordInputComponent.prototype, "attrStrengthTypeRenderer", void 0);
__decorate([
    Input('showPasswordIcon'),
    __metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "attrShowPasswordIcon", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxPasswordInputComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxPasswordInputComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxPasswordInputComponent.prototype, "onChange", void 0);
jqxPasswordInputComponent = __decorate([
    Component({
        selector: 'jqxPasswordInput',
        template: '<input type="password" [(ngModel)]="ngValue">',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxPasswordInputComponent);

let jqxPasswordInputModule = class jqxPasswordInputModule {
};
jqxPasswordInputModule = __decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxPasswordInputComponent],
        exports: [jqxPasswordInputComponent]
    })
], jqxPasswordInputModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxPasswordInputComponent, jqxPasswordInputModule, ɵ0 };
