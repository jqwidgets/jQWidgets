/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxSwitchButton extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['checked','disabled','height','orientation','onLabel','offLabel','thumbSize','rtl','width'];
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
        JQXLite(this.componentSelector).jqxSwitchButton(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxSwitchButton('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxSwitchButton(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    checked(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('checked', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('checked');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('height');
        }
    };
    orientation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('orientation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('orientation');
        }
    };
    onLabel(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('onLabel', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('onLabel');
        }
    };
    offLabel(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('offLabel', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('offLabel');
        }
    };
    thumbSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('thumbSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('thumbSize');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('rtl');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('width');
        }
    };
    check() {
        JQXLite(this.componentSelector).jqxSwitchButton('check');  
    };
    disable() {
        JQXLite(this.componentSelector).jqxSwitchButton('disable');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxSwitchButton('enable');  
    };
    toggle() {
        JQXLite(this.componentSelector).jqxSwitchButton('toggle');  
    };
    uncheck() {
        JQXLite(this.componentSelector).jqxSwitchButton('uncheck');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxSwitchButton('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxSwitchButton('val');
        }
    };

    render() {
        let id = 'jqxSwitchButton' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

