import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxswitchbutton';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSwitchButtonComponent),
    multi: true
};
let jqxSwitchButtonComponent = class jqxSwitchButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['checked', 'disabled', 'height', 'orientation', 'onLabel', 'offLabel', 'thumbSize', 'rtl', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxSwitchButtonComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSwitchButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSwitchButton(this.properties[i])) {
                        this.host.jqxSwitchButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSwitchButton', options);
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
        this.host.jqxSwitchButton('setOptions', options);
    }
    // jqxSwitchButtonComponent properties
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('checked', arg);
        }
        else {
            return this.host.jqxSwitchButton('checked');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('disabled', arg);
        }
        else {
            return this.host.jqxSwitchButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('height', arg);
        }
        else {
            return this.host.jqxSwitchButton('height');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('orientation', arg);
        }
        else {
            return this.host.jqxSwitchButton('orientation');
        }
    }
    onLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('onLabel', arg);
        }
        else {
            return this.host.jqxSwitchButton('onLabel');
        }
    }
    offLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('offLabel', arg);
        }
        else {
            return this.host.jqxSwitchButton('offLabel');
        }
    }
    thumbSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('thumbSize', arg);
        }
        else {
            return this.host.jqxSwitchButton('thumbSize');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('rtl', arg);
        }
        else {
            return this.host.jqxSwitchButton('rtl');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('width', arg);
        }
        else {
            return this.host.jqxSwitchButton('width');
        }
    }
    // jqxSwitchButtonComponent functions
    check() {
        this.host.jqxSwitchButton('check');
    }
    disable() {
        this.host.jqxSwitchButton('disable');
    }
    enable() {
        this.host.jqxSwitchButton('enable');
    }
    toggle() {
        this.host.jqxSwitchButton('toggle');
    }
    uncheck() {
        this.host.jqxSwitchButton('uncheck');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxSwitchButton('val', value);
        }
        else {
            return this.host.jqxSwitchButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
    }
}; //jqxSwitchButtonComponent
jqxSwitchButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('checked'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSwitchButtonComponent.prototype, "attrChecked", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSwitchButtonComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('orientation'),
    tslib_1.__metadata("design:type", String)
], jqxSwitchButtonComponent.prototype, "attrOrientation", void 0);
tslib_1.__decorate([
    Input('onLabel'),
    tslib_1.__metadata("design:type", String)
], jqxSwitchButtonComponent.prototype, "attrOnLabel", void 0);
tslib_1.__decorate([
    Input('offLabel'),
    tslib_1.__metadata("design:type", String)
], jqxSwitchButtonComponent.prototype, "attrOffLabel", void 0);
tslib_1.__decorate([
    Input('thumbSize'),
    tslib_1.__metadata("design:type", String)
], jqxSwitchButtonComponent.prototype, "attrThumbSize", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSwitchButtonComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxSwitchButtonComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "onChecked", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxSwitchButtonComponent.prototype, "onUnchecked", void 0);
jqxSwitchButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxSwitchButton',
        template: '<div><ng-content></ng-content></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxSwitchButtonComponent);
export { jqxSwitchButtonComponent };
export { ɵ0 };
