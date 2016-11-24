/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularWindow',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxWindowComponent implements OnChanges
{
   @Input('autoOpen') attrAutoOpen;
   @Input('animationType') attrAnimationType;
   @Input('collapsed') attrCollapsed;
   @Input('collapseAnimationDuration') attrCollapseAnimationDuration;
   @Input('content') attrContent;
   @Input('closeAnimationDuration') attrCloseAnimationDuration;
   @Input('closeButtonSize') attrCloseButtonSize;
   @Input('closeButtonAction') attrCloseButtonAction;
   @Input('cancelButton') attrCancelButton;
   @Input('dragArea') attrDragArea;
   @Input('draggable') attrDraggable;
   @Input('disabled') attrDisabled;
   @Input('initContent') attrInitContent;
   @Input('isModal') attrIsModal;
   @Input('keyboardCloseKey') attrKeyboardCloseKey;
   @Input('keyboardNavigation') attrKeyboardNavigation;
   @Input('minHeight') attrMinHeight;
   @Input('maxHeight') attrMaxHeight;
   @Input('minWidth') attrMinWidth;
   @Input('maxWidth') attrMaxWidth;
   @Input('modalOpacity') attrModalOpacity;
   @Input('modalZIndex') attrModalZIndex;
   @Input('modalBackgroundZIndex') attrModalBackgroundZIndex;
   @Input('okButton') attrOkButton;
   @Input('position') attrPosition;
   @Input('rtl') attrRtl;
   @Input('resizable') attrResizable;
   @Input('showAnimationDuration') attrShowAnimationDuration;
   @Input('showCloseButton') attrShowCloseButton;
   @Input('showCollapseButton') attrShowCollapseButton;
   @Input('theme') attrTheme;
   @Input('title') attrTitle;
   @Input('zIndex') attrZIndex;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['autoOpen','animationType','collapsed','collapseAnimationDuration','content','closeAnimationDuration','closeButtonSize','closeButtonAction','cancelButton','dragArea','draggable','disabled','height','initContent','isModal','keyboardCloseKey','keyboardNavigation','minHeight','maxHeight','minWidth','maxWidth','modalOpacity','modalZIndex','modalBackgroundZIndex','okButton','position','rtl','resizable','showAnimationDuration','showCloseButton','showCollapseButton','theme','title','width','zIndex'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxWindow;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxWindow(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxWindow(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxWindow(this.properties[i])) {
                  this.host.jqxWindow(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxWindow', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxWindow('setOptions', options);
   }

   // jqxWindowComponent properties
   autoOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('autoOpen', arg);
      } else {
          return this.host.jqxWindow('autoOpen');
      }
   }

   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('animationType', arg);
      } else {
          return this.host.jqxWindow('animationType');
      }
   }

   collapsed(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('collapsed', arg);
      } else {
          return this.host.jqxWindow('collapsed');
      }
   }

   collapseAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('collapseAnimationDuration', arg);
      } else {
          return this.host.jqxWindow('collapseAnimationDuration');
      }
   }

   content(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('content', arg);
      } else {
          return this.host.jqxWindow('content');
      }
   }

   closeAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('closeAnimationDuration', arg);
      } else {
          return this.host.jqxWindow('closeAnimationDuration');
      }
   }

   closeButtonSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('closeButtonSize', arg);
      } else {
          return this.host.jqxWindow('closeButtonSize');
      }
   }

   closeButtonAction(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('closeButtonAction', arg);
      } else {
          return this.host.jqxWindow('closeButtonAction');
      }
   }

   cancelButton(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('cancelButton', arg);
      } else {
          return this.host.jqxWindow('cancelButton');
      }
   }

   dragArea(arg?: jqwidgets.WindowDragArea) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('dragArea', arg);
      } else {
          return this.host.jqxWindow('dragArea');
      }
   }

   draggable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('draggable', arg);
      } else {
          return this.host.jqxWindow('draggable');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('disabled', arg);
      } else {
          return this.host.jqxWindow('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('height', arg);
      } else {
          return this.host.jqxWindow('height');
      }
   }

   initContent(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('initContent', arg);
      } else {
          return this.host.jqxWindow('initContent');
      }
   }

   isModal(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('isModal', arg);
      } else {
          return this.host.jqxWindow('isModal');
      }
   }

   keyboardCloseKey(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('keyboardCloseKey', arg);
      } else {
          return this.host.jqxWindow('keyboardCloseKey');
      }
   }

   keyboardNavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('keyboardNavigation', arg);
      } else {
          return this.host.jqxWindow('keyboardNavigation');
      }
   }

   minHeight(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('minHeight', arg);
      } else {
          return this.host.jqxWindow('minHeight');
      }
   }

   maxHeight(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('maxHeight', arg);
      } else {
          return this.host.jqxWindow('maxHeight');
      }
   }

   minWidth(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('minWidth', arg);
      } else {
          return this.host.jqxWindow('minWidth');
      }
   }

   maxWidth(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('maxWidth', arg);
      } else {
          return this.host.jqxWindow('maxWidth');
      }
   }

   modalOpacity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('modalOpacity', arg);
      } else {
          return this.host.jqxWindow('modalOpacity');
      }
   }

   modalZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('modalZIndex', arg);
      } else {
          return this.host.jqxWindow('modalZIndex');
      }
   }

   modalBackgroundZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('modalBackgroundZIndex', arg);
      } else {
          return this.host.jqxWindow('modalBackgroundZIndex');
      }
   }

   okButton(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('okButton', arg);
      } else {
          return this.host.jqxWindow('okButton');
      }
   }

   position(arg?: String | any) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('position', arg);
      } else {
          return this.host.jqxWindow('position');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('rtl', arg);
      } else {
          return this.host.jqxWindow('rtl');
      }
   }

   resizable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('resizable', arg);
      } else {
          return this.host.jqxWindow('resizable');
      }
   }

   showAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('showAnimationDuration', arg);
      } else {
          return this.host.jqxWindow('showAnimationDuration');
      }
   }

   showCloseButton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('showCloseButton', arg);
      } else {
          return this.host.jqxWindow('showCloseButton');
      }
   }

   showCollapseButton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('showCollapseButton', arg);
      } else {
          return this.host.jqxWindow('showCollapseButton');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('theme', arg);
      } else {
          return this.host.jqxWindow('theme');
      }
   }

   title(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('title', arg);
      } else {
          return this.host.jqxWindow('title');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('width', arg);
      } else {
          return this.host.jqxWindow('width');
      }
   }

   zIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxWindow('zIndex', arg);
      } else {
          return this.host.jqxWindow('zIndex');
      }
   }


   // jqxWindowComponent functions
   bringToFront(): void {
      this.host.jqxWindow('bringToFront');
   }
   close(): void {
      this.host.jqxWindow('close');
   }
   collapse(): void {
      this.host.jqxWindow('collapse');
   }
   closeAll(): void {
      this.host.jqxWindow('closeAll');
   }
   disable(): void {
      this.host.jqxWindow('disable');
   }
   destroy(): void {
      this.host.jqxWindow('destroy');
   }
   enable(): void {
      this.host.jqxWindow('enable');
   }
   expand(): void {
      this.host.jqxWindow('expand');
   }
   focus(): void {
      this.host.jqxWindow('focus');
   }
   isOpen(): boolean {
      return this.host.jqxWindow('isOpen');
   }
   move(top: number, left: number): void {
      this.host.jqxWindow('move', top, left);
   }
   open(): void {
      this.host.jqxWindow('open');
   }
   resize(top: number, left: number): void {
      this.host.jqxWindow('resize', top, left);
   }
   setTitle(title: string): void {
      this.host.jqxWindow('setTitle', title);
   }
   setContent(content: string): void {
      this.host.jqxWindow('setContent', content);
   }

   // jqxWindowComponent events
   @Output() onClose = new EventEmitter();
   @Output() onCollapse = new EventEmitter();
   @Output() onCreated = new EventEmitter();
   @Output() onExpand = new EventEmitter();
   @Output() onMoving = new EventEmitter();
   @Output() onMoved = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onResizing = new EventEmitter();
   @Output() onResized = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
      this.host.on('created', (eventData) => { this.onCreated.emit(eventData); });
      this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
      this.host.on('moving', (eventData) => { this.onMoving.emit(eventData); });
      this.host.on('moved', (eventData) => { this.onMoved.emit(eventData); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
      this.host.on('resizing', (eventData) => { this.onResizing.emit(eventData); });
      this.host.on('resized', (eventData) => { this.onResized.emit(eventData); });
   }

} //jqxWindowComponent
