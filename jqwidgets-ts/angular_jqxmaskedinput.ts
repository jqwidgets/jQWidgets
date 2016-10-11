/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxMaskedInputComponent),
    multi: true
}

@Component({
    selector: 'angularMaskedInput',
    template: '<input><ng-content></ng-content>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxMaskedInputComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxMaskedInput;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMaskedInput', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxMaskedInput('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxMaskedInput('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxMaskedInput('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxMaskedInput('setOptions', options);
   }

   // jqxMaskedInputComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('disabled', arg);
      } else {
          return this.host.jqxMaskedInput('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('height', arg);
      } else {
          return this.host.jqxMaskedInput('height');
      }
   }

   mask(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('mask', arg);
      } else {
          return this.host.jqxMaskedInput('mask');
      }
   }

   promptChar(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('promptChar', arg);
      } else {
          return this.host.jqxMaskedInput('promptChar');
      }
   }

   readOnly(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('readOnly', arg);
      } else {
          return this.host.jqxMaskedInput('readOnly');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('rtl', arg);
      } else {
          return this.host.jqxMaskedInput('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('theme', arg);
      } else {
          return this.host.jqxMaskedInput('theme');
      }
   }

   textAlign(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('textAlign', arg);
      } else {
          return this.host.jqxMaskedInput('textAlign');
      }
   }

   value(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('value', arg);
      } else {
          return this.host.jqxMaskedInput('value');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxMaskedInput('width', arg);
      } else {
          return this.host.jqxMaskedInput('width');
      }
   }


   // jqxMaskedInputComponent functions
   clear(): void {
      this.host.jqxMaskedInput('clear');

   }
   destroy(): void {
      this.host.jqxMaskedInput('destroy');

   }
   focus(): void {
      this.host.jqxMaskedInput('focus');

   }
   val(value: String | Number): string {
      return this.host.jqxMaskedInput('val', value);

   }

   // jqxMaskedInputComponent events
   @Output() OnChange = new EventEmitter();
   @Output() OnValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('valueChanged', (eventData) => { this.OnValueChanged.emit(eventData); });
   }

} //jqxMaskedInputComponent
