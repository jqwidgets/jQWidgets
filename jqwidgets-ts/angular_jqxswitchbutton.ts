/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSwitchButtonComponent),
    multi: true
}

@Component({
    selector: 'angularSwitchButton',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxSwitchButtonComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxSwitchButton;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSwitchButton', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxSwitchButton('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxSwitchButton('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxSwitchButton('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxSwitchButton('setOptions', options);
   }

   // jqxSwitchButtonComponent properties
   checked(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSwitchButton('checked', arg);
      } else {
          return this.host.jqxSwitchButton('checked');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSwitchButton('disabled', arg);
      } else {
          return this.host.jqxSwitchButton('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSwitchButton('height', arg);
      } else {
          return this.host.jqxSwitchButton('height');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSwitchButton('orientation', arg);
      } else {
          return this.host.jqxSwitchButton('orientation');
      }
   }

   onLabel(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSwitchButton('onLabel', arg);
      } else {
          return this.host.jqxSwitchButton('onLabel');
      }
   }

   offLabel(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSwitchButton('offLabel', arg);
      } else {
          return this.host.jqxSwitchButton('offLabel');
      }
   }

   thumbSize(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSwitchButton('thumbSize', arg);
      } else {
          return this.host.jqxSwitchButton('thumbSize');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSwitchButton('width', arg);
      } else {
          return this.host.jqxSwitchButton('width');
      }
   }


   // jqxSwitchButtonComponent functions
   check(): void {
      this.host.jqxSwitchButton('check');

   }
   disable(): void {
      this.host.jqxSwitchButton('disable');

   }
   enable(): void {
      this.host.jqxSwitchButton('enable');

   }
   toggle(): void {
      this.host.jqxSwitchButton('toggle');

   }
   uncheck(): void {
      this.host.jqxSwitchButton('uncheck');

   }
   val(value: boolean): boolean {
      return this.host.jqxSwitchButton('val', value);

   }

   // jqxSwitchButtonComponent events
   @Output() OnChecked = new EventEmitter();
   @Output() OnChange = new EventEmitter();
   @Output() OnUnchecked = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('checked', (eventData) => { this.OnChecked.emit(eventData); });
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('unchecked', (eventData) => { this.OnUnchecked.emit(eventData); });
   }

} //jqxSwitchButtonComponent
