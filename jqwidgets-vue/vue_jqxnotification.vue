/*
jQWidgets v7.1.0 (2019-Feb)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxnotification.js';

    export default {
        props: {
            appendContainer: String,
            autoOpen: Boolean,
            animationOpenDelay: Number,
            animationCloseDelay: Number,
            autoClose: Boolean,
            autoCloseDelay: Number,
            blink: Boolean,
            browserBoundsOffset: Number,
            closeOnClick: Boolean,
            disabled: Boolean,
            height: [Number, String],
            hoverOpacity: Number,
            icon: Object,
            notificationOffset: Number,
            opacity: Number,
            position: String,
            rtl: Boolean,
            showCloseButton: Boolean,
            template: String,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxNotification' + JQXLite.generateID();
            this.componentSelector = '#' + this.id;
        },
        mounted: function () {
            if (this.autoCreate) this.__createComponent__();
        },
        methods: {
            createComponent: function (options) {
                if (!this.autoCreate) this.__createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            },
            setOptions: function (options) {
                JQXLite(this.componentSelector).jqxNotification(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxNotification(usedProps[i]);
                }
                return resultToReturn;
            },
            closeAll: function() {
                JQXLite(this.componentSelector).jqxNotification('closeAll');  
            },
            closeLast: function() {
                JQXLite(this.componentSelector).jqxNotification('closeLast');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxNotification('destroy');  
            },
            open: function() {
                JQXLite(this.componentSelector).jqxNotification('open');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxNotification('refresh');  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxNotification('render');  
            },
            _appendContainer: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('appendContainer', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('appendContainer');
                }
            },
            _autoOpen: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('autoOpen', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('autoOpen');
                }
            },
            _animationOpenDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('animationOpenDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('animationOpenDelay');
                }
            },
            _animationCloseDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('animationCloseDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('animationCloseDelay');
                }
            },
            _autoClose: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('autoClose', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('autoClose');
                }
            },
            _autoCloseDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('autoCloseDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('autoCloseDelay');
                }
            },
            _blink: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('blink', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('blink');
                }
            },
            _browserBoundsOffset: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('browserBoundsOffset', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('browserBoundsOffset');
                }
            },
            _closeOnClick: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('closeOnClick', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('closeOnClick');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('disabled');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('height');
                }
            },
            _hoverOpacity: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('hoverOpacity', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('hoverOpacity');
                }
            },
            _icon: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('icon', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('icon');
                }
            },
            _notificationOffset: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('notificationOffset', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('notificationOffset');
                }
            },
            _opacity: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('opacity', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('opacity');
                }
            },
            _position: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('position', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('position');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('rtl');
                }
            },
            _showCloseButton: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('showCloseButton', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('showCloseButton');
                }
            },
            _template: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('template', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('template');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('theme');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNotification('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNotification('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxNotification(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['appendContainer','autoOpen','animationOpenDelay','animationCloseDelay','autoClose','autoCloseDelay','blink','browserBoundsOffset','closeOnClick','disabled','height','hoverOpacity','icon','notificationOffset','opacity','position','rtl','showCloseButton','template','theme','width'];
                const componentProps = this.$options.propsData;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            },
            __extendProps__: function () {
                const that = this;

                Object.defineProperty(that, 'appendContainer', {
                    get() {
                        return that._appendContainer();
                    },
                    set(newValue) {
                        that._appendContainer(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoOpen', {
                    get() {
                        return that._autoOpen();
                    },
                    set(newValue) {
                        that._autoOpen(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'animationOpenDelay', {
                    get() {
                        return that._animationOpenDelay();
                    },
                    set(newValue) {
                        that._animationOpenDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'animationCloseDelay', {
                    get() {
                        return that._animationCloseDelay();
                    },
                    set(newValue) {
                        that._animationCloseDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoClose', {
                    get() {
                        return that._autoClose();
                    },
                    set(newValue) {
                        that._autoClose(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoCloseDelay', {
                    get() {
                        return that._autoCloseDelay();
                    },
                    set(newValue) {
                        that._autoCloseDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'blink', {
                    get() {
                        return that._blink();
                    },
                    set(newValue) {
                        that._blink(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'browserBoundsOffset', {
                    get() {
                        return that._browserBoundsOffset();
                    },
                    set(newValue) {
                        that._browserBoundsOffset(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'closeOnClick', {
                    get() {
                        return that._closeOnClick();
                    },
                    set(newValue) {
                        that._closeOnClick(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'disabled', {
                    get() {
                        return that._disabled();
                    },
                    set(newValue) {
                        that._disabled(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'height', {
                    get() {
                        return that._height();
                    },
                    set(newValue) {
                        that._height(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'hoverOpacity', {
                    get() {
                        return that._hoverOpacity();
                    },
                    set(newValue) {
                        that._hoverOpacity(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'icon', {
                    get() {
                        return that._icon();
                    },
                    set(newValue) {
                        that._icon(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'notificationOffset', {
                    get() {
                        return that._notificationOffset();
                    },
                    set(newValue) {
                        that._notificationOffset(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'opacity', {
                    get() {
                        return that._opacity();
                    },
                    set(newValue) {
                        that._opacity(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'position', {
                    get() {
                        return that._position();
                    },
                    set(newValue) {
                        that._position(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rtl', {
                    get() {
                        return that._rtl();
                    },
                    set(newValue) {
                        that._rtl(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showCloseButton', {
                    get() {
                        return that._showCloseButton();
                    },
                    set(newValue) {
                        that._showCloseButton(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'template', {
                    get() {
                        return that._template();
                    },
                    set(newValue) {
                        that._template(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'theme', {
                    get() {
                        return that._theme();
                    },
                    set(newValue) {
                        that._theme(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'width', {
                    get() {
                        return that._width();
                    },
                    set(newValue) {
                        that._width(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('close', function (event) { that.$emit('close', event); });
                JQXLite(this.componentSelector).on('click', function (event) { that.$emit('click', event); });
                JQXLite(this.componentSelector).on('open', function (event) { that.$emit('open', event); });
            }
        }
    }
</script>
