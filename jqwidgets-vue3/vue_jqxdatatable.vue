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
            groups: Array,
            groupsRenderer: Function,
            height: [Number, String],
            initRowDetails: Function,
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
            pagerButtonsCount: Number,
            pagerRenderer: Function,
            ready: Function,
            rowDetails: {
                default: false,
                type: Boolean
            },
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
            showToolbar: {
                default: false,
                type: Boolean
            },
            showStatusbar: {
                default: false,
                type: Boolean
            },
            enableSanitizeAll: {
                default: false,
                type: Boolean
            },
            statusBarHeight: Number,
            scrollBarSize: Number,
            selectionMode: String,
            serverProcessing: {
                default: false,
                type: Boolean
            },
            showHeader: {
                default: true,
                type: Boolean
            },
            theme: String,
            toolbarHeight: Number,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["bindingComplete","cellBeginEdit","cellEndEdit","cellValueChanged","columnResized","columnReordered","sort","filter","pageChanged","pageSizeChanged","rowClick","rowDoubleClick","rowSelect","rowUnselect","rowBeginEdit","rowEndEdit","rowExpand","rowCollapse"],
        setup(props, context) {
			const id = "jqxDataTable" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxDataTable(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxDataTable(usedProps[i]);
                }
                return resultToReturn;
            }
            function addRow(rowIndex, rowData, rowPosition) {
                JQXLite(componentSelector).jqxDataTable('addRow', rowIndex, rowData, rowPosition);  
            }
            function addFilter(dataField, filerGroup) {
                JQXLite(componentSelector).jqxDataTable('addFilter', dataField, filerGroup);  
            }
            function applyFilters() {
                JQXLite(componentSelector).jqxDataTable('applyFilters');  
            }
            function beginUpdate() {
                JQXLite(componentSelector).jqxDataTable('beginUpdate');  
            }
            function beginRowEdit(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('beginRowEdit', rowIndex);  
            }
            function beginCellEdit(rowIndex, dataField) {
                JQXLite(componentSelector).jqxDataTable('beginCellEdit', rowIndex, dataField);  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxDataTable('clearSelection');  
            }
            function clearFilters() {
                JQXLite(componentSelector).jqxDataTable('clearFilters');  
            }
            function clear() {
                JQXLite(componentSelector).jqxDataTable('clear');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxDataTable('destroy');  
            }
            function deleteRow(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('deleteRow', rowIndex);  
            }
            function endUpdate() {
                JQXLite(componentSelector).jqxDataTable('endUpdate');  
            }
            function ensureRowVisible(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('ensureRowVisible', rowIndex);  
            }
            function endRowEdit(rowIndex, cancelChanges) {
                JQXLite(componentSelector).jqxDataTable('endRowEdit', rowIndex, cancelChanges);  
            }
            function endCellEdit(rowIndex, dataField) {
                JQXLite(componentSelector).jqxDataTable('endCellEdit', rowIndex, dataField);  
            }
            function exportData(exportDataType) {
                return JQXLite(componentSelector).jqxDataTable('exportData', exportDataType);  
            }
            function focus() {
                JQXLite(componentSelector).jqxDataTable('focus');  
            }
            function getColumnProperty(dataField, propertyName) {
                return JQXLite(componentSelector).jqxDataTable('getColumnProperty', dataField, propertyName);  
            }
            function goToPage(pageIndex) {
                JQXLite(componentSelector).jqxDataTable('goToPage', pageIndex);  
            }
            function goToPrevPage() {
                JQXLite(componentSelector).jqxDataTable('goToPrevPage');  
            }
            function goToNextPage() {
                JQXLite(componentSelector).jqxDataTable('goToNextPage');  
            }
            function getSelection() {
                return JQXLite(componentSelector).jqxDataTable('getSelection');  
            }
            function getRows() {
                return JQXLite(componentSelector).jqxDataTable('getRows');  
            }
            function getView() {
                return JQXLite(componentSelector).jqxDataTable('getView');  
            }
            function getCellValue(rowIndex, dataField) {
                return JQXLite(componentSelector).jqxDataTable('getCellValue', rowIndex, dataField);  
            }
            function hideColumn(dataField) {
                JQXLite(componentSelector).jqxDataTable('hideColumn', dataField);  
            }
            function hideDetails(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('hideDetails', rowIndex);  
            }
            function isBindingCompleted() {
                return JQXLite(componentSelector).jqxDataTable('isBindingCompleted');  
            }
            function lockRow(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('lockRow', rowIndex);  
            }
            function refresh() {
                JQXLite(componentSelector).jqxDataTable('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxDataTable('render');  
            }
            function removeFilter(dataField) {
                JQXLite(componentSelector).jqxDataTable('removeFilter', dataField);  
            }
            function scrollOffset(top, left) {
                JQXLite(componentSelector).jqxDataTable('scrollOffset', top, left);  
            }
            function setColumnProperty(dataField, propertyName, propertyValue) {
                JQXLite(componentSelector).jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);  
            }
            function showColumn(dataField) {
                JQXLite(componentSelector).jqxDataTable('showColumn', dataField);  
            }
            function selectRow(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('selectRow', rowIndex);  
            }
            function showDetails(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('showDetails', rowIndex);  
            }
            function setCellValue(rowIndex, dataField, value) {
                JQXLite(componentSelector).jqxDataTable('setCellValue', rowIndex, dataField, value);  
            }
            function sortBy(dataField, sortOrder) {
                JQXLite(componentSelector).jqxDataTable('sortBy', dataField, sortOrder);  
            }
            function updating() {
                return JQXLite(componentSelector).jqxDataTable('updating');  
            }
            function updateBoundData() {
                JQXLite(componentSelector).jqxDataTable('updateBoundData');  
            }
            function unselectRow(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('unselectRow', rowIndex);  
            }
            function updateRow(rowIndex, rowData) {
                JQXLite(componentSelector).jqxDataTable('updateRow', rowIndex, rowData);  
            }
            function unlockRow(rowIndex) {
                JQXLite(componentSelector).jqxDataTable('unlockRow', rowIndex);  
            }
            function _altRows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('altRows', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('altRows');
                }
            }
            function _autoRowHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('autoRowHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('autoRowHeight');
                }
            }
            function _aggregatesHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('aggregatesHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('aggregatesHeight');
                }
            }
            function _autoShowLoadElement (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('autoShowLoadElement', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('autoShowLoadElement');
                }
            }
            function _columnsHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('columnsHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('columnsHeight');
                }
            }
            function _columns (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('columns', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('columns');
                }
            }
            function _columnGroups (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('columnGroups', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('columnGroups');
                }
            }
            function _columnsResize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('columnsResize', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('columnsResize');
                }
            }
            function _columnsReorder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('columnsReorder', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('columnsReorder');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('disabled');
                }
            }
            function _editable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('editable', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('editable');
                }
            }
            function _editSettings (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('editSettings', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('editSettings');
                }
            }
            function _exportSettings (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('exportSettings', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('exportSettings');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('enableHover');
                }
            }
            function _enableBrowserSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('enableBrowserSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('enableBrowserSelection');
                }
            }
            function _filterable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('filterable', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('filterable');
                }
            }
            function _filterHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('filterHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('filterHeight');
                }
            }
            function _filterMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('filterMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('filterMode');
                }
            }
            function _groups (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('groups', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('groups');
                }
            }
            function _groupsRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('groupsRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('groupsRenderer');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('height');
                }
            }
            function _initRowDetails (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('initRowDetails', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('initRowDetails');
                }
            }
            function _incrementalSearch (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('incrementalSearch', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('incrementalSearch');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('localization');
                }
            }
            function _pagerHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('pagerHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('pagerHeight');
                }
            }
            function _pageSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('pageSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('pageSize');
                }
            }
            function _pageSizeOptions (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('pageSizeOptions', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('pageSizeOptions');
                }
            }
            function _pageable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('pageable', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('pageable');
                }
            }
            function _pagerPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('pagerPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('pagerPosition');
                }
            }
            function _pagerMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('pagerMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('pagerMode');
                }
            }
            function _pagerButtonsCount (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('pagerButtonsCount', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('pagerButtonsCount');
                }
            }
            function _pagerRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('pagerRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('pagerRenderer');
                }
            }
            function _ready (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('ready', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('ready');
                }
            }
            function _rowDetails (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('rowDetails', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('rowDetails');
                }
            }
            function _renderToolbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('renderToolbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('renderToolbar');
                }
            }
            function _renderStatusBar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('renderStatusBar', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('renderStatusBar');
                }
            }
            function _rendering (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('rendering', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('rendering');
                }
            }
            function _rendered (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('rendered', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('rendered');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('rtl');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('source');
                }
            }
            function _sortable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('sortable', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('sortable');
                }
            }
            function _showAggregates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('showAggregates', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('showAggregates');
                }
            }
            function _showToolbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('showToolbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('showToolbar');
                }
            }
            function _showStatusbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('showStatusbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('showStatusbar');
                }
            }
            function _enableSanitizeAll (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('enableSanitizeAll', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('enableSanitizeAll');
                }
            }
            function _statusBarHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('statusBarHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('statusBarHeight');
                }
            }
            function _scrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('scrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('scrollBarSize');
                }
            }
            function _selectionMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('selectionMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('selectionMode');
                }
            }
            function _serverProcessing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('serverProcessing', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('serverProcessing');
                }
            }
            function _showHeader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('showHeader', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('showHeader');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('theme');
                }
            }
            function _toolbarHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('toolbarHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('toolbarHeight');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDataTable('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxDataTable('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDataTable(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','groups','groupsRenderer','height','initRowDetails','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','renderToolbar','renderStatusBar','rendering','rendered','rtl','source','sortable','showAggregates','showToolbar','showStatusbar','enableSanitizeAll','statusBarHeight','scrollBarSize','selectionMode','serverProcessing','showHeader','theme','toolbarHeight','width'];
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
                 get groups() {
                     return _groups();
                 },
                 set groups(newValue) {
                     _groups(newValue);
                 },
                 get groupsRenderer() {
                     return _groupsRenderer();
                 },
                 set groupsRenderer(newValue) {
                     _groupsRenderer(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get initRowDetails() {
                     return _initRowDetails();
                 },
                 set initRowDetails(newValue) {
                     _initRowDetails(newValue);
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
                 get enableSanitizeAll() {
                     return _enableSanitizeAll();
                 },
                 set enableSanitizeAll(newValue) {
                     _enableSanitizeAll(newValue);
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
                 get serverProcessing() {
                     return _serverProcessing();
                 },
                 set serverProcessing(newValue) {
                     _serverProcessing(newValue);
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
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('bindingComplete', function (event) { that.emit('bindingComplete', event); });
                JQXLite(componentSelector).on('cellBeginEdit', function (event) { that.emit('cellBeginEdit', event); });
                JQXLite(componentSelector).on('cellEndEdit', function (event) { that.emit('cellEndEdit', event); });
                JQXLite(componentSelector).on('cellValueChanged', function (event) { that.emit('cellValueChanged', event); });
                JQXLite(componentSelector).on('columnResized', function (event) { that.emit('columnResized', event); });
                JQXLite(componentSelector).on('columnReordered', function (event) { that.emit('columnReordered', event); });
                JQXLite(componentSelector).on('sort', function (event) { that.emit('sort', event); });
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
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxDataTable(widgetOptions);
			})
			return {id, componentSelector, addRow,addFilter,applyFilters,beginUpdate,beginRowEdit,beginCellEdit,clearSelection,clearFilters,clear,destroy,deleteRow,endUpdate,ensureRowVisible,endRowEdit,endCellEdit,exportData,focus,getColumnProperty,goToPage,goToPrevPage,goToNextPage,getSelection,getRows,getView,getCellValue,hideColumn,hideDetails,isBindingCompleted,lockRow,refresh,render,removeFilter,scrollOffset,setColumnProperty,showColumn,selectRow,showDetails,setCellValue,sortBy,updating,updateBoundData,unselectRow,updateRow,unlockRow, setOptions, options, getOptions, createComponent};
        },
    }
</script>
