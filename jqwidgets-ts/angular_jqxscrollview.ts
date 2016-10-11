/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularScrollView',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxScrollViewComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxScrollView;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxScrollView('setOptions', options);
   }

   // jqxScrollViewComponent properties
   animationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('animationDuration', arg);
      } else {
          return this.host.jqxScrollView('animationDuration');
      }
   }

   bounceEnabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('bounceEnabled', arg);
      } else {
          return this.host.jqxScrollView('bounceEnabled');
      }
   }

   buttonsOffset(arg?: Array<Number>) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('buttonsOffset', arg);
      } else {
          return this.host.jqxScrollView('buttonsOffset');
      }
   }

   currentPage(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('currentPage', arg);
      } else {
          return this.host.jqxScrollView('currentPage');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('disabled', arg);
      } else {
          return this.host.jqxScrollView('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('height', arg);
      } else {
          return this.host.jqxScrollView('height');
      }
   }

   moveThreshold(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('moveThreshold', arg);
      } else {
          return this.host.jqxScrollView('moveThreshold');
      }
   }

   showButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('showButtons', arg);
      } else {
          return this.host.jqxScrollView('showButtons');
      }
   }

   slideShow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('slideShow', arg);
      } else {
          return this.host.jqxScrollView('slideShow');
      }
   }

   slideDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('slideDuration', arg);
      } else {
          return this.host.jqxScrollView('slideDuration');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('theme', arg);
      } else {
          return this.host.jqxScrollView('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxScrollView('width', arg);
      } else {
          return this.host.jqxScrollView('width');
      }
   }


   // jqxScrollViewComponent functions
   back(): void {
      this.host.jqxScrollView('back');

   }
   changePage(index: number): void {
      this.host.jqxScrollView('changePage', index);

   }
   forward(): void {
      this.host.jqxScrollView('forward');

   }
   refresh(): void {
      this.host.jqxScrollView('refresh');

   }

   // jqxScrollViewComponent events
   @Output() OnPageChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('pageChanged', (eventData) => { this.OnPageChanged.emit(eventData); });
   }

} //jqxScrollViewComponent
