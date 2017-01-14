/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxRadioButton = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','hasThreeStates','height','rtl','theme','width'];
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
    $('#' +this.componentSelector).jqxRadioButton(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxRadioButton('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxRadioButton(arguments[i]);
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
      $("#" +this.componentSelector).jqxRadioButton("animationShowDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("animationShowDelay");
    }
  },
  animationHideDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("animationHideDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("animationHideDelay");
    }
  },
  boxSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("boxSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("boxSize");
    }
  },
  checked: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("checked", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("checked");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("disabled");
    }
  },
  enableContainerClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("enableContainerClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("enableContainerClick");
    }
  },
  groupName: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("groupName", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("groupName");
    }
  },
  hasThreeStates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("hasThreeStates", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("hasThreeStates");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("height");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("rtl");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("width");
    }
  },
  check: function () {
    $("#" +this.componentSelector).jqxRadioButton("check");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxRadioButton("disable");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxRadioButton("destroy");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxRadioButton("enable");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxRadioButton("focus");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxRadioButton("render");
  },
  uncheck: function () {
    $("#" +this.componentSelector).jqxRadioButton("uncheck");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxRadioButton("val", value)
    } else {
      return $("#" +this.componentSelector).jqxRadioButton("val");
    }
  },

  render: function () {
    let id = 'jqxRadioButton' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxRadioButton;

