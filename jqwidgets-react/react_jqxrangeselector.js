/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxtooltip.js';
import '../jqwidgets/jqxrangeselector.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxRangeSelector extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','showGroupLabels','labelsOnTicks','markersFormatFunction','height','labelsFormat','labelsFormatFunction','labelPrecision','moveOnClick','markerRenderer','markerPrecision','majorLabelRenderer','markersFormat','majorTicksInterval','minorTicksInterval','max','min','padding','range','resizable','rtl','showMinorTicks','snapToTicks','showMajorLabels','showMarkers','theme','width'];
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
        JQXLite(this.componentSelector).jqxRangeSelector(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxRangeSelector('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxRangeSelector(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('disabled');
        }
    };
    showGroupLabels(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('showGroupLabels', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('showGroupLabels');
        }
    };
    labelsOnTicks(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('labelsOnTicks', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('labelsOnTicks');
        }
    };
    markersFormatFunction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('markersFormatFunction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('markersFormatFunction');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('height');
        }
    };
    labelsFormat(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('labelsFormat', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('labelsFormat');
        }
    };
    labelsFormatFunction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('labelsFormatFunction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('labelsFormatFunction');
        }
    };
    labelPrecision(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('labelPrecision', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('labelPrecision');
        }
    };
    moveOnClick(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('moveOnClick', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('moveOnClick');
        }
    };
    markerRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('markerRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('markerRenderer');
        }
    };
    markerPrecision(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('markerPrecision', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('markerPrecision');
        }
    };
    majorLabelRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('majorLabelRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('majorLabelRenderer');
        }
    };
    markersFormat(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('markersFormat', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('markersFormat');
        }
    };
    majorTicksInterval(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('majorTicksInterval', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('majorTicksInterval');
        }
    };
    minorTicksInterval(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('minorTicksInterval', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('minorTicksInterval');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('max');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('min');
        }
    };
    padding(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('padding', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('padding');
        }
    };
    range(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('range', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('range');
        }
    };
    resizable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('resizable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('resizable');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('rtl');
        }
    };
    showMinorTicks(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('showMinorTicks', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('showMinorTicks');
        }
    };
    snapToTicks(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('snapToTicks', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('snapToTicks');
        }
    };
    showMajorLabels(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('showMajorLabels', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('showMajorLabels');
        }
    };
    showMarkers(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('showMarkers', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('showMarkers');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRangeSelector('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRangeSelector('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxRangeSelector('destroy');  
    };
    getRange() {
        return JQXLite(this.componentSelector).jqxRangeSelector('getRange');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxRangeSelector('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxRangeSelector('refresh');  
    };
    setRange(from, to) {
        JQXLite(this.componentSelector).jqxRangeSelector('setRange', from, to);  
    };
    render() {
        let id = 'jqxRangeSelector' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

