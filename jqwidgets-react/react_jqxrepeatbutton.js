/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxRepeatButton = React.createClass ({
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
    $('#' +this.componentSelector).jqxRepeatButton(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxRepeatButton('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxRepeatButton(arguments[i]);
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
      $("#" +this.componentSelector).jqxRepeatButton("delay", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("delay");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("height");
    }
  },
  imgSrc: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("imgSrc", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("imgSrc");
    }
  },
  imgWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("imgWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("imgWidth");
    }
  },
  imgHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("imgHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("imgHeight");
    }
  },
  imgPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("imgPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("imgPosition");
    }
  },
  roundedCorners: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("roundedCorners", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("roundedCorners");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("rtl");
    }
  },
  textPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("textPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("textPosition");
    }
  },
  textImageRelation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("textImageRelation", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("textImageRelation");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("theme");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("template");
    }
  },
  toggled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("toggled", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("toggled");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("width");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxRepeatButton("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxRepeatButton("value");
    }
  },
  check: function () {
    $("#" + this.componentSelector).jqxRepeatButton("check");  
  },
  destroy: function () {
    $("#" + this.componentSelector).jqxRepeatButton("destroy");  
  },
  focus: function () {
    $("#" + this.componentSelector).jqxRepeatButton("focus");  
  },
  performRender: function () {
    $("#" + this.componentSelector).jqxRepeatButton("render");
  },
  toggle: function () {
    $("#" + this.componentSelector).jqxRepeatButton("toggle");  
  },
  unCheck: function () {
    $("#" + this.componentSelector).jqxRepeatButton("unCheck");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" + this.componentSelector).jqxRepeatButton("val", value)
    } else {
      return $("#" + this.componentSelector).jqxRepeatButton("val");
    }
  },

  render: function () {
    var id = 'jqxRepeatButton' + this.generateID() + this.generateID();
    this.componentSelector = id;
;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxRepeatButton;

