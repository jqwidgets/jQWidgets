/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSliderComponent),
    multi: true
}

@Component({
    selector: 'angularSlider',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxSliderComponent implements ControlValueAccessor, OnChanges 
{
   @Input('buttonsPosition') attrButtonsPosition;
   @Input('disabled') attrDisabled;
   @Input('layout') attrLayout;
   @Input('mode') attrMode;
   @Input('minorTicksFrequency') attrMinorTicksFrequency;
   @Input('minorTickSize') attrMinorTickSize;
   @Input('max') attrMax;
   @Input('min') attrMin;
   @Input('rangeSlider') attrRangeSlider;
   @Input('rtl') attrRtl;
   @Input('step') attrStep;
   @Input('showTicks') attrShowTicks;
   @Input('showMinorTicks') attrShowMinorTicks;
   @Input('showTickLabels') attrShowTickLabels;
   @Input('showButtons') attrShowButtons;
   @Input('showRange') attrShowRange;
   @Input('template') attrTemplate;
   @Input('theme') attrTheme;
   @Input('ticksPosition') attrTicksPosition;
   @Input('ticksFrequency') attrTicksFrequency;
   @Input('tickSize') attrTickSize;
   @Input('tickLabelFormatFunction') attrTickLabelFormatFunction;
   @Input('tooltip') attrTooltip;
   @Input('tooltipHideDelay') attrTooltipHideDelay;
   @Input('tooltipPosition') attrTooltipPosition;
   @Input('tooltipFormatFunction') attrTooltipFormatFunction;
   @Input('value') attrValue;
   @Input('values') attrValues;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['buttonsPosition','disabled','height','layout','mode','minorTicksFrequency','minorTickSize','max','min','rangeSlider','rtl','step','showTicks','showMinorTicks','showTickLabels','showButtons','showRange','template','theme','ticksPosition','ticksFrequency','tickSize','tickLabelFormatFunction','tooltip','tooltipHideDelay','tooltipPosition','tooltipFormatFunction','value','values','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxSlider;

   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

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
   createWidget(options?: any): void {
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

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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

   tooltipFormatFunction(arg?: (value: any) => string) : any {
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
   val(value: string): string {
      return this.host.jqxSlider('val', value);
   }

   // jqxSliderComponent events
   @Output() onChange = new EventEmitter();
   @Output() onCreated = new EventEmitter();
   @Output() onSlide = new EventEmitter();
   @Output() onSlideStart = new EventEmitter();
   @Output() onSlideEnd = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
      this.host.on('created', (eventData) => { this.onCreated.emit(eventData); });
      this.host.on('slide', (eventData) => { this.onSlide.emit(eventData); });
      this.host.on('slideStart', (eventData) => { this.onSlideStart.emit(eventData); });
      this.host.on('slideEnd', (eventData) => { this.onSlideEnd.emit(eventData); });
   }

} //jqxSliderComponent
