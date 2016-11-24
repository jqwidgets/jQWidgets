/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxPasswordInputComponent),
    multi: true
}

@Component({
    selector: 'angularPasswordInput',
    template: '<input type="password" [(ngModel)]="ngValue">',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxPasswordInputComponent implements ControlValueAccessor, OnChanges 
{
   @Input('disabled') attrDisabled;
   @Input('localization') attrLocalization;
   @Input('maxLength') attrMaxLength;
   @Input('placeHolder') attrPlaceHolder;
   @Input('passwordStrength') attrPasswordStrength;
   @Input('rtl') attrRtl;
   @Input('strengthColors') attrStrengthColors;
   @Input('showStrength') attrShowStrength;
   @Input('showStrengthPosition') attrShowStrengthPosition;
   @Input('strengthTypeRenderer') attrStrengthTypeRenderer;
   @Input('showPasswordIcon') attrShowPasswordIcon;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['disabled','height','localization','maxLength','placeHolder','passwordStrength','rtl','strengthColors','showStrength','showStrengthPosition','strengthTypeRenderer','showPasswordIcon','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxPasswordInput;

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
   createWidget(options?: any): void {
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
   val(value: string): string {
      return this.host.jqxPasswordInput('val', value);
   }

   // jqxPasswordInputComponent events
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
   }

} //jqxPasswordInputComponent
