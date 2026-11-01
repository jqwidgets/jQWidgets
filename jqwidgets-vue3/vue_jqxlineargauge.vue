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
    import '../jqwidgets/jqxgauge.js';

    export default {
        props: {
            animationDuration: Number,
            background: Object,
            colorScheme: String,
            disabled: {
                default: false,
                type: Boolean
            },
            displayTank: {
                default: false,
                type: Boolean
            },
            easing: String,
            editableLabels: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            int64: {
                default: false,
                type: Boolean
            },
            labels: Object,
            min: Number,
            max: Number,
            niceInterval: {
                default: false,
                type: Boolean
            },
            orientation: String,
            pointer: Object,
            rangesOffset: Number,
            rangeSize: String,
            ranges: Array,
            showRanges: {
                default: true,
                type: Boolean
            },
            tankStyle: Object,
            scaleStyle: Object,
            scaleLength: [String, Number],
            theme: String,
            tickMode: String,
            ticksOffset: Array,
            ticksPosition: String,
            ticksMinor: Object,
            ticksMajor: Object,
            value: Number,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["valueChanging","valueChanged"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxLinearGauge" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxLinearGauge(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxLinearGauge(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxLinearGauge('destroy');  
            }
            function disable() {
                JQXLite(componentSelector).jqxLinearGauge('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxLinearGauge('enable');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('val');
                }
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('animationDuration');
                }
            }
            function _background (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('background', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('background');
                }
            }
            function _colorScheme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('colorScheme', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('colorScheme');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('disabled');
                }
            }
            function _displayTank (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('displayTank', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('displayTank');
                }
            }
            function _easing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('easing', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('easing');
                }
            }
            function _editableLabels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('editableLabels', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('editableLabels');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('height');
                }
            }
            function _int64 (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('int64', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('int64');
                }
            }
            function _labels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('labels', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('labels');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('max');
                }
            }
            function _niceInterval (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('niceInterval', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('niceInterval');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('orientation');
                }
            }
            function _pointer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('pointer', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('pointer');
                }
            }
            function _rangesOffset (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('rangesOffset', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('rangesOffset');
                }
            }
            function _rangeSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('rangeSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('rangeSize');
                }
            }
            function _ranges (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('ranges', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('ranges');
                }
            }
            function _showRanges (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('showRanges', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('showRanges');
                }
            }
            function _tankStyle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('tankStyle', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('tankStyle');
                }
            }
            function _scaleStyle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('scaleStyle', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('scaleStyle');
                }
            }
            function _scaleLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('scaleLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('scaleLength');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('theme');
                }
            }
            function _tickMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('tickMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('tickMode');
                }
            }
            function _ticksOffset (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('ticksOffset', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('ticksOffset');
                }
            }
            function _ticksPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('ticksPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('ticksPosition');
                }
            }
            function _ticksMinor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('ticksMinor', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('ticksMinor');
                }
            }
            function _ticksMajor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('ticksMajor', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('ticksMajor');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLinearGauge('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxLinearGauge('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxLinearGauge(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDuration','background','colorScheme','disabled','displayTank','easing','editableLabels','height','int64','labels','min','max','niceInterval','orientation','pointer','rangesOffset','rangeSize','ranges','showRanges','tankStyle','scaleStyle','scaleLength','theme','tickMode','ticksOffset','ticksPosition','ticksMinor','ticksMajor','value','width'];
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
                 get background() {
                     return _background();
                 },
                 set background(newValue) {
                     _background(newValue);
                 },
                 get colorScheme() {
                     return _colorScheme();
                 },
                 set colorScheme(newValue) {
                     _colorScheme(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get displayTank() {
                     return _displayTank();
                 },
                 set displayTank(newValue) {
                     _displayTank(newValue);
                 },
                 get easing() {
                     return _easing();
                 },
                 set easing(newValue) {
                     _easing(newValue);
                 },
                 get editableLabels() {
                     return _editableLabels();
                 },
                 set editableLabels(newValue) {
                     _editableLabels(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get int64() {
                     return _int64();
                 },
                 set int64(newValue) {
                     _int64(newValue);
                 },
                 get labels() {
                     return _labels();
                 },
                 set labels(newValue) {
                     _labels(newValue);
                 },
                 get min() {
                     return _min();
                 },
                 set min(newValue) {
                     _min(newValue);
                 },
                 get max() {
                     return _max();
                 },
                 set max(newValue) {
                     _max(newValue);
                 },
                 get niceInterval() {
                     return _niceInterval();
                 },
                 set niceInterval(newValue) {
                     _niceInterval(newValue);
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
                 get rangesOffset() {
                     return _rangesOffset();
                 },
                 set rangesOffset(newValue) {
                     _rangesOffset(newValue);
                 },
                 get rangeSize() {
                     return _rangeSize();
                 },
                 set rangeSize(newValue) {
                     _rangeSize(newValue);
                 },
                 get ranges() {
                     return _ranges();
                 },
                 set ranges(newValue) {
                     _ranges(newValue);
                 },
                 get showRanges() {
                     return _showRanges();
                 },
                 set showRanges(newValue) {
                     _showRanges(newValue);
                 },
                 get tankStyle() {
                     return _tankStyle();
                 },
                 set tankStyle(newValue) {
                     _tankStyle(newValue);
                 },
                 get scaleStyle() {
                     return _scaleStyle();
                 },
                 set scaleStyle(newValue) {
                     _scaleStyle(newValue);
                 },
                 get scaleLength() {
                     return _scaleLength();
                 },
                 set scaleLength(newValue) {
                     _scaleLength(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get tickMode() {
                     return _tickMode();
                 },
                 set tickMode(newValue) {
                     _tickMode(newValue);
                 },
                 get ticksOffset() {
                     return _ticksOffset();
                 },
                 set ticksOffset(newValue) {
                     _ticksOffset(newValue);
                 },
                 get ticksPosition() {
                     return _ticksPosition();
                 },
                 set ticksPosition(newValue) {
                     _ticksPosition(newValue);
                 },
                 get ticksMinor() {
                     return _ticksMinor();
                 },
                 set ticksMinor(newValue) {
                     _ticksMinor(newValue);
                 },
                 get ticksMajor() {
                     return _ticksMajor();
                 },
                 set ticksMajor(newValue) {
                     _ticksMajor(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
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

                JQXLite(componentSelector).on('valueChanging', function (event) { that.emit('valueChanging', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxLinearGauge(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxLinearGauge('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, destroy, disable, enable, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
