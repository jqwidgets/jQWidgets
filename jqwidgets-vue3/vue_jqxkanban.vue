<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxsortable.js';
    import '../jqwidgets/jqxsplitter.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxkanban.js';

    export default {
        props: {
            columnRenderer: Function,
            columns: Array,
            connectWith: String,
            headerHeight: Number,
            headerWidth: Number,
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
            theme: String,
            width: [String, Number],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["columnAttrClicked","columnCollapsed","columnExpanded","itemAttrClicked","itemMoved"],
        setup(props, context) {
			const id = "jqxKanban" + JQXLite.generateID();
			const componentSelector = '#' + id;
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
            function destroy() {
                JQXLite(componentSelector).jqxKanban('destroy');  
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
            function removeItem(itemId) {
                JQXLite(componentSelector).jqxKanban('removeItem', itemId);  
            }
            function updateItem(itemId, newContent) {
                JQXLite(componentSelector).jqxKanban('updateItem', itemId, newContent);  
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
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['columnRenderer','columns','connectWith','headerHeight','headerWidth','height','itemRenderer','ready','rtl','source','resources','template','templateContent','theme','width'];
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
                JQXLite(componentSelector).on('itemAttrClicked', function (event) { that.emit('itemAttrClicked', event); });
                JQXLite(componentSelector).on('itemMoved', function (event) { that.emit('itemMoved', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxKanban(widgetOptions);
			})
			return {id, componentSelector, addItem,destroy,getColumn,getColumnItems,getItems,removeItem,updateItem, setOptions, options, getOptions, createComponent};
        },
    }
</script>
