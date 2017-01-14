/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxNavBar = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['columns','disabled','height','minimized','minimizeButtonPosition','minimizedHeight','minimizedTitle','orientation','popupAnimationDelay','rtl','selection','selectedItem','theme','width'];
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
    $('#' +this.componentSelector).jqxNavBar(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxNavBar('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxNavBar(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  columns: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("columns", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("columns");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("height");
    }
  },
  minimized: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("minimized", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("minimized");
    }
  },
  minimizeButtonPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("minimizeButtonPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("minimizeButtonPosition");
    }
  },
  minimizedHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("minimizedHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("minimizedHeight");
    }
  },
  minimizedTitle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("minimizedTitle", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("minimizedTitle");
    }
  },
  orientation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("orientation", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("orientation");
    }
  },
  popupAnimationDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("popupAnimationDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("popupAnimationDelay");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("rtl");
    }
  },
  selection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("selection", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("selection");
    }
  },
  selectedItem: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("selectedItem", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("selectedItem");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavBar("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavBar("width");
    }
  },
  close: function () {
    $("#" +this.componentSelector).jqxNavBar("close");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxNavBar("destroy");  
  },
  getSelectedIndex: function () {
    return $("#" +this.componentSelector).jqxNavBar("getSelectedIndex");  
  },
  open: function () {
    $("#" +this.componentSelector).jqxNavBar("open");  
  },
  selectAt: function (index) {
    $("#" +this.componentSelector).jqxNavBar("selectAt", index);  
  },
  render: function () {
    let id = 'jqxNavBar' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxNavBar;

