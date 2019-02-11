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
    import '../jqwidgets/jqxpopover.js';

    export default {
        props: {
            arrowOffsetValue: Number,
            animationOpenDelay: [String, Number],
            animationCloseDelay: [String, Number],
            autoClose: Boolean,
            animationType: String,
            height: [Number, String],
            initContent: Function,
            isModal: Boolean,
            offset: Object,
            position: String,
            rtl: Boolean,
            selector: String,
            showArrow: Boolean,
            showCloseButton: Boolean,
            width: [Number, String],
            title: String,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxPopover' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxPopover(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxPopover(usedProps[i]);
                }
                return resultToReturn;
            },
            close: function() {
                JQXLite(this.componentSelector).jqxPopover('close');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxPopover('destroy');  
            },
            open: function() {
                JQXLite(this.componentSelector).jqxPopover('open');  
            },
            _arrowOffsetValue: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('arrowOffsetValue', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('arrowOffsetValue');
                }
            },
            _animationOpenDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('animationOpenDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('animationOpenDelay');
                }
            },
            _animationCloseDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('animationCloseDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('animationCloseDelay');
                }
            },
            _autoClose: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('autoClose', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('autoClose');
                }
            },
            _animationType: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('animationType', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('animationType');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('height');
                }
            },
            _initContent: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('initContent', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('initContent');
                }
            },
            _isModal: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('isModal', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('isModal');
                }
            },
            _offset: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('offset', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('offset');
                }
            },
            _position: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('position', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('position');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('rtl');
                }
            },
            _selector: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('selector', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('selector');
                }
            },
            _showArrow: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('showArrow', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('showArrow');
                }
            },
            _showCloseButton: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('showCloseButton', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('showCloseButton');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('width');
                }
            },
            _title: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('title', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('title');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPopover('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPopover('theme');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxPopover(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['arrowOffsetValue','animationOpenDelay','animationCloseDelay','autoClose','animationType','height','initContent','isModal','offset','position','rtl','selector','showArrow','showCloseButton','width','title','theme'];
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

                Object.defineProperty(that, 'arrowOffsetValue', {
                    get() {
                        return that._arrowOffsetValue();
                    },
                    set(newValue) {
                        that._arrowOffsetValue(newValue);
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
                Object.defineProperty(that, 'animationType', {
                    get() {
                        return that._animationType();
                    },
                    set(newValue) {
                        that._animationType(newValue);
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
                Object.defineProperty(that, 'initContent', {
                    get() {
                        return that._initContent();
                    },
                    set(newValue) {
                        that._initContent(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'isModal', {
                    get() {
                        return that._isModal();
                    },
                    set(newValue) {
                        that._isModal(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'offset', {
                    get() {
                        return that._offset();
                    },
                    set(newValue) {
                        that._offset(newValue);
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
                Object.defineProperty(that, 'selector', {
                    get() {
                        return that._selector();
                    },
                    set(newValue) {
                        that._selector(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showArrow', {
                    get() {
                        return that._showArrow();
                    },
                    set(newValue) {
                        that._showArrow(newValue);
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
                Object.defineProperty(that, 'title', {
                    get() {
                        return that._title();
                    },
                    set(newValue) {
                        that._title(newValue);
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
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('close', function (event) { that.$emit('close', event); });
                JQXLite(this.componentSelector).on('open', function (event) { that.$emit('open', event); });
            }
        }
    }
</script>
