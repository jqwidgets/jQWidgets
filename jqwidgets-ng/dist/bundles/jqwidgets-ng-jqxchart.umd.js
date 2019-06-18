require('../../jqwidgets-scripts/jqwidgets/jqxcore');
require('../../jqwidgets-scripts/jqwidgets/jqxdata');
require('../../jqwidgets-scripts/jqwidgets/jqxdata.export');
require('../../jqwidgets-scripts/jqwidgets/jqxdraw');
require('../../jqwidgets-scripts/jqwidgets/jqxchart.core');
require('../../jqwidgets-scripts/jqwidgets/jqxchart.api');
require('../../jqwidgets-scripts/jqwidgets/jqxchart.annotations');
require('../../jqwidgets-scripts/jqwidgets/jqxchart.rangeselector');
require('../../jqwidgets-scripts/jqwidgets/jqxchart.waterfall');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxchart', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxchart = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /// <reference path="../../jqwidgets.d.ts" />
    var jqxChartComponent = /** @class */ (function () {
        function jqxChartComponent(containerElement) {
            var _this = this;
            this.autoCreate = true;
            this.properties = ['title', 'description', 'source', 'showBorderLine', 'borderLineColor', 'borderLineWidth', 'backgroundColor', 'backgroundImage', 'showLegend', 'legendLayout', 'padding', 'titlePadding', 'colorScheme', 'greyScale', 'showToolTips', 'toolTipShowDelay', 'toolTipHideDelay', 'toolTipMoveDuration', 'drawBefore', 'draw', 'rtl', 'enableCrosshairs', 'crosshairsColor', 'crosshairsDashStyle', 'crosshairsLineWidth', 'columnSeriesOverlap', 'enabled', 'enableAnimations', 'animationDuration', 'enableAxisTextAnimation', 'renderEngine', 'xAxis', 'valueAxis', 'categoryAxis', 'seriesGroups'];
            // jqxChartComponent events
            this.onToggle = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
            this.onRefreshBegin = new core.EventEmitter();
            this.onRefreshEnd = new core.EventEmitter();
            this.onRangeSelectionChanging = new core.EventEmitter();
            this.onRangeSelectionChanged = new core.EventEmitter();
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
                (_a = childEl.classList).add.apply(_a, __spread(classes));
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
        __decorate([
            core.Input('title'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrTitle", void 0);
        __decorate([
            core.Input('description'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrDescription", void 0);
        __decorate([
            core.Input('source'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrSource", void 0);
        __decorate([
            core.Input('showBorderLine'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrShowBorderLine", void 0);
        __decorate([
            core.Input('borderLineColor'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrBorderLineColor", void 0);
        __decorate([
            core.Input('borderLineWidth'),
            __metadata("design:type", Number)
        ], jqxChartComponent.prototype, "attrBorderLineWidth", void 0);
        __decorate([
            core.Input('backgroundColor'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrBackgroundColor", void 0);
        __decorate([
            core.Input('backgroundImage'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrBackgroundImage", void 0);
        __decorate([
            core.Input('showLegend'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrShowLegend", void 0);
        __decorate([
            core.Input('legendLayout'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrLegendLayout", void 0);
        __decorate([
            core.Input('padding'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrPadding", void 0);
        __decorate([
            core.Input('titlePadding'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrTitlePadding", void 0);
        __decorate([
            core.Input('colorScheme'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrColorScheme", void 0);
        __decorate([
            core.Input('greyScale'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrGreyScale", void 0);
        __decorate([
            core.Input('showToolTips'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrShowToolTips", void 0);
        __decorate([
            core.Input('toolTipShowDelay'),
            __metadata("design:type", Number)
        ], jqxChartComponent.prototype, "attrToolTipShowDelay", void 0);
        __decorate([
            core.Input('toolTipHideDelay'),
            __metadata("design:type", Number)
        ], jqxChartComponent.prototype, "attrToolTipHideDelay", void 0);
        __decorate([
            core.Input('toolTipMoveDuration'),
            __metadata("design:type", Number)
        ], jqxChartComponent.prototype, "attrToolTipMoveDuration", void 0);
        __decorate([
            core.Input('drawBefore'),
            __metadata("design:type", Function)
        ], jqxChartComponent.prototype, "attrDrawBefore", void 0);
        __decorate([
            core.Input('draw'),
            __metadata("design:type", Function)
        ], jqxChartComponent.prototype, "attrDraw", void 0);
        __decorate([
            core.Input('rtl'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrRtl", void 0);
        __decorate([
            core.Input('enableCrosshairs'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrEnableCrosshairs", void 0);
        __decorate([
            core.Input('crosshairsColor'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrCrosshairsColor", void 0);
        __decorate([
            core.Input('crosshairsDashStyle'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrCrosshairsDashStyle", void 0);
        __decorate([
            core.Input('crosshairsLineWidth'),
            __metadata("design:type", Number)
        ], jqxChartComponent.prototype, "attrCrosshairsLineWidth", void 0);
        __decorate([
            core.Input('columnSeriesOverlap'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrColumnSeriesOverlap", void 0);
        __decorate([
            core.Input('enabled'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrEnabled", void 0);
        __decorate([
            core.Input('enableAnimations'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrEnableAnimations", void 0);
        __decorate([
            core.Input('animationDuration'),
            __metadata("design:type", Number)
        ], jqxChartComponent.prototype, "attrAnimationDuration", void 0);
        __decorate([
            core.Input('enableAxisTextAnimation'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "attrEnableAxisTextAnimation", void 0);
        __decorate([
            core.Input('renderEngine'),
            __metadata("design:type", String)
        ], jqxChartComponent.prototype, "attrRenderEngine", void 0);
        __decorate([
            core.Input('xAxis'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrXAxis", void 0);
        __decorate([
            core.Input('valueAxis'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrValueAxis", void 0);
        __decorate([
            core.Input('categoryAxis'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrCategoryAxis", void 0);
        __decorate([
            core.Input('seriesGroups'),
            __metadata("design:type", Array)
        ], jqxChartComponent.prototype, "attrSeriesGroups", void 0);
        __decorate([
            core.Input('width'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrWidth", void 0);
        __decorate([
            core.Input('height'),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "attrHeight", void 0);
        __decorate([
            core.Input('auto-create'),
            __metadata("design:type", Boolean)
        ], jqxChartComponent.prototype, "autoCreate", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "onToggle", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "onClick", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "onRefreshBegin", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "onRefreshEnd", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "onRangeSelectionChanging", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], jqxChartComponent.prototype, "onRangeSelectionChanged", void 0);
        jqxChartComponent = __decorate([
            core.Component({
                selector: 'jqxChart',
                template: '<div><ng-content></ng-content></div>'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], jqxChartComponent);
        return jqxChartComponent;
    }()); //jqxChartComponent

    var jqxChartModule = /** @class */ (function () {
        function jqxChartModule() {
        }
        jqxChartModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [jqxChartComponent],
                exports: [jqxChartComponent]
            })
        ], jqxChartModule);
        return jqxChartModule;
    }());

    exports.jqxChartComponent = jqxChartComponent;
    exports.jqxChartModule = jqxChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=jqwidgets-ng-jqxchart.umd.js.map
