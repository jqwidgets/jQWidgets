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
    import '../jqwidgets/jqxexpander.js';

    export default {
        props: {
            animationType: String,
            arrowPosition: String,
            collapseAnimationDuration: Number,
            disabled: Boolean,
            expanded: Boolean,
            expandAnimationDuration: Number,
            height: [Number, String],
            headerPosition: String,
            initContent: Function,
            rtl: Boolean,
            showArrow: Boolean,
            theme: String,
            toggleMode: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxExpander' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxExpander(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxExpander(usedProps[i]);
                }
                return resultToReturn;
            },
            collapse: function() {
                JQXLite(this.componentSelector).jqxExpander('collapse');  
            },
            disable: function() {
                JQXLite(this.componentSelector).jqxExpander('disable');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxExpander('destroy');  
            },
            enable: function() {
                JQXLite(this.componentSelector).jqxExpander('enable');  
            },
            expand: function() {
                JQXLite(this.componentSelector).jqxExpander('expand');  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxExpander('focus');  
            },
            getContent: function() {
                return JQXLite(this.componentSelector).jqxExpander('getContent');  
            },
            getHeaderContent: function() {
                return JQXLite(this.componentSelector).jqxExpander('getHeaderContent');  
            },
            invalidate: function() {
                JQXLite(this.componentSelector).jqxExpander('invalidate');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxExpander('refresh');  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxExpander('render');  
            },
            setHeaderContent: function(headerContent) {
                JQXLite(this.componentSelector).jqxExpander('setHeaderContent', headerContent);  
            },
            setContent: function(content) {
                JQXLite(this.componentSelector).jqxExpander('setContent', content);  
            },
            _animationType: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('animationType', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('animationType');
                }
            },
            _arrowPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('arrowPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('arrowPosition');
                }
            },
            _collapseAnimationDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('collapseAnimationDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('collapseAnimationDuration');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('disabled');
                }
            },
            _expanded: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('expanded', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('expanded');
                }
            },
            _expandAnimationDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('expandAnimationDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('expandAnimationDuration');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('height');
                }
            },
            _headerPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('headerPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('headerPosition');
                }
            },
            _initContent: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('initContent', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('initContent');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('rtl');
                }
            },
            _showArrow: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('showArrow', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('showArrow');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('theme');
                }
            },
            _toggleMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('toggleMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('toggleMode');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxExpander('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxExpander('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxExpander(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expanded','expandAnimationDuration','height','headerPosition','initContent','rtl','showArrow','theme','toggleMode','width'];
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
                Object.defineProperty(that, 'arrowPosition', {
                    get() {
                        return that._arrowPosition();
                    },
                    set(newValue) {
                        that._arrowPosition(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'collapseAnimationDuration', {
                    get() {
                        return that._collapseAnimationDuration();
                    },
                    set(newValue) {
                        that._collapseAnimationDuration(newValue);
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
                Object.defineProperty(that, 'expanded', {
                    get() {
                        return that._expanded();
                    },
                    set(newValue) {
                        that._expanded(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'expandAnimationDuration', {
                    get() {
                        return that._expandAnimationDuration();
                    },
                    set(newValue) {
                        that._expandAnimationDuration(newValue);
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
                Object.defineProperty(that, 'headerPosition', {
                    get() {
                        return that._headerPosition();
                    },
                    set(newValue) {
                        that._headerPosition(newValue);
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
                Object.defineProperty(that, 'toggleMode', {
                    get() {
                        return that._toggleMode();
                    },
                    set(newValue) {
                        that._toggleMode(newValue);
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

                JQXLite(this.componentSelector).on('collapsing', function (event) { that.$emit('collapsing', event); });
                JQXLite(this.componentSelector).on('collapsed', function (event) { that.$emit('collapsed', event); });
                JQXLite(this.componentSelector).on('expanding', function (event) { that.$emit('expanding', event); });
                JQXLite(this.componentSelector).on('expanded', function (event) { that.$emit('expanded', event); });
            }
        }
    }
</script>
