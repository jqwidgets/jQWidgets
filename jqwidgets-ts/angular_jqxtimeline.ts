/*
jQWidgets v19.2.0 (2024-May)
Copyright (c) 2011-2024 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/// <reference path="jqwidgets.d.ts" />

import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxtimeline.js';

import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxTimeline',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTimelineComponent implements OnChanges
{
   @Input('autoWidth') attrAutoWidth: boolean;
   @Input('collapsible') attrCollapsible: boolean;
   @Input('disabled') attrDisabled: boolean;
   @Input('horizontal') attrHorizontal: boolean;
   @Input('position') attrPosition: string;
   @Input('source') attrSource: [];
   @Input('theme') attrTheme: string;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['autoWidth','collapsible','disabled','horizontal','position','source','theme'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxTimeline;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxTimeline(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxTimeline(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxTimeline(this.properties[i])) {
                  this.host.jqxTimeline(this.properties[i], this[attrName]); 
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
      if (this.host) {
         return;
      }
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTimeline', options);

   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      if(this.host) this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxTimeline('setOptions', options);
   }

   // jqxTimelineComponent properties
   autoWidth(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTimeline('autoWidth', arg);
      } else {
          return this.host.jqxTimeline('autoWidth');
      }
   }

   collapsible(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTimeline('collapsible', arg);
      } else {
          return this.host.jqxTimeline('collapsible');
      }
   }

   disabled(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTimeline('disabled', arg);
      } else {
          return this.host.jqxTimeline('disabled');
      }
   }

   horizontal(arg?: boolean): boolean {
      if (arg !== undefined) {
          this.host.jqxTimeline('horizontal', arg);
      } else {
          return this.host.jqxTimeline('horizontal');
      }
   }

   position(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxTimeline('position', arg);
      } else {
          return this.host.jqxTimeline('position');
      }
   }

   source(arg?: undefined): undefined {
      if (arg !== undefined) {
          this.host.jqxTimeline('source', arg);
      } else {
          return this.host.jqxTimeline('source');
      }
   }

   theme(arg?: string): string {
      if (arg !== undefined) {
          this.host.jqxTimeline('theme', arg);
      } else {
          return this.host.jqxTimeline('theme');
      }
   }


   // jqxTimelineComponent functions
   render(): undefined {
      return this.host.jqxTimeline('render');
   }


   // jqxTimelineComponent events


   __wireEvents__(): void {

   }

} //jqxTimelineComponent


