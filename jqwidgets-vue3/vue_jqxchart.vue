<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
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
            showBorderLine: {
                default: true,
                type: Boolean
            },
            borderLineColor: String,
            borderLineWidth: Number,
            backgroundColor: String,
            backgroundImage: String,
            showLegend: {
                default: true,
                type: Boolean
            },
            legendLayout: Object,
            padding: Object,
            titlePadding: Object,
            colorScheme: String,
            greyScale: {
                default: false,
                type: Boolean
            },
            showToolTips: {
                default: true,
                type: Boolean
            },
            toolTipShowDelay: Number,
            toolTipHideDelay: Number,
            toolTipMoveDuration: Number,
            drawBefore: Function,
            draw: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            enableCrosshairs: {
                default: false,
                type: Boolean
            },
            crosshairsColor: String,
            crosshairsDashStyle: String,
            crosshairsLineWidth: Number,
            columnSeriesOverlap: {
                default: false,
                type: Boolean
            },
            enabled: {
                default: true,
                type: Boolean
            },
            enableAnimations: {
                default: true,
                type: Boolean
            },
            animationDuration: Number,
            enableAxisTextAnimation: {
                default: false,
                type: Boolean
            },
            renderEngine: String,
            xAxis: Object,
            valueAxis: Object,
            categoryAxis: Object,
            seriesGroups: Array,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["toggle","click","refreshBegin","refreshEnd","rangeSelectionChanging","rangeSelectionChanged"],
        setup(props, context) {
			const id = "jqxChart" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxChart(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxChart(usedProps[i]);
                }
                return resultToReturn;
            }
            function getInstance() {
                return JQXLite(componentSelector).jqxChart('getInstance');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxChart('refresh');  
            }
            function update() {
                JQXLite(componentSelector).jqxChart('update');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxChart('destroy');  
            }
            function addColorScheme(schemeName, colors) {
                JQXLite(componentSelector).jqxChart('addColorScheme', schemeName, colors);  
            }
            function removeColorScheme(schemeName) {
                JQXLite(componentSelector).jqxChart('removeColorScheme', schemeName);  
            }
            function getItemsCount(groupIndex, serieIndex) {
                return JQXLite(componentSelector).jqxChart('getItemsCount', groupIndex, serieIndex);  
            }
            function getItemCoord(groupIndex, serieIndex, itemIndex) {
                return JQXLite(componentSelector).jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);  
            }
            function getXAxisRect(groupIndex) {
                return JQXLite(componentSelector).jqxChart('getXAxisRect', groupIndex);  
            }
            function getXAxisLabels(groupIndex) {
                return JQXLite(componentSelector).jqxChart('getXAxisLabels', groupIndex);  
            }
            function getValueAxisRect(groupIndex) {
                return JQXLite(componentSelector).jqxChart('getValueAxisRect', groupIndex);  
            }
            function getValueAxisLabels(groupIndex) {
                return JQXLite(componentSelector).jqxChart('getValueAxisLabels', groupIndex);  
            }
            function getColorScheme(colorScheme) {
                return JQXLite(componentSelector).jqxChart('getColorScheme', colorScheme);  
            }
            function hideSerie(groupIndex, serieIndex, itemIndex) {
                JQXLite(componentSelector).jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);  
            }
            function showSerie(groupIndex, serieIndex, itemIndex) {
                JQXLite(componentSelector).jqxChart('showSerie', groupIndex, serieIndex, itemIndex);  
            }
            function hideToolTip(hideDelay) {
                JQXLite(componentSelector).jqxChart('hideToolTip', hideDelay);  
            }
            function showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
                JQXLite(componentSelector).jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);  
            }
            function saveAsJPEG(fileName, exportServerUrl) {
                JQXLite(componentSelector).jqxChart('saveAsJPEG', fileName, exportServerUrl);  
            }
            function saveAsPNG(fileName, exportServerUrl) {
                JQXLite(componentSelector).jqxChart('saveAsPNG', fileName, exportServerUrl);  
            }
            function saveAsPDF(fileName, exportServerUrl) {
                JQXLite(componentSelector).jqxChart('saveAsPDF', fileName, exportServerUrl);  
            }
            function getXAxisValue(offset, groupIndex) {
                return JQXLite(componentSelector).jqxChart('getXAxisValue', offset, groupIndex);  
            }
            function getValueAxisValue(offset, groupIndex) {
                return JQXLite(componentSelector).jqxChart('getValueAxisValue', offset, groupIndex);  
            }
            function _title (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('title', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('title');
                }
            }
            function _description (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('description', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('description');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('source');
                }
            }
            function _showBorderLine (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('showBorderLine', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('showBorderLine');
                }
            }
            function _borderLineColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('borderLineColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('borderLineColor');
                }
            }
            function _borderLineWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('borderLineWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('borderLineWidth');
                }
            }
            function _backgroundColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('backgroundColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('backgroundColor');
                }
            }
            function _backgroundImage (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('backgroundImage', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('backgroundImage');
                }
            }
            function _showLegend (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('showLegend', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('showLegend');
                }
            }
            function _legendLayout (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('legendLayout', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('legendLayout');
                }
            }
            function _padding (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('padding', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('padding');
                }
            }
            function _titlePadding (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('titlePadding', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('titlePadding');
                }
            }
            function _colorScheme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('colorScheme', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('colorScheme');
                }
            }
            function _greyScale (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('greyScale', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('greyScale');
                }
            }
            function _showToolTips (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('showToolTips', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('showToolTips');
                }
            }
            function _toolTipShowDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('toolTipShowDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('toolTipShowDelay');
                }
            }
            function _toolTipHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('toolTipHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('toolTipHideDelay');
                }
            }
            function _toolTipMoveDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('toolTipMoveDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('toolTipMoveDuration');
                }
            }
            function _drawBefore (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('drawBefore', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('drawBefore');
                }
            }
            function _draw (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('draw', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('draw');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('rtl');
                }
            }
            function _enableCrosshairs (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('enableCrosshairs', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('enableCrosshairs');
                }
            }
            function _crosshairsColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('crosshairsColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('crosshairsColor');
                }
            }
            function _crosshairsDashStyle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('crosshairsDashStyle', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('crosshairsDashStyle');
                }
            }
            function _crosshairsLineWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('crosshairsLineWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('crosshairsLineWidth');
                }
            }
            function _columnSeriesOverlap (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('columnSeriesOverlap', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('columnSeriesOverlap');
                }
            }
            function _enabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('enabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('enabled');
                }
            }
            function _enableAnimations (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('enableAnimations', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('enableAnimations');
                }
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('animationDuration');
                }
            }
            function _enableAxisTextAnimation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('enableAxisTextAnimation', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('enableAxisTextAnimation');
                }
            }
            function _renderEngine (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('renderEngine', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('renderEngine');
                }
            }
            function _xAxis (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('xAxis', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('xAxis');
                }
            }
            function _valueAxis (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('valueAxis', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('valueAxis');
                }
            }
            function _categoryAxis (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('categoryAxis', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('categoryAxis');
                }
            }
            function _seriesGroups (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChart('seriesGroups', arg)
                } else {
                    return JQXLite(componentSelector).jqxChart('seriesGroups');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxChart(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['title','description','source','showBorderLine','borderLineColor','borderLineWidth','backgroundColor','backgroundImage','showLegend','legendLayout','padding','titlePadding','colorScheme','greyScale','showToolTips','toolTipShowDelay','toolTipHideDelay','toolTipMoveDuration','drawBefore','draw','rtl','enableCrosshairs','crosshairsColor','crosshairsDashStyle','crosshairsLineWidth','columnSeriesOverlap','enabled','enableAnimations','animationDuration','enableAxisTextAnimation','renderEngine','xAxis','valueAxis','categoryAxis','seriesGroups'];
                const componentProps = props;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1 && componentProps[prop] !== undefined) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            }
            const options = {
                 get title() {
                     return _title();
                 },
                 set title(newValue) {
                     _title(newValue);
                 },
                 get description() {
                     return _description();
                 },
                 set description(newValue) {
                     _description(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get showBorderLine() {
                     return _showBorderLine();
                 },
                 set showBorderLine(newValue) {
                     _showBorderLine(newValue);
                 },
                 get borderLineColor() {
                     return _borderLineColor();
                 },
                 set borderLineColor(newValue) {
                     _borderLineColor(newValue);
                 },
                 get borderLineWidth() {
                     return _borderLineWidth();
                 },
                 set borderLineWidth(newValue) {
                     _borderLineWidth(newValue);
                 },
                 get backgroundColor() {
                     return _backgroundColor();
                 },
                 set backgroundColor(newValue) {
                     _backgroundColor(newValue);
                 },
                 get backgroundImage() {
                     return _backgroundImage();
                 },
                 set backgroundImage(newValue) {
                     _backgroundImage(newValue);
                 },
                 get showLegend() {
                     return _showLegend();
                 },
                 set showLegend(newValue) {
                     _showLegend(newValue);
                 },
                 get legendLayout() {
                     return _legendLayout();
                 },
                 set legendLayout(newValue) {
                     _legendLayout(newValue);
                 },
                 get padding() {
                     return _padding();
                 },
                 set padding(newValue) {
                     _padding(newValue);
                 },
                 get titlePadding() {
                     return _titlePadding();
                 },
                 set titlePadding(newValue) {
                     _titlePadding(newValue);
                 },
                 get colorScheme() {
                     return _colorScheme();
                 },
                 set colorScheme(newValue) {
                     _colorScheme(newValue);
                 },
                 get greyScale() {
                     return _greyScale();
                 },
                 set greyScale(newValue) {
                     _greyScale(newValue);
                 },
                 get showToolTips() {
                     return _showToolTips();
                 },
                 set showToolTips(newValue) {
                     _showToolTips(newValue);
                 },
                 get toolTipShowDelay() {
                     return _toolTipShowDelay();
                 },
                 set toolTipShowDelay(newValue) {
                     _toolTipShowDelay(newValue);
                 },
                 get toolTipHideDelay() {
                     return _toolTipHideDelay();
                 },
                 set toolTipHideDelay(newValue) {
                     _toolTipHideDelay(newValue);
                 },
                 get toolTipMoveDuration() {
                     return _toolTipMoveDuration();
                 },
                 set toolTipMoveDuration(newValue) {
                     _toolTipMoveDuration(newValue);
                 },
                 get drawBefore() {
                     return _drawBefore();
                 },
                 set drawBefore(newValue) {
                     _drawBefore(newValue);
                 },
                 get draw() {
                     return _draw();
                 },
                 set draw(newValue) {
                     _draw(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get enableCrosshairs() {
                     return _enableCrosshairs();
                 },
                 set enableCrosshairs(newValue) {
                     _enableCrosshairs(newValue);
                 },
                 get crosshairsColor() {
                     return _crosshairsColor();
                 },
                 set crosshairsColor(newValue) {
                     _crosshairsColor(newValue);
                 },
                 get crosshairsDashStyle() {
                     return _crosshairsDashStyle();
                 },
                 set crosshairsDashStyle(newValue) {
                     _crosshairsDashStyle(newValue);
                 },
                 get crosshairsLineWidth() {
                     return _crosshairsLineWidth();
                 },
                 set crosshairsLineWidth(newValue) {
                     _crosshairsLineWidth(newValue);
                 },
                 get columnSeriesOverlap() {
                     return _columnSeriesOverlap();
                 },
                 set columnSeriesOverlap(newValue) {
                     _columnSeriesOverlap(newValue);
                 },
                 get enabled() {
                     return _enabled();
                 },
                 set enabled(newValue) {
                     _enabled(newValue);
                 },
                 get enableAnimations() {
                     return _enableAnimations();
                 },
                 set enableAnimations(newValue) {
                     _enableAnimations(newValue);
                 },
                 get animationDuration() {
                     return _animationDuration();
                 },
                 set animationDuration(newValue) {
                     _animationDuration(newValue);
                 },
                 get enableAxisTextAnimation() {
                     return _enableAxisTextAnimation();
                 },
                 set enableAxisTextAnimation(newValue) {
                     _enableAxisTextAnimation(newValue);
                 },
                 get renderEngine() {
                     return _renderEngine();
                 },
                 set renderEngine(newValue) {
                     _renderEngine(newValue);
                 },
                 get xAxis() {
                     return _xAxis();
                 },
                 set xAxis(newValue) {
                     _xAxis(newValue);
                 },
                 get valueAxis() {
                     return _valueAxis();
                 },
                 set valueAxis(newValue) {
                     _valueAxis(newValue);
                 },
                 get categoryAxis() {
                     return _categoryAxis();
                 },
                 set categoryAxis(newValue) {
                     _categoryAxis(newValue);
                 },
                 get seriesGroups() {
                     return _seriesGroups();
                 },
                 set seriesGroups(newValue) {
                     _seriesGroups(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('toggle', function (event) { that.emit('toggle', event); });
                JQXLite(componentSelector).on('click', function (event) { that.emit('click', event); });
                JQXLite(componentSelector).on('refreshBegin', function (event) { that.emit('refreshBegin', event); });
                JQXLite(componentSelector).on('refreshEnd', function (event) { that.emit('refreshEnd', event); });
                JQXLite(componentSelector).on('rangeSelectionChanging', function (event) { that.emit('rangeSelectionChanging', event); });
                JQXLite(componentSelector).on('rangeSelectionChanged', function (event) { that.emit('rangeSelectionChanged', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxChart(widgetOptions);
			})
			return {id, componentSelector, getInstance,refresh,update,destroy,addColorScheme,removeColorScheme,getItemsCount,getItemCoord,getXAxisRect,getXAxisLabels,getValueAxisRect,getValueAxisLabels,getColorScheme,hideSerie,showSerie,hideToolTip,showToolTip,saveAsJPEG,saveAsPNG,saveAsPDF,getXAxisValue,getValueAxisValue, setOptions, options, getOptions, createComponent};
        },
    }
</script>
