/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxTooltip',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTooltipComponent implements OnChanges
{
   @Input('absolutePositionX') attrAbsolutePositionX: any;
   @Input('absolutePositionY') attrAbsolutePositionY: any;
   @Input('autoHide') attrAutoHide: any;
   @Input('autoHideDelay') attrAutoHideDelay: any;
   @Input('animationShowDelay') attrAnimationShowDelay: any;
   @Input('animationHideDelay') attrAnimationHideDelay: any;
   @Input('content') attrContent: any;
   @Input('closeOnClick') attrCloseOnClick: any;
   @Input('disabled') attrDisabled: any;
   @Input('enableBrowserBoundsDetection') attrEnableBrowserBoundsDetection: any;
   @Input('left') attrLeft: any;
   @Input('name') attrName: any;
   @Input('opacity') attrOpacity: any;
   @Input('position') attrPosition: any;
   @Input('rtl') attrRtl: any;
   @Input('showDelay') attrShowDelay: any;
   @Input('showArrow') attrShowArrow: any;
   @Input('top') attrTop: any;
   @Input('trigger') attrTrigger: any;
   @Input('theme') attrTheme: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['absolutePositionX','absolutePositionY','autoHide','autoHideDelay','animationShowDelay','animationHideDelay','content','closeOnClick','disabled','enableBrowserBoundsDetection','height','left','name','opacity','position','rtl','showDelay','showArrow','top','trigger','theme','width'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTooltip;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxTooltip(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxTooltip(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxTooltip(this.properties[i])) {
                  this.host.jqxTooltip(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxTooltip('setOptions', options);
   }

   // jqxTooltipComponent properties
   absolutePositionX(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('absolutePositionX', arg);
      } else {
          return this.host.jqxTooltip('absolutePositionX');
      }
   }

   absolutePositionY(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('absolutePositionY', arg);
      } else {
          return this.host.jqxTooltip('absolutePositionY');
      }
   }

   autoHide(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('autoHide', arg);
      } else {
          return this.host.jqxTooltip('autoHide');
      }
   }

   autoHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('autoHideDelay', arg);
      } else {
          return this.host.jqxTooltip('autoHideDelay');
      }
   }

   animationShowDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('animationShowDelay', arg);
      } else {
          return this.host.jqxTooltip('animationShowDelay');
      }
   }

   animationHideDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('animationHideDelay', arg);
      } else {
          return this.host.jqxTooltip('animationHideDelay');
      }
   }

   content(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('content', arg);
      } else {
          return this.host.jqxTooltip('content');
      }
   }

   closeOnClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('closeOnClick', arg);
      } else {
          return this.host.jqxTooltip('closeOnClick');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('disabled', arg);
      } else {
          return this.host.jqxTooltip('disabled');
      }
   }

   enableBrowserBoundsDetection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
      } else {
          return this.host.jqxTooltip('enableBrowserBoundsDetection');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('height', arg);
      } else {
          return this.host.jqxTooltip('height');
      }
   }

   left(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('left', arg);
      } else {
          return this.host.jqxTooltip('left');
      }
   }

   name(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('name', arg);
      } else {
          return this.host.jqxTooltip('name');
      }
   }

   opacity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('opacity', arg);
      } else {
          return this.host.jqxTooltip('opacity');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('position', arg);
      } else {
          return this.host.jqxTooltip('position');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('rtl', arg);
      } else {
          return this.host.jqxTooltip('rtl');
      }
   }

   showDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('showDelay', arg);
      } else {
          return this.host.jqxTooltip('showDelay');
      }
   }

   showArrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('showArrow', arg);
      } else {
          return this.host.jqxTooltip('showArrow');
      }
   }

   top(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('top', arg);
      } else {
          return this.host.jqxTooltip('top');
      }
   }

   trigger(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('trigger', arg);
      } else {
          return this.host.jqxTooltip('trigger');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('theme', arg);
      } else {
          return this.host.jqxTooltip('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTooltip('width', arg);
      } else {
          return this.host.jqxTooltip('width');
      }
   }


   // jqxTooltipComponent functions
   close(index: number): void {
      this.host.jqxTooltip('close', index);
   }

   destroy(): void {
      this.host.jqxTooltip('destroy');
   }

   open(): void {
      this.host.jqxTooltip('open');
   }

   refresh(): void {
      this.host.jqxTooltip('refresh');
   }


   // jqxTooltipComponent events
   @Output() onClose = new EventEmitter();
   @Output() onClosing = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onOpening = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData: any) => { this.onClose.emit(eventData); });
      this.host.on('closing', (eventData: any) => { this.onClosing.emit(eventData); });
      this.host.on('open', (eventData: any) => { this.onOpen.emit(eventData); });
      this.host.on('opening', (eventData: any) => { this.onOpening.emit(eventData); });
   }

} //jqxTooltipComponent


