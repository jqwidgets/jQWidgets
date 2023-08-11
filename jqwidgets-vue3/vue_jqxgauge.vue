<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
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
            endAngle: Number,
            height: [Number, String],
            int64: {
                default: false,
                type: Boolean
            },
            labels: Object,
            min: Number,
            max: Number,
            pointer: Object,
            radius: Number,
            ranges: Array,
            startAngle: Number,
            showRanges: {
                default: true,
                type: Boolean
            },
            styles: Object,
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
			const id = "jqxGauge" + JQXLite.generateID();
			const componentSelector = '#' + id;
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
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDuration','border','caption','cap','colorScheme','disabled','easing','endAngle','height','int64','labels','min','max','pointer','radius','ranges','startAngle','showRanges','styles','ticksMajor','ticksMinor','ticksDistance','value','width'];
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
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxGauge(widgetOptions);
			})
			return {id, componentSelector, disable,enable,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
