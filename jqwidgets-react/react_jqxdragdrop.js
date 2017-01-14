/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDragDrop = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['appendTo','disabled','distance','data','dropAction','dropTarget','dragZIndex','feedback','initFeedback','opacity','onDragEnd','onDrag','onDragStart','onTargetDrop','onDropTargetEnter','onDropTargetLeave','restricter','revert','revertDuration','tolerance'];
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
    $('#' +this.componentSelector).jqxDragDrop(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDragDrop('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDragDrop(arguments[i]);
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
      $("#" +this.componentSelector).jqxDragDrop("appendTo", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("appendTo");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("disabled");
    }
  },
  distance: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("distance", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("distance");
    }
  },
  data: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("data", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("data");
    }
  },
  dropAction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("dropAction", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("dropAction");
    }
  },
  dropTarget: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("dropTarget", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("dropTarget");
    }
  },
  dragZIndex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("dragZIndex", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("dragZIndex");
    }
  },
  feedback: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("feedback", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("feedback");
    }
  },
  initFeedback: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("initFeedback", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("initFeedback");
    }
  },
  opacity: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("opacity", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("opacity");
    }
  },
  onDragEnd: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("onDragEnd", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("onDragEnd");
    }
  },
  onDrag: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("onDrag", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("onDrag");
    }
  },
  onDragStart: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("onDragStart", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("onDragStart");
    }
  },
  onTargetDrop: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("onTargetDrop", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("onTargetDrop");
    }
  },
  onDropTargetEnter: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("onDropTargetEnter", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("onDropTargetEnter");
    }
  },
  onDropTargetLeave: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("onDropTargetLeave", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("onDropTargetLeave");
    }
  },
  restricter: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("restricter", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("restricter");
    }
  },
  revert: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("revert", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("revert");
    }
  },
  revertDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("revertDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("revertDuration");
    }
  },
  tolerance: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDragDrop("tolerance", arg)
    } else {
      return $("#" +this.componentSelector).jqxDragDrop("tolerance");
    }
  },

  render: function () {
    let id = 'jqxDragDrop' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDragDrop;

