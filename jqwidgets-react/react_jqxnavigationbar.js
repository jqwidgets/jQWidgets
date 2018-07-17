/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxnavigationbar.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxNavigationBar extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expandAnimationDuration','expandMode','expandedIndexes','height','initContent','rtl','showArrow','theme','toggleMode','width'];
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
        JQXLite(this.componentSelector).jqxNavigationBar(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxNavigationBar('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxNavigationBar(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    animationType(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('animationType');
        }
    };
    arrowPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('arrowPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('arrowPosition');
        }
    };
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('collapseAnimationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('collapseAnimationDuration');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('disabled');
        }
    };
    expandAnimationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('expandAnimationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('expandAnimationDuration');
        }
    };
    expandMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('expandMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('expandMode');
        }
    };
    expandedIndexes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('expandedIndexes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('expandedIndexes');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('height');
        }
    };
    initContent(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('initContent', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('initContent');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('rtl');
        }
    };
    showArrow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('showArrow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('showArrow');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('theme');
        }
    };
    toggleMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('toggleMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('toggleMode');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('width');
        }
    };
    add(header, content) {
        JQXLite(this.componentSelector).jqxNavigationBar('add', header, content);  
    };
    collapseAt(index) {
        JQXLite(this.componentSelector).jqxNavigationBar('collapseAt', index);  
    };
    disableAt(index) {
        JQXLite(this.componentSelector).jqxNavigationBar('disableAt', index);  
    };
    disable() {
        JQXLite(this.componentSelector).jqxNavigationBar('disable');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxNavigationBar('destroy');  
    };
    expandAt(index) {
        JQXLite(this.componentSelector).jqxNavigationBar('expandAt', index);  
    };
    enableAt(index) {
        JQXLite(this.componentSelector).jqxNavigationBar('enableAt', index);  
    };
    enable() {
        JQXLite(this.componentSelector).jqxNavigationBar('enable');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxNavigationBar('focus');  
    };
    getHeaderContentAt(index) {
        return JQXLite(this.componentSelector).jqxNavigationBar('getHeaderContentAt', index);  
    };
    getContentAt(index) {
        return JQXLite(this.componentSelector).jqxNavigationBar('getContentAt', index);  
    };
    hideArrowAt(index) {
        JQXLite(this.componentSelector).jqxNavigationBar('hideArrowAt', index);  
    };
    invalidate() {
        JQXLite(this.componentSelector).jqxNavigationBar('invalidate');  
    };
    insert(Index, header, content) {
        JQXLite(this.componentSelector).jqxNavigationBar('insert', Index, header, content);  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxNavigationBar('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxNavigationBar('render');
    };
    remove(index) {
        JQXLite(this.componentSelector).jqxNavigationBar('remove', index);  
    };
    setContentAt(index, item) {
        JQXLite(this.componentSelector).jqxNavigationBar('setContentAt', index, item);  
    };
    setHeaderContentAt(index, item) {
        JQXLite(this.componentSelector).jqxNavigationBar('setHeaderContentAt', index, item);  
    };
    showArrowAt(index) {
        JQXLite(this.componentSelector).jqxNavigationBar('showArrowAt', index);  
    };
    update(index, header, content) {
        JQXLite(this.componentSelector).jqxNavigationBar('update', index, header, content);  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxNavigationBar('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxNavigationBar('val');
        }
    };

    render() {
        let id = 'jqxNavigationBar' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

