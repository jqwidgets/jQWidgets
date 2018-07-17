/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxresponsivepanel.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxResponsivePanel extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationDirection','animationHideDelay','animationShowDelay','animationType','autoClose','collapseBreakpoint','collapseWidth','height','initContent','theme','toggleButton','toggleButtonSize','width'];
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
        JQXLite(this.componentSelector).jqxResponsivePanel(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxResponsivePanel('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxResponsivePanel(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    animationDirection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('animationDirection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('animationDirection');
        }
    };
    animationHideDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('animationHideDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('animationHideDelay');
        }
    };
    animationShowDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('animationShowDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('animationShowDelay');
        }
    };
    animationType(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('animationType');
        }
    };
    autoClose(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('autoClose', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('autoClose');
        }
    };
    collapseBreakpoint(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('collapseBreakpoint', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('collapseBreakpoint');
        }
    };
    collapseWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('collapseWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('collapseWidth');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('height');
        }
    };
    initContent(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('initContent', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('initContent');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('theme');
        }
    };
    toggleButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('toggleButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('toggleButton');
        }
    };
    toggleButtonSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('toggleButtonSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('toggleButtonSize');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxResponsivePanel('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxResponsivePanel('width');
        }
    };
    close() {
        JQXLite(this.componentSelector).jqxResponsivePanel('close');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxResponsivePanel('destroy');  
    };
    isCollapsed() {
        return JQXLite(this.componentSelector).jqxResponsivePanel('isCollapsed');  
    };
    isOpened() {
        return JQXLite(this.componentSelector).jqxResponsivePanel('isOpened');  
    };
    open() {
        JQXLite(this.componentSelector).jqxResponsivePanel('open');  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxResponsivePanel('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxResponsivePanel('render');
    };
    render() {
        let id = 'jqxResponsivePanel' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

