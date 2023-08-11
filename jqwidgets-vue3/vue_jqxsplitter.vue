<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxsplitter.js';

    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            orientation: String,
            panels: Array,
            resizable: {
                default: true,
                type: Boolean
            },
            splitBarSize: Number,
            showSplitBar: {
                default: true,
                type: Boolean
            },
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["collapsed","expanded","resize","resizeStart"],
        setup(props, context) {
			const id = "jqxSplitter" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxSplitter(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxSplitter(usedProps[i]);
                }
                return resultToReturn;
            }
            function collapse() {
                JQXLite(componentSelector).jqxSplitter('collapse');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxSplitter('destroy');  
            }
            function disable() {
                JQXLite(componentSelector).jqxSplitter('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxSplitter('enable');  
            }
            function expand() {
                JQXLite(componentSelector).jqxSplitter('expand');  
            }
            function render() {
                JQXLite(componentSelector).jqxSplitter('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxSplitter('refresh');  
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('height');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('orientation');
                }
            }
            function _panels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('panels', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('panels');
                }
            }
            function _resizable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('resizable', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('resizable');
                }
            }
            function _splitBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('splitBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('splitBarSize');
                }
            }
            function _showSplitBar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('showSplitBar', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('showSplitBar');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSplitter('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxSplitter('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxSplitter(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','orientation','panels','resizable','splitBarSize','showSplitBar','theme','width'];
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
                 get orientation() {
                     return _orientation();
                 },
                 set orientation(newValue) {
                     _orientation(newValue);
                 },
                 get panels() {
                     return _panels();
                 },
                 set panels(newValue) {
                     _panels(newValue);
                 },
                 get resizable() {
                     return _resizable();
                 },
                 set resizable(newValue) {
                     _resizable(newValue);
                 },
                 get splitBarSize() {
                     return _splitBarSize();
                 },
                 set splitBarSize(newValue) {
                     _splitBarSize(newValue);
                 },
                 get showSplitBar() {
                     return _showSplitBar();
                 },
                 set showSplitBar(newValue) {
                     _showSplitBar(newValue);
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

                JQXLite(componentSelector).on('collapsed', function (event) { that.emit('collapsed', event); });
                JQXLite(componentSelector).on('expanded', function (event) { that.emit('expanded', event); });
                JQXLite(componentSelector).on('resize', function (event) { that.emit('resize', event); });
                JQXLite(componentSelector).on('resizeStart', function (event) { that.emit('resizeStart', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxSplitter(widgetOptions);
			})
			return {id, componentSelector, collapse,destroy,disable,enable,expand,render,refresh, setOptions, options, getOptions, createComponent};
        },
    }
</script>
