/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularExpander',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxExpanderComponent implements OnChanges
{
   @Input('animationType') attrAnimationType;
   @Input('arrowPosition') attrArrowPosition;
   @Input('collapseAnimationDuration') attrCollapseAnimationDuration;
   @Input('disabled') attrDisabled;
   @Input('expanded') attrExpanded;
   @Input('expandAnimationDuration') attrExpandAnimationDuration;
   @Input('headerPosition') attrHeaderPosition;
   @Input('initContent') attrInitContent;
   @Input('rtl') attrRtl;
   @Input('showArrow') attrShowArrow;
   @Input('theme') attrTheme;
   @Input('toggleMode') attrToggleMode;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expanded','expandAnimationDuration','height','headerPosition','initContent','rtl','showArrow','theme','toggleMode','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxExpander;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxExpander(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxExpander(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxExpander(this.properties[i])) {
                  this.host.jqxExpander(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxExpander', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
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
   @Output() onCollapsing = new EventEmitter();
   @Output() onCollapsed = new EventEmitter();
   @Output() onExpanding = new EventEmitter();
   @Output() onExpanded = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('collapsing', (eventData) => { this.onCollapsing.emit(eventData); });
      this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
      this.host.on('expanding', (eventData) => { this.onExpanding.emit(eventData); });
      this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
   }

} //jqxExpanderComponent
