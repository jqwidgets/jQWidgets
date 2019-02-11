/*
jQWidgets v7.1.0 (2019-Feb)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

<template>
        <input type="password" v-bind:id="id" @input="__twoWayDataBinding__" />
</template>

<script>
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxpasswordinput.js';

    export default {
        props: {
            disabled: Boolean,
            height: [Number, String],
            localization: Object,
            maxLength: Number,
            placeHolder: String,
            passwordStrength: Function,
            rtl: Boolean,
            strengthColors: Object,
            showStrength: Boolean,
            showStrengthPosition: String,
            strengthTypeRenderer: Function,
            showPasswordIcon: Boolean,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxPasswordInput' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxPasswordInput(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxPasswordInput(usedProps[i]);
                }
                return resultToReturn;
            },
            render: function() {
                JQXLite(this.componentSelector).jqxPasswordInput('render');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxPasswordInput('refresh');  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('val');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('disabled');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('height');
                }
            },
            _localization: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('localization', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('localization');
                }
            },
            _maxLength: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('maxLength', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('maxLength');
                }
            },
            _placeHolder: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('placeHolder', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('placeHolder');
                }
            },
            _passwordStrength: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('passwordStrength', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('passwordStrength');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('rtl');
                }
            },
            _strengthColors: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('strengthColors', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('strengthColors');
                }
            },
            _showStrength: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('showStrength', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('showStrength');
                }
            },
            _showStrengthPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('showStrengthPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('showStrengthPosition');
                }
            },
            _strengthTypeRenderer: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('strengthTypeRenderer', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('strengthTypeRenderer');
                }
            },
            _showPasswordIcon: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('showPasswordIcon', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('showPasswordIcon');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('theme');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPasswordInput('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPasswordInput('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxPasswordInput(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['disabled','height','localization','maxLength','placeHolder','passwordStrength','rtl','strengthColors','showStrength','showStrengthPosition','strengthTypeRenderer','showPasswordIcon','theme','width'];
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
                Object.defineProperty(that, 'localization', {
                    get() {
                        return that._localization();
                    },
                    set(newValue) {
                        that._localization(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'maxLength', {
                    get() {
                        return that._maxLength();
                    },
                    set(newValue) {
                        that._maxLength(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'placeHolder', {
                    get() {
                        return that._placeHolder();
                    },
                    set(newValue) {
                        that._placeHolder(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'passwordStrength', {
                    get() {
                        return that._passwordStrength();
                    },
                    set(newValue) {
                        that._passwordStrength(newValue);
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
                Object.defineProperty(that, 'strengthColors', {
                    get() {
                        return that._strengthColors();
                    },
                    set(newValue) {
                        that._strengthColors(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showStrength', {
                    get() {
                        return that._showStrength();
                    },
                    set(newValue) {
                        that._showStrength(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showStrengthPosition', {
                    get() {
                        return that._showStrengthPosition();
                    },
                    set(newValue) {
                        that._showStrengthPosition(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'strengthTypeRenderer', {
                    get() {
                        return that._strengthTypeRenderer();
                    },
                    set(newValue) {
                        that._strengthTypeRenderer(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showPasswordIcon', {
                    get() {
                        return that._showPasswordIcon();
                    },
                    set(newValue) {
                        that._showPasswordIcon(newValue);
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
            __twoWayDataBinding__: function () {
                this.$emit('input', this.$el.value);
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('change', function (event) { that.$emit('change', event); });
            }
        }
    }
</script>
