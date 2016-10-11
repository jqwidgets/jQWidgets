/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularBarGauge',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxBarGaugeComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxBarGauge;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarGauge', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxBarGauge('setOptions', options);
   }

   // jqxBarGaugeComponent properties
   animationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('animationDuration', arg);
      } else {
          return this.host.jqxBarGauge('animationDuration');
      }
   }

   backgroundColor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('backgroundColor', arg);
      } else {
          return this.host.jqxBarGauge('backgroundColor');
      }
   }

   barSpacing(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('barSpacing', arg);
      } else {
          return this.host.jqxBarGauge('barSpacing');
      }
   }

   baseValue(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('baseValue', arg);
      } else {
          return this.host.jqxBarGauge('baseValue');
      }
   }

   colorScheme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('colorScheme', arg);
      } else {
          return this.host.jqxBarGauge('colorScheme');
      }
   }

   customColorScheme(arg?: jqwidgets.BarGaugeCustomColorScheme) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('customColorScheme', arg);
      } else {
          return this.host.jqxBarGauge('customColorScheme');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('disabled', arg);
      } else {
          return this.host.jqxBarGauge('disabled');
      }
   }

   endAngle(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('endAngle', arg);
      } else {
          return this.host.jqxBarGauge('endAngle');
      }
   }

   formatFunction(arg?: jqwidgets.BarGaugeFormatFunction) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('formatFunction', arg);
      } else {
          return this.host.jqxBarGauge('formatFunction');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('height', arg);
      } else {
          return this.host.jqxBarGauge('height');
      }
   }

   labels(arg?: jqwidgets.BarGaugeLabels) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('labels', arg);
      } else {
          return this.host.jqxBarGauge('labels');
      }
   }

   max(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('max', arg);
      } else {
          return this.host.jqxBarGauge('max');
      }
   }

   min(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('min', arg);
      } else {
          return this.host.jqxBarGauge('min');
      }
   }

   relativeInnerRadius(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('relativeInnerRadius', arg);
      } else {
          return this.host.jqxBarGauge('relativeInnerRadius');
      }
   }

   rendered(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('rendered', arg);
      } else {
          return this.host.jqxBarGauge('rendered');
      }
   }

   startAngle(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('startAngle', arg);
      } else {
          return this.host.jqxBarGauge('startAngle');
      }
   }

   title(arg?: jqwidgets.BarGaugeTitle) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('title', arg);
      } else {
          return this.host.jqxBarGauge('title');
      }
   }

   tooltip(arg?: jqwidgets.BarGaugeTooltip) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('tooltip', arg);
      } else {
          return this.host.jqxBarGauge('tooltip');
      }
   }

   useGradient(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('useGradient', arg);
      } else {
          return this.host.jqxBarGauge('useGradient');
      }
   }

   values(arg?: Array<Number>) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('values', arg);
      } else {
          return this.host.jqxBarGauge('values');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxBarGauge('width', arg);
      } else {
          return this.host.jqxBarGauge('width');
      }
   }


   // jqxBarGaugeComponent functions
   refresh(): void {
      this.host.jqxBarGauge('refresh');

   }
   render(): void {
      this.host.jqxBarGauge('render');

   }
   val(value: Array<Number>): Array<Number> {
      return this.host.jqxBarGauge('val', value);

   }

   // jqxBarGaugeComponent events
   @Output() OnDrawEnd = new EventEmitter();
   @Output() OnDrawStart = new EventEmitter();
   @Output() OnInitialized = new EventEmitter();
   @Output() OnTooltipClose = new EventEmitter();
   @Output() OnTooltipOpen = new EventEmitter();
   @Output() OnValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('drawEnd', (eventData) => { this.OnDrawEnd.emit(eventData); });
      this.host.on('drawStart', (eventData) => { this.OnDrawStart.emit(eventData); });
      this.host.on('initialized', (eventData) => { this.OnInitialized.emit(eventData); });
      this.host.on('tooltipClose', (eventData) => { this.OnTooltipClose.emit(eventData); });
      this.host.on('tooltipOpen', (eventData) => { this.OnTooltipOpen.emit(eventData); });
      this.host.on('valueChanged', (eventData) => { this.OnValueChanged.emit(eventData); });
   }

} //jqxBarGaugeComponent
