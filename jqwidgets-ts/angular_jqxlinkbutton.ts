/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxLinkButton',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxLinkButtonComponent implements OnChanges
{
   @Input('delay') attrDelay: number;
   @Input('disabled') attrDisabled: boolean;
   @Input('imgSrc') attrImgSrc: string;
   @Input('imgWidth') attrImgWidth: string | number;
   @Input('imgHeight') attrImgHeight: string | number;
   @Input('imgPosition') attrImgPosition: any;
   @Input('roundedCorners') attrRoundedCorners: any;
   @Input('rtl') attrRtl: boolean;
   @Input('textPosition') attrTextPosition: any;
   @Input('textImageRelation') attrTextImageRelation: any;
   @Input('theme') attrTheme: string;
   @Input('template') attrTemplate: any;
   @Input('toggled') attrToggled: boolean;
   @Input('value') attrValue: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxLinkButton;

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
            let areEqual: boolean = false;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxLinkButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxLinkButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxLinkButton(this.properties[i])) {
                  this.host.jqxLinkButton(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
         return false;
      }
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

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinkButton', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxLinkButton('setOptions', options);
   }

   // jqxLinkButtonComponent properties
   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('delay', arg);
      } else {
          return this.host.jqxLinkButton('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('disabled', arg);
      } else {
          return this.host.jqxLinkButton('disabled');
      }
   }

   height(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('height', arg);
      } else {
          return this.host.jqxLinkButton('height');
      }
   }

   imgSrc(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('imgSrc', arg);
      } else {
          return this.host.jqxLinkButton('imgSrc');
      }
   }

   imgWidth(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('imgWidth', arg);
      } else {
          return this.host.jqxLinkButton('imgWidth');
      }
   }

   imgHeight(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('imgHeight', arg);
      } else {
          return this.host.jqxLinkButton('imgHeight');
      }
   }

   imgPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('imgPosition', arg);
      } else {
          return this.host.jqxLinkButton('imgPosition');
      }
   }

   roundedCorners(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('roundedCorners', arg);
      } else {
          return this.host.jqxLinkButton('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('rtl', arg);
      } else {
          return this.host.jqxLinkButton('rtl');
      }
   }

   textPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('textPosition', arg);
      } else {
          return this.host.jqxLinkButton('textPosition');
      }
   }

   textImageRelation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('textImageRelation', arg);
      } else {
          return this.host.jqxLinkButton('textImageRelation');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('theme', arg);
      } else {
          return this.host.jqxLinkButton('theme');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('template', arg);
      } else {
          return this.host.jqxLinkButton('template');
      }
   }

   toggled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('toggled', arg);
      } else {
          return this.host.jqxLinkButton('toggled');
      }
   }

   width(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('width', arg);
      } else {
          return this.host.jqxLinkButton('width');
      }
   }

   value(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxLinkButton('value', arg);
      } else {
          return this.host.jqxLinkButton('value');
      }
   }


   // jqxLinkButtonComponent functions
   check(): void {
      this.host.jqxLinkButton('check');
   }

   destroy(): void {
      this.host.jqxLinkButton('destroy');
   }

   focus(): void {
      this.host.jqxLinkButton('focus');
   }

   render(): void {
      this.host.jqxLinkButton('render');
   }

   toggle(): void {
      this.host.jqxLinkButton('toggle');
   }

   unCheck(): void {
      this.host.jqxLinkButton('unCheck');
   }

   val(value?: string): any {
      if (value !== undefined) {
         return this.host.jqxLinkButton("val", value);
      } else {
         return this.host.jqxLinkButton("val");
      }
   };


   // jqxLinkButtonComponent events
   @Output() onClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('click', (eventData: any) => { this.onClick.emit(eventData); });
   }

} //jqxLinkButtonComponent


