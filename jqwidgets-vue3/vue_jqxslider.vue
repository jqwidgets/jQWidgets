<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxslider.js';

    export default {
        props: {
            modelValue: String,
            buttonsPosition: String,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            layout: String,
            mode: String,
            minorTicksFrequency: Number,
            minorTickSize: Number,
            max: Number,
            min: Number,
            orientation: String,
            rangeSlider: {
                default: false,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            step: Number,
            showTicks: {
                default: true,
                type: Boolean
            },
            showMinorTicks: {
                default: false,
                type: Boolean
            },
            showTickLabels: {
                default: false,
                type: Boolean
            },
            showButtons: {
                default: true,
                type: Boolean
            },
            showRange: {
                default: true,
                type: Boolean
            },
            template: String,
            theme: String,
            ticksPosition: String,
            ticksFrequency: Number,
            tickSize: Number,
            tickLabelFormatFunction: Function,
            tooltip: {
                default: false,
                type: Boolean
            },
            tooltipHideDelay: Number,
            tooltipPosition: String,
            tooltipFormatFunction: Function,
            value: Number,
            values: Array,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change","slide","slideStart","slideEnd"],
        setup(props, context) {
			const id = "jqxSlider" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxSlider(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxSlider(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxSlider('destroy');  
            }
            function decrementValue() {
                JQXLite(componentSelector).jqxSlider('decrementValue');  
            }
            function disable() {
                JQXLite(componentSelector).jqxSlider('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxSlider('enable');  
            }
            function focus() {
                JQXLite(componentSelector).jqxSlider('focus');  
            }
            function getValue() {
                return JQXLite(componentSelector).jqxSlider('getValue');  
            }
            function incrementValue() {
                JQXLite(componentSelector).jqxSlider('incrementValue');  
            }
            function setValue(index) {
                JQXLite(componentSelector).jqxSlider('setValue', index);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxSlider('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxSlider('val');
                }
            }
            function _buttonsPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('buttonsPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('buttonsPosition');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('height');
                }
            }
            function _layout (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('layout', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('layout');
                }
            }
            function _mode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('mode', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('mode');
                }
            }
            function _minorTicksFrequency (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('minorTicksFrequency', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('minorTicksFrequency');
                }
            }
            function _minorTickSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('minorTickSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('minorTickSize');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('max');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('min');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('orientation');
                }
            }
            function _rangeSlider (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('rangeSlider', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('rangeSlider');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('rtl');
                }
            }
            function _step (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('step', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('step');
                }
            }
            function _showTicks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('showTicks', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('showTicks');
                }
            }
            function _showMinorTicks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('showMinorTicks', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('showMinorTicks');
                }
            }
            function _showTickLabels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('showTickLabels', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('showTickLabels');
                }
            }
            function _showButtons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('showButtons', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('showButtons');
                }
            }
            function _showRange (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('showRange', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('showRange');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('theme');
                }
            }
            function _ticksPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('ticksPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('ticksPosition');
                }
            }
            function _ticksFrequency (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('ticksFrequency', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('ticksFrequency');
                }
            }
            function _tickSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('tickSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('tickSize');
                }
            }
            function _tickLabelFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('tickLabelFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('tickLabelFormatFunction');
                }
            }
            function _tooltip (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('tooltip', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('tooltip');
                }
            }
            function _tooltipHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('tooltipHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('tooltipHideDelay');
                }
            }
            function _tooltipPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('tooltipPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('tooltipPosition');
                }
            }
            function _tooltipFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('tooltipFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('tooltipFormatFunction');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('value');
                }
            }
            function _values (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('values', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('values');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSlider('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxSlider('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxSlider(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['buttonsPosition','disabled','height','layout','mode','minorTicksFrequency','minorTickSize','max','min','orientation','rangeSlider','rtl','step','showTicks','showMinorTicks','showTickLabels','showButtons','showRange','template','theme','ticksPosition','ticksFrequency','tickSize','tickLabelFormatFunction','tooltip','tooltipHideDelay','tooltipPosition','tooltipFormatFunction','value','values','width'];
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
                 get buttonsPosition() {
                     return _buttonsPosition();
                 },
                 set buttonsPosition(newValue) {
                     _buttonsPosition(newValue);
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
                 get layout() {
                     return _layout();
                 },
                 set layout(newValue) {
                     _layout(newValue);
                 },
                 get mode() {
                     return _mode();
                 },
                 set mode(newValue) {
                     _mode(newValue);
                 },
                 get minorTicksFrequency() {
                     return _minorTicksFrequency();
                 },
                 set minorTicksFrequency(newValue) {
                     _minorTicksFrequency(newValue);
                 },
                 get minorTickSize() {
                     return _minorTickSize();
                 },
                 set minorTickSize(newValue) {
                     _minorTickSize(newValue);
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
                 get orientation() {
                     return _orientation();
                 },
                 set orientation(newValue) {
                     _orientation(newValue);
                 },
                 get rangeSlider() {
                     return _rangeSlider();
                 },
                 set rangeSlider(newValue) {
                     _rangeSlider(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get step() {
                     return _step();
                 },
                 set step(newValue) {
                     _step(newValue);
                 },
                 get showTicks() {
                     return _showTicks();
                 },
                 set showTicks(newValue) {
                     _showTicks(newValue);
                 },
                 get showMinorTicks() {
                     return _showMinorTicks();
                 },
                 set showMinorTicks(newValue) {
                     _showMinorTicks(newValue);
                 },
                 get showTickLabels() {
                     return _showTickLabels();
                 },
                 set showTickLabels(newValue) {
                     _showTickLabels(newValue);
                 },
                 get showButtons() {
                     return _showButtons();
                 },
                 set showButtons(newValue) {
                     _showButtons(newValue);
                 },
                 get showRange() {
                     return _showRange();
                 },
                 set showRange(newValue) {
                     _showRange(newValue);
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
                 get ticksPosition() {
                     return _ticksPosition();
                 },
                 set ticksPosition(newValue) {
                     _ticksPosition(newValue);
                 },
                 get ticksFrequency() {
                     return _ticksFrequency();
                 },
                 set ticksFrequency(newValue) {
                     _ticksFrequency(newValue);
                 },
                 get tickSize() {
                     return _tickSize();
                 },
                 set tickSize(newValue) {
                     _tickSize(newValue);
                 },
                 get tickLabelFormatFunction() {
                     return _tickLabelFormatFunction();
                 },
                 set tickLabelFormatFunction(newValue) {
                     _tickLabelFormatFunction(newValue);
                 },
                 get tooltip() {
                     return _tooltip();
                 },
                 set tooltip(newValue) {
                     _tooltip(newValue);
                 },
                 get tooltipHideDelay() {
                     return _tooltipHideDelay();
                 },
                 set tooltipHideDelay(newValue) {
                     _tooltipHideDelay(newValue);
                 },
                 get tooltipPosition() {
                     return _tooltipPosition();
                 },
                 set tooltipPosition(newValue) {
                     _tooltipPosition(newValue);
                 },
                 get tooltipFormatFunction() {
                     return _tooltipFormatFunction();
                 },
                 set tooltipFormatFunction(newValue) {
                     _tooltipFormatFunction(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
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
            function twoWayBinding() {
                const value = JQXLite(componentSelector).jqxSlider('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('slide', function (event) { that.emit('slide', event); });
                JQXLite(componentSelector).on('slideStart', function (event) { that.emit('slideStart', event); });
                JQXLite(componentSelector).on('slideEnd', function (event) { that.emit('slideEnd', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxSlider(widgetOptions);
			})
			return {id, componentSelector, destroy,decrementValue,disable,enable,focus,getValue,incrementValue,setValue,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
