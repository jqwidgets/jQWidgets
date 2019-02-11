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
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxslider.js';

    export default {
        props: {
            buttonsPosition: String,
            disabled: Boolean,
            height: [Number, String],
            layout: String,
            mode: String,
            minorTicksFrequency: Number,
            minorTickSize: Number,
            max: Number,
            min: Number,
            orientation: String,
            rangeSlider: Boolean,
            rtl: Boolean,
            step: Number,
            showTicks: Boolean,
            showMinorTicks: Boolean,
            showTickLabels: Boolean,
            showButtons: Boolean,
            showRange: Boolean,
            template: String,
            theme: String,
            ticksPosition: String,
            ticksFrequency: Number,
            tickSize: Number,
            tickLabelFormatFunction: Function,
            tooltip: Boolean,
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
        created: function () {
            this.id = 'jqxSlider' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxSlider(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxSlider(usedProps[i]);
                }
                return resultToReturn;
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxSlider('destroy');  
            },
            decrementValue: function() {
                JQXLite(this.componentSelector).jqxSlider('decrementValue');  
            },
            disable: function() {
                JQXLite(this.componentSelector).jqxSlider('disable');  
            },
            enable: function() {
                JQXLite(this.componentSelector).jqxSlider('enable');  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxSlider('focus');  
            },
            getValue: function() {
                return JQXLite(this.componentSelector).jqxSlider('getValue');  
            },
            incrementValue: function() {
                JQXLite(this.componentSelector).jqxSlider('incrementValue');  
            },
            setValue: function(index) {
                JQXLite(this.componentSelector).jqxSlider('setValue', index);  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('val');
                }
            },
            _buttonsPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('buttonsPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('buttonsPosition');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('disabled');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('height');
                }
            },
            _layout: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('layout', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('layout');
                }
            },
            _mode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('mode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('mode');
                }
            },
            _minorTicksFrequency: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('minorTicksFrequency', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('minorTicksFrequency');
                }
            },
            _minorTickSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('minorTickSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('minorTickSize');
                }
            },
            _max: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('max', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('max');
                }
            },
            _min: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('min', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('min');
                }
            },
            _orientation: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('orientation', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('orientation');
                }
            },
            _rangeSlider: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('rangeSlider', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('rangeSlider');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('rtl');
                }
            },
            _step: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('step', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('step');
                }
            },
            _showTicks: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('showTicks', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('showTicks');
                }
            },
            _showMinorTicks: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('showMinorTicks', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('showMinorTicks');
                }
            },
            _showTickLabels: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('showTickLabels', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('showTickLabels');
                }
            },
            _showButtons: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('showButtons', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('showButtons');
                }
            },
            _showRange: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('showRange', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('showRange');
                }
            },
            _template: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('template', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('template');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('theme');
                }
            },
            _ticksPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('ticksPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('ticksPosition');
                }
            },
            _ticksFrequency: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('ticksFrequency', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('ticksFrequency');
                }
            },
            _tickSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('tickSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('tickSize');
                }
            },
            _tickLabelFormatFunction: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('tickLabelFormatFunction', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('tickLabelFormatFunction');
                }
            },
            _tooltip: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('tooltip', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('tooltip');
                }
            },
            _tooltipHideDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('tooltipHideDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('tooltipHideDelay');
                }
            },
            _tooltipPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('tooltipPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('tooltipPosition');
                }
            },
            _tooltipFormatFunction: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('tooltipFormatFunction', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('tooltipFormatFunction');
                }
            },
            _value: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('value', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('value');
                }
            },
            _values: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('values', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('values');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSlider('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSlider('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxSlider(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['buttonsPosition','disabled','height','layout','mode','minorTicksFrequency','minorTickSize','max','min','orientation','rangeSlider','rtl','step','showTicks','showMinorTicks','showTickLabels','showButtons','showRange','template','theme','ticksPosition','ticksFrequency','tickSize','tickLabelFormatFunction','tooltip','tooltipHideDelay','tooltipPosition','tooltipFormatFunction','value','values','width'];
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

                Object.defineProperty(that, 'buttonsPosition', {
                    get() {
                        return that._buttonsPosition();
                    },
                    set(newValue) {
                        that._buttonsPosition(newValue);
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
                Object.defineProperty(that, 'layout', {
                    get() {
                        return that._layout();
                    },
                    set(newValue) {
                        that._layout(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'mode', {
                    get() {
                        return that._mode();
                    },
                    set(newValue) {
                        that._mode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'minorTicksFrequency', {
                    get() {
                        return that._minorTicksFrequency();
                    },
                    set(newValue) {
                        that._minorTicksFrequency(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'minorTickSize', {
                    get() {
                        return that._minorTickSize();
                    },
                    set(newValue) {
                        that._minorTickSize(newValue);
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
                Object.defineProperty(that, 'rangeSlider', {
                    get() {
                        return that._rangeSlider();
                    },
                    set(newValue) {
                        that._rangeSlider(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rtl', {
                    get() {
                        return that._rtl();
                    },
                    set(newValue) {
                        that._rtl(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'step', {
                    get() {
                        return that._step();
                    },
                    set(newValue) {
                        that._step(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showTicks', {
                    get() {
                        return that._showTicks();
                    },
                    set(newValue) {
                        that._showTicks(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showMinorTicks', {
                    get() {
                        return that._showMinorTicks();
                    },
                    set(newValue) {
                        that._showMinorTicks(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showTickLabels', {
                    get() {
                        return that._showTickLabels();
                    },
                    set(newValue) {
                        that._showTickLabels(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showButtons', {
                    get() {
                        return that._showButtons();
                    },
                    set(newValue) {
                        that._showButtons(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showRange', {
                    get() {
                        return that._showRange();
                    },
                    set(newValue) {
                        that._showRange(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'template', {
                    get() {
                        return that._template();
                    },
                    set(newValue) {
                        that._template(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'theme', {
                    get() {
                        return that._theme();
                    },
                    set(newValue) {
                        that._theme(newValue);
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
                Object.defineProperty(that, 'ticksFrequency', {
                    get() {
                        return that._ticksFrequency();
                    },
                    set(newValue) {
                        that._ticksFrequency(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'tickSize', {
                    get() {
                        return that._tickSize();
                    },
                    set(newValue) {
                        that._tickSize(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'tickLabelFormatFunction', {
                    get() {
                        return that._tickLabelFormatFunction();
                    },
                    set(newValue) {
                        that._tickLabelFormatFunction(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'tooltip', {
                    get() {
                        return that._tooltip();
                    },
                    set(newValue) {
                        that._tooltip(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'tooltipHideDelay', {
                    get() {
                        return that._tooltipHideDelay();
                    },
                    set(newValue) {
                        that._tooltipHideDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'tooltipPosition', {
                    get() {
                        return that._tooltipPosition();
                    },
                    set(newValue) {
                        that._tooltipPosition(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'tooltipFormatFunction', {
                    get() {
                        return that._tooltipFormatFunction();
                    },
                    set(newValue) {
                        that._tooltipFormatFunction(newValue);
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
                Object.defineProperty(that, 'values', {
                    get() {
                        return that._values();
                    },
                    set(newValue) {
                        that._values(newValue);
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
            __twoWayDataBinding__: function () {
                const value = JQXLite(this.componentSelector).jqxSlider('val');
                this.$emit('input', value);
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('change', function (event) { that.$emit('change', event); that.__twoWayDataBinding__(); });
                JQXLite(this.componentSelector).on('slide', function (event) { that.$emit('slide', event); });
                JQXLite(this.componentSelector).on('slideStart', function (event) { that.$emit('slideStart', event); });
                JQXLite(this.componentSelector).on('slideEnd', function (event) { that.$emit('slideEnd', event); });
            }
        }
    }
</script>
