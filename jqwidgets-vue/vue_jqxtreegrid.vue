/*
jQWidgets v7.1.0 (2019-Feb)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxdata.export.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxcheckbox.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxcombobox.js';
    import '../jqwidgets/jqxnumberinput.js';
    import '../jqwidgets/jqxdropdownlist.js';
    import '../jqwidgets/jqxdatatable.js';
    import '../jqwidgets/jqxtreegrid.js';

    export default {
        props: {
            altRows: Boolean,
            autoRowHeight: Boolean,
            aggregatesHeight: Number,
            autoShowLoadElement: Boolean,
            checkboxes: Boolean,
            columnsHeight: Number,
            columns: Array,
            columnGroups: Array,
            columnsResize: Boolean,
            columnsReorder: Boolean,
            disabled: Boolean,
            editable: Boolean,
            editSettings: Object,
            exportSettings: Object,
            enableHover: Boolean,
            enableBrowserSelection: Boolean,
            filterable: Boolean,
            filterHeight: Number,
            filterMode: String,
            height: [Number, String],
            hierarchicalCheckboxes: Boolean,
            icons: [Boolean, Function],
            incrementalSearch: Boolean,
            localization: Object,
            pagerHeight: Number,
            pageSize: Number,
            pageSizeOptions: Array,
            pageable: Boolean,
            pagerPosition: String,
            pagerMode: String,
            pageSizeMode: String,
            pagerButtonsCount: Number,
            pagerRenderer: Function,
            ready: Function,
            rowDetails: Boolean,
            rowDetailsRenderer: Function,
            renderToolbar: Function,
            renderStatusBar: Function,
            rendering: Function,
            rendered: Function,
            rtl: Boolean,
            source: Object,
            sortable: Boolean,
            showAggregates: Boolean,
            showSubAggregates: Boolean,
            showToolbar: Boolean,
            showStatusbar: Boolean,
            statusBarHeight: Number,
            scrollBarSize: Number,
            selectionMode: String,
            showHeader: Boolean,
            theme: String,
            toolbarHeight: Number,
            width: [Number, String],
            virtualModeCreateRecords: Function,
            virtualModeRecordCreating: Function,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxTreeGrid' + JQXLite.generateID();
            this.componentSelector = '#' + this.id;
        },
        mounted: function () {
            if (this.autoCreate) this.__createComponent__();
        },
        methods: {
            createComponent: function (options) {
                if (!this.autoCreate) this.__createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            },
            setOptions: function (options) {
                JQXLite(this.componentSelector).jqxTreeGrid(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxTreeGrid(usedProps[i]);
                }
                return resultToReturn;
            },
            addRow: function(rowKey, rowData, rowPosition, parent) {
                JQXLite(this.componentSelector).jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);  
            },
            addFilter: function(dataField, filerGroup) {
                JQXLite(this.componentSelector).jqxTreeGrid('addFilter', dataField, filerGroup);  
            },
            applyFilters: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('applyFilters');  
            },
            beginUpdate: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('beginUpdate');  
            },
            beginRowEdit: function(rowKey) {
                JQXLite(this.componentSelector).jqxTreeGrid('beginRowEdit', rowKey);  
            },
            beginCellEdit: function(rowKey, dataField) {
                JQXLite(this.componentSelector).jqxTreeGrid('beginCellEdit', rowKey, dataField);  
            },
            clearSelection: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('clearSelection');  
            },
            clearFilters: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('clearFilters');  
            },
            clear: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('clear');  
            },
            checkRow: function(rowKey) {
                JQXLite(this.componentSelector).jqxTreeGrid('checkRow', rowKey);  
            },
            collapseRow: function(rowKey) {
                JQXLite(this.componentSelector).jqxTreeGrid('collapseRow', rowKey);  
            },
            collapseAll: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('collapseAll');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('destroy');  
            },
            deleteRow: function(rowKey) {
                JQXLite(this.componentSelector).jqxTreeGrid('deleteRow', rowKey);  
            },
            expandRow: function(rowKey) {
                JQXLite(this.componentSelector).jqxTreeGrid('expandRow', rowKey);  
            },
            expandAll: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('expandAll');  
            },
            endUpdate: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('endUpdate');  
            },
            ensureRowVisible: function(rowKey) {
                JQXLite(this.componentSelector).jqxTreeGrid('ensureRowVisible', rowKey);  
            },
            endRowEdit: function(rowKey, cancelChanges) {
                JQXLite(this.componentSelector).jqxTreeGrid('endRowEdit', rowKey, cancelChanges);  
            },
            endCellEdit: function(rowKey, dataField, cancelChanges) {
                JQXLite(this.componentSelector).jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);  
            },
            exportData: function(exportDataType) {
                return JQXLite(this.componentSelector).jqxTreeGrid('exportData', exportDataType);  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('focus');  
            },
            getColumnProperty: function(dataField, propertyName) {
                return JQXLite(this.componentSelector).jqxTreeGrid('getColumnProperty', dataField, propertyName);  
            },
            goToPage: function(pageIndex) {
                JQXLite(this.componentSelector).jqxTreeGrid('goToPage', pageIndex);  
            },
            goToPrevPage: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('goToPrevPage');  
            },
            goToNextPage: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('goToNextPage');  
            },
            getSelection: function() {
                return JQXLite(this.componentSelector).jqxTreeGrid('getSelection');  
            },
            getKey: function(row) {
                return JQXLite(this.componentSelector).jqxTreeGrid('getKey', row);  
            },
            getRow: function(rowKey) {
                return JQXLite(this.componentSelector).jqxTreeGrid('getRow', rowKey);  
            },
            getRows: function() {
                return JQXLite(this.componentSelector).jqxTreeGrid('getRows');  
            },
            getCheckedRows: function() {
                return JQXLite(this.componentSelector).jqxTreeGrid('getCheckedRows');  
            },
            getView: function() {
                return JQXLite(this.componentSelector).jqxTreeGrid('getView');  
            },
            getCellValue: function(rowKey, dataField) {
                return JQXLite(this.componentSelector).jqxTreeGrid('getCellValue', rowKey, dataField);  
            },
            hideColumn: function(dataField) {
                JQXLite(this.componentSelector).jqxTreeGrid('hideColumn', dataField);  
            },
            isBindingCompleted: function() {
                return JQXLite(this.componentSelector).jqxTreeGrid('isBindingCompleted');  
            },
            lockRow: function(rowKey) {
                JQXLite(this.componentSelector).jqxTreeGrid('lockRow', rowKey);  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('refresh');  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('render');  
            },
            removeFilter: function(dataField) {
                JQXLite(this.componentSelector).jqxTreeGrid('removeFilter', dataField);  
            },
            scrollOffset: function(top, left) {
                return JQXLite(this.componentSelector).jqxTreeGrid('scrollOffset', top, left);  
            },
            setColumnProperty: function(dataField, propertyName, propertyValue) {
                JQXLite(this.componentSelector).jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);  
            },
            showColumn: function(dataField) {
                JQXLite(this.componentSelector).jqxTreeGrid('showColumn', dataField);  
            },
            selectRow: function(rowId) {
                JQXLite(this.componentSelector).jqxTreeGrid('selectRow', rowId);  
            },
            setCellValue: function(rowId, dataField, cellValue) {
                JQXLite(this.componentSelector).jqxTreeGrid('setCellValue', rowId, dataField, cellValue);  
            },
            sortBy: function(dataField, sortOrder) {
                JQXLite(this.componentSelector).jqxTreeGrid('sortBy', dataField, sortOrder);  
            },
            updating: function() {
                return JQXLite(this.componentSelector).jqxTreeGrid('updating');  
            },
            updateBoundData: function() {
                JQXLite(this.componentSelector).jqxTreeGrid('updateBoundData');  
            },
            unselectRow: function(rowId) {
                JQXLite(this.componentSelector).jqxTreeGrid('unselectRow', rowId);  
            },
            uncheckRow: function(rowId) {
                JQXLite(this.componentSelector).jqxTreeGrid('uncheckRow', rowId);  
            },
            updateRow: function(rowId, data) {
                JQXLite(this.componentSelector).jqxTreeGrid('updateRow', rowId, data);  
            },
            unlockRow: function(rowId) {
                JQXLite(this.componentSelector).jqxTreeGrid('unlockRow', rowId);  
            },
            _altRows: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('altRows', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('altRows');
                }
            },
            _autoRowHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('autoRowHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('autoRowHeight');
                }
            },
            _aggregatesHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('aggregatesHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('aggregatesHeight');
                }
            },
            _autoShowLoadElement: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('autoShowLoadElement', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('autoShowLoadElement');
                }
            },
            _checkboxes: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('checkboxes', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('checkboxes');
                }
            },
            _columnsHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('columnsHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('columnsHeight');
                }
            },
            _columns: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('columns', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('columns');
                }
            },
            _columnGroups: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('columnGroups', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('columnGroups');
                }
            },
            _columnsResize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('columnsResize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('columnsResize');
                }
            },
            _columnsReorder: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('columnsReorder', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('columnsReorder');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('disabled');
                }
            },
            _editable: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('editable', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('editable');
                }
            },
            _editSettings: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('editSettings', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('editSettings');
                }
            },
            _exportSettings: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('exportSettings', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('exportSettings');
                }
            },
            _enableHover: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('enableHover', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('enableHover');
                }
            },
            _enableBrowserSelection: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('enableBrowserSelection', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('enableBrowserSelection');
                }
            },
            _filterable: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('filterable', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('filterable');
                }
            },
            _filterHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('filterHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('filterHeight');
                }
            },
            _filterMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('filterMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('filterMode');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('height');
                }
            },
            _hierarchicalCheckboxes: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('hierarchicalCheckboxes', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('hierarchicalCheckboxes');
                }
            },
            _icons: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('icons', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('icons');
                }
            },
            _incrementalSearch: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('incrementalSearch', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('incrementalSearch');
                }
            },
            _localization: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('localization', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('localization');
                }
            },
            _pagerHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pagerHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pagerHeight');
                }
            },
            _pageSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pageSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pageSize');
                }
            },
            _pageSizeOptions: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pageSizeOptions', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pageSizeOptions');
                }
            },
            _pageable: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pageable', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pageable');
                }
            },
            _pagerPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pagerPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pagerPosition');
                }
            },
            _pagerMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pagerMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pagerMode');
                }
            },
            _pageSizeMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pageSizeMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pageSizeMode');
                }
            },
            _pagerButtonsCount: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pagerButtonsCount', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pagerButtonsCount');
                }
            },
            _pagerRenderer: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('pagerRenderer', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('pagerRenderer');
                }
            },
            _ready: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('ready', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('ready');
                }
            },
            _rowDetails: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('rowDetails', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('rowDetails');
                }
            },
            _rowDetailsRenderer: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('rowDetailsRenderer', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('rowDetailsRenderer');
                }
            },
            _renderToolbar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('renderToolbar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('renderToolbar');
                }
            },
            _renderStatusBar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('renderStatusBar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('renderStatusBar');
                }
            },
            _rendering: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('rendering', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('rendering');
                }
            },
            _rendered: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('rendered', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('rendered');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('rtl');
                }
            },
            _source: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('source', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('source');
                }
            },
            _sortable: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('sortable', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('sortable');
                }
            },
            _showAggregates: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('showAggregates', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('showAggregates');
                }
            },
            _showSubAggregates: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('showSubAggregates', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('showSubAggregates');
                }
            },
            _showToolbar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('showToolbar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('showToolbar');
                }
            },
            _showStatusbar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('showStatusbar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('showStatusbar');
                }
            },
            _statusBarHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('statusBarHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('statusBarHeight');
                }
            },
            _scrollBarSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('scrollBarSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('scrollBarSize');
                }
            },
            _selectionMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('selectionMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('selectionMode');
                }
            },
            _showHeader: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('showHeader', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('showHeader');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('theme');
                }
            },
            _toolbarHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('toolbarHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('toolbarHeight');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('width');
                }
            },
            _virtualModeCreateRecords: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('virtualModeCreateRecords', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('virtualModeCreateRecords');
                }
            },
            _virtualModeRecordCreating: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTreeGrid('virtualModeRecordCreating', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTreeGrid('virtualModeRecordCreating');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxTreeGrid(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','checkboxes','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','height','hierarchicalCheckboxes','icons','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pageSizeMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','rowDetailsRenderer','renderToolbar','renderStatusBar','rendering','rendered','rtl','source','sortable','showAggregates','showSubAggregates','showToolbar','showStatusbar','statusBarHeight','scrollBarSize','selectionMode','showHeader','theme','toolbarHeight','width','virtualModeCreateRecords','virtualModeRecordCreating'];
                const componentProps = this.$options.propsData;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            },
            __extendProps__: function () {
                const that = this;

                Object.defineProperty(that, 'altRows', {
                    get() {
                        return that._altRows();
                    },
                    set(newValue) {
                        that._altRows(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoRowHeight', {
                    get() {
                        return that._autoRowHeight();
                    },
                    set(newValue) {
                        that._autoRowHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'aggregatesHeight', {
                    get() {
                        return that._aggregatesHeight();
                    },
                    set(newValue) {
                        that._aggregatesHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoShowLoadElement', {
                    get() {
                        return that._autoShowLoadElement();
                    },
                    set(newValue) {
                        that._autoShowLoadElement(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'checkboxes', {
                    get() {
                        return that._checkboxes();
                    },
                    set(newValue) {
                        that._checkboxes(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'columnsHeight', {
                    get() {
                        return that._columnsHeight();
                    },
                    set(newValue) {
                        that._columnsHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'columns', {
                    get() {
                        return that._columns();
                    },
                    set(newValue) {
                        that._columns(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'columnGroups', {
                    get() {
                        return that._columnGroups();
                    },
                    set(newValue) {
                        that._columnGroups(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'columnsResize', {
                    get() {
                        return that._columnsResize();
                    },
                    set(newValue) {
                        that._columnsResize(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'columnsReorder', {
                    get() {
                        return that._columnsReorder();
                    },
                    set(newValue) {
                        that._columnsReorder(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'disabled', {
                    get() {
                        return that._disabled();
                    },
                    set(newValue) {
                        that._disabled(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'editable', {
                    get() {
                        return that._editable();
                    },
                    set(newValue) {
                        that._editable(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'editSettings', {
                    get() {
                        return that._editSettings();
                    },
                    set(newValue) {
                        that._editSettings(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'exportSettings', {
                    get() {
                        return that._exportSettings();
                    },
                    set(newValue) {
                        that._exportSettings(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableHover', {
                    get() {
                        return that._enableHover();
                    },
                    set(newValue) {
                        that._enableHover(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableBrowserSelection', {
                    get() {
                        return that._enableBrowserSelection();
                    },
                    set(newValue) {
                        that._enableBrowserSelection(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'filterable', {
                    get() {
                        return that._filterable();
                    },
                    set(newValue) {
                        that._filterable(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'filterHeight', {
                    get() {
                        return that._filterHeight();
                    },
                    set(newValue) {
                        that._filterHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'filterMode', {
                    get() {
                        return that._filterMode();
                    },
                    set(newValue) {
                        that._filterMode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'height', {
                    get() {
                        return that._height();
                    },
                    set(newValue) {
                        that._height(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'hierarchicalCheckboxes', {
                    get() {
                        return that._hierarchicalCheckboxes();
                    },
                    set(newValue) {
                        that._hierarchicalCheckboxes(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'icons', {
                    get() {
                        return that._icons();
                    },
                    set(newValue) {
                        that._icons(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'incrementalSearch', {
                    get() {
                        return that._incrementalSearch();
                    },
                    set(newValue) {
                        that._incrementalSearch(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'localization', {
                    get() {
                        return that._localization();
                    },
                    set(newValue) {
                        that._localization(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pagerHeight', {
                    get() {
                        return that._pagerHeight();
                    },
                    set(newValue) {
                        that._pagerHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pageSize', {
                    get() {
                        return that._pageSize();
                    },
                    set(newValue) {
                        that._pageSize(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pageSizeOptions', {
                    get() {
                        return that._pageSizeOptions();
                    },
                    set(newValue) {
                        that._pageSizeOptions(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pageable', {
                    get() {
                        return that._pageable();
                    },
                    set(newValue) {
                        that._pageable(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pagerPosition', {
                    get() {
                        return that._pagerPosition();
                    },
                    set(newValue) {
                        that._pagerPosition(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pagerMode', {
                    get() {
                        return that._pagerMode();
                    },
                    set(newValue) {
                        that._pagerMode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pageSizeMode', {
                    get() {
                        return that._pageSizeMode();
                    },
                    set(newValue) {
                        that._pageSizeMode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pagerButtonsCount', {
                    get() {
                        return that._pagerButtonsCount();
                    },
                    set(newValue) {
                        that._pagerButtonsCount(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pagerRenderer', {
                    get() {
                        return that._pagerRenderer();
                    },
                    set(newValue) {
                        that._pagerRenderer(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'ready', {
                    get() {
                        return that._ready();
                    },
                    set(newValue) {
                        that._ready(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rowDetails', {
                    get() {
                        return that._rowDetails();
                    },
                    set(newValue) {
                        that._rowDetails(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rowDetailsRenderer', {
                    get() {
                        return that._rowDetailsRenderer();
                    },
                    set(newValue) {
                        that._rowDetailsRenderer(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'renderToolbar', {
                    get() {
                        return that._renderToolbar();
                    },
                    set(newValue) {
                        that._renderToolbar(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'renderStatusBar', {
                    get() {
                        return that._renderStatusBar();
                    },
                    set(newValue) {
                        that._renderStatusBar(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rendering', {
                    get() {
                        return that._rendering();
                    },
                    set(newValue) {
                        that._rendering(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rendered', {
                    get() {
                        return that._rendered();
                    },
                    set(newValue) {
                        that._rendered(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rtl', {
                    get() {
                        return that._rtl();
                    },
                    set(newValue) {
                        that._rtl(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'source', {
                    get() {
                        return that._source();
                    },
                    set(newValue) {
                        that._source(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'sortable', {
                    get() {
                        return that._sortable();
                    },
                    set(newValue) {
                        that._sortable(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showAggregates', {
                    get() {
                        return that._showAggregates();
                    },
                    set(newValue) {
                        that._showAggregates(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showSubAggregates', {
                    get() {
                        return that._showSubAggregates();
                    },
                    set(newValue) {
                        that._showSubAggregates(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showToolbar', {
                    get() {
                        return that._showToolbar();
                    },
                    set(newValue) {
                        that._showToolbar(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showStatusbar', {
                    get() {
                        return that._showStatusbar();
                    },
                    set(newValue) {
                        that._showStatusbar(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'statusBarHeight', {
                    get() {
                        return that._statusBarHeight();
                    },
                    set(newValue) {
                        that._statusBarHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'scrollBarSize', {
                    get() {
                        return that._scrollBarSize();
                    },
                    set(newValue) {
                        that._scrollBarSize(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'selectionMode', {
                    get() {
                        return that._selectionMode();
                    },
                    set(newValue) {
                        that._selectionMode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showHeader', {
                    get() {
                        return that._showHeader();
                    },
                    set(newValue) {
                        that._showHeader(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'theme', {
                    get() {
                        return that._theme();
                    },
                    set(newValue) {
                        that._theme(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'toolbarHeight', {
                    get() {
                        return that._toolbarHeight();
                    },
                    set(newValue) {
                        that._toolbarHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'width', {
                    get() {
                        return that._width();
                    },
                    set(newValue) {
                        that._width(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'virtualModeCreateRecords', {
                    get() {
                        return that._virtualModeCreateRecords();
                    },
                    set(newValue) {
                        that._virtualModeCreateRecords(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'virtualModeRecordCreating', {
                    get() {
                        return that._virtualModeRecordCreating();
                    },
                    set(newValue) {
                        that._virtualModeRecordCreating(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('bindingComplete', function (event) { that.$emit('bindingComplete', event); });
                JQXLite(this.componentSelector).on('cellBeginEdit', function (event) { that.$emit('cellBeginEdit', event); });
                JQXLite(this.componentSelector).on('cellEndEdit', function (event) { that.$emit('cellEndEdit', event); });
                JQXLite(this.componentSelector).on('cellValueChanged', function (event) { that.$emit('cellValueChanged', event); });
                JQXLite(this.componentSelector).on('columnResized', function (event) { that.$emit('columnResized', event); });
                JQXLite(this.componentSelector).on('columnReordered', function (event) { that.$emit('columnReordered', event); });
                JQXLite(this.componentSelector).on('filter', function (event) { that.$emit('filter', event); });
                JQXLite(this.componentSelector).on('pageChanged', function (event) { that.$emit('pageChanged', event); });
                JQXLite(this.componentSelector).on('pageSizeChanged', function (event) { that.$emit('pageSizeChanged', event); });
                JQXLite(this.componentSelector).on('rowClick', function (event) { that.$emit('rowClick', event); });
                JQXLite(this.componentSelector).on('rowDoubleClick', function (event) { that.$emit('rowDoubleClick', event); });
                JQXLite(this.componentSelector).on('rowSelect', function (event) { that.$emit('rowSelect', event); });
                JQXLite(this.componentSelector).on('rowUnselect', function (event) { that.$emit('rowUnselect', event); });
                JQXLite(this.componentSelector).on('rowBeginEdit', function (event) { that.$emit('rowBeginEdit', event); });
                JQXLite(this.componentSelector).on('rowEndEdit', function (event) { that.$emit('rowEndEdit', event); });
                JQXLite(this.componentSelector).on('rowExpand', function (event) { that.$emit('rowExpand', event); });
                JQXLite(this.componentSelector).on('rowCollapse', function (event) { that.$emit('rowCollapse', event); });
                JQXLite(this.componentSelector).on('rowCheck', function (event) { that.$emit('rowCheck', event); });
                JQXLite(this.componentSelector).on('rowUncheck', function (event) { that.$emit('rowUncheck', event); });
                JQXLite(this.componentSelector).on('sort', function (event) { that.$emit('sort', event); });
            }
        }
    }
</script>
