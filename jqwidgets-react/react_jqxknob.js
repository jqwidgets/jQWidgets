/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxKnob = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['allowValueChangeOnClick','allowValueChangeOnDrag','allowValueChangeOnMouseWheel','changing','dragEndAngle','dragStartAngle','disabled','dial','endAngle','height','labels','marks','min','max','progressBar','pointer','pointerGrabAction','rotation','startAngle','spinner','style','step','snapToStep','value','width'];
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
    $('#' +this.componentSelector).jqxKnob(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxKnob('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxKnob(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  allowValueChangeOnClick: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("allowValueChangeOnClick", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("allowValueChangeOnClick");
    }
  },
  allowValueChangeOnDrag: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("allowValueChangeOnDrag", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("allowValueChangeOnDrag");
    }
  },
  allowValueChangeOnMouseWheel: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("allowValueChangeOnMouseWheel", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("allowValueChangeOnMouseWheel");
    }
  },
  changing: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("changing", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("changing");
    }
  },
  dragEndAngle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("dragEndAngle", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("dragEndAngle");
    }
  },
  dragStartAngle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("dragStartAngle", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("dragStartAngle");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("disabled");
    }
  },
  dial: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("dial", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("dial");
    }
  },
  endAngle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("endAngle", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("endAngle");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("height");
    }
  },
  labels: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("labels", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("labels");
    }
  },
  marks: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("marks", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("marks");
    }
  },
  min: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("min", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("min");
    }
  },
  max: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("max", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("max");
    }
  },
  progressBar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("progressBar", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("progressBar");
    }
  },
  pointer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("pointer", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("pointer");
    }
  },
  pointerGrabAction: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("pointerGrabAction", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("pointerGrabAction");
    }
  },
  rotation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("rotation", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("rotation");
    }
  },
  startAngle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("startAngle", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("startAngle");
    }
  },
  spinner: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("spinner", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("spinner");
    }
  },
  style: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("style", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("style");
    }
  },
  step: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("step", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("step");
    }
  },
  snapToStep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("snapToStep", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("snapToStep");
    }
  },
  value: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("value", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("value");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKnob("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxKnob("width");
    }
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxKnob("destroy");  
  },
  val: function (value) {
    if (value !== undefined) {
      $("#" +this.componentSelector).jqxKnob("val", value)
    } else {
      return $("#" +this.componentSelector).jqxKnob("val");
    }
  },

  render: function () {
    let id = 'jqxKnob' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxKnob;

