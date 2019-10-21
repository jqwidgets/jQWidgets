import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxchart.core';
import '../jqwidgets/jqxchart.api';
import '../jqwidgets/jqxchart.annotations';
import '../jqwidgets/jqxchart.rangeselector';
import '../jqwidgets/jqxchart.waterfall';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
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
jqxChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('title'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrTitle", void 0);
__decorate([
    Input('description'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrDescription", void 0);
__decorate([
    Input('source'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrSource", void 0);
__decorate([
    Input('showBorderLine'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrShowBorderLine", void 0);
__decorate([
    Input('borderLineColor'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrBorderLineColor", void 0);
__decorate([
    Input('borderLineWidth'),
    __metadata("design:type", Number)
], jqxChartComponent.prototype, "attrBorderLineWidth", void 0);
__decorate([
    Input('backgroundColor'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrBackgroundColor", void 0);
__decorate([
    Input('backgroundImage'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrBackgroundImage", void 0);
__decorate([
    Input('showLegend'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrShowLegend", void 0);
__decorate([
    Input('legendLayout'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrLegendLayout", void 0);
__decorate([
    Input('padding'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrPadding", void 0);
__decorate([
    Input('titlePadding'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrTitlePadding", void 0);
__decorate([
    Input('colorScheme'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrColorScheme", void 0);
__decorate([
    Input('greyScale'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrGreyScale", void 0);
__decorate([
    Input('showToolTips'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrShowToolTips", void 0);
__decorate([
    Input('toolTipShowDelay'),
    __metadata("design:type", Number)
], jqxChartComponent.prototype, "attrToolTipShowDelay", void 0);
__decorate([
    Input('toolTipHideDelay'),
    __metadata("design:type", Number)
], jqxChartComponent.prototype, "attrToolTipHideDelay", void 0);
__decorate([
    Input('toolTipMoveDuration'),
    __metadata("design:type", Number)
], jqxChartComponent.prototype, "attrToolTipMoveDuration", void 0);
__decorate([
    Input('drawBefore'),
    __metadata("design:type", Function)
], jqxChartComponent.prototype, "attrDrawBefore", void 0);
__decorate([
    Input('draw'),
    __metadata("design:type", Function)
], jqxChartComponent.prototype, "attrDraw", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('enableCrosshairs'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrEnableCrosshairs", void 0);
__decorate([
    Input('crosshairsColor'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrCrosshairsColor", void 0);
__decorate([
    Input('crosshairsDashStyle'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrCrosshairsDashStyle", void 0);
__decorate([
    Input('crosshairsLineWidth'),
    __metadata("design:type", Number)
], jqxChartComponent.prototype, "attrCrosshairsLineWidth", void 0);
__decorate([
    Input('columnSeriesOverlap'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrColumnSeriesOverlap", void 0);
__decorate([
    Input('enabled'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrEnabled", void 0);
__decorate([
    Input('enableAnimations'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrEnableAnimations", void 0);
__decorate([
    Input('animationDuration'),
    __metadata("design:type", Number)
], jqxChartComponent.prototype, "attrAnimationDuration", void 0);
__decorate([
    Input('enableAxisTextAnimation'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "attrEnableAxisTextAnimation", void 0);
__decorate([
    Input('renderEngine'),
    __metadata("design:type", String)
], jqxChartComponent.prototype, "attrRenderEngine", void 0);
__decorate([
    Input('xAxis'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrXAxis", void 0);
__decorate([
    Input('valueAxis'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrValueAxis", void 0);
__decorate([
    Input('categoryAxis'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrCategoryAxis", void 0);
__decorate([
    Input('seriesGroups'),
    __metadata("design:type", Array)
], jqxChartComponent.prototype, "attrSeriesGroups", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxChartComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "onToggle", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "onClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "onRefreshBegin", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "onRefreshEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "onRangeSelectionChanging", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxChartComponent.prototype, "onRangeSelectionChanged", void 0);
jqxChartComponent = __decorate([
    Component({
        selector: 'jqxChart',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxChartComponent);

let jqxChartModule = class jqxChartModule {
};
jqxChartModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxChartComponent],
        exports: [jqxChartComponent]
    })
], jqxChartModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxChartComponent, jqxChartModule };
