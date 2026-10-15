<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';

    export default {
        props: {
            delay: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            imgSrc: String,
            imgWidth: Number,
            imgHeight: Number,
            imgPosition: String,
            roundedCorners: String,
            rtl: {
                default: false,
                type: Boolean
            },
            textPosition: String,
            textImageRelation: String,
            theme: String,
            template: String,
            width: [Number, String],
            value: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["click"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxRepeatButton" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxRepeatButton(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxRepeatButton(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxRepeatButton('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxRepeatButton('focus');  
            }
            function render() {
                JQXLite(componentSelector).jqxRepeatButton('render');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('val');
                }
            }
            function _delay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('delay', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('delay');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('height');
                }
            }
            function _imgSrc (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('imgSrc', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('imgSrc');
                }
            }
            function _imgWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('imgWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('imgWidth');
                }
            }
            function _imgHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('imgHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('imgHeight');
                }
            }
            function _imgPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('imgPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('imgPosition');
                }
            }
            function _roundedCorners (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('roundedCorners', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('roundedCorners');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('rtl');
                }
            }
            function _textPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('textPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('textPosition');
                }
            }
            function _textImageRelation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('textImageRelation', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('textImageRelation');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('theme');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('template');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('width');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('value');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxRepeatButton(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','width','value'];
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
                 get delay() {
                     return _delay();
                 },
                 set delay(newValue) {
                     _delay(newValue);
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
                 get imgSrc() {
                     return _imgSrc();
                 },
                 set imgSrc(newValue) {
                     _imgSrc(newValue);
                 },
                 get imgWidth() {
                     return _imgWidth();
                 },
                 set imgWidth(newValue) {
                     _imgWidth(newValue);
                 },
                 get imgHeight() {
                     return _imgHeight();
                 },
                 set imgHeight(newValue) {
                     _imgHeight(newValue);
                 },
                 get imgPosition() {
                     return _imgPosition();
                 },
                 set imgPosition(newValue) {
                     _imgPosition(newValue);
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
                 get textPosition() {
                     return _textPosition();
                 },
                 set textPosition(newValue) {
                     _textPosition(newValue);
                 },
                 get textImageRelation() {
                     return _textImageRelation();
                 },
                 set textImageRelation(newValue) {
                     _textImageRelation(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('click', function (event) { that.emit('click', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxRepeatButton(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxRepeatButton('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, destroy, focus, render, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
