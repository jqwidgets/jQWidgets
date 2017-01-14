/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxScrollView = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationDuration','bounceEnabled','buttonsOffset','currentPage','disabled','height','moveThreshold','showButtons','slideShow','slideDuration','theme','width'];
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
    $('#' +this.componentSelector).jqxScrollView(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxScrollView('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxScrollView(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  animationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("animationDuration");
    }
  },
  bounceEnabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("bounceEnabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("bounceEnabled");
    }
  },
  buttonsOffset: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("buttonsOffset", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("buttonsOffset");
    }
  },
  currentPage: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("currentPage", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("currentPage");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("height");
    }
  },
  moveThreshold: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("moveThreshold", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("moveThreshold");
    }
  },
  showButtons: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("showButtons", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("showButtons");
    }
  },
  slideShow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("slideShow", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("slideShow");
    }
  },
  slideDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("slideDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("slideDuration");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxScrollView("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxScrollView("width");
    }
  },
  back: function () {
    $("#" +this.componentSelector).jqxScrollView("back");  
  },
  changePage: function (index) {
    $("#" +this.componentSelector).jqxScrollView("changePage", index);  
  },
  forward: function () {
    $("#" +this.componentSelector).jqxScrollView("forward");  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxScrollView("refresh");  
  },
  render: function () {
    let id = 'jqxScrollView' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxScrollView;

