/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxSwitchButton = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['checked','disabled','height','orientation','onLabel','offLabel','thumbSize','width'];
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
    $('#' +this.componentSelector).jqxSwitchButton(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxSwitchButton('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxSwitchButton(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  checked: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("checked", arg)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("checked");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("height");
    }
  },
  orientation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("orientation", arg)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("orientation");
    }
  },
  onLabel: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("onLabel", arg)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("onLabel");
    }
  },
  offLabel: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("offLabel", arg)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("offLabel");
    }
  },
  thumbSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("thumbSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("thumbSize");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("width");
    }
  },
  check: function () {
    $("#" +this.componentSelector).jqxSwitchButton("check");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxSwitchButton("disable");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxSwitchButton("enable");  
  },
  toggle: function () {
    $("#" +this.componentSelector).jqxSwitchButton("toggle");  
  },
  uncheck: function () {
    $("#" +this.componentSelector).jqxSwitchButton("uncheck");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxSwitchButton("val", value)
    } else {
      return $("#" +this.componentSelector).jqxSwitchButton("val");
    }
  },

  render: function () {
    let id = 'jqxSwitchButton' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxSwitchButton;

