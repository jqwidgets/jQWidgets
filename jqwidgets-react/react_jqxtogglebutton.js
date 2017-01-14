/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxToggleButton = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
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
    $('#' +this.componentSelector).jqxToggleButton(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxToggleButton('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxToggleButton(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  delay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("delay", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("delay");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("height");
    }
  },
  imgSrc: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("imgSrc", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("imgSrc");
    }
  },
  imgWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("imgWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("imgWidth");
    }
  },
  imgHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("imgHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("imgHeight");
    }
  },
  imgPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("imgPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("imgPosition");
    }
  },
  roundedCorners: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("roundedCorners", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("roundedCorners");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("rtl");
    }
  },
  textPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("textPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("textPosition");
    }
  },
  textImageRelation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("textImageRelation", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("textImageRelation");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("theme");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("template");
    }
  },
  toggled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("toggled", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("toggled");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("width");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("value");
    }
  },
  check: function () {
    $("#" +this.componentSelector).jqxToggleButton("check");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxToggleButton("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxToggleButton("focus");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxToggleButton("render");
  },
  toggle: function () {
    $("#" +this.componentSelector).jqxToggleButton("toggle");  
  },
  unCheck: function () {
    $("#" +this.componentSelector).jqxToggleButton("unCheck");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxToggleButton("val", value)
    } else {
      return $("#" +this.componentSelector).jqxToggleButton("val");
    }
  },

  render: function () {
    let id = 'jqxToggleButton' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxToggleButton;

