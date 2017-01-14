/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxProgressBar = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationDuration','colorRanges','disabled','height','layout','max','min','orientation','rtl','renderText','showText','template','theme','value','width'];
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
    $('#' +this.componentSelector).jqxProgressBar(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxProgressBar('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxProgressBar(arguments[i]);
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
      $("#" +this.componentSelector).jqxProgressBar("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("animationDuration");
    }
  },
  colorRanges: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("colorRanges", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("colorRanges");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("height");
    }
  },
  layout: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("layout", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("layout");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("max");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("min");
    }
  },
  orientation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("orientation", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("orientation");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("rtl");
    }
  },
  renderText: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("renderText", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("renderText");
    }
  },
  showText: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("showText", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("showText");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("theme");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("width");
    }
  },
  actualValue: function (value) {
    $("#" +this.componentSelector).jqxProgressBar("actualValue", value);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxProgressBar("destroy");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxProgressBar("val", value)
    } else {
      return $("#" +this.componentSelector).jqxProgressBar("val");
    }
  },

  render: function () {
    let id = 'jqxProgressBar' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxProgressBar;

