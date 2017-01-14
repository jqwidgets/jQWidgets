/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxColorPicker = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['color','colorMode','disabled','height','showTransparent','width'];
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
    $('#' +this.componentSelector).jqxColorPicker(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxColorPicker('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxColorPicker(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  color: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxColorPicker("color", arg)
    } else {
      return $("#" +this.componentSelector).jqxColorPicker("color");
    }
  },
  colorMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxColorPicker("colorMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxColorPicker("colorMode");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxColorPicker("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxColorPicker("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxColorPicker("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxColorPicker("height");
    }
  },
  showTransparent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxColorPicker("showTransparent", arg)
    } else {
      return $("#" +this.componentSelector).jqxColorPicker("showTransparent");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxColorPicker("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxColorPicker("width");
    }
  },
  getColor: function () {
    return $("#" +this.componentSelector).jqxColorPicker("getColor");  
  },
  setColor: function (color) {
    $("#" +this.componentSelector).jqxColorPicker("setColor", color);  
  },
  render: function () {
    let id = 'jqxColorPicker' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxColorPicker;

