/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxRadioButton extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','hasThreeStates','height','rtl','theme','width'];
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
        JQXLite(this.componentSelector).jqxRadioButton(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxRadioButton('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxRadioButton(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    animationShowDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('animationShowDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('animationShowDelay');
        }
    };
    animationHideDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('animationHideDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('animationHideDelay');
        }
    };
    boxSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('boxSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('boxSize');
        }
    };
    checked(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('checked', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('checked');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('disabled');
        }
    };
    enableContainerClick(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('enableContainerClick', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('enableContainerClick');
        }
    };
    groupName(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('groupName', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('groupName');
        }
    };
    hasThreeStates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('hasThreeStates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('hasThreeStates');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('height');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('rtl');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('width');
        }
    };
    check() {
        JQXLite(this.componentSelector).jqxRadioButton('check');  
    };
    disable() {
        JQXLite(this.componentSelector).jqxRadioButton('disable');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxRadioButton('destroy');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxRadioButton('enable');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxRadioButton('focus');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxRadioButton('render');
    };
    uncheck() {
        JQXLite(this.componentSelector).jqxRadioButton('uncheck');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxRadioButton('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxRadioButton('val');
        }
    };

    render() {
        let id = 'jqxRadioButton' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

