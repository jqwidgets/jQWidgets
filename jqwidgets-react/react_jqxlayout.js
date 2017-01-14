/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxLayout = React.createClass ({
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
    $('#' +this.componentSelector).jqxLayout(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxLayout('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxLayout(arguments[i]);
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
      $("#" +this.componentSelector).jqxLayout("contextMenu", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("contextMenu");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLayout("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("height");
    }
  },
  layout: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLayout("layout", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("layout");
    }
  },
  minGroupHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLayout("minGroupHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("minGroupHeight");
    }
  },
  minGroupWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLayout("minGroupWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("minGroupWidth");
    }
  },
  resizable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLayout("resizable", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("resizable");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLayout("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("rtl");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLayout("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLayout("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxLayout("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxLayout("destroy");  
  },
  loadLayout: function (Layout) {
    $("#" +this.componentSelector).jqxLayout("loadLayout", Layout);  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxLayout("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxLayout("render");
  },
  saveLayout: function () {
    return $("#" +this.componentSelector).jqxLayout("saveLayout");  
  },
  render: function () {
    let id = 'jqxLayout' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxLayout;

