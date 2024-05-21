<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
    import '../jqwidgets/jqxcore.js';

    export default {
        props: {
            autoWidth: {
                default: false,
                type: Boolean
            },
            collapsible: {
                default: true,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            horizontal: {
                default: false,
                type: Boolean
            },
            position: String,
            source: [],
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxTimeline' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxTimeline(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxTimeline(usedProps[i]);
                }
                return resultToReturn;
            },
            render: function() {
                return JQXLite(this.componentSelector).jqxTimeline('render');  
            },
            _autoWidth: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTimeline('autoWidth', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTimeline('autoWidth');
                }
            },
            _collapsible: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTimeline('collapsible', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTimeline('collapsible');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTimeline('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTimeline('disabled');
                }
            },
            _horizontal: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTimeline('horizontal', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTimeline('horizontal');
                }
            },
            _position: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTimeline('position', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTimeline('position');
                }
            },
            _source: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTimeline('source', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTimeline('source');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxTimeline('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxTimeline('theme');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxTimeline(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['autoWidth','collapsible','disabled','horizontal','position','source','theme'];
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

                Object.defineProperty(that, 'autoWidth', {
                    get: function() {
                        return that._autoWidth();
                    },
                    set: function(newValue) {
                        that._autoWidth(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'collapsible', {
                    get: function() {
                        return that._collapsible();
                    },
                    set: function(newValue) {
                        that._collapsible(newValue);
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
                Object.defineProperty(that, 'horizontal', {
                    get: function() {
                        return that._horizontal();
                    },
                    set: function(newValue) {
                        that._horizontal(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'position', {
                    get: function() {
                        return that._position();
                    },
                    set: function(newValue) {
                        that._position(newValue);
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

            }
        }
    }
</script>
