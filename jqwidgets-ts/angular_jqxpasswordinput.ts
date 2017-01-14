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
    useExisting: forwardRef(() => jqxPasswordInputComponent),
    multi: true
}

@Component({
    selector: 'jqxPasswordInput',
    template: '<input type="password" [(ngModel)]="ngValue">',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxPasswordInputComponent implements ControlValueAccessor, OnChanges 
{
   @Input('disabled') attrDisabled: any;
   @Input('localization') attrLocalization: any;
   @Input('maxLength') attrMaxLength: any;
   @Input('placeHolder') attrPlaceHolder: any;
   @Input('passwordStrength') attrPasswordStrength: any;
   @Input('rtl') attrRtl: any;
   @Input('strengthColors') attrStrengthColors: any;
   @Input('showStrength') attrShowStrength: any;
   @Input('showStrengthPosition') attrShowStrengthPosition: any;
   @Input('strengthTypeRenderer') attrStrengthTypeRenderer: any;
   @Input('showPasswordIcon') attrShowPasswordIcon: any;
   @Input('theme') attrTheme: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['disabled','height','localization','maxLength','placeHolder','passwordStrength','rtl','strengthColors','showStrength','showStrengthPosition','strengthTypeRenderer','showPasswordIcon','theme','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxPasswordInput;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxPasswordInput(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxPasswordInput(this.properties[i])) {
                  this.host.jqxPasswordInput(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
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
           this.host.jqxPasswordInput('val', value);
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxPasswordInput('setOptions', options);
   }

   // jqxPasswordInputComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('disabled', arg);
      } else {
          return this.host.jqxPasswordInput('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('height', arg);
      } else {
          return this.host.jqxPasswordInput('height');
      }
   }

   localization(arg?: jqwidgets.PasswordInpitLocalization) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('localization', arg);
      } else {
          return this.host.jqxPasswordInput('localization');
      }
   }

   maxLength(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('maxLength', arg);
      } else {
          return this.host.jqxPasswordInput('maxLength');
      }
   }

   placeHolder(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('placeHolder', arg);
      } else {
          return this.host.jqxPasswordInput('placeHolder');
      }
   }

   passwordStrength(arg?: (password:String | Number, characters:any, defaultStrength:String) => string) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('passwordStrength', arg);
      } else {
          return this.host.jqxPasswordInput('passwordStrength');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('rtl', arg);
      } else {
          return this.host.jqxPasswordInput('rtl');
      }
   }

   strengthColors(arg?: jqwidgets.PasswordInpitStrengthColors) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('strengthColors', arg);
      } else {
          return this.host.jqxPasswordInput('strengthColors');
      }
   }

   showStrength(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('showStrength', arg);
      } else {
          return this.host.jqxPasswordInput('showStrength');
      }
   }

   showStrengthPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('showStrengthPosition', arg);
      } else {
          return this.host.jqxPasswordInput('showStrengthPosition');
      }
   }

   strengthTypeRenderer(arg?: (password:String | Number, characters:any, defaultStrength:String) => string) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('strengthTypeRenderer', arg);
      } else {
          return this.host.jqxPasswordInput('strengthTypeRenderer');
      }
   }

   showPasswordIcon(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('showPasswordIcon', arg);
      } else {
          return this.host.jqxPasswordInput('showPasswordIcon');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('theme', arg);
      } else {
          return this.host.jqxPasswordInput('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPasswordInput('width', arg);
      } else {
          return this.host.jqxPasswordInput('width');
      }
   }


   // jqxPasswordInputComponent functions
   render(): void {
      this.host.jqxPasswordInput('render');
   }

   refresh(): void {
      this.host.jqxPasswordInput('refresh');
   }

   val(arg?: String | Number): any {
      if (arg !== undefined) {
         this.host.jqxPasswordInput("val", arg);
      } else {
         return this.host.jqxPasswordInput("val");
      }
   };


   // jqxPasswordInputComponent events
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); });
   }

} //jqxPasswordInputComponent


