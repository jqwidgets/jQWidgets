/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularLoader',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxLoaderComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxLoader;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLoader', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxLoader('setOptions', options);
   }

   // jqxLoaderComponent properties
   autoOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('autoOpen', arg);
      } else {
          return this.host.jqxLoader('autoOpen');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('height', arg);
      } else {
          return this.host.jqxLoader('height');
      }
   }

   html(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('html', arg);
      } else {
          return this.host.jqxLoader('html');
      }
   }

   isModal(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('isModal', arg);
      } else {
          return this.host.jqxLoader('isModal');
      }
   }

   imagePosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('imagePosition', arg);
      } else {
          return this.host.jqxLoader('imagePosition');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('rtl', arg);
      } else {
          return this.host.jqxLoader('rtl');
      }
   }

   text(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('text', arg);
      } else {
          return this.host.jqxLoader('text');
      }
   }

   textPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('textPosition', arg);
      } else {
          return this.host.jqxLoader('textPosition');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('theme', arg);
      } else {
          return this.host.jqxLoader('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxLoader('width', arg);
      } else {
          return this.host.jqxLoader('width');
      }
   }


   // jqxLoaderComponent functions
   close(): void {
      this.host.jqxLoader('close');

   }
   open(): void {
      this.host.jqxLoader('open');

   }

   // jqxLoaderComponent events
   @Output() OnCreate = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('create', (eventData) => { this.OnCreate.emit(eventData); });
   }

} //jqxLoaderComponent
