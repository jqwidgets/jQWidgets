/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxButton = React.createClass ({
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
    $('#' +this.componentSelector).jqxButton(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxButton('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxButton(arguments[i]);
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
      $("#" +this.componentSelector).jqxButton("delay", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("delay");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("height");
    }
  },
  imgSrc: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("imgSrc", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("imgSrc");
    }
  },
  imgWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("imgWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("imgWidth");
    }
  },
  imgHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("imgHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("imgHeight");
    }
  },
  imgPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("imgPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("imgPosition");
    }
  },
  roundedCorners: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("roundedCorners", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("roundedCorners");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("rtl");
    }
  },
  textPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("textPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("textPosition");
    }
  },
  textImageRelation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("textImageRelation", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("textImageRelation");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("theme");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("template");
    }
  },
  toggled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("toggled", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("toggled");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("width");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxButton("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxButton("value");
    }
  },
  check: function () {
    $("#" +this.componentSelector).jqxButton("check");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxButton("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxButton("focus");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxButton("render");
  },
  toggle: function () {
    $("#" +this.componentSelector).jqxButton("toggle");  
  },
  unCheck: function () {
    $("#" +this.componentSelector).jqxButton("unCheck");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxButton("val", value)
    } else {
      return $("#" +this.componentSelector).jqxButton("val");
    }
  },

  render: function () {
    let id = 'jqxButton' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxButton;

