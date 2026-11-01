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
            border: Object,
            caption: Object,
            cap: [String, Object],
            colorScheme: String,
            disabled: {
                default: false,
                type: Boolean
            },
            easing: String,
            editableLabels: {
                default: false,
                type: Boolean
            },
            endAngle: Number,
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
            pointer: Object,
            radius: Number,
            ranges: Array,
            startAngle: Number,
            showRanges: {
                default: true,
                type: Boolean
            },
            styles: Object,
            theme: String,
            tickMode: String,
            ticksMajor: Object,
            ticksMinor: Object,
            ticksDistance: String,
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
			const id = "jqxGauge" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxGauge(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxGauge(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxGauge('destroy');  
            }
            function disable() {
                JQXLite(componentSelector).jqxGauge('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxGauge('enable');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxGauge('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxGauge('val');
                }
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('animationDuration');
                }
            }
            function _border (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('border', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('border');
                }
            }
            function _caption (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('caption', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('caption');
                }
            }
            function _cap (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('cap', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('cap');
                }
            }
            function _colorScheme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('colorScheme', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('colorScheme');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('disabled');
                }
            }
            function _easing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('easing', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('easing');
                }
            }
            function _editableLabels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('editableLabels', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('editableLabels');
                }
            }
            function _endAngle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('endAngle', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('endAngle');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('height');
                }
            }
            function _int64 (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('int64', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('int64');
                }
            }
            function _labels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('labels', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('labels');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('max');
                }
            }
            function _niceInterval (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('niceInterval', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('niceInterval');
                }
            }
            function _pointer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('pointer', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('pointer');
                }
            }
            function _radius (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('radius', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('radius');
                }
            }
            function _ranges (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('ranges', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('ranges');
                }
            }
            function _startAngle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('startAngle', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('startAngle');
                }
            }
            function _showRanges (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('showRanges', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('showRanges');
                }
            }
            function _styles (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('styles', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('styles');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('theme');
                }
            }
            function _tickMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('tickMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('tickMode');
                }
            }
            function _ticksMajor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('ticksMajor', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('ticksMajor');
                }
            }
            function _ticksMinor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('ticksMinor', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('ticksMinor');
                }
            }
            function _ticksDistance (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('ticksDistance', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('ticksDistance');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGauge('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxGauge('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxGauge(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDuration','border','caption','cap','colorScheme','disabled','easing','editableLabels','endAngle','height','int64','labels','min','max','niceInterval','pointer','radius','ranges','startAngle','showRanges','styles','theme','tickMode','ticksMajor','ticksMinor','ticksDistance','value','width'];
                const componentProps = props;
                let options = {};

                for (let prop in componentProps) {
                    if (prop === 'styleProperty') prop = 'style'; 
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
                 get border() {
                     return _border();
                 },
                 set border(newValue) {
                     _border(newValue);
                 },
                 get caption() {
                     return _caption();
                 },
                 set caption(newValue) {
                     _caption(newValue);
                 },
                 get cap() {
                     return _cap();
                 },
                 set cap(newValue) {
                     _cap(newValue);
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
                 get endAngle() {
                     return _endAngle();
                 },
                 set endAngle(newValue) {
                     _endAngle(newValue);
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
                 get pointer() {
                     return _pointer();
                 },
                 set pointer(newValue) {
                     _pointer(newValue);
                 },
                 get radius() {
                     return _radius();
                 },
                 set radius(newValue) {
                     _radius(newValue);
                 },
                 get ranges() {
                     return _ranges();
                 },
                 set ranges(newValue) {
                     _ranges(newValue);
                 },
                 get startAngle() {
                     return _startAngle();
                 },
                 set startAngle(newValue) {
                     _startAngle(newValue);
                 },
                 get showRanges() {
                     return _showRanges();
                 },
                 set showRanges(newValue) {
                     _showRanges(newValue);
                 },
                 get styles() {
                     return _styles();
                 },
                 set styles(newValue) {
                     _styles(newValue);
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
                 get ticksMajor() {
                     return _ticksMajor();
                 },
                 set ticksMajor(newValue) {
                     _ticksMajor(newValue);
                 },
                 get ticksMinor() {
                     return _ticksMinor();
                 },
                 set ticksMinor(newValue) {
                     _ticksMinor(newValue);
                 },
                 get ticksDistance() {
                     return _ticksDistance();
                 },
                 set ticksDistance(newValue) {
                     _ticksDistance(newValue);
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
				if (hasChanges) JQXLite(componentSelector).jqxGauge(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxGauge('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, destroy, disable, enable, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
