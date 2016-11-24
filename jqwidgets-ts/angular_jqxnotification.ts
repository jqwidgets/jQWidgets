/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularNotification',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxNotificationComponent implements OnChanges
{
   @Input('appendContainer') attrAppendContainer;
   @Input('autoOpen') attrAutoOpen;
   @Input('animationOpenDelay') attrAnimationOpenDelay;
   @Input('animationCloseDelay') attrAnimationCloseDelay;
   @Input('autoClose') attrAutoClose;
   @Input('autoCloseDelay') attrAutoCloseDelay;
   @Input('blink') attrBlink;
   @Input('browserBoundsOffset') attrBrowserBoundsOffset;
   @Input('closeOnClick') attrCloseOnClick;
   @Input('disabled') attrDisabled;
   @Input('hoverOpacity') attrHoverOpacity;
   @Input('icon') attrIcon;
   @Input('notificationOffset') attrNotificationOffset;
   @Input('opacity') attrOpacity;
   @Input('position') attrPosition;
   @Input('rtl') attrRtl;
   @Input('showCloseButton') attrShowCloseButton;
   @Input('template') attrTemplate;
   @Input('theme') attrTheme;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['appendContainer','autoOpen','animationOpenDelay','animationCloseDelay','autoClose','autoCloseDelay','blink','browserBoundsOffset','closeOnClick','disabled','height','hoverOpacity','icon','notificationOffset','opacity','position','rtl','showCloseButton','template','theme','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxNotification;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxNotification(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxNotification(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxNotification(this.properties[i])) {
                  this.host.jqxNotification(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNotification', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxNotification('setOptions', options);
   }

   // jqxNotificationComponent properties
   appendContainer(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('appendContainer', arg);
      } else {
          return this.host.jqxNotification('appendContainer');
      }
   }

   autoOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('autoOpen', arg);
      } else {
          return this.host.jqxNotification('autoOpen');
      }
   }

   animationOpenDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('animationOpenDelay', arg);
      } else {
          return this.host.jqxNotification('animationOpenDelay');
      }
   }

   animationCloseDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('animationCloseDelay', arg);
      } else {
          return this.host.jqxNotification('animationCloseDelay');
      }
   }

   autoClose(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('autoClose', arg);
      } else {
          return this.host.jqxNotification('autoClose');
      }
   }

   autoCloseDelay(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('autoCloseDelay', arg);
      } else {
          return this.host.jqxNotification('autoCloseDelay');
      }
   }

   blink(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('blink', arg);
      } else {
          return this.host.jqxNotification('blink');
      }
   }

   browserBoundsOffset(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('browserBoundsOffset', arg);
      } else {
          return this.host.jqxNotification('browserBoundsOffset');
      }
   }

   closeOnClick(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('closeOnClick', arg);
      } else {
          return this.host.jqxNotification('closeOnClick');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('disabled', arg);
      } else {
          return this.host.jqxNotification('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('height', arg);
      } else {
          return this.host.jqxNotification('height');
      }
   }

   hoverOpacity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('hoverOpacity', arg);
      } else {
          return this.host.jqxNotification('hoverOpacity');
      }
   }

   icon(arg?: jqwidgets.NotificationIcon) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('icon', arg);
      } else {
          return this.host.jqxNotification('icon');
      }
   }

   notificationOffset(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('notificationOffset', arg);
      } else {
          return this.host.jqxNotification('notificationOffset');
      }
   }

   opacity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('opacity', arg);
      } else {
          return this.host.jqxNotification('opacity');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('position', arg);
      } else {
          return this.host.jqxNotification('position');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('rtl', arg);
      } else {
          return this.host.jqxNotification('rtl');
      }
   }

   showCloseButton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('showCloseButton', arg);
      } else {
          return this.host.jqxNotification('showCloseButton');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('template', arg);
      } else {
          return this.host.jqxNotification('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('theme', arg);
      } else {
          return this.host.jqxNotification('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxNotification('width', arg);
      } else {
          return this.host.jqxNotification('width');
      }
   }


   // jqxNotificationComponent functions
   closeAll(): void {
      this.host.jqxNotification('closeAll');
   }
   closeLast(): void {
      this.host.jqxNotification('closeLast');
   }
   destroy(): void {
      this.host.jqxNotification('destroy');
   }
   open(): void {
      this.host.jqxNotification('open');
   }
   refresh(): void {
      this.host.jqxNotification('refresh');
   }
   render(): void {
      this.host.jqxNotification('render');
   }

   // jqxNotificationComponent events
   @Output() onClose = new EventEmitter();
   @Output() onClick = new EventEmitter();
   @Output() onOpen = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
   }

} //jqxNotificationComponent
