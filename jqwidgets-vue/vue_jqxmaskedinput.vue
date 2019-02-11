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
    import '../jqwidgets/jqxmaskedinput.js';

    export default {
        props: {
            disabled: Boolean,
            height: [Number, String],
            mask: String,
            promptChar: String,
            readOnly: Boolean,
            rtl: Boolean,
            theme: String,
            textAlign: String,
            value: [String, Number],
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxMaskedInput' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxMaskedInput(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxMaskedInput(usedProps[i]);
                }
                return resultToReturn;
            },
            clear: function() {
                JQXLite(this.componentSelector).jqxMaskedInput('clear');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxMaskedInput('destroy');  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxMaskedInput('focus');  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('val');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('disabled');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('height');
                }
            },
            _mask: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('mask', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('mask');
                }
            },
            _promptChar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('promptChar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('promptChar');
                }
            },
            _readOnly: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('readOnly', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('readOnly');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('rtl');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('theme');
                }
            },
            _textAlign: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('textAlign', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('textAlign');
                }
            },
            _value: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('value', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('value');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxMaskedInput('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxMaskedInput('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxMaskedInput(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['disabled','height','mask','promptChar','readOnly','rtl','theme','textAlign','value','width'];
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
                Object.defineProperty(that, 'mask', {
                    get() {
                        return that._mask();
                    },
                    set(newValue) {
                        that._mask(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'promptChar', {
                    get() {
                        return that._promptChar();
                    },
                    set(newValue) {
                        that._promptChar(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'readOnly', {
                    get() {
                        return that._readOnly();
                    },
                    set(newValue) {
                        that._readOnly(newValue);
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
                Object.defineProperty(that, 'textAlign', {
                    get() {
                        return that._textAlign();
                    },
                    set(newValue) {
                        that._textAlign(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'value', {
                    get() {
                        return that._value();
                    },
                    set(newValue) {
                        that._value(newValue);
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
            __twoWayDataBinding__: function () {
                const value = JQXLite(this.componentSelector).jqxMaskedInput('val');
                this.$emit('input', value);
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('change', function (event) { that.$emit('change', event); });
                JQXLite(this.componentSelector).on('valueChanged', function (event) { that.$emit('valueChanged', event); that.__twoWayDataBinding__(); });
            }
        }
    }
</script>
