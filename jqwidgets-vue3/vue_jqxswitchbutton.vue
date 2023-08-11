<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxswitchbutton.js';

    export default {
        props: {
            modelValue: String,
            checked: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            orientation: String,
            onLabel: String,
            offLabel: String,
            thumbSize: String,
            rtl: {
                default: false,
                type: Boolean
            },
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","checked","change","unchecked"],
        setup(props, context) {
			const id = "jqxSwitchButton" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxSwitchButton(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxSwitchButton(usedProps[i]);
                }
                return resultToReturn;
            }
            function check() {
                JQXLite(componentSelector).jqxSwitchButton('check');  
            }
            function disable() {
                JQXLite(componentSelector).jqxSwitchButton('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxSwitchButton('enable');  
            }
            function toggle() {
                JQXLite(componentSelector).jqxSwitchButton('toggle');  
            }
            function uncheck() {
                JQXLite(componentSelector).jqxSwitchButton('uncheck');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('val');
                }
            }
            function _checked (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('checked', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('checked');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('height');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('orientation');
                }
            }
            function _onLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('onLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('onLabel');
                }
            }
            function _offLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('offLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('offLabel');
                }
            }
            function _thumbSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('thumbSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('thumbSize');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('rtl');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSwitchButton('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxSwitchButton('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxSwitchButton(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['checked','disabled','height','orientation','onLabel','offLabel','thumbSize','rtl','width'];
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
                 get checked() {
                     return _checked();
                 },
                 set checked(newValue) {
                     _checked(newValue);
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
                 get orientation() {
                     return _orientation();
                 },
                 set orientation(newValue) {
                     _orientation(newValue);
                 },
                 get onLabel() {
                     return _onLabel();
                 },
                 set onLabel(newValue) {
                     _onLabel(newValue);
                 },
                 get offLabel() {
                     return _offLabel();
                 },
                 set offLabel(newValue) {
                     _offLabel(newValue);
                 },
                 get thumbSize() {
                     return _thumbSize();
                 },
                 set thumbSize(newValue) {
                     _thumbSize(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function twoWayBinding() {
                const value = JQXLite(componentSelector).jqxSwitchButton('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('checked', function (event) { that.emit('checked', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('unchecked', function (event) { that.emit('unchecked', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxSwitchButton(widgetOptions);
			})
			return {id, componentSelector, check,disable,enable,toggle,uncheck,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
