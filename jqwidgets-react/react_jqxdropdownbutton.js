/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDropDownButton = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationType','arrowSize','autoOpen','closeDelay','disabled','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownWidth','enableBrowserBoundsDetection','height','initContent','openDelay','popupZIndex','rtl','template','theme','width'];
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
    $('#' +this.componentSelector).jqxDropDownButton(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDropDownButton('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDropDownButton(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("animationType");
    }
  },
  arrowSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("arrowSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("arrowSize");
    }
  },
  autoOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("autoOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("autoOpen");
    }
  },
  closeDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("closeDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("closeDelay");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("disabled");
    }
  },
  dropDownHorizontalAlignment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("dropDownHorizontalAlignment", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("dropDownHorizontalAlignment");
    }
  },
  dropDownVerticalAlignment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("dropDownVerticalAlignment", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("dropDownVerticalAlignment");
    }
  },
  dropDownWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("dropDownWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("dropDownWidth");
    }
  },
  enableBrowserBoundsDetection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("enableBrowserBoundsDetection", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("enableBrowserBoundsDetection");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("height");
    }
  },
  initContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("initContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("initContent");
    }
  },
  openDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("openDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("openDelay");
    }
  },
  popupZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("popupZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("popupZIndex");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("rtl");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("template");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDropDownButton("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxDropDownButton("width");
    }
  },
  close: function () {
    $("#" +this.componentSelector).jqxDropDownButton("close");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxDropDownButton("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxDropDownButton("focus");  
  },
  getContent: function () {
    return $("#" +this.componentSelector).jqxDropDownButton("getContent");  
  },
  isOpened: function () {
    return $("#" +this.componentSelector).jqxDropDownButton("isOpened");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxDropDownButton("open");  
  },
  setContent: function (content) {
    $("#" +this.componentSelector).jqxDropDownButton("setContent", content);  
  },
  render: function () {
    let id = 'jqxDropDownButton' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDropDownButton;

