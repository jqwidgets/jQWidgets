/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDropDownButton',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDropDownButtonComponent implements OnChanges
{
   @Input('animationType') attrAnimationType;
   @Input('arrowSize') attrArrowSize;
   @Input('autoOpen') attrAutoOpen;
   @Input('closeDelay') attrCloseDelay;
   @Input('disabled') attrDisabled;
   @Input('dropDownHorizontalAlignment') attrDropDownHorizontalAlignment;
   @Input('dropDownVerticalAlignment') attrDropDownVerticalAlignment;
   @Input('dropDownWidth') attrDropDownWidth;
   @Input('enableBrowserBoundsDetection') attrEnableBrowserBoundsDetection;
   @Input('initContent') attrInitContent;
   @Input('openDelay') attrOpenDelay;
   @Input('popupZIndex') attrPopupZIndex;
   @Input('rtl') attrRtl;
   @Input('template') attrTemplate;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationType','arrowSize','autoOpen','closeDelay','disabled','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownWidth','enableBrowserBoundsDetection','height','initContent','openDelay','popupZIndex','rtl','template','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDropDownButton;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDropDownButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDropDownButton(this.properties[i])) {
                  this.host.jqxDropDownButton(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownButton', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxDropDownButton('setOptions', options);
   }

   // jqxDropDownButtonComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('animationType', arg);
      } else {
          return this.host.jqxDropDownButton('animationType');
      }
   }

   arrowSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('arrowSize', arg);
      } else {
          return this.host.jqxDropDownButton('arrowSize');
      }
   }

   autoOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('autoOpen', arg);
      } else {
          return this.host.jqxDropDownButton('autoOpen');
      }
   }

   closeDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('closeDelay', arg);
      } else {
          return this.host.jqxDropDownButton('closeDelay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('disabled', arg);
      } else {
          return this.host.jqxDropDownButton('disabled');
      }
   }

   dropDownHorizontalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('dropDownHorizontalAlignment', arg);
      } else {
          return this.host.jqxDropDownButton('dropDownHorizontalAlignment');
      }
   }

   dropDownVerticalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('dropDownVerticalAlignment', arg);
      } else {
          return this.host.jqxDropDownButton('dropDownVerticalAlignment');
      }
   }

   dropDownWidth(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('dropDownWidth', arg);
      } else {
          return this.host.jqxDropDownButton('dropDownWidth');
      }
   }

   enableBrowserBoundsDetection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('enableBrowserBoundsDetection', arg);
      } else {
          return this.host.jqxDropDownButton('enableBrowserBoundsDetection');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('height', arg);
      } else {
          return this.host.jqxDropDownButton('height');
      }
   }

   initContent(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('initContent', arg);
      } else {
          return this.host.jqxDropDownButton('initContent');
      }
   }

   openDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('openDelay', arg);
      } else {
          return this.host.jqxDropDownButton('openDelay');
      }
   }

   popupZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('popupZIndex', arg);
      } else {
          return this.host.jqxDropDownButton('popupZIndex');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('rtl', arg);
      } else {
          return this.host.jqxDropDownButton('rtl');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('template', arg);
      } else {
          return this.host.jqxDropDownButton('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('theme', arg);
      } else {
          return this.host.jqxDropDownButton('theme');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownButton('width', arg);
      } else {
          return this.host.jqxDropDownButton('width');
      }
   }


   // jqxDropDownButtonComponent functions
   close(): void {
      this.host.jqxDropDownButton('close');
   }
   destroy(): void {
      this.host.jqxDropDownButton('destroy');
   }
   focus(): void {
      this.host.jqxDropDownButton('focus');
   }
   getContent(): any {
      return this.host.jqxDropDownButton('getContent');
   }
   isOpened(): boolean {
      return this.host.jqxDropDownButton('isOpened');
   }
   open(): void {
      this.host.jqxDropDownButton('open');
   }
   setContent(content: string): void {
      this.host.jqxDropDownButton('setContent', content);
   }

   // jqxDropDownButtonComponent events
   @Output() onClose = new EventEmitter();
   @Output() onOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
   }

} //jqxDropDownButtonComponent
