/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDocking = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['cookies','cookieOptions','disabled','floatingWindowOpacity','height','keyboardNavigation','mode','orientation','rtl','theme','width','windowsMode','windowsOffset'];
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
    $('#' +this.componentSelector).jqxDocking(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDocking('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDocking(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  cookies: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("cookies", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("cookies");
    }
  },
  cookieOptions: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("cookieOptions", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("cookieOptions");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("disabled");
    }
  },
  floatingWindowOpacity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("floatingWindowOpacity", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("floatingWindowOpacity");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("height");
    }
  },
  keyboardNavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("keyboardNavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("keyboardNavigation");
    }
  },
  mode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("mode", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("mode");
    }
  },
  orientation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("orientation", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("orientation");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("rtl");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("width");
    }
  },
  windowsMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("windowsMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("windowsMode");
    }
  },
  windowsOffset: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDocking("windowsOffset", arg)
    } else {
      return $("#" +this.componentSelector).jqxDocking("windowsOffset");
    }
  },
  addWindow: function (windowId, mode, panel, position) {
    $("#" +this.componentSelector).jqxDocking("addWindow", windowId, mode, panel, position);  
  },
  closeWindow: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("closeWindow", windowId);  
  },
  collapseWindow: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("collapseWindow", windowId);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxDocking("destroy");  
  },
  disableWindowResize: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("disableWindowResize", windowId);  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxDocking("disable");  
  },
  exportLayout: function () {
    return $("#" +this.componentSelector).jqxDocking("exportLayout");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxDocking("enable");  
  },
  expandWindow: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("expandWindow", windowId);  
  },
  enableWindowResize: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("enableWindowResize", windowId);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxDocking("focus");  
  },
  hideAllCloseButtons: function () {
    $("#" +this.componentSelector).jqxDocking("hideAllCloseButtons");  
  },
  hideAllCollapseButtons: function () {
    $("#" +this.componentSelector).jqxDocking("hideAllCollapseButtons");  
  },
  hideCollapseButton: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("hideCollapseButton", windowId);  
  },
  hideCloseButton: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("hideCloseButton", windowId);  
  },
  importLayout: function (Json) {
    $("#" +this.componentSelector).jqxDocking("importLayout", Json);  
  },
  move: function (windowId, panel, position) {
    $("#" +this.componentSelector).jqxDocking("move", windowId, panel, position);  
  },
  pinWindow: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("pinWindow", windowId);  
  },
  setWindowMode: function (windowId, mode) {
    $("#" +this.componentSelector).jqxDocking("setWindowMode", windowId, mode);  
  },
  showCloseButton: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("showCloseButton", windowId);  
  },
  showCollapseButton: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("showCollapseButton", windowId);  
  },
  setWindowPosition: function (windowId, top, left) {
    $("#" +this.componentSelector).jqxDocking("setWindowPosition", windowId, top, left);  
  },
  showAllCloseButtons: function () {
    $("#" +this.componentSelector).jqxDocking("showAllCloseButtons");  
  },
  showAllCollapseButtons: function () {
    $("#" +this.componentSelector).jqxDocking("showAllCollapseButtons");  
  },
  unpinWindow: function (windowId) {
    $("#" +this.componentSelector).jqxDocking("unpinWindow", windowId);  
  },
  render: function () {
    let id = 'jqxDocking' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDocking;

