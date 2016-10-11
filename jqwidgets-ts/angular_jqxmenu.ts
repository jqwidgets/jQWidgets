/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularMenu',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxMenuComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxMenu;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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
   @Output() OnClosed = new EventEmitter();
   @Output() OnItemclick = new EventEmitter();
   @Output() OnInitialized = new EventEmitter();
   @Output() OnShown = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('closed', (eventData) => { this.OnClosed.emit(eventData); });
      this.host.on('itemclick', (eventData) => { this.OnItemclick.emit(eventData); });
      this.host.on('initialized', (eventData) => { this.OnInitialized.emit(eventData); });
      this.host.on('shown', (eventData) => { this.OnShown.emit(eventData); });
   }

} //jqxMenuComponent
