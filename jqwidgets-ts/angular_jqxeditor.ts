/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
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

export class jqxEditorComponent implements ControlValueAccessor, OnChanges 
{
   @Input('createCommand') attrCreateCommand;
   @Input('disabled') attrDisabled;
   @Input('editable') attrEditable;
   @Input('lineBreak') attrLineBreak;
   @Input('localization') attrLocalization;
   @Input('pasteMode') attrPasteMode;
   @Input('rtl') attrRtl;
   @Input('stylesheets') attrStylesheets;
   @Input('theme') attrTheme;
   @Input('toolbarPosition') attrToolbarPosition;
   @Input('tools') attrTools;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['createCommand','disabled','editable','height','lineBreak','localization','pasteMode','rtl','stylesheets','theme','toolbarPosition','tools','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxEditor;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxEditor(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxEditor(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxEditor(this.properties[i])) {
                  this.host.jqxEditor(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxEditor', options);
      this.host = this.widgetObject['host'];
      this.__wireEvents__();
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
   @Output() onChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
   }

} //jqxEditorComponent
