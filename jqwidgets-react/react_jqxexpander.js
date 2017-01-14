/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxExpander = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expanded','expandAnimationDuration','height','headerPosition','initContent','rtl','showArrow','theme','toggleMode','width'];
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
    $('#' +this.componentSelector).jqxExpander(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxExpander('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxExpander(arguments[i]);
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
      $("#" +this.componentSelector).jqxExpander("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("animationType");
    }
  },
  arrowPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("arrowPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("arrowPosition");
    }
  },
  collapseAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("collapseAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("collapseAnimationDuration");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("disabled");
    }
  },
  expanded: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("expanded", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("expanded");
    }
  },
  expandAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("expandAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("expandAnimationDuration");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("height");
    }
  },
  headerPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("headerPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("headerPosition");
    }
  },
  initContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("initContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("initContent");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("rtl");
    }
  },
  showArrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("showArrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("showArrow");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("theme");
    }
  },
  toggleMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("toggleMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("toggleMode");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxExpander("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxExpander("width");
    }
  },
  collapse: function () {
    $("#" +this.componentSelector).jqxExpander("collapse");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxExpander("disable");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxExpander("destroy");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxExpander("enable");  
  },
  expand: function () {
    $("#" +this.componentSelector).jqxExpander("expand");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxExpander("focus");  
  },
  getContent: function () {
    return $("#" +this.componentSelector).jqxExpander("getContent");  
  },
  getHeaderContent: function () {
    return $("#" +this.componentSelector).jqxExpander("getHeaderContent");  
  },
  invalidate: function () {
    $("#" +this.componentSelector).jqxExpander("invalidate");  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxExpander("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxExpander("render");
  },
  setHeaderContent: function (headerContent) {
    $("#" +this.componentSelector).jqxExpander("setHeaderContent", headerContent);  
  },
  setContent: function (content) {
    $("#" +this.componentSelector).jqxExpander("setContent", content);  
  },
  render: function () {
    let id = 'jqxExpander' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxExpander;

