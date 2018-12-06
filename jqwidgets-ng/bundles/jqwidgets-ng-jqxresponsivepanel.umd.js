require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxresponsivepanel');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxresponsivepanel', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxresponsivepanel = {}),global.ng.core));
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
    var jqxResponsivePanelComponent = /** @class */ (function () {
        function jqxResponsivePanelComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['animationDirection', 'animationHideDelay', 'animationShowDelay', 'animationType', 'autoClose', 'collapseBreakpoint', 'collapseWidth', 'height', 'initContent', 'theme', 'toggleButton', 'toggleButtonSize', 'width'];
            // jqxResponsivePanelComponent events
            this.onClose = new core.EventEmitter();
            this.onCollapse = new core.EventEmitter();
            this.onExpand = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.ngOnInit = /**
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
        jqxResponsivePanelComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                                this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
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
        jqxResponsivePanelComponent.prototype.arraysEqual = /**
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
        jqxResponsivePanelComponent.prototype.manageAttributes = /**
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
        jqxResponsivePanelComponent.prototype.moveClasses = /**
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
        jqxResponsivePanelComponent.prototype.moveStyles = /**
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
        jqxResponsivePanelComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.__updateRect__ = /**
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
        jqxResponsivePanelComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxResponsivePanel('setOptions', options);
            };
        // jqxResponsivePanelComponent properties
        // jqxResponsivePanelComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.animationDirection =
            // jqxResponsivePanelComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('animationDirection', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('animationDirection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.animationHideDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('animationHideDelay', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('animationHideDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.animationShowDelay = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('animationShowDelay', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('animationShowDelay');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.animationType = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('animationType', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('animationType');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.autoClose = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('autoClose', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('autoClose');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.collapseBreakpoint = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('collapseBreakpoint', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('collapseBreakpoint');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.collapseWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('collapseWidth', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('collapseWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('height', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.initContent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('initContent', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('initContent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('theme', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.toggleButton = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('toggleButton', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('toggleButton');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.toggleButtonSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('toggleButtonSize', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('toggleButtonSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxResponsivePanel('width', arg);
                }
                else {
                    return this.host.jqxResponsivePanel('width');
                }
            };
        // jqxResponsivePanelComponent functions
        // jqxResponsivePanelComponent functions
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.close =
            // jqxResponsivePanelComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxResponsivePanel('close');
            };
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxResponsivePanel('destroy');
            };
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.isCollapsed = /**
         * @return {?}
         */
            function () {
                return this.host.jqxResponsivePanel('isCollapsed');
            };
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.isOpened = /**
         * @return {?}
         */
            function () {
                return this.host.jqxResponsivePanel('isOpened');
            };
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                this.host.jqxResponsivePanel('open');
            };
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxResponsivePanel('refresh');
            };
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxResponsivePanel('render');
            };
        /**
         * @return {?}
         */
        jqxResponsivePanelComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
                this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
            };
        jqxResponsivePanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxResponsivePanel',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxResponsivePanelComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxResponsivePanelComponent.propDecorators = {
            attrAnimationDirection: [{ type: core.Input, args: ['animationDirection',] }],
            attrAnimationHideDelay: [{ type: core.Input, args: ['animationHideDelay',] }],
            attrAnimationShowDelay: [{ type: core.Input, args: ['animationShowDelay',] }],
            attrAnimationType: [{ type: core.Input, args: ['animationType',] }],
            attrAutoClose: [{ type: core.Input, args: ['autoClose',] }],
            attrCollapseBreakpoint: [{ type: core.Input, args: ['collapseBreakpoint',] }],
            attrCollapseWidth: [{ type: core.Input, args: ['collapseWidth',] }],
            attrInitContent: [{ type: core.Input, args: ['initContent',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrToggleButton: [{ type: core.Input, args: ['toggleButton',] }],
            attrToggleButtonSize: [{ type: core.Input, args: ['toggleButtonSize',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onClose: [{ type: core.Output }],
            onCollapse: [{ type: core.Output }],
            onExpand: [{ type: core.Output }],
            onOpen: [{ type: core.Output }]
        };
        return jqxResponsivePanelComponent;
    }()); //jqxResponsivePanelComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxResponsivePanelModule = /** @class */ (function () {
        function jqxResponsivePanelModule() {
        }
        jqxResponsivePanelModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxResponsivePanelComponent],
                        exports: [jqxResponsivePanelComponent]
                    },] }
        ];
        return jqxResponsivePanelModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxResponsivePanelComponent = jqxResponsivePanelComponent;
    exports.jqxResponsivePanelModule = jqxResponsivePanelModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

