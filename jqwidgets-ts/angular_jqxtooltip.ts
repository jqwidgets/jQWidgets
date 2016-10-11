/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTooltip',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTooltipComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxTooltip;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxTooltip('setOptions', options);
   }

   // jqxTooltipComponent properties
   absolutePositionX(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('absolutePositionX', arg);
      } else {
          return this.host.jqxTooltip('absolutePositionX');
      }
   }

   absolutePositionY(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('absolutePositionY', arg);
      } else {
          return this.host.jqxTooltip('absolutePositionY');
      }
   }

   autoHide(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('autoHide', arg);
      } else {
          return this.host.jqxTooltip('autoHide');
      }
   }

   autoHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('autoHideDelay', arg);
      } else {
          return this.host.jqxTooltip('autoHideDelay');
      }
   }

   animationShowDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('animationShowDelay', arg);
      } else {
          return this.host.jqxTooltip('animationShowDelay');
      }
   }

   animationHideDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('animationHideDelay', arg);
      } else {
          return this.host.jqxTooltip('animationHideDelay');
      }
   }

   content(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('content', arg);
      } else {
          return this.host.jqxTooltip('content');
      }
   }

   closeOnClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('closeOnClick', arg);
      } else {
          return this.host.jqxTooltip('closeOnClick');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('disabled', arg);
      } else {
          return this.host.jqxTooltip('disabled');
      }
   }

   enableBrowserBoundsDetection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
      } else {
          return this.host.jqxTooltip('enableBrowserBoundsDetection');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('height', arg);
      } else {
          return this.host.jqxTooltip('height');
      }
   }

   left(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('left', arg);
      } else {
          return this.host.jqxTooltip('left');
      }
   }

   name(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('name', arg);
      } else {
          return this.host.jqxTooltip('name');
      }
   }

   opacity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('opacity', arg);
      } else {
          return this.host.jqxTooltip('opacity');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('position', arg);
      } else {
          return this.host.jqxTooltip('position');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('rtl', arg);
      } else {
          return this.host.jqxTooltip('rtl');
      }
   }

   showDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('showDelay', arg);
      } else {
          return this.host.jqxTooltip('showDelay');
      }
   }

   showArrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('showArrow', arg);
      } else {
          return this.host.jqxTooltip('showArrow');
      }
   }

   top(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('top', arg);
      } else {
          return this.host.jqxTooltip('top');
      }
   }

   trigger(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('trigger', arg);
      } else {
          return this.host.jqxTooltip('trigger');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('theme', arg);
      } else {
          return this.host.jqxTooltip('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('width', arg);
      } else {
          return this.host.jqxTooltip('width');
      }
   }


   // jqxTooltipComponent functions
   close(index: number): void {
      this.host.jqxTooltip('close', index);

   }
   destroy(): void {
      this.host.jqxTooltip('destroy');

   }
   open(): void {
      this.host.jqxTooltip('open');

   }
   refresh(): void {
      this.host.jqxTooltip('refresh');

   }

   // jqxTooltipComponent events
   @Output() OnClose = new EventEmitter();
   @Output() OnClosing = new EventEmitter();
   @Output() OnOpen = new EventEmitter();
   @Output() OnOpening = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.OnClose.emit(eventData); });
      this.host.on('closing', (eventData) => { this.OnClosing.emit(eventData); });
      this.host.on('open', (eventData) => { this.OnOpen.emit(eventData); });
      this.host.on('opening', (eventData) => { this.OnOpening.emit(eventData); });
   }

} //jqxTooltipComponent
