require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxsortable');
require('../../jqwidgets/jqxsplitter');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxkanban');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxkanban', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxkanban = {}),global.ng.core));
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
    var jqxKanbanComponent = /** @class */ (function () {
        function jqxKanbanComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['columnRenderer', 'columns', 'connectWith', 'headerHeight', 'headerWidth', 'height', 'itemRenderer', 'ready', 'rtl', 'source', 'resources', 'template', 'templateContent', 'theme', 'width'];
            // jqxKanbanComponent events
            this.onColumnAttrClicked = new core.EventEmitter();
            this.onColumnCollapsed = new core.EventEmitter();
            this.onColumnExpanded = new core.EventEmitter();
            this.onItemAttrClicked = new core.EventEmitter();
            this.onItemMoved = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxKanbanComponent.prototype.ngOnInit = /**
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
        jqxKanbanComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxKanban(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxKanban(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxKanban(this.properties[i])) {
                                this.host.jqxKanban(this.properties[i], this[attrName]);
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
        jqxKanbanComponent.prototype.arraysEqual = /**
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
        jqxKanbanComponent.prototype.manageAttributes = /**
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
        jqxKanbanComponent.prototype.moveClasses = /**
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
        jqxKanbanComponent.prototype.moveStyles = /**
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
        jqxKanbanComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxKanbanComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxKanbanComponent.prototype.__updateRect__ = /**
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
        jqxKanbanComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxKanban('setOptions', options);
            };
        // jqxKanbanComponent properties
        // jqxKanbanComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.columnRenderer =
            // jqxKanbanComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('columnRenderer', arg);
                }
                else {
                    return this.host.jqxKanban('columnRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.columns = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('columns', arg);
                }
                else {
                    return this.host.jqxKanban('columns');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.connectWith = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('connectWith', arg);
                }
                else {
                    return this.host.jqxKanban('connectWith');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.headerHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('headerHeight', arg);
                }
                else {
                    return this.host.jqxKanban('headerHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.headerWidth = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('headerWidth', arg);
                }
                else {
                    return this.host.jqxKanban('headerWidth');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('height', arg);
                }
                else {
                    return this.host.jqxKanban('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.itemRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('itemRenderer', arg);
                }
                else {
                    return this.host.jqxKanban('itemRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.ready = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('ready', arg);
                }
                else {
                    return this.host.jqxKanban('ready');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('rtl', arg);
                }
                else {
                    return this.host.jqxKanban('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('source', arg);
                }
                else {
                    return this.host.jqxKanban('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.resources = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('resources', arg);
                }
                else {
                    return this.host.jqxKanban('resources');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.template = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('template', arg);
                }
                else {
                    return this.host.jqxKanban('template');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.templateContent = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('templateContent', arg);
                }
                else {
                    return this.host.jqxKanban('templateContent');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('theme', arg);
                }
                else {
                    return this.host.jqxKanban('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxKanbanComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxKanban('width', arg);
                }
                else {
                    return this.host.jqxKanban('width');
                }
            };
        // jqxKanbanComponent functions
        // jqxKanbanComponent functions
        /**
         * @param {?} newItem
         * @return {?}
         */
        jqxKanbanComponent.prototype.addItem =
            // jqxKanbanComponent functions
            /**
             * @param {?} newItem
             * @return {?}
             */
            function (newItem) {
                this.host.jqxKanban('addItem', newItem);
            };
        /**
         * @return {?}
         */
        jqxKanbanComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.host.jqxKanban('destroy');
            };
        /**
         * @param {?} dataField
         * @return {?}
         */
        jqxKanbanComponent.prototype.getColumn = /**
         * @param {?} dataField
         * @return {?}
         */
            function (dataField) {
                return this.host.jqxKanban('getColumn', dataField);
            };
        /**
         * @param {?} dataField
         * @return {?}
         */
        jqxKanbanComponent.prototype.getColumnItems = /**
         * @param {?} dataField
         * @return {?}
         */
            function (dataField) {
                return this.host.jqxKanban('getColumnItems', dataField);
            };
        /**
         * @return {?}
         */
        jqxKanbanComponent.prototype.getItems = /**
         * @return {?}
         */
            function () {
                return this.host.jqxKanban('getItems');
            };
        /**
         * @param {?} itemId
         * @return {?}
         */
        jqxKanbanComponent.prototype.removeItem = /**
         * @param {?} itemId
         * @return {?}
         */
            function (itemId) {
                this.host.jqxKanban('removeItem', itemId);
            };
        /**
         * @param {?} itemId
         * @param {?} newContent
         * @return {?}
         */
        jqxKanbanComponent.prototype.updateItem = /**
         * @param {?} itemId
         * @param {?} newContent
         * @return {?}
         */
            function (itemId, newContent) {
                this.host.jqxKanban('updateItem', itemId, newContent);
            };
        /**
         * @return {?}
         */
        jqxKanbanComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('columnAttrClicked', function (eventData) { _this.onColumnAttrClicked.emit(eventData); });
                this.host.on('columnCollapsed', function (eventData) { _this.onColumnCollapsed.emit(eventData); });
                this.host.on('columnExpanded', function (eventData) { _this.onColumnExpanded.emit(eventData); });
                this.host.on('itemAttrClicked', function (eventData) { _this.onItemAttrClicked.emit(eventData); });
                this.host.on('itemMoved', function (eventData) { _this.onItemMoved.emit(eventData); });
            };
        jqxKanbanComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxKanban',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxKanbanComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxKanbanComponent.propDecorators = {
            attrColumnRenderer: [{ type: core.Input, args: ['columnRenderer',] }],
            attrColumns: [{ type: core.Input, args: ['columns',] }],
            attrConnectWith: [{ type: core.Input, args: ['connectWith',] }],
            attrHeaderHeight: [{ type: core.Input, args: ['headerHeight',] }],
            attrHeaderWidth: [{ type: core.Input, args: ['headerWidth',] }],
            attrItemRenderer: [{ type: core.Input, args: ['itemRenderer',] }],
            attrReady: [{ type: core.Input, args: ['ready',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrResources: [{ type: core.Input, args: ['resources',] }],
            attrTemplate: [{ type: core.Input, args: ['template',] }],
            attrTemplateContent: [{ type: core.Input, args: ['templateContent',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onColumnAttrClicked: [{ type: core.Output }],
            onColumnCollapsed: [{ type: core.Output }],
            onColumnExpanded: [{ type: core.Output }],
            onItemAttrClicked: [{ type: core.Output }],
            onItemMoved: [{ type: core.Output }]
        };
        return jqxKanbanComponent;
    }()); //jqxKanbanComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxKanbanModule = /** @class */ (function () {
        function jqxKanbanModule() {
        }
        jqxKanbanModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxKanbanComponent],
                        exports: [jqxKanbanComponent]
                    },] }
        ];
        return jqxKanbanModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxKanbanComponent = jqxKanbanComponent;
    exports.jqxKanbanModule = jqxKanbanModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

