/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxslider.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxSlider extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['buttonsPosition','disabled','height','layout','mode','minorTicksFrequency','minorTickSize','max','min','orientation','rangeSlider','rtl','step','showTicks','showMinorTicks','showTickLabels','showButtons','showRange','template','theme','ticksPosition','ticksFrequency','tickSize','tickLabelFormatFunction','tooltip','tooltipHideDelay','tooltipPosition','tooltipFormatFunction','value','values','width'];
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
        JQXLite(this.componentSelector).jqxSlider(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxSlider('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxSlider(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    buttonsPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('buttonsPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('buttonsPosition');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('height');
        }
    };
    layout(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('layout', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('layout');
        }
    };
    mode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('mode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('mode');
        }
    };
    minorTicksFrequency(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('minorTicksFrequency', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('minorTicksFrequency');
        }
    };
    minorTickSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('minorTickSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('minorTickSize');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('max');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('min');
        }
    };
    orientation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('orientation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('orientation');
        }
    };
    rangeSlider(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('rangeSlider', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('rangeSlider');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('rtl');
        }
    };
    step(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('step', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('step');
        }
    };
    showTicks(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('showTicks', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('showTicks');
        }
    };
    showMinorTicks(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('showMinorTicks', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('showMinorTicks');
        }
    };
    showTickLabels(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('showTickLabels', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('showTickLabels');
        }
    };
    showButtons(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('showButtons', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('showButtons');
        }
    };
    showRange(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('showRange', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('showRange');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('template');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('theme');
        }
    };
    ticksPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('ticksPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('ticksPosition');
        }
    };
    ticksFrequency(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('ticksFrequency', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('ticksFrequency');
        }
    };
    tickSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('tickSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('tickSize');
        }
    };
    tickLabelFormatFunction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('tickLabelFormatFunction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('tickLabelFormatFunction');
        }
    };
    tooltip(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('tooltip', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('tooltip');
        }
    };
    tooltipHideDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('tooltipHideDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('tooltipHideDelay');
        }
    };
    tooltipPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('tooltipPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('tooltipPosition');
        }
    };
    tooltipFormatFunction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('tooltipFormatFunction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('tooltipFormatFunction');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('value');
        }
    };
    values(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('values', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('values');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxSlider('destroy');  
    };
    decrementValue() {
        JQXLite(this.componentSelector).jqxSlider('decrementValue');  
    };
    disable() {
        JQXLite(this.componentSelector).jqxSlider('disable');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxSlider('enable');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxSlider('focus');  
    };
    getValue() {
        return JQXLite(this.componentSelector).jqxSlider('getValue');  
    };
    incrementValue() {
        JQXLite(this.componentSelector).jqxSlider('incrementValue');  
    };
    setValue(index) {
        JQXLite(this.componentSelector).jqxSlider('setValue', index);  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxSlider('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxSlider('val');
        }
    };

    render() {
        let id = 'jqxSlider' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

