<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxribbon.js';
    import '../jqwidgets/jqxmenu.js';
    import '../jqwidgets/jqxlayout.js';

    export default {
        props: {
            contextMenu: {
                default: false,
                type: Boolean
            },
            height: [String, Number],
            layout: Array,
            minGroupHeight: Number,
            minGroupWidth: Number,
            resizable: {
                default: true,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            width: [String, Number],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["pin","resize","unpin"],
        setup(props, context) {
			const id = "jqxLayout" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxLayout(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxLayout(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxLayout('destroy');  
            }
            function loadLayout(Layout) {
                JQXLite(componentSelector).jqxLayout('loadLayout', Layout);  
            }
            function refresh() {
                JQXLite(componentSelector).jqxLayout('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxLayout('render');  
            }
            function saveLayout() {
                return JQXLite(componentSelector).jqxLayout('saveLayout');  
            }
            function _contextMenu (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('contextMenu', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('contextMenu');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('height');
                }
            }
            function _layout (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('layout', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('layout');
                }
            }
            function _minGroupHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('minGroupHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('minGroupHeight');
                }
            }
            function _minGroupWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('minGroupWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('minGroupWidth');
                }
            }
            function _resizable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('resizable', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('resizable');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLayout('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxLayout('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxLayout(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['contextMenu','height','layout','minGroupHeight','minGroupWidth','resizable','rtl','theme','width'];
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
                 get contextMenu() {
                     return _contextMenu();
                 },
                 set contextMenu(newValue) {
                     _contextMenu(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get layout() {
                     return _layout();
                 },
                 set layout(newValue) {
                     _layout(newValue);
                 },
                 get minGroupHeight() {
                     return _minGroupHeight();
                 },
                 set minGroupHeight(newValue) {
                     _minGroupHeight(newValue);
                 },
                 get minGroupWidth() {
                     return _minGroupWidth();
                 },
                 set minGroupWidth(newValue) {
                     _minGroupWidth(newValue);
                 },
                 get resizable() {
                     return _resizable();
                 },
                 set resizable(newValue) {
                     _resizable(newValue);
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
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('pin', function (event) { that.emit('pin', event); });
                JQXLite(componentSelector).on('resize', function (event) { that.emit('resize', event); });
                JQXLite(componentSelector).on('unpin', function (event) { that.emit('unpin', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxLayout(widgetOptions);
			})
			return {id, componentSelector, destroy,loadLayout,refresh,render,saveLayout, setOptions, options, getOptions, createComponent};
        },
    }
</script>
