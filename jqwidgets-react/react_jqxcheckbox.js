/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

const JQXLite = window.JQXLite;

export default class JqxCheckBox extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','height','hasThreeStates','locked','rtl','theme','width'];
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
        JQXLite(this.componentSelector).jqxCheckBox(options);
    };
    generateID() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxCheckBox('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxCheckBox(arguments[i]);
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
            JQXLite(this.componentSelector).jqxCheckBox('animationShowDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('animationShowDelay');
        }
    };
    animationHideDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('animationHideDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('animationHideDelay');
        }
    };
    boxSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('boxSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('boxSize');
        }
    };
    checked(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('checked', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('checked');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('disabled');
        }
    };
    enableContainerClick(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('enableContainerClick', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('enableContainerClick');
        }
    };
    groupName(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('groupName', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('groupName');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('height');
        }
    };
    hasThreeStates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('hasThreeStates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('hasThreeStates');
        }
    };
    locked(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('locked', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('locked');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('rtl');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('width');
        }
    };
    check() {
        JQXLite(this.componentSelector).jqxCheckBox('check');  
    };
    disable() {
        JQXLite(this.componentSelector).jqxCheckBox('disable');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxCheckBox('destroy');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxCheckBox('enable');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxCheckBox('focus');  
    };
    indeterminate() {
        JQXLite(this.componentSelector).jqxCheckBox('indeterminate');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxCheckBox('render');
    };
    toggle() {
        JQXLite(this.componentSelector).jqxCheckBox('toggle');  
    };
    uncheck() {
        JQXLite(this.componentSelector).jqxCheckBox('uncheck');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxCheckBox('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxCheckBox('val');
        }
    };

    render() {
        let id = 'jqxCheckBox' + this.generateID() + this.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}><span>{this.props.value}</span></div>
        )
    };
};

