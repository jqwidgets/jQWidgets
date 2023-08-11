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
            disabled: {
                default: false,
                type: Boolean
            },
            dataSource: Object,
            ready: Function,
            orientation: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["resize","stateChange"],
        setup(props, context) {
			const id = "jqxSplitLayout" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxSplitLayout(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxSplitLayout(usedProps[i]);
                }
                return resultToReturn;
            }
            function refresh() {
                JQXLite(componentSelector).jqxSplitLayout('refresh');  
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitLayout('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitLayout('disabled');
                }
            }
            function _dataSource (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitLayout('dataSource', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitLayout('dataSource');
                }
            }
            function _ready (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitLayout('ready', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitLayout('ready');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitLayout('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitLayout('orientation');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxSplitLayout(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','dataSource','ready','orientation'];
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
                 get dataSource() {
                     return _dataSource();
                 },
                 set dataSource(newValue) {
                     _dataSource(newValue);
                 },
                 get ready() {
                     return _ready();
                 },
                 set ready(newValue) {
                     _ready(newValue);
                 },
                 get orientation() {
                     return _orientation();
                 },
                 set orientation(newValue) {
                     _orientation(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('resize', function (event) { that.emit('resize', event); });
                JQXLite(componentSelector).on('stateChange', function (event) { that.emit('stateChange', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxSplitLayout(widgetOptions);
			})
			return {id, componentSelector, refresh, setOptions, options, getOptions, createComponent};
        },
    }
</script>
