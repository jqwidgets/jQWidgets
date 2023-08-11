<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxtooltip.js';

    export default {
        props: {
            absolutePositionX: Number,
            absolutePositionY: Number,
            autoHide: {
                default: true,
                type: Boolean
            },
            autoHideDelay: Number,
            animationShowDelay: Number,
            animationHideDelay: Number,
            content: String,
            closeOnClick: {
                default: true,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            enableBrowserBoundsDetection: {
                default: true,
                type: Boolean
            },
            height: [Number, String],
            left: Number,
            name: String,
            opacity: Number,
            position: String,
            rtl: {
                default: false,
                type: Boolean
            },
            showDelay: Number,
            showArrow: {
                default: true,
                type: Boolean
            },
            top: Number,
            trigger: String,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["close","closing","open","opening"],
        setup(props, context) {
			const id = "jqxTooltip" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTooltip(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTooltip(usedProps[i]);
                }
                return resultToReturn;
            }
            function close(index) {
                JQXLite(componentSelector).jqxTooltip('close', index);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxTooltip('destroy');  
            }
            function open(left, top) {
                JQXLite(componentSelector).jqxTooltip('open', left, top);  
            }
            function refresh() {
                JQXLite(componentSelector).jqxTooltip('refresh');  
            }
            function _absolutePositionX (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('absolutePositionX', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('absolutePositionX');
                }
            }
            function _absolutePositionY (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('absolutePositionY', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('absolutePositionY');
                }
            }
            function _autoHide (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('autoHide', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('autoHide');
                }
            }
            function _autoHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('autoHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('autoHideDelay');
                }
            }
            function _animationShowDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('animationShowDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('animationShowDelay');
                }
            }
            function _animationHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('animationHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('animationHideDelay');
                }
            }
            function _content (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('content', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('content');
                }
            }
            function _closeOnClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('closeOnClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('closeOnClick');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('disabled');
                }
            }
            function _enableBrowserBoundsDetection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('enableBrowserBoundsDetection', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('enableBrowserBoundsDetection');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('height');
                }
            }
            function _left (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('left', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('left');
                }
            }
            function _name (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('name', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('name');
                }
            }
            function _opacity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('opacity', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('opacity');
                }
            }
            function _position (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('position', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('position');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('rtl');
                }
            }
            function _showDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('showDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('showDelay');
                }
            }
            function _showArrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('showArrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('showArrow');
                }
            }
            function _top (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('top', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('top');
                }
            }
            function _trigger (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('trigger', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('trigger');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTooltip('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTooltip('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTooltip(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['absolutePositionX','absolutePositionY','autoHide','autoHideDelay','animationShowDelay','animationHideDelay','content','closeOnClick','disabled','enableBrowserBoundsDetection','height','left','name','opacity','position','rtl','showDelay','showArrow','top','trigger','theme','width'];
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
                 get absolutePositionX() {
                     return _absolutePositionX();
                 },
                 set absolutePositionX(newValue) {
                     _absolutePositionX(newValue);
                 },
                 get absolutePositionY() {
                     return _absolutePositionY();
                 },
                 set absolutePositionY(newValue) {
                     _absolutePositionY(newValue);
                 },
                 get autoHide() {
                     return _autoHide();
                 },
                 set autoHide(newValue) {
                     _autoHide(newValue);
                 },
                 get autoHideDelay() {
                     return _autoHideDelay();
                 },
                 set autoHideDelay(newValue) {
                     _autoHideDelay(newValue);
                 },
                 get animationShowDelay() {
                     return _animationShowDelay();
                 },
                 set animationShowDelay(newValue) {
                     _animationShowDelay(newValue);
                 },
                 get animationHideDelay() {
                     return _animationHideDelay();
                 },
                 set animationHideDelay(newValue) {
                     _animationHideDelay(newValue);
                 },
                 get content() {
                     return _content();
                 },
                 set content(newValue) {
                     _content(newValue);
                 },
                 get closeOnClick() {
                     return _closeOnClick();
                 },
                 set closeOnClick(newValue) {
                     _closeOnClick(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
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
                 get left() {
                     return _left();
                 },
                 set left(newValue) {
                     _left(newValue);
                 },
                 get name() {
                     return _name();
                 },
                 set name(newValue) {
                     _name(newValue);
                 },
                 get opacity() {
                     return _opacity();
                 },
                 set opacity(newValue) {
                     _opacity(newValue);
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
                 get showDelay() {
                     return _showDelay();
                 },
                 set showDelay(newValue) {
                     _showDelay(newValue);
                 },
                 get showArrow() {
                     return _showArrow();
                 },
                 set showArrow(newValue) {
                     _showArrow(newValue);
                 },
                 get top() {
                     return _top();
                 },
                 set top(newValue) {
                     _top(newValue);
                 },
                 get trigger() {
                     return _trigger();
                 },
                 set trigger(newValue) {
                     _trigger(newValue);
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
                JQXLite(componentSelector).on('closing', function (event) { that.emit('closing', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('opening', function (event) { that.emit('opening', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxTooltip(widgetOptions);
			})
			return {id, componentSelector, close,destroy,open,refresh, setOptions, options, getOptions, createComponent};
        },
    }
</script>
