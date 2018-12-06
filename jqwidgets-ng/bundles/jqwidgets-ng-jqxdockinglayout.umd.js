require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxwindow');
require('../../jqwidgets/jqxribbon');
require('../../jqwidgets/jqxlayout');
require('../../jqwidgets/jqxmenu');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxdockinglayout');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdockinglayout', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdockinglayout = {}),global.ng.core));
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
    var jqxDockingLayoutComponent = /** @class */ (function () {
        function jqxDockingLayoutComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
            // jqxDockingLayoutComponent events
            this.onDock = new core.EventEmitter();
            this.onFloatGroupClosed = new core.EventEmitter();
            this.onFloat = new core.EventEmitter();
            this.onPin = new core.EventEmitter();
            this.onResize = new core.EventEmitter();
            this.onUnpin = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.ngOnInit = /**
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
        jqxDockingLayoutComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                                this.host.jqxDockingLayout(this.properties[i], this[attrName]);
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
        jqxDockingLayoutComponent.prototype.arraysEqual = /**
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
        jqxDockingLayoutComponent.prototype.manageAttributes = /**
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
        jqxDockingLayoutComponent.prototype.moveClasses = /**
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
        jqxDockingLayoutComponent.prototype.moveStyles = /**
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
        jqxDockingLayoutComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.__updateRect__ = /**
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
        jqxDockingLayoutComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxDockingLayout('setOptions', options);
            };
        // jqxDockingLayoutComponent properties
        // jqxDockingLayoutComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.contextMenu =
            // jqxDockingLayoutComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('contextMenu', arg);
                }
                else {
                    return this.host.jqxDockingLayout('contextMenu');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('height', arg);
                }
                else {
                    return this.host.jqxDockingLayout('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.layout = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('layout', arg);
                }
                else {
                    return this.host.jqxDockingLayout('layout');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.minGroupHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('minGroupHeight', arg);
                }
                else {
                    return this.host.jqxDockingLayout('minGroupHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.minGroupWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('minGroupWidth', arg);
                }
                else {
                    return this.host.jqxDockingLayout('minGroupWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.resizable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('resizable', arg);
                }
                else {
                    return this.host.jqxDockingLayout('resizable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('rtl', arg);
                }
                else {
                    return this.host.jqxDockingLayout('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('theme', arg);
                }
                else {
                    return this.host.jqxDockingLayout('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxDockingLayout('width', arg);
                }
                else {
                    return this.host.jqxDockingLayout('width');
                }
            };
        // jqxDockingLayoutComponent functions
        // jqxDockingLayoutComponent functions
        /**
         * @param {?} width
         * @param {?} height
         * @param {?} position
         * @param {?} panelType
         * @param {?} title
         * @param {?} content
         * @param {?} initContent
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.addFloatGroup =
            // jqxDockingLayoutComponent functions
            /**
             * @param {?} width
             * @param {?} height
             * @param {?} position
             * @param {?} panelType
             * @param {?} title
             * @param {?} content
             * @param {?} initContent
             * @return {?}
             */
            function (width, height, position, panelType, title, content, initContent) {
                this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);
            };
        /**
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxDockingLayout('destroy');
            };
        /**
         * @param {?} layout
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.loadLayout = /**
         * @param {?} layout
         * @return {?}
         */
            function (layout) {
                this.host.jqxDockingLayout('loadLayout', layout);
            };
        /**
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxDockingLayout('refresh');
            };
        /**
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxDockingLayout('render');
            };
        /**
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.saveLayout = /**
         * @return {?}
         */
            function () {
                return this.host.jqxDockingLayout('saveLayout');
            };
        /**
         * @return {?}
         */
        jqxDockingLayoutComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('dock', function (eventData) { _this.onDock.emit(eventData); });
                this.host.on('floatGroupClosed', function (eventData) { _this.onFloatGroupClosed.emit(eventData); });
                this.host.on('float', function (eventData) { _this.onFloat.emit(eventData); });
                this.host.on('pin', function (eventData) { _this.onPin.emit(eventData); });
                this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
                this.host.on('unpin', function (eventData) { _this.onUnpin.emit(eventData); });
            };
        jqxDockingLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxDockingLayout',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxDockingLayoutComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxDockingLayoutComponent.propDecorators = {
            attrContextMenu: [{ type: core.Input, args: ['contextMenu',] }],
            attrLayout: [{ type: core.Input, args: ['layout',] }],
            attrMinGroupHeight: [{ type: core.Input, args: ['minGroupHeight',] }],
            attrMinGroupWidth: [{ type: core.Input, args: ['minGroupWidth',] }],
            attrResizable: [{ type: core.Input, args: ['resizable',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onDock: [{ type: core.Output }],
            onFloatGroupClosed: [{ type: core.Output }],
            onFloat: [{ type: core.Output }],
            onPin: [{ type: core.Output }],
            onResize: [{ type: core.Output }],
            onUnpin: [{ type: core.Output }]
        };
        return jqxDockingLayoutComponent;
    }()); //jqxDockingLayoutComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxDockingLayoutModule = /** @class */ (function () {
        function jqxDockingLayoutModule() {
        }
        jqxDockingLayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxDockingLayoutComponent],
                        exports: [jqxDockingLayoutComponent]
                    },] }
        ];
        return jqxDockingLayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxDockingLayoutComponent = jqxDockingLayoutComponent;
    exports.jqxDockingLayoutModule = jqxDockingLayoutModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

