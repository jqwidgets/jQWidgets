<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxsortable.js';
    import '../jqwidgets/jqxsplitter.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxkanban.js';

    export default {
        props: {
            animationDelay: Number,
            columnRenderer: Function,
            columns: Array,
            connectWith: String,
            headerHeight: Number,
            headerWidth: Number,
            handle: String,
            height: [String, Number],
            itemRenderer: Function,
            ready: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            source: [Array, Object],
            resources: [Array, Object],
            template: String,
            templateContent: Object,
            verticalTextOrientation: String,
            theme: String,
            width: [String, Number],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["columnAttrClicked","columnCollapsed","columnExpanded","columnSelected","columnUnselected","itemAttrClicked","itemCreated","itemMoved","itemReceived","itemSelected"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxKanban" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxKanban(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxKanban(usedProps[i]);
                }
                return resultToReturn;
            }
            function addItem(newItem) {
                JQXLite(componentSelector).jqxKanban('addItem', newItem);  
            }
            function collapseColumn(dataField) {
                return JQXLite(componentSelector).jqxKanban('collapseColumn', dataField);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxKanban('destroy');  
            }
            function expandColumn(dataField) {
                return JQXLite(componentSelector).jqxKanban('expandColumn', dataField);  
            }
            function getColumn(dataField) {
                return JQXLite(componentSelector).jqxKanban('getColumn', dataField);  
            }
            function getColumnItems(dataField) {
                return JQXLite(componentSelector).jqxKanban('getColumnItems', dataField);  
            }
            function getItems() {
                return JQXLite(componentSelector).jqxKanban('getItems');  
            }
            function getSelectedColumn() {
                return JQXLite(componentSelector).jqxKanban('getSelectedColumn');  
            }
            function getSelectedItem() {
                return JQXLite(componentSelector).jqxKanban('getSelectedItem');  
            }
            function removeItem(itemId) {
                JQXLite(componentSelector).jqxKanban('removeItem', itemId);  
            }
            function selectItem(itemId) {
                JQXLite(componentSelector).jqxKanban('selectItem', itemId);  
            }
            function updateItem(itemId, newContent) {
                JQXLite(componentSelector).jqxKanban('updateItem', itemId, newContent);  
            }
            function _animationDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('animationDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('animationDelay');
                }
            }
            function _columnRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('columnRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('columnRenderer');
                }
            }
            function _columns (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('columns', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('columns');
                }
            }
            function _connectWith (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('connectWith', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('connectWith');
                }
            }
            function _headerHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('headerHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('headerHeight');
                }
            }
            function _headerWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('headerWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('headerWidth');
                }
            }
            function _handle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('handle', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('handle');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('height');
                }
            }
            function _itemRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('itemRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('itemRenderer');
                }
            }
            function _ready (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('ready', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('ready');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('rtl');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('source');
                }
            }
            function _resources (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('resources', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('resources');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('template');
                }
            }
            function _templateContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('templateContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('templateContent');
                }
            }
            function _verticalTextOrientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('verticalTextOrientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('verticalTextOrientation');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKanban('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxKanban('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxKanban(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDelay','columnRenderer','columns','connectWith','headerHeight','headerWidth','handle','height','itemRenderer','ready','rtl','source','resources','template','templateContent','verticalTextOrientation','theme','width'];
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
                 get animationDelay() {
                     return _animationDelay();
                 },
                 set animationDelay(newValue) {
                     _animationDelay(newValue);
                 },
                 get columnRenderer() {
                     return _columnRenderer();
                 },
                 set columnRenderer(newValue) {
                     _columnRenderer(newValue);
                 },
                 get columns() {
                     return _columns();
                 },
                 set columns(newValue) {
                     _columns(newValue);
                 },
                 get connectWith() {
                     return _connectWith();
                 },
                 set connectWith(newValue) {
                     _connectWith(newValue);
                 },
                 get headerHeight() {
                     return _headerHeight();
                 },
                 set headerHeight(newValue) {
                     _headerHeight(newValue);
                 },
                 get headerWidth() {
                     return _headerWidth();
                 },
                 set headerWidth(newValue) {
                     _headerWidth(newValue);
                 },
                 get handle() {
                     return _handle();
                 },
                 set handle(newValue) {
                     _handle(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get itemRenderer() {
                     return _itemRenderer();
                 },
                 set itemRenderer(newValue) {
                     _itemRenderer(newValue);
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
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get resources() {
                     return _resources();
                 },
                 set resources(newValue) {
                     _resources(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
                 },
                 get templateContent() {
                     return _templateContent();
                 },
                 set templateContent(newValue) {
                     _templateContent(newValue);
                 },
                 get verticalTextOrientation() {
                     return _verticalTextOrientation();
                 },
                 set verticalTextOrientation(newValue) {
                     _verticalTextOrientation(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
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

                JQXLite(componentSelector).on('columnAttrClicked', function (event) { that.emit('columnAttrClicked', event); });
                JQXLite(componentSelector).on('columnCollapsed', function (event) { that.emit('columnCollapsed', event); });
                JQXLite(componentSelector).on('columnExpanded', function (event) { that.emit('columnExpanded', event); });
                JQXLite(componentSelector).on('columnSelected', function (event) { that.emit('columnSelected', event); });
                JQXLite(componentSelector).on('columnUnselected', function (event) { that.emit('columnUnselected', event); });
                JQXLite(componentSelector).on('itemAttrClicked', function (event) { that.emit('itemAttrClicked', event); });
                JQXLite(componentSelector).on('itemCreated', function (event) { that.emit('itemCreated', event); });
                JQXLite(componentSelector).on('itemMoved', function (event) { that.emit('itemMoved', event); });
                JQXLite(componentSelector).on('itemReceived', function (event) { that.emit('itemReceived', event); });
                JQXLite(componentSelector).on('itemSelected', function (event) { that.emit('itemSelected', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxKanban(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxKanban('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, addItem, collapseColumn, destroy, expandColumn, getColumn, getColumnItems, getItems, getSelectedColumn, getSelectedItem, removeItem, selectItem, updateItem, setOptions, options, getOptions, createComponent};
        },
    }
</script>
