<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxprogressbar.js';

    export default {
        props: {
            animationDuration: Number,
            colorRanges: Array,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            layout: String,
            max: Number,
            min: Number,
            orientation: String,
            rtl: {
                default: false,
                type: Boolean
            },
            renderText: Function,
            showText: {
                default: false,
                type: Boolean
            },
            template: String,
            theme: String,
            value: Number,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["complete","invalidValue","valueChanged"],
        setup(props, context) {
			const id = "jqxProgressBar" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxProgressBar(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxProgressBar(usedProps[i]);
                }
                return resultToReturn;
            }
            function actualValue(value) {
                JQXLite(componentSelector).jqxProgressBar('actualValue', value);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxProgressBar('destroy');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('val');
                }
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('animationDuration');
                }
            }
            function _colorRanges (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('colorRanges', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('colorRanges');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('height');
                }
            }
            function _layout (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('layout', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('layout');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('max');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('min');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('orientation');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('rtl');
                }
            }
            function _renderText (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('renderText', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('renderText');
                }
            }
            function _showText (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('showText', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('showText');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('theme');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxProgressBar('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxProgressBar('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxProgressBar(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDuration','colorRanges','disabled','height','layout','max','min','orientation','rtl','renderText','showText','template','theme','value','width'];
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
                 get colorRanges() {
                     return _colorRanges();
                 },
                 set colorRanges(newValue) {
                     _colorRanges(newValue);
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
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get renderText() {
                     return _renderText();
                 },
                 set renderText(newValue) {
                     _renderText(newValue);
                 },
                 get showText() {
                     return _showText();
                 },
                 set showText(newValue) {
                     _showText(newValue);
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

                JQXLite(componentSelector).on('complete', function (event) { that.emit('complete', event); });
                JQXLite(componentSelector).on('invalidValue', function (event) { that.emit('invalidValue', event); });
                JQXLite(componentSelector).on('valueChanged', function (event) { that.emit('valueChanged', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxProgressBar(widgetOptions);
			})
			return {id, componentSelector, actualValue,destroy,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
