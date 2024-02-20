<template>
    <div v-bind:id="id"><span><slot></slot></span></div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxcheckbox.js';

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
            height: [Number, String],
            hasThreeStates: {
                default: false,
                type: Boolean
            },
            locked: {
                default: false,
                type: Boolean
            },
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
        emits: ["update:modelValue","checked","change","indeterminate","unchecked"],
        setup(props, context) {
			const id = "jqxCheckBox" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxCheckBox(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxCheckBox(usedProps[i]);
                }
                return resultToReturn;
            }
            function check() {
                JQXLite(componentSelector).jqxCheckBox('check');  
            }
            function disable() {
                JQXLite(componentSelector).jqxCheckBox('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxCheckBox('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxCheckBox('enable');  
            }
            function focus() {
                JQXLite(componentSelector).jqxCheckBox('focus');  
            }
            function indeterminate() {
                JQXLite(componentSelector).jqxCheckBox('indeterminate');  
            }
            function render() {
                JQXLite(componentSelector).jqxCheckBox('render');  
            }
            function toggle() {
                JQXLite(componentSelector).jqxCheckBox('toggle');  
            }
            function uncheck() {
                JQXLite(componentSelector).jqxCheckBox('uncheck');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('val');
                }
            }
            function _animationShowDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('animationShowDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('animationShowDelay');
                }
            }
            function _animationHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('animationHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('animationHideDelay');
                }
            }
            function _boxSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('boxSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('boxSize');
                }
            }
            function _checked (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('checked', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('checked');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('disabled');
                }
            }
            function _enableContainerClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('enableContainerClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('enableContainerClick');
                }
            }
            function _groupName (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('groupName', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('groupName');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('height');
                }
            }
            function _hasThreeStates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('hasThreeStates', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('hasThreeStates');
                }
            }
            function _locked (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('locked', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('locked');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCheckBox('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxCheckBox('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxCheckBox(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationShowDelay','animationHideDelay','boxSize','checked','disabled','enableContainerClick','groupName','height','hasThreeStates','locked','rtl','theme','width'];
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
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get hasThreeStates() {
                     return _hasThreeStates();
                 },
                 set hasThreeStates(newValue) {
                     _hasThreeStates(newValue);
                 },
                 get locked() {
                     return _locked();
                 },
                 set locked(newValue) {
                     _locked(newValue);
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
				const element = JQXLite(componentSelector).jqxCheckBox('element');
                const value = JQXLite(componentSelector).jqxCheckBox('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('checked', function (event) { that.emit('checked', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('indeterminate', function (event) { that.emit('indeterminate', event); });
                JQXLite(componentSelector).on('unchecked', function (event) { that.emit('unchecked', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxCheckBox(widgetOptions);
			})
			return {id, componentSelector, check,disable,destroy,enable,focus,indeterminate,render,toggle,uncheck,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
