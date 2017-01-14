/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxKanban = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['columnRenderer','columns','connectWith','headerHeight','headerWidth','height','itemRenderer','ready','rtl','source','resources','template','templateContent','theme','width'];
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
    $('#' +this.componentSelector).jqxKanban(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxKanban('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxKanban(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  columnRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("columnRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("columnRenderer");
    }
  },
  columns: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("columns", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("columns");
    }
  },
  connectWith: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("connectWith", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("connectWith");
    }
  },
  headerHeight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("headerHeight", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("headerHeight");
    }
  },
  headerWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("headerWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("headerWidth");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("height");
    }
  },
  itemRenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("itemRenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("itemRenderer");
    }
  },
  ready: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("ready", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("ready");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("rtl");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("source");
    }
  },
  resources: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("resources", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("resources");
    }
  },
  template: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("template", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("template");
    }
  },
  templateContent: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("templateContent", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("templateContent");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("theme");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxKanban("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxKanban("width");
    }
  },
  addItem: function (newItem) {
    $("#" +this.componentSelector).jqxKanban("addItem", newItem);  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxKanban("destroy");  
  },
  getColumn: function (dataField) {
    return $("#" +this.componentSelector).jqxKanban("getColumn", dataField);  
  },
  getColumnItems: function (dataField) {
    return $("#" +this.componentSelector).jqxKanban("getColumnItems", dataField);  
  },
  getItems: function () {
    return $("#" +this.componentSelector).jqxKanban("getItems");  
  },
  removeItem: function (itemId) {
    $("#" +this.componentSelector).jqxKanban("removeItem", itemId);  
  },
  updateItem: function (itemId, newContent) {
    $("#" +this.componentSelector).jqxKanban("updateItem", itemId, newContent);  
  },
  render: function () {
    let id = 'jqxKanban' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxKanban;

