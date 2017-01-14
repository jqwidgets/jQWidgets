/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxLinearGauge = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationDuration','background','colorScheme','disabled','easing','height','int64','labels','min','max','orientation','pointer','rangesOffset','rangeSize','ranges','showRanges','scaleStyle','scaleLength','ticksOffset','ticksPosition','ticksMinor','ticksMajor','value','width','disable','enable'];
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
    $('#' +this.componentSelector).jqxLinearGauge(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxLinearGauge('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxLinearGauge(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("animationDuration");
    }
  },
  background: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("background", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("background");
    }
  },
  colorScheme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("colorScheme", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("colorScheme");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("disabled");
    }
  },
  easing: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("easing", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("easing");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("height");
    }
  },
  int64: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("int64", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("int64");
    }
  },
  labels: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("labels", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("labels");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("min");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("max");
    }
  },
  orientation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("orientation", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("orientation");
    }
  },
  pointer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("pointer", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("pointer");
    }
  },
  rangesOffset: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("rangesOffset", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("rangesOffset");
    }
  },
  rangeSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("rangeSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("rangeSize");
    }
  },
  ranges: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("ranges", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("ranges");
    }
  },
  showRanges: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("showRanges", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("showRanges");
    }
  },
  scaleStyle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("scaleStyle", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("scaleStyle");
    }
  },
  scaleLength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("scaleLength", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("scaleLength");
    }
  },
  ticksOffset: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("ticksOffset", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("ticksOffset");
    }
  },
  ticksPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("ticksPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("ticksPosition");
    }
  },
  ticksMinor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("ticksMinor", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("ticksMinor");
    }
  },
  ticksMajor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("ticksMajor", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("ticksMajor");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("width");
    }
  },
  disable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("disable", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("disable");
    }
  },
  enable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("enable", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("enable");
    }
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxLinearGauge("val", value)
    } else {
      return $("#" +this.componentSelector).jqxLinearGauge("val");
    }
  },

  render: function () {
    let id = 'jqxLinearGauge' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxLinearGauge;

