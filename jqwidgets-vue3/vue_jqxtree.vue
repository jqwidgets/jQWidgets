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
    import '../jqwidgets/jqxpanel.js';
    import '../jqwidgets/jqxdragdrop.js';
    import '../jqwidgets/jqxtree.js';
    import '../jqwidgets/jqxcheckbox.js';

    export default {
        props: {
            animationShowDuration: Number,
            animationHideDuration: Number,
            allowDrag: {
                default: true,
                type: Boolean
            },
            allowDrop: {
                default: true,
                type: Boolean
            },
            checkboxes: {
                default: false,
                type: Boolean
            },
            checkSize: Number,
            dragStart: Function,
            dragEnd: Function,
            disabled: {
                default: false,
                type: Boolean
            },
            displayMember: String,
            easing: String,
            enableHover: {
                default: true,
                type: Boolean
            },
            height: [Number, String],
            hasThreeStates: {
                default: false,
                type: Boolean
            },
            incrementalSearch: {
                default: true,
                type: Boolean
            },
            itemsMember: String,
            keyboardNavigation: {
                default: true,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            source: [Array, Object],
            submitCheckedItems: {
                default: false,
                type: Boolean
            },
            toggleIndicatorSize: Number,
            toggleMode: String,
            theme: String,
            valueMember: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["added","checkChange","collapse","dragStart","dragEnd","expand","initialized","itemClick","removed","select"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxTree" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTree(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTree(usedProps[i]);
                }
                return resultToReturn;
            }
            function addBefore(item, id) {
                JQXLite(componentSelector).jqxTree('addBefore', item, id);  
            }
            function addAfter(item, id) {
                JQXLite(componentSelector).jqxTree('addAfter', item, id);  
            }
            function addTo(item, id) {
                JQXLite(componentSelector).jqxTree('addTo', item, id);  
            }
            function clear() {
                JQXLite(componentSelector).jqxTree('clear');  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxTree('clearSelection');  
            }
            function checkAll() {
                JQXLite(componentSelector).jqxTree('checkAll');  
            }
            function checkItem(item, checked) {
                JQXLite(componentSelector).jqxTree('checkItem', item, checked);  
            }
            function collapseAll() {
                JQXLite(componentSelector).jqxTree('collapseAll');  
            }
            function collapseItem(item) {
                JQXLite(componentSelector).jqxTree('collapseItem', item);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxTree('destroy');  
            }
            function disableCheckbox(item) {
                JQXLite(componentSelector).jqxTree('disableCheckbox', item);  
            }
            function disableItem(item) {
                JQXLite(componentSelector).jqxTree('disableItem', item);  
            }
            function ensureVisible(item) {
                JQXLite(componentSelector).jqxTree('ensureVisible', item);  
            }
            function enableCheckbox(item) {
                JQXLite(componentSelector).jqxTree('enableCheckbox', item);  
            }
            function enableItem(item) {
                JQXLite(componentSelector).jqxTree('enableItem', item);  
            }
            function enableAll() {
                JQXLite(componentSelector).jqxTree('enableAll');  
            }
            function expandAll() {
                JQXLite(componentSelector).jqxTree('expandAll');  
            }
            function expandItem(item) {
                JQXLite(componentSelector).jqxTree('expandItem', item);  
            }
            function focus() {
                JQXLite(componentSelector).jqxTree('focus');  
            }
            function getCheckedItems() {
                return JQXLite(componentSelector).jqxTree('getCheckedItems');  
            }
            function getUncheckedItems() {
                return JQXLite(componentSelector).jqxTree('getUncheckedItems');  
            }
            function getItems() {
                return JQXLite(componentSelector).jqxTree('getItems');  
            }
            function getItem(element) {
                return JQXLite(componentSelector).jqxTree('getItem', element);  
            }
            function getSelectedItem() {
                return JQXLite(componentSelector).jqxTree('getSelectedItem');  
            }
            function getPrevItem(item) {
                return JQXLite(componentSelector).jqxTree('getPrevItem', item);  
            }
            function getNextItem(item) {
                return JQXLite(componentSelector).jqxTree('getNextItem', item);  
            }
            function hitTest(left, top) {
                return JQXLite(componentSelector).jqxTree('hitTest', left, top);  
            }
            function isExpanded(element) {
                return JQXLite(componentSelector).jqxTree('isExpanded', element);  
            }
            function isSelected(element) {
                return JQXLite(componentSelector).jqxTree('isSelected', element);  
            }
            function lockItem(element) {
                JQXLite(componentSelector).jqxTree('lockItem', element);  
            }
            function removeItem(item) {
                JQXLite(componentSelector).jqxTree('removeItem', item);  
            }
            function render() {
                JQXLite(componentSelector).jqxTree('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxTree('refresh');  
            }
            function selectItem(item) {
                JQXLite(componentSelector).jqxTree('selectItem', item);  
            }
            function uncheckAll() {
                JQXLite(componentSelector).jqxTree('uncheckAll');  
            }
            function uncheckItem(item) {
                JQXLite(componentSelector).jqxTree('uncheckItem', item);  
            }
            function unlockItem(element) {
                JQXLite(componentSelector).jqxTree('unlockItem', element);  
            }
            function updateItem(item, newItem) {
                JQXLite(componentSelector).jqxTree('updateItem', item, newItem);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxTree('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxTree('val');
                }
            }
            function _animationShowDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('animationShowDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('animationShowDuration');
                }
            }
            function _animationHideDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('animationHideDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('animationHideDuration');
                }
            }
            function _allowDrag (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('allowDrag', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('allowDrag');
                }
            }
            function _allowDrop (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('allowDrop', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('allowDrop');
                }
            }
            function _checkboxes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('checkboxes', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('checkboxes');
                }
            }
            function _checkSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('checkSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('checkSize');
                }
            }
            function _dragStart (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('dragStart', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('dragStart');
                }
            }
            function _dragEnd (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('dragEnd', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('dragEnd');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('disabled');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('displayMember');
                }
            }
            function _easing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('easing', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('easing');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('enableHover');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('height');
                }
            }
            function _hasThreeStates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('hasThreeStates', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('hasThreeStates');
                }
            }
            function _incrementalSearch (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('incrementalSearch', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('incrementalSearch');
                }
            }
            function _itemsMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('itemsMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('itemsMember');
                }
            }
            function _keyboardNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('keyboardNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('keyboardNavigation');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('rtl');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('source');
                }
            }
            function _submitCheckedItems (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('submitCheckedItems', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('submitCheckedItems');
                }
            }
            function _toggleIndicatorSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('toggleIndicatorSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('toggleIndicatorSize');
                }
            }
            function _toggleMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('toggleMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('toggleMode');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('theme');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('valueMember');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTree(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationShowDuration','animationHideDuration','allowDrag','allowDrop','checkboxes','checkSize','dragStart','dragEnd','disabled','displayMember','easing','enableHover','height','hasThreeStates','incrementalSearch','itemsMember','keyboardNavigation','rtl','source','submitCheckedItems','toggleIndicatorSize','toggleMode','theme','valueMember','width'];
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
                 get animationShowDuration() {
                     return _animationShowDuration();
                 },
                 set animationShowDuration(newValue) {
                     _animationShowDuration(newValue);
                 },
                 get animationHideDuration() {
                     return _animationHideDuration();
                 },
                 set animationHideDuration(newValue) {
                     _animationHideDuration(newValue);
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
                 get checkSize() {
                     return _checkSize();
                 },
                 set checkSize(newValue) {
                     _checkSize(newValue);
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
                 get easing() {
                     return _easing();
                 },
                 set easing(newValue) {
                     _easing(newValue);
                 },
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
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
                 get incrementalSearch() {
                     return _incrementalSearch();
                 },
                 set incrementalSearch(newValue) {
                     _incrementalSearch(newValue);
                 },
                 get itemsMember() {
                     return _itemsMember();
                 },
                 set itemsMember(newValue) {
                     _itemsMember(newValue);
                 },
                 get keyboardNavigation() {
                     return _keyboardNavigation();
                 },
                 set keyboardNavigation(newValue) {
                     _keyboardNavigation(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get submitCheckedItems() {
                     return _submitCheckedItems();
                 },
                 set submitCheckedItems(newValue) {
                     _submitCheckedItems(newValue);
                 },
                 get toggleIndicatorSize() {
                     return _toggleIndicatorSize();
                 },
                 set toggleIndicatorSize(newValue) {
                     _toggleIndicatorSize(newValue);
                 },
                 get toggleMode() {
                     return _toggleMode();
                 },
                 set toggleMode(newValue) {
                     _toggleMode(newValue);
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
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('added', function (event) { that.emit('added', event); });
                JQXLite(componentSelector).on('checkChange', function (event) { that.emit('checkChange', event); });
                JQXLite(componentSelector).on('collapse', function (event) { that.emit('collapse', event); });
                JQXLite(componentSelector).on('dragStart', function (event) { that.emit('dragStart', event); });
                JQXLite(componentSelector).on('dragEnd', function (event) { that.emit('dragEnd', event); });
                JQXLite(componentSelector).on('expand', function (event) { that.emit('expand', event); });
                JQXLite(componentSelector).on('initialized', function (event) { that.emit('initialized', event); });
                JQXLite(componentSelector).on('itemClick', function (event) { that.emit('itemClick', event); });
                JQXLite(componentSelector).on('removed', function (event) { that.emit('removed', event); });
                JQXLite(componentSelector).on('select', function (event) { that.emit('select', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxTree(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxTree('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, addBefore, addAfter, addTo, clear, clearSelection, checkAll, checkItem, collapseAll, collapseItem, destroy, disableCheckbox, disableItem, ensureVisible, enableCheckbox, enableItem, enableAll, expandAll, expandItem, focus, getCheckedItems, getUncheckedItems, getItems, getItem, getSelectedItem, getPrevItem, getNextItem, hitTest, isExpanded, isSelected, lockItem, removeItem, render, refresh, selectItem, uncheckAll, uncheckItem, unlockItem, updateItem, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
