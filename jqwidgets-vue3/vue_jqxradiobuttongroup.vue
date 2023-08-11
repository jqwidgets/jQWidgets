<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';

    export default {
        props: {
            change: {
                default: null,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            items: [],
            value: [],
            layout: String,
            labelPosition: String,
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const id = "jqxRadioButtonGroup" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxRadioButtonGroup(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxRadioButtonGroup(usedProps[i]);
                }
                return resultToReturn;
            }
            function getValue() {
                return JQXLite(componentSelector).jqxRadioButtonGroup('getValue');  
            }
            function getValueAt(index) {
                return JQXLite(componentSelector).jqxRadioButtonGroup('getValueAt', index);  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxRadioButtonGroup('enableAt', index);  
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxRadioButtonGroup('disableAt', index);  
            }
            function checkAt(index) {
                JQXLite(componentSelector).jqxRadioButtonGroup('checkAt', index);  
            }
            function uncheckAt(index) {
                JQXLite(componentSelector).jqxRadioButtonGroup('uncheckAt', index);  
            }
            function uncheckAll() {
                JQXLite(componentSelector).jqxRadioButtonGroup('uncheckAll');  
            }
            function checkValue(value) {
                JQXLite(componentSelector).jqxRadioButtonGroup('checkValue', value);  
            }
            function uncheckValue(value) {
                JQXLite(componentSelector).jqxRadioButtonGroup('uncheckValue', value);  
            }
            function disable() {
                JQXLite(componentSelector).jqxRadioButtonGroup('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxRadioButtonGroup('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxRadioButtonGroup('enable');  
            }
            function render() {
                JQXLite(componentSelector).jqxRadioButtonGroup('render');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('val');
                }
            }
            function _change (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('change', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('change');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('disabled');
                }
            }
            function _items (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('items', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('items');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('value');
                }
            }
            function _layout (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('layout', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('layout');
                }
            }
            function _labelPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('labelPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('labelPosition');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButtonGroup('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButtonGroup('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxRadioButtonGroup(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['change','disabled','items','value','layout','labelPosition','rtl','theme'];
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
                 get change() {
                     return _change();
                 },
                 set change(newValue) {
                     _change(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get items() {
                     return _items();
                 },
                 set items(newValue) {
                     _items(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
                 get layout() {
                     return _layout();
                 },
                 set layout(newValue) {
                     _layout(newValue);
                 },
                 get labelPosition() {
                     return _labelPosition();
                 },
                 set labelPosition(newValue) {
                     _labelPosition(newValue);
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
            }
            function __wireEvents__() {
                const that = context;

            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxRadioButtonGroup(widgetOptions);
			})
			return {id, componentSelector, getValue,getValueAt,enableAt,disableAt,checkAt,uncheckAt,uncheckAll,checkValue,uncheckValue,disable,destroy,enable,render,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
