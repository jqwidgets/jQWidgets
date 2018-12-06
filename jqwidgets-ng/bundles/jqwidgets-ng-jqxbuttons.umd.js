require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxbuttons', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxbuttons = {}),global.ng.core));
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
    var jqxButtonComponent = /** @class */ (function () {
        function jqxButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'width', 'value'];
            // jqxButtonComponent events
            this.onClick = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxButtonComponent.prototype.ngOnInit = /**
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
        jqxButtonComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxButton(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxButton(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxButton(this.properties[i])) {
                                this.host.jqxButton(this.properties[i], this[attrName]);
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
        jqxButtonComponent.prototype.arraysEqual = /**
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
        jqxButtonComponent.prototype.manageAttributes = /**
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
        jqxButtonComponent.prototype.moveClasses = /**
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
        jqxButtonComponent.prototype.moveStyles = /**
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
        jqxButtonComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
                this.host = this.widgetObject['host'];
                this.__wireEvents__();
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxButtonComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxButtonComponent.prototype.__updateRect__ = /**
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
        jqxButtonComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxButton('setOptions', options);
            };
        // jqxButtonComponent properties
        // jqxButtonComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.disabled =
            // jqxButtonComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('disabled', arg);
                }
                else {
                    return this.host.jqxButton('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('height', arg);
                }
                else {
                    return this.host.jqxButton('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.imgSrc = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('imgSrc', arg);
                }
                else {
                    return this.host.jqxButton('imgSrc');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.imgWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('imgWidth', arg);
                }
                else {
                    return this.host.jqxButton('imgWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.imgHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('imgHeight', arg);
                }
                else {
                    return this.host.jqxButton('imgHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.imgPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('imgPosition', arg);
                }
                else {
                    return this.host.jqxButton('imgPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.roundedCorners = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('roundedCorners', arg);
                }
                else {
                    return this.host.jqxButton('roundedCorners');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('rtl', arg);
                }
                else {
                    return this.host.jqxButton('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.textPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('textPosition', arg);
                }
                else {
                    return this.host.jqxButton('textPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.textImageRelation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('textImageRelation', arg);
                }
                else {
                    return this.host.jqxButton('textImageRelation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('theme', arg);
                }
                else {
                    return this.host.jqxButton('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('template', arg);
                }
                else {
                    return this.host.jqxButton('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('width', arg);
                }
                else {
                    return this.host.jqxButton('width');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxButtonComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxButton('value', arg);
                }
                else {
                    return this.host.jqxButton('value');
                }
            };
        // jqxButtonComponent functions
        // jqxButtonComponent functions
        /**
         * @return {?}
         */
        jqxButtonComponent.prototype.destroy =
            // jqxButtonComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxButton('destroy');
            };
        /**
         * @return {?}
         */
        jqxButtonComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxButton('focus');
            };
        /**
         * @return {?}
         */
        jqxButtonComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxButton('render');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxButtonComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxButton('val', value);
                }
                else {
                    return this.host.jqxButton('val');
                }
            };
        /**
         * @return {?}
         */
        jqxButtonComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
            };
        jqxButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxButton',
                        template: '<button><ng-content></ng-content></button>'
                    }] }
        ];
        /** @nocollapse */
        jqxButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxButtonComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrImgSrc: [{ type: core.Input, args: ['imgSrc',] }],
            attrImgWidth: [{ type: core.Input, args: ['imgWidth',] }],
            attrImgHeight: [{ type: core.Input, args: ['imgHeight',] }],
            attrImgPosition: [{ type: core.Input, args: ['imgPosition',] }],
            attrRoundedCorners: [{ type: core.Input, args: ['roundedCorners',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrTextPosition: [{ type: core.Input, args: ['textPosition',] }],
            attrTextImageRelation: [{ type: core.Input, args: ['textImageRelation',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onClick: [{ type: core.Output }]
        };
        return jqxButtonComponent;
    }()); //jqxButtonComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxButtonModule = /** @class */ (function () {
        function jqxButtonModule() {
        }
        jqxButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxButtonComponent],
                        exports: [jqxButtonComponent]
                    },] }
        ];
        return jqxButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxButtonComponent = jqxButtonComponent;
    exports.jqxButtonModule = jqxButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

