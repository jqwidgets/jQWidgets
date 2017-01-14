/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxChart = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['title','description','source','showBorderLine','borderLineColor','borderLineWidth','backgroundColor','backgroundImage','showLegend','legendLayout','padding','titlePadding','colorScheme','greyScale','showToolTips','toolTipShowDelay','toolTipHideDelay','toolTipMoveDuration','rtl','enableCrosshairs','crosshairsColor','crosshairsDashStyle','crosshairsLineWidth','columnSeriesOverlap','enabled','enableAnimations','animationDuration','enableAxisTextAnimation','renderEngine','xAxis','valueAxis','seriesGroups'];
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
    $('#' +this.componentSelector).jqxChart(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxChart('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxChart(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  title: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("title", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("title");
    }
  },
  description: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("description", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("description");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("source");
    }
  },
  showBorderLine: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("showBorderLine", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("showBorderLine");
    }
  },
  borderLineColor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("borderLineColor", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("borderLineColor");
    }
  },
  borderLineWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("borderLineWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("borderLineWidth");
    }
  },
  backgroundColor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("backgroundColor", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("backgroundColor");
    }
  },
  backgroundImage: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("backgroundImage", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("backgroundImage");
    }
  },
  showLegend: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("showLegend", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("showLegend");
    }
  },
  legendLayout: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("legendLayout", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("legendLayout");
    }
  },
  padding: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("padding", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("padding");
    }
  },
  titlePadding: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("titlePadding", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("titlePadding");
    }
  },
  colorScheme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("colorScheme", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("colorScheme");
    }
  },
  greyScale: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("greyScale", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("greyScale");
    }
  },
  showToolTips: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("showToolTips", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("showToolTips");
    }
  },
  toolTipShowDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("toolTipShowDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("toolTipShowDelay");
    }
  },
  toolTipHideDelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("toolTipHideDelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("toolTipHideDelay");
    }
  },
  toolTipMoveDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("toolTipMoveDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("toolTipMoveDuration");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("rtl");
    }
  },
  enableCrosshairs: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("enableCrosshairs", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("enableCrosshairs");
    }
  },
  crosshairsColor: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("crosshairsColor", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("crosshairsColor");
    }
  },
  crosshairsDashStyle: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("crosshairsDashStyle", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("crosshairsDashStyle");
    }
  },
  crosshairsLineWidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("crosshairsLineWidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("crosshairsLineWidth");
    }
  },
  columnSeriesOverlap: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("columnSeriesOverlap", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("columnSeriesOverlap");
    }
  },
  enabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("enabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("enabled");
    }
  },
  enableAnimations: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("enableAnimations", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("enableAnimations");
    }
  },
  animationDuration: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("animationDuration", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("animationDuration");
    }
  },
  enableAxisTextAnimation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("enableAxisTextAnimation", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("enableAxisTextAnimation");
    }
  },
  renderEngine: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("renderEngine", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("renderEngine");
    }
  },
  xAxis: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("xAxis", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("xAxis");
    }
  },
  valueAxis: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("valueAxis", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("valueAxis");
    }
  },
  seriesGroups: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxChart("seriesGroups", arg)
    } else {
      return $("#" +this.componentSelector).jqxChart("seriesGroups");
    }
  },
  refresh: function () {
    return $("#" +this.componentSelector).jqxChart("refresh");  
  },
  update: function () {
    return $("#" +this.componentSelector).jqxChart("update");  
  },
  destroy: function () {
    return $("#" +this.componentSelector).jqxChart("destroy");  
  },
  addColorScheme: function (schemeName, colors) {
    return $("#" +this.componentSelector).jqxChart("addColorScheme", schemeName, colors);  
  },
  removeColorScheme: function (schemeName) {
    return $("#" +this.componentSelector).jqxChart("removeColorScheme", schemeName);  
  },
  getItemsCount: function (groupIndex, serieIndex) {
    return $("#" +this.componentSelector).jqxChart("getItemsCount", groupIndex, serieIndex);  
  },
  getItemCoord: function (groupIndex, serieIndex, itemIndex) {
    return $("#" +this.componentSelector).jqxChart("getItemCoord", groupIndex, serieIndex, itemIndex);  
  },
  getXAxisRect: function (groupIndex) {
    return $("#" +this.componentSelector).jqxChart("getXAxisRect", groupIndex);  
  },
  getXAxisLabels: function (groupIndex) {
    return $("#" +this.componentSelector).jqxChart("getXAxisLabels", groupIndex);  
  },
  getValueAxisRect: function (groupIndex) {
    return $("#" +this.componentSelector).jqxChart("getValueAxisRect", groupIndex);  
  },
  getValueAxisLabels: function (groupIndex) {
    return $("#" +this.componentSelector).jqxChart("getValueAxisLabels", groupIndex);  
  },
  getColorScheme: function (colorScheme) {
    return $("#" +this.componentSelector).jqxChart("getColorScheme", colorScheme);  
  },
  hideSerie: function (groupIndex, serieIndex, itemIndex) {
    return $("#" +this.componentSelector).jqxChart("hideSerie", groupIndex, serieIndex, itemIndex);  
  },
  showSerie: function (groupIndex, serieIndex, itemIndex) {
    return $("#" +this.componentSelector).jqxChart("showSerie", groupIndex, serieIndex, itemIndex);  
  },
  hideToolTip: function (hideDelay) {
    return $("#" +this.componentSelector).jqxChart("hideToolTip", hideDelay);  
  },
  showToolTip: function (groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
    return $("#" +this.componentSelector).jqxChart("showToolTip", groupIndex, serieIndex, itemIndex, showDelay, hideDelay);  
  },
  saveAsJPEG: function (fileName, exportServerUrl) {
    return $("#" +this.componentSelector).jqxChart("saveAsJPEG", fileName, exportServerUrl);  
  },
  saveAsPDF: function (fileName, exportServerUrl) {
    return $("#" +this.componentSelector).jqxChart("saveAsPDF", fileName, exportServerUrl);  
  },
  getXAxisValue: function (offset, groupIndex) {
    return $("#" +this.componentSelector).jqxChart("getXAxisValue", offset, groupIndex);  
  },
  getValueAxisValue: function (offset, groupIndex) {
    return $("#" +this.componentSelector).jqxChart("getValueAxisValue", offset, groupIndex);  
  },
  render: function () {
    let id = 'jqxChart' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxChart;

