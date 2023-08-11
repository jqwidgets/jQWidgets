<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxresponsivepanel.js';

    export default {
        props: {
            animationDirection: String,
            animationHideDelay: [String, Number],
            animationShowDelay: Number,
            animationType: String,
            autoClose: {
                default: true,
                type: Boolean
            },
            collapseBreakpoint: Number,
            collapseWidth: Number,
            height: [Number, String],
            initContent: Function,
            theme: String,
            toggleButton: String,
            toggleButtonSize: Number,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["close","collapse","expand","open"],
        setup(props, context) {
			const id = "jqxResponsivePanel" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxResponsivePanel(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxResponsivePanel(usedProps[i]);
                }
                return resultToReturn;
            }
            function close() {
                JQXLite(componentSelector).jqxResponsivePanel('close');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxResponsivePanel('destroy');  
            }
            function isCollapsed() {
                return JQXLite(componentSelector).jqxResponsivePanel('isCollapsed');  
            }
            function isOpened() {
                return JQXLite(componentSelector).jqxResponsivePanel('isOpened');  
            }
            function open() {
                JQXLite(componentSelector).jqxResponsivePanel('open');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxResponsivePanel('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxResponsivePanel('render');  
            }
            function _animationDirection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('animationDirection', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('animationDirection');
                }
            }
            function _animationHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('animationHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('animationHideDelay');
                }
            }
            function _animationShowDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('animationShowDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('animationShowDelay');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('animationType');
                }
            }
            function _autoClose (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('autoClose', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('autoClose');
                }
            }
            function _collapseBreakpoint (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('collapseBreakpoint', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('collapseBreakpoint');
                }
            }
            function _collapseWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('collapseWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('collapseWidth');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('height');
                }
            }
            function _initContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('initContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('initContent');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('theme');
                }
            }
            function _toggleButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('toggleButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('toggleButton');
                }
            }
            function _toggleButtonSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('toggleButtonSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('toggleButtonSize');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxResponsivePanel('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxResponsivePanel('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxResponsivePanel(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDirection','animationHideDelay','animationShowDelay','animationType','autoClose','collapseBreakpoint','collapseWidth','height','initContent','theme','toggleButton','toggleButtonSize','width'];
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
                 get animationDirection() {
                     return _animationDirection();
                 },
                 set animationDirection(newValue) {
                     _animationDirection(newValue);
                 },
                 get animationHideDelay() {
                     return _animationHideDelay();
                 },
                 set animationHideDelay(newValue) {
                     _animationHideDelay(newValue);
                 },
                 get animationShowDelay() {
                     return _animationShowDelay();
                 },
                 set animationShowDelay(newValue) {
                     _animationShowDelay(newValue);
                 },
                 get animationType() {
                     return _animationType();
                 },
                 set animationType(newValue) {
                     _animationType(newValue);
                 },
                 get autoClose() {
                     return _autoClose();
                 },
                 set autoClose(newValue) {
                     _autoClose(newValue);
                 },
                 get collapseBreakpoint() {
                     return _collapseBreakpoint();
                 },
                 set collapseBreakpoint(newValue) {
                     _collapseBreakpoint(newValue);
                 },
                 get collapseWidth() {
                     return _collapseWidth();
                 },
                 set collapseWidth(newValue) {
                     _collapseWidth(newValue);
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
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get toggleButton() {
                     return _toggleButton();
                 },
                 set toggleButton(newValue) {
                     _toggleButton(newValue);
                 },
                 get toggleButtonSize() {
                     return _toggleButtonSize();
                 },
                 set toggleButtonSize(newValue) {
                     _toggleButtonSize(newValue);
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
                JQXLite(componentSelector).on('collapse', function (event) { that.emit('collapse', event); });
                JQXLite(componentSelector).on('expand', function (event) { that.emit('expand', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxResponsivePanel(widgetOptions);
			})
			return {id, componentSelector, close,destroy,isCollapsed,isOpened,open,refresh,render, setOptions, options, getOptions, createComponent};
        },
    }
</script>
