import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxtimepicker';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxTimePickerComponent = class jqxTimePickerComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoSwitchToMinutes', 'disabled', 'footer', 'footerTemplate', 'format', 'height', 'minuteInterval', 'name', 'readonly', 'selection', 'theme', 'unfocusable', 'value', 'view', 'width'];
        // jqxTimePickerComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTimePicker(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTimePicker(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTimePicker(this.properties[i])) {
                        this.host.jqxTimePicker(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTimePicker', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTimePicker('setOptions', options);
    }
    // jqxTimePickerComponent properties
    autoSwitchToMinutes(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('autoSwitchToMinutes', arg);
        }
        else {
            return this.host.jqxTimePicker('autoSwitchToMinutes');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('disabled', arg);
        }
        else {
            return this.host.jqxTimePicker('disabled');
        }
    }
    footer(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('footer', arg);
        }
        else {
            return this.host.jqxTimePicker('footer');
        }
    }
    footerTemplate(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('footerTemplate', arg);
        }
        else {
            return this.host.jqxTimePicker('footerTemplate');
        }
    }
    format(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('format', arg);
        }
        else {
            return this.host.jqxTimePicker('format');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('height', arg);
        }
        else {
            return this.host.jqxTimePicker('height');
        }
    }
    minuteInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('minuteInterval', arg);
        }
        else {
            return this.host.jqxTimePicker('minuteInterval');
        }
    }
    name(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('name', arg);
        }
        else {
            return this.host.jqxTimePicker('name');
        }
    }
    readonly(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('readonly', arg);
        }
        else {
            return this.host.jqxTimePicker('readonly');
        }
    }
    selection(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('selection', arg);
        }
        else {
            return this.host.jqxTimePicker('selection');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('theme', arg);
        }
        else {
            return this.host.jqxTimePicker('theme');
        }
    }
    unfocusable(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('unfocusable', arg);
        }
        else {
            return this.host.jqxTimePicker('unfocusable');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('value', arg);
        }
        else {
            return this.host.jqxTimePicker('value');
        }
    }
    view(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('view', arg);
        }
        else {
            return this.host.jqxTimePicker('view');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('width', arg);
        }
        else {
            return this.host.jqxTimePicker('width');
        }
    }
    // jqxTimePickerComponent functions
    setHours(hours) {
        this.host.jqxTimePicker('setHours', hours);
    }
    setMinutes(minutes) {
        this.host.jqxTimePicker('setMinutes', minutes);
    }
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
}; //jqxTimePickerComponent
jqxTimePickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('autoSwitchToMinutes'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTimePickerComponent.prototype, "attrAutoSwitchToMinutes", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTimePickerComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('footer'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTimePickerComponent.prototype, "attrFooter", void 0);
tslib_1.__decorate([
    Input('footerTemplate'),
    tslib_1.__metadata("design:type", String)
], jqxTimePickerComponent.prototype, "attrFooterTemplate", void 0);
tslib_1.__decorate([
    Input('format'),
    tslib_1.__metadata("design:type", String)
], jqxTimePickerComponent.prototype, "attrFormat", void 0);
tslib_1.__decorate([
    Input('minuteInterval'),
    tslib_1.__metadata("design:type", Number)
], jqxTimePickerComponent.prototype, "attrMinuteInterval", void 0);
tslib_1.__decorate([
    Input('name'),
    tslib_1.__metadata("design:type", String)
], jqxTimePickerComponent.prototype, "attrName", void 0);
tslib_1.__decorate([
    Input('readonly'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTimePickerComponent.prototype, "attrReadonly", void 0);
tslib_1.__decorate([
    Input('selection'),
    tslib_1.__metadata("design:type", String)
], jqxTimePickerComponent.prototype, "attrSelection", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxTimePickerComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('unfocusable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTimePickerComponent.prototype, "attrUnfocusable", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object)
], jqxTimePickerComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('view'),
    tslib_1.__metadata("design:type", String)
], jqxTimePickerComponent.prototype, "attrView", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxTimePickerComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxTimePickerComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTimePickerComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTimePickerComponent.prototype, "onChange", void 0);
jqxTimePickerComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxTimePicker',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxTimePickerComponent);
export { jqxTimePickerComponent };
