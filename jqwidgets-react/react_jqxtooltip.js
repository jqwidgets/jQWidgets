/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxTooltip = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['absolutePositionX','absolutePositionY','autoHide','autoHideDelay','animationShowDelay','animationHideDelay','content','closeOnClick','disabled','enableBrowserBoundsDetection','height','left','name','opacity','position','rtl','showDelay','showArrow','top','trigger','theme','width'];
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
    $('#' +this.componentSelector).jqxTooltip(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxTooltip('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxTooltip(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  absolutePositionX: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("absolutePositionX", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("absolutePositionX");
    }
  },
  absolutePositionY: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("absolutePositionY", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("absolutePositionY");
    }
  },
  autoHide: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("autoHide", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("autoHide");
    }
  },
  autoHideDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("autoHideDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("autoHideDelay");
    }
  },
  animationShowDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("animationShowDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("animationShowDelay");
    }
  },
  animationHideDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("animationHideDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("animationHideDelay");
    }
  },
  content: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("content", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("content");
    }
  },
  closeOnClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("closeOnClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("closeOnClick");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("disabled");
    }
  },
  enableBrowserBoundsDetection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("enableBrowserBoundsDetection", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("enableBrowserBoundsDetection");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("height");
    }
  },
  left: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("left", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("left");
    }
  },
  name: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("name", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("name");
    }
  },
  opacity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("opacity", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("opacity");
    }
  },
  position: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("position", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("position");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("rtl");
    }
  },
  showDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("showDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("showDelay");
    }
  },
  showArrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("showArrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("showArrow");
    }
  },
  top: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("top", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("top");
    }
  },
  trigger: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("trigger", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("trigger");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTooltip("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxTooltip("width");
    }
  },
  close: function (index) {
    $("#" +this.componentSelector).jqxTooltip("close", index);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxTooltip("destroy");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxTooltip("open");  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxTooltip("refresh");  
  },
  render: function () {
    let id = 'jqxTooltip' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxTooltip;

