/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxInputComponent),
    multi: true
}

@Component({
    selector: 'angularInput',
    template: '<input type="text"><ng-content></ng-content>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxInputComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxInput;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxInput', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxInput('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxInput('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxInput('val', value)
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
   @Output() OnChange = new EventEmitter();
   @Output() OnClose = new EventEmitter();
   @Output() OnOpen = new EventEmitter();
   @Output() OnSelect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('close', (eventData) => { this.OnClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.OnOpen.emit(eventData); });
      this.host.on('select', (eventData) => { this.OnSelect.emit(eventData); });
   }

} //jqxInputComponent
