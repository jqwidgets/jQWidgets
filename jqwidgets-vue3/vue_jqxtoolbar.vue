<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
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
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxToolBar" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
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
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
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
				if (hasChanges) JQXLite(componentSelector).jqxToolBar(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxToolBar('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, addTool, disableTool, destroy, destroyTool, getTools, render, refresh, setOptions, options, getOptions, createComponent};
        },
    }
</script>
