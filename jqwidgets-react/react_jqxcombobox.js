/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxComboBox = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationType','autoComplete','autoOpen','autoItemsHeight','autoDropDownHeight','closeDelay','checkboxes','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','enableHover','enableSelection','enableBrowserBoundsDetection','height','itemHeight','multiSelect','minLength','openDelay','popupZIndex','placeHolder','remoteAutoComplete','remoteAutoCompleteDelay','renderer','renderSelectedItem','rtl','selectedIndex','showArrow','showCloseButtons','searchMode','search','source','scrollBarSize','template','theme','validateSelection','valueMember','width'];
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
    $('#' +this.componentSelector).jqxComboBox(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxComboBox('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxComboBox(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("animationType");
    }
  },
  autoComplete: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("autoComplete", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("autoComplete");
    }
  },
  autoOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("autoOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("autoOpen");
    }
  },
  autoItemsHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("autoItemsHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("autoItemsHeight");
    }
  },
  autoDropDownHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("autoDropDownHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("autoDropDownHeight");
    }
  },
  closeDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("closeDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("closeDelay");
    }
  },
  checkboxes: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("checkboxes", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("checkboxes");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("disabled");
    }
  },
  displayMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("displayMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("displayMember");
    }
  },
  dropDownHorizontalAlignment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("dropDownHorizontalAlignment", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("dropDownHorizontalAlignment");
    }
  },
  dropDownVerticalAlignment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("dropDownVerticalAlignment", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("dropDownVerticalAlignment");
    }
  },
  dropDownHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("dropDownHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("dropDownHeight");
    }
  },
  dropDownWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("dropDownWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("dropDownWidth");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("enableHover");
    }
  },
  enableSelection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("enableSelection", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("enableSelection");
    }
  },
  enableBrowserBoundsDetection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("enableBrowserBoundsDetection", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("enableBrowserBoundsDetection");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("height");
    }
  },
  itemHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("itemHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("itemHeight");
    }
  },
  multiSelect: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("multiSelect", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("multiSelect");
    }
  },
  minLength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("minLength", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("minLength");
    }
  },
  openDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("openDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("openDelay");
    }
  },
  popupZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("popupZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("popupZIndex");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("placeHolder");
    }
  },
  remoteAutoComplete: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("remoteAutoComplete", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("remoteAutoComplete");
    }
  },
  remoteAutoCompleteDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("remoteAutoCompleteDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("remoteAutoCompleteDelay");
    }
  },
  renderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("renderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("renderer");
    }
  },
  renderSelectedItem: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("renderSelectedItem", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("renderSelectedItem");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("rtl");
    }
  },
  selectedIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("selectedIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("selectedIndex");
    }
  },
  showArrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("showArrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("showArrow");
    }
  },
  showCloseButtons: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("showCloseButtons", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("showCloseButtons");
    }
  },
  searchMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("searchMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("searchMode");
    }
  },
  search: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("search", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("search");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("source");
    }
  },
  scrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("scrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("scrollBarSize");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("theme");
    }
  },
  validateSelection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("validateSelection", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("validateSelection");
    }
  },
  valueMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("valueMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("valueMember");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("width");
    }
  },
  addItem: function (item) {
    return $("#" +this.componentSelector).jqxComboBox("addItem", item);  
  },
  clearSelection: function () {
    $("#" +this.componentSelector).jqxComboBox("clearSelection");  
  },
  clear: function () {
    $("#" +this.componentSelector).jqxComboBox("clear");  
  },
  close: function () {
    $("#" +this.componentSelector).jqxComboBox("close");  
  },
  checkIndex: function (index) {
    $("#" +this.componentSelector).jqxComboBox("checkIndex", index);  
  },
  checkItem: function (item) {
    $("#" +this.componentSelector).jqxComboBox("checkItem", item);  
  },
  checkAll: function () {
    $("#" +this.componentSelector).jqxComboBox("checkAll");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxComboBox("destroy");  
  },
  disableItem: function (item) {
    $("#" +this.componentSelector).jqxComboBox("disableItem", item);  
  },
  disableAt: function (index) {
    $("#" +this.componentSelector).jqxComboBox("disableAt", index);  
  },
  enableItem: function (item) {
    $("#" +this.componentSelector).jqxComboBox("enableItem", item);  
  },
  enableAt: function (index) {
    $("#" +this.componentSelector).jqxComboBox("enableAt", index);  
  },
  ensureVisible: function (index) {
    $("#" +this.componentSelector).jqxComboBox("ensureVisible", index);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxComboBox("focus");  
  },
  getItem: function (index) {
    return $("#" +this.componentSelector).jqxComboBox("getItem", index);  
  },
  getItemByValue: function (value) {
    return $("#" +this.componentSelector).jqxComboBox("getItemByValue", value);  
  },
  getVisibleItems: function () {
    return $("#" +this.componentSelector).jqxComboBox("getVisibleItems");  
  },
  getItems: function () {
    return $("#" +this.componentSelector).jqxComboBox("getItems");  
  },
  getCheckedItems: function () {
    return $("#" +this.componentSelector).jqxComboBox("getCheckedItems");  
  },
  getSelectedItem: function () {
    return $("#" +this.componentSelector).jqxComboBox("getSelectedItem");  
  },
  getSelectedItems: function () {
    return $("#" +this.componentSelector).jqxComboBox("getSelectedItems");  
  },
  getSelectedIndex: function () {
    return $("#" +this.componentSelector).jqxComboBox("getSelectedIndex");  
  },
  insertAt: function (item, index) {
    return $("#" +this.componentSelector).jqxComboBox("insertAt", item, index);  
  },
  isOpened: function () {
    return $("#" +this.componentSelector).jqxComboBox("isOpened");  
  },
  indeterminateIndex: function (index) {
    $("#" +this.componentSelector).jqxComboBox("indeterminateIndex", index);  
  },
  indeterminateItem: function (item) {
    $("#" +this.componentSelector).jqxComboBox("indeterminateItem", item);  
  },
  loadFromSelect: function (selectTagId) {
    $("#" +this.componentSelector).jqxComboBox("loadFromSelect", selectTagId);  
  },
  open: function () {
    $("#" +this.componentSelector).jqxComboBox("open");  
  },
  removeItem: function (item) {
    return $("#" +this.componentSelector).jqxComboBox("removeItem", item);  
  },
  removeAt: function (index) {
    return $("#" +this.componentSelector).jqxComboBox("removeAt", index);  
  },
  selectIndex: function (index) {
    $("#" +this.componentSelector).jqxComboBox("selectIndex", index);  
  },
  selectItem: function (item) {
    $("#" +this.componentSelector).jqxComboBox("selectItem", item);  
  },
  updateItem: function (item, itemValue) {
    $("#" +this.componentSelector).jqxComboBox("updateItem", item, itemValue);  
  },
  updateAt: function (item, index) {
    $("#" +this.componentSelector).jqxComboBox("updateAt", item, index);  
  },
  unselectIndex: function (index) {
    $("#" +this.componentSelector).jqxComboBox("unselectIndex", index);  
  },
  unselectItem: function (item) {
    $("#" +this.componentSelector).jqxComboBox("unselectItem", item);  
  },
  uncheckIndex: function (index) {
    $("#" +this.componentSelector).jqxComboBox("uncheckIndex", index);  
  },
  uncheckItem: function (item) {
    $("#" +this.componentSelector).jqxComboBox("uncheckItem", item);  
  },
  uncheckAll: function () {
    $("#" +this.componentSelector).jqxComboBox("uncheckAll");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxComboBox("val", value)
    } else {
      return $("#" +this.componentSelector).jqxComboBox("val");
    }
  },

  render: function () {
    let id = 'jqxComboBox' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxComboBox;

