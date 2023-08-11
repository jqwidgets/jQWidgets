<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxnotification.js';

    export default {
        props: {
            appendContainer: String,
            autoOpen: {
                default: false,
                type: Boolean
            },
            animationOpenDelay: Number,
            animationCloseDelay: Number,
            autoClose: {
                default: true,
                type: Boolean
            },
            autoCloseDelay: Number,
            blink: {
                default: false,
                type: Boolean
            },
            browserBoundsOffset: Number,
            closeOnClick: {
                default: true,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            hoverOpacity: Number,
            icon: Object,
            notificationOffset: Number,
            opacity: Number,
            position: String,
            rtl: {
                default: false,
                type: Boolean
            },
            showCloseButton: {
                default: true,
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
        emits: ["close","click","open"],
        setup(props, context) {
			const id = "jqxNotification" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxNotification(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxNotification(usedProps[i]);
                }
                return resultToReturn;
            }
            function closeAll() {
                JQXLite(componentSelector).jqxNotification('closeAll');  
            }
            function closeLast() {
                JQXLite(componentSelector).jqxNotification('closeLast');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxNotification('destroy');  
            }
            function open() {
                JQXLite(componentSelector).jqxNotification('open');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxNotification('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxNotification('render');  
            }
            function _appendContainer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('appendContainer', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('appendContainer');
                }
            }
            function _autoOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('autoOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('autoOpen');
                }
            }
            function _animationOpenDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('animationOpenDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('animationOpenDelay');
                }
            }
            function _animationCloseDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('animationCloseDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('animationCloseDelay');
                }
            }
            function _autoClose (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('autoClose', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('autoClose');
                }
            }
            function _autoCloseDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('autoCloseDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('autoCloseDelay');
                }
            }
            function _blink (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('blink', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('blink');
                }
            }
            function _browserBoundsOffset (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('browserBoundsOffset', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('browserBoundsOffset');
                }
            }
            function _closeOnClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('closeOnClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('closeOnClick');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('height');
                }
            }
            function _hoverOpacity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('hoverOpacity', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('hoverOpacity');
                }
            }
            function _icon (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('icon', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('icon');
                }
            }
            function _notificationOffset (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('notificationOffset', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('notificationOffset');
                }
            }
            function _opacity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('opacity', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('opacity');
                }
            }
            function _position (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('position', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('position');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('rtl');
                }
            }
            function _showCloseButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('showCloseButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('showCloseButton');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNotification('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxNotification('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxNotification(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['appendContainer','autoOpen','animationOpenDelay','animationCloseDelay','autoClose','autoCloseDelay','blink','browserBoundsOffset','closeOnClick','disabled','height','hoverOpacity','icon','notificationOffset','opacity','position','rtl','showCloseButton','template','theme','width'];
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
                 get appendContainer() {
                     return _appendContainer();
                 },
                 set appendContainer(newValue) {
                     _appendContainer(newValue);
                 },
                 get autoOpen() {
                     return _autoOpen();
                 },
                 set autoOpen(newValue) {
                     _autoOpen(newValue);
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
                 get autoCloseDelay() {
                     return _autoCloseDelay();
                 },
                 set autoCloseDelay(newValue) {
                     _autoCloseDelay(newValue);
                 },
                 get blink() {
                     return _blink();
                 },
                 set blink(newValue) {
                     _blink(newValue);
                 },
                 get browserBoundsOffset() {
                     return _browserBoundsOffset();
                 },
                 set browserBoundsOffset(newValue) {
                     _browserBoundsOffset(newValue);
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
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get hoverOpacity() {
                     return _hoverOpacity();
                 },
                 set hoverOpacity(newValue) {
                     _hoverOpacity(newValue);
                 },
                 get icon() {
                     return _icon();
                 },
                 set icon(newValue) {
                     _icon(newValue);
                 },
                 get notificationOffset() {
                     return _notificationOffset();
                 },
                 set notificationOffset(newValue) {
                     _notificationOffset(newValue);
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
                 get showCloseButton() {
                     return _showCloseButton();
                 },
                 set showCloseButton(newValue) {
                     _showCloseButton(newValue);
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
                JQXLite(componentSelector).on('click', function (event) { that.emit('click', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxNotification(widgetOptions);
			})
			return {id, componentSelector, closeAll,closeLast,destroy,open,refresh,render, setOptions, options, getOptions, createComponent};
        },
    }
</script>
