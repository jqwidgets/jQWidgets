<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxvalidator.js';

    export default {
        props: {
            arrow: {
                default: true,
                type: Boolean
            },
            animation: String,
            animationDuration: Number,
            closeOnClick: {
                default: true,
                type: Boolean
            },
            focus: {
                default: true,
                type: Boolean
            },
            hintType: String,
            onError: Function,
            onSuccess: Function,
            position: String,
            rules: Array,
            rtl: {
                default: false,
                type: Boolean
            },
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["validationError","validationSuccess"],
        setup(props, context) {
			const id = "jqxValidator" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxValidator(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxValidator(usedProps[i]);
                }
                return resultToReturn;
            }
            function hideHint(id) {
                JQXLite(componentSelector).jqxValidator('hideHint', id);  
            }
            function hide() {
                JQXLite(componentSelector).jqxValidator('hide');  
            }
            function updatePosition() {
                JQXLite(componentSelector).jqxValidator('updatePosition');  
            }
            function validate(htmlElement) {
                JQXLite(componentSelector).jqxValidator('validate', htmlElement);  
            }
            function validateInput(id) {
                JQXLite(componentSelector).jqxValidator('validateInput', id);  
            }
            function _arrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('arrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('arrow');
                }
            }
            function _animation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('animation', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('animation');
                }
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('animationDuration');
                }
            }
            function _closeOnClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('closeOnClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('closeOnClick');
                }
            }
            function _focus (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('focus', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('focus');
                }
            }
            function _hintType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('hintType', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('hintType');
                }
            }
            function _onError (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('onError', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('onError');
                }
            }
            function _onSuccess (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('onSuccess', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('onSuccess');
                }
            }
            function _position (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('position', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('position');
                }
            }
            function _rules (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('rules', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('rules');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('rtl');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxValidator(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['arrow','animation','animationDuration','closeOnClick','focus','hintType','onError','onSuccess','position','rules','rtl'];
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
                 get arrow() {
                     return _arrow();
                 },
                 set arrow(newValue) {
                     _arrow(newValue);
                 },
                 get animation() {
                     return _animation();
                 },
                 set animation(newValue) {
                     _animation(newValue);
                 },
                 get animationDuration() {
                     return _animationDuration();
                 },
                 set animationDuration(newValue) {
                     _animationDuration(newValue);
                 },
                 get closeOnClick() {
                     return _closeOnClick();
                 },
                 set closeOnClick(newValue) {
                     _closeOnClick(newValue);
                 },
                 get focus() {
                     return _focus();
                 },
                 set focus(newValue) {
                     _focus(newValue);
                 },
                 get hintType() {
                     return _hintType();
                 },
                 set hintType(newValue) {
                     _hintType(newValue);
                 },
                 get onError() {
                     return _onError();
                 },
                 set onError(newValue) {
                     _onError(newValue);
                 },
                 get onSuccess() {
                     return _onSuccess();
                 },
                 set onSuccess(newValue) {
                     _onSuccess(newValue);
                 },
                 get position() {
                     return _position();
                 },
                 set position(newValue) {
                     _position(newValue);
                 },
                 get rules() {
                     return _rules();
                 },
                 set rules(newValue) {
                     _rules(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('validationError', function (event) { that.emit('validationError', event); });
                JQXLite(componentSelector).on('validationSuccess', function (event) { that.emit('validationSuccess', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxValidator(widgetOptions);
			})
			return {id, componentSelector, hideHint,hide,updatePosition,validate,validateInput, setOptions, options, getOptions, createComponent};
        },
    }
</script>
