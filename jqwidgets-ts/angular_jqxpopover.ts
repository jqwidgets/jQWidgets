/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularPopover',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxPopoverComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxPopover;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPopover', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxPopover('setOptions', options);
   }

   // jqxPopoverComponent properties
   arrowOffsetValue(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('arrowOffsetValue', arg);
      } else {
          return this.host.jqxPopover('arrowOffsetValue');
      }
   }

   animationOpenDelay(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('animationOpenDelay', arg);
      } else {
          return this.host.jqxPopover('animationOpenDelay');
      }
   }

   animationCloseDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('animationCloseDelay', arg);
      } else {
          return this.host.jqxPopover('animationCloseDelay');
      }
   }

   autoClose(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('autoClose', arg);
      } else {
          return this.host.jqxPopover('autoClose');
      }
   }

   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('animationType', arg);
      } else {
          return this.host.jqxPopover('animationType');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('height', arg);
      } else {
          return this.host.jqxPopover('height');
      }
   }

   initContent(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('initContent', arg);
      } else {
          return this.host.jqxPopover('initContent');
      }
   }

   isModal(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('isModal', arg);
      } else {
          return this.host.jqxPopover('isModal');
      }
   }

   offset(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('offset', arg);
      } else {
          return this.host.jqxPopover('offset');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('position', arg);
      } else {
          return this.host.jqxPopover('position');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('rtl', arg);
      } else {
          return this.host.jqxPopover('rtl');
      }
   }

   selector(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('selector', arg);
      } else {
          return this.host.jqxPopover('selector');
      }
   }

   showArrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('showArrow', arg);
      } else {
          return this.host.jqxPopover('showArrow');
      }
   }

   showCloseButton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('showCloseButton', arg);
      } else {
          return this.host.jqxPopover('showCloseButton');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('width', arg);
      } else {
          return this.host.jqxPopover('width');
      }
   }

   title(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('title', arg);
      } else {
          return this.host.jqxPopover('title');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('theme', arg);
      } else {
          return this.host.jqxPopover('theme');
      }
   }


   // jqxPopoverComponent functions
   close(): void {
      this.host.jqxPopover('close');

   }
   destroy(): void {
      this.host.jqxPopover('destroy');

   }
   open(): void {
      this.host.jqxPopover('open');

   }

   // jqxPopoverComponent events
   @Output() OnClose = new EventEmitter();
   @Output() OnOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.OnClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.OnOpen.emit(eventData); });
   }

} //jqxPopoverComponent
