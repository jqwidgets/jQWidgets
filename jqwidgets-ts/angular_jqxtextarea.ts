/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxtextarea.js';
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
declare let JQXLite: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxTextAreaComponent),
    multi: true
}

@Component({
    selector: 'jqxTextArea',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class jqxTextAreaComponent implements ControlValueAccessor, OnChanges 
{
   @Input('disabled') attrDisabled: boolean;
   @Input('displayMember') attrDisplayMember: string;
   @Input('dropDownWidth') attrDropDownWidth: number | string;
   @Input('items') attrItems: number;
   @Input('maxLength') attrMaxLength: number;
   @Input('minLength') attrMinLength: number;
   @Input('opened') attrOpened: boolean;
   @Input('placeHolder') attrPlaceHolder: string;
   @Input('popupZIndex') attrPopupZIndex: number;
   @Input('query') attrQuery: string;
   @Input('renderer') attrRenderer: (itemValue: any, inputValue: any) => any;
   @Input('roundedCorners') attrRoundedCorners: boolean;
   @Input('rtl') attrRtl: boolean;
   @Input('scrollBarSize') attrScrollBarSize: number;
   @Input('searchMode') attrSearchMode: any;
   @Input('source') attrSource: Array<any>;
   @Input('theme') attrTheme: string;
   @Input('valueMember') attrValueMember: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['disabled','displayMember','dropDownWidth','height','items','maxLength','minLength','opened','placeHolder','popupZIndex','query','renderer','roundedCorners','rtl','scrollBarSize','searchMode','source','theme','valueMember','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTextArea;

   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean = false;

            if (this[attrName] !== undefined) {
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
      if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
         return false;
      }
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

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTextArea', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           if (value !== null && value !== undefined)
               this.host.jqxTextArea('val', value);
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

   dropDownWidth(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxTextArea('dropDownWidth', arg);
      } else {
          return this.host.jqxTextArea('dropDownWidth');
      }
   }

   height(arg?: string | number) : any {
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

   source(arg?: Array<any>) : any {
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

   width(arg?: string | number) : any {
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

   val(value?: string): any {
      if (value !== undefined) {
         return this.host.jqxTextArea("val", value);
      } else {
         return this.host.jqxTextArea("val");
      }
   };


   // jqxTextAreaComponent events
   @Output() onChange = new EventEmitter();
   @Output() onClose = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onSelect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
      this.host.on('close', (eventData: any) => { this.onClose.emit(eventData); });
      this.host.on('open', (eventData: any) => { this.onOpen.emit(eventData); });
      this.host.on('select', (eventData: any) => { this.onSelect.emit(eventData); });
      this.host.on('keyup', () => { this.onChangeCallback(this.host.val()); });
   }

} //jqxTextAreaComponent


