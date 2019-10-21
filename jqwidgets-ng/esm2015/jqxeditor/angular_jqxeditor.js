import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxdropdownbutton';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxeditor';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxcolorpicker';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };
const ɵ0 = noop;
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxEditorComponent),
    multi: true
};
let jqxEditorComponent = class jqxEditorComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['createCommand', 'disabled', 'editable', 'height', 'lineBreak', 'localization', 'pasteMode', 'rtl', 'stylesheets', 'theme', 'toolbarPosition', 'tools', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxEditorComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxEditor(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxEditor(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxEditor(this.properties[i])) {
                        this.host.jqxEditor(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxEditor', options);
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
        this.host.jqxEditor('setOptions', options);
    }
    // jqxEditorComponent properties
    createCommand(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('createCommand', arg);
        }
        else {
            return this.host.jqxEditor('createCommand');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('disabled', arg);
        }
        else {
            return this.host.jqxEditor('disabled');
        }
    }
    editable(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('editable', arg);
        }
        else {
            return this.host.jqxEditor('editable');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('height', arg);
        }
        else {
            return this.host.jqxEditor('height');
        }
    }
    lineBreak(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('lineBreak', arg);
        }
        else {
            return this.host.jqxEditor('lineBreak');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('localization', arg);
        }
        else {
            return this.host.jqxEditor('localization');
        }
    }
    pasteMode(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('pasteMode', arg);
        }
        else {
            return this.host.jqxEditor('pasteMode');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('rtl', arg);
        }
        else {
            return this.host.jqxEditor('rtl');
        }
    }
    stylesheets(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('stylesheets', arg);
        }
        else {
            return this.host.jqxEditor('stylesheets');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('theme', arg);
        }
        else {
            return this.host.jqxEditor('theme');
        }
    }
    toolbarPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('toolbarPosition', arg);
        }
        else {
            return this.host.jqxEditor('toolbarPosition');
        }
    }
    tools(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('tools', arg);
        }
        else {
            return this.host.jqxEditor('tools');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('width', arg);
        }
        else {
            return this.host.jqxEditor('width');
        }
    }
    // jqxEditorComponent functions
    destroy() {
        this.host.jqxEditor('destroy');
    }
    focus() {
        this.host.jqxEditor('focus');
    }
    print() {
        this.host.jqxEditor('print');
    }
    setMode(mode) {
        this.host.jqxEditor('setMode', mode);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxEditor('val', value);
        }
        else {
            return this.host.jqxEditor('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
    }
}; //jqxEditorComponent
jqxEditorComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('createCommand'),
    tslib_1.__metadata("design:type", Function)
], jqxEditorComponent.prototype, "attrCreateCommand", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('editable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "attrEditable", void 0);
tslib_1.__decorate([
    Input('lineBreak'),
    tslib_1.__metadata("design:type", String)
], jqxEditorComponent.prototype, "attrLineBreak", void 0);
tslib_1.__decorate([
    Input('localization'),
    tslib_1.__metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrLocalization", void 0);
tslib_1.__decorate([
    Input('pasteMode'),
    tslib_1.__metadata("design:type", String)
], jqxEditorComponent.prototype, "attrPasteMode", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('stylesheets'),
    tslib_1.__metadata("design:type", Array)
], jqxEditorComponent.prototype, "attrStylesheets", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxEditorComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('toolbarPosition'),
    tslib_1.__metadata("design:type", String)
], jqxEditorComponent.prototype, "attrToolbarPosition", void 0);
tslib_1.__decorate([
    Input('tools'),
    tslib_1.__metadata("design:type", String)
], jqxEditorComponent.prototype, "attrTools", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxEditorComponent.prototype, "onChange", void 0);
jqxEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxEditor',
        template: '<div><ng-content></ng-content></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxEditorComponent);
export { jqxEditorComponent };
export { ɵ0 };
