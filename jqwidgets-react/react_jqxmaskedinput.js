/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxMaskedInput = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','height','mask','promptChar','readOnly','rtl','theme','textAlign','value','width'];
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
    $('#' +this.componentSelector).jqxMaskedInput(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxMaskedInput('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxMaskedInput(arguments[i]);
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
      $("#" +this.componentSelector).jqxMaskedInput("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("height");
    }
  },
  mask: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("mask", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("mask");
    }
  },
  promptChar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("promptChar", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("promptChar");
    }
  },
  readOnly: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("readOnly", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("readOnly");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("rtl");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("theme");
    }
  },
  textAlign: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("textAlign", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("textAlign");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("width");
    }
  },
  clear: function () {
    $("#" +this.componentSelector).jqxMaskedInput("clear");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxMaskedInput("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxMaskedInput("focus");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxMaskedInput("val", value)
    } else {
      return $("#" +this.componentSelector).jqxMaskedInput("val");
    }
  },

  render: function () {
    let id = 'jqxMaskedInput' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxMaskedInput;

