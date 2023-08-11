<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxdropdownbutton.js';

    export default {
        props: {
            animationType: String,
            arrowSize: Number,
            autoOpen: {
                default: false,
                type: Boolean
            },
            closeDelay: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            dropDownHorizontalAlignment: String,
            dropDownVerticalAlignment: String,
            dropDownWidth: [String, Number],
            enableBrowserBoundsDetection: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            initContent: Function,
            openDelay: Number,
            popupZIndex: Number,
            rtl: {
                default: false,
                type: Boolean
            },
            template: String,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["close","open"],
        setup(props, context) {
			const id = "jqxDropDownButton" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxDropDownButton(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxDropDownButton(usedProps[i]);
                }
                return resultToReturn;
            }
            function close() {
                JQXLite(componentSelector).jqxDropDownButton('close');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxDropDownButton('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxDropDownButton('focus');  
            }
            function getContent() {
                return JQXLite(componentSelector).jqxDropDownButton('getContent');  
            }
            function isOpened() {
                return JQXLite(componentSelector).jqxDropDownButton('isOpened');  
            }
            function open() {
                JQXLite(componentSelector).jqxDropDownButton('open');  
            }
            function setContent(content) {
                JQXLite(componentSelector).jqxDropDownButton('setContent', content);  
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('animationType');
                }
            }
            function _arrowSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('arrowSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('arrowSize');
                }
            }
            function _autoOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('autoOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('autoOpen');
                }
            }
            function _closeDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('closeDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('closeDelay');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('disabled');
                }
            }
            function _dropDownHorizontalAlignment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('dropDownHorizontalAlignment', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('dropDownHorizontalAlignment');
                }
            }
            function _dropDownVerticalAlignment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('dropDownVerticalAlignment', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('dropDownVerticalAlignment');
                }
            }
            function _dropDownWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('dropDownWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('dropDownWidth');
                }
            }
            function _enableBrowserBoundsDetection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('enableBrowserBoundsDetection', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('enableBrowserBoundsDetection');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('height');
                }
            }
            function _initContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('initContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('initContent');
                }
            }
            function _openDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('openDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('openDelay');
                }
            }
            function _popupZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('popupZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('popupZIndex');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('rtl');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDropDownButton('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxDropDownButton('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDropDownButton(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationType','arrowSize','autoOpen','closeDelay','disabled','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownWidth','enableBrowserBoundsDetection','height','initContent','openDelay','popupZIndex','rtl','template','theme','width'];
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
                 get animationType() {
                     return _animationType();
                 },
                 set animationType(newValue) {
                     _animationType(newValue);
                 },
                 get arrowSize() {
                     return _arrowSize();
                 },
                 set arrowSize(newValue) {
                     _arrowSize(newValue);
                 },
                 get autoOpen() {
                     return _autoOpen();
                 },
                 set autoOpen(newValue) {
                     _autoOpen(newValue);
                 },
                 get closeDelay() {
                     return _closeDelay();
                 },
                 set closeDelay(newValue) {
                     _closeDelay(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get dropDownHorizontalAlignment() {
                     return _dropDownHorizontalAlignment();
                 },
                 set dropDownHorizontalAlignment(newValue) {
                     _dropDownHorizontalAlignment(newValue);
                 },
                 get dropDownVerticalAlignment() {
                     return _dropDownVerticalAlignment();
                 },
                 set dropDownVerticalAlignment(newValue) {
                     _dropDownVerticalAlignment(newValue);
                 },
                 get dropDownWidth() {
                     return _dropDownWidth();
                 },
                 set dropDownWidth(newValue) {
                     _dropDownWidth(newValue);
                 },
                 get enableBrowserBoundsDetection() {
                     return _enableBrowserBoundsDetection();
                 },
                 set enableBrowserBoundsDetection(newValue) {
                     _enableBrowserBoundsDetection(newValue);
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
                 get openDelay() {
                     return _openDelay();
                 },
                 set openDelay(newValue) {
                     _openDelay(newValue);
                 },
                 get popupZIndex() {
                     return _popupZIndex();
                 },
                 set popupZIndex(newValue) {
                     _popupZIndex(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
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

                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxDropDownButton(widgetOptions);
			})
			return {id, componentSelector, close,destroy,focus,getContent,isOpened,open,setContent, setOptions, options, getOptions, createComponent};
        },
    }
</script>
