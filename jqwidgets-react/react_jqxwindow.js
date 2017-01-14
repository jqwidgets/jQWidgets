/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxWindow = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['autoOpen','animationType','collapsed','collapseAnimationDuration','content','closeAnimationDuration','closeButtonSize','closeButtonAction','cancelButton','dragArea','draggable','disabled','height','initContent','isModal','keyboardCloseKey','keyboardNavigation','minHeight','maxHeight','minWidth','maxWidth','modalOpacity','modalZIndex','modalBackgroundZIndex','okButton','position','rtl','resizable','showAnimationDuration','showCloseButton','showCollapseButton','theme','title','width','zIndex'];
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
    $('#' +this.componentSelector).jqxWindow(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxWindow('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxWindow(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  autoOpen: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("autoOpen", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("autoOpen");
    }
  },
  animationType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("animationType");
    }
  },
  collapsed: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("collapsed", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("collapsed");
    }
  },
  collapseAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("collapseAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("collapseAnimationDuration");
    }
  },
  content: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("content", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("content");
    }
  },
  closeAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("closeAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("closeAnimationDuration");
    }
  },
  closeButtonSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("closeButtonSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("closeButtonSize");
    }
  },
  closeButtonAction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("closeButtonAction", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("closeButtonAction");
    }
  },
  cancelButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("cancelButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("cancelButton");
    }
  },
  dragArea: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("dragArea", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("dragArea");
    }
  },
  draggable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("draggable", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("draggable");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("height");
    }
  },
  initContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("initContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("initContent");
    }
  },
  isModal: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("isModal", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("isModal");
    }
  },
  keyboardCloseKey: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("keyboardCloseKey", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("keyboardCloseKey");
    }
  },
  keyboardNavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("keyboardNavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("keyboardNavigation");
    }
  },
  minHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("minHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("minHeight");
    }
  },
  maxHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("maxHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("maxHeight");
    }
  },
  minWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("minWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("minWidth");
    }
  },
  maxWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("maxWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("maxWidth");
    }
  },
  modalOpacity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("modalOpacity", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("modalOpacity");
    }
  },
  modalZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("modalZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("modalZIndex");
    }
  },
  modalBackgroundZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("modalBackgroundZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("modalBackgroundZIndex");
    }
  },
  okButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("okButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("okButton");
    }
  },
  position: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("position", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("position");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("rtl");
    }
  },
  resizable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("resizable", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("resizable");
    }
  },
  showAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("showAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("showAnimationDuration");
    }
  },
  showCloseButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("showCloseButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("showCloseButton");
    }
  },
  showCollapseButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("showCollapseButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("showCollapseButton");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("theme");
    }
  },
  title: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("title", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("title");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("width");
    }
  },
  zIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxWindow("zIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxWindow("zIndex");
    }
  },
  bringToFront: function () {
    $("#" +this.componentSelector).jqxWindow("bringToFront");  
  },
  close: function () {
    $("#" +this.componentSelector).jqxWindow("close");  
  },
  collapse: function () {
    $("#" +this.componentSelector).jqxWindow("collapse");  
  },
  closeAll: function () {
    $("#" +this.componentSelector).jqxWindow("closeAll");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxWindow("disable");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxWindow("destroy");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxWindow("enable");  
  },
  expand: function () {
    $("#" +this.componentSelector).jqxWindow("expand");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxWindow("focus");  
  },
  isOpen: function () {
    return $("#" +this.componentSelector).jqxWindow("isOpen");  
  },
  move: function (top, left) {
    $("#" +this.componentSelector).jqxWindow("move", top, left);  
  },
  open: function () {
    $("#" +this.componentSelector).jqxWindow("open");  
  },
  resize: function (top, left) {
    $("#" +this.componentSelector).jqxWindow("resize", top, left);  
  },
  setTitle: function (title) {
    $("#" +this.componentSelector).jqxWindow("setTitle", title);  
  },
  setContent: function (content) {
    $("#" +this.componentSelector).jqxWindow("setContent", content);  
  },
  render: function () {
    let id = 'jqxWindow' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxWindow;

