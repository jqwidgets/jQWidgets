/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSliderComponent),
    multi: true
}

@Component({
    selector: 'jqxSlider',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class jqxSliderComponent implements ControlValueAccessor, OnChanges 
{
   @Input('buttonsPosition') attrButtonsPosition: any;
   @Input('disabled') attrDisabled: any;
   @Input('layout') attrLayout: any;
   @Input('mode') attrMode: any;
   @Input('minorTicksFrequency') attrMinorTicksFrequency: any;
   @Input('minorTickSize') attrMinorTickSize: any;
   @Input('max') attrMax: any;
   @Input('min') attrMin: any;
   @Input('orientation') attrOrientation: any;
   @Input('rangeSlider') attrRangeSlider: any;
   @Input('rtl') attrRtl: any;
   @Input('step') attrStep: any;
   @Input('showTicks') attrShowTicks: any;
   @Input('showMinorTicks') attrShowMinorTicks: any;
   @Input('showTickLabels') attrShowTickLabels: any;
   @Input('showButtons') attrShowButtons: any;
   @Input('showRange') attrShowRange: any;
   @Input('template') attrTemplate: any;
   @Input('theme') attrTheme: any;
   @Input('ticksPosition') attrTicksPosition: any;
   @Input('ticksFrequency') attrTicksFrequency: any;
   @Input('tickSize') attrTickSize: any;
   @Input('tickLabelFormatFunction') attrTickLabelFormatFunction: any;
   @Input('tooltip') attrTooltip: any;
   @Input('tooltipHideDelay') attrTooltipHideDelay: any;
   @Input('tooltipPosition') attrTooltipPosition: any;
   @Input('tooltipFormatFunction') attrTooltipFormatFunction: any;
   @Input('value') attrValue: any;
   @Input('values') attrValues: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['buttonsPosition','disabled','height','layout','mode','minorTicksFrequency','minorTickSize','max','min','orientation','rangeSlider','rtl','step','showTicks','showMinorTicks','showTickLabels','showButtons','showRange','template','theme','ticksPosition','ticksFrequency','tickSize','tickLabelFormatFunction','tooltip','tooltipHideDelay','tooltipPosition','tooltipFormatFunction','value','values','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxSlider;

   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxSlider(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxSlider(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxSlider(this.properties[i])) {
                  this.host.jqxSlider(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSlider', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.val();
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.onChangeCallback(value);
       }
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.onChangeCallback(this.host.val());
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxSlider('setOptions', options);
   }

   // jqxSliderComponent properties
   buttonsPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('buttonsPosition', arg);
      } else {
          return this.host.jqxSlider('buttonsPosition');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('disabled', arg);
      } else {
          return this.host.jqxSlider('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('height', arg);
      } else {
          return this.host.jqxSlider('height');
      }
   }

   layout(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('layout', arg);
      } else {
          return this.host.jqxSlider('layout');
      }
   }

   mode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('mode', arg);
      } else {
          return this.host.jqxSlider('mode');
      }
   }

   minorTicksFrequency(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('minorTicksFrequency', arg);
      } else {
          return this.host.jqxSlider('minorTicksFrequency');
      }
   }

   minorTickSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('minorTickSize', arg);
      } else {
          return this.host.jqxSlider('minorTickSize');
      }
   }

   max(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('max', arg);
      } else {
          return this.host.jqxSlider('max');
      }
   }

   min(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('min', arg);
      } else {
          return this.host.jqxSlider('min');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('orientation', arg);
      } else {
          return this.host.jqxSlider('orientation');
      }
   }

   rangeSlider(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('rangeSlider', arg);
      } else {
          return this.host.jqxSlider('rangeSlider');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('rtl', arg);
      } else {
          return this.host.jqxSlider('rtl');
      }
   }

   step(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('step', arg);
      } else {
          return this.host.jqxSlider('step');
      }
   }

   showTicks(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showTicks', arg);
      } else {
          return this.host.jqxSlider('showTicks');
      }
   }

   showMinorTicks(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showMinorTicks', arg);
      } else {
          return this.host.jqxSlider('showMinorTicks');
      }
   }

   showTickLabels(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showTickLabels', arg);
      } else {
          return this.host.jqxSlider('showTickLabels');
      }
   }

   showButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showButtons', arg);
      } else {
          return this.host.jqxSlider('showButtons');
      }
   }

   showRange(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showRange', arg);
      } else {
          return this.host.jqxSlider('showRange');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('template', arg);
      } else {
          return this.host.jqxSlider('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('theme', arg);
      } else {
          return this.host.jqxSlider('theme');
      }
   }

   ticksPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('ticksPosition', arg);
      } else {
          return this.host.jqxSlider('ticksPosition');
      }
   }

   ticksFrequency(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('ticksFrequency', arg);
      } else {
          return this.host.jqxSlider('ticksFrequency');
      }
   }

   tickSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tickSize', arg);
      } else {
          return this.host.jqxSlider('tickSize');
      }
   }

   tickLabelFormatFunction(arg?: (value: any) => String) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tickLabelFormatFunction', arg);
      } else {
          return this.host.jqxSlider('tickLabelFormatFunction');
      }
   }

   tooltip(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tooltip', arg);
      } else {
          return this.host.jqxSlider('tooltip');
      }
   }

   tooltipHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tooltipHideDelay', arg);
      } else {
          return this.host.jqxSlider('tooltipHideDelay');
      }
   }

   tooltipPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tooltipPosition', arg);
      } else {
          return this.host.jqxSlider('tooltipPosition');
      }
   }

   tooltipFormatFunction(arg?: (value: any) => any) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tooltipFormatFunction', arg);
      } else {
          return this.host.jqxSlider('tooltipFormatFunction');
      }
   }

   value(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('value', arg);
      } else {
          return this.host.jqxSlider('value');
      }
   }

   values(arg?: Array<Number>) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('values', arg);
      } else {
          return this.host.jqxSlider('values');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('width', arg);
      } else {
          return this.host.jqxSlider('width');
      }
   }


   // jqxSliderComponent functions
   destroy(): void {
      this.host.jqxSlider('destroy');
   }

   decrementValue(): void {
      this.host.jqxSlider('decrementValue');
   }

   disable(): void {
      this.host.jqxSlider('disable');
   }

   enable(): void {
      this.host.jqxSlider('enable');
   }

   focus(): void {
      this.host.jqxSlider('focus');
   }

   getValue(): number {
      return this.host.jqxSlider('getValue');
   }

   incrementValue(): void {
      this.host.jqxSlider('incrementValue');
   }

   setValue(index: number): void {
      this.host.jqxSlider('setValue', index);
   }

   val(value?: string): any {
      if (value !== undefined) {
         this.host.jqxSlider("val", value);
      } else {
         return this.host.jqxSlider("val");
      }
   };


   // jqxSliderComponent events
   @Output() onChange = new EventEmitter();
   @Output() onCreated = new EventEmitter();
   @Output() onSlide = new EventEmitter();
   @Output() onSlideStart = new EventEmitter();
   @Output() onSlideEnd = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
      this.host.on('created', (eventData: any) => { this.onCreated.emit(eventData); });
      this.host.on('slide', (eventData: any) => { this.onSlide.emit(eventData); });
      this.host.on('slideStart', (eventData: any) => { this.onSlideStart.emit(eventData); });
      this.host.on('slideEnd', (eventData: any) => { this.onSlideEnd.emit(eventData); });
   }

} //jqxSliderComponent


