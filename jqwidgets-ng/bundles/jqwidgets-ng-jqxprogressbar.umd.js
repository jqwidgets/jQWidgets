require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxprogressbar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxprogressbar', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxprogressbar = {}),global.ng.core));
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
    var jqxProgressBarComponent = /** @class */ (function () {
        function jqxProgressBarComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'colorRanges', 'disabled', 'height', 'layout', 'max', 'min', 'orientation', 'rtl', 'renderText', 'showText', 'template', 'theme', 'value', 'width'];
            // jqxProgressBarComponent events
            this.onComplete = new core.EventEmitter();
            this.onInvalidValue = new core.EventEmitter();
            this.onValueChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxProgressBarComponent.prototype.ngOnInit = /**
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
        jqxProgressBarComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxProgressBar(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxProgressBar(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxProgressBar(this.properties[i])) {
                                this.host.jqxProgressBar(this.properties[i], this[attrName]);
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
        jqxProgressBarComponent.prototype.arraysEqual = /**
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
        jqxProgressBarComponent.prototype.manageAttributes = /**
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
        jqxProgressBarComponent.prototype.moveClasses = /**
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
        jqxProgressBarComponent.prototype.moveStyles = /**
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
        jqxProgressBarComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxProgressBar', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxProgressBarComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxProgressBarComponent.prototype.__updateRect__ = /**
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
        jqxProgressBarComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxProgressBar('setOptions', options);
            };
        // jqxProgressBarComponent properties
        // jqxProgressBarComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.animationDuration =
            // jqxProgressBarComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('animationDuration', arg);
                }
                else {
                    return this.host.jqxProgressBar('animationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.colorRanges = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('colorRanges', arg);
                }
                else {
                    return this.host.jqxProgressBar('colorRanges');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('disabled', arg);
                }
                else {
                    return this.host.jqxProgressBar('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('height', arg);
                }
                else {
                    return this.host.jqxProgressBar('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.layout = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('layout', arg);
                }
                else {
                    return this.host.jqxProgressBar('layout');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.max = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('max', arg);
                }
                else {
                    return this.host.jqxProgressBar('max');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.min = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('min', arg);
                }
                else {
                    return this.host.jqxProgressBar('min');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.orientation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('orientation', arg);
                }
                else {
                    return this.host.jqxProgressBar('orientation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('rtl', arg);
                }
                else {
                    return this.host.jqxProgressBar('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.renderText = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('renderText', arg);
                }
                else {
                    return this.host.jqxProgressBar('renderText');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.showText = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('showText', arg);
                }
                else {
                    return this.host.jqxProgressBar('showText');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('template', arg);
                }
                else {
                    return this.host.jqxProgressBar('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('theme', arg);
                }
                else {
                    return this.host.jqxProgressBar('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.value = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('value', arg);
                }
                else {
                    return this.host.jqxProgressBar('value');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxProgressBarComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxProgressBar('width', arg);
                }
                else {
                    return this.host.jqxProgressBar('width');
                }
            };
        // jqxProgressBarComponent functions
        // jqxProgressBarComponent functions
        /**
         * @param {?} value
         * @return {?}
         */
        jqxProgressBarComponent.prototype.actualValue =
            // jqxProgressBarComponent functions
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.host.jqxProgressBar('actualValue', value);
            };
        /**
         * @return {?}
         */
        jqxProgressBarComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxProgressBar('destroy');
            };
        /**
         * @param {?=} value
         * @return {?}
         */
        jqxProgressBarComponent.prototype.val = /**
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    return this.host.jqxProgressBar('val', value);
                }
                else {
                    return this.host.jqxProgressBar('val');
                }
            };
        /**
         * @return {?}
         */
        jqxProgressBarComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('complete', function (eventData) { _this.onComplete.emit(eventData); });
                this.host.on('invalidValue', function (eventData) { _this.onInvalidValue.emit(eventData); });
                this.host.on('valueChanged', function (eventData) { _this.onValueChanged.emit(eventData); });
            };
        jqxProgressBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxProgressBar',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxProgressBarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxProgressBarComponent.propDecorators = {
            attrAnimationDuration: [{ type: core.Input, args: ['animationDuration',] }],
            attrColorRanges: [{ type: core.Input, args: ['colorRanges',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrLayout: [{ type: core.Input, args: ['layout',] }],
            attrMax: [{ type: core.Input, args: ['max',] }],
            attrMin: [{ type: core.Input, args: ['min',] }],
            attrOrientation: [{ type: core.Input, args: ['orientation',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrRenderText: [{ type: core.Input, args: ['renderText',] }],
            attrShowText: [{ type: core.Input, args: ['showText',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrValue: [{ type: core.Input, args: ['value',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onComplete: [{ type: core.Output }],
            onInvalidValue: [{ type: core.Output }],
            onValueChanged: [{ type: core.Output }]
        };
        return jqxProgressBarComponent;
    }()); //jqxProgressBarComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxProgressBarModule = /** @class */ (function () {
        function jqxProgressBarModule() {
        }
        jqxProgressBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxProgressBarComponent],
                        exports: [jqxProgressBarComponent]
                    },] }
        ];
        return jqxProgressBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxProgressBarComponent = jqxProgressBarComponent;
    exports.jqxProgressBarModule = jqxProgressBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

