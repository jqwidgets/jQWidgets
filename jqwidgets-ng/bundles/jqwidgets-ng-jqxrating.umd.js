require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxrating');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxrating', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxrating = {}),global.ng.core,global.ng.forms));
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
        useExisting: core.forwardRef(function () { return jqxRatingComponent; }),
        multi: true
    };
    var jqxRatingComponent = /** @class */ (function () {
        function jqxRatingComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['count', 'disabled', 'height', 'itemHeight', 'itemWidth', 'precision', 'singleVote', 'value', 'width'];
            this.onTouchedCallback = noop;
            this.onChangeCallback = noop;
            // jqxRatingComponent events
            this.onChange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxRatingComponent.prototype.ngOnInit = /**
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
        jqxRatingComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxRating(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxRating(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxRating(this.properties[i])) {
                                this.host.jqxRating(this.properties[i], this[attrName]);
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
        jqxRatingComponent.prototype.arraysEqual = /**
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
        jqxRatingComponent.prototype.manageAttributes = /**
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
        jqxRatingComponent.prototype.moveClasses = /**
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
        jqxRatingComponent.prototype.moveStyles = /**
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
        jqxRatingComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRating', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxRatingComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxRatingComponent.prototype.__updateRect__ = /**
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
        jqxRatingComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.widgetObject) {
                    this.onChangeCallback(this.host.val());
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        jqxRatingComponent.prototype.registerOnChange = /**
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
        jqxRatingComponent.prototype.registerOnTouched = /**
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
        jqxRatingComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxRating('setOptions', options);
            };
        // jqxRatingComponent properties
        // jqxRatingComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.count =
            // jqxRatingComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('count', arg);
                }
                else {
                    return this.host.jqxRating('count');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('disabled', arg);
                }
                else {
                    return this.host.jqxRating('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('height', arg);
                }
                else {
                    return this.host.jqxRating('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.itemHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('itemHeight', arg);
                }
                else {
                    return this.host.jqxRating('itemHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.itemWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('itemWidth', arg);
                }
                else {
                    return this.host.jqxRating('itemWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.precision = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('precision', arg);
                }
                else {
                    return this.host.jqxRating('precision');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.singleVote = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('singleVote', arg);
                }
                else {
                    return this.host.jqxRating('singleVote');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('value', arg);
                }
                else {
                    return this.host.jqxRating('value');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRatingComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRating('width', arg);
                }
                else {
                    return this.host.jqxRating('width');
                }
            };
        // jqxRatingComponent functions
        // jqxRatingComponent functions
        /**
         * @return {?}
         */
        jqxRatingComponent.prototype.disable =
            // jqxRatingComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxRating('disable');
            };
        /**
         * @return {?}
         */
        jqxRatingComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxRating('enable');
            };
        /**
         * @return {?}
         */
        jqxRatingComponent.prototype.getValue = /**
         * @return {?}
         */
            function () {
                return this.host.jqxRating('getValue');
            };
        /**
         * @param {?} value
         * @return {?}
         */
        jqxRatingComponent.prototype.setValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.host.jqxRating('setValue', value);
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxRatingComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxRating('val', value);
                }
                else {
                    return this.host.jqxRating('val');
                }
            };
        /**
         * @return {?}
         */
        jqxRatingComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('change', function (eventData) { _this.onChange.emit(eventData); _this.onChangeCallback(_this.host.val()); });
            };
        jqxRatingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxRating',
                        template: '<div><ng-content></ng-content></div>',
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        jqxRatingComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxRatingComponent.propDecorators = {
            attrCount: [{ type: core.Input, args: ['count',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrItemHeight: [{ type: core.Input, args: ['itemHeight',] }],
            attrItemWidth: [{ type: core.Input, args: ['itemWidth',] }],
            attrPrecision: [{ type: core.Input, args: ['precision',] }],
            attrSingleVote: [{ type: core.Input, args: ['singleVote',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onChange: [{ type: core.Output }]
        };
        return jqxRatingComponent;
    }()); //jqxRatingComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxRatingModule = /** @class */ (function () {
        function jqxRatingModule() {
        }
        jqxRatingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule
                        ],
                        declarations: [jqxRatingComponent],
                        exports: [jqxRatingComponent]
                    },] }
        ];
        return jqxRatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxRatingComponent = jqxRatingComponent;
    exports.jqxRatingModule = jqxRatingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

