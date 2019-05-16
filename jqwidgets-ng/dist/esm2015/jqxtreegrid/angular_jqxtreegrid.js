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
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxTreeGridComponent {
    /**
     * @param {?} containerElement
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    ;
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let children = JQXLite(this.elementRef.nativeElement.children).find('tr');
        /** @type {?} */
        let html = '';
        /** @type {?} */
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            /** @type {?} */
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
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                /** @type {?} */
                let result = JQXLite.jqx.parseSourceTag(this.container);
                /** @type {?} */
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
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
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
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxTreeGrid('setOptions', options);
    }
    // jqxTreeGridComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?=} arg
     * @return {?}
     */
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
    /**
     * @param {?} rowKey
     * @param {?} rowData
     * @param {?} rowPosition
     * @param {?=} parent
     * @return {?}
     */
    addRow(rowKey, rowData, rowPosition, parent) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);
    }
    /**
     * @param {?} dataField
     * @param {?} filerGroup
     * @return {?}
     */
    addFilter(dataField, filerGroup) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addFilter', dataField, filerGroup);
    }
    /**
     * @return {?}
     */
    applyFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('applyFilters');
    }
    /**
     * @return {?}
     */
    beginUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginUpdate');
    }
    /**
     * @param {?} rowKey
     * @return {?}
     */
    beginRowEdit(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginRowEdit', rowKey);
    }
    /**
     * @param {?} rowKey
     * @param {?} dataField
     * @return {?}
     */
    beginCellEdit(rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginCellEdit', rowKey, dataField);
    }
    /**
     * @return {?}
     */
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearSelection');
    }
    /**
     * @return {?}
     */
    clearFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearFilters');
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clear');
    }
    /**
     * @param {?} rowKey
     * @return {?}
     */
    checkRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('checkRow', rowKey);
    }
    /**
     * @param {?} rowKey
     * @return {?}
     */
    collapseRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseRow', rowKey);
    }
    /**
     * @return {?}
     */
    collapseAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseAll');
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('destroy');
    }
    /**
     * @param {?} rowKey
     * @return {?}
     */
    deleteRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('deleteRow', rowKey);
    }
    /**
     * @param {?} rowKey
     * @return {?}
     */
    expandRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandRow', rowKey);
    }
    /**
     * @return {?}
     */
    expandAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandAll');
    }
    /**
     * @return {?}
     */
    endUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endUpdate');
    }
    /**
     * @param {?} rowKey
     * @return {?}
     */
    ensureRowVisible(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('ensureRowVisible', rowKey);
    }
    /**
     * @param {?} rowKey
     * @param {?=} cancelChanges
     * @return {?}
     */
    endRowEdit(rowKey, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endRowEdit', rowKey, cancelChanges);
    }
    /**
     * @param {?} rowKey
     * @param {?} dataField
     * @param {?=} cancelChanges
     * @return {?}
     */
    endCellEdit(rowKey, dataField, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);
    }
    /**
     * @param {?} exportDataType
     * @return {?}
     */
    exportData(exportDataType) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('exportData', exportDataType);
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('focus');
    }
    /**
     * @param {?} dataField
     * @param {?} propertyName
     * @return {?}
     */
    getColumnProperty(dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getColumnProperty', dataField, propertyName);
    }
    /**
     * @param {?} pageIndex
     * @return {?}
     */
    goToPage(pageIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPage', pageIndex);
    }
    /**
     * @return {?}
     */
    goToPrevPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPrevPage');
    }
    /**
     * @return {?}
     */
    goToNextPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToNextPage');
    }
    /**
     * @return {?}
     */
    getSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getSelection');
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getKey(row) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getKey', row);
    }
    /**
     * @param {?} rowKey
     * @return {?}
     */
    getRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRow', rowKey);
    }
    /**
     * @return {?}
     */
    getRows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRows');
    }
    /**
     * @return {?}
     */
    getCheckedRows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCheckedRows');
    }
    /**
     * @return {?}
     */
    getView() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getView');
    }
    /**
     * @param {?} rowKey
     * @param {?} dataField
     * @return {?}
     */
    getCellValue(rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCellValue', rowKey, dataField);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    hideColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('hideColumn', dataField);
    }
    /**
     * @return {?}
     */
    isBindingCompleted() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('isBindingCompleted');
    }
    /**
     * @param {?} rowKey
     * @return {?}
     */
    lockRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('lockRow', rowKey);
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('refresh');
    }
    /**
     * @return {?}
     */
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('render');
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    removeFilter(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('removeFilter', dataField);
    }
    /**
     * @param {?=} top
     * @param {?=} left
     * @return {?}
     */
    scrollOffset(top, left) {
        if (top !== undefined || left !== undefined) {
            this.host.jqxTreeGrid('scrollOffset', top, left);
        }
        else {
            return this.host.jqxTreeGrid('scrollOffset');
        }
    }
    ;
    /**
     * @param {?} dataField
     * @param {?} propertyName
     * @param {?} propertyValue
     * @return {?}
     */
    setColumnProperty(dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    showColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('showColumn', dataField);
    }
    /**
     * @param {?} rowId
     * @return {?}
     */
    selectRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('selectRow', rowId);
    }
    /**
     * @param {?} rowId
     * @param {?} dataField
     * @param {?} cellValue
     * @return {?}
     */
    setCellValue(rowId, dataField, cellValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setCellValue', rowId, dataField, cellValue);
    }
    /**
     * @param {?} dataField
     * @param {?=} sortOrder
     * @return {?}
     */
    sortBy(dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('sortBy', dataField, sortOrder);
    }
    /**
     * @return {?}
     */
    updating() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('updating');
    }
    /**
     * @return {?}
     */
    updateBoundData() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateBoundData');
    }
    /**
     * @param {?} rowId
     * @return {?}
     */
    unselectRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unselectRow', rowId);
    }
    /**
     * @param {?} rowId
     * @return {?}
     */
    uncheckRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('uncheckRow', rowId);
    }
    /**
     * @param {?} rowId
     * @param {?} data
     * @return {?}
     */
    updateRow(rowId, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateRow', rowId, data);
    }
    /**
     * @param {?} rowId
     * @return {?}
     */
    unlockRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unlockRow', rowId);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('bindingComplete', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onBindingComplete.emit(eventData); }));
        this.host.on('cellBeginEdit', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellBeginEdit.emit(eventData); }));
        this.host.on('cellEndEdit', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellEndEdit.emit(eventData); }));
        this.host.on('cellValueChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onCellValueChanged.emit(eventData); }));
        this.host.on('columnResized', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onColumnResized.emit(eventData); }));
        this.host.on('columnReordered', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onColumnReordered.emit(eventData); }));
        this.host.on('filter', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onFilter.emit(eventData); }));
        this.host.on('pageChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPageChanged.emit(eventData); }));
        this.host.on('pageSizeChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onPageSizeChanged.emit(eventData); }));
        this.host.on('rowClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowClick.emit(eventData); }));
        this.host.on('rowDoubleClick', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowDoubleClick.emit(eventData); }));
        this.host.on('rowSelect', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowSelect.emit(eventData); }));
        this.host.on('rowUnselect', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowUnselect.emit(eventData); }));
        this.host.on('rowBeginEdit', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowBeginEdit.emit(eventData); }));
        this.host.on('rowEndEdit', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowEndEdit.emit(eventData); }));
        this.host.on('rowExpand', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowExpand.emit(eventData); }));
        this.host.on('rowCollapse', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowCollapse.emit(eventData); }));
        this.host.on('rowCheck', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowCheck.emit(eventData); }));
        this.host.on('rowUncheck', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRowUncheck.emit(eventData); }));
        this.host.on('sort', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSort.emit(eventData); }));
    }
} //jqxTreeGridComponent
jqxTreeGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxTreeGrid',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxTreeGridComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh0cmVlZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXh0cmVlZ3JpZC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4dHJlZWdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFtQyxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQVE5SSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBb0U5QixZQUFZLGdCQUE0QjtRQVRsQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRWpELGVBQVUsR0FBYSxDQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsa0JBQWtCLEVBQUMscUJBQXFCLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsd0JBQXdCLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsbUJBQW1CLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFD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QUErQzs7SUFDL0MsNkNBQTZDOztJQUM3QyxrREFBa0Q7O0lBQ2xELCtDQUErQzs7SUFDL0MsaURBQWlEOztJQUNqRCx3Q0FBd0M7O0lBQ3hDLDZDQUE2Qzs7SUFDN0MsaURBQWlEOztJQUNqRCwwQ0FBMEM7O0lBQzFDLGdEQUFnRDs7SUFDaEQsMkNBQTJDOztJQUMzQyw2Q0FBNkM7O0lBQzdDLDhDQUE4Qzs7SUFDOUMsNENBQTRDOztJQUM1QywyQ0FBMkM7O0lBQzNDLDZDQUE2Qzs7SUFDN0MsMENBQTBDOztJQUMxQyw0Q0FBNEM7O0lBQzVDLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2pxd2lkZ2V0cy5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5kZWNsYXJlIGxldCBKUVhMaXRlOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanF4VHJlZUdyaWQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeFRyZWVHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkXG57XG4gICBASW5wdXQoJ2FsdFJvd3MnKSBhdHRyQWx0Um93czogYm9vbGVhbjtcbiAgIEBJbnB1dCgnYXV0b1Jvd0hlaWdodCcpIGF0dHJBdXRvUm93SGVpZ2h0OiBib29sZWFuO1xuICAgQElucHV0KCdhZ2dyZWdhdGVzSGVpZ2h0JykgYXR0ckFnZ3JlZ2F0ZXNIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnYXV0b1Nob3dMb2FkRWxlbWVudCcpIGF0dHJBdXRvU2hvd0xvYWRFbGVtZW50OiBib29sZWFuO1xuICAgQElucHV0KCdjaGVja2JveGVzJykgYXR0ckNoZWNrYm94ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2NvbHVtbnNIZWlnaHQnKSBhdHRyQ29sdW1uc0hlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdjb2x1bW5zJykgYXR0ckNvbHVtbnM6IEFycmF5PGFueT47XG4gICBASW5wdXQoJ2NvbHVtbkdyb3VwcycpIGF0dHJDb2x1bW5Hcm91cHM6IEFycmF5PGFueT47XG4gICBASW5wdXQoJ2NvbHVtbnNSZXNpemUnKSBhdHRyQ29sdW1uc1Jlc2l6ZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sdW1uc1Jlb3JkZXInKSBhdHRyQ29sdW1uc1Jlb3JkZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdlZGl0YWJsZScpIGF0dHJFZGl0YWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZWRpdFNldHRpbmdzJykgYXR0ckVkaXRTZXR0aW5nczoganF3aWRnZXRzLlRyZWVHcmlkRWRpdFNldHRpbmdzO1xuICAgQElucHV0KCdleHBvcnRTZXR0aW5ncycpIGF0dHJFeHBvcnRTZXR0aW5nczoganF3aWRnZXRzLlRyZWVHcmlkRXhwb3J0U2V0dGluZ3M7XG4gICBASW5wdXQoJ2VuYWJsZUhvdmVyJykgYXR0ckVuYWJsZUhvdmVyOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVCcm93c2VyU2VsZWN0aW9uJykgYXR0ckVuYWJsZUJyb3dzZXJTZWxlY3Rpb246IGJvb2xlYW47XG4gICBASW5wdXQoJ2ZpbHRlcmFibGUnKSBhdHRyRmlsdGVyYWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZmlsdGVySGVpZ2h0JykgYXR0ckZpbHRlckhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdmaWx0ZXJNb2RlJykgYXR0ckZpbHRlck1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgnaGllcmFyY2hpY2FsQ2hlY2tib3hlcycpIGF0dHJIaWVyYXJjaGljYWxDaGVja2JveGVzOiBib29sZWFuO1xuICAgQElucHV0KCdpY29ucycpIGF0dHJJY29uczogYW55O1xuICAgQElucHV0KCdpbmNyZW1lbnRhbFNlYXJjaCcpIGF0dHJJbmNyZW1lbnRhbFNlYXJjaDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbG9jYWxpemF0aW9uJykgYXR0ckxvY2FsaXphdGlvbjogYW55O1xuICAgQElucHV0KCdwYWdlckhlaWdodCcpIGF0dHJQYWdlckhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCdwYWdlU2l6ZScpIGF0dHJQYWdlU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdwYWdlU2l6ZU9wdGlvbnMnKSBhdHRyUGFnZVNpemVPcHRpb25zOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+O1xuICAgQElucHV0KCdwYWdlYWJsZScpIGF0dHJQYWdlYWJsZTogYm9vbGVhbjtcbiAgIEBJbnB1dCgncGFnZXJQb3NpdGlvbicpIGF0dHJQYWdlclBvc2l0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3BhZ2VyTW9kZScpIGF0dHJQYWdlck1vZGU6IHN0cmluZztcbiAgIEBJbnB1dCgncGFnZVNpemVNb2RlJykgYXR0clBhZ2VTaXplTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdwYWdlckJ1dHRvbnNDb3VudCcpIGF0dHJQYWdlckJ1dHRvbnNDb3VudDogbnVtYmVyO1xuICAgQElucHV0KCdwYWdlclJlbmRlcmVyJykgYXR0clBhZ2VyUmVuZGVyZXI6ICgpID0+IGFueTtcbiAgIEBJbnB1dCgncmVhZHknKSBhdHRyUmVhZHk6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3Jvd0RldGFpbHMnKSBhdHRyUm93RGV0YWlsczogYm9vbGVhbjtcbiAgIEBJbnB1dCgncm93RGV0YWlsc1JlbmRlcmVyJykgYXR0clJvd0RldGFpbHNSZW5kZXJlcjogKGtleToganF3aWRnZXRzLlRyZWVHcmlkUm93RGV0YWlsc1JlbmRlcmVyWydrZXknXSwgZGF0YVJvdzoganF3aWRnZXRzLlRyZWVHcmlkUm93RGV0YWlsc1JlbmRlcmVyWydkYXRhUm93J10pID0+IGFueTtcbiAgIEBJbnB1dCgncmVuZGVyVG9vbGJhcicpIGF0dHJSZW5kZXJUb29sYmFyOiAodG9vbEJhcj86IGpxd2lkZ2V0cy5UcmVlR3JpZFJlbmRlclRvb2xiYXJbJ3Rvb2xiYXInXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgncmVuZGVyU3RhdHVzQmFyJykgYXR0clJlbmRlclN0YXR1c0JhcjogKHN0YXR1c0Jhcj86IGpxd2lkZ2V0cy5UcmVlR3JpZFJlbmRlclN0YXR1c0Jhclsnc3RhdHVzYmFyJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlcmluZycpIGF0dHJSZW5kZXJpbmc6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3JlbmRlcmVkJykgYXR0clJlbmRlcmVkOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3NvcnRhYmxlJykgYXR0clNvcnRhYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93QWdncmVnYXRlcycpIGF0dHJTaG93QWdncmVnYXRlczogYm9vbGVhbjtcbiAgIEBJbnB1dCgnc2hvd1N1YkFnZ3JlZ2F0ZXMnKSBhdHRyU2hvd1N1YkFnZ3JlZ2F0ZXM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dUb29sYmFyJykgYXR0clNob3dUb29sYmFyOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93U3RhdHVzYmFyJykgYXR0clNob3dTdGF0dXNiYXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3N0YXR1c0JhckhlaWdodCcpIGF0dHJTdGF0dXNCYXJIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgnc2Nyb2xsQmFyU2l6ZScpIGF0dHJTY3JvbGxCYXJTaXplOiBudW1iZXI7XG4gICBASW5wdXQoJ3NlbGVjdGlvbk1vZGUnKSBhdHRyU2VsZWN0aW9uTW9kZTogc3RyaW5nO1xuICAgQElucHV0KCdzaG93SGVhZGVyJykgYXR0clNob3dIZWFkZXI6IGJvb2xlYW47XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Rvb2xiYXJIZWlnaHQnKSBhdHRyVG9vbGJhckhlaWdodDogbnVtYmVyO1xuICAgQElucHV0KCd2aXJ0dWFsTW9kZUNyZWF0ZVJlY29yZHMnKSBhdHRyVmlydHVhbE1vZGVDcmVhdGVSZWNvcmRzOiAoZXhwYW5kZWRSZWNvcmQ/OiBhbnksIGRvbmU/OiBhbnkpID0+IHZvaWQ7XG4gICBASW5wdXQoJ3ZpcnR1YWxNb2RlUmVjb3JkQ3JlYXRpbmcnKSBhdHRyVmlydHVhbE1vZGVSZWNvcmRDcmVhdGluZzogKHJlY29yZD86IGFueSkgPT4gYW55O1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FsdFJvd3MnLCdhdXRvUm93SGVpZ2h0JywnYWdncmVnYXRlc0hlaWdodCcsJ2F1dG9TaG93TG9hZEVsZW1lbnQnLCdjaGVja2JveGVzJywnY29sdW1uc0hlaWdodCcsJ2NvbHVtbnMnLCdjb2x1bW5Hcm91cHMnLCdjb2x1bW5zUmVzaXplJywnY29sdW1uc1Jlb3JkZXInLCdkaXNhYmxlZCcsJ2VkaXRhYmxlJywnZWRpdFNldHRpbmdzJywnZXhwb3J0U2V0dGluZ3MnLCdlbmFibGVIb3ZlcicsJ2VuYWJsZUJyb3dzZXJTZWxlY3Rpb24nLCdmaWx0ZXJhYmxlJywnZmlsdGVySGVpZ2h0JywnZmlsdGVyTW9kZScsJ2hlaWdodCcsJ2hpZXJhcmNoaWNhbENoZWNrYm94ZXMnLCdpY29ucycsJ2luY3JlbWVudGFsU2VhcmNoJywnbG9jYWxpemF0aW9uJywncGFnZXJIZWlnaHQnLCdwYWdlU2l6ZScsJ3BhZ2VTaXplT3B0aW9ucycsJ3BhZ2VhYmxlJywncGFnZXJQb3NpdGlvbicsJ3BhZ2VyTW9kZScsJ3BhZ2VTaXplTW9kZScsJ3BhZ2VyQnV0dG9uc0NvdW50JywncGFnZXJSZW5kZXJlcicsJ3JlYWR5Jywncm93RGV0YWlscycsJ3Jvd0RldGFpbHNSZW5kZXJlcicsJ3JlbmRlclRvb2xiYXInLCdyZW5kZXJTdGF0dXNCYXInLCdyZW5kZXJpbmcnLCdyZW5kZXJlZCcsJ3J0bCcsJ3NvdXJjZScsJ3NvcnRhYmxlJywnc2hvd0FnZ3JlZ2F0ZXMnLCdzaG93U3ViQWdncmVnYXRlcycsJ3Nob3dUb29sYmFyJywnc2hvd1N0YXR1c2JhcicsJ3N0YXR1c0JhckhlaWdodCcsJ3Njcm9sbEJhclNpemUnLCdzZWxlY3Rpb25Nb2RlJywnc2hvd0hlYWRlcicsJ3RoZW1lJywndG9vbGJhckhlaWdodCcsJ3dpZHRoJywndmlydHVhbE1vZGVDcmVhdGVSZWNvcmRzJywndmlydHVhbE1vZGVSZWNvcmRDcmVhdGluZyddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhUcmVlR3JpZDtcblxuICAgY29udGVudDogU3RyaW5nO1xuICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgfTsgXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgbGV0IGNoaWxkcmVuID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbikuZmluZCgndHInKTsgXG4gICAgICAgbGV0IGh0bWwgPSAnJzsgXG4gICAgICAgbGV0IG9wdGlvbnMgPSB7fTsgXG5cbiAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICBodG1sID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgdGhpcy5jb250ZW50ID0gaHRtbDtcblxuICAgICAgICAgICBsZXQgcmVzdWx0ID0gSlFYTGl0ZS5qcXgucGFyc2VTb3VyY2VUYWcodGhpcy5jb250YWluZXIpO1xuICAgICAgICAgICBpZiAodGhpc1snYXR0ckNvbHVtbnMnXSAhPT0gdW5kZWZpbmVkKSB7ICBcbjsgICAgICAgICAgICAgICAgb3B0aW9uc1snc291cmNlJ10gPSByZXN1bHQuc291cmNlOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgfVxuICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zWydzb3VyY2UnXSA9IHJlc3VsdC5zb3VyY2U7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1snY29sdW1ucyddID0gcmVzdWx0LmNvbHVtbnM7XG4gICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7IFxuICAgICAgfVxuICAgfTsgXG5cbiBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQgIT09IHRoaXMuY29udGFpbmVyLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250YWluZXIuaW5uZXJIVE1MO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IEpRWExpdGUuanF4LnBhcnNlU291cmNlVGFnKHRoaXMuY29udGFpbmVyKTtcblxuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLmhvc3QuanF4R3JpZCgnY29sdW1ucycpO1xuXG4gICAgICAgICAgICBpZiAoY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCh7IHNvdXJjZTogcmVzdWx0LnNvdXJjZSwgY29sdW1uczogcmVzdWx0LmNvbHVtbnMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4R3JpZCh7IHNvdXJjZTogcmVzdWx0LnNvdXJjZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB9O1xuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4VHJlZUdyaWQodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhUcmVlR3JpZCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhUcmVlR3JpZENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhbHRSb3dzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhbHRSb3dzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYWx0Um93cycpO1xuICAgICAgfVxuICAgfVxuXG4gICBhdXRvUm93SGVpZ2h0KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhdXRvUm93SGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYXV0b1Jvd0hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBhZ2dyZWdhdGVzSGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYWdncmVnYXRlc0hlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2FnZ3JlZ2F0ZXNIZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYXV0b1Nob3dMb2FkRWxlbWVudChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYXV0b1Nob3dMb2FkRWxlbWVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2F1dG9TaG93TG9hZEVsZW1lbnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2hlY2tib3hlcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY2hlY2tib3hlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NoZWNrYm94ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uc0hlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbHVtbnNIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zSGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnMoYXJnPzogQXJyYXk8YW55Pik6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbHVtbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbkdyb3Vwcyhhcmc/OiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1uR3JvdXBzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sdW1uR3JvdXBzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNSZXNpemUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbHVtbnNSZXNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zUmVzaXplJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbHVtbnNSZW9yZGVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjb2x1bW5zUmVvcmRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbHVtbnNSZW9yZGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXRhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlZGl0YWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2VkaXRhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVkaXRTZXR0aW5ncyhhcmc/OiBqcXdpZGdldHMuVHJlZUdyaWRFZGl0U2V0dGluZ3MpOiBqcXdpZGdldHMuVHJlZUdyaWRFZGl0U2V0dGluZ3Mge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2VkaXRTZXR0aW5ncycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2VkaXRTZXR0aW5ncycpO1xuICAgICAgfVxuICAgfVxuXG4gICBleHBvcnRTZXR0aW5ncyhhcmc/OiBqcXdpZGdldHMuVHJlZUdyaWRFeHBvcnRTZXR0aW5ncyk6IGpxd2lkZ2V0cy5UcmVlR3JpZEV4cG9ydFNldHRpbmdzIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdleHBvcnRTZXR0aW5ncycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2V4cG9ydFNldHRpbmdzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUhvdmVyKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmFibGVIb3ZlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2VuYWJsZUhvdmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZUJyb3dzZXJTZWxlY3Rpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2VuYWJsZUJyb3dzZXJTZWxlY3Rpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmFibGVCcm93c2VyU2VsZWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlcmFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ZpbHRlcmFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdmaWx0ZXJhYmxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZpbHRlckhlaWdodChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ZpbHRlckhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ZpbHRlckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWx0ZXJNb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZmlsdGVyTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2ZpbHRlck1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGhpZXJhcmNoaWNhbENoZWNrYm94ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2hpZXJhcmNoaWNhbENoZWNrYm94ZXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdoaWVyYXJjaGljYWxDaGVja2JveGVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGljb25zKGFyZz86IGFueSk6IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaWNvbnMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdpY29ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbmNyZW1lbnRhbFNlYXJjaChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaW5jcmVtZW50YWxTZWFyY2gnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdpbmNyZW1lbnRhbFNlYXJjaCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsb2NhbGl6YXRpb24oYXJnPzogYW55KTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdsb2NhbGl6YXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdsb2NhbGl6YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlckhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VySGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VTaXplKGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZVNpemUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlU2l6ZU9wdGlvbnMoYXJnPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VTaXplT3B0aW9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VTaXplT3B0aW9ucycpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlYWJsZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZWFibGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlYWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlclBvc2l0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZXJQb3NpdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyUG9zaXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJNb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZXJNb2RlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZXJNb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBhZ2VTaXplTW9kZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VTaXplTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VTaXplTW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWdlckJ1dHRvbnNDb3VudChhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyQnV0dG9uc0NvdW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncGFnZXJCdXR0b25zQ291bnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcGFnZXJSZW5kZXJlcihhcmc/OiAoKSA9PiBhbnkpOiAoKSA9PiBhbnkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3BhZ2VyUmVuZGVyZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdwYWdlclJlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlYWR5KGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZWFkeScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlYWR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvd0RldGFpbHMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Jvd0RldGFpbHMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyb3dEZXRhaWxzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJvd0RldGFpbHNSZW5kZXJlcihhcmc/OiAoa2V5OiBqcXdpZGdldHMuVHJlZUdyaWRSb3dEZXRhaWxzUmVuZGVyZXJbJ2tleSddLCBkYXRhUm93OiBqcXdpZGdldHMuVHJlZUdyaWRSb3dEZXRhaWxzUmVuZGVyZXJbJ2RhdGFSb3cnXSkgPT4gYW55KTogKGtleToganF3aWRnZXRzLlRyZWVHcmlkUm93RGV0YWlsc1JlbmRlcmVyWydrZXknXSwgZGF0YVJvdzoganF3aWRnZXRzLlRyZWVHcmlkUm93RGV0YWlsc1JlbmRlcmVyWydkYXRhUm93J10pID0+IGFueSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncm93RGV0YWlsc1JlbmRlcmVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncm93RGV0YWlsc1JlbmRlcmVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlbmRlclRvb2xiYXIoYXJnPzogKHRvb2xCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJUb29sYmFyWyd0b29sYmFyJ10pID0+IHZvaWQpOiAodG9vbEJhcj86IGpxd2lkZ2V0cy5UcmVlR3JpZFJlbmRlclRvb2xiYXJbJ3Rvb2xiYXInXSkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncmVuZGVyVG9vbGJhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlclRvb2xiYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyU3RhdHVzQmFyKGFyZz86IChzdGF0dXNCYXI/OiBqcXdpZGdldHMuVHJlZUdyaWRSZW5kZXJTdGF0dXNCYXJbJ3N0YXR1c2JhciddKSA9PiB2b2lkKTogKHN0YXR1c0Jhcj86IGpxd2lkZ2V0cy5UcmVlR3JpZFJlbmRlclN0YXR1c0Jhclsnc3RhdHVzYmFyJ10pID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlclN0YXR1c0JhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlclN0YXR1c0JhcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJpbmcoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlcmluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbmRlcmluZycpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJlZChhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncmVuZGVyZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdyZW5kZXJlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBzb3VyY2UoYXJnPzogYW55KTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzb3VyY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzb3VyY2UnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc29ydGFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NvcnRhYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc29ydGFibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0FnZ3JlZ2F0ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dBZ2dyZWdhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2hvd0FnZ3JlZ2F0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1N1YkFnZ3JlZ2F0ZXMoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dTdWJBZ2dyZWdhdGVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2hvd1N1YkFnZ3JlZ2F0ZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1Rvb2xiYXIoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dUb29sYmFyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2hvd1Rvb2xiYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd1N0YXR1c2Jhcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2hvd1N0YXR1c2JhcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dTdGF0dXNiYXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc3RhdHVzQmFySGVpZ2h0KGFyZz86IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc3RhdHVzQmFySGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc3RhdHVzQmFySGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNjcm9sbEJhclNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzY3JvbGxCYXJTaXplJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2Nyb2xsQmFyU2l6ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZWxlY3Rpb25Nb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2VsZWN0aW9uTW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NlbGVjdGlvbk1vZGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0hlYWRlcihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnc2hvd0hlYWRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dIZWFkZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd0aGVtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2xiYXJIZWlnaHQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd0b29sYmFySGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndG9vbGJhckhlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdmlydHVhbE1vZGVDcmVhdGVSZWNvcmRzKGFyZz86IChleHBhbmRlZFJlY29yZD86IGFueSwgZG9uZT86IGFueSkgPT4gdm9pZCk6IChleHBhbmRlZFJlY29yZD86IGFueSwgZG9uZT86IGFueSkgPT4gdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndmlydHVhbE1vZGVDcmVhdGVSZWNvcmRzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndmlydHVhbE1vZGVDcmVhdGVSZWNvcmRzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZpcnR1YWxNb2RlUmVjb3JkQ3JlYXRpbmcoYXJnPzogKHJlY29yZD86IGFueSkgPT4gYW55KTogKHJlY29yZD86IGFueSkgPT4gYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd2aXJ0dWFsTW9kZVJlY29yZENyZWF0aW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndmlydHVhbE1vZGVSZWNvcmRDcmVhdGluZycpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeFRyZWVHcmlkQ29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYWRkUm93KHJvd0tleTogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCwgcm93RGF0YTogYW55LCByb3dQb3NpdGlvbjogc3RyaW5nLCBwYXJlbnQ/OiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhZGRSb3cnLCByb3dLZXksIHJvd0RhdGEsIHJvd1Bvc2l0aW9uLCBwYXJlbnQpO1xuICAgfVxuXG4gICBhZGRGaWx0ZXIoZGF0YUZpZWxkOiBzdHJpbmcsIGZpbGVyR3JvdXA6IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2FkZEZpbHRlcicsIGRhdGFGaWVsZCwgZmlsZXJHcm91cCk7XG4gICB9XG5cbiAgIGFwcGx5RmlsdGVycygpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdhcHBseUZpbHRlcnMnKTtcbiAgIH1cblxuICAgYmVnaW5VcGRhdGUoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYmVnaW5VcGRhdGUnKTtcbiAgIH1cblxuICAgYmVnaW5Sb3dFZGl0KHJvd0tleTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnYmVnaW5Sb3dFZGl0Jywgcm93S2V5KTtcbiAgIH1cblxuICAgYmVnaW5DZWxsRWRpdChyb3dLZXk6IG51bWJlciB8IHN0cmluZywgZGF0YUZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdiZWdpbkNlbGxFZGl0Jywgcm93S2V5LCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBjbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdjbGVhclNlbGVjdGlvbicpO1xuICAgfVxuXG4gICBjbGVhckZpbHRlcnMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY2xlYXJGaWx0ZXJzJyk7XG4gICB9XG5cbiAgIGNsZWFyKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NsZWFyJyk7XG4gICB9XG5cbiAgIGNoZWNrUm93KHJvd0tleTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY2hlY2tSb3cnLCByb3dLZXkpO1xuICAgfVxuXG4gICBjb2xsYXBzZVJvdyhyb3dLZXk6IG51bWJlciB8IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2NvbGxhcHNlUm93Jywgcm93S2V5KTtcbiAgIH1cblxuICAgY29sbGFwc2VBbGwoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnY29sbGFwc2VBbGwnKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGRlbGV0ZVJvdyhyb3dLZXk6IHN0cmluZ1tdIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZGVsZXRlUm93Jywgcm93S2V5KTtcbiAgIH1cblxuICAgZXhwYW5kUm93KHJvd0tleTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2V4cGFuZFJvdycsIHJvd0tleSk7XG4gICB9XG5cbiAgIGV4cGFuZEFsbCgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdleHBhbmRBbGwnKTtcbiAgIH1cblxuICAgZW5kVXBkYXRlKCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ2VuZFVwZGF0ZScpO1xuICAgfVxuXG4gICBlbnN1cmVSb3dWaXNpYmxlKHJvd0tleTogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZW5zdXJlUm93VmlzaWJsZScsIHJvd0tleSk7XG4gICB9XG5cbiAgIGVuZFJvd0VkaXQocm93S2V5OiBudW1iZXIgfCBzdHJpbmcsIGNhbmNlbENoYW5nZXM/OiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZW5kUm93RWRpdCcsIHJvd0tleSwgY2FuY2VsQ2hhbmdlcyk7XG4gICB9XG5cbiAgIGVuZENlbGxFZGl0KHJvd0tleTogbnVtYmVyIHwgc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZywgY2FuY2VsQ2hhbmdlcz86IGJvb2xlYW4pOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdlbmRDZWxsRWRpdCcsIHJvd0tleSwgZGF0YUZpZWxkLCBjYW5jZWxDaGFuZ2VzKTtcbiAgIH1cblxuICAgZXhwb3J0RGF0YShleHBvcnREYXRhVHlwZTogYW55KTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZXhwb3J0RGF0YScsIGV4cG9ydERhdGFUeXBlKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZm9jdXMnKTtcbiAgIH1cblxuICAgZ2V0Q29sdW1uUHJvcGVydHkoZGF0YUZpZWxkOiBzdHJpbmcsIHByb3BlcnR5TmFtZTogc3RyaW5nKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0Q29sdW1uUHJvcGVydHknLCBkYXRhRmllbGQsIHByb3BlcnR5TmFtZSk7XG4gICB9XG5cbiAgIGdvVG9QYWdlKHBhZ2VJbmRleDogbnVtYmVyKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ29Ub1BhZ2UnLCBwYWdlSW5kZXgpO1xuICAgfVxuXG4gICBnb1RvUHJldlBhZ2UoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ29Ub1ByZXZQYWdlJyk7XG4gICB9XG5cbiAgIGdvVG9OZXh0UGFnZSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdnb1RvTmV4dFBhZ2UnKTtcbiAgIH1cblxuICAgZ2V0U2VsZWN0aW9uKCk6IEFycmF5PGFueT4ge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdnZXRTZWxlY3Rpb24nKTtcbiAgIH1cblxuICAgZ2V0S2V5KHJvdzogYW55KTogc3RyaW5nIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0S2V5Jywgcm93KTtcbiAgIH1cblxuICAgZ2V0Um93KHJvd0tleTogbnVtYmVyIHwgc3RyaW5nKToganF3aWRnZXRzLlRyZWVHcmlkR2V0Um93IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0Um93Jywgcm93S2V5KTtcbiAgIH1cblxuICAgZ2V0Um93cygpOiBBcnJheTxqcXdpZGdldHMuVHJlZUdyaWRHZXRSb3c+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0Um93cycpO1xuICAgfVxuXG4gICBnZXRDaGVja2VkUm93cygpOiBBcnJheTxqcXdpZGdldHMuVHJlZUdyaWRHZXRSb3c+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0Q2hlY2tlZFJvd3MnKTtcbiAgIH1cblxuICAgZ2V0VmlldygpOiBBcnJheTxqcXdpZGdldHMuVHJlZUdyaWRHZXRSb3c+IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0VmlldycpO1xuICAgfVxuXG4gICBnZXRDZWxsVmFsdWUocm93S2V5OiBudW1iZXIgfCBzdHJpbmcsIGRhdGFGaWVsZDogc3RyaW5nKTogYW55IHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnZ2V0Q2VsbFZhbHVlJywgcm93S2V5LCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBoaWRlQ29sdW1uKGRhdGFGaWVsZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaGlkZUNvbHVtbicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIGlzQmluZGluZ0NvbXBsZXRlZCgpOiBib29sZWFuIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnaXNCaW5kaW5nQ29tcGxldGVkJyk7XG4gICB9XG5cbiAgIGxvY2tSb3cocm93S2V5OiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgnbG9ja1JvdycsIHJvd0tleSk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncmVmcmVzaCcpO1xuICAgfVxuXG4gICByZW5kZXIoKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgncmVuZGVyJyk7XG4gICB9XG5cbiAgIHJlbW92ZUZpbHRlcihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3JlbW92ZUZpbHRlcicsIGRhdGFGaWVsZCk7XG4gICB9XG5cbiAgIHNjcm9sbE9mZnNldCh0b3A/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIpOiBqcXdpZGdldHMuVHJlZUdyaWRTY3JvbGxPZmZzZXQge1xuICAgICAgaWYgKHRvcCAhPT0gdW5kZWZpbmVkIHx8IGxlZnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzY3JvbGxPZmZzZXQnLCB0b3AsIGxlZnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Njcm9sbE9mZnNldCcpO1xuICAgICAgfVxuICAgfTtcblxuICAgc2V0Q29sdW1uUHJvcGVydHkoZGF0YUZpZWxkOiBzdHJpbmcsIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eVZhbHVlOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzZXRDb2x1bW5Qcm9wZXJ0eScsIGRhdGFGaWVsZCwgcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlKTtcbiAgIH1cblxuICAgc2hvd0NvbHVtbihkYXRhRmllbGQ6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3Nob3dDb2x1bW4nLCBkYXRhRmllbGQpO1xuICAgfVxuXG4gICBzZWxlY3RSb3cocm93SWQ6IHN0cmluZyB8IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4pOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzZWxlY3RSb3cnLCByb3dJZCk7XG4gICB9XG5cbiAgIHNldENlbGxWYWx1ZShyb3dJZDogc3RyaW5nLCBkYXRhRmllbGQ6IHN0cmluZywgY2VsbFZhbHVlOiBhbnkpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCdzZXRDZWxsVmFsdWUnLCByb3dJZCwgZGF0YUZpZWxkLCBjZWxsVmFsdWUpO1xuICAgfVxuXG4gICBzb3J0QnkoZGF0YUZpZWxkOiBudW1iZXIgfCBzdHJpbmcsIHNvcnRPcmRlcj86ICdhc2MnIHwgJ2Rlc2MnIHwgbnVsbCk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3NvcnRCeScsIGRhdGFGaWVsZCwgc29ydE9yZGVyKTtcbiAgIH1cblxuICAgdXBkYXRpbmcoKTogYm9vbGVhbiB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3VwZGF0aW5nJyk7XG4gICB9XG5cbiAgIHVwZGF0ZUJvdW5kRGF0YSgpOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd1cGRhdGVCb3VuZERhdGEnKTtcbiAgIH1cblxuICAgdW5zZWxlY3RSb3cocm93SWQ6IHN0cmluZyB8IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4pOiB2b2lkIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSAmJiAhdGhpcy5ob3N0KSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cblxuICAgICAgdGhpcy5ob3N0LmpxeFRyZWVHcmlkKCd1bnNlbGVjdFJvdycsIHJvd0lkKTtcbiAgIH1cblxuICAgdW5jaGVja1Jvdyhyb3dJZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndW5jaGVja1JvdycsIHJvd0lkKTtcbiAgIH1cblxuICAgdXBkYXRlUm93KHJvd0lkOiBudW1iZXIgfCBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuXG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlICYmICF0aGlzLmhvc3QpIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7IFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhvc3QuanF4VHJlZUdyaWQoJ3VwZGF0ZVJvdycsIHJvd0lkLCBkYXRhKTtcbiAgIH1cblxuICAgdW5sb2NrUm93KHJvd0lkOiBzdHJpbmcgfCBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+KTogdm9pZCB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9DcmVhdGUgJiYgIXRoaXMuaG9zdCkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaG9zdC5qcXhUcmVlR3JpZCgndW5sb2NrUm93Jywgcm93SWQpO1xuICAgfVxuXG5cbiAgIC8vIGpxeFRyZWVHcmlkQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uQmluZGluZ0NvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbEJlZ2luRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNlbGxFbmRFZGl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uQ2VsbFZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbHVtblJlc2l6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Db2x1bW5SZW9yZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25GaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25QYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblBhZ2VTaXplQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93RG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dVbnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd0JlZ2luRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd0VuZEVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dFeHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25Sb3dDb2xsYXBzZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJvd0NoZWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUm93VW5jaGVjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdiaW5kaW5nQ29tcGxldGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkJpbmRpbmdDb21wbGV0ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsQmVnaW5FZGl0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsQmVnaW5FZGl0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NlbGxFbmRFZGl0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsRW5kRWRpdC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjZWxsVmFsdWVDaGFuZ2VkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25DZWxsVmFsdWVDaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbHVtblJlc2l6ZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNvbHVtblJlc2l6ZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignY29sdW1uUmVvcmRlcmVkJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2x1bW5SZW9yZGVyZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZmlsdGVyJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25GaWx0ZXIuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncGFnZUNoYW5nZWQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblBhZ2VDaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3BhZ2VTaXplQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUGFnZVNpemVDaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd0NsaWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dDbGljay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dEb3VibGVDbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93RG91YmxlQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93U2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dTZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93VW5zZWxlY3QnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd1Vuc2VsZWN0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd0JlZ2luRWRpdCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUm93QmVnaW5FZGl0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd0VuZEVkaXQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd0VuZEVkaXQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93RXhwYW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dFeHBhbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncm93Q29sbGFwc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblJvd0NvbGxhcHNlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3Jvd0NoZWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dDaGVjay5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyb3dVbmNoZWNrJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Sb3dVbmNoZWNrLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3NvcnQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblNvcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeFRyZWVHcmlkQ29tcG9uZW50XG4iXX0=