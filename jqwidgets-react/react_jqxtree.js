/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxTree = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationShowDuration','animationHideDuration','allowDrag','allowDrop','checkboxes','dragStart','dragEnd','disabled','easing','enableHover','height','hasThreeStates','incrementalSearch','keyboardNavigation','rtl','source','toggleIndicatorSize','toggleMode','theme','width'];
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
    $('#' +this.componentSelector).jqxTree(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxTree('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxTree(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationShowDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("animationShowDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("animationShowDuration");
    }
  },
  animationHideDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("animationHideDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("animationHideDuration");
    }
  },
  allowDrag: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("allowDrag", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("allowDrag");
    }
  },
  allowDrop: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("allowDrop", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("allowDrop");
    }
  },
  checkboxes: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("checkboxes", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("checkboxes");
    }
  },
  dragStart: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("dragStart", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("dragStart");
    }
  },
  dragEnd: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("dragEnd", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("dragEnd");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("disabled");
    }
  },
  easing: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("easing", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("easing");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("enableHover");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("height");
    }
  },
  hasThreeStates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("hasThreeStates", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("hasThreeStates");
    }
  },
  incrementalSearch: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("incrementalSearch", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("incrementalSearch");
    }
  },
  keyboardNavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("keyboardNavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("keyboardNavigation");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("rtl");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("source");
    }
  },
  toggleIndicatorSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("toggleIndicatorSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("toggleIndicatorSize");
    }
  },
  toggleMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("toggleMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("toggleMode");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTree("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxTree("width");
    }
  },
  addBefore: function (item, id) {
    $("#" +this.componentSelector).jqxTree("addBefore", item, id);  
  },
  addAfter: function (item, id) {
    $("#" +this.componentSelector).jqxTree("addAfter", item, id);  
  },
  addTo: function (item, id) {
    $("#" +this.componentSelector).jqxTree("addTo", item, id);  
  },
  clear: function () {
    $("#" +this.componentSelector).jqxTree("clear");  
  },
  checkAll: function () {
    $("#" +this.componentSelector).jqxTree("checkAll");  
  },
  checkItem: function (item, checked) {
    $("#" +this.componentSelector).jqxTree("checkItem", item, checked);  
  },
  collapseAll: function () {
    $("#" +this.componentSelector).jqxTree("collapseAll");  
  },
  collapseItem: function (item) {
    $("#" +this.componentSelector).jqxTree("collapseItem", item);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxTree("destroy");  
  },
  disableItem: function (item) {
    $("#" +this.componentSelector).jqxTree("disableItem", item);  
  },
  ensureVisible: function (item) {
    $("#" +this.componentSelector).jqxTree("ensureVisible", item);  
  },
  enableItem: function (item) {
    $("#" +this.componentSelector).jqxTree("enableItem", item);  
  },
  expandAll: function () {
    $("#" +this.componentSelector).jqxTree("expandAll");  
  },
  expandItem: function (item) {
    $("#" +this.componentSelector).jqxTree("expandItem", item);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxTree("focus");  
  },
  getCheckedItems: function () {
    return $("#" +this.componentSelector).jqxTree("getCheckedItems");  
  },
  getUncheckedItems: function () {
    return $("#" +this.componentSelector).jqxTree("getUncheckedItems");  
  },
  getItems: function () {
    return $("#" +this.componentSelector).jqxTree("getItems");  
  },
  getItem: function (element) {
    return $("#" +this.componentSelector).jqxTree("getItem", element);  
  },
  getSelectedItem: function () {
    return $("#" +this.componentSelector).jqxTree("getSelectedItem");  
  },
  getPrevItem: function () {
    return $("#" +this.componentSelector).jqxTree("getPrevItem");  
  },
  getNextItem: function () {
    return $("#" +this.componentSelector).jqxTree("getNextItem");  
  },
  hitTest: function (left, top) {
    return $("#" +this.componentSelector).jqxTree("hitTest", left, top);  
  },
  removeItem: function (item) {
    $("#" +this.componentSelector).jqxTree("removeItem", item);  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxTree("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxTree("refresh");  
  },
  selectItem: function (item) {
    $("#" +this.componentSelector).jqxTree("selectItem", item);  
  },
  uncheckAll: function () {
    $("#" +this.componentSelector).jqxTree("uncheckAll");  
  },
  uncheckItem: function (item) {
    $("#" +this.componentSelector).jqxTree("uncheckItem", item);  
  },
  updateItem: function (item, newItem) {
    $("#" +this.componentSelector).jqxTree("updateItem", item, newItem);  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxTree("val", value)
    } else {
      return $("#" +this.componentSelector).jqxTree("val");
    }
  },

  render: function () {
    let id = 'jqxTree' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxTree;

