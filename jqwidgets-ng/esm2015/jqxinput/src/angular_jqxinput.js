import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxinput from '../../jqwidgets/jqxinput';
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
    useExisting: forwardRef(() => jqxInputComponent),
    multi: true
};
export class jqxInputComponent {
    /**
     * @param {?} containerElement
     */
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
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxInput', options);
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
     * @return {?}
     */
    get ngValue() {
        if (this.widgetObject) {
            /** @type {?} */
            const value = this.host.val();
            if (typeof value === 'object')
                return value.label;
            return value;
        }
        return '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this.widgetObject && value) {
            if (this.initialLoad) {
                setTimeout(_ => this.host.jqxInput('val', value));
                this.initialLoad = false;
            }
            this.host.jqxInput('val', value);
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
        this.host.jqxInput('setOptions', options);
    }
    // jqxInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('disabled', arg);
        }
        else {
            return this.host.jqxInput('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxInput('dropDownWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('displayMember', arg);
        }
        else {
            return this.host.jqxInput('displayMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('height', arg);
        }
        else {
            return this.host.jqxInput('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    items(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('items', arg);
        }
        else {
            return this.host.jqxInput('items');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minLength(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('minLength', arg);
        }
        else {
            return this.host.jqxInput('minLength');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    maxLength(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('maxLength', arg);
        }
        else {
            return this.host.jqxInput('maxLength');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    opened(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('opened', arg);
        }
        else {
            return this.host.jqxInput('opened');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('placeHolder', arg);
        }
        else {
            return this.host.jqxInput('placeHolder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxInput('popupZIndex');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    query(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('query', arg);
        }
        else {
            return this.host.jqxInput('query');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderer(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('renderer', arg);
        }
        else {
            return this.host.jqxInput('renderer');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('rtl', arg);
        }
        else {
            return this.host.jqxInput('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    searchMode(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('searchMode', arg);
        }
        else {
            return this.host.jqxInput('searchMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('source', arg);
        }
        else {
            return this.host.jqxInput('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('theme', arg);
        }
        else {
            return this.host.jqxInput('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('valueMember', arg);
        }
        else {
            return this.host.jqxInput('valueMember');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('width', arg);
        }
        else {
            return this.host.jqxInput('width');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('value', arg);
        }
        else {
            return this.host.jqxInput('value');
        }
    }
    // jqxInputComponent functions
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxInput('destroy');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxInput('focus');
    }
    /**
     * @return {?}
     */
    selectAll() {
        this.host.jqxInput('selectAll');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    val(value) {
        if (value !== undefined) {
            return this.host.jqxInput('val', value);
        }
        else {
            return this.host.jqxInput('val');
        }
    }
    ;
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
    }
} //jqxInputComponent
jqxInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxInput',
                template: '<input type="text" [(ngModel)]="ngValue">',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
jqxInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxInputComponent.propDecorators = {
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrDropDownWidth: [{ type: Input, args: ['dropDownWidth',] }],
    attrDisplayMember: [{ type: Input, args: ['displayMember',] }],
    attrItems: [{ type: Input, args: ['items',] }],
    attrMinLength: [{ type: Input, args: ['minLength',] }],
    attrMaxLength: [{ type: Input, args: ['maxLength',] }],
    attrOpened: [{ type: Input, args: ['opened',] }],
    attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
    attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
    attrQuery: [{ type: Input, args: ['query',] }],
    attrRenderer: [{ type: Input, args: ['renderer',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrSearchMode: [{ type: Input, args: ['searchMode',] }],
    attrSource: [{ type: Input, args: ['source',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrValueMember: [{ type: Input, args: ['valueMember',] }],
    attrValue: [{ type: Input, args: ['value',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onChange: [{ type: Output }],
    onClose: [{ type: Output }],
    onOpen: [{ type: Output }],
    onSelect: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxInputComponent.prototype.attrDropDownWidth;
    /** @type {?} */
    jqxInputComponent.prototype.attrDisplayMember;
    /** @type {?} */
    jqxInputComponent.prototype.attrItems;
    /** @type {?} */
    jqxInputComponent.prototype.attrMinLength;
    /** @type {?} */
    jqxInputComponent.prototype.attrMaxLength;
    /** @type {?} */
    jqxInputComponent.prototype.attrOpened;
    /** @type {?} */
    jqxInputComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxInputComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxInputComponent.prototype.attrQuery;
    /** @type {?} */
    jqxInputComponent.prototype.attrRenderer;
    /** @type {?} */
    jqxInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxInputComponent.prototype.attrSearchMode;
    /** @type {?} */
    jqxInputComponent.prototype.attrSource;
    /** @type {?} */
    jqxInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxInputComponent.prototype.attrValueMember;
    /** @type {?} */
    jqxInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxInputComponent.prototype.properties;
    /** @type {?} */
    jqxInputComponent.prototype.host;
    /** @type {?} */
    jqxInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxInputComponent.prototype.widgetObject;
    /** @type {?} */
    jqxInputComponent.prototype.initialLoad;
    /**
     * @type {?}
     * @private
     */
    jqxInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxInputComponent.prototype.onChange;
    /** @type {?} */
    jqxInputComponent.prototype.onClose;
    /** @type {?} */
    jqxInputComponent.prototype.onOpen;
    /** @type {?} */
    jqxInputComponent.prototype.onSelect;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
