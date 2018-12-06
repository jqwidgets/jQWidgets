require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxdropdownlist');
require('../../jqwidgets/jqxcombobox');
require('../../jqwidgets/jqxinput');
require('../../jqwidgets/jqxtoolbar');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxtoolbar', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxtoolbar = {}),global.ng.core));
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
    var jqxToolBarComponent = /** @class */ (function () {
        function jqxToolBarComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['disabled', 'height', 'initTools', 'minimizeWidth', 'minWidth', 'maxWidth', 'rtl', 'tools', 'theme', 'width'];
            // jqxToolBarComponent events
            this.onClose = new core.EventEmitter();
            this.onOpen = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxToolBarComponent.prototype.ngOnInit = /**
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
        jqxToolBarComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxToolBar(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxToolBar(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxToolBar(this.properties[i])) {
                                this.host.jqxToolBar(this.properties[i], this[attrName]);
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
        jqxToolBarComponent.prototype.arraysEqual = /**
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
        jqxToolBarComponent.prototype.manageAttributes = /**
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
        jqxToolBarComponent.prototype.moveClasses = /**
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
        jqxToolBarComponent.prototype.moveStyles = /**
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
        jqxToolBarComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxToolBarComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxToolBarComponent.prototype.__updateRect__ = /**
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
        jqxToolBarComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxToolBar('setOptions', options);
            };
        // jqxToolBarComponent properties
        // jqxToolBarComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.disabled =
            // jqxToolBarComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('disabled', arg);
                }
                else {
                    return this.host.jqxToolBar('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('height', arg);
                }
                else {
                    return this.host.jqxToolBar('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.initTools = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('initTools', arg);
                }
                else {
                    return this.host.jqxToolBar('initTools');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.minimizeWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('minimizeWidth', arg);
                }
                else {
                    return this.host.jqxToolBar('minimizeWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.minWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('minWidth', arg);
                }
                else {
                    return this.host.jqxToolBar('minWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.maxWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('maxWidth', arg);
                }
                else {
                    return this.host.jqxToolBar('maxWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('rtl', arg);
                }
                else {
                    return this.host.jqxToolBar('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.tools = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('tools', arg);
                }
                else {
                    return this.host.jqxToolBar('tools');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('theme', arg);
                }
                else {
                    return this.host.jqxToolBar('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxToolBarComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxToolBar('width', arg);
                }
                else {
                    return this.host.jqxToolBar('width');
                }
            };
        // jqxToolBarComponent functions
        // jqxToolBarComponent functions
        /**
         * @param {?} type
         * @param {?} position
         * @param {?} separator
         * @param {?} menuToolIninitialization
         * @return {?}
         */
        jqxToolBarComponent.prototype.addTool =
            // jqxToolBarComponent functions
            /**
             * @param {?} type
             * @param {?} position
             * @param {?} separator
             * @param {?} menuToolIninitialization
             * @return {?}
             */
            function (type, position, separator, menuToolIninitialization) {
                this.host.jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
            };
        /**
         * @param {?} index
         * @param {?} disable
         * @return {?}
         */
        jqxToolBarComponent.prototype.disableTool = /**
         * @param {?} index
         * @param {?} disable
         * @return {?}
         */
            function (index, disable) {
                this.host.jqxToolBar('disableTool', index, disable);
            };
        /**
         * @return {?}
         */
        jqxToolBarComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxToolBar('destroy');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        jqxToolBarComponent.prototype.destroyTool = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.host.jqxToolBar('destroyTool', index);
            };
        /**
         * @return {?}
         */
        jqxToolBarComponent.prototype.getTools = /**
         * @return {?}
         */
            function () {
                return this.host.jqxToolBar('getTools');
            };
        /**
         * @return {?}
         */
        jqxToolBarComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                this.host.jqxToolBar('render');
            };
        /**
         * @return {?}
         */
        jqxToolBarComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxToolBar('refresh');
            };
        /**
         * @return {?}
         */
        jqxToolBarComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
                this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
            };
        jqxToolBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxToolbar',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxToolBarComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxToolBarComponent.propDecorators = {
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrInitTools: [{ type: core.Input, args: ['initTools',] }],
            attrMinimizeWidth: [{ type: core.Input, args: ['minimizeWidth',] }],
            attrMinWidth: [{ type: core.Input, args: ['minWidth',] }],
            attrMaxWidth: [{ type: core.Input, args: ['maxWidth',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrTools: [{ type: core.Input, args: ['tools',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onClose: [{ type: core.Output }],
            onOpen: [{ type: core.Output }]
        };
        return jqxToolBarComponent;
    }()); //jqxToolBarComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxToolBarModule = /** @class */ (function () {
        function jqxToolBarModule() {
        }
        jqxToolBarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxToolBarComponent],
                        exports: [jqxToolBarComponent]
                    },] }
        ];
        return jqxToolBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxToolBarComponent = jqxToolBarComponent;
    exports.jqxToolBarModule = jqxToolBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

