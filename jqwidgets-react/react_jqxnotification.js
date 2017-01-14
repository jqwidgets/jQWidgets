/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxNotification = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['appendContainer','autoOpen','animationOpenDelay','animationCloseDelay','autoClose','autoCloseDelay','blink','browserBoundsOffset','closeOnClick','disabled','height','hoverOpacity','icon','notificationOffset','opacity','position','rtl','showCloseButton','template','theme','width'];
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
    $('#' +this.componentSelector).jqxNotification(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxNotification('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxNotification(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  appendContainer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("appendContainer", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("appendContainer");
    }
  },
  autoOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("autoOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("autoOpen");
    }
  },
  animationOpenDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("animationOpenDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("animationOpenDelay");
    }
  },
  animationCloseDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("animationCloseDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("animationCloseDelay");
    }
  },
  autoClose: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("autoClose", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("autoClose");
    }
  },
  autoCloseDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("autoCloseDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("autoCloseDelay");
    }
  },
  blink: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("blink", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("blink");
    }
  },
  browserBoundsOffset: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("browserBoundsOffset", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("browserBoundsOffset");
    }
  },
  closeOnClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("closeOnClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("closeOnClick");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("height");
    }
  },
  hoverOpacity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("hoverOpacity", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("hoverOpacity");
    }
  },
  icon: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("icon", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("icon");
    }
  },
  notificationOffset: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("notificationOffset", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("notificationOffset");
    }
  },
  opacity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("opacity", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("opacity");
    }
  },
  position: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("position", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("position");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("rtl");
    }
  },
  showCloseButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("showCloseButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("showCloseButton");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNotification("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxNotification("width");
    }
  },
  closeAll: function () {
    $("#" +this.componentSelector).jqxNotification("closeAll");  
  },
  closeLast: function () {
    $("#" +this.componentSelector).jqxNotification("closeLast");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxNotification("destroy");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxNotification("open");  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxNotification("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxNotification("render");
  },
  render: function () {
    let id = 'jqxNotification' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxNotification;

