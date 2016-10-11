/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxNumberInputComponent),
    multi: true
}

@Component({
    selector: 'angularNumberInput',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxNumberInputComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxNumberInput;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxNumberInput('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxNumberInput('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxNumberInput('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxNumberInput('setOptions', options);
   }

   // jqxNumberInputComponent properties
   allowNull(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('allowNull', arg);
      } else {
          return this.host.jqxNumberInput('allowNull');
      }
   }

   decimal(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('decimal', arg);
      } else {
          return this.host.jqxNumberInput('decimal');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('disabled', arg);
      } else {
          return this.host.jqxNumberInput('disabled');
      }
   }

   decimalDigits(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('decimalDigits', arg);
      } else {
          return this.host.jqxNumberInput('decimalDigits');
      }
   }

   decimalSeparator(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('decimalSeparator', arg);
      } else {
          return this.host.jqxNumberInput('decimalSeparator');
      }
   }

   digits(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('digits', arg);
      } else {
          return this.host.jqxNumberInput('digits');
      }
   }

   groupSeparator(arg?: String) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('groupSeparator', arg);
      } else {
          return this.host.jqxNumberInput('groupSeparator');
      }
   }

   groupSize(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('groupSize', arg);
      } else {
          return this.host.jqxNumberInput('groupSize');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('height', arg);
      } else {
          return this.host.jqxNumberInput('height');
      }
   }

   inputMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('inputMode', arg);
      } else {
          return this.host.jqxNumberInput('inputMode');
      }
   }

   min(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('min', arg);
      } else {
          return this.host.jqxNumberInput('min');
      }
   }

   max(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('max', arg);
      } else {
          return this.host.jqxNumberInput('max');
      }
   }

   negativeSymbol(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('negativeSymbol', arg);
      } else {
          return this.host.jqxNumberInput('negativeSymbol');
      }
   }

   placeHolder(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('placeHolder', arg);
      } else {
          return this.host.jqxNumberInput('placeHolder');
      }
   }

   promptChar(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('promptChar', arg);
      } else {
          return this.host.jqxNumberInput('promptChar');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('rtl', arg);
      } else {
          return this.host.jqxNumberInput('rtl');
      }
   }

   readOnly(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('readOnly', arg);
      } else {
          return this.host.jqxNumberInput('readOnly');
      }
   }

   spinMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('spinMode', arg);
      } else {
          return this.host.jqxNumberInput('spinMode');
      }
   }

   spinButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('spinButtons', arg);
      } else {
          return this.host.jqxNumberInput('spinButtons');
      }
   }

   spinButtonsWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('spinButtonsWidth', arg);
      } else {
          return this.host.jqxNumberInput('spinButtonsWidth');
      }
   }

   spinButtonsStep(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('spinButtonsStep', arg);
      } else {
          return this.host.jqxNumberInput('spinButtonsStep');
      }
   }

   symbol(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('symbol', arg);
      } else {
          return this.host.jqxNumberInput('symbol');
      }
   }

   symbolPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('symbolPosition', arg);
      } else {
          return this.host.jqxNumberInput('symbolPosition');
      }
   }

   textAlign(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('textAlign', arg);
      } else {
          return this.host.jqxNumberInput('textAlign');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('template', arg);
      } else {
          return this.host.jqxNumberInput('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('theme', arg);
      } else {
          return this.host.jqxNumberInput('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNumberInput('width', arg);
      } else {
          return this.host.jqxNumberInput('width');
      }
   }


   // jqxNumberInputComponent functions
   clear(): void {
      this.host.jqxNumberInput('clear');

   }
   destroy(): void {
      this.host.jqxNumberInput('destroy');

   }
   focus(): void {
      this.host.jqxNumberInput('focus');

   }
   getDecimal(): number {
      return this.host.jqxNumberInput('getDecimal');

   }
   setDecimal(index: String | Number): void {
      this.host.jqxNumberInput('setDecimal', index);

   }
   val(value: String | Number): number {
      return this.host.jqxNumberInput('val', value);

   }

   // jqxNumberInputComponent events
   @Output() OnChange = new EventEmitter();
   @Output() OnTextchanged = new EventEmitter();
   @Output() OnValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('textchanged', (eventData) => { this.OnTextchanged.emit(eventData); });
      this.host.on('valueChanged', (eventData) => { this.OnValueChanged.emit(eventData); });
   }

} //jqxNumberInputComponent
