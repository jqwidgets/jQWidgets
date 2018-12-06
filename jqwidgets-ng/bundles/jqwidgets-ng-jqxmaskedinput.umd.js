require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxmaskedinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxmaskedinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxmaskedinput = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxMaskedInputComponent; }),
        multi: true
    };
    var jqxMaskedInputComponent = /** @class */ (function () {
        function jqxMaskedInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'mask', 'promptChar', 'readOnly', 'rtl', 'theme', 'textAlign', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxMaskedInputComponent events
            this.onChange = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
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
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
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
            { type: core.Component, args: [{
                        selector: 'jqxMaskedInput',
                        template: '<input>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxMaskedInputComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxMaskedInputComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrMask: [{ type: core.Input, args: ['mask',] }],
            attrPromptChar: [{ type: core.Input, args: ['promptChar',] }],
            attrReadOnly: [{ type: core.Input, args: ['readOnly',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrTextAlign: [{ type: core.Input, args: ['textAlign',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }],
            onValueChanged: [{ type: core.Output }]
        };
        return jqxMaskedInputComponent;
    }()); //jqxMaskedInputComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxMaskedInputModule = /** @class */ (function () {
        function jqxMaskedInputModule() {
        }
        jqxMaskedInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxMaskedInputComponent],
                        exports: [jqxMaskedInputComponent]
                    },] }
        ];
        return jqxMaskedInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxMaskedInputComponent = jqxMaskedInputComponent;
    exports.jqxMaskedInputModule = jqxMaskedInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

