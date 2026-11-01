<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
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
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxLoader" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
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
            function destroy() {
                JQXLite(componentSelector).jqxLoader('destroy');  
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
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
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
				if (hasChanges) JQXLite(componentSelector).jqxLoader(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxLoader('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, close, destroy, open, setOptions, options, getOptions, createComponent};
        },
    }
</script>
