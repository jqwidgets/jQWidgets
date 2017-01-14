/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxResponse = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['browser','device','document','destroyProperty','resize','os'];
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
    $('#' +this.componentSelector).jqxResponse(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxResponse('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxResponse(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  browser: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponse("browser", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponse("browser");
    }
  },
  device: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponse("device", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponse("device");
    }
  },
  document: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponse("document", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponse("document");
    }
  },
  destroyProperty: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponse("destroyProperty", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponse("destroyProperty");
    }
  },
  resize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponse("resize", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponse("resize");
    }
  },
  os: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponse("os", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponse("os");
    }
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxResponse("refresh");  
  },
  responsive: function (container, colWidths, colOffsets, colClass, deviceTypes, margin, padding, breakpoints) {
    $("#" +this.componentSelector).jqxResponse("responsive", container, colWidths, colOffsets, colClass, deviceTypes, margin, padding, breakpoints);  
  },
  isHidden: function (element) {
    return $("#" +this.componentSelector).jqxResponse("isHidden", element);  
  },
  inViewPort: function (element) {
    return $("#" +this.componentSelector).jqxResponse("inViewPort", element);  
  },
  pointerDown: function (element, callback) {
    $("#" +this.componentSelector).jqxResponse("pointerDown", element, callback);  
  },
  pointerMove: function (element, callback) {
    $("#" +this.componentSelector).jqxResponse("pointerMove", element, callback);  
  },
  pointerUp: function (element, callback) {
    $("#" +this.componentSelector).jqxResponse("pointerUp", element, callback);  
  },
  scroll: function () {
    return $("#" +this.componentSelector).jqxResponse("scroll");  
  },
  viewPort: function () {
    return $("#" +this.componentSelector).jqxResponse("viewPort");  
  },
  render: function () {
    let id = 'jqxResponse' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxResponse;

