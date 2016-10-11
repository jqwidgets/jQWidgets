/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularLinearGauge',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxLinearGaugeComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxLinearGauge;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinearGauge', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxLinearGauge('setOptions', options);
   }

   // jqxLinearGaugeComponent properties
   animationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('animationDuration', arg);
      } else {
          return this.host.jqxLinearGauge('animationDuration');
      }
   }

   background(arg?: jqwidgets.LinearGaugeBackground) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('background', arg);
      } else {
          return this.host.jqxLinearGauge('background');
      }
   }

   colorScheme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('colorScheme', arg);
      } else {
          return this.host.jqxLinearGauge('colorScheme');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('disabled', arg);
      } else {
          return this.host.jqxLinearGauge('disabled');
      }
   }

   easing(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('easing', arg);
      } else {
          return this.host.jqxLinearGauge('easing');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('height', arg);
      } else {
          return this.host.jqxLinearGauge('height');
      }
   }

   int64(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('int64', arg);
      } else {
          return this.host.jqxLinearGauge('int64');
      }
   }

   labels(arg?: jqwidgets.LinearGaugeLabels) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('labels', arg);
      } else {
          return this.host.jqxLinearGauge('labels');
      }
   }

   min(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('min', arg);
      } else {
          return this.host.jqxLinearGauge('min');
      }
   }

   max(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('max', arg);
      } else {
          return this.host.jqxLinearGauge('max');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('orientation', arg);
      } else {
          return this.host.jqxLinearGauge('orientation');
      }
   }

   pointer(arg?: jqwidgets.LinearGaugePointer) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('pointer', arg);
      } else {
          return this.host.jqxLinearGauge('pointer');
      }
   }

   rangesOffset(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('rangesOffset', arg);
      } else {
          return this.host.jqxLinearGauge('rangesOffset');
      }
   }

   rangeSize(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('rangeSize', arg);
      } else {
          return this.host.jqxLinearGauge('rangeSize');
      }
   }

   ranges(arg?: Array<jqwidgets.LinearGaugeRanges>) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ranges', arg);
      } else {
          return this.host.jqxLinearGauge('ranges');
      }
   }

   showRanges(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('showRanges', arg);
      } else {
          return this.host.jqxLinearGauge('showRanges');
      }
   }

   scaleStyle(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('scaleStyle', arg);
      } else {
          return this.host.jqxLinearGauge('scaleStyle');
      }
   }

   scaleLength(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('scaleLength', arg);
      } else {
          return this.host.jqxLinearGauge('scaleLength');
      }
   }

   ticksOffset(arg?: Array<Number | String>) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ticksOffset', arg);
      } else {
          return this.host.jqxLinearGauge('ticksOffset');
      }
   }

   ticksPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ticksPosition', arg);
      } else {
          return this.host.jqxLinearGauge('ticksPosition');
      }
   }

   ticksMinor(arg?: jqwidgets.LinearGaugeTicks) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ticksMinor', arg);
      } else {
          return this.host.jqxLinearGauge('ticksMinor');
      }
   }

   ticksMajor(arg?: jqwidgets.LinearGaugeTicks) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('ticksMajor', arg);
      } else {
          return this.host.jqxLinearGauge('ticksMajor');
      }
   }

   value(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('value', arg);
      } else {
          return this.host.jqxLinearGauge('value');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('width', arg);
      } else {
          return this.host.jqxLinearGauge('width');
      }
   }

   disable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('disable', arg);
      } else {
          return this.host.jqxLinearGauge('disable');
      }
   }

   enable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinearGauge('enable', arg);
      } else {
          return this.host.jqxLinearGauge('enable');
      }
   }


   // jqxLinearGaugeComponent functions
   val(value: String | Number): number {
      return this.host.jqxLinearGauge('val', value);

   }

   // jqxLinearGaugeComponent events
   @Output() OnValueChanging = new EventEmitter();
   @Output() OnValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('valueChanging', (eventData) => { this.OnValueChanging.emit(eventData); });
      this.host.on('valueChanged', (eventData) => { this.OnValueChanged.emit(eventData); });
   }

} //jqxLinearGaugeComponent
