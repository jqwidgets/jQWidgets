import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets/jqxdata.export';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
import * as jqxchartcore from '../../jqwidgets/jqxchart.core';
import * as jqxchartapi from '../../jqwidgets/jqxchart.api';
import * as jqxchartannotations from '../../jqwidgets/jqxchart.annotations';
import * as jqxchartrangeselector from '../../jqwidgets/jqxchart.rangeselector';
import * as jqxchartwaterfall from '../../jqwidgets/jqxchart.waterfall';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxChartComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
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
        JQXLite(window).resize(() => {
            this.__updateRect__();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            if (changes.hasOwnProperty('attrWidth') || changes.hasOwnProperty('attrHeight')) {
                this.__updateRect__();
            }
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                let areEqual = false;
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
    }
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createComponent(options) {
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
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxChart('setOptions', options);
    }
    // jqxChartComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('title', arg);
        }
        else {
            return this.host.jqxChart('title');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    description(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('description', arg);
        }
        else {
            return this.host.jqxChart('description');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('source', arg);
        }
        else {
            return this.host.jqxChart('source');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showBorderLine(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showBorderLine', arg);
        }
        else {
            return this.host.jqxChart('showBorderLine');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    borderLineColor(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineColor', arg);
        }
        else {
            return this.host.jqxChart('borderLineColor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    borderLineWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineWidth', arg);
        }
        else {
            return this.host.jqxChart('borderLineWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    backgroundColor(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundColor', arg);
        }
        else {
            return this.host.jqxChart('backgroundColor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    backgroundImage(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundImage', arg);
        }
        else {
            return this.host.jqxChart('backgroundImage');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showLegend(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showLegend', arg);
        }
        else {
            return this.host.jqxChart('showLegend');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    legendLayout(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('legendLayout', arg);
        }
        else {
            return this.host.jqxChart('legendLayout');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    padding(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('padding', arg);
        }
        else {
            return this.host.jqxChart('padding');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    titlePadding(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('titlePadding', arg);
        }
        else {
            return this.host.jqxChart('titlePadding');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('colorScheme', arg);
        }
        else {
            return this.host.jqxChart('colorScheme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    greyScale(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('greyScale', arg);
        }
        else {
            return this.host.jqxChart('greyScale');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showToolTips(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showToolTips', arg);
        }
        else {
            return this.host.jqxChart('showToolTips');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toolTipShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipShowDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipShowDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toolTipHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipHideDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipHideDelay');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toolTipMoveDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipMoveDuration', arg);
        }
        else {
            return this.host.jqxChart('toolTipMoveDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    drawBefore(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('drawBefore', arg);
        }
        else {
            return this.host.jqxChart('drawBefore');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    draw(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('draw', arg);
        }
        else {
            return this.host.jqxChart('draw');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('rtl', arg);
        }
        else {
            return this.host.jqxChart('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableCrosshairs(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableCrosshairs', arg);
        }
        else {
            return this.host.jqxChart('enableCrosshairs');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    crosshairsColor(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsColor', arg);
        }
        else {
            return this.host.jqxChart('crosshairsColor');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    crosshairsDashStyle(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsDashStyle', arg);
        }
        else {
            return this.host.jqxChart('crosshairsDashStyle');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    crosshairsLineWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsLineWidth', arg);
        }
        else {
            return this.host.jqxChart('crosshairsLineWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    columnSeriesOverlap(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('columnSeriesOverlap', arg);
        }
        else {
            return this.host.jqxChart('columnSeriesOverlap');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enabled(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enabled', arg);
        }
        else {
            return this.host.jqxChart('enabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableAnimations(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAnimations', arg);
        }
        else {
            return this.host.jqxChart('enableAnimations');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('animationDuration', arg);
        }
        else {
            return this.host.jqxChart('animationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableAxisTextAnimation(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAxisTextAnimation', arg);
        }
        else {
            return this.host.jqxChart('enableAxisTextAnimation');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderEngine(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('renderEngine', arg);
        }
        else {
            return this.host.jqxChart('renderEngine');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    xAxis(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('xAxis', arg);
        }
        else {
            return this.host.jqxChart('xAxis');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    valueAxis(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('valueAxis', arg);
        }
        else {
            return this.host.jqxChart('valueAxis');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    seriesGroups(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('seriesGroups', arg);
        }
        else {
            return this.host.jqxChart('seriesGroups');
        }
    }
    // jqxChartComponent functions
    /**
     * @return {?}
     */
    getInstance() {
        return this.host.jqxChart('getInstance');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxChart('refresh');
    }
    /**
     * @return {?}
     */
    update() {
        this.host.jqxChart('update');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxChart('destroy');
    }
    /**
     * @param {?} schemeName
     * @param {?} colors
     * @return {?}
     */
    addColorScheme(schemeName, colors) {
        this.host.jqxChart('addColorScheme', schemeName, colors);
    }
    /**
     * @param {?} schemeName
     * @return {?}
     */
    removeColorScheme(schemeName) {
        this.host.jqxChart('removeColorScheme', schemeName);
    }
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @return {?}
     */
    getItemsCount(groupIndex, serieIndex) {
        return this.host.jqxChart('getItemsCount', groupIndex, serieIndex);
    }
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    getItemCoord(groupIndex, serieIndex, itemIndex) {
        return this.host.jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);
    }
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    getXAxisRect(groupIndex) {
        return this.host.jqxChart('getXAxisRect', groupIndex);
    }
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    getXAxisLabels(groupIndex) {
        return this.host.jqxChart('getXAxisLabels', groupIndex);
    }
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    getValueAxisRect(groupIndex) {
        return this.host.jqxChart('getValueAxisRect', groupIndex);
    }
    /**
     * @param {?} groupIndex
     * @return {?}
     */
    getValueAxisLabels(groupIndex) {
        return this.host.jqxChart('getValueAxisLabels', groupIndex);
    }
    /**
     * @param {?} colorScheme
     * @return {?}
     */
    getColorScheme(colorScheme) {
        return this.host.jqxChart('getColorScheme', colorScheme);
    }
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    hideSerie(groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);
    }
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @return {?}
     */
    showSerie(groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('showSerie', groupIndex, serieIndex, itemIndex);
    }
    /**
     * @param {?} hideDelay
     * @return {?}
     */
    hideToolTip(hideDelay) {
        this.host.jqxChart('hideToolTip', hideDelay);
    }
    /**
     * @param {?} groupIndex
     * @param {?} serieIndex
     * @param {?} itemIndex
     * @param {?} showDelay
     * @param {?} hideDelay
     * @return {?}
     */
    showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        this.host.jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
    }
    /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    saveAsJPEG(fileName, exportServerUrl) {
        this.host.jqxChart('saveAsJPEG', fileName, exportServerUrl);
    }
    /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    saveAsPNG(fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPNG', fileName, exportServerUrl);
    }
    /**
     * @param {?} fileName
     * @param {?} exportServerUrl
     * @return {?}
     */
    saveAsPDF(fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPDF', fileName, exportServerUrl);
    }
    /**
     * @param {?} offset
     * @param {?} groupIndex
     * @return {?}
     */
    getXAxisValue(offset, groupIndex) {
        return this.host.jqxChart('getXAxisValue', offset, groupIndex);
    }
    /**
     * @param {?} offset
     * @param {?} groupIndex
     * @return {?}
     */
    getValueAxisValue(offset, groupIndex) {
        return this.host.jqxChart('getValueAxisValue', offset, groupIndex);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('toggle', (eventData) => { this.onToggle.emit(eventData); });
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
        this.host.on('refreshBegin', (eventData) => { this.onRefreshBegin.emit(eventData); });
        this.host.on('refreshEnd', (eventData) => { this.onRefreshEnd.emit(eventData); });
        this.host.on('rangeSelectionChanging', (eventData) => { this.onRangeSelectionChanging.emit(eventData); });
        this.host.on('rangeSelectionChanged', (eventData) => { this.onRangeSelectionChanged.emit(eventData); });
    }
} //jqxChartComponent
jqxChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxChart',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
