/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxSplitter extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','height','orientation','panels','resizable','splitBarSize','showSplitBar','theme','width'];
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
        JQXLite(this.componentSelector).jqxSplitter(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxSplitter('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxSplitter(arguments[i]);
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
            JQXLite(this.componentSelector).jqxSplitter('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSplitter('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('height');
        }
    };
    orientation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSplitter('orientation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('orientation');
        }
    };
    panels(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSplitter('panels', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('panels');
        }
    };
    resizable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSplitter('resizable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('resizable');
        }
    };
    splitBarSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSplitter('splitBarSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('splitBarSize');
        }
    };
    showSplitBar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSplitter('showSplitBar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('showSplitBar');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSplitter('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSplitter('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSplitter('width');
        }
    };
    collapse() {
        JQXLite(this.componentSelector).jqxSplitter('collapse');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxSplitter('destroy');  
    };
    disable() {
        JQXLite(this.componentSelector).jqxSplitter('disable');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxSplitter('enable');  
    };
    expand() {
        JQXLite(this.componentSelector).jqxSplitter('expand');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxSplitter('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxSplitter('refresh');  
    };
    render() {
        let id = 'jqxSplitter' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

