<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxwindow.js';
    import '../jqwidgets/jqxribbon.js';
    import '../jqwidgets/jqxlayout.js';
    import '../jqwidgets/jqxmenu.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxdockinglayout.js';

    export default {
        props: {
            contextMenu: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
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
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["dock","floatGroupClosed","float","pin","resize","unpin"],
        setup(props, context) {
			const id = "jqxDockingLayout" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxDockingLayout(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxDockingLayout(usedProps[i]);
                }
                return resultToReturn;
            }
            function addFloatGroup(width, height, position, panelType, title, content, initContent) {
                JQXLite(componentSelector).jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxDockingLayout('destroy');  
            }
            function loadLayout(layout) {
                JQXLite(componentSelector).jqxDockingLayout('loadLayout', layout);  
            }
            function refresh() {
                JQXLite(componentSelector).jqxDockingLayout('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxDockingLayout('render');  
            }
            function saveLayout() {
                return JQXLite(componentSelector).jqxDockingLayout('saveLayout');  
            }
            function _contextMenu (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('contextMenu', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('contextMenu');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('height');
                }
            }
            function _layout (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('layout', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('layout');
                }
            }
            function _minGroupHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('minGroupHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('minGroupHeight');
                }
            }
            function _minGroupWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('minGroupWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('minGroupWidth');
                }
            }
            function _resizable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('resizable', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('resizable');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDockingLayout('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxDockingLayout('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDockingLayout(widgetOptions);
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

                JQXLite(componentSelector).on('dock', function (event) { that.emit('dock', event); });
                JQXLite(componentSelector).on('floatGroupClosed', function (event) { that.emit('floatGroupClosed', event); });
                JQXLite(componentSelector).on('float', function (event) { that.emit('float', event); });
                JQXLite(componentSelector).on('pin', function (event) { that.emit('pin', event); });
                JQXLite(componentSelector).on('resize', function (event) { that.emit('resize', event); });
                JQXLite(componentSelector).on('unpin', function (event) { that.emit('unpin', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxDockingLayout(widgetOptions);
			})
			return {id, componentSelector, addFloatGroup,destroy,loadLayout,refresh,render,saveLayout, setOptions, options, getOptions, createComponent};
        },
    }
</script>
