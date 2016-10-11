/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxEditorComponent),
    multi: true
}

@Component({
    selector: 'angularEditor',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxEditorComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxEditor;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxEditor', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxEditor('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxEditor('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxEditor('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxEditor('setOptions', options);
   }

   // jqxEditorComponent properties
   createCommand(arg?: (name:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('createCommand', arg);
      } else {
          return this.host.jqxEditor('createCommand');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('disabled', arg);
      } else {
          return this.host.jqxEditor('disabled');
      }
   }

   editable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('editable', arg);
      } else {
          return this.host.jqxEditor('editable');
      }
   }

   height(arg?: String  | Number) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('height', arg);
      } else {
          return this.host.jqxEditor('height');
      }
   }

   lineBreak(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('lineBreak', arg);
      } else {
          return this.host.jqxEditor('lineBreak');
      }
   }

   localization(arg?: jqwidgets.EditorLocalization) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('localization', arg);
      } else {
          return this.host.jqxEditor('localization');
      }
   }

   pasteMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('pasteMode', arg);
      } else {
          return this.host.jqxEditor('pasteMode');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('rtl', arg);
      } else {
          return this.host.jqxEditor('rtl');
      }
   }

   stylesheets(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('stylesheets', arg);
      } else {
          return this.host.jqxEditor('stylesheets');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('theme', arg);
      } else {
          return this.host.jqxEditor('theme');
      }
   }

   toolbarPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('toolbarPosition', arg);
      } else {
          return this.host.jqxEditor('toolbarPosition');
      }
   }

   tools(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('tools', arg);
      } else {
          return this.host.jqxEditor('tools');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxEditor('width', arg);
      } else {
          return this.host.jqxEditor('width');
      }
   }


   // jqxEditorComponent functions
   destroy(): void {
      this.host.jqxEditor('destroy');

   }
   focus(): void {
      this.host.jqxEditor('focus');

   }
   print(): void {
      this.host.jqxEditor('print');

   }
   setMode(mode: boolean): void {
      this.host.jqxEditor('setMode', mode);

   }
   val(htmlValue: string): string {
      return this.host.jqxEditor('val', htmlValue);

   }

   // jqxEditorComponent events
   @Output() OnChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
   }

} //jqxEditorComponent
