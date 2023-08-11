<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';

    export default {
        props: {
            type: String,
            target: Object,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const id = "jqxPivotDesigner" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxPivotDesigner(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxPivotDesigner(usedProps[i]);
                }
                return resultToReturn;
            }
            function refresh() {
                return JQXLite(componentSelector).jqxPivotDesigner('refresh');  
            }
            function _type (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotDesigner('type', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotDesigner('type');
                }
            }
            function _target (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotDesigner('target', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotDesigner('target');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxPivotDesigner(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['type','target'];
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
                 get type() {
                     return _type();
                 },
                 set type(newValue) {
                     _type(newValue);
                 },
                 get target() {
                     return _target();
                 },
                 set target(newValue) {
                     _target(newValue);
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
				JQXLite(componentSelector).jqxPivotDesigner(widgetOptions);
			})
			return {id, componentSelector, refresh, setOptions, options, getOptions, createComponent};
        },
    }
</script>
