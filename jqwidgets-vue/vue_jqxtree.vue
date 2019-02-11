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
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxpanel.js';
    import '../jqwidgets/jqxdragdrop.js';
    import '../jqwidgets/jqxtree.js';
    import '../jqwidgets/jqxcheckbox.js';

    export default {
        props: {
            animationShowDuration: Number,
            animationHideDuration: Number,
            allowDrag: Boolean,
            allowDrop: Boolean,
            checkboxes: Boolean,
            dragStart: Function,
            dragEnd: Function,
            disabled: Boolean,
            easing: String,
            enableHover: Boolean,
            height: [Number, String],
            hasThreeStates: Boolean,
            incrementalSearch: Boolean,
            keyboardNavigation: Boolean,
            rtl: Boolean,
            source: [Array, Object],
            toggleIndicatorSize: Number,
            toggleMode: String,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxTree' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxTree(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxTree(usedProps[i]);
                }
                return resultToReturn;
            },
            addBefore: function(item, id) {
                JQXLite(this.componentSelector).jqxTree('addBefore', item, id);  
            },
            addAfter: function(item, id) {
                JQXLite(this.componentSelector).jqxTree('addAfter', item, id);  
            },
            addTo: function(item, id) {
                JQXLite(this.componentSelector).jqxTree('addTo', item, id);  
            },
            clear: function() {
                JQXLite(this.componentSelector).jqxTree('clear');  
            },
            checkAll: function() {
                JQXLite(this.componentSelector).jqxTree('checkAll');  
            },
            checkItem: function(item, checked) {
                JQXLite(this.componentSelector).jqxTree('checkItem', item, checked);  
            },
            collapseAll: function() {
                JQXLite(this.componentSelector).jqxTree('collapseAll');  
            },
            collapseItem: function(item) {
                JQXLite(this.componentSelector).jqxTree('collapseItem', item);  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxTree('destroy');  
            },
            disableItem: function(item) {
                JQXLite(this.componentSelector).jqxTree('disableItem', item);  
            },
            ensureVisible: function(item) {
                JQXLite(this.componentSelector).jqxTree('ensureVisible', item);  
            },
            enableItem: function(item) {
                JQXLite(this.componentSelector).jqxTree('enableItem', item);  
            },
            enableAll: function() {
                JQXLite(this.componentSelector).jqxTree('enableAll');  
            },
            expandAll: function() {
                JQXLite(this.componentSelector).jqxTree('expandAll');  
            },
            expandItem: function(item) {
                JQXLite(this.componentSelector).jqxTree('expandItem', item);  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxTree('focus');  
            },
            getCheckedItems: function() {
                return JQXLite(this.componentSelector).jqxTree('getCheckedItems');  
            },
            getUncheckedItems: function() {
                return JQXLite(this.componentSelector).jqxTree('getUncheckedItems');  
            },
            getItems: function() {
                return JQXLite(this.componentSelector).jqxTree('getItems');  
            },
            getItem: function(element) {
                return JQXLite(this.componentSelector).jqxTree('getItem', element);  
            },
            getSelectedItem: function() {
                return JQXLite(this.componentSelector).jqxTree('getSelectedItem');  
            },
            getPrevItem: function(item) {
                return JQXLite(this.componentSelector).jqxTree('getPrevItem', item);  
            },
            getNextItem: function(item) {
                return JQXLite(this.componentSelector).jqxTree('getNextItem', item);  
            },
            hitTest: function(left, top) {
                return JQXLite(this.componentSelector).jqxTree('hitTest', left, top);  
            },
            removeItem: function(item) {
                JQXLite(this.componentSelector).jqxTree('removeItem', item);  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxTree('render');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxTree('refresh');  
            },
            selectItem: function(item) {
                JQXLite(this.componentSelector).jqxTree('selectItem', item);  
            },
            uncheckAll: function() {
                JQXLite(this.componentSelector).jqxTree('uncheckAll');  
            },
            uncheckItem: function(item) {
                JQXLite(this.componentSelector).jqxTree('uncheckItem', item);  
            },
            updateItem: function(item, newItem) {
                JQXLite(this.componentSelector).jqxTree('updateItem', item, newItem);  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('val');
                }
            },
            _animationShowDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('animationShowDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('animationShowDuration');
                }
            },
            _animationHideDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('animationHideDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('animationHideDuration');
                }
            },
            _allowDrag: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('allowDrag', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('allowDrag');
                }
            },
            _allowDrop: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('allowDrop', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('allowDrop');
                }
            },
            _checkboxes: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('checkboxes', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('checkboxes');
                }
            },
            _dragStart: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('dragStart', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('dragStart');
                }
            },
            _dragEnd: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('dragEnd', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('dragEnd');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('disabled');
                }
            },
            _easing: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('easing', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('easing');
                }
            },
            _enableHover: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('enableHover', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('enableHover');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('height');
                }
            },
            _hasThreeStates: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('hasThreeStates', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('hasThreeStates');
                }
            },
            _incrementalSearch: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('incrementalSearch', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('incrementalSearch');
                }
            },
            _keyboardNavigation: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('keyboardNavigation', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('keyboardNavigation');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('rtl');
                }
            },
            _source: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('source', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('source');
                }
            },
            _toggleIndicatorSize: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('toggleIndicatorSize', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('toggleIndicatorSize');
                }
            },
            _toggleMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('toggleMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('toggleMode');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('theme');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTree('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTree('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxTree(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['animationShowDuration','animationHideDuration','allowDrag','allowDrop','checkboxes','dragStart','dragEnd','disabled','easing','enableHover','height','hasThreeStates','incrementalSearch','keyboardNavigation','rtl','source','toggleIndicatorSize','toggleMode','theme','width'];
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

                Object.defineProperty(that, 'animationShowDuration', {
                    get() {
                        return that._animationShowDuration();
                    },
                    set(newValue) {
                        that._animationShowDuration(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'animationHideDuration', {
                    get() {
                        return that._animationHideDuration();
                    },
                    set(newValue) {
                        that._animationHideDuration(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'allowDrag', {
                    get() {
                        return that._allowDrag();
                    },
                    set(newValue) {
                        that._allowDrag(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'allowDrop', {
                    get() {
                        return that._allowDrop();
                    },
                    set(newValue) {
                        that._allowDrop(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'checkboxes', {
                    get() {
                        return that._checkboxes();
                    },
                    set(newValue) {
                        that._checkboxes(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'dragStart', {
                    get() {
                        return that._dragStart();
                    },
                    set(newValue) {
                        that._dragStart(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'dragEnd', {
                    get() {
                        return that._dragEnd();
                    },
                    set(newValue) {
                        that._dragEnd(newValue);
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
                Object.defineProperty(that, 'easing', {
                    get() {
                        return that._easing();
                    },
                    set(newValue) {
                        that._easing(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableHover', {
                    get() {
                        return that._enableHover();
                    },
                    set(newValue) {
                        that._enableHover(newValue);
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
                Object.defineProperty(that, 'hasThreeStates', {
                    get() {
                        return that._hasThreeStates();
                    },
                    set(newValue) {
                        that._hasThreeStates(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'incrementalSearch', {
                    get() {
                        return that._incrementalSearch();
                    },
                    set(newValue) {
                        that._incrementalSearch(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'keyboardNavigation', {
                    get() {
                        return that._keyboardNavigation();
                    },
                    set(newValue) {
                        that._keyboardNavigation(newValue);
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
                Object.defineProperty(that, 'toggleIndicatorSize', {
                    get() {
                        return that._toggleIndicatorSize();
                    },
                    set(newValue) {
                        that._toggleIndicatorSize(newValue);
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

                JQXLite(this.componentSelector).on('added', function (event) { that.$emit('added', event); });
                JQXLite(this.componentSelector).on('checkChange', function (event) { that.$emit('checkChange', event); });
                JQXLite(this.componentSelector).on('collapse', function (event) { that.$emit('collapse', event); });
                JQXLite(this.componentSelector).on('dragStart', function (event) { that.$emit('dragStart', event); });
                JQXLite(this.componentSelector).on('dragEnd', function (event) { that.$emit('dragEnd', event); });
                JQXLite(this.componentSelector).on('expand', function (event) { that.$emit('expand', event); });
                JQXLite(this.componentSelector).on('itemClick', function (event) { that.$emit('itemClick', event); });
                JQXLite(this.componentSelector).on('removed', function (event) { that.$emit('removed', event); });
                JQXLite(this.componentSelector).on('select', function (event) { that.$emit('select', event); });
            }
        }
    }
</script>
