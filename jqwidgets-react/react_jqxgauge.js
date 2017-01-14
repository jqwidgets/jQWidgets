/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxGauge = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationDuration','border','caption','cap','colorScheme','disabled','easing','endAngle','height','int64','labels','min','max','pointer','radius','ranges','startAngle','showRanges','style','ticksMajor','ticksMinor','ticksDistance','value','width'];
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
    $('#' +this.componentSelector).jqxGauge(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxGauge('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxGauge(arguments[i]);
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
      $("#" +this.componentSelector).jqxGauge("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("animationDuration");
    }
  },
  border: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("border", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("border");
    }
  },
  caption: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("caption", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("caption");
    }
  },
  cap: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("cap", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("cap");
    }
  },
  colorScheme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("colorScheme", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("colorScheme");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("disabled");
    }
  },
  easing: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("easing", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("easing");
    }
  },
  endAngle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("endAngle", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("endAngle");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("height");
    }
  },
  int64: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("int64", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("int64");
    }
  },
  labels: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("labels", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("labels");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("min");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("max");
    }
  },
  pointer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("pointer", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("pointer");
    }
  },
  radius: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("radius", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("radius");
    }
  },
  ranges: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("ranges", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("ranges");
    }
  },
  startAngle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("startAngle", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("startAngle");
    }
  },
  showRanges: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("showRanges", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("showRanges");
    }
  },
  style: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("style", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("style");
    }
  },
  ticksMajor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("ticksMajor", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("ticksMajor");
    }
  },
  ticksMinor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("ticksMinor", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("ticksMinor");
    }
  },
  ticksDistance: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("ticksDistance", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("ticksDistance");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGauge("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxGauge("width");
    }
  },
  disable: function () {
    $("#" +this.componentSelector).jqxGauge("disable");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxGauge("enable");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxGauge("val", value)
    } else {
      return $("#" +this.componentSelector).jqxGauge("val");
    }
  },

  render: function () {
    let id = 'jqxGauge' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxGauge;

