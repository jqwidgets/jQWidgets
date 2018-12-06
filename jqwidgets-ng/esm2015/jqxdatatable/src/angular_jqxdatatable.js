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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxDataTableComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'groups', 'groupsRenderer', 'height', 'initRowDetails', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showToolbar', 'showStatusbar', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'serverProcessing', 'showHeader', 'theme', 'toolbarHeight', 'width'];
        // jqxDataTableComponent events
        this.onBindingComplete = new EventEmitter();
        this.onCellBeginEdit = new EventEmitter();
        this.onCellEndEdit = new EventEmitter();
        this.onCellValueChanged = new EventEmitter();
        this.onColumnResized = new EventEmitter();
        this.onColumnReordered = new EventEmitter();
        this.onSort = new EventEmitter();
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataTable', options);
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
        this.host.jqxDataTable('setOptions', options);
    }
    // jqxDataTableComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    altRows(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('altRows', arg);
        }
        else {
            return this.host.jqxDataTable('altRows');
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
            this.host.jqxDataTable('autoRowHeight', arg);
        }
        else {
            return this.host.jqxDataTable('autoRowHeight');
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
            this.host.jqxDataTable('aggregatesHeight', arg);
        }
        else {
            return this.host.jqxDataTable('aggregatesHeight');
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
            this.host.jqxDataTable('autoShowLoadElement', arg);
        }
        else {
            return this.host.jqxDataTable('autoShowLoadElement');
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
            this.host.jqxDataTable('columnsHeight', arg);
        }
        else {
            return this.host.jqxDataTable('columnsHeight');
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
            this.host.jqxDataTable('columns', arg);
        }
        else {
            return this.host.jqxDataTable('columns');
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
            this.host.jqxDataTable('columnGroups', arg);
        }
        else {
            return this.host.jqxDataTable('columnGroups');
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
            this.host.jqxDataTable('columnsResize', arg);
        }
        else {
            return this.host.jqxDataTable('columnsResize');
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
            this.host.jqxDataTable('columnsReorder', arg);
        }
        else {
            return this.host.jqxDataTable('columnsReorder');
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
            this.host.jqxDataTable('disabled', arg);
        }
        else {
            return this.host.jqxDataTable('disabled');
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
            this.host.jqxDataTable('editable', arg);
        }
        else {
            return this.host.jqxDataTable('editable');
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
            this.host.jqxDataTable('editSettings', arg);
        }
        else {
            return this.host.jqxDataTable('editSettings');
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
            this.host.jqxDataTable('exportSettings', arg);
        }
        else {
            return this.host.jqxDataTable('exportSettings');
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
            this.host.jqxDataTable('enableHover', arg);
        }
        else {
            return this.host.jqxDataTable('enableHover');
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
            this.host.jqxDataTable('enableBrowserSelection', arg);
        }
        else {
            return this.host.jqxDataTable('enableBrowserSelection');
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
            this.host.jqxDataTable('filterable', arg);
        }
        else {
            return this.host.jqxDataTable('filterable');
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
            this.host.jqxDataTable('filterHeight', arg);
        }
        else {
            return this.host.jqxDataTable('filterHeight');
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
            this.host.jqxDataTable('filterMode', arg);
        }
        else {
            return this.host.jqxDataTable('filterMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('groups', arg);
        }
        else {
            return this.host.jqxDataTable('groups');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    groupsRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('groupsRenderer', arg);
        }
        else {
            return this.host.jqxDataTable('groupsRenderer');
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
            this.host.jqxDataTable('height', arg);
        }
        else {
            return this.host.jqxDataTable('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initRowDetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('initRowDetails', arg);
        }
        else {
            return this.host.jqxDataTable('initRowDetails');
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
            this.host.jqxDataTable('incrementalSearch', arg);
        }
        else {
            return this.host.jqxDataTable('incrementalSearch');
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
            this.host.jqxDataTable('localization', arg);
        }
        else {
            return this.host.jqxDataTable('localization');
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
            this.host.jqxDataTable('pagerHeight', arg);
        }
        else {
            return this.host.jqxDataTable('pagerHeight');
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
            this.host.jqxDataTable('pageSize', arg);
        }
        else {
            return this.host.jqxDataTable('pageSize');
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
            this.host.jqxDataTable('pageSizeOptions', arg);
        }
        else {
            return this.host.jqxDataTable('pageSizeOptions');
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
            this.host.jqxDataTable('pageable', arg);
        }
        else {
            return this.host.jqxDataTable('pageable');
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
            this.host.jqxDataTable('pagerPosition', arg);
        }
        else {
            return this.host.jqxDataTable('pagerPosition');
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
            this.host.jqxDataTable('pagerMode', arg);
        }
        else {
            return this.host.jqxDataTable('pagerMode');
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
            this.host.jqxDataTable('pagerButtonsCount', arg);
        }
        else {
            return this.host.jqxDataTable('pagerButtonsCount');
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
            this.host.jqxDataTable('pagerRenderer', arg);
        }
        else {
            return this.host.jqxDataTable('pagerRenderer');
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
            this.host.jqxDataTable('ready', arg);
        }
        else {
            return this.host.jqxDataTable('ready');
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
            this.host.jqxDataTable('rowDetails', arg);
        }
        else {
            return this.host.jqxDataTable('rowDetails');
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
            this.host.jqxDataTable('renderToolbar', arg);
        }
        else {
            return this.host.jqxDataTable('renderToolbar');
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
            this.host.jqxDataTable('renderStatusBar', arg);
        }
        else {
            return this.host.jqxDataTable('renderStatusBar');
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
            this.host.jqxDataTable('rendering', arg);
        }
        else {
            return this.host.jqxDataTable('rendering');
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
            this.host.jqxDataTable('rendered', arg);
        }
        else {
            return this.host.jqxDataTable('rendered');
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
            this.host.jqxDataTable('rtl', arg);
        }
        else {
            return this.host.jqxDataTable('rtl');
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
            this.host.jqxDataTable('source', arg);
        }
        else {
            return this.host.jqxDataTable('source');
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
            this.host.jqxDataTable('sortable', arg);
        }
        else {
            return this.host.jqxDataTable('sortable');
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
            this.host.jqxDataTable('showAggregates', arg);
        }
        else {
            return this.host.jqxDataTable('showAggregates');
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
            this.host.jqxDataTable('showToolbar', arg);
        }
        else {
            return this.host.jqxDataTable('showToolbar');
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
            this.host.jqxDataTable('showStatusbar', arg);
        }
        else {
            return this.host.jqxDataTable('showStatusbar');
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
            this.host.jqxDataTable('statusBarHeight', arg);
        }
        else {
            return this.host.jqxDataTable('statusBarHeight');
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
            this.host.jqxDataTable('scrollBarSize', arg);
        }
        else {
            return this.host.jqxDataTable('scrollBarSize');
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
            this.host.jqxDataTable('selectionMode', arg);
        }
        else {
            return this.host.jqxDataTable('selectionMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    serverProcessing(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('serverProcessing', arg);
        }
        else {
            return this.host.jqxDataTable('serverProcessing');
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
            this.host.jqxDataTable('showHeader', arg);
        }
        else {
            return this.host.jqxDataTable('showHeader');
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
            this.host.jqxDataTable('theme', arg);
        }
        else {
            return this.host.jqxDataTable('theme');
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
            this.host.jqxDataTable('toolbarHeight', arg);
        }
        else {
            return this.host.jqxDataTable('toolbarHeight');
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
            this.host.jqxDataTable('width', arg);
        }
        else {
            return this.host.jqxDataTable('width');
        }
    }
    // jqxDataTableComponent functions
    /**
     * @param {?} rowIndex
     * @param {?} rowData
     * @param {?} rowPosition
     * @return {?}
     */
    addRow(rowIndex, rowData, rowPosition) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('addRow', rowIndex, rowData, rowPosition);
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
        this.host.jqxDataTable('addFilter', dataField, filerGroup);
    }
    /**
     * @return {?}
     */
    applyFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('applyFilters');
    }
    /**
     * @return {?}
     */
    beginUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('beginUpdate');
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    beginRowEdit(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('beginRowEdit', rowIndex);
    }
    /**
     * @param {?} rowIndex
     * @param {?} dataField
     * @return {?}
     */
    beginCellEdit(rowIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('beginCellEdit', rowIndex, dataField);
    }
    /**
     * @return {?}
     */
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('clearSelection');
    }
    /**
     * @return {?}
     */
    clearFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('clearFilters');
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('clear');
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('destroy');
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    deleteRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('deleteRow', rowIndex);
    }
    /**
     * @return {?}
     */
    endUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('endUpdate');
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    ensureRowVisible(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('ensureRowVisible', rowIndex);
    }
    /**
     * @param {?} rowIndex
     * @param {?} cancelChanges
     * @return {?}
     */
    endRowEdit(rowIndex, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('endRowEdit', rowIndex, cancelChanges);
    }
    /**
     * @param {?} rowIndex
     * @param {?} dataField
     * @return {?}
     */
    endCellEdit(rowIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('endCellEdit', rowIndex, dataField);
    }
    /**
     * @param {?} exportDataType
     * @return {?}
     */
    exportData(exportDataType) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('exportData', exportDataType);
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('focus');
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
        return this.host.jqxDataTable('getColumnProperty', dataField, propertyName);
    }
    /**
     * @param {?} pageIndex
     * @return {?}
     */
    goToPage(pageIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('goToPage', pageIndex);
    }
    /**
     * @return {?}
     */
    goToPrevPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('goToPrevPage');
    }
    /**
     * @return {?}
     */
    goToNextPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('goToNextPage');
    }
    /**
     * @return {?}
     */
    getSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getSelection');
    }
    /**
     * @return {?}
     */
    getRows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getRows');
    }
    /**
     * @return {?}
     */
    getView() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getView');
    }
    /**
     * @param {?} rowIndex
     * @param {?} dataField
     * @return {?}
     */
    getCellValue(rowIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getCellValue', rowIndex, dataField);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    hideColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('hideColumn', dataField);
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    hideDetails(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('hideDetails', rowIndex);
    }
    /**
     * @return {?}
     */
    isBindingCompleted() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('isBindingCompleted');
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    lockRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('lockRow', rowIndex);
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('refresh');
    }
    /**
     * @return {?}
     */
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('render');
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    removeFilter(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('removeFilter', dataField);
    }
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    scrollOffset(top, left) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('scrollOffset', top, left);
    }
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
        this.host.jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    showColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('showColumn', dataField);
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    selectRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('selectRow', rowIndex);
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    showDetails(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('showDetails', rowIndex);
    }
    /**
     * @param {?} rowIndex
     * @param {?} dataField
     * @param {?} value
     * @return {?}
     */
    setCellValue(rowIndex, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('setCellValue', rowIndex, dataField, value);
    }
    /**
     * @param {?} dataField
     * @param {?} sortOrder
     * @return {?}
     */
    sortBy(dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('sortBy', dataField, sortOrder);
    }
    /**
     * @return {?}
     */
    updating() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('updating');
    }
    /**
     * @return {?}
     */
    updateBoundData() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('updateBoundData');
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    unselectRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('unselectRow', rowIndex);
    }
    /**
     * @param {?} rowIndex
     * @param {?} rowData
     * @return {?}
     */
    updateRow(rowIndex, rowData) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('updateRow', rowIndex, rowData);
    }
    /**
     * @param {?} rowIndex
     * @return {?}
     */
    unlockRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('unlockRow', rowIndex);
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
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
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
    }
} //jqxDataTableComponent
jqxDataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxDataTable',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxDataTableComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxDataTableComponent.propDecorators = {
    attrAltRows: [{ type: Input, args: ['altRows',] }],
    attrAutoRowHeight: [{ type: Input, args: ['autoRowHeight',] }],
    attrAggregatesHeight: [{ type: Input, args: ['aggregatesHeight',] }],
    attrAutoShowLoadElement: [{ type: Input, args: ['autoShowLoadElement',] }],
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
    attrGroups: [{ type: Input, args: ['groups',] }],
    attrGroupsRenderer: [{ type: Input, args: ['groupsRenderer',] }],
    attrInitRowDetails: [{ type: Input, args: ['initRowDetails',] }],
    attrIncrementalSearch: [{ type: Input, args: ['incrementalSearch',] }],
    attrLocalization: [{ type: Input, args: ['localization',] }],
    attrPagerHeight: [{ type: Input, args: ['pagerHeight',] }],
    attrPageSize: [{ type: Input, args: ['pageSize',] }],
    attrPageSizeOptions: [{ type: Input, args: ['pageSizeOptions',] }],
    attrPageable: [{ type: Input, args: ['pageable',] }],
    attrPagerPosition: [{ type: Input, args: ['pagerPosition',] }],
    attrPagerMode: [{ type: Input, args: ['pagerMode',] }],
    attrPagerButtonsCount: [{ type: Input, args: ['pagerButtonsCount',] }],
    attrPagerRenderer: [{ type: Input, args: ['pagerRenderer',] }],
    attrReady: [{ type: Input, args: ['ready',] }],
    attrRowDetails: [{ type: Input, args: ['rowDetails',] }],
    attrRenderToolbar: [{ type: Input, args: ['renderToolbar',] }],
    attrRenderStatusBar: [{ type: Input, args: ['renderStatusBar',] }],
    attrRendering: [{ type: Input, args: ['rendering',] }],
    attrRendered: [{ type: Input, args: ['rendered',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrSource: [{ type: Input, args: ['source',] }],
    attrSortable: [{ type: Input, args: ['sortable',] }],
    attrShowAggregates: [{ type: Input, args: ['showAggregates',] }],
    attrShowToolbar: [{ type: Input, args: ['showToolbar',] }],
    attrShowStatusbar: [{ type: Input, args: ['showStatusbar',] }],
    attrStatusBarHeight: [{ type: Input, args: ['statusBarHeight',] }],
    attrScrollBarSize: [{ type: Input, args: ['scrollBarSize',] }],
    attrSelectionMode: [{ type: Input, args: ['selectionMode',] }],
    attrServerProcessing: [{ type: Input, args: ['serverProcessing',] }],
    attrShowHeader: [{ type: Input, args: ['showHeader',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrToolbarHeight: [{ type: Input, args: ['toolbarHeight',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onBindingComplete: [{ type: Output }],
    onCellBeginEdit: [{ type: Output }],
    onCellEndEdit: [{ type: Output }],
    onCellValueChanged: [{ type: Output }],
    onColumnResized: [{ type: Output }],
    onColumnReordered: [{ type: Output }],
    onSort: [{ type: Output }],
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
    onRowCollapse: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxDataTableComponent.prototype.attrAltRows;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrAutoRowHeight;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrAggregatesHeight;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrAutoShowLoadElement;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrColumnsHeight;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrColumns;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrColumnGroups;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrColumnsResize;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrColumnsReorder;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrEditable;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrEditSettings;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrExportSettings;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrEnableHover;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrEnableBrowserSelection;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrFilterable;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrFilterHeight;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrFilterMode;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrGroups;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrGroupsRenderer;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrInitRowDetails;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrIncrementalSearch;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrLocalization;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrPagerHeight;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrPageSize;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrPageSizeOptions;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrPageable;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrPagerPosition;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrPagerMode;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrPagerButtonsCount;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrPagerRenderer;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrReady;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrRowDetails;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrRenderToolbar;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrRenderStatusBar;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrRendering;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrRendered;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrRtl;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrSource;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrSortable;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrShowAggregates;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrShowToolbar;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrShowStatusbar;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrStatusBarHeight;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrScrollBarSize;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrSelectionMode;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrServerProcessing;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrShowHeader;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrTheme;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrToolbarHeight;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrWidth;
    /** @type {?} */
    jqxDataTableComponent.prototype.attrHeight;
    /** @type {?} */
    jqxDataTableComponent.prototype.autoCreate;
    /** @type {?} */
    jqxDataTableComponent.prototype.properties;
    /** @type {?} */
    jqxDataTableComponent.prototype.host;
    /** @type {?} */
    jqxDataTableComponent.prototype.elementRef;
    /** @type {?} */
    jqxDataTableComponent.prototype.widgetObject;
    /** @type {?} */
    jqxDataTableComponent.prototype.content;
    /** @type {?} */
    jqxDataTableComponent.prototype.container;
    /** @type {?} */
    jqxDataTableComponent.prototype.onBindingComplete;
    /** @type {?} */
    jqxDataTableComponent.prototype.onCellBeginEdit;
    /** @type {?} */
    jqxDataTableComponent.prototype.onCellEndEdit;
    /** @type {?} */
    jqxDataTableComponent.prototype.onCellValueChanged;
    /** @type {?} */
    jqxDataTableComponent.prototype.onColumnResized;
    /** @type {?} */
    jqxDataTableComponent.prototype.onColumnReordered;
    /** @type {?} */
    jqxDataTableComponent.prototype.onSort;
    /** @type {?} */
    jqxDataTableComponent.prototype.onFilter;
    /** @type {?} */
    jqxDataTableComponent.prototype.onPageChanged;
    /** @type {?} */
    jqxDataTableComponent.prototype.onPageSizeChanged;
    /** @type {?} */
    jqxDataTableComponent.prototype.onRowClick;
    /** @type {?} */
    jqxDataTableComponent.prototype.onRowDoubleClick;
    /** @type {?} */
    jqxDataTableComponent.prototype.onRowSelect;
    /** @type {?} */
    jqxDataTableComponent.prototype.onRowUnselect;
    /** @type {?} */
    jqxDataTableComponent.prototype.onRowBeginEdit;
    /** @type {?} */
    jqxDataTableComponent.prototype.onRowEndEdit;
    /** @type {?} */
    jqxDataTableComponent.prototype.onRowExpand;
    /** @type {?} */
    jqxDataTableComponent.prototype.onRowCollapse;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
