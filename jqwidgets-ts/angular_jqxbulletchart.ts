/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxtooltip.js';
import '../jqwidgets/jqxbulletchart.js';
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxBulletChart',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxBulletChartComponent implements OnChanges
{
   @Input('animationDuration') attrAnimationDuration: number;
   @Input('barSize') attrBarSize: number | string;
   @Input('description') attrDescription: string;
   @Input('disabled') attrDisabled: boolean;
   @Input('labelsFormat') attrLabelsFormat: any;
   @Input('labelsFormatFunction') attrLabelsFormatFunction: (value?: number, position?:string ) => any;
   @Input('orientation') attrOrientation: any;
   @Input('pointer') attrPointer: jqwidgets.BulletChartPointer;
   @Input('rtl') attrRtl: boolean;
   @Input('ranges') attrRanges: Array<jqwidgets.BulletChartRanges>;
   @Input('showTooltip') attrShowTooltip: boolean;
   @Input('target') attrTarget: jqwidgets.BulletChartPointer;
   @Input('ticks') attrTicks: jqwidgets.BulletChartTicks;
   @Input('title') attrTitle: string;
   @Input('tooltipFormatFunction') attrTooltipFormatFunction: (pointerValue:number , targetValue:number) => string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['animationDuration','barSize','description','disabled','height','labelsFormat','labelsFormatFunction','orientation','pointer','rtl','ranges','showTooltip','target','ticks','title','tooltipFormatFunction','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxBulletChart;

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
            let areEqual: boolean = false;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxBulletChart(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxBulletChart(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxBulletChart(this.properties[i])) {
                  this.host.jqxBulletChart(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
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

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBulletChart', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxBulletChart('setOptions', options);
   }

   // jqxBulletChartComponent properties
   animationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('animationDuration', arg);
      } else {
          return this.host.jqxBulletChart('animationDuration');
      }
   }

   barSize(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('barSize', arg);
      } else {
          return this.host.jqxBulletChart('barSize');
      }
   }

   description(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('description', arg);
      } else {
          return this.host.jqxBulletChart('description');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('disabled', arg);
      } else {
          return this.host.jqxBulletChart('disabled');
      }
   }

   height(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('height', arg);
      } else {
          return this.host.jqxBulletChart('height');
      }
   }

   labelsFormat(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('labelsFormat', arg);
      } else {
          return this.host.jqxBulletChart('labelsFormat');
      }
   }

   labelsFormatFunction(arg?: (value?: number, position?:string ) => any) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('labelsFormatFunction', arg);
      } else {
          return this.host.jqxBulletChart('labelsFormatFunction');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('orientation', arg);
      } else {
          return this.host.jqxBulletChart('orientation');
      }
   }

   pointer(arg?: jqwidgets.BulletChartPointer) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('pointer', arg);
      } else {
          return this.host.jqxBulletChart('pointer');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('rtl', arg);
      } else {
          return this.host.jqxBulletChart('rtl');
      }
   }

   ranges(arg?: Array<jqwidgets.BulletChartRanges>) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('ranges', arg);
      } else {
          return this.host.jqxBulletChart('ranges');
      }
   }

   showTooltip(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('showTooltip', arg);
      } else {
          return this.host.jqxBulletChart('showTooltip');
      }
   }

   target(arg?: jqwidgets.BulletChartPointer) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('target', arg);
      } else {
          return this.host.jqxBulletChart('target');
      }
   }

   ticks(arg?: jqwidgets.BulletChartTicks) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('ticks', arg);
      } else {
          return this.host.jqxBulletChart('ticks');
      }
   }

   title(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('title', arg);
      } else {
          return this.host.jqxBulletChart('title');
      }
   }

   tooltipFormatFunction(arg?: (pointerValue:number , targetValue:number) => string) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('tooltipFormatFunction', arg);
      } else {
          return this.host.jqxBulletChart('tooltipFormatFunction');
      }
   }

   width(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('width', arg);
      } else {
          return this.host.jqxBulletChart('width');
      }
   }


   // jqxBulletChartComponent functions
   destroy(): void {
      this.host.jqxBulletChart('destroy');
   }

   render(): void {
      this.host.jqxBulletChart('render');
   }

   refresh(): void {
      this.host.jqxBulletChart('refresh');
   }

   val(value?: number): any {
      if (value !== undefined) {
         return this.host.jqxBulletChart("val", value);
      } else {
         return this.host.jqxBulletChart("val");
      }
   };


   // jqxBulletChartComponent events
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); });
   }

} //jqxBulletChartComponent


