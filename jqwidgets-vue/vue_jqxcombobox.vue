/*
jQWidgets v7.1.0 (2019-Feb)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxcombobox.js';

    export default {
        props: {
            animationType: String,
            autoComplete: Boolean,
            autoOpen: Boolean,
            autoItemsHeight: Boolean,
            autoDropDownHeight: Boolean,
            closeDelay: Number,
            checkboxes: Boolean,
            disabled: Boolean,
            displayMember: String,
            dropDownHorizontalAlignment: String,
            dropDownVerticalAlignment: String,
            dropDownHeight: Number,
            dropDownWidth: Number,
            enableHover: Boolean,
            enableSelection: Boolean,
            enableBrowserBoundsDetection: Boolean,
            height: [Number, String],
            itemHeight: Number,
            multiSelect: Boolean,
            minLength: Number,
            openDelay: Number,
            popupZIndex: Number,
            placeHolder: String,
            remoteAutoComplete: Boolean,
            remoteAutoCompleteDelay: Number,
            renderer: Function,
            renderSelectedItem: Function,
            rtl: Boolean,
            selectedIndex: Number,
            showArrow: Boolean,
            showCloseButtons: Boolean,
            searchMode: String,
            search: Function,
            source: [Array, Object],
            scrollBarSize: Number,
            template: String,
            theme: String,
            validateSelection: Function,
            valueMember: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxComboBox' + JQXLite.generateID();
            this.componentSelector = '#' + this.id;
        },
        mounted: function () {
            if (this.autoCreate) this.__createComponent__();
        },
        methods: {
            createComponent: function (options) {
                if (!this.autoCreate) this.__createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            },
            setOptions: function (options) {
                JQXLite(this.componentSelector).jqxComboBox(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxComboBox(usedProps[i]);
                }
                return resultToReturn;
            },
            addItem: function(item) {
                JQXLite(this.componentSelector).jqxComboBox('addItem', item);  
            },
            clearSelection: function() {
                JQXLite(this.componentSelector).jqxComboBox('clearSelection');  
            },
            clear: function() {
                JQXLite(this.componentSelector).jqxComboBox('clear');  
            },
            close: function() {
                JQXLite(this.componentSelector).jqxComboBox('close');  
            },
            checkIndex: function(index) {
                JQXLite(this.componentSelector).jqxComboBox('checkIndex', index);  
            },
            checkItem: function(item) {
                JQXLite(this.componentSelector).jqxComboBox('checkItem', item);  
            },
            checkAll: function() {
                JQXLite(this.componentSelector).jqxComboBox('checkAll');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxComboBox('destroy');  
            },
            disableItem: function(item) {
                JQXLite(this.componentSelector).jqxComboBox('disableItem', item);  
            },
            disableAt: function(index) {
                JQXLite(this.componentSelector).jqxComboBox('disableAt', index);  
            },
            enableItem: function(item) {
                JQXLite(this.componentSelector).jqxComboBox('enableItem', item);  
            },
            enableAt: function(index) {
                JQXLite(this.componentSelector).jqxComboBox('enableAt', index);  
            },
            ensureVisible: function(index) {
                JQXLite(this.componentSelector).jqxComboBox('ensureVisible', index);  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxComboBox('focus');  
            },
            getItem: function(index) {
                return JQXLite(this.componentSelector).jqxComboBox('getItem', index);  
            },
            getItemByValue: function(value) {
                return JQXLite(this.componentSelector).jqxComboBox('getItemByValue', value);  
            },
            getVisibleItems: function() {
                return JQXLite(this.componentSelector).jqxComboBox('getVisibleItems');  
            },
            getItems: function() {
                return JQXLite(this.componentSelector).jqxComboBox('getItems');  
            },
            getCheckedItems: function() {
                return JQXLite(this.componentSelector).jqxComboBox('getCheckedItems');  
            },
            getSelectedItem: function() {
                return JQXLite(this.componentSelector).jqxComboBox('getSelectedItem');  
            },
            getSelectedItems: function() {
                return JQXLite(this.componentSelector).jqxComboBox('getSelectedItems');  
            },
            getSelectedIndex: function() {
                return JQXLite(this.componentSelector).jqxComboBox('getSelectedIndex');  
            },
            insertAt: function(item, index) {
                JQXLite(this.componentSelector).jqxComboBox('insertAt', item, index);  
            },
            isOpened: function() {
                return JQXLite(this.componentSelector).jqxComboBox('isOpened');  
            },
            indeterminateIndex: function(index) {
                JQXLite(this.componentSelector).jqxComboBox('indeterminateIndex', index);  
            },
            indeterminateItem: function(item) {
                JQXLite(this.componentSelector).jqxComboBox('indeterminateItem', item);  
            },
            loadFromSelect: function(selectTagId) {
                JQXLite(this.componentSelector).jqxComboBox('loadFromSelect', selectTagId);  
            },
            open: function() {
                JQXLite(this.componentSelector).jqxComboBox('open');  
            },
            removeItem: function(item) {
                return JQXLite(this.componentSelector).jqxComboBox('removeItem', item);  
            },
            removeAt: function(index) {
                return JQXLite(this.componentSelector).jqxComboBox('removeAt', index);  
            },
            selectIndex: function(index) {
                JQXLite(this.componentSelector).jqxComboBox('selectIndex', index);  
            },
            selectItem: function(item) {
                JQXLite(this.componentSelector).jqxComboBox('selectItem', item);  
            },
            searchString: function() {
                return JQXLite(this.componentSelector).jqxComboBox('searchString');  
            },
            updateItem: function(item, itemValue) {
                JQXLite(this.componentSelector).jqxComboBox('updateItem', item, itemValue);  
            },
            updateAt: function(item, index) {
                JQXLite(this.componentSelector).jqxComboBox('updateAt', item, index);  
            },
            unselectIndex: function(index) {
                JQXLite(this.componentSelector).jqxComboBox('unselectIndex', index);  
            },
            unselectItem: function(item) {
                JQXLite(this.componentSelector).jqxComboBox('unselectItem', item);  
            },
            uncheckIndex: function(index) {
                JQXLite(this.componentSelector).jqxComboBox('uncheckIndex', index);  
            },
            uncheckItem: function(item) {
                JQXLite(this.componentSelector).jqxComboBox('uncheckItem', item);  
            },
            uncheckAll: function() {
                JQXLite(this.componentSelector).jqxComboBox('uncheckAll');  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('val');
                }
            },
            _animationType: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('animationType', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('animationType');
                }
            },
            _autoComplete: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('autoComplete', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('autoComplete');
                }
            },
            _autoOpen: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('autoOpen', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('autoOpen');
                }
            },
            _autoItemsHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('autoItemsHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('autoItemsHeight');
                }
            },
            _autoDropDownHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('autoDropDownHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('autoDropDownHeight');
                }
            },
            _closeDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('closeDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('closeDelay');
                }
            },
            _checkboxes: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('checkboxes', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('checkboxes');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('disabled');
                }
            },
            _displayMember: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('displayMember', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('displayMember');
                }
            },
            _dropDownHorizontalAlignment: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('dropDownHorizontalAlignment', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('dropDownHorizontalAlignment');
                }
            },
            _dropDownVerticalAlignment: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('dropDownVerticalAlignment', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('dropDownVerticalAlignment');
                }
            },
            _dropDownHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('dropDownHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('dropDownHeight');
                }
            },
            _dropDownWidth: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('dropDownWidth', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('dropDownWidth');
                }
            },
            _enableHover: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('enableHover', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('enableHover');
                }
            },
            _enableSelection: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('enableSelection', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('enableSelection');
                }
            },
            _enableBrowserBoundsDetection: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('enableBrowserBoundsDetection', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('enableBrowserBoundsDetection');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('height');
                }
            },
            _itemHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('itemHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('itemHeight');
                }
            },
            _multiSelect: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('multiSelect', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('multiSelect');
                }
            },
            _minLength: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('minLength', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('minLength');
                }
            },
            _openDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('openDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('openDelay');
                }
            },
            _popupZIndex: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('popupZIndex', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('popupZIndex');
                }
            },
            _placeHolder: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('placeHolder', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('placeHolder');
                }
            },
            _remoteAutoComplete: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('remoteAutoComplete', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('remoteAutoComplete');
                }
            },
            _remoteAutoCompleteDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('remoteAutoCompleteDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('remoteAutoCompleteDelay');
                }
            },
            _renderer: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('renderer', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('renderer');
                }
            },
            _renderSelectedItem: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('renderSelectedItem', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('renderSelectedItem');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('rtl');
                }
            },
            _selectedIndex: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('selectedIndex', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('selectedIndex');
                }
            },
            _showArrow: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('showArrow', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('showArrow');
                }
            },
            _showCloseButtons: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('showCloseButtons', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('showCloseButtons');
                }
            },
            _searchMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('searchMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('searchMode');
                }
            },
            _search: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('search', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('search');
                }
            },
            _source: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('source', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('source');
                }
            },
            _scrollBarSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('scrollBarSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('scrollBarSize');
                }
            },
            _template: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('template', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('template');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('theme');
                }
            },
            _validateSelection: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('validateSelection', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('validateSelection');
                }
            },
            _valueMember: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('valueMember', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('valueMember');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxComboBox('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxComboBox('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxComboBox(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['animationType','autoComplete','autoOpen','autoItemsHeight','autoDropDownHeight','closeDelay','checkboxes','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','enableHover','enableSelection','enableBrowserBoundsDetection','height','itemHeight','multiSelect','minLength','openDelay','popupZIndex','placeHolder','remoteAutoComplete','remoteAutoCompleteDelay','renderer','renderSelectedItem','rtl','selectedIndex','showArrow','showCloseButtons','searchMode','search','source','scrollBarSize','template','theme','validateSelection','valueMember','width'];
                const componentProps = this.$options.propsData;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            },
            __extendProps__: function () {
                const that = this;

                Object.defineProperty(that, 'animationType', {
                    get() {
                        return that._animationType();
                    },
                    set(newValue) {
                        that._animationType(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoComplete', {
                    get() {
                        return that._autoComplete();
                    },
                    set(newValue) {
                        that._autoComplete(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoOpen', {
                    get() {
                        return that._autoOpen();
                    },
                    set(newValue) {
                        that._autoOpen(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoItemsHeight', {
                    get() {
                        return that._autoItemsHeight();
                    },
                    set(newValue) {
                        that._autoItemsHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoDropDownHeight', {
                    get() {
                        return that._autoDropDownHeight();
                    },
                    set(newValue) {
                        that._autoDropDownHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'closeDelay', {
                    get() {
                        return that._closeDelay();
                    },
                    set(newValue) {
                        that._closeDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'checkboxes', {
                    get() {
                        return that._checkboxes();
                    },
                    set(newValue) {
                        that._checkboxes(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'disabled', {
                    get() {
                        return that._disabled();
                    },
                    set(newValue) {
                        that._disabled(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'displayMember', {
                    get() {
                        return that._displayMember();
                    },
                    set(newValue) {
                        that._displayMember(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'dropDownHorizontalAlignment', {
                    get() {
                        return that._dropDownHorizontalAlignment();
                    },
                    set(newValue) {
                        that._dropDownHorizontalAlignment(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'dropDownVerticalAlignment', {
                    get() {
                        return that._dropDownVerticalAlignment();
                    },
                    set(newValue) {
                        that._dropDownVerticalAlignment(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'dropDownHeight', {
                    get() {
                        return that._dropDownHeight();
                    },
                    set(newValue) {
                        that._dropDownHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'dropDownWidth', {
                    get() {
                        return that._dropDownWidth();
                    },
                    set(newValue) {
                        that._dropDownWidth(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableHover', {
                    get() {
                        return that._enableHover();
                    },
                    set(newValue) {
                        that._enableHover(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableSelection', {
                    get() {
                        return that._enableSelection();
                    },
                    set(newValue) {
                        that._enableSelection(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableBrowserBoundsDetection', {
                    get() {
                        return that._enableBrowserBoundsDetection();
                    },
                    set(newValue) {
                        that._enableBrowserBoundsDetection(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'height', {
                    get() {
                        return that._height();
                    },
                    set(newValue) {
                        that._height(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'itemHeight', {
                    get() {
                        return that._itemHeight();
                    },
                    set(newValue) {
                        that._itemHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'multiSelect', {
                    get() {
                        return that._multiSelect();
                    },
                    set(newValue) {
                        that._multiSelect(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'minLength', {
                    get() {
                        return that._minLength();
                    },
                    set(newValue) {
                        that._minLength(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'openDelay', {
                    get() {
                        return that._openDelay();
                    },
                    set(newValue) {
                        that._openDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'popupZIndex', {
                    get() {
                        return that._popupZIndex();
                    },
                    set(newValue) {
                        that._popupZIndex(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'placeHolder', {
                    get() {
                        return that._placeHolder();
                    },
                    set(newValue) {
                        that._placeHolder(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'remoteAutoComplete', {
                    get() {
                        return that._remoteAutoComplete();
                    },
                    set(newValue) {
                        that._remoteAutoComplete(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'remoteAutoCompleteDelay', {
                    get() {
                        return that._remoteAutoCompleteDelay();
                    },
                    set(newValue) {
                        that._remoteAutoCompleteDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'renderer', {
                    get() {
                        return that._renderer();
                    },
                    set(newValue) {
                        that._renderer(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'renderSelectedItem', {
                    get() {
                        return that._renderSelectedItem();
                    },
                    set(newValue) {
                        that._renderSelectedItem(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rtl', {
                    get() {
                        return that._rtl();
                    },
                    set(newValue) {
                        that._rtl(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'selectedIndex', {
                    get() {
                        return that._selectedIndex();
                    },
                    set(newValue) {
                        that._selectedIndex(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showArrow', {
                    get() {
                        return that._showArrow();
                    },
                    set(newValue) {
                        that._showArrow(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showCloseButtons', {
                    get() {
                        return that._showCloseButtons();
                    },
                    set(newValue) {
                        that._showCloseButtons(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'searchMode', {
                    get() {
                        return that._searchMode();
                    },
                    set(newValue) {
                        that._searchMode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'search', {
                    get() {
                        return that._search();
                    },
                    set(newValue) {
                        that._search(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'source', {
                    get() {
                        return that._source();
                    },
                    set(newValue) {
                        that._source(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'scrollBarSize', {
                    get() {
                        return that._scrollBarSize();
                    },
                    set(newValue) {
                        that._scrollBarSize(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'template', {
                    get() {
                        return that._template();
                    },
                    set(newValue) {
                        that._template(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'theme', {
                    get() {
                        return that._theme();
                    },
                    set(newValue) {
                        that._theme(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'validateSelection', {
                    get() {
                        return that._validateSelection();
                    },
                    set(newValue) {
                        that._validateSelection(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'valueMember', {
                    get() {
                        return that._valueMember();
                    },
                    set(newValue) {
                        that._valueMember(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'width', {
                    get() {
                        return that._width();
                    },
                    set(newValue) {
                        that._width(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            },
            __twoWayDataBinding__: function () {
                const value = JQXLite(this.componentSelector).jqxComboBox('val');
                this.$emit('input', value);
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('bindingComplete', function (event) { that.$emit('bindingComplete', event); });
                JQXLite(this.componentSelector).on('checkChange', function (event) { that.$emit('checkChange', event); });
                JQXLite(this.componentSelector).on('close', function (event) { that.$emit('close', event); });
                JQXLite(this.componentSelector).on('change', function (event) { that.$emit('change', event); that.__twoWayDataBinding__(); });
                JQXLite(this.componentSelector).on('open', function (event) { that.$emit('open', event); });
                JQXLite(this.componentSelector).on('select', function (event) { that.$emit('select', event); });
                JQXLite(this.componentSelector).on('unselect', function (event) { that.$emit('unselect', event); });
            }
        }
    }
</script>
