/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDropDownList = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['autoOpen','autoDropDownHeight','animationType','checkboxes','closeDelay','disabled','displayMember','dropDownHorizontalAlignment','dropDownHeight','dropDownWidth','enableSelection','enableBrowserBoundsDetection','enableHover','filterable','filterHeight','filterDelay','filterPlaceHolder','height','incrementalSearch','incrementalSearchDelay','itemHeight','openDelay','placeHolder','popupZIndex','rtl','renderer','selectionRenderer','searchMode','scrollBarSize','source','selectedIndex','theme','valueMember','width'];
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
    $('#' +this.componentSelector).jqxDropDownList(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDropDownList('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDropDownList(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  autoOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("autoOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("autoOpen");
    }
  },
  autoDropDownHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("autoDropDownHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("autoDropDownHeight");
    }
  },
  animationType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("animationType");
    }
  },
  checkboxes: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("checkboxes", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("checkboxes");
    }
  },
  closeDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("closeDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("closeDelay");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("disabled");
    }
  },
  displayMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("displayMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("displayMember");
    }
  },
  dropDownHorizontalAlignment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("dropDownHorizontalAlignment", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("dropDownHorizontalAlignment");
    }
  },
  dropDownHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("dropDownHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("dropDownHeight");
    }
  },
  dropDownWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("dropDownWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("dropDownWidth");
    }
  },
  enableSelection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("enableSelection", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("enableSelection");
    }
  },
  enableBrowserBoundsDetection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("enableBrowserBoundsDetection", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("enableBrowserBoundsDetection");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("enableHover");
    }
  },
  filterable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("filterable", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("filterable");
    }
  },
  filterHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("filterHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("filterHeight");
    }
  },
  filterDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("filterDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("filterDelay");
    }
  },
  filterPlaceHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("filterPlaceHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("filterPlaceHolder");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("height");
    }
  },
  incrementalSearch: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("incrementalSearch", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("incrementalSearch");
    }
  },
  incrementalSearchDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("incrementalSearchDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("incrementalSearchDelay");
    }
  },
  itemHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("itemHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("itemHeight");
    }
  },
  openDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("openDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("openDelay");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("placeHolder");
    }
  },
  popupZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("popupZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("popupZIndex");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("rtl");
    }
  },
  renderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("renderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("renderer");
    }
  },
  selectionRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("selectionRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("selectionRenderer");
    }
  },
  searchMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("searchMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("searchMode");
    }
  },
  scrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("scrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("scrollBarSize");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("source");
    }
  },
  selectedIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("selectedIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("selectedIndex");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("theme");
    }
  },
  valueMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("valueMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("valueMember");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("width");
    }
  },
  addItem: function (item) {
    return $("#" +this.componentSelector).jqxDropDownList("addItem", item);  
  },
  clearSelection: function () {
    $("#" +this.componentSelector).jqxDropDownList("clearSelection");  
  },
  clear: function () {
    $("#" +this.componentSelector).jqxDropDownList("clear");  
  },
  close: function () {
    $("#" +this.componentSelector).jqxDropDownList("close");  
  },
  checkIndex: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("checkIndex", index);  
  },
  checkItem: function (item) {
    $("#" +this.componentSelector).jqxDropDownList("checkItem", item);  
  },
  checkAll: function () {
    $("#" +this.componentSelector).jqxDropDownList("checkAll");  
  },
  clearFilter: function () {
    $("#" +this.componentSelector).jqxDropDownList("clearFilter");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxDropDownList("destroy");  
  },
  disableItem: function (item) {
    $("#" +this.componentSelector).jqxDropDownList("disableItem", item);  
  },
  disableAt: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("disableAt", index);  
  },
  enableItem: function (item) {
    $("#" +this.componentSelector).jqxDropDownList("enableItem", item);  
  },
  enableAt: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("enableAt", index);  
  },
  ensureVisible: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("ensureVisible", index);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxDropDownList("focus");  
  },
  getItem: function (index) {
    return $("#" +this.componentSelector).jqxDropDownList("getItem", index);  
  },
  getItemByValue: function (itemValue) {
    return $("#" +this.componentSelector).jqxDropDownList("getItemByValue", itemValue);  
  },
  getItems: function () {
    return $("#" +this.componentSelector).jqxDropDownList("getItems");  
  },
  getCheckedItems: function () {
    return $("#" +this.componentSelector).jqxDropDownList("getCheckedItems");  
  },
  getSelectedItem: function () {
    return $("#" +this.componentSelector).jqxDropDownList("getSelectedItem");  
  },
  getSelectedIndex: function () {
    return $("#" +this.componentSelector).jqxDropDownList("getSelectedIndex");  
  },
  insertAt: function (item, index) {
    $("#" +this.componentSelector).jqxDropDownList("insertAt", item, index);  
  },
  isOpened: function () {
    return $("#" +this.componentSelector).jqxDropDownList("isOpened");  
  },
  indeterminateIndex: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("indeterminateIndex", index);  
  },
  indeterminateItem: function (item) {
    $("#" +this.componentSelector).jqxDropDownList("indeterminateItem", item);  
  },
  loadFromSelect: function (arg) {
    $("#" +this.componentSelector).jqxDropDownList("loadFromSelect", arg);  
  },
  open: function () {
    $("#" +this.componentSelector).jqxDropDownList("open");  
  },
  removeItem: function (item) {
    $("#" +this.componentSelector).jqxDropDownList("removeItem", item);  
  },
  removeAt: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("removeAt", index);  
  },
  selectIndex: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("selectIndex", index);  
  },
  selectItem: function (item) {
    $("#" +this.componentSelector).jqxDropDownList("selectItem", item);  
  },
  setContent: function (content) {
    $("#" +this.componentSelector).jqxDropDownList("setContent", content);  
  },
  updateItem: function (newItem, item) {
    $("#" +this.componentSelector).jqxDropDownList("updateItem", newItem, item);  
  },
  updateAt: function (item, index) {
    $("#" +this.componentSelector).jqxDropDownList("updateAt", item, index);  
  },
  unselectIndex: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("unselectIndex", index);  
  },
  unselectItem: function (item) {
    $("#" +this.componentSelector).jqxDropDownList("unselectItem", item);  
  },
  uncheckIndex: function (index) {
    $("#" +this.componentSelector).jqxDropDownList("uncheckIndex", index);  
  },
  uncheckItem: function (item) {
    $("#" +this.componentSelector).jqxDropDownList("uncheckItem", item);  
  },
  uncheckAll: function () {
    $("#" +this.componentSelector).jqxDropDownList("uncheckAll");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxDropDownList("val", value)
    } else {
      return $("#" +this.componentSelector).jqxDropDownList("val");
    }
  },

  render: function () {
    let id = 'jqxDropDownList' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDropDownList;

