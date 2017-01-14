/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxSplitter = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','height','orientation','panels','resizable','splitBarSize','showSplitBar','theme','width'];
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
    $('#' +this.componentSelector).jqxSplitter(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxSplitter('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxSplitter(arguments[i]);
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
      $("#" +this.componentSelector).jqxSplitter("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSplitter("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("height");
    }
  },
  orientation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSplitter("orientation", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("orientation");
    }
  },
  panels: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSplitter("panels", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("panels");
    }
  },
  resizable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSplitter("resizable", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("resizable");
    }
  },
  splitBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSplitter("splitBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("splitBarSize");
    }
  },
  showSplitBar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSplitter("showSplitBar", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("showSplitBar");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSplitter("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSplitter("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxSplitter("width");
    }
  },
  collapse: function () {
    $("#" +this.componentSelector).jqxSplitter("collapse");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxSplitter("destroy");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxSplitter("disable");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxSplitter("enable");  
  },
  expand: function () {
    $("#" +this.componentSelector).jqxSplitter("expand");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxSplitter("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxSplitter("refresh");  
  },
  render: function () {
    let id = 'jqxSplitter' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxSplitter;

