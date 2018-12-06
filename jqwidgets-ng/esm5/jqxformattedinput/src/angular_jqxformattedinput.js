import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxformattedinput from '../../jqwidgets/jqxformattedinput';
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
    useExisting: forwardRef(function () { return jqxFormattedInputComponent; }),
    multi: true
};
var jqxFormattedInputComponent = /** @class */ (function () {
    function jqxFormattedInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'decimalNotation', 'dropDown', 'dropDownWidth', 'height', 'min', 'max', 'placeHolder', 'popupZIndex', 'roundedCorners', 'rtl', 'radix', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'upperCase', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxFormattedInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onRadixChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.ngOnInit = /**
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
    jqxFormattedInputComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxFormattedInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxFormattedInput(this.properties[i])) {
                        this.host.jqxFormattedInput(this.properties[i], this[attrName]);
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
    jqxFormattedInputComponent.prototype.arraysEqual = /**
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
    jqxFormattedInputComponent.prototype.manageAttributes = /**
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
    jqxFormattedInputComponent.prototype.moveClasses = /**
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
    jqxFormattedInputComponent.prototype.moveStyles = /**
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
    jqxFormattedInputComponent.prototype.createComponent = /**
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
        if (this.attrRtl !== true) {
            if (this.attrSpinButtons === false) {
                this.host.children()[1].remove();
            }
            if (this.attrDropDown !== true) {
                this.host.children()[1].remove();
            }
        }
        else if (this.attrRtl === true) {
            this.host.children()[1].remove();
            this.host.children()[1].remove();
            if (this.attrSpinButtons !== false) {
                this.host.prepend('<div></div>');
            }
            if (this.attrDropDown === true) {
                this.host.prepend('<div></div>');
            }
        }
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFormattedInput', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxFormattedInputComponent.prototype, "ngValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.widgetObject) {
                /** @type {?} */
                var value = this.host.val();
                return value;
            }
            return '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.widgetObject) {
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.widgetObject) {
            this.host.jqxFormattedInput('val', value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.registerOnChange = /**
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
    jqxFormattedInputComponent.prototype.registerOnTouched = /**
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
    jqxFormattedInputComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxFormattedInput('setOptions', options);
    };
    // jqxFormattedInputComponent properties
    // jqxFormattedInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.disabled = 
    // jqxFormattedInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('disabled', arg);
        }
        else {
            return this.host.jqxFormattedInput('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.decimalNotation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxFormattedInput('decimalNotation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.dropDown = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDown', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDown');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.dropDownWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxFormattedInput('dropDownWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('height', arg);
        }
        else {
            return this.host.jqxFormattedInput('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.min = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('min', arg);
        }
        else {
            return this.host.jqxFormattedInput('min');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.max = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('max', arg);
        }
        else {
            return this.host.jqxFormattedInput('max');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.placeHolder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('placeHolder', arg);
        }
        else {
            return this.host.jqxFormattedInput('placeHolder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.popupZIndex = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxFormattedInput('popupZIndex');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.roundedCorners = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxFormattedInput('roundedCorners');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('rtl', arg);
        }
        else {
            return this.host.jqxFormattedInput('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.radix = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('radix', arg);
        }
        else {
            return this.host.jqxFormattedInput('radix');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.spinButtons = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtons', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtons');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.spinButtonsStep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxFormattedInput('spinButtonsStep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('template', arg);
        }
        else {
            return this.host.jqxFormattedInput('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('theme', arg);
        }
        else {
            return this.host.jqxFormattedInput('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.upperCase = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('upperCase', arg);
        }
        else {
            return this.host.jqxFormattedInput('upperCase');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('value', arg);
        }
        else {
            return this.host.jqxFormattedInput('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFormattedInput('width', arg);
        }
        else {
            return this.host.jqxFormattedInput('width');
        }
    };
    // jqxFormattedInputComponent functions
    // jqxFormattedInputComponent functions
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.close = 
    // jqxFormattedInputComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('close');
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('destroy');
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('focus');
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('open');
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('render');
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('refresh');
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('selectAll');
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.selectFirst = /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('selectFirst');
    };
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.selectLast = /**
     * @return {?}
     */
    function () {
        this.host.jqxFormattedInput('selectLast');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxFormattedInput('val', value);
        }
        else {
            return this.host.jqxFormattedInput('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxFormattedInputComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('radixChange', function (eventData) { _this.onRadixChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
    };
    jqxFormattedInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxFormattedInput',
                    template: '<div><input type="text" [(ngModel)]="ngValue"><div></div><div></div></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxFormattedInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxFormattedInputComponent.propDecorators = {
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrDecimalNotation: [{ type: Input, args: ['decimalNotation',] }],
        attrDropDown: [{ type: Input, args: ['dropDown',] }],
        attrDropDownWidth: [{ type: Input, args: ['dropDownWidth',] }],
        attrMin: [{ type: Input, args: ['min',] }],
        attrMax: [{ type: Input, args: ['max',] }],
        attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
        attrPopupZIndex: [{ type: Input, args: ['popupZIndex',] }],
        attrRoundedCorners: [{ type: Input, args: ['roundedCorners',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrRadix: [{ type: Input, args: ['radix',] }],
        attrSpinButtons: [{ type: Input, args: ['spinButtons',] }],
        attrSpinButtonsStep: [{ type: Input, args: ['spinButtonsStep',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrUpperCase: [{ type: Input, args: ['upperCase',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }],
        onClose: [{ type: Output }],
        onOpen: [{ type: Output }],
        onRadixChange: [{ type: Output }]
    };
    return jqxFormattedInputComponent;
}()); //jqxFormattedInputComponent
export { jqxFormattedInputComponent };
if (false) {
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrDecimalNotation;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrDropDown;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrDropDownWidth;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrMin;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrMax;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrPopupZIndex;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrRoundedCorners;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrRadix;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrSpinButtons;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrSpinButtonsStep;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrUpperCase;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.properties;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.host;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxFormattedInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxFormattedInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.onChange;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.onClose;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.onOpen;
    /** @type {?} */
    jqxFormattedInputComponent.prototype.onRadixChange;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
