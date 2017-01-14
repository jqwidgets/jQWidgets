/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxListMenu = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['alwaysShowNavigationArrows','animationType','animationDuration','autoSeparators','backLabel','disabled','enableScrolling','filterCallback','height','headerAnimationDuration','placeHolder','readOnly','rtl','roundedCorners','showNavigationArrows','showFilter','showHeader','showBackButton','theme','width'];
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
    $('#' +this.componentSelector).jqxListMenu(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxListMenu('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxListMenu(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  alwaysShowNavigationArrows: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("alwaysShowNavigationArrows", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("alwaysShowNavigationArrows");
    }
  },
  animationType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("animationType", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("animationType");
    }
  },
  animationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("animationDuration");
    }
  },
  autoSeparators: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("autoSeparators", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("autoSeparators");
    }
  },
  backLabel: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("backLabel", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("backLabel");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("disabled");
    }
  },
  enableScrolling: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("enableScrolling", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("enableScrolling");
    }
  },
  filterCallback: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("filterCallback", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("filterCallback");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("height");
    }
  },
  headerAnimationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("headerAnimationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("headerAnimationDuration");
    }
  },
  placeHolder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("placeHolder", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("placeHolder");
    }
  },
  readOnly: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("readOnly", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("readOnly");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("rtl");
    }
  },
  roundedCorners: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("roundedCorners", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("roundedCorners");
    }
  },
  showNavigationArrows: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("showNavigationArrows", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("showNavigationArrows");
    }
  },
  showFilter: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("showFilter", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("showFilter");
    }
  },
  showHeader: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("showHeader", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("showHeader");
    }
  },
  showBackButton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("showBackButton", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("showBackButton");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxListMenu("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxListMenu("width");
    }
  },
  back: function () {
    $("#" +this.componentSelector).jqxListMenu("back");  
  },
  changePage: function (Item) {
    $("#" +this.componentSelector).jqxListMenu("changePage", Item);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxListMenu("destroy");  
  },
  render: function () {
    let id = 'jqxListMenu' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxListMenu;

