/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDataTable = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
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
    $('#' +this.componentSelector).jqxDataTable(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDataTable('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDataTable(arguments[i]);
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
      $("#" +this.componentSelector).jqxDataTable("altRows", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("altRows");
    }
  },
  autoRowHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("autoRowHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("autoRowHeight");
    }
  },
  aggregatesHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("aggregatesHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("aggregatesHeight");
    }
  },
  autoShowLoadElement: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("autoShowLoadElement", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("autoShowLoadElement");
    }
  },
  columnsHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("columnsHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("columnsHeight");
    }
  },
  columns: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("columns", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("columns");
    }
  },
  columnGroups: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("columnGroups", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("columnGroups");
    }
  },
  columnsResize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("columnsResize", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("columnsResize");
    }
  },
  columnsReorder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("columnsReorder", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("columnsReorder");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("disabled");
    }
  },
  editable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("editable", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("editable");
    }
  },
  editSettings: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("editSettings", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("editSettings");
    }
  },
  exportSettings: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("exportSettings", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("exportSettings");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("enableHover");
    }
  },
  enableBrowserSelection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("enableBrowserSelection", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("enableBrowserSelection");
    }
  },
  filterable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("filterable", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("filterable");
    }
  },
  filterHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("filterHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("filterHeight");
    }
  },
  filterMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("filterMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("filterMode");
    }
  },
  groups: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("groups", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("groups");
    }
  },
  groupsRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("groupsRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("groupsRenderer");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("height");
    }
  },
  initRowDetails: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("initRowDetails", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("initRowDetails");
    }
  },
  incrementalSearch: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("incrementalSearch", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("incrementalSearch");
    }
  },
  localization: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("localization", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("localization");
    }
  },
  pagerHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("pagerHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("pagerHeight");
    }
  },
  pageSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("pageSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("pageSize");
    }
  },
  pageSizeOptions: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("pageSizeOptions", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("pageSizeOptions");
    }
  },
  pageable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("pageable", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("pageable");
    }
  },
  pagerPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("pagerPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("pagerPosition");
    }
  },
  pagerMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("pagerMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("pagerMode");
    }
  },
  pagerButtonsCount: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("pagerButtonsCount", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("pagerButtonsCount");
    }
  },
  pagerRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("pagerRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("pagerRenderer");
    }
  },
  ready: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("ready", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("ready");
    }
  },
  rowDetails: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("rowDetails", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("rowDetails");
    }
  },
  renderToolbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("renderToolbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("renderToolbar");
    }
  },
  renderStatusbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("renderStatusbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("renderStatusbar");
    }
  },
  rendering: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("rendering", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("rendering");
    }
  },
  rendered: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("rendered", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("rendered");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("rtl");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("source");
    }
  },
  sortable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("sortable", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("sortable");
    }
  },
  showAggregates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("showAggregates", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("showAggregates");
    }
  },
  showToolbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("showToolbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("showToolbar");
    }
  },
  showStatusbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("showStatusbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("showStatusbar");
    }
  },
  statusBarHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("statusBarHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("statusBarHeight");
    }
  },
  scrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("scrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("scrollBarSize");
    }
  },
  selectionMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("selectionMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("selectionMode");
    }
  },
  serverProcessing: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("serverProcessing", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("serverProcessing");
    }
  },
  showHeader: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("showHeader", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("showHeader");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("theme");
    }
  },
  toolbarHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("toolbarHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("toolbarHeight");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataTable("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataTable("width");
    }
  },
  addRow: function (rowIndex, rowData, rowPosition) {
    $("#" +this.componentSelector).jqxDataTable("addRow", rowIndex, rowData, rowPosition);  
  },
  addFilter: function (dataField, filerGroup) {
    return $("#" +this.componentSelector).jqxDataTable("addFilter", dataField, filerGroup);  
  },
  applyFilters: function () {
    $("#" +this.componentSelector).jqxDataTable("applyFilters");  
  },
  beginUpdate: function () {
    $("#" +this.componentSelector).jqxDataTable("beginUpdate");  
  },
  beginRowEdit: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("beginRowEdit", rowIndex);  
  },
  beginCellEdit: function (rowIndex, dataField) {
    $("#" +this.componentSelector).jqxDataTable("beginCellEdit", rowIndex, dataField);  
  },
  clearSelection: function () {
    $("#" +this.componentSelector).jqxDataTable("clearSelection");  
  },
  clearFilters: function () {
    $("#" +this.componentSelector).jqxDataTable("clearFilters");  
  },
  clear: function () {
    $("#" +this.componentSelector).jqxDataTable("clear");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxDataTable("destroy");  
  },
  deleteRow: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("deleteRow", rowIndex);  
  },
  endUpdate: function () {
    $("#" +this.componentSelector).jqxDataTable("endUpdate");  
  },
  ensureRowVisible: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("ensureRowVisible", rowIndex);  
  },
  endRowEdit: function (rowIndex, cancelChanges) {
    $("#" +this.componentSelector).jqxDataTable("endRowEdit", rowIndex, cancelChanges);  
  },
  endCellEdit: function (rowIndex, dataField) {
    $("#" +this.componentSelector).jqxDataTable("endCellEdit", rowIndex, dataField);  
  },
  exportData: function (exportDataType) {
    return $("#" +this.componentSelector).jqxDataTable("exportData", exportDataType);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxDataTable("focus");  
  },
  getColumnProperty: function (dataField, propertyName) {
    return $("#" +this.componentSelector).jqxDataTable("getColumnProperty", dataField, propertyName);  
  },
  goToPage: function (pageIndex) {
    $("#" +this.componentSelector).jqxDataTable("goToPage", pageIndex);  
  },
  goToPrevPage: function () {
    $("#" +this.componentSelector).jqxDataTable("goToPrevPage");  
  },
  goToNextPage: function () {
    $("#" +this.componentSelector).jqxDataTable("goToNextPage");  
  },
  getSelection: function () {
    return $("#" +this.componentSelector).jqxDataTable("getSelection");  
  },
  getRows: function () {
    return $("#" +this.componentSelector).jqxDataTable("getRows");  
  },
  getView: function () {
    return $("#" +this.componentSelector).jqxDataTable("getView");  
  },
  getCellValue: function (rowIndex, dataField) {
    return $("#" +this.componentSelector).jqxDataTable("getCellValue", rowIndex, dataField);  
  },
  hideColumn: function (dataField) {
    $("#" +this.componentSelector).jqxDataTable("hideColumn", dataField);  
  },
  hideDetails: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("hideDetails", rowIndex);  
  },
  isBindingCompleted: function () {
    return $("#" +this.componentSelector).jqxDataTable("isBindingCompleted");  
  },
  lockRow: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("lockRow", rowIndex);  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxDataTable("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxDataTable("render");
  },
  removeFilter: function (dataField) {
    $("#" +this.componentSelector).jqxDataTable("removeFilter", dataField);  
  },
  scrollOffset: function (top, left) {
    return $("#" +this.componentSelector).jqxDataTable("scrollOffset", top, left);  
  },
  setColumnProperty: function (dataField, propertyName, propertyValue) {
    $("#" +this.componentSelector).jqxDataTable("setColumnProperty", dataField, propertyName, propertyValue);  
  },
  showColumn: function (dataField) {
    $("#" +this.componentSelector).jqxDataTable("showColumn", dataField);  
  },
  selectRow: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("selectRow", rowIndex);  
  },
  showDetails: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("showDetails", rowIndex);  
  },
  setCellValue: function (rowIndex, dataField, value) {
    $("#" +this.componentSelector).jqxDataTable("setCellValue", rowIndex, dataField, value);  
  },
  sortBy: function (dataField, sortOrder) {
    $("#" +this.componentSelector).jqxDataTable("sortBy", dataField, sortOrder);  
  },
  updating: function () {
    return $("#" +this.componentSelector).jqxDataTable("updating");  
  },
  updateBoundData: function () {
    $("#" +this.componentSelector).jqxDataTable("updateBoundData");  
  },
  unselectRow: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("unselectRow", rowIndex);  
  },
  updateRow: function (rowIndex, rowData) {
    $("#" +this.componentSelector).jqxDataTable("updateRow", rowIndex, rowData);  
  },
  unlockRow: function (rowIndex) {
    $("#" +this.componentSelector).jqxDataTable("unlockRow", rowIndex);  
  },
  render: function () {
    let id = 'jqxDataTable' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDataTable;

