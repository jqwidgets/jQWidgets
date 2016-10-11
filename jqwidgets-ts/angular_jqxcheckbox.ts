/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxCheckBoxComponent),
    multi: true
}

@Component({
    selector: 'angularCheckBox',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxCheckBoxComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxCheckBox;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCheckBox', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxCheckBox('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxCheckBox('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxCheckBox('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxCheckBox('setOptions', options);
   }

   // jqxCheckBoxComponent properties
   animationShowDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('animationShowDelay', arg);
      } else {
          return this.host.jqxCheckBox('animationShowDelay');
      }
   }

   animationHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('animationHideDelay', arg);
      } else {
          return this.host.jqxCheckBox('animationHideDelay');
      }
   }

   boxSize(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('boxSize', arg);
      } else {
          return this.host.jqxCheckBox('boxSize');
      }
   }

   checked(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('checked', arg);
      } else {
          return this.host.jqxCheckBox('checked');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('disabled', arg);
      } else {
          return this.host.jqxCheckBox('disabled');
      }
   }

   enableContainerClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('enableContainerClick', arg);
      } else {
          return this.host.jqxCheckBox('enableContainerClick');
      }
   }

   groupName(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('groupName', arg);
      } else {
          return this.host.jqxCheckBox('groupName');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('height', arg);
      } else {
          return this.host.jqxCheckBox('height');
      }
   }

   hasThreeStates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('hasThreeStates', arg);
      } else {
          return this.host.jqxCheckBox('hasThreeStates');
      }
   }

   locked(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('locked', arg);
      } else {
          return this.host.jqxCheckBox('locked');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('rtl', arg);
      } else {
          return this.host.jqxCheckBox('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('theme', arg);
      } else {
          return this.host.jqxCheckBox('theme');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxCheckBox('width', arg);
      } else {
          return this.host.jqxCheckBox('width');
      }
   }


   // jqxCheckBoxComponent functions
   check(): void {
      this.host.jqxCheckBox('check');

   }
   disable(): void {
      this.host.jqxCheckBox('disable');

   }
   destroy(): void {
      this.host.jqxCheckBox('destroy');

   }
   enable(): void {
      this.host.jqxCheckBox('enable');

   }
   focus(): void {
      this.host.jqxCheckBox('focus');

   }
   indeterminate(): void {
      this.host.jqxCheckBox('indeterminate');

   }
   render(): void {
      this.host.jqxCheckBox('render');

   }
   toggle(): void {
      this.host.jqxCheckBox('toggle');

   }
   uncheck(): void {
      this.host.jqxCheckBox('uncheck');

   }
   val(value: boolean): boolean {
      return this.host.jqxCheckBox('val', value);

   }

   // jqxCheckBoxComponent events
   @Output() OnChecked = new EventEmitter();
   @Output() OnChange = new EventEmitter();
   @Output() OnIndeterminate = new EventEmitter();
   @Output() OnUnchecked = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('checked', (eventData) => { this.OnChecked.emit(eventData); });
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('indeterminate', (eventData) => { this.OnIndeterminate.emit(eventData); });
      this.host.on('unchecked', (eventData) => { this.OnUnchecked.emit(eventData); });
   }

} //jqxCheckBoxComponent
