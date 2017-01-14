/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxLoader = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['autoOpen','height','html','isModal','imagePosition','rtl','text','textPosition','theme','width'];
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
    $('#' +this.componentSelector).jqxLoader(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxLoader('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxLoader(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  autoOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("autoOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("autoOpen");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("height");
    }
  },
  html: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("html", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("html");
    }
  },
  isModal: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("isModal", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("isModal");
    }
  },
  imagePosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("imagePosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("imagePosition");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("rtl");
    }
  },
  text: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("text", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("text");
    }
  },
  textPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("textPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("textPosition");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLoader("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxLoader("width");
    }
  },
  close: function () {
    $("#" +this.componentSelector).jqxLoader("close");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxLoader("open");  
  },
  render: function () {
    let id = 'jqxLoader' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxLoader;

