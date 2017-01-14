/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxInput = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['disabled','dropDownWidth','displayMember','height','items','minLength','maxLength','opened','placeHolder','popupZIndex','query','renderer','rtl','searchMode','source','theme','valueMember','width'];
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
    $('#' +this.componentSelector).jqxInput(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxInput('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxInput(arguments[i]);
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
      $("#" +this.componentSelector).jqxInput("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("disabled");
    }
  },
  dropDownWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("dropDownWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("dropDownWidth");
    }
  },
  displayMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("displayMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("displayMember");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("height");
    }
  },
  items: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("items", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("items");
    }
  },
  minLength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("minLength", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("minLength");
    }
  },
  maxLength: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("maxLength", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("maxLength");
    }
  },
  opened: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("opened", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("opened");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("placeHolder");
    }
  },
  popupZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("popupZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("popupZIndex");
    }
  },
  query: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("query", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("query");
    }
  },
  renderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("renderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("renderer");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("rtl");
    }
  },
  searchMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("searchMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("searchMode");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("source");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("theme");
    }
  },
  valueMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("valueMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("valueMember");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxInput("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxInput("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxInput("destroy");  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxInput("focus");  
  },
  selectAll: function () {
    $("#" +this.componentSelector).jqxInput("selectAll");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxInput("val", value)
    } else {
      return $("#" +this.componentSelector).jqxInput("val");
    }
  },

  render: function () {
    let id = 'jqxInput' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <input type='text' id={id}></input>
    )
  }
});

module.exports = jqxInput;

