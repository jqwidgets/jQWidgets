/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxInputComponent),
    multi: true
}

@Component({
    selector: 'angularInput',
    template: '<input type="text" [(ngModel)]="ngValue">',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxInputComponent implements ControlValueAccessor, OnChanges 
{
   @Input('disabled') attrDisabled;
   @Input('dropDownWidth') attrDropDownWidth;
   @Input('displayMember') attrDisplayMember;
   @Input('items') attrItems;
   @Input('minLength') attrMinLength;
   @Input('maxLength') attrMaxLength;
   @Input('opened') attrOpened;
   @Input('placeHolder') attrPlaceHolder;
   @Input('popupZIndex') attrPopupZIndex;
   @Input('query') attrQuery;
   @Input('renderer') attrRenderer;
   @Input('rtl') attrRtl;
   @Input('searchMode') attrSearchMode;
   @Input('source') attrSource;
   @Input('theme') attrTheme;
   @Input('valueMember') attrValueMember;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['disabled','dropDownWidth','displayMember','height','items','minLength','maxLength','opened','placeHolder','popupZIndex','query','renderer','rtl','searchMode','source','theme','valueMember','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxInput;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxInput(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxInput(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxInput(this.properties[i])) {
                  this.host.jqxInput(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxInput', options);
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
           this.host.jqxInput('val', value);
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxInput('setOptions', options);
   }

   // jqxInputComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxInput('disabled', arg);
      } else {
          return this.host.jqxInput('disabled');
      }
   }

   dropDownWidth(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxInput('dropDownWidth', arg);
      } else {
          return this.host.jqxInput('dropDownWidth');
      }
   }

   displayMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxInput('displayMember', arg);
      } else {
          return this.host.jqxInput('displayMember');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxInput('height', arg);
      } else {
          return this.host.jqxInput('height');
      }
   }

   items(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxInput('items', arg);
      } else {
          return this.host.jqxInput('items');
      }
   }

   minLength(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxInput('minLength', arg);
      } else {
          return this.host.jqxInput('minLength');
      }
   }

   maxLength(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxInput('maxLength', arg);
      } else {
          return this.host.jqxInput('maxLength');
      }
   }

   opened(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxInput('opened', arg);
      } else {
          return this.host.jqxInput('opened');
      }
   }

   placeHolder(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxInput('placeHolder', arg);
      } else {
          return this.host.jqxInput('placeHolder');
      }
   }

   popupZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxInput('popupZIndex', arg);
      } else {
          return this.host.jqxInput('popupZIndex');
      }
   }

   query(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxInput('query', arg);
      } else {
          return this.host.jqxInput('query');
      }
   }

   renderer(arg?: (itemValue?: String, inputValue?: String) => String) : any {
      if (arg !== undefined) {
          this.host.jqxInput('renderer', arg);
      } else {
          return this.host.jqxInput('renderer');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxInput('rtl', arg);
      } else {
          return this.host.jqxInput('rtl');
      }
   }

   searchMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxInput('searchMode', arg);
      } else {
          return this.host.jqxInput('searchMode');
      }
   }

   source(arg?: Array<String> | any) : any {
      if (arg !== undefined) {
          this.host.jqxInput('source', arg);
      } else {
          return this.host.jqxInput('source');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxInput('theme', arg);
      } else {
          return this.host.jqxInput('theme');
      }
   }

   valueMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxInput('valueMember', arg);
      } else {
          return this.host.jqxInput('valueMember');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxInput('width', arg);
      } else {
          return this.host.jqxInput('width');
      }
   }


   // jqxInputComponent functions
   destroy(): void {
      this.host.jqxInput('destroy');
   }
   focus(): void {
      this.host.jqxInput('focus');
   }
   selectAll(): void {
      this.host.jqxInput('selectAll');
   }
   val(value: String | Number): string {
      return this.host.jqxInput('val', value);
   }

   // jqxInputComponent events
   @Output() onChange = new EventEmitter();
   @Output() onClose = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onSelect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
      this.host.on('select', (eventData) => { this.onSelect.emit(eventData); if (eventData.args) this.onChangeCallback(eventData.args.value); });
   }

} //jqxInputComponent
