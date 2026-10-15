<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxtimeline.js';

    export default {
        props: {
            autoWidth: {
                default: false,
                type: Boolean
            },
            collapsible: {
                default: true,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            horizontal: {
                default: false,
                type: Boolean
            },
            position: String,
            source: null,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxTimeline" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTimeline(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTimeline(usedProps[i]);
                }
                return resultToReturn;
            }
            function render() {
                return JQXLite(componentSelector).jqxTimeline('render');  
            }
            function _autoWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimeline('autoWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimeline('autoWidth');
                }
            }
            function _collapsible (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimeline('collapsible', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimeline('collapsible');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimeline('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimeline('disabled');
                }
            }
            function _horizontal (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimeline('horizontal', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimeline('horizontal');
                }
            }
            function _position (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimeline('position', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimeline('position');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimeline('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimeline('source');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimeline('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimeline('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTimeline(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['autoWidth','collapsible','disabled','horizontal','position','source','theme'];
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
                 get autoWidth() {
                     return _autoWidth();
                 },
                 set autoWidth(newValue) {
                     _autoWidth(newValue);
                 },
                 get collapsible() {
                     return _collapsible();
                 },
                 set collapsible(newValue) {
                     _collapsible(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get horizontal() {
                     return _horizontal();
                 },
                 set horizontal(newValue) {
                     _horizontal(newValue);
                 },
                 get position() {
                     return _position();
                 },
                 set position(newValue) {
                     _position(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
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
				if (hasChanges) JQXLite(componentSelector).jqxTimeline(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
			})
			return {id, componentSelector, render, setOptions, options, getOptions, createComponent};
        },
    }
</script>
