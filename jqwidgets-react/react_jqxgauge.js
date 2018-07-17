/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdraw.js';
import '../jqwidgets/jqxgauge.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxGauge extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationDuration','border','caption','cap','colorScheme','disabled','easing','endAngle','height','int64','labels','min','max','pointer','radius','ranges','startAngle','showRanges','style','ticksMajor','ticksMinor','ticksDistance','value','width'];
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
        JQXLite(this.componentSelector).jqxGauge(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxGauge('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxGauge(arguments[i]);
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
            JQXLite(this.componentSelector).jqxGauge('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('animationDuration');
        }
    };
    border(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('border', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('border');
        }
    };
    caption(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('caption', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('caption');
        }
    };
    cap(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('cap', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('cap');
        }
    };
    colorScheme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('colorScheme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('colorScheme');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('disabled');
        }
    };
    easing(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('easing', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('easing');
        }
    };
    endAngle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('endAngle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('endAngle');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('height');
        }
    };
    int64(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('int64', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('int64');
        }
    };
    labels(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('labels', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('labels');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('min');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('max');
        }
    };
    pointer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('pointer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('pointer');
        }
    };
    radius(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('radius', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('radius');
        }
    };
    ranges(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('ranges', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('ranges');
        }
    };
    startAngle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('startAngle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('startAngle');
        }
    };
    showRanges(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('showRanges', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('showRanges');
        }
    };
    style(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('style', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('style');
        }
    };
    ticksMajor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('ticksMajor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('ticksMajor');
        }
    };
    ticksMinor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('ticksMinor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('ticksMinor');
        }
    };
    ticksDistance(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('ticksDistance', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('ticksDistance');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('width');
        }
    };
    disable() {
        JQXLite(this.componentSelector).jqxGauge('disable');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxGauge('enable');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxGauge('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxGauge('val');
        }
    };

    render() {
        let id = 'jqxGauge' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

