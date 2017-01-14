/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxFileUpload = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['autoUpload','accept','browseTemplate','cancelTemplate','disabled','fileInputName','height','localization','multipleFilesUpload','renderFiles','rtl','theme','uploadUrl','uploadTemplate','width'];
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
    $('#' +this.componentSelector).jqxFileUpload(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxFileUpload('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxFileUpload(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  autoUpload: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("autoUpload", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("autoUpload");
    }
  },
  accept: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("accept", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("accept");
    }
  },
  browseTemplate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("browseTemplate", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("browseTemplate");
    }
  },
  cancelTemplate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("cancelTemplate", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("cancelTemplate");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("disabled");
    }
  },
  fileInputName: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("fileInputName", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("fileInputName");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("height");
    }
  },
  localization: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("localization", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("localization");
    }
  },
  multipleFilesUpload: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("multipleFilesUpload", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("multipleFilesUpload");
    }
  },
  renderFiles: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("renderFiles", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("renderFiles");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("rtl");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("theme");
    }
  },
  uploadUrl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("uploadUrl", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("uploadUrl");
    }
  },
  uploadTemplate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("uploadTemplate", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("uploadTemplate");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxFileUpload("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxFileUpload("width");
    }
  },
  browse: function () {
    $("#" +this.componentSelector).jqxFileUpload("browse");  
  },
  cancelFile: function () {
    $("#" +this.componentSelector).jqxFileUpload("cancelFile");  
  },
  cancelAll: function () {
    $("#" +this.componentSelector).jqxFileUpload("cancelAll");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxFileUpload("destroy");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxFileUpload("render");
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxFileUpload("refresh");  
  },
  uploadFile: function (fileIndex) {
    $("#" +this.componentSelector).jqxFileUpload("uploadFile", fileIndex);  
  },
  uploadAll: function () {
    $("#" +this.componentSelector).jqxFileUpload("uploadAll");  
  },
  render: function () {
    let id = 'jqxFileUpload' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxFileUpload;

