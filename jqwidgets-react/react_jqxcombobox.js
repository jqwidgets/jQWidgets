/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxComboBox extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationType','autoComplete','autoOpen','autoItemsHeight','autoDropDownHeight','closeDelay','checkboxes','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','enableHover','enableSelection','enableBrowserBoundsDetection','height','itemHeight','multiSelect','minLength','openDelay','popupZIndex','placeHolder','remoteAutoComplete','remoteAutoCompleteDelay','renderer','renderSelectedItem','rtl','selectedIndex','showArrow','showCloseButtons','searchMode','search','source','scrollBarSize','template','theme','validateSelection','valueMember','width'];
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
        JQXLite(this.componentSelector).jqxComboBox(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxComboBox('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxComboBox(arguments[i]);
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
            JQXLite(this.componentSelector).jqxComboBox('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('animationType');
        }
    };
    autoComplete(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('autoComplete', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('autoComplete');
        }
    };
    autoOpen(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('autoOpen', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('autoOpen');
        }
    };
    autoItemsHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('autoItemsHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('autoItemsHeight');
        }
    };
    autoDropDownHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('autoDropDownHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('autoDropDownHeight');
        }
    };
    closeDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('closeDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('closeDelay');
        }
    };
    checkboxes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('checkboxes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('checkboxes');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('disabled');
        }
    };
    displayMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('displayMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('displayMember');
        }
    };
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('dropDownHorizontalAlignment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('dropDownHorizontalAlignment');
        }
    };
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('dropDownVerticalAlignment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('dropDownVerticalAlignment');
        }
    };
    dropDownHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('dropDownHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('dropDownHeight');
        }
    };
    dropDownWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('dropDownWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('dropDownWidth');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('enableHover');
        }
    };
    enableSelection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('enableSelection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('enableSelection');
        }
    };
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('enableBrowserBoundsDetection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('enableBrowserBoundsDetection');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('height');
        }
    };
    itemHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('itemHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('itemHeight');
        }
    };
    multiSelect(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('multiSelect', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('multiSelect');
        }
    };
    minLength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('minLength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('minLength');
        }
    };
    openDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('openDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('openDelay');
        }
    };
    popupZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('popupZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('popupZIndex');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('placeHolder');
        }
    };
    remoteAutoComplete(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('remoteAutoComplete', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('remoteAutoComplete');
        }
    };
    remoteAutoCompleteDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('remoteAutoCompleteDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('remoteAutoCompleteDelay');
        }
    };
    renderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('renderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('renderer');
        }
    };
    renderSelectedItem(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('renderSelectedItem', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('renderSelectedItem');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('rtl');
        }
    };
    selectedIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('selectedIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('selectedIndex');
        }
    };
    showArrow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('showArrow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('showArrow');
        }
    };
    showCloseButtons(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('showCloseButtons', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('showCloseButtons');
        }
    };
    searchMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('searchMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('searchMode');
        }
    };
    search(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('search', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('search');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('source');
        }
    };
    scrollBarSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('scrollBarSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('scrollBarSize');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('template');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('theme');
        }
    };
    validateSelection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('validateSelection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('validateSelection');
        }
    };
    valueMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('valueMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('valueMember');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('width');
        }
    };
    addItem(item) {
        return JQXLite(this.componentSelector).jqxComboBox('addItem', item);  
    };
    clearSelection() {
        JQXLite(this.componentSelector).jqxComboBox('clearSelection');  
    };
    clear() {
        JQXLite(this.componentSelector).jqxComboBox('clear');  
    };
    close() {
        JQXLite(this.componentSelector).jqxComboBox('close');  
    };
    checkIndex(index) {
        JQXLite(this.componentSelector).jqxComboBox('checkIndex', index);  
    };
    checkItem(item) {
        JQXLite(this.componentSelector).jqxComboBox('checkItem', item);  
    };
    checkAll() {
        JQXLite(this.componentSelector).jqxComboBox('checkAll');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxComboBox('destroy');  
    };
    disableItem(item) {
        JQXLite(this.componentSelector).jqxComboBox('disableItem', item);  
    };
    disableAt(index) {
        JQXLite(this.componentSelector).jqxComboBox('disableAt', index);  
    };
    enableItem(item) {
        JQXLite(this.componentSelector).jqxComboBox('enableItem', item);  
    };
    enableAt(index) {
        JQXLite(this.componentSelector).jqxComboBox('enableAt', index);  
    };
    ensureVisible(index) {
        JQXLite(this.componentSelector).jqxComboBox('ensureVisible', index);  
    };
    focus() {
        JQXLite(this.componentSelector).jqxComboBox('focus');  
    };
    getItem(index) {
        return JQXLite(this.componentSelector).jqxComboBox('getItem', index);  
    };
    getItemByValue(value) {
        return JQXLite(this.componentSelector).jqxComboBox('getItemByValue', value);  
    };
    getVisibleItems() {
        return JQXLite(this.componentSelector).jqxComboBox('getVisibleItems');  
    };
    getItems() {
        return JQXLite(this.componentSelector).jqxComboBox('getItems');  
    };
    getCheckedItems() {
        return JQXLite(this.componentSelector).jqxComboBox('getCheckedItems');  
    };
    getSelectedItem() {
        return JQXLite(this.componentSelector).jqxComboBox('getSelectedItem');  
    };
    getSelectedItems() {
        return JQXLite(this.componentSelector).jqxComboBox('getSelectedItems');  
    };
    getSelectedIndex() {
        return JQXLite(this.componentSelector).jqxComboBox('getSelectedIndex');  
    };
    insertAt(item, index) {
        return JQXLite(this.componentSelector).jqxComboBox('insertAt', item, index);  
    };
    isOpened() {
        return JQXLite(this.componentSelector).jqxComboBox('isOpened');  
    };
    indeterminateIndex(index) {
        JQXLite(this.componentSelector).jqxComboBox('indeterminateIndex', index);  
    };
    indeterminateItem(item) {
        JQXLite(this.componentSelector).jqxComboBox('indeterminateItem', item);  
    };
    loadFromSelect(selectTagId) {
        JQXLite(this.componentSelector).jqxComboBox('loadFromSelect', selectTagId);  
    };
    open() {
        JQXLite(this.componentSelector).jqxComboBox('open');  
    };
    removeItem(item) {
        return JQXLite(this.componentSelector).jqxComboBox('removeItem', item);  
    };
    removeAt(index) {
        return JQXLite(this.componentSelector).jqxComboBox('removeAt', index);  
    };
    selectIndex(index) {
        JQXLite(this.componentSelector).jqxComboBox('selectIndex', index);  
    };
    selectItem(item) {
        JQXLite(this.componentSelector).jqxComboBox('selectItem', item);  
    };
    searchString() {
        return JQXLite(this.componentSelector).jqxComboBox('searchString');  
    };
    updateItem(item, itemValue) {
        JQXLite(this.componentSelector).jqxComboBox('updateItem', item, itemValue);  
    };
    updateAt(item, index) {
        JQXLite(this.componentSelector).jqxComboBox('updateAt', item, index);  
    };
    unselectIndex(index) {
        JQXLite(this.componentSelector).jqxComboBox('unselectIndex', index);  
    };
    unselectItem(item) {
        JQXLite(this.componentSelector).jqxComboBox('unselectItem', item);  
    };
    uncheckIndex(index) {
        JQXLite(this.componentSelector).jqxComboBox('uncheckIndex', index);  
    };
    uncheckItem(item) {
        JQXLite(this.componentSelector).jqxComboBox('uncheckItem', item);  
    };
    uncheckAll() {
        JQXLite(this.componentSelector).jqxComboBox('uncheckAll');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxComboBox('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxComboBox('val');
        }
    };

    render() {
        let id = 'jqxComboBox' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

