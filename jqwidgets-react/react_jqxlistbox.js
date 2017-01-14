/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxListBox = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['autoHeight','allowDrag','allowDrop','checkboxes','disabled','displayMember','dropAction','dragStart','dragEnd','enableHover','enableSelection','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','height','hasThreeStates','itemHeight','incrementalSearch','incrementalSearchDelay','multiple','multipleextended','renderer','rtl','selectedIndex','source','scrollBarSize','searchMode','theme','valueMember','width'];
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
    $('#' +this.componentSelector).jqxListBox(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxListBox('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxListBox(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  autoHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("autoHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("autoHeight");
    }
  },
  allowDrag: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("allowDrag", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("allowDrag");
    }
  },
  allowDrop: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("allowDrop", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("allowDrop");
    }
  },
  checkboxes: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("checkboxes", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("checkboxes");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("disabled");
    }
  },
  displayMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("displayMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("displayMember");
    }
  },
  dropAction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("dropAction", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("dropAction");
    }
  },
  dragStart: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("dragStart", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("dragStart");
    }
  },
  dragEnd: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("dragEnd", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("dragEnd");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("enableHover");
    }
  },
  enableSelection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("enableSelection", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("enableSelection");
    }
  },
  equalItemsWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("equalItemsWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("equalItemsWidth");
    }
  },
  filterable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("filterable", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("filterable");
    }
  },
  filterHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("filterHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("filterHeight");
    }
  },
  filterDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("filterDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("filterDelay");
    }
  },
  filterPlaceHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("filterPlaceHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("filterPlaceHolder");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("height");
    }
  },
  hasThreeStates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("hasThreeStates", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("hasThreeStates");
    }
  },
  itemHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("itemHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("itemHeight");
    }
  },
  incrementalSearch: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("incrementalSearch", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("incrementalSearch");
    }
  },
  incrementalSearchDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("incrementalSearchDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("incrementalSearchDelay");
    }
  },
  multiple: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("multiple", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("multiple");
    }
  },
  multipleextended: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("multipleextended", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("multipleextended");
    }
  },
  renderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("renderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("renderer");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("rtl");
    }
  },
  selectedIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("selectedIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("selectedIndex");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("source");
    }
  },
  scrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("scrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("scrollBarSize");
    }
  },
  searchMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("searchMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("searchMode");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("theme");
    }
  },
  valueMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("valueMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("valueMember");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListBox("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxListBox("width");
    }
  },
  addItem: function (Item) {
    return $("#" +this.componentSelector).jqxListBox("addItem", Item);  
  },
  beginUpdate: function () {
    $("#" +this.componentSelector).jqxListBox("beginUpdate");  
  },
  clear: function () {
    $("#" +this.componentSelector).jqxListBox("clear");  
  },
  clearSelection: function () {
    $("#" +this.componentSelector).jqxListBox("clearSelection");  
  },
  checkIndex: function (Index) {
    $("#" +this.componentSelector).jqxListBox("checkIndex", Index);  
  },
  checkItem: function (Item) {
    $("#" +this.componentSelector).jqxListBox("checkItem", Item);  
  },
  checkAll: function () {
    $("#" +this.componentSelector).jqxListBox("checkAll");  
  },
  clearFilter: function () {
    $("#" +this.componentSelector).jqxListBox("clearFilter");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxListBox("destroy");  
  },
  disableItem: function (Item) {
    $("#" +this.componentSelector).jqxListBox("disableItem", Item);  
  },
  disableAt: function (Index) {
    $("#" +this.componentSelector).jqxListBox("disableAt", Index);  
  },
  enableItem: function (Item) {
    $("#" +this.componentSelector).jqxListBox("enableItem", Item);  
  },
  enableAt: function (Index) {
    $("#" +this.componentSelector).jqxListBox("enableAt", Index);  
  },
  ensureVisible: function (item) {
    $("#" +this.componentSelector).jqxListBox("ensureVisible", item);  
  },
  endUpdate: function () {
    $("#" +this.componentSelector).jqxListBox("endUpdate");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxListBox("focus");  
  },
  getItems: function () {
    return $("#" +this.componentSelector).jqxListBox("getItems");  
  },
  getSelectedItems: function () {
    return $("#" +this.componentSelector).jqxListBox("getSelectedItems");  
  },
  getCheckedItems: function () {
    return $("#" +this.componentSelector).jqxListBox("getCheckedItems");  
  },
  getItem: function (Index) {
    return $("#" +this.componentSelector).jqxListBox("getItem", Index);  
  },
  getItemByValue: function (Item) {
    return $("#" +this.componentSelector).jqxListBox("getItemByValue", Item);  
  },
  getSelectedItem: function () {
    return $("#" +this.componentSelector).jqxListBox("getSelectedItem");  
  },
  getSelectedIndex: function () {
    return $("#" +this.componentSelector).jqxListBox("getSelectedIndex");  
  },
  insertAt: function (Item, Index) {
    $("#" +this.componentSelector).jqxListBox("insertAt", Item, Index);  
  },
  invalidate: function () {
    $("#" +this.componentSelector).jqxListBox("invalidate");  
  },
  indeterminateItem: function (Item) {
    $("#" +this.componentSelector).jqxListBox("indeterminateItem", Item);  
  },
  indeterminateIndex: function (Index) {
    $("#" +this.componentSelector).jqxListBox("indeterminateIndex", Index);  
  },
  removeItem: function (Item) {
    $("#" +this.componentSelector).jqxListBox("removeItem", Item);  
  },
  removeAt: function (Index) {
    $("#" +this.componentSelector).jqxListBox("removeAt", Index);  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxListBox("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxListBox("refresh");  
  },
  selectItem: function (Item) {
    $("#" +this.componentSelector).jqxListBox("selectItem", Item);  
  },
  selectIndex: function (Index) {
    $("#" +this.componentSelector).jqxListBox("selectIndex", Index);  
  },
  updateItem: function (Item, Value) {
    $("#" +this.componentSelector).jqxListBox("updateItem", Item, Value);  
  },
  updateAt: function (item, index) {
    $("#" +this.componentSelector).jqxListBox("updateAt", item, index);  
  },
  unselectIndex: function (index) {
    $("#" +this.componentSelector).jqxListBox("unselectIndex", index);  
  },
  unselectItem: function (item) {
    $("#" +this.componentSelector).jqxListBox("unselectItem", item);  
  },
  uncheckIndex: function (index) {
    $("#" +this.componentSelector).jqxListBox("uncheckIndex", index);  
  },
  uncheckItem: function (item) {
    $("#" +this.componentSelector).jqxListBox("uncheckItem", item);  
  },
  uncheckAll: function () {
    $("#" +this.componentSelector).jqxListBox("uncheckAll");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxListBox("val", value)
    } else {
      return $("#" +this.componentSelector).jqxListBox("val");
    }
  },

  render: function () {
    let id = 'jqxListBox' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxListBox;

