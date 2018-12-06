require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxpasswordinput');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxpasswordinput', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxpasswordinput = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxPasswordInputComponent; }),
        multi: true
    };
    var jqxPasswordInputComponent = /** @class */ (function () {
        function jqxPasswordInputComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'localization', 'maxLength', 'placeHolder', 'passwordStrength', 'rtl', 'strengthColors', 'showStrength', 'showStrengthPosition', 'strengthTypeRenderer', 'showPasswordIcon', 'theme', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxPasswordInputComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.ngOnInit = /**
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
        jqxPasswordInputComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxPasswordInput(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxPasswordInput(this.properties[i])) {
                                this.host.jqxPasswordInput(this.properties[i], this[attrName]);
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
        jqxPasswordInputComponent.prototype.arraysEqual = /**
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
        jqxPasswordInputComponent.prototype.manageAttributes = /**
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
        jqxPasswordInputComponent.prototype.moveClasses = /**
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
        jqxPasswordInputComponent.prototype.moveStyles = /**
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
        jqxPasswordInputComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        Object.defineProperty(jqxPasswordInputComponent.prototype, "ngValue", {
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
        jqxPasswordInputComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) {
                    this.host.jqxPasswordInput('val', value);
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.registerOnChange = /**
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
        jqxPasswordInputComponent.prototype.registerOnTouched = /**
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
        jqxPasswordInputComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxPasswordInput('setOptions', options);
            };
        // jqxPasswordInputComponent properties
        // jqxPasswordInputComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.disabled =
            // jqxPasswordInputComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('disabled', arg);
                }
                else {
                    return this.host.jqxPasswordInput('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('height', arg);
                }
                else {
                    return this.host.jqxPasswordInput('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.localization = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('localization', arg);
                }
                else {
                    return this.host.jqxPasswordInput('localization');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.maxLength = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('maxLength', arg);
                }
                else {
                    return this.host.jqxPasswordInput('maxLength');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.placeHolder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('placeHolder', arg);
                }
                else {
                    return this.host.jqxPasswordInput('placeHolder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.passwordStrength = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('passwordStrength', arg);
                }
                else {
                    return this.host.jqxPasswordInput('passwordStrength');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('rtl', arg);
                }
                else {
                    return this.host.jqxPasswordInput('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.strengthColors = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('strengthColors', arg);
                }
                else {
                    return this.host.jqxPasswordInput('strengthColors');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.showStrength = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('showStrength', arg);
                }
                else {
                    return this.host.jqxPasswordInput('showStrength');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.showStrengthPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('showStrengthPosition', arg);
                }
                else {
                    return this.host.jqxPasswordInput('showStrengthPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.strengthTypeRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('strengthTypeRenderer', arg);
                }
                else {
                    return this.host.jqxPasswordInput('strengthTypeRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.showPasswordIcon = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('showPasswordIcon', arg);
                }
                else {
                    return this.host.jqxPasswordInput('showPasswordIcon');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('theme', arg);
                }
                else {
                    return this.host.jqxPasswordInput('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPasswordInput('width', arg);
                }
                else {
                    return this.host.jqxPasswordInput('width');
                }
            };
        // jqxPasswordInputComponent functions
        // jqxPasswordInputComponent functions
        /**
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.render =
            // jqxPasswordInputComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxPasswordInput('render');
            };
        /**
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxPasswordInput('refresh');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxPasswordInput('val', value);
                }
                else {
                    return this.host.jqxPasswordInput('val');
                }
            };
        /**
         * @return {?}
         */
        jqxPasswordInputComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
            };
        jqxPasswordInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxPasswordInput',
                        template: '<input type="password" [(ngModel)]="ngValue">',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxPasswordInputComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxPasswordInputComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrLocalization: [{ type: core.Input, args: ['localization',] }],
            attrMaxLength: [{ type: core.Input, args: ['maxLength',] }],
            attrPlaceHolder: [{ type: core.Input, args: ['placeHolder',] }],
            attrPasswordStrength: [{ type: core.Input, args: ['passwordStrength',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrStrengthColors: [{ type: core.Input, args: ['strengthColors',] }],
            attrShowStrength: [{ type: core.Input, args: ['showStrength',] }],
            attrShowStrengthPosition: [{ type: core.Input, args: ['showStrengthPosition',] }],
            attrStrengthTypeRenderer: [{ type: core.Input, args: ['strengthTypeRenderer',] }],
            attrShowPasswordIcon: [{ type: core.Input, args: ['showPasswordIcon',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }]
        };
        return jqxPasswordInputComponent;
    }()); //jqxPasswordInputComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxPasswordInputModule = /** @class */ (function () {
        function jqxPasswordInputModule() {
        }
        jqxPasswordInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxPasswordInputComponent],
                        exports: [jqxPasswordInputComponent]
                    },] }
        ];
        return jqxPasswordInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxPasswordInputComponent = jqxPasswordInputComponent;
    exports.jqxPasswordInputModule = jqxPasswordInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

