require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxcomplexinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcomplexinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcomplexinput = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxComplexInputComponent; }),
        multi: true
    };
    var jqxComplexInputComponent = /** @class */ (function () {
        function jqxComplexInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['decimalNotation', 'disabled', 'height', 'placeHolder', 'roundedCorners', 'rtl', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxComplexInputComponent events
            this.onChange = new core.EventEmitter();
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
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
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
        /**
         * @return {?}
         */
        jqxComplexInputComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) {
                    _this.onChange.emit(eventData);
                    if (eventData.args)
                        _this.onChangeCallback(eventData.args.value);
                });
            };
        jqxComplexInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxComplexInput',
                        template: '<div style="display: inline-flex;"><input [(ngModel)]="ngValue"><div></div></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxComplexInputComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxComplexInputComponent.propDecorators = {
            attrDecimalNotation: [{ type: core.Input, args: ['decimalNotation',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrRoundedCorners: [{ type: core.Input, args: ['roundedCorners',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSpinButtons: [{ type: core.Input, args: ['spinButtons',] }],
            attrSpinButtonsStep: [{ type: core.Input, args: ['spinButtonsStep',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }]
        };
        return jqxComplexInputComponent;
    }()); //jqxComplexInputComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxComplexInputModule = /** @class */ (function () {
        function jqxComplexInputModule() {
        }
        jqxComplexInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxComplexInputComponent],
                        exports: [jqxComplexInputComponent]
                    },] }
        ];
        return jqxComplexInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxComplexInputComponent = jqxComplexInputComponent;
    exports.jqxComplexInputModule = jqxComplexInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

