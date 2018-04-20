/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxFormattedInput extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','decimalNotation','dropDown','dropDownWidth','height','min','max','placeHolder','popupZIndex','roundedCorners','rtl','radix','spinButtons','spinButtonsStep','template','theme','upperCase','value','width'];
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
        JQXLite(this.componentSelector).jqxFormattedInput(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxFormattedInput('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxFormattedInput(arguments[i]);
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
            JQXLite(this.componentSelector).jqxFormattedInput('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('disabled');
        }
    };
    decimalNotation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('decimalNotation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('decimalNotation');
        }
    };
    dropDown(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('dropDown', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('dropDown');
        }
    };
    dropDownWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('dropDownWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('dropDownWidth');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('height');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('min');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('max');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('placeHolder');
        }
    };
    popupZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('popupZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('popupZIndex');
        }
    };
    roundedCorners(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('roundedCorners', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('roundedCorners');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('rtl');
        }
    };
    radix(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('radix', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('radix');
        }
    };
    spinButtons(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('spinButtons', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('spinButtons');
        }
    };
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('spinButtonsStep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('spinButtonsStep');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('template');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('theme');
        }
    };
    upperCase(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('upperCase', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('upperCase');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFormattedInput('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('width');
        }
    };
    close() {
        JQXLite(this.componentSelector).jqxFormattedInput('close');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxFormattedInput('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxFormattedInput('focus');  
    };
    open() {
        JQXLite(this.componentSelector).jqxFormattedInput('open');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxFormattedInput('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxFormattedInput('refresh');  
    };
    selectAll() {
        JQXLite(this.componentSelector).jqxFormattedInput('selectAll');  
    };
    selectFirst() {
        JQXLite(this.componentSelector).jqxFormattedInput('selectFirst');  
    };
    selectLast() {
        JQXLite(this.componentSelector).jqxFormattedInput('selectLast');  
    };
    val(value) {
        if (value !== undefined) {
            if(typeof value === 'string') {                return JQXLite(this.componentSelector).jqxFormattedInput('val',  value)
            } else {
                JQXLite(this.componentSelector).jqxFormattedInput('val',  value)
        }
            JQXLite(this.componentSelector).jqxFormattedInput('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxFormattedInput('val');
        }
    };

    render() {
        let id = 'jqxFormattedInput' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        let spinButtons = this.props.spinButtons;
        if ((!spinButtons) && (spinButtons !== false)) spinButtons = true;
        return (
            <div>
                {
                    this.props.rtl ?
                        (
                            <div id={id}>
                                  {spinButtons ? <div></div> : null}
                                  {this.props.dropDown ? <div></div> : null}
                                  <input type='text'></input>
                            </div>
                        ) : (
                            <div id={id}>
                                  <input type='text'></input>
                                      {spinButtons ? <div></div> : null}
                                      {this.props.dropDown ? <div></div> : null}
                            </div>
                        )
                }
            </div>
        )
    };
};

