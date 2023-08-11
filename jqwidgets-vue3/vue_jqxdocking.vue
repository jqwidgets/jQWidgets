<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxwindow.js';
    import '../jqwidgets/jqxdocking.js';

    export default {
        props: {
            cookies: {
                default: false,
                type: Boolean
            },
            cookieOptions: Object,
            disabled: {
                default: false,
                type: Boolean
            },
            floatingWindowOpacity: Number,
            height: [Number, String],
            keyboardNavigation: {
                default: false,
                type: Boolean
            },
            mode: String,
            orientation: String,
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            width: [Number, String],
            windowsMode: Object,
            windowsOffset: Number,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["dragStart","dragEnd"],
        setup(props, context) {
			const id = "jqxDocking" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxDocking(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxDocking(usedProps[i]);
                }
                return resultToReturn;
            }
            function addWindow(windowId, mode, panel, position) {
                JQXLite(componentSelector).jqxDocking('addWindow', windowId, mode, panel, position);  
            }
            function closeWindow(windowId) {
                JQXLite(componentSelector).jqxDocking('closeWindow', windowId);  
            }
            function collapseWindow(windowId) {
                JQXLite(componentSelector).jqxDocking('collapseWindow', windowId);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxDocking('destroy');  
            }
            function disableWindowResize(windowId) {
                JQXLite(componentSelector).jqxDocking('disableWindowResize', windowId);  
            }
            function disable() {
                JQXLite(componentSelector).jqxDocking('disable');  
            }
            function exportLayout() {
                return JQXLite(componentSelector).jqxDocking('exportLayout');  
            }
            function enable() {
                JQXLite(componentSelector).jqxDocking('enable');  
            }
            function expandWindow(windowId) {
                JQXLite(componentSelector).jqxDocking('expandWindow', windowId);  
            }
            function enableWindowResize(windowId) {
                JQXLite(componentSelector).jqxDocking('enableWindowResize', windowId);  
            }
            function focus() {
                JQXLite(componentSelector).jqxDocking('focus');  
            }
            function hideAllCloseButtons() {
                JQXLite(componentSelector).jqxDocking('hideAllCloseButtons');  
            }
            function hideAllCollapseButtons() {
                JQXLite(componentSelector).jqxDocking('hideAllCollapseButtons');  
            }
            function hideCollapseButton(windowId) {
                JQXLite(componentSelector).jqxDocking('hideCollapseButton', windowId);  
            }
            function hideCloseButton(windowId) {
                JQXLite(componentSelector).jqxDocking('hideCloseButton', windowId);  
            }
            function importLayout(Json) {
                JQXLite(componentSelector).jqxDocking('importLayout', Json);  
            }
            function move(windowId, panel, position) {
                JQXLite(componentSelector).jqxDocking('move', windowId, panel, position);  
            }
            function pinWindow(windowId) {
                JQXLite(componentSelector).jqxDocking('pinWindow', windowId);  
            }
            function setWindowMode(windowId, mode) {
                JQXLite(componentSelector).jqxDocking('setWindowMode', windowId, mode);  
            }
            function showCloseButton(windowId) {
                JQXLite(componentSelector).jqxDocking('showCloseButton', windowId);  
            }
            function showCollapseButton(windowId) {
                JQXLite(componentSelector).jqxDocking('showCollapseButton', windowId);  
            }
            function setWindowPosition(windowId, top, left) {
                JQXLite(componentSelector).jqxDocking('setWindowPosition', windowId, top, left);  
            }
            function showAllCloseButtons() {
                JQXLite(componentSelector).jqxDocking('showAllCloseButtons');  
            }
            function showAllCollapseButtons() {
                JQXLite(componentSelector).jqxDocking('showAllCollapseButtons');  
            }
            function unpinWindow(windowId) {
                JQXLite(componentSelector).jqxDocking('unpinWindow', windowId);  
            }
            function _cookies (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('cookies', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('cookies');
                }
            }
            function _cookieOptions (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('cookieOptions', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('cookieOptions');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('disabled');
                }
            }
            function _floatingWindowOpacity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('floatingWindowOpacity', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('floatingWindowOpacity');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('height');
                }
            }
            function _keyboardNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('keyboardNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('keyboardNavigation');
                }
            }
            function _mode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('mode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('mode');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('orientation');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('width');
                }
            }
            function _windowsMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('windowsMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('windowsMode');
                }
            }
            function _windowsOffset (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDocking('windowsOffset', arg)
                } else {
                    return JQXLite(componentSelector).jqxDocking('windowsOffset');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDocking(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['cookies','cookieOptions','disabled','floatingWindowOpacity','height','keyboardNavigation','mode','orientation','rtl','theme','width','windowsMode','windowsOffset'];
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
                 get cookies() {
                     return _cookies();
                 },
                 set cookies(newValue) {
                     _cookies(newValue);
                 },
                 get cookieOptions() {
                     return _cookieOptions();
                 },
                 set cookieOptions(newValue) {
                     _cookieOptions(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get floatingWindowOpacity() {
                     return _floatingWindowOpacity();
                 },
                 set floatingWindowOpacity(newValue) {
                     _floatingWindowOpacity(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get keyboardNavigation() {
                     return _keyboardNavigation();
                 },
                 set keyboardNavigation(newValue) {
                     _keyboardNavigation(newValue);
                 },
                 get mode() {
                     return _mode();
                 },
                 set mode(newValue) {
                     _mode(newValue);
                 },
                 get orientation() {
                     return _orientation();
                 },
                 set orientation(newValue) {
                     _orientation(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
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
                 get windowsMode() {
                     return _windowsMode();
                 },
                 set windowsMode(newValue) {
                     _windowsMode(newValue);
                 },
                 get windowsOffset() {
                     return _windowsOffset();
                 },
                 set windowsOffset(newValue) {
                     _windowsOffset(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('dragStart', function (event) { that.emit('dragStart', event); });
                JQXLite(componentSelector).on('dragEnd', function (event) { that.emit('dragEnd', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxDocking(widgetOptions);
			})
			return {id, componentSelector, addWindow,closeWindow,collapseWindow,destroy,disableWindowResize,disable,exportLayout,enable,expandWindow,enableWindowResize,focus,hideAllCloseButtons,hideAllCollapseButtons,hideCollapseButton,hideCloseButton,importLayout,move,pinWindow,setWindowMode,showCloseButton,showCollapseButton,setWindowPosition,showAllCloseButtons,showAllCollapseButtons,unpinWindow, setOptions, options, getOptions, createComponent};
        },
    }
</script>
