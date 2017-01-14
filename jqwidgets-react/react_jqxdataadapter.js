/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxDataAdapter = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['columnDelimiter','datafields','data','datatype','type','id','localdata','mapChar','rowDelimiter','root','record','url','async','autoBind','beforeSend','beforeLoadComplete','contentType','formatData','loadError','loadComplete','loadServerData','processData','beginUpdate','dataBind','endUpdate','formatDate','formatNumber','getRecordsHierarchy','getGroupedRecords','getAggregatedData','records'];
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
    $('#' +this.componentSelector).jqxDataAdapter(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxDataAdapter('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxDataAdapter(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  columnDelimiter: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("columnDelimiter", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("columnDelimiter");
    }
  },
  datafields: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("datafields", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("datafields");
    }
  },
  data: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("data", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("data");
    }
  },
  datatype: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("datatype", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("datatype");
    }
  },
  type: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("type", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("type");
    }
  },
  id: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("id", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("id");
    }
  },
  localdata: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("localdata", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("localdata");
    }
  },
  mapChar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("mapChar", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("mapChar");
    }
  },
  rowDelimiter: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("rowDelimiter", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("rowDelimiter");
    }
  },
  root: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("root", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("root");
    }
  },
  record: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("record", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("record");
    }
  },
  url: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("url", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("url");
    }
  },
  async: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("async", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("async");
    }
  },
  autoBind: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("autoBind", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("autoBind");
    }
  },
  beforeSend: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("beforeSend", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("beforeSend");
    }
  },
  beforeLoadComplete: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("beforeLoadComplete", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("beforeLoadComplete");
    }
  },
  contentType: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("contentType", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("contentType");
    }
  },
  formatData: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("formatData", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("formatData");
    }
  },
  loadError: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("loadError", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("loadError");
    }
  },
  loadComplete: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("loadComplete", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("loadComplete");
    }
  },
  loadServerData: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("loadServerData", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("loadServerData");
    }
  },
  processData: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("processData", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("processData");
    }
  },
  beginUpdate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("beginUpdate", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("beginUpdate");
    }
  },
  dataBind: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("dataBind", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("dataBind");
    }
  },
  endUpdate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("endUpdate", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("endUpdate");
    }
  },
  formatDate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("formatDate", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("formatDate");
    }
  },
  formatNumber: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("formatNumber", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("formatNumber");
    }
  },
  getRecordsHierarchy: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("getRecordsHierarchy", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("getRecordsHierarchy");
    }
  },
  getGroupedRecords: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("getGroupedRecords", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("getGroupedRecords");
    }
  },
  getAggregatedData: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("getAggregatedData", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("getAggregatedData");
    }
  },
  records: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxDataAdapter("records", arg)
    } else {
      return $("#" +this.componentSelector).jqxDataAdapter("records");
    }
  },

  render: function () {
    let id = 'jqxDataAdapter' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxDataAdapter;

