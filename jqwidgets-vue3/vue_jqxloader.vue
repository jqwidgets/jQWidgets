<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxloader.js';

    export default {
        props: {
            autoOpen: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            html: String,
            isModal: {
                default: false,
                type: Boolean
            },
            imagePosition: String,
            rtl: {
                default: false,
                type: Boolean
            },
            text: String,
            textPosition: String,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const id = "jqxLoader" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxLoader(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxLoader(usedProps[i]);
                }
                return resultToReturn;
            }
            function close() {
                JQXLite(componentSelector).jqxLoader('close');  
            }
            function open(left, top) {
                JQXLite(componentSelector).jqxLoader('open', left, top);  
            }
            function _autoOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('autoOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('autoOpen');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('height');
                }
            }
            function _html (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('html', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('html');
                }
            }
            function _isModal (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('isModal', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('isModal');
                }
            }
            function _imagePosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('imagePosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('imagePosition');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('rtl');
                }
            }
            function _text (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('text', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('text');
                }
            }
            function _textPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('textPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('textPosition');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxLoader('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxLoader('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxLoader(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['autoOpen','height','html','isModal','imagePosition','rtl','text','textPosition','theme','width'];
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
                 get autoOpen() {
                     return _autoOpen();
                 },
                 set autoOpen(newValue) {
                     _autoOpen(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get html() {
                     return _html();
                 },
                 set html(newValue) {
                     _html(newValue);
                 },
                 get isModal() {
                     return _isModal();
                 },
                 set isModal(newValue) {
                     _isModal(newValue);
                 },
                 get imagePosition() {
                     return _imagePosition();
                 },
                 set imagePosition(newValue) {
                     _imagePosition(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get text() {
                     return _text();
                 },
                 set text(newValue) {
                     _text(newValue);
                 },
                 get textPosition() {
                     return _textPosition();
                 },
                 set textPosition(newValue) {
                     _textPosition(newValue);
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
            function __wireEvents__() {
                const that = context;

            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxLoader(widgetOptions);
			})
			return {id, componentSelector, close,open, setOptions, options, getOptions, createComponent};
        },
    }
</script>
