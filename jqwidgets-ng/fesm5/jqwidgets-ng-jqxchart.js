import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets/jqxdata.export';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
import * as jqxchartcore from '../../jqwidgets/jqxchart.core';
import * as jqxchartapi from '../../jqwidgets/jqxchart.api';
import * as jqxchartannotations from '../../jqwidgets/jqxchart.annotations';
import * as jqxchartrangeselector from '../../jqwidgets/jqxchart.rangeselector';
import * as jqxchartwaterfall from '../../jqwidgets/jqxchart.waterfall';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxChartComponent = /** @class */ (function () {
    function jqxChartComponent(containerElement) {
        var _this = this;
        this.autoCreate = true;
        this.properties = ['title', 'description', 'source', 'showBorderLine', 'borderLineColor', 'borderLineWidth', 'backgroundColor', 'backgroundImage', 'showLegend', 'legendLayout', 'padding', 'titlePadding', 'colorScheme', 'greyScale', 'showToolTips', 'toolTipShowDelay', 'toolTipHideDelay', 'toolTipMoveDuration', 'drawBefore', 'draw', 'rtl', 'enableCrosshairs', 'crosshairsColor', 'crosshairsDashStyle', 'crosshairsLineWidth', 'columnSeriesOverlap', 'enabled', 'enableAnimations', 'animationDuration', 'enableAxisTextAnimation', 'renderEngine', 'xAxis', 'valueAxis', 'seriesGroups'];
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
    /**
     * @return {?}
     */
    jqxChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            if (changes.hasOwnProperty('attrWidth') || changes.hasOwnProperty('attrHeight')) {
                this.__updateRect__();
            }
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxChartComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
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
    /**
     * @return {?}
     */
    jqxChartComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxChartComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, __spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxChartComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxChartComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxChartComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxChartComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxChartComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxChart('setOptions', options);
    };
    // jqxChartComponent properties
    // jqxChartComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.title = 
    // jqxChartComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('title', arg);
        }
        else {
            return this.host.jqxChart('title');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.description = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('description', arg);
        }
        else {
            return this.host.jqxChart('description');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.source = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('source', arg);
        }
        else {
            return this.host.jqxChart('source');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.showBorderLine = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showBorderLine', arg);
        }
        else {
            return this.host.jqxChart('showBorderLine');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.borderLineColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineColor', arg);
        }
        else {
            return this.host.jqxChart('borderLineColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.borderLineWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineWidth', arg);
        }
        else {
            return this.host.jqxChart('borderLineWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.backgroundColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundColor', arg);
        }
        else {
            return this.host.jqxChart('backgroundColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.backgroundImage = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundImage', arg);
        }
        else {
            return this.host.jqxChart('backgroundImage');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.showLegend = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showLegend', arg);
        }
        else {
            return this.host.jqxChart('showLegend');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.legendLayout = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('legendLayout', arg);
        }
        else {
            return this.host.jqxChart('legendLayout');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.padding = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('padding', arg);
        }
        else {
            return this.host.jqxChart('padding');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.titlePadding = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('titlePadding', arg);
        }
        else {
            return this.host.jqxChart('titlePadding');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.colorScheme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('colorScheme', arg);
        }
        else {
            return this.host.jqxChart('colorScheme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.greyScale = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('greyScale', arg);
        }
        else {
            return this.host.jqxChart('greyScale');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.showToolTips = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showToolTips', arg);
        }
        else {
            return this.host.jqxChart('showToolTips');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.toolTipShowDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipShowDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipShowDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.toolTipHideDelay = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipHideDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipHideDelay');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.toolTipMoveDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipMoveDuration', arg);
        }
        else {
            return this.host.jqxChart('toolTipMoveDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.drawBefore = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('drawBefore', arg);
        }
        else {
            return this.host.jqxChart('drawBefore');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.draw = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('draw', arg);
        }
        else {
            return this.host.jqxChart('draw');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('rtl', arg);
        }
        else {
            return this.host.jqxChart('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.enableCrosshairs = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableCrosshairs', arg);
        }
        else {
            return this.host.jqxChart('enableCrosshairs');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.crosshairsColor = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsColor', arg);
        }
        else {
            return this.host.jqxChart('crosshairsColor');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.crosshairsDashStyle = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsDashStyle', arg);
        }
        else {
            return this.host.jqxChart('crosshairsDashStyle');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.crosshairsLineWidth = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsLineWidth', arg);
        }
        else {
            return this.host.jqxChart('crosshairsLineWidth');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.columnSeriesOverlap = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('columnSeriesOverlap', arg);
        }
        else {
            return this.host.jqxChart('columnSeriesOverlap');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.enabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enabled', arg);
        }
        else {
            return this.host.jqxChart('enabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.enableAnimations = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAnimations', arg);
        }
        else {
            return this.host.jqxChart('enableAnimations');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.animationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('animationDuration', arg);
        }
        else {
            return this.host.jqxChart('animationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.enableAxisTextAnimation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAxisTextAnimation', arg);
        }
        else {
            return this.host.jqxChart('enableAxisTextAnimation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.renderEngine = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('renderEngine', arg);
        }
        else {
            return this.host.jqxChart('renderEngine');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.xAxis = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('xAxis', arg);
        }
        else {
            return this.host.jqxChart('xAxis');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.valueAxis = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('valueAxis', arg);
        }
        else {
            return this.host.jqxChart('valueAxis');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxChartComponent.prototype.seriesGroups = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('seriesGroups', arg);
        }
        else {
            return this.host.jqxChart('seriesGroups');
        }
    };
    // jqxChartComponent functions
    // jqxChartComponent functions
    /**
     * @return {?}
     */
    jqxChartComponent.prototype.getInstance = 
    // jqxChartComponent functions
    /**
     * @return {?}
     */
    function () {
        return this.host.jqxChart('getInstance');
    };
    /**
     * @return {?}
     */
    jqxChartComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxChart('refresh');
    };
    /**
     * @return {?}
     */
    jqxChartComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        this.host.jqxChart('update');
    };
    /**
     * @return {?}
     */
    jqxChartComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxChart('destroy');
    };
    /**
     * @param {?} schemeName
     * @param {?} colors
     * @return {?}
     */
    jqxChartComponent.prototype.addColorScheme = /**
     * @param {?} schemeName
     * @param {?} colors
     * @return {?}
     */
    function (schemeName, colors) {
        this.host.jqxChart('addColorScheme', schemeName, colors);
    };
    /**
     * @param {?} schemeName
     * @return {?}
     */
    jqxChartComponent.prototype.removeColorScheme = /**
     * @param {?} schemeName
     * @return {?}
     */
    function (schemeName) {
        this.host.jqxChart('removeColorScheme', schemeName);
    };
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @return {?}
     */
    jqxChartComponent.prototype.getItemsCount = /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @return {?}
     */
    function (groupIndex, serieIndex) {
        return this.host.jqxChart('getItemsCount', groupIndex, serieIndex);
    };
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    jqxChartComponent.prototype.getItemCoord = /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    function (groupIndex, serieIndex, itemIndex) {
        return this.host.jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);
    };
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    jqxChartComponent.prototype.getXAxisRect = /**
     * @param {?} groupIndex
     * @return {?}
     */
    function (groupIndex) {
        return this.host.jqxChart('getXAxisRect', groupIndex);
    };
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    jqxChartComponent.prototype.getXAxisLabels = /**
     * @param {?} groupIndex
     * @return {?}
     */
    function (groupIndex) {
        return this.host.jqxChart('getXAxisLabels', groupIndex);
    };
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    jqxChartComponent.prototype.getValueAxisRect = /**
     * @param {?} groupIndex
     * @return {?}
     */
    function (groupIndex) {
        return this.host.jqxChart('getValueAxisRect', groupIndex);
    };
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    jqxChartComponent.prototype.getValueAxisLabels = /**
     * @param {?} groupIndex
     * @return {?}
     */
    function (groupIndex) {
        return this.host.jqxChart('getValueAxisLabels', groupIndex);
    };
    /**
     * @param {?} colorScheme
     * @return {?}
     */
    jqxChartComponent.prototype.getColorScheme = /**
     * @param {?} colorScheme
     * @return {?}
     */
    function (colorScheme) {
        return this.host.jqxChart('getColorScheme', colorScheme);
    };
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    jqxChartComponent.prototype.hideSerie = /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    function (groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);
    };
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    jqxChartComponent.prototype.showSerie = /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    function (groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('showSerie', groupIndex, serieIndex, itemIndex);
    };
    /**
     * @param {?} hideDelay
     * @return {?}
     */
    jqxChartComponent.prototype.hideToolTip = /**
     * @param {?} hideDelay
     * @return {?}
     */
    function (hideDelay) {
        this.host.jqxChart('hideToolTip', hideDelay);
    };
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @param {?} showDelay
     * @param {?} hideDelay
     * @return {?}
     */
    jqxChartComponent.prototype.showToolTip = /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @param {?} showDelay
     * @param {?} hideDelay
     * @return {?}
     */
    function (groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        this.host.jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
    };
    /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    jqxChartComponent.prototype.saveAsJPEG = /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    function (fileName, exportServerUrl) {
        this.host.jqxChart('saveAsJPEG', fileName, exportServerUrl);
    };
    /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    jqxChartComponent.prototype.saveAsPNG = /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    function (fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPNG', fileName, exportServerUrl);
    };
    /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    jqxChartComponent.prototype.saveAsPDF = /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    function (fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPDF', fileName, exportServerUrl);
    };
    /**
     * @param {?} offset
     * @param {?} groupIndex
     * @return {?}
     */
    jqxChartComponent.prototype.getXAxisValue = /**
     * @param {?} offset
     * @param {?} groupIndex
     * @return {?}
     */
    function (offset, groupIndex) {
        return this.host.jqxChart('getXAxisValue', offset, groupIndex);
    };
    /**
     * @param {?} offset
     * @param {?} groupIndex
     * @return {?}
     */
    jqxChartComponent.prototype.getValueAxisValue = /**
     * @param {?} offset
     * @param {?} groupIndex
     * @return {?}
     */
    function (offset, groupIndex) {
        return this.host.jqxChart('getValueAxisValue', offset, groupIndex);
    };
    /**
     * @return {?}
     */
    jqxChartComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('toggle', function (eventData) { _this.onToggle.emit(eventData); });
        this.host.on('click', function (eventData) { _this.onClick.emit(eventData); });
        this.host.on('refreshBegin', function (eventData) { _this.onRefreshBegin.emit(eventData); });
        this.host.on('refreshEnd', function (eventData) { _this.onRefreshEnd.emit(eventData); });
        this.host.on('rangeSelectionChanging', function (eventData) { _this.onRangeSelectionChanging.emit(eventData); });
        this.host.on('rangeSelectionChanged', function (eventData) { _this.onRangeSelectionChanged.emit(eventData); });
    };
    jqxChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxChart',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxChartComponent.propDecorators = {
        attrTitle: [{ type: Input, args: ['title',] }],
        attrDescription: [{ type: Input, args: ['description',] }],
        attrSource: [{ type: Input, args: ['source',] }],
        attrShowBorderLine: [{ type: Input, args: ['showBorderLine',] }],
        attrBorderLineColor: [{ type: Input, args: ['borderLineColor',] }],
        attrBorderLineWidth: [{ type: Input, args: ['borderLineWidth',] }],
        attrBackgroundColor: [{ type: Input, args: ['backgroundColor',] }],
        attrBackgroundImage: [{ type: Input, args: ['backgroundImage',] }],
        attrShowLegend: [{ type: Input, args: ['showLegend',] }],
        attrLegendLayout: [{ type: Input, args: ['legendLayout',] }],
        attrPadding: [{ type: Input, args: ['padding',] }],
        attrTitlePadding: [{ type: Input, args: ['titlePadding',] }],
        attrColorScheme: [{ type: Input, args: ['colorScheme',] }],
        attrGreyScale: [{ type: Input, args: ['greyScale',] }],
        attrShowToolTips: [{ type: Input, args: ['showToolTips',] }],
        attrToolTipShowDelay: [{ type: Input, args: ['toolTipShowDelay',] }],
        attrToolTipHideDelay: [{ type: Input, args: ['toolTipHideDelay',] }],
        attrToolTipMoveDuration: [{ type: Input, args: ['toolTipMoveDuration',] }],
        attrDrawBefore: [{ type: Input, args: ['drawBefore',] }],
        attrDraw: [{ type: Input, args: ['draw',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrEnableCrosshairs: [{ type: Input, args: ['enableCrosshairs',] }],
        attrCrosshairsColor: [{ type: Input, args: ['crosshairsColor',] }],
        attrCrosshairsDashStyle: [{ type: Input, args: ['crosshairsDashStyle',] }],
        attrCrosshairsLineWidth: [{ type: Input, args: ['crosshairsLineWidth',] }],
        attrColumnSeriesOverlap: [{ type: Input, args: ['columnSeriesOverlap',] }],
        attrEnabled: [{ type: Input, args: ['enabled',] }],
        attrEnableAnimations: [{ type: Input, args: ['enableAnimations',] }],
        attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
        attrEnableAxisTextAnimation: [{ type: Input, args: ['enableAxisTextAnimation',] }],
        attrRenderEngine: [{ type: Input, args: ['renderEngine',] }],
        attrXAxis: [{ type: Input, args: ['xAxis',] }],
        attrValueAxis: [{ type: Input, args: ['valueAxis',] }],
        attrSeriesGroups: [{ type: Input, args: ['seriesGroups',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onToggle: [{ type: Output }],
        onClick: [{ type: Output }],
        onRefreshBegin: [{ type: Output }],
        onRefreshEnd: [{ type: Output }],
        onRangeSelectionChanging: [{ type: Output }],
        onRangeSelectionChanged: [{ type: Output }]
    };
    return jqxChartComponent;
}()); //jqxChartComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxChartModule = /** @class */ (function () {
    function jqxChartModule() {
    }
    jqxChartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxChartComponent],
                    exports: [jqxChartComponent]
                },] }
    ];
    return jqxChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxChartComponent, jqxChartModule };

