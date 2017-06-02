/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxRangeSelector',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxRangeSelectorComponent implements OnChanges
{
   @Input('disabled') attrDisabled: any;
   @Input('labelsFormat') attrLabelsFormat: any;
   @Input('labelsFormatFunction') attrLabelsFormatFunction: any;
   @Input('labelPrecision') attrLabelPrecision: any;
   @Input('moveOnClick') attrMoveOnClick: any;
   @Input('markerRenderer') attrMarkerRenderer: any;
   @Input('markerPrecision') attrMarkerPrecision: any;
   @Input('majorLabelRenderer') attrMajorLabelRenderer: any;
   @Input('markersFormat') attrMarkersFormat: any;
   @Input('majorTicksInterval') attrMajorTicksInterval: any;
   @Input('minorTicksInterval') attrMinorTicksInterval: any;
   @Input('max') attrMax: any;
   @Input('min') attrMin: any;
   @Input('padding') attrPadding: any;
   @Input('range') attrRange: any;
   @Input('resizable') attrResizable: any;
   @Input('rtl') attrRtl: any;
   @Input('showMinorTicks') attrShowMinorTicks: any;
   @Input('snapToTicks') attrSnapToTicks: any;
   @Input('showMajorLabels') attrShowMajorLabels: any;
   @Input('showMarkers') attrShowMarkers: any;
   @Input('theme') attrTheme: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['disabled','height','labelsFormat','labelsFormatFunction','labelPrecision','moveOnClick','markerRenderer','markerPrecision','majorLabelRenderer','markersFormat','majorTicksInterval','minorTicksInterval','max','min','padding','range','resizable','rtl','showMinorTicks','snapToTicks','showMajorLabels','showMarkers','theme','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxRangeSelector;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxRangeSelector(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxRangeSelector(this.properties[i])) {
                  this.host.jqxRangeSelector(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRangeSelector', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxRangeSelector('setOptions', options);
   }

   // jqxRangeSelectorComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('disabled', arg);
      } else {
          return this.host.jqxRangeSelector('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('height', arg);
      } else {
          return this.host.jqxRangeSelector('height');
      }
   }

   labelsFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('labelsFormat', arg);
      } else {
          return this.host.jqxRangeSelector('labelsFormat');
      }
   }

   labelsFormatFunction(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('labelsFormatFunction', arg);
      } else {
          return this.host.jqxRangeSelector('labelsFormatFunction');
      }
   }

   labelPrecision(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('labelPrecision', arg);
      } else {
          return this.host.jqxRangeSelector('labelPrecision');
      }
   }

   moveOnClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('moveOnClick', arg);
      } else {
          return this.host.jqxRangeSelector('moveOnClick');
      }
   }

   markerRenderer(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('markerRenderer', arg);
      } else {
          return this.host.jqxRangeSelector('markerRenderer');
      }
   }

   markerPrecision(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('markerPrecision', arg);
      } else {
          return this.host.jqxRangeSelector('markerPrecision');
      }
   }

   majorLabelRenderer(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('majorLabelRenderer', arg);
      } else {
          return this.host.jqxRangeSelector('majorLabelRenderer');
      }
   }

   markersFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('markersFormat', arg);
      } else {
          return this.host.jqxRangeSelector('markersFormat');
      }
   }

   majorTicksInterval(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('majorTicksInterval', arg);
      } else {
          return this.host.jqxRangeSelector('majorTicksInterval');
      }
   }

   minorTicksInterval(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('minorTicksInterval', arg);
      } else {
          return this.host.jqxRangeSelector('minorTicksInterval');
      }
   }

   max(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('max', arg);
      } else {
          return this.host.jqxRangeSelector('max');
      }
   }

   min(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('min', arg);
      } else {
          return this.host.jqxRangeSelector('min');
      }
   }

   padding(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('padding', arg);
      } else {
          return this.host.jqxRangeSelector('padding');
      }
   }

   range(arg?: jqwidgets.RangeSelectorRange) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('range', arg);
      } else {
          return this.host.jqxRangeSelector('range');
      }
   }

   resizable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('resizable', arg);
      } else {
          return this.host.jqxRangeSelector('resizable');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('rtl', arg);
      } else {
          return this.host.jqxRangeSelector('rtl');
      }
   }

   showMinorTicks(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('showMinorTicks', arg);
      } else {
          return this.host.jqxRangeSelector('showMinorTicks');
      }
   }

   snapToTicks(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('snapToTicks', arg);
      } else {
          return this.host.jqxRangeSelector('snapToTicks');
      }
   }

   showMajorLabels(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('showMajorLabels', arg);
      } else {
          return this.host.jqxRangeSelector('showMajorLabels');
      }
   }

   showMarkers(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('showMarkers', arg);
      } else {
          return this.host.jqxRangeSelector('showMarkers');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('theme', arg);
      } else {
          return this.host.jqxRangeSelector('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('width', arg);
      } else {
          return this.host.jqxRangeSelector('width');
      }
   }


   // jqxRangeSelectorComponent functions
   destroy(): void {
      this.host.jqxRangeSelector('destroy');
   }

   getRange(): jqwidgets.RangeSelectorGetRange {
      return this.host.jqxRangeSelector('getRange');
   }

   render(): void {
      this.host.jqxRangeSelector('render');
   }

   refresh(): void {
      this.host.jqxRangeSelector('refresh');
   }

   setRange(from: any, to: any): void {
      this.host.jqxRangeSelector('setRange', from, to);
   }


   // jqxRangeSelectorComponent events
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); });
   }

} //jqxRangeSelectorComponent


