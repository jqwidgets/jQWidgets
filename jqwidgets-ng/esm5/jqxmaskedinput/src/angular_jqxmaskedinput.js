import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxmaskedinput from '../../jqwidgets/jqxmaskedinput';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
/** @type {?} */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return jqxMaskedInputComponent; }),
    multi: true
};
var jqxMaskedInputComponent = /** @class */ (function () {
    function jqxMaskedInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'mask', 'promptChar', 'readOnly', 'rtl', 'theme', 'textAlign', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxMaskedInputComponent events
        this.onChange = new EventEmitter();
        this.onValueChanged = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMaskedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMaskedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMaskedInput(this.properties[i])) {
                        this.host.jqxMaskedInput(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMaskedInput', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.widgetObject) {
            this.host.jqxMaskedInput('val', value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxMaskedInput('setOptions', options);
    };
    // jqxMaskedInputComponent properties
    // jqxMaskedInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.disabled = 
    // jqxMaskedInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('disabled', arg);
        }
        else {
            return this.host.jqxMaskedInput('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('height', arg);
        }
        else {
            return this.host.jqxMaskedInput('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.mask = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('mask', arg);
        }
        else {
            return this.host.jqxMaskedInput('mask');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.promptChar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('promptChar', arg);
        }
        else {
            return this.host.jqxMaskedInput('promptChar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.readOnly = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('readOnly', arg);
        }
        else {
            return this.host.jqxMaskedInput('readOnly');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('rtl', arg);
        }
        else {
            return this.host.jqxMaskedInput('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('theme', arg);
        }
        else {
            return this.host.jqxMaskedInput('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.textAlign = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('textAlign', arg);
        }
        else {
            return this.host.jqxMaskedInput('textAlign');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('value', arg);
        }
        else {
            return this.host.jqxMaskedInput('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxMaskedInput('width', arg);
        }
        else {
            return this.host.jqxMaskedInput('width');
        }
    };
    // jqxMaskedInputComponent functions
    // jqxMaskedInputComponent functions
    /**
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.clear = 
    // jqxMaskedInputComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxMaskedInput('clear');
    };
    /**
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxMaskedInput('destroy');
    };
    /**
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxMaskedInput('focus');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxMaskedInput('val', value);
        }
        else {
            return this.host.jqxMaskedInput('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxMaskedInputComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.parent().on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
        this.host.parent().on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); _this.onChangeCallback(_this.host.val()); });
    };
    jqxMaskedInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxMaskedInput',
                    template: '<input>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxMaskedInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxMaskedInputComponent.propDecorators = {
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrMask: [{ type: Input, args: ['mask',] }],
        attrPromptChar: [{ type: Input, args: ['promptChar',] }],
        attrReadOnly: [{ type: Input, args: ['readOnly',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrTextAlign: [{ type: Input, args: ['textAlign',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }],
        onValueChanged: [{ type: Output }]
    };
    return jqxMaskedInputComponent;
}()); //jqxMaskedInputComponent
export { jqxMaskedInputComponent };
if (false) {
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrMask;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrPromptChar;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrReadOnly;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrTextAlign;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.properties;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.host;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxMaskedInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxMaskedInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.onChange;
    /** @type {?} */
    jqxMaskedInputComponent.prototype.onValueChanged;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
