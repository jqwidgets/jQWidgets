/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxTabs = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationType','autoHeight','closeButtonSize','collapsible','contentTransitionDuration','disabled','enabledHover','enableScrollAnimation','height','initTabContent','keyboardNavigation','position','reorder','rtl','scrollAnimationDuration','selectedItem','selectionTracker','scrollable','scrollPosition','scrollStep','showCloseButtons','toggleMode','theme','width'];
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
    $('#' +this.componentSelector).jqxTabs(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxTabs('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxTabs(arguments[i]);
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
      $("#" +this.componentSelector).jqxTabs("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("animationType");
    }
  },
  autoHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("autoHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("autoHeight");
    }
  },
  closeButtonSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("closeButtonSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("closeButtonSize");
    }
  },
  collapsible: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("collapsible", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("collapsible");
    }
  },
  contentTransitionDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("contentTransitionDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("contentTransitionDuration");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("disabled");
    }
  },
  enabledHover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("enabledHover", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("enabledHover");
    }
  },
  enableScrollAnimation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("enableScrollAnimation", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("enableScrollAnimation");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("height");
    }
  },
  initTabContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("initTabContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("initTabContent");
    }
  },
  keyboardNavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("keyboardNavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("keyboardNavigation");
    }
  },
  position: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("position", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("position");
    }
  },
  reorder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("reorder", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("reorder");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("rtl");
    }
  },
  scrollAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("scrollAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("scrollAnimationDuration");
    }
  },
  selectedItem: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("selectedItem", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("selectedItem");
    }
  },
  selectionTracker: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("selectionTracker", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("selectionTracker");
    }
  },
  scrollable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("scrollable", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("scrollable");
    }
  },
  scrollPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("scrollPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("scrollPosition");
    }
  },
  scrollStep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("scrollStep", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("scrollStep");
    }
  },
  showCloseButtons: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("showCloseButtons", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("showCloseButtons");
    }
  },
  toggleMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("toggleMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("toggleMode");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTabs("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxTabs("width");
    }
  },
  addAt: function (index, title, content) {
    $("#" +this.componentSelector).jqxTabs("addAt", index, title, content);  
  },
  addFirst: function (htmlElement) {
    $("#" +this.componentSelector).jqxTabs("addFirst", htmlElement);  
  },
  addLast: function (htmlElement) {
    $("#" +this.componentSelector).jqxTabs("addLast", htmlElement);  
  },
  collapse: function () {
    $("#" +this.componentSelector).jqxTabs("collapse");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxTabs("disable");  
  },
  disableAt: function (index) {
    $("#" +this.componentSelector).jqxTabs("disableAt", index);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxTabs("destroy");  
  },
  ensureVisible: function (index) {
    $("#" +this.componentSelector).jqxTabs("ensureVisible", index);  
  },
  enableAt: function (index) {
    $("#" +this.componentSelector).jqxTabs("enableAt", index);  
  },
  expand: function () {
    $("#" +this.componentSelector).jqxTabs("expand");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxTabs("enable");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxTabs("focus");  
  },
  getTitleAt: function (index) {
    return $("#" +this.componentSelector).jqxTabs("getTitleAt", index);  
  },
  getContentAt: function (index) {
    return $("#" +this.componentSelector).jqxTabs("getContentAt", index);  
  },
  hideCloseButtonAt: function (index) {
    $("#" +this.componentSelector).jqxTabs("hideCloseButtonAt", index);  
  },
  hideAllCloseButtons: function () {
    $("#" +this.componentSelector).jqxTabs("hideAllCloseButtons");  
  },
  length: function () {
    return $("#" +this.componentSelector).jqxTabs("length");  
  },
  removeAt: function (index) {
    $("#" +this.componentSelector).jqxTabs("removeAt", index);  
  },
  removeFirst: function () {
    $("#" +this.componentSelector).jqxTabs("removeFirst");  
  },
  removeLast: function () {
    $("#" +this.componentSelector).jqxTabs("removeLast");  
  },
  select: function (index) {
    $("#" +this.componentSelector).jqxTabs("select", index);  
  },
  setContentAt: function (index, htmlElement) {
    $("#" +this.componentSelector).jqxTabs("setContentAt", index, htmlElement);  
  },
  setTitleAt: function (index, htmlElement) {
    $("#" +this.componentSelector).jqxTabs("setTitleAt", index, htmlElement);  
  },
  showCloseButtonAt: function (index) {
    $("#" +this.componentSelector).jqxTabs("showCloseButtonAt", index);  
  },
  showAllCloseButtons: function () {
    $("#" +this.componentSelector).jqxTabs("showAllCloseButtons");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxTabs("val", value)
    } else {
      return $("#" +this.componentSelector).jqxTabs("val");
    }
  },

  render: function () {
    let id = 'jqxTabs' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxTabs;

