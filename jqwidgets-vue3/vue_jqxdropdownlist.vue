<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxdropdownlist.js';

    export default {
        props: {
            modelValue: null,
            arrowSize: Number,
            autoOpen: {
                default: false,
                type: Boolean
            },
            autoDropDownHeight: {
                default: false,
                type: Boolean
            },
            autoItemsHeight: {
                default: false,
                type: Boolean
            },
            animationType: String,
            checkboxes: {
                default: false,
                type: Boolean
            },
            closeDelay: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            displayMember: String,
            dropDownHorizontalAlignment: String,
            dropDownVerticalAlignment: String,
            dropDownHeight: Number,
            dropDownWidth: Number,
            dropDownContainer: String,
            emptyString: String,
            enableSelection: {
                default: true,
                type: Boolean
            },
            enableBrowserBoundsDetection: {
                default: false,
                type: Boolean
            },
            enableHover: {
                default: true,
                type: Boolean
            },
            equalItemsWidth: {
                default: true,
                type: Boolean
            },
            filterable: {
                default: false,
                type: Boolean
            },
            filterHeight: Number,
            filterDelay: Number,
            filterPlaceHolder: String,
            focusable: {
                default: true,
                type: Boolean
            },
            groupMember: String,
            height: [Number, String],
            hint: {
                default: true,
                type: Boolean
            },
            incrementalSearch: {
                default: true,
                type: Boolean
            },
            incrementalSearchDelay: Number,
            itemHeight: Number,
            keyboardSelection: {
                default: true,
                type: Boolean
            },
            openDelay: Number,
            placeHolder: String,
            popupZIndex: Number,
            ready: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            renderer: Function,
            selectionRenderer: Function,
            searchMode: String,
            searchMember: String,
            source: [Array, Object],
            selectedIndex: Number,
            scrollBarSize: Number,
            theme: String,
            template: String,
            touchMode: null,
            valueMember: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","bindingComplete","close","checkChange","change","open","select","unselect","itemAdd","itemRemove","itemUpdate"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxDropDownList" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxDropDownList(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxDropDownList(usedProps[i]);
                }
                return resultToReturn;
            }
            function addItem(item) {
                JQXLite(componentSelector).jqxDropDownList('addItem', item);  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxDropDownList('clearSelection');  
            }
            function clear() {
                JQXLite(componentSelector).jqxDropDownList('clear');  
            }
            function close() {
                JQXLite(componentSelector).jqxDropDownList('close');  
            }
            function checkIndex(index) {
                JQXLite(componentSelector).jqxDropDownList('checkIndex', index);  
            }
            function checkItem(item) {
                JQXLite(componentSelector).jqxDropDownList('checkItem', item);  
            }
            function checkAll() {
                JQXLite(componentSelector).jqxDropDownList('checkAll');  
            }
            function clearFilter() {
                JQXLite(componentSelector).jqxDropDownList('clearFilter');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxDropDownList('destroy');  
            }
            function disableItem(item) {
                JQXLite(componentSelector).jqxDropDownList('disableItem', item);  
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxDropDownList('disableAt', index);  
            }
            function enableItem(item) {
                JQXLite(componentSelector).jqxDropDownList('enableItem', item);  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxDropDownList('enableAt', index);  
            }
            function ensureVisible(index) {
                JQXLite(componentSelector).jqxDropDownList('ensureVisible', index);  
            }
            function focus() {
                JQXLite(componentSelector).jqxDropDownList('focus');  
            }
            function getItem(index) {
                return JQXLite(componentSelector).jqxDropDownList('getItem', index);  
            }
            function getItemByValue(itemValue) {
                return JQXLite(componentSelector).jqxDropDownList('getItemByValue', itemValue);  
            }
            function getItems() {
                return JQXLite(componentSelector).jqxDropDownList('getItems');  
            }
            function getVisibleItems() {
                return JQXLite(componentSelector).jqxDropDownList('getVisibleItems');  
            }
            function getCheckedItems() {
                return JQXLite(componentSelector).jqxDropDownList('getCheckedItems');  
            }
            function getSelectedItem() {
                return JQXLite(componentSelector).jqxDropDownList('getSelectedItem');  
            }
            function getSelectedIndex() {
                return JQXLite(componentSelector).jqxDropDownList('getSelectedIndex');  
            }
            function insertAt(item, index) {
                JQXLite(componentSelector).jqxDropDownList('insertAt', item, index);  
            }
            function isOpened() {
                return JQXLite(componentSelector).jqxDropDownList('isOpened');  
            }
            function indeterminateIndex(index) {
                JQXLite(componentSelector).jqxDropDownList('indeterminateIndex', index);  
            }
            function indeterminateItem(item) {
                JQXLite(componentSelector).jqxDropDownList('indeterminateItem', item);  
            }
            function loadFromSelect(arg) {
                JQXLite(componentSelector).jqxDropDownList('loadFromSelect', arg);  
            }
            function open() {
                JQXLite(componentSelector).jqxDropDownList('open');  
            }
            function removeItem(item) {
                JQXLite(componentSelector).jqxDropDownList('removeItem', item);  
            }
            function removeAt(index) {
                JQXLite(componentSelector).jqxDropDownList('removeAt', index);  
            }
            function selectIndex(index) {
                JQXLite(componentSelector).jqxDropDownList('selectIndex', index);  
            }
            function selectItem(item) {
                JQXLite(componentSelector).jqxDropDownList('selectItem', item);  
            }
            function setContent(content) {
                JQXLite(componentSelector).jqxDropDownList('setContent', content);  
            }
            function updateItem(newItem, item) {
                JQXLite(componentSelector).jqxDropDownList('updateItem', newItem, item);  
            }
            function updateAt(item, index) {
                JQXLite(componentSelector).jqxDropDownList('updateAt', item, index);  
            }
            function unselectIndex(index) {
                JQXLite(componentSelector).jqxDropDownList('unselectIndex', index);  
            }
            function unselectItem(item) {
                JQXLite(componentSelector).jqxDropDownList('unselectItem', item);  
            }
            function uncheckIndex(index) {
                JQXLite(componentSelector).jqxDropDownList('uncheckIndex', index);  
            }
            function uncheckItem(item) {
                JQXLite(componentSelector).jqxDropDownList('uncheckItem', item);  
            }
            function uncheckAll() {
                JQXLite(componentSelector).jqxDropDownList('uncheckAll');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('val');
                }
            }
            function _arrowSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('arrowSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('arrowSize');
                }
            }
            function _autoOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('autoOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('autoOpen');
                }
            }
            function _autoDropDownHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('autoDropDownHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('autoDropDownHeight');
                }
            }
            function _autoItemsHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('autoItemsHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('autoItemsHeight');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('animationType');
                }
            }
            function _checkboxes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('checkboxes', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('checkboxes');
                }
            }
            function _closeDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('closeDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('closeDelay');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('disabled');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('displayMember');
                }
            }
            function _dropDownHorizontalAlignment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('dropDownHorizontalAlignment', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('dropDownHorizontalAlignment');
                }
            }
            function _dropDownVerticalAlignment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('dropDownVerticalAlignment', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('dropDownVerticalAlignment');
                }
            }
            function _dropDownHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('dropDownHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('dropDownHeight');
                }
            }
            function _dropDownWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('dropDownWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('dropDownWidth');
                }
            }
            function _dropDownContainer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('dropDownContainer', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('dropDownContainer');
                }
            }
            function _emptyString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('emptyString', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('emptyString');
                }
            }
            function _enableSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('enableSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('enableSelection');
                }
            }
            function _enableBrowserBoundsDetection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('enableBrowserBoundsDetection', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('enableBrowserBoundsDetection');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('enableHover');
                }
            }
            function _equalItemsWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('equalItemsWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('equalItemsWidth');
                }
            }
            function _filterable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('filterable', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('filterable');
                }
            }
            function _filterHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('filterHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('filterHeight');
                }
            }
            function _filterDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('filterDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('filterDelay');
                }
            }
            function _filterPlaceHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('filterPlaceHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('filterPlaceHolder');
                }
            }
            function _focusable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('focusable', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('focusable');
                }
            }
            function _groupMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('groupMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('groupMember');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('height');
                }
            }
            function _hint (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('hint', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('hint');
                }
            }
            function _incrementalSearch (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('incrementalSearch', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('incrementalSearch');
                }
            }
            function _incrementalSearchDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('incrementalSearchDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('incrementalSearchDelay');
                }
            }
            function _itemHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('itemHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('itemHeight');
                }
            }
            function _keyboardSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('keyboardSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('keyboardSelection');
                }
            }
            function _openDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('openDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('openDelay');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('placeHolder');
                }
            }
            function _popupZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('popupZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('popupZIndex');
                }
            }
            function _ready (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('ready', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('ready');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('rtl');
                }
            }
            function _renderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('renderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('renderer');
                }
            }
            function _selectionRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('selectionRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('selectionRenderer');
                }
            }
            function _searchMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('searchMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('searchMode');
                }
            }
            function _searchMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('searchMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('searchMember');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('source');
                }
            }
            function _selectedIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('selectedIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('selectedIndex');
                }
            }
            function _scrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('scrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('scrollBarSize');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('theme');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('template');
                }
            }
            function _touchMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('touchMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('touchMode');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('valueMember');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownList('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownList('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDropDownList(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['arrowSize','autoOpen','autoDropDownHeight','autoItemsHeight','animationType','checkboxes','closeDelay','disabled','displayMember','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownHeight','dropDownWidth','dropDownContainer','emptyString','enableSelection','enableBrowserBoundsDetection','enableHover','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','focusable','groupMember','height','hint','incrementalSearch','incrementalSearchDelay','itemHeight','keyboardSelection','openDelay','placeHolder','popupZIndex','ready','rtl','renderer','selectionRenderer','searchMode','searchMember','source','selectedIndex','scrollBarSize','theme','template','touchMode','valueMember','width'];
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
                 get arrowSize() {
                     return _arrowSize();
                 },
                 set arrowSize(newValue) {
                     _arrowSize(newValue);
                 },
                 get autoOpen() {
                     return _autoOpen();
                 },
                 set autoOpen(newValue) {
                     _autoOpen(newValue);
                 },
                 get autoDropDownHeight() {
                     return _autoDropDownHeight();
                 },
                 set autoDropDownHeight(newValue) {
                     _autoDropDownHeight(newValue);
                 },
                 get autoItemsHeight() {
                     return _autoItemsHeight();
                 },
                 set autoItemsHeight(newValue) {
                     _autoItemsHeight(newValue);
                 },
                 get animationType() {
                     return _animationType();
                 },
                 set animationType(newValue) {
                     _animationType(newValue);
                 },
                 get checkboxes() {
                     return _checkboxes();
                 },
                 set checkboxes(newValue) {
                     _checkboxes(newValue);
                 },
                 get closeDelay() {
                     return _closeDelay();
                 },
                 set closeDelay(newValue) {
                     _closeDelay(newValue);
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
                 get dropDownContainer() {
                     return _dropDownContainer();
                 },
                 set dropDownContainer(newValue) {
                     _dropDownContainer(newValue);
                 },
                 get emptyString() {
                     return _emptyString();
                 },
                 set emptyString(newValue) {
                     _emptyString(newValue);
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
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
                 },
                 get equalItemsWidth() {
                     return _equalItemsWidth();
                 },
                 set equalItemsWidth(newValue) {
                     _equalItemsWidth(newValue);
                 },
                 get filterable() {
                     return _filterable();
                 },
                 set filterable(newValue) {
                     _filterable(newValue);
                 },
                 get filterHeight() {
                     return _filterHeight();
                 },
                 set filterHeight(newValue) {
                     _filterHeight(newValue);
                 },
                 get filterDelay() {
                     return _filterDelay();
                 },
                 set filterDelay(newValue) {
                     _filterDelay(newValue);
                 },
                 get filterPlaceHolder() {
                     return _filterPlaceHolder();
                 },
                 set filterPlaceHolder(newValue) {
                     _filterPlaceHolder(newValue);
                 },
                 get focusable() {
                     return _focusable();
                 },
                 set focusable(newValue) {
                     _focusable(newValue);
                 },
                 get groupMember() {
                     return _groupMember();
                 },
                 set groupMember(newValue) {
                     _groupMember(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get hint() {
                     return _hint();
                 },
                 set hint(newValue) {
                     _hint(newValue);
                 },
                 get incrementalSearch() {
                     return _incrementalSearch();
                 },
                 set incrementalSearch(newValue) {
                     _incrementalSearch(newValue);
                 },
                 get incrementalSearchDelay() {
                     return _incrementalSearchDelay();
                 },
                 set incrementalSearchDelay(newValue) {
                     _incrementalSearchDelay(newValue);
                 },
                 get itemHeight() {
                     return _itemHeight();
                 },
                 set itemHeight(newValue) {
                     _itemHeight(newValue);
                 },
                 get keyboardSelection() {
                     return _keyboardSelection();
                 },
                 set keyboardSelection(newValue) {
                     _keyboardSelection(newValue);
                 },
                 get openDelay() {
                     return _openDelay();
                 },
                 set openDelay(newValue) {
                     _openDelay(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get popupZIndex() {
                     return _popupZIndex();
                 },
                 set popupZIndex(newValue) {
                     _popupZIndex(newValue);
                 },
                 get ready() {
                     return _ready();
                 },
                 set ready(newValue) {
                     _ready(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get renderer() {
                     return _renderer();
                 },
                 set renderer(newValue) {
                     _renderer(newValue);
                 },
                 get selectionRenderer() {
                     return _selectionRenderer();
                 },
                 set selectionRenderer(newValue) {
                     _selectionRenderer(newValue);
                 },
                 get searchMode() {
                     return _searchMode();
                 },
                 set searchMode(newValue) {
                     _searchMode(newValue);
                 },
                 get searchMember() {
                     return _searchMember();
                 },
                 set searchMember(newValue) {
                     _searchMember(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get selectedIndex() {
                     return _selectedIndex();
                 },
                 set selectedIndex(newValue) {
                     _selectedIndex(newValue);
                 },
                 get scrollBarSize() {
                     return _scrollBarSize();
                 },
                 set scrollBarSize(newValue) {
                     _scrollBarSize(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
                 },
                 get touchMode() {
                     return _touchMode();
                 },
                 set touchMode(newValue) {
                     _touchMode(newValue);
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
            let __model__, __syncingModel__ = false;
            function __pushModel__() {
                const v = props.modelValue;
                __model__ = v;
                if (v === undefined || v === null) return;
                __syncingModel__ = true;
                try { JQXLite(componentSelector).jqxDropDownList('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxDropDownList('val');
                __model__ = value;
                context.emit('update:modelValue', value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('bindingComplete', function (event) { that.emit('bindingComplete', event); });
                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('checkChange', function (event) { that.emit('checkChange', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('select', function (event) { that.emit('select', event); });
                JQXLite(componentSelector).on('unselect', function (event) { that.emit('unselect', event); });
                JQXLite(componentSelector).on('itemAdd', function (event) { that.emit('itemAdd', event); });
                JQXLite(componentSelector).on('itemRemove', function (event) { that.emit('itemRemove', event); });
                JQXLite(componentSelector).on('itemUpdate', function (event) { that.emit('itemUpdate', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			// The props that changed, and only those (arrays and objects by reference): all of
			// them again, on every update, reset the widget (JqxGrid bound its source again and
			// showed "Loading...", JqxDropDownList went back to its selectedIndex).
			watch(__manageProps__, (widgetOptions) => {
				if (!__hasJQXLite__ || !__created__) return;
				const changed = {};
				let hasChanges = false;
				for (const key in widgetOptions) {
					if (!Object.is(widgetOptions[key], __appliedProps__[key])) {
						changed[key] = widgetOptions[key];
						hasChanges = true;
					}
				}
				// new data resets the widget's selection: the selection the props ask for goes with it
				if ('source' in changed) {
					for (const key of ['selectedIndex', 'selectedIndexes', 'checkedIndexes', 'value']) {
						if (!(key in changed) && widgetOptions[key] !== undefined) changed[key] = widgetOptions[key];
					}
				}
				__appliedProps__ = widgetOptions;
				if (hasChanges) JQXLite(componentSelector).jqxDropDownList(changed);
				if ('source' in changed) __pushModel__();
			}, { flush: 'post' });
			// v-model: a model changed outside goes into the widget
			watch(() => props.modelValue, (value) => {
				if (__hasJQXLite__ && __created__ && value !== __model__) __pushModel__();
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxDropDownList('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, addItem, clearSelection, clear, close, checkIndex, checkItem, checkAll, clearFilter, destroy, disableItem, disableAt, enableItem, enableAt, ensureVisible, focus, getItem, getItemByValue, getItems, getVisibleItems, getCheckedItems, getSelectedItem, getSelectedIndex, insertAt, isOpened, indeterminateIndex, indeterminateItem, loadFromSelect, open, removeItem, removeAt, selectIndex, selectItem, setContent, updateItem, updateAt, unselectIndex, unselectItem, uncheckIndex, uncheckItem, uncheckAll, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
