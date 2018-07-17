/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxmenu.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxMenu extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationShowDuration','animationHideDuration','animationHideDelay','animationShowDelay','autoCloseInterval','autoSizeMainItems','autoCloseOnClick','autoOpenPopup','autoOpen','autoCloseOnMouseLeave','clickToOpen','disabled','enableHover','easing','height','keyboardNavigation','minimizeWidth','mode','popupZIndex','rtl','showTopLevelArrows','source','theme','width'];
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
        JQXLite(this.componentSelector).jqxMenu(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxMenu('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxMenu(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    animationShowDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('animationShowDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('animationShowDuration');
        }
    };
    animationHideDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('animationHideDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('animationHideDuration');
        }
    };
    animationHideDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('animationHideDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('animationHideDelay');
        }
    };
    animationShowDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('animationShowDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('animationShowDelay');
        }
    };
    autoCloseInterval(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('autoCloseInterval', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('autoCloseInterval');
        }
    };
    autoSizeMainItems(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('autoSizeMainItems', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('autoSizeMainItems');
        }
    };
    autoCloseOnClick(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('autoCloseOnClick', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('autoCloseOnClick');
        }
    };
    autoOpenPopup(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('autoOpenPopup', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('autoOpenPopup');
        }
    };
    autoOpen(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('autoOpen', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('autoOpen');
        }
    };
    autoCloseOnMouseLeave(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('autoCloseOnMouseLeave', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('autoCloseOnMouseLeave');
        }
    };
    clickToOpen(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('clickToOpen', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('clickToOpen');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('disabled');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('enableHover');
        }
    };
    easing(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('easing', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('easing');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('height');
        }
    };
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('keyboardNavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('keyboardNavigation');
        }
    };
    minimizeWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('minimizeWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('minimizeWidth');
        }
    };
    mode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('mode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('mode');
        }
    };
    popupZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('popupZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('popupZIndex');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('rtl');
        }
    };
    showTopLevelArrows(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('showTopLevelArrows', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('showTopLevelArrows');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('source');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxMenu('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxMenu('width');
        }
    };
    closeItem(itemID) {
        JQXLite(this.componentSelector).jqxMenu('closeItem', itemID);  
    };
    close() {
        JQXLite(this.componentSelector).jqxMenu('close');  
    };
    disable(itemID, value) {
        JQXLite(this.componentSelector).jqxMenu('disable', itemID, value);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxMenu('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxMenu('focus');  
    };
    minimize() {
        JQXLite(this.componentSelector).jqxMenu('minimize');  
    };
    open(left, top) {
        JQXLite(this.componentSelector).jqxMenu('open', left, top);  
    };
    openItem(itemID) {
        JQXLite(this.componentSelector).jqxMenu('openItem', itemID);  
    };
    restore() {
        JQXLite(this.componentSelector).jqxMenu('restore');  
    };
    setItemOpenDirection(item, horizontaldirection, verticaldirection) {
        JQXLite(this.componentSelector).jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);  
    };
    render() {
        let id = 'jqxMenu' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

