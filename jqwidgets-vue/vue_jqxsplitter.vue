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
    import '../jqwidgets/jqxsplitter.js';

    export default {
        props: {
            disabled: Boolean,
            height: [Number, String],
            orientation: String,
            panels: Array,
            resizable: Boolean,
            splitBarSize: Number,
            showSplitBar: Boolean,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxSplitter' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxSplitter(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxSplitter(usedProps[i]);
                }
                return resultToReturn;
            },
            collapse: function() {
                JQXLite(this.componentSelector).jqxSplitter('collapse');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxSplitter('destroy');  
            },
            disable: function() {
                JQXLite(this.componentSelector).jqxSplitter('disable');  
            },
            enable: function() {
                JQXLite(this.componentSelector).jqxSplitter('enable');  
            },
            expand: function() {
                JQXLite(this.componentSelector).jqxSplitter('expand');  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxSplitter('render');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxSplitter('refresh');  
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('disabled');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('height');
                }
            },
            _orientation: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('orientation', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('orientation');
                }
            },
            _panels: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('panels', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('panels');
                }
            },
            _resizable: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('resizable', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('resizable');
                }
            },
            _splitBarSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('splitBarSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('splitBarSize');
                }
            },
            _showSplitBar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('showSplitBar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('showSplitBar');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('theme');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxSplitter('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxSplitter('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxSplitter(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['disabled','height','orientation','panels','resizable','splitBarSize','showSplitBar','theme','width'];
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
                Object.defineProperty(that, 'orientation', {
                    get() {
                        return that._orientation();
                    },
                    set(newValue) {
                        that._orientation(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'panels', {
                    get() {
                        return that._panels();
                    },
                    set(newValue) {
                        that._panels(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'resizable', {
                    get() {
                        return that._resizable();
                    },
                    set(newValue) {
                        that._resizable(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'splitBarSize', {
                    get() {
                        return that._splitBarSize();
                    },
                    set(newValue) {
                        that._splitBarSize(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showSplitBar', {
                    get() {
                        return that._showSplitBar();
                    },
                    set(newValue) {
                        that._showSplitBar(newValue);
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

                JQXLite(this.componentSelector).on('collapsed', function (event) { that.$emit('collapsed', event); });
                JQXLite(this.componentSelector).on('expanded', function (event) { that.$emit('expanded', event); });
                JQXLite(this.componentSelector).on('resize', function (event) { that.$emit('resize', event); });
                JQXLite(this.componentSelector).on('resizeStart', function (event) { that.$emit('resizeStart', event); });
            }
        }
    }
</script>
