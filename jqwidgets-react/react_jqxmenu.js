/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxMenu = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationShowDuration','animationHideDuration','animationHideDelay','animationShowDelay','autoCloseInterval','autoSizeMainItems','autoCloseOnClick','autoOpenPopup','autoOpen','clickToOpen','disabled','enableHover','easing','height','keyboardNavigation','minimizeWidth','mode','popupZIndex','rtl','showTopLevelArrows','source','theme','width'];
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
    $('#' +this.componentSelector).jqxMenu(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxMenu('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxMenu(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationShowDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("animationShowDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("animationShowDuration");
    }
  },
  animationHideDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("animationHideDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("animationHideDuration");
    }
  },
  animationHideDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("animationHideDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("animationHideDelay");
    }
  },
  animationShowDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("animationShowDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("animationShowDelay");
    }
  },
  autoCloseInterval: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("autoCloseInterval", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("autoCloseInterval");
    }
  },
  autoSizeMainItems: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("autoSizeMainItems", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("autoSizeMainItems");
    }
  },
  autoCloseOnClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("autoCloseOnClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("autoCloseOnClick");
    }
  },
  autoOpenPopup: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("autoOpenPopup", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("autoOpenPopup");
    }
  },
  autoOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("autoOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("autoOpen");
    }
  },
  clickToOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("clickToOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("clickToOpen");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("disabled");
    }
  },
  enableHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("enableHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("enableHover");
    }
  },
  easing: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("easing", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("easing");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("height");
    }
  },
  keyboardNavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("keyboardNavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("keyboardNavigation");
    }
  },
  minimizeWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("minimizeWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("minimizeWidth");
    }
  },
  mode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("mode", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("mode");
    }
  },
  popupZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("popupZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("popupZIndex");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("rtl");
    }
  },
  showTopLevelArrows: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("showTopLevelArrows", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("showTopLevelArrows");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("source");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxMenu("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxMenu("width");
    }
  },
  closeItem: function (itemID) {
    $("#" +this.componentSelector).jqxMenu("closeItem", itemID);  
  },
  close: function () {
    $("#" +this.componentSelector).jqxMenu("close");  
  },
  disable: function (itemID, value) {
    $("#" +this.componentSelector).jqxMenu("disable", itemID, value);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxMenu("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxMenu("focus");  
  },
  minimize: function () {
    $("#" +this.componentSelector).jqxMenu("minimize");  
  },
  open: function (left, top) {
    $("#" +this.componentSelector).jqxMenu("open", left, top);  
  },
  openItem: function (itemID) {
    $("#" +this.componentSelector).jqxMenu("openItem", itemID);  
  },
  restore: function () {
    $("#" +this.componentSelector).jqxMenu("restore");  
  },
  setItemOpenDirection: function (item, horizontaldirection, verticaldirection) {
    $("#" +this.componentSelector).jqxMenu("setItemOpenDirection", item, horizontaldirection, verticaldirection);  
  },
  render: function () {
    let id = 'jqxMenu' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxMenu;

