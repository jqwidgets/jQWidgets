/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularSplitter',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxSplitterComponent implements OnChanges
{
   @Input('disabled') attrDisabled;
   @Input('orientation') attrOrientation;
   @Input('panels') attrPanels;
   @Input('resizable') attrResizable;
   @Input('splitBarSize') attrSplitBarSize;
   @Input('showSplitBar') attrShowSplitBar;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['disabled','height','orientation','panels','resizable','splitBarSize','showSplitBar','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxSplitter;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxSplitter(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxSplitter(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxSplitter(this.properties[i])) {
                  this.host.jqxSplitter(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSplitter', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxSplitter('setOptions', options);
   }

   // jqxSplitterComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('disabled', arg);
      } else {
          return this.host.jqxSplitter('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('height', arg);
      } else {
          return this.host.jqxSplitter('height');
      }
   }

   orientation(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('orientation', arg);
      } else {
          return this.host.jqxSplitter('orientation');
      }
   }

   panels(arg?: Array<jqwidgets.SplitterPanel>) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('panels', arg);
      } else {
          return this.host.jqxSplitter('panels');
      }
   }

   resizable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('resizable', arg);
      } else {
          return this.host.jqxSplitter('resizable');
      }
   }

   splitBarSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('splitBarSize', arg);
      } else {
          return this.host.jqxSplitter('splitBarSize');
      }
   }

   showSplitBar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('showSplitBar', arg);
      } else {
          return this.host.jqxSplitter('showSplitBar');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('theme', arg);
      } else {
          return this.host.jqxSplitter('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSplitter('width', arg);
      } else {
          return this.host.jqxSplitter('width');
      }
   }


   // jqxSplitterComponent functions
   collapse(): void {
      this.host.jqxSplitter('collapse');
   }
   destroy(): void {
      this.host.jqxSplitter('destroy');
   }
   disable(): void {
      this.host.jqxSplitter('disable');
   }
   enable(): void {
      this.host.jqxSplitter('enable');
   }
   expand(): void {
      this.host.jqxSplitter('expand');
   }
   render(): void {
      this.host.jqxSplitter('render');
   }
   refresh(): void {
      this.host.jqxSplitter('refresh');
   }

   // jqxSplitterComponent events
   @Output() onCollapsed = new EventEmitter();
   @Output() onExpanded = new EventEmitter();
   @Output() onResize = new EventEmitter();
   @Output() onResizeStart = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
      this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
      this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
      this.host.on('resizeStart', (eventData) => { this.onResizeStart.emit(eventData); });
   }

} //jqxSplitterComponent
