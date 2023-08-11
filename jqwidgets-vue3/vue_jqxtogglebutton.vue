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
			const id = "jqxToggleButton" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxToggleButton(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxToggleButton(usedProps[i]);
                }
                return resultToReturn;
            }
            function check() {
                JQXLite(componentSelector).jqxToggleButton('check');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxToggleButton('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxToggleButton('focus');  
            }
            function render() {
                JQXLite(componentSelector).jqxToggleButton('render');  
            }
            function toggle() {
                JQXLite(componentSelector).jqxToggleButton('toggle');  
            }
            function unCheck() {
                JQXLite(componentSelector).jqxToggleButton('unCheck');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('height');
                }
            }
            function _imgSrc (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('imgSrc', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('imgSrc');
                }
            }
            function _imgWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('imgWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('imgWidth');
                }
            }
            function _imgHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('imgHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('imgHeight');
                }
            }
            function _imgPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('imgPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('imgPosition');
                }
            }
            function _roundedCorners (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('roundedCorners', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('roundedCorners');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('rtl');
                }
            }
            function _textPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('textPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('textPosition');
                }
            }
            function _textImageRelation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('textImageRelation', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('textImageRelation');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('theme');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('template');
                }
            }
            function _toggled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('toggled', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('toggled');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('width');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxToggleButton('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxToggleButton('value');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxToggleButton(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
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
				JQXLite(componentSelector).jqxToggleButton(widgetOptions);
			})
			return {id, componentSelector, check,destroy,focus,render,toggle,unCheck,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
