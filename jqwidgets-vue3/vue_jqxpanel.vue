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
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxpanel.js';

    export default {
        props: {
            autoUpdate: {
                default: false,
                type: Boolean
            },
            autoUpdateInterval: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            horizontalScrollBarMax: Number,
            rtl: {
                default: false,
                type: Boolean
            },
            sizeMode: String,
            scrollBarSize: Number,
            theme: String,
            verticalScrollBarMax: Number,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxPanel" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxPanel(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxPanel(usedProps[i]);
                }
                return resultToReturn;
            }
            function append(HTMLElement) {
                JQXLite(componentSelector).jqxPanel('append', HTMLElement);  
            }
            function clearcontent() {
                JQXLite(componentSelector).jqxPanel('clearcontent');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxPanel('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxPanel('focus');  
            }
            function getScrollHeight() {
                return JQXLite(componentSelector).jqxPanel('getScrollHeight');  
            }
            function getVScrollPosition() {
                return JQXLite(componentSelector).jqxPanel('getVScrollPosition');  
            }
            function getScrollWidth() {
                return JQXLite(componentSelector).jqxPanel('getScrollWidth');  
            }
            function getHScrollPosition() {
                return JQXLite(componentSelector).jqxPanel('getHScrollPosition');  
            }
            function prepend(HTMLElement) {
                JQXLite(componentSelector).jqxPanel('prepend', HTMLElement);  
            }
            function remove(HTMLElement) {
                JQXLite(componentSelector).jqxPanel('remove', HTMLElement);  
            }
            function scrollTo(left, top) {
                JQXLite(componentSelector).jqxPanel('scrollTo', left, top);  
            }
            function setcontent(html) {
                JQXLite(componentSelector).jqxPanel('setcontent', html);  
            }
            function _autoUpdate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('autoUpdate', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('autoUpdate');
                }
            }
            function _autoUpdateInterval (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('autoUpdateInterval', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('autoUpdateInterval');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('height');
                }
            }
            function _horizontalScrollBarMax (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('horizontalScrollBarMax', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('horizontalScrollBarMax');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('rtl');
                }
            }
            function _sizeMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('sizeMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('sizeMode');
                }
            }
            function _scrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('scrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('scrollBarSize');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('theme');
                }
            }
            function _verticalScrollBarMax (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('verticalScrollBarMax', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('verticalScrollBarMax');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxPanel(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['autoUpdate','autoUpdateInterval','disabled','height','horizontalScrollBarMax','rtl','sizeMode','scrollBarSize','theme','verticalScrollBarMax','width'];
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
                 get autoUpdate() {
                     return _autoUpdate();
                 },
                 set autoUpdate(newValue) {
                     _autoUpdate(newValue);
                 },
                 get autoUpdateInterval() {
                     return _autoUpdateInterval();
                 },
                 set autoUpdateInterval(newValue) {
                     _autoUpdateInterval(newValue);
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
                 get horizontalScrollBarMax() {
                     return _horizontalScrollBarMax();
                 },
                 set horizontalScrollBarMax(newValue) {
                     _horizontalScrollBarMax(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get sizeMode() {
                     return _sizeMode();
                 },
                 set sizeMode(newValue) {
                     _sizeMode(newValue);
                 },
                 get scrollBarSize() {
                     return _scrollBarSize();
                 },
                 set scrollBarSize(newValue) {
                     _scrollBarSize(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get verticalScrollBarMax() {
                     return _verticalScrollBarMax();
                 },
                 set verticalScrollBarMax(newValue) {
                     _verticalScrollBarMax(newValue);
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
				if (hasChanges) JQXLite(componentSelector).jqxPanel(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxPanel('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, append, clearcontent, destroy, focus, getScrollHeight, getVScrollPosition, getScrollWidth, getHScrollPosition, prepend, remove, scrollTo, setcontent, setOptions, options, getOptions, createComponent};
        },
    }
</script>
