/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxMaskedInput extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','height','mask','promptChar','readOnly','rtl','theme','textAlign','value','width'];
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
        JQXLite(this.componentSelector).jqxMaskedInput(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxMaskedInput('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxMaskedInput(arguments[i]);
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
            JQXLite(this.componentSelector).jqxMaskedInput('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('height');
        }
    };
    mask(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('mask', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('mask');
        }
    };
    promptChar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('promptChar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('promptChar');
        }
    };
    readOnly(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('readOnly', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('readOnly');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('rtl');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('theme');
        }
    };
    textAlign(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('textAlign', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('textAlign');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('width');
        }
    };
    clear() {
        JQXLite(this.componentSelector).jqxMaskedInput('clear');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxMaskedInput('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxMaskedInput('focus');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxMaskedInput('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxMaskedInput('val');
        }
    };

    render() {
        let id = 'jqxMaskedInput' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

