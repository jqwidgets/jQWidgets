/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxribbon.js';
import '../jqwidgets/jqxlayout.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxLayout extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['contextMenu','height','layout','minGroupHeight','minGroupWidth','resizable','rtl','theme','width'];
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
        JQXLite(this.componentSelector).jqxLayout(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxLayout('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxLayout(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    contextMenu(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('contextMenu', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('contextMenu');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('height');
        }
    };
    layout(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('layout', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('layout');
        }
    };
    minGroupHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('minGroupHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('minGroupHeight');
        }
    };
    minGroupWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('minGroupWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('minGroupWidth');
        }
    };
    resizable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('resizable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('resizable');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('rtl');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLayout('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLayout('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxLayout('destroy');  
    };
    loadLayout(Layout) {
        JQXLite(this.componentSelector).jqxLayout('loadLayout', Layout);  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxLayout('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxLayout('render');
    };
    saveLayout() {
        return JQXLite(this.componentSelector).jqxLayout('saveLayout');  
    };
    render() {
        let id = 'jqxLayout' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

