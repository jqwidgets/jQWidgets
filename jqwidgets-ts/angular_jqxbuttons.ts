/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxButtonComponent),
    multi: true
}

@Component({
    selector: 'angularButton',
    template: '<button><ng-content></ng-content></button>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxButtonComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxButton;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   isHostReady(): boolean {
       return (this.host !== undefined && this.host.length == 1);
   }

   createWidget(options: any): void {
      if (!this.isHostReady()) {

         this.host = $(this.elementRef.nativeElement.firstChild);
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
         this.host = this.widgetObject['host'];
         this.__wireEvents__();
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxButton('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxButton('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxButton('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxButton('setOptions', options);
   }

   // jqxButtonComponent properties
   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxButton('delay', arg);
      } else {
          return this.host.jqxButton('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('disabled', arg);
      } else {
          return this.host.jqxButton('disabled');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxButton('height', arg);
      } else {
          return this.host.jqxButton('height');
      }
   }

   imgSrc(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgSrc', arg);
      } else {
          return this.host.jqxButton('imgSrc');
      }
   }

   imgWidth(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgWidth', arg);
      } else {
          return this.host.jqxButton('imgWidth');
      }
   }

   imgHeight(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgHeight', arg);
      } else {
          return this.host.jqxButton('imgHeight');
      }
   }

   imgPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgPosition', arg);
      } else {
          return this.host.jqxButton('imgPosition');
      }
   }

   roundedCorners(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('roundedCorners', arg);
      } else {
          return this.host.jqxButton('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('rtl', arg);
      } else {
          return this.host.jqxButton('rtl');
      }
   }

   textPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('textPosition', arg);
      } else {
          return this.host.jqxButton('textPosition');
      }
   }

   textImageRelation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('textImageRelation', arg);
      } else {
          return this.host.jqxButton('textImageRelation');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('theme', arg);
      } else {
          return this.host.jqxButton('theme');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('template', arg);
      } else {
          return this.host.jqxButton('template');
      }
   }

   toggled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('toggled', arg);
      } else {
          return this.host.jqxButton('toggled');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxButton('width', arg);
      } else {
          return this.host.jqxButton('width');
      }
   }

   value(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('value', arg);
      } else {
          return this.host.jqxButton('value');
      }
   }


   // jqxButtonComponent functions
   check(): void {
      this.host.jqxButton('check');

   }
   destroy(): void {
      this.host.jqxButton('destroy');

   }
   focus(): void {
      this.host.jqxButton('focus');

   }
   render(): void {
      this.host.jqxButton('render');

   }
   toggle(): void {
      this.host.jqxButton('toggle');

   }
   unCheck(): void {
      this.host.jqxButton('unCheck');

   }
   val(value: string): string {
      return this.host.jqxButton('val', value);

   }

   // jqxButtonComponent events
   @Output() OnClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('click', (eventData) => { this.OnClick.emit(eventData); });
   }

} //jqxButtonComponent
