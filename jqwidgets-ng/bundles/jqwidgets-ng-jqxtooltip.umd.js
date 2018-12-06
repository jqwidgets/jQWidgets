require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxtooltip');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtooltip', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtooltip = {}),global.ng.core));
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
    var jqxTooltipComponent = /** @class */ (function () {
        function jqxTooltipComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['absolutePositionX', 'absolutePositionY', 'autoHide', 'autoHideDelay', 'animationShowDelay', 'animationHideDelay', 'content', 'closeOnClick', 'disabled', 'enableBrowserBoundsDetection', 'height', 'left', 'name', 'opacity', 'position', 'rtl', 'showDelay', 'showArrow', 'top', 'trigger', 'theme', 'width'];
            // jqxTooltipComponent events
            this.onClose = new core.EventEmitter();
            this.onClosing = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.onOpening = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxTooltipComponent.prototype.ngOnInit = /**
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
        jqxTooltipComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxTooltip(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxTooltip(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxTooltip(this.properties[i])) {
                                this.host.jqxTooltip(this.properties[i], this[attrName]);
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
        jqxTooltipComponent.prototype.arraysEqual = /**
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
        jqxTooltipComponent.prototype.manageAttributes = /**
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
        jqxTooltipComponent.prototype.moveClasses = /**
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
        jqxTooltipComponent.prototype.moveStyles = /**
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
        jqxTooltipComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxTooltipComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxTooltipComponent.prototype.__updateRect__ = /**
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
        jqxTooltipComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxTooltip('setOptions', options);
            };
        // jqxTooltipComponent properties
        // jqxTooltipComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.absolutePositionX =
            // jqxTooltipComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('absolutePositionX', arg);
                }
                else {
                    return this.host.jqxTooltip('absolutePositionX');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.absolutePositionY = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('absolutePositionY', arg);
                }
                else {
                    return this.host.jqxTooltip('absolutePositionY');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.autoHide = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('autoHide', arg);
                }
                else {
                    return this.host.jqxTooltip('autoHide');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.autoHideDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('autoHideDelay', arg);
                }
                else {
                    return this.host.jqxTooltip('autoHideDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.animationShowDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('animationShowDelay', arg);
                }
                else {
                    return this.host.jqxTooltip('animationShowDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.animationHideDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('animationHideDelay', arg);
                }
                else {
                    return this.host.jqxTooltip('animationHideDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.content = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('content', arg);
                }
                else {
                    return this.host.jqxTooltip('content');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.closeOnClick = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('closeOnClick', arg);
                }
                else {
                    return this.host.jqxTooltip('closeOnClick');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('disabled', arg);
                }
                else {
                    return this.host.jqxTooltip('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.enableBrowserBoundsDetection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
                }
                else {
                    return this.host.jqxTooltip('enableBrowserBoundsDetection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('height', arg);
                }
                else {
                    return this.host.jqxTooltip('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.left = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('left', arg);
                }
                else {
                    return this.host.jqxTooltip('left');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.name = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('name', arg);
                }
                else {
                    return this.host.jqxTooltip('name');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.opacity = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('opacity', arg);
                }
                else {
                    return this.host.jqxTooltip('opacity');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.position = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('position', arg);
                }
                else {
                    return this.host.jqxTooltip('position');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('rtl', arg);
                }
                else {
                    return this.host.jqxTooltip('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.showDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('showDelay', arg);
                }
                else {
                    return this.host.jqxTooltip('showDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.showArrow = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('showArrow', arg);
                }
                else {
                    return this.host.jqxTooltip('showArrow');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.top = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('top', arg);
                }
                else {
                    return this.host.jqxTooltip('top');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.trigger = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('trigger', arg);
                }
                else {
                    return this.host.jqxTooltip('trigger');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('theme', arg);
                }
                else {
                    return this.host.jqxTooltip('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxTooltipComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxTooltip('width', arg);
                }
                else {
                    return this.host.jqxTooltip('width');
                }
            };
        // jqxTooltipComponent functions
        // jqxTooltipComponent functions
        /**
         * @param {?=} index
         * @return {?}
         */
        jqxTooltipComponent.prototype.close =
            // jqxTooltipComponent functions
            /**
             * @param {?=} index
             * @return {?}
             */
            function (index) {
                this.host.jqxTooltip('close', index);
            };
        /**
         * @return {?}
         */
        jqxTooltipComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxTooltip('destroy');
            };
        /**
         * @param {?=} left
         * @param {?=} top
         * @return {?}
         */
        jqxTooltipComponent.prototype.open = /**
         * @param {?=} left
         * @param {?=} top
         * @return {?}
         */
            function (left, top) {
                this.host.jqxTooltip('open', left, top);
            };
        /**
         * @return {?}
         */
        jqxTooltipComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxTooltip('refresh');
            };
        /**
         * @return {?}
         */
        jqxTooltipComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('closing', function (eventData) { _this.onClosing.emit(eventData); });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
                this.host.on('opening', function (eventData) { _this.onOpening.emit(eventData); });
            };
        jqxTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxTooltip',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxTooltipComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxTooltipComponent.propDecorators = {
            attrAbsolutePositionX: [{ type: core.Input, args: ['absolutePositionX',] }],
            attrAbsolutePositionY: [{ type: core.Input, args: ['absolutePositionY',] }],
            attrAutoHide: [{ type: core.Input, args: ['autoHide',] }],
            attrAutoHideDelay: [{ type: core.Input, args: ['autoHideDelay',] }],
            attrAnimationShowDelay: [{ type: core.Input, args: ['animationShowDelay',] }],
            attrAnimationHideDelay: [{ type: core.Input, args: ['animationHideDelay',] }],
            attrContent: [{ type: core.Input, args: ['content',] }],
            attrCloseOnClick: [{ type: core.Input, args: ['closeOnClick',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEnableBrowserBoundsDetection: [{ type: core.Input, args: ['enableBrowserBoundsDetection',] }],
            attrLeft: [{ type: core.Input, args: ['left',] }],
            attrName: [{ type: core.Input, args: ['name',] }],
            attrOpacity: [{ type: core.Input, args: ['opacity',] }],
            attrPosition: [{ type: core.Input, args: ['position',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrShowDelay: [{ type: core.Input, args: ['showDelay',] }],
            attrShowArrow: [{ type: core.Input, args: ['showArrow',] }],
            attrTop: [{ type: core.Input, args: ['top',] }],
            attrTrigger: [{ type: core.Input, args: ['trigger',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onClose: [{ type: core.Output }],
            onClosing: [{ type: core.Output }],
            onOpen: [{ type: core.Output }],
            onOpening: [{ type: core.Output }]
        };
        return jqxTooltipComponent;
    }()); //jqxTooltipComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxTooltipModule = /** @class */ (function () {
        function jqxTooltipModule() {
        }
        jqxTooltipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxTooltipComponent],
                        exports: [jqxTooltipComponent]
                    },] }
        ];
        return jqxTooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxTooltipComponent = jqxTooltipComponent;
    exports.jqxTooltipModule = jqxTooltipModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

