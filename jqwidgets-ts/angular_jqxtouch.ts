/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxTouch',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTouchComponent implements OnChanges
{
   @Input('orientationChangeEnabled') attrOrientationChangeEnabled: any;
   @Input('swipeMin') attrSwipeMin: any;
   @Input('swipeMax') attrSwipeMax: any;
   @Input('swipeDelay') attrSwipeDelay: any;
   @Input('tapHoldDelay') attrTapHoldDelay: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['orientationChangeEnabled','swipeMin','swipeMax','swipeDelay','tapHoldDelay'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTouch;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
      setTimeout(() => {
         if (this.autoCreate) {
            this.createComponent(); 
         }
      }); 
   }

   ngOnChanges(changes: SimpleChanges) {
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
   createComponent(options?: any): void {
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

   createWidget(options?: any): void {
        this.createComponent(options);
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
      this.host.on('orientationchange', (eventData: any) => { this.onOrientationchange.emit(eventData); });
      this.host.on('swipe', (eventData: any) => { this.onSwipe.emit(eventData); });
      this.host.on('swipeleft', (eventData: any) => { this.onSwipeleft.emit(eventData); });
      this.host.on('swiperight', (eventData: any) => { this.onSwiperight.emit(eventData); });
      this.host.on('swipetop', (eventData: any) => { this.onSwipetop.emit(eventData); });
      this.host.on('swipebottom', (eventData: any) => { this.onSwipebottom.emit(eventData); });
      this.host.on('tap', (eventData: any) => { this.onTap.emit(eventData); });
      this.host.on('taphold', (eventData: any) => { this.onTaphold.emit(eventData); });
   }

} //jqxTouchComponent


