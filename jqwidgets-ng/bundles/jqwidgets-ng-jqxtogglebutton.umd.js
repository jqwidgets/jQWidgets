require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtogglebutton', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtogglebutton = {}),global.ng.core));
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
    var jqxToggleButtonComponent = /** @class */ (function () {
        function jqxToggleButtonComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
            // jqxToggleButtonComponent events
            this.onClick = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.ngOnInit = /**
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
        jqxToggleButtonComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxToggleButton(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxToggleButton(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxToggleButton(this.properties[i])) {
                                this.host.jqxToggleButton(this.properties[i], this[attrName]);
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
        jqxToggleButtonComponent.prototype.arraysEqual = /**
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
        jqxToggleButtonComponent.prototype.manageAttributes = /**
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
        jqxToggleButtonComponent.prototype.moveClasses = /**
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
        jqxToggleButtonComponent.prototype.moveStyles = /**
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
        jqxToggleButtonComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToggleButton', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.__updateRect__ = /**
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
        jqxToggleButtonComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxToggleButton('setOptions', options);
            };
        // jqxToggleButtonComponent properties
        // jqxToggleButtonComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.disabled =
            // jqxToggleButtonComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('disabled', arg);
                }
                else {
                    return this.host.jqxToggleButton('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('height', arg);
                }
                else {
                    return this.host.jqxToggleButton('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.imgSrc = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('imgSrc', arg);
                }
                else {
                    return this.host.jqxToggleButton('imgSrc');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.imgWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('imgWidth', arg);
                }
                else {
                    return this.host.jqxToggleButton('imgWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.imgHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('imgHeight', arg);
                }
                else {
                    return this.host.jqxToggleButton('imgHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.imgPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('imgPosition', arg);
                }
                else {
                    return this.host.jqxToggleButton('imgPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.roundedCorners = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('roundedCorners', arg);
                }
                else {
                    return this.host.jqxToggleButton('roundedCorners');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('rtl', arg);
                }
                else {
                    return this.host.jqxToggleButton('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.textPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('textPosition', arg);
                }
                else {
                    return this.host.jqxToggleButton('textPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.textImageRelation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('textImageRelation', arg);
                }
                else {
                    return this.host.jqxToggleButton('textImageRelation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('theme', arg);
                }
                else {
                    return this.host.jqxToggleButton('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('template', arg);
                }
                else {
                    return this.host.jqxToggleButton('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.toggled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('toggled', arg);
                }
                else {
                    return this.host.jqxToggleButton('toggled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('width', arg);
                }
                else {
                    return this.host.jqxToggleButton('width');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToggleButton('value', arg);
                }
                else {
                    return this.host.jqxToggleButton('value');
                }
            };
        // jqxToggleButtonComponent functions
        // jqxToggleButtonComponent functions
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.check =
            // jqxToggleButtonComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxToggleButton('check');
            };
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxToggleButton('destroy');
            };
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxToggleButton('focus');
            };
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxToggleButton('render');
            };
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                this.host.jqxToggleButton('toggle');
            };
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.unCheck = /**
         * @return {?}
         */
            function () {
                this.host.jqxToggleButton('unCheck');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxToggleButton('val', value);
                }
                else {
                    return this.host.jqxToggleButton('val');
                }
            };
        /**
         * @return {?}
         */
        jqxToggleButtonComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
            };
        jqxToggleButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxToggleButton',
                        template: '<button><ng-content></ng-content></button>'
                    }] }
        ];
        /** @nocollapse */
        jqxToggleButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxToggleButtonComponent.propDecorators = {
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
        return jqxToggleButtonComponent;
    }()); //jqxToggleButtonComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxToggleButtonModule = /** @class */ (function () {
        function jqxToggleButtonModule() {
        }
        jqxToggleButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxToggleButtonComponent],
                        exports: [jqxToggleButtonComponent]
                    },] }
        ];
        return jqxToggleButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxToggleButtonComponent = jqxToggleButtonComponent;
    exports.jqxToggleButtonModule = jqxToggleButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

