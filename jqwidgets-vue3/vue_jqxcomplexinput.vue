<template>
    <div v-bind:id="id">
        <input type="text" />
        <div></div>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxcomplexinput.js';

    export default {
        props: {
            modelValue: String,
            decimalNotation: String,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            placeHolder: String,
            roundedCorners: {
                default: true,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            spinButtons: {
                default: false,
                type: Boolean
            },
            spinButtonsStep: Number,
            template: String,
            theme: String,
            value: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change"],
        setup(props, context) {
			const id = "jqxComplexInput" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxComplexInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxComplexInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxComplexInput('destroy');  
            }
            function getDecimalNotation(part, decimalNotation) {
                return JQXLite(componentSelector).jqxComplexInput('getDecimalNotation', part, decimalNotation);  
            }
            function getReal(complexnumber) {
                return JQXLite(componentSelector).jqxComplexInput('getReal', complexnumber);  
            }
            function getImaginary(complexnumber) {
                return JQXLite(componentSelector).jqxComplexInput('getImaginary', complexnumber);  
            }
            function render() {
                JQXLite(componentSelector).jqxComplexInput('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxComplexInput('refresh');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('val');
                }
            }
            function _decimalNotation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('decimalNotation', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('decimalNotation');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('height');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('placeHolder');
                }
            }
            function _roundedCorners (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('roundedCorners', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('roundedCorners');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('rtl');
                }
            }
            function _spinButtons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('spinButtons', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('spinButtons');
                }
            }
            function _spinButtonsStep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('spinButtonsStep', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('spinButtonsStep');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('theme');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxComplexInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxComplexInput('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxComplexInput(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['decimalNotation','disabled','height','placeHolder','roundedCorners','rtl','spinButtons','spinButtonsStep','template','theme','value','width'];
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
                 get decimalNotation() {
                     return _decimalNotation();
                 },
                 set decimalNotation(newValue) {
                     _decimalNotation(newValue);
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
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get roundedCorners() {
                     return _roundedCorners();
                 },
                 set roundedCorners(newValue) {
                     _roundedCorners(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get spinButtons() {
                     return _spinButtons();
                 },
                 set spinButtons(newValue) {
                     _spinButtons(newValue);
                 },
                 get spinButtonsStep() {
                     return _spinButtonsStep();
                 },
                 set spinButtonsStep(newValue) {
                     _spinButtonsStep(newValue);
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
            function twoWayBinding() {
				const element = JQXLite(componentSelector).jqxComplexInput('element');
                const value = JQXLite(componentSelector).jqxComplexInput('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxComplexInput(widgetOptions);
			})
			return {id, componentSelector, destroy,getDecimalNotation,getReal,getImaginary,render,refresh,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
