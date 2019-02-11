/*
jQWidgets v7.1.0 (2019-Feb)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdraw.js';
    import '../jqwidgets/jqxgauge.js';

    export default {
        props: {
            animationDuration: Number,
            background: Object,
            colorScheme: String,
            disabled: Boolean,
            easing: String,
            height: [Number, String],
            int64: Boolean,
            labels: Object,
            min: Number,
            max: Number,
            orientation: String,
            pointer: Object,
            rangesOffset: Number,
            rangeSize: String,
            ranges: Array,
            showRanges: Boolean,
            scaleStyle: Object,
            scaleLength: [String, Number],
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
        created: function () {
            this.id = 'jqxLinearGauge' + JQXLite.generateID();
            this.componentSelector = '#' + this.id;
        },
        mounted: function () {
            if (this.autoCreate) this.__createComponent__();
        },
        methods: {
            createComponent: function (options) {
                if (!this.autoCreate) this.__createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            },
            setOptions: function (options) {
                JQXLite(this.componentSelector).jqxLinearGauge(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxLinearGauge(usedProps[i]);
                }
                return resultToReturn;
            },
            disable: function() {
                JQXLite(this.componentSelector).jqxLinearGauge('disable');  
            },
            enable: function() {
                JQXLite(this.componentSelector).jqxLinearGauge('enable');  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('val');
                }
            },
            _animationDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('animationDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('animationDuration');
                }
            },
            _background: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('background', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('background');
                }
            },
            _colorScheme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('colorScheme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('colorScheme');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('disabled');
                }
            },
            _easing: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('easing', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('easing');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('height');
                }
            },
            _int64: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('int64', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('int64');
                }
            },
            _labels: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('labels', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('labels');
                }
            },
            _min: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('min', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('min');
                }
            },
            _max: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('max', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('max');
                }
            },
            _orientation: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('orientation', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('orientation');
                }
            },
            _pointer: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('pointer', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('pointer');
                }
            },
            _rangesOffset: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('rangesOffset', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('rangesOffset');
                }
            },
            _rangeSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('rangeSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('rangeSize');
                }
            },
            _ranges: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('ranges', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('ranges');
                }
            },
            _showRanges: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('showRanges', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('showRanges');
                }
            },
            _scaleStyle: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('scaleStyle', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('scaleStyle');
                }
            },
            _scaleLength: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('scaleLength', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('scaleLength');
                }
            },
            _ticksOffset: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('ticksOffset', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('ticksOffset');
                }
            },
            _ticksPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('ticksPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('ticksPosition');
                }
            },
            _ticksMinor: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('ticksMinor', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('ticksMinor');
                }
            },
            _ticksMajor: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('ticksMajor', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('ticksMajor');
                }
            },
            _value: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('value', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('value');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinearGauge('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinearGauge('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxLinearGauge(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['animationDuration','background','colorScheme','disabled','easing','height','int64','labels','min','max','orientation','pointer','rangesOffset','rangeSize','ranges','showRanges','scaleStyle','scaleLength','ticksOffset','ticksPosition','ticksMinor','ticksMajor','value','width'];
                const componentProps = this.$options.propsData;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            },
            __extendProps__: function () {
                const that = this;

                Object.defineProperty(that, 'animationDuration', {
                    get() {
                        return that._animationDuration();
                    },
                    set(newValue) {
                        that._animationDuration(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'background', {
                    get() {
                        return that._background();
                    },
                    set(newValue) {
                        that._background(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'colorScheme', {
                    get() {
                        return that._colorScheme();
                    },
                    set(newValue) {
                        that._colorScheme(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'disabled', {
                    get() {
                        return that._disabled();
                    },
                    set(newValue) {
                        that._disabled(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'easing', {
                    get() {
                        return that._easing();
                    },
                    set(newValue) {
                        that._easing(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'height', {
                    get() {
                        return that._height();
                    },
                    set(newValue) {
                        that._height(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'int64', {
                    get() {
                        return that._int64();
                    },
                    set(newValue) {
                        that._int64(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'labels', {
                    get() {
                        return that._labels();
                    },
                    set(newValue) {
                        that._labels(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'min', {
                    get() {
                        return that._min();
                    },
                    set(newValue) {
                        that._min(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'max', {
                    get() {
                        return that._max();
                    },
                    set(newValue) {
                        that._max(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'orientation', {
                    get() {
                        return that._orientation();
                    },
                    set(newValue) {
                        that._orientation(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'pointer', {
                    get() {
                        return that._pointer();
                    },
                    set(newValue) {
                        that._pointer(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rangesOffset', {
                    get() {
                        return that._rangesOffset();
                    },
                    set(newValue) {
                        that._rangesOffset(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rangeSize', {
                    get() {
                        return that._rangeSize();
                    },
                    set(newValue) {
                        that._rangeSize(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'ranges', {
                    get() {
                        return that._ranges();
                    },
                    set(newValue) {
                        that._ranges(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showRanges', {
                    get() {
                        return that._showRanges();
                    },
                    set(newValue) {
                        that._showRanges(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'scaleStyle', {
                    get() {
                        return that._scaleStyle();
                    },
                    set(newValue) {
                        that._scaleStyle(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'scaleLength', {
                    get() {
                        return that._scaleLength();
                    },
                    set(newValue) {
                        that._scaleLength(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'ticksOffset', {
                    get() {
                        return that._ticksOffset();
                    },
                    set(newValue) {
                        that._ticksOffset(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'ticksPosition', {
                    get() {
                        return that._ticksPosition();
                    },
                    set(newValue) {
                        that._ticksPosition(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'ticksMinor', {
                    get() {
                        return that._ticksMinor();
                    },
                    set(newValue) {
                        that._ticksMinor(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'ticksMajor', {
                    get() {
                        return that._ticksMajor();
                    },
                    set(newValue) {
                        that._ticksMajor(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'value', {
                    get() {
                        return that._value();
                    },
                    set(newValue) {
                        that._value(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'width', {
                    get() {
                        return that._width();
                    },
                    set(newValue) {
                        that._width(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('valueChanging', function (event) { that.$emit('valueChanging', event); });
                JQXLite(this.componentSelector).on('valueChanged', function (event) { that.$emit('valueChanged', event); });
            }
        }
    }
</script>
