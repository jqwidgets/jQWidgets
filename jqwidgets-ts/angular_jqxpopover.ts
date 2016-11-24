/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularPopover',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxPopoverComponent implements OnChanges
{
   @Input('arrowOffsetValue') attrArrowOffsetValue;
   @Input('animationOpenDelay') attrAnimationOpenDelay;
   @Input('animationCloseDelay') attrAnimationCloseDelay;
   @Input('autoClose') attrAutoClose;
   @Input('animationType') attrAnimationType;
   @Input('initContent') attrInitContent;
   @Input('isModal') attrIsModal;
   @Input('offset') attrOffset;
   @Input('position') attrPosition;
   @Input('rtl') attrRtl;
   @Input('selector') attrSelector;
   @Input('showArrow') attrShowArrow;
   @Input('showCloseButton') attrShowCloseButton;
   @Input('title') attrTitle;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['arrowOffsetValue','animationOpenDelay','animationCloseDelay','autoClose','animationType','height','initContent','isModal','offset','position','rtl','selector','showArrow','showCloseButton','width','title','theme'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxPopover;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxPopover(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxPopover(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxPopover(this.properties[i])) {
                  this.host.jqxPopover(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPopover', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxPopover('setOptions', options);
   }

   // jqxPopoverComponent properties
   arrowOffsetValue(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('arrowOffsetValue', arg);
      } else {
          return this.host.jqxPopover('arrowOffsetValue');
      }
   }

   animationOpenDelay(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('animationOpenDelay', arg);
      } else {
          return this.host.jqxPopover('animationOpenDelay');
      }
   }

   animationCloseDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('animationCloseDelay', arg);
      } else {
          return this.host.jqxPopover('animationCloseDelay');
      }
   }

   autoClose(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('autoClose', arg);
      } else {
          return this.host.jqxPopover('autoClose');
      }
   }

   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('animationType', arg);
      } else {
          return this.host.jqxPopover('animationType');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('height', arg);
      } else {
          return this.host.jqxPopover('height');
      }
   }

   initContent(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('initContent', arg);
      } else {
          return this.host.jqxPopover('initContent');
      }
   }

   isModal(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('isModal', arg);
      } else {
          return this.host.jqxPopover('isModal');
      }
   }

   offset(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('offset', arg);
      } else {
          return this.host.jqxPopover('offset');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('position', arg);
      } else {
          return this.host.jqxPopover('position');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('rtl', arg);
      } else {
          return this.host.jqxPopover('rtl');
      }
   }

   selector(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('selector', arg);
      } else {
          return this.host.jqxPopover('selector');
      }
   }

   showArrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('showArrow', arg);
      } else {
          return this.host.jqxPopover('showArrow');
      }
   }

   showCloseButton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('showCloseButton', arg);
      } else {
          return this.host.jqxPopover('showCloseButton');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('width', arg);
      } else {
          return this.host.jqxPopover('width');
      }
   }

   title(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('title', arg);
      } else {
          return this.host.jqxPopover('title');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxPopover('theme', arg);
      } else {
          return this.host.jqxPopover('theme');
      }
   }


   // jqxPopoverComponent functions
   close(): void {
      this.host.jqxPopover('close');
   }
   destroy(): void {
      this.host.jqxPopover('destroy');
   }
   open(): void {
      this.host.jqxPopover('open');
   }

   // jqxPopoverComponent events
   @Output() onClose = new EventEmitter();
   @Output() onOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
   }

} //jqxPopoverComponent
