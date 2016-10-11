/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularToolbar',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxToolBarComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxToolBar;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
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
   @Output() OnClose = new EventEmitter();
   @Output() OnOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.OnClose.emit(eventData); });
      this.host.on('open', (eventData) => { this.OnOpen.emit(eventData); });
   }

} //jqxToolBarComponent
