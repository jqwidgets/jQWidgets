/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxEditor = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['createCommand','disabled','editable','height','lineBreak','localization','pasteMode','rtl','stylesheets','theme','toolbarPosition','tools','width'];
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
    $('#' +this.componentSelector).jqxEditor(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxEditor('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxEditor(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  createCommand: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("createCommand", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("createCommand");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("disabled");
    }
  },
  editable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("editable", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("editable");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("height");
    }
  },
  lineBreak: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("lineBreak", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("lineBreak");
    }
  },
  localization: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("localization", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("localization");
    }
  },
  pasteMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("pasteMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("pasteMode");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("rtl");
    }
  },
  stylesheets: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("stylesheets", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("stylesheets");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("theme");
    }
  },
  toolbarPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("toolbarPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("toolbarPosition");
    }
  },
  tools: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("tools", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("tools");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxEditor("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxEditor("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxEditor("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxEditor("focus");  
  },
  print: function () {
    $("#" +this.componentSelector).jqxEditor("print");  
  },
  setMode: function (mode) {
    $("#" +this.componentSelector).jqxEditor("setMode", mode);  
  },
  val: function (htmlValue) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxEditor("val", value)
    } else {
      return $("#" +this.componentSelector).jqxEditor("val");
    }
  },

  render: function () {
    let id = 'jqxEditor' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxEditor;

