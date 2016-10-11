/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularListMenu',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxListMenuComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxListMenu;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListMenu', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxListMenu('setOptions', options);
   }

   // jqxListMenuComponent properties
   alwaysShowNavigationArrows(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('alwaysShowNavigationArrows', arg);
      } else {
          return this.host.jqxListMenu('alwaysShowNavigationArrows');
      }
   }

   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('animationType', arg);
      } else {
          return this.host.jqxListMenu('animationType');
      }
   }

   animationDuration(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('animationDuration', arg);
      } else {
          return this.host.jqxListMenu('animationDuration');
      }
   }

   autoSeparators(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('autoSeparators', arg);
      } else {
          return this.host.jqxListMenu('autoSeparators');
      }
   }

   backLabel(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('backLabel', arg);
      } else {
          return this.host.jqxListMenu('backLabel');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('disabled', arg);
      } else {
          return this.host.jqxListMenu('disabled');
      }
   }

   enableScrolling(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('enableScrolling', arg);
      } else {
          return this.host.jqxListMenu('enableScrolling');
      }
   }

   filterCallback(arg?: (text:string, seachValue:String | Number) => boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('filterCallback', arg);
      } else {
          return this.host.jqxListMenu('filterCallback');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('height', arg);
      } else {
          return this.host.jqxListMenu('height');
      }
   }

   headerAnimationDuration(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('headerAnimationDuration', arg);
      } else {
          return this.host.jqxListMenu('headerAnimationDuration');
      }
   }

   placeHolder(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('placeHolder', arg);
      } else {
          return this.host.jqxListMenu('placeHolder');
      }
   }

   readOnly(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('readOnly', arg);
      } else {
          return this.host.jqxListMenu('readOnly');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('rtl', arg);
      } else {
          return this.host.jqxListMenu('rtl');
      }
   }

   roundedCorners(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('roundedCorners', arg);
      } else {
          return this.host.jqxListMenu('roundedCorners');
      }
   }

   showNavigationArrows(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('showNavigationArrows', arg);
      } else {
          return this.host.jqxListMenu('showNavigationArrows');
      }
   }

   showFilter(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('showFilter', arg);
      } else {
          return this.host.jqxListMenu('showFilter');
      }
   }

   showHeader(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('showHeader', arg);
      } else {
          return this.host.jqxListMenu('showHeader');
      }
   }

   showBackButton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('showBackButton', arg);
      } else {
          return this.host.jqxListMenu('showBackButton');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('theme', arg);
      } else {
          return this.host.jqxListMenu('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxListMenu('width', arg);
      } else {
          return this.host.jqxListMenu('width');
      }
   }


   // jqxListMenuComponent functions
   back(): void {
      this.host.jqxListMenu('back');

   }
   changePage(Item: any): void {
      this.host.jqxListMenu('changePage', Item);

   }
   destroy(): void {
      this.host.jqxListMenu('destroy');

   }

   // jqxListMenuComponent events


   __wireEvents__(): void {

   }

} //jqxListMenuComponent
