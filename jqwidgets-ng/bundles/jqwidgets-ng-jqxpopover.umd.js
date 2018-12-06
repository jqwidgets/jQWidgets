require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxpopover');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxpopover', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxpopover = {}),global.ng.core));
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
    var jqxPopoverComponent = /** @class */ (function () {
        function jqxPopoverComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['arrowOffsetValue', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'animationType', 'height', 'initContent', 'isModal', 'offset', 'position', 'rtl', 'selector', 'showArrow', 'showCloseButton', 'width', 'title', 'theme'];
            // jqxPopoverComponent events
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxPopoverComponent.prototype.ngOnInit = /**
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
        jqxPopoverComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxPopover(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxPopover(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxPopover(this.properties[i])) {
                                this.host.jqxPopover(this.properties[i], this[attrName]);
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
        jqxPopoverComponent.prototype.arraysEqual = /**
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
        jqxPopoverComponent.prototype.manageAttributes = /**
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
        jqxPopoverComponent.prototype.moveClasses = /**
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
        jqxPopoverComponent.prototype.moveStyles = /**
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
        jqxPopoverComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPopover', options);
                this.host = this.widgetObject['host'];
                this.__wireEvents__();
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxPopoverComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxPopoverComponent.prototype.__updateRect__ = /**
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
        jqxPopoverComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxPopover('setOptions', options);
            };
        // jqxPopoverComponent properties
        // jqxPopoverComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.arrowOffsetValue =
            // jqxPopoverComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('arrowOffsetValue', arg);
                }
                else {
                    return this.host.jqxPopover('arrowOffsetValue');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.animationOpenDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('animationOpenDelay', arg);
                }
                else {
                    return this.host.jqxPopover('animationOpenDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.animationCloseDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('animationCloseDelay', arg);
                }
                else {
                    return this.host.jqxPopover('animationCloseDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.autoClose = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('autoClose', arg);
                }
                else {
                    return this.host.jqxPopover('autoClose');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.animationType = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('animationType', arg);
                }
                else {
                    return this.host.jqxPopover('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('height', arg);
                }
                else {
                    return this.host.jqxPopover('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.initContent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('initContent', arg);
                }
                else {
                    return this.host.jqxPopover('initContent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.isModal = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('isModal', arg);
                }
                else {
                    return this.host.jqxPopover('isModal');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.offset = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('offset', arg);
                }
                else {
                    return this.host.jqxPopover('offset');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.position = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('position', arg);
                }
                else {
                    return this.host.jqxPopover('position');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('rtl', arg);
                }
                else {
                    return this.host.jqxPopover('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.selector = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('selector', arg);
                }
                else {
                    return this.host.jqxPopover('selector');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.showArrow = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('showArrow', arg);
                }
                else {
                    return this.host.jqxPopover('showArrow');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.showCloseButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('showCloseButton', arg);
                }
                else {
                    return this.host.jqxPopover('showCloseButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('width', arg);
                }
                else {
                    return this.host.jqxPopover('width');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.title = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('title', arg);
                }
                else {
                    return this.host.jqxPopover('title');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPopoverComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPopover('theme', arg);
                }
                else {
                    return this.host.jqxPopover('theme');
                }
            };
        // jqxPopoverComponent functions
        // jqxPopoverComponent functions
        /**
         * @return {?}
         */
        jqxPopoverComponent.prototype.close =
            // jqxPopoverComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxPopover('close');
            };
        /**
         * @return {?}
         */
        jqxPopoverComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxPopover('destroy');
            };
        /**
         * @return {?}
         */
        jqxPopoverComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                this.host.jqxPopover('open');
            };
        /**
         * @return {?}
         */
        jqxPopoverComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(function () {
                    _this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                    _this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                });
            };
        jqxPopoverComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxPopover',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxPopoverComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxPopoverComponent.propDecorators = {
            attrArrowOffsetValue: [{ type: core.Input, args: ['arrowOffsetValue',] }],
            attrAnimationOpenDelay: [{ type: core.Input, args: ['animationOpenDelay',] }],
            attrAnimationCloseDelay: [{ type: core.Input, args: ['animationCloseDelay',] }],
            attrAutoClose: [{ type: core.Input, args: ['autoClose',] }],
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrInitContent: [{ type: core.Input, args: ['initContent',] }],
            attrIsModal: [{ type: core.Input, args: ['isModal',] }],
            attrOffset: [{ type: core.Input, args: ['offset',] }],
            attrPosition: [{ type: core.Input, args: ['position',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSelector: [{ type: core.Input, args: ['selector',] }],
            attrShowArrow: [{ type: core.Input, args: ['showArrow',] }],
            attrShowCloseButton: [{ type: core.Input, args: ['showCloseButton',] }],
            attrTitle: [{ type: core.Input, args: ['title',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onClose: [{ type: core.Output }],
            onOpen: [{ type: core.Output }]
        };
        return jqxPopoverComponent;
    }()); //jqxPopoverComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxPopoverModule = /** @class */ (function () {
        function jqxPopoverModule() {
        }
        jqxPopoverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxPopoverComponent],
                        exports: [jqxPopoverComponent]
                    },] }
        ];
        return jqxPopoverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxPopoverComponent = jqxPopoverComponent;
    exports.jqxPopoverModule = jqxPopoverModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

