import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxradiobutton';
import { __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxRadioButtonComponent),
    multi: true
};
let jqxRadioButtonComponent = class jqxRadioButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'hasThreeStates', 'height', 'rtl', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxRadioButtonComponent events
        this.onChecked = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onUnchecked = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRadioButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRadioButton(this.properties[i])) {
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);
        this.valueAttr = this.host[0].parentElement.getAttribute('value');
        if (options.checked === true)
            this.onChangeCallback(this.valueAttr);
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
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxRadioButton('setOptions', options);
    }
    // jqxRadioButtonComponent properties
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationShowDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationShowDelay');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationHideDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationHideDelay');
        }
    }
    boxSize(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('boxSize', arg);
        }
        else {
            return this.host.jqxRadioButton('boxSize');
        }
    }
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('checked', arg);
        }
        else {
            return this.host.jqxRadioButton('checked');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('disabled', arg);
        }
        else {
            return this.host.jqxRadioButton('disabled');
        }
    }
    enableContainerClick(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('enableContainerClick', arg);
        }
        else {
            return this.host.jqxRadioButton('enableContainerClick');
        }
    }
    groupName(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('groupName', arg);
        }
        else {
            return this.host.jqxRadioButton('groupName');
        }
    }
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('hasThreeStates', arg);
        }
        else {
            return this.host.jqxRadioButton('hasThreeStates');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('height', arg);
        }
        else {
            return this.host.jqxRadioButton('height');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('rtl', arg);
        }
        else {
            return this.host.jqxRadioButton('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('theme', arg);
        }
        else {
            return this.host.jqxRadioButton('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('width', arg);
        }
        else {
            return this.host.jqxRadioButton('width');
        }
    }
    // jqxRadioButtonComponent functions
    check() {
        this.host.jqxRadioButton('check');
    }
    disable() {
        this.host.jqxRadioButton('disable');
    }
    destroy() {
        this.host.jqxRadioButton('destroy');
    }
    enable() {
        this.host.jqxRadioButton('enable');
    }
    focus() {
        this.host.jqxRadioButton('focus');
    }
    render() {
        this.host.jqxRadioButton('render');
    }
    uncheck() {
        this.host.jqxRadioButton('uncheck');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRadioButton('val', value);
        }
        else {
            return this.host.jqxRadioButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); this.onChangeCallback(this.valueAttr); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
    }
}; //jqxRadioButtonComponent
jqxRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationShowDelay'),
    __metadata("design:type", Number)
], jqxRadioButtonComponent.prototype, "attrAnimationShowDelay", void 0);
__decorate([
    Input('animationHideDelay'),
    __metadata("design:type", Number)
], jqxRadioButtonComponent.prototype, "attrAnimationHideDelay", void 0);
__decorate([
    Input('boxSize'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrBoxSize", void 0);
__decorate([
    Input('checked'),
    __metadata("design:type", Boolean)
], jqxRadioButtonComponent.prototype, "attrChecked", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxRadioButtonComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('enableContainerClick'),
    __metadata("design:type", Boolean)
], jqxRadioButtonComponent.prototype, "attrEnableContainerClick", void 0);
__decorate([
    Input('groupName'),
    __metadata("design:type", String)
], jqxRadioButtonComponent.prototype, "attrGroupName", void 0);
__decorate([
    Input('hasThreeStates'),
    __metadata("design:type", Boolean)
], jqxRadioButtonComponent.prototype, "attrHasThreeStates", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxRadioButtonComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxRadioButtonComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxRadioButtonComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "onChecked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxRadioButtonComponent.prototype, "onUnchecked", void 0);
jqxRadioButtonComponent = __decorate([
    Component({
        selector: 'jqxRadioButton',
        template: '<div><ng-content></ng-content></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxRadioButtonComponent);

let jqxRadioButtonModule = class jqxRadioButtonModule {
};
jqxRadioButtonModule = __decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxRadioButtonComponent],
        exports: [jqxRadioButtonComponent]
    })
], jqxRadioButtonModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxRadioButtonComponent, jqxRadioButtonModule, ɵ0 };
