<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
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
            source: [],
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const id = "jqxTimeline" + JQXLite.generateID();
			const componentSelector = '#' + id;
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
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxTimeline(widgetOptions);
			})
			return {id, componentSelector, render, setOptions, options, getOptions, createComponent};
        },
    }
</script>
