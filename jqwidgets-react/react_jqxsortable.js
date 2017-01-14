/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxSortable = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['appendTo','axis','cancelProperty','connectWith','containment','cursor','cursorAt','delay','disabled','distance','dropOnEmpty','forceHelperSize','forcePlaceholderSize','grid','handle','helper','items','opacity','placeholderShow','revert','scroll','scrollSensitivity','scrollSpeed','tolerance','zIndex'];
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
    $('#' +this.componentSelector).jqxSortable(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxSortable('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxSortable(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  appendTo: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("appendTo", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("appendTo");
    }
  },
  axis: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("axis", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("axis");
    }
  },
  cancelProperty: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("cancelProperty", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("cancelProperty");
    }
  },
  connectWith: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("connectWith", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("connectWith");
    }
  },
  containment: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("containment", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("containment");
    }
  },
  cursor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("cursor", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("cursor");
    }
  },
  cursorAt: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("cursorAt", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("cursorAt");
    }
  },
  delay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("delay", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("delay");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("disabled");
    }
  },
  distance: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("distance", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("distance");
    }
  },
  dropOnEmpty: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("dropOnEmpty", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("dropOnEmpty");
    }
  },
  forceHelperSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("forceHelperSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("forceHelperSize");
    }
  },
  forcePlaceholderSize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("forcePlaceholderSize", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("forcePlaceholderSize");
    }
  },
  grid: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("grid", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("grid");
    }
  },
  handle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("handle", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("handle");
    }
  },
  helper: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("helper", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("helper");
    }
  },
  items: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("items", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("items");
    }
  },
  opacity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("opacity", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("opacity");
    }
  },
  placeholderShow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("placeholderShow", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("placeholderShow");
    }
  },
  revert: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("revert", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("revert");
    }
  },
  scroll: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("scroll", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("scroll");
    }
  },
  scrollSensitivity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("scrollSensitivity", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("scrollSensitivity");
    }
  },
  scrollSpeed: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("scrollSpeed", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("scrollSpeed");
    }
  },
  tolerance: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("tolerance", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("tolerance");
    }
  },
  zIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxSortable("zIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxSortable("zIndex");
    }
  },
  cancelMethod: function () {
    $("#" +this.componentSelector).jqxSortable("cancelMethod");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxSortable("destroy");  
  },
  disable: function () {
    $("#" +this.componentSelector).jqxSortable("disable");  
  },
  enable: function () {
    $("#" +this.componentSelector).jqxSortable("enable");  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxSortable("refresh");  
  },
  refreshPositions: function () {
    $("#" +this.componentSelector).jqxSortable("refreshPositions");  
  },
  serialize: function () {
    $("#" +this.componentSelector).jqxSortable("serialize");  
  },
  toArray: function () {
    return $("#" +this.componentSelector).jqxSortable("toArray");  
  },
  render: function () {
    let id = 'jqxSortable' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxSortable;

