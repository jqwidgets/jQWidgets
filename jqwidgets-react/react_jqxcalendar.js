/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxCalendar = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['backText','columnHeaderHeight','clearString','culture','dayNameFormat','disabled','enableWeekend','enableViews','enableOtherMonthDays','enableFastNavigation','enableHover','enableAutoNavigation','enableTooltips','forwardText','firstDayOfWeek','height','min','max','navigationDelay','rowHeaderWidth','readOnly','restrictedDates','rtl','stepMonths','showWeekNumbers','showDayNames','showOtherMonthDays','showFooter','selectionMode','specialDates','theme','titleHeight','titleFormat','todayString','value','width'];
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
    $('#' +this.componentSelector).jqxCalendar(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxCalendar('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxCalendar(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  backText: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("backText", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("backText");
    }
  },
  columnHeaderHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("columnHeaderHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("columnHeaderHeight");
    }
  },
  clearString: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("clearString", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("clearString");
    }
  },
  culture: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("culture", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("culture");
    }
  },
  dayNameFormat: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("dayNameFormat", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("dayNameFormat");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("disabled");
    }
  },
  enableWeekend: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("enableWeekend", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("enableWeekend");
    }
  },
  enableViews: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("enableViews", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("enableViews");
    }
  },
  enableOtherMonthDays: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("enableOtherMonthDays", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("enableOtherMonthDays");
    }
  },
  enableFastNavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("enableFastNavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("enableFastNavigation");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("enableHover");
    }
  },
  enableAutoNavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("enableAutoNavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("enableAutoNavigation");
    }
  },
  enableTooltips: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("enableTooltips", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("enableTooltips");
    }
  },
  forwardText: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("forwardText", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("forwardText");
    }
  },
  firstDayOfWeek: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("firstDayOfWeek", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("firstDayOfWeek");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("height");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("min");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("max");
    }
  },
  navigationDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("navigationDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("navigationDelay");
    }
  },
  rowHeaderWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("rowHeaderWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("rowHeaderWidth");
    }
  },
  readOnly: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("readOnly", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("readOnly");
    }
  },
  restrictedDates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("restrictedDates", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("restrictedDates");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("rtl");
    }
  },
  stepMonths: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("stepMonths", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("stepMonths");
    }
  },
  showWeekNumbers: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("showWeekNumbers", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("showWeekNumbers");
    }
  },
  showDayNames: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("showDayNames", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("showDayNames");
    }
  },
  showOtherMonthDays: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("showOtherMonthDays", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("showOtherMonthDays");
    }
  },
  showFooter: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("showFooter", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("showFooter");
    }
  },
  selectionMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("selectionMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("selectionMode");
    }
  },
  specialDates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("specialDates", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("specialDates");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("theme");
    }
  },
  titleHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("titleHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("titleHeight");
    }
  },
  titleFormat: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("titleFormat", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("titleFormat");
    }
  },
  todayString: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("todayString", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("todayString");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("width");
    }
  },
  clear: function () {
    $("#" +this.componentSelector).jqxCalendar("clear");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxCalendar("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxCalendar("focus");  
  },
  addSpecialDate: function (date, tooltip, text) {
    $("#" +this.componentSelector).jqxCalendar("addSpecialDate", date, tooltip, text);  
  },
  getMinDate: function () {
    return $("#" +this.componentSelector).jqxCalendar("getMinDate");  
  },
  getMaxDate: function () {
    return $("#" +this.componentSelector).jqxCalendar("getMaxDate");  
  },
  getDate: function () {
    return $("#" +this.componentSelector).jqxCalendar("getDate");  
  },
  getRange: function () {
    return $("#" +this.componentSelector).jqxCalendar("getRange");  
  },
  navigateForward: function (months) {
    $("#" +this.componentSelector).jqxCalendar("navigateForward", months);  
  },
  navigateBackward: function (months) {
    $("#" +this.componentSelector).jqxCalendar("navigateBackward", months);  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxCalendar("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxCalendar("refresh");  
  },
  setMinDate: function (date) {
    $("#" +this.componentSelector).jqxCalendar("setMinDate", date);  
  },
  setMaxDate: function (date) {
    $("#" +this.componentSelector).jqxCalendar("setMaxDate", date);  
  },
  setDate: function (date) {
    $("#" +this.componentSelector).jqxCalendar("setDate", date);  
  },
  setRange: function (date, date2) {
    $("#" +this.componentSelector).jqxCalendar("setRange", date, date2);  
  },
  today: function () {
    $("#" +this.componentSelector).jqxCalendar("today");  
  },
  val: function (date, date2) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxCalendar("val", value)
    } else {
      return $("#" +this.componentSelector).jqxCalendar("val");
    }
  },

  render: function () {
    let id = 'jqxCalendar' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxCalendar;

