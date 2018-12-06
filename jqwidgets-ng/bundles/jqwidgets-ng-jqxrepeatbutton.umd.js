require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxrepeatbutton', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxrepeatbutton = {}),global.ng.core));
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
    var jqxRepeatButtonComponent = /** @class */ (function () {
        function jqxRepeatButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['delay', 'disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
            // jqxRepeatButtonComponent events
            this.onClick = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.ngOnInit = /**
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
        jqxRepeatButtonComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxRepeatButton(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxRepeatButton(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxRepeatButton(this.properties[i])) {
                                this.host.jqxRepeatButton(this.properties[i], this[attrName]);
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
        jqxRepeatButtonComponent.prototype.arraysEqual = /**
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
        jqxRepeatButtonComponent.prototype.manageAttributes = /**
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
        jqxRepeatButtonComponent.prototype.moveClasses = /**
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
        jqxRepeatButtonComponent.prototype.moveStyles = /**
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
        jqxRepeatButtonComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRepeatButton', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.__updateRect__ = /**
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
        jqxRepeatButtonComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxRepeatButton('setOptions', options);
            };
        // jqxRepeatButtonComponent properties
        // jqxRepeatButtonComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.delay =
            // jqxRepeatButtonComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('delay', arg);
                }
                else {
                    return this.host.jqxRepeatButton('delay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('disabled', arg);
                }
                else {
                    return this.host.jqxRepeatButton('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('height', arg);
                }
                else {
                    return this.host.jqxRepeatButton('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.imgSrc = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('imgSrc', arg);
                }
                else {
                    return this.host.jqxRepeatButton('imgSrc');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.imgWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('imgWidth', arg);
                }
                else {
                    return this.host.jqxRepeatButton('imgWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.imgHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('imgHeight', arg);
                }
                else {
                    return this.host.jqxRepeatButton('imgHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.imgPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('imgPosition', arg);
                }
                else {
                    return this.host.jqxRepeatButton('imgPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.roundedCorners = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('roundedCorners', arg);
                }
                else {
                    return this.host.jqxRepeatButton('roundedCorners');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('rtl', arg);
                }
                else {
                    return this.host.jqxRepeatButton('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.textPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('textPosition', arg);
                }
                else {
                    return this.host.jqxRepeatButton('textPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.textImageRelation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('textImageRelation', arg);
                }
                else {
                    return this.host.jqxRepeatButton('textImageRelation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('theme', arg);
                }
                else {
                    return this.host.jqxRepeatButton('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('template', arg);
                }
                else {
                    return this.host.jqxRepeatButton('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.toggled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('toggled', arg);
                }
                else {
                    return this.host.jqxRepeatButton('toggled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('width', arg);
                }
                else {
                    return this.host.jqxRepeatButton('width');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxRepeatButton('value', arg);
                }
                else {
                    return this.host.jqxRepeatButton('value');
                }
            };
        // jqxRepeatButtonComponent functions
        // jqxRepeatButtonComponent functions
        /**
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.destroy =
            // jqxRepeatButtonComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxRepeatButton('destroy');
            };
        /**
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxRepeatButton('focus');
            };
        /**
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxRepeatButton('render');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxRepeatButton('val', value);
                }
                else {
                    return this.host.jqxRepeatButton('val');
                }
            };
        /**
         * @return {?}
         */
        jqxRepeatButtonComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
            };
        jqxRepeatButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxRepeatButton',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxRepeatButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxRepeatButtonComponent.propDecorators = {
            attrDelay: [{ type: core.Input, args: ['delay',] }],
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
            attrToggled: [{ type: core.Input, args: ['toggled',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onClick: [{ type: core.Output }]
        };
        return jqxRepeatButtonComponent;
    }()); //jqxRepeatButtonComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxRepeatButtonModule = /** @class */ (function () {
        function jqxRepeatButtonModule() {
        }
        jqxRepeatButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxRepeatButtonComponent],
                        exports: [jqxRepeatButtonComponent]
                    },] }
        ];
        return jqxRepeatButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxRepeatButtonComponent = jqxRepeatButtonComponent;
    exports.jqxRepeatButtonModule = jqxRepeatButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

