/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxRatingComponent),
    multi: true
}

@Component({
    selector: 'angularRating',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxRatingComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxRating;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRating', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxRating('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxRating('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxRating('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxRating('setOptions', options);
   }

   // jqxRatingComponent properties
   count(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('count', arg);
      } else {
          return this.host.jqxRating('count');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRating('disabled', arg);
      } else {
          return this.host.jqxRating('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('height', arg);
      } else {
          return this.host.jqxRating('height');
      }
   }

   itemHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('itemHeight', arg);
      } else {
          return this.host.jqxRating('itemHeight');
      }
   }

   itemWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('itemWidth', arg);
      } else {
          return this.host.jqxRating('itemWidth');
      }
   }

   precision(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('precision', arg);
      } else {
          return this.host.jqxRating('precision');
      }
   }

   singleVote(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxRating('singleVote', arg);
      } else {
          return this.host.jqxRating('singleVote');
      }
   }

   value(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('value', arg);
      } else {
          return this.host.jqxRating('value');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxRating('width', arg);
      } else {
          return this.host.jqxRating('width');
      }
   }


   // jqxRatingComponent functions
   disable(): void {
      this.host.jqxRating('disable');

   }
   enable(): void {
      this.host.jqxRating('enable');

   }
   getValue(): number {
      return this.host.jqxRating('getValue');

   }
   setValue(value: number): void {
      this.host.jqxRating('setValue', value);

   }
   val(value: number): number {
      return this.host.jqxRating('val', value);

   }

   // jqxRatingComponent events
   @Output() OnChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
   }

} //jqxRatingComponent
