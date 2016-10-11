/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTouch',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTouchComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxTouch;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTouch', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxTouch('setOptions', options);
   }

   // jqxTouchComponent properties
   orientationChangeEnabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTouch('orientationChangeEnabled', arg);
      } else {
          return this.host.jqxTouch('orientationChangeEnabled');
      }
   }

   swipeMin(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTouch('swipeMin', arg);
      } else {
          return this.host.jqxTouch('swipeMin');
      }
   }

   swipeMax(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTouch('swipeMax', arg);
      } else {
          return this.host.jqxTouch('swipeMax');
      }
   }

   swipeDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTouch('swipeDelay', arg);
      } else {
          return this.host.jqxTouch('swipeDelay');
      }
   }

   tapHoldDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTouch('tapHoldDelay', arg);
      } else {
          return this.host.jqxTouch('tapHoldDelay');
      }
   }


   // jqxTouchComponent functions


   // jqxTouchComponent events
   @Output() OnOrientationchange = new EventEmitter();
   @Output() OnSwipe = new EventEmitter();
   @Output() OnSwipeleft = new EventEmitter();
   @Output() OnSwiperight = new EventEmitter();
   @Output() OnSwipetop = new EventEmitter();
   @Output() OnSwipebottom = new EventEmitter();
   @Output() OnTap = new EventEmitter();
   @Output() OnTaphold = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('orientationchange', (eventData) => { this.OnOrientationchange.emit(eventData); });
      this.host.on('swipe', (eventData) => { this.OnSwipe.emit(eventData); });
      this.host.on('swipeleft', (eventData) => { this.OnSwipeleft.emit(eventData); });
      this.host.on('swiperight', (eventData) => { this.OnSwiperight.emit(eventData); });
      this.host.on('swipetop', (eventData) => { this.OnSwipetop.emit(eventData); });
      this.host.on('swipebottom', (eventData) => { this.OnSwipebottom.emit(eventData); });
      this.host.on('tap', (eventData) => { this.OnTap.emit(eventData); });
      this.host.on('taphold', (eventData) => { this.OnTaphold.emit(eventData); });
   }

} //jqxTouchComponent
