/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxribbon.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxRibbon extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationType','animationDelay','disabled','height','initContent','mode','popupCloseMode','position','rtl','selectedIndex','selectionMode','scrollPosition','scrollStep','scrollDelay','theme','width'];
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
        JQXLite(this.componentSelector).jqxRibbon(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxRibbon('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxRibbon(arguments[i]);
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
            JQXLite(this.componentSelector).jqxRibbon('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('animationType');
        }
    };
    animationDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('animationDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('animationDelay');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('height');
        }
    };
    initContent(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('initContent', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('initContent');
        }
    };
    mode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('mode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('mode');
        }
    };
    popupCloseMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('popupCloseMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('popupCloseMode');
        }
    };
    position(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('position', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('position');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('rtl');
        }
    };
    selectedIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('selectedIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('selectedIndex');
        }
    };
    selectionMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('selectionMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('selectionMode');
        }
    };
    scrollPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('scrollPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('scrollPosition');
        }
    };
    scrollStep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('scrollStep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('scrollStep');
        }
    };
    scrollDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('scrollDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('scrollDelay');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('width');
        }
    };
    addAt(index, item) {
        JQXLite(this.componentSelector).jqxRibbon('addAt', index, item);  
    };
    clearSelection() {
        JQXLite(this.componentSelector).jqxRibbon('clearSelection');  
    };
    disableAt(index) {
        JQXLite(this.componentSelector).jqxRibbon('disableAt', index);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxRibbon('destroy');  
    };
    enableAt(index) {
        JQXLite(this.componentSelector).jqxRibbon('enableAt', index);  
    };
    hideAt(index) {
        JQXLite(this.componentSelector).jqxRibbon('hideAt', index);  
    };
    removeAt(index) {
        JQXLite(this.componentSelector).jqxRibbon('removeAt', index);  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxRibbon('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxRibbon('refresh');  
    };
    selectAt(index) {
        JQXLite(this.componentSelector).jqxRibbon('selectAt', index);  
    };
    showAt(index) {
        JQXLite(this.componentSelector).jqxRibbon('showAt', index);  
    };
    setPopupLayout(index, layout, width, height) {
        JQXLite(this.componentSelector).jqxRibbon('setPopupLayout', index, layout, width, height);  
    };
    updateAt(index, item) {
        JQXLite(this.componentSelector).jqxRibbon('updateAt', index, item);  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxRibbon('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxRibbon('val');
        }
    };

    render() {
        let id = 'jqxRibbon' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

