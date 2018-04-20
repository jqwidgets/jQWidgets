/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxDropDownList extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['autoOpen','autoDropDownHeight','animationType','checkboxes','closeDelay','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','enableSelection','enableBrowserBoundsDetection','enableHover','filterable','filterHeight','filterDelay','filterPlaceHolder','height','incrementalSearch','incrementalSearchDelay','itemHeight','openDelay','placeHolder','popupZIndex','rtl','renderer','selectionRenderer','searchMode','scrollBarSize','source','selectedIndex','theme','template','valueMember','width'];
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
        JQXLite(this.componentSelector).jqxDropDownList(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxDropDownList('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDropDownList(arguments[i]);
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
            JQXLite(this.componentSelector).jqxDropDownList('autoOpen', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('autoOpen');
        }
    };
    autoDropDownHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('autoDropDownHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('autoDropDownHeight');
        }
    };
    animationType(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('animationType');
        }
    };
    checkboxes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('checkboxes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('checkboxes');
        }
    };
    closeDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('closeDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('closeDelay');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('disabled');
        }
    };
    displayMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('displayMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('displayMember');
        }
    };
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('dropDownHorizontalAlignment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('dropDownHorizontalAlignment');
        }
    };
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('dropDownVerticalAlignment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('dropDownVerticalAlignment');
        }
    };
    dropDownHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('dropDownHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('dropDownHeight');
        }
    };
    dropDownWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('dropDownWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('dropDownWidth');
        }
    };
    enableSelection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('enableSelection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('enableSelection');
        }
    };
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('enableBrowserBoundsDetection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('enableBrowserBoundsDetection');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('enableHover');
        }
    };
    filterable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('filterable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('filterable');
        }
    };
    filterHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('filterHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('filterHeight');
        }
    };
    filterDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('filterDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('filterDelay');
        }
    };
    filterPlaceHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('filterPlaceHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('filterPlaceHolder');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('height');
        }
    };
    incrementalSearch(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('incrementalSearch', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('incrementalSearch');
        }
    };
    incrementalSearchDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('incrementalSearchDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('incrementalSearchDelay');
        }
    };
    itemHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('itemHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('itemHeight');
        }
    };
    openDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('openDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('openDelay');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('placeHolder');
        }
    };
    popupZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('popupZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('popupZIndex');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('rtl');
        }
    };
    renderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('renderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('renderer');
        }
    };
    selectionRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('selectionRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('selectionRenderer');
        }
    };
    searchMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('searchMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('searchMode');
        }
    };
    scrollBarSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('scrollBarSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('scrollBarSize');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('source');
        }
    };
    selectedIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('selectedIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('selectedIndex');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('theme');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('template');
        }
    };
    valueMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('valueMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('valueMember');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('width');
        }
    };
    addItem(item) {
        return JQXLite(this.componentSelector).jqxDropDownList('addItem', item);  
    };
    clearSelection() {
        JQXLite(this.componentSelector).jqxDropDownList('clearSelection');  
    };
    clear() {
        JQXLite(this.componentSelector).jqxDropDownList('clear');  
    };
    close() {
        JQXLite(this.componentSelector).jqxDropDownList('close');  
    };
    checkIndex(index) {
        JQXLite(this.componentSelector).jqxDropDownList('checkIndex', index);  
    };
    checkItem(item) {
        JQXLite(this.componentSelector).jqxDropDownList('checkItem', item);  
    };
    checkAll() {
        JQXLite(this.componentSelector).jqxDropDownList('checkAll');  
    };
    clearFilter() {
        JQXLite(this.componentSelector).jqxDropDownList('clearFilter');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxDropDownList('destroy');  
    };
    disableItem(item) {
        JQXLite(this.componentSelector).jqxDropDownList('disableItem', item);  
    };
    disableAt(index) {
        JQXLite(this.componentSelector).jqxDropDownList('disableAt', index);  
    };
    enableItem(item) {
        JQXLite(this.componentSelector).jqxDropDownList('enableItem', item);  
    };
    enableAt(index) {
        JQXLite(this.componentSelector).jqxDropDownList('enableAt', index);  
    };
    ensureVisible(index) {
        JQXLite(this.componentSelector).jqxDropDownList('ensureVisible', index);  
    };
    focus() {
        JQXLite(this.componentSelector).jqxDropDownList('focus');  
    };
    getItem(index) {
        return JQXLite(this.componentSelector).jqxDropDownList('getItem', index);  
    };
    getItemByValue(itemValue) {
        return JQXLite(this.componentSelector).jqxDropDownList('getItemByValue', itemValue);  
    };
    getItems() {
        return JQXLite(this.componentSelector).jqxDropDownList('getItems');  
    };
    getCheckedItems() {
        return JQXLite(this.componentSelector).jqxDropDownList('getCheckedItems');  
    };
    getSelectedItem() {
        return JQXLite(this.componentSelector).jqxDropDownList('getSelectedItem');  
    };
    getSelectedIndex() {
        return JQXLite(this.componentSelector).jqxDropDownList('getSelectedIndex');  
    };
    insertAt(item, index) {
        JQXLite(this.componentSelector).jqxDropDownList('insertAt', item, index);  
    };
    isOpened() {
        return JQXLite(this.componentSelector).jqxDropDownList('isOpened');  
    };
    indeterminateIndex(index) {
        JQXLite(this.componentSelector).jqxDropDownList('indeterminateIndex', index);  
    };
    indeterminateItem(item) {
        JQXLite(this.componentSelector).jqxDropDownList('indeterminateItem', item);  
    };
    loadFromSelect(arg) {
        JQXLite(this.componentSelector).jqxDropDownList('loadFromSelect', arg);  
    };
    open() {
        JQXLite(this.componentSelector).jqxDropDownList('open');  
    };
    removeItem(item) {
        JQXLite(this.componentSelector).jqxDropDownList('removeItem', item);  
    };
    removeAt(index) {
        JQXLite(this.componentSelector).jqxDropDownList('removeAt', index);  
    };
    selectIndex(index) {
        JQXLite(this.componentSelector).jqxDropDownList('selectIndex', index);  
    };
    selectItem(item) {
        JQXLite(this.componentSelector).jqxDropDownList('selectItem', item);  
    };
    setContent(content) {
        JQXLite(this.componentSelector).jqxDropDownList('setContent', content);  
    };
    updateItem(newItem, item) {
        JQXLite(this.componentSelector).jqxDropDownList('updateItem', newItem, item);  
    };
    updateAt(item, index) {
        JQXLite(this.componentSelector).jqxDropDownList('updateAt', item, index);  
    };
    unselectIndex(index) {
        JQXLite(this.componentSelector).jqxDropDownList('unselectIndex', index);  
    };
    unselectItem(item) {
        JQXLite(this.componentSelector).jqxDropDownList('unselectItem', item);  
    };
    uncheckIndex(index) {
        JQXLite(this.componentSelector).jqxDropDownList('uncheckIndex', index);  
    };
    uncheckItem(item) {
        JQXLite(this.componentSelector).jqxDropDownList('uncheckItem', item);  
    };
    uncheckAll() {
        JQXLite(this.componentSelector).jqxDropDownList('uncheckAll');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownList('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownList('val');
        }
    };

    render() {
        let id = 'jqxDropDownList' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

