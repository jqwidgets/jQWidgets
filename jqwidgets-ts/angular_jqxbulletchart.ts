/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularBulletChart',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxBulletChartComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxBulletChart;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBulletChart', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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

   barSize(arg?: jqwidgets.Size) : any {
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

   height(arg?: jqwidgets.Size) : any {
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

   tooltipFormatFunction(arg?: (pointerValue:number , targetValue:number) => String) : any {
      if (arg !== undefined) {
          this.host.jqxBulletChart('tooltipFormatFunction', arg);
      } else {
          return this.host.jqxBulletChart('tooltipFormatFunction');
      }
   }

   width(arg?: jqwidgets.Size) : any {
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
   val(value: number): number {
      return this.host.jqxBulletChart('val', value);

   }

   // jqxBulletChartComponent events
   @Output() OnChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
   }

} //jqxBulletChartComponent
