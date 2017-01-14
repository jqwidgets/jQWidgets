/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxPanel = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['autoUpdate','disabled','height','rtl','sizeMode','scrollBarSize','theme','width'];
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
    $('#' +this.componentSelector).jqxPanel(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxPanel('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxPanel(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  autoUpdate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPanel("autoUpdate", arg)
    } else {
      return $("#" +this.componentSelector).jqxPanel("autoUpdate");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPanel("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxPanel("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPanel("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxPanel("height");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPanel("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxPanel("rtl");
    }
  },
  sizeMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPanel("sizeMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxPanel("sizeMode");
    }
  },
  scrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPanel("scrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxPanel("scrollBarSize");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPanel("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxPanel("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPanel("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxPanel("width");
    }
  },
  append: function (HTMLElement) {
    $("#" +this.componentSelector).jqxPanel("append", HTMLElement);  
  },
  clearcontent: function () {
    $("#" +this.componentSelector).jqxPanel("clearcontent");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxPanel("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxPanel("focus");  
  },
  getScrollHeight: function () {
    return $("#" +this.componentSelector).jqxPanel("getScrollHeight");  
  },
  getVScrollPosition: function () {
    return $("#" +this.componentSelector).jqxPanel("getVScrollPosition");  
  },
  getScrollWidth: function () {
    return $("#" +this.componentSelector).jqxPanel("getScrollWidth");  
  },
  getHScrollPosition: function () {
    return $("#" +this.componentSelector).jqxPanel("getHScrollPosition");  
  },
  prepend: function (HTMLElement) {
    $("#" +this.componentSelector).jqxPanel("prepend", HTMLElement);  
  },
  remove: function (HTMLElement) {
    $("#" +this.componentSelector).jqxPanel("remove", HTMLElement);  
  },
  scrollTo: function (top, left) {
    $("#" +this.componentSelector).jqxPanel("scrollTo", top, left);  
  },
  render: function () {
    let id = 'jqxPanel' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxPanel;

