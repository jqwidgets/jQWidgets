/*
jQWidgets v6.1.0 (2018-October)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

<template>
        <a v-bind:id="id" v-bind:target="target" v-bind:href="href">
            <slot></slot>
        </a>
</template>

<script>
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';

    export default {
        props: {
            target: String,
            href: String,
            delay: Number,
            disabled: Boolean,
            height: [Number, String],
            imgSrc: String,
            imgWidth: Number,
            imgHeight: Number,
            imgPosition: String,
            roundedCorners: String,
            rtl: Boolean,
            textPosition: String,
            textImageRelation: String,
            theme: String,
            template: String,
            toggled: Boolean,
            width: [Number, String],
            value: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxLinkButton' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxLinkButton(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxLinkButton(usedProps[i]);
                }
                return resultToReturn;
            },
            check: function() {
                JQXLite(this.componentSelector).jqxLinkButton('check');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxLinkButton('destroy');  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxLinkButton('focus');  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxLinkButton('render');  
            },
            toggle: function() {
                JQXLite(this.componentSelector).jqxLinkButton('toggle');  
            },
            unCheck: function() {
                JQXLite(this.componentSelector).jqxLinkButton('unCheck');  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('val');
                }
            },
            _delay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('delay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('delay');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('disabled');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('height');
                }
            },
            _imgSrc: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('imgSrc', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('imgSrc');
                }
            },
            _imgWidth: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('imgWidth', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('imgWidth');
                }
            },
            _imgHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('imgHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('imgHeight');
                }
            },
            _imgPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('imgPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('imgPosition');
                }
            },
            _roundedCorners: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('roundedCorners', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('roundedCorners');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('rtl');
                }
            },
            _textPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('textPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('textPosition');
                }
            },
            _textImageRelation: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('textImageRelation', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('textImageRelation');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('theme');
                }
            },
            _template: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('template', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('template');
                }
            },
            _toggled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('toggled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('toggled');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('width');
                }
            },
            _value: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxLinkButton('value', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxLinkButton('value');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxLinkButton(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
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

                Object.defineProperty(that, 'delay', {
                    get() {
                        return that._delay();
                    },
                    set(newValue) {
                        that._delay(newValue);
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
                Object.defineProperty(that, 'imgSrc', {
                    get() {
                        return that._imgSrc();
                    },
                    set(newValue) {
                        that._imgSrc(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'imgWidth', {
                    get() {
                        return that._imgWidth();
                    },
                    set(newValue) {
                        that._imgWidth(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'imgHeight', {
                    get() {
                        return that._imgHeight();
                    },
                    set(newValue) {
                        that._imgHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'imgPosition', {
                    get() {
                        return that._imgPosition();
                    },
                    set(newValue) {
                        that._imgPosition(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'roundedCorners', {
                    get() {
                        return that._roundedCorners();
                    },
                    set(newValue) {
                        that._roundedCorners(newValue);
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
                Object.defineProperty(that, 'textPosition', {
                    get() {
                        return that._textPosition();
                    },
                    set(newValue) {
                        that._textPosition(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'textImageRelation', {
                    get() {
                        return that._textImageRelation();
                    },
                    set(newValue) {
                        that._textImageRelation(newValue);
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
                Object.defineProperty(that, 'toggled', {
                    get() {
                        return that._toggled();
                    },
                    set(newValue) {
                        that._toggled(newValue);
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
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('click', function (event) { that.$emit('click', event); });
            }
        }
    }
</script>
