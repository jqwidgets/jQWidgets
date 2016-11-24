/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
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

export class jqxSwitchButtonComponent implements ControlValueAccessor, OnChanges 
{
   @Input('checked') attrChecked;
   @Input('disabled') attrDisabled;
   @Input('orientation') attrOrientation;
   @Input('onLabel') attrOnLabel;
   @Input('offLabel') attrOffLabel;
   @Input('thumbSize') attrThumbSize;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['checked','disabled','height','orientation','onLabel','offLabel','thumbSize','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxSwitchButton;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxSwitchButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxSwitchButton(this.properties[i])) {
                  this.host.jqxSwitchButton(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSwitchButton', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.onChangeCallback(this.host.val());
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
   @Output() onChecked = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onUnchecked = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); });
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
      this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
   }

} //jqxSwitchButtonComponent
