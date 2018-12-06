require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxbuttongroup');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxbuttongroup', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxbuttongroup = {}),global.ng.core));
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
    var jqxButtonGroupComponent = /** @class */ (function () {
        function jqxButtonGroupComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'enableHover', 'mode', 'rtl', 'template', 'theme'];
            // jqxButtonGroupComponent events
            this.onButtonclick = new core.EventEmitter();
            this.onSelected = new core.EventEmitter();
            this.onUnselected = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.ngOnInit = /**
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
        jqxButtonGroupComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxButtonGroup(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxButtonGroup(this.properties[i])) {
                                this.host.jqxButtonGroup(this.properties[i], this[attrName]);
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
        jqxButtonGroupComponent.prototype.arraysEqual = /**
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
        jqxButtonGroupComponent.prototype.manageAttributes = /**
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
        jqxButtonGroupComponent.prototype.moveClasses = /**
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
        jqxButtonGroupComponent.prototype.moveStyles = /**
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
        jqxButtonGroupComponent.prototype.createComponent = /**
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
                this.host[0].style.marginLeft = '1px';
                this.__wireEvents__();
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButtonGroup', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.__updateRect__ = /**
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
        jqxButtonGroupComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxButtonGroup('setOptions', options);
            };
        // jqxButtonGroupComponent properties
        // jqxButtonGroupComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.disabled =
            // jqxButtonGroupComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButtonGroup('disabled', arg);
                }
                else {
                    return this.host.jqxButtonGroup('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.enableHover = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButtonGroup('enableHover', arg);
                }
                else {
                    return this.host.jqxButtonGroup('enableHover');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.mode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButtonGroup('mode', arg);
                }
                else {
                    return this.host.jqxButtonGroup('mode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButtonGroup('rtl', arg);
                }
                else {
                    return this.host.jqxButtonGroup('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButtonGroup('template', arg);
                }
                else {
                    return this.host.jqxButtonGroup('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButtonGroup('theme', arg);
                }
                else {
                    return this.host.jqxButtonGroup('theme');
                }
            };
        // jqxButtonGroupComponent functions
        // jqxButtonGroupComponent functions
        /**
         * @param {?} index
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.disableAt =
            // jqxButtonGroupComponent functions
            /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                this.host.jqxButtonGroup('disableAt', index);
            };
        /**
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxButtonGroup('disable');
            };
        /**
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxButtonGroup('destroy');
            };
        /**
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxButtonGroup('enable');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.enableAt = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxButtonGroup('enableAt', index);
            };
        /**
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.getSelection = /**
         * @return {?}
         */
            function () {
                return this.host.jqxButtonGroup('getSelection');
            };
        /**
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxButtonGroup('render');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.setSelection = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxButtonGroup('setSelection', index);
            };
        /**
         * @return {?}
         */
        jqxButtonGroupComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('buttonclick', function (eventData) { _this.onButtonclick.emit(eventData); });
                this.host.on('selected', function (eventData) { _this.onSelected.emit(eventData); });
                this.host.on('unselected', function (eventData) { _this.onUnselected.emit(eventData); });
            };
        jqxButtonGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxButtonGroup',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxButtonGroupComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxButtonGroupComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEnableHover: [{ type: core.Input, args: ['enableHover',] }],
            attrMode: [{ type: core.Input, args: ['mode',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onButtonclick: [{ type: core.Output }],
            onSelected: [{ type: core.Output }],
            onUnselected: [{ type: core.Output }]
        };
        return jqxButtonGroupComponent;
    }()); //jqxButtonGroupComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxButtonGroupModule = /** @class */ (function () {
        function jqxButtonGroupModule() {
        }
        jqxButtonGroupModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxButtonGroupComponent],
                        exports: [jqxButtonGroupComponent]
                    },] }
        ];
        return jqxButtonGroupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxButtonGroupComponent = jqxButtonGroupComponent;
    exports.jqxButtonGroupModule = jqxButtonGroupModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

