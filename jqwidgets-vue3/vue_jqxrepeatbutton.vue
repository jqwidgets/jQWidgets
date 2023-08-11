<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
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
            toggled: {
                default: false,
                type: Boolean
            },
            width: [Number, String],
            value: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["click"],
        setup(props, context) {
			const id = "jqxRepeatButton" + JQXLite.generateID();
			const componentSelector = '#' + id;
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
            function _toggled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRepeatButton('toggled', arg)
                } else {
                    return JQXLite(componentSelector).jqxRepeatButton('toggled');
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
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
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
                 get toggled() {
                     return _toggled();
                 },
                 set toggled(newValue) {
                     _toggled(newValue);
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
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxRepeatButton(widgetOptions);
			})
			return {id, componentSelector, destroy,focus,render,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
