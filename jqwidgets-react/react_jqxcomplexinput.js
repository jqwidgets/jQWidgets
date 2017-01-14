/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxComplexInput = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['decimalNotation','disabled','height','placeHolder','roundedCorners','rtl','spinButtons','spinButtonsStep','template','theme','value','width'];
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
    $('#' +this.componentSelector).jqxComplexInput(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxComplexInput('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxComplexInput(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  decimalNotation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("decimalNotation", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("decimalNotation");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("height");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("placeHolder");
    }
  },
  roundedCorners: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("roundedCorners", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("roundedCorners");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("rtl");
    }
  },
  spinButtons: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("spinButtons", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("spinButtons");
    }
  },
  spinButtonsStep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("spinButtonsStep", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("spinButtonsStep");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("theme");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxComplexInput("destroy");  
  },
  getReal: function (complexNumber) {
    return $("#" +this.componentSelector).jqxComplexInput("getReal", complexNumber);  
  },
  getImaginary: function (complexNumber) {
    return $("#" +this.componentSelector).jqxComplexInput("getImaginary", complexNumber);  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxComplexInput("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxComplexInput("refresh");  
  },
  val: function () {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxComplexInput("val", value)
    } else {
      return $("#" +this.componentSelector).jqxComplexInput("val");
    }
  },

  render: function () {
    let id = 'jqxComplexInput' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>
          <input type='text'></input>
          <div></div>
      </div>
    )
  }
});

module.exports = jqxComplexInput;

