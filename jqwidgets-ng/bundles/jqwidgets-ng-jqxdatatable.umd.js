require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxdata');
require('../../jqwidgets/jqxdata.export');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxcheckbox');
require('../../jqwidgets/jqxtooltip');
require('../../jqwidgets/jqxscrollbar');
require('../../jqwidgets/jqxlistbox');
require('../../jqwidgets/jqxcombobox');
require('../../jqwidgets/jqxnumberinput');
require('../../jqwidgets/jqxdropdownlist');
require('../../jqwidgets/jqxdatatable');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxdatatable', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxdatatable = {}),global.ng.core));
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
    var jqxDataTableComponent = /** @class */ (function () {
        function jqxDataTableComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'groups', 'groupsRenderer', 'height', 'initRowDetails', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showToolbar', 'showStatusbar', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'serverProcessing', 'showHeader', 'theme', 'toolbarHeight', 'width'];
            // jqxDataTableComponent events
            this.onBindingComplete = new core.EventEmitter();
            this.onCellBeginEdit = new core.EventEmitter();
            this.onCellEndEdit = new core.EventEmitter();
            this.onCellValueChanged = new core.EventEmitter();
            this.onColumnResized = new core.EventEmitter();
            this.onColumnReordered = new core.EventEmitter();
            this.onSort = new core.EventEmitter();
            this.onFilter = new core.EventEmitter();
            this.onPageChanged = new core.EventEmitter();
            this.onPageSizeChanged = new core.EventEmitter();
            this.onRowClick = new core.EventEmitter();
            this.onRowDoubleClick = new core.EventEmitter();
            this.onRowSelect = new core.EventEmitter();
            this.onRowUnselect = new core.EventEmitter();
            this.onRowBeginEdit = new core.EventEmitter();
            this.onRowEndEdit = new core.EventEmitter();
            this.onRowExpand = new core.EventEmitter();
            this.onRowCollapse = new core.EventEmitter();
            this.elementRef = containerElement;
        }
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var children = JQXLite(this.elementRef.nativeElement.children).find('tr');
                /** @type {?} */
                var html = '';
                /** @type {?} */
                var options = {};
                if (children.length > 0) {
                    this.container = document.createElement('div');
                    html = this.elementRef.nativeElement.innerHTML;
                    this.container.appendChild(this.elementRef.nativeElement.firstChild);
                    this.elementRef.nativeElement.innerHTML = html;
                    this.content = html;
                    /** @type {?} */
                    var result = JQXLite.jqx.parseSourceTag(this.container);
                    if (this['attrColumns'] !== undefined) {
                        options['source'] = result.source;
                    }
                    else {
                        options['source'] = result.source;
                        options['columns'] = result.columns;
                    }
                }
                if (this.autoCreate) {
                    this.createComponent(options);
                }
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (this.container) {
                    if (this.content !== this.container.innerHTML) {
                        this.content = this.container.innerHTML;
                        /** @type {?} */
                        var result = JQXLite.jqx.parseSourceTag(this.container);
                        /** @type {?} */
                        var columns = this.host.jqxGrid('columns');
                        if (columns.length === 0) {
                            this.host.jqxGrid({ source: result.source, columns: result.columns });
                        }
                        else {
                            this.host.jqxGrid({ source: result.source });
                        }
                    }
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        jqxDataTableComponent.prototype.ngOnChanges = /**
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
                                    areEqual = this.arraysEqual(this[attrName], this.host.jqxDataTable(this.properties[i]));
                                }
                                if (areEqual) {
                                    return false;
                                }
                                this.host.jqxDataTable(this.properties[i], this[attrName]);
                                continue;
                            }
                            if (this[attrName] !== this.host.jqxDataTable(this.properties[i])) {
                                this.host.jqxDataTable(this.properties[i], this[attrName]);
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
        jqxDataTableComponent.prototype.arraysEqual = /**
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
        jqxDataTableComponent.prototype.manageAttributes = /**
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
        jqxDataTableComponent.prototype.moveClasses = /**
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
        jqxDataTableComponent.prototype.moveStyles = /**
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
        jqxDataTableComponent.prototype.createComponent = /**
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
                this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataTable', options);
            };
        /**
         * @param {?=} options
         * @return {?}
         */
        jqxDataTableComponent.prototype.createWidget = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                this.createComponent(options);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.__updateRect__ = /**
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
        jqxDataTableComponent.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.host.jqxDataTable('setOptions', options);
            };
        // jqxDataTableComponent properties
        // jqxDataTableComponent properties
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.altRows =
            // jqxDataTableComponent properties
            /**
             * @param {?=} arg
             * @return {?}
             */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('altRows', arg);
                }
                else {
                    return this.host.jqxDataTable('altRows');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.autoRowHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('autoRowHeight', arg);
                }
                else {
                    return this.host.jqxDataTable('autoRowHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.aggregatesHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('aggregatesHeight', arg);
                }
                else {
                    return this.host.jqxDataTable('aggregatesHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.autoShowLoadElement = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('autoShowLoadElement', arg);
                }
                else {
                    return this.host.jqxDataTable('autoShowLoadElement');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.columnsHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('columnsHeight', arg);
                }
                else {
                    return this.host.jqxDataTable('columnsHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.columns = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('columns', arg);
                }
                else {
                    return this.host.jqxDataTable('columns');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.columnGroups = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('columnGroups', arg);
                }
                else {
                    return this.host.jqxDataTable('columnGroups');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.columnsResize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('columnsResize', arg);
                }
                else {
                    return this.host.jqxDataTable('columnsResize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.columnsReorder = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('columnsReorder', arg);
                }
                else {
                    return this.host.jqxDataTable('columnsReorder');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.disabled = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('disabled', arg);
                }
                else {
                    return this.host.jqxDataTable('disabled');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.editable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('editable', arg);
                }
                else {
                    return this.host.jqxDataTable('editable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.editSettings = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('editSettings', arg);
                }
                else {
                    return this.host.jqxDataTable('editSettings');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.exportSettings = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('exportSettings', arg);
                }
                else {
                    return this.host.jqxDataTable('exportSettings');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.enableHover = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('enableHover', arg);
                }
                else {
                    return this.host.jqxDataTable('enableHover');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.enableBrowserSelection = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('enableBrowserSelection', arg);
                }
                else {
                    return this.host.jqxDataTable('enableBrowserSelection');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.filterable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('filterable', arg);
                }
                else {
                    return this.host.jqxDataTable('filterable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.filterHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('filterHeight', arg);
                }
                else {
                    return this.host.jqxDataTable('filterHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.filterMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('filterMode', arg);
                }
                else {
                    return this.host.jqxDataTable('filterMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.groups = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('groups', arg);
                }
                else {
                    return this.host.jqxDataTable('groups');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.groupsRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('groupsRenderer', arg);
                }
                else {
                    return this.host.jqxDataTable('groupsRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.height = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('height', arg);
                }
                else {
                    return this.host.jqxDataTable('height');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.initRowDetails = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('initRowDetails', arg);
                }
                else {
                    return this.host.jqxDataTable('initRowDetails');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.incrementalSearch = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('incrementalSearch', arg);
                }
                else {
                    return this.host.jqxDataTable('incrementalSearch');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.localization = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('localization', arg);
                }
                else {
                    return this.host.jqxDataTable('localization');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.pagerHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('pagerHeight', arg);
                }
                else {
                    return this.host.jqxDataTable('pagerHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.pageSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('pageSize', arg);
                }
                else {
                    return this.host.jqxDataTable('pageSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.pageSizeOptions = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('pageSizeOptions', arg);
                }
                else {
                    return this.host.jqxDataTable('pageSizeOptions');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.pageable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('pageable', arg);
                }
                else {
                    return this.host.jqxDataTable('pageable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.pagerPosition = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('pagerPosition', arg);
                }
                else {
                    return this.host.jqxDataTable('pagerPosition');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.pagerMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('pagerMode', arg);
                }
                else {
                    return this.host.jqxDataTable('pagerMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.pagerButtonsCount = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('pagerButtonsCount', arg);
                }
                else {
                    return this.host.jqxDataTable('pagerButtonsCount');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.pagerRenderer = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('pagerRenderer', arg);
                }
                else {
                    return this.host.jqxDataTable('pagerRenderer');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.ready = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('ready', arg);
                }
                else {
                    return this.host.jqxDataTable('ready');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.rowDetails = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('rowDetails', arg);
                }
                else {
                    return this.host.jqxDataTable('rowDetails');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.renderToolbar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('renderToolbar', arg);
                }
                else {
                    return this.host.jqxDataTable('renderToolbar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.renderStatusBar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('renderStatusBar', arg);
                }
                else {
                    return this.host.jqxDataTable('renderStatusBar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.rendering = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('rendering', arg);
                }
                else {
                    return this.host.jqxDataTable('rendering');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.rendered = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('rendered', arg);
                }
                else {
                    return this.host.jqxDataTable('rendered');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.rtl = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('rtl', arg);
                }
                else {
                    return this.host.jqxDataTable('rtl');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.source = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('source', arg);
                }
                else {
                    return this.host.jqxDataTable('source');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.sortable = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('sortable', arg);
                }
                else {
                    return this.host.jqxDataTable('sortable');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.showAggregates = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('showAggregates', arg);
                }
                else {
                    return this.host.jqxDataTable('showAggregates');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.showToolbar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('showToolbar', arg);
                }
                else {
                    return this.host.jqxDataTable('showToolbar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.showStatusbar = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('showStatusbar', arg);
                }
                else {
                    return this.host.jqxDataTable('showStatusbar');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.statusBarHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('statusBarHeight', arg);
                }
                else {
                    return this.host.jqxDataTable('statusBarHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.scrollBarSize = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('scrollBarSize', arg);
                }
                else {
                    return this.host.jqxDataTable('scrollBarSize');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.selectionMode = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('selectionMode', arg);
                }
                else {
                    return this.host.jqxDataTable('selectionMode');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.serverProcessing = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('serverProcessing', arg);
                }
                else {
                    return this.host.jqxDataTable('serverProcessing');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.showHeader = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('showHeader', arg);
                }
                else {
                    return this.host.jqxDataTable('showHeader');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.theme = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('theme', arg);
                }
                else {
                    return this.host.jqxDataTable('theme');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.toolbarHeight = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('toolbarHeight', arg);
                }
                else {
                    return this.host.jqxDataTable('toolbarHeight');
                }
            };
        /**
         * @param {?=} arg
         * @return {?}
         */
        jqxDataTableComponent.prototype.width = /**
         * @param {?=} arg
         * @return {?}
         */
            function (arg) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                if (arg !== undefined) {
                    this.host.jqxDataTable('width', arg);
                }
                else {
                    return this.host.jqxDataTable('width');
                }
            };
        // jqxDataTableComponent functions
        // jqxDataTableComponent functions
        /**
         * @param {?} rowIndex
         * @param {?} rowData
         * @param {?} rowPosition
         * @return {?}
         */
        jqxDataTableComponent.prototype.addRow =
            // jqxDataTableComponent functions
            /**
             * @param {?} rowIndex
             * @param {?} rowData
             * @param {?} rowPosition
             * @return {?}
             */
            function (rowIndex, rowData, rowPosition) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('addRow', rowIndex, rowData, rowPosition);
            };
        /**
         * @param {?} dataField
         * @param {?} filerGroup
         * @return {?}
         */
        jqxDataTableComponent.prototype.addFilter = /**
         * @param {?} dataField
         * @param {?} filerGroup
         * @return {?}
         */
            function (dataField, filerGroup) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('addFilter', dataField, filerGroup);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.applyFilters = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('applyFilters');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.beginUpdate = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('beginUpdate');
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.beginRowEdit = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('beginRowEdit', rowIndex);
            };
        /**
         * @param {?} rowIndex
         * @param {?} dataField
         * @return {?}
         */
        jqxDataTableComponent.prototype.beginCellEdit = /**
         * @param {?} rowIndex
         * @param {?} dataField
         * @return {?}
         */
            function (rowIndex, dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('beginCellEdit', rowIndex, dataField);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.clearSelection = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('clearSelection');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.clearFilters = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('clearFilters');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.clear = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('clear');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.destroy = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('destroy');
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.deleteRow = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('deleteRow', rowIndex);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.endUpdate = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('endUpdate');
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.ensureRowVisible = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('ensureRowVisible', rowIndex);
            };
        /**
         * @param {?} rowIndex
         * @param {?} cancelChanges
         * @return {?}
         */
        jqxDataTableComponent.prototype.endRowEdit = /**
         * @param {?} rowIndex
         * @param {?} cancelChanges
         * @return {?}
         */
            function (rowIndex, cancelChanges) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('endRowEdit', rowIndex, cancelChanges);
            };
        /**
         * @param {?} rowIndex
         * @param {?} dataField
         * @return {?}
         */
        jqxDataTableComponent.prototype.endCellEdit = /**
         * @param {?} rowIndex
         * @param {?} dataField
         * @return {?}
         */
            function (rowIndex, dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('endCellEdit', rowIndex, dataField);
            };
        /**
         * @param {?} exportDataType
         * @return {?}
         */
        jqxDataTableComponent.prototype.exportData = /**
         * @param {?} exportDataType
         * @return {?}
         */
            function (exportDataType) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDataTable('exportData', exportDataType);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('focus');
            };
        /**
         * @param {?} dataField
         * @param {?} propertyName
         * @return {?}
         */
        jqxDataTableComponent.prototype.getColumnProperty = /**
         * @param {?} dataField
         * @param {?} propertyName
         * @return {?}
         */
            function (dataField, propertyName) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDataTable('getColumnProperty', dataField, propertyName);
            };
        /**
         * @param {?} pageIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.goToPage = /**
         * @param {?} pageIndex
         * @return {?}
         */
            function (pageIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('goToPage', pageIndex);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.goToPrevPage = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('goToPrevPage');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.goToNextPage = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('goToNextPage');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.getSelection = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDataTable('getSelection');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.getRows = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDataTable('getRows');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.getView = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDataTable('getView');
            };
        /**
         * @param {?} rowIndex
         * @param {?} dataField
         * @return {?}
         */
        jqxDataTableComponent.prototype.getCellValue = /**
         * @param {?} rowIndex
         * @param {?} dataField
         * @return {?}
         */
            function (rowIndex, dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDataTable('getCellValue', rowIndex, dataField);
            };
        /**
         * @param {?} dataField
         * @return {?}
         */
        jqxDataTableComponent.prototype.hideColumn = /**
         * @param {?} dataField
         * @return {?}
         */
            function (dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('hideColumn', dataField);
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.hideDetails = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('hideDetails', rowIndex);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.isBindingCompleted = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDataTable('isBindingCompleted');
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.lockRow = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('lockRow', rowIndex);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('refresh');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.render = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('render');
            };
        /**
         * @param {?} dataField
         * @return {?}
         */
        jqxDataTableComponent.prototype.removeFilter = /**
         * @param {?} dataField
         * @return {?}
         */
            function (dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('removeFilter', dataField);
            };
        /**
         * @param {?} top
         * @param {?} left
         * @return {?}
         */
        jqxDataTableComponent.prototype.scrollOffset = /**
         * @param {?} top
         * @param {?} left
         * @return {?}
         */
            function (top, left) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('scrollOffset', top, left);
            };
        /**
         * @param {?} dataField
         * @param {?} propertyName
         * @param {?} propertyValue
         * @return {?}
         */
        jqxDataTableComponent.prototype.setColumnProperty = /**
         * @param {?} dataField
         * @param {?} propertyName
         * @param {?} propertyValue
         * @return {?}
         */
            function (dataField, propertyName, propertyValue) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);
            };
        /**
         * @param {?} dataField
         * @return {?}
         */
        jqxDataTableComponent.prototype.showColumn = /**
         * @param {?} dataField
         * @return {?}
         */
            function (dataField) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('showColumn', dataField);
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.selectRow = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('selectRow', rowIndex);
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.showDetails = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('showDetails', rowIndex);
            };
        /**
         * @param {?} rowIndex
         * @param {?} dataField
         * @param {?} value
         * @return {?}
         */
        jqxDataTableComponent.prototype.setCellValue = /**
         * @param {?} rowIndex
         * @param {?} dataField
         * @param {?} value
         * @return {?}
         */
            function (rowIndex, dataField, value) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('setCellValue', rowIndex, dataField, value);
            };
        /**
         * @param {?} dataField
         * @param {?} sortOrder
         * @return {?}
         */
        jqxDataTableComponent.prototype.sortBy = /**
         * @param {?} dataField
         * @param {?} sortOrder
         * @return {?}
         */
            function (dataField, sortOrder) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('sortBy', dataField, sortOrder);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.updating = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                return this.host.jqxDataTable('updating');
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.updateBoundData = /**
         * @return {?}
         */
            function () {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('updateBoundData');
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.unselectRow = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('unselectRow', rowIndex);
            };
        /**
         * @param {?} rowIndex
         * @param {?} rowData
         * @return {?}
         */
        jqxDataTableComponent.prototype.updateRow = /**
         * @param {?} rowIndex
         * @param {?} rowData
         * @return {?}
         */
            function (rowIndex, rowData) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('updateRow', rowIndex, rowData);
            };
        /**
         * @param {?} rowIndex
         * @return {?}
         */
        jqxDataTableComponent.prototype.unlockRow = /**
         * @param {?} rowIndex
         * @return {?}
         */
            function (rowIndex) {
                if (this.autoCreate && !this.host) {
                    this.createComponent();
                }
                this.host.jqxDataTable('unlockRow', rowIndex);
            };
        /**
         * @return {?}
         */
        jqxDataTableComponent.prototype.__wireEvents__ = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
                this.host.on('cellBeginEdit', function (eventData) { _this.onCellBeginEdit.emit(eventData); });
                this.host.on('cellEndEdit', function (eventData) { _this.onCellEndEdit.emit(eventData); });
                this.host.on('cellValueChanged', function (eventData) { _this.onCellValueChanged.emit(eventData); });
                this.host.on('columnResized', function (eventData) { _this.onColumnResized.emit(eventData); });
                this.host.on('columnReordered', function (eventData) { _this.onColumnReordered.emit(eventData); });
                this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
                this.host.on('filter', function (eventData) { _this.onFilter.emit(eventData); });
                this.host.on('pageChanged', function (eventData) { _this.onPageChanged.emit(eventData); });
                this.host.on('pageSizeChanged', function (eventData) { _this.onPageSizeChanged.emit(eventData); });
                this.host.on('rowClick', function (eventData) { _this.onRowClick.emit(eventData); });
                this.host.on('rowDoubleClick', function (eventData) { _this.onRowDoubleClick.emit(eventData); });
                this.host.on('rowSelect', function (eventData) { _this.onRowSelect.emit(eventData); });
                this.host.on('rowUnselect', function (eventData) { _this.onRowUnselect.emit(eventData); });
                this.host.on('rowBeginEdit', function (eventData) { _this.onRowBeginEdit.emit(eventData); });
                this.host.on('rowEndEdit', function (eventData) { _this.onRowEndEdit.emit(eventData); });
                this.host.on('rowExpand', function (eventData) { _this.onRowExpand.emit(eventData); });
                this.host.on('rowCollapse', function (eventData) { _this.onRowCollapse.emit(eventData); });
            };
        jqxDataTableComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jqxDataTable',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxDataTableComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxDataTableComponent.propDecorators = {
            attrAltRows: [{ type: core.Input, args: ['altRows',] }],
            attrAutoRowHeight: [{ type: core.Input, args: ['autoRowHeight',] }],
            attrAggregatesHeight: [{ type: core.Input, args: ['aggregatesHeight',] }],
            attrAutoShowLoadElement: [{ type: core.Input, args: ['autoShowLoadElement',] }],
            attrColumnsHeight: [{ type: core.Input, args: ['columnsHeight',] }],
            attrColumns: [{ type: core.Input, args: ['columns',] }],
            attrColumnGroups: [{ type: core.Input, args: ['columnGroups',] }],
            attrColumnsResize: [{ type: core.Input, args: ['columnsResize',] }],
            attrColumnsReorder: [{ type: core.Input, args: ['columnsReorder',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrEditable: [{ type: core.Input, args: ['editable',] }],
            attrEditSettings: [{ type: core.Input, args: ['editSettings',] }],
            attrExportSettings: [{ type: core.Input, args: ['exportSettings',] }],
            attrEnableHover: [{ type: core.Input, args: ['enableHover',] }],
            attrEnableBrowserSelection: [{ type: core.Input, args: ['enableBrowserSelection',] }],
            attrFilterable: [{ type: core.Input, args: ['filterable',] }],
            attrFilterHeight: [{ type: core.Input, args: ['filterHeight',] }],
            attrFilterMode: [{ type: core.Input, args: ['filterMode',] }],
            attrGroups: [{ type: core.Input, args: ['groups',] }],
            attrGroupsRenderer: [{ type: core.Input, args: ['groupsRenderer',] }],
            attrInitRowDetails: [{ type: core.Input, args: ['initRowDetails',] }],
            attrIncrementalSearch: [{ type: core.Input, args: ['incrementalSearch',] }],
            attrLocalization: [{ type: core.Input, args: ['localization',] }],
            attrPagerHeight: [{ type: core.Input, args: ['pagerHeight',] }],
            attrPageSize: [{ type: core.Input, args: ['pageSize',] }],
            attrPageSizeOptions: [{ type: core.Input, args: ['pageSizeOptions',] }],
            attrPageable: [{ type: core.Input, args: ['pageable',] }],
            attrPagerPosition: [{ type: core.Input, args: ['pagerPosition',] }],
            attrPagerMode: [{ type: core.Input, args: ['pagerMode',] }],
            attrPagerButtonsCount: [{ type: core.Input, args: ['pagerButtonsCount',] }],
            attrPagerRenderer: [{ type: core.Input, args: ['pagerRenderer',] }],
            attrReady: [{ type: core.Input, args: ['ready',] }],
            attrRowDetails: [{ type: core.Input, args: ['rowDetails',] }],
            attrRenderToolbar: [{ type: core.Input, args: ['renderToolbar',] }],
            attrRenderStatusBar: [{ type: core.Input, args: ['renderStatusBar',] }],
            attrRendering: [{ type: core.Input, args: ['rendering',] }],
            attrRendered: [{ type: core.Input, args: ['rendered',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrSource: [{ type: core.Input, args: ['source',] }],
            attrSortable: [{ type: core.Input, args: ['sortable',] }],
            attrShowAggregates: [{ type: core.Input, args: ['showAggregates',] }],
            attrShowToolbar: [{ type: core.Input, args: ['showToolbar',] }],
            attrShowStatusbar: [{ type: core.Input, args: ['showStatusbar',] }],
            attrStatusBarHeight: [{ type: core.Input, args: ['statusBarHeight',] }],
            attrScrollBarSize: [{ type: core.Input, args: ['scrollBarSize',] }],
            attrSelectionMode: [{ type: core.Input, args: ['selectionMode',] }],
            attrServerProcessing: [{ type: core.Input, args: ['serverProcessing',] }],
            attrShowHeader: [{ type: core.Input, args: ['showHeader',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrToolbarHeight: [{ type: core.Input, args: ['toolbarHeight',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onBindingComplete: [{ type: core.Output }],
            onCellBeginEdit: [{ type: core.Output }],
            onCellEndEdit: [{ type: core.Output }],
            onCellValueChanged: [{ type: core.Output }],
            onColumnResized: [{ type: core.Output }],
            onColumnReordered: [{ type: core.Output }],
            onSort: [{ type: core.Output }],
            onFilter: [{ type: core.Output }],
            onPageChanged: [{ type: core.Output }],
            onPageSizeChanged: [{ type: core.Output }],
            onRowClick: [{ type: core.Output }],
            onRowDoubleClick: [{ type: core.Output }],
            onRowSelect: [{ type: core.Output }],
            onRowUnselect: [{ type: core.Output }],
            onRowBeginEdit: [{ type: core.Output }],
            onRowEndEdit: [{ type: core.Output }],
            onRowExpand: [{ type: core.Output }],
            onRowCollapse: [{ type: core.Output }]
        };
        return jqxDataTableComponent;
    }()); //jqxDataTableComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxDataTableModule = /** @class */ (function () {
        function jqxDataTableModule() {
        }
        jqxDataTableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxDataTableComponent],
                        exports: [jqxDataTableComponent]
                    },] }
        ];
        return jqxDataTableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxDataTableComponent = jqxDataTableComponent;
    exports.jqxDataTableModule = jqxDataTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

