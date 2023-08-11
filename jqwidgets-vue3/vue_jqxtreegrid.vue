<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
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
            altRows: {
                default: false,
                type: Boolean
            },
            autoRowHeight: {
                default: true,
                type: Boolean
            },
            aggregatesHeight: Number,
            autoShowLoadElement: {
                default: true,
                type: Boolean
            },
            checkboxes: {
                default: false,
                type: Boolean
            },
            columnsHeight: Number,
            columns: Array,
            columnGroups: Array,
            columnsResize: {
                default: false,
                type: Boolean
            },
            columnsReorder: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            editable: {
                default: false,
                type: Boolean
            },
            editSettings: Object,
            exportSettings: Object,
            enableHover: {
                default: true,
                type: Boolean
            },
            enableBrowserSelection: {
                default: false,
                type: Boolean
            },
            filterable: {
                default: false,
                type: Boolean
            },
            filterHeight: Number,
            filterMode: String,
            height: [Number, String],
            hierarchicalCheckboxes: {
                default: false,
                type: Boolean
            },
            icons: [Function, Boolean],
            incrementalSearch: {
                default: true,
                type: Boolean
            },
            localization: Object,
            pagerHeight: Number,
            pageSize: Number,
            pageSizeOptions: Array,
            pageable: {
                default: false,
                type: Boolean
            },
            pagerPosition: String,
            pagerMode: String,
            pageSizeMode: String,
            pagerButtonsCount: Number,
            pagerRenderer: Function,
            ready: Function,
            rowDetails: {
                default: false,
                type: Boolean
            },
            rowDetailsRenderer: Function,
            renderToolbar: Function,
            renderStatusBar: Function,
            rendering: Function,
            rendered: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            source: Object,
            sortable: {
                default: false,
                type: Boolean
            },
            showAggregates: {
                default: false,
                type: Boolean
            },
            showSubAggregates: {
                default: false,
                type: Boolean
            },
            showToolbar: {
                default: false,
                type: Boolean
            },
            showStatusbar: {
                default: false,
                type: Boolean
            },
            statusBarHeight: Number,
            scrollBarSize: Number,
            selectionMode: String,
            showHeader: {
                default: true,
                type: Boolean
            },
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
        emits: ["bindingComplete","cellBeginEdit","cellEndEdit","cellValueChanged","columnResized","columnReordered","filter","pageChanged","pageSizeChanged","rowClick","rowDoubleClick","rowSelect","rowUnselect","rowBeginEdit","rowEndEdit","rowExpand","rowCollapse","rowCheck","rowUncheck","sort"],
        setup(props, context) {
			const id = "jqxTreeGrid" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTreeGrid(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTreeGrid(usedProps[i]);
                }
                return resultToReturn;
            }
            function addRow(rowKey, rowData, rowPosition, parent) {
                JQXLite(componentSelector).jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);  
            }
            function addFilter(dataField, filerGroup) {
                JQXLite(componentSelector).jqxTreeGrid('addFilter', dataField, filerGroup);  
            }
            function applyFilters() {
                JQXLite(componentSelector).jqxTreeGrid('applyFilters');  
            }
            function beginUpdate() {
                JQXLite(componentSelector).jqxTreeGrid('beginUpdate');  
            }
            function beginRowEdit(rowKey) {
                JQXLite(componentSelector).jqxTreeGrid('beginRowEdit', rowKey);  
            }
            function beginCellEdit(rowKey, dataField) {
                JQXLite(componentSelector).jqxTreeGrid('beginCellEdit', rowKey, dataField);  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxTreeGrid('clearSelection');  
            }
            function clearFilters() {
                JQXLite(componentSelector).jqxTreeGrid('clearFilters');  
            }
            function clear() {
                JQXLite(componentSelector).jqxTreeGrid('clear');  
            }
            function checkRow(rowKey) {
                JQXLite(componentSelector).jqxTreeGrid('checkRow', rowKey);  
            }
            function collapseRow(rowKey) {
                JQXLite(componentSelector).jqxTreeGrid('collapseRow', rowKey);  
            }
            function collapseAll() {
                JQXLite(componentSelector).jqxTreeGrid('collapseAll');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxTreeGrid('destroy');  
            }
            function deleteRow(rowKey) {
                JQXLite(componentSelector).jqxTreeGrid('deleteRow', rowKey);  
            }
            function expandRow(rowKey) {
                JQXLite(componentSelector).jqxTreeGrid('expandRow', rowKey);  
            }
            function expandAll() {
                JQXLite(componentSelector).jqxTreeGrid('expandAll');  
            }
            function endUpdate() {
                JQXLite(componentSelector).jqxTreeGrid('endUpdate');  
            }
            function ensureRowVisible(rowKey) {
                JQXLite(componentSelector).jqxTreeGrid('ensureRowVisible', rowKey);  
            }
            function endRowEdit(rowKey, cancelChanges) {
                JQXLite(componentSelector).jqxTreeGrid('endRowEdit', rowKey, cancelChanges);  
            }
            function endCellEdit(rowKey, dataField, cancelChanges) {
                JQXLite(componentSelector).jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);  
            }
            function exportData(exportDataType) {
                return JQXLite(componentSelector).jqxTreeGrid('exportData', exportDataType);  
            }
            function focus() {
                JQXLite(componentSelector).jqxTreeGrid('focus');  
            }
            function getColumnProperty(dataField, propertyName) {
                return JQXLite(componentSelector).jqxTreeGrid('getColumnProperty', dataField, propertyName);  
            }
            function goToPage(pageIndex) {
                JQXLite(componentSelector).jqxTreeGrid('goToPage', pageIndex);  
            }
            function goToPrevPage() {
                JQXLite(componentSelector).jqxTreeGrid('goToPrevPage');  
            }
            function goToNextPage() {
                JQXLite(componentSelector).jqxTreeGrid('goToNextPage');  
            }
            function getSelection() {
                return JQXLite(componentSelector).jqxTreeGrid('getSelection');  
            }
            function getKey(row) {
                return JQXLite(componentSelector).jqxTreeGrid('getKey', row);  
            }
            function getRow(rowKey) {
                return JQXLite(componentSelector).jqxTreeGrid('getRow', rowKey);  
            }
            function getRows() {
                return JQXLite(componentSelector).jqxTreeGrid('getRows');  
            }
            function getCheckedRows() {
                return JQXLite(componentSelector).jqxTreeGrid('getCheckedRows');  
            }
            function getView() {
                return JQXLite(componentSelector).jqxTreeGrid('getView');  
            }
            function getCellValue(rowKey, dataField) {
                return JQXLite(componentSelector).jqxTreeGrid('getCellValue', rowKey, dataField);  
            }
            function hideColumn(dataField) {
                JQXLite(componentSelector).jqxTreeGrid('hideColumn', dataField);  
            }
            function isBindingCompleted() {
                return JQXLite(componentSelector).jqxTreeGrid('isBindingCompleted');  
            }
            function lockRow(rowKey) {
                JQXLite(componentSelector).jqxTreeGrid('lockRow', rowKey);  
            }
            function refresh() {
                JQXLite(componentSelector).jqxTreeGrid('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxTreeGrid('render');  
            }
            function removeFilter(dataField) {
                JQXLite(componentSelector).jqxTreeGrid('removeFilter', dataField);  
            }
            function scrollOffset(top, left) {
                return JQXLite(componentSelector).jqxTreeGrid('scrollOffset', top, left);  
            }
            function setColumnProperty(dataField, propertyName, propertyValue) {
                JQXLite(componentSelector).jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);  
            }
            function showColumn(dataField) {
                JQXLite(componentSelector).jqxTreeGrid('showColumn', dataField);  
            }
            function selectRow(rowId) {
                JQXLite(componentSelector).jqxTreeGrid('selectRow', rowId);  
            }
            function setCellValue(rowId, dataField, cellValue) {
                JQXLite(componentSelector).jqxTreeGrid('setCellValue', rowId, dataField, cellValue);  
            }
            function sortBy(dataField, sortOrder) {
                JQXLite(componentSelector).jqxTreeGrid('sortBy', dataField, sortOrder);  
            }
            function updating() {
                return JQXLite(componentSelector).jqxTreeGrid('updating');  
            }
            function updateBoundData() {
                JQXLite(componentSelector).jqxTreeGrid('updateBoundData');  
            }
            function unselectRow(rowId) {
                JQXLite(componentSelector).jqxTreeGrid('unselectRow', rowId);  
            }
            function uncheckRow(rowId) {
                JQXLite(componentSelector).jqxTreeGrid('uncheckRow', rowId);  
            }
            function updateRow(rowId, data) {
                JQXLite(componentSelector).jqxTreeGrid('updateRow', rowId, data);  
            }
            function unlockRow(rowId) {
                JQXLite(componentSelector).jqxTreeGrid('unlockRow', rowId);  
            }
            function _altRows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('altRows', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('altRows');
                }
            }
            function _autoRowHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('autoRowHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('autoRowHeight');
                }
            }
            function _aggregatesHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('aggregatesHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('aggregatesHeight');
                }
            }
            function _autoShowLoadElement (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('autoShowLoadElement', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('autoShowLoadElement');
                }
            }
            function _checkboxes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('checkboxes', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('checkboxes');
                }
            }
            function _columnsHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('columnsHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('columnsHeight');
                }
            }
            function _columns (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('columns', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('columns');
                }
            }
            function _columnGroups (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('columnGroups', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('columnGroups');
                }
            }
            function _columnsResize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('columnsResize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('columnsResize');
                }
            }
            function _columnsReorder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('columnsReorder', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('columnsReorder');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('disabled');
                }
            }
            function _editable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('editable', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('editable');
                }
            }
            function _editSettings (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('editSettings', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('editSettings');
                }
            }
            function _exportSettings (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('exportSettings', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('exportSettings');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('enableHover');
                }
            }
            function _enableBrowserSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('enableBrowserSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('enableBrowserSelection');
                }
            }
            function _filterable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('filterable', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('filterable');
                }
            }
            function _filterHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('filterHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('filterHeight');
                }
            }
            function _filterMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('filterMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('filterMode');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('height');
                }
            }
            function _hierarchicalCheckboxes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('hierarchicalCheckboxes', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('hierarchicalCheckboxes');
                }
            }
            function _icons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('icons', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('icons');
                }
            }
            function _incrementalSearch (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('incrementalSearch', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('incrementalSearch');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('localization');
                }
            }
            function _pagerHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pagerHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pagerHeight');
                }
            }
            function _pageSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pageSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pageSize');
                }
            }
            function _pageSizeOptions (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pageSizeOptions', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pageSizeOptions');
                }
            }
            function _pageable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pageable', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pageable');
                }
            }
            function _pagerPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pagerPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pagerPosition');
                }
            }
            function _pagerMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pagerMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pagerMode');
                }
            }
            function _pageSizeMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pageSizeMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pageSizeMode');
                }
            }
            function _pagerButtonsCount (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pagerButtonsCount', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pagerButtonsCount');
                }
            }
            function _pagerRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('pagerRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('pagerRenderer');
                }
            }
            function _ready (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('ready', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('ready');
                }
            }
            function _rowDetails (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('rowDetails', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('rowDetails');
                }
            }
            function _rowDetailsRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('rowDetailsRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('rowDetailsRenderer');
                }
            }
            function _renderToolbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('renderToolbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('renderToolbar');
                }
            }
            function _renderStatusBar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('renderStatusBar', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('renderStatusBar');
                }
            }
            function _rendering (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('rendering', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('rendering');
                }
            }
            function _rendered (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('rendered', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('rendered');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('rtl');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('source');
                }
            }
            function _sortable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('sortable', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('sortable');
                }
            }
            function _showAggregates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('showAggregates', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('showAggregates');
                }
            }
            function _showSubAggregates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('showSubAggregates', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('showSubAggregates');
                }
            }
            function _showToolbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('showToolbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('showToolbar');
                }
            }
            function _showStatusbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('showStatusbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('showStatusbar');
                }
            }
            function _statusBarHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('statusBarHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('statusBarHeight');
                }
            }
            function _scrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('scrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('scrollBarSize');
                }
            }
            function _selectionMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('selectionMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('selectionMode');
                }
            }
            function _showHeader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('showHeader', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('showHeader');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('theme');
                }
            }
            function _toolbarHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('toolbarHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('toolbarHeight');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('width');
                }
            }
            function _virtualModeCreateRecords (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('virtualModeCreateRecords', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('virtualModeCreateRecords');
                }
            }
            function _virtualModeRecordCreating (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeGrid('virtualModeRecordCreating', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeGrid('virtualModeRecordCreating');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTreeGrid(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','checkboxes','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','height','hierarchicalCheckboxes','icons','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pageSizeMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','rowDetailsRenderer','renderToolbar','renderStatusBar','rendering','rendered','rtl','source','sortable','showAggregates','showSubAggregates','showToolbar','showStatusbar','statusBarHeight','scrollBarSize','selectionMode','showHeader','theme','toolbarHeight','width','virtualModeCreateRecords','virtualModeRecordCreating'];
                const componentProps = props;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1 && componentProps[prop] !== undefined) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            }
            const options = {
                 get altRows() {
                     return _altRows();
                 },
                 set altRows(newValue) {
                     _altRows(newValue);
                 },
                 get autoRowHeight() {
                     return _autoRowHeight();
                 },
                 set autoRowHeight(newValue) {
                     _autoRowHeight(newValue);
                 },
                 get aggregatesHeight() {
                     return _aggregatesHeight();
                 },
                 set aggregatesHeight(newValue) {
                     _aggregatesHeight(newValue);
                 },
                 get autoShowLoadElement() {
                     return _autoShowLoadElement();
                 },
                 set autoShowLoadElement(newValue) {
                     _autoShowLoadElement(newValue);
                 },
                 get checkboxes() {
                     return _checkboxes();
                 },
                 set checkboxes(newValue) {
                     _checkboxes(newValue);
                 },
                 get columnsHeight() {
                     return _columnsHeight();
                 },
                 set columnsHeight(newValue) {
                     _columnsHeight(newValue);
                 },
                 get columns() {
                     return _columns();
                 },
                 set columns(newValue) {
                     _columns(newValue);
                 },
                 get columnGroups() {
                     return _columnGroups();
                 },
                 set columnGroups(newValue) {
                     _columnGroups(newValue);
                 },
                 get columnsResize() {
                     return _columnsResize();
                 },
                 set columnsResize(newValue) {
                     _columnsResize(newValue);
                 },
                 get columnsReorder() {
                     return _columnsReorder();
                 },
                 set columnsReorder(newValue) {
                     _columnsReorder(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get editable() {
                     return _editable();
                 },
                 set editable(newValue) {
                     _editable(newValue);
                 },
                 get editSettings() {
                     return _editSettings();
                 },
                 set editSettings(newValue) {
                     _editSettings(newValue);
                 },
                 get exportSettings() {
                     return _exportSettings();
                 },
                 set exportSettings(newValue) {
                     _exportSettings(newValue);
                 },
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
                 },
                 get enableBrowserSelection() {
                     return _enableBrowserSelection();
                 },
                 set enableBrowserSelection(newValue) {
                     _enableBrowserSelection(newValue);
                 },
                 get filterable() {
                     return _filterable();
                 },
                 set filterable(newValue) {
                     _filterable(newValue);
                 },
                 get filterHeight() {
                     return _filterHeight();
                 },
                 set filterHeight(newValue) {
                     _filterHeight(newValue);
                 },
                 get filterMode() {
                     return _filterMode();
                 },
                 set filterMode(newValue) {
                     _filterMode(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get hierarchicalCheckboxes() {
                     return _hierarchicalCheckboxes();
                 },
                 set hierarchicalCheckboxes(newValue) {
                     _hierarchicalCheckboxes(newValue);
                 },
                 get icons() {
                     return _icons();
                 },
                 set icons(newValue) {
                     _icons(newValue);
                 },
                 get incrementalSearch() {
                     return _incrementalSearch();
                 },
                 set incrementalSearch(newValue) {
                     _incrementalSearch(newValue);
                 },
                 get localization() {
                     return _localization();
                 },
                 set localization(newValue) {
                     _localization(newValue);
                 },
                 get pagerHeight() {
                     return _pagerHeight();
                 },
                 set pagerHeight(newValue) {
                     _pagerHeight(newValue);
                 },
                 get pageSize() {
                     return _pageSize();
                 },
                 set pageSize(newValue) {
                     _pageSize(newValue);
                 },
                 get pageSizeOptions() {
                     return _pageSizeOptions();
                 },
                 set pageSizeOptions(newValue) {
                     _pageSizeOptions(newValue);
                 },
                 get pageable() {
                     return _pageable();
                 },
                 set pageable(newValue) {
                     _pageable(newValue);
                 },
                 get pagerPosition() {
                     return _pagerPosition();
                 },
                 set pagerPosition(newValue) {
                     _pagerPosition(newValue);
                 },
                 get pagerMode() {
                     return _pagerMode();
                 },
                 set pagerMode(newValue) {
                     _pagerMode(newValue);
                 },
                 get pageSizeMode() {
                     return _pageSizeMode();
                 },
                 set pageSizeMode(newValue) {
                     _pageSizeMode(newValue);
                 },
                 get pagerButtonsCount() {
                     return _pagerButtonsCount();
                 },
                 set pagerButtonsCount(newValue) {
                     _pagerButtonsCount(newValue);
                 },
                 get pagerRenderer() {
                     return _pagerRenderer();
                 },
                 set pagerRenderer(newValue) {
                     _pagerRenderer(newValue);
                 },
                 get ready() {
                     return _ready();
                 },
                 set ready(newValue) {
                     _ready(newValue);
                 },
                 get rowDetails() {
                     return _rowDetails();
                 },
                 set rowDetails(newValue) {
                     _rowDetails(newValue);
                 },
                 get rowDetailsRenderer() {
                     return _rowDetailsRenderer();
                 },
                 set rowDetailsRenderer(newValue) {
                     _rowDetailsRenderer(newValue);
                 },
                 get renderToolbar() {
                     return _renderToolbar();
                 },
                 set renderToolbar(newValue) {
                     _renderToolbar(newValue);
                 },
                 get renderStatusBar() {
                     return _renderStatusBar();
                 },
                 set renderStatusBar(newValue) {
                     _renderStatusBar(newValue);
                 },
                 get rendering() {
                     return _rendering();
                 },
                 set rendering(newValue) {
                     _rendering(newValue);
                 },
                 get rendered() {
                     return _rendered();
                 },
                 set rendered(newValue) {
                     _rendered(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get sortable() {
                     return _sortable();
                 },
                 set sortable(newValue) {
                     _sortable(newValue);
                 },
                 get showAggregates() {
                     return _showAggregates();
                 },
                 set showAggregates(newValue) {
                     _showAggregates(newValue);
                 },
                 get showSubAggregates() {
                     return _showSubAggregates();
                 },
                 set showSubAggregates(newValue) {
                     _showSubAggregates(newValue);
                 },
                 get showToolbar() {
                     return _showToolbar();
                 },
                 set showToolbar(newValue) {
                     _showToolbar(newValue);
                 },
                 get showStatusbar() {
                     return _showStatusbar();
                 },
                 set showStatusbar(newValue) {
                     _showStatusbar(newValue);
                 },
                 get statusBarHeight() {
                     return _statusBarHeight();
                 },
                 set statusBarHeight(newValue) {
                     _statusBarHeight(newValue);
                 },
                 get scrollBarSize() {
                     return _scrollBarSize();
                 },
                 set scrollBarSize(newValue) {
                     _scrollBarSize(newValue);
                 },
                 get selectionMode() {
                     return _selectionMode();
                 },
                 set selectionMode(newValue) {
                     _selectionMode(newValue);
                 },
                 get showHeader() {
                     return _showHeader();
                 },
                 set showHeader(newValue) {
                     _showHeader(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get toolbarHeight() {
                     return _toolbarHeight();
                 },
                 set toolbarHeight(newValue) {
                     _toolbarHeight(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
                 get virtualModeCreateRecords() {
                     return _virtualModeCreateRecords();
                 },
                 set virtualModeCreateRecords(newValue) {
                     _virtualModeCreateRecords(newValue);
                 },
                 get virtualModeRecordCreating() {
                     return _virtualModeRecordCreating();
                 },
                 set virtualModeRecordCreating(newValue) {
                     _virtualModeRecordCreating(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('bindingComplete', function (event) { that.emit('bindingComplete', event); });
                JQXLite(componentSelector).on('cellBeginEdit', function (event) { that.emit('cellBeginEdit', event); });
                JQXLite(componentSelector).on('cellEndEdit', function (event) { that.emit('cellEndEdit', event); });
                JQXLite(componentSelector).on('cellValueChanged', function (event) { that.emit('cellValueChanged', event); });
                JQXLite(componentSelector).on('columnResized', function (event) { that.emit('columnResized', event); });
                JQXLite(componentSelector).on('columnReordered', function (event) { that.emit('columnReordered', event); });
                JQXLite(componentSelector).on('filter', function (event) { that.emit('filter', event); });
                JQXLite(componentSelector).on('pageChanged', function (event) { that.emit('pageChanged', event); });
                JQXLite(componentSelector).on('pageSizeChanged', function (event) { that.emit('pageSizeChanged', event); });
                JQXLite(componentSelector).on('rowClick', function (event) { that.emit('rowClick', event); });
                JQXLite(componentSelector).on('rowDoubleClick', function (event) { that.emit('rowDoubleClick', event); });
                JQXLite(componentSelector).on('rowSelect', function (event) { that.emit('rowSelect', event); });
                JQXLite(componentSelector).on('rowUnselect', function (event) { that.emit('rowUnselect', event); });
                JQXLite(componentSelector).on('rowBeginEdit', function (event) { that.emit('rowBeginEdit', event); });
                JQXLite(componentSelector).on('rowEndEdit', function (event) { that.emit('rowEndEdit', event); });
                JQXLite(componentSelector).on('rowExpand', function (event) { that.emit('rowExpand', event); });
                JQXLite(componentSelector).on('rowCollapse', function (event) { that.emit('rowCollapse', event); });
                JQXLite(componentSelector).on('rowCheck', function (event) { that.emit('rowCheck', event); });
                JQXLite(componentSelector).on('rowUncheck', function (event) { that.emit('rowUncheck', event); });
                JQXLite(componentSelector).on('sort', function (event) { that.emit('sort', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxTreeGrid(widgetOptions);
			})
			return {id, componentSelector, addRow,addFilter,applyFilters,beginUpdate,beginRowEdit,beginCellEdit,clearSelection,clearFilters,clear,checkRow,collapseRow,collapseAll,destroy,deleteRow,expandRow,expandAll,endUpdate,ensureRowVisible,endRowEdit,endCellEdit,exportData,focus,getColumnProperty,goToPage,goToPrevPage,goToNextPage,getSelection,getKey,getRow,getRows,getCheckedRows,getView,getCellValue,hideColumn,isBindingCompleted,lockRow,refresh,render,removeFilter,scrollOffset,setColumnProperty,showColumn,selectRow,setCellValue,sortBy,updating,updateBoundData,unselectRow,uncheckRow,updateRow,unlockRow, setOptions, options, getOptions, createComponent};
        },
    }
</script>
