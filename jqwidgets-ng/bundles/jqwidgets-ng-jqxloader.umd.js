require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxloader');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxloader', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxloader = {}),global.ng.core));
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
    var jqxLoaderComponent = /** @class */ (function () {
        function jqxLoaderComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoOpen', 'height', 'html', 'isModal', 'imagePosition', 'rtl', 'text', 'textPosition', 'theme', 'width'];
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxLoaderComponent.prototype.ngOnInit = /**
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
        jqxLoaderComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxLoader(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxLoader(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxLoader(this.properties[i])) {
                                this.host.jqxLoader(this.properties[i], this[attrName]);
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
        jqxLoaderComponent.prototype.arraysEqual = /**
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
        jqxLoaderComponent.prototype.manageAttributes = /**
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
        jqxLoaderComponent.prototype.moveClasses = /**
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
        jqxLoaderComponent.prototype.moveStyles = /**
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
        jqxLoaderComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLoader', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxLoaderComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxLoaderComponent.prototype.__updateRect__ = /**
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
        jqxLoaderComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxLoader('setOptions', options);
            };
        // jqxLoaderComponent properties
        // jqxLoaderComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.autoOpen =
            // jqxLoaderComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('autoOpen', arg);
                }
                else {
                    return this.host.jqxLoader('autoOpen');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('height', arg);
                }
                else {
                    return this.host.jqxLoader('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.html = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('html', arg);
                }
                else {
                    return this.host.jqxLoader('html');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.isModal = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('isModal', arg);
                }
                else {
                    return this.host.jqxLoader('isModal');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.imagePosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('imagePosition', arg);
                }
                else {
                    return this.host.jqxLoader('imagePosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('rtl', arg);
                }
                else {
                    return this.host.jqxLoader('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.text = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('text', arg);
                }
                else {
                    return this.host.jqxLoader('text');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.textPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('textPosition', arg);
                }
                else {
                    return this.host.jqxLoader('textPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('theme', arg);
                }
                else {
                    return this.host.jqxLoader('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLoaderComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLoader('width', arg);
                }
                else {
                    return this.host.jqxLoader('width');
                }
            };
        // jqxLoaderComponent functions
        // jqxLoaderComponent functions
        /**
         * @return {?}
         */
        jqxLoaderComponent.prototype.close =
            // jqxLoaderComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxLoader('close');
            };
        /**
         * @param {?=} left
         * @param {?=} top
         * @return {?}
         */
        jqxLoaderComponent.prototype.open = /**
         * @param {?=} left
         * @param {?=} top
         * @return {?}
         */
            function (left, top) {
                this.host.jqxLoader('open', left, top);
            };
        /**
         * @return {?}
         */
        jqxLoaderComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
            };
        jqxLoaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxLoader',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxLoaderComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxLoaderComponent.propDecorators = {
            attrAutoOpen: [{ type: core.Input, args: ['autoOpen',] }],
            attrHtml: [{ type: core.Input, args: ['html',] }],
            attrIsModal: [{ type: core.Input, args: ['isModal',] }],
            attrImagePosition: [{ type: core.Input, args: ['imagePosition',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrText: [{ type: core.Input, args: ['text',] }],
            attrTextPosition: [{ type: core.Input, args: ['textPosition',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }]
        };
        return jqxLoaderComponent;
    }()); //jqxLoaderComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxLoaderModule = /** @class */ (function () {
        function jqxLoaderModule() {
        }
        jqxLoaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxLoaderComponent],
                        exports: [jqxLoaderComponent]
                    },] }
        ];
        return jqxLoaderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxLoaderComponent = jqxLoaderComponent;
    exports.jqxLoaderModule = jqxLoaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

