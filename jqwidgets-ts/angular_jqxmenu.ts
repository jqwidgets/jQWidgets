/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularMenu',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxMenuComponent implements OnChanges
{
   @Input('animationShowDuration') attrAnimationShowDuration;
   @Input('animationHideDuration') attrAnimationHideDuration;
   @Input('animationHideDelay') attrAnimationHideDelay;
   @Input('animationShowDelay') attrAnimationShowDelay;
   @Input('autoCloseInterval') attrAutoCloseInterval;
   @Input('autoSizeMainItems') attrAutoSizeMainItems;
   @Input('autoCloseOnClick') attrAutoCloseOnClick;
   @Input('autoOpenPopup') attrAutoOpenPopup;
   @Input('autoOpen') attrAutoOpen;
   @Input('clickToOpen') attrClickToOpen;
   @Input('disabled') attrDisabled;
   @Input('enableHover') attrEnableHover;
   @Input('easing') attrEasing;
   @Input('keyboardNavigation') attrKeyboardNavigation;
   @Input('minimizeWidth') attrMinimizeWidth;
   @Input('mode') attrMode;
   @Input('popupZIndex') attrPopupZIndex;
   @Input('rtl') attrRtl;
   @Input('showTopLevelArrows') attrShowTopLevelArrows;
   @Input('source') attrSource;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationShowDuration','animationHideDuration','animationHideDelay','animationShowDelay','autoCloseInterval','autoSizeMainItems','autoCloseOnClick','autoOpenPopup','autoOpen','clickToOpen','disabled','enableHover','easing','height','keyboardNavigation','minimizeWidth','mode','popupZIndex','rtl','showTopLevelArrows','source','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxMenu;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxMenu(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxMenu(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxMenu(this.properties[i])) {
                  this.host.jqxMenu(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxMenu('setOptions', options);
   }

   // jqxMenuComponent properties
   animationShowDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('animationShowDuration', arg);
      } else {
          return this.host.jqxMenu('animationShowDuration');
      }
   }

   animationHideDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('animationHideDuration', arg);
      } else {
          return this.host.jqxMenu('animationHideDuration');
      }
   }

   animationHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('animationHideDelay', arg);
      } else {
          return this.host.jqxMenu('animationHideDelay');
      }
   }

   animationShowDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('animationShowDelay', arg);
      } else {
          return this.host.jqxMenu('animationShowDelay');
      }
   }

   autoCloseInterval(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('autoCloseInterval', arg);
      } else {
          return this.host.jqxMenu('autoCloseInterval');
      }
   }

   autoSizeMainItems(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('autoSizeMainItems', arg);
      } else {
          return this.host.jqxMenu('autoSizeMainItems');
      }
   }

   autoCloseOnClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('autoCloseOnClick', arg);
      } else {
          return this.host.jqxMenu('autoCloseOnClick');
      }
   }

   autoOpenPopup(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('autoOpenPopup', arg);
      } else {
          return this.host.jqxMenu('autoOpenPopup');
      }
   }

   autoOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('autoOpen', arg);
      } else {
          return this.host.jqxMenu('autoOpen');
      }
   }

   clickToOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('clickToOpen', arg);
      } else {
          return this.host.jqxMenu('clickToOpen');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('disabled', arg);
      } else {
          return this.host.jqxMenu('disabled');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('enableHover', arg);
      } else {
          return this.host.jqxMenu('enableHover');
      }
   }

   easing(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('easing', arg);
      } else {
          return this.host.jqxMenu('easing');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('height', arg);
      } else {
          return this.host.jqxMenu('height');
      }
   }

   keyboardNavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('keyboardNavigation', arg);
      } else {
          return this.host.jqxMenu('keyboardNavigation');
      }
   }

   minimizeWidth(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('minimizeWidth', arg);
      } else {
          return this.host.jqxMenu('minimizeWidth');
      }
   }

   mode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('mode', arg);
      } else {
          return this.host.jqxMenu('mode');
      }
   }

   popupZIndex(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('popupZIndex', arg);
      } else {
          return this.host.jqxMenu('popupZIndex');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('rtl', arg);
      } else {
          return this.host.jqxMenu('rtl');
      }
   }

   showTopLevelArrows(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('showTopLevelArrows', arg);
      } else {
          return this.host.jqxMenu('showTopLevelArrows');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('source', arg);
      } else {
          return this.host.jqxMenu('source');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('theme', arg);
      } else {
          return this.host.jqxMenu('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxMenu('width', arg);
      } else {
          return this.host.jqxMenu('width');
      }
   }


   // jqxMenuComponent functions
   closeItem(itemID: String | Number): void {
      this.host.jqxMenu('closeItem', itemID);
   }
   close(): void {
      this.host.jqxMenu('close');
   }
   disable(itemID: String | Number, value: boolean): void {
      this.host.jqxMenu('disable', itemID, value);
   }
   destroy(): void {
      this.host.jqxMenu('destroy');
   }
   focus(): void {
      this.host.jqxMenu('focus');
   }
   minimize(): void {
      this.host.jqxMenu('minimize');
   }
   open(left: number, top: number): void {
      this.host.jqxMenu('open', left, top);
   }
   openItem(itemID: String | Number): void {
      this.host.jqxMenu('openItem', itemID);
   }
   restore(): void {
      this.host.jqxMenu('restore');
   }
   setItemOpenDirection(item: String | Number, horizontaldirection: string, verticaldirection: string): void {
      this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
   }

   // jqxMenuComponent events
   @Output() onClosed = new EventEmitter();
   @Output() onItemclick = new EventEmitter();
   @Output() onInitialized = new EventEmitter();
   @Output() onShown = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('closed', (eventData) => { this.onClosed.emit(eventData); });
      this.host.on('itemclick', (eventData) => { this.onItemclick.emit(eventData); });
      this.host.on('initialized', (eventData) => { this.onInitialized.emit(eventData); });
      this.host.on('shown', (eventData) => { this.onShown.emit(eventData); });
   }

} //jqxMenuComponent
