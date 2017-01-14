/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxBulletChart = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationDuration','barSize','description','disabled','height','labelsFormat','labelsFormatFunction','orientation','pointer','rtl','ranges','showTooltip','target','ticks','title','tooltipFormatFunction','width'];
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
    $('#' +this.componentSelector).jqxBulletChart(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxBulletChart('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxBulletChart(arguments[i]);
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
      $("#" +this.componentSelector).jqxBulletChart("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("animationDuration");
    }
  },
  barSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("barSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("barSize");
    }
  },
  description: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("description", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("description");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("height");
    }
  },
  labelsFormat: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("labelsFormat", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("labelsFormat");
    }
  },
  labelsFormatFunction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("labelsFormatFunction", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("labelsFormatFunction");
    }
  },
  orientation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("orientation", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("orientation");
    }
  },
  pointer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("pointer", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("pointer");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("rtl");
    }
  },
  ranges: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("ranges", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("ranges");
    }
  },
  showTooltip: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("showTooltip", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("showTooltip");
    }
  },
  target: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("target", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("target");
    }
  },
  ticks: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("ticks", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("ticks");
    }
  },
  title: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("title", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("title");
    }
  },
  tooltipFormatFunction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("tooltipFormatFunction", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("tooltipFormatFunction");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxBulletChart("destroy");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxBulletChart("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxBulletChart("refresh");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxBulletChart("val", value)
    } else {
      return $("#" +this.componentSelector).jqxBulletChart("val");
    }
  },

  render: function () {
    let id = 'jqxBulletChart' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxBulletChart;

