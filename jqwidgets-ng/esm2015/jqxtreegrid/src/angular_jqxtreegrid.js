import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets/jqxdata.export';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxcheckbox from '../../jqwidgets/jqxcheckbox';
import * as jqxtooltip from '../../jqwidgets/jqxtooltip';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import * as jqxnumberinput from '../../jqwidgets/jqxnumberinput';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxdatatable from '../../jqwidgets/jqxdatatable';
import * as jqxtreegrid from '../../jqwidgets/jqxtreegrid';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
