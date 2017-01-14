/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxSlider = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['buttonsPosition','disabled','height','layout','mode','minorTicksFrequency','minorTickSize','max','min','rangeSlider','rtl','step','showTicks','showMinorTicks','showTickLabels','showButtons','showRange','template','theme','ticksPosition','ticksFrequency','tickSize','tickLabelFormatFunction','tooltip','tooltipHideDelay','tooltipPosition','tooltipFormatFunction','value','values','width'];
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
    $('#' +this.componentSelector).jqxSlider(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxSlider('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxSlider(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  buttonsPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("buttonsPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("buttonsPosition");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("height");
    }
  },
  layout: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("layout", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("layout");
    }
  },
  mode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("mode", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("mode");
    }
  },
  minorTicksFrequency: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("minorTicksFrequency", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("minorTicksFrequency");
    }
  },
  minorTickSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("minorTickSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("minorTickSize");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("max");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("min");
    }
  },
  rangeSlider: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("rangeSlider", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("rangeSlider");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("rtl");
    }
  },
  step: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("step", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("step");
    }
  },
  showTicks: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("showTicks", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("showTicks");
    }
  },
  showMinorTicks: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("showMinorTicks", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("showMinorTicks");
    }
  },
  showTickLabels: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("showTickLabels", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("showTickLabels");
    }
  },
  showButtons: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("showButtons", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("showButtons");
    }
  },
  showRange: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("showRange", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("showRange");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("theme");
    }
  },
  ticksPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("ticksPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("ticksPosition");
    }
  },
  ticksFrequency: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("ticksFrequency", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("ticksFrequency");
    }
  },
  tickSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("tickSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("tickSize");
    }
  },
  tickLabelFormatFunction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("tickLabelFormatFunction", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("tickLabelFormatFunction");
    }
  },
  tooltip: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("tooltip", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("tooltip");
    }
  },
  tooltipHideDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("tooltipHideDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("tooltipHideDelay");
    }
  },
  tooltipPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("tooltipPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("tooltipPosition");
    }
  },
  tooltipFormatFunction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("tooltipFormatFunction", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("tooltipFormatFunction");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("value");
    }
  },
  values: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("values", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("values");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSlider("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxSlider("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxSlider("destroy");  
  },
  decrementValue: function () {
    $("#" +this.componentSelector).jqxSlider("decrementValue");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxSlider("disable");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxSlider("enable");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxSlider("focus");  
  },
  getValue: function () {
    return $("#" +this.componentSelector).jqxSlider("getValue");  
  },
  incrementValue: function () {
    $("#" +this.componentSelector).jqxSlider("incrementValue");  
  },
  setValue: function (index) {
    $("#" +this.componentSelector).jqxSlider("setValue", index);  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxSlider("val", value)
    } else {
      return $("#" +this.componentSelector).jqxSlider("val");
    }
  },

  render: function () {
    let id = 'jqxSlider' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxSlider;

