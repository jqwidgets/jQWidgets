/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxProgressBarComponent),
    multi: true
}

@Component({
    selector: 'angularProgressBar',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxProgressBarComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxProgressBar;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxProgressBar', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxProgressBar('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxProgressBar('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxProgressBar('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxProgressBar('setOptions', options);
   }

   // jqxProgressBarComponent properties
   animationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('animationDuration', arg);
      } else {
          return this.host.jqxProgressBar('animationDuration');
      }
   }

   colorRanges(arg?: Array<jqwidgets.ProgressBarColorRanges>) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('colorRanges', arg);
      } else {
          return this.host.jqxProgressBar('colorRanges');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('disabled', arg);
      } else {
          return this.host.jqxProgressBar('disabled');
      }
   }

   height(arg?: String  | Number) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('height', arg);
      } else {
          return this.host.jqxProgressBar('height');
      }
   }

   layout(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('layout', arg);
      } else {
          return this.host.jqxProgressBar('layout');
      }
   }

   max(arg?: String  | Number) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('max', arg);
      } else {
          return this.host.jqxProgressBar('max');
      }
   }

   min(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('min', arg);
      } else {
          return this.host.jqxProgressBar('min');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('orientation', arg);
      } else {
          return this.host.jqxProgressBar('orientation');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('rtl', arg);
      } else {
          return this.host.jqxProgressBar('rtl');
      }
   }

   renderText(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('renderText', arg);
      } else {
          return this.host.jqxProgressBar('renderText');
      }
   }

   showText(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('showText', arg);
      } else {
          return this.host.jqxProgressBar('showText');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('template', arg);
      } else {
          return this.host.jqxProgressBar('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('theme', arg);
      } else {
          return this.host.jqxProgressBar('theme');
      }
   }

   value(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('value', arg);
      } else {
          return this.host.jqxProgressBar('value');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxProgressBar('width', arg);
      } else {
          return this.host.jqxProgressBar('width');
      }
   }


   // jqxProgressBarComponent functions
   actualValue(value: String | Number): void {
      this.host.jqxProgressBar('actualValue', value);

   }
   destroy(): void {
      this.host.jqxProgressBar('destroy');

   }
   val(value: String | Number): number {
      return this.host.jqxProgressBar('val', value);

   }

   // jqxProgressBarComponent events
   @Output() OnComplete = new EventEmitter();
   @Output() OnInvalidvalue = new EventEmitter();
   @Output() OnValueChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('complete', (eventData) => { this.OnComplete.emit(eventData); });
      this.host.on('invalidvalue', (eventData) => { this.OnInvalidvalue.emit(eventData); });
      this.host.on('valueChanged', (eventData) => { this.OnValueChanged.emit(eventData); });
   }

} //jqxProgressBarComponent
