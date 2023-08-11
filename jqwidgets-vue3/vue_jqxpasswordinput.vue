<template>
        <input type="password" v-bind:id="id" :value="modelValue" @input="twoWayBinding" />
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxpasswordinput.js';

    export default {
        props: {
            modelValue: String,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            localization: Object,
            maxLength: Number,
            placeHolder: String,
            passwordStrength: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            strengthColors: Object,
            showStrength: {
                default: false,
                type: Boolean
            },
            showStrengthPosition: String,
            strengthTypeRenderer: Function,
            showPasswordIcon: {
                default: true,
                type: Boolean
            },
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change"],
        setup(props, context) {
			const id = "jqxPasswordInput" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxPasswordInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxPasswordInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function render() {
                JQXLite(componentSelector).jqxPasswordInput('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxPasswordInput('refresh');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('height');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('localization');
                }
            }
            function _maxLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('maxLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('maxLength');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('placeHolder');
                }
            }
            function _passwordStrength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('passwordStrength', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('passwordStrength');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('rtl');
                }
            }
            function _strengthColors (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('strengthColors', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('strengthColors');
                }
            }
            function _showStrength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('showStrength', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('showStrength');
                }
            }
            function _showStrengthPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('showStrengthPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('showStrengthPosition');
                }
            }
            function _strengthTypeRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('strengthTypeRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('strengthTypeRenderer');
                }
            }
            function _showPasswordIcon (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('showPasswordIcon', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('showPasswordIcon');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPasswordInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxPasswordInput('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxPasswordInput(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','localization','maxLength','placeHolder','passwordStrength','rtl','strengthColors','showStrength','showStrengthPosition','strengthTypeRenderer','showPasswordIcon','theme','width'];
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
                 get localization() {
                     return _localization();
                 },
                 set localization(newValue) {
                     _localization(newValue);
                 },
                 get maxLength() {
                     return _maxLength();
                 },
                 set maxLength(newValue) {
                     _maxLength(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get passwordStrength() {
                     return _passwordStrength();
                 },
                 set passwordStrength(newValue) {
                     _passwordStrength(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get strengthColors() {
                     return _strengthColors();
                 },
                 set strengthColors(newValue) {
                     _strengthColors(newValue);
                 },
                 get showStrength() {
                     return _showStrength();
                 },
                 set showStrength(newValue) {
                     _showStrength(newValue);
                 },
                 get showStrengthPosition() {
                     return _showStrengthPosition();
                 },
                 set showStrengthPosition(newValue) {
                     _showStrengthPosition(newValue);
                 },
                 get strengthTypeRenderer() {
                     return _strengthTypeRenderer();
                 },
                 set strengthTypeRenderer(newValue) {
                     _strengthTypeRenderer(newValue);
                 },
                 get showPasswordIcon() {
                     return _showPasswordIcon();
                 },
                 set showPasswordIcon(newValue) {
                     _showPasswordIcon(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function twoWayBinding () {
				const element = JQXLite(componentSelector).jqxPasswordInput('element');
                context.emit('input', element.value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxPasswordInput(widgetOptions);
			})
			return {id, componentSelector, render,refresh,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
