<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxcombobox.js';

    export default {
        props: {
            modelValue: String,
            animationType: String,
            autoComplete: {
                default: false,
                type: Boolean
            },
            autoOpen: {
                default: false,
                type: Boolean
            },
            autoItemsHeight: {
                default: false,
                type: Boolean
            },
            autoDropDownHeight: {
                default: false,
                type: Boolean
            },
            closeDelay: Number,
            checkboxes: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            displayMember: String,
            dropDownHorizontalAlignment: String,
            dropDownVerticalAlignment: String,
            dropDownHeight: Number,
            dropDownWidth: Number,
            enableHover: {
                default: true,
                type: Boolean
            },
            enableSelection: {
                default: true,
                type: Boolean
            },
            enableBrowserBoundsDetection: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            itemHeight: Number,
            multiSelect: {
                default: false,
                type: Boolean
            },
            minLength: Number,
            openDelay: Number,
            popupZIndex: Number,
            placeHolder: String,
            remoteAutoComplete: {
                default: false,
                type: Boolean
            },
            remoteAutoCompleteDelay: Number,
            renderer: Function,
            renderSelectedItem: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            selectedIndex: Number,
            showArrow: {
                default: true,
                type: Boolean
            },
            showCloseButtons: {
                default: true,
                type: Boolean
            },
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
        emits: ["update:modelValue","bindingComplete","checkChange","close","change","open","select","unselect"],
        setup(props, context) {
			const id = "jqxComboBox" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxComboBox(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxComboBox(usedProps[i]);
                }
                return resultToReturn;
            }
            function addItem(item) {
                JQXLite(componentSelector).jqxComboBox('addItem', item);  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxComboBox('clearSelection');  
            }
            function clear() {
                JQXLite(componentSelector).jqxComboBox('clear');  
            }
            function close() {
                JQXLite(componentSelector).jqxComboBox('close');  
            }
            function checkIndex(index) {
                JQXLite(componentSelector).jqxComboBox('checkIndex', index);  
            }
            function checkItem(item) {
                JQXLite(componentSelector).jqxComboBox('checkItem', item);  
            }
            function checkAll() {
                JQXLite(componentSelector).jqxComboBox('checkAll');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxComboBox('destroy');  
            }
            function disableItem(item) {
                JQXLite(componentSelector).jqxComboBox('disableItem', item);  
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxComboBox('disableAt', index);  
            }
            function enableItem(item) {
                JQXLite(componentSelector).jqxComboBox('enableItem', item);  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxComboBox('enableAt', index);  
            }
            function ensureVisible(index) {
                JQXLite(componentSelector).jqxComboBox('ensureVisible', index);  
            }
            function focus() {
                JQXLite(componentSelector).jqxComboBox('focus');  
            }
            function getItem(index) {
                return JQXLite(componentSelector).jqxComboBox('getItem', index);  
            }
            function getItemByValue(value) {
                return JQXLite(componentSelector).jqxComboBox('getItemByValue', value);  
            }
            function getVisibleItems() {
                return JQXLite(componentSelector).jqxComboBox('getVisibleItems');  
            }
            function getItems() {
                return JQXLite(componentSelector).jqxComboBox('getItems');  
            }
            function getCheckedItems() {
                return JQXLite(componentSelector).jqxComboBox('getCheckedItems');  
            }
            function getSelectedItem() {
                return JQXLite(componentSelector).jqxComboBox('getSelectedItem');  
            }
            function getSelectedItems() {
                return JQXLite(componentSelector).jqxComboBox('getSelectedItems');  
            }
            function getSelectedIndex() {
                return JQXLite(componentSelector).jqxComboBox('getSelectedIndex');  
            }
            function insertAt(item, index) {
                JQXLite(componentSelector).jqxComboBox('insertAt', item, index);  
            }
            function isOpened() {
                return JQXLite(componentSelector).jqxComboBox('isOpened');  
            }
            function indeterminateIndex(index) {
                JQXLite(componentSelector).jqxComboBox('indeterminateIndex', index);  
            }
            function indeterminateItem(item) {
                JQXLite(componentSelector).jqxComboBox('indeterminateItem', item);  
            }
            function loadFromSelect(selectTagId) {
                JQXLite(componentSelector).jqxComboBox('loadFromSelect', selectTagId);  
            }
            function open() {
                JQXLite(componentSelector).jqxComboBox('open');  
            }
            function removeItem(item) {
                return JQXLite(componentSelector).jqxComboBox('removeItem', item);  
            }
            function removeAt(index) {
                return JQXLite(componentSelector).jqxComboBox('removeAt', index);  
            }
            function selectIndex(index) {
                JQXLite(componentSelector).jqxComboBox('selectIndex', index);  
            }
            function selectItem(item) {
                JQXLite(componentSelector).jqxComboBox('selectItem', item);  
            }
            function searchString() {
                return JQXLite(componentSelector).jqxComboBox('searchString');  
            }
            function updateItem(item, itemValue) {
                JQXLite(componentSelector).jqxComboBox('updateItem', item, itemValue);  
            }
            function updateAt(item, index) {
                JQXLite(componentSelector).jqxComboBox('updateAt', item, index);  
            }
            function unselectIndex(index) {
                JQXLite(componentSelector).jqxComboBox('unselectIndex', index);  
            }
            function unselectItem(item) {
                JQXLite(componentSelector).jqxComboBox('unselectItem', item);  
            }
            function uncheckIndex(index) {
                JQXLite(componentSelector).jqxComboBox('uncheckIndex', index);  
            }
            function uncheckItem(item) {
                JQXLite(componentSelector).jqxComboBox('uncheckItem', item);  
            }
            function uncheckAll() {
                JQXLite(componentSelector).jqxComboBox('uncheckAll');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('val');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('animationType');
                }
            }
            function _autoComplete (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('autoComplete', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('autoComplete');
                }
            }
            function _autoOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('autoOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('autoOpen');
                }
            }
            function _autoItemsHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('autoItemsHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('autoItemsHeight');
                }
            }
            function _autoDropDownHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('autoDropDownHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('autoDropDownHeight');
                }
            }
            function _closeDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('closeDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('closeDelay');
                }
            }
            function _checkboxes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('checkboxes', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('checkboxes');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('disabled');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('displayMember');
                }
            }
            function _dropDownHorizontalAlignment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('dropDownHorizontalAlignment', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('dropDownHorizontalAlignment');
                }
            }
            function _dropDownVerticalAlignment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('dropDownVerticalAlignment', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('dropDownVerticalAlignment');
                }
            }
            function _dropDownHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('dropDownHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('dropDownHeight');
                }
            }
            function _dropDownWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('dropDownWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('dropDownWidth');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('enableHover');
                }
            }
            function _enableSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('enableSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('enableSelection');
                }
            }
            function _enableBrowserBoundsDetection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('enableBrowserBoundsDetection', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('enableBrowserBoundsDetection');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('height');
                }
            }
            function _itemHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('itemHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('itemHeight');
                }
            }
            function _multiSelect (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('multiSelect', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('multiSelect');
                }
            }
            function _minLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('minLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('minLength');
                }
            }
            function _openDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('openDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('openDelay');
                }
            }
            function _popupZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('popupZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('popupZIndex');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('placeHolder');
                }
            }
            function _remoteAutoComplete (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('remoteAutoComplete', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('remoteAutoComplete');
                }
            }
            function _remoteAutoCompleteDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('remoteAutoCompleteDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('remoteAutoCompleteDelay');
                }
            }
            function _renderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('renderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('renderer');
                }
            }
            function _renderSelectedItem (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('renderSelectedItem', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('renderSelectedItem');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('rtl');
                }
            }
            function _selectedIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('selectedIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('selectedIndex');
                }
            }
            function _showArrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('showArrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('showArrow');
                }
            }
            function _showCloseButtons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('showCloseButtons', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('showCloseButtons');
                }
            }
            function _searchMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('searchMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('searchMode');
                }
            }
            function _search (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('search', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('search');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('source');
                }
            }
            function _scrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('scrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('scrollBarSize');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('theme');
                }
            }
            function _validateSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('validateSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('validateSelection');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('valueMember');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComboBox('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxComboBox('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxComboBox(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationType','autoComplete','autoOpen','autoItemsHeight','autoDropDownHeight','closeDelay','checkboxes','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','enableHover','enableSelection','enableBrowserBoundsDetection','height','itemHeight','multiSelect','minLength','openDelay','popupZIndex','placeHolder','remoteAutoComplete','remoteAutoCompleteDelay','renderer','renderSelectedItem','rtl','selectedIndex','showArrow','showCloseButtons','searchMode','search','source','scrollBarSize','template','theme','validateSelection','valueMember','width'];
                const componentProps = props;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1 && componentProps[prop] !== undefined) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            }
            const options = {
                 get animationType() {
                     return _animationType();
                 },
                 set animationType(newValue) {
                     _animationType(newValue);
                 },
                 get autoComplete() {
                     return _autoComplete();
                 },
                 set autoComplete(newValue) {
                     _autoComplete(newValue);
                 },
                 get autoOpen() {
                     return _autoOpen();
                 },
                 set autoOpen(newValue) {
                     _autoOpen(newValue);
                 },
                 get autoItemsHeight() {
                     return _autoItemsHeight();
                 },
                 set autoItemsHeight(newValue) {
                     _autoItemsHeight(newValue);
                 },
                 get autoDropDownHeight() {
                     return _autoDropDownHeight();
                 },
                 set autoDropDownHeight(newValue) {
                     _autoDropDownHeight(newValue);
                 },
                 get closeDelay() {
                     return _closeDelay();
                 },
                 set closeDelay(newValue) {
                     _closeDelay(newValue);
                 },
                 get checkboxes() {
                     return _checkboxes();
                 },
                 set checkboxes(newValue) {
                     _checkboxes(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get displayMember() {
                     return _displayMember();
                 },
                 set displayMember(newValue) {
                     _displayMember(newValue);
                 },
                 get dropDownHorizontalAlignment() {
                     return _dropDownHorizontalAlignment();
                 },
                 set dropDownHorizontalAlignment(newValue) {
                     _dropDownHorizontalAlignment(newValue);
                 },
                 get dropDownVerticalAlignment() {
                     return _dropDownVerticalAlignment();
                 },
                 set dropDownVerticalAlignment(newValue) {
                     _dropDownVerticalAlignment(newValue);
                 },
                 get dropDownHeight() {
                     return _dropDownHeight();
                 },
                 set dropDownHeight(newValue) {
                     _dropDownHeight(newValue);
                 },
                 get dropDownWidth() {
                     return _dropDownWidth();
                 },
                 set dropDownWidth(newValue) {
                     _dropDownWidth(newValue);
                 },
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
                 },
                 get enableSelection() {
                     return _enableSelection();
                 },
                 set enableSelection(newValue) {
                     _enableSelection(newValue);
                 },
                 get enableBrowserBoundsDetection() {
                     return _enableBrowserBoundsDetection();
                 },
                 set enableBrowserBoundsDetection(newValue) {
                     _enableBrowserBoundsDetection(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get itemHeight() {
                     return _itemHeight();
                 },
                 set itemHeight(newValue) {
                     _itemHeight(newValue);
                 },
                 get multiSelect() {
                     return _multiSelect();
                 },
                 set multiSelect(newValue) {
                     _multiSelect(newValue);
                 },
                 get minLength() {
                     return _minLength();
                 },
                 set minLength(newValue) {
                     _minLength(newValue);
                 },
                 get openDelay() {
                     return _openDelay();
                 },
                 set openDelay(newValue) {
                     _openDelay(newValue);
                 },
                 get popupZIndex() {
                     return _popupZIndex();
                 },
                 set popupZIndex(newValue) {
                     _popupZIndex(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get remoteAutoComplete() {
                     return _remoteAutoComplete();
                 },
                 set remoteAutoComplete(newValue) {
                     _remoteAutoComplete(newValue);
                 },
                 get remoteAutoCompleteDelay() {
                     return _remoteAutoCompleteDelay();
                 },
                 set remoteAutoCompleteDelay(newValue) {
                     _remoteAutoCompleteDelay(newValue);
                 },
                 get renderer() {
                     return _renderer();
                 },
                 set renderer(newValue) {
                     _renderer(newValue);
                 },
                 get renderSelectedItem() {
                     return _renderSelectedItem();
                 },
                 set renderSelectedItem(newValue) {
                     _renderSelectedItem(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get selectedIndex() {
                     return _selectedIndex();
                 },
                 set selectedIndex(newValue) {
                     _selectedIndex(newValue);
                 },
                 get showArrow() {
                     return _showArrow();
                 },
                 set showArrow(newValue) {
                     _showArrow(newValue);
                 },
                 get showCloseButtons() {
                     return _showCloseButtons();
                 },
                 set showCloseButtons(newValue) {
                     _showCloseButtons(newValue);
                 },
                 get searchMode() {
                     return _searchMode();
                 },
                 set searchMode(newValue) {
                     _searchMode(newValue);
                 },
                 get search() {
                     return _search();
                 },
                 set search(newValue) {
                     _search(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get scrollBarSize() {
                     return _scrollBarSize();
                 },
                 set scrollBarSize(newValue) {
                     _scrollBarSize(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get validateSelection() {
                     return _validateSelection();
                 },
                 set validateSelection(newValue) {
                     _validateSelection(newValue);
                 },
                 get valueMember() {
                     return _valueMember();
                 },
                 set valueMember(newValue) {
                     _valueMember(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function twoWayBinding() {
                const value = JQXLite(componentSelector).jqxComboBox('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('bindingComplete', function (event) { that.emit('bindingComplete', event); });
                JQXLite(componentSelector).on('checkChange', function (event) { that.emit('checkChange', event); });
                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('select', function (event) { that.emit('select', event); });
                JQXLite(componentSelector).on('unselect', function (event) { that.emit('unselect', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxComboBox(widgetOptions);
			})
			return {id, componentSelector, addItem,clearSelection,clear,close,checkIndex,checkItem,checkAll,destroy,disableItem,disableAt,enableItem,enableAt,ensureVisible,focus,getItem,getItemByValue,getVisibleItems,getItems,getCheckedItems,getSelectedItem,getSelectedItems,getSelectedIndex,insertAt,isOpened,indeterminateIndex,indeterminateItem,loadFromSelect,open,removeItem,removeAt,selectIndex,selectItem,searchString,updateItem,updateAt,unselectIndex,unselectItem,uncheckIndex,uncheckItem,uncheckAll,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
