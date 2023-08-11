<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxbulletchart.js';

    export default {
        props: {
            animationDuration: Number,
            barSize: [String, Number],
            description: String,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            labelsFormat: String,
            labelsFormatFunction: Function,
            orientation: String,
            pointer: Object,
            rtl: {
                default: false,
                type: Boolean
            },
            ranges: Array,
            showTooltip: {
                default: true,
                type: Boolean
            },
            target: Object,
            ticks: Object,
            title: String,
            tooltipFormatFunction: Function,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["change"],
        setup(props, context) {
			const id = "jqxBulletChart" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxBulletChart(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxBulletChart(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxBulletChart('destroy');  
            }
            function render() {
                JQXLite(componentSelector).jqxBulletChart('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxBulletChart('refresh');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('val');
                }
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('animationDuration');
                }
            }
            function _barSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('barSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('barSize');
                }
            }
            function _description (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('description', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('description');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('height');
                }
            }
            function _labelsFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('labelsFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('labelsFormat');
                }
            }
            function _labelsFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('labelsFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('labelsFormatFunction');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('orientation');
                }
            }
            function _pointer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('pointer', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('pointer');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('rtl');
                }
            }
            function _ranges (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('ranges', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('ranges');
                }
            }
            function _showTooltip (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('showTooltip', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('showTooltip');
                }
            }
            function _target (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('target', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('target');
                }
            }
            function _ticks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('ticks', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('ticks');
                }
            }
            function _title (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('title', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('title');
                }
            }
            function _tooltipFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('tooltipFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('tooltipFormatFunction');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBulletChart('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxBulletChart('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxBulletChart(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDuration','barSize','description','disabled','height','labelsFormat','labelsFormatFunction','orientation','pointer','rtl','ranges','showTooltip','target','ticks','title','tooltipFormatFunction','width'];
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
                 get animationDuration() {
                     return _animationDuration();
                 },
                 set animationDuration(newValue) {
                     _animationDuration(newValue);
                 },
                 get barSize() {
                     return _barSize();
                 },
                 set barSize(newValue) {
                     _barSize(newValue);
                 },
                 get description() {
                     return _description();
                 },
                 set description(newValue) {
                     _description(newValue);
                 },
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
                 get labelsFormat() {
                     return _labelsFormat();
                 },
                 set labelsFormat(newValue) {
                     _labelsFormat(newValue);
                 },
                 get labelsFormatFunction() {
                     return _labelsFormatFunction();
                 },
                 set labelsFormatFunction(newValue) {
                     _labelsFormatFunction(newValue);
                 },
                 get orientation() {
                     return _orientation();
                 },
                 set orientation(newValue) {
                     _orientation(newValue);
                 },
                 get pointer() {
                     return _pointer();
                 },
                 set pointer(newValue) {
                     _pointer(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get ranges() {
                     return _ranges();
                 },
                 set ranges(newValue) {
                     _ranges(newValue);
                 },
                 get showTooltip() {
                     return _showTooltip();
                 },
                 set showTooltip(newValue) {
                     _showTooltip(newValue);
                 },
                 get target() {
                     return _target();
                 },
                 set target(newValue) {
                     _target(newValue);
                 },
                 get ticks() {
                     return _ticks();
                 },
                 set ticks(newValue) {
                     _ticks(newValue);
                 },
                 get title() {
                     return _title();
                 },
                 set title(newValue) {
                     _title(newValue);
                 },
                 get tooltipFormatFunction() {
                     return _tooltipFormatFunction();
                 },
                 set tooltipFormatFunction(newValue) {
                     _tooltipFormatFunction(newValue);
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

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxBulletChart(widgetOptions);
			})
			return {id, componentSelector, destroy,render,refresh,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
