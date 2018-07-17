/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxButton',
    template: '<button><ng-content></ng-content></button>'
})

export class jqxButtonComponent implements OnChanges
{
   @Input('delay') attrDelay: number;
   @Input('disabled') attrDisabled: boolean;
   @Input('imgSrc') attrImgSrc: string;
   @Input('imgWidth') attrImgWidth: number | string;
   @Input('imgHeight') attrImgHeight: number | string;
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
   widgetObject:  jqwidgets.jqxButton;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxButton(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxButton(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxButton(this.properties[i])) {
                  this.host.jqxButton(this.properties[i], this[attrName]); 
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

      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
      this.host = this.widgetObject['host'];
      this.__wireEvents__();

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxButton('setOptions', options);
   }

   // jqxButtonComponent properties
   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxButton('delay', arg);
      } else {
          return this.host.jqxButton('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('disabled', arg);
      } else {
          return this.host.jqxButton('disabled');
      }
   }

   height(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('height', arg);
      } else {
          return this.host.jqxButton('height');
      }
   }

   imgSrc(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgSrc', arg);
      } else {
          return this.host.jqxButton('imgSrc');
      }
   }

   imgWidth(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgWidth', arg);
      } else {
          return this.host.jqxButton('imgWidth');
      }
   }

   imgHeight(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgHeight', arg);
      } else {
          return this.host.jqxButton('imgHeight');
      }
   }

   imgPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('imgPosition', arg);
      } else {
          return this.host.jqxButton('imgPosition');
      }
   }

   roundedCorners(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('roundedCorners', arg);
      } else {
          return this.host.jqxButton('roundedCorners');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('rtl', arg);
      } else {
          return this.host.jqxButton('rtl');
      }
   }

   textPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('textPosition', arg);
      } else {
          return this.host.jqxButton('textPosition');
      }
   }

   textImageRelation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('textImageRelation', arg);
      } else {
          return this.host.jqxButton('textImageRelation');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('theme', arg);
      } else {
          return this.host.jqxButton('theme');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('template', arg);
      } else {
          return this.host.jqxButton('template');
      }
   }

   toggled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButton('toggled', arg);
      } else {
          return this.host.jqxButton('toggled');
      }
   }

   width(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('width', arg);
      } else {
          return this.host.jqxButton('width');
      }
   }

   value(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButton('value', arg);
      } else {
          return this.host.jqxButton('value');
      }
   }


   // jqxButtonComponent functions
   check(): void {
      this.host.jqxButton('check');
   }

   destroy(): void {
      this.host.jqxButton('destroy');
   }

   focus(): void {
      this.host.jqxButton('focus');
   }

   render(): void {
      this.host.jqxButton('render');
   }

   toggle(): void {
      this.host.jqxButton('toggle');
   }

   unCheck(): void {
      this.host.jqxButton('unCheck');
   }

   val(value?: string): any {
      if (value !== undefined) {
         return this.host.jqxButton("val", value);
      } else {
         return this.host.jqxButton("val");
      }
   };


   // jqxButtonComponent events
   @Output() onClick = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('click', (eventData: any) => { this.onClick.emit(eventData); });
   }

} //jqxButtonComponent


