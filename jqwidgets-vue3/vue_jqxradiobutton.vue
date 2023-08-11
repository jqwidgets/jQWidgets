<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxradiobutton.js';

    export default {
        props: {
            modelValue: String,
            animationShowDelay: Number,
            animationHideDelay: Number,
            boxSize: String,
            checked: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            enableContainerClick: {
                default: true,
                type: Boolean
            },
            groupName: String,
            hasThreeStates: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","checked","change","unchecked"],
        setup(props, context) {
			const id = "jqxRadioButton" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxRadioButton(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxRadioButton(usedProps[i]);
                }
                return resultToReturn;
            }
            function check() {
                JQXLite(componentSelector).jqxRadioButton('check');  
            }
            function disable() {
                JQXLite(componentSelector).jqxRadioButton('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxRadioButton('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxRadioButton('enable');  
            }
            function focus() {
                JQXLite(componentSelector).jqxRadioButton('focus');  
            }
            function render() {
                JQXLite(componentSelector).jqxRadioButton('render');  
            }
            function uncheck() {
                JQXLite(componentSelector).jqxRadioButton('uncheck');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('val');
                }
            }
            function _animationShowDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('animationShowDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('animationShowDelay');
                }
            }
            function _animationHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('animationHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('animationHideDelay');
                }
            }
            function _boxSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('boxSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('boxSize');
                }
            }
            function _checked (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('checked', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('checked');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('disabled');
                }
            }
            function _enableContainerClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('enableContainerClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('enableContainerClick');
                }
            }
            function _groupName (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('groupName', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('groupName');
                }
            }
            function _hasThreeStates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('hasThreeStates', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('hasThreeStates');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('height');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRadioButton('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxRadioButton('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxRadioButton(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','hasThreeStates','height','rtl','theme','width'];
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
                 get animationShowDelay() {
                     return _animationShowDelay();
                 },
                 set animationShowDelay(newValue) {
                     _animationShowDelay(newValue);
                 },
                 get animationHideDelay() {
                     return _animationHideDelay();
                 },
                 set animationHideDelay(newValue) {
                     _animationHideDelay(newValue);
                 },
                 get boxSize() {
                     return _boxSize();
                 },
                 set boxSize(newValue) {
                     _boxSize(newValue);
                 },
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
                 get enableContainerClick() {
                     return _enableContainerClick();
                 },
                 set enableContainerClick(newValue) {
                     _enableContainerClick(newValue);
                 },
                 get groupName() {
                     return _groupName();
                 },
                 set groupName(newValue) {
                     _groupName(newValue);
                 },
                 get hasThreeStates() {
                     return _hasThreeStates();
                 },
                 set hasThreeStates(newValue) {
                     _hasThreeStates(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
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
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function twoWayBinding() {
				const element = JQXLite(componentSelector).jqxRadioButton('element');
                context.emit('input', element.innerText);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('checked', function (event) { that.emit('checked', event); twoWayBinding(); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector).on('unchecked', function (event) { that.emit('unchecked', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxRadioButton(widgetOptions);
			})
			return {id, componentSelector, check,disable,destroy,enable,focus,render,uncheck,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
