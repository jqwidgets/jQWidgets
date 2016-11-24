/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
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

export class jqxRatingComponent implements ControlValueAccessor, OnChanges 
{
   @Input('count') attrCount;
   @Input('disabled') attrDisabled;
   @Input('itemHeight') attrItemHeight;
   @Input('itemWidth') attrItemWidth;
   @Input('precision') attrPrecision;
   @Input('singleVote') attrSingleVote;
   @Input('value') attrValue;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['count','disabled','height','itemHeight','itemWidth','precision','singleVote','value','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxRating;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxRating(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxRating(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxRating(this.properties[i])) {
                  this.host.jqxRating(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRating', options);
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
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
   }

} //jqxRatingComponent
