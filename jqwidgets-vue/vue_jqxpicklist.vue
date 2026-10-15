<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
    import '../jqwidgets/jqxcore.js';

    export default {
        props: {
            width: [String, Number],
            height: [String, Number],
            source: [Array, Object],
            selectedItems: Array,
            displayMember: String,
            valueMember: String,
            sourceHeader: String,
            targetHeader: String,
            showCounts: {
                default: true,
                type: Boolean
            },
            filterable: {
                default: false,
                type: Boolean
            },
            filterPlaceHolder: String,
            searchMode: String,
            checkboxes: {
                default: false,
                type: Boolean
            },
            reorderable: {
                default: false,
                type: Boolean
            },
            renderer: Function,
            buttons: Array,
            itemHeight: Number,
            sourceLabel: String,
            targetLabel: String,
            disabled: {
                default: false,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxPickList' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxPickList(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxPickList(usedProps[i]);
                }
                return resultToReturn;
            },
            getSelectedItems: function() {
                return JQXLite(this.componentSelector).jqxPickList('getSelectedItems');  
            },
            getSelectedValues: function() {
                return JQXLite(this.componentSelector).jqxPickList('getSelectedValues');  
            },
            getSource: function() {
                return JQXLite(this.componentSelector).jqxPickList('getSource');  
            },
            add: function(values) {
                JQXLite(this.componentSelector).jqxPickList('add', values);  
            },
            remove: function(values) {
                JQXLite(this.componentSelector).jqxPickList('remove', values);  
            },
            addAll: function() {
                JQXLite(this.componentSelector).jqxPickList('addAll');  
            },
            removeAll: function() {
                JQXLite(this.componentSelector).jqxPickList('removeAll');  
            },
            moveUp: function() {
                JQXLite(this.componentSelector).jqxPickList('moveUp');  
            },
            moveDown: function() {
                JQXLite(this.componentSelector).jqxPickList('moveDown');  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('val');
                }
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxPickList('focus');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxPickList('refresh');  
            },
            render: function() {
                JQXLite(this.componentSelector).jqxPickList('render');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxPickList('destroy');  
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('width');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('height');
                }
            },
            _source: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('source', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('source');
                }
            },
            _selectedItems: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('selectedItems', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('selectedItems');
                }
            },
            _displayMember: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('displayMember', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('displayMember');
                }
            },
            _valueMember: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('valueMember', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('valueMember');
                }
            },
            _sourceHeader: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('sourceHeader', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('sourceHeader');
                }
            },
            _targetHeader: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('targetHeader', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('targetHeader');
                }
            },
            _showCounts: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('showCounts', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('showCounts');
                }
            },
            _filterable: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('filterable', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('filterable');
                }
            },
            _filterPlaceHolder: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('filterPlaceHolder', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('filterPlaceHolder');
                }
            },
            _searchMode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('searchMode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('searchMode');
                }
            },
            _checkboxes: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('checkboxes', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('checkboxes');
                }
            },
            _reorderable: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('reorderable', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('reorderable');
                }
            },
            _renderer: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('renderer', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('renderer');
                }
            },
            _buttons: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('buttons', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('buttons');
                }
            },
            _itemHeight: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('itemHeight', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('itemHeight');
                }
            },
            _sourceLabel: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('sourceLabel', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('sourceLabel');
                }
            },
            _targetLabel: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('targetLabel', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('targetLabel');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('disabled');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('rtl');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxPickList('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxPickList('theme');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxPickList(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['width','height','source','selectedItems','displayMember','valueMember','sourceHeader','targetHeader','showCounts','filterable','filterPlaceHolder','searchMode','checkboxes','reorderable','renderer','buttons','itemHeight','sourceLabel','targetLabel','disabled','rtl','theme'];
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

                Object.defineProperty(that, 'width', {
                    get: function() {
                        return that._width();
                    },
                    set: function(newValue) {
                        that._width(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'height', {
                    get: function() {
                        return that._height();
                    },
                    set: function(newValue) {
                        that._height(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'source', {
                    get: function() {
                        return that._source();
                    },
                    set: function(newValue) {
                        that._source(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'selectedItems', {
                    get: function() {
                        return that._selectedItems();
                    },
                    set: function(newValue) {
                        that._selectedItems(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'displayMember', {
                    get: function() {
                        return that._displayMember();
                    },
                    set: function(newValue) {
                        that._displayMember(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'valueMember', {
                    get: function() {
                        return that._valueMember();
                    },
                    set: function(newValue) {
                        that._valueMember(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'sourceHeader', {
                    get: function() {
                        return that._sourceHeader();
                    },
                    set: function(newValue) {
                        that._sourceHeader(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'targetHeader', {
                    get: function() {
                        return that._targetHeader();
                    },
                    set: function(newValue) {
                        that._targetHeader(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showCounts', {
                    get: function() {
                        return that._showCounts();
                    },
                    set: function(newValue) {
                        that._showCounts(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'filterable', {
                    get: function() {
                        return that._filterable();
                    },
                    set: function(newValue) {
                        that._filterable(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'filterPlaceHolder', {
                    get: function() {
                        return that._filterPlaceHolder();
                    },
                    set: function(newValue) {
                        that._filterPlaceHolder(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'searchMode', {
                    get: function() {
                        return that._searchMode();
                    },
                    set: function(newValue) {
                        that._searchMode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'checkboxes', {
                    get: function() {
                        return that._checkboxes();
                    },
                    set: function(newValue) {
                        that._checkboxes(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'reorderable', {
                    get: function() {
                        return that._reorderable();
                    },
                    set: function(newValue) {
                        that._reorderable(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'renderer', {
                    get: function() {
                        return that._renderer();
                    },
                    set: function(newValue) {
                        that._renderer(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'buttons', {
                    get: function() {
                        return that._buttons();
                    },
                    set: function(newValue) {
                        that._buttons(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'itemHeight', {
                    get: function() {
                        return that._itemHeight();
                    },
                    set: function(newValue) {
                        that._itemHeight(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'sourceLabel', {
                    get: function() {
                        return that._sourceLabel();
                    },
                    set: function(newValue) {
                        that._sourceLabel(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'targetLabel', {
                    get: function() {
                        return that._targetLabel();
                    },
                    set: function(newValue) {
                        that._targetLabel(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'disabled', {
                    get: function() {
                        return that._disabled();
                    },
                    set: function(newValue) {
                        that._disabled(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rtl', {
                    get: function() {
                        return that._rtl();
                    },
                    set: function(newValue) {
                        that._rtl(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'theme', {
                    get: function() {
                        return that._theme();
                    },
                    set: function(newValue) {
                        that._theme(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('create', function (event) { that.$emit('create', event); });
                JQXLite(this.componentSelector).on('change', function (event) { that.$emit('change', event); });
                JQXLite(this.componentSelector).on('itemsAdded', function (event) { that.$emit('itemsAdded', event); });
                JQXLite(this.componentSelector).on('itemsRemoved', function (event) { that.$emit('itemsRemoved', event); });
                JQXLite(this.componentSelector).on('reordered', function (event) { that.$emit('reordered', event); });
            }
        }
    }
</script>
