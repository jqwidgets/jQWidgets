require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxribbon');
require('../../jqwidgets/jqxmenu');
require('../../jqwidgets/jqxlayout');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxlayout', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxlayout = {}),global.ng.core));
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
    var jqxLayoutComponent = /** @class */ (function () {
        function jqxLayoutComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
            // jqxLayoutComponent events
            this.onPin = new core.EventEmitter();
            this.onResize = new core.EventEmitter();
            this.onUnpin = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxLayoutComponent.prototype.ngOnInit = /**
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
        jqxLayoutComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxLayout(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxLayout(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxLayout(this.properties[i])) {
                                this.host.jqxLayout(this.properties[i], this[attrName]);
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
        jqxLayoutComponent.prototype.arraysEqual = /**
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
        jqxLayoutComponent.prototype.manageAttributes = /**
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
        jqxLayoutComponent.prototype.moveClasses = /**
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
        jqxLayoutComponent.prototype.moveStyles = /**
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
        jqxLayoutComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLayout', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxLayoutComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxLayoutComponent.prototype.__updateRect__ = /**
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
        jqxLayoutComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxLayout('setOptions', options);
            };
        // jqxLayoutComponent properties
        // jqxLayoutComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.contextMenu =
            // jqxLayoutComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('contextMenu', arg);
                }
                else {
                    return this.host.jqxLayout('contextMenu');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('height', arg);
                }
                else {
                    return this.host.jqxLayout('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.layout = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('layout', arg);
                }
                else {
                    return this.host.jqxLayout('layout');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.minGroupHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('minGroupHeight', arg);
                }
                else {
                    return this.host.jqxLayout('minGroupHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.minGroupWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('minGroupWidth', arg);
                }
                else {
                    return this.host.jqxLayout('minGroupWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.resizable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('resizable', arg);
                }
                else {
                    return this.host.jqxLayout('resizable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('rtl', arg);
                }
                else {
                    return this.host.jqxLayout('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('theme', arg);
                }
                else {
                    return this.host.jqxLayout('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxLayoutComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxLayout('width', arg);
                }
                else {
                    return this.host.jqxLayout('width');
                }
            };
        // jqxLayoutComponent functions
        // jqxLayoutComponent functions
        /**
         * @return {?}
         */
        jqxLayoutComponent.prototype.destroy =
            // jqxLayoutComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxLayout('destroy');
            };
        /**
         * @param {?} Layout
         * @return {?}
         */
        jqxLayoutComponent.prototype.loadLayout = /**
         * @param {?} Layout
         * @return {?}
         */
            function (Layout) {
                this.host.jqxLayout('loadLayout', Layout);
            };
        /**
         * @return {?}
         */
        jqxLayoutComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxLayout('refresh');
            };
        /**
         * @return {?}
         */
        jqxLayoutComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxLayout('render');
            };
        /**
         * @return {?}
         */
        jqxLayoutComponent.prototype.saveLayout = /**
         * @return {?}
         */
            function () {
                return this.host.jqxLayout('saveLayout');
            };
        /**
         * @return {?}
         */
        jqxLayoutComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('pin', function (eventData) { _this.onPin.emit(eventData); });
                this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
                this.host.on('unpin', function (eventData) { _this.onUnpin.emit(eventData); });
            };
        jqxLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxLayout',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxLayoutComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxLayoutComponent.propDecorators = {
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
            onPin: [{ type: core.Output }],
            onResize: [{ type: core.Output }],
            onUnpin: [{ type: core.Output }]
        };
        return jqxLayoutComponent;
    }()); //jqxLayoutComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxLayoutModule = /** @class */ (function () {
        function jqxLayoutModule() {
        }
        jqxLayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxLayoutComponent],
                        exports: [jqxLayoutComponent]
                    },] }
        ];
        return jqxLayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxLayoutComponent = jqxLayoutComponent;
    exports.jqxLayoutModule = jqxLayoutModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

