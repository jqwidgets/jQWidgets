/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
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

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxTreeGrid extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','checkboxes','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','height','hierarchicalCheckboxes','icons','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pageSizeMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','rowDetailsRenderer','renderToolbar','renderStatusbar','rendering','rendered','rtl','source','sortable','showAggregates','showSubAggregates','showToolbar','showStatusbar','statusBarHeight','scrollBarSize','selectionMode','showHeader','theme','toolbarHeight','width','virtualModeCreateRecords','virtualModeRecordCreating'];
        let options = {};
        for(let item in this.props) {
              if(item === 'settings') {
                  for(let itemTwo in this.props[item]) {
                      options[itemTwo] = this.props[item][itemTwo];
                      }
                } else {
                      if(properties.indexOf(item) !== -1) {
                        options[item] = this.props[item];
                      }
                }
          }
          return options;
      };
    createComponent(options) {
        if(!this.style) {
              for (let style in this.props.style) {
                  JQXLite(this.componentSelector).css(style, this.props.style[style]);
              }
        }
        if(this.props.className !== undefined) {
            let classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
              JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxTreeGrid(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxTreeGrid('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxTreeGrid(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    altRows(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('altRows', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('altRows');
        }
    };
    autoRowHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('autoRowHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('autoRowHeight');
        }
    };
    aggregatesHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('aggregatesHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('aggregatesHeight');
        }
    };
    autoShowLoadElement(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('autoShowLoadElement', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('autoShowLoadElement');
        }
    };
    checkboxes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('checkboxes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('checkboxes');
        }
    };
    columnsHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('columnsHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('columnsHeight');
        }
    };
    columns(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('columns', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('columns');
        }
    };
    columnGroups(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('columnGroups', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('columnGroups');
        }
    };
    columnsResize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('columnsResize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('columnsResize');
        }
    };
    columnsReorder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('columnsReorder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('columnsReorder');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('disabled');
        }
    };
    editable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('editable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('editable');
        }
    };
    editSettings(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('editSettings', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('editSettings');
        }
    };
    exportSettings(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('exportSettings', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('exportSettings');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('enableHover');
        }
    };
    enableBrowserSelection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('enableBrowserSelection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('enableBrowserSelection');
        }
    };
    filterable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('filterable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('filterable');
        }
    };
    filterHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('filterHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('filterHeight');
        }
    };
    filterMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('filterMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('filterMode');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('height');
        }
    };
    hierarchicalCheckboxes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('hierarchicalCheckboxes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('hierarchicalCheckboxes');
        }
    };
    icons(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('icons', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('icons');
        }
    };
    incrementalSearch(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('incrementalSearch', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('incrementalSearch');
        }
    };
    localization(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('localization', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('localization');
        }
    };
    pagerHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pagerHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pagerHeight');
        }
    };
    pageSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pageSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pageSize');
        }
    };
    pageSizeOptions(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pageSizeOptions', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pageSizeOptions');
        }
    };
    pageable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pageable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pageable');
        }
    };
    pagerPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pagerPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pagerPosition');
        }
    };
    pagerMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pagerMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pagerMode');
        }
    };
    pageSizeMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pageSizeMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pageSizeMode');
        }
    };
    pagerButtonsCount(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pagerButtonsCount', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pagerButtonsCount');
        }
    };
    pagerRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('pagerRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('pagerRenderer');
        }
    };
    ready(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('ready', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('ready');
        }
    };
    rowDetails(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('rowDetails', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('rowDetails');
        }
    };
    rowDetailsRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('rowDetailsRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('rowDetailsRenderer');
        }
    };
    renderToolbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('renderToolbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('renderToolbar');
        }
    };
    renderStatusbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('renderStatusbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('renderStatusbar');
        }
    };
    rendering(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('rendering', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('rendering');
        }
    };
    rendered(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('rendered', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('rendered');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('rtl');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('source');
        }
    };
    sortable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('sortable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('sortable');
        }
    };
    showAggregates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('showAggregates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('showAggregates');
        }
    };
    showSubAggregates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('showSubAggregates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('showSubAggregates');
        }
    };
    showToolbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('showToolbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('showToolbar');
        }
    };
    showStatusbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('showStatusbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('showStatusbar');
        }
    };
    statusBarHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('statusBarHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('statusBarHeight');
        }
    };
    scrollBarSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('scrollBarSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('scrollBarSize');
        }
    };
    selectionMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('selectionMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('selectionMode');
        }
    };
    showHeader(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('showHeader', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('showHeader');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('theme');
        }
    };
    toolbarHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('toolbarHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('toolbarHeight');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('width');
        }
    };
    virtualModeCreateRecords(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('virtualModeCreateRecords', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('virtualModeCreateRecords');
        }
    };
    virtualModeRecordCreating(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeGrid('virtualModeRecordCreating', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeGrid('virtualModeRecordCreating');
        }
    };
    addRow(rowKey, rowData, rowPosition, parent) {
        JQXLite(this.componentSelector).jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);  
    };
    addFilter(dataField, filerGroup) {
        JQXLite(this.componentSelector).jqxTreeGrid('addFilter', dataField, filerGroup);  
    };
    applyFilters() {
        JQXLite(this.componentSelector).jqxTreeGrid('applyFilters');  
    };
    beginUpdate() {
        JQXLite(this.componentSelector).jqxTreeGrid('beginUpdate');  
    };
    beginRowEdit(rowKey) {
        JQXLite(this.componentSelector).jqxTreeGrid('beginRowEdit', rowKey);  
    };
    beginCellEdit(rowKey, dataField) {
        JQXLite(this.componentSelector).jqxTreeGrid('beginCellEdit', rowKey, dataField);  
    };
    clearSelection() {
        JQXLite(this.componentSelector).jqxTreeGrid('clearSelection');  
    };
    clearFilters() {
        JQXLite(this.componentSelector).jqxTreeGrid('clearFilters');  
    };
    clear() {
        JQXLite(this.componentSelector).jqxTreeGrid('clear');  
    };
    checkRow(rowKey) {
        JQXLite(this.componentSelector).jqxTreeGrid('checkRow', rowKey);  
    };
    collapseRow(rowKey) {
        JQXLite(this.componentSelector).jqxTreeGrid('collapseRow', rowKey);  
    };
    collapseAll() {
        JQXLite(this.componentSelector).jqxTreeGrid('collapseAll');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxTreeGrid('destroy');  
    };
    deleteRow(rowKey) {
        JQXLite(this.componentSelector).jqxTreeGrid('deleteRow', rowKey);  
    };
    expandRow(rowKey) {
        JQXLite(this.componentSelector).jqxTreeGrid('expandRow', rowKey);  
    };
    expandAll() {
        JQXLite(this.componentSelector).jqxTreeGrid('expandAll');  
    };
    endUpdate() {
        JQXLite(this.componentSelector).jqxTreeGrid('endUpdate');  
    };
    ensureRowVisible(rowKey) {
        JQXLite(this.componentSelector).jqxTreeGrid('ensureRowVisible', rowKey);  
    };
    endRowEdit(rowKey, cancelChanges) {
        JQXLite(this.componentSelector).jqxTreeGrid('endRowEdit', rowKey, cancelChanges);  
    };
    endCellEdit(rowKey, dataField, cancelChanges) {
        JQXLite(this.componentSelector).jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);  
    };
    exportData(exportDataType) {
        return JQXLite(this.componentSelector).jqxTreeGrid('exportData', exportDataType);  
    };
    focus() {
        JQXLite(this.componentSelector).jqxTreeGrid('focus');  
    };
    getColumnProperty(dataField, propertyName) {
        return JQXLite(this.componentSelector).jqxTreeGrid('getColumnProperty', dataField, propertyName);  
    };
    goToPage(pageIndex) {
        JQXLite(this.componentSelector).jqxTreeGrid('goToPage', pageIndex);  
    };
    goToPrevPage() {
        JQXLite(this.componentSelector).jqxTreeGrid('goToPrevPage');  
    };
    goToNextPage() {
        JQXLite(this.componentSelector).jqxTreeGrid('goToNextPage');  
    };
    getSelection() {
        return JQXLite(this.componentSelector).jqxTreeGrid('getSelection');  
    };
    getKey(row) {
        return JQXLite(this.componentSelector).jqxTreeGrid('getKey', row);  
    };
    getRow(rowKey) {
        return JQXLite(this.componentSelector).jqxTreeGrid('getRow', rowKey);  
    };
    getRows() {
        return JQXLite(this.componentSelector).jqxTreeGrid('getRows');  
    };
    getCheckedRows() {
        return JQXLite(this.componentSelector).jqxTreeGrid('getCheckedRows');  
    };
    getView() {
        return JQXLite(this.componentSelector).jqxTreeGrid('getView');  
    };
    getCellValue(rowKey, dataField) {
        return JQXLite(this.componentSelector).jqxTreeGrid('getCellValue', rowKey, dataField);  
    };
    hideColumn(dataField) {
        JQXLite(this.componentSelector).jqxTreeGrid('hideColumn', dataField);  
    };
    isBindingCompleted() {
        return JQXLite(this.componentSelector).jqxTreeGrid('isBindingCompleted');  
    };
    lockRow(rowKey) {
        JQXLite(this.componentSelector).jqxTreeGrid('lockRow', rowKey);  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxTreeGrid('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxTreeGrid('render');
    };
    removeFilter(dataField) {
        JQXLite(this.componentSelector).jqxTreeGrid('removeFilter', dataField);  
    };
    scrollOffset(top, left) {
        return JQXLite(this.componentSelector).jqxTreeGrid('scrollOffset', top, left);  
    };
    setColumnProperty(dataField, propertyName, propertyValue) {
        JQXLite(this.componentSelector).jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);  
    };
    showColumn(dataField) {
        JQXLite(this.componentSelector).jqxTreeGrid('showColumn', dataField);  
    };
    selectRow(rowId) {
        JQXLite(this.componentSelector).jqxTreeGrid('selectRow', rowId);  
    };
    setCellValue(rowId, dataField, cellValue) {
        JQXLite(this.componentSelector).jqxTreeGrid('setCellValue', rowId, dataField, cellValue);  
    };
    sortBy(dataField, sortOrder) {
        JQXLite(this.componentSelector).jqxTreeGrid('sortBy', dataField, sortOrder);  
    };
    updating() {
        return JQXLite(this.componentSelector).jqxTreeGrid('updating');  
    };
    updateBoundData() {
        JQXLite(this.componentSelector).jqxTreeGrid('updateBoundData');  
    };
    unselectRow(rowId) {
        JQXLite(this.componentSelector).jqxTreeGrid('unselectRow', rowId);  
    };
    uncheckRow(rowId) {
        JQXLite(this.componentSelector).jqxTreeGrid('uncheckRow', rowId);  
    };
    updateRow(rowId, data) {
        JQXLite(this.componentSelector).jqxTreeGrid('updateRow', rowId, data);  
    };
    unlockRow(rowId) {
        JQXLite(this.componentSelector).jqxTreeGrid('unlockRow', rowId);  
    };
    render() {
        let id = 'jqxTreeGrid' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

