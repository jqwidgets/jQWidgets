<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
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
            hintPositionOffset: Number,
            onError: Function,
            onSuccess: Function,
            ownerElement: null,
            position: String,
            rules: Array,
            rtl: {
                default: false,
                type: Boolean
            },
            scroll: {
                default: true,
                type: Boolean
            },
            scrollDuration: Number,
            scrollCallback: Function,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["validationError","validationSuccess"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxValidator" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
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
            function _hintPositionOffset (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('hintPositionOffset', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('hintPositionOffset');
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
            function _ownerElement (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('ownerElement', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('ownerElement');
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
            function _scroll (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('scroll', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('scroll');
                }
            }
            function _scrollDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('scrollDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('scrollDuration');
                }
            }
            function _scrollCallback (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('scrollCallback', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('scrollCallback');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxValidator('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxValidator('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxValidator(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['arrow','animation','animationDuration','closeOnClick','focus','hintType','hintPositionOffset','onError','onSuccess','ownerElement','position','rules','rtl','scroll','scrollDuration','scrollCallback','theme'];
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
                 get hintPositionOffset() {
                     return _hintPositionOffset();
                 },
                 set hintPositionOffset(newValue) {
                     _hintPositionOffset(newValue);
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
                 get ownerElement() {
                     return _ownerElement();
                 },
                 set ownerElement(newValue) {
                     _ownerElement(newValue);
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
                 get scroll() {
                     return _scroll();
                 },
                 set scroll(newValue) {
                     _scroll(newValue);
                 },
                 get scrollDuration() {
                     return _scrollDuration();
                 },
                 set scrollDuration(newValue) {
                     _scrollDuration(newValue);
                 },
                 get scrollCallback() {
                     return _scrollCallback();
                 },
                 set scrollCallback(newValue) {
                     _scrollCallback(newValue);
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

                JQXLite(componentSelector).on('validationError', function (event) { that.emit('validationError', event); });
                JQXLite(componentSelector).on('validationSuccess', function (event) { that.emit('validationSuccess', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			// The props that changed, and only those (arrays and objects by reference): all of
			// them again, on every update, reset the widget (JqxGrid bound its source again and
			// showed "Loading...", JqxDropDownList went back to its selectedIndex).
			watch(__manageProps__, (widgetOptions) => {
				if (!__hasJQXLite__ || !__created__) return;
				const changed = {};
				let hasChanges = false;
				for (const key in widgetOptions) {
					if (!Object.is(widgetOptions[key], __appliedProps__[key])) {
						changed[key] = widgetOptions[key];
						hasChanges = true;
					}
				}
				// new data resets the widget's selection: the selection the props ask for goes with it
				if ('source' in changed) {
					for (const key of ['selectedIndex', 'selectedIndexes', 'checkedIndexes', 'value']) {
						if (!(key in changed) && widgetOptions[key] !== undefined) changed[key] = widgetOptions[key];
					}
				}
				__appliedProps__ = widgetOptions;
				if (hasChanges) JQXLite(componentSelector).jqxValidator(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
			})
			return {id, componentSelector, hideHint, hide, updatePosition, validate, validateInput, setOptions, options, getOptions, createComponent};
        },
    }
</script>
