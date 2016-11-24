/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularToolbar',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxToolBarComponent implements OnChanges
{
   @Input('disabled') attrDisabled;
   @Input('initTools') attrInitTools;
   @Input('minimizeWidth') attrMinimizeWidth;
   @Input('minWidth') attrMinWidth;
   @Input('maxWidth') attrMaxWidth;
   @Input('rtl') attrRtl;
   @Input('tools') attrTools;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['disabled','height','initTools','minimizeWidth','minWidth','maxWidth','rtl','tools','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxToolBar;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxToolBar(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxToolBar(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxToolBar(this.properties[i])) {
                  this.host.jqxToolBar(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxToolBar('setOptions', options);
   }

   // jqxToolBarComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('disabled', arg);
      } else {
          return this.host.jqxToolBar('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('height', arg);
      } else {
          return this.host.jqxToolBar('height');
      }
   }

   initTools(arg?: (type?: String, index?: Number, tool?: any, menuToolIninitialization?: Boolean) => void) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('initTools', arg);
      } else {
          return this.host.jqxToolBar('initTools');
      }
   }

   minimizeWidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('minimizeWidth', arg);
      } else {
          return this.host.jqxToolBar('minimizeWidth');
      }
   }

   minWidth(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('minWidth', arg);
      } else {
          return this.host.jqxToolBar('minWidth');
      }
   }

   maxWidth(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('maxWidth', arg);
      } else {
          return this.host.jqxToolBar('maxWidth');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('rtl', arg);
      } else {
          return this.host.jqxToolBar('rtl');
      }
   }

   tools(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('tools', arg);
      } else {
          return this.host.jqxToolBar('tools');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('theme', arg);
      } else {
          return this.host.jqxToolBar('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxToolBar('width', arg);
      } else {
          return this.host.jqxToolBar('width');
      }
   }


   // jqxToolBarComponent functions
   addTool(type: string, position: string, separator: boolean, menuToolIninitialization: (type?: String, tool?: any, menuToolIninitialization?: Boolean) => void): void {
      this.host.jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
   }
   disableTool(index: number, disable: boolean): void {
      this.host.jqxToolBar('disableTool', index, disable);
   }
   destroy(): void {
      this.host.jqxToolBar('destroy');
   }
   destroyTool(index: number): void {
      this.host.jqxToolBar('destroyTool', index);
   }
   getTools(): Array<jqwidgets.ToolBarToolItem> {
      return this.host.jqxToolBar('getTools');
   }
   render(): void {
      this.host.jqxToolBar('render');
   }
   refresh(): void {
      this.host.jqxToolBar('refresh');
   }

   // jqxToolBarComponent events
   @Output() onClose = new EventEmitter();
   @Output() onOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
   }

} //jqxToolBarComponent
