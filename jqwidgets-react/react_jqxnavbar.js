/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxnavbar.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxNavBar extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['columns','disabled','height','minimized','minimizeButtonPosition','minimizedHeight','minimizedTitle','orientation','popupAnimationDelay','rtl','selection','selectedItem','theme','width'];
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
        JQXLite(this.componentSelector).jqxNavBar(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxNavBar('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxNavBar(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    columns(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('columns', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('columns');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('height');
        }
    };
    minimized(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('minimized', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('minimized');
        }
    };
    minimizeButtonPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('minimizeButtonPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('minimizeButtonPosition');
        }
    };
    minimizedHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('minimizedHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('minimizedHeight');
        }
    };
    minimizedTitle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('minimizedTitle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('minimizedTitle');
        }
    };
    orientation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('orientation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('orientation');
        }
    };
    popupAnimationDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('popupAnimationDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('popupAnimationDelay');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('rtl');
        }
    };
    selection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('selection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('selection');
        }
    };
    selectedItem(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('selectedItem', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('selectedItem');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavBar('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavBar('width');
        }
    };
    close() {
        JQXLite(this.componentSelector).jqxNavBar('close');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxNavBar('destroy');  
    };
    getSelectedIndex() {
        return JQXLite(this.componentSelector).jqxNavBar('getSelectedIndex');  
    };
    open() {
        JQXLite(this.componentSelector).jqxNavBar('open');  
    };
    selectAt(index) {
        JQXLite(this.componentSelector).jqxNavBar('selectAt', index);  
    };
    render() {
        let id = 'jqxNavBar' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

