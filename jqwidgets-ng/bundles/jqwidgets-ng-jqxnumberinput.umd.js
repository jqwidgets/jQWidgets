require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxnumberinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxnumberinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxnumberinput = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = function () { };
    /** @type {?} */
    var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return jqxNumberInputComponent; }),
        multi: true
    };
    var jqxNumberInputComponent = /** @class */ (function () {
        function jqxNumberInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxNumberInputComponent events
            this.onChange = new core.EventEmitter();
            this.onTextchanged = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxNumberInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate) {
                    this.createComponent();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxNumberInputComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxNumberInput(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                                this.host.jqxNumberInput(this.properties[i], this[attrName]);
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
        jqxNumberInputComponent.prototype.arraysEqual = /**
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
        jqxNumberInputComponent.prototype.manageAttributes = /**
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
        jqxNumberInputComponent.prototype.moveClasses = /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
            function (parentEl, childEl) {
                var _a;
                /** @type {?} */
                var classes = parentEl.classList;
                if (classes.length > 0) {
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
                }
                parentEl.className = '';
            };
        /**
         * @param {?} parentEl
         * @param {?} childEl
         * @return {?}
         */
        jqxNumberInputComponent.prototype.moveStyles = /**
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
        jqxNumberInputComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
                this.host = this.widgetObject['host'];
                this.__wireEvents__();
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxNumberInputComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxNumberInputComponent.prototype.__updateRect__ = /**
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
        jqxNumberInputComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) {
                    this.host.jqxNumberInput('val', value);
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxNumberInputComponent.prototype.registerOnChange = /**
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
        jqxNumberInputComponent.prototype.registerOnTouched = /**
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
        jqxNumberInputComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxNumberInput('setOptions', options);
            };
        // jqxNumberInputComponent properties
        // jqxNumberInputComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.allowNull =
            // jqxNumberInputComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('allowNull', arg);
                }
                else {
                    return this.host.jqxNumberInput('allowNull');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.decimal = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('decimal', arg);
                }
                else {
                    return this.host.jqxNumberInput('decimal');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('disabled', arg);
                }
                else {
                    return this.host.jqxNumberInput('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.decimalDigits = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('decimalDigits', arg);
                }
                else {
                    return this.host.jqxNumberInput('decimalDigits');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.decimalSeparator = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('decimalSeparator', arg);
                }
                else {
                    return this.host.jqxNumberInput('decimalSeparator');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.digits = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('digits', arg);
                }
                else {
                    return this.host.jqxNumberInput('digits');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.groupSeparator = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('groupSeparator', arg);
                }
                else {
                    return this.host.jqxNumberInput('groupSeparator');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.groupSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('groupSize', arg);
                }
                else {
                    return this.host.jqxNumberInput('groupSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('height', arg);
                }
                else {
                    return this.host.jqxNumberInput('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.inputMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('inputMode', arg);
                }
                else {
                    return this.host.jqxNumberInput('inputMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.min = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('min', arg);
                }
                else {
                    return this.host.jqxNumberInput('min');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.max = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('max', arg);
                }
                else {
                    return this.host.jqxNumberInput('max');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.negativeSymbol = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('negativeSymbol', arg);
                }
                else {
                    return this.host.jqxNumberInput('negativeSymbol');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.placeHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('placeHolder', arg);
                }
                else {
                    return this.host.jqxNumberInput('placeHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.promptChar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('promptChar', arg);
                }
                else {
                    return this.host.jqxNumberInput('promptChar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('rtl', arg);
                }
                else {
                    return this.host.jqxNumberInput('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.readOnly = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('readOnly', arg);
                }
                else {
                    return this.host.jqxNumberInput('readOnly');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.spinMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('spinMode', arg);
                }
                else {
                    return this.host.jqxNumberInput('spinMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.spinButtons = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('spinButtons', arg);
                }
                else {
                    return this.host.jqxNumberInput('spinButtons');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.spinButtonsWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('spinButtonsWidth', arg);
                }
                else {
                    return this.host.jqxNumberInput('spinButtonsWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.spinButtonsStep = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('spinButtonsStep', arg);
                }
                else {
                    return this.host.jqxNumberInput('spinButtonsStep');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.symbol = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('symbol', arg);
                }
                else {
                    return this.host.jqxNumberInput('symbol');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.symbolPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('symbolPosition', arg);
                }
                else {
                    return this.host.jqxNumberInput('symbolPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.textAlign = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('textAlign', arg);
                }
                else {
                    return this.host.jqxNumberInput('textAlign');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('template', arg);
                }
                else {
                    return this.host.jqxNumberInput('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('theme', arg);
                }
                else {
                    return this.host.jqxNumberInput('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('value', arg);
                }
                else {
                    return this.host.jqxNumberInput('value');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxNumberInputComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxNumberInput('width', arg);
                }
                else {
                    return this.host.jqxNumberInput('width');
                }
            };
        // jqxNumberInputComponent functions
        // jqxNumberInputComponent functions
        /**
         * @return {?}
         */
        jqxNumberInputComponent.prototype.clear =
            // jqxNumberInputComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxNumberInput('clear');
            };
        /**
         * @return {?}
         */
        jqxNumberInputComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxNumberInput('destroy');
            };
        /**
         * @return {?}
         */
        jqxNumberInputComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxNumberInput('focus');
            };
        /**
         * @return {?}
         */
        jqxNumberInputComponent.prototype.getDecimal = /**
         * @return {?}
         */
            function () {
                return this.host.jqxNumberInput('getDecimal');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxNumberInputComponent.prototype.setDecimal = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxNumberInput('setDecimal', index);
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxNumberInputComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxNumberInput('val', value);
                }
                else {
                    return this.host.jqxNumberInput('val');
                }
            };
        /**
         * @return {?}
         */
        jqxNumberInputComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) {
                    _this.onChange.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.value);
                });
                this.host.on('textchanged', function (eventData) {
                    _this.onTextchanged.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.value);
                });
                this.host.on('valueChanged', function (eventData) {
                    _this.onValueChanged.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.value);
                });
            };
        jqxNumberInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxNumberInput',
                        template: '<input>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxNumberInputComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxNumberInputComponent.propDecorators = {
            attrAllowNull: [{ type: core.Input, args: ['allowNull',] }],
            attrDecimal: [{ type: core.Input, args: ['decimal',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDecimalDigits: [{ type: core.Input, args: ['decimalDigits',] }],
            attrDecimalSeparator: [{ type: core.Input, args: ['decimalSeparator',] }],
            attrDigits: [{ type: core.Input, args: ['digits',] }],
            attrGroupSeparator: [{ type: core.Input, args: ['groupSeparator',] }],
            attrGroupSize: [{ type: core.Input, args: ['groupSize',] }],
            attrInputMode: [{ type: core.Input, args: ['inputMode',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrNegativeSymbol: [{ type: core.Input, args: ['negativeSymbol',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrPromptChar: [{ type: core.Input, args: ['promptChar',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrReadOnly: [{ type: core.Input, args: ['readOnly',] }],
            attrSpinMode: [{ type: core.Input, args: ['spinMode',] }],
            attrSpinButtons: [{ type: core.Input, args: ['spinButtons',] }],
            attrSpinButtonsWidth: [{ type: core.Input, args: ['spinButtonsWidth',] }],
            attrSpinButtonsStep: [{ type: core.Input, args: ['spinButtonsStep',] }],
            attrSymbol: [{ type: core.Input, args: ['symbol',] }],
            attrSymbolPosition: [{ type: core.Input, args: ['symbolPosition',] }],
            attrTextAlign: [{ type: core.Input, args: ['textAlign',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }],
            onTextchanged: [{ type: core.Output }],
            onValueChanged: [{ type: core.Output }]
        };
        return jqxNumberInputComponent;
    }()); //jqxNumberInputComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxNumberInputModule = /** @class */ (function () {
        function jqxNumberInputModule() {
        }
        jqxNumberInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxNumberInputComponent],
                        exports: [jqxNumberInputComponent]
                    },] }
        ];
        return jqxNumberInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxNumberInputComponent = jqxNumberInputComponent;
    exports.jqxNumberInputModule = jqxNumberInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

