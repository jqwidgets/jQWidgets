/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxButtonGroup extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','enableHover','mode','rtl','template','theme'];
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
    JQXLite(this.componentSelector).css('margin-left', '1px');        if(!this.template) {
              JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxButtonGroup(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxButtonGroup('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxButtonGroup(arguments[i]);
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
            JQXLite(this.componentSelector).jqxButtonGroup('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButtonGroup('disabled');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButtonGroup('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButtonGroup('enableHover');
        }
    };
    mode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButtonGroup('mode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButtonGroup('mode');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButtonGroup('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButtonGroup('rtl');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButtonGroup('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButtonGroup('template');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButtonGroup('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButtonGroup('theme');
        }
    };
    disableAt(index) {
        JQXLite(this.componentSelector).jqxButtonGroup('disableAt', index);  
    };
    disable() {
        JQXLite(this.componentSelector).jqxButtonGroup('disable');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxButtonGroup('destroy');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxButtonGroup('enable');  
    };
    enableAt(index) {
        JQXLite(this.componentSelector).jqxButtonGroup('enableAt', index);  
    };
    focus() {
        JQXLite(this.componentSelector).jqxButtonGroup('focus');  
    };
    getSelection() {
        return JQXLite(this.componentSelector).jqxButtonGroup('getSelection');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxButtonGroup('render');
    };
    setSelection(index) {
        JQXLite(this.componentSelector).jqxButtonGroup('setSelection', index);  
    };
    render() {
        let id = 'jqxButtonGroup' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

