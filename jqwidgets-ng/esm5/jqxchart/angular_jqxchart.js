import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxchart.core';
import '../jqwidgets/jqxchart.api';
import '../jqwidgets/jqxchart.annotations';
import '../jqwidgets/jqxchart.rangeselector';
import '../jqwidgets/jqxchart.waterfall';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxChartComponent = /** @class */ (function () {
    function jqxChartComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['title', 'description', 'source', 'showBorderLine', 'borderLineColor', 'borderLineWidth', 'backgroundColor', 'backgroundImage', 'showLegend', 'legendLayout', 'padding', 'titlePadding', 'colorScheme', 'greyScale', 'showToolTips', 'toolTipShowDelay', 'toolTipHideDelay', 'toolTipMoveDuration', 'drawBefore', 'draw', 'rtl', 'enableCrosshairs', 'crosshairsColor', 'crosshairsDashStyle', 'crosshairsLineWidth', 'columnSeriesOverlap', 'enabled', 'enableAnimations', 'animationDuration', 'enableAxisTextAnimation', 'renderEngine', 'xAxis', 'valueAxis', 'categoryAxis', 'seriesGroups'];
        // jqxChartComponent events
        this.onToggle = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onRefreshBegin = new EventEmitter();
        this.onRefreshEnd = new EventEmitter();
        this.onRangeSelectionChanging = new EventEmitter();
        this.onRangeSelectionChanged = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize(function () {
            _this.__updateRect__();
        });
    }
    jqxChartComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            if (changes.hasOwnProperty('attrWidth') || changes.hasOwnProperty('attrHeight')) {
                this.__updateRect__();
            }
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxChart(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxChart(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxChart(this.properties[i])) {
                        this.host.jqxChart(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxChartComponent.prototype.arraysEqual = function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    jqxChartComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxChartComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxChartComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxChartComponent.prototype.createComponent = function (options) {
        if (this.host) {
            return;
        }
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxChart', options);
        this.__updateRect__();
    };
    jqxChartComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxChartComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    };
    jqxChartComponent.prototype.setOptions = function (options) {
        this.host.jqxChart('setOptions', options);
    };
    // jqxChartComponent properties
    jqxChartComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('title', arg);
        }
        else {
            return this.host.jqxChart('title');
        }
    };
    jqxChartComponent.prototype.description = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('description', arg);
        }
        else {
            return this.host.jqxChart('description');
        }
    };
    jqxChartComponent.prototype.source = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('source', arg);
        }
        else {
            return this.host.jqxChart('source');
        }
    };
    jqxChartComponent.prototype.showBorderLine = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showBorderLine', arg);
        }
        else {
            return this.host.jqxChart('showBorderLine');
        }
    };
    jqxChartComponent.prototype.borderLineColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineColor', arg);
        }
        else {
            return this.host.jqxChart('borderLineColor');
        }
    };
    jqxChartComponent.prototype.borderLineWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineWidth', arg);
        }
        else {
            return this.host.jqxChart('borderLineWidth');
        }
    };
    jqxChartComponent.prototype.backgroundColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundColor', arg);
        }
        else {
            return this.host.jqxChart('backgroundColor');
        }
    };
    jqxChartComponent.prototype.backgroundImage = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundImage', arg);
        }
        else {
            return this.host.jqxChart('backgroundImage');
        }
    };
    jqxChartComponent.prototype.showLegend = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showLegend', arg);
        }
        else {
            return this.host.jqxChart('showLegend');
        }
    };
    jqxChartComponent.prototype.legendLayout = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('legendLayout', arg);
        }
        else {
            return this.host.jqxChart('legendLayout');
        }
    };
    jqxChartComponent.prototype.padding = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('padding', arg);
        }
        else {
            return this.host.jqxChart('padding');
        }
    };
    jqxChartComponent.prototype.titlePadding = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('titlePadding', arg);
        }
        else {
            return this.host.jqxChart('titlePadding');
        }
    };
    jqxChartComponent.prototype.colorScheme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('colorScheme', arg);
        }
        else {
            return this.host.jqxChart('colorScheme');
        }
    };
    jqxChartComponent.prototype.greyScale = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('greyScale', arg);
        }
        else {
            return this.host.jqxChart('greyScale');
        }
    };
    jqxChartComponent.prototype.showToolTips = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showToolTips', arg);
        }
        else {
            return this.host.jqxChart('showToolTips');
        }
    };
    jqxChartComponent.prototype.toolTipShowDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipShowDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipShowDelay');
        }
    };
    jqxChartComponent.prototype.toolTipHideDelay = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipHideDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipHideDelay');
        }
    };
    jqxChartComponent.prototype.toolTipMoveDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipMoveDuration', arg);
        }
        else {
            return this.host.jqxChart('toolTipMoveDuration');
        }
    };
    jqxChartComponent.prototype.drawBefore = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('drawBefore', arg);
        }
        else {
            return this.host.jqxChart('drawBefore');
        }
    };
    jqxChartComponent.prototype.draw = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('draw', arg);
        }
        else {
            return this.host.jqxChart('draw');
        }
    };
    jqxChartComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('rtl', arg);
        }
        else {
            return this.host.jqxChart('rtl');
        }
    };
    jqxChartComponent.prototype.enableCrosshairs = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableCrosshairs', arg);
        }
        else {
            return this.host.jqxChart('enableCrosshairs');
        }
    };
    jqxChartComponent.prototype.crosshairsColor = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsColor', arg);
        }
        else {
            return this.host.jqxChart('crosshairsColor');
        }
    };
    jqxChartComponent.prototype.crosshairsDashStyle = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsDashStyle', arg);
        }
        else {
            return this.host.jqxChart('crosshairsDashStyle');
        }
    };
    jqxChartComponent.prototype.crosshairsLineWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsLineWidth', arg);
        }
        else {
            return this.host.jqxChart('crosshairsLineWidth');
        }
    };
    jqxChartComponent.prototype.columnSeriesOverlap = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('columnSeriesOverlap', arg);
        }
        else {
            return this.host.jqxChart('columnSeriesOverlap');
        }
    };
    jqxChartComponent.prototype.enabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enabled', arg);
        }
        else {
            return this.host.jqxChart('enabled');
        }
    };
    jqxChartComponent.prototype.enableAnimations = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAnimations', arg);
        }
        else {
            return this.host.jqxChart('enableAnimations');
        }
    };
    jqxChartComponent.prototype.animationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('animationDuration', arg);
        }
        else {
            return this.host.jqxChart('animationDuration');
        }
    };
    jqxChartComponent.prototype.enableAxisTextAnimation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAxisTextAnimation', arg);
        }
        else {
            return this.host.jqxChart('enableAxisTextAnimation');
        }
    };
    jqxChartComponent.prototype.renderEngine = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('renderEngine', arg);
        }
        else {
            return this.host.jqxChart('renderEngine');
        }
    };
    jqxChartComponent.prototype.xAxis = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('xAxis', arg);
        }
        else {
            return this.host.jqxChart('xAxis');
        }
    };
    jqxChartComponent.prototype.valueAxis = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('valueAxis', arg);
        }
        else {
            return this.host.jqxChart('valueAxis');
        }
    };
    jqxChartComponent.prototype.categoryAxis = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('categoryAxis', arg);
        }
        else {
            return this.host.jqxChart('categoryAxis');
        }
    };
    jqxChartComponent.prototype.seriesGroups = function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('seriesGroups', arg);
        }
        else {
            return this.host.jqxChart('seriesGroups');
        }
    };
    // jqxChartComponent functions
    jqxChartComponent.prototype.getInstance = function () {
        return this.host.jqxChart('getInstance');
    };
    jqxChartComponent.prototype.refresh = function () {
        this.host.jqxChart('refresh');
    };
    jqxChartComponent.prototype.update = function () {
        this.host.jqxChart('update');
    };
    jqxChartComponent.prototype.destroy = function () {
        this.host.jqxChart('destroy');
    };
    jqxChartComponent.prototype.addColorScheme = function (schemeName, colors) {
        this.host.jqxChart('addColorScheme', schemeName, colors);
    };
    jqxChartComponent.prototype.removeColorScheme = function (schemeName) {
        this.host.jqxChart('removeColorScheme', schemeName);
    };
    jqxChartComponent.prototype.getItemsCount = function (groupIndex, serieIndex) {
        return this.host.jqxChart('getItemsCount', groupIndex, serieIndex);
    };
    jqxChartComponent.prototype.getItemCoord = function (groupIndex, serieIndex, itemIndex) {
        return this.host.jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);
    };
    jqxChartComponent.prototype.getXAxisRect = function (groupIndex) {
        return this.host.jqxChart('getXAxisRect', groupIndex);
    };
    jqxChartComponent.prototype.getXAxisLabels = function (groupIndex) {
        return this.host.jqxChart('getXAxisLabels', groupIndex);
    };
    jqxChartComponent.prototype.getValueAxisRect = function (groupIndex) {
        return this.host.jqxChart('getValueAxisRect', groupIndex);
    };
    jqxChartComponent.prototype.getValueAxisLabels = function (groupIndex) {
        return this.host.jqxChart('getValueAxisLabels', groupIndex);
    };
    jqxChartComponent.prototype.getColorScheme = function (colorScheme) {
        return this.host.jqxChart('getColorScheme', colorScheme);
    };
    jqxChartComponent.prototype.hideSerie = function (groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);
    };
    jqxChartComponent.prototype.showSerie = function (groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('showSerie', groupIndex, serieIndex, itemIndex);
    };
    jqxChartComponent.prototype.hideToolTip = function (hideDelay) {
        this.host.jqxChart('hideToolTip', hideDelay);
    };
    jqxChartComponent.prototype.showToolTip = function (groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        this.host.jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
    };
    jqxChartComponent.prototype.saveAsJPEG = function (fileName, exportServerUrl) {
        this.host.jqxChart('saveAsJPEG', fileName, exportServerUrl);
    };
    jqxChartComponent.prototype.saveAsPNG = function (fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPNG', fileName, exportServerUrl);
    };
    jqxChartComponent.prototype.saveAsPDF = function (fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPDF', fileName, exportServerUrl);
    };
    jqxChartComponent.prototype.getXAxisValue = function (offset, groupIndex) {
        return this.host.jqxChart('getXAxisValue', offset, groupIndex);
    };
    jqxChartComponent.prototype.getValueAxisValue = function (offset, groupIndex) {
        return this.host.jqxChart('getValueAxisValue', offset, groupIndex);
    };
    jqxChartComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('toggle', function (eventData) { _this.onToggle.emit(eventData); });
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
        this.host.on('refreshBegin', function (eventData) { _this.onRefreshBegin.emit(eventData); });
        this.host.on('refreshEnd', function (eventData) { _this.onRefreshEnd.emit(eventData); });
        this.host.on('rangeSelectionChanging', function (eventData) { _this.onRangeSelectionChanging.emit(eventData); });
        this.host.on('rangeSelectionChanged', function (eventData) { _this.onRangeSelectionChanged.emit(eventData); });
    };
    jqxChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('title'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrTitle", void 0);
    tslib_1.__decorate([
        Input('description'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrDescription", void 0);
    tslib_1.__decorate([
        Input('source'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrSource", void 0);
    tslib_1.__decorate([
        Input('showBorderLine'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrShowBorderLine", void 0);
    tslib_1.__decorate([
        Input('borderLineColor'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrBorderLineColor", void 0);
    tslib_1.__decorate([
        Input('borderLineWidth'),
        tslib_1.__metadata("design:type", Number)
    ], jqxChartComponent.prototype, "attrBorderLineWidth", void 0);
    tslib_1.__decorate([
        Input('backgroundColor'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrBackgroundColor", void 0);
    tslib_1.__decorate([
        Input('backgroundImage'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrBackgroundImage", void 0);
    tslib_1.__decorate([
        Input('showLegend'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrShowLegend", void 0);
    tslib_1.__decorate([
        Input('legendLayout'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrLegendLayout", void 0);
    tslib_1.__decorate([
        Input('padding'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrPadding", void 0);
    tslib_1.__decorate([
        Input('titlePadding'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrTitlePadding", void 0);
    tslib_1.__decorate([
        Input('colorScheme'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrColorScheme", void 0);
    tslib_1.__decorate([
        Input('greyScale'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrGreyScale", void 0);
    tslib_1.__decorate([
        Input('showToolTips'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrShowToolTips", void 0);
    tslib_1.__decorate([
        Input('toolTipShowDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxChartComponent.prototype, "attrToolTipShowDelay", void 0);
    tslib_1.__decorate([
        Input('toolTipHideDelay'),
        tslib_1.__metadata("design:type", Number)
    ], jqxChartComponent.prototype, "attrToolTipHideDelay", void 0);
    tslib_1.__decorate([
        Input('toolTipMoveDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxChartComponent.prototype, "attrToolTipMoveDuration", void 0);
    tslib_1.__decorate([
        Input('drawBefore'),
        tslib_1.__metadata("design:type", Function)
    ], jqxChartComponent.prototype, "attrDrawBefore", void 0);
    tslib_1.__decorate([
        Input('draw'),
        tslib_1.__metadata("design:type", Function)
    ], jqxChartComponent.prototype, "attrDraw", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('enableCrosshairs'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrEnableCrosshairs", void 0);
    tslib_1.__decorate([
        Input('crosshairsColor'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrCrosshairsColor", void 0);
    tslib_1.__decorate([
        Input('crosshairsDashStyle'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrCrosshairsDashStyle", void 0);
    tslib_1.__decorate([
        Input('crosshairsLineWidth'),
        tslib_1.__metadata("design:type", Number)
    ], jqxChartComponent.prototype, "attrCrosshairsLineWidth", void 0);
    tslib_1.__decorate([
        Input('columnSeriesOverlap'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrColumnSeriesOverlap", void 0);
    tslib_1.__decorate([
        Input('enabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrEnabled", void 0);
    tslib_1.__decorate([
        Input('enableAnimations'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrEnableAnimations", void 0);
    tslib_1.__decorate([
        Input('animationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxChartComponent.prototype, "attrAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('enableAxisTextAnimation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "attrEnableAxisTextAnimation", void 0);
    tslib_1.__decorate([
        Input('renderEngine'),
        tslib_1.__metadata("design:type", String)
    ], jqxChartComponent.prototype, "attrRenderEngine", void 0);
    tslib_1.__decorate([
        Input('xAxis'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrXAxis", void 0);
    tslib_1.__decorate([
        Input('valueAxis'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrValueAxis", void 0);
    tslib_1.__decorate([
        Input('categoryAxis'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrCategoryAxis", void 0);
    tslib_1.__decorate([
        Input('seriesGroups'),
        tslib_1.__metadata("design:type", Array)
    ], jqxChartComponent.prototype, "attrSeriesGroups", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxChartComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "onToggle", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "onClick", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "onRefreshBegin", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "onRefreshEnd", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "onRangeSelectionChanging", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxChartComponent.prototype, "onRangeSelectionChanged", void 0);
    jqxChartComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxChart',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxChartComponent);
    return jqxChartComponent;
}()); //jqxChartComponent
export { jqxChartComponent };
