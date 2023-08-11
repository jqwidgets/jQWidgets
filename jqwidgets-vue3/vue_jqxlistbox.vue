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
    import '../jqwidgets/jqxdragdrop.js';

    export default {
        props: {
            modelValue: String,
            autoHeight: {
                default: false,
                type: Boolean
            },
            allowDrag: {
                default: false,
                type: Boolean
            },
            allowDrop: {
                default: false,
                type: Boolean
            },
            checkboxes: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            displayMember: String,
            dropAction: String,
            dragStart: Function,
            dragEnd: Function,
            enableHover: {
                default: true,
                type: Boolean
            },
            enableSelection: {
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
            height: [String, Number],
            hasThreeStates: {
                default: false,
                type: Boolean
            },
            itemHeight: Number,
            incrementalSearch: {
                default: true,
                type: Boolean
            },
            incrementalSearchDelay: Number,
            multiple: {
                default: false,
                type: Boolean
            },
            multipleextended: {
                default: false,
                type: Boolean
            },
            renderer: Function,
            rendered: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            selectedIndex: Number,
            selectedIndexes: Object,
            source: [Array, Object],
            scrollBarSize: Number,
            searchMode: String,
            theme: String,
            valueMember: String,
            width: [String, Number],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","bindingComplete","change","checkChange","dragStart","dragEnd","select","unselect"],
        setup(props, context) {
			const id = "jqxListBox" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxListBox(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxListBox(usedProps[i]);
                }
                return resultToReturn;
            }
            function addItem(Item) {
                JQXLite(componentSelector).jqxListBox('addItem', Item);  
            }
            function beginUpdate() {
                JQXLite(componentSelector).jqxListBox('beginUpdate');  
            }
            function clear() {
                JQXLite(componentSelector).jqxListBox('clear');  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxListBox('clearSelection');  
            }
            function checkIndex(Index) {
                JQXLite(componentSelector).jqxListBox('checkIndex', Index);  
            }
            function checkItem(Item) {
                JQXLite(componentSelector).jqxListBox('checkItem', Item);  
            }
            function checkAll() {
                JQXLite(componentSelector).jqxListBox('checkAll');  
            }
            function clearFilter() {
                JQXLite(componentSelector).jqxListBox('clearFilter');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxListBox('destroy');  
            }
            function disableItem(Item) {
                JQXLite(componentSelector).jqxListBox('disableItem', Item);  
            }
            function disableAt(Index) {
                JQXLite(componentSelector).jqxListBox('disableAt', Index);  
            }
            function enableItem(Item) {
                JQXLite(componentSelector).jqxListBox('enableItem', Item);  
            }
            function enableAt(Index) {
                JQXLite(componentSelector).jqxListBox('enableAt', Index);  
            }
            function ensureVisible(item) {
                JQXLite(componentSelector).jqxListBox('ensureVisible', item);  
            }
            function endUpdate() {
                JQXLite(componentSelector).jqxListBox('endUpdate');  
            }
            function focus() {
                JQXLite(componentSelector).jqxListBox('focus');  
            }
            function getItems() {
                return JQXLite(componentSelector).jqxListBox('getItems');  
            }
            function getSelectedItems() {
                return JQXLite(componentSelector).jqxListBox('getSelectedItems');  
            }
            function getCheckedItems() {
                return JQXLite(componentSelector).jqxListBox('getCheckedItems');  
            }
            function getItem(Index) {
                return JQXLite(componentSelector).jqxListBox('getItem', Index);  
            }
            function getItemByValue(Item) {
                return JQXLite(componentSelector).jqxListBox('getItemByValue', Item);  
            }
            function getSelectedItem() {
                return JQXLite(componentSelector).jqxListBox('getSelectedItem');  
            }
            function getSelectedIndex() {
                return JQXLite(componentSelector).jqxListBox('getSelectedIndex');  
            }
            function insertAt(Item, Index) {
                JQXLite(componentSelector).jqxListBox('insertAt', Item, Index);  
            }
            function invalidate() {
                JQXLite(componentSelector).jqxListBox('invalidate');  
            }
            function indeterminateItem(Item) {
                JQXLite(componentSelector).jqxListBox('indeterminateItem', Item);  
            }
            function indeterminateIndex(Index) {
                JQXLite(componentSelector).jqxListBox('indeterminateIndex', Index);  
            }
            function loadFromSelect(selector) {
                JQXLite(componentSelector).jqxListBox('loadFromSelect', selector);  
            }
            function removeItem(Item) {
                JQXLite(componentSelector).jqxListBox('removeItem', Item);  
            }
            function removeAt(Index) {
                JQXLite(componentSelector).jqxListBox('removeAt', Index);  
            }
            function render() {
                JQXLite(componentSelector).jqxListBox('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxListBox('refresh');  
            }
            function selectItem(Item) {
                JQXLite(componentSelector).jqxListBox('selectItem', Item);  
            }
            function selectIndex(Index) {
                JQXLite(componentSelector).jqxListBox('selectIndex', Index);  
            }
            function updateItem(Item, Value) {
                JQXLite(componentSelector).jqxListBox('updateItem', Item, Value);  
            }
            function updateAt(item, index) {
                JQXLite(componentSelector).jqxListBox('updateAt', item, index);  
            }
            function unselectIndex(index) {
                JQXLite(componentSelector).jqxListBox('unselectIndex', index);  
            }
            function unselectItem(item) {
                JQXLite(componentSelector).jqxListBox('unselectItem', item);  
            }
            function uncheckIndex(index) {
                JQXLite(componentSelector).jqxListBox('uncheckIndex', index);  
            }
            function uncheckItem(item) {
                JQXLite(componentSelector).jqxListBox('uncheckItem', item);  
            }
            function uncheckAll() {
                JQXLite(componentSelector).jqxListBox('uncheckAll');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxListBox('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxListBox('val');
                }
            }
            function _autoHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('autoHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('autoHeight');
                }
            }
            function _allowDrag (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('allowDrag', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('allowDrag');
                }
            }
            function _allowDrop (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('allowDrop', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('allowDrop');
                }
            }
            function _checkboxes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('checkboxes', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('checkboxes');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('disabled');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('displayMember');
                }
            }
            function _dropAction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('dropAction', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('dropAction');
                }
            }
            function _dragStart (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('dragStart', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('dragStart');
                }
            }
            function _dragEnd (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('dragEnd', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('dragEnd');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('enableHover');
                }
            }
            function _enableSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('enableSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('enableSelection');
                }
            }
            function _equalItemsWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('equalItemsWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('equalItemsWidth');
                }
            }
            function _filterable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('filterable', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('filterable');
                }
            }
            function _filterHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('filterHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('filterHeight');
                }
            }
            function _filterDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('filterDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('filterDelay');
                }
            }
            function _filterPlaceHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('filterPlaceHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('filterPlaceHolder');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('height');
                }
            }
            function _hasThreeStates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('hasThreeStates', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('hasThreeStates');
                }
            }
            function _itemHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('itemHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('itemHeight');
                }
            }
            function _incrementalSearch (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('incrementalSearch', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('incrementalSearch');
                }
            }
            function _incrementalSearchDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('incrementalSearchDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('incrementalSearchDelay');
                }
            }
            function _multiple (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('multiple', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('multiple');
                }
            }
            function _multipleextended (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('multipleextended', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('multipleextended');
                }
            }
            function _renderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('renderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('renderer');
                }
            }
            function _rendered (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('rendered', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('rendered');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('rtl');
                }
            }
            function _selectedIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('selectedIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('selectedIndex');
                }
            }
            function _selectedIndexes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('selectedIndexes', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('selectedIndexes');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('source');
                }
            }
            function _scrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('scrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('scrollBarSize');
                }
            }
            function _searchMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('searchMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('searchMode');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('theme');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('valueMember');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListBox('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxListBox('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxListBox(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['autoHeight','allowDrag','allowDrop','checkboxes','disabled','displayMember','dropAction','dragStart','dragEnd','enableHover','enableSelection','equalItemsWidth','filterable','filterHeight','filterDelay','filterPlaceHolder','height','hasThreeStates','itemHeight','incrementalSearch','incrementalSearchDelay','multiple','multipleextended','renderer','rendered','rtl','selectedIndex','selectedIndexes','source','scrollBarSize','searchMode','theme','valueMember','width'];
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
                 get autoHeight() {
                     return _autoHeight();
                 },
                 set autoHeight(newValue) {
                     _autoHeight(newValue);
                 },
                 get allowDrag() {
                     return _allowDrag();
                 },
                 set allowDrag(newValue) {
                     _allowDrag(newValue);
                 },
                 get allowDrop() {
                     return _allowDrop();
                 },
                 set allowDrop(newValue) {
                     _allowDrop(newValue);
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
                 get dropAction() {
                     return _dropAction();
                 },
                 set dropAction(newValue) {
                     _dropAction(newValue);
                 },
                 get dragStart() {
                     return _dragStart();
                 },
                 set dragStart(newValue) {
                     _dragStart(newValue);
                 },
                 get dragEnd() {
                     return _dragEnd();
                 },
                 set dragEnd(newValue) {
                     _dragEnd(newValue);
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
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get hasThreeStates() {
                     return _hasThreeStates();
                 },
                 set hasThreeStates(newValue) {
                     _hasThreeStates(newValue);
                 },
                 get itemHeight() {
                     return _itemHeight();
                 },
                 set itemHeight(newValue) {
                     _itemHeight(newValue);
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
                 get multiple() {
                     return _multiple();
                 },
                 set multiple(newValue) {
                     _multiple(newValue);
                 },
                 get multipleextended() {
                     return _multipleextended();
                 },
                 set multipleextended(newValue) {
                     _multipleextended(newValue);
                 },
                 get renderer() {
                     return _renderer();
                 },
                 set renderer(newValue) {
                     _renderer(newValue);
                 },
                 get rendered() {
                     return _rendered();
                 },
                 set rendered(newValue) {
                     _rendered(newValue);
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
                 get selectedIndexes() {
                     return _selectedIndexes();
                 },
                 set selectedIndexes(newValue) {
                     _selectedIndexes(newValue);
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
                 get searchMode() {
                     return _searchMode();
                 },
                 set searchMode(newValue) {
                     _searchMode(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
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
                const value = JQXLite(componentSelector).jqxListBox('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('bindingComplete', function (event) { that.emit('bindingComplete', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('checkChange', function (event) { that.emit('checkChange', event); });
                JQXLite(componentSelector).on('dragStart', function (event) { that.emit('dragStart', event); });
                JQXLite(componentSelector).on('dragEnd', function (event) { that.emit('dragEnd', event); });
                JQXLite(componentSelector).on('select', function (event) { that.emit('select', event); });
                JQXLite(componentSelector).on('unselect', function (event) { that.emit('unselect', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxListBox(widgetOptions);
			})
			return {id, componentSelector, addItem,beginUpdate,clear,clearSelection,checkIndex,checkItem,checkAll,clearFilter,destroy,disableItem,disableAt,enableItem,enableAt,ensureVisible,endUpdate,focus,getItems,getSelectedItems,getCheckedItems,getItem,getItemByValue,getSelectedItem,getSelectedIndex,insertAt,invalidate,indeterminateItem,indeterminateIndex,loadFromSelect,removeItem,removeAt,render,refresh,selectItem,selectIndex,updateItem,updateAt,unselectIndex,unselectItem,uncheckIndex,uncheckItem,uncheckAll,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
