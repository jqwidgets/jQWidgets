<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdraw.js';
    import '../jqwidgets/jqxbargauge.js';

    export default {
        props: {
            animationDuration: Number,
            backgroundColor: String,
            barSpacing: Number,
            baseValue: Number,
            colorScheme: String,
            customColorScheme: [String, Object],
            disabled: {
                default: false,
                type: Boolean
            },
            endAngle: Number,
            formatFunction: [Object, Function],
            height: [Number, String],
            labels: Object,
            max: Number,
            min: Number,
            relativeInnerRadius: Number,
            rendered: Function,
            startAngle: Number,
            theme: String,
            title: [Object, String],
            tooltip: Object,
            useGradient: {
                default: true,
                type: Boolean
            },
            values: Array,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["drawEnd","drawStart","initialized","tooltipClose","tooltipOpen","valueChanged"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxBarGauge" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxBarGauge(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxBarGauge(usedProps[i]);
                }
                return resultToReturn;
            }
            function refresh() {
                JQXLite(componentSelector).jqxBarGauge('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxBarGauge('render');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('val');
                }
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('animationDuration');
                }
            }
            function _backgroundColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('backgroundColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('backgroundColor');
                }
            }
            function _barSpacing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('barSpacing', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('barSpacing');
                }
            }
            function _baseValue (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('baseValue', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('baseValue');
                }
            }
            function _colorScheme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('colorScheme', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('colorScheme');
                }
            }
            function _customColorScheme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('customColorScheme', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('customColorScheme');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('disabled');
                }
            }
            function _endAngle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('endAngle', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('endAngle');
                }
            }
            function _formatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('formatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('formatFunction');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('height');
                }
            }
            function _labels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('labels', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('labels');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('max');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('min');
                }
            }
            function _relativeInnerRadius (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('relativeInnerRadius', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('relativeInnerRadius');
                }
            }
            function _rendered (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('rendered', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('rendered');
                }
            }
            function _startAngle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('startAngle', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('startAngle');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('theme');
                }
            }
            function _title (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('title', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('title');
                }
            }
            function _tooltip (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('tooltip', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('tooltip');
                }
            }
            function _useGradient (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('useGradient', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('useGradient');
                }
            }
            function _values (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('values', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('values');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxBarGauge('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxBarGauge('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxBarGauge(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDuration','backgroundColor','barSpacing','baseValue','colorScheme','customColorScheme','disabled','endAngle','formatFunction','height','labels','max','min','relativeInnerRadius','rendered','startAngle','theme','title','tooltip','useGradient','values','width'];
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
                 get backgroundColor() {
                     return _backgroundColor();
                 },
                 set backgroundColor(newValue) {
                     _backgroundColor(newValue);
                 },
                 get barSpacing() {
                     return _barSpacing();
                 },
                 set barSpacing(newValue) {
                     _barSpacing(newValue);
                 },
                 get baseValue() {
                     return _baseValue();
                 },
                 set baseValue(newValue) {
                     _baseValue(newValue);
                 },
                 get colorScheme() {
                     return _colorScheme();
                 },
                 set colorScheme(newValue) {
                     _colorScheme(newValue);
                 },
                 get customColorScheme() {
                     return _customColorScheme();
                 },
                 set customColorScheme(newValue) {
                     _customColorScheme(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get endAngle() {
                     return _endAngle();
                 },
                 set endAngle(newValue) {
                     _endAngle(newValue);
                 },
                 get formatFunction() {
                     return _formatFunction();
                 },
                 set formatFunction(newValue) {
                     _formatFunction(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get labels() {
                     return _labels();
                 },
                 set labels(newValue) {
                     _labels(newValue);
                 },
                 get max() {
                     return _max();
                 },
                 set max(newValue) {
                     _max(newValue);
                 },
                 get min() {
                     return _min();
                 },
                 set min(newValue) {
                     _min(newValue);
                 },
                 get relativeInnerRadius() {
                     return _relativeInnerRadius();
                 },
                 set relativeInnerRadius(newValue) {
                     _relativeInnerRadius(newValue);
                 },
                 get rendered() {
                     return _rendered();
                 },
                 set rendered(newValue) {
                     _rendered(newValue);
                 },
                 get startAngle() {
                     return _startAngle();
                 },
                 set startAngle(newValue) {
                     _startAngle(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get title() {
                     return _title();
                 },
                 set title(newValue) {
                     _title(newValue);
                 },
                 get tooltip() {
                     return _tooltip();
                 },
                 set tooltip(newValue) {
                     _tooltip(newValue);
                 },
                 get useGradient() {
                     return _useGradient();
                 },
                 set useGradient(newValue) {
                     _useGradient(newValue);
                 },
                 get values() {
                     return _values();
                 },
                 set values(newValue) {
                     _values(newValue);
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

                JQXLite(componentSelector).on('drawEnd', function (event) { that.emit('drawEnd', event); });
                JQXLite(componentSelector).on('drawStart', function (event) { that.emit('drawStart', event); });
                JQXLite(componentSelector).on('initialized', function (event) { that.emit('initialized', event); });
                JQXLite(componentSelector).on('tooltipClose', function (event) { that.emit('tooltipClose', event); });
                JQXLite(componentSelector).on('tooltipOpen', function (event) { that.emit('tooltipOpen', event); });
                JQXLite(componentSelector).on('valueChanged', function (event) { that.emit('valueChanged', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxBarGauge(changed);
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
			return {id, componentSelector, refresh, render, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
