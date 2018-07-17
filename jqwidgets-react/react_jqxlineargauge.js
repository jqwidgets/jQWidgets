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

export default class JqxLinearGauge extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationDuration','background','colorScheme','disabled','easing','height','int64','labels','min','max','orientation','pointer','rangesOffset','rangeSize','ranges','showRanges','scaleStyle','scaleLength','ticksOffset','ticksPosition','ticksMinor','ticksMajor','value','width'];
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
        JQXLite(this.componentSelector).jqxLinearGauge(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxLinearGauge('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxLinearGauge(arguments[i]);
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
            JQXLite(this.componentSelector).jqxLinearGauge('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('animationDuration');
        }
    };
    background(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('background', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('background');
        }
    };
    colorScheme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('colorScheme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('colorScheme');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('disabled');
        }
    };
    easing(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('easing', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('easing');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('height');
        }
    };
    int64(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('int64', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('int64');
        }
    };
    labels(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('labels', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('labels');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('min');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('max');
        }
    };
    orientation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('orientation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('orientation');
        }
    };
    pointer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('pointer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('pointer');
        }
    };
    rangesOffset(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('rangesOffset', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('rangesOffset');
        }
    };
    rangeSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('rangeSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('rangeSize');
        }
    };
    ranges(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('ranges', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('ranges');
        }
    };
    showRanges(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('showRanges', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('showRanges');
        }
    };
    scaleStyle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('scaleStyle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('scaleStyle');
        }
    };
    scaleLength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('scaleLength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('scaleLength');
        }
    };
    ticksOffset(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('ticksOffset', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('ticksOffset');
        }
    };
    ticksPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('ticksPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('ticksPosition');
        }
    };
    ticksMinor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('ticksMinor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('ticksMinor');
        }
    };
    ticksMajor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('ticksMajor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('ticksMajor');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('width');
        }
    };
    disable() {
        JQXLite(this.componentSelector).jqxLinearGauge('disable');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxLinearGauge('enable');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxLinearGauge('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxLinearGauge('val');
        }
    };

    render() {
        let id = 'jqxLinearGauge' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

