/*
jQWidgets v7.1.0 (2019-Feb)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

<template>
        <textarea v-bind:id="id" @input="__twoWayDataBinding__"></textarea>
</template>

<script>
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxtextarea.js';

    export default {
        props: {
            disabled: Boolean,
            displayMember: String,
            dropDownWidth: Number,
            height: [Number, String],
            items: Number,
            maxLength: Number,
            minLength: Number,
            opened: Boolean,
            placeHolder: String,
            popupZIndex: Number,
            query: String,
            renderer: Function,
            roundedCorners: Boolean,
            rtl: Boolean,
            scrollBarSize: Number,
            searchMode: String,
            source: [Array, Function, Object],
            theme: String,
            valueMember: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxTextArea' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxTextArea(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxTextArea(usedProps[i]);
                }
                return resultToReturn;
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxTextArea('destroy');  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxTextArea('focus');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxTextArea('refresh');  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxTextArea('render');  
            },
            selectAll: function() {
                JQXLite(this.componentSelector).jqxTextArea('selectAll');  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('val');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('disabled');
                }
            },
            _displayMember: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('displayMember', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('displayMember');
                }
            },
            _dropDownWidth: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('dropDownWidth', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('dropDownWidth');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('height');
                }
            },
            _items: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('items', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('items');
                }
            },
            _maxLength: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('maxLength', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('maxLength');
                }
            },
            _minLength: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('minLength', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('minLength');
                }
            },
            _opened: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('opened', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('opened');
                }
            },
            _placeHolder: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('placeHolder', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('placeHolder');
                }
            },
            _popupZIndex: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('popupZIndex', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('popupZIndex');
                }
            },
            _query: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('query', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('query');
                }
            },
            _renderer: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('renderer', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('renderer');
                }
            },
            _roundedCorners: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('roundedCorners', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('roundedCorners');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('rtl');
                }
            },
            _scrollBarSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('scrollBarSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('scrollBarSize');
                }
            },
            _searchMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('searchMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('searchMode');
                }
            },
            _source: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('source', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('source');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('theme');
                }
            },
            _valueMember: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('valueMember', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('valueMember');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTextArea('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTextArea('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxTextArea(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['disabled','displayMember','dropDownWidth','height','items','maxLength','minLength','opened','placeHolder','popupZIndex','query','renderer','roundedCorners','rtl','scrollBarSize','searchMode','source','theme','valueMember','width'];
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
                Object.defineProperty(that, 'displayMember', {
                    get() {
                        return that._displayMember();
                    },
                    set(newValue) {
                        that._displayMember(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'dropDownWidth', {
                    get() {
                        return that._dropDownWidth();
                    },
                    set(newValue) {
                        that._dropDownWidth(newValue);
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
                Object.defineProperty(that, 'items', {
                    get() {
                        return that._items();
                    },
                    set(newValue) {
                        that._items(newValue);
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
                Object.defineProperty(that, 'minLength', {
                    get() {
                        return that._minLength();
                    },
                    set(newValue) {
                        that._minLength(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'opened', {
                    get() {
                        return that._opened();
                    },
                    set(newValue) {
                        that._opened(newValue);
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
                Object.defineProperty(that, 'popupZIndex', {
                    get() {
                        return that._popupZIndex();
                    },
                    set(newValue) {
                        that._popupZIndex(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'query', {
                    get() {
                        return that._query();
                    },
                    set(newValue) {
                        that._query(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'renderer', {
                    get() {
                        return that._renderer();
                    },
                    set(newValue) {
                        that._renderer(newValue);
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
                Object.defineProperty(that, 'scrollBarSize', {
                    get() {
                        return that._scrollBarSize();
                    },
                    set(newValue) {
                        that._scrollBarSize(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'searchMode', {
                    get() {
                        return that._searchMode();
                    },
                    set(newValue) {
                        that._searchMode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'source', {
                    get() {
                        return that._source();
                    },
                    set(newValue) {
                        that._source(newValue);
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
                Object.defineProperty(that, 'valueMember', {
                    get() {
                        return that._valueMember();
                    },
                    set(newValue) {
                        that._valueMember(newValue);
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

                JQXLite(this.componentSelector + ' textarea').on('change', function (event) { that.$emit('change', event); });
                JQXLite(this.componentSelector + ' textarea').on('close', function (event) { that.$emit('close', event); });
                JQXLite(this.componentSelector + ' textarea').on('open', function (event) { that.$emit('open', event); });
                JQXLite(this.componentSelector + ' textarea').on('select', function (event) { that.$emit('select', event); });
            }
        }
    }
</script>
