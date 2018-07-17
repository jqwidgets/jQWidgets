/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxtooltip.js';
import '../jqwidgets/jqxbulletchart.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxBulletChart extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationDuration','barSize','description','disabled','height','labelsFormat','labelsFormatFunction','orientation','pointer','rtl','ranges','showTooltip','target','ticks','title','tooltipFormatFunction','width'];
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
        JQXLite(this.componentSelector).jqxBulletChart(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxBulletChart('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxBulletChart(arguments[i]);
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
            JQXLite(this.componentSelector).jqxBulletChart('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('animationDuration');
        }
    };
    barSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('barSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('barSize');
        }
    };
    description(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('description', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('description');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('height');
        }
    };
    labelsFormat(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('labelsFormat', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('labelsFormat');
        }
    };
    labelsFormatFunction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('labelsFormatFunction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('labelsFormatFunction');
        }
    };
    orientation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('orientation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('orientation');
        }
    };
    pointer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('pointer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('pointer');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('rtl');
        }
    };
    ranges(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('ranges', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('ranges');
        }
    };
    showTooltip(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('showTooltip', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('showTooltip');
        }
    };
    target(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('target', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('target');
        }
    };
    ticks(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('ticks', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('ticks');
        }
    };
    title(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('title', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('title');
        }
    };
    tooltipFormatFunction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('tooltipFormatFunction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('tooltipFormatFunction');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxBulletChart('destroy');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxBulletChart('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxBulletChart('refresh');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxBulletChart('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxBulletChart('val');
        }
    };

    render() {
        let id = 'jqxBulletChart' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

