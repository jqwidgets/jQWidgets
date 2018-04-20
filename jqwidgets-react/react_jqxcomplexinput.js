/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxComplexInput extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['decimalNotation','disabled','height','placeHolder','roundedCorners','rtl','spinButtons','spinButtonsStep','template','theme','value','width'];
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
        JQXLite(this.componentSelector).jqxComplexInput(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxComplexInput('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxComplexInput(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    decimalNotation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('decimalNotation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('decimalNotation');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('height');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('placeHolder');
        }
    };
    roundedCorners(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('roundedCorners', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('roundedCorners');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('rtl');
        }
    };
    spinButtons(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('spinButtons', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('spinButtons');
        }
    };
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('spinButtonsStep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('spinButtonsStep');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('template');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('theme');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxComplexInput('destroy');  
    };
    getReal(complexnumber) {
        return JQXLite(this.componentSelector).jqxComplexInput('getReal', complexnumber);  
    };
    getImaginary(complexnumber) {
        return JQXLite(this.componentSelector).jqxComplexInput('getImaginary', complexnumber);  
    };
    getDecimalNotation(part, type) {
        return JQXLite(this.componentSelector).jqxComplexInput('getDecimalNotation', part, type);  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxComplexInput('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxComplexInput('refresh');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxComplexInput('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxComplexInput('val');
        }
    };

    render() {
        let id = 'jqxComplexInput' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>
                  <input type='text'></input>
                  <div></div>
            </div>
        )
    };
};

