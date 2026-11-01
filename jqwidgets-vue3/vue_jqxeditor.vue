<template>
        <textarea v-bind:id="id"></textarea>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxdropdownlist.js';
    import '../jqwidgets/jqxdropdownbutton.js';
    import '../jqwidgets/jqxwindow.js';
    import '../jqwidgets/jqxeditor.js';
    import '../jqwidgets/jqxcheckbox.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxcolorpicker.js';

    export default {
        props: {
            createCommand: Function,
            disabled: {
                default: false,
                type: Boolean
            },
            editable: {
                default: true,
                type: Boolean
            },
            fontFamily: String,
            height: [String, Number],
            keyPressed: Function,
            lineBreak: String,
            localization: Object,
            pasteMode: String,
            rtl: {
                default: false,
                type: Boolean
            },
            stylesheets: Array,
            theme: String,
            toolbarPosition: String,
            tools: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["change"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxEditor" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxEditor(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxEditor(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxEditor('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxEditor('focus');  
            }
            function print() {
                JQXLite(componentSelector).jqxEditor('print');  
            }
            function setMode(mode) {
                JQXLite(componentSelector).jqxEditor('setMode', mode);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxEditor('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxEditor('val');
                }
            }
            function _createCommand (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('createCommand', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('createCommand');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('disabled');
                }
            }
            function _editable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('editable', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('editable');
                }
            }
            function _fontFamily (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('fontFamily', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('fontFamily');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('height');
                }
            }
            function _keyPressed (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('keyPressed', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('keyPressed');
                }
            }
            function _lineBreak (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('lineBreak', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('lineBreak');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('localization');
                }
            }
            function _pasteMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('pasteMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('pasteMode');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('rtl');
                }
            }
            function _stylesheets (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('stylesheets', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('stylesheets');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('theme');
                }
            }
            function _toolbarPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('toolbarPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('toolbarPosition');
                }
            }
            function _tools (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('tools', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('tools');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxEditor('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxEditor('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxEditor(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                if (context.slots.default) {
                    JQXLite(componentSelector).jqxEditor('val', context.slots.default().map((node) => typeof node.children === 'string' ? node.children : '').join(''));
                }
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['createCommand','disabled','editable','fontFamily','height','keyPressed','lineBreak','localization','pasteMode','rtl','stylesheets','theme','toolbarPosition','tools','width'];
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
                 get createCommand() {
                     return _createCommand();
                 },
                 set createCommand(newValue) {
                     _createCommand(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get editable() {
                     return _editable();
                 },
                 set editable(newValue) {
                     _editable(newValue);
                 },
                 get fontFamily() {
                     return _fontFamily();
                 },
                 set fontFamily(newValue) {
                     _fontFamily(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get keyPressed() {
                     return _keyPressed();
                 },
                 set keyPressed(newValue) {
                     _keyPressed(newValue);
                 },
                 get lineBreak() {
                     return _lineBreak();
                 },
                 set lineBreak(newValue) {
                     _lineBreak(newValue);
                 },
                 get localization() {
                     return _localization();
                 },
                 set localization(newValue) {
                     _localization(newValue);
                 },
                 get pasteMode() {
                     return _pasteMode();
                 },
                 set pasteMode(newValue) {
                     _pasteMode(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get stylesheets() {
                     return _stylesheets();
                 },
                 set stylesheets(newValue) {
                     _stylesheets(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get toolbarPosition() {
                     return _toolbarPosition();
                 },
                 set toolbarPosition(newValue) {
                     _toolbarPosition(newValue);
                 },
                 get tools() {
                     return _tools();
                 },
                 set tools(newValue) {
                     _tools(newValue);
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

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxEditor(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxEditor('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, destroy, focus, print, setMode, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
