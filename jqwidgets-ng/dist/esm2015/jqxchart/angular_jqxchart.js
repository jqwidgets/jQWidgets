import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets-scripts/jqwidgets/jqxdata';
import * as jqxdataexport from '../../jqwidgets-scripts/jqwidgets/jqxdata.export';
import * as jqxdraw from '../../jqwidgets-scripts/jqwidgets/jqxdraw';
import * as jqxchartcore from '../../jqwidgets-scripts/jqwidgets/jqxchart.core';
import * as jqxchartapi from '../../jqwidgets-scripts/jqwidgets/jqxchart.api';
import * as jqxchartannotations from '../../jqwidgets-scripts/jqwidgets/jqxchart.annotations';
import * as jqxchartrangeselector from '../../jqwidgets-scripts/jqwidgets/jqxchart.rangeselector';
import * as jqxchartwaterfall from '../../jqwidgets-scripts/jqwidgets/jqxchart.waterfall';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let jqxChartComponent = class jqxChartComponent {
    constructor(containerElement) {
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
        JQXLite(window).resize(() => {
            this.__updateRect__();
        });
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            if (changes.hasOwnProperty('attrWidth') || changes.hasOwnProperty('attrHeight')) {
                this.__updateRect__();
            }
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
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
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
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
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    }
    setOptions(options) {
        this.host.jqxChart('setOptions', options);
    }
    // jqxChartComponent properties
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('title', arg);
        }
        else {
            return this.host.jqxChart('title');
        }
    }
    description(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('description', arg);
        }
        else {
            return this.host.jqxChart('description');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('source', arg);
        }
        else {
            return this.host.jqxChart('source');
        }
    }
    showBorderLine(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showBorderLine', arg);
        }
        else {
            return this.host.jqxChart('showBorderLine');
        }
    }
    borderLineColor(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineColor', arg);
        }
        else {
            return this.host.jqxChart('borderLineColor');
        }
    }
    borderLineWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('borderLineWidth', arg);
        }
        else {
            return this.host.jqxChart('borderLineWidth');
        }
    }
    backgroundColor(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundColor', arg);
        }
        else {
            return this.host.jqxChart('backgroundColor');
        }
    }
    backgroundImage(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('backgroundImage', arg);
        }
        else {
            return this.host.jqxChart('backgroundImage');
        }
    }
    showLegend(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showLegend', arg);
        }
        else {
            return this.host.jqxChart('showLegend');
        }
    }
    legendLayout(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('legendLayout', arg);
        }
        else {
            return this.host.jqxChart('legendLayout');
        }
    }
    padding(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('padding', arg);
        }
        else {
            return this.host.jqxChart('padding');
        }
    }
    titlePadding(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('titlePadding', arg);
        }
        else {
            return this.host.jqxChart('titlePadding');
        }
    }
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('colorScheme', arg);
        }
        else {
            return this.host.jqxChart('colorScheme');
        }
    }
    greyScale(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('greyScale', arg);
        }
        else {
            return this.host.jqxChart('greyScale');
        }
    }
    showToolTips(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('showToolTips', arg);
        }
        else {
            return this.host.jqxChart('showToolTips');
        }
    }
    toolTipShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipShowDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipShowDelay');
        }
    }
    toolTipHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipHideDelay', arg);
        }
        else {
            return this.host.jqxChart('toolTipHideDelay');
        }
    }
    toolTipMoveDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('toolTipMoveDuration', arg);
        }
        else {
            return this.host.jqxChart('toolTipMoveDuration');
        }
    }
    drawBefore(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('drawBefore', arg);
        }
        else {
            return this.host.jqxChart('drawBefore');
        }
    }
    draw(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('draw', arg);
        }
        else {
            return this.host.jqxChart('draw');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('rtl', arg);
        }
        else {
            return this.host.jqxChart('rtl');
        }
    }
    enableCrosshairs(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableCrosshairs', arg);
        }
        else {
            return this.host.jqxChart('enableCrosshairs');
        }
    }
    crosshairsColor(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsColor', arg);
        }
        else {
            return this.host.jqxChart('crosshairsColor');
        }
    }
    crosshairsDashStyle(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsDashStyle', arg);
        }
        else {
            return this.host.jqxChart('crosshairsDashStyle');
        }
    }
    crosshairsLineWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('crosshairsLineWidth', arg);
        }
        else {
            return this.host.jqxChart('crosshairsLineWidth');
        }
    }
    columnSeriesOverlap(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('columnSeriesOverlap', arg);
        }
        else {
            return this.host.jqxChart('columnSeriesOverlap');
        }
    }
    enabled(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enabled', arg);
        }
        else {
            return this.host.jqxChart('enabled');
        }
    }
    enableAnimations(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAnimations', arg);
        }
        else {
            return this.host.jqxChart('enableAnimations');
        }
    }
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('animationDuration', arg);
        }
        else {
            return this.host.jqxChart('animationDuration');
        }
    }
    enableAxisTextAnimation(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('enableAxisTextAnimation', arg);
        }
        else {
            return this.host.jqxChart('enableAxisTextAnimation');
        }
    }
    renderEngine(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('renderEngine', arg);
        }
        else {
            return this.host.jqxChart('renderEngine');
        }
    }
    xAxis(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('xAxis', arg);
        }
        else {
            return this.host.jqxChart('xAxis');
        }
    }
    valueAxis(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('valueAxis', arg);
        }
        else {
            return this.host.jqxChart('valueAxis');
        }
    }
    categoryAxis(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('categoryAxis', arg);
        }
        else {
            return this.host.jqxChart('categoryAxis');
        }
    }
    seriesGroups(arg) {
        if (arg !== undefined) {
            this.host.jqxChart('seriesGroups', arg);
        }
        else {
            return this.host.jqxChart('seriesGroups');
        }
    }
    // jqxChartComponent functions
    getInstance() {
        return this.host.jqxChart('getInstance');
    }
    refresh() {
        this.host.jqxChart('refresh');
    }
    update() {
        this.host.jqxChart('update');
    }
    destroy() {
        this.host.jqxChart('destroy');
    }
    addColorScheme(schemeName, colors) {
        this.host.jqxChart('addColorScheme', schemeName, colors);
    }
    removeColorScheme(schemeName) {
        this.host.jqxChart('removeColorScheme', schemeName);
    }
    getItemsCount(groupIndex, serieIndex) {
        return this.host.jqxChart('getItemsCount', groupIndex, serieIndex);
    }
    getItemCoord(groupIndex, serieIndex, itemIndex) {
        return this.host.jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);
    }
    getXAxisRect(groupIndex) {
        return this.host.jqxChart('getXAxisRect', groupIndex);
    }
    getXAxisLabels(groupIndex) {
        return this.host.jqxChart('getXAxisLabels', groupIndex);
    }
    getValueAxisRect(groupIndex) {
        return this.host.jqxChart('getValueAxisRect', groupIndex);
    }
    getValueAxisLabels(groupIndex) {
        return this.host.jqxChart('getValueAxisLabels', groupIndex);
    }
    getColorScheme(colorScheme) {
        return this.host.jqxChart('getColorScheme', colorScheme);
    }
    hideSerie(groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);
    }
    showSerie(groupIndex, serieIndex, itemIndex) {
        this.host.jqxChart('showSerie', groupIndex, serieIndex, itemIndex);
    }
    hideToolTip(hideDelay) {
        this.host.jqxChart('hideToolTip', hideDelay);
    }
    showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay) {
        this.host.jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
    }
    saveAsJPEG(fileName, exportServerUrl) {
        this.host.jqxChart('saveAsJPEG', fileName, exportServerUrl);
    }
    saveAsPNG(fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPNG', fileName, exportServerUrl);
    }
    saveAsPDF(fileName, exportServerUrl) {
        this.host.jqxChart('saveAsPDF', fileName, exportServerUrl);
    }
    getXAxisValue(offset, groupIndex) {
        return this.host.jqxChart('getXAxisValue', offset, groupIndex);
    }
    getValueAxisValue(offset, groupIndex) {
        return this.host.jqxChart('getValueAxisValue', offset, groupIndex);
    }
    __wireEvents__() {
        this.host.on('toggle', (eventData) => { this.onToggle.emit(eventData); });
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
        this.host.on('refreshBegin', (eventData) => { this.onRefreshBegin.emit(eventData); });
        this.host.on('refreshEnd', (eventData) => { this.onRefreshEnd.emit(eventData); });
        this.host.on('rangeSelectionChanging', (eventData) => { this.onRangeSelectionChanging.emit(eventData); });
        this.host.on('rangeSelectionChanged', (eventData) => { this.onRangeSelectionChanged.emit(eventData); });
    }
}; //jqxChartComponent
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
export { jqxChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhjaGFydC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhjaGFydC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4Y2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0csSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUErQzNCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLGtCQUFrQixFQUFDLHFCQUFxQixFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLGtCQUFrQixFQUFDLGlCQUFpQixFQUFDLHFCQUFxQixFQUFDLHFCQUFxQixFQUFDLHFCQUFxQixFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxtQkFBbUIsRUFBQyx5QkFBeUIsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsY0FBYyxDQUFDLENBQUM7UUE4ZXhqQiwyQkFBMkI7UUFDakIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyw2QkFBd0Is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QUFDLGNBQWMsQ0FBQzs7MkRBQXVCO0FBQ3RCO0lBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7c0NBQW1CLEtBQUs7MkRBQTZCO0FBQzNEO0lBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7b0RBQTRCO0FBQzFCO0lBQWhCLEtBQUssQ0FBQyxRQUFRLENBQUM7O3FEQUE2QjtBQUV2QjtJQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOztxREFBNEI7QUFpZnZDO0lBQVQsTUFBTSxFQUFFOzttREFBK0I7QUFDOUI7SUFBVCxNQUFNLEVBQUU7O2tEQUE4QjtBQUM3QjtJQUFULE1BQU0sRUFBRTs7eURBQXFDO0FBQ3BDO0lBQVQsTUFBTSxFQUFFOzt1REFBbUM7QUFDbEM7SUFBVCxNQUFNLEVBQUU7O21FQUErQztBQUM5QztJQUFULE1BQU0sRUFBRTs7a0VBQThDO0FBOWhCN0MsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxzQ0FBc0M7S0FDbkQsQ0FBQzs2Q0FpRCtCLFVBQVU7R0EvQzlCLGlCQUFpQixDQXlpQjdCO1NBemlCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeENoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCd0aXRsZScpIGF0dHJUaXRsZTogc3RyaW5nO1xuICAgQElucHV0KCdkZXNjcmlwdGlvbicpIGF0dHJEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdzb3VyY2UnKSBhdHRyU291cmNlOiBhbnk7XG4gICBASW5wdXQoJ3Nob3dCb3JkZXJMaW5lJykgYXR0clNob3dCb3JkZXJMaW5lOiBib29sZWFuO1xuICAgQElucHV0KCdib3JkZXJMaW5lQ29sb3InKSBhdHRyQm9yZGVyTGluZUNvbG9yOiBzdHJpbmc7XG4gICBASW5wdXQoJ2JvcmRlckxpbmVXaWR0aCcpIGF0dHJCb3JkZXJMaW5lV2lkdGg6IG51bWJlcjtcbiAgIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYXR0ckJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICAgQElucHV0KCdiYWNrZ3JvdW5kSW1hZ2UnKSBhdHRyQmFja2dyb3VuZEltYWdlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3Nob3dMZWdlbmQnKSBhdHRyU2hvd0xlZ2VuZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbGVnZW5kTGF5b3V0JykgYXR0ckxlZ2VuZExheW91dDoganF3aWRnZXRzLkNoYXJ0TGVnZW5kTGF5b3V0O1xuICAgQElucHV0KCdwYWRkaW5nJykgYXR0clBhZGRpbmc6IGpxd2lkZ2V0cy5DaGFydFBhZGRpbmc7XG4gICBASW5wdXQoJ3RpdGxlUGFkZGluZycpIGF0dHJUaXRsZVBhZGRpbmc6IGpxd2lkZ2V0cy5DaGFydFBhZGRpbmc7XG4gICBASW5wdXQoJ2NvbG9yU2NoZW1lJykgYXR0ckNvbG9yU2NoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ2dyZXlTY2FsZScpIGF0dHJHcmV5U2NhbGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dUb29sVGlwcycpIGF0dHJTaG93VG9vbFRpcHM6IGJvb2xlYW47XG4gICBASW5wdXQoJ3Rvb2xUaXBTaG93RGVsYXknKSBhdHRyVG9vbFRpcFNob3dEZWxheTogbnVtYmVyO1xuICAgQElucHV0KCd0b29sVGlwSGlkZURlbGF5JykgYXR0clRvb2xUaXBIaWRlRGVsYXk6IG51bWJlcjtcbiAgIEBJbnB1dCgndG9vbFRpcE1vdmVEdXJhdGlvbicpIGF0dHJUb29sVGlwTW92ZUR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2RyYXdCZWZvcmUnKSBhdHRyRHJhd0JlZm9yZTogKHJlbmRlcmVyPzoganF3aWRnZXRzLkNoYXJ0RHJhd0JlZm9yZVsncmVuZGVyZXInXSwgcmVjdD86IGpxd2lkZ2V0cy5DaGFydERyYXdCZWZvcmVbJ3JlY3QnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnZHJhdycpIGF0dHJEcmF3OiAocmVuZGVyZXI/OiBqcXdpZGdldHMuQ2hhcnREcmF3WydyZW5kZXJlciddLCByZWN0PzoganF3aWRnZXRzLkNoYXJ0RHJhd1sncmVjdCddKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdlbmFibGVDcm9zc2hhaXJzJykgYXR0ckVuYWJsZUNyb3NzaGFpcnM6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Nyb3NzaGFpcnNDb2xvcicpIGF0dHJDcm9zc2hhaXJzQ29sb3I6IHN0cmluZztcbiAgIEBJbnB1dCgnY3Jvc3NoYWlyc0Rhc2hTdHlsZScpIGF0dHJDcm9zc2hhaXJzRGFzaFN0eWxlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Nyb3NzaGFpcnNMaW5lV2lkdGgnKSBhdHRyQ3Jvc3NoYWlyc0xpbmVXaWR0aDogbnVtYmVyO1xuICAgQElucHV0KCdjb2x1bW5TZXJpZXNPdmVybGFwJykgYXR0ckNvbHVtblNlcmllc092ZXJsYXA6IGJvb2xlYW47XG4gICBASW5wdXQoJ2VuYWJsZWQnKSBhdHRyRW5hYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZW5hYmxlQW5pbWF0aW9ucycpIGF0dHJFbmFibGVBbmltYXRpb25zOiBib29sZWFuO1xuICAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGF0dHJBbmltYXRpb25EdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCdlbmFibGVBeGlzVGV4dEFuaW1hdGlvbicpIGF0dHJFbmFibGVBeGlzVGV4dEFuaW1hdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVuZGVyRW5naW5lJykgYXR0clJlbmRlckVuZ2luZTogc3RyaW5nO1xuICAgQElucHV0KCd4QXhpcycpIGF0dHJYQXhpczoganF3aWRnZXRzLkNoYXJ0WEF4aXM7XG4gICBASW5wdXQoJ3ZhbHVlQXhpcycpIGF0dHJWYWx1ZUF4aXM6IGpxd2lkZ2V0cy5DaGFydFZhbHVlQXhpcztcbiAgIEBJbnB1dCgnY2F0ZWdvcnlBeGlzJykgYXR0ckNhdGVnb3J5QXhpczogYW55O1xuICAgQElucHV0KCdzZXJpZXNHcm91cHMnKSBhdHRyU2VyaWVzR3JvdXBzOiBBcnJheTxqcXdpZGdldHMuQ2hhcnRTZXJpZXNHcm91cD47XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsndGl0bGUnLCdkZXNjcmlwdGlvbicsJ3NvdXJjZScsJ3Nob3dCb3JkZXJMaW5lJywnYm9yZGVyTGluZUNvbG9yJywnYm9yZGVyTGluZVdpZHRoJywnYmFja2dyb3VuZENvbG9yJywnYmFja2dyb3VuZEltYWdlJywnc2hvd0xlZ2VuZCcsJ2xlZ2VuZExheW91dCcsJ3BhZGRpbmcnLCd0aXRsZVBhZGRpbmcnLCdjb2xvclNjaGVtZScsJ2dyZXlTY2FsZScsJ3Nob3dUb29sVGlwcycsJ3Rvb2xUaXBTaG93RGVsYXknLCd0b29sVGlwSGlkZURlbGF5JywndG9vbFRpcE1vdmVEdXJhdGlvbicsJ2RyYXdCZWZvcmUnLCdkcmF3JywncnRsJywnZW5hYmxlQ3Jvc3NoYWlycycsJ2Nyb3NzaGFpcnNDb2xvcicsJ2Nyb3NzaGFpcnNEYXNoU3R5bGUnLCdjcm9zc2hhaXJzTGluZVdpZHRoJywnY29sdW1uU2VyaWVzT3ZlcmxhcCcsJ2VuYWJsZWQnLCdlbmFibGVBbmltYXRpb25zJywnYW5pbWF0aW9uRHVyYXRpb24nLCdlbmFibGVBeGlzVGV4dEFuaW1hdGlvbicsJ3JlbmRlckVuZ2luZScsJ3hBeGlzJywndmFsdWVBeGlzJywnY2F0ZWdvcnlBeGlzJywnc2VyaWVzR3JvdXBzJ107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeENoYXJ0O1xuXG4gICBjb25zdHJ1Y3Rvcihjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYgPSBjb250YWluZXJFbGVtZW50O1xuICAgICAgSlFYTGl0ZSh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2F0dHJXaWR0aCcpIHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2F0dHJIZWlnaHQnKSkge1xuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgICAgICAgfVxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4Q2hhcnQodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeENoYXJ0KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4Q2hhcnQnLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy5fX3VwZGF0ZVJlY3RfXygpO1xuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhDaGFydENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICB0aXRsZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCd0aXRsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3RpdGxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRlc2NyaXB0aW9uKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Rlc2NyaXB0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZGVzY3JpcHRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc291cmNlKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3NvdXJjZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3NvdXJjZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93Qm9yZGVyTGluZShhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dCb3JkZXJMaW5lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnc2hvd0JvcmRlckxpbmUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYm9yZGVyTGluZUNvbG9yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2JvcmRlckxpbmVDb2xvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2JvcmRlckxpbmVDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBib3JkZXJMaW5lV2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnYm9yZGVyTGluZVdpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnYm9yZGVyTGluZVdpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGJhY2tncm91bmRDb2xvcihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdiYWNrZ3JvdW5kQ29sb3InLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdiYWNrZ3JvdW5kQ29sb3InKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYmFja2dyb3VuZEltYWdlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2JhY2tncm91bmRJbWFnZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2JhY2tncm91bmRJbWFnZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93TGVnZW5kKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnc2hvd0xlZ2VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dMZWdlbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGVnZW5kTGF5b3V0KGFyZz86IGpxd2lkZ2V0cy5DaGFydExlZ2VuZExheW91dCk6IGpxd2lkZ2V0cy5DaGFydExlZ2VuZExheW91dCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2xlZ2VuZExheW91dCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2xlZ2VuZExheW91dCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBwYWRkaW5nKGFyZz86IGpxd2lkZ2V0cy5DaGFydFBhZGRpbmcpOiBqcXdpZGdldHMuQ2hhcnRQYWRkaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgncGFkZGluZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3BhZGRpbmcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGl0bGVQYWRkaW5nKGFyZz86IGpxd2lkZ2V0cy5DaGFydFBhZGRpbmcpOiBqcXdpZGdldHMuQ2hhcnRQYWRkaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgndGl0bGVQYWRkaW5nJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgndGl0bGVQYWRkaW5nJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbG9yU2NoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2NvbG9yU2NoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnY29sb3JTY2hlbWUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ3JleVNjYWxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZ3JleVNjYWxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZ3JleVNjYWxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dUb29sVGlwcyhhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dUb29sVGlwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dUb29sVGlwcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b29sVGlwU2hvd0RlbGF5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Rvb2xUaXBTaG93RGVsYXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCd0b29sVGlwU2hvd0RlbGF5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvb2xUaXBIaWRlRGVsYXkoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgndG9vbFRpcEhpZGVEZWxheScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Rvb2xUaXBIaWRlRGVsYXknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9vbFRpcE1vdmVEdXJhdGlvbihhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCd0b29sVGlwTW92ZUR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgndG9vbFRpcE1vdmVEdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmF3QmVmb3JlKGFyZz86IChyZW5kZXJlcj86IGpxd2lkZ2V0cy5DaGFydERyYXdCZWZvcmVbJ3JlbmRlcmVyJ10sIHJlY3Q/OiBqcXdpZGdldHMuQ2hhcnREcmF3QmVmb3JlWydyZWN0J10pID0+IHZvaWQpOiAocmVuZGVyZXI/OiBqcXdpZGdldHMuQ2hhcnREcmF3QmVmb3JlWydyZW5kZXJlciddLCByZWN0PzoganF3aWRnZXRzLkNoYXJ0RHJhd0JlZm9yZVsncmVjdCddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZHJhd0JlZm9yZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2RyYXdCZWZvcmUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhdyhhcmc/OiAocmVuZGVyZXI/OiBqcXdpZGdldHMuQ2hhcnREcmF3WydyZW5kZXJlciddLCByZWN0PzoganF3aWRnZXRzLkNoYXJ0RHJhd1sncmVjdCddKSA9PiB2b2lkKTogKHJlbmRlcmVyPzoganF3aWRnZXRzLkNoYXJ0RHJhd1sncmVuZGVyZXInXSwgcmVjdD86IGpxd2lkZ2V0cy5DaGFydERyYXdbJ3JlY3QnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2RyYXcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdkcmF3Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJ0bChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVDcm9zc2hhaXJzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZW5hYmxlQ3Jvc3NoYWlycycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2VuYWJsZUNyb3NzaGFpcnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY3Jvc3NoYWlyc0NvbG9yKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Nyb3NzaGFpcnNDb2xvcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Nyb3NzaGFpcnNDb2xvcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjcm9zc2hhaXJzRGFzaFN0eWxlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Nyb3NzaGFpcnNEYXNoU3R5bGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdjcm9zc2hhaXJzRGFzaFN0eWxlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNyb3NzaGFpcnNMaW5lV2lkdGgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnY3Jvc3NoYWlyc0xpbmVXaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2Nyb3NzaGFpcnNMaW5lV2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29sdW1uU2VyaWVzT3ZlcmxhcChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2NvbHVtblNlcmllc092ZXJsYXAnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdjb2x1bW5TZXJpZXNPdmVybGFwJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGVuYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdlbmFibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZW5hYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVBbmltYXRpb25zKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZW5hYmxlQW5pbWF0aW9ucycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2VuYWJsZUFuaW1hdGlvbnMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnYW5pbWF0aW9uRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdhbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBlbmFibGVBeGlzVGV4dEFuaW1hdGlvbihhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ2VuYWJsZUF4aXNUZXh0QW5pbWF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZW5hYmxlQXhpc1RleHRBbmltYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVuZGVyRW5naW5lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3JlbmRlckVuZ2luZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3JlbmRlckVuZ2luZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB4QXhpcyhhcmc/OiBqcXdpZGdldHMuQ2hhcnRYQXhpcyk6IGpxd2lkZ2V0cy5DaGFydFhBeGlzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgneEF4aXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCd4QXhpcycpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWx1ZUF4aXMoYXJnPzoganF3aWRnZXRzLkNoYXJ0VmFsdWVBeGlzKToganF3aWRnZXRzLkNoYXJ0VmFsdWVBeGlzIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgndmFsdWVBeGlzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgndmFsdWVBeGlzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNhdGVnb3J5QXhpcyhhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdjYXRlZ29yeUF4aXMnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdjYXRlZ29yeUF4aXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2VyaWVzR3JvdXBzKGFyZz86IEFycmF5PGpxd2lkZ2V0cy5DaGFydFNlcmllc0dyb3VwPik6IEFycmF5PGpxd2lkZ2V0cy5DaGFydFNlcmllc0dyb3VwPiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nlcmllc0dyb3VwcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nlcmllc0dyb3VwcycpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeENoYXJ0Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgZ2V0SW5zdGFuY2UoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2dldEluc3RhbmNlJyk7XG4gICB9XG5cbiAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCd1cGRhdGUnKTtcbiAgIH1cblxuICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnZGVzdHJveScpO1xuICAgfVxuXG4gICBhZGRDb2xvclNjaGVtZShzY2hlbWVOYW1lOiBzdHJpbmcsIGNvbG9yczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdhZGRDb2xvclNjaGVtZScsIHNjaGVtZU5hbWUsIGNvbG9ycyk7XG4gICB9XG5cbiAgIHJlbW92ZUNvbG9yU2NoZW1lKHNjaGVtZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdyZW1vdmVDb2xvclNjaGVtZScsIHNjaGVtZU5hbWUpO1xuICAgfVxuXG4gICBnZXRJdGVtc0NvdW50KGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2dldEl0ZW1zQ291bnQnLCBncm91cEluZGV4LCBzZXJpZUluZGV4KTtcbiAgIH1cblxuICAgZ2V0SXRlbUNvb3JkKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdnZXRJdGVtQ29vcmQnLCBncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgfVxuXG4gICBnZXRYQXhpc1JlY3QoZ3JvdXBJbmRleDogbnVtYmVyKToganF3aWRnZXRzLkNoYXJ0UmVjdCB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdnZXRYQXhpc1JlY3QnLCBncm91cEluZGV4KTtcbiAgIH1cblxuICAgZ2V0WEF4aXNMYWJlbHMoZ3JvdXBJbmRleDogbnVtYmVyKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdnZXRYQXhpc0xhYmVscycsIGdyb3VwSW5kZXgpO1xuICAgfVxuXG4gICBnZXRWYWx1ZUF4aXNSZWN0KGdyb3VwSW5kZXg6IG51bWJlcik6IGpxd2lkZ2V0cy5DaGFydFJlY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZ2V0VmFsdWVBeGlzUmVjdCcsIGdyb3VwSW5kZXgpO1xuICAgfVxuXG4gICBnZXRWYWx1ZUF4aXNMYWJlbHMoZ3JvdXBJbmRleDogbnVtYmVyKTogQXJyYXk8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeENoYXJ0KCdnZXRWYWx1ZUF4aXNMYWJlbHMnLCBncm91cEluZGV4KTtcbiAgIH1cblxuICAgZ2V0Q29sb3JTY2hlbWUoY29sb3JTY2hlbWU6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhDaGFydCgnZ2V0Q29sb3JTY2hlbWUnLCBjb2xvclNjaGVtZSk7XG4gICB9XG5cbiAgIGhpZGVTZXJpZShncm91cEluZGV4OiBudW1iZXIsIHNlcmllSW5kZXg6IG51bWJlciwgaXRlbUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnaGlkZVNlcmllJywgZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4KTtcbiAgIH1cblxuICAgc2hvd1NlcmllKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdzaG93U2VyaWUnLCBncm91cEluZGV4LCBzZXJpZUluZGV4LCBpdGVtSW5kZXgpO1xuICAgfVxuXG4gICBoaWRlVG9vbFRpcChoaWRlRGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdoaWRlVG9vbFRpcCcsIGhpZGVEZWxheSk7XG4gICB9XG5cbiAgIHNob3dUb29sVGlwKGdyb3VwSW5kZXg6IG51bWJlciwgc2VyaWVJbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlciwgc2hvd0RlbGF5OiBudW1iZXIsIGhpZGVEZWxheTogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4Q2hhcnQoJ3Nob3dUb29sVGlwJywgZ3JvdXBJbmRleCwgc2VyaWVJbmRleCwgaXRlbUluZGV4LCBzaG93RGVsYXksIGhpZGVEZWxheSk7XG4gICB9XG5cbiAgIHNhdmVBc0pQRUcoZmlsZU5hbWU6IHN0cmluZywgZXhwb3J0U2VydmVyVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnc2F2ZUFzSlBFRycsIGZpbGVOYW1lLCBleHBvcnRTZXJ2ZXJVcmwpO1xuICAgfVxuXG4gICBzYXZlQXNQTkcoZmlsZU5hbWU6IHN0cmluZywgZXhwb3J0U2VydmVyVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhDaGFydCgnc2F2ZUFzUE5HJywgZmlsZU5hbWUsIGV4cG9ydFNlcnZlclVybCk7XG4gICB9XG5cbiAgIHNhdmVBc1BERihmaWxlTmFtZTogc3RyaW5nLCBleHBvcnRTZXJ2ZXJVcmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeENoYXJ0KCdzYXZlQXNQREYnLCBmaWxlTmFtZSwgZXhwb3J0U2VydmVyVXJsKTtcbiAgIH1cblxuICAgZ2V0WEF4aXNWYWx1ZShvZmZzZXQ6IG51bWJlciwgZ3JvdXBJbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2dldFhBeGlzVmFsdWUnLCBvZmZzZXQsIGdyb3VwSW5kZXgpO1xuICAgfVxuXG4gICBnZXRWYWx1ZUF4aXNWYWx1ZShvZmZzZXQ6IG51bWJlciwgZ3JvdXBJbmRleDogbnVtYmVyKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4Q2hhcnQoJ2dldFZhbHVlQXhpc1ZhbHVlJywgb2Zmc2V0LCBncm91cEluZGV4KTtcbiAgIH1cblxuXG4gICAvLyBqcXhDaGFydENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvblRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVmcmVzaEJlZ2luID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVmcmVzaEVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblJhbmdlU2VsZWN0aW9uQ2hhbmdpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25SYW5nZVNlbGVjdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCd0b2dnbGUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblRvZ2dsZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdjbGljaycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uQ2xpY2suZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVmcmVzaEJlZ2luJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SZWZyZXNoQmVnaW4uZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVmcmVzaEVuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmVmcmVzaEVuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyYW5nZVNlbGVjdGlvbkNoYW5naW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SYW5nZVNlbGVjdGlvbkNoYW5naW5nLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3JhbmdlU2VsZWN0aW9uQ2hhbmdlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmFuZ2VTZWxlY3Rpb25DaGFuZ2VkLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhDaGFydENvbXBvbmVudFxuIl19