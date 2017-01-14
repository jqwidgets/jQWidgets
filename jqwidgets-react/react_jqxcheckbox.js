/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxCheckBox = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','height','hasThreeStates','locked','rtl','theme','width'];
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
    $('#' +this.componentSelector).jqxCheckBox(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxCheckBox('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxCheckBox(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationShowDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("animationShowDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("animationShowDelay");
    }
  },
  animationHideDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("animationHideDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("animationHideDelay");
    }
  },
  boxSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("boxSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("boxSize");
    }
  },
  checked: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("checked", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("checked");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("disabled");
    }
  },
  enableContainerClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("enableContainerClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("enableContainerClick");
    }
  },
  groupName: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("groupName", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("groupName");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("height");
    }
  },
  hasThreeStates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("hasThreeStates", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("hasThreeStates");
    }
  },
  locked: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("locked", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("locked");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("rtl");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("width");
    }
  },
  check: function () {
    $("#" +this.componentSelector).jqxCheckBox("check");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxCheckBox("disable");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxCheckBox("destroy");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxCheckBox("enable");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxCheckBox("focus");  
  },
  indeterminate: function () {
    $("#" +this.componentSelector).jqxCheckBox("indeterminate");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxCheckBox("render");
  },
  toggle: function () {
    $("#" +this.componentSelector).jqxCheckBox("toggle");  
  },
  uncheck: function () {
    $("#" +this.componentSelector).jqxCheckBox("uncheck");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxCheckBox("val", value)
    } else {
      return $("#" +this.componentSelector).jqxCheckBox("val");
    }
  },

  render: function () {
    let id = 'jqxCheckBox' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}><span>{this.value ? null : this.props.value}</span></div>
    )
  }
});

module.exports = jqxCheckBox;

