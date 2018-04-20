/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxTree extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationShowDuration','animationHideDuration','allowDrag','allowDrop','checkboxes','dragStart','dragEnd','disabled','easing','enableHover','height','hasThreeStates','incrementalSearch','keyboardNavigation','rtl','selectedItem','source','toggleIndicatorSize','toggleMode','theme','width'];
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
        JQXLite(this.componentSelector).jqxTree(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxTree('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxTree(arguments[i]);
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
            JQXLite(this.componentSelector).jqxTree('animationShowDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('animationShowDuration');
        }
    };
    animationHideDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('animationHideDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('animationHideDuration');
        }
    };
    allowDrag(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('allowDrag', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('allowDrag');
        }
    };
    allowDrop(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('allowDrop', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('allowDrop');
        }
    };
    checkboxes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('checkboxes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('checkboxes');
        }
    };
    dragStart(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('dragStart', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('dragStart');
        }
    };
    dragEnd(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('dragEnd', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('dragEnd');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('disabled');
        }
    };
    easing(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('easing', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('easing');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('enableHover');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('height');
        }
    };
    hasThreeStates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('hasThreeStates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('hasThreeStates');
        }
    };
    incrementalSearch(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('incrementalSearch', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('incrementalSearch');
        }
    };
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('keyboardNavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('keyboardNavigation');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('rtl');
        }
    };
    selectedItem(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('selectedItem', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('selectedItem');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('source');
        }
    };
    toggleIndicatorSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('toggleIndicatorSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('toggleIndicatorSize');
        }
    };
    toggleMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('toggleMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('toggleMode');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTree('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTree('width');
        }
    };
    addBefore(item, id) {
        JQXLite(this.componentSelector).jqxTree('addBefore', item, id);  
    };
    addAfter(item, id) {
        JQXLite(this.componentSelector).jqxTree('addAfter', item, id);  
    };
    addTo(item, id) {
        JQXLite(this.componentSelector).jqxTree('addTo', item, id);  
    };
    clear() {
        JQXLite(this.componentSelector).jqxTree('clear');  
    };
    checkAll() {
        JQXLite(this.componentSelector).jqxTree('checkAll');  
    };
    checkItem(item, checked) {
        JQXLite(this.componentSelector).jqxTree('checkItem', item, checked);  
    };
    collapseAll() {
        JQXLite(this.componentSelector).jqxTree('collapseAll');  
    };
    collapseItem(item) {
        JQXLite(this.componentSelector).jqxTree('collapseItem', item);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxTree('destroy');  
    };
    disableItem(item) {
        JQXLite(this.componentSelector).jqxTree('disableItem', item);  
    };
    ensureVisible(item) {
        JQXLite(this.componentSelector).jqxTree('ensureVisible', item);  
    };
    enableItem(item) {
        JQXLite(this.componentSelector).jqxTree('enableItem', item);  
    };
    enableAll() {
        JQXLite(this.componentSelector).jqxTree('enableAll');  
    };
    expandAll() {
        JQXLite(this.componentSelector).jqxTree('expandAll');  
    };
    expandItem(item) {
        JQXLite(this.componentSelector).jqxTree('expandItem', item);  
    };
    focus() {
        JQXLite(this.componentSelector).jqxTree('focus');  
    };
    getCheckedItems() {
        return JQXLite(this.componentSelector).jqxTree('getCheckedItems');  
    };
    getUncheckedItems() {
        return JQXLite(this.componentSelector).jqxTree('getUncheckedItems');  
    };
    getItems() {
        return JQXLite(this.componentSelector).jqxTree('getItems');  
    };
    getItem(element) {
        return JQXLite(this.componentSelector).jqxTree('getItem', element);  
    };
    getSelectedItem() {
        return JQXLite(this.componentSelector).jqxTree('getSelectedItem');  
    };
    getPrevItem() {
        return JQXLite(this.componentSelector).jqxTree('getPrevItem');  
    };
    getNextItem() {
        return JQXLite(this.componentSelector).jqxTree('getNextItem');  
    };
    hitTest(left, top) {
        return JQXLite(this.componentSelector).jqxTree('hitTest', left, top);  
    };
    removeItem(item) {
        JQXLite(this.componentSelector).jqxTree('removeItem', item);  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxTree('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxTree('refresh');  
    };
    selectItem(item) {
        JQXLite(this.componentSelector).jqxTree('selectItem', item);  
    };
    uncheckAll() {
        JQXLite(this.componentSelector).jqxTree('uncheckAll');  
    };
    uncheckItem(item) {
        JQXLite(this.componentSelector).jqxTree('uncheckItem', item);  
    };
    updateItem(item, newItem) {
        JQXLite(this.componentSelector).jqxTree('updateItem', item, newItem);  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxTree('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxTree('val');
        }
    };

    render() {
        let id = 'jqxTree' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

