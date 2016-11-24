/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxComplexInputComponent),
    multi: true
}

@Component({
    selector: 'angularComplexInput',
    template: '<div><input [(ngModel)]="ngValue"><div></div></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxComplexInputComponent implements ControlValueAccessor, OnChanges 
{
   @Input('decimalNotation') attrDecimalNotation;
   @Input('disabled') attrDisabled;
   @Input('placeHolder') attrPlaceHolder;
   @Input('roundedCorners') attrRoundedCorners;
   @Input('rtl') attrRtl;
   @Input('spinButtons') attrSpinButtons;
   @Input('spinButtonsStep') attrSpinButtonsStep;
   @Input('template') attrTemplate;
   @Input('theme') attrTheme;
   @Input('value') attrValue;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['decimalNotation','disabled','height','placeHolder','roundedCorners','rtl','spinButtons','spinButtonsStep','template','theme','value','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxComplexInput;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxComplexInput(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxComplexInput(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxComplexInput(this.properties[i])) {
                  this.host.jqxComplexInput(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComplexInput', options);
      this.__updateRect__();
      setTimeout(() => {
         let valueWithWS = ' ' + options.value;
         this.host.jqxComplexInput({ value: valueWithWS });
      }, 1);
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
           this.host.jqxComplexInput('val', value);
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxComplexInput('setOptions', options);
   }

   // jqxComplexInputComponent properties
   decimalNotation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('decimalNotation', arg);
      } else {
          return this.host.jqxComplexInput('decimalNotation');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('disabled', arg);
      } else {
          return this.host.jqxComplexInput('disabled');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('height', arg);
      } else {
          return this.host.jqxComplexInput('height');
      }
   }

   placeHolder(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('placeHolder', arg);
      } else {
          return this.host.jqxComplexInput('placeHolder');
      }
   }

   roundedCorners(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('roundedCorners', arg);
      } else {
          return this.host.jqxComplexInput('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('rtl', arg);
      } else {
          return this.host.jqxComplexInput('rtl');
      }
   }

   spinButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('spinButtons', arg);
      } else {
          return this.host.jqxComplexInput('spinButtons');
      }
   }

   spinButtonsStep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('spinButtonsStep', arg);
      } else {
          return this.host.jqxComplexInput('spinButtonsStep');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('template', arg);
      } else {
          return this.host.jqxComplexInput('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('theme', arg);
      } else {
          return this.host.jqxComplexInput('theme');
      }
   }

   value(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('value', arg);
      } else {
          return this.host.jqxComplexInput('value');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxComplexInput('width', arg);
      } else {
          return this.host.jqxComplexInput('width');
      }
   }


   // jqxComplexInputComponent functions
   destroy(): void {
      this.host.jqxComplexInput('destroy');
   }
   getReal(complexNumber: number): number {
      return this.host.jqxComplexInput('getReal', complexNumber);
   }
   getImaginary(complexNumber: number): number {
      return this.host.jqxComplexInput('getImaginary', complexNumber);
   }
   render(): void {
      this.host.jqxComplexInput('render');
   }
   refresh(): void {
      this.host.jqxComplexInput('refresh');
   }
   val(): string {
      return this.host.jqxComplexInput('val');
   }

   // jqxComplexInputComponent events
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.value); });
   }

} //jqxComplexInputComponent
