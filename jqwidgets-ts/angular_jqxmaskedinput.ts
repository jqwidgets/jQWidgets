/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxMaskedInputComponent),
    multi: true
}

@Component({
    selector: 'jqxMaskedInput',
    template: '<input>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxMaskedInputComponent implements ControlValueAccessor, OnChanges 
{
   @Input('disabled') attrDisabled: any;
   @Input('mask') attrMask: any;
   @Input('promptChar') attrPromptChar: any;
   @Input('readOnly') attrReadOnly: any;
   @Input('rtl') attrRtl: any;
   @Input('theme') attrTheme: any;
   @Input('textAlign') attrTextAlign: any;
   @Input('value') attrValue: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['disabled','height','mask','promptChar','readOnly','rtl','theme','textAlign','value','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxMaskedInput;

   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxMaskedInput(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxMaskedInput(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxMaskedInput(this.properties[i])) {
                  this.host.jqxMaskedInput(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMaskedInput', options);
      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.host.jqxMaskedInput('val', value);
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

   val(arg?: String | Number): any {
      if (arg !== undefined) {
         this.host.jqxMaskedInput("val", arg);
      } else {
         return this.host.jqxMaskedInput("val");
      }
   };


   // jqxMaskedInputComponent events
   @Output() onChange = new EventEmitter();
   @Output() onValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.text); });
      this.host.on('valueChanged', (eventData: any) => { this.onValueChanged.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.text); });
   }

} //jqxMaskedInputComponent


