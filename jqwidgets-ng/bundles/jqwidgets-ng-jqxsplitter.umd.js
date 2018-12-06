require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxsplitter');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxsplitter', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxsplitter = {}),global.ng.core));
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
    var jqxSplitterComponent = /** @class */ (function () {
        function jqxSplitterComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'orientation', 'panels', 'resizable', 'splitBarSize', 'showSplitBar', 'theme', 'width'];
            // jqxSplitterComponent events
            this.onCollapsed = new core.EventEmitter();
            this.onExpanded = new core.EventEmitter();
            this.onResize = new core.EventEmitter();
            this.onResizeStart = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.ngOnInit = /**
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
        jqxSplitterComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxSplitter(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxSplitter(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxSplitter(this.properties[i])) {
                                this.host.jqxSplitter(this.properties[i], this[attrName]);
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
        jqxSplitterComponent.prototype.arraysEqual = /**
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
        jqxSplitterComponent.prototype.manageAttributes = /**
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
        jqxSplitterComponent.prototype.moveClasses = /**
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
        jqxSplitterComponent.prototype.moveStyles = /**
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
        jqxSplitterComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSplitter', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxSplitterComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.__updateRect__ = /**
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
        jqxSplitterComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxSplitter('setOptions', options);
            };
        // jqxSplitterComponent properties
        // jqxSplitterComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.disabled =
            // jqxSplitterComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('disabled', arg);
                }
                else {
                    return this.host.jqxSplitter('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('height', arg);
                }
                else {
                    return this.host.jqxSplitter('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.orientation = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('orientation', arg);
                }
                else {
                    return this.host.jqxSplitter('orientation');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.panels = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('panels', arg);
                }
                else {
                    return this.host.jqxSplitter('panels');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.resizable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('resizable', arg);
                }
                else {
                    return this.host.jqxSplitter('resizable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.splitBarSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('splitBarSize', arg);
                }
                else {
                    return this.host.jqxSplitter('splitBarSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.showSplitBar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('showSplitBar', arg);
                }
                else {
                    return this.host.jqxSplitter('showSplitBar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('theme', arg);
                }
                else {
                    return this.host.jqxSplitter('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxSplitterComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxSplitter('width', arg);
                }
                else {
                    return this.host.jqxSplitter('width');
                }
            };
        // jqxSplitterComponent functions
        // jqxSplitterComponent functions
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.collapse =
            // jqxSplitterComponent functions
            /**
             * @return {?}
             */
            function () {
                this.host.jqxSplitter('collapse');
            };
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxSplitter('destroy');
            };
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.disable = /**
         * @return {?}
         */
            function () {
                this.host.jqxSplitter('disable');
            };
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.enable = /**
         * @return {?}
         */
            function () {
                this.host.jqxSplitter('enable');
            };
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.expand = /**
         * @return {?}
         */
            function () {
                this.host.jqxSplitter('expand');
            };
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxSplitter('render');
            };
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxSplitter('refresh');
            };
        /**
         * @return {?}
         */
        jqxSplitterComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('collapsed', function (eventData) { _this.onCollapsed.emit(eventData); });
                this.host.on('expanded', function (eventData) { _this.onExpanded.emit(eventData); });
                this.host.on('resize', function (eventData) { _this.onResize.emit(eventData); });
                this.host.on('resizeStart', function (eventData) { _this.onResizeStart.emit(eventData); });
            };
        jqxSplitterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxSplitter',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxSplitterComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxSplitterComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrOrientation: [{ type: core.Input, args: ['orientation',] }],
            attrPanels: [{ type: core.Input, args: ['panels',] }],
            attrResizable: [{ type: core.Input, args: ['resizable',] }],
            attrSplitBarSize: [{ type: core.Input, args: ['splitBarSize',] }],
            attrShowSplitBar: [{ type: core.Input, args: ['showSplitBar',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onCollapsed: [{ type: core.Output }],
            onExpanded: [{ type: core.Output }],
            onResize: [{ type: core.Output }],
            onResizeStart: [{ type: core.Output }]
        };
        return jqxSplitterComponent;
    }()); //jqxSplitterComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxSplitterModule = /** @class */ (function () {
        function jqxSplitterModule() {
        }
        jqxSplitterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxSplitterComponent],
                        exports: [jqxSplitterComponent]
                    },] }
        ];
        return jqxSplitterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxSplitterComponent = jqxSplitterComponent;
    exports.jqxSplitterModule = jqxSplitterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

