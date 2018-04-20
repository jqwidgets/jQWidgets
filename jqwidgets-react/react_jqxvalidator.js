/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxValidator extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['arrow','animation','animationDuration','closeOnClick','focus','hintType','onError','onSuccess','position','rules','rtl'];
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
        JQXLite(this.componentSelector).jqxValidator(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxValidator('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxValidator(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    arrow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('arrow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('arrow');
        }
    };
    animation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('animation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('animation');
        }
    };
    animationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('animationDuration');
        }
    };
    closeOnClick(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('closeOnClick', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('closeOnClick');
        }
    };
    focus(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('focus', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('focus');
        }
    };
    hintType(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('hintType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('hintType');
        }
    };
    onError(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('onError', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('onError');
        }
    };
    onSuccess(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('onSuccess', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('onSuccess');
        }
    };
    position(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('position', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('position');
        }
    };
    rules(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('rules', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('rules');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxValidator('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxValidator('rtl');
        }
    };
    hideHint(id) {
        JQXLite(this.componentSelector).jqxValidator('hideHint', id);  
    };
    hide() {
        JQXLite(this.componentSelector).jqxValidator('hide');  
    };
    updatePosition() {
        JQXLite(this.componentSelector).jqxValidator('updatePosition');  
    };
    validate(htmlElement) {
        JQXLite(this.componentSelector).jqxValidator('validate', htmlElement);  
    };
    validateInput(id) {
        JQXLite(this.componentSelector).jqxValidator('validateInput', id);  
    };
    render() {
        let id = 'jqxValidator' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

