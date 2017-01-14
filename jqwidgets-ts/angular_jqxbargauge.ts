/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxBarGauge',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxBarGaugeComponent implements OnChanges
{
   @Input('animationDuration') attrAnimationDuration: any;
   @Input('backgroundColor') attrBackgroundColor: any;
   @Input('barSpacing') attrBarSpacing: any;
   @Input('baseValue') attrBaseValue: any;
   @Input('colorScheme') attrColorScheme: any;
   @Input('customColorScheme') attrCustomColorScheme: any;
   @Input('disabled') attrDisabled: any;
   @Input('endAngle') attrEndAngle: any;
   @Input('formatFunction') attrFormatFunction: any;
   @Input('labels') attrLabels: any;
   @Input('max') attrMax: any;
   @Input('min') attrMin: any;
   @Input('relativeInnerRadius') attrRelativeInnerRadius: any;
   @Input('rendered') attrRendered: any;
   @Input('startAngle') attrStartAngle: any;
   @Input('title') attrTitle: any;
   @Input('tooltip') attrTooltip: any;
   @Input('useGradient') attrUseGradient: any;
   @Input('values') attrValues: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['animationDuration','backgroundColor','barSpacing','baseValue','colorScheme','customColorScheme','disabled','endAngle','formatFunction','height','labels','max','min','relativeInnerRadius','rendered','startAngle','title','tooltip','useGradient','values','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxBarGauge;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
      setTimeout(() => {
         if (this.autoCreate) {
            this.createComponent(); 
         }
      }); 
   }

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName]) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxBarGauge(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxBarGauge(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxBarGauge(this.properties[i])) {
                  this.host.jqxBarGauge(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarGauge', options);
      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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

   val(arg?: String | Number): any {
      if (arg !== undefined) {
         this.host.jqxBarGauge("val", arg);
      } else {
         return this.host.jqxBarGauge("val");
      }
   };


   // jqxBarGaugeComponent events
   @Output() onDrawEnd = new EventEmitter();
   @Output() onDrawStart = new EventEmitter();
   @Output() onInitialized = new EventEmitter();
   @Output() onTooltipClose = new EventEmitter();
   @Output() onTooltipOpen = new EventEmitter();
   @Output() onValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('drawEnd', (eventData: any) => { this.onDrawEnd.emit(eventData); });
      this.host.on('drawStart', (eventData: any) => { this.onDrawStart.emit(eventData); });
      this.host.on('initialized', (eventData: any) => { this.onInitialized.emit(eventData); });
      this.host.on('tooltipClose', (eventData: any) => { this.onTooltipClose.emit(eventData); });
      this.host.on('tooltipOpen', (eventData: any) => { this.onTooltipOpen.emit(eventData); });
      this.host.on('valueChanged', (eventData: any) => { this.onValueChanged.emit(eventData); });
   }

} //jqxBarGaugeComponent


