<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxpopover.js';

    export default {
        props: {
            arrowOffsetValue: Number,
            animationOpenDelay: [String, Number],
            animationCloseDelay: [String, Number],
            autoClose: {
                default: true,
                type: Boolean
            },
            animationType: String,
            height: [Number, String],
            initContent: Function,
            isModal: {
                default: false,
                type: Boolean
            },
            offset: Object,
            position: String,
            rtl: {
                default: false,
                type: Boolean
            },
            selector: String,
            showArrow: {
                default: true,
                type: Boolean
            },
            showCloseButton: {
                default: false,
                type: Boolean
            },
            width: [Number, String],
            title: String,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["close","open"],
        setup(props, context) {
			const id = "jqxPopover" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxPopover(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxPopover(usedProps[i]);
                }
                return resultToReturn;
            }
            function close() {
                JQXLite(componentSelector).jqxPopover('close');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxPopover('destroy');  
            }
            function open() {
                JQXLite(componentSelector).jqxPopover('open');  
            }
            function _arrowOffsetValue (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('arrowOffsetValue', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('arrowOffsetValue');
                }
            }
            function _animationOpenDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('animationOpenDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('animationOpenDelay');
                }
            }
            function _animationCloseDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('animationCloseDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('animationCloseDelay');
                }
            }
            function _autoClose (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('autoClose', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('autoClose');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('animationType');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('height');
                }
            }
            function _initContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('initContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('initContent');
                }
            }
            function _isModal (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('isModal', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('isModal');
                }
            }
            function _offset (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('offset', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('offset');
                }
            }
            function _position (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('position', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('position');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('rtl');
                }
            }
            function _selector (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('selector', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('selector');
                }
            }
            function _showArrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('showArrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('showArrow');
                }
            }
            function _showCloseButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('showCloseButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('showCloseButton');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('width');
                }
            }
            function _title (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('title', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('title');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPopover('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxPopover('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxPopover(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['arrowOffsetValue','animationOpenDelay','animationCloseDelay','autoClose','animationType','height','initContent','isModal','offset','position','rtl','selector','showArrow','showCloseButton','width','title','theme'];
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
                 get arrowOffsetValue() {
                     return _arrowOffsetValue();
                 },
                 set arrowOffsetValue(newValue) {
                     _arrowOffsetValue(newValue);
                 },
                 get animationOpenDelay() {
                     return _animationOpenDelay();
                 },
                 set animationOpenDelay(newValue) {
                     _animationOpenDelay(newValue);
                 },
                 get animationCloseDelay() {
                     return _animationCloseDelay();
                 },
                 set animationCloseDelay(newValue) {
                     _animationCloseDelay(newValue);
                 },
                 get autoClose() {
                     return _autoClose();
                 },
                 set autoClose(newValue) {
                     _autoClose(newValue);
                 },
                 get animationType() {
                     return _animationType();
                 },
                 set animationType(newValue) {
                     _animationType(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get initContent() {
                     return _initContent();
                 },
                 set initContent(newValue) {
                     _initContent(newValue);
                 },
                 get isModal() {
                     return _isModal();
                 },
                 set isModal(newValue) {
                     _isModal(newValue);
                 },
                 get offset() {
                     return _offset();
                 },
                 set offset(newValue) {
                     _offset(newValue);
                 },
                 get position() {
                     return _position();
                 },
                 set position(newValue) {
                     _position(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get selector() {
                     return _selector();
                 },
                 set selector(newValue) {
                     _selector(newValue);
                 },
                 get showArrow() {
                     return _showArrow();
                 },
                 set showArrow(newValue) {
                     _showArrow(newValue);
                 },
                 get showCloseButton() {
                     return _showCloseButton();
                 },
                 set showCloseButton(newValue) {
                     _showCloseButton(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
                 get title() {
                     return _title();
                 },
                 set title(newValue) {
                     _title(newValue);
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

                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxPopover(widgetOptions);
			})
			return {id, componentSelector, close,destroy,open, setOptions, options, getOptions, createComponent};
        },
    }
</script>
