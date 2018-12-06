require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxscrollbar', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxscrollbar = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
    var jqxScrollBarComponent = /** @class */ (function () {
        function jqxScrollBarComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'largestep', 'min', 'max', 'rtl', 'step', 'showButtons', 'thumbMinSize', 'theme', 'vertical', 'value', 'width'];
            // jqxScrollBarComponent events
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxScrollBarComponent.prototype.ngOnInit = /**
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
        jqxScrollBarComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollBar(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxScrollBar(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxScrollBar(this.properties[i])) {
                                this.host.jqxScrollBar(this.properties[i], this[attrName]);
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
        jqxScrollBarComponent.prototype.arraysEqual = /**
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
        jqxScrollBarComponent.prototype.manageAttributes = /**
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
        jqxScrollBarComponent.prototype.moveClasses = /**
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
        jqxScrollBarComponent.prototype.moveStyles = /**
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
        jqxScrollBarComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollBar', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxScrollBarComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxScrollBarComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
            };
        /**
         * @param {?} options
         * @return {?}
         */
        jqxScrollBarComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxScrollBar('setOptions', options);
            };
        // jqxScrollBarComponent properties
        // jqxScrollBarComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.disabled =
            // jqxScrollBarComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('disabled', arg);
                }
                else {
                    return this.host.jqxScrollBar('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('height', arg);
                }
                else {
                    return this.host.jqxScrollBar('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.largestep = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('largestep', arg);
                }
                else {
                    return this.host.jqxScrollBar('largestep');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.min = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('min', arg);
                }
                else {
                    return this.host.jqxScrollBar('min');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.max = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('max', arg);
                }
                else {
                    return this.host.jqxScrollBar('max');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('rtl', arg);
                }
                else {
                    return this.host.jqxScrollBar('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.step = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('step', arg);
                }
                else {
                    return this.host.jqxScrollBar('step');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.showButtons = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('showButtons', arg);
                }
                else {
                    return this.host.jqxScrollBar('showButtons');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.thumbMinSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('thumbMinSize', arg);
                }
                else {
                    return this.host.jqxScrollBar('thumbMinSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('theme', arg);
                }
                else {
                    return this.host.jqxScrollBar('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.vertical = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('vertical', arg);
                }
                else {
                    return this.host.jqxScrollBar('vertical');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('value', arg);
                }
                else {
                    return this.host.jqxScrollBar('value');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollBarComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollBar('width', arg);
                }
                else {
                    return this.host.jqxScrollBar('width');
                }
            };
        // jqxScrollBarComponent functions
        // jqxScrollBarComponent functions
        /**
         * @return {?}
         */
        jqxScrollBarComponent.prototype.destroy =
            // jqxScrollBarComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxScrollBar('destroy');
            };
        /**
         * @return {?}
         */
        jqxScrollBarComponent.prototype.isScrolling = /**
         * @return {?}
         */
            function () {
                return this.host.jqxScrollBar('isScrolling');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxScrollBarComponent.prototype.setPosition = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxScrollBar('setPosition', index);
            };
        /**
         * @return {?}
         */
        jqxScrollBarComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
            };
        jqxScrollBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxScrollBar',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxScrollBarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxScrollBarComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrLargestep: [{ type: core.Input, args: ['largestep',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrStep: [{ type: core.Input, args: ['step',] }],
            attrShowButtons: [{ type: core.Input, args: ['showButtons',] }],
            attrThumbMinSize: [{ type: core.Input, args: ['thumbMinSize',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrVertical: [{ type: core.Input, args: ['vertical',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onValueChanged: [{ type: core.Output }]
        };
        return jqxScrollBarComponent;
    }()); //jqxScrollBarComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxScrollBarModule = /** @class */ (function () {
        function jqxScrollBarModule() {
        }
        jqxScrollBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxScrollBarComponent],
                        exports: [jqxScrollBarComponent]
                    },] }
        ];
        return jqxScrollBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxScrollBarComponent = jqxScrollBarComponent;
    exports.jqxScrollBarModule = jqxScrollBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

