import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxchartcore from '../../jqwidgets-scripts/jqwidgets/jqxchart.core';
import * as jqxchartapi from '../../jqwidgets-scripts/jqwidgets/jqxchart.api';
import * as jqxchartannotations from '../../jqwidgets-scripts/jqwidgets/jqxchart.annotations';
import * as jqxchartrangeselector from '../../jqwidgets-scripts/jqwidgets/jqxchart.rangeselector';
import * as jqxchartwaterfall from '../../jqwidgets-scripts/jqwidgets/jqxchart.waterfall';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
        JQXLite(window).resize((/**
         * @return {?}
         */
        function () {
            _this.__updateRect__();
        }));
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
    ;
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
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
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
    jqxChartComponent.prototype.categoryAxis = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxChart('categoryAxis', arg);
        }
        else {
            return this.host.jqxChart('categoryAxis');
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
        this.host.on('toggle', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onToggle.emit(eventData); }));
        this.host.on('click', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onClick.emit(eventData); }));
        this.host.on('refreshBegin', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRefreshBegin.emit(eventData); }));
        this.host.on('refreshEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRefreshEnd.emit(eventData); }));
        this.host.on('rangeSelectionChanging', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRangeSelectionChanging.emit(eventData); }));
        this.host.on('rangeSelectionChanged', (/**
         * @param {?} eventData
         * @return {?}
         */
        function (eventData) { _this.onRangeSelectionChanged.emit(eventData); }));
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
        attrCategoryAxis: [{ type: Input, args: ['categoryAxis',] }],
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
export { jqxChartComponent };
if (false) {
    /** @type {?} */
    jqxChartComponent.prototype.attrTitle;
    /** @type {?} */
    jqxChartComponent.prototype.attrDescription;
    /** @type {?} */
    jqxChartComponent.prototype.attrSource;
    /** @type {?} */
    jqxChartComponent.prototype.attrShowBorderLine;
    /** @type {?} */
    jqxChartComponent.prototype.attrBorderLineColor;
    /** @type {?} */
    jqxChartComponent.prototype.attrBorderLineWidth;
    /** @type {?} */
    jqxChartComponent.prototype.attrBackgroundColor;
    /** @type {?} */
    jqxChartComponent.prototype.attrBackgroundImage;
    /** @type {?} */
    jqxChartComponent.prototype.attrShowLegend;
    /** @type {?} */
    jqxChartComponent.prototype.attrLegendLayout;
    /** @type {?} */
    jqxChartComponent.prototype.attrPadding;
    /** @type {?} */
    jqxChartComponent.prototype.attrTitlePadding;
    /** @type {?} */
    jqxChartComponent.prototype.attrColorScheme;
    /** @type {?} */
    jqxChartComponent.prototype.attrGreyScale;
    /** @type {?} */
    jqxChartComponent.prototype.attrShowToolTips;
    /** @type {?} */
    jqxChartComponent.prototype.attrToolTipShowDelay;
    /** @type {?} */
    jqxChartComponent.prototype.attrToolTipHideDelay;
    /** @type {?} */
    jqxChartComponent.prototype.attrToolTipMoveDuration;
    /** @type {?} */
    jqxChartComponent.prototype.attrDrawBefore;
    /** @type {?} */
    jqxChartComponent.prototype.attrDraw;
    /** @type {?} */
    jqxChartComponent.prototype.attrRtl;
    /** @type {?} */
    jqxChartComponent.prototype.attrEnableCrosshairs;
    /** @type {?} */
    jqxChartComponent.prototype.attrCrosshairsColor;
    /** @type {?} */
    jqxChartComponent.prototype.attrCrosshairsDashStyle;
    /** @type {?} */
    jqxChartComponent.prototype.attrCrosshairsLineWidth;
    /** @type {?} */
    jqxChartComponent.prototype.attrColumnSeriesOverlap;
    /** @type {?} */
    jqxChartComponent.prototype.attrEnabled;
    /** @type {?} */
    jqxChartComponent.prototype.attrEnableAnimations;
    /** @type {?} */
    jqxChartComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxChartComponent.prototype.attrEnableAxisTextAnimation;
    /** @type {?} */
    jqxChartComponent.prototype.attrRenderEngine;
    /** @type {?} */
    jqxChartComponent.prototype.attrXAxis;
    /** @type {?} */
    jqxChartComponent.prototype.attrValueAxis;
    /** @type {?} */
    jqxChartComponent.prototype.attrCategoryAxis;
    /** @type {?} */
    jqxChartComponent.prototype.attrSeriesGroups;
    /** @type {?} */
    jqxChartComponent.prototype.attrWidth;
    /** @type {?} */
    jqxChartComponent.prototype.attrHeight;
    /** @type {?} */
    jqxChartComponent.prototype.autoCreate;
    /** @type {?} */
    jqxChartComponent.prototype.properties;
    /** @type {?} */
    jqxChartComponent.prototype.host;
    /** @type {?} */
    jqxChartComponent.prototype.elementRef;
    /** @type {?} */
    jqxChartComponent.prototype.widgetObject;
    /** @type {?} */
    jqxChartComponent.prototype.onToggle;
    /** @type {?} */
    jqxChartComponent.prototype.onClick;
    /** @type {?} */
    jqxChartComponent.prototype.onRefreshBegin;
    /** @type {?} */
    jqxChartComponent.prototype.onRefreshEnd;
    /** @type {?} */
    jqxChartComponent.prototype.onRangeSelectionChanging;
    /** @type {?} */
    jqxChartComponent.prototype.onRangeSelectionChanged;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhjaGFydC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Y2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw2Q0FBNkM7O0FBRzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUc3RztJQW9ERywyQkFBWSxnQkFBNEI7UUFBeEMsaUJBS0M7UUFacUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUVqRCxlQUFVLEdBQWEsQ0FBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsa0JBQWtCLEVBQUMscUJBQXFCLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUMsaUJBQWlCLEVBQUMscUJBQXFCLEVBQUMscUJBQXFCLEVBQUMscUJBQXFCLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG1CQUFtQixFQUFDLHlCQUF5QixFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLGNBQWMsRUFBQyxjQUFjLENBQUMsQ0FBQzs7UUErZTlpQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xDLDZCQUF3QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7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QXlEOztJQUN6RCxrREFBMEQ7O0lBQzFELHdEQUF1RTs7SUFDdkUsNkNBQWdEOztJQUNoRCxzQ0FBZ0Q7O0lBQ2hELDBDQUE0RDs7SUFDNUQsNkNBQTZDOztJQUM3Qyw2Q0FBMkU7O0lBQzNFLHNDQUEyQzs7SUFDM0MsdUNBQTZDOztJQUU3Qyx1Q0FBaUQ7O0lBRWpELHVDQUF3akI7O0lBQ3hqQixpQ0FBVTs7SUFDVix1Q0FBdUI7O0lBQ3ZCLHlDQUFrQzs7SUE0ZWxDLHFDQUF3Qzs7SUFDeEMsb0NBQXVDOztJQUN2QywyQ0FBOEM7O0lBQzlDLHlDQUE0Qzs7SUFDNUMscURBQXdEOztJQUN4RCxvREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeENoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCd0aXRsZScpIGF0dHJUaXRsZTogc3RyaW5nO1xuICAgQElucHV0KCdkZXNjcmlwdGlvbicpIGF0dHJEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3Nob3dCb3JkZXJMaW5lJykgYXR0clNob3dCb3JkZXJMaW5lOiBib29sZWFuO1xuICAgQElucHV0KCdib3JkZXJMaW5lQ29sb3InKSBhdHRyQm9yZGVyTGluZUNvbG9yOiBzdHJpbmc7XG4gICBASW5wdXQoJ2JvcmRlckxpbmVXaWR0aCcpIGF0dHJCb3JkZXJMaW5lV2lkdGg6IG51bWJlcjtcbiAgIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYXR0ckJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgQElucHV0KCdiYWNrZ3JvdW5kSW1hZ2UnKSBhdHRyQmFja2dyb3VuZEltYWdlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Nob3dMZWdlbmQnKSBhdHRyU2hvd0xlZ2VuZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbGVnZW5kTGF5b3V0JykgYXR0ckxlZ2VuZExheW91dDoganF3aWRnZXRzLkNoYXJ0TGVnZW5kTGF5b3V0O1xuICAgQElucHV0KCdwYWRkaW5nJykgYXR0clBhZGRpbmc6IGpxd2lkZ2V0cy5DaGFydFBhZGRpbmc7XG4gICBASW5wdXQoJ3RpdGxlUGFkZGluZycpIGF0dHJUaXRsZVBhZGRpbmc6IGpxd2lkZ2V0cy5DaGFydFBhZGRpbmc7XG4gICBASW5wdXQoJ2NvbG9yU2NoZW1lJykgYXR0ckNvbG9yU2NoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ2dyZXlTY2FsZScpIGF0dHJHcmV5U2NhbGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dUb29sVGlwcycpIGF0dHJTaG93VG9vbFRpcHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Rvb2xUaXBTaG93RGVsYXknKSBhdHRyVG9vbFRpcFNob3dEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCd0b29sVGlwSGlkZURlbGF5JykgYXR0clRvb2xUaXBIaWRlRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgndG9vbFRpcE1vdmVEdXJhdGlvbicpIGF0dHJUb29sVGlwTW92ZUR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2RyYXdCZWZvcmUnKSBhdHRyRHJhd0JlZm9yZTogKHJlbmRlcmVyPzoganF3aWRnZXRzLkNoYXJ0RHJhd0JlZm9yZVsncmVuZGVyZXInXSwgcmVjdD86IGpxd2lkZ2V0cy5DaGFydERyYXdCZWZvcmVbJ3JlY3QnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnZHJhdycpIGF0dHJEcmF3OiAocmVuZGVyZXI/OiBqcXdpZGdldHMuQ2hhcnREcmF3WydyZW5kZXJlciddLCByZWN0PzoganF3aWRnZXRzLkNoYXJ0RHJhd1sncmVjdCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVDcm9zc2hhaXJzJykgYXR0ckVuYWJsZUNyb3NzaGFpcnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Nyb3NzaGFpcnNDb2xvcicpIGF0dHJDcm9zc2hhaXJzQ29sb3I6IHN0cmluZztcbiAgIEBJbnB1dCgnY3Jvc3NoYWlyc0Rhc2hTdHlsZScpIGF0dHJDcm9zc2hhaXJzRGFzaFN0eWxlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Nyb3NzaGFpcnNMaW5lV2lkdGgnKSBhdHRyQ3Jvc3NoYWlyc0xpbmVXaWR0aDogbnVtYmVyO1xuICAgQElucHV0KCdjb2x1bW5TZXJpZXNPdmVybGFwJykgYXR0ckNvbHVtblNlcmllc092ZXJsYXA6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZWQnKSBhdHRyRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlQW5pbWF0aW9ucycpIGF0dHJFbmFibGVBbmltYXRpb25zOiBib29sZWFuO1xuICAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGF0dHJBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdlbmFibGVBeGlzVGV4dEFuaW1hdGlvbicpIGF0dHJFbmFibGVBeGlzVGV4dEFuaW1hdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVuZGVyRW5naW5lJykgYXR0clJlbmRlckVuZ2luZTogc3RyaW5nO1xuICAgQElucHV0KCd4QXhpcycpIGF0dHJYQXhpczoganF3aWRnZXRzLkNoYXJ0WEF4aXM7XG4gICBASW5wdXQoJ3ZhbHVlQXhpcycpIGF0dHJWYWx1ZUF4aXM6IGpxd2lkZ2V0cy5DaGFydFZhbHVlQXhpcztcbiAgIEBJbnB1dCgnY2F0ZWdvcnlBeGlzJykgYXR0ckNhdGVnb3J5QXhpczogYW55O1xuICAgQElucHV0KCdzZXJpZXNHcm91cHMnKSBhdHRyU2VyaWVzR3JvdXBzOiBBcnJheTxqcXdpZGdldHMuQ2hhcnRTZXJpZXNHcm91cD47XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsndGl0bGUnLCdkZXNjcmlwdGlvbicsJ3NvdXJjZScsJ3Nob3dCb3JkZXJMaW5lJywnYm9yZGVyTGluZUNvbG9yJywnYm9yZGVyTGluZVdpZHRoJywnYmFja2dyb3VuZENvbG9yJywnYmFja2dyb3VuZEltYWdlJywnc2hvd0xlZ2VuZCcsJ2xlZ2VuZExheW91dCcsJ3BhZGRpbmcnLCd0aXRsZVBhZGRpbmcnLCdjb2xvclNjaGVtZScsJ2dyZXlTY2FsZScsJ3Nob3dUb29sVGlwcycsJ3Rvb2xUaXBTaG93RGVsYXknLCd0b29sVGlwSGlkZURlbGF5JywndG9vbFRpcE1vdmVEdXJhdGlvbicsJ2RyYXdCZWZvcmUnLCdkcmF3JywncnRsJywnZW5hYmxlQ3Jvc3NoYWlycycsJ2Nyb3NzaGFpcnNDb2xvcicsJ2Nyb3NzaGFpcnNEYXNoU3R5bGUnLCdjcm9zc2hhaXJzTGluZVdpZHRoJywnY29sdW1uU2VyaWVzT3ZlcmxhcCcsJ2VuYWJsZWQnLCdlbmFibGVBbmltYXRpb25zJywnYW5pbWF0aW9uRHVyYXRpb24nLCdlbmFibGVBeGlzVGV4dEFuaW1hdGlvbicsJ3JlbmRlckVuZ2luZScsJ3hBeGlzJywndmFsdWVBeGlzJywnY2F0ZWdvcnlBeGlzJywnc2VyaWVzR3JvdXBzJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeENoYXJ0O1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgICAgSlFYTGl0ZSh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2F0dHJXaWR0aCcpIHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2F0dHJIZWlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgICAgICAgfVxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4Q2hhcnQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeENoYXJ0KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4Q2hhcnQnLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhDaGFydENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICB0aXRsZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCd0aXRsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3RpdGxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRlc2NyaXB0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Rlc2NyaXB0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZGVzY3JpcHRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93Qm9yZGVyTGluZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dCb3JkZXJMaW5lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnc2hvd0JvcmRlckxpbmUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYm9yZGVyTGluZUNvbG9yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2JvcmRlckxpbmVDb2xvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2JvcmRlckxpbmVDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBib3JkZXJMaW5lV2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnYm9yZGVyTGluZVdpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnYm9yZGVyTGluZVdpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGJhY2tncm91bmRDb2xvcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdiYWNrZ3JvdW5kQ29sb3InLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdiYWNrZ3JvdW5kQ29sb3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYmFja2dyb3VuZEltYWdlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2JhY2tncm91bmRJbWFnZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2JhY2tncm91bmRJbWFnZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93TGVnZW5kKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnc2hvd0xlZ2VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dMZWdlbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGVnZW5kTGF5b3V0KGFyZz86IGpxd2lkZ2V0cy5DaGFydExlZ2VuZExheW91dCk6IGpxd2lkZ2V0cy5DaGFydExlZ2VuZExheW91dCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2xlZ2VuZExheW91dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2xlZ2VuZExheW91dCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWRkaW5nKGFyZz86IGpxd2lkZ2V0cy5DaGFydFBhZGRpbmcpOiBqcXdpZGdldHMuQ2hhcnRQYWRkaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgncGFkZGluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3BhZGRpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGl0bGVQYWRkaW5nKGFyZz86IGpxd2lkZ2V0cy5DaGFydFBhZGRpbmcpOiBqcXdpZGdldHMuQ2hhcnRQYWRkaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgndGl0bGVQYWRkaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgndGl0bGVQYWRkaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbG9yU2NoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2NvbG9yU2NoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnY29sb3JTY2hlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JleVNjYWxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZ3JleVNjYWxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZ3JleVNjYWxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dUb29sVGlwcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dUb29sVGlwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dUb29sVGlwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sVGlwU2hvd0RlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Rvb2xUaXBTaG93RGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCd0b29sVGlwU2hvd0RlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2xUaXBIaWRlRGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgndG9vbFRpcEhpZGVEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Rvb2xUaXBIaWRlRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbFRpcE1vdmVEdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCd0b29sVGlwTW92ZUR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgndG9vbFRpcE1vdmVEdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmF3QmVmb3JlKGFyZz86IChyZW5kZXJlcj86IGpxd2lkZ2V0cy5DaGFydERyYXdCZWZvcmVbJ3JlbmRlcmVyJ10sIHJlY3Q/OiBqcXdpZGdldHMuQ2hhcnREcmF3QmVmb3JlWydyZWN0J10pID0+IHZvaWQpOiAocmVuZGVyZXI/OiBqcXdpZGdldHMuQ2hhcnREcmF3QmVmb3JlWydyZW5kZXJlciddLCByZWN0PzoganF3aWRnZXRzLkNoYXJ0RHJhd0JlZm9yZVsncmVjdCddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZHJhd0JlZm9yZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2RyYXdCZWZvcmUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhdyhhcmc/OiAocmVuZGVyZXI/OiBqcXdpZGdldHMuQ2hhcnREcmF3WydyZW5kZXJlciddLCByZWN0PzoganF3aWRnZXRzLkNoYXJ0RHJhd1sncmVjdCddKSA9PiB2b2lkKTogKHJlbmRlcmVyPzoganF3aWRnZXRzLkNoYXJ0RHJhd1sncmVuZGVyZXInXSwgcmVjdD86IGpxd2lkZ2V0cy5DaGFydERyYXdbJ3JlY3QnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2RyYXcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdkcmF3Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVDcm9zc2hhaXJzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZW5hYmxlQ3Jvc3NoYWlycycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2VuYWJsZUNyb3NzaGFpcnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY3Jvc3NoYWlyc0NvbG9yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Nyb3NzaGFpcnNDb2xvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Nyb3NzaGFpcnNDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjcm9zc2hhaXJzRGFzaFN0eWxlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Nyb3NzaGFpcnNEYXNoU3R5bGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdjcm9zc2hhaXJzRGFzaFN0eWxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNyb3NzaGFpcnNMaW5lV2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnY3Jvc3NoYWlyc0xpbmVXaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Nyb3NzaGFpcnNMaW5lV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uU2VyaWVzT3ZlcmxhcChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2NvbHVtblNlcmllc092ZXJsYXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdjb2x1bW5TZXJpZXNPdmVybGFwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdlbmFibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZW5hYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVBbmltYXRpb25zKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZW5hYmxlQW5pbWF0aW9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2VuYWJsZUFuaW1hdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnYW5pbWF0aW9uRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdhbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVBeGlzVGV4dEFuaW1hdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2VuYWJsZUF4aXNUZXh0QW5pbWF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZW5hYmxlQXhpc1RleHRBbmltYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyRW5naW5lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3JlbmRlckVuZ2luZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3JlbmRlckVuZ2luZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB4QXhpcyhhcmc/OiBqcXdpZGdldHMuQ2hhcnRYQXhpcyk6IGpxd2lkZ2V0cy5DaGFydFhBeGlzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgneEF4aXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCd4QXhpcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZUF4aXMoYXJnPzoganF3aWRnZXRzLkNoYXJ0VmFsdWVBeGlzKToganF3aWRnZXRzLkNoYXJ0VmFsdWVBeGlzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgndmFsdWVBeGlzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgndmFsdWVBeGlzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNhdGVnb3J5QXhpcyhhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdjYXRlZ29yeUF4aXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdjYXRlZ29yeUF4aXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VyaWVzR3JvdXBzKGFyZz86IEFycmF5PGpxd2lkZ2V0cy5DaGFydFNlcmllc0dyb3VwPik6IEFycmF5PGpxd2lkZ2V0cy5DaGFydFNlcmllc0dyb3VwPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nlcmllc0dyb3VwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nlcmllc0dyb3VwcycpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeENoYXJ0Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZ2V0SW5zdGFuY2UoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2dldEluc3RhbmNlJyk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCd1cGRhdGUnKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBhZGRDb2xvclNjaGVtZShzY2hlbWVOYW1lOiBzdHJpbmcsIGNvbG9yczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdhZGRDb2xvclNjaGVtZScsIHNjaGVtZU5hbWUsIGNvbG9ycyk7XG4gICB9XG5cbiAgIHJlbW92ZUNvbG9yU2NoZW1lKHNjaGVtZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdyZW1vdmVDb2xvclNjaGVtZScsIHNjaGVtZU5hbWUpO1xuICAgfVxuXG4gICBnZXRJdGVtc0NvdW50KGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2dldEl0ZW1zQ291bnQnLCBncm91cEluZGV4LCBzZXJpZUluZGV4KTtcbiAgIH1cblxuICAgZ2V0SXRlbUNvb3JkKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdnZXRJdGVtQ29vcmQnLCBncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgfVxuXG4gICBnZXRYQXhpc1JlY3QoZ3JvdXBJbmRleDogbnVtYmVyKToganF3aWRnZXRzLkNoYXJ0UmVjdCB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdnZXRYQXhpc1JlY3QnLCBncm91cEluZGV4KTtcbiAgIH1cblxuICAgZ2V0WEF4aXNMYWJlbHMoZ3JvdXBJbmRleDogbnVtYmVyKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdnZXRYQXhpc0xhYmVscycsIGdyb3VwSW5kZXgpO1xuICAgfVxuXG4gICBnZXRWYWx1ZUF4aXNSZWN0KGdyb3VwSW5kZXg6IG51bWJlcik6IGpxd2lkZ2V0cy5DaGFydFJlY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZ2V0VmFsdWVBeGlzUmVjdCcsIGdyb3VwSW5kZXgpO1xuICAgfVxuXG4gICBnZXRWYWx1ZUF4aXNMYWJlbHMoZ3JvdXBJbmRleDogbnVtYmVyKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdnZXRWYWx1ZUF4aXNMYWJlbHMnLCBncm91cEluZGV4KTtcbiAgIH1cblxuICAgZ2V0Q29sb3JTY2hlbWUoY29sb3JTY2hlbWU6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZ2V0Q29sb3JTY2hlbWUnLCBjb2xvclNjaGVtZSk7XG4gICB9XG5cbiAgIGhpZGVTZXJpZShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnaGlkZVNlcmllJywgZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4KTtcbiAgIH1cblxuICAgc2hvd1NlcmllKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdzaG93U2VyaWUnLCBncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgfVxuXG4gICBoaWRlVG9vbFRpcChoaWRlRGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdoaWRlVG9vbFRpcCcsIGhpZGVEZWxheSk7XG4gICB9XG5cbiAgIHNob3dUb29sVGlwKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlciwgc2hvd0RlbGF5OiBudW1iZXIsIGhpZGVEZWxheTogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dUb29sVGlwJywgZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4LCBzaG93RGVsYXksIGhpZGVEZWxheSk7XG4gICB9XG5cbiAgIHNhdmVBc0pQRUcoZmlsZU5hbWU6IHN0cmluZywgZXhwb3J0U2VydmVyVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnc2F2ZUFzSlBFRycsIGZpbGVOYW1lLCBleHBvcnRTZXJ2ZXJVcmwpO1xuICAgfVxuXG4gICBzYXZlQXNQTkcoZmlsZU5hbWU6IHN0cmluZywgZXhwb3J0U2VydmVyVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnc2F2ZUFzUE5HJywgZmlsZU5hbWUsIGV4cG9ydFNlcnZlclVybCk7XG4gICB9XG5cbiAgIHNhdmVBc1BERihmaWxlTmFtZTogc3RyaW5nLCBleHBvcnRTZXJ2ZXJVcmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdzYXZlQXNQREYnLCBmaWxlTmFtZSwgZXhwb3J0U2VydmVyVXJsKTtcbiAgIH1cblxuICAgZ2V0WEF4aXNWYWx1ZShvZmZzZXQ6IG51bWJlciwgZ3JvdXBJbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2dldFhBeGlzVmFsdWUnLCBvZmZzZXQsIGdyb3VwSW5kZXgpO1xuICAgfVxuXG4gICBnZXRWYWx1ZUF4aXNWYWx1ZShvZmZzZXQ6IG51bWJlciwgZ3JvdXBJbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2dldFZhbHVlQXhpc1ZhbHVlJywgb2Zmc2V0LCBncm91cEluZGV4KTtcbiAgIH1cblxuXG4gICAvLyBqcXhDaGFydENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvblRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVmcmVzaEJlZ2luID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVmcmVzaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJhbmdlU2VsZWN0aW9uQ2hhbmdpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25SYW5nZVNlbGVjdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCd0b2dnbGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblRvZ2dsZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVmcmVzaEJlZ2luJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SZWZyZXNoQmVnaW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVmcmVzaEVuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmVmcmVzaEVuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyYW5nZVNlbGVjdGlvbkNoYW5naW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SYW5nZVNlbGVjdGlvbkNoYW5naW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmFuZ2VTZWxlY3Rpb25DaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhDaGFydENvbXBvbmVudFxuIl19