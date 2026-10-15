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
    import '../jqwidgets/jqxpicklist.js';

    export default {
        props: {
            width: [String, Number],
            height: [String, Number],
            source: [Array, Object],
            selectedItems: Array,
            displayMember: String,
            valueMember: String,
            sourceHeader: String,
            targetHeader: String,
            showCounts: {
                default: true,
                type: Boolean
            },
            filterable: {
                default: false,
                type: Boolean
            },
            filterPlaceHolder: String,
            searchMode: String,
            checkboxes: {
                default: false,
                type: Boolean
            },
            reorderable: {
                default: false,
                type: Boolean
            },
            renderer: Function,
            buttons: Array,
            itemHeight: Number,
            sourceLabel: String,
            targetLabel: String,
            disabled: {
                default: false,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["create","change","itemsAdded","itemsRemoved","reordered"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxPickList" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxPickList(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxPickList(usedProps[i]);
                }
                return resultToReturn;
            }
            function getSelectedItems() {
                return JQXLite(componentSelector).jqxPickList('getSelectedItems');  
            }
            function getSelectedValues() {
                return JQXLite(componentSelector).jqxPickList('getSelectedValues');  
            }
            function getSource() {
                return JQXLite(componentSelector).jqxPickList('getSource');  
            }
            function add(values) {
                JQXLite(componentSelector).jqxPickList('add', values);  
            }
            function remove(values) {
                JQXLite(componentSelector).jqxPickList('remove', values);  
            }
            function addAll() {
                JQXLite(componentSelector).jqxPickList('addAll');  
            }
            function removeAll() {
                JQXLite(componentSelector).jqxPickList('removeAll');  
            }
            function moveUp() {
                JQXLite(componentSelector).jqxPickList('moveUp');  
            }
            function moveDown() {
                JQXLite(componentSelector).jqxPickList('moveDown');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxPickList('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxPickList('val');
                }
            }
            function focus() {
                JQXLite(componentSelector).jqxPickList('focus');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxPickList('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxPickList('render');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxPickList('destroy');  
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('width');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('height');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('source');
                }
            }
            function _selectedItems (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('selectedItems', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('selectedItems');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('displayMember');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('valueMember');
                }
            }
            function _sourceHeader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('sourceHeader', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('sourceHeader');
                }
            }
            function _targetHeader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('targetHeader', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('targetHeader');
                }
            }
            function _showCounts (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('showCounts', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('showCounts');
                }
            }
            function _filterable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('filterable', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('filterable');
                }
            }
            function _filterPlaceHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('filterPlaceHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('filterPlaceHolder');
                }
            }
            function _searchMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('searchMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('searchMode');
                }
            }
            function _checkboxes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('checkboxes', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('checkboxes');
                }
            }
            function _reorderable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('reorderable', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('reorderable');
                }
            }
            function _renderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('renderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('renderer');
                }
            }
            function _buttons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('buttons', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('buttons');
                }
            }
            function _itemHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('itemHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('itemHeight');
                }
            }
            function _sourceLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('sourceLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('sourceLabel');
                }
            }
            function _targetLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('targetLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('targetLabel');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('disabled');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPickList('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxPickList('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxPickList(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['width','height','source','selectedItems','displayMember','valueMember','sourceHeader','targetHeader','showCounts','filterable','filterPlaceHolder','searchMode','checkboxes','reorderable','renderer','buttons','itemHeight','sourceLabel','targetLabel','disabled','rtl','theme'];
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
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get selectedItems() {
                     return _selectedItems();
                 },
                 set selectedItems(newValue) {
                     _selectedItems(newValue);
                 },
                 get displayMember() {
                     return _displayMember();
                 },
                 set displayMember(newValue) {
                     _displayMember(newValue);
                 },
                 get valueMember() {
                     return _valueMember();
                 },
                 set valueMember(newValue) {
                     _valueMember(newValue);
                 },
                 get sourceHeader() {
                     return _sourceHeader();
                 },
                 set sourceHeader(newValue) {
                     _sourceHeader(newValue);
                 },
                 get targetHeader() {
                     return _targetHeader();
                 },
                 set targetHeader(newValue) {
                     _targetHeader(newValue);
                 },
                 get showCounts() {
                     return _showCounts();
                 },
                 set showCounts(newValue) {
                     _showCounts(newValue);
                 },
                 get filterable() {
                     return _filterable();
                 },
                 set filterable(newValue) {
                     _filterable(newValue);
                 },
                 get filterPlaceHolder() {
                     return _filterPlaceHolder();
                 },
                 set filterPlaceHolder(newValue) {
                     _filterPlaceHolder(newValue);
                 },
                 get searchMode() {
                     return _searchMode();
                 },
                 set searchMode(newValue) {
                     _searchMode(newValue);
                 },
                 get checkboxes() {
                     return _checkboxes();
                 },
                 set checkboxes(newValue) {
                     _checkboxes(newValue);
                 },
                 get reorderable() {
                     return _reorderable();
                 },
                 set reorderable(newValue) {
                     _reorderable(newValue);
                 },
                 get renderer() {
                     return _renderer();
                 },
                 set renderer(newValue) {
                     _renderer(newValue);
                 },
                 get buttons() {
                     return _buttons();
                 },
                 set buttons(newValue) {
                     _buttons(newValue);
                 },
                 get itemHeight() {
                     return _itemHeight();
                 },
                 set itemHeight(newValue) {
                     _itemHeight(newValue);
                 },
                 get sourceLabel() {
                     return _sourceLabel();
                 },
                 set sourceLabel(newValue) {
                     _sourceLabel(newValue);
                 },
                 get targetLabel() {
                     return _targetLabel();
                 },
                 set targetLabel(newValue) {
                     _targetLabel(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('create', function (event) { that.emit('create', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector).on('itemsAdded', function (event) { that.emit('itemsAdded', event); });
                JQXLite(componentSelector).on('itemsRemoved', function (event) { that.emit('itemsRemoved', event); });
                JQXLite(componentSelector).on('reordered', function (event) { that.emit('reordered', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxPickList(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxPickList('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, getSelectedItems, getSelectedValues, getSource, add, remove, addAll, removeAll, moveUp, moveDown, val, focus, refresh, render, destroy, setOptions, options, getOptions, createComponent};
        },
    }
</script>
