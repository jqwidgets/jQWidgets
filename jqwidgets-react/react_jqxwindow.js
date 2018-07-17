/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxwindow.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxWindow extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['autoOpen','animationType','collapsed','collapseAnimationDuration','content','closeAnimationDuration','closeButtonSize','closeButtonAction','cancelButton','dragArea','draggable','disabled','height','initContent','isModal','keyboardCloseKey','keyboardNavigation','minHeight','maxHeight','minWidth','maxWidth','modalOpacity','modalZIndex','modalBackgroundZIndex','okButton','position','rtl','resizable','showAnimationDuration','showCloseButton','showCollapseButton','theme','title','width','zIndex'];
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
        JQXLite(this.componentSelector).jqxWindow(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxWindow('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxWindow(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    autoOpen(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('autoOpen', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('autoOpen');
        }
    };
    animationType(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('animationType');
        }
    };
    collapsed(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('collapsed', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('collapsed');
        }
    };
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('collapseAnimationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('collapseAnimationDuration');
        }
    };
    content(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('content', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('content');
        }
    };
    closeAnimationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('closeAnimationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('closeAnimationDuration');
        }
    };
    closeButtonSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('closeButtonSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('closeButtonSize');
        }
    };
    closeButtonAction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('closeButtonAction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('closeButtonAction');
        }
    };
    cancelButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('cancelButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('cancelButton');
        }
    };
    dragArea(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('dragArea', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('dragArea');
        }
    };
    draggable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('draggable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('draggable');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('height');
        }
    };
    initContent(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('initContent', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('initContent');
        }
    };
    isModal(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('isModal', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('isModal');
        }
    };
    keyboardCloseKey(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('keyboardCloseKey', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('keyboardCloseKey');
        }
    };
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('keyboardNavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('keyboardNavigation');
        }
    };
    minHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('minHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('minHeight');
        }
    };
    maxHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('maxHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('maxHeight');
        }
    };
    minWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('minWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('minWidth');
        }
    };
    maxWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('maxWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('maxWidth');
        }
    };
    modalOpacity(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('modalOpacity', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('modalOpacity');
        }
    };
    modalZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('modalZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('modalZIndex');
        }
    };
    modalBackgroundZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('modalBackgroundZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('modalBackgroundZIndex');
        }
    };
    okButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('okButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('okButton');
        }
    };
    position(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('position', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('position');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('rtl');
        }
    };
    resizable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('resizable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('resizable');
        }
    };
    showAnimationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('showAnimationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('showAnimationDuration');
        }
    };
    showCloseButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('showCloseButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('showCloseButton');
        }
    };
    showCollapseButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('showCollapseButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('showCollapseButton');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('theme');
        }
    };
    title(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('title', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('title');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('width');
        }
    };
    zIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxWindow('zIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxWindow('zIndex');
        }
    };
    bringToFront() {
        JQXLite(this.componentSelector).jqxWindow('bringToFront');  
    };
    close() {
        JQXLite(this.componentSelector).jqxWindow('close');  
    };
    collapse() {
        JQXLite(this.componentSelector).jqxWindow('collapse');  
    };
    closeAll() {
        JQXLite(this.componentSelector).jqxWindow('closeAll');  
    };
    disable() {
        JQXLite(this.componentSelector).jqxWindow('disable');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxWindow('destroy');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxWindow('enable');  
    };
    expand() {
        JQXLite(this.componentSelector).jqxWindow('expand');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxWindow('focus');  
    };
    isOpen() {
        return JQXLite(this.componentSelector).jqxWindow('isOpen');  
    };
    move(top, left) {
        JQXLite(this.componentSelector).jqxWindow('move', top, left);  
    };
    open() {
        JQXLite(this.componentSelector).jqxWindow('open');  
    };
    hide() {
        JQXLite(this.componentSelector).jqxWindow('hide');  
    };
    resize(top, left) {
        JQXLite(this.componentSelector).jqxWindow('resize', top, left);  
    };
    setTitle(title) {
        JQXLite(this.componentSelector).jqxWindow('setTitle', title);  
    };
    setContent(content) {
        JQXLite(this.componentSelector).jqxWindow('setContent', content);  
    };
    render() {
        let id = 'jqxWindow' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

