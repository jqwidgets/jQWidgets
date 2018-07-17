/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxpanel.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxPanel extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['autoUpdate','disabled','height','rtl','sizeMode','scrollBarSize','theme','width'];
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
        JQXLite(this.componentSelector).jqxPanel(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxPanel('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxPanel(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    autoUpdate(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPanel('autoUpdate', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPanel('autoUpdate');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPanel('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPanel('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPanel('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPanel('height');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPanel('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPanel('rtl');
        }
    };
    sizeMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPanel('sizeMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPanel('sizeMode');
        }
    };
    scrollBarSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPanel('scrollBarSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPanel('scrollBarSize');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPanel('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPanel('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPanel('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPanel('width');
        }
    };
    append(HTMLElement) {
        JQXLite(this.componentSelector).jqxPanel('append', HTMLElement);  
    };
    clearcontent() {
        JQXLite(this.componentSelector).jqxPanel('clearcontent');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxPanel('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxPanel('focus');  
    };
    getScrollHeight() {
        return JQXLite(this.componentSelector).jqxPanel('getScrollHeight');  
    };
    getVScrollPosition() {
        return JQXLite(this.componentSelector).jqxPanel('getVScrollPosition');  
    };
    getScrollWidth() {
        return JQXLite(this.componentSelector).jqxPanel('getScrollWidth');  
    };
    getHScrollPosition() {
        return JQXLite(this.componentSelector).jqxPanel('getHScrollPosition');  
    };
    prepend(HTMLElement) {
        JQXLite(this.componentSelector).jqxPanel('prepend', HTMLElement);  
    };
    remove(HTMLElement) {
        JQXLite(this.componentSelector).jqxPanel('remove', HTMLElement);  
    };
    scrollTo(top, left) {
        JQXLite(this.componentSelector).jqxPanel('scrollTo', top, left);  
    };
    render() {
        let id = 'jqxPanel' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

