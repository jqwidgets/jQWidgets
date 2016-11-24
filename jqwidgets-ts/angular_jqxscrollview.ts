/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularScrollView',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxScrollViewComponent implements OnChanges
{
   @Input('animationDuration') attrAnimationDuration;
   @Input('bounceEnabled') attrBounceEnabled;
   @Input('buttonsOffset') attrButtonsOffset;
   @Input('currentPage') attrCurrentPage;
   @Input('disabled') attrDisabled;
   @Input('moveThreshold') attrMoveThreshold;
   @Input('showButtons') attrShowButtons;
   @Input('slideShow') attrSlideShow;
   @Input('slideDuration') attrSlideDuration;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationDuration','bounceEnabled','buttonsOffset','currentPage','disabled','height','moveThreshold','showButtons','slideShow','slideDuration','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxScrollView;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollView(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxScrollView(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxScrollView(this.properties[i])) {
                  this.host.jqxScrollView(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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
   @Output() onPageChanged = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('pageChanged', (eventData) => { this.onPageChanged.emit(eventData); });
   }

} //jqxScrollViewComponent
