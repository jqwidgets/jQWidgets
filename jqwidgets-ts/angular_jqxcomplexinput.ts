/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxComplexInputComponent),
    multi: true
}

@Component({
    selector: 'angularComplexInput',
    template: '<input><ng-content></ng-content><div></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxComplexInputComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxComplexInput;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComplexInput', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxComplexInput('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxComplexInput('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxComplexInput('val', value)
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
   @Output() OnChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
   }

} //jqxComplexInputComponent
