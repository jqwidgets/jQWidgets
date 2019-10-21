import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxinput';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxInputComponent),
    multi: true
};
let jqxInputComponent = class jqxInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'dropDownWidth', 'displayMember', 'height', 'items', 'minLength', 'maxLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'rtl', 'searchMode', 'source', 'theme', 'valueMember', 'width', 'value'];
        this.initialLoad = true;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onSelect = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxInput(this.properties[i])) {
                        this.host.jqxInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxInput', options);
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
            if (typeof value === 'object')
                return '';
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
        if (this.widgetObject && value) {
            if (this.initialLoad) {
                setTimeout(_ => this.host.jqxInput('val', value));
                this.initialLoad = false;
            }
            this.host.jqxInput('val', value);
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxInput('setOptions', options);
    }
    // jqxInputComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('disabled', arg);
        }
        else {
            return this.host.jqxInput('disabled');
        }
    }
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxInput('dropDownWidth');
        }
    }
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('displayMember', arg);
        }
        else {
            return this.host.jqxInput('displayMember');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('height', arg);
        }
        else {
            return this.host.jqxInput('height');
        }
    }
    items(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('items', arg);
        }
        else {
            return this.host.jqxInput('items');
        }
    }
    minLength(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('minLength', arg);
        }
        else {
            return this.host.jqxInput('minLength');
        }
    }
    maxLength(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('maxLength', arg);
        }
        else {
            return this.host.jqxInput('maxLength');
        }
    }
    opened(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('opened', arg);
        }
        else {
            return this.host.jqxInput('opened');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('placeHolder', arg);
        }
        else {
            return this.host.jqxInput('placeHolder');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxInput('popupZIndex');
        }
    }
    query(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('query', arg);
        }
        else {
            return this.host.jqxInput('query');
        }
    }
    renderer(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('renderer', arg);
        }
        else {
            return this.host.jqxInput('renderer');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('rtl', arg);
        }
        else {
            return this.host.jqxInput('rtl');
        }
    }
    searchMode(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('searchMode', arg);
        }
        else {
            return this.host.jqxInput('searchMode');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('source', arg);
        }
        else {
            return this.host.jqxInput('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('theme', arg);
        }
        else {
            return this.host.jqxInput('theme');
        }
    }
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('valueMember', arg);
        }
        else {
            return this.host.jqxInput('valueMember');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('width', arg);
        }
        else {
            return this.host.jqxInput('width');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('value', arg);
        }
        else {
            return this.host.jqxInput('value');
        }
    }
    // jqxInputComponent functions
    destroy() {
        this.host.jqxInput('destroy');
    }
    focus() {
        this.host.jqxInput('focus');
    }
    selectAll() {
        this.host.jqxInput('selectAll');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxInput('val', value);
        }
        else {
            return this.host.jqxInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
    }
}; //jqxInputComponent
jqxInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxInputComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('dropDownWidth'),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "attrDropDownWidth", void 0);
tslib_1.__decorate([
    Input('displayMember'),
    tslib_1.__metadata("design:type", String)
], jqxInputComponent.prototype, "attrDisplayMember", void 0);
tslib_1.__decorate([
    Input('items'),
    tslib_1.__metadata("design:type", Number)
], jqxInputComponent.prototype, "attrItems", void 0);
tslib_1.__decorate([
    Input('minLength'),
    tslib_1.__metadata("design:type", Number)
], jqxInputComponent.prototype, "attrMinLength", void 0);
tslib_1.__decorate([
    Input('maxLength'),
    tslib_1.__metadata("design:type", Number)
], jqxInputComponent.prototype, "attrMaxLength", void 0);
tslib_1.__decorate([
    Input('opened'),
    tslib_1.__metadata("design:type", Boolean)
], jqxInputComponent.prototype, "attrOpened", void 0);
tslib_1.__decorate([
    Input('placeHolder'),
    tslib_1.__metadata("design:type", String)
], jqxInputComponent.prototype, "attrPlaceHolder", void 0);
tslib_1.__decorate([
    Input('popupZIndex'),
    tslib_1.__metadata("design:type", Number)
], jqxInputComponent.prototype, "attrPopupZIndex", void 0);
tslib_1.__decorate([
    Input('query'),
    tslib_1.__metadata("design:type", String)
], jqxInputComponent.prototype, "attrQuery", void 0);
tslib_1.__decorate([
    Input('renderer'),
    tslib_1.__metadata("design:type", Function)
], jqxInputComponent.prototype, "attrRenderer", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxInputComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('searchMode'),
    tslib_1.__metadata("design:type", String)
], jqxInputComponent.prototype, "attrSearchMode", void 0);
tslib_1.__decorate([
    Input('source'),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "attrSource", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxInputComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('valueMember'),
    tslib_1.__metadata("design:type", String)
], jqxInputComponent.prototype, "attrValueMember", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxInputComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "onChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "onClose", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "onOpen", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxInputComponent.prototype, "onSelect", void 0);
jqxInputComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxInput',
        template: '<input type="text" [(ngModel)]="ngValue">',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxInputComponent);
export { jqxInputComponent };
export { ɵ0 };
