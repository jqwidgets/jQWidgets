/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxBarGauge = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationDuration','backgroundColor','barSpacing','baseValue','colorScheme','customColorScheme','disabled','endAngle','formatFunction','height','labels','max','min','relativeInnerRadius','rendered','startAngle','title','tooltip','useGradient','values','width'];
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
    $('#' +this.componentSelector).jqxBarGauge(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxBarGauge('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxBarGauge(arguments[i]);
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
      $("#" +this.componentSelector).jqxBarGauge("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("animationDuration");
    }
  },
  backgroundColor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("backgroundColor", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("backgroundColor");
    }
  },
  barSpacing: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("barSpacing", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("barSpacing");
    }
  },
  baseValue: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("baseValue", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("baseValue");
    }
  },
  colorScheme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("colorScheme", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("colorScheme");
    }
  },
  customColorScheme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("customColorScheme", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("customColorScheme");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("disabled");
    }
  },
  endAngle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("endAngle", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("endAngle");
    }
  },
  formatFunction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("formatFunction", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("formatFunction");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("height");
    }
  },
  labels: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("labels", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("labels");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("max");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("min");
    }
  },
  relativeInnerRadius: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("relativeInnerRadius", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("relativeInnerRadius");
    }
  },
  rendered: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("rendered", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("rendered");
    }
  },
  startAngle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("startAngle", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("startAngle");
    }
  },
  title: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("title", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("title");
    }
  },
  tooltip: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("tooltip", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("tooltip");
    }
  },
  useGradient: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("useGradient", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("useGradient");
    }
  },
  values: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("values", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("values");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("width");
    }
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxBarGauge("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxBarGauge("render");
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxBarGauge("val", value)
    } else {
      return $("#" +this.componentSelector).jqxBarGauge("val");
    }
  },

  render: function () {
    let id = 'jqxBarGauge' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxBarGauge;

