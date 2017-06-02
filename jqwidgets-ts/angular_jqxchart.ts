/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxChart',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxChartComponent implements OnChanges
{
   @Input('title') attrTitle: any;
   @Input('description') attrDescription: any;
   @Input('source') attrSource: any;
   @Input('showBorderLine') attrShowBorderLine: any;
   @Input('borderLineColor') attrBorderLineColor: any;
   @Input('borderLineWidth') attrBorderLineWidth: any;
   @Input('backgroundColor') attrBackgroundColor: any;
   @Input('backgroundImage') attrBackgroundImage: any;
   @Input('showLegend') attrShowLegend: any;
   @Input('legendLayout') attrLegendLayout: any;
   @Input('categoryAxis') attrCategoryAxis: any;
   @Input('padding') attrPadding: any;
   @Input('titlePadding') attrTitlePadding: any;
   @Input('colorScheme') attrColorScheme: any;
   @Input('greyScale') attrGreyScale: any;
   @Input('showToolTips') attrShowToolTips: any;
   @Input('toolTipShowDelay') attrToolTipShowDelay: any;
   @Input('toolTipHideDelay') attrToolTipHideDelay: any;
   @Input('toolTipMoveDuration') attrToolTipMoveDuration: any;
   @Input('drawBefore') attrDrawBefore: any;
   @Input('draw') attrDraw: any;
   @Input('rtl') attrRtl: any;
   @Input('enableCrosshairs') attrEnableCrosshairs: any;
   @Input('crosshairsColor') attrCrosshairsColor: any;
   @Input('crosshairsDashStyle') attrCrosshairsDashStyle: any;
   @Input('crosshairsLineWidth') attrCrosshairsLineWidth: any;
   @Input('columnSeriesOverlap') attrColumnSeriesOverlap: any;
   @Input('enabled') attrEnabled: any;
   @Input('enableAnimations') attrEnableAnimations: any;
   @Input('animationDuration') attrAnimationDuration: any;
   @Input('enableAxisTextAnimation') attrEnableAxisTextAnimation: any;
   @Input('renderEngine') attrRenderEngine: any;
   @Input('xAxis') attrXAxis: any;
   @Input('valueAxis') attrValueAxis: any;
   @Input('seriesGroups') attrSeriesGroups: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['title','description','source','showBorderLine','borderLineColor','borderLineWidth','backgroundColor','backgroundImage','showLegend','legendLayout','categoryAxis','padding','titlePadding','colorScheme','greyScale','showToolTips','toolTipShowDelay','toolTipHideDelay','toolTipMoveDuration','drawBefore','draw','rtl','enableCrosshairs','crosshairsColor','crosshairsDashStyle','crosshairsLineWidth','columnSeriesOverlap','enabled','enableAnimations','animationDuration','enableAxisTextAnimation','renderEngine','xAxis','valueAxis','seriesGroups'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxChart;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
      $(window).resize(() => {
          this.__updateRect__();
      });
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         if (changes.hasOwnProperty('attrWidth') || changes.hasOwnProperty('attrHeight')) {
            this.__updateRect__();
         }
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

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

   arraysEqual(attrValue: any, hostValue: any): boolean {
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

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }

   createComponent(options?: any): void {
      if (options) {
         $.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = $(this.elementRef.nativeElement.firstChild);
      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxChart', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
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

   categoryAxis(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxChart('categoryAxis', arg);
      } else {
          return this.host.jqxChart('categoryAxis');
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

   drawBefore(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxChart('drawBefore', arg);
      } else {
          return this.host.jqxChart('drawBefore');
      }
   }

   draw(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxChart('draw', arg);
      } else {
          return this.host.jqxChart('draw');
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
   getInstance(): any {
      return this.host.jqxChart('getInstance');
   }

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

   hideSerie(groupIndex: number, serieIndex: number, itemIndex: number): void {
      this.host.jqxChart('hideSerie', groupIndex, serieIndex, itemIndex);
   }

   showSerie(groupIndex: number, serieIndex: number, itemIndex: number): void {
      this.host.jqxChart('showSerie', groupIndex, serieIndex, itemIndex);
   }

   hideToolTip(hideDelay: number): void {
      this.host.jqxChart('hideToolTip', hideDelay);
   }

   showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay: number, hideDelay: number): void {
      this.host.jqxChart('showToolTip', groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
   }

   saveAsJPEG(fileName: string, exportServerUrl: string): void {
      this.host.jqxChart('saveAsJPEG', fileName, exportServerUrl);
   }

   saveAsPNG(fileName: string, exportServerUrl: string): void {
      this.host.jqxChart('saveAsPNG', fileName, exportServerUrl);
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
   @Output() onToggle = new EventEmitter();
   @Output() onClick = new EventEmitter();
   @Output() onMouseOver = new EventEmitter();
   @Output() onMouseOut = new EventEmitter();
   @Output() onRefreshBegin = new EventEmitter();
   @Output() onRefreshEnd = new EventEmitter();
   @Output() onRangeSelectionChanging = new EventEmitter();
   @Output() onRangeSelectionChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('toggle', (eventData: any) => { this.onToggle.emit(eventData); });
      this.host.on('click', (eventData: any) => { this.onClick.emit(eventData); });
      this.host.on('mouseOver', (eventData: any) => { this.onMouseOver.emit(eventData); });
      this.host.on('mouseOut', (eventData: any) => { this.onMouseOut.emit(eventData); });
      this.host.on('refreshBegin', (eventData: any) => { this.onRefreshBegin.emit(eventData); });
      this.host.on('refreshEnd', (eventData: any) => { this.onRefreshEnd.emit(eventData); });
      this.host.on('rangeSelectionChanging', (eventData: any) => { this.onRangeSelectionChanging.emit(eventData); });
      this.host.on('rangeSelectionChanged', (eventData: any) => { this.onRangeSelectionChanged.emit(eventData); });
   }

} //jqxChartComponent


