/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxLinkButton = React.createClass ({
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
    $('#' +this.componentSelector).jqxLinkButton(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxLinkButton('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxLinkButton(arguments[i]);
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
      $("#" +this.componentSelector).jqxLinkButton("delay", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("delay");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("disabled");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("height");
    }
  },
  imgSrc: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("imgSrc", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("imgSrc");
    }
  },
  imgWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("imgWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("imgWidth");
    }
  },
  imgHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("imgHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("imgHeight");
    }
  },
  imgPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("imgPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("imgPosition");
    }
  },
  roundedCorners: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("roundedCorners", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("roundedCorners");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("rtl");
    }
  },
  textPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("textPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("textPosition");
    }
  },
  textImageRelation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("textImageRelation", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("textImageRelation");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("theme");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("template");
    }
  },
  toggled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("toggled", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("toggled");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("width");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxLinkButton("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxLinkButton("value");
    }
  },
  check: function () {
    $("#" + this.componentSelector).jqxLinkButton("check");  
  },
  destroy: function () {
    $("#" + this.componentSelector).jqxLinkButton("destroy");  
  },
  focus: function () {
    $("#" + this.componentSelector).jqxLinkButton("focus");  
  },
  performRender: function () {
    $("#" + this.componentSelector).jqxLinkButton("render");
  },
  toggle: function () {
    $("#" + this.componentSelector).jqxLinkButton("toggle");  
  },
  unCheck: function () {
    $("#" + this.componentSelector).jqxLinkButton("unCheck");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" + this.componentSelector).jqxLinkButton("val", value)
    } else {
      return $("#" + this.componentSelector).jqxLinkButton("val");
    }
  },

  render: function () {
    var id = 'jqxLinkButton' + this.generateID() + this.generateID();
    this.componentSelector = id;
;    return (
      <a id={id} target={this.props.target} href={this.props.href}> {this.value ? null : this.props.value}{this.props.children}</a>
    )
  }
});

module.exports = jqxLinkButton;

