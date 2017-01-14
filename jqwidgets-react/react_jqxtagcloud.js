/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxTagCloud = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['alterTextCase','disabled','displayLimit','displayMember','displayValue','fontSizeUnit','height','maxColor','maxFontSize','maxValueToDisplay','minColor','minFontSize','minValueToDisplay','rtl','sortBy','sortOrder','source','tagRenderer','takeTopWeightedItems','textColor','urlBase','urlMember','valueMember','width'];
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
    $('#' +this.componentSelector).jqxTagCloud(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxTagCloud('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxTagCloud(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  alterTextCase: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("alterTextCase", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("alterTextCase");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("disabled");
    }
  },
  displayLimit: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("displayLimit", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("displayLimit");
    }
  },
  displayMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("displayMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("displayMember");
    }
  },
  displayValue: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("displayValue", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("displayValue");
    }
  },
  fontSizeUnit: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("fontSizeUnit", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("fontSizeUnit");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("height");
    }
  },
  maxColor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("maxColor", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("maxColor");
    }
  },
  maxFontSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("maxFontSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("maxFontSize");
    }
  },
  maxValueToDisplay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("maxValueToDisplay", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("maxValueToDisplay");
    }
  },
  minColor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("minColor", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("minColor");
    }
  },
  minFontSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("minFontSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("minFontSize");
    }
  },
  minValueToDisplay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("minValueToDisplay", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("minValueToDisplay");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("rtl");
    }
  },
  sortBy: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("sortBy", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("sortBy");
    }
  },
  sortOrder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("sortOrder", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("sortOrder");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("source");
    }
  },
  tagRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("tagRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("tagRenderer");
    }
  },
  takeTopWeightedItems: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("takeTopWeightedItems", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("takeTopWeightedItems");
    }
  },
  textColor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("textColor", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("textColor");
    }
  },
  urlBase: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("urlBase", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("urlBase");
    }
  },
  urlMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("urlMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("urlMember");
    }
  },
  valueMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("valueMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("valueMember");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTagCloud("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxTagCloud("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxTagCloud("destroy");  
  },
  findTagIndex: function (tag) {
    return $("#" +this.componentSelector).jqxTagCloud("findTagIndex", tag);  
  },
  getHiddenTagsList: function () {
    return $("#" +this.componentSelector).jqxTagCloud("getHiddenTagsList");  
  },
  getRenderedTags: function () {
    return $("#" +this.componentSelector).jqxTagCloud("getRenderedTags");  
  },
  getTagsList: function () {
    return $("#" +this.componentSelector).jqxTagCloud("getTagsList");  
  },
  hideItem: function (index) {
    $("#" +this.componentSelector).jqxTagCloud("hideItem", index);  
  },
  insertAt: function (index, item) {
    $("#" +this.componentSelector).jqxTagCloud("insertAt", index, item);  
  },
  removeAt: function (index) {
    $("#" +this.componentSelector).jqxTagCloud("removeAt", index);  
  },
  updateAt: function (index, item) {
    $("#" +this.componentSelector).jqxTagCloud("updateAt", index, item);  
  },
  showItem: function (index) {
    $("#" +this.componentSelector).jqxTagCloud("showItem", index);  
  },
  render: function () {
    let id = 'jqxTagCloud' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxTagCloud;

