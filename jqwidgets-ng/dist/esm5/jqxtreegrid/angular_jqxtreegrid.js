import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxcheckbox from '../../jqwidgets-scripts/jqwidgets/jqxcheckbox';
import * as jqxtooltip from '../../jqwidgets-scripts/jqwidgets/jqxtooltip';
import * as jqxscrollbar from '../../jqwidgets-scripts/jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets-scripts/jqwidgets/jqxlistbox';
import * as jqxcombobox from '../../jqwidgets-scripts/jqwidgets/jqxcombobox';
import * as jqxnumberinput from '../../jqwidgets-scripts/jqwidgets/jqxnumberinput';
import * as jqxdropdownlist from '../../jqwidgets-scripts/jqwidgets/jqxdropdownlist';
import * as jqxdatatable from '../../jqwidgets-scripts/jqwidgets/jqxdatatable';
import * as jqxtreegrid from '../../jqwidgets-scripts/jqwidgets/jqxtreegrid';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxTreeGridComponent = /** @class */ (function () {
    function jqxTreeGridComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'checkboxes', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'height', 'hierarchicalCheckboxes', 'icons', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pageSizeMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'rowDetailsRenderer', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showSubAggregates', 'showToolbar', 'showStatusbar', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'showHeader', 'theme', 'toolbarHeight', 'width', 'virtualModeCreateRecords', 'virtualModeRecordCreating'];
        // jqxTreeGridComponent events
        this.onBindingComplete = new EventEmitter();
        this.onCellBeginEdit = new EventEmitter();
        this.onCellEndEdit = new EventEmitter();
        this.onCellValueChanged = new EventEmitter();
        this.onColumnResized = new EventEmitter();
        this.onColumnReordered = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onPageChanged = new EventEmitter();
        this.onPageSizeChanged = new EventEmitter();
        this.onRowClick = new EventEmitter();
        this.onRowDoubleClick = new EventEmitter();
        this.onRowSelect = new EventEmitter();
        this.onRowUnselect = new EventEmitter();
        this.onRowBeginEdit = new EventEmitter();
        this.onRowEndEdit = new EventEmitter();
        this.onRowExpand = new EventEmitter();
        this.onRowCollapse = new EventEmitter();
        this.onRowCheck = new EventEmitter();
        this.onRowUncheck = new EventEmitter();
        this.onSort = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ;
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.ngAfterViewInit = /**
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
                ;
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
    ;
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.ngAfterViewChecked = /**
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
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxTreeGridComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeGrid(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTreeGrid(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTreeGrid(this.properties[i])) {
                        this.host.jqxTreeGrid(this.properties[i], this[attrName]);
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
    jqxTreeGridComponent.prototype.arraysEqual = /**
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
    jqxTreeGridComponent.prototype.manageAttributes = /**
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
    jqxTreeGridComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxTreeGridComponent.prototype.moveStyles = /**
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
    jqxTreeGridComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeGrid', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxTreeGridComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.__updateRect__ = /**
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
    jqxTreeGridComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxTreeGrid('setOptions', options);
    };
    // jqxTreeGridComponent properties
    // jqxTreeGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.altRows = 
    // jqxTreeGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('altRows', arg);
        }
        else {
            return this.host.jqxTreeGrid('altRows');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.autoRowHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('autoRowHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('autoRowHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.aggregatesHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('aggregatesHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('aggregatesHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.autoShowLoadElement = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('autoShowLoadElement', arg);
        }
        else {
            return this.host.jqxTreeGrid('autoShowLoadElement');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.checkboxes = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('checkboxes', arg);
        }
        else {
            return this.host.jqxTreeGrid('checkboxes');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.columnsHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.columns = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columns', arg);
        }
        else {
            return this.host.jqxTreeGrid('columns');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.columnGroups = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnGroups', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnGroups');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.columnsResize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsResize', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsResize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.columnsReorder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsReorder', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsReorder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('disabled', arg);
        }
        else {
            return this.host.jqxTreeGrid('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.editable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('editable', arg);
        }
        else {
            return this.host.jqxTreeGrid('editable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.editSettings = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('editSettings', arg);
        }
        else {
            return this.host.jqxTreeGrid('editSettings');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.exportSettings = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('exportSettings', arg);
        }
        else {
            return this.host.jqxTreeGrid('exportSettings');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.enableHover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('enableHover', arg);
        }
        else {
            return this.host.jqxTreeGrid('enableHover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.enableBrowserSelection = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('enableBrowserSelection', arg);
        }
        else {
            return this.host.jqxTreeGrid('enableBrowserSelection');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.filterable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterable', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.filterHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.filterMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('height', arg);
        }
        else {
            return this.host.jqxTreeGrid('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.hierarchicalCheckboxes = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('hierarchicalCheckboxes', arg);
        }
        else {
            return this.host.jqxTreeGrid('hierarchicalCheckboxes');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.icons = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('icons', arg);
        }
        else {
            return this.host.jqxTreeGrid('icons');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.incrementalSearch = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTreeGrid('incrementalSearch');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.localization = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('localization', arg);
        }
        else {
            return this.host.jqxTreeGrid('localization');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pagerHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pageSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSize', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pageSizeOptions = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSizeOptions', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSizeOptions');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pageable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageable', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pagerPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerPosition', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pagerMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pageSizeMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSizeMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSizeMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pagerButtonsCount = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerButtonsCount', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerButtonsCount');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.pagerRenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerRenderer', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerRenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.ready = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('ready', arg);
        }
        else {
            return this.host.jqxTreeGrid('ready');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.rowDetails = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rowDetails', arg);
        }
        else {
            return this.host.jqxTreeGrid('rowDetails');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.rowDetailsRenderer = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rowDetailsRenderer', arg);
        }
        else {
            return this.host.jqxTreeGrid('rowDetailsRenderer');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.renderToolbar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('renderToolbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('renderToolbar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.renderStatusBar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('renderStatusBar', arg);
        }
        else {
            return this.host.jqxTreeGrid('renderStatusBar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.rendering = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rendering', arg);
        }
        else {
            return this.host.jqxTreeGrid('rendering');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.rendered = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rendered', arg);
        }
        else {
            return this.host.jqxTreeGrid('rendered');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rtl', arg);
        }
        else {
            return this.host.jqxTreeGrid('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('source', arg);
        }
        else {
            return this.host.jqxTreeGrid('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.sortable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('sortable', arg);
        }
        else {
            return this.host.jqxTreeGrid('sortable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.showAggregates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showAggregates', arg);
        }
        else {
            return this.host.jqxTreeGrid('showAggregates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.showSubAggregates = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showSubAggregates', arg);
        }
        else {
            return this.host.jqxTreeGrid('showSubAggregates');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.showToolbar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showToolbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('showToolbar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.showStatusbar = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showStatusbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('showStatusbar');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.statusBarHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('statusBarHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('statusBarHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.scrollBarSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('scrollBarSize', arg);
        }
        else {
            return this.host.jqxTreeGrid('scrollBarSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.selectionMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('selectionMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('selectionMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.showHeader = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showHeader', arg);
        }
        else {
            return this.host.jqxTreeGrid('showHeader');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('theme', arg);
        }
        else {
            return this.host.jqxTreeGrid('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.toolbarHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('toolbarHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('toolbarHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('width', arg);
        }
        else {
            return this.host.jqxTreeGrid('width');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.virtualModeCreateRecords = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('virtualModeCreateRecords', arg);
        }
        else {
            return this.host.jqxTreeGrid('virtualModeCreateRecords');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTreeGridComponent.prototype.virtualModeRecordCreating = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('virtualModeRecordCreating', arg);
        }
        else {
            return this.host.jqxTreeGrid('virtualModeRecordCreating');
        }
    };
    // jqxTreeGridComponent functions
    // jqxTreeGridComponent functions
    /**
     * @param {?} rowKey
     * @param {?} rowData
     * @param {?} rowPosition
     * @param {?=} parent
     * @return {?}
     */
    jqxTreeGridComponent.prototype.addRow = 
    // jqxTreeGridComponent functions
    /**
     * @param {?} rowKey
     * @param {?} rowData
     * @param {?} rowPosition
     * @param {?=} parent
     * @return {?}
     */
    function (rowKey, rowData, rowPosition, parent) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);
    };
    /**
     * @param {?} dataField
     * @param {?} filerGroup
     * @return {?}
     */
    jqxTreeGridComponent.prototype.addFilter = /**
     * @param {?} dataField
     * @param {?} filerGroup
     * @return {?}
     */
    function (dataField, filerGroup) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addFilter', dataField, filerGroup);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.applyFilters = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('applyFilters');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.beginUpdate = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginUpdate');
    };
    /**
     * @param {?} rowKey
     * @return {?}
     */
    jqxTreeGridComponent.prototype.beginRowEdit = /**
     * @param {?} rowKey
     * @return {?}
     */
    function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginRowEdit', rowKey);
    };
    /**
     * @param {?} rowKey
     * @param {?} dataField
     * @return {?}
     */
    jqxTreeGridComponent.prototype.beginCellEdit = /**
     * @param {?} rowKey
     * @param {?} dataField
     * @return {?}
     */
    function (rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginCellEdit', rowKey, dataField);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearSelection');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.clearFilters = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearFilters');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clear');
    };
    /**
     * @param {?} rowKey
     * @return {?}
     */
    jqxTreeGridComponent.prototype.checkRow = /**
     * @param {?} rowKey
     * @return {?}
     */
    function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('checkRow', rowKey);
    };
    /**
     * @param {?} rowKey
     * @return {?}
     */
    jqxTreeGridComponent.prototype.collapseRow = /**
     * @param {?} rowKey
     * @return {?}
     */
    function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseRow', rowKey);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.collapseAll = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseAll');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('destroy');
    };
    /**
     * @param {?} rowKey
     * @return {?}
     */
    jqxTreeGridComponent.prototype.deleteRow = /**
     * @param {?} rowKey
     * @return {?}
     */
    function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('deleteRow', rowKey);
    };
    /**
     * @param {?} rowKey
     * @return {?}
     */
    jqxTreeGridComponent.prototype.expandRow = /**
     * @param {?} rowKey
     * @return {?}
     */
    function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandRow', rowKey);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.expandAll = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandAll');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.endUpdate = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endUpdate');
    };
    /**
     * @param {?} rowKey
     * @return {?}
     */
    jqxTreeGridComponent.prototype.ensureRowVisible = /**
     * @param {?} rowKey
     * @return {?}
     */
    function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('ensureRowVisible', rowKey);
    };
    /**
     * @param {?} rowKey
     * @param {?=} cancelChanges
     * @return {?}
     */
    jqxTreeGridComponent.prototype.endRowEdit = /**
     * @param {?} rowKey
     * @param {?=} cancelChanges
     * @return {?}
     */
    function (rowKey, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endRowEdit', rowKey, cancelChanges);
    };
    /**
     * @param {?} rowKey
     * @param {?} dataField
     * @param {?=} cancelChanges
     * @return {?}
     */
    jqxTreeGridComponent.prototype.endCellEdit = /**
     * @param {?} rowKey
     * @param {?} dataField
     * @param {?=} cancelChanges
     * @return {?}
     */
    function (rowKey, dataField, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);
    };
    /**
     * @param {?} exportDataType
     * @return {?}
     */
    jqxTreeGridComponent.prototype.exportData = /**
     * @param {?} exportDataType
     * @return {?}
     */
    function (exportDataType) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('exportData', exportDataType);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('focus');
    };
    /**
     * @param {?} dataField
     * @param {?} propertyName
     * @return {?}
     */
    jqxTreeGridComponent.prototype.getColumnProperty = /**
     * @param {?} dataField
     * @param {?} propertyName
     * @return {?}
     */
    function (dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getColumnProperty', dataField, propertyName);
    };
    /**
     * @param {?} pageIndex
     * @return {?}
     */
    jqxTreeGridComponent.prototype.goToPage = /**
     * @param {?} pageIndex
     * @return {?}
     */
    function (pageIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPage', pageIndex);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.goToPrevPage = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPrevPage');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.goToNextPage = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToNextPage');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.getSelection = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getSelection');
    };
    /**
     * @param {?} row
     * @return {?}
     */
    jqxTreeGridComponent.prototype.getKey = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getKey', row);
    };
    /**
     * @param {?} rowKey
     * @return {?}
     */
    jqxTreeGridComponent.prototype.getRow = /**
     * @param {?} rowKey
     * @return {?}
     */
    function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRow', rowKey);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.getRows = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRows');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.getCheckedRows = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCheckedRows');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.getView = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getView');
    };
    /**
     * @param {?} rowKey
     * @param {?} dataField
     * @return {?}
     */
    jqxTreeGridComponent.prototype.getCellValue = /**
     * @param {?} rowKey
     * @param {?} dataField
     * @return {?}
     */
    function (rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCellValue', rowKey, dataField);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxTreeGridComponent.prototype.hideColumn = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('hideColumn', dataField);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.isBindingCompleted = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('isBindingCompleted');
    };
    /**
     * @param {?} rowKey
     * @return {?}
     */
    jqxTreeGridComponent.prototype.lockRow = /**
     * @param {?} rowKey
     * @return {?}
     */
    function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('lockRow', rowKey);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('refresh');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('render');
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxTreeGridComponent.prototype.removeFilter = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('removeFilter', dataField);
    };
    /**
     * @param {?=} top
     * @param {?=} left
     * @return {?}
     */
    jqxTreeGridComponent.prototype.scrollOffset = /**
     * @param {?=} top
     * @param {?=} left
     * @return {?}
     */
    function (top, left) {
        if (top !== undefined || left !== undefined) {
            this.host.jqxTreeGrid('scrollOffset', top, left);
        }
        else {
            return this.host.jqxTreeGrid('scrollOffset');
        }
    };
    ;
    /**
     * @param {?} dataField
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    jqxTreeGridComponent.prototype.setColumnProperty = /**
     * @param {?} dataField
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    function (dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    jqxTreeGridComponent.prototype.showColumn = /**
     * @param {?} dataField
     * @return {?}
     */
    function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('showColumn', dataField);
    };
    /**
     * @param {?} rowId
     * @return {?}
     */
    jqxTreeGridComponent.prototype.selectRow = /**
     * @param {?} rowId
     * @return {?}
     */
    function (rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('selectRow', rowId);
    };
    /**
     * @param {?} rowId
     * @param {?} dataField
     * @param {?} cellValue
     * @return {?}
     */
    jqxTreeGridComponent.prototype.setCellValue = /**
     * @param {?} rowId
     * @param {?} dataField
     * @param {?} cellValue
     * @return {?}
     */
    function (rowId, dataField, cellValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setCellValue', rowId, dataField, cellValue);
    };
    /**
     * @param {?} dataField
     * @param {?=} sortOrder
     * @return {?}
     */
    jqxTreeGridComponent.prototype.sortBy = /**
     * @param {?} dataField
     * @param {?=} sortOrder
     * @return {?}
     */
    function (dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('sortBy', dataField, sortOrder);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.updating = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('updating');
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.updateBoundData = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateBoundData');
    };
    /**
     * @param {?} rowId
     * @return {?}
     */
    jqxTreeGridComponent.prototype.unselectRow = /**
     * @param {?} rowId
     * @return {?}
     */
    function (rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unselectRow', rowId);
    };
    /**
     * @param {?} rowId
     * @return {?}
     */
    jqxTreeGridComponent.prototype.uncheckRow = /**
     * @param {?} rowId
     * @return {?}
     */
    function (rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('uncheckRow', rowId);
    };
    /**
     * @param {?} rowId
     * @param {?} data
     * @return {?}
     */
    jqxTreeGridComponent.prototype.updateRow = /**
     * @param {?} rowId
     * @param {?} data
     * @return {?}
     */
    function (rowId, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateRow', rowId, data);
    };
    /**
     * @param {?} rowId
     * @return {?}
     */
    jqxTreeGridComponent.prototype.unlockRow = /**
     * @param {?} rowId
     * @return {?}
     */
    function (rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unlockRow', rowId);
    };
    /**
     * @return {?}
     */
    jqxTreeGridComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onBindingComplete.emit(eventData); }));
        this.host.on('cellBeginEdit', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellBeginEdit.emit(eventData); }));
        this.host.on('cellEndEdit', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellEndEdit.emit(eventData); }));
        this.host.on('cellValueChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onCellValueChanged.emit(eventData); }));
        this.host.on('columnResized', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onColumnResized.emit(eventData); }));
        this.host.on('columnReordered', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onColumnReordered.emit(eventData); }));
        this.host.on('filter', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onFilter.emit(eventData); }));
        this.host.on('pageChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPageChanged.emit(eventData); }));
        this.host.on('pageSizeChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onPageSizeChanged.emit(eventData); }));
        this.host.on('rowClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowClick.emit(eventData); }));
        this.host.on('rowDoubleClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowDoubleClick.emit(eventData); }));
        this.host.on('rowSelect', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowSelect.emit(eventData); }));
        this.host.on('rowUnselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowUnselect.emit(eventData); }));
        this.host.on('rowBeginEdit', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowBeginEdit.emit(eventData); }));
        this.host.on('rowEndEdit', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowEndEdit.emit(eventData); }));
        this.host.on('rowExpand', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowExpand.emit(eventData); }));
        this.host.on('rowCollapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowCollapse.emit(eventData); }));
        this.host.on('rowCheck', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowCheck.emit(eventData); }));
        this.host.on('rowUncheck', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRowUncheck.emit(eventData); }));
        this.host.on('sort', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onSort.emit(eventData); }));
    };
    jqxTreeGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxTreeGrid',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxTreeGridComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxTreeGridComponent.propDecorators = {
        attrAltRows: [{ type: Input, args: ['altRows',] }],
        attrAutoRowHeight: [{ type: Input, args: ['autoRowHeight',] }],
        attrAggregatesHeight: [{ type: Input, args: ['aggregatesHeight',] }],
        attrAutoShowLoadElement: [{ type: Input, args: ['autoShowLoadElement',] }],
        attrCheckboxes: [{ type: Input, args: ['checkboxes',] }],
        attrColumnsHeight: [{ type: Input, args: ['columnsHeight',] }],
        attrColumns: [{ type: Input, args: ['columns',] }],
        attrColumnGroups: [{ type: Input, args: ['columnGroups',] }],
        attrColumnsResize: [{ type: Input, args: ['columnsResize',] }],
        attrColumnsReorder: [{ type: Input, args: ['columnsReorder',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEditable: [{ type: Input, args: ['editable',] }],
        attrEditSettings: [{ type: Input, args: ['editSettings',] }],
        attrExportSettings: [{ type: Input, args: ['exportSettings',] }],
        attrEnableHover: [{ type: Input, args: ['enableHover',] }],
        attrEnableBrowserSelection: [{ type: Input, args: ['enableBrowserSelection',] }],
        attrFilterable: [{ type: Input, args: ['filterable',] }],
        attrFilterHeight: [{ type: Input, args: ['filterHeight',] }],
        attrFilterMode: [{ type: Input, args: ['filterMode',] }],
        attrHierarchicalCheckboxes: [{ type: Input, args: ['hierarchicalCheckboxes',] }],
        attrIcons: [{ type: Input, args: ['icons',] }],
        attrIncrementalSearch: [{ type: Input, args: ['incrementalSearch',] }],
        attrLocalization: [{ type: Input, args: ['localization',] }],
        attrPagerHeight: [{ type: Input, args: ['pagerHeight',] }],
        attrPageSize: [{ type: Input, args: ['pageSize',] }],
        attrPageSizeOptions: [{ type: Input, args: ['pageSizeOptions',] }],
        attrPageable: [{ type: Input, args: ['pageable',] }],
        attrPagerPosition: [{ type: Input, args: ['pagerPosition',] }],
        attrPagerMode: [{ type: Input, args: ['pagerMode',] }],
        attrPageSizeMode: [{ type: Input, args: ['pageSizeMode',] }],
        attrPagerButtonsCount: [{ type: Input, args: ['pagerButtonsCount',] }],
        attrPagerRenderer: [{ type: Input, args: ['pagerRenderer',] }],
        attrReady: [{ type: Input, args: ['ready',] }],
        attrRowDetails: [{ type: Input, args: ['rowDetails',] }],
        attrRowDetailsRenderer: [{ type: Input, args: ['rowDetailsRenderer',] }],
        attrRenderToolbar: [{ type: Input, args: ['renderToolbar',] }],
        attrRenderStatusBar: [{ type: Input, args: ['renderStatusBar',] }],
        attrRendering: [{ type: Input, args: ['rendering',] }],
        attrRendered: [{ type: Input, args: ['rendered',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrSortable: [{ type: Input, args: ['sortable',] }],
        attrShowAggregates: [{ type: Input, args: ['showAggregates',] }],
        attrShowSubAggregates: [{ type: Input, args: ['showSubAggregates',] }],
        attrShowToolbar: [{ type: Input, args: ['showToolbar',] }],
        attrShowStatusbar: [{ type: Input, args: ['showStatusbar',] }],
        attrStatusBarHeight: [{ type: Input, args: ['statusBarHeight',] }],
        attrScrollBarSize: [{ type: Input, args: ['scrollBarSize',] }],
        attrSelectionMode: [{ type: Input, args: ['selectionMode',] }],
        attrShowHeader: [{ type: Input, args: ['showHeader',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrToolbarHeight: [{ type: Input, args: ['toolbarHeight',] }],
        attrVirtualModeCreateRecords: [{ type: Input, args: ['virtualModeCreateRecords',] }],
        attrVirtualModeRecordCreating: [{ type: Input, args: ['virtualModeRecordCreating',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onBindingComplete: [{ type: Output }],
        onCellBeginEdit: [{ type: Output }],
        onCellEndEdit: [{ type: Output }],
        onCellValueChanged: [{ type: Output }],
        onColumnResized: [{ type: Output }],
        onColumnReordered: [{ type: Output }],
        onFilter: [{ type: Output }],
        onPageChanged: [{ type: Output }],
        onPageSizeChanged: [{ type: Output }],
        onRowClick: [{ type: Output }],
        onRowDoubleClick: [{ type: Output }],
        onRowSelect: [{ type: Output }],
        onRowUnselect: [{ type: Output }],
        onRowBeginEdit: [{ type: Output }],
        onRowEndEdit: [{ type: Output }],
        onRowExpand: [{ type: Output }],
        onRowCollapse: [{ type: Output }],
        onRowCheck: [{ type: Output }],
        onRowUncheck: [{ type: Output }],
        onSort: [{ type: Output }]
    };
    return jqxTreeGridComponent;
}()); //jqxTreeGridComponent
export { jqxTreeGridComponent };
if (false) {
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrAltRows;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrAutoRowHeight;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrAggregatesHeight;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrAutoShowLoadElement;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrCheckboxes;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrColumnsHeight;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrColumns;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrColumnGroups;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrColumnsResize;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrColumnsReorder;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrEditable;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrEditSettings;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrExportSettings;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrEnableBrowserSelection;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrFilterable;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrFilterHeight;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrFilterMode;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrHierarchicalCheckboxes;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrIcons;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrIncrementalSearch;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrLocalization;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPagerHeight;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPageSize;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPageSizeOptions;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPageable;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPagerPosition;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPagerMode;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPageSizeMode;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPagerButtonsCount;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrPagerRenderer;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrReady;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrRowDetails;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrRowDetailsRenderer;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrRenderToolbar;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrRenderStatusBar;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrRendering;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrRendered;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrRtl;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrSource;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrSortable;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrShowAggregates;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrShowSubAggregates;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrShowToolbar;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrShowStatusbar;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrStatusBarHeight;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrScrollBarSize;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrSelectionMode;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrShowHeader;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrTheme;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrToolbarHeight;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrVirtualModeCreateRecords;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrVirtualModeRecordCreating;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrWidth;
    /** @type {?} */
    jqxTreeGridComponent.prototype.attrHeight;
    /** @type {?} */
    jqxTreeGridComponent.prototype.autoCreate;
    /** @type {?} */
    jqxTreeGridComponent.prototype.properties;
    /** @type {?} */
    jqxTreeGridComponent.prototype.host;
    /** @type {?} */
    jqxTreeGridComponent.prototype.elementRef;
    /** @type {?} */
    jqxTreeGridComponent.prototype.widgetObject;
    /** @type {?} */
    jqxTreeGridComponent.prototype.content;
    /** @type {?} */
    jqxTreeGridComponent.prototype.container;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onBindingComplete;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onCellBeginEdit;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onCellEndEdit;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onCellValueChanged;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onColumnResized;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onColumnReordered;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onFilter;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onPageChanged;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onPageSizeChanged;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowClick;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowDoubleClick;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowSelect;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowUnselect;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowBeginEdit;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowEndEdit;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowExpand;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowCollapse;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowCheck;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onRowUncheck;
    /** @type {?} */
    jqxTreeGridComponent.prototype.onSort;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0cmVlZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXh0cmVlZ3JpZC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4dHJlZWdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBbUMsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFHOUk7SUF5RUcsOEJBQVksZ0JBQTRCO1FBVGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxrQkFBa0IsRUFBQyxxQkFBcUIsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyx3QkFBd0IsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsd0JBQXdCLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLGNBQWMsRUFBQyxtQkFBbUIsRUFBQyxlQUFlLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxvQkFBb0IsRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFDLGlCQUFpQixFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsT0FBTyxFQUFDLDBCQUEwQixF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SUFBTyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWM7Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVk7Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVc7Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7Ozs7UUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVk7Ozs7UUFBRSxVQUFDLFNB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O0lBQ3ZCLDRDQUFxQzs7SUFFckMsdUNBQWdCOztJQUNoQix5Q0FBMEI7O0lBK3pDMUIsaURBQWlEOztJQUNqRCwrQ0FBK0M7O0lBQy9DLDZDQUE2Qzs7SUFDN0Msa0RBQWtEOztJQUNsRCwrQ0FBK0M7O0lBQy9DLGlEQUFpRDs7SUFDakQsd0NBQXdDOztJQUN4Qyw2Q0FBNkM7O0lBQzdDLGlEQUFpRDs7SUFDakQsMENBQTBDOztJQUMxQyxnREFBZ0Q7O0lBQ2hELDJDQUEyQzs7SUFDM0MsNkNBQTZDOztJQUM3Qyw4Q0FBOEM7O0lBQzlDLDRDQUE0Qzs7SUFDNUMsMkNBQTJDOztJQUMzQyw2Q0FBNkM7O0lBQzdDLDBDQUEwQzs7SUFDMUMsNENBQTRDOztJQUM1QyxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFRyZWVHcmlkJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhUcmVlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZFxue1xuICAgQElucHV0KCdhbHRSb3dzJykgYXR0ckFsdFJvd3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9Sb3dIZWlnaHQnKSBhdHRyQXV0b1Jvd0hlaWdodDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWdncmVnYXRlc0hlaWdodCcpIGF0dHJBZ2dyZWdhdGVzSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2F1dG9TaG93TG9hZEVsZW1lbnQnKSBhdHRyQXV0b1Nob3dMb2FkRWxlbWVudDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2hlY2tib3hlcycpIGF0dHJDaGVja2JveGVzOiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zSGVpZ2h0JykgYXR0ckNvbHVtbnNIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnY29sdW1ucycpIGF0dHJDb2x1bW5zOiBBcnJheTxhbnk+O1xuICAgQElucHV0KCdjb2x1bW5Hcm91cHMnKSBhdHRyQ29sdW1uR3JvdXBzOiBBcnJheTxhbnk+O1xuICAgQElucHV0KCdjb2x1bW5zUmVzaXplJykgYXR0ckNvbHVtbnNSZXNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNSZW9yZGVyJykgYXR0ckNvbHVtbnNSZW9yZGVyOiBib29sZWFuO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWRpdGFibGUnKSBhdHRyRWRpdGFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VkaXRTZXR0aW5ncycpIGF0dHJFZGl0U2V0dGluZ3M6IGpxd2lkZ2V0cy5UcmVlR3JpZEVkaXRTZXR0aW5ncztcbiAgIEBJbnB1dCgnZXhwb3J0U2V0dGluZ3MnKSBhdHRyRXhwb3J0U2V0dGluZ3M6IGpxd2lkZ2V0cy5UcmVlR3JpZEV4cG9ydFNldHRpbmdzO1xuICAgQElucHV0KCdlbmFibGVIb3ZlcicpIGF0dHJFbmFibGVIb3ZlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlQnJvd3NlclNlbGVjdGlvbicpIGF0dHJFbmFibGVCcm93c2VyU2VsZWN0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdmaWx0ZXJhYmxlJykgYXR0ckZpbHRlcmFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZpbHRlckhlaWdodCcpIGF0dHJGaWx0ZXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnZmlsdGVyTW9kZScpIGF0dHJGaWx0ZXJNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2hpZXJhcmNoaWNhbENoZWNrYm94ZXMnKSBhdHRySGllcmFyY2hpY2FsQ2hlY2tib3hlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaWNvbnMnKSBhdHRySWNvbnM6IGFueTtcbiAgIEBJbnB1dCgnaW5jcmVtZW50YWxTZWFyY2gnKSBhdHRySW5jcmVtZW50YWxTZWFyY2g6IGJvb2xlYW47XG4gICBASW5wdXQoJ2xvY2FsaXphdGlvbicpIGF0dHJMb2NhbGl6YXRpb246IGFueTtcbiAgIEBJbnB1dCgncGFnZXJIZWlnaHQnKSBhdHRyUGFnZXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZVNpemUnKSBhdHRyUGFnZVNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZVNpemVPcHRpb25zJykgYXR0clBhZ2VTaXplT3B0aW9uczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPjtcbiAgIEBJbnB1dCgncGFnZWFibGUnKSBhdHRyUGFnZWFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ3BhZ2VyUG9zaXRpb24nKSBhdHRyUGFnZXJQb3NpdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdwYWdlck1vZGUnKSBhdHRyUGFnZXJNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BhZ2VTaXplTW9kZScpIGF0dHJQYWdlU2l6ZU1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgncGFnZXJCdXR0b25zQ291bnQnKSBhdHRyUGFnZXJCdXR0b25zQ291bnQ6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZXJSZW5kZXJlcicpIGF0dHJQYWdlclJlbmRlcmVyOiAoKSA9PiBhbnk7XG4gICBASW5wdXQoJ3JlYWR5JykgYXR0clJlYWR5OiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdyb3dEZXRhaWxzJykgYXR0clJvd0RldGFpbHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Jvd0RldGFpbHNSZW5kZXJlcicpIGF0dHJSb3dEZXRhaWxzUmVuZGVyZXI6IChrZXk6IGpxd2lkZ2V0cy5UcmVlR3JpZFJvd0RldGFpbHNSZW5kZXJlclsna2V5J10sIGRhdGFSb3c6IGpxd2lkZ2V0cy5UcmVlR3JpZFJvd0RldGFpbHNSZW5kZXJlclsnZGF0YVJvdyddKSA9PiBhbnk7XG4gICBASW5wdXQoJ3JlbmRlclRvb2xiYXInKSBhdHRyUmVuZGVyVG9vbGJhcjogKHRvb2xCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJUb29sYmFyWyd0b29sYmFyJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlclN0YXR1c0JhcicpIGF0dHJSZW5kZXJTdGF0dXNCYXI6IChzdGF0dXNCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJTdGF0dXNCYXJbJ3N0YXR1c2JhciddKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJpbmcnKSBhdHRyUmVuZGVyaW5nOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJlZCcpIGF0dHJSZW5kZXJlZDogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZTogYW55O1xuICAgQElucHV0KCdzb3J0YWJsZScpIGF0dHJTb3J0YWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0FnZ3JlZ2F0ZXMnKSBhdHRyU2hvd0FnZ3JlZ2F0ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dTdWJBZ2dyZWdhdGVzJykgYXR0clNob3dTdWJBZ2dyZWdhdGVzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93VG9vbGJhcicpIGF0dHJTaG93VG9vbGJhcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd1N0YXR1c2JhcicpIGF0dHJTaG93U3RhdHVzYmFyOiBib29sZWFuO1xuICAgQElucHV0KCdzdGF0dXNCYXJIZWlnaHQnKSBhdHRyU3RhdHVzQmFySGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3Njcm9sbEJhclNpemUnKSBhdHRyU2Nyb2xsQmFyU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdzZWxlY3Rpb25Nb2RlJykgYXR0clNlbGVjdGlvbk1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnc2hvd0hlYWRlcicpIGF0dHJTaG93SGVhZGVyOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd0b29sYmFySGVpZ2h0JykgYXR0clRvb2xiYXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndmlydHVhbE1vZGVDcmVhdGVSZWNvcmRzJykgYXR0clZpcnR1YWxNb2RlQ3JlYXRlUmVjb3JkczogKGV4cGFuZGVkUmVjb3JkPzogYW55LCBkb25lPzogYW55KSA9PiB2b2lkO1xuICAgQElucHV0KCd2aXJ0dWFsTW9kZVJlY29yZENyZWF0aW5nJykgYXR0clZpcnR1YWxNb2RlUmVjb3JkQ3JlYXRpbmc6IChyZWNvcmQ/OiBhbnkpID0+IGFueTtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbHRSb3dzJywnYXV0b1Jvd0hlaWdodCcsJ2FnZ3JlZ2F0ZXNIZWlnaHQnLCdhdXRvU2hvd0xvYWRFbGVtZW50JywnY2hlY2tib3hlcycsJ2NvbHVtbnNIZWlnaHQnLCdjb2x1bW5zJywnY29sdW1uR3JvdXBzJywnY29sdW1uc1Jlc2l6ZScsJ2NvbHVtbnNSZW9yZGVyJywnZGlzYWJsZWQnLCdlZGl0YWJsZScsJ2VkaXRTZXR0aW5ncycsJ2V4cG9ydFNldHRpbmdzJywnZW5hYmxlSG92ZXInLCdlbmFibGVCcm93c2VyU2VsZWN0aW9uJywnZmlsdGVyYWJsZScsJ2ZpbHRlckhlaWdodCcsJ2ZpbHRlck1vZGUnLCdoZWlnaHQnLCdoaWVyYXJjaGljYWxDaGVja2JveGVzJywnaWNvbnMnLCdpbmNyZW1lbnRhbFNlYXJjaCcsJ2xvY2FsaXphdGlvbicsJ3BhZ2VySGVpZ2h0JywncGFnZVNpemUnLCdwYWdlU2l6ZU9wdGlvbnMnLCdwYWdlYWJsZScsJ3BhZ2VyUG9zaXRpb24nLCdwYWdlck1vZGUnLCdwYWdlU2l6ZU1vZGUnLCdwYWdlckJ1dHRvbnNDb3VudCcsJ3BhZ2VyUmVuZGVyZXInLCdyZWFkeScsJ3Jvd0RldGFpbHMnLCdyb3dEZXRhaWxzUmVuZGVyZXInLCdyZW5kZXJUb29sYmFyJywncmVuZGVyU3RhdHVzQmFyJywncmVuZGVyaW5nJywncmVuZGVyZWQnLCdydGwnLCdzb3VyY2UnLCdzb3J0YWJsZScsJ3Nob3dBZ2dyZWdhdGVzJywnc2hvd1N1YkFnZ3JlZ2F0ZXMnLCdzaG93VG9vbGJhcicsJ3Nob3dTdGF0dXNiYXInLCdzdGF0dXNCYXJIZWlnaHQnLCdzY3JvbGxCYXJTaXplJywnc2VsZWN0aW9uTW9kZScsJ3Nob3dIZWFkZXInLCd0aGVtZScsJ3Rvb2xiYXJIZWlnaHQnLCd3aWR0aCcsJ3ZpcnR1YWxNb2RlQ3JlYXRlUmVjb3JkcycsJ3ZpcnR1YWxNb2RlUmVjb3JkQ3JlYXRpbmcnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4VHJlZUdyaWQ7XG5cbiAgIGNvbnRlbnQ6IFN0cmluZztcbiAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgIH07IFxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgIGxldCBjaGlsZHJlbiA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4pLmZpbmQoJ3RyJyk7IFxuICAgICAgIGxldCBodG1sID0gJyc7IFxuICAgICAgIGxldCBvcHRpb25zID0ge307IFxuXG4gICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgaHRtbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgIHRoaXMuY29udGVudCA9IGh0bWw7XG5cbiAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpRWExpdGUuanF4LnBhcnNlU291cmNlVGFnKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgaWYgKHRoaXNbJ2F0dHJDb2x1bW5zJ10gIT09IHVuZGVmaW5lZCkgeyAgXG47ICAgICAgICAgICAgICAgIG9wdGlvbnNbJ3NvdXJjZSddID0gcmVzdWx0LnNvdXJjZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuc291cmNlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbJ2NvbHVtbnMnXSA9IHJlc3VsdC5jb2x1bW5zO1xuICAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGFpbmVyLmlubmVySFRNTDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKUVhMaXRlLmpxeC5wYXJzZVNvdXJjZVRhZyh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnMnKTtcblxuICAgICAgICAgICAgaWYgKGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoeyBzb3VyY2U6IHJlc3VsdC5zb3VyY2UsIGNvbHVtbnM6IHJlc3VsdC5jb2x1bW5zIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoeyBzb3VyY2U6IHJlc3VsdC5zb3VyY2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgfTtcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4VHJlZUdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4VHJlZUdyaWQnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4VHJlZUdyaWRDb21wb25lbnQgcHJvcGVydGllc1xuICAgYWx0Um93cyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYWx0Um93cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2FsdFJvd3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b1Jvd0hlaWdodChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYXV0b1Jvd0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2F1dG9Sb3dIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWdncmVnYXRlc0hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2FnZ3JlZ2F0ZXNIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhZ2dyZWdhdGVzSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9TaG93TG9hZEVsZW1lbnQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2F1dG9TaG93TG9hZEVsZW1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhdXRvU2hvd0xvYWRFbGVtZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNoZWNrYm94ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NoZWNrYm94ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjaGVja2JveGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1uc0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zKGFyZz86IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5Hcm91cHMoYXJnPzogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbHVtbkdyb3VwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbHVtbkdyb3VwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zUmVzaXplKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zUmVzaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1uc1Jlc2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zUmVvcmRlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1uc1Jlb3JkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zUmVvcmRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0YWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZWRpdGFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlZGl0YWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0U2V0dGluZ3MoYXJnPzoganF3aWRnZXRzLlRyZWVHcmlkRWRpdFNldHRpbmdzKToganF3aWRnZXRzLlRyZWVHcmlkRWRpdFNldHRpbmdzIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlZGl0U2V0dGluZ3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlZGl0U2V0dGluZ3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXhwb3J0U2V0dGluZ3MoYXJnPzoganF3aWRnZXRzLlRyZWVHcmlkRXhwb3J0U2V0dGluZ3MpOiBqcXdpZGdldHMuVHJlZUdyaWRFeHBvcnRTZXR0aW5ncyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZXhwb3J0U2V0dGluZ3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdleHBvcnRTZXR0aW5ncycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZW5hYmxlSG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmFibGVIb3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVCcm93c2VyU2VsZWN0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmFibGVCcm93c2VyU2VsZWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZW5hYmxlQnJvd3NlclNlbGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZmlsdGVyYWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVyTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ZpbHRlck1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJNb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoaWVyYXJjaGljYWxDaGVja2JveGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdoaWVyYXJjaGljYWxDaGVja2JveGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaGllcmFyY2hpY2FsQ2hlY2tib3hlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBpY29ucyhhcmc/OiBhbnkpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ljb25zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaWNvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5jcmVtZW50YWxTZWFyY2goYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2luY3JlbWVudGFsU2VhcmNoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaW5jcmVtZW50YWxTZWFyY2gnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbG9jYWxpemF0aW9uKGFyZz86IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnbG9jYWxpemF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnbG9jYWxpemF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VySGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlU2l6ZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZVNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZVNpemVPcHRpb25zKGFyZz86IEFycmF5PG51bWJlciB8IHN0cmluZz4pOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZU9wdGlvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZU9wdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZWFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZWFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJQb3NpdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyUG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlclBvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VyTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlU2l6ZU1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZU1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZU1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJCdXR0b25zQ291bnQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlckJ1dHRvbnNDb3VudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyQnV0dG9uc0NvdW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VyUmVuZGVyZXIoYXJnPzogKCkgPT4gYW55KTogKCkgPT4gYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlclJlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZXJSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZWFkeShhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncmVhZHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZWFkeScpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dEZXRhaWxzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyb3dEZXRhaWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncm93RGV0YWlscycpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dEZXRhaWxzUmVuZGVyZXIoYXJnPzogKGtleToganF3aWRnZXRzLlRyZWVHcmlkUm93RGV0YWlsc1JlbmRlcmVyWydrZXknXSwgZGF0YVJvdzoganF3aWRnZXRzLlRyZWVHcmlkUm93RGV0YWlsc1JlbmRlcmVyWydkYXRhUm93J10pID0+IGFueSk6IChrZXk6IGpxd2lkZ2V0cy5UcmVlR3JpZFJvd0RldGFpbHNSZW5kZXJlclsna2V5J10sIGRhdGFSb3c6IGpxd2lkZ2V0cy5UcmVlR3JpZFJvd0RldGFpbHNSZW5kZXJlclsnZGF0YVJvdyddKSA9PiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Jvd0RldGFpbHNSZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Jvd0RldGFpbHNSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJUb29sYmFyKGFyZz86ICh0b29sQmFyPzoganF3aWRnZXRzLlRyZWVHcmlkUmVuZGVyVG9vbGJhclsndG9vbGJhciddKSA9PiB2b2lkKTogKHRvb2xCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJUb29sYmFyWyd0b29sYmFyJ10pID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlclRvb2xiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJUb29sYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlclN0YXR1c0Jhcihhcmc/OiAoc3RhdHVzQmFyPzoganF3aWRnZXRzLlRyZWVHcmlkUmVuZGVyU3RhdHVzQmFyWydzdGF0dXNiYXInXSkgPT4gdm9pZCk6IChzdGF0dXNCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJTdGF0dXNCYXJbJ3N0YXR1c2JhciddKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJTdGF0dXNCYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJTdGF0dXNCYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyaW5nKGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyZWQoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlcmVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncmVuZGVyZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvcnRhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzb3J0YWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NvcnRhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dBZ2dyZWdhdGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93QWdncmVnYXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dBZ2dyZWdhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dTdWJBZ2dyZWdhdGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93U3ViQWdncmVnYXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dTdWJBZ2dyZWdhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dUb29sYmFyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93VG9vbGJhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dUb29sYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dTdGF0dXNiYXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dTdGF0dXNiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93U3RhdHVzYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXR1c0JhckhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3N0YXR1c0JhckhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3N0YXR1c0JhckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxCYXJTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2Nyb2xsQmFyU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Njcm9sbEJhclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0aW9uTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NlbGVjdGlvbk1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzZWxlY3Rpb25Nb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dIZWFkZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dIZWFkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93SGVhZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sYmFySGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndG9vbGJhckhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Rvb2xiYXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZpcnR1YWxNb2RlQ3JlYXRlUmVjb3Jkcyhhcmc/OiAoZXhwYW5kZWRSZWNvcmQ/OiBhbnksIGRvbmU/OiBhbnkpID0+IHZvaWQpOiAoZXhwYW5kZWRSZWNvcmQ/OiBhbnksIGRvbmU/OiBhbnkpID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3ZpcnR1YWxNb2RlQ3JlYXRlUmVjb3JkcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3ZpcnR1YWxNb2RlQ3JlYXRlUmVjb3JkcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB2aXJ0dWFsTW9kZVJlY29yZENyZWF0aW5nKGFyZz86IChyZWNvcmQ/OiBhbnkpID0+IGFueSk6IChyZWNvcmQ/OiBhbnkpID0+IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndmlydHVhbE1vZGVSZWNvcmRDcmVhdGluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3ZpcnR1YWxNb2RlUmVjb3JkQ3JlYXRpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlR3JpZENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFkZFJvdyhyb3dLZXk6IG51bWJlciB8IHN0cmluZyB8IG51bGwsIHJvd0RhdGE6IGFueSwgcm93UG9zaXRpb246IHN0cmluZywgcGFyZW50Pzogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYWRkUm93Jywgcm93S2V5LCByb3dEYXRhLCByb3dQb3NpdGlvbiwgcGFyZW50KTtcbiAgIH1cblxuICAgYWRkRmlsdGVyKGRhdGFGaWVsZDogc3RyaW5nLCBmaWxlckdyb3VwOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhZGRGaWx0ZXInLCBkYXRhRmllbGQsIGZpbGVyR3JvdXApO1xuICAgfVxuXG4gICBhcHBseUZpbHRlcnMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYXBwbHlGaWx0ZXJzJyk7XG4gICB9XG5cbiAgIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2JlZ2luVXBkYXRlJyk7XG4gICB9XG5cbiAgIGJlZ2luUm93RWRpdChyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2JlZ2luUm93RWRpdCcsIHJvd0tleSk7XG4gICB9XG5cbiAgIGJlZ2luQ2VsbEVkaXQocm93S2V5OiBudW1iZXIgfCBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYmVnaW5DZWxsRWRpdCcsIHJvd0tleSwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY2xlYXJTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgY2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NsZWFyRmlsdGVycycpO1xuICAgfVxuXG4gICBjbGVhcigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjbGVhcicpO1xuICAgfVxuXG4gICBjaGVja1Jvdyhyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NoZWNrUm93Jywgcm93S2V5KTtcbiAgIH1cblxuICAgY29sbGFwc2VSb3cocm93S2V5OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2xsYXBzZVJvdycsIHJvd0tleSk7XG4gICB9XG5cbiAgIGNvbGxhcHNlQWxsKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbGxhcHNlQWxsJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBkZWxldGVSb3cocm93S2V5OiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2RlbGV0ZVJvdycsIHJvd0tleSk7XG4gICB9XG5cbiAgIGV4cGFuZFJvdyhyb3dLZXk6IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdleHBhbmRSb3cnLCByb3dLZXkpO1xuICAgfVxuXG4gICBleHBhbmRBbGwoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZXhwYW5kQWxsJyk7XG4gICB9XG5cbiAgIGVuZFVwZGF0ZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmRVcGRhdGUnKTtcbiAgIH1cblxuICAgZW5zdXJlUm93VmlzaWJsZShyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2Vuc3VyZVJvd1Zpc2libGUnLCByb3dLZXkpO1xuICAgfVxuXG4gICBlbmRSb3dFZGl0KHJvd0tleTogbnVtYmVyIHwgc3RyaW5nLCBjYW5jZWxDaGFuZ2VzPzogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2VuZFJvd0VkaXQnLCByb3dLZXksIGNhbmNlbENoYW5nZXMpO1xuICAgfVxuXG4gICBlbmRDZWxsRWRpdChyb3dLZXk6IG51bWJlciB8IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcsIGNhbmNlbENoYW5nZXM/OiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZW5kQ2VsbEVkaXQnLCByb3dLZXksIGRhdGFGaWVsZCwgY2FuY2VsQ2hhbmdlcyk7XG4gICB9XG5cbiAgIGV4cG9ydERhdGEoZXhwb3J0RGF0YVR5cGU6IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2V4cG9ydERhdGEnLCBleHBvcnREYXRhVHlwZSk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZDogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldENvbHVtblByb3BlcnR5JywgZGF0YUZpZWxkLCBwcm9wZXJ0eU5hbWUpO1xuICAgfVxuXG4gICBnb1RvUGFnZShwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dvVG9QYWdlJywgcGFnZUluZGV4KTtcbiAgIH1cblxuICAgZ29Ub1ByZXZQYWdlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dvVG9QcmV2UGFnZScpO1xuICAgfVxuXG4gICBnb1RvTmV4dFBhZ2UoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ29Ub05leHRQYWdlJyk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGlvbigpOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0U2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGdldEtleShyb3c6IGFueSk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldEtleScsIHJvdyk7XG4gICB9XG5cbiAgIGdldFJvdyhyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IGpxd2lkZ2V0cy5UcmVlR3JpZEdldFJvdyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldFJvdycsIHJvd0tleSk7XG4gICB9XG5cbiAgIGdldFJvd3MoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVHcmlkR2V0Um93PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldFJvd3MnKTtcbiAgIH1cblxuICAgZ2V0Q2hlY2tlZFJvd3MoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVHcmlkR2V0Um93PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldENoZWNrZWRSb3dzJyk7XG4gICB9XG5cbiAgIGdldFZpZXcoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVHcmlkR2V0Um93PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldFZpZXcnKTtcbiAgIH1cblxuICAgZ2V0Q2VsbFZhbHVlKHJvd0tleTogbnVtYmVyIHwgc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldENlbGxWYWx1ZScsIHJvd0tleSwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgaGlkZUNvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2hpZGVDb2x1bW4nLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBpc0JpbmRpbmdDb21wbGV0ZWQoKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2lzQmluZGluZ0NvbXBsZXRlZCcpO1xuICAgfVxuXG4gICBsb2NrUm93KHJvd0tleTogc3RyaW5nIHwgbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2xvY2tSb3cnLCByb3dLZXkpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZW1vdmVGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW1vdmVGaWx0ZXInLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBzY3JvbGxPZmZzZXQodG9wPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyKToganF3aWRnZXRzLlRyZWVHcmlkU2Nyb2xsT2Zmc2V0IHtcbiAgICAgIGlmICh0b3AgIT09IHVuZGVmaW5lZCB8fCBsZWZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2Nyb2xsT2Zmc2V0JywgdG9wLCBsZWZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzY3JvbGxPZmZzZXQnKTtcbiAgICAgIH1cbiAgIH07XG5cbiAgIHNldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZDogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlWYWx1ZTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2V0Q29sdW1uUHJvcGVydHknLCBkYXRhRmllbGQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk7XG4gICB9XG5cbiAgIHNob3dDb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93Q29sdW1uJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgc2VsZWN0Um93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2VsZWN0Um93Jywgcm93SWQpO1xuICAgfVxuXG4gICBzZXRDZWxsVmFsdWUocm93SWQ6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcsIGNlbGxWYWx1ZTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2V0Q2VsbFZhbHVlJywgcm93SWQsIGRhdGFGaWVsZCwgY2VsbFZhbHVlKTtcbiAgIH1cblxuICAgc29ydEJ5KGRhdGFGaWVsZDogbnVtYmVyIHwgc3RyaW5nLCBzb3J0T3JkZXI/OiAnYXNjJyB8ICdkZXNjJyB8IG51bGwpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzb3J0QnknLCBkYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICB9XG5cbiAgIHVwZGF0aW5nKCk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd1cGRhdGluZycpO1xuICAgfVxuXG4gICB1cGRhdGVCb3VuZERhdGEoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndXBkYXRlQm91bmREYXRhJyk7XG4gICB9XG5cbiAgIHVuc2VsZWN0Um93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndW5zZWxlY3RSb3cnLCByb3dJZCk7XG4gICB9XG5cbiAgIHVuY2hlY2tSb3cocm93SWQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3VuY2hlY2tSb3cnLCByb3dJZCk7XG4gICB9XG5cbiAgIHVwZGF0ZVJvdyhyb3dJZDogbnVtYmVyIHwgc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd1cGRhdGVSb3cnLCByb3dJZCwgZGF0YSk7XG4gICB9XG5cbiAgIHVubG9ja1Jvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3VubG9ja1JvdycsIHJvd0lkKTtcbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlR3JpZENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkJpbmRpbmdDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxCZWdpbkVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsRW5kRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxWYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2x1bW5SZXNpemVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29sdW1uUmVvcmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QYWdlU2l6ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd0RvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93VW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dCZWdpbkVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dFbmRFZGl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93RXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93Q29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dDaGVjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd1VuY2hlY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ0NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbEJlZ2luRWRpdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbEJlZ2luRWRpdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsRW5kRWRpdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbEVuZEVkaXQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbFZhbHVlQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbFZhbHVlQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2x1bW5SZXNpemVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2x1bW5SZXNpemVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtblJlb3JkZXJlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sdW1uUmVvcmRlcmVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2ZpbHRlcicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRmlsdGVyLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3BhZ2VDaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QYWdlQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwYWdlU2l6ZUNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBhZ2VTaXplQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93Q2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93RG91YmxlQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd0RvdWJsZUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd1NlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93U2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd1Vuc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dVbnNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dCZWdpbkVkaXQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd0JlZ2luRWRpdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dFbmRFZGl0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dFbmRFZGl0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd0V4cGFuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93RXhwYW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd0NvbGxhcHNlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dDb2xsYXBzZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dDaGVjaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93Q2hlY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93VW5jaGVjaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93VW5jaGVjay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Tb3J0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhUcmVlR3JpZENvbXBvbmVudFxuIl19