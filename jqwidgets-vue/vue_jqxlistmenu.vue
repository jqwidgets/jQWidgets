/*
jQWidgets v6.1.0 (2018-October)
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
    import '../jqwidgets/jqxlistmenu.js';

    export default {
        props: {
            alwaysShowNavigationArrows: Boolean,
            animationType: String,
            animationDuration: Number,
            autoSeparators: Boolean,
            backLabel: String,
            disabled: Boolean,
            enableScrolling: Boolean,
            filterCallback: Function,
            height: [String, Number],
            headerAnimationDuration: Number,
            placeHolder: String,
            readOnly: Boolean,
            rtl: Boolean,
            roundedCorners: Boolean,
            showNavigationArrows: Boolean,
            showFilter: Boolean,
            showHeader: Boolean,
            showBackButton: Boolean,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxListMenu' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxListMenu(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxListMenu(usedProps[i]);
                }
                return resultToReturn;
            },
            back: function() {
                JQXLite(this.componentSelector).jqxListMenu('back');  
            },
            changePage: function(Item) {
                JQXLite(this.componentSelector).jqxListMenu('changePage', Item);  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxListMenu('destroy');  
            },
            _alwaysShowNavigationArrows: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('alwaysShowNavigationArrows', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('alwaysShowNavigationArrows');
                }
            },
            _animationType: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('animationType', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('animationType');
                }
            },
            _animationDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('animationDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('animationDuration');
                }
            },
            _autoSeparators: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('autoSeparators', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('autoSeparators');
                }
            },
            _backLabel: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('backLabel', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('backLabel');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('disabled');
                }
            },
            _enableScrolling: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('enableScrolling', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('enableScrolling');
                }
            },
            _filterCallback: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('filterCallback', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('filterCallback');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('height');
                }
            },
            _headerAnimationDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('headerAnimationDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('headerAnimationDuration');
                }
            },
            _placeHolder: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('placeHolder', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('placeHolder');
                }
            },
            _readOnly: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('readOnly', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('readOnly');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('rtl');
                }
            },
            _roundedCorners: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('roundedCorners', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('roundedCorners');
                }
            },
            _showNavigationArrows: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('showNavigationArrows', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('showNavigationArrows');
                }
            },
            _showFilter: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('showFilter', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('showFilter');
                }
            },
            _showHeader: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('showHeader', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('showHeader');
                }
            },
            _showBackButton: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('showBackButton', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('showBackButton');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('theme');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxListMenu('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxListMenu('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxListMenu(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['alwaysShowNavigationArrows','animationType','animationDuration','autoSeparators','backLabel','disabled','enableScrolling','filterCallback','height','headerAnimationDuration','placeHolder','readOnly','rtl','roundedCorners','showNavigationArrows','showFilter','showHeader','showBackButton','theme','width'];
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

                Object.defineProperty(that, 'alwaysShowNavigationArrows', {
                    get() {
                        return that._alwaysShowNavigationArrows();
                    },
                    set(newValue) {
                        that._alwaysShowNavigationArrows(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
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
                Object.defineProperty(that, 'animationDuration', {
                    get() {
                        return that._animationDuration();
                    },
                    set(newValue) {
                        that._animationDuration(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'autoSeparators', {
                    get() {
                        return that._autoSeparators();
                    },
                    set(newValue) {
                        that._autoSeparators(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'backLabel', {
                    get() {
                        return that._backLabel();
                    },
                    set(newValue) {
                        that._backLabel(newValue);
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
                Object.defineProperty(that, 'enableScrolling', {
                    get() {
                        return that._enableScrolling();
                    },
                    set(newValue) {
                        that._enableScrolling(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'filterCallback', {
                    get() {
                        return that._filterCallback();
                    },
                    set(newValue) {
                        that._filterCallback(newValue);
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
                Object.defineProperty(that, 'headerAnimationDuration', {
                    get() {
                        return that._headerAnimationDuration();
                    },
                    set(newValue) {
                        that._headerAnimationDuration(newValue);
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
                Object.defineProperty(that, 'showNavigationArrows', {
                    get() {
                        return that._showNavigationArrows();
                    },
                    set(newValue) {
                        that._showNavigationArrows(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showFilter', {
                    get() {
                        return that._showFilter();
                    },
                    set(newValue) {
                        that._showFilter(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showHeader', {
                    get() {
                        return that._showHeader();
                    },
                    set(newValue) {
                        that._showHeader(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showBackButton', {
                    get() {
                        return that._showBackButton();
                    },
                    set(newValue) {
                        that._showBackButton(newValue);
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

            }
        }
    }
</script>
