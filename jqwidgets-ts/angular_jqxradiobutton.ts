/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxRadioButtonComponent),
    multi: true
}

@Component({
    selector: 'angularRadioButton',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxRadioButtonComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxRadioButton;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxRadioButton('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxRadioButton('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxRadioButton('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxRadioButton('setOptions', options);
   }

   // jqxRadioButtonComponent properties
   animationShowDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('animationShowDelay', arg);
      } else {
          return this.host.jqxRadioButton('animationShowDelay');
      }
   }

   animationHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('animationHideDelay', arg);
      } else {
          return this.host.jqxRadioButton('animationHideDelay');
      }
   }

   boxSize(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('boxSize', arg);
      } else {
          return this.host.jqxRadioButton('boxSize');
      }
   }

   checked(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('checked', arg);
      } else {
          return this.host.jqxRadioButton('checked');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('disabled', arg);
      } else {
          return this.host.jqxRadioButton('disabled');
      }
   }

   enableContainerClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('enableContainerClick', arg);
      } else {
          return this.host.jqxRadioButton('enableContainerClick');
      }
   }

   groupName(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('groupName', arg);
      } else {
          return this.host.jqxRadioButton('groupName');
      }
   }

   hasThreeStates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('hasThreeStates', arg);
      } else {
          return this.host.jqxRadioButton('hasThreeStates');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('height', arg);
      } else {
          return this.host.jqxRadioButton('height');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('rtl', arg);
      } else {
          return this.host.jqxRadioButton('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('theme', arg);
      } else {
          return this.host.jqxRadioButton('theme');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxRadioButton('width', arg);
      } else {
          return this.host.jqxRadioButton('width');
      }
   }


   // jqxRadioButtonComponent functions
   check(): void {
      this.host.jqxRadioButton('check');

   }
   disable(): void {
      this.host.jqxRadioButton('disable');

   }
   destroy(): void {
      this.host.jqxRadioButton('destroy');

   }
   enable(): void {
      this.host.jqxRadioButton('enable');

   }
   focus(): void {
      this.host.jqxRadioButton('focus');

   }
   render(): void {
      this.host.jqxRadioButton('render');

   }
   uncheck(): void {
      this.host.jqxRadioButton('uncheck');

   }
   val(value: boolean): boolean {
      return this.host.jqxRadioButton('val', value);

   }

   // jqxRadioButtonComponent events
   @Output() OnChecked = new EventEmitter();
   @Output() OnChange = new EventEmitter();
   @Output() OnUnchecked = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('checked', (eventData) => { this.OnChecked.emit(eventData); });
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('unchecked', (eventData) => { this.OnUnchecked.emit(eventData); });
   }

} //jqxRadioButtonComponent
