/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxDocking extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['cookies','cookieOptions','disabled','floatingWindowOpacity','height','keyboardNavigation','mode','orientation','rtl','theme','width','windowsMode','windowsOffset'];
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
        JQXLite(this.componentSelector).jqxDocking(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxDocking('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDocking(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    cookies(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('cookies', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('cookies');
        }
    };
    cookieOptions(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('cookieOptions', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('cookieOptions');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('disabled');
        }
    };
    floatingWindowOpacity(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('floatingWindowOpacity', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('floatingWindowOpacity');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('height');
        }
    };
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('keyboardNavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('keyboardNavigation');
        }
    };
    mode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('mode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('mode');
        }
    };
    orientation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('orientation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('orientation');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('rtl');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('width');
        }
    };
    windowsMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('windowsMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('windowsMode');
        }
    };
    windowsOffset(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDocking('windowsOffset', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDocking('windowsOffset');
        }
    };
    addWindow(windowId, mode, panel, position) {
        JQXLite(this.componentSelector).jqxDocking('addWindow', windowId, mode, panel, position);  
    };
    closeWindow(windowId) {
        JQXLite(this.componentSelector).jqxDocking('closeWindow', windowId);  
    };
    collapseWindow(windowId) {
        JQXLite(this.componentSelector).jqxDocking('collapseWindow', windowId);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxDocking('destroy');  
    };
    disableWindowResize(windowId) {
        JQXLite(this.componentSelector).jqxDocking('disableWindowResize', windowId);  
    };
    disable() {
        JQXLite(this.componentSelector).jqxDocking('disable');  
    };
    exportLayout() {
        return JQXLite(this.componentSelector).jqxDocking('exportLayout');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxDocking('enable');  
    };
    expandWindow(windowId) {
        JQXLite(this.componentSelector).jqxDocking('expandWindow', windowId);  
    };
    enableWindowResize(windowId) {
        JQXLite(this.componentSelector).jqxDocking('enableWindowResize', windowId);  
    };
    focus() {
        JQXLite(this.componentSelector).jqxDocking('focus');  
    };
    hideAllCloseButtons() {
        JQXLite(this.componentSelector).jqxDocking('hideAllCloseButtons');  
    };
    hideAllCollapseButtons() {
        JQXLite(this.componentSelector).jqxDocking('hideAllCollapseButtons');  
    };
    hideCollapseButton(windowId) {
        JQXLite(this.componentSelector).jqxDocking('hideCollapseButton', windowId);  
    };
    hideCloseButton(windowId) {
        JQXLite(this.componentSelector).jqxDocking('hideCloseButton', windowId);  
    };
    importLayout(Json) {
        JQXLite(this.componentSelector).jqxDocking('importLayout', Json);  
    };
    move(windowId, panel, position) {
        JQXLite(this.componentSelector).jqxDocking('move', windowId, panel, position);  
    };
    pinWindow(windowId) {
        JQXLite(this.componentSelector).jqxDocking('pinWindow', windowId);  
    };
    setWindowMode(windowId, mode) {
        JQXLite(this.componentSelector).jqxDocking('setWindowMode', windowId, mode);  
    };
    showCloseButton(windowId) {
        JQXLite(this.componentSelector).jqxDocking('showCloseButton', windowId);  
    };
    showCollapseButton(windowId) {
        JQXLite(this.componentSelector).jqxDocking('showCollapseButton', windowId);  
    };
    setWindowPosition(windowId, top, left) {
        JQXLite(this.componentSelector).jqxDocking('setWindowPosition', windowId, top, left);  
    };
    showAllCloseButtons() {
        JQXLite(this.componentSelector).jqxDocking('showAllCloseButtons');  
    };
    showAllCollapseButtons() {
        JQXLite(this.componentSelector).jqxDocking('showAllCollapseButtons');  
    };
    unpinWindow(windowId) {
        JQXLite(this.componentSelector).jqxDocking('unpinWindow', windowId);  
    };
    render() {
        let id = 'jqxDocking' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

