/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
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

export class jqxTextAreaComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxTextArea;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTextArea', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxTextArea('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxTextArea('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxTextArea('val', value)
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

} //jqxTextAreaComponent
