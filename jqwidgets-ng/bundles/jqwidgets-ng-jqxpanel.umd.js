require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxpanel');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxpanel', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxpanel = {}),global.ng.core));
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
    var jqxPanelComponent = /** @class */ (function () {
        function jqxPanelComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoUpdate', 'disabled', 'height', 'rtl', 'sizeMode', 'scrollBarSize', 'theme', 'width'];
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.ngOnInit = /**
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
        jqxPanelComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxPanel(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxPanel(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxPanel(this.properties[i])) {
                                this.host.jqxPanel(this.properties[i], this[attrName]);
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
        jqxPanelComponent.prototype.arraysEqual = /**
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
        jqxPanelComponent.prototype.manageAttributes = /**
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
        jqxPanelComponent.prototype.moveClasses = /**
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
        jqxPanelComponent.prototype.moveStyles = /**
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
        jqxPanelComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxPanelComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.__updateRect__ = /**
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
        jqxPanelComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxPanel('setOptions', options);
            };
        // jqxPanelComponent properties
        // jqxPanelComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPanelComponent.prototype.autoUpdate =
            // jqxPanelComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPanel('autoUpdate', arg);
                }
                else {
                    return this.host.jqxPanel('autoUpdate');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPanelComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPanel('disabled', arg);
                }
                else {
                    return this.host.jqxPanel('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPanelComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPanel('height', arg);
                }
                else {
                    return this.host.jqxPanel('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPanelComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPanel('rtl', arg);
                }
                else {
                    return this.host.jqxPanel('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPanelComponent.prototype.sizeMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPanel('sizeMode', arg);
                }
                else {
                    return this.host.jqxPanel('sizeMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPanelComponent.prototype.scrollBarSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPanel('scrollBarSize', arg);
                }
                else {
                    return this.host.jqxPanel('scrollBarSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPanelComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPanel('theme', arg);
                }
                else {
                    return this.host.jqxPanel('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPanelComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPanel('width', arg);
                }
                else {
                    return this.host.jqxPanel('width');
                }
            };
        // jqxPanelComponent functions
        // jqxPanelComponent functions
        /**
         * @param {?} HTMLElement
         * @return {?}
         */
        jqxPanelComponent.prototype.append =
            // jqxPanelComponent functions
            /**
             * @param {?} HTMLElement
             * @return {?}
             */
            function (HTMLElement) {
                this.host.jqxPanel('append', HTMLElement);
            };
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.clearcontent = /**
         * @return {?}
         */
            function () {
                this.host.jqxPanel('clearcontent');
            };
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxPanel('destroy');
            };
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.host.jqxPanel('focus');
            };
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.getScrollHeight = /**
         * @return {?}
         */
            function () {
                return this.host.jqxPanel('getScrollHeight');
            };
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.getVScrollPosition = /**
         * @return {?}
         */
            function () {
                return this.host.jqxPanel('getVScrollPosition');
            };
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.getScrollWidth = /**
         * @return {?}
         */
            function () {
                return this.host.jqxPanel('getScrollWidth');
            };
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.getHScrollPosition = /**
         * @return {?}
         */
            function () {
                return this.host.jqxPanel('getHScrollPosition');
            };
        /**
         * @param {?} HTMLElement
         * @return {?}
         */
        jqxPanelComponent.prototype.prepend = /**
         * @param {?} HTMLElement
         * @return {?}
         */
            function (HTMLElement) {
                this.host.jqxPanel('prepend', HTMLElement);
            };
        /**
         * @param {?} HTMLElement
         * @return {?}
         */
        jqxPanelComponent.prototype.remove = /**
         * @param {?} HTMLElement
         * @return {?}
         */
            function (HTMLElement) {
                this.host.jqxPanel('remove', HTMLElement);
            };
        /**
         * @param {?} left
         * @param {?} top
         * @return {?}
         */
        jqxPanelComponent.prototype.scrollTo = /**
         * @param {?} left
         * @param {?} top
         * @return {?}
         */
            function (left, top) {
                this.host.jqxPanel('scrollTo', left, top);
            };
        // jqxPanelComponent events
        // jqxPanelComponent events
        /**
         * @return {?}
         */
        jqxPanelComponent.prototype.__wireEvents__ =
            // jqxPanelComponent events
            /**
             * @return {?}
             */
            function () {
            };
        jqxPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxPanel',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxPanelComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxPanelComponent.propDecorators = {
            attrAutoUpdate: [{ type: core.Input, args: ['autoUpdate',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSizeMode: [{ type: core.Input, args: ['sizeMode',] }],
            attrScrollBarSize: [{ type: core.Input, args: ['scrollBarSize',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }]
        };
        return jqxPanelComponent;
    }()); //jqxPanelComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxPanelModule = /** @class */ (function () {
        function jqxPanelModule() {
        }
        jqxPanelModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxPanelComponent],
                        exports: [jqxPanelComponent]
                    },] }
        ];
        return jqxPanelModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxPanelComponent = jqxPanelComponent;
    exports.jqxPanelModule = jqxPanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

