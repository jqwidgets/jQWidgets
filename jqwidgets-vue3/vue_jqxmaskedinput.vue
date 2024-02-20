<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxmaskedinput.js';

    export default {
        props: {
            modelValue: String,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            mask: String,
            promptChar: String,
            readOnly: {
                default: false,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            textAlign: String,
            value: [String, Number],
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change","valueChanged"],
        setup(props, context) {
			const id = "jqxMaskedInput" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxMaskedInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxMaskedInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function clear() {
                JQXLite(componentSelector).jqxMaskedInput('clear');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxMaskedInput('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxMaskedInput('focus');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('height');
                }
            }
            function _mask (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('mask', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('mask');
                }
            }
            function _promptChar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('promptChar', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('promptChar');
                }
            }
            function _readOnly (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('readOnly', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('readOnly');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('theme');
                }
            }
            function _textAlign (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('textAlign', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('textAlign');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMaskedInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxMaskedInput('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxMaskedInput(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','mask','promptChar','readOnly','rtl','theme','textAlign','value','width'];
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
                 get mask() {
                     return _mask();
                 },
                 set mask(newValue) {
                     _mask(newValue);
                 },
                 get promptChar() {
                     return _promptChar();
                 },
                 set promptChar(newValue) {
                     _promptChar(newValue);
                 },
                 get readOnly() {
                     return _readOnly();
                 },
                 set readOnly(newValue) {
                     _readOnly(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get textAlign() {
                     return _textAlign();
                 },
                 set textAlign(newValue) {
                     _textAlign(newValue);
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
				const element = JQXLite(componentSelector).jqxMaskedInput('element');
                const value = JQXLite(componentSelector).jqxMaskedInput('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector).on('valueChanged', function (event) { that.emit('valueChanged', event); twoWayBinding(); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxMaskedInput(widgetOptions);
			})
			return {id, componentSelector, clear,destroy,focus,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
