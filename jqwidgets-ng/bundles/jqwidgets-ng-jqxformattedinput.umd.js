require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxformattedinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxformattedinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxformattedinput = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxFormattedInputComponent; }),
        multi: true
    };
    var jqxFormattedInputComponent = /** @class */ (function () {
        function jqxFormattedInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'decimalNotation', 'dropDown', 'dropDownWidth', 'height', 'min', 'max', 'placeHolder', 'popupZIndex', 'roundedCorners', 'rtl', 'radix', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'upperCase', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxFormattedInputComponent events
            this.onChange = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onRadixChange = new core.EventEmitter();
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
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
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
             */ function () {
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
             */ function (value) {
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
        /**
         * @return {?}
         */
        jqxFormattedInputComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) {
                    _this.onChange.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.value);
                });
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                this.host.on('radixChange', function (eventData) {
                    _this.onRadixChange.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.value);
                });
            };
        jqxFormattedInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxFormattedInput',
                        template: '<div><input type="text" [(ngModel)]="ngValue"><div></div><div></div></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxFormattedInputComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxFormattedInputComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrDecimalNotation: [{ type: core.Input, args: ['decimalNotation',] }],
            attrDropDown: [{ type: core.Input, args: ['dropDown',] }],
            attrDropDownWidth: [{ type: core.Input, args: ['dropDownWidth',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrPopupZIndex: [{ type: core.Input, args: ['popupZIndex',] }],
            attrRoundedCorners: [{ type: core.Input, args: ['roundedCorners',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrRadix: [{ type: core.Input, args: ['radix',] }],
            attrSpinButtons: [{ type: core.Input, args: ['spinButtons',] }],
            attrSpinButtonsStep: [{ type: core.Input, args: ['spinButtonsStep',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrUpperCase: [{ type: core.Input, args: ['upperCase',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }],
            onClose: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onRadixChange: [{ type: core.Output }]
        };
        return jqxFormattedInputComponent;
    }()); //jqxFormattedInputComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxFormattedInputModule = /** @class */ (function () {
        function jqxFormattedInputModule() {
        }
        jqxFormattedInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxFormattedInputComponent],
                        exports: [jqxFormattedInputComponent]
                    },] }
        ];
        return jqxFormattedInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxFormattedInputComponent = jqxFormattedInputComponent;
    exports.jqxFormattedInputModule = jqxFormattedInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

