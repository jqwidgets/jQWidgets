/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularListMenu',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxListMenuComponent implements OnChanges
{
   @Input('alwaysShowNavigationArrows') attrAlwaysShowNavigationArrows;
   @Input('animationType') attrAnimationType;
   @Input('animationDuration') attrAnimationDuration;
   @Input('autoSeparators') attrAutoSeparators;
   @Input('backLabel') attrBackLabel;
   @Input('disabled') attrDisabled;
   @Input('enableScrolling') attrEnableScrolling;
   @Input('filterCallback') attrFilterCallback;
   @Input('headerAnimationDuration') attrHeaderAnimationDuration;
   @Input('placeHolder') attrPlaceHolder;
   @Input('readOnly') attrReadOnly;
   @Input('rtl') attrRtl;
   @Input('roundedCorners') attrRoundedCorners;
   @Input('showNavigationArrows') attrShowNavigationArrows;
   @Input('showFilter') attrShowFilter;
   @Input('showHeader') attrShowHeader;
   @Input('showBackButton') attrShowBackButton;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['alwaysShowNavigationArrows','animationType','animationDuration','autoSeparators','backLabel','disabled','enableScrolling','filterCallback','height','headerAnimationDuration','placeHolder','readOnly','rtl','roundedCorners','showNavigationArrows','showFilter','showHeader','showBackButton','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxListMenu;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxListMenu(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxListMenu(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxListMenu(this.properties[i])) {
                  this.host.jqxListMenu(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListMenu', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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
