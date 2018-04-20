/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxPasswordInput extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','height','localization','maxLength','placeHolder','passwordStrength','rtl','strengthColors','showStrength','showStrengthPosition','strengthTypeRenderer','showPasswordIcon','theme','width'];
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
        JQXLite(this.componentSelector).jqxPasswordInput(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxPasswordInput('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxPasswordInput(arguments[i]);
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
            JQXLite(this.componentSelector).jqxPasswordInput('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('height');
        }
    };
    localization(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('localization', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('localization');
        }
    };
    maxLength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('maxLength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('maxLength');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('placeHolder');
        }
    };
    passwordStrength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('passwordStrength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('passwordStrength');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('rtl');
        }
    };
    strengthColors(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('strengthColors', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('strengthColors');
        }
    };
    showStrength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('showStrength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('showStrength');
        }
    };
    showStrengthPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('showStrengthPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('showStrengthPosition');
        }
    };
    strengthTypeRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('strengthTypeRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('strengthTypeRenderer');
        }
    };
    showPasswordIcon(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('showPasswordIcon', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('showPasswordIcon');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('width');
        }
    };
    performRender() {
        JQXLite(this.componentSelector).jqxPasswordInput('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxPasswordInput('refresh');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxPasswordInput('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxPasswordInput('val');
        }
    };

    render() {
        let id = 'jqxPasswordInput' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <input type='password' id={id}></input>
        )
    };
};

