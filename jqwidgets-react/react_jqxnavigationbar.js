/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxNavigationBar = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expandAnimationDuration','expandMode','expandedIndexes','height','initContent','rtl','showArrow','theme','toggleMode','width'];
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
    $('#' +this.componentSelector).jqxNavigationBar(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxNavigationBar('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxNavigationBar(arguments[i]);
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
      $("#" +this.componentSelector).jqxNavigationBar("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("animationType");
    }
  },
  arrowPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("arrowPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("arrowPosition");
    }
  },
  collapseAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("collapseAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("collapseAnimationDuration");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("disabled");
    }
  },
  expandAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("expandAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("expandAnimationDuration");
    }
  },
  expandMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("expandMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("expandMode");
    }
  },
  expandedIndexes: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("expandedIndexes", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("expandedIndexes");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("height");
    }
  },
  initContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("initContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("initContent");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("rtl");
    }
  },
  showArrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("showArrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("showArrow");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("theme");
    }
  },
  toggleMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("toggleMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("toggleMode");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("width");
    }
  },
  add: function (header, content) {
    $("#" +this.componentSelector).jqxNavigationBar("add", header, content);  
  },
  collapseAt: function (index) {
    $("#" +this.componentSelector).jqxNavigationBar("collapseAt", index);  
  },
  disableAt: function (index) {
    $("#" +this.componentSelector).jqxNavigationBar("disableAt", index);  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxNavigationBar("disable");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxNavigationBar("destroy");  
  },
  expandAt: function (index) {
    $("#" +this.componentSelector).jqxNavigationBar("expandAt", index);  
  },
  enableAt: function (index) {
    $("#" +this.componentSelector).jqxNavigationBar("enableAt", index);  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxNavigationBar("enable");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxNavigationBar("focus");  
  },
  getHeaderContentAt: function (index) {
    return $("#" +this.componentSelector).jqxNavigationBar("getHeaderContentAt", index);  
  },
  getContentAt: function (index) {
    return $("#" +this.componentSelector).jqxNavigationBar("getContentAt", index);  
  },
  hideArrowAt: function (index) {
    $("#" +this.componentSelector).jqxNavigationBar("hideArrowAt", index);  
  },
  invalidate: function () {
    $("#" +this.componentSelector).jqxNavigationBar("invalidate");  
  },
  insert: function (Index, header, content) {
    $("#" +this.componentSelector).jqxNavigationBar("insert", Index, header, content);  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxNavigationBar("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxNavigationBar("render");
  },
  remove: function (index) {
    $("#" +this.componentSelector).jqxNavigationBar("remove", index);  
  },
  setContentAt: function (index, item) {
    $("#" +this.componentSelector).jqxNavigationBar("setContentAt", index, item);  
  },
  setHeaderContentAt: function (index, item) {
    $("#" +this.componentSelector).jqxNavigationBar("setHeaderContentAt", index, item);  
  },
  showArrowAt: function (index) {
    $("#" +this.componentSelector).jqxNavigationBar("showArrowAt", index);  
  },
  update: function (index, header, content) {
    $("#" +this.componentSelector).jqxNavigationBar("update", index, header, content);  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxNavigationBar("val", value)
    } else {
      return $("#" +this.componentSelector).jqxNavigationBar("val");
    }
  },

  render: function () {
    let id = 'jqxNavigationBar' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxNavigationBar;

