/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDateTimeInput = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationType','allowNullDate','allowKeyboardDelete','clearString','culture','closeDelay','closeCalendarAfterSelection','dropDownHorizontalAlignment','dropDownVerticalAlignment','disabled','enableBrowserBoundsDetection','enableAbsoluteSelection','firstDayOfWeek','formatString','height','min','max','openDelay','placeHolder','popupZIndex','rtl','readonly','showFooter','selectionMode','showWeekNumbers','showTimeButton','showCalendarButton','theme','template','textAlign','todayString','value','width'];
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
    $('#' +this.componentSelector).jqxDateTimeInput(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDateTimeInput('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDateTimeInput(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("animationType");
    }
  },
  allowNullDate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("allowNullDate", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("allowNullDate");
    }
  },
  allowKeyboardDelete: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("allowKeyboardDelete", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("allowKeyboardDelete");
    }
  },
  clearString: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("clearString", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("clearString");
    }
  },
  culture: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("culture", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("culture");
    }
  },
  closeDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("closeDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("closeDelay");
    }
  },
  closeCalendarAfterSelection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("closeCalendarAfterSelection", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("closeCalendarAfterSelection");
    }
  },
  dropDownHorizontalAlignment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("dropDownHorizontalAlignment", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("dropDownHorizontalAlignment");
    }
  },
  dropDownVerticalAlignment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("dropDownVerticalAlignment", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("dropDownVerticalAlignment");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("disabled");
    }
  },
  enableBrowserBoundsDetection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("enableBrowserBoundsDetection", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("enableBrowserBoundsDetection");
    }
  },
  enableAbsoluteSelection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("enableAbsoluteSelection", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("enableAbsoluteSelection");
    }
  },
  firstDayOfWeek: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("firstDayOfWeek", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("firstDayOfWeek");
    }
  },
  formatString: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("formatString", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("formatString");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("height");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("min");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("max");
    }
  },
  openDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("openDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("openDelay");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("placeHolder");
    }
  },
  popupZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("popupZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("popupZIndex");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("rtl");
    }
  },
  readonly: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("readonly", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("readonly");
    }
  },
  showFooter: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("showFooter", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("showFooter");
    }
  },
  selectionMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("selectionMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("selectionMode");
    }
  },
  showWeekNumbers: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("showWeekNumbers", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("showWeekNumbers");
    }
  },
  showTimeButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("showTimeButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("showTimeButton");
    }
  },
  showCalendarButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("showCalendarButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("showCalendarButton");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("theme");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("template");
    }
  },
  textAlign: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("textAlign", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("textAlign");
    }
  },
  todayString: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("todayString", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("todayString");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("width");
    }
  },
  close: function () {
    $("#" +this.componentSelector).jqxDateTimeInput("close");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxDateTimeInput("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxDateTimeInput("focus");  
  },
  getRange: function (date) {
    return $("#" +this.componentSelector).jqxDateTimeInput("getRange", date);  
  },
  getText: function () {
    return $("#" +this.componentSelector).jqxDateTimeInput("getText");  
  },
  getDate: function () {
    return $("#" +this.componentSelector).jqxDateTimeInput("getDate");  
  },
  getMaxDate: function () {
    return $("#" +this.componentSelector).jqxDateTimeInput("getMaxDate");  
  },
  getMinDate: function () {
    return $("#" +this.componentSelector).jqxDateTimeInput("getMinDate");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxDateTimeInput("open");  
  },
  setRange: function (date, date2) {
    $("#" +this.componentSelector).jqxDateTimeInput("setRange", date, date2);  
  },
  setMinDate: function (date) {
    $("#" +this.componentSelector).jqxDateTimeInput("setMinDate", date);  
  },
  setMaxDate: function (date) {
    $("#" +this.componentSelector).jqxDateTimeInput("setMaxDate", date);  
  },
  setDate: function (date) {
    $("#" +this.componentSelector).jqxDateTimeInput("setDate", date);  
  },
  val: function (date, date2) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxDateTimeInput("val", value)
    } else {
      return $("#" +this.componentSelector).jqxDateTimeInput("val");
    }
  },

  render: function () {
    let id = 'jqxDateTimeInput' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDateTimeInput;

