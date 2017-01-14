/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxResponsivePanel = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationDirection','animationHideDelay','animationShowDelay','animationType','autoClose','collapseBreakpoint','collapseWidth','height','initContent','theme','toggleButton','toggleButtonSize','width'];
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
    $('#' +this.componentSelector).jqxResponsivePanel(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxResponsivePanel('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxResponsivePanel(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationDirection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("animationDirection", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("animationDirection");
    }
  },
  animationHideDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("animationHideDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("animationHideDelay");
    }
  },
  animationShowDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("animationShowDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("animationShowDelay");
    }
  },
  animationType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("animationType");
    }
  },
  autoClose: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("autoClose", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("autoClose");
    }
  },
  collapseBreakpoint: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("collapseBreakpoint", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("collapseBreakpoint");
    }
  },
  collapseWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("collapseWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("collapseWidth");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("height");
    }
  },
  initContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("initContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("initContent");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("theme");
    }
  },
  toggleButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("toggleButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("toggleButton");
    }
  },
  toggleButtonSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("toggleButtonSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("toggleButtonSize");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxResponsivePanel("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxResponsivePanel("width");
    }
  },
  close: function () {
    $("#" +this.componentSelector).jqxResponsivePanel("close");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxResponsivePanel("destroy");  
  },
  isCollapsed: function () {
    return $("#" +this.componentSelector).jqxResponsivePanel("isCollapsed");  
  },
  isOpened: function () {
    return $("#" +this.componentSelector).jqxResponsivePanel("isOpened");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxResponsivePanel("open");  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxResponsivePanel("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxResponsivePanel("render");
  },
  render: function () {
    let id = 'jqxResponsivePanel' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxResponsivePanel;

