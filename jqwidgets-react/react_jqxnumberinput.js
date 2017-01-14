/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxNumberInput = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['allowNull','decimal','disabled','decimalDigits','decimalSeparator','digits','groupSeparator','groupSize','height','inputMode','min','max','negativeSymbol','placeHolder','promptChar','rtl','readOnly','spinMode','spinButtons','spinButtonsWidth','spinButtonsStep','symbol','symbolPosition','textAlign','template','theme','width'];
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
    $('#' +this.componentSelector).jqxNumberInput(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxNumberInput('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxNumberInput(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  allowNull: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("allowNull", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("allowNull");
    }
  },
  decimal: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("decimal", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("decimal");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("disabled");
    }
  },
  decimalDigits: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("decimalDigits", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("decimalDigits");
    }
  },
  decimalSeparator: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("decimalSeparator", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("decimalSeparator");
    }
  },
  digits: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("digits", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("digits");
    }
  },
  groupSeparator: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("groupSeparator", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("groupSeparator");
    }
  },
  groupSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("groupSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("groupSize");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("height");
    }
  },
  inputMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("inputMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("inputMode");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("min");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("max");
    }
  },
  negativeSymbol: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("negativeSymbol", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("negativeSymbol");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("placeHolder");
    }
  },
  promptChar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("promptChar", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("promptChar");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("rtl");
    }
  },
  readOnly: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("readOnly", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("readOnly");
    }
  },
  spinMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("spinMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("spinMode");
    }
  },
  spinButtons: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("spinButtons", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("spinButtons");
    }
  },
  spinButtonsWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("spinButtonsWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("spinButtonsWidth");
    }
  },
  spinButtonsStep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("spinButtonsStep", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("spinButtonsStep");
    }
  },
  symbol: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("symbol", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("symbol");
    }
  },
  symbolPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("symbolPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("symbolPosition");
    }
  },
  textAlign: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("textAlign", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("textAlign");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("width");
    }
  },
  clear: function () {
    $("#" +this.componentSelector).jqxNumberInput("clear");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxNumberInput("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxNumberInput("focus");  
  },
  getDecimal: function () {
    return $("#" +this.componentSelector).jqxNumberInput("getDecimal");  
  },
  setDecimal: function (index) {
    $("#" +this.componentSelector).jqxNumberInput("setDecimal", index);  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxNumberInput("val", value)
    } else {
      return $("#" +this.componentSelector).jqxNumberInput("val");
    }
  },

  render: function () {
    let id = 'jqxNumberInput' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxNumberInput;

