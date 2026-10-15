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
    import '../jqwidgets/jqxbuttongroup.js';

    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean
            },
            enableHover: {
                default: false,
                type: Boolean
            },
            mode: String,
            rtl: {
                default: false,
                type: Boolean
            },
            template: String,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["buttonclick","selected","unselected"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxButtonGroup" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxButtonGroup(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxButtonGroup(usedProps[i]);
                }
                return resultToReturn;
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxButtonGroup('disableAt', index);  
            }
            function disable() {
                JQXLite(componentSelector).jqxButtonGroup('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxButtonGroup('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxButtonGroup('enable');  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxButtonGroup('enableAt', index);  
            }
            function getSelection() {
                return JQXLite(componentSelector).jqxButtonGroup('getSelection');  
            }
            function render() {
                JQXLite(componentSelector).jqxButtonGroup('render');  
            }
            function setSelection(index) {
                JQXLite(componentSelector).jqxButtonGroup('setSelection', index);  
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('disabled');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('enableHover');
                }
            }
            function _mode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('mode', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('mode');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('rtl');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxButtonGroup(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','enableHover','mode','rtl','template','theme'];
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
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
                 },
                 get mode() {
                     return _mode();
                 },
                 set mode(newValue) {
                     _mode(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
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

                JQXLite(componentSelector).on('buttonclick', function (event) { that.emit('buttonclick', event); });
                JQXLite(componentSelector).on('selected', function (event) { that.emit('selected', event); });
                JQXLite(componentSelector).on('unselected', function (event) { that.emit('unselected', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxButtonGroup(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxButtonGroup('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, disableAt, disable, destroy, enable, enableAt, getSelection, render, setSelection, setOptions, options, getOptions, createComponent};
        },
    }
</script>
