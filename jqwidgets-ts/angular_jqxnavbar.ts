/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularNavBar',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxNavBarComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxNavBar;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavBar', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxNavBar('setOptions', options);
   }

   // jqxNavBarComponent properties
   columns(arg?: Array<String>) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('columns', arg);
      } else {
          return this.host.jqxNavBar('columns');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('disabled', arg);
      } else {
          return this.host.jqxNavBar('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('height', arg);
      } else {
          return this.host.jqxNavBar('height');
      }
   }

   minimized(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('minimized', arg);
      } else {
          return this.host.jqxNavBar('minimized');
      }
   }

   minimizeButtonPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('minimizeButtonPosition', arg);
      } else {
          return this.host.jqxNavBar('minimizeButtonPosition');
      }
   }

   minimizedHeight(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('minimizedHeight', arg);
      } else {
          return this.host.jqxNavBar('minimizedHeight');
      }
   }

   minimizedTitle(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('minimizedTitle', arg);
      } else {
          return this.host.jqxNavBar('minimizedTitle');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('orientation', arg);
      } else {
          return this.host.jqxNavBar('orientation');
      }
   }

   popupAnimationDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('popupAnimationDelay', arg);
      } else {
          return this.host.jqxNavBar('popupAnimationDelay');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('rtl', arg);
      } else {
          return this.host.jqxNavBar('rtl');
      }
   }

   selection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('selection', arg);
      } else {
          return this.host.jqxNavBar('selection');
      }
   }

   selectedItem(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('selectedItem', arg);
      } else {
          return this.host.jqxNavBar('selectedItem');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('theme', arg);
      } else {
          return this.host.jqxNavBar('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNavBar('width', arg);
      } else {
          return this.host.jqxNavBar('width');
      }
   }


   // jqxNavBarComponent functions
   close(): void {
      this.host.jqxNavBar('close');

   }
   destroy(): void {
      this.host.jqxNavBar('destroy');

   }
   getSelectedIndex(): number {
      return this.host.jqxNavBar('getSelectedIndex');

   }
   open(): void {
      this.host.jqxNavBar('open');

   }
   selectAt(index: String | Number): void {
      this.host.jqxNavBar('selectAt', index);

   }

   // jqxNavBarComponent events
   @Output() OnChange = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
   }

} //jqxNavBarComponent
