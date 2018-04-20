/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxTabs extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationType','autoHeight','closeButtonSize','collapsible','contentTransitionDuration','disabled','enabledHover','enableScrollAnimation','enableDropAnimation','height','initTabContent','keyboardNavigation','next','previous','position','reorder','rtl','scrollAnimationDuration','selectedItem','selectionTracker','scrollable','scrollPosition','scrollStep','showCloseButtons','toggleMode','theme','width'];
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
        JQXLite(this.componentSelector).jqxTabs(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxTabs('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxTabs(arguments[i]);
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
            JQXLite(this.componentSelector).jqxTabs('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('animationType');
        }
    };
    autoHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('autoHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('autoHeight');
        }
    };
    closeButtonSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('closeButtonSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('closeButtonSize');
        }
    };
    collapsible(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('collapsible', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('collapsible');
        }
    };
    contentTransitionDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('contentTransitionDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('contentTransitionDuration');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('disabled');
        }
    };
    enabledHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('enabledHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('enabledHover');
        }
    };
    enableScrollAnimation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('enableScrollAnimation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('enableScrollAnimation');
        }
    };
    enableDropAnimation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('enableDropAnimation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('enableDropAnimation');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('height');
        }
    };
    initTabContent(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('initTabContent', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('initTabContent');
        }
    };
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('keyboardNavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('keyboardNavigation');
        }
    };
    next(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('next', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('next');
        }
    };
    previous(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('previous', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('previous');
        }
    };
    position(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('position', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('position');
        }
    };
    reorder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('reorder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('reorder');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('rtl');
        }
    };
    scrollAnimationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('scrollAnimationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('scrollAnimationDuration');
        }
    };
    selectedItem(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('selectedItem', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('selectedItem');
        }
    };
    selectionTracker(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('selectionTracker', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('selectionTracker');
        }
    };
    scrollable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('scrollable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('scrollable');
        }
    };
    scrollPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('scrollPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('scrollPosition');
        }
    };
    scrollStep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('scrollStep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('scrollStep');
        }
    };
    showCloseButtons(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('showCloseButtons', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('showCloseButtons');
        }
    };
    toggleMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('toggleMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('toggleMode');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('width');
        }
    };
    addAt(index, title, content) {
        JQXLite(this.componentSelector).jqxTabs('addAt', index, title, content);  
    };
    addFirst(htmlElement) {
        JQXLite(this.componentSelector).jqxTabs('addFirst', htmlElement);  
    };
    addLast(htmlElement1, htmlElemen2t) {
        JQXLite(this.componentSelector).jqxTabs('addLast', htmlElement1, htmlElemen2t);  
    };
    collapse() {
        JQXLite(this.componentSelector).jqxTabs('collapse');  
    };
    disable() {
        JQXLite(this.componentSelector).jqxTabs('disable');  
    };
    disableAt(index) {
        JQXLite(this.componentSelector).jqxTabs('disableAt', index);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxTabs('destroy');  
    };
    ensureVisible(index) {
        JQXLite(this.componentSelector).jqxTabs('ensureVisible', index);  
    };
    enableAt(index) {
        JQXLite(this.componentSelector).jqxTabs('enableAt', index);  
    };
    expand() {
        JQXLite(this.componentSelector).jqxTabs('expand');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxTabs('enable');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxTabs('focus');  
    };
    getTitleAt(index) {
        return JQXLite(this.componentSelector).jqxTabs('getTitleAt', index);  
    };
    getContentAt(index) {
        return JQXLite(this.componentSelector).jqxTabs('getContentAt', index);  
    };
    getDisabledTabsCount() {
        return JQXLite(this.componentSelector).jqxTabs('getDisabledTabsCount');  
    };
    hideCloseButtonAt(index) {
        JQXLite(this.componentSelector).jqxTabs('hideCloseButtonAt', index);  
    };
    hideAllCloseButtons() {
        JQXLite(this.componentSelector).jqxTabs('hideAllCloseButtons');  
    };
    length() {
        return JQXLite(this.componentSelector).jqxTabs('length');  
    };
    removeAt(index) {
        JQXLite(this.componentSelector).jqxTabs('removeAt', index);  
    };
    removeFirst() {
        JQXLite(this.componentSelector).jqxTabs('removeFirst');  
    };
    removeLast() {
        JQXLite(this.componentSelector).jqxTabs('removeLast');  
    };
    select(index) {
        JQXLite(this.componentSelector).jqxTabs('select', index);  
    };
    setContentAt(index, htmlElement) {
        JQXLite(this.componentSelector).jqxTabs('setContentAt', index, htmlElement);  
    };
    setTitleAt(index, htmlElement) {
        JQXLite(this.componentSelector).jqxTabs('setTitleAt', index, htmlElement);  
    };
    showCloseButtonAt(index) {
        JQXLite(this.componentSelector).jqxTabs('showCloseButtonAt', index);  
    };
    showAllCloseButtons() {
        JQXLite(this.componentSelector).jqxTabs('showAllCloseButtons');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxTabs('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxTabs('val');
        }
    };

    render() {
        let id = 'jqxTabs' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

