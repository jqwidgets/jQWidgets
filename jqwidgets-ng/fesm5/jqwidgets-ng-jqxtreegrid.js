import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxdatatable';
import '../jqwidgets/jqxtreegrid';
import { __spread, __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
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
    jqxTreeGridComponent.prototype.ngOnInit = function () {
    };
    ;
    jqxTreeGridComponent.prototype.ngAfterViewInit = function () {
        var children = JQXLite(this.elementRef.nativeElement.children).find('tr');
        var html = '';
        var options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
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
    jqxTreeGridComponent.prototype.ngAfterViewChecked = function () {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                var result = JQXLite.jqx.parseSourceTag(this.container);
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
    jqxTreeGridComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    jqxTreeGridComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxTreeGridComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxTreeGridComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    jqxTreeGridComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxTreeGridComponent.prototype.createComponent = function (options) {
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
    jqxTreeGridComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxTreeGridComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxTreeGridComponent.prototype.setOptions = function (options) {
        this.host.jqxTreeGrid('setOptions', options);
    };
    // jqxTreeGridComponent properties
    jqxTreeGridComponent.prototype.altRows = function (arg) {
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
    jqxTreeGridComponent.prototype.autoRowHeight = function (arg) {
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
    jqxTreeGridComponent.prototype.aggregatesHeight = function (arg) {
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
    jqxTreeGridComponent.prototype.autoShowLoadElement = function (arg) {
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
    jqxTreeGridComponent.prototype.checkboxes = function (arg) {
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
    jqxTreeGridComponent.prototype.columnsHeight = function (arg) {
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
    jqxTreeGridComponent.prototype.columns = function (arg) {
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
    jqxTreeGridComponent.prototype.columnGroups = function (arg) {
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
    jqxTreeGridComponent.prototype.columnsResize = function (arg) {
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
    jqxTreeGridComponent.prototype.columnsReorder = function (arg) {
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
    jqxTreeGridComponent.prototype.disabled = function (arg) {
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
    jqxTreeGridComponent.prototype.editable = function (arg) {
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
    jqxTreeGridComponent.prototype.editSettings = function (arg) {
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
    jqxTreeGridComponent.prototype.exportSettings = function (arg) {
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
    jqxTreeGridComponent.prototype.enableHover = function (arg) {
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
    jqxTreeGridComponent.prototype.enableBrowserSelection = function (arg) {
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
    jqxTreeGridComponent.prototype.filterable = function (arg) {
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
    jqxTreeGridComponent.prototype.filterHeight = function (arg) {
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
    jqxTreeGridComponent.prototype.filterMode = function (arg) {
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
    jqxTreeGridComponent.prototype.height = function (arg) {
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
    jqxTreeGridComponent.prototype.hierarchicalCheckboxes = function (arg) {
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
    jqxTreeGridComponent.prototype.icons = function (arg) {
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
    jqxTreeGridComponent.prototype.incrementalSearch = function (arg) {
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
    jqxTreeGridComponent.prototype.localization = function (arg) {
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
    jqxTreeGridComponent.prototype.pagerHeight = function (arg) {
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
    jqxTreeGridComponent.prototype.pageSize = function (arg) {
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
    jqxTreeGridComponent.prototype.pageSizeOptions = function (arg) {
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
    jqxTreeGridComponent.prototype.pageable = function (arg) {
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
    jqxTreeGridComponent.prototype.pagerPosition = function (arg) {
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
    jqxTreeGridComponent.prototype.pagerMode = function (arg) {
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
    jqxTreeGridComponent.prototype.pageSizeMode = function (arg) {
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
    jqxTreeGridComponent.prototype.pagerButtonsCount = function (arg) {
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
    jqxTreeGridComponent.prototype.pagerRenderer = function (arg) {
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
    jqxTreeGridComponent.prototype.ready = function (arg) {
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
    jqxTreeGridComponent.prototype.rowDetails = function (arg) {
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
    jqxTreeGridComponent.prototype.rowDetailsRenderer = function (arg) {
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
    jqxTreeGridComponent.prototype.renderToolbar = function (arg) {
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
    jqxTreeGridComponent.prototype.renderStatusBar = function (arg) {
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
    jqxTreeGridComponent.prototype.rendering = function (arg) {
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
    jqxTreeGridComponent.prototype.rendered = function (arg) {
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
    jqxTreeGridComponent.prototype.rtl = function (arg) {
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
    jqxTreeGridComponent.prototype.source = function (arg) {
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
    jqxTreeGridComponent.prototype.sortable = function (arg) {
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
    jqxTreeGridComponent.prototype.showAggregates = function (arg) {
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
    jqxTreeGridComponent.prototype.showSubAggregates = function (arg) {
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
    jqxTreeGridComponent.prototype.showToolbar = function (arg) {
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
    jqxTreeGridComponent.prototype.showStatusbar = function (arg) {
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
    jqxTreeGridComponent.prototype.statusBarHeight = function (arg) {
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
    jqxTreeGridComponent.prototype.scrollBarSize = function (arg) {
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
    jqxTreeGridComponent.prototype.selectionMode = function (arg) {
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
    jqxTreeGridComponent.prototype.showHeader = function (arg) {
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
    jqxTreeGridComponent.prototype.theme = function (arg) {
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
    jqxTreeGridComponent.prototype.toolbarHeight = function (arg) {
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
    jqxTreeGridComponent.prototype.width = function (arg) {
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
    jqxTreeGridComponent.prototype.virtualModeCreateRecords = function (arg) {
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
    jqxTreeGridComponent.prototype.virtualModeRecordCreating = function (arg) {
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
    jqxTreeGridComponent.prototype.addRow = function (rowKey, rowData, rowPosition, parent) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);
    };
    jqxTreeGridComponent.prototype.addFilter = function (dataField, filerGroup) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addFilter', dataField, filerGroup);
    };
    jqxTreeGridComponent.prototype.applyFilters = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('applyFilters');
    };
    jqxTreeGridComponent.prototype.beginUpdate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginUpdate');
    };
    jqxTreeGridComponent.prototype.beginRowEdit = function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginRowEdit', rowKey);
    };
    jqxTreeGridComponent.prototype.beginCellEdit = function (rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginCellEdit', rowKey, dataField);
    };
    jqxTreeGridComponent.prototype.clearSelection = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearSelection');
    };
    jqxTreeGridComponent.prototype.clearFilters = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearFilters');
    };
    jqxTreeGridComponent.prototype.clear = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clear');
    };
    jqxTreeGridComponent.prototype.checkRow = function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('checkRow', rowKey);
    };
    jqxTreeGridComponent.prototype.collapseRow = function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseRow', rowKey);
    };
    jqxTreeGridComponent.prototype.collapseAll = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseAll');
    };
    jqxTreeGridComponent.prototype.destroy = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('destroy');
    };
    jqxTreeGridComponent.prototype.deleteRow = function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('deleteRow', rowKey);
    };
    jqxTreeGridComponent.prototype.expandRow = function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandRow', rowKey);
    };
    jqxTreeGridComponent.prototype.expandAll = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandAll');
    };
    jqxTreeGridComponent.prototype.endUpdate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endUpdate');
    };
    jqxTreeGridComponent.prototype.ensureRowVisible = function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('ensureRowVisible', rowKey);
    };
    jqxTreeGridComponent.prototype.endRowEdit = function (rowKey, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endRowEdit', rowKey, cancelChanges);
    };
    jqxTreeGridComponent.prototype.endCellEdit = function (rowKey, dataField, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);
    };
    jqxTreeGridComponent.prototype.exportData = function (exportDataType) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('exportData', exportDataType);
    };
    jqxTreeGridComponent.prototype.focus = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('focus');
    };
    jqxTreeGridComponent.prototype.getColumnProperty = function (dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getColumnProperty', dataField, propertyName);
    };
    jqxTreeGridComponent.prototype.goToPage = function (pageIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPage', pageIndex);
    };
    jqxTreeGridComponent.prototype.goToPrevPage = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPrevPage');
    };
    jqxTreeGridComponent.prototype.goToNextPage = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToNextPage');
    };
    jqxTreeGridComponent.prototype.getSelection = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getSelection');
    };
    jqxTreeGridComponent.prototype.getKey = function (row) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getKey', row);
    };
    jqxTreeGridComponent.prototype.getRow = function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRow', rowKey);
    };
    jqxTreeGridComponent.prototype.getRows = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRows');
    };
    jqxTreeGridComponent.prototype.getCheckedRows = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCheckedRows');
    };
    jqxTreeGridComponent.prototype.getView = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getView');
    };
    jqxTreeGridComponent.prototype.getCellValue = function (rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCellValue', rowKey, dataField);
    };
    jqxTreeGridComponent.prototype.hideColumn = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('hideColumn', dataField);
    };
    jqxTreeGridComponent.prototype.isBindingCompleted = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('isBindingCompleted');
    };
    jqxTreeGridComponent.prototype.lockRow = function (rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('lockRow', rowKey);
    };
    jqxTreeGridComponent.prototype.refresh = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('refresh');
    };
    jqxTreeGridComponent.prototype.render = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('render');
    };
    jqxTreeGridComponent.prototype.removeFilter = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('removeFilter', dataField);
    };
    jqxTreeGridComponent.prototype.scrollOffset = function (top, left) {
        if (top !== undefined || left !== undefined) {
            this.host.jqxTreeGrid('scrollOffset', top, left);
        }
        else {
            return this.host.jqxTreeGrid('scrollOffset');
        }
    };
    ;
    jqxTreeGridComponent.prototype.setColumnProperty = function (dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);
    };
    jqxTreeGridComponent.prototype.showColumn = function (dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('showColumn', dataField);
    };
    jqxTreeGridComponent.prototype.selectRow = function (rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('selectRow', rowId);
    };
    jqxTreeGridComponent.prototype.setCellValue = function (rowId, dataField, cellValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setCellValue', rowId, dataField, cellValue);
    };
    jqxTreeGridComponent.prototype.sortBy = function (dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('sortBy', dataField, sortOrder);
    };
    jqxTreeGridComponent.prototype.updating = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('updating');
    };
    jqxTreeGridComponent.prototype.updateBoundData = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateBoundData');
    };
    jqxTreeGridComponent.prototype.unselectRow = function (rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unselectRow', rowId);
    };
    jqxTreeGridComponent.prototype.uncheckRow = function (rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('uncheckRow', rowId);
    };
    jqxTreeGridComponent.prototype.updateRow = function (rowId, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateRow', rowId, data);
    };
    jqxTreeGridComponent.prototype.unlockRow = function (rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unlockRow', rowId);
    };
    jqxTreeGridComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
        this.host.on('cellBeginEdit', function (eventData) { _this.onCellBeginEdit.emit(eventData); });
        this.host.on('cellEndEdit', function (eventData) { _this.onCellEndEdit.emit(eventData); });
        this.host.on('cellValueChanged', function (eventData) { _this.onCellValueChanged.emit(eventData); });
        this.host.on('columnResized', function (eventData) { _this.onColumnResized.emit(eventData); });
        this.host.on('columnReordered', function (eventData) { _this.onColumnReordered.emit(eventData); });
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
        this.host.on('rowCheck', function (eventData) { _this.onRowCheck.emit(eventData); });
        this.host.on('rowUncheck', function (eventData) { _this.onRowUncheck.emit(eventData); });
        this.host.on('sort', function (eventData) { _this.onSort.emit(eventData); });
    };
    jqxTreeGridComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('altRows'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrAltRows", void 0);
    __decorate([
        Input('autoRowHeight'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrAutoRowHeight", void 0);
    __decorate([
        Input('aggregatesHeight'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrAggregatesHeight", void 0);
    __decorate([
        Input('autoShowLoadElement'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrAutoShowLoadElement", void 0);
    __decorate([
        Input('checkboxes'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrCheckboxes", void 0);
    __decorate([
        Input('columnsHeight'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrColumnsHeight", void 0);
    __decorate([
        Input('columns'),
        __metadata("design:type", Array)
    ], jqxTreeGridComponent.prototype, "attrColumns", void 0);
    __decorate([
        Input('columnGroups'),
        __metadata("design:type", Array)
    ], jqxTreeGridComponent.prototype, "attrColumnGroups", void 0);
    __decorate([
        Input('columnsResize'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrColumnsResize", void 0);
    __decorate([
        Input('columnsReorder'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrColumnsReorder", void 0);
    __decorate([
        Input('disabled'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrDisabled", void 0);
    __decorate([
        Input('editable'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrEditable", void 0);
    __decorate([
        Input('editSettings'),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "attrEditSettings", void 0);
    __decorate([
        Input('exportSettings'),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "attrExportSettings", void 0);
    __decorate([
        Input('enableHover'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrEnableHover", void 0);
    __decorate([
        Input('enableBrowserSelection'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrEnableBrowserSelection", void 0);
    __decorate([
        Input('filterable'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrFilterable", void 0);
    __decorate([
        Input('filterHeight'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrFilterHeight", void 0);
    __decorate([
        Input('filterMode'),
        __metadata("design:type", String)
    ], jqxTreeGridComponent.prototype, "attrFilterMode", void 0);
    __decorate([
        Input('hierarchicalCheckboxes'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrHierarchicalCheckboxes", void 0);
    __decorate([
        Input('icons'),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "attrIcons", void 0);
    __decorate([
        Input('incrementalSearch'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrIncrementalSearch", void 0);
    __decorate([
        Input('localization'),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "attrLocalization", void 0);
    __decorate([
        Input('pagerHeight'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrPagerHeight", void 0);
    __decorate([
        Input('pageSize'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrPageSize", void 0);
    __decorate([
        Input('pageSizeOptions'),
        __metadata("design:type", Array)
    ], jqxTreeGridComponent.prototype, "attrPageSizeOptions", void 0);
    __decorate([
        Input('pageable'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrPageable", void 0);
    __decorate([
        Input('pagerPosition'),
        __metadata("design:type", String)
    ], jqxTreeGridComponent.prototype, "attrPagerPosition", void 0);
    __decorate([
        Input('pagerMode'),
        __metadata("design:type", String)
    ], jqxTreeGridComponent.prototype, "attrPagerMode", void 0);
    __decorate([
        Input('pageSizeMode'),
        __metadata("design:type", String)
    ], jqxTreeGridComponent.prototype, "attrPageSizeMode", void 0);
    __decorate([
        Input('pagerButtonsCount'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrPagerButtonsCount", void 0);
    __decorate([
        Input('pagerRenderer'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrPagerRenderer", void 0);
    __decorate([
        Input('ready'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrReady", void 0);
    __decorate([
        Input('rowDetails'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrRowDetails", void 0);
    __decorate([
        Input('rowDetailsRenderer'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrRowDetailsRenderer", void 0);
    __decorate([
        Input('renderToolbar'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrRenderToolbar", void 0);
    __decorate([
        Input('renderStatusBar'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrRenderStatusBar", void 0);
    __decorate([
        Input('rendering'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrRendering", void 0);
    __decorate([
        Input('rendered'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrRendered", void 0);
    __decorate([
        Input('rtl'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrRtl", void 0);
    __decorate([
        Input('source'),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "attrSource", void 0);
    __decorate([
        Input('sortable'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrSortable", void 0);
    __decorate([
        Input('showAggregates'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrShowAggregates", void 0);
    __decorate([
        Input('showSubAggregates'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrShowSubAggregates", void 0);
    __decorate([
        Input('showToolbar'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrShowToolbar", void 0);
    __decorate([
        Input('showStatusbar'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrShowStatusbar", void 0);
    __decorate([
        Input('statusBarHeight'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrStatusBarHeight", void 0);
    __decorate([
        Input('scrollBarSize'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrScrollBarSize", void 0);
    __decorate([
        Input('selectionMode'),
        __metadata("design:type", String)
    ], jqxTreeGridComponent.prototype, "attrSelectionMode", void 0);
    __decorate([
        Input('showHeader'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "attrShowHeader", void 0);
    __decorate([
        Input('theme'),
        __metadata("design:type", String)
    ], jqxTreeGridComponent.prototype, "attrTheme", void 0);
    __decorate([
        Input('toolbarHeight'),
        __metadata("design:type", Number)
    ], jqxTreeGridComponent.prototype, "attrToolbarHeight", void 0);
    __decorate([
        Input('virtualModeCreateRecords'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrVirtualModeCreateRecords", void 0);
    __decorate([
        Input('virtualModeRecordCreating'),
        __metadata("design:type", Function)
    ], jqxTreeGridComponent.prototype, "attrVirtualModeRecordCreating", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "attrWidth", void 0);
    __decorate([
        Input('height'),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "attrHeight", void 0);
    __decorate([
        Input('auto-create'),
        __metadata("design:type", Boolean)
    ], jqxTreeGridComponent.prototype, "autoCreate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onBindingComplete", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onCellBeginEdit", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onCellEndEdit", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onCellValueChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onColumnResized", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onColumnReordered", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onFilter", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onPageChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onPageSizeChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowDoubleClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowSelect", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowUnselect", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowBeginEdit", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowEndEdit", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowExpand", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowCollapse", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowCheck", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onRowUncheck", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], jqxTreeGridComponent.prototype, "onSort", void 0);
    jqxTreeGridComponent = __decorate([
        Component({
            selector: 'jqxTreeGrid',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], jqxTreeGridComponent);
    return jqxTreeGridComponent;
}()); //jqxTreeGridComponent

var jqxTreeGridModule = /** @class */ (function () {
    function jqxTreeGridModule() {
    }
    jqxTreeGridModule = __decorate([
        NgModule({
            imports: [],
            declarations: [jqxTreeGridComponent],
            exports: [jqxTreeGridComponent]
        })
    ], jqxTreeGridModule);
    return jqxTreeGridModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTreeGridComponent, jqxTreeGridModule };
