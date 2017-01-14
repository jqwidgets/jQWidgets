/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxRangeSelector = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','height','labelFormat','labelsFormatFunction','labelPrecision','moveOnClick','markerRenderer','markerPrecision','majorLabelRenderer','markerFormat','majorTicksInterval','minorTicksInterval','max','min','padding','range','resizable','rtl','showMinorTicks','snapToTicks','showMajorLabels','showMarkers','theme','width'];
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
    $('#' +this.componentSelector).jqxRangeSelector(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxRangeSelector('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxRangeSelector(arguments[i]);
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
      $("#" +this.componentSelector).jqxRangeSelector("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("height");
    }
  },
  labelFormat: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("labelFormat", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("labelFormat");
    }
  },
  labelsFormatFunction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("labelsFormatFunction", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("labelsFormatFunction");
    }
  },
  labelPrecision: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("labelPrecision", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("labelPrecision");
    }
  },
  moveOnClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("moveOnClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("moveOnClick");
    }
  },
  markerRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("markerRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("markerRenderer");
    }
  },
  markerPrecision: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("markerPrecision", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("markerPrecision");
    }
  },
  majorLabelRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("majorLabelRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("majorLabelRenderer");
    }
  },
  markerFormat: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("markerFormat", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("markerFormat");
    }
  },
  majorTicksInterval: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("majorTicksInterval", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("majorTicksInterval");
    }
  },
  minorTicksInterval: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("minorTicksInterval", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("minorTicksInterval");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("max");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("min");
    }
  },
  padding: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("padding", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("padding");
    }
  },
  range: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("range", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("range");
    }
  },
  resizable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("resizable", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("resizable");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("rtl");
    }
  },
  showMinorTicks: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("showMinorTicks", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("showMinorTicks");
    }
  },
  snapToTicks: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("snapToTicks", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("snapToTicks");
    }
  },
  showMajorLabels: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("showMajorLabels", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("showMajorLabels");
    }
  },
  showMarkers: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("showMarkers", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("showMarkers");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRangeSelector("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxRangeSelector("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxRangeSelector("destroy");  
  },
  getRange: function () {
    return $("#" +this.componentSelector).jqxRangeSelector("getRange");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxRangeSelector("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxRangeSelector("refresh");  
  },
  setRange: function (from, to) {
    $("#" +this.componentSelector).jqxRangeSelector("setRange", from, to);  
  },
  render: function () {
    let id = 'jqxRangeSelector' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxRangeSelector;

