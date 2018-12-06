import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxcomplexinput from '../../jqwidgets/jqxcomplexinput';
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
    useExisting: forwardRef(function () { return jqxComplexInputComponent; }),
    multi: true
};
var jqxComplexInputComponent = /** @class */ (function () {
    function jqxComplexInputComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['decimalNotation', 'disabled', 'height', 'placeHolder', 'roundedCorners', 'rtl', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxComplexInputComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxComplexInputComponent.prototype.ngOnInit = /**
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
    jqxComplexInputComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxComplexInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxComplexInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxComplexInput(this.properties[i])) {
                        this.host.jqxComplexInput(this.properties[i], this[attrName]);
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
    jqxComplexInputComponent.prototype.arraysEqual = /**
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
    jqxComplexInputComponent.prototype.manageAttributes = /**
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
    jqxComplexInputComponent.prototype.moveClasses = /**
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
    jqxComplexInputComponent.prototype.moveStyles = /**
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
    jqxComplexInputComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _this = this;
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComplexInput', options);
        setTimeout(function (_) {
            /** @type {?} */
            var valueWithWS = 'JQXLite{options.value}';
            _this.host.jqxComplexInput({ value: valueWithWS });
        });
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxComplexInputComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxComplexInputComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    Object.defineProperty(jqxComplexInputComponent.prototype, "ngValue", {
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
    jqxComplexInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
            this.host.jqxComplexInput('val', value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    jqxComplexInputComponent.prototype.registerOnChange = /**
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
    jqxComplexInputComponent.prototype.registerOnTouched = /**
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
    jqxComplexInputComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxComplexInput('setOptions', options);
    };
    // jqxComplexInputComponent properties
    // jqxComplexInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.decimalNotation = 
    // jqxComplexInputComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxComplexInput('decimalNotation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('disabled', arg);
        }
        else {
            return this.host.jqxComplexInput('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('height', arg);
        }
        else {
            return this.host.jqxComplexInput('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.placeHolder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('placeHolder', arg);
        }
        else {
            return this.host.jqxComplexInput('placeHolder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.roundedCorners = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxComplexInput('roundedCorners');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('rtl', arg);
        }
        else {
            return this.host.jqxComplexInput('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.spinButtons = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('spinButtons', arg);
        }
        else {
            return this.host.jqxComplexInput('spinButtons');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.spinButtonsStep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxComplexInput('spinButtonsStep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.template = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('template', arg);
        }
        else {
            return this.host.jqxComplexInput('template');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('theme', arg);
        }
        else {
            return this.host.jqxComplexInput('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.value = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('value', arg);
        }
        else {
            return this.host.jqxComplexInput('value');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxComplexInputComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('width', arg);
        }
        else {
            return this.host.jqxComplexInput('width');
        }
    };
    // jqxComplexInputComponent functions
    // jqxComplexInputComponent functions
    /**
     * @return {?}
     */
    jqxComplexInputComponent.prototype.destroy = 
    // jqxComplexInputComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxComplexInput('destroy');
    };
    /**
     * @param {?=} complexnumber
     * @return {?}
     */
    jqxComplexInputComponent.prototype.getReal = /**
     * @param {?=} complexnumber
     * @return {?}
     */
    function (complexnumber) {
        return this.host.jqxComplexInput('getReal', complexnumber);
    };
    /**
     * @param {?=} complexnumber
     * @return {?}
     */
    jqxComplexInputComponent.prototype.getImaginary = /**
     * @param {?=} complexnumber
     * @return {?}
     */
    function (complexnumber) {
        return this.host.jqxComplexInput('getImaginary', complexnumber);
    };
    /**
     * @return {?}
     */
    jqxComplexInputComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxComplexInput('render');
    };
    /**
     * @return {?}
     */
    jqxComplexInputComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxComplexInput('refresh');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxComplexInputComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxComplexInput('val', value);
        }
        else {
            return this.host.jqxComplexInput('val');
        }
    };
    ;
    /**
     * @return {?}
     */
    jqxComplexInputComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.value); });
    };
    jqxComplexInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxComplexInput',
                    template: '<div style="display: inline-flex;"><input [(ngModel)]="ngValue"><div></div></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    jqxComplexInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxComplexInputComponent.propDecorators = {
        attrDecimalNotation: [{ type: Input, args: ['decimalNotation',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
        attrRoundedCorners: [{ type: Input, args: ['roundedCorners',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSpinButtons: [{ type: Input, args: ['spinButtons',] }],
        attrSpinButtonsStep: [{ type: Input, args: ['spinButtonsStep',] }],
        attrTemplate: [{ type: Input, args: ['template',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrValue: [{ type: Input, args: ['value',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onChange: [{ type: Output }]
    };
    return jqxComplexInputComponent;
}()); //jqxComplexInputComponent
export { jqxComplexInputComponent };
if (false) {
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrDecimalNotation;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrRoundedCorners;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrRtl;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrSpinButtons;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrSpinButtonsStep;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrTemplate;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrTheme;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrValue;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrWidth;
    /** @type {?} */
    jqxComplexInputComponent.prototype.attrHeight;
    /** @type {?} */
    jqxComplexInputComponent.prototype.autoCreate;
    /** @type {?} */
    jqxComplexInputComponent.prototype.properties;
    /** @type {?} */
    jqxComplexInputComponent.prototype.host;
    /** @type {?} */
    jqxComplexInputComponent.prototype.elementRef;
    /** @type {?} */
    jqxComplexInputComponent.prototype.widgetObject;
    /**
     * @type {?}
     * @private
     */
    jqxComplexInputComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    jqxComplexInputComponent.prototype.onChangeCallback;
    /** @type {?} */
    jqxComplexInputComponent.prototype.onChange;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
export { ɵ0 };
