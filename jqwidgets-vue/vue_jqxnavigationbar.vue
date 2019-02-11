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
    import '../jqwidgets/jqxnavigationbar.js';

    export default {
        props: {
            animationType: String,
            arrowPosition: String,
            collapseAnimationDuration: Number,
            disabled: Boolean,
            expandAnimationDuration: Number,
            expandMode: String,
            expandedIndexes: Array,
            height: [Number, String],
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
            this.id = 'jqxNavigationBar' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxNavigationBar(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxNavigationBar(usedProps[i]);
                }
                return resultToReturn;
            },
            add: function(header, content) {
                JQXLite(this.componentSelector).jqxNavigationBar('add', header, content);  
            },
            collapseAt: function(index) {
                JQXLite(this.componentSelector).jqxNavigationBar('collapseAt', index);  
            },
            disableAt: function(index) {
                JQXLite(this.componentSelector).jqxNavigationBar('disableAt', index);  
            },
            disable: function() {
                JQXLite(this.componentSelector).jqxNavigationBar('disable');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxNavigationBar('destroy');  
            },
            expandAt: function(index) {
                JQXLite(this.componentSelector).jqxNavigationBar('expandAt', index);  
            },
            enableAt: function(index) {
                JQXLite(this.componentSelector).jqxNavigationBar('enableAt', index);  
            },
            enable: function() {
                JQXLite(this.componentSelector).jqxNavigationBar('enable');  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxNavigationBar('focus');  
            },
            getHeaderContentAt: function(index) {
                return JQXLite(this.componentSelector).jqxNavigationBar('getHeaderContentAt', index);  
            },
            getContentAt: function(index) {
                return JQXLite(this.componentSelector).jqxNavigationBar('getContentAt', index);  
            },
            hideArrowAt: function(index) {
                JQXLite(this.componentSelector).jqxNavigationBar('hideArrowAt', index);  
            },
            invalidate: function() {
                JQXLite(this.componentSelector).jqxNavigationBar('invalidate');  
            },
            insert: function(Index, header, content) {
                JQXLite(this.componentSelector).jqxNavigationBar('insert', Index, header, content);  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxNavigationBar('refresh');  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxNavigationBar('render');  
            },
            remove: function(index) {
                JQXLite(this.componentSelector).jqxNavigationBar('remove', index);  
            },
            setContentAt: function(index, item) {
                JQXLite(this.componentSelector).jqxNavigationBar('setContentAt', index, item);  
            },
            setHeaderContentAt: function(index, item) {
                JQXLite(this.componentSelector).jqxNavigationBar('setHeaderContentAt', index, item);  
            },
            showArrowAt: function(index) {
                JQXLite(this.componentSelector).jqxNavigationBar('showArrowAt', index);  
            },
            update: function(index, header, content) {
                JQXLite(this.componentSelector).jqxNavigationBar('update', index, header, content);  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('val');
                }
            },
            _animationType: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('animationType', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('animationType');
                }
            },
            _arrowPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('arrowPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('arrowPosition');
                }
            },
            _collapseAnimationDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('collapseAnimationDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('collapseAnimationDuration');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('disabled');
                }
            },
            _expandAnimationDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('expandAnimationDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('expandAnimationDuration');
                }
            },
            _expandMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('expandMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('expandMode');
                }
            },
            _expandedIndexes: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('expandedIndexes', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('expandedIndexes');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('height');
                }
            },
            _initContent: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('initContent', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('initContent');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('rtl');
                }
            },
            _showArrow: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('showArrow', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('showArrow');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('theme');
                }
            },
            _toggleMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('toggleMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('toggleMode');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxNavigationBar('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxNavigationBar('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxNavigationBar(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expandAnimationDuration','expandMode','expandedIndexes','height','initContent','rtl','showArrow','theme','toggleMode','width'];
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
                Object.defineProperty(that, 'expandMode', {
                    get() {
                        return that._expandMode();
                    },
                    set(newValue) {
                        that._expandMode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'expandedIndexes', {
                    get() {
                        return that._expandedIndexes();
                    },
                    set(newValue) {
                        that._expandedIndexes(newValue);
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

                JQXLite(this.componentSelector).on('collapsingItem', function (event) { that.$emit('collapsingItem', event); });
                JQXLite(this.componentSelector).on('collapsedItem', function (event) { that.$emit('collapsedItem', event); });
                JQXLite(this.componentSelector).on('expandingItem', function (event) { that.$emit('expandingItem', event); });
                JQXLite(this.componentSelector).on('expandedItem', function (event) { that.$emit('expandedItem', event); });
            }
        }
    }
</script>
