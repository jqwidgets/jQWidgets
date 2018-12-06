require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxradiobutton');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxradiobutton', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxradiobutton = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxRadioButtonComponent; }),
        multi: true
    };
    var jqxRadioButtonComponent = /** @class */ (function () {
        function jqxRadioButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'hasThreeStates', 'height', 'rtl', 'theme', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxRadioButtonComponent events
            this.onChecked = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
            this.onUnchecked = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.ngOnInit = /**
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
        jqxRadioButtonComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxRadioButton(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxRadioButton(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxRadioButton(this.properties[i])) {
                                this.host.jqxRadioButton(this.properties[i], this[attrName]);
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
        jqxRadioButtonComponent.prototype.arraysEqual = /**
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
        jqxRadioButtonComponent.prototype.manageAttributes = /**
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
        jqxRadioButtonComponent.prototype.moveClasses = /**
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
        jqxRadioButtonComponent.prototype.moveStyles = /**
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
        jqxRadioButtonComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);
                this.valueAttr = this.host[0].parentElement.getAttribute('value');
                if (options.checked === true)
                    this.onChangeCallback(this.valueAttr);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.__updateRect__ = /**
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
        jqxRadioButtonComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) ;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.registerOnChange = /**
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
        jqxRadioButtonComponent.prototype.registerOnTouched = /**
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
        jqxRadioButtonComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxRadioButton('setOptions', options);
            };
        // jqxRadioButtonComponent properties
        // jqxRadioButtonComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.animationShowDelay =
            // jqxRadioButtonComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('animationShowDelay', arg);
                }
                else {
                    return this.host.jqxRadioButton('animationShowDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.animationHideDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('animationHideDelay', arg);
                }
                else {
                    return this.host.jqxRadioButton('animationHideDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.boxSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('boxSize', arg);
                }
                else {
                    return this.host.jqxRadioButton('boxSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.checked = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('checked', arg);
                }
                else {
                    return this.host.jqxRadioButton('checked');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('disabled', arg);
                }
                else {
                    return this.host.jqxRadioButton('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.enableContainerClick = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('enableContainerClick', arg);
                }
                else {
                    return this.host.jqxRadioButton('enableContainerClick');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.groupName = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('groupName', arg);
                }
                else {
                    return this.host.jqxRadioButton('groupName');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.hasThreeStates = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('hasThreeStates', arg);
                }
                else {
                    return this.host.jqxRadioButton('hasThreeStates');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('height', arg);
                }
                else {
                    return this.host.jqxRadioButton('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('rtl', arg);
                }
                else {
                    return this.host.jqxRadioButton('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('theme', arg);
                }
                else {
                    return this.host.jqxRadioButton('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRadioButton('width', arg);
                }
                else {
                    return this.host.jqxRadioButton('width');
                }
            };
        // jqxRadioButtonComponent functions
        // jqxRadioButtonComponent functions
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.check =
            // jqxRadioButtonComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxRadioButton('check');
            };
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxRadioButton('disable');
            };
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxRadioButton('destroy');
            };
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxRadioButton('enable');
            };
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxRadioButton('focus');
            };
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxRadioButton('render');
            };
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.uncheck = /**
         * @return {?}
         */
            function () {
                this.host.jqxRadioButton('uncheck');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxRadioButton('val', value);
                }
                else {
                    return this.host.jqxRadioButton('val');
                }
            };
        /**
         * @return {?}
         */
        jqxRadioButtonComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('checked', function (eventData) { _this.onChecked.emit(eventData); _this.onChangeCallback(_this.valueAttr); });
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); });
                this.host.on('unchecked', function (eventData) { _this.onUnchecked.emit(eventData); });
            };
        jqxRadioButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxRadioButton',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxRadioButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxRadioButtonComponent.propDecorators = {
            attrAnimationShowDelay: [{ type: core.Input, args: ['animationShowDelay',] }],
            attrAnimationHideDelay: [{ type: core.Input, args: ['animationHideDelay',] }],
            attrBoxSize: [{ type: core.Input, args: ['boxSize',] }],
            attrChecked: [{ type: core.Input, args: ['checked',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEnableContainerClick: [{ type: core.Input, args: ['enableContainerClick',] }],
            attrGroupName: [{ type: core.Input, args: ['groupName',] }],
            attrHasThreeStates: [{ type: core.Input, args: ['hasThreeStates',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChecked: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            onUnchecked: [{ type: core.Output }]
        };
        return jqxRadioButtonComponent;
    }()); //jqxRadioButtonComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxRadioButtonModule = /** @class */ (function () {
        function jqxRadioButtonModule() {
        }
        jqxRadioButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxRadioButtonComponent],
                        exports: [jqxRadioButtonComponent]
                    },] }
        ];
        return jqxRadioButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxRadioButtonComponent = jqxRadioButtonComponent;
    exports.jqxRadioButtonModule = jqxRadioButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

