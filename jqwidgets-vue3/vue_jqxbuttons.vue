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
            height: [String, Number],
            imgSrc: String,
            imgWidth: Number,
            imgHeight: Number,
            imgPosition: String,
            roundedCorners: String,
            rtl: {
                default: false,
                type: Boolean
            },
            enableDefault: {
                default: true,
                type: Boolean
            },
            cursor: {
                default: 'pointer',
                type: Boolean
            },
            textPosition: String,
            textImageRelation: String,
            theme: String,
            template: String,
            width: [String, Number],
            value: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["click"],
        setup(props, context) {
			const id = "jqxButton" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxButton(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxButton(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxButton('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxButton('focus');  
            }
            function render() {
                JQXLite(componentSelector).jqxButton('render');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxButton('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxButton('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('height');
                }
            }
            function _imgSrc (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('imgSrc', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('imgSrc');
                }
            }
            function _imgWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('imgWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('imgWidth');
                }
            }
            function _imgHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('imgHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('imgHeight');
                }
            }
            function _imgPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('imgPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('imgPosition');
                }
            }
            function _roundedCorners (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('roundedCorners', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('roundedCorners');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('rtl');
                }
            }
            function _enableDefault (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('enableDefault', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('enableDefault');
                }
            }
            function _cursor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('cursor', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('cursor');
                }
            }
            function _textPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('textPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('textPosition');
                }
            }
            function _textImageRelation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('textImageRelation', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('textImageRelation');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('theme');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('template');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('width');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButton('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxButton('value');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxButton(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','enableDefault','cursor','textPosition','textImageRelation','theme','template','width','value'];
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
                 get enableDefault() {
                     return _enableDefault();
                 },
                 set enableDefault(newValue) {
                     _enableDefault(newValue);
                 },
                 get cursor() {
                     return _cursor();
                 },
                 set cursor(newValue) {
                     _cursor(newValue);
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

                JQXLite(componentSelector).on('click', function (event) { 
                    const isDisabled = JQXLite(componentSelector).jqxButton('disabled'); 
                    if (!isDisabled) that.emit('click', event);
                });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxButton(widgetOptions);
			})
			return {id, componentSelector, destroy,focus,render,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
