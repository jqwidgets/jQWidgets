import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxdropdownbutton from '../../jqwidgets/jqxdropdownbutton';
import * as jqxwindow from '../../jqwidgets/jqxwindow';
import * as jqxeditor from '../../jqwidgets/jqxeditor';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxcolorpicker from '../../jqwidgets/jqxcolorpicker';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxEditorComponent),
    multi: true
};
export class jqxEditorComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['createCommand', 'disabled', 'editable', 'height', 'lineBreak', 'localization', 'pasteMode', 'rtl', 'stylesheets', 'theme', 'toolbarPosition', 'tools', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxEditorComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
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
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxEditor('setOptions', options);
    }
    // jqxEditorComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    createCommand(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('createCommand', arg);
        }
        else {
            return this.host.jqxEditor('createCommand');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('disabled', arg);
        }
        else {
            return this.host.jqxEditor('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    editable(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('editable', arg);
        }
        else {
            return this.host.jqxEditor('editable');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('height', arg);
        }
        else {
            return this.host.jqxEditor('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    lineBreak(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('lineBreak', arg);
        }
        else {
            return this.host.jqxEditor('lineBreak');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('localization', arg);
        }
        else {
            return this.host.jqxEditor('localization');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    pasteMode(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('pasteMode', arg);
        }
        else {
            return this.host.jqxEditor('pasteMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('rtl', arg);
        }
        else {
            return this.host.jqxEditor('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    stylesheets(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('stylesheets', arg);
        }
        else {
            return this.host.jqxEditor('stylesheets');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('theme', arg);
        }
        else {
            return this.host.jqxEditor('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toolbarPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('toolbarPosition', arg);
        }
        else {
            return this.host.jqxEditor('toolbarPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tools(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('tools', arg);
        }
        else {
            return this.host.jqxEditor('tools');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('width', arg);
        }
        else {
            return this.host.jqxEditor('width');
        }
    }
    // jqxEditorComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxEditor('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxEditor('focus');
    }
    /**
     * @return {?}
     */
    print() {
        this.host.jqxEditor('print');
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this.host.jqxEditor('setMode', mode);
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxEditor('val', value);
        }
        else {
            return this.host.jqxEditor('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
    }
} //jqxEditorComponent
jqxEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxEditor',
                template: '<div><ng-content></ng-content></div>',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxEditorComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxEditorComponent.propDecorators = {
    attrCreateCommand: [{ type: Input, args: ['createCommand',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEditable: [{ type: Input, args: ['editable',] }],
    attrLineBreak: [{ type: Input, args: ['lineBreak',] }],
    attrLocalization: [{ type: Input, args: ['localization',] }],
    attrPasteMode: [{ type: Input, args: ['pasteMode',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrStylesheets: [{ type: Input, args: ['stylesheets',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrToolbarPosition: [{ type: Input, args: ['toolbarPosition',] }],
    attrTools: [{ type: Input, args: ['tools',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxEditorComponent.prototype.attrCreateCommand;
    /** @type {?} */
    jqxEditorComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxEditorComponent.prototype.attrEditable;
    /** @type {?} */
    jqxEditorComponent.prototype.attrLineBreak;
    /** @type {?} */
    jqxEditorComponent.prototype.attrLocalization;
    /** @type {?} */
    jqxEditorComponent.prototype.attrPasteMode;
    /** @type {?} */
    jqxEditorComponent.prototype.attrRtl;
    /** @type {?} */
    jqxEditorComponent.prototype.attrStylesheets;
    /** @type {?} */
    jqxEditorComponent.prototype.attrTheme;
    /** @type {?} */
    jqxEditorComponent.prototype.attrToolbarPosition;
    /** @type {?} */
    jqxEditorComponent.prototype.attrTools;
    /** @type {?} */
    jqxEditorComponent.prototype.attrWidth;
    /** @type {?} */
    jqxEditorComponent.prototype.attrHeight;
    /** @type {?} */
    jqxEditorComponent.prototype.autoCreate;
    /** @type {?} */
    jqxEditorComponent.prototype.properties;
    /** @type {?} */
    jqxEditorComponent.prototype.host;
    /** @type {?} */
    jqxEditorComponent.prototype.elementRef;
    /** @type {?} */
    jqxEditorComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxEditorComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxEditorComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxEditorComponent.prototype.onChange;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
