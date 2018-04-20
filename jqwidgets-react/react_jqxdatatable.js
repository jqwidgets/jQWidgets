/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxDataTable extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['altRows','autoRowHeight','aggregatesHeight','autoShowLoadElement','columnsHeight','columns','columnGroups','columnsResize','columnsReorder','disabled','editable','editSettings','exportSettings','enableHover','enableBrowserSelection','filterable','filterHeight','filterMode','groups','groupsRenderer','height','initRowDetails','incrementalSearch','localization','pagerHeight','pageSize','pageSizeOptions','pageable','pagerPosition','pagerMode','pagerButtonsCount','pagerRenderer','ready','rowDetails','renderToolbar','renderStatusbar','rendering','rendered','rtl','source','sortable','showAggregates','showToolbar','showStatusbar','statusBarHeight','scrollBarSize','selectionMode','serverProcessing','showHeader','theme','toolbarHeight','width'];
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
        JQXLite(this.componentSelector).jqxDataTable(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxDataTable('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDataTable(arguments[i]);
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
            JQXLite(this.componentSelector).jqxDataTable('altRows', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('altRows');
        }
    };
    autoRowHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('autoRowHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('autoRowHeight');
        }
    };
    aggregatesHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('aggregatesHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('aggregatesHeight');
        }
    };
    autoShowLoadElement(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('autoShowLoadElement', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('autoShowLoadElement');
        }
    };
    columnsHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('columnsHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('columnsHeight');
        }
    };
    columns(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('columns', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('columns');
        }
    };
    columnGroups(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('columnGroups', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('columnGroups');
        }
    };
    columnsResize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('columnsResize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('columnsResize');
        }
    };
    columnsReorder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('columnsReorder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('columnsReorder');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('disabled');
        }
    };
    editable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('editable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('editable');
        }
    };
    editSettings(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('editSettings', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('editSettings');
        }
    };
    exportSettings(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('exportSettings', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('exportSettings');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('enableHover');
        }
    };
    enableBrowserSelection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('enableBrowserSelection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('enableBrowserSelection');
        }
    };
    filterable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('filterable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('filterable');
        }
    };
    filterHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('filterHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('filterHeight');
        }
    };
    filterMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('filterMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('filterMode');
        }
    };
    groups(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('groups', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('groups');
        }
    };
    groupsRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('groupsRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('groupsRenderer');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('height');
        }
    };
    initRowDetails(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('initRowDetails', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('initRowDetails');
        }
    };
    incrementalSearch(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('incrementalSearch', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('incrementalSearch');
        }
    };
    localization(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('localization', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('localization');
        }
    };
    pagerHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('pagerHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('pagerHeight');
        }
    };
    pageSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('pageSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('pageSize');
        }
    };
    pageSizeOptions(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('pageSizeOptions', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('pageSizeOptions');
        }
    };
    pageable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('pageable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('pageable');
        }
    };
    pagerPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('pagerPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('pagerPosition');
        }
    };
    pagerMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('pagerMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('pagerMode');
        }
    };
    pagerButtonsCount(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('pagerButtonsCount', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('pagerButtonsCount');
        }
    };
    pagerRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('pagerRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('pagerRenderer');
        }
    };
    ready(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('ready', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('ready');
        }
    };
    rowDetails(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('rowDetails', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('rowDetails');
        }
    };
    renderToolbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('renderToolbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('renderToolbar');
        }
    };
    renderStatusbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('renderStatusbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('renderStatusbar');
        }
    };
    rendering(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('rendering', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('rendering');
        }
    };
    rendered(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('rendered', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('rendered');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('rtl');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('source');
        }
    };
    sortable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('sortable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('sortable');
        }
    };
    showAggregates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('showAggregates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('showAggregates');
        }
    };
    showToolbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('showToolbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('showToolbar');
        }
    };
    showStatusbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('showStatusbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('showStatusbar');
        }
    };
    statusBarHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('statusBarHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('statusBarHeight');
        }
    };
    scrollBarSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('scrollBarSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('scrollBarSize');
        }
    };
    selectionMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('selectionMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('selectionMode');
        }
    };
    serverProcessing(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('serverProcessing', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('serverProcessing');
        }
    };
    showHeader(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('showHeader', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('showHeader');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('theme');
        }
    };
    toolbarHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('toolbarHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('toolbarHeight');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDataTable('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDataTable('width');
        }
    };
    addRow(rowIndex, rowData, rowPosition) {
        JQXLite(this.componentSelector).jqxDataTable('addRow', rowIndex, rowData, rowPosition);  
    };
    addFilter(dataField, filerGroup) {
        JQXLite(this.componentSelector).jqxDataTable('addFilter', dataField, filerGroup);  
    };
    applyFilters() {
        JQXLite(this.componentSelector).jqxDataTable('applyFilters');  
    };
    beginUpdate() {
        JQXLite(this.componentSelector).jqxDataTable('beginUpdate');  
    };
    beginRowEdit(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('beginRowEdit', rowIndex);  
    };
    beginCellEdit(rowIndex, dataField) {
        JQXLite(this.componentSelector).jqxDataTable('beginCellEdit', rowIndex, dataField);  
    };
    clearSelection() {
        JQXLite(this.componentSelector).jqxDataTable('clearSelection');  
    };
    clearFilters() {
        JQXLite(this.componentSelector).jqxDataTable('clearFilters');  
    };
    clear() {
        JQXLite(this.componentSelector).jqxDataTable('clear');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxDataTable('destroy');  
    };
    deleteRow(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('deleteRow', rowIndex);  
    };
    endUpdate() {
        JQXLite(this.componentSelector).jqxDataTable('endUpdate');  
    };
    ensureRowVisible(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('ensureRowVisible', rowIndex);  
    };
    endRowEdit(rowIndex, cancelChanges) {
        JQXLite(this.componentSelector).jqxDataTable('endRowEdit', rowIndex, cancelChanges);  
    };
    endCellEdit(rowIndex, dataField) {
        JQXLite(this.componentSelector).jqxDataTable('endCellEdit', rowIndex, dataField);  
    };
    exportData(exportDataType) {
        return JQXLite(this.componentSelector).jqxDataTable('exportData', exportDataType);  
    };
    focus() {
        JQXLite(this.componentSelector).jqxDataTable('focus');  
    };
    getColumnProperty(dataField, propertyName) {
        return JQXLite(this.componentSelector).jqxDataTable('getColumnProperty', dataField, propertyName);  
    };
    goToPage(pageIndex) {
        JQXLite(this.componentSelector).jqxDataTable('goToPage', pageIndex);  
    };
    goToPrevPage() {
        JQXLite(this.componentSelector).jqxDataTable('goToPrevPage');  
    };
    goToNextPage() {
        JQXLite(this.componentSelector).jqxDataTable('goToNextPage');  
    };
    getSelection() {
        return JQXLite(this.componentSelector).jqxDataTable('getSelection');  
    };
    getRows() {
        return JQXLite(this.componentSelector).jqxDataTable('getRows');  
    };
    getView() {
        return JQXLite(this.componentSelector).jqxDataTable('getView');  
    };
    getCellValue(rowIndex, dataField) {
        return JQXLite(this.componentSelector).jqxDataTable('getCellValue', rowIndex, dataField);  
    };
    hideColumn(dataField) {
        JQXLite(this.componentSelector).jqxDataTable('hideColumn', dataField);  
    };
    hideDetails(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('hideDetails', rowIndex);  
    };
    isBindingCompleted() {
        return JQXLite(this.componentSelector).jqxDataTable('isBindingCompleted');  
    };
    lockRow(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('lockRow', rowIndex);  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxDataTable('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxDataTable('render');
    };
    removeFilter(dataField) {
        JQXLite(this.componentSelector).jqxDataTable('removeFilter', dataField);  
    };
    scrollOffset(top, left) {
        return JQXLite(this.componentSelector).jqxDataTable('scrollOffset', top, left);  
    };
    setColumnProperty(dataField, propertyName, propertyValue) {
        JQXLite(this.componentSelector).jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);  
    };
    showColumn(dataField) {
        JQXLite(this.componentSelector).jqxDataTable('showColumn', dataField);  
    };
    selectRow(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('selectRow', rowIndex);  
    };
    showDetails(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('showDetails', rowIndex);  
    };
    setCellValue(rowIndex, dataField, value) {
        JQXLite(this.componentSelector).jqxDataTable('setCellValue', rowIndex, dataField, value);  
    };
    sortBy(dataField, sortOrder) {
        JQXLite(this.componentSelector).jqxDataTable('sortBy', dataField, sortOrder);  
    };
    updating() {
        return JQXLite(this.componentSelector).jqxDataTable('updating');  
    };
    updateBoundData() {
        JQXLite(this.componentSelector).jqxDataTable('updateBoundData');  
    };
    unselectRow(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('unselectRow', rowIndex);  
    };
    updateRow(rowIndex, rowData) {
        JQXLite(this.componentSelector).jqxDataTable('updateRow', rowIndex, rowData);  
    };
    unlockRow(rowIndex) {
        JQXLite(this.componentSelector).jqxDataTable('unlockRow', rowIndex);  
    };
    render() {
        let id = 'jqxDataTable' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

