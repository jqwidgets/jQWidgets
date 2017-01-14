/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxPopover = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['arrowOffsetValue','animationOpenDelay','animationCloseDelay','autoClose','animationType','height','initContent','isModal','offset','position','rtl','selector','showArrow','showCloseButton','width','title','theme'];
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
    $('#' +this.componentSelector).jqxPopover(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxPopover('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxPopover(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  arrowOffsetValue: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("arrowOffsetValue", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("arrowOffsetValue");
    }
  },
  animationOpenDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("animationOpenDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("animationOpenDelay");
    }
  },
  animationCloseDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("animationCloseDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("animationCloseDelay");
    }
  },
  autoClose: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("autoClose", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("autoClose");
    }
  },
  animationType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("animationType");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("height");
    }
  },
  initContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("initContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("initContent");
    }
  },
  isModal: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("isModal", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("isModal");
    }
  },
  offset: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("offset", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("offset");
    }
  },
  position: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("position", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("position");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("rtl");
    }
  },
  selector: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("selector", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("selector");
    }
  },
  showArrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("showArrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("showArrow");
    }
  },
  showCloseButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("showCloseButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("showCloseButton");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("width");
    }
  },
  title: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("title", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("title");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxPopover("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxPopover("theme");
    }
  },
  close: function () {
    $("#" +this.componentSelector).jqxPopover("close");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxPopover("destroy");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxPopover("open");  
  },
  render: function () {
    let id = 'jqxPopover' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxPopover;

