/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxFormattedInput = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','decimalNotation','dropDown','dropDownWidth','height','min','max','placeHolder','popupZIndex','roundedCorners','rtl','radix','spinButtons','spinButtonsStep','template','theme','upperCase','value','width'];
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
    $('#' +this.componentSelector).jqxFormattedInput(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxFormattedInput('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxFormattedInput(arguments[i]);
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
      $("#" +this.componentSelector).jqxFormattedInput("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("disabled");
    }
  },
  decimalNotation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("decimalNotation", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("decimalNotation");
    }
  },
  dropDown: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("dropDown", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("dropDown");
    }
  },
  dropDownWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("dropDownWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("dropDownWidth");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("height");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("min");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("max");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("placeHolder");
    }
  },
  popupZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("popupZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("popupZIndex");
    }
  },
  roundedCorners: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("roundedCorners", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("roundedCorners");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("rtl");
    }
  },
  radix: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("radix", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("radix");
    }
  },
  spinButtons: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("spinButtons", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("spinButtons");
    }
  },
  spinButtonsStep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("spinButtonsStep", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("spinButtonsStep");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("theme");
    }
  },
  upperCase: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("upperCase", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("upperCase");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("width");
    }
  },
  close: function () {
    $("#" +this.componentSelector).jqxFormattedInput("close");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxFormattedInput("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxFormattedInput("focus");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxFormattedInput("open");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxFormattedInput("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxFormattedInput("refresh");  
  },
  selectAll: function () {
    $("#" +this.componentSelector).jqxFormattedInput("selectAll");  
  },
  selectFirst: function () {
    $("#" +this.componentSelector).jqxFormattedInput("selectFirst");  
  },
  selectLast: function () {
    $("#" +this.componentSelector).jqxFormattedInput("selectLast");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxFormattedInput("val", value)
    } else {
      return $("#" +this.componentSelector).jqxFormattedInput("val");
    }
  },

  render: function () {
    let id = 'jqxFormattedInput' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>
          <input type='text'></input>
          <div></div>
          <div></div>
      </div>
    )
  }
});

module.exports = jqxFormattedInput;

