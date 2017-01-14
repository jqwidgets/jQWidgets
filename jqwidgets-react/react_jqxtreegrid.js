/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxTreeGrid = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
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
    },
  createComponent : function (options) {
    if(!this.style) {
        for (let style in this.props.style) {
          $('#' +this.componentSelector).css(style, this.props.style[style]);
        }
    }
    if(this.props.className !== undefined) {
      let classes = this.props.className.split(' ');
      for (let i = 0; i < classes.length; i++ ) {
        $('#' +this.componentSelector).addClass(classes[i]);
      }
    }
    if(!this.template) {
        $('#' +this.componentSelector).html(this.props.template);
    }
    $('#' +this.componentSelector).jqxTreeGrid(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxTreeGrid('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxTreeGrid(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  altRows: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("altRows", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("altRows");
    }
  },
  autoRowHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("autoRowHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("autoRowHeight");
    }
  },
  aggregatesHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("aggregatesHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("aggregatesHeight");
    }
  },
  autoShowLoadElement: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("autoShowLoadElement", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("autoShowLoadElement");
    }
  },
  checkboxes: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("checkboxes", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("checkboxes");
    }
  },
  columnsHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("columnsHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("columnsHeight");
    }
  },
  columns: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("columns", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("columns");
    }
  },
  columnGroups: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("columnGroups", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("columnGroups");
    }
  },
  columnsResize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("columnsResize", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("columnsResize");
    }
  },
  columnsReorder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("columnsReorder", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("columnsReorder");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("disabled");
    }
  },
  editable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("editable", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("editable");
    }
  },
  editSettings: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("editSettings", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("editSettings");
    }
  },
  exportSettings: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("exportSettings", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("exportSettings");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("enableHover");
    }
  },
  enableBrowserSelection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("enableBrowserSelection", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("enableBrowserSelection");
    }
  },
  filterable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("filterable", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("filterable");
    }
  },
  filterHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("filterHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("filterHeight");
    }
  },
  filterMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("filterMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("filterMode");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("height");
    }
  },
  hierarchicalCheckboxes: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("hierarchicalCheckboxes", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("hierarchicalCheckboxes");
    }
  },
  icons: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("icons", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("icons");
    }
  },
  incrementalSearch: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("incrementalSearch", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("incrementalSearch");
    }
  },
  localization: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("localization", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("localization");
    }
  },
  pagerHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pagerHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pagerHeight");
    }
  },
  pageSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pageSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pageSize");
    }
  },
  pageSizeOptions: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pageSizeOptions", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pageSizeOptions");
    }
  },
  pageable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pageable", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pageable");
    }
  },
  pagerPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pagerPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pagerPosition");
    }
  },
  pagerMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pagerMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pagerMode");
    }
  },
  pageSizeMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pageSizeMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pageSizeMode");
    }
  },
  pagerButtonsCount: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pagerButtonsCount", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pagerButtonsCount");
    }
  },
  pagerRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("pagerRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("pagerRenderer");
    }
  },
  ready: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("ready", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("ready");
    }
  },
  rowDetails: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("rowDetails", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("rowDetails");
    }
  },
  rowDetailsRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("rowDetailsRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("rowDetailsRenderer");
    }
  },
  renderToolbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("renderToolbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("renderToolbar");
    }
  },
  renderStatusbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("renderStatusbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("renderStatusbar");
    }
  },
  rendering: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("rendering", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("rendering");
    }
  },
  rendered: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("rendered", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("rendered");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("rtl");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("source");
    }
  },
  sortable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("sortable", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("sortable");
    }
  },
  showAggregates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("showAggregates", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("showAggregates");
    }
  },
  showSubAggregates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("showSubAggregates", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("showSubAggregates");
    }
  },
  showToolbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("showToolbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("showToolbar");
    }
  },
  showStatusbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("showStatusbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("showStatusbar");
    }
  },
  statusBarHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("statusBarHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("statusBarHeight");
    }
  },
  scrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("scrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("scrollBarSize");
    }
  },
  selectionMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("selectionMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("selectionMode");
    }
  },
  showHeader: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("showHeader", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("showHeader");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("theme");
    }
  },
  toolbarHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("toolbarHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("toolbarHeight");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("width");
    }
  },
  virtualModeCreateRecords: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("virtualModeCreateRecords", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("virtualModeCreateRecords");
    }
  },
  virtualModeRecordCreating: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeGrid("virtualModeRecordCreating", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeGrid("virtualModeRecordCreating");
    }
  },
  addRow: function (rowKey, rowData, rowPosition, parent) {
    $("#" +this.componentSelector).jqxTreeGrid("addRow", rowKey, rowData, rowPosition, parent);  
  },
  addFilter: function (dataField, filerGroup) {
    $("#" +this.componentSelector).jqxTreeGrid("addFilter", dataField, filerGroup);  
  },
  applyFilters: function () {
    $("#" +this.componentSelector).jqxTreeGrid("applyFilters");  
  },
  beginUpdate: function () {
    $("#" +this.componentSelector).jqxTreeGrid("beginUpdate");  
  },
  beginRowEdit: function (rowKey) {
    $("#" +this.componentSelector).jqxTreeGrid("beginRowEdit", rowKey);  
  },
  beginCellEdit: function (rowKey, dataField) {
    $("#" +this.componentSelector).jqxTreeGrid("beginCellEdit", rowKey, dataField);  
  },
  clearSelection: function () {
    $("#" +this.componentSelector).jqxTreeGrid("clearSelection");  
  },
  clearFilters: function () {
    $("#" +this.componentSelector).jqxTreeGrid("clearFilters");  
  },
  clear: function () {
    $("#" +this.componentSelector).jqxTreeGrid("clear");  
  },
  checkRow: function (rowKey) {
    $("#" +this.componentSelector).jqxTreeGrid("checkRow", rowKey);  
  },
  collapseRow: function (rowKey) {
    $("#" +this.componentSelector).jqxTreeGrid("collapseRow", rowKey);  
  },
  collapseAll: function () {
    $("#" +this.componentSelector).jqxTreeGrid("collapseAll");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxTreeGrid("destroy");  
  },
  deleteRow: function (rowKey) {
    $("#" +this.componentSelector).jqxTreeGrid("deleteRow", rowKey);  
  },
  expandRow: function (rowKey) {
    $("#" +this.componentSelector).jqxTreeGrid("expandRow", rowKey);  
  },
  expandAll: function () {
    $("#" +this.componentSelector).jqxTreeGrid("expandAll");  
  },
  endUpdate: function () {
    $("#" +this.componentSelector).jqxTreeGrid("endUpdate");  
  },
  ensureRowVisible: function (rowKey) {
    $("#" +this.componentSelector).jqxTreeGrid("ensureRowVisible", rowKey);  
  },
  endRowEdit: function (rowKey, cancelChanges) {
    $("#" +this.componentSelector).jqxTreeGrid("endRowEdit", rowKey, cancelChanges);  
  },
  endCellEdit: function (rowKey, dataField, cancelChanges) {
    $("#" +this.componentSelector).jqxTreeGrid("endCellEdit", rowKey, dataField, cancelChanges);  
  },
  exportData: function (exportDataType) {
    return $("#" +this.componentSelector).jqxTreeGrid("exportData", exportDataType);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxTreeGrid("focus");  
  },
  getColumnProperty: function (dataField, propertyName) {
    return $("#" +this.componentSelector).jqxTreeGrid("getColumnProperty", dataField, propertyName);  
  },
  goToPage: function (pageIndex) {
    $("#" +this.componentSelector).jqxTreeGrid("goToPage", pageIndex);  
  },
  goToPrevPage: function () {
    $("#" +this.componentSelector).jqxTreeGrid("goToPrevPage");  
  },
  goToNextPage: function () {
    $("#" +this.componentSelector).jqxTreeGrid("goToNextPage");  
  },
  getSelection: function () {
    return $("#" +this.componentSelector).jqxTreeGrid("getSelection");  
  },
  getKey: function (row) {
    return $("#" +this.componentSelector).jqxTreeGrid("getKey", row);  
  },
  getRow: function (rowKey) {
    return $("#" +this.componentSelector).jqxTreeGrid("getRow", rowKey);  
  },
  getRows: function () {
    return $("#" +this.componentSelector).jqxTreeGrid("getRows");  
  },
  getCheckedRows: function () {
    return $("#" +this.componentSelector).jqxTreeGrid("getCheckedRows");  
  },
  getView: function () {
    return $("#" +this.componentSelector).jqxTreeGrid("getView");  
  },
  getCellValue: function (rowKey, dataField) {
    return $("#" +this.componentSelector).jqxTreeGrid("getCellValue", rowKey, dataField);  
  },
  hideColumn: function (dataField) {
    $("#" +this.componentSelector).jqxTreeGrid("hideColumn", dataField);  
  },
  isBindingCompleted: function () {
    return $("#" +this.componentSelector).jqxTreeGrid("isBindingCompleted");  
  },
  lockRow: function (rowKey) {
    $("#" +this.componentSelector).jqxTreeGrid("lockRow", rowKey);  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxTreeGrid("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxTreeGrid("render");
  },
  removeFilter: function (dataField) {
    $("#" +this.componentSelector).jqxTreeGrid("removeFilter", dataField);  
  },
  scrollOffset: function (top, left) {
    return $("#" +this.componentSelector).jqxTreeGrid("scrollOffset", top, left);  
  },
  setColumnProperty: function (dataField, propertyName, propertyValue) {
    $("#" +this.componentSelector).jqxTreeGrid("setColumnProperty", dataField, propertyName, propertyValue);  
  },
  showColumn: function (dataField) {
    $("#" +this.componentSelector).jqxTreeGrid("showColumn", dataField);  
  },
  selectRow: function (rowId) {
    $("#" +this.componentSelector).jqxTreeGrid("selectRow", rowId);  
  },
  setCellValue: function (rowId, dataField, cellValue) {
    $("#" +this.componentSelector).jqxTreeGrid("setCellValue", rowId, dataField, cellValue);  
  },
  sortBy: function (dataField, sortOrder) {
    $("#" +this.componentSelector).jqxTreeGrid("sortBy", dataField, sortOrder);  
  },
  updating: function () {
    return $("#" +this.componentSelector).jqxTreeGrid("updating");  
  },
  updateBoundData: function () {
    $("#" +this.componentSelector).jqxTreeGrid("updateBoundData");  
  },
  unselectRow: function (rowId) {
    $("#" +this.componentSelector).jqxTreeGrid("unselectRow", rowId);  
  },
  uncheckRow: function (rowId) {
    $("#" +this.componentSelector).jqxTreeGrid("uncheckRow", rowId);  
  },
  updateRow: function (rowId, data) {
    $("#" +this.componentSelector).jqxTreeGrid("updateRow", rowId, data);  
  },
  unlockRow: function (rowId) {
    $("#" +this.componentSelector).jqxTreeGrid("unlockRow", rowId);  
  },
  render: function () {
    let id = 'jqxTreeGrid' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxTreeGrid;

