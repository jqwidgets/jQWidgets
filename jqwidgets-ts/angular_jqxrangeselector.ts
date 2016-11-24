/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularRangeSelector',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxRangeSelectorComponent implements OnChanges
{
   @Input('disabled') attrDisabled;
   @Input('labelFormat') attrLabelFormat;
   @Input('labelsFormatFunction') attrLabelsFormatFunction;
   @Input('labelPrecision') attrLabelPrecision;
   @Input('moveOnClick') attrMoveOnClick;
   @Input('markerRenderer') attrMarkerRenderer;
   @Input('markerPrecision') attrMarkerPrecision;
   @Input('majorLabelRenderer') attrMajorLabelRenderer;
   @Input('markerFormat') attrMarkerFormat;
   @Input('majorTicksInterval') attrMajorTicksInterval;
   @Input('minorTicksInterval') attrMinorTicksInterval;
   @Input('max') attrMax;
   @Input('min') attrMin;
   @Input('padding') attrPadding;
   @Input('range') attrRange;
   @Input('resizable') attrResizable;
   @Input('rtl') attrRtl;
   @Input('showMinorTicks') attrShowMinorTicks;
   @Input('snapToTicks') attrSnapToTicks;
   @Input('showMajorLabels') attrShowMajorLabels;
   @Input('showMarkers') attrShowMarkers;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['disabled','height','labelFormat','labelsFormatFunction','labelPrecision','moveOnClick','markerRenderer','markerPrecision','majorLabelRenderer','markerFormat','majorTicksInterval','minorTicksInterval','max','min','padding','range','resizable','rtl','showMinorTicks','snapToTicks','showMajorLabels','showMarkers','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxRangeSelector;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnChanges(changes) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName]) {
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
   createWidget(options?: any): void {
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

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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

   labelFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('labelFormat', arg);
      } else {
          return this.host.jqxRangeSelector('labelFormat');
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

   markerFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRangeSelector('markerFormat', arg);
      } else {
          return this.host.jqxRangeSelector('markerFormat');
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
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
   }

} //jqxRangeSelectorComponent
