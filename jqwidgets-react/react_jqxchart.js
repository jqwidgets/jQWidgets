/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxdata.export.js';
import '../jqwidgets/jqxdraw.js';
import '../jqwidgets/jqxchart.core.js';
import '../jqwidgets/jqxchart.api.js';
import '../jqwidgets/jqxchart.annotations.js';
import '../jqwidgets/jqxchart.rangeselector.js';
import '../jqwidgets/jqxchart.waterfall.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxChart extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['title','description','source','showBorderLine','borderLineColor','borderLineWidth','backgroundColor','backgroundImage','showLegend','legendLayout','categoryAxis','padding','titlePadding','colorScheme','greyScale','showToolTips','toolTipShowDelay','toolTipHideDelay','toolTipMoveDuration','drawBefore','draw','rtl','enableCrosshairs','crosshairsColor','crosshairsDashStyle','crosshairsLineWidth','columnSeriesOverlap','enabled','enableAnimations','animationDuration','enableAxisTextAnimation','renderEngine','xAxis','valueAxis','seriesGroups'];
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
      };
    createComponent(options) {
        if(!this.style) {
              for (let style in this.props.style) {
                  JQXLite(this.componentSelector).css(style, this.props.style[style]);
              }
        }
        if(this.props.className !== undefined) {
            let classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
              JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxChart(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxChart('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxChart(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    title(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('title', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('title');
        }
    };
    description(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('description', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('description');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('source');
        }
    };
    showBorderLine(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('showBorderLine', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('showBorderLine');
        }
    };
    borderLineColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('borderLineColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('borderLineColor');
        }
    };
    borderLineWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('borderLineWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('borderLineWidth');
        }
    };
    backgroundColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('backgroundColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('backgroundColor');
        }
    };
    backgroundImage(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('backgroundImage', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('backgroundImage');
        }
    };
    showLegend(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('showLegend', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('showLegend');
        }
    };
    legendLayout(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('legendLayout', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('legendLayout');
        }
    };
    categoryAxis(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('categoryAxis', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('categoryAxis');
        }
    };
    padding(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('padding', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('padding');
        }
    };
    titlePadding(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('titlePadding', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('titlePadding');
        }
    };
    colorScheme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('colorScheme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('colorScheme');
        }
    };
    greyScale(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('greyScale', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('greyScale');
        }
    };
    showToolTips(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('showToolTips', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('showToolTips');
        }
    };
    toolTipShowDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('toolTipShowDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('toolTipShowDelay');
        }
    };
    toolTipHideDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('toolTipHideDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('toolTipHideDelay');
        }
    };
    toolTipMoveDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('toolTipMoveDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('toolTipMoveDuration');
        }
    };
    drawBefore(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('drawBefore', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('drawBefore');
        }
    };
    draw(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('draw', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('draw');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('rtl');
        }
    };
    enableCrosshairs(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('enableCrosshairs', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('enableCrosshairs');
        }
    };
    crosshairsColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('crosshairsColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('crosshairsColor');
        }
    };
    crosshairsDashStyle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('crosshairsDashStyle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('crosshairsDashStyle');
        }
    };
    crosshairsLineWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('crosshairsLineWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('crosshairsLineWidth');
        }
    };
    columnSeriesOverlap(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('columnSeriesOverlap', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('columnSeriesOverlap');
        }
    };
    enabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('enabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('enabled');
        }
    };
    enableAnimations(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('enableAnimations', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('enableAnimations');
        }
    };
    animationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('animationDuration');
        }
    };
    enableAxisTextAnimation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('enableAxisTextAnimation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('enableAxisTextAnimation');
        }
    };
    renderEngine(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('renderEngine', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('renderEngine');
        }
    };
    xAxis(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('xAxis', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('xAxis');
        }
    };
    valueAxis(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('valueAxis', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('valueAxis');
        }
    };
    seriesGroups(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxChart('seriesGroups', arg)
        } else {
            return JQXLite(this.componentSelector).jqxChart('seriesGroups');
        }
    };
    getInstance() {
        return JQXLite(this.componentSelector).jqxChart('getInstance');  
    };
    refresh() {
        return JQXLite(this.componentSelector).jqxChart('refresh');  
    };
    update() {
        return JQXLite(this.componentSelector).jqxChart('update');  
    };
    destroy() {
        return JQXLite(this.componentSelector).jqxChart('destroy');  
    };
    addColorScheme(schemeName, colors) {
        return JQXLite(this.componentSelector).jqxChart('addColorScheme', schemeName, colors);  
    };
    removeColorScheme(schemeName) {
        return JQXLite(this.componentSelector).jqxChart('removeColorScheme', schemeName);  
    };
    getItemsCount(groupIndex, serieIndex) {
        return JQXLite(this.componentSelector).jqxChart('getItemsCount', groupIndex, serieIndex);  
    };
    getItemCoord(groupIndex, serieIndex, itemIndex) {
        return JQXLite(this.componentSelector).jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);  
    };
    getXAxisRect(groupIndex) {
        return JQXLite(this.componentSelector).jqxChart('getXAxisRect', groupIndex);  
    };
    getXAxisLabels(groupIndex) {
        return JQXLite(this.componentSelector).jqxChart('getXAxisLabels', groupIndex);  
    };
    getValueAxisRect(groupIndex) {
        return JQXLite(this.componentSelector).jqxChart('getValueAxisRect', groupIndex);  
    };
    getValueAxisLabels(groupIndex) {
        return JQXLite(this.componentSelector).jqxChart('getValueAxisLabels', groupIndex);  
    };
    getColorScheme(colorScheme) {
        return JQXLite(this.componentSelector).jqxChart('getColorScheme', colorScheme);  
    };
    hideSerie(groupIndex, serieIndex, itemIndex) {
        return JQXLite(this.componentSelector).jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);  
    };
    showSerie(groupIndex, serieIndex, itemIndex) {
        return JQXLite(this.componentSelector).jqxChart('showSerie', groupIndex, serieIndex, itemIndex);  
    };
    hideToolTip(hideDelay) {
        return JQXLite(this.componentSelector).jqxChart('hideToolTip', hideDelay);  
    };
    showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        return JQXLite(this.componentSelector).jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);  
    };
    saveAsJPEG(fileName, exportServerUrl) {
        return JQXLite(this.componentSelector).jqxChart('saveAsJPEG', fileName, exportServerUrl);  
    };
    saveAsPNG(fileName, exportServerUrl) {
        return JQXLite(this.componentSelector).jqxChart('saveAsPNG', fileName, exportServerUrl);  
    };
    saveAsPDF(fileName, exportServerUrl) {
        return JQXLite(this.componentSelector).jqxChart('saveAsPDF', fileName, exportServerUrl);  
    };
    getXAxisValue(offset, groupIndex) {
        return JQXLite(this.componentSelector).jqxChart('getXAxisValue', offset, groupIndex);  
    };
    getValueAxisValue(offset, groupIndex) {
        return JQXLite(this.componentSelector).jqxChart('getValueAxisValue', offset, groupIndex);  
    };
    render() {
        let id = 'jqxChart' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

