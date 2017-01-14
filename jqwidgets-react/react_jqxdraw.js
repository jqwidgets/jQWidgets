/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDraw = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['renderEngine'];
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
    $('#' +this.componentSelector).jqxDraw(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDraw('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDraw(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  renderEngine: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDraw("renderEngine", arg)
    } else {
      return $("#" +this.componentSelector).jqxDraw("renderEngine");
    }
  },
  attr: function (element, attributes) {
    $("#" +this.componentSelector).jqxDraw("attr", element, attributes);  
  },
  circle: function (cx, cy, r, attributes) {
    return $("#" +this.componentSelector).jqxDraw("circle", cx, cy, r, attributes);  
  },
  clear: function () {
    $("#" +this.componentSelector).jqxDraw("clear");  
  },
  getAttr: function (element, attributes) {
    return $("#" +this.componentSelector).jqxDraw("getAttr", element, attributes);  
  },
  getSize: function () {
    return $("#" +this.componentSelector).jqxDraw("getSize");  
  },
  line: function (x1, y1, x2, y2, attributes) {
    return $("#" +this.componentSelector).jqxDraw("line", x1, y1, x2, y2, attributes);  
  },
  measureText: function (text, angle, attributes) {
    return $("#" +this.componentSelector).jqxDraw("measureText", text, angle, attributes);  
  },
  on: function (element, event, func) {
    $("#" +this.componentSelector).jqxDraw("on", element, event, func);  
  },
  off: function (element, event, func) {
    $("#" +this.componentSelector).jqxDraw("off", element, event, func);  
  },
  path: function (path, attributes) {
    return $("#" +this.componentSelector).jqxDraw("path", path, attributes);  
  },
  pieslice: function (cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
    return $("#" +this.componentSelector).jqxDraw("pieslice", cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxDraw("refresh");  
  },
  rect: function (x, y, width, height, attributes) {
    return $("#" +this.componentSelector).jqxDraw("rect", x, y, width, height, attributes);  
  },
  saveAsJPEG: function (image, url) {
    $("#" +this.componentSelector).jqxDraw("saveAsJPEG", image, url);  
  },
  saveAsPNG: function (image, url) {
    $("#" +this.componentSelector).jqxDraw("saveAsPNG", image, url);  
  },
  text: function (x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
    return $("#" +this.componentSelector).jqxDraw("text", x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);  
  },
  render: function () {
    let id = 'jqxDraw' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDraw;

