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
    import '../jqwidgets/jqxdata.export.js';
    import '../jqwidgets/jqxdraw.js';
    import '../jqwidgets/jqxchart.core.js';
    import '../jqwidgets/jqxchart.api.js';
    import '../jqwidgets/jqxchart.annotations.js';
    import '../jqwidgets/jqxchart.rangeselector.js';
    import '../jqwidgets/jqxchart.waterfall.js';

    export default {
        props: {
            title: String,
            description: String,
            source: [Array, Object],
            showBorderLine: Boolean,
            borderLineColor: String,
            borderLineWidth: Number,
            backgroundColor: String,
            backgroundImage: String,
            showLegend: Boolean,
            legendLayout: Object,
            padding: Object,
            titlePadding: Object,
            colorScheme: String,
            greyScale: Boolean,
            showToolTips: Boolean,
            toolTipShowDelay: Number,
            toolTipHideDelay: Number,
            toolTipMoveDuration: Number,
            drawBefore: Function,
            draw: Function,
            rtl: Boolean,
            enableCrosshairs: Boolean,
            crosshairsColor: String,
            crosshairsDashStyle: String,
            crosshairsLineWidth: Number,
            columnSeriesOverlap: Boolean,
            enabled: Boolean,
            enableAnimations: Boolean,
            animationDuration: Number,
            enableAxisTextAnimation: Boolean,
            renderEngine: String,
            xAxis: Object,
            valueAxis: Object,
            seriesGroups: Array,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxChart' + JQXLite.generateID();
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
                JQXLite(this.componentSelector).jqxChart(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxChart(usedProps[i]);
                }
                return resultToReturn;
            },
            getInstance: function() {
                return JQXLite(this.componentSelector).jqxChart('getInstance');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxChart('refresh');  
            },
            update: function() {
                JQXLite(this.componentSelector).jqxChart('update');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxChart('destroy');  
            },
            addColorScheme: function(schemeName, colors) {
                JQXLite(this.componentSelector).jqxChart('addColorScheme', schemeName, colors);  
            },
            removeColorScheme: function(schemeName) {
                JQXLite(this.componentSelector).jqxChart('removeColorScheme', schemeName);  
            },
            getItemsCount: function(groupIndex, serieIndex) {
                return JQXLite(this.componentSelector).jqxChart('getItemsCount', groupIndex, serieIndex);  
            },
            getItemCoord: function(groupIndex, serieIndex, itemIndex) {
                return JQXLite(this.componentSelector).jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);  
            },
            getXAxisRect: function(groupIndex) {
                return JQXLite(this.componentSelector).jqxChart('getXAxisRect', groupIndex);  
            },
            getXAxisLabels: function(groupIndex) {
                return JQXLite(this.componentSelector).jqxChart('getXAxisLabels', groupIndex);  
            },
            getValueAxisRect: function(groupIndex) {
                return JQXLite(this.componentSelector).jqxChart('getValueAxisRect', groupIndex);  
            },
            getValueAxisLabels: function(groupIndex) {
                return JQXLite(this.componentSelector).jqxChart('getValueAxisLabels', groupIndex);  
            },
            getColorScheme: function(colorScheme) {
                return JQXLite(this.componentSelector).jqxChart('getColorScheme', colorScheme);  
            },
            hideSerie: function(groupIndex, serieIndex, itemIndex) {
                JQXLite(this.componentSelector).jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);  
            },
            showSerie: function(groupIndex, serieIndex, itemIndex) {
                JQXLite(this.componentSelector).jqxChart('showSerie', groupIndex, serieIndex, itemIndex);  
            },
            hideToolTip: function(hideDelay) {
                JQXLite(this.componentSelector).jqxChart('hideToolTip', hideDelay);  
            },
            showToolTip: function(groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
                JQXLite(this.componentSelector).jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);  
            },
            saveAsJPEG: function(fileName, exportServerUrl) {
                JQXLite(this.componentSelector).jqxChart('saveAsJPEG', fileName, exportServerUrl);  
            },
            saveAsPNG: function(fileName, exportServerUrl) {
                JQXLite(this.componentSelector).jqxChart('saveAsPNG', fileName, exportServerUrl);  
            },
            saveAsPDF: function(fileName, exportServerUrl) {
                JQXLite(this.componentSelector).jqxChart('saveAsPDF', fileName, exportServerUrl);  
            },
            getXAxisValue: function(offset, groupIndex) {
                return JQXLite(this.componentSelector).jqxChart('getXAxisValue', offset, groupIndex);  
            },
            getValueAxisValue: function(offset, groupIndex) {
                return JQXLite(this.componentSelector).jqxChart('getValueAxisValue', offset, groupIndex);  
            },
            _title: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('title', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('title');
                }
            },
            _description: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('description', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('description');
                }
            },
            _source: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('source', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('source');
                }
            },
            _showBorderLine: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('showBorderLine', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('showBorderLine');
                }
            },
            _borderLineColor: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('borderLineColor', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('borderLineColor');
                }
            },
            _borderLineWidth: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('borderLineWidth', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('borderLineWidth');
                }
            },
            _backgroundColor: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('backgroundColor', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('backgroundColor');
                }
            },
            _backgroundImage: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('backgroundImage', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('backgroundImage');
                }
            },
            _showLegend: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('showLegend', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('showLegend');
                }
            },
            _legendLayout: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('legendLayout', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('legendLayout');
                }
            },
            _padding: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('padding', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('padding');
                }
            },
            _titlePadding: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('titlePadding', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('titlePadding');
                }
            },
            _colorScheme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('colorScheme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('colorScheme');
                }
            },
            _greyScale: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('greyScale', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('greyScale');
                }
            },
            _showToolTips: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('showToolTips', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('showToolTips');
                }
            },
            _toolTipShowDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('toolTipShowDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('toolTipShowDelay');
                }
            },
            _toolTipHideDelay: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('toolTipHideDelay', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('toolTipHideDelay');
                }
            },
            _toolTipMoveDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('toolTipMoveDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('toolTipMoveDuration');
                }
            },
            _drawBefore: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('drawBefore', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('drawBefore');
                }
            },
            _draw: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('draw', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('draw');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('rtl');
                }
            },
            _enableCrosshairs: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('enableCrosshairs', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('enableCrosshairs');
                }
            },
            _crosshairsColor: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('crosshairsColor', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('crosshairsColor');
                }
            },
            _crosshairsDashStyle: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('crosshairsDashStyle', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('crosshairsDashStyle');
                }
            },
            _crosshairsLineWidth: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('crosshairsLineWidth', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('crosshairsLineWidth');
                }
            },
            _columnSeriesOverlap: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('columnSeriesOverlap', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('columnSeriesOverlap');
                }
            },
            _enabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('enabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('enabled');
                }
            },
            _enableAnimations: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('enableAnimations', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('enableAnimations');
                }
            },
            _animationDuration: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('animationDuration', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('animationDuration');
                }
            },
            _enableAxisTextAnimation: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('enableAxisTextAnimation', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('enableAxisTextAnimation');
                }
            },
            _renderEngine: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('renderEngine', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('renderEngine');
                }
            },
            _xAxis: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('xAxis', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('xAxis');
                }
            },
            _valueAxis: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('valueAxis', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('valueAxis');
                }
            },
            _seriesGroups: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChart('seriesGroups', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChart('seriesGroups');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxChart(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['title','description','source','showBorderLine','borderLineColor','borderLineWidth','backgroundColor','backgroundImage','showLegend','legendLayout','padding','titlePadding','colorScheme','greyScale','showToolTips','toolTipShowDelay','toolTipHideDelay','toolTipMoveDuration','drawBefore','draw','rtl','enableCrosshairs','crosshairsColor','crosshairsDashStyle','crosshairsLineWidth','columnSeriesOverlap','enabled','enableAnimations','animationDuration','enableAxisTextAnimation','renderEngine','xAxis','valueAxis','seriesGroups'];
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

                Object.defineProperty(that, 'title', {
                    get() {
                        return that._title();
                    },
                    set(newValue) {
                        that._title(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'description', {
                    get() {
                        return that._description();
                    },
                    set(newValue) {
                        that._description(newValue);
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
                Object.defineProperty(that, 'showBorderLine', {
                    get() {
                        return that._showBorderLine();
                    },
                    set(newValue) {
                        that._showBorderLine(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'borderLineColor', {
                    get() {
                        return that._borderLineColor();
                    },
                    set(newValue) {
                        that._borderLineColor(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'borderLineWidth', {
                    get() {
                        return that._borderLineWidth();
                    },
                    set(newValue) {
                        that._borderLineWidth(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'backgroundColor', {
                    get() {
                        return that._backgroundColor();
                    },
                    set(newValue) {
                        that._backgroundColor(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'backgroundImage', {
                    get() {
                        return that._backgroundImage();
                    },
                    set(newValue) {
                        that._backgroundImage(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showLegend', {
                    get() {
                        return that._showLegend();
                    },
                    set(newValue) {
                        that._showLegend(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'legendLayout', {
                    get() {
                        return that._legendLayout();
                    },
                    set(newValue) {
                        that._legendLayout(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'padding', {
                    get() {
                        return that._padding();
                    },
                    set(newValue) {
                        that._padding(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'titlePadding', {
                    get() {
                        return that._titlePadding();
                    },
                    set(newValue) {
                        that._titlePadding(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'colorScheme', {
                    get() {
                        return that._colorScheme();
                    },
                    set(newValue) {
                        that._colorScheme(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'greyScale', {
                    get() {
                        return that._greyScale();
                    },
                    set(newValue) {
                        that._greyScale(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showToolTips', {
                    get() {
                        return that._showToolTips();
                    },
                    set(newValue) {
                        that._showToolTips(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'toolTipShowDelay', {
                    get() {
                        return that._toolTipShowDelay();
                    },
                    set(newValue) {
                        that._toolTipShowDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'toolTipHideDelay', {
                    get() {
                        return that._toolTipHideDelay();
                    },
                    set(newValue) {
                        that._toolTipHideDelay(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'toolTipMoveDuration', {
                    get() {
                        return that._toolTipMoveDuration();
                    },
                    set(newValue) {
                        that._toolTipMoveDuration(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'drawBefore', {
                    get() {
                        return that._drawBefore();
                    },
                    set(newValue) {
                        that._drawBefore(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'draw', {
                    get() {
                        return that._draw();
                    },
                    set(newValue) {
                        that._draw(newValue);
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
                Object.defineProperty(that, 'enableCrosshairs', {
                    get() {
                        return that._enableCrosshairs();
                    },
                    set(newValue) {
                        that._enableCrosshairs(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'crosshairsColor', {
                    get() {
                        return that._crosshairsColor();
                    },
                    set(newValue) {
                        that._crosshairsColor(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'crosshairsDashStyle', {
                    get() {
                        return that._crosshairsDashStyle();
                    },
                    set(newValue) {
                        that._crosshairsDashStyle(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'crosshairsLineWidth', {
                    get() {
                        return that._crosshairsLineWidth();
                    },
                    set(newValue) {
                        that._crosshairsLineWidth(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'columnSeriesOverlap', {
                    get() {
                        return that._columnSeriesOverlap();
                    },
                    set(newValue) {
                        that._columnSeriesOverlap(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enabled', {
                    get() {
                        return that._enabled();
                    },
                    set(newValue) {
                        that._enabled(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableAnimations', {
                    get() {
                        return that._enableAnimations();
                    },
                    set(newValue) {
                        that._enableAnimations(newValue);
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
                Object.defineProperty(that, 'enableAxisTextAnimation', {
                    get() {
                        return that._enableAxisTextAnimation();
                    },
                    set(newValue) {
                        that._enableAxisTextAnimation(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'renderEngine', {
                    get() {
                        return that._renderEngine();
                    },
                    set(newValue) {
                        that._renderEngine(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'xAxis', {
                    get() {
                        return that._xAxis();
                    },
                    set(newValue) {
                        that._xAxis(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'valueAxis', {
                    get() {
                        return that._valueAxis();
                    },
                    set(newValue) {
                        that._valueAxis(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'seriesGroups', {
                    get() {
                        return that._seriesGroups();
                    },
                    set(newValue) {
                        that._seriesGroups(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('toggle', function (event) { that.$emit('toggle', event); });
                JQXLite(this.componentSelector).on('click', function (event) { that.$emit('click', event); });
                JQXLite(this.componentSelector).on('refreshBegin', function (event) { that.$emit('refreshBegin', event); });
                JQXLite(this.componentSelector).on('refreshEnd', function (event) { that.$emit('refreshEnd', event); });
                JQXLite(this.componentSelector).on('rangeSelectionChanging', function (event) { that.$emit('rangeSelectionChanging', event); });
                JQXLite(this.componentSelector).on('rangeSelectionChanged', function (event) { that.$emit('rangeSelectionChanged', event); });
            }
        }
    }
</script>
