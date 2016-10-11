/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxPasswordInputComponent),
    multi: true
}

@Component({
    selector: 'angularPasswordInput',
    template: '<input type="password"><ng-content></ng-content>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxPasswordInputComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxPasswordInput;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxPasswordInput('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxPasswordInput('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxPasswordInput('val', value)
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
   @Output() OnChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
   }

} //jqxPasswordInputComponent
