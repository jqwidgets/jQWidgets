<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
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
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            rtl: {
                default: false,
                type: Boolean
            },
            sizeMode: String,
            scrollBarSize: Number,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const id = "jqxPanel" + JQXLite.generateID();
			const componentSelector = '#' + id;
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
            function _autoUpdate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPanel('autoUpdate', arg)
                } else {
                    return JQXLite(componentSelector).jqxPanel('autoUpdate');
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
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['autoUpdate','disabled','height','rtl','sizeMode','scrollBarSize','theme','width'];
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
				JQXLite(componentSelector).jqxPanel(widgetOptions);
			})
			return {id, componentSelector, append,clearcontent,destroy,focus,getScrollHeight,getVScrollPosition,getScrollWidth,getHScrollPosition,prepend,remove,scrollTo, setOptions, options, getOptions, createComponent};
        },
    }
</script>
