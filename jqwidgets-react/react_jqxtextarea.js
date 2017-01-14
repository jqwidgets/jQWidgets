/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxTextArea = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','displayMember','dropDownWidth','height','items','maxLength','minLength','opened','placeHolder','popupZIndex','query','renderer','roundedCorners','rtl','scrollBarSize','searchMode','source','theme','valueMember','width'];
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
    $('#' +this.componentSelector).jqxTextArea(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxTextArea('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxTextArea(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("disabled");
    }
  },
  displayMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("displayMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("displayMember");
    }
  },
  dropDownWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("dropDownWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("dropDownWidth");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("height");
    }
  },
  items: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("items", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("items");
    }
  },
  maxLength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("maxLength", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("maxLength");
    }
  },
  minLength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("minLength", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("minLength");
    }
  },
  opened: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("opened", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("opened");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("placeHolder");
    }
  },
  popupZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("popupZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("popupZIndex");
    }
  },
  query: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("query", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("query");
    }
  },
  renderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("renderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("renderer");
    }
  },
  roundedCorners: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("roundedCorners", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("roundedCorners");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("rtl");
    }
  },
  scrollBarSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("scrollBarSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("scrollBarSize");
    }
  },
  searchMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("searchMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("searchMode");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("source");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("theme");
    }
  },
  valueMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("valueMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("valueMember");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxTextArea("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxTextArea("focus");  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxTextArea("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxTextArea("render");
  },
  selectAll: function () {
    $("#" +this.componentSelector).jqxTextArea("selectAll");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxTextArea("val", value)
    } else {
      return $("#" +this.componentSelector).jqxTextArea("val");
    }
  },

  render: function () {
    let id = 'jqxTextArea' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxTextArea;

