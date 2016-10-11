/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxFileUploadComponent),
    multi: true
}

@Component({
    selector: 'angularFileUpload',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxFileUploadComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxFileUpload;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFileUpload', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxFileUpload('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxFileUpload('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxFileUpload('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxFileUpload('setOptions', options);
   }

   // jqxFileUploadComponent properties
   autoUpload(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('autoUpload', arg);
      } else {
          return this.host.jqxFileUpload('autoUpload');
      }
   }

   accept(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('accept', arg);
      } else {
          return this.host.jqxFileUpload('accept');
      }
   }

   browseTemplate(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('browseTemplate', arg);
      } else {
          return this.host.jqxFileUpload('browseTemplate');
      }
   }

   cancelTemplate(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('cancelTemplate', arg);
      } else {
          return this.host.jqxFileUpload('cancelTemplate');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('disabled', arg);
      } else {
          return this.host.jqxFileUpload('disabled');
      }
   }

   fileInputName(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('fileInputName', arg);
      } else {
          return this.host.jqxFileUpload('fileInputName');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('height', arg);
      } else {
          return this.host.jqxFileUpload('height');
      }
   }

   localization(arg?: jqwidgets.FileUploadLocalization) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('localization', arg);
      } else {
          return this.host.jqxFileUpload('localization');
      }
   }

   multipleFilesUpload(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('multipleFilesUpload', arg);
      } else {
          return this.host.jqxFileUpload('multipleFilesUpload');
      }
   }

   renderFiles(arg?: (filename:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('renderFiles', arg);
      } else {
          return this.host.jqxFileUpload('renderFiles');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('rtl', arg);
      } else {
          return this.host.jqxFileUpload('rtl');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('theme', arg);
      } else {
          return this.host.jqxFileUpload('theme');
      }
   }

   uploadUrl(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('uploadUrl', arg);
      } else {
          return this.host.jqxFileUpload('uploadUrl');
      }
   }

   uploadTemplate(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('uploadTemplate', arg);
      } else {
          return this.host.jqxFileUpload('uploadTemplate');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxFileUpload('width', arg);
      } else {
          return this.host.jqxFileUpload('width');
      }
   }


   // jqxFileUploadComponent functions
   browse(): void {
      this.host.jqxFileUpload('browse');

   }
   cancelFile(): void {
      this.host.jqxFileUpload('cancelFile');

   }
   cancelAll(): void {
      this.host.jqxFileUpload('cancelAll');

   }
   destroy(): void {
      this.host.jqxFileUpload('destroy');

   }
   render(): void {
      this.host.jqxFileUpload('render');

   }
   refresh(): void {
      this.host.jqxFileUpload('refresh');

   }
   uploadFile(fileIndex: number): void {
      this.host.jqxFileUpload('uploadFile', fileIndex);

   }
   uploadAll(): void {
      this.host.jqxFileUpload('uploadAll');

   }

   // jqxFileUploadComponent events
   @Output() OnRemove = new EventEmitter();
   @Output() OnSelect = new EventEmitter();
   @Output() OnUploadStart = new EventEmitter();
   @Output() OnUploadEnd = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('remove', (eventData) => { this.OnRemove.emit(eventData); });
      this.host.on('select', (eventData) => { this.OnSelect.emit(eventData); });
      this.host.on('uploadStart', (eventData) => { this.OnUploadStart.emit(eventData); });
      this.host.on('uploadEnd', (eventData) => { this.OnUploadEnd.emit(eventData); });
   }

} //jqxFileUploadComponent
