/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxTreeMap = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['baseColor','colorRanges','colorRange','colorMode','displayMember','height','hoverEnabled','headerHeight','legendLabel','legendPosition','legendScaleCallback','renderCallbacks','selectionEnabled','showLegend','source','theme','valueMember','width'];
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
    $('#' +this.componentSelector).jqxTreeMap(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxTreeMap('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxTreeMap(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  baseColor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("baseColor", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("baseColor");
    }
  },
  colorRanges: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("colorRanges", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("colorRanges");
    }
  },
  colorRange: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("colorRange", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("colorRange");
    }
  },
  colorMode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("colorMode", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("colorMode");
    }
  },
  displayMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("displayMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("displayMember");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("height");
    }
  },
  hoverEnabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("hoverEnabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("hoverEnabled");
    }
  },
  headerHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("headerHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("headerHeight");
    }
  },
  legendLabel: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("legendLabel", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("legendLabel");
    }
  },
  legendPosition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("legendPosition", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("legendPosition");
    }
  },
  legendScaleCallback: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("legendScaleCallback", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("legendScaleCallback");
    }
  },
  renderCallbacks: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("renderCallbacks", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("renderCallbacks");
    }
  },
  selectionEnabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("selectionEnabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("selectionEnabled");
    }
  },
  showLegend: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("showLegend", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("showLegend");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("source");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("theme");
    }
  },
  valueMember: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("valueMember", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("valueMember");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxTreeMap("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxTreeMap("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxTreeMap("destroy");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxTreeMap("render");
  },
  render: function () {
    let id = 'jqxTreeMap' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxTreeMap;

