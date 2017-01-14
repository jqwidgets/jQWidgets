/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxValidator = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['arrow','animation','animationDuration','closeOnClick','focus','hintType','onError','onSuccess','position','rules','rtl'];
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
    $('#' +this.componentSelector).jqxValidator(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxValidator('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxValidator(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  arrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("arrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("arrow");
    }
  },
  animation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("animation", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("animation");
    }
  },
  animationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("animationDuration");
    }
  },
  closeOnClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("closeOnClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("closeOnClick");
    }
  },
  focus: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("focus", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("focus");
    }
  },
  hintType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("hintType", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("hintType");
    }
  },
  onError: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("onError", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("onError");
    }
  },
  onSuccess: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("onSuccess", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("onSuccess");
    }
  },
  position: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("position", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("position");
    }
  },
  rules: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("rules", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("rules");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxValidator("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxValidator("rtl");
    }
  },
  hideHint: function (id) {
    $("#" +this.componentSelector).jqxValidator("hideHint", id);  
  },
  hide: function () {
    $("#" +this.componentSelector).jqxValidator("hide");  
  },
  updatePosition: function () {
    $("#" +this.componentSelector).jqxValidator("updatePosition");  
  },
  validate: function (htmlElement) {
    $("#" +this.componentSelector).jqxValidator("validate", htmlElement);  
  },
  validateInput: function (id) {
    $("#" +this.componentSelector).jqxValidator("validateInput", id);  
  },
  render: function () {
    let id = 'jqxValidator' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxValidator;

