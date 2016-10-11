/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularExpander',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxExpanderComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxExpander;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxExpander', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxExpander('setOptions', options);
   }

   // jqxExpanderComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('animationType', arg);
      } else {
          return this.host.jqxExpander('animationType');
      }
   }

   arrowPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('arrowPosition', arg);
      } else {
          return this.host.jqxExpander('arrowPosition');
      }
   }

   collapseAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('collapseAnimationDuration', arg);
      } else {
          return this.host.jqxExpander('collapseAnimationDuration');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('disabled', arg);
      } else {
          return this.host.jqxExpander('disabled');
      }
   }

   expanded(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('expanded', arg);
      } else {
          return this.host.jqxExpander('expanded');
      }
   }

   expandAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('expandAnimationDuration', arg);
      } else {
          return this.host.jqxExpander('expandAnimationDuration');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('height', arg);
      } else {
          return this.host.jqxExpander('height');
      }
   }

   headerPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('headerPosition', arg);
      } else {
          return this.host.jqxExpander('headerPosition');
      }
   }

   initContent(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('initContent', arg);
      } else {
          return this.host.jqxExpander('initContent');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('rtl', arg);
      } else {
          return this.host.jqxExpander('rtl');
      }
   }

   showArrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('showArrow', arg);
      } else {
          return this.host.jqxExpander('showArrow');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('theme', arg);
      } else {
          return this.host.jqxExpander('theme');
      }
   }

   toggleMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('toggleMode', arg);
      } else {
          return this.host.jqxExpander('toggleMode');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxExpander('width', arg);
      } else {
          return this.host.jqxExpander('width');
      }
   }


   // jqxExpanderComponent functions
   collapse(): void {
      this.host.jqxExpander('collapse');

   }
   disable(): void {
      this.host.jqxExpander('disable');

   }
   destroy(): void {
      this.host.jqxExpander('destroy');

   }
   enable(): void {
      this.host.jqxExpander('enable');

   }
   expand(): void {
      this.host.jqxExpander('expand');

   }
   focus(): void {
      this.host.jqxExpander('focus');

   }
   getContent(): string {
      return this.host.jqxExpander('getContent');

   }
   getHeaderContent(): string {
      return this.host.jqxExpander('getHeaderContent');

   }
   invalidate(): void {
      this.host.jqxExpander('invalidate');

   }
   refresh(): void {
      this.host.jqxExpander('refresh');

   }
   render(): void {
      this.host.jqxExpander('render');

   }
   setHeaderContent(headerContent: string): void {
      this.host.jqxExpander('setHeaderContent', headerContent);

   }
   setContent(content: string): void {
      this.host.jqxExpander('setContent', content);

   }

   // jqxExpanderComponent events
   @Output() OnCollapsing = new EventEmitter();
   @Output() OnCollapsed = new EventEmitter();
   @Output() OnExpanding = new EventEmitter();
   @Output() OnExpanded = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('collapsing', (eventData) => { this.OnCollapsing.emit(eventData); });
      this.host.on('collapsed', (eventData) => { this.OnCollapsed.emit(eventData); });
      this.host.on('expanding', (eventData) => { this.OnExpanding.emit(eventData); });
      this.host.on('expanded', (eventData) => { this.OnExpanded.emit(eventData); });
   }

} //jqxExpanderComponent
