require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxmenu');
require('../../jqwidgets/jqxwindow');
require('../../jqwidgets/jqxdragdrop');
require('../../jqwidgets/jqxcheckbox');
require('../../jqwidgets/jqxinput');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxdropdownlist');
require('../../jqwidgets/jqxpivot');
require('../../jqwidgets/jqxpivotgrid');
require('../../jqwidgets/jqxpivotdesigner');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxpivotgrid', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxpivotgrid = {}),global.ng.core));
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
    var jqxPivotGridComponent = /** @class */ (function () {
        function jqxPivotGridComponent(containerElement) {
            var _this = this;
            this.autoCreate = true;
            this.properties = ['source', 'localization', 'scrollBarsEnabled', 'selectionEnabled', 'multipleSelectionEnabled', 'treeStyleRows', 'autoResize', 'itemsRenderer', 'cellsRenderer'];
            // jqxPivotGridComponent events
            this.onPivotitemexpanding = new core.EventEmitter();
            this.onPivotitemexpanded = new core.EventEmitter();
            this.onPivotitemcollapsing = new core.EventEmitter();
            this.onPivotitemcollapsed = new core.EventEmitter();
            this.onSortchanging = new core.EventEmitter();
            this.onSortchanged = new core.EventEmitter();
            this.onSortremoving = new core.EventEmitter();
            this.onSortremoved = new core.EventEmitter();
            this.onPivotitemselectionchanged = new core.EventEmitter();
            this.onPivotcellmousedown = new core.EventEmitter();
            this.onPivotcellmouseup = new core.EventEmitter();
            this.onPivotcellclick = new core.EventEmitter();
            this.onPivotcelldblclick = new core.EventEmitter();
            this.onPivotitemmousedown = new core.EventEmitter();
            this.onPivotitemmouseup = new core.EventEmitter();
            this.onPivotitemclick = new core.EventEmitter();
            this.onPivotitemdblclick = new core.EventEmitter();
            this.elementRef = containerElement;
            JQXLite(window).resize(function () {
                _this.__updateRect__();
            });
        }
        /**
         * @return {?}
         */
        jqxPivotGridComponent.prototype.ngOnInit = /**
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
        jqxPivotGridComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxPivotGrid(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxPivotGrid(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxPivotGrid(this.properties[i])) {
                                this.host.jqxPivotGrid(this.properties[i], this[attrName]);
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
        jqxPivotGridComponent.prototype.arraysEqual = /**
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
        jqxPivotGridComponent.prototype.manageAttributes = /**
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
        jqxPivotGridComponent.prototype.moveClasses = /**
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
        jqxPivotGridComponent.prototype.moveStyles = /**
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
        jqxPivotGridComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPivotGrid', options);
                this.__updateRect__();
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxPivotGridComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxPivotGridComponent.prototype.__updateRect__ = /**
         * @return {?}
         */
            function () {
                if (this.host)
                    this.host.css({ width: this.attrWidth, height: this.attrHeight });
                this.refresh();
            };
        /**
         * @param {?} options
         * @return {?}
         */
        jqxPivotGridComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxPivotGrid('setOptions', options);
            };
        // jqxPivotGridComponent properties
        // jqxPivotGridComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.source =
            // jqxPivotGridComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('source', arg);
                }
                else {
                    return this.host.jqxPivotGrid('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.localization = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('localization', arg);
                }
                else {
                    return this.host.jqxPivotGrid('localization');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.scrollBarsEnabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('scrollBarsEnabled', arg);
                }
                else {
                    return this.host.jqxPivotGrid('scrollBarsEnabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.selectionEnabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('selectionEnabled', arg);
                }
                else {
                    return this.host.jqxPivotGrid('selectionEnabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.multipleSelectionEnabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('multipleSelectionEnabled', arg);
                }
                else {
                    return this.host.jqxPivotGrid('multipleSelectionEnabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.treeStyleRows = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('treeStyleRows', arg);
                }
                else {
                    return this.host.jqxPivotGrid('treeStyleRows');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.autoResize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('autoResize', arg);
                }
                else {
                    return this.host.jqxPivotGrid('autoResize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.itemsRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('itemsRenderer', arg);
                }
                else {
                    return this.host.jqxPivotGrid('itemsRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxPivotGridComponent.prototype.cellsRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (arg !== undefined) {
                    this.host.jqxPivotGrid('cellsRenderer', arg);
                }
                else {
                    return this.host.jqxPivotGrid('cellsRenderer');
                }
            };
        // jqxPivotGridComponent functions
        // jqxPivotGridComponent functions
        /**
         * @return {?}
         */
        jqxPivotGridComponent.prototype.getInstance =
            // jqxPivotGridComponent functions
            /**
             * @return {?}
             */
            function () {
                return this.host.jqxPivotGrid('getInstance');
            };
        /**
         * @return {?}
         */
        jqxPivotGridComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.host.jqxPivotGrid('refresh');
            };
        /**
         * @return {?}
         */
        jqxPivotGridComponent.prototype.getPivotRows = /**
         * @return {?}
         */
            function () {
                return this.host.jqxPivotGrid('getPivotRows');
            };
        /**
         * @return {?}
         */
        jqxPivotGridComponent.prototype.getPivotColumns = /**
         * @return {?}
         */
            function () {
                return this.host.jqxPivotGrid('getPivotColumns');
            };
        /**
         * @return {?}
         */
        jqxPivotGridComponent.prototype.getPivotCells = /**
         * @return {?}
         */
            function () {
                return this.host.jqxPivotGrid('getPivotCells');
            };
        /**
         * @return {?}
         */
        jqxPivotGridComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('pivotitemexpanding', function (eventData) { _this.onPivotitemexpanding.emit(eventData); });
                this.host.on('pivotitemexpanded', function (eventData) { _this.onPivotitemexpanded.emit(eventData); });
                this.host.on('pivotitemcollapsing', function (eventData) { _this.onPivotitemcollapsing.emit(eventData); });
                this.host.on('pivotitemcollapsed', function (eventData) { _this.onPivotitemcollapsed.emit(eventData); });
                this.host.on('sortchanging', function (eventData) { _this.onSortchanging.emit(eventData); });
                this.host.on('sortchanged', function (eventData) { _this.onSortchanged.emit(eventData); });
                this.host.on('sortremoving', function (eventData) { _this.onSortremoving.emit(eventData); });
                this.host.on('sortremoved', function (eventData) { _this.onSortremoved.emit(eventData); });
                this.host.on('pivotitemselectionchanged', function (eventData) { _this.onPivotitemselectionchanged.emit(eventData); });
                this.host.on('pivotcellmousedown', function (eventData) { _this.onPivotcellmousedown.emit(eventData); });
                this.host.on('pivotcellmouseup', function (eventData) { _this.onPivotcellmouseup.emit(eventData); });
                this.host.on('pivotcellclick', function (eventData) { _this.onPivotcellclick.emit(eventData); });
                this.host.on('pivotcelldblclick', function (eventData) { _this.onPivotcelldblclick.emit(eventData); });
                this.host.on('pivotitemmousedown', function (eventData) { _this.onPivotitemmousedown.emit(eventData); });
                this.host.on('pivotitemmouseup', function (eventData) { _this.onPivotitemmouseup.emit(eventData); });
                this.host.on('pivotitemclick', function (eventData) { _this.onPivotitemclick.emit(eventData); });
                this.host.on('pivotitemdblclick', function (eventData) { _this.onPivotitemdblclick.emit(eventData); });
            };
        jqxPivotGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxPivotGrid',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxPivotGridComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxPivotGridComponent.propDecorators = {
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrLocalization: [{ type: core.Input, args: ['localization',] }],
            attrScrollBarsEnabled: [{ type: core.Input, args: ['scrollBarsEnabled',] }],
            attrSelectionEnabled: [{ type: core.Input, args: ['selectionEnabled',] }],
            attrMultipleSelectionEnabled: [{ type: core.Input, args: ['multipleSelectionEnabled',] }],
            attrTreeStyleRows: [{ type: core.Input, args: ['treeStyleRows',] }],
            attrAutoResize: [{ type: core.Input, args: ['autoResize',] }],
            attrItemsRenderer: [{ type: core.Input, args: ['itemsRenderer',] }],
            attrCellsRenderer: [{ type: core.Input, args: ['cellsRenderer',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onPivotitemexpanding: [{ type: core.Output }],
            onPivotitemexpanded: [{ type: core.Output }],
            onPivotitemcollapsing: [{ type: core.Output }],
            onPivotitemcollapsed: [{ type: core.Output }],
            onSortchanging: [{ type: core.Output }],
            onSortchanged: [{ type: core.Output }],
            onSortremoving: [{ type: core.Output }],
            onSortremoved: [{ type: core.Output }],
            onPivotitemselectionchanged: [{ type: core.Output }],
            onPivotcellmousedown: [{ type: core.Output }],
            onPivotcellmouseup: [{ type: core.Output }],
            onPivotcellclick: [{ type: core.Output }],
            onPivotcelldblclick: [{ type: core.Output }],
            onPivotitemmousedown: [{ type: core.Output }],
            onPivotitemmouseup: [{ type: core.Output }],
            onPivotitemclick: [{ type: core.Output }],
            onPivotitemdblclick: [{ type: core.Output }]
        };
        return jqxPivotGridComponent;
    }()); //jqxPivotGridComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxPivotGridModule = /** @class */ (function () {
        function jqxPivotGridModule() {
        }
        jqxPivotGridModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxPivotGridComponent],
                        exports: [jqxPivotGridComponent]
                    },] }
        ];
        return jqxPivotGridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxPivotGridComponent = jqxPivotGridComponent;
    exports.jqxPivotGridModule = jqxPivotGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

