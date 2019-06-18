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
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let jqxTreeGridComponent = class jqxTreeGridComponent {
    constructor(containerElement) {
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
    ngOnInit() {
    }
    ;
    ngAfterViewInit() {
        let children = JQXLite(this.elementRef.nativeElement.children).find('tr');
        let html = '';
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            let result = JQXLite.jqx.parseSourceTag(this.container);
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
    }
    ;
    ngAfterViewChecked() {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                let result = JQXLite.jqx.parseSourceTag(this.container);
                let columns = this.host.jqxGrid('columns');
                if (columns.length === 0) {
                    this.host.jqxGrid({ source: result.source, columns: result.columns });
                }
                else {
                    this.host.jqxGrid({ source: result.source });
                }
            }
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
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
    }
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    createComponent(options) {
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
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTreeGrid('setOptions', options);
    }
    // jqxTreeGridComponent properties
    altRows(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('altRows', arg);
        }
        else {
            return this.host.jqxTreeGrid('altRows');
        }
    }
    autoRowHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('autoRowHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('autoRowHeight');
        }
    }
    aggregatesHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('aggregatesHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('aggregatesHeight');
        }
    }
    autoShowLoadElement(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('autoShowLoadElement', arg);
        }
        else {
            return this.host.jqxTreeGrid('autoShowLoadElement');
        }
    }
    checkboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('checkboxes', arg);
        }
        else {
            return this.host.jqxTreeGrid('checkboxes');
        }
    }
    columnsHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsHeight');
        }
    }
    columns(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columns', arg);
        }
        else {
            return this.host.jqxTreeGrid('columns');
        }
    }
    columnGroups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnGroups', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnGroups');
        }
    }
    columnsResize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsResize', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsResize');
        }
    }
    columnsReorder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsReorder', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsReorder');
        }
    }
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('disabled', arg);
        }
        else {
            return this.host.jqxTreeGrid('disabled');
        }
    }
    editable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('editable', arg);
        }
        else {
            return this.host.jqxTreeGrid('editable');
        }
    }
    editSettings(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('editSettings', arg);
        }
        else {
            return this.host.jqxTreeGrid('editSettings');
        }
    }
    exportSettings(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('exportSettings', arg);
        }
        else {
            return this.host.jqxTreeGrid('exportSettings');
        }
    }
    enableHover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('enableHover', arg);
        }
        else {
            return this.host.jqxTreeGrid('enableHover');
        }
    }
    enableBrowserSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('enableBrowserSelection', arg);
        }
        else {
            return this.host.jqxTreeGrid('enableBrowserSelection');
        }
    }
    filterable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterable', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterable');
        }
    }
    filterHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterHeight');
        }
    }
    filterMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterMode');
        }
    }
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('height', arg);
        }
        else {
            return this.host.jqxTreeGrid('height');
        }
    }
    hierarchicalCheckboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('hierarchicalCheckboxes', arg);
        }
        else {
            return this.host.jqxTreeGrid('hierarchicalCheckboxes');
        }
    }
    icons(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('icons', arg);
        }
        else {
            return this.host.jqxTreeGrid('icons');
        }
    }
    incrementalSearch(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTreeGrid('incrementalSearch');
        }
    }
    localization(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('localization', arg);
        }
        else {
            return this.host.jqxTreeGrid('localization');
        }
    }
    pagerHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerHeight');
        }
    }
    pageSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSize', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSize');
        }
    }
    pageSizeOptions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSizeOptions', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSizeOptions');
        }
    }
    pageable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageable', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageable');
        }
    }
    pagerPosition(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerPosition', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerPosition');
        }
    }
    pagerMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerMode');
        }
    }
    pageSizeMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSizeMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSizeMode');
        }
    }
    pagerButtonsCount(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerButtonsCount', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerButtonsCount');
        }
    }
    pagerRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerRenderer', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerRenderer');
        }
    }
    ready(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('ready', arg);
        }
        else {
            return this.host.jqxTreeGrid('ready');
        }
    }
    rowDetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rowDetails', arg);
        }
        else {
            return this.host.jqxTreeGrid('rowDetails');
        }
    }
    rowDetailsRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rowDetailsRenderer', arg);
        }
        else {
            return this.host.jqxTreeGrid('rowDetailsRenderer');
        }
    }
    renderToolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('renderToolbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('renderToolbar');
        }
    }
    renderStatusBar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('renderStatusBar', arg);
        }
        else {
            return this.host.jqxTreeGrid('renderStatusBar');
        }
    }
    rendering(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rendering', arg);
        }
        else {
            return this.host.jqxTreeGrid('rendering');
        }
    }
    rendered(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rendered', arg);
        }
        else {
            return this.host.jqxTreeGrid('rendered');
        }
    }
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rtl', arg);
        }
        else {
            return this.host.jqxTreeGrid('rtl');
        }
    }
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('source', arg);
        }
        else {
            return this.host.jqxTreeGrid('source');
        }
    }
    sortable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('sortable', arg);
        }
        else {
            return this.host.jqxTreeGrid('sortable');
        }
    }
    showAggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showAggregates', arg);
        }
        else {
            return this.host.jqxTreeGrid('showAggregates');
        }
    }
    showSubAggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showSubAggregates', arg);
        }
        else {
            return this.host.jqxTreeGrid('showSubAggregates');
        }
    }
    showToolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showToolbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('showToolbar');
        }
    }
    showStatusbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showStatusbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('showStatusbar');
        }
    }
    statusBarHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('statusBarHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('statusBarHeight');
        }
    }
    scrollBarSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('scrollBarSize', arg);
        }
        else {
            return this.host.jqxTreeGrid('scrollBarSize');
        }
    }
    selectionMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('selectionMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('selectionMode');
        }
    }
    showHeader(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showHeader', arg);
        }
        else {
            return this.host.jqxTreeGrid('showHeader');
        }
    }
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('theme', arg);
        }
        else {
            return this.host.jqxTreeGrid('theme');
        }
    }
    toolbarHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('toolbarHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('toolbarHeight');
        }
    }
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('width', arg);
        }
        else {
            return this.host.jqxTreeGrid('width');
        }
    }
    virtualModeCreateRecords(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('virtualModeCreateRecords', arg);
        }
        else {
            return this.host.jqxTreeGrid('virtualModeCreateRecords');
        }
    }
    virtualModeRecordCreating(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('virtualModeRecordCreating', arg);
        }
        else {
            return this.host.jqxTreeGrid('virtualModeRecordCreating');
        }
    }
    // jqxTreeGridComponent functions
    addRow(rowKey, rowData, rowPosition, parent) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);
    }
    addFilter(dataField, filerGroup) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addFilter', dataField, filerGroup);
    }
    applyFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('applyFilters');
    }
    beginUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginUpdate');
    }
    beginRowEdit(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginRowEdit', rowKey);
    }
    beginCellEdit(rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginCellEdit', rowKey, dataField);
    }
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearSelection');
    }
    clearFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearFilters');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clear');
    }
    checkRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('checkRow', rowKey);
    }
    collapseRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseRow', rowKey);
    }
    collapseAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseAll');
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('destroy');
    }
    deleteRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('deleteRow', rowKey);
    }
    expandRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandRow', rowKey);
    }
    expandAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandAll');
    }
    endUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endUpdate');
    }
    ensureRowVisible(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('ensureRowVisible', rowKey);
    }
    endRowEdit(rowKey, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endRowEdit', rowKey, cancelChanges);
    }
    endCellEdit(rowKey, dataField, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);
    }
    exportData(exportDataType) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('exportData', exportDataType);
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('focus');
    }
    getColumnProperty(dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getColumnProperty', dataField, propertyName);
    }
    goToPage(pageIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPage', pageIndex);
    }
    goToPrevPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPrevPage');
    }
    goToNextPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToNextPage');
    }
    getSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getSelection');
    }
    getKey(row) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getKey', row);
    }
    getRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRow', rowKey);
    }
    getRows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRows');
    }
    getCheckedRows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCheckedRows');
    }
    getView() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getView');
    }
    getCellValue(rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCellValue', rowKey, dataField);
    }
    hideColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('hideColumn', dataField);
    }
    isBindingCompleted() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('isBindingCompleted');
    }
    lockRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('lockRow', rowKey);
    }
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('refresh');
    }
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('render');
    }
    removeFilter(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('removeFilter', dataField);
    }
    scrollOffset(top, left) {
        if (top !== undefined || left !== undefined) {
            this.host.jqxTreeGrid('scrollOffset', top, left);
        }
        else {
            return this.host.jqxTreeGrid('scrollOffset');
        }
    }
    ;
    setColumnProperty(dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);
    }
    showColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('showColumn', dataField);
    }
    selectRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('selectRow', rowId);
    }
    setCellValue(rowId, dataField, cellValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setCellValue', rowId, dataField, cellValue);
    }
    sortBy(dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('sortBy', dataField, sortOrder);
    }
    updating() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('updating');
    }
    updateBoundData() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateBoundData');
    }
    unselectRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unselectRow', rowId);
    }
    uncheckRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('uncheckRow', rowId);
    }
    updateRow(rowId, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateRow', rowId, data);
    }
    unlockRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unlockRow', rowId);
    }
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('cellBeginEdit', (eventData) => { this.onCellBeginEdit.emit(eventData); });
        this.host.on('cellEndEdit', (eventData) => { this.onCellEndEdit.emit(eventData); });
        this.host.on('cellValueChanged', (eventData) => { this.onCellValueChanged.emit(eventData); });
        this.host.on('columnResized', (eventData) => { this.onColumnResized.emit(eventData); });
        this.host.on('columnReordered', (eventData) => { this.onColumnReordered.emit(eventData); });
        this.host.on('filter', (eventData) => { this.onFilter.emit(eventData); });
        this.host.on('pageChanged', (eventData) => { this.onPageChanged.emit(eventData); });
        this.host.on('pageSizeChanged', (eventData) => { this.onPageSizeChanged.emit(eventData); });
        this.host.on('rowClick', (eventData) => { this.onRowClick.emit(eventData); });
        this.host.on('rowDoubleClick', (eventData) => { this.onRowDoubleClick.emit(eventData); });
        this.host.on('rowSelect', (eventData) => { this.onRowSelect.emit(eventData); });
        this.host.on('rowUnselect', (eventData) => { this.onRowUnselect.emit(eventData); });
        this.host.on('rowBeginEdit', (eventData) => { this.onRowBeginEdit.emit(eventData); });
        this.host.on('rowEndEdit', (eventData) => { this.onRowEndEdit.emit(eventData); });
        this.host.on('rowExpand', (eventData) => { this.onRowExpand.emit(eventData); });
        this.host.on('rowCollapse', (eventData) => { this.onRowCollapse.emit(eventData); });
        this.host.on('rowCheck', (eventData) => { this.onRowCheck.emit(eventData); });
        this.host.on('rowUncheck', (eventData) => { this.onRowUncheck.emit(eventData); });
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
    }
}; //jqxTreeGridComponent
tslib_1.__decorate([
    Input('altRows'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrAltRows", void 0);
tslib_1.__decorate([
    Input('autoRowHeight'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrAutoRowHeight", void 0);
tslib_1.__decorate([
    Input('aggregatesHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrAggregatesHeight", void 0);
tslib_1.__decorate([
    Input('autoShowLoadElement'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrAutoShowLoadElement", void 0);
tslib_1.__decorate([
    Input('checkboxes'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrCheckboxes", void 0);
tslib_1.__decorate([
    Input('columnsHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrColumnsHeight", void 0);
tslib_1.__decorate([
    Input('columns'),
    tslib_1.__metadata("design:type", Array)
], jqxTreeGridComponent.prototype, "attrColumns", void 0);
tslib_1.__decorate([
    Input('columnGroups'),
    tslib_1.__metadata("design:type", Array)
], jqxTreeGridComponent.prototype, "attrColumnGroups", void 0);
tslib_1.__decorate([
    Input('columnsResize'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrColumnsResize", void 0);
tslib_1.__decorate([
    Input('columnsReorder'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrColumnsReorder", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('editable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrEditable", void 0);
tslib_1.__decorate([
    Input('editSettings'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "attrEditSettings", void 0);
tslib_1.__decorate([
    Input('exportSettings'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "attrExportSettings", void 0);
tslib_1.__decorate([
    Input('enableHover'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrEnableHover", void 0);
tslib_1.__decorate([
    Input('enableBrowserSelection'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrEnableBrowserSelection", void 0);
tslib_1.__decorate([
    Input('filterable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrFilterable", void 0);
tslib_1.__decorate([
    Input('filterHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrFilterHeight", void 0);
tslib_1.__decorate([
    Input('filterMode'),
    tslib_1.__metadata("design:type", String)
], jqxTreeGridComponent.prototype, "attrFilterMode", void 0);
tslib_1.__decorate([
    Input('hierarchicalCheckboxes'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrHierarchicalCheckboxes", void 0);
tslib_1.__decorate([
    Input('icons'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "attrIcons", void 0);
tslib_1.__decorate([
    Input('incrementalSearch'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrIncrementalSearch", void 0);
tslib_1.__decorate([
    Input('localization'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "attrLocalization", void 0);
tslib_1.__decorate([
    Input('pagerHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrPagerHeight", void 0);
tslib_1.__decorate([
    Input('pageSize'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrPageSize", void 0);
tslib_1.__decorate([
    Input('pageSizeOptions'),
    tslib_1.__metadata("design:type", Array)
], jqxTreeGridComponent.prototype, "attrPageSizeOptions", void 0);
tslib_1.__decorate([
    Input('pageable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrPageable", void 0);
tslib_1.__decorate([
    Input('pagerPosition'),
    tslib_1.__metadata("design:type", String)
], jqxTreeGridComponent.prototype, "attrPagerPosition", void 0);
tslib_1.__decorate([
    Input('pagerMode'),
    tslib_1.__metadata("design:type", String)
], jqxTreeGridComponent.prototype, "attrPagerMode", void 0);
tslib_1.__decorate([
    Input('pageSizeMode'),
    tslib_1.__metadata("design:type", String)
], jqxTreeGridComponent.prototype, "attrPageSizeMode", void 0);
tslib_1.__decorate([
    Input('pagerButtonsCount'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrPagerButtonsCount", void 0);
tslib_1.__decorate([
    Input('pagerRenderer'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrPagerRenderer", void 0);
tslib_1.__decorate([
    Input('ready'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrReady", void 0);
tslib_1.__decorate([
    Input('rowDetails'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrRowDetails", void 0);
tslib_1.__decorate([
    Input('rowDetailsRenderer'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrRowDetailsRenderer", void 0);
tslib_1.__decorate([
    Input('renderToolbar'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrRenderToolbar", void 0);
tslib_1.__decorate([
    Input('renderStatusBar'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrRenderStatusBar", void 0);
tslib_1.__decorate([
    Input('rendering'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrRendering", void 0);
tslib_1.__decorate([
    Input('rendered'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrRendered", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('source'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "attrSource", void 0);
tslib_1.__decorate([
    Input('sortable'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrSortable", void 0);
tslib_1.__decorate([
    Input('showAggregates'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrShowAggregates", void 0);
tslib_1.__decorate([
    Input('showSubAggregates'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrShowSubAggregates", void 0);
tslib_1.__decorate([
    Input('showToolbar'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrShowToolbar", void 0);
tslib_1.__decorate([
    Input('showStatusbar'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrShowStatusbar", void 0);
tslib_1.__decorate([
    Input('statusBarHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrStatusBarHeight", void 0);
tslib_1.__decorate([
    Input('scrollBarSize'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrScrollBarSize", void 0);
tslib_1.__decorate([
    Input('selectionMode'),
    tslib_1.__metadata("design:type", String)
], jqxTreeGridComponent.prototype, "attrSelectionMode", void 0);
tslib_1.__decorate([
    Input('showHeader'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "attrShowHeader", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxTreeGridComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('toolbarHeight'),
    tslib_1.__metadata("design:type", Number)
], jqxTreeGridComponent.prototype, "attrToolbarHeight", void 0);
tslib_1.__decorate([
    Input('virtualModeCreateRecords'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrVirtualModeCreateRecords", void 0);
tslib_1.__decorate([
    Input('virtualModeRecordCreating'),
    tslib_1.__metadata("design:type", Function)
], jqxTreeGridComponent.prototype, "attrVirtualModeRecordCreating", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTreeGridComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onBindingComplete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onCellBeginEdit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onCellEndEdit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onCellValueChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onColumnResized", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onColumnReordered", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onFilter", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onPageChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onPageSizeChanged", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowDoubleClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowSelect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowUnselect", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowBeginEdit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowEndEdit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowExpand", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowCollapse", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowCheck", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onRowUncheck", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTreeGridComponent.prototype, "onSort", void 0);
jqxTreeGridComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxTreeGrid',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxTreeGridComponent);
export { jqxTreeGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0cmVlZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXh0cmVlZ3JpZC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4dHJlZWdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQW1DLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTlJLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBb0U5QixZQUFZLGdCQUE0QjtRQVRsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsa0JBQWtCLEVBQUMscUJBQXFCLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsd0JBQXdCLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsbUJBQW1CLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsZUFB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QUU7OzBEQUFtQztBQUNsQztJQUFULE1BQU0sRUFBRTs7b0RBQTZCO0FBcjVDNUIsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxzQ0FBc0M7S0FDbkQsQ0FBQzs2Q0FzRStCLFVBQVU7R0FwRTlCLG9CQUFvQixDQTg2Q2hDO1NBOTZDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFRyZWVHcmlkJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhUcmVlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZFxue1xuICAgQElucHV0KCdhbHRSb3dzJykgYXR0ckFsdFJvd3M6IGJvb2xlYW47XG4gICBASW5wdXQoJ2F1dG9Sb3dIZWlnaHQnKSBhdHRyQXV0b1Jvd0hlaWdodDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYWdncmVnYXRlc0hlaWdodCcpIGF0dHJBZ2dyZWdhdGVzSGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ2F1dG9TaG93TG9hZEVsZW1lbnQnKSBhdHRyQXV0b1Nob3dMb2FkRWxlbWVudDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY2hlY2tib3hlcycpIGF0dHJDaGVja2JveGVzOiBib29sZWFuO1xuICAgQElucHV0KCdjb2x1bW5zSGVpZ2h0JykgYXR0ckNvbHVtbnNIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnY29sdW1ucycpIGF0dHJDb2x1bW5zOiBBcnJheTxhbnk+O1xuICAgQElucHV0KCdjb2x1bW5Hcm91cHMnKSBhdHRyQ29sdW1uR3JvdXBzOiBBcnJheTxhbnk+O1xuICAgQElucHV0KCdjb2x1bW5zUmVzaXplJykgYXR0ckNvbHVtbnNSZXNpemU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNSZW9yZGVyJykgYXR0ckNvbHVtbnNSZW9yZGVyOiBib29sZWFuO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWRpdGFibGUnKSBhdHRyRWRpdGFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VkaXRTZXR0aW5ncycpIGF0dHJFZGl0U2V0dGluZ3M6IGpxd2lkZ2V0cy5UcmVlR3JpZEVkaXRTZXR0aW5ncztcbiAgIEBJbnB1dCgnZXhwb3J0U2V0dGluZ3MnKSBhdHRyRXhwb3J0U2V0dGluZ3M6IGpxd2lkZ2V0cy5UcmVlR3JpZEV4cG9ydFNldHRpbmdzO1xuICAgQElucHV0KCdlbmFibGVIb3ZlcicpIGF0dHJFbmFibGVIb3ZlcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlQnJvd3NlclNlbGVjdGlvbicpIGF0dHJFbmFibGVCcm93c2VyU2VsZWN0aW9uOiBib29sZWFuO1xuICAgQElucHV0KCdmaWx0ZXJhYmxlJykgYXR0ckZpbHRlcmFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZpbHRlckhlaWdodCcpIGF0dHJGaWx0ZXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnZmlsdGVyTW9kZScpIGF0dHJGaWx0ZXJNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2hpZXJhcmNoaWNhbENoZWNrYm94ZXMnKSBhdHRySGllcmFyY2hpY2FsQ2hlY2tib3hlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnaWNvbnMnKSBhdHRySWNvbnM6IGFueTtcbiAgIEBJbnB1dCgnaW5jcmVtZW50YWxTZWFyY2gnKSBhdHRySW5jcmVtZW50YWxTZWFyY2g6IGJvb2xlYW47XG4gICBASW5wdXQoJ2xvY2FsaXphdGlvbicpIGF0dHJMb2NhbGl6YXRpb246IGFueTtcbiAgIEBJbnB1dCgncGFnZXJIZWlnaHQnKSBhdHRyUGFnZXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZVNpemUnKSBhdHRyUGFnZVNpemU6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZVNpemVPcHRpb25zJykgYXR0clBhZ2VTaXplT3B0aW9uczogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPjtcbiAgIEBJbnB1dCgncGFnZWFibGUnKSBhdHRyUGFnZWFibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ3BhZ2VyUG9zaXRpb24nKSBhdHRyUGFnZXJQb3NpdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdwYWdlck1vZGUnKSBhdHRyUGFnZXJNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BhZ2VTaXplTW9kZScpIGF0dHJQYWdlU2l6ZU1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgncGFnZXJCdXR0b25zQ291bnQnKSBhdHRyUGFnZXJCdXR0b25zQ291bnQ6IG51bWJlcjtcbiAgIEBJbnB1dCgncGFnZXJSZW5kZXJlcicpIGF0dHJQYWdlclJlbmRlcmVyOiAoKSA9PiBhbnk7XG4gICBASW5wdXQoJ3JlYWR5JykgYXR0clJlYWR5OiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdyb3dEZXRhaWxzJykgYXR0clJvd0RldGFpbHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Jvd0RldGFpbHNSZW5kZXJlcicpIGF0dHJSb3dEZXRhaWxzUmVuZGVyZXI6IChrZXk6IGpxd2lkZ2V0cy5UcmVlR3JpZFJvd0RldGFpbHNSZW5kZXJlclsna2V5J10sIGRhdGFSb3c6IGpxd2lkZ2V0cy5UcmVlR3JpZFJvd0RldGFpbHNSZW5kZXJlclsnZGF0YVJvdyddKSA9PiBhbnk7XG4gICBASW5wdXQoJ3JlbmRlclRvb2xiYXInKSBhdHRyUmVuZGVyVG9vbGJhcjogKHRvb2xCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJUb29sYmFyWyd0b29sYmFyJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlclN0YXR1c0JhcicpIGF0dHJSZW5kZXJTdGF0dXNCYXI6IChzdGF0dXNCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJTdGF0dXNCYXJbJ3N0YXR1c2JhciddKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJpbmcnKSBhdHRyUmVuZGVyaW5nOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZW5kZXJlZCcpIGF0dHJSZW5kZXJlZDogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncnRsJykgYXR0clJ0bDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc291cmNlJykgYXR0clNvdXJjZTogYW55O1xuICAgQElucHV0KCdzb3J0YWJsZScpIGF0dHJTb3J0YWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd0FnZ3JlZ2F0ZXMnKSBhdHRyU2hvd0FnZ3JlZ2F0ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dTdWJBZ2dyZWdhdGVzJykgYXR0clNob3dTdWJBZ2dyZWdhdGVzOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93VG9vbGJhcicpIGF0dHJTaG93VG9vbGJhcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd1N0YXR1c2JhcicpIGF0dHJTaG93U3RhdHVzYmFyOiBib29sZWFuO1xuICAgQElucHV0KCdzdGF0dXNCYXJIZWlnaHQnKSBhdHRyU3RhdHVzQmFySGVpZ2h0OiBudW1iZXI7XG4gICBASW5wdXQoJ3Njcm9sbEJhclNpemUnKSBhdHRyU2Nyb2xsQmFyU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdzZWxlY3Rpb25Nb2RlJykgYXR0clNlbGVjdGlvbk1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnc2hvd0hlYWRlcicpIGF0dHJTaG93SGVhZGVyOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd0b29sYmFySGVpZ2h0JykgYXR0clRvb2xiYXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgndmlydHVhbE1vZGVDcmVhdGVSZWNvcmRzJykgYXR0clZpcnR1YWxNb2RlQ3JlYXRlUmVjb3JkczogKGV4cGFuZGVkUmVjb3JkPzogYW55LCBkb25lPzogYW55KSA9PiB2b2lkO1xuICAgQElucHV0KCd2aXJ0dWFsTW9kZVJlY29yZENyZWF0aW5nJykgYXR0clZpcnR1YWxNb2RlUmVjb3JkQ3JlYXRpbmc6IChyZWNvcmQ/OiBhbnkpID0+IGFueTtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhbHRSb3dzJywnYXV0b1Jvd0hlaWdodCcsJ2FnZ3JlZ2F0ZXNIZWlnaHQnLCdhdXRvU2hvd0xvYWRFbGVtZW50JywnY2hlY2tib3hlcycsJ2NvbHVtbnNIZWlnaHQnLCdjb2x1bW5zJywnY29sdW1uR3JvdXBzJywnY29sdW1uc1Jlc2l6ZScsJ2NvbHVtbnNSZW9yZGVyJywnZGlzYWJsZWQnLCdlZGl0YWJsZScsJ2VkaXRTZXR0aW5ncycsJ2V4cG9ydFNldHRpbmdzJywnZW5hYmxlSG92ZXInLCdlbmFibGVCcm93c2VyU2VsZWN0aW9uJywnZmlsdGVyYWJsZScsJ2ZpbHRlckhlaWdodCcsJ2ZpbHRlck1vZGUnLCdoZWlnaHQnLCdoaWVyYXJjaGljYWxDaGVja2JveGVzJywnaWNvbnMnLCdpbmNyZW1lbnRhbFNlYXJjaCcsJ2xvY2FsaXphdGlvbicsJ3BhZ2VySGVpZ2h0JywncGFnZVNpemUnLCdwYWdlU2l6ZU9wdGlvbnMnLCdwYWdlYWJsZScsJ3BhZ2VyUG9zaXRpb24nLCdwYWdlck1vZGUnLCdwYWdlU2l6ZU1vZGUnLCdwYWdlckJ1dHRvbnNDb3VudCcsJ3BhZ2VyUmVuZGVyZXInLCdyZWFkeScsJ3Jvd0RldGFpbHMnLCdyb3dEZXRhaWxzUmVuZGVyZXInLCdyZW5kZXJUb29sYmFyJywncmVuZGVyU3RhdHVzQmFyJywncmVuZGVyaW5nJywncmVuZGVyZWQnLCdydGwnLCdzb3VyY2UnLCdzb3J0YWJsZScsJ3Nob3dBZ2dyZWdhdGVzJywnc2hvd1N1YkFnZ3JlZ2F0ZXMnLCdzaG93VG9vbGJhcicsJ3Nob3dTdGF0dXNiYXInLCdzdGF0dXNCYXJIZWlnaHQnLCdzY3JvbGxCYXJTaXplJywnc2VsZWN0aW9uTW9kZScsJ3Nob3dIZWFkZXInLCd0aGVtZScsJ3Rvb2xiYXJIZWlnaHQnLCd3aWR0aCcsJ3ZpcnR1YWxNb2RlQ3JlYXRlUmVjb3JkcycsJ3ZpcnR1YWxNb2RlUmVjb3JkQ3JlYXRpbmcnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4VHJlZUdyaWQ7XG5cbiAgIGNvbnRlbnQ6IFN0cmluZztcbiAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgfVxuXG4gICBuZ09uSW5pdCgpIHtcbiAgIH07IFxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgIGxldCBjaGlsZHJlbiA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4pLmZpbmQoJ3RyJyk7IFxuICAgICAgIGxldCBodG1sID0gJyc7IFxuICAgICAgIGxldCBvcHRpb25zID0ge307IFxuXG4gICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgaHRtbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgIHRoaXMuY29udGVudCA9IGh0bWw7XG5cbiAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpRWExpdGUuanF4LnBhcnNlU291cmNlVGFnKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgICAgaWYgKHRoaXNbJ2F0dHJDb2x1bW5zJ10gIT09IHVuZGVmaW5lZCkgeyAgXG47ICAgICAgICAgICAgICAgIG9wdGlvbnNbJ3NvdXJjZSddID0gcmVzdWx0LnNvdXJjZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgIH1cbiAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuc291cmNlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnNbJ2NvbHVtbnMnXSA9IHJlc3VsdC5jb2x1bW5zO1xuICAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICBpZiAodGhpcy5jb250ZW50ICE9PSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGFpbmVyLmlubmVySFRNTDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBKUVhMaXRlLmpxeC5wYXJzZVNvdXJjZVRhZyh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5ob3N0LmpxeEdyaWQoJ2NvbHVtbnMnKTtcblxuICAgICAgICAgICAgaWYgKGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoeyBzb3VyY2U6IHJlc3VsdC5zb3VyY2UsIGNvbHVtbnM6IHJlc3VsdC5jb2x1bW5zIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEdyaWQoeyBzb3VyY2U6IHJlc3VsdC5zb3VyY2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgfTtcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4VHJlZUdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4VHJlZUdyaWQnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4VHJlZUdyaWRDb21wb25lbnQgcHJvcGVydGllc1xuICAgYWx0Um93cyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYWx0Um93cycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2FsdFJvd3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b1Jvd0hlaWdodChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYXV0b1Jvd0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2F1dG9Sb3dIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWdncmVnYXRlc0hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2FnZ3JlZ2F0ZXNIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhZ2dyZWdhdGVzSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGF1dG9TaG93TG9hZEVsZW1lbnQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2F1dG9TaG93TG9hZEVsZW1lbnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhdXRvU2hvd0xvYWRFbGVtZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNoZWNrYm94ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NoZWNrYm94ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjaGVja2JveGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zSGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1uc0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zKGFyZz86IEFycmF5PGFueT4pOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5Hcm91cHMoYXJnPzogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbHVtbkdyb3VwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbHVtbkdyb3VwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zUmVzaXplKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zUmVzaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1uc1Jlc2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2x1bW5zUmVvcmRlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1uc1Jlb3JkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zUmVvcmRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0YWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZWRpdGFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlZGl0YWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBlZGl0U2V0dGluZ3MoYXJnPzoganF3aWRnZXRzLlRyZWVHcmlkRWRpdFNldHRpbmdzKToganF3aWRnZXRzLlRyZWVHcmlkRWRpdFNldHRpbmdzIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlZGl0U2V0dGluZ3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlZGl0U2V0dGluZ3MnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZXhwb3J0U2V0dGluZ3MoYXJnPzoganF3aWRnZXRzLlRyZWVHcmlkRXhwb3J0U2V0dGluZ3MpOiBqcXdpZGdldHMuVHJlZUdyaWRFeHBvcnRTZXR0aW5ncyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZXhwb3J0U2V0dGluZ3MnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdleHBvcnRTZXR0aW5ncycpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVIb3Zlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZW5hYmxlSG92ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmFibGVIb3ZlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVCcm93c2VyU2VsZWN0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmFibGVCcm93c2VyU2VsZWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZW5hYmxlQnJvd3NlclNlbGVjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZmlsdGVyYWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmlsdGVyTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ZpbHRlck1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJNb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhlaWdodChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBoaWVyYXJjaGljYWxDaGVja2JveGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdoaWVyYXJjaGljYWxDaGVja2JveGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaGllcmFyY2hpY2FsQ2hlY2tib3hlcycpO1xuICAgICAgfVxuICAgfVxuXG4gICBpY29ucyhhcmc/OiBhbnkpOiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ljb25zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaWNvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5jcmVtZW50YWxTZWFyY2goYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2luY3JlbWVudGFsU2VhcmNoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaW5jcmVtZW50YWxTZWFyY2gnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbG9jYWxpemF0aW9uKGFyZz86IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnbG9jYWxpemF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnbG9jYWxpemF0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VySGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZXJIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlU2l6ZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZVNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZVNpemVPcHRpb25zKGFyZz86IEFycmF5PG51bWJlciB8IHN0cmluZz4pOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZU9wdGlvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZU9wdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZWFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZWFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJQb3NpdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyUG9zaXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlclBvc2l0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VyTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlU2l6ZU1vZGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZU1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZU1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJCdXR0b25zQ291bnQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlckJ1dHRvbnNDb3VudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyQnV0dG9uc0NvdW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VyUmVuZGVyZXIoYXJnPzogKCkgPT4gYW55KTogKCkgPT4gYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlclJlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZXJSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZWFkeShhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncmVhZHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZWFkeScpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dEZXRhaWxzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyb3dEZXRhaWxzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncm93RGV0YWlscycpO1xuICAgICAgfVxuICAgfVxuXG4gICByb3dEZXRhaWxzUmVuZGVyZXIoYXJnPzogKGtleToganF3aWRnZXRzLlRyZWVHcmlkUm93RGV0YWlsc1JlbmRlcmVyWydrZXknXSwgZGF0YVJvdzoganF3aWRnZXRzLlRyZWVHcmlkUm93RGV0YWlsc1JlbmRlcmVyWydkYXRhUm93J10pID0+IGFueSk6IChrZXk6IGpxd2lkZ2V0cy5UcmVlR3JpZFJvd0RldGFpbHNSZW5kZXJlclsna2V5J10sIGRhdGFSb3c6IGpxd2lkZ2V0cy5UcmVlR3JpZFJvd0RldGFpbHNSZW5kZXJlclsnZGF0YVJvdyddKSA9PiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Jvd0RldGFpbHNSZW5kZXJlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Jvd0RldGFpbHNSZW5kZXJlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJUb29sYmFyKGFyZz86ICh0b29sQmFyPzoganF3aWRnZXRzLlRyZWVHcmlkUmVuZGVyVG9vbGJhclsndG9vbGJhciddKSA9PiB2b2lkKTogKHRvb2xCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJUb29sYmFyWyd0b29sYmFyJ10pID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlclRvb2xiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJUb29sYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlclN0YXR1c0Jhcihhcmc/OiAoc3RhdHVzQmFyPzoganF3aWRnZXRzLlRyZWVHcmlkUmVuZGVyU3RhdHVzQmFyWydzdGF0dXNiYXInXSkgPT4gdm9pZCk6IChzdGF0dXNCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJTdGF0dXNCYXJbJ3N0YXR1c2JhciddKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJTdGF0dXNCYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJTdGF0dXNCYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyaW5nKGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJpbmcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyZWQoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlcmVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncmVuZGVyZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdydGwnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc291cmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc291cmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNvcnRhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzb3J0YWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NvcnRhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dBZ2dyZWdhdGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93QWdncmVnYXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dBZ2dyZWdhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dTdWJBZ2dyZWdhdGVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93U3ViQWdncmVnYXRlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dTdWJBZ2dyZWdhdGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dUb29sYmFyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93VG9vbGJhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dUb29sYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dTdGF0dXNiYXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dTdGF0dXNiYXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93U3RhdHVzYmFyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0YXR1c0JhckhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3N0YXR1c0JhckhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3N0YXR1c0JhckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzY3JvbGxCYXJTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2Nyb2xsQmFyU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Njcm9sbEJhclNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VsZWN0aW9uTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NlbGVjdGlvbk1vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzZWxlY3Rpb25Nb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dIZWFkZXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dIZWFkZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93SGVhZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sYmFySGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndG9vbGJhckhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Rvb2xiYXJIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgd2lkdGgoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd3aWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZpcnR1YWxNb2RlQ3JlYXRlUmVjb3Jkcyhhcmc/OiAoZXhwYW5kZWRSZWNvcmQ/OiBhbnksIGRvbmU/OiBhbnkpID0+IHZvaWQpOiAoZXhwYW5kZWRSZWNvcmQ/OiBhbnksIGRvbmU/OiBhbnkpID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3ZpcnR1YWxNb2RlQ3JlYXRlUmVjb3JkcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3ZpcnR1YWxNb2RlQ3JlYXRlUmVjb3JkcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB2aXJ0dWFsTW9kZVJlY29yZENyZWF0aW5nKGFyZz86IChyZWNvcmQ/OiBhbnkpID0+IGFueSk6IChyZWNvcmQ/OiBhbnkpID0+IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndmlydHVhbE1vZGVSZWNvcmRDcmVhdGluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3ZpcnR1YWxNb2RlUmVjb3JkQ3JlYXRpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlR3JpZENvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFkZFJvdyhyb3dLZXk6IG51bWJlciB8IHN0cmluZyB8IG51bGwsIHJvd0RhdGE6IGFueSwgcm93UG9zaXRpb246IHN0cmluZywgcGFyZW50Pzogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYWRkUm93Jywgcm93S2V5LCByb3dEYXRhLCByb3dQb3NpdGlvbiwgcGFyZW50KTtcbiAgIH1cblxuICAgYWRkRmlsdGVyKGRhdGFGaWVsZDogc3RyaW5nLCBmaWxlckdyb3VwOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhZGRGaWx0ZXInLCBkYXRhRmllbGQsIGZpbGVyR3JvdXApO1xuICAgfVxuXG4gICBhcHBseUZpbHRlcnMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYXBwbHlGaWx0ZXJzJyk7XG4gICB9XG5cbiAgIGJlZ2luVXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2JlZ2luVXBkYXRlJyk7XG4gICB9XG5cbiAgIGJlZ2luUm93RWRpdChyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2JlZ2luUm93RWRpdCcsIHJvd0tleSk7XG4gICB9XG5cbiAgIGJlZ2luQ2VsbEVkaXQocm93S2V5OiBudW1iZXIgfCBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYmVnaW5DZWxsRWRpdCcsIHJvd0tleSwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY2xlYXJTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgY2xlYXJGaWx0ZXJzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NsZWFyRmlsdGVycycpO1xuICAgfVxuXG4gICBjbGVhcigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjbGVhcicpO1xuICAgfVxuXG4gICBjaGVja1Jvdyhyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NoZWNrUm93Jywgcm93S2V5KTtcbiAgIH1cblxuICAgY29sbGFwc2VSb3cocm93S2V5OiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2xsYXBzZVJvdycsIHJvd0tleSk7XG4gICB9XG5cbiAgIGNvbGxhcHNlQWxsKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbGxhcHNlQWxsJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBkZWxldGVSb3cocm93S2V5OiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2RlbGV0ZVJvdycsIHJvd0tleSk7XG4gICB9XG5cbiAgIGV4cGFuZFJvdyhyb3dLZXk6IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdleHBhbmRSb3cnLCByb3dLZXkpO1xuICAgfVxuXG4gICBleHBhbmRBbGwoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZXhwYW5kQWxsJyk7XG4gICB9XG5cbiAgIGVuZFVwZGF0ZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmRVcGRhdGUnKTtcbiAgIH1cblxuICAgZW5zdXJlUm93VmlzaWJsZShyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2Vuc3VyZVJvd1Zpc2libGUnLCByb3dLZXkpO1xuICAgfVxuXG4gICBlbmRSb3dFZGl0KHJvd0tleTogbnVtYmVyIHwgc3RyaW5nLCBjYW5jZWxDaGFuZ2VzPzogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2VuZFJvd0VkaXQnLCByb3dLZXksIGNhbmNlbENoYW5nZXMpO1xuICAgfVxuXG4gICBlbmRDZWxsRWRpdChyb3dLZXk6IG51bWJlciB8IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcsIGNhbmNlbENoYW5nZXM/OiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZW5kQ2VsbEVkaXQnLCByb3dLZXksIGRhdGFGaWVsZCwgY2FuY2VsQ2hhbmdlcyk7XG4gICB9XG5cbiAgIGV4cG9ydERhdGEoZXhwb3J0RGF0YVR5cGU6IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2V4cG9ydERhdGEnLCBleHBvcnREYXRhVHlwZSk7XG4gICB9XG5cbiAgIGZvY3VzKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ZvY3VzJyk7XG4gICB9XG5cbiAgIGdldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZDogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldENvbHVtblByb3BlcnR5JywgZGF0YUZpZWxkLCBwcm9wZXJ0eU5hbWUpO1xuICAgfVxuXG4gICBnb1RvUGFnZShwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dvVG9QYWdlJywgcGFnZUluZGV4KTtcbiAgIH1cblxuICAgZ29Ub1ByZXZQYWdlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dvVG9QcmV2UGFnZScpO1xuICAgfVxuXG4gICBnb1RvTmV4dFBhZ2UoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ29Ub05leHRQYWdlJyk7XG4gICB9XG5cbiAgIGdldFNlbGVjdGlvbigpOiBBcnJheTxhbnk+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0U2VsZWN0aW9uJyk7XG4gICB9XG5cbiAgIGdldEtleShyb3c6IGFueSk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldEtleScsIHJvdyk7XG4gICB9XG5cbiAgIGdldFJvdyhyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IGpxd2lkZ2V0cy5UcmVlR3JpZEdldFJvdyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldFJvdycsIHJvd0tleSk7XG4gICB9XG5cbiAgIGdldFJvd3MoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVHcmlkR2V0Um93PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldFJvd3MnKTtcbiAgIH1cblxuICAgZ2V0Q2hlY2tlZFJvd3MoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVHcmlkR2V0Um93PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldENoZWNrZWRSb3dzJyk7XG4gICB9XG5cbiAgIGdldFZpZXcoKTogQXJyYXk8anF3aWRnZXRzLlRyZWVHcmlkR2V0Um93PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldFZpZXcnKTtcbiAgIH1cblxuICAgZ2V0Q2VsbFZhbHVlKHJvd0tleTogbnVtYmVyIHwgc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2dldENlbGxWYWx1ZScsIHJvd0tleSwgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgaGlkZUNvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2hpZGVDb2x1bW4nLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBpc0JpbmRpbmdDb21wbGV0ZWQoKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2lzQmluZGluZ0NvbXBsZXRlZCcpO1xuICAgfVxuXG4gICBsb2NrUm93KHJvd0tleTogc3RyaW5nIHwgbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2xvY2tSb3cnLCByb3dLZXkpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZW1vdmVGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW1vdmVGaWx0ZXInLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBzY3JvbGxPZmZzZXQodG9wPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyKToganF3aWRnZXRzLlRyZWVHcmlkU2Nyb2xsT2Zmc2V0IHtcbiAgICAgIGlmICh0b3AgIT09IHVuZGVmaW5lZCB8fCBsZWZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2Nyb2xsT2Zmc2V0JywgdG9wLCBsZWZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzY3JvbGxPZmZzZXQnKTtcbiAgICAgIH1cbiAgIH07XG5cbiAgIHNldENvbHVtblByb3BlcnR5KGRhdGFGaWVsZDogc3RyaW5nLCBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHJvcGVydHlWYWx1ZTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2V0Q29sdW1uUHJvcGVydHknLCBkYXRhRmllbGQsIHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSk7XG4gICB9XG5cbiAgIHNob3dDb2x1bW4oZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzaG93Q29sdW1uJywgZGF0YUZpZWxkKTtcbiAgIH1cblxuICAgc2VsZWN0Um93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2VsZWN0Um93Jywgcm93SWQpO1xuICAgfVxuXG4gICBzZXRDZWxsVmFsdWUocm93SWQ6IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcsIGNlbGxWYWx1ZTogYW55KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2V0Q2VsbFZhbHVlJywgcm93SWQsIGRhdGFGaWVsZCwgY2VsbFZhbHVlKTtcbiAgIH1cblxuICAgc29ydEJ5KGRhdGFGaWVsZDogbnVtYmVyIHwgc3RyaW5nLCBzb3J0T3JkZXI/OiAnYXNjJyB8ICdkZXNjJyB8IG51bGwpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzb3J0QnknLCBkYXRhRmllbGQsIHNvcnRPcmRlcik7XG4gICB9XG5cbiAgIHVwZGF0aW5nKCk6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd1cGRhdGluZycpO1xuICAgfVxuXG4gICB1cGRhdGVCb3VuZERhdGEoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndXBkYXRlQm91bmREYXRhJyk7XG4gICB9XG5cbiAgIHVuc2VsZWN0Um93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndW5zZWxlY3RSb3cnLCByb3dJZCk7XG4gICB9XG5cbiAgIHVuY2hlY2tSb3cocm93SWQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3VuY2hlY2tSb3cnLCByb3dJZCk7XG4gICB9XG5cbiAgIHVwZGF0ZVJvdyhyb3dJZDogbnVtYmVyIHwgc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd1cGRhdGVSb3cnLCByb3dJZCwgZGF0YSk7XG4gICB9XG5cbiAgIHVubG9ja1Jvdyhyb3dJZDogc3RyaW5nIHwgbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3VubG9ja1JvdycsIHJvd0lkKTtcbiAgIH1cblxuXG4gICAvLyBqcXhUcmVlR3JpZENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvbkJpbmRpbmdDb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxCZWdpbkVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25DZWxsRW5kRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxWYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2x1bW5SZXNpemVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ29sdW1uUmVvcmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QYWdlU2l6ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd0RvdWJsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93VW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dCZWdpbkVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dFbmRFZGl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93RXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93Q29sbGFwc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dDaGVjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd1VuY2hlY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Tb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignYmluZGluZ0NvbXBsZXRlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25CaW5kaW5nQ29tcGxldGUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbEJlZ2luRWRpdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbEJlZ2luRWRpdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsRW5kRWRpdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbEVuZEVkaXQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY2VsbFZhbHVlQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2VsbFZhbHVlQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjb2x1bW5SZXNpemVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2x1bW5SZXNpemVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtblJlb3JkZXJlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ29sdW1uUmVvcmRlcmVkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2ZpbHRlcicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRmlsdGVyLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3BhZ2VDaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25QYWdlQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdwYWdlU2l6ZUNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBhZ2VTaXplQ2hhbmdlZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93Q2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93RG91YmxlQ2xpY2snLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd0RvdWJsZUNsaWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd1NlbGVjdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93U2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd1Vuc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dVbnNlbGVjdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dCZWdpbkVkaXQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd0JlZ2luRWRpdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dFbmRFZGl0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dFbmRFZGl0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd0V4cGFuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93RXhwYW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd0NvbGxhcHNlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dDb2xsYXBzZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dDaGVjaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93Q2hlY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93VW5jaGVjaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93VW5jaGVjay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdzb3J0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Tb3J0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhUcmVlR3JpZENvbXBvbmVudFxuIl19