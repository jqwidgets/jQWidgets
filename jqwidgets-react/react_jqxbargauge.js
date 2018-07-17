/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdraw.js';
import '../jqwidgets/jqxbargauge.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxBarGauge extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationDuration','backgroundColor','barSpacing','baseValue','colorScheme','customColorScheme','disabled','endAngle','formatFunction','height','labels','max','min','relativeInnerRadius','rendered','startAngle','title','tooltip','useGradient','values','width'];
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
        JQXLite(this.componentSelector).jqxBarGauge(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxBarGauge('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxBarGauge(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    animationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('animationDuration');
        }
    };
    backgroundColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('backgroundColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('backgroundColor');
        }
    };
    barSpacing(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('barSpacing', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('barSpacing');
        }
    };
    baseValue(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('baseValue', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('baseValue');
        }
    };
    colorScheme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('colorScheme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('colorScheme');
        }
    };
    customColorScheme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('customColorScheme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('customColorScheme');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('disabled');
        }
    };
    endAngle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('endAngle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('endAngle');
        }
    };
    formatFunction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('formatFunction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('formatFunction');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('height');
        }
    };
    labels(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('labels', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('labels');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('max');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('min');
        }
    };
    relativeInnerRadius(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('relativeInnerRadius', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('relativeInnerRadius');
        }
    };
    rendered(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('rendered', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('rendered');
        }
    };
    startAngle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('startAngle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('startAngle');
        }
    };
    title(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('title', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('title');
        }
    };
    tooltip(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('tooltip', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('tooltip');
        }
    };
    useGradient(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('useGradient', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('useGradient');
        }
    };
    values(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('values', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('values');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('width');
        }
    };
    refresh() {
        JQXLite(this.componentSelector).jqxBarGauge('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxBarGauge('render');
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxBarGauge('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxBarGauge('val');
        }
    };

    render() {
        let id = 'jqxBarGauge' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

