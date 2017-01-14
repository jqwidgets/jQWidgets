/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxButtonGroup = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','enableHover','mode','rtl','template','theme'];
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
    $('#' +this.componentSelector).jqxButtonGroup(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxButtonGroup('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxButtonGroup(arguments[i]);
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
      $("#" +this.componentSelector).jqxButtonGroup("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxButtonGroup("disabled");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButtonGroup("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxButtonGroup("enableHover");
    }
  },
  mode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButtonGroup("mode", arg)
    } else {
      return $("#" +this.componentSelector).jqxButtonGroup("mode");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButtonGroup("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxButtonGroup("rtl");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButtonGroup("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxButtonGroup("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButtonGroup("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxButtonGroup("theme");
    }
  },
  disableAt: function (index) {
    $("#" +this.componentSelector).jqxButtonGroup("disableAt", index);  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxButtonGroup("disable");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxButtonGroup("destroy");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxButtonGroup("enable");  
  },
  enableAt: function (index) {
    $("#" +this.componentSelector).jqxButtonGroup("enableAt", index);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxButtonGroup("focus");  
  },
  getSelection: function () {
    return $("#" +this.componentSelector).jqxButtonGroup("getSelection");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxButtonGroup("render");
  },
  setSelection: function (index) {
    $("#" +this.componentSelector).jqxButtonGroup("setSelection", index);  
  },
  render: function () {
    let id = 'jqxButtonGroup' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxButtonGroup;

