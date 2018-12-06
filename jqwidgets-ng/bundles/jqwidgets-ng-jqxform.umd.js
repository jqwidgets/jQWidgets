require('../../jqwidgets/jqxcore');
require('../../jqwidgets/globalization/globalize');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxinput');
require('../../jqwidgets/jqxpasswordinput');
require('../../jqwidgets/jqxnumberinput');
require('../../jqwidgets/jqxradiobutton');
require('../../jqwidgets/jqxcheckbox');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxdropdownlist');
require('../../jqwidgets/jqxcombobox');
require('../../jqwidgets/jqxmaskedinput');
require('../../jqwidgets/jqxcalendar');
require('../../jqwidgets/jqxdatetimeinput');
require('../../jqwidgets/jqxform');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxform', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxform = {}),global.ng.core));
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
    var jqxFormComponent = /** @class */ (function () {
        function jqxFormComponent(containerElement) {
            var _this = this;
            this.autoCreate = true;
            this.properties = ['padding', 'backgroundColor', 'borderColor', 'value', 'template'];
            // jqxFormComponent events
            this.onFormDataChange = new core.EventEmitter();
            this.onButtonClick = new core.EventEmitter();
            this.elementRef = containerElement;
            JQXLite(window).resize(function () {
                _this.__updateRect__();
            });
        }
        /**
         * @return {?}
         */
        jqxFormComponent.prototype.ngOnInit = /**
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
        jqxFormComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxForm(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxForm(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxForm(this.properties[i])) {
                                this.host.jqxForm(this.properties[i], this[attrName]);
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
        jqxFormComponent.prototype.arraysEqual = /**
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
        jqxFormComponent.prototype.manageAttributes = /**
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
        jqxFormComponent.prototype.moveClasses = /**
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
        jqxFormComponent.prototype.moveStyles = /**
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
        jqxFormComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxForm', options);
                this.__updateRect__();
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxFormComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxFormComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
                this.refresh();
            };
        /**
         * @param {?} options
         * @return {?}
         */
        jqxFormComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxForm('setOptions', options);
            };
        // jqxFormComponent properties
        // jqxFormComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxFormComponent.prototype.padding =
            // jqxFormComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxForm('padding', arg);
                }
                else {
                    return this.host.jqxForm('padding');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxFormComponent.prototype.backgroundColor = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxForm('backgroundColor', arg);
                }
                else {
                    return this.host.jqxForm('backgroundColor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxFormComponent.prototype.borderColor = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxForm('borderColor', arg);
                }
                else {
                    return this.host.jqxForm('borderColor');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxFormComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxForm('value', arg);
                }
                else {
                    return this.host.jqxForm('value');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxFormComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxForm('template', arg);
                }
                else {
                    return this.host.jqxForm('template');
                }
            };
        // jqxFormComponent functions
        // jqxFormComponent functions
        /**
         * @return {?}
         */
        jqxFormComponent.prototype.getInstance =
            // jqxFormComponent functions
            /**
             * @return {?}
             */
            function () {
                return this.host.jqxForm('getInstance');
            };
        /**
         * @return {?}
         */
        jqxFormComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxForm('refresh');
            };
        /**
         * @return {?}
         */
        jqxFormComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxForm('destroy');
            };
        /**
         * @param {?} name
         * @return {?}
         */
        jqxFormComponent.prototype.hideComponent = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                this.host.jqxForm('hideComponent', name);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        jqxFormComponent.prototype.showComponent = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                this.host.jqxForm('showComponent', name);
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxFormComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxForm('val', value);
                }
                else {
                    return this.host.jqxForm('val');
                }
            };
        /**
         * @param {?=} action
         * @param {?=} target
         * @param {?=} method
         * @return {?}
         */
        jqxFormComponent.prototype.submit = /**
         * @param {?=} action
         * @param {?=} target
         * @param {?=} method
         * @return {?}
         */
            function (action, target, method) {
                this.host.jqxForm('submit', action, target, method);
            };
        /**
         * @param {?=} name
         * @return {?}
         */
        jqxFormComponent.prototype.getComponentByName = /**
         * @param {?=} name
         * @return {?}
         */
            function (name) {
                return this.host.jqxForm('getComponentByName', name);
            };
        /**
         * @return {?}
         */
        jqxFormComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('formDataChange', function (eventData) { _this.onFormDataChange.emit(eventData); });
                this.host.on('buttonClick', function (eventData) { _this.onButtonClick.emit(eventData); });
            };
        jqxFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxForm',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxFormComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxFormComponent.propDecorators = {
            attrPadding: [{ type: core.Input, args: ['padding',] }],
            attrBackgroundColor: [{ type: core.Input, args: ['backgroundColor',] }],
            attrBorderColor: [{ type: core.Input, args: ['borderColor',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onFormDataChange: [{ type: core.Output }],
            onButtonClick: [{ type: core.Output }]
        };
        return jqxFormComponent;
    }()); //jqxFormComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxFormModule = /** @class */ (function () {
        function jqxFormModule() {
        }
        jqxFormModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxFormComponent],
                        exports: [jqxFormComponent]
                    },] }
        ];
        return jqxFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxFormComponent = jqxFormComponent;
    exports.jqxFormModule = jqxFormModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

