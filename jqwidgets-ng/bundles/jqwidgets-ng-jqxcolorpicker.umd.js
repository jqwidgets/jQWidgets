require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxdropdownbutton');
require('../../jqwidgets/jqxradiobutton');
require('../../jqwidgets/jqxcolorpicker');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxcolorpicker', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxcolorpicker = {}),global.ng.core));
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
    var jqxColorPickerComponent = /** @class */ (function () {
        function jqxColorPickerComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['color', 'colorMode', 'disabled', 'height', 'showTransparent', 'width'];
            // jqxColorPickerComponent events
            this.onColorchange = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxColorPickerComponent.prototype.ngOnInit = /**
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
        jqxColorPickerComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxColorPicker(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxColorPicker(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxColorPicker(this.properties[i])) {
                                this.host.jqxColorPicker(this.properties[i], this[attrName]);
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
        jqxColorPickerComponent.prototype.arraysEqual = /**
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
        jqxColorPickerComponent.prototype.manageAttributes = /**
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
        jqxColorPickerComponent.prototype.moveClasses = /**
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
        jqxColorPickerComponent.prototype.moveStyles = /**
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
        jqxColorPickerComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxColorPicker', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxColorPickerComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxColorPickerComponent.prototype.__updateRect__ = /**
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
        jqxColorPickerComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxColorPicker('setOptions', options);
            };
        // jqxColorPickerComponent properties
        // jqxColorPickerComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxColorPickerComponent.prototype.color =
            // jqxColorPickerComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxColorPicker('color', arg);
                }
                else {
                    return this.host.jqxColorPicker('color');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxColorPickerComponent.prototype.colorMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxColorPicker('colorMode', arg);
                }
                else {
                    return this.host.jqxColorPicker('colorMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxColorPickerComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxColorPicker('disabled', arg);
                }
                else {
                    return this.host.jqxColorPicker('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxColorPickerComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxColorPicker('height', arg);
                }
                else {
                    return this.host.jqxColorPicker('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxColorPickerComponent.prototype.showTransparent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxColorPicker('showTransparent', arg);
                }
                else {
                    return this.host.jqxColorPicker('showTransparent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxColorPickerComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxColorPicker('width', arg);
                }
                else {
                    return this.host.jqxColorPicker('width');
                }
            };
        // jqxColorPickerComponent functions
        // jqxColorPickerComponent functions
        /**
         * @return {?}
         */
        jqxColorPickerComponent.prototype.getColor =
            // jqxColorPickerComponent functions
            /**
             * @return {?}
             */
            function () {
                return this.host.jqxColorPicker('getColor');
            };
        /**
         * @param {?} color
         * @return {?}
         */
        jqxColorPickerComponent.prototype.setColor = /**
         * @param {?} color
         * @return {?}
         */
            function (color) {
                this.host.jqxColorPicker('setColor', color);
            };
        /**
         * @return {?}
         */
        jqxColorPickerComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('colorchange', function (eventData) { _this.onColorchange.emit(eventData); });
            };
        jqxColorPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxColorPicker',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxColorPickerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxColorPickerComponent.propDecorators = {
            attrColor: [{ type: core.Input, args: ['color',] }],
            attrColorMode: [{ type: core.Input, args: ['colorMode',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrShowTransparent: [{ type: core.Input, args: ['showTransparent',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onColorchange: [{ type: core.Output }]
        };
        return jqxColorPickerComponent;
    }()); //jqxColorPickerComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxColorPickerModule = /** @class */ (function () {
        function jqxColorPickerModule() {
        }
        jqxColorPickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxColorPickerComponent],
                        exports: [jqxColorPickerComponent]
                    },] }
        ];
        return jqxColorPickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxColorPickerComponent = jqxColorPickerComponent;
    exports.jqxColorPickerModule = jqxColorPickerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

