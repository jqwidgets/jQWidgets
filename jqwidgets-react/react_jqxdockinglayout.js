/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDockingLayout = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['contextMenu','height','layout','minGroupHeight','minGroupWidth','resizable','rtl','theme','width'];
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
    $('#' +this.componentSelector).jqxDockingLayout(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDockingLayout('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDockingLayout(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  contextMenu: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("contextMenu", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("contextMenu");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("height");
    }
  },
  layout: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("layout", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("layout");
    }
  },
  minGroupHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("minGroupHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("minGroupHeight");
    }
  },
  minGroupWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("minGroupWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("minGroupWidth");
    }
  },
  resizable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("resizable", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("resizable");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("rtl");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDockingLayout("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxDockingLayout("width");
    }
  },
  addFloatGroup: function (width, height, position, panelType, title, content, initContent) {
    $("#" +this.componentSelector).jqxDockingLayout("addFloatGroup", width, height, position, panelType, title, content, initContent);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxDockingLayout("destroy");  
  },
  loadLayout: function (layout) {
    $("#" +this.componentSelector).jqxDockingLayout("loadLayout", layout);  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxDockingLayout("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxDockingLayout("render");
  },
  saveLayout: function () {
    return $("#" +this.componentSelector).jqxDockingLayout("saveLayout");  
  },
  render: function () {
    let id = 'jqxDockingLayout' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDockingLayout;

