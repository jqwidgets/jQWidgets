/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxTextAreaComponent),
    multi: true
}

@Component({
    selector: 'angularTextArea',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxTextAreaComponent implements ControlValueAccessor, OnChanges 
{
   @Input('disabled') attrDisabled;
   @Input('displayMember') attrDisplayMember;
   @Input('dropDownWidth') attrDropDownWidth;
   @Input('items') attrItems;
   @Input('maxLength') attrMaxLength;
   @Input('minLength') attrMinLength;
   @Input('opened') attrOpened;
   @Input('placeHolder') attrPlaceHolder;
   @Input('popupZIndex') attrPopupZIndex;
   @Input('query') attrQuery;
   @Input('renderer') attrRenderer;
   @Input('roundedCorners') attrRoundedCorners;
   @Input('rtl') attrRtl;
   @Input('scrollBarSize') attrScrollBarSize;
   @Input('searchMode') attrSearchMode;
   @Input('source') attrSource;
   @Input('theme') attrTheme;
   @Input('valueMember') attrValueMember;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['disabled','displayMember','dropDownWidth','height','items','maxLength','minLength','opened','placeHolder','popupZIndex','query','renderer','roundedCorners','rtl','scrollBarSize','searchMode','source','theme','valueMember','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTextArea;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxTextArea(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxTextArea(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxTextArea(this.properties[i])) {
                  this.host.jqxTextArea(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTextArea', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxTextArea('setOptions', options);
   }

   // jqxTextAreaComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('disabled', arg);
      } else {
          return this.host.jqxTextArea('disabled');
      }
   }

   displayMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('displayMember', arg);
      } else {
          return this.host.jqxTextArea('displayMember');
      }
   }

   dropDownWidth(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('dropDownWidth', arg);
      } else {
          return this.host.jqxTextArea('dropDownWidth');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('height', arg);
      } else {
          return this.host.jqxTextArea('height');
      }
   }

   items(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('items', arg);
      } else {
          return this.host.jqxTextArea('items');
      }
   }

   maxLength(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('maxLength', arg);
      } else {
          return this.host.jqxTextArea('maxLength');
      }
   }

   minLength(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('minLength', arg);
      } else {
          return this.host.jqxTextArea('minLength');
      }
   }

   opened(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('opened', arg);
      } else {
          return this.host.jqxTextArea('opened');
      }
   }

   placeHolder(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('placeHolder', arg);
      } else {
          return this.host.jqxTextArea('placeHolder');
      }
   }

   popupZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('popupZIndex', arg);
      } else {
          return this.host.jqxTextArea('popupZIndex');
      }
   }

   query(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('query', arg);
      } else {
          return this.host.jqxTextArea('query');
      }
   }

   renderer(arg?: (itemValue: any, inputValue: any) => any) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('renderer', arg);
      } else {
          return this.host.jqxTextArea('renderer');
      }
   }

   roundedCorners(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('roundedCorners', arg);
      } else {
          return this.host.jqxTextArea('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('rtl', arg);
      } else {
          return this.host.jqxTextArea('rtl');
      }
   }

   scrollBarSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('scrollBarSize', arg);
      } else {
          return this.host.jqxTextArea('scrollBarSize');
      }
   }

   searchMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('searchMode', arg);
      } else {
          return this.host.jqxTextArea('searchMode');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('source', arg);
      } else {
          return this.host.jqxTextArea('source');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('theme', arg);
      } else {
          return this.host.jqxTextArea('theme');
      }
   }

   valueMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('valueMember', arg);
      } else {
          return this.host.jqxTextArea('valueMember');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('width', arg);
      } else {
          return this.host.jqxTextArea('width');
      }
   }


   // jqxTextAreaComponent functions
   destroy(): void {
      this.host.jqxTextArea('destroy');
   }
   focus(): void {
      this.host.jqxTextArea('focus');
   }
   refresh(): void {
      this.host.jqxTextArea('refresh');
   }
   render(): void {
      this.host.jqxTextArea('render');
   }
   selectAll(): void {
      this.host.jqxTextArea('selectAll');
   }
   val(value: string): string {
      return this.host.jqxTextArea('val', value);
   }

   // jqxTextAreaComponent events
   @Output() onChange = new EventEmitter();
   @Output() onClose = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onSelect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
      this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
      this.host.on('keyup', () => { this.onChangeCallback(this.host.val()); });
   }

} //jqxTextAreaComponent
