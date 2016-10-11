/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularChart',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxChartComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxChart;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   isHostReady(): boolean {
       return (this.host !== undefined && this.host.length == 1);
   }

   createWidget(options: any): void {
      if (!this.isHostReady()) {

         this.host = $(this.elementRef.nativeElement.firstChild);
         this.__wireEvents__();
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxChart', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
      this.refresh();
   }

   setOptions(options: any) : void {
      this.host.jqxChart('setOptions', options);
   }

   // jqxChartComponent properties
   title(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('title', arg);
      } else {
          return this.host.jqxChart('title');
      }
   }

   description(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('description', arg);
      } else {
          return this.host.jqxChart('description');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxChart('source', arg);
      } else {
          return this.host.jqxChart('source');
      }
   }

   showBorderLine(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('showBorderLine', arg);
      } else {
          return this.host.jqxChart('showBorderLine');
      }
   }

   borderLineColor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('borderLineColor', arg);
      } else {
          return this.host.jqxChart('borderLineColor');
      }
   }

   borderLineWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxChart('borderLineWidth', arg);
      } else {
          return this.host.jqxChart('borderLineWidth');
      }
   }

   backgroundColor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('backgroundColor', arg);
      } else {
          return this.host.jqxChart('backgroundColor');
      }
   }

   backgroundImage(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('backgroundImage', arg);
      } else {
          return this.host.jqxChart('backgroundImage');
      }
   }

   showLegend(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('showLegend', arg);
      } else {
          return this.host.jqxChart('showLegend');
      }
   }

   legendLayout(arg?: jqwidgets.ChartLegendLayout) : any {
      if (arg !== undefined) {
          this.host.jqxChart('legendLayout', arg);
      } else {
          return this.host.jqxChart('legendLayout');
      }
   }

   padding(arg?: jqwidgets.ChartPadding) : any {
      if (arg !== undefined) {
          this.host.jqxChart('padding', arg);
      } else {
          return this.host.jqxChart('padding');
      }
   }

   titlePadding(arg?: jqwidgets.ChartPadding) : any {
      if (arg !== undefined) {
          this.host.jqxChart('titlePadding', arg);
      } else {
          return this.host.jqxChart('titlePadding');
      }
   }

   colorScheme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('colorScheme', arg);
      } else {
          return this.host.jqxChart('colorScheme');
      }
   }

   greyScale(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('greyScale', arg);
      } else {
          return this.host.jqxChart('greyScale');
      }
   }

   showToolTips(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('showToolTips', arg);
      } else {
          return this.host.jqxChart('showToolTips');
      }
   }

   toolTipShowDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxChart('toolTipShowDelay', arg);
      } else {
          return this.host.jqxChart('toolTipShowDelay');
      }
   }

   toolTipHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxChart('toolTipHideDelay', arg);
      } else {
          return this.host.jqxChart('toolTipHideDelay');
      }
   }

   toolTipMoveDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxChart('toolTipMoveDuration', arg);
      } else {
          return this.host.jqxChart('toolTipMoveDuration');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('rtl', arg);
      } else {
          return this.host.jqxChart('rtl');
      }
   }

   enableCrosshairs(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('enableCrosshairs', arg);
      } else {
          return this.host.jqxChart('enableCrosshairs');
      }
   }

   crosshairsColor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('crosshairsColor', arg);
      } else {
          return this.host.jqxChart('crosshairsColor');
      }
   }

   crosshairsDashStyle(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('crosshairsDashStyle', arg);
      } else {
          return this.host.jqxChart('crosshairsDashStyle');
      }
   }

   crosshairsLineWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxChart('crosshairsLineWidth', arg);
      } else {
          return this.host.jqxChart('crosshairsLineWidth');
      }
   }

   columnSeriesOverlap(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('columnSeriesOverlap', arg);
      } else {
          return this.host.jqxChart('columnSeriesOverlap');
      }
   }

   enabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('enabled', arg);
      } else {
          return this.host.jqxChart('enabled');
      }
   }

   enableAnimations(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('enableAnimations', arg);
      } else {
          return this.host.jqxChart('enableAnimations');
      }
   }

   animationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxChart('animationDuration', arg);
      } else {
          return this.host.jqxChart('animationDuration');
      }
   }

   enableAxisTextAnimation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxChart('enableAxisTextAnimation', arg);
      } else {
          return this.host.jqxChart('enableAxisTextAnimation');
      }
   }

   renderEngine(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxChart('renderEngine', arg);
      } else {
          return this.host.jqxChart('renderEngine');
      }
   }

   xAxis(arg?: jqwidgets.ChartXAxis) : any {
      if (arg !== undefined) {
          this.host.jqxChart('xAxis', arg);
      } else {
          return this.host.jqxChart('xAxis');
      }
   }

   valueAxis(arg?: jqwidgets.ChartValueAxis) : any {
      if (arg !== undefined) {
          this.host.jqxChart('valueAxis', arg);
      } else {
          return this.host.jqxChart('valueAxis');
      }
   }

   seriesGroups(arg?: Array<jqwidgets.ChartSeriesGroup>) : any {
      if (arg !== undefined) {
          this.host.jqxChart('seriesGroups', arg);
      } else {
          return this.host.jqxChart('seriesGroups');
      }
   }


   // jqxChartComponent functions
   refresh(): void {
      this.host.jqxChart('refresh');

   }
   update(): void {
      this.host.jqxChart('update');

   }
   destroy(): void {
      this.host.jqxChart('destroy');

   }
   addColorScheme(schemeName: string, colors: Array<string>): void {
      this.host.jqxChart('addColorScheme', schemeName, colors);

   }
   removeColorScheme(schemeName: string): void {
      this.host.jqxChart('removeColorScheme', schemeName);

   }
   getItemsCount(groupIndex: number, serieIndex: number): number {
      return this.host.jqxChart('getItemsCount', groupIndex, serieIndex);

   }
   getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): any {
      return this.host.jqxChart('getItemCoord', groupIndex, serieIndex, itemIndex);

   }
   getXAxisRect(groupIndex: number): jqwidgets.ChartRect {
      return this.host.jqxChart('getXAxisRect', groupIndex);

   }
   getXAxisLabels(groupIndex: number): Array<any> {
      return this.host.jqxChart('getXAxisLabels', groupIndex);

   }
   getValueAxisRect(groupIndex: number): jqwidgets.ChartRect {
      return this.host.jqxChart('getValueAxisRect', groupIndex);

   }
   getValueAxisLabels(groupIndex: number): Array<any> {
      return this.host.jqxChart('getValueAxisLabels', groupIndex);

   }
   getColorScheme(colorScheme: string): Array<string> {
      return this.host.jqxChart('getColorScheme', colorScheme);

   }
   hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void {
      this.host.jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);

   }
   showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void {
      this.host.jqxChart('showSerie', groupIndex, serieIndex, itemIndex);

   }
   hideToolTip(hideDelay: number): void {
      this.host.jqxChart('hideToolTip', hideDelay);

   }
   showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void {
      this.host.jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);

   }
   saveAsJPEG(fileName: string, exportServerUrl: string): void {
      this.host.jqxChart('saveAsJPEG', fileName, exportServerUrl);

   }
   saveAsPDF(fileName: string, exportServerUrl: string): void {
      this.host.jqxChart('saveAsPDF', fileName, exportServerUrl);

   }
   getXAxisValue(offset: number, groupIndex: number): any {
      return this.host.jqxChart('getXAxisValue', offset, groupIndex);

   }
   getValueAxisValue(offset: number, groupIndex: number): any {
      return this.host.jqxChart('getValueAxisValue', offset, groupIndex);

   }

   // jqxChartComponent events
   @Output() OnToggle = new EventEmitter();
   @Output() OnClick = new EventEmitter();
   @Output() OnMouseOver = new EventEmitter();
   @Output() OnMouseOut = new EventEmitter();
   @Output() OnRefreshBegin = new EventEmitter();
   @Output() OnRefreshEnd = new EventEmitter();
   @Output() OnRangeSelectionChanging = new EventEmitter();
   @Output() OnRangeSelectionChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('toggle', (eventData) => { this.OnToggle.emit(eventData); });
      this.host.on('click', (eventData) => { this.OnClick.emit(eventData); });
      this.host.on('mouseOver', (eventData) => { this.OnMouseOver.emit(eventData); });
      this.host.on('mouseOut', (eventData) => { this.OnMouseOut.emit(eventData); });
      this.host.on('refreshBegin', (eventData) => { this.OnRefreshBegin.emit(eventData); });
      this.host.on('refreshEnd', (eventData) => { this.OnRefreshEnd.emit(eventData); });
      this.host.on('rangeSelectionChanging', (eventData) => { this.OnRangeSelectionChanging.emit(eventData); });
      this.host.on('rangeSelectionChanged', (eventData) => { this.OnRangeSelectionChanged.emit(eventData); });
   }

} //jqxChartComponent
