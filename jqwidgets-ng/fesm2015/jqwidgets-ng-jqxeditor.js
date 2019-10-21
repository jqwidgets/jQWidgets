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
import { __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Input, Output, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
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
__decorate([
    Input('createCommand'),
    __metadata("design:type", Function)
], jqxEditorComponent.prototype, "attrCreateCommand", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('editable'),
    __metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "attrEditable", void 0);
__decorate([
    Input('lineBreak'),
    __metadata("design:type", String)
], jqxEditorComponent.prototype, "attrLineBreak", void 0);
__decorate([
    Input('localization'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrLocalization", void 0);
__decorate([
    Input('pasteMode'),
    __metadata("design:type", String)
], jqxEditorComponent.prototype, "attrPasteMode", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('stylesheets'),
    __metadata("design:type", Array)
], jqxEditorComponent.prototype, "attrStylesheets", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxEditorComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('toolbarPosition'),
    __metadata("design:type", String)
], jqxEditorComponent.prototype, "attrToolbarPosition", void 0);
__decorate([
    Input('tools'),
    __metadata("design:type", String)
], jqxEditorComponent.prototype, "attrTools", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxEditorComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxEditorComponent.prototype, "onChange", void 0);
jqxEditorComponent = __decorate([
    Component({
        selector: 'jqxEditor',
        template: '<div><ng-content></ng-content></div>',
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxEditorComponent);

let jqxEditorModule = class jqxEditorModule {
};
jqxEditorModule = __decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxEditorComponent],
        exports: [jqxEditorComponent]
    })
], jqxEditorModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxEditorComponent, jqxEditorModule, ɵ0 };
