<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxdropdownlist.js';
    import '../jqwidgets/jqxcombobox.js';
    import '../jqwidgets/jqxinput.js';
    import '../jqwidgets/jqxtoolbar.js';

    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            initTools: Function,
            minimizeWidth: Number,
            minWidth: Number,
            maxWidth: Number,
            rtl: {
                default: false,
                type: Boolean
            },
            tools: String,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["close","open"],
        setup(props, context) {
			const id = "jqxToolBar" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxToolBar(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxToolBar(usedProps[i]);
                }
                return resultToReturn;
            }
            function addTool(type, position, separator, menuToolIninitialization) {
                JQXLite(componentSelector).jqxToolBar('addTool', type, position, separator, menuToolIninitialization);  
            }
            function disableTool(index, disable) {
                JQXLite(componentSelector).jqxToolBar('disableTool', index, disable);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxToolBar('destroy');  
            }
            function destroyTool(index) {
                JQXLite(componentSelector).jqxToolBar('destroyTool', index);  
            }
            function getTools() {
                return JQXLite(componentSelector).jqxToolBar('getTools');  
            }
            function render() {
                JQXLite(componentSelector).jqxToolBar('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxToolBar('refresh');  
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('height');
                }
            }
            function _initTools (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('initTools', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('initTools');
                }
            }
            function _minimizeWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('minimizeWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('minimizeWidth');
                }
            }
            function _minWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('minWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('minWidth');
                }
            }
            function _maxWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('maxWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('maxWidth');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('rtl');
                }
            }
            function _tools (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('tools', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('tools');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToolBar('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxToolBar('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxToolBar(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','initTools','minimizeWidth','minWidth','maxWidth','rtl','tools','theme','width'];
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
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get initTools() {
                     return _initTools();
                 },
                 set initTools(newValue) {
                     _initTools(newValue);
                 },
                 get minimizeWidth() {
                     return _minimizeWidth();
                 },
                 set minimizeWidth(newValue) {
                     _minimizeWidth(newValue);
                 },
                 get minWidth() {
                     return _minWidth();
                 },
                 set minWidth(newValue) {
                     _minWidth(newValue);
                 },
                 get maxWidth() {
                     return _maxWidth();
                 },
                 set maxWidth(newValue) {
                     _maxWidth(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get tools() {
                     return _tools();
                 },
                 set tools(newValue) {
                     _tools(newValue);
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

                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxToolBar(widgetOptions);
			})
			return {id, componentSelector, addTool,disableTool,destroy,destroyTool,getTools,render,refresh, setOptions, options, getOptions, createComponent};
        },
    }
</script>
