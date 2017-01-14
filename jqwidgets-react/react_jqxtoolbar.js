/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxToolBar = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','height','initTools','minimizeWidth','minWidth','maxWidth','rtl','tools','theme','width'];
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
    $('#' +this.componentSelector).jqxToolBar(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxToolBar('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxToolBar(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("height");
    }
  },
  initTools: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("initTools", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("initTools");
    }
  },
  minimizeWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("minimizeWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("minimizeWidth");
    }
  },
  minWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("minWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("minWidth");
    }
  },
  maxWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("maxWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("maxWidth");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("rtl");
    }
  },
  tools: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("tools", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("tools");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToolBar("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxToolBar("width");
    }
  },
  addTool: function (type, position, separator, menuToolIninitialization) {
    $("#" +this.componentSelector).jqxToolBar("addTool", type, position, separator, menuToolIninitialization);  
  },
  disableTool: function (index, disable) {
    $("#" +this.componentSelector).jqxToolBar("disableTool", index, disable);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxToolBar("destroy");  
  },
  destroyTool: function (index) {
    $("#" +this.componentSelector).jqxToolBar("destroyTool", index);  
  },
  getTools: function () {
    return $("#" +this.componentSelector).jqxToolBar("getTools");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxToolBar("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxToolBar("refresh");  
  },
  render: function () {
    let id = 'jqxToolBar' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxToolBar;

