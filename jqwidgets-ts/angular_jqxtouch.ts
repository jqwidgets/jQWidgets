/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTouch',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTouchComponent implements OnChanges
{
   @Input('orientationChangeEnabled') attrOrientationChangeEnabled;
   @Input('swipeMin') attrSwipeMin;
   @Input('swipeMax') attrSwipeMax;
   @Input('swipeDelay') attrSwipeDelay;
   @Input('tapHoldDelay') attrTapHoldDelay;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['orientationChangeEnabled','swipeMin','swipeMax','swipeDelay','tapHoldDelay'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTouch;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxTouch(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxTouch(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxTouch(this.properties[i])) {
                  this.host.jqxTouch(this.properties[i], this[attrName]); 
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
      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTouch', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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
   @Output() onOrientationchange = new EventEmitter();
   @Output() onSwipe = new EventEmitter();
   @Output() onSwipeleft = new EventEmitter();
   @Output() onSwiperight = new EventEmitter();
   @Output() onSwipetop = new EventEmitter();
   @Output() onSwipebottom = new EventEmitter();
   @Output() onTap = new EventEmitter();
   @Output() onTaphold = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('orientationchange', (eventData) => { this.onOrientationchange.emit(eventData); });
      this.host.on('swipe', (eventData) => { this.onSwipe.emit(eventData); });
      this.host.on('swipeleft', (eventData) => { this.onSwipeleft.emit(eventData); });
      this.host.on('swiperight', (eventData) => { this.onSwiperight.emit(eventData); });
      this.host.on('swipetop', (eventData) => { this.onSwipetop.emit(eventData); });
      this.host.on('swipebottom', (eventData) => { this.onSwipebottom.emit(eventData); });
      this.host.on('tap', (eventData) => { this.onTap.emit(eventData); });
      this.host.on('taphold', (eventData) => { this.onTaphold.emit(eventData); });
   }

} //jqxTouchComponent
