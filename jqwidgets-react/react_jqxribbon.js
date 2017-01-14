/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxRibbon = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['animationType','animationDelay','disabled','height','initContent','mode','popupCloseMode','position','rtl','selectedIndex','selectionMode','scrollPosition','scrollStep','scrollDelay','theme','width'];
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
    $('#' +this.componentSelector).jqxRibbon(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxRibbon('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxRibbon(arguments[i]);
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
      $("#" +this.componentSelector).jqxRibbon("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("animationType");
    }
  },
  animationDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("animationDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("animationDelay");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("height");
    }
  },
  initContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("initContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("initContent");
    }
  },
  mode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("mode", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("mode");
    }
  },
  popupCloseMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("popupCloseMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("popupCloseMode");
    }
  },
  position: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("position", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("position");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("rtl");
    }
  },
  selectedIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("selectedIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("selectedIndex");
    }
  },
  selectionMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("selectionMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("selectionMode");
    }
  },
  scrollPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("scrollPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("scrollPosition");
    }
  },
  scrollStep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("scrollStep", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("scrollStep");
    }
  },
  scrollDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("scrollDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("scrollDelay");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("width");
    }
  },
  addAt: function (index, item) {
    $("#" +this.componentSelector).jqxRibbon("addAt", index, item);  
  },
  clearSelection: function () {
    $("#" +this.componentSelector).jqxRibbon("clearSelection");  
  },
  disableAt: function (index) {
    $("#" +this.componentSelector).jqxRibbon("disableAt", index);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxRibbon("destroy");  
  },
  enableAt: function (index) {
    $("#" +this.componentSelector).jqxRibbon("enableAt", index);  
  },
  hideAt: function (index) {
    $("#" +this.componentSelector).jqxRibbon("hideAt", index);  
  },
  removeAt: function (index) {
    $("#" +this.componentSelector).jqxRibbon("removeAt", index);  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxRibbon("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxRibbon("refresh");  
  },
  selectAt: function (index) {
    $("#" +this.componentSelector).jqxRibbon("selectAt", index);  
  },
  showAt: function (index) {
    $("#" +this.componentSelector).jqxRibbon("showAt", index);  
  },
  setPopupLayout: function (index, layout, width, height) {
    $("#" +this.componentSelector).jqxRibbon("setPopupLayout", index, layout, width, height);  
  },
  updateAt: function (index, item) {
    $("#" +this.componentSelector).jqxRibbon("updateAt", index, item);  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxRibbon("val", value)
    } else {
      return $("#" +this.componentSelector).jqxRibbon("val");
    }
  },

  render: function () {
    let id = 'jqxRibbon' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxRibbon;

