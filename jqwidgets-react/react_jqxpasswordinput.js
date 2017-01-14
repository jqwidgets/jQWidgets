/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxPasswordInput = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','height','localization','maxLength','placeHolder','passwordStrength','rtl','strengthColors','showStrength','showStrengthPosition','strengthTypeRenderer','showPasswordIcon','theme','width'];
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
    $('#' +this.componentSelector).jqxPasswordInput(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxPasswordInput('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxPasswordInput(arguments[i]);
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
      $("#" +this.componentSelector).jqxPasswordInput("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("height");
    }
  },
  localization: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("localization", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("localization");
    }
  },
  maxLength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("maxLength", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("maxLength");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("placeHolder");
    }
  },
  passwordStrength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("passwordStrength", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("passwordStrength");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("rtl");
    }
  },
  strengthColors: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("strengthColors", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("strengthColors");
    }
  },
  showStrength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("showStrength", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("showStrength");
    }
  },
  showStrengthPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("showStrengthPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("showStrengthPosition");
    }
  },
  strengthTypeRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("strengthTypeRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("strengthTypeRenderer");
    }
  },
  showPasswordIcon: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("showPasswordIcon", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("showPasswordIcon");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("width");
    }
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxPasswordInput("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxPasswordInput("refresh");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxPasswordInput("val", value)
    } else {
      return $("#" +this.componentSelector).jqxPasswordInput("val");
    }
  },

  render: function () {
    let id = 'jqxPasswordInput' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <input type='password' id={id}></input>
    )
  }
});

module.exports = jqxPasswordInput;

