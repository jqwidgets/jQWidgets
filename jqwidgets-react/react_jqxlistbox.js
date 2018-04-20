/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxListBox extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['autoHeight','allowDrag','allowDrop','checkboxes','disabled','displayMember','dropAction','dragStart','dragEnd','enableHover','enableSelection','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','height','hasThreeStates','itemHeight','incrementalSearch','incrementalSearchDelay','multiple','multipleextended','renderer','rendered','rtl','selectedIndex','selectedIndexes','source','scrollBarSize','searchMode','theme','valueMember','width'];
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
        JQXLite(this.componentSelector).jqxListBox(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxListBox('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxListBox(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    autoHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('autoHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('autoHeight');
        }
    };
    allowDrag(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('allowDrag', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('allowDrag');
        }
    };
    allowDrop(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('allowDrop', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('allowDrop');
        }
    };
    checkboxes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('checkboxes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('checkboxes');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('disabled');
        }
    };
    displayMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('displayMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('displayMember');
        }
    };
    dropAction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('dropAction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('dropAction');
        }
    };
    dragStart(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('dragStart', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('dragStart');
        }
    };
    dragEnd(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('dragEnd', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('dragEnd');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('enableHover');
        }
    };
    enableSelection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('enableSelection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('enableSelection');
        }
    };
    equalItemsWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('equalItemsWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('equalItemsWidth');
        }
    };
    filterable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('filterable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('filterable');
        }
    };
    filterHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('filterHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('filterHeight');
        }
    };
    filterDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('filterDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('filterDelay');
        }
    };
    filterPlaceHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('filterPlaceHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('filterPlaceHolder');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('height');
        }
    };
    hasThreeStates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('hasThreeStates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('hasThreeStates');
        }
    };
    itemHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('itemHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('itemHeight');
        }
    };
    incrementalSearch(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('incrementalSearch', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('incrementalSearch');
        }
    };
    incrementalSearchDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('incrementalSearchDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('incrementalSearchDelay');
        }
    };
    multiple(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('multiple', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('multiple');
        }
    };
    multipleextended(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('multipleextended', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('multipleextended');
        }
    };
    renderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('renderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('renderer');
        }
    };
    rendered(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('rendered', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('rendered');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('rtl');
        }
    };
    selectedIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('selectedIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('selectedIndex');
        }
    };
    selectedIndexes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('selectedIndexes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('selectedIndexes');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('source');
        }
    };
    scrollBarSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('scrollBarSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('scrollBarSize');
        }
    };
    searchMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('searchMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('searchMode');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('theme');
        }
    };
    valueMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('valueMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('valueMember');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('width');
        }
    };
    addItem(Item) {
        return JQXLite(this.componentSelector).jqxListBox('addItem', Item);  
    };
    beginUpdate() {
        JQXLite(this.componentSelector).jqxListBox('beginUpdate');  
    };
    clear() {
        JQXLite(this.componentSelector).jqxListBox('clear');  
    };
    clearSelection() {
        JQXLite(this.componentSelector).jqxListBox('clearSelection');  
    };
    checkIndex(Index) {
        JQXLite(this.componentSelector).jqxListBox('checkIndex', Index);  
    };
    checkItem(Item) {
        JQXLite(this.componentSelector).jqxListBox('checkItem', Item);  
    };
    checkAll() {
        JQXLite(this.componentSelector).jqxListBox('checkAll');  
    };
    clearFilter() {
        JQXLite(this.componentSelector).jqxListBox('clearFilter');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxListBox('destroy');  
    };
    disableItem(Item) {
        JQXLite(this.componentSelector).jqxListBox('disableItem', Item);  
    };
    disableAt(Index) {
        JQXLite(this.componentSelector).jqxListBox('disableAt', Index);  
    };
    enableItem(Item) {
        JQXLite(this.componentSelector).jqxListBox('enableItem', Item);  
    };
    enableAt(Index) {
        JQXLite(this.componentSelector).jqxListBox('enableAt', Index);  
    };
    ensureVisible(item) {
        JQXLite(this.componentSelector).jqxListBox('ensureVisible', item);  
    };
    endUpdate() {
        JQXLite(this.componentSelector).jqxListBox('endUpdate');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxListBox('focus');  
    };
    getItems() {
        return JQXLite(this.componentSelector).jqxListBox('getItems');  
    };
    getSelectedItems() {
        return JQXLite(this.componentSelector).jqxListBox('getSelectedItems');  
    };
    getCheckedItems() {
        return JQXLite(this.componentSelector).jqxListBox('getCheckedItems');  
    };
    getItem(Index) {
        return JQXLite(this.componentSelector).jqxListBox('getItem', Index);  
    };
    getItemByValue(Item) {
        return JQXLite(this.componentSelector).jqxListBox('getItemByValue', Item);  
    };
    getSelectedItem() {
        return JQXLite(this.componentSelector).jqxListBox('getSelectedItem');  
    };
    getSelectedIndex() {
        return JQXLite(this.componentSelector).jqxListBox('getSelectedIndex');  
    };
    insertAt(Item, Index) {
        JQXLite(this.componentSelector).jqxListBox('insertAt', Item, Index);  
    };
    invalidate() {
        JQXLite(this.componentSelector).jqxListBox('invalidate');  
    };
    indeterminateItem(Item) {
        JQXLite(this.componentSelector).jqxListBox('indeterminateItem', Item);  
    };
    indeterminateIndex(Index) {
        JQXLite(this.componentSelector).jqxListBox('indeterminateIndex', Index);  
    };
    loadFromSelect(selector) {
        JQXLite(this.componentSelector).jqxListBox('loadFromSelect', selector);  
    };
    removeItem(Item) {
        JQXLite(this.componentSelector).jqxListBox('removeItem', Item);  
    };
    removeAt(Index) {
        JQXLite(this.componentSelector).jqxListBox('removeAt', Index);  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxListBox('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxListBox('refresh');  
    };
    selectItem(Item) {
        JQXLite(this.componentSelector).jqxListBox('selectItem', Item);  
    };
    selectIndex(Index) {
        JQXLite(this.componentSelector).jqxListBox('selectIndex', Index);  
    };
    updateItem(Item, Value) {
        JQXLite(this.componentSelector).jqxListBox('updateItem', Item, Value);  
    };
    updateAt(item, index) {
        JQXLite(this.componentSelector).jqxListBox('updateAt', item, index);  
    };
    unselectIndex(index) {
        JQXLite(this.componentSelector).jqxListBox('unselectIndex', index);  
    };
    unselectItem(item) {
        JQXLite(this.componentSelector).jqxListBox('unselectItem', item);  
    };
    uncheckIndex(index) {
        JQXLite(this.componentSelector).jqxListBox('uncheckIndex', index);  
    };
    uncheckItem(item) {
        JQXLite(this.componentSelector).jqxListBox('uncheckItem', item);  
    };
    uncheckAll() {
        JQXLite(this.componentSelector).jqxListBox('uncheckAll');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxListBox('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxListBox('val');
        }
    };

    render() {
        let id = 'jqxListBox' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

