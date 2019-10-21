import '../jqwidgets/jqxcore';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxinput';
import '../jqwidgets/jqxpasswordinput';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxradiobutton';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxmaskedinput';
import '../jqwidgets/jqxcalendar';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxform';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxFormComponent = class jqxFormComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['padding', 'backgroundColor', 'borderColor', 'value', 'template'];
        // jqxFormComponent events
        this.onFormDataChange = new EventEmitter();
        this.onButtonClick = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize(() => {
            this.__updateRect__();
        });
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxForm(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxForm(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxForm(this.properties[i])) {
                        this.host.jqxForm(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxForm', options);
        this.__updateRect__();
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    }
    setOptions(options) {
        this.host.jqxForm('setOptions', options);
    }
    // jqxFormComponent properties
    padding(arg) {
        if (arg !== undefined) {
            this.host.jqxForm('padding', arg);
        }
        else {
            return this.host.jqxForm('padding');
        }
    }
    backgroundColor(arg) {
        if (arg !== undefined) {
            this.host.jqxForm('backgroundColor', arg);
        }
        else {
            return this.host.jqxForm('backgroundColor');
        }
    }
    borderColor(arg) {
        if (arg !== undefined) {
            this.host.jqxForm('borderColor', arg);
        }
        else {
            return this.host.jqxForm('borderColor');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxForm('value', arg);
        }
        else {
            return this.host.jqxForm('value');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxForm('template', arg);
        }
        else {
            return this.host.jqxForm('template');
        }
    }
    // jqxFormComponent functions
    getInstance() {
        return this.host.jqxForm('getInstance');
    }
    refresh() {
        this.host.jqxForm('refresh');
    }
    destroy() {
        this.host.jqxForm('destroy');
    }
    hideComponent(name) {
        this.host.jqxForm('hideComponent', name);
    }
    showComponent(name) {
        this.host.jqxForm('showComponent', name);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxForm('val', value);
        }
        else {
            return this.host.jqxForm('val');
        }
    }
    ;
    submit(action, target, method) {
        this.host.jqxForm('submit', action, target, method);
    }
    getComponentByName(name) {
        return this.host.jqxForm('getComponentByName', name);
    }
    __wireEvents__() {
        this.host.on('formDataChange', (eventData) => { this.onFormDataChange.emit(eventData); });
        this.host.on('buttonClick', (eventData) => { this.onButtonClick.emit(eventData); });
    }
}; //jqxFormComponent
jqxFormComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('padding'),
    tslib_1.__metadata("design:type", Object)
], jqxFormComponent.prototype, "attrPadding", void 0);
tslib_1.__decorate([
    Input('backgroundColor'),
    tslib_1.__metadata("design:type", String)
], jqxFormComponent.prototype, "attrBackgroundColor", void 0);
tslib_1.__decorate([
    Input('borderColor'),
    tslib_1.__metadata("design:type", String)
], jqxFormComponent.prototype, "attrBorderColor", void 0);
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object)
], jqxFormComponent.prototype, "attrValue", void 0);
tslib_1.__decorate([
    Input('template'),
    tslib_1.__metadata("design:type", Array)
], jqxFormComponent.prototype, "attrTemplate", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxFormComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxFormComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxFormComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxFormComponent.prototype, "onFormDataChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxFormComponent.prototype, "onButtonClick", void 0);
jqxFormComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxForm',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxFormComponent);
export { jqxFormComponent };
