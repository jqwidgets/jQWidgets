require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollview');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxscrollview', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxscrollview = {}),global.ng.core));
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
    var jqxScrollViewComponent = /** @class */ (function () {
        function jqxScrollViewComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDuration', 'bounceEnabled', 'buttonsOffset', 'currentPage', 'disabled', 'height', 'moveThreshold', 'showButtons', 'slideShow', 'slideDuration', 'theme', 'width'];
            // jqxScrollViewComponent events
            this.onPageChanged = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxScrollViewComponent.prototype.ngOnInit = /**
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
        jqxScrollViewComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollView(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxScrollView(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxScrollView(this.properties[i])) {
                                this.host.jqxScrollView(this.properties[i], this[attrName]);
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
        jqxScrollViewComponent.prototype.arraysEqual = /**
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
        jqxScrollViewComponent.prototype.manageAttributes = /**
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
        jqxScrollViewComponent.prototype.moveClasses = /**
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
        jqxScrollViewComponent.prototype.moveStyles = /**
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
        jqxScrollViewComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxScrollViewComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxScrollViewComponent.prototype.__updateRect__ = /**
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
        jqxScrollViewComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxScrollView('setOptions', options);
            };
        // jqxScrollViewComponent properties
        // jqxScrollViewComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.animationDuration =
            // jqxScrollViewComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('animationDuration', arg);
                }
                else {
                    return this.host.jqxScrollView('animationDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.bounceEnabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('bounceEnabled', arg);
                }
                else {
                    return this.host.jqxScrollView('bounceEnabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.buttonsOffset = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('buttonsOffset', arg);
                }
                else {
                    return this.host.jqxScrollView('buttonsOffset');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.currentPage = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('currentPage', arg);
                }
                else {
                    return this.host.jqxScrollView('currentPage');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('disabled', arg);
                }
                else {
                    return this.host.jqxScrollView('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('height', arg);
                }
                else {
                    return this.host.jqxScrollView('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.moveThreshold = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('moveThreshold', arg);
                }
                else {
                    return this.host.jqxScrollView('moveThreshold');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.showButtons = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('showButtons', arg);
                }
                else {
                    return this.host.jqxScrollView('showButtons');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.slideShow = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('slideShow', arg);
                }
                else {
                    return this.host.jqxScrollView('slideShow');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.slideDuration = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('slideDuration', arg);
                }
                else {
                    return this.host.jqxScrollView('slideDuration');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('theme', arg);
                }
                else {
                    return this.host.jqxScrollView('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxScrollViewComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxScrollView('width', arg);
                }
                else {
                    return this.host.jqxScrollView('width');
                }
            };
        // jqxScrollViewComponent functions
        // jqxScrollViewComponent functions
        /**
         * @return {?}
         */
        jqxScrollViewComponent.prototype.back =
            // jqxScrollViewComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxScrollView('back');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxScrollViewComponent.prototype.changePage = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxScrollView('changePage', index);
            };
        /**
         * @return {?}
         */
        jqxScrollViewComponent.prototype.forward = /**
         * @return {?}
         */
            function () {
                this.host.jqxScrollView('forward');
            };
        /**
         * @return {?}
         */
        jqxScrollViewComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxScrollView('refresh');
            };
        /**
         * @return {?}
         */
        jqxScrollViewComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
            };
        jqxScrollViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxScrollView',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxScrollViewComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxScrollViewComponent.propDecorators = {
            attrAnimationDuration: [{ type: core.Input, args: ['animationDuration',] }],
            attrBounceEnabled: [{ type: core.Input, args: ['bounceEnabled',] }],
            attrButtonsOffset: [{ type: core.Input, args: ['buttonsOffset',] }],
            attrCurrentPage: [{ type: core.Input, args: ['currentPage',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrMoveThreshold: [{ type: core.Input, args: ['moveThreshold',] }],
            attrShowButtons: [{ type: core.Input, args: ['showButtons',] }],
            attrSlideShow: [{ type: core.Input, args: ['slideShow',] }],
            attrSlideDuration: [{ type: core.Input, args: ['slideDuration',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onPageChanged: [{ type: core.Output }]
        };
        return jqxScrollViewComponent;
    }()); //jqxScrollViewComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxScrollViewModule = /** @class */ (function () {
        function jqxScrollViewModule() {
        }
        jqxScrollViewModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxScrollViewComponent],
                        exports: [jqxScrollViewComponent]
                    },] }
        ];
        return jqxScrollViewModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxScrollViewComponent = jqxScrollViewComponent;
    exports.jqxScrollViewModule = jqxScrollViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

