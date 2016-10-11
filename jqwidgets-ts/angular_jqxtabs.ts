/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTabs',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTabsComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxTabs;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTabs', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxTabs('setOptions', options);
   }

   // jqxTabsComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('animationType', arg);
      } else {
          return this.host.jqxTabs('animationType');
      }
   }

   autoHeight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('autoHeight', arg);
      } else {
          return this.host.jqxTabs('autoHeight');
      }
   }

   closeButtonSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('closeButtonSize', arg);
      } else {
          return this.host.jqxTabs('closeButtonSize');
      }
   }

   collapsible(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('collapsible', arg);
      } else {
          return this.host.jqxTabs('collapsible');
      }
   }

   contentTransitionDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('contentTransitionDuration', arg);
      } else {
          return this.host.jqxTabs('contentTransitionDuration');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('disabled', arg);
      } else {
          return this.host.jqxTabs('disabled');
      }
   }

   enabledHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('enabledHover', arg);
      } else {
          return this.host.jqxTabs('enabledHover');
      }
   }

   enableScrollAnimation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('enableScrollAnimation', arg);
      } else {
          return this.host.jqxTabs('enableScrollAnimation');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('height', arg);
      } else {
          return this.host.jqxTabs('height');
      }
   }

   initTabContent(arg?: (tab?: Number) => void) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('initTabContent', arg);
      } else {
          return this.host.jqxTabs('initTabContent');
      }
   }

   keyboardNavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('keyboardNavigation', arg);
      } else {
          return this.host.jqxTabs('keyboardNavigation');
      }
   }

   position(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('position', arg);
      } else {
          return this.host.jqxTabs('position');
      }
   }

   reorder(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('reorder', arg);
      } else {
          return this.host.jqxTabs('reorder');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('rtl', arg);
      } else {
          return this.host.jqxTabs('rtl');
      }
   }

   scrollAnimationDuration(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('scrollAnimationDuration', arg);
      } else {
          return this.host.jqxTabs('scrollAnimationDuration');
      }
   }

   selectedItem(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('selectedItem', arg);
      } else {
          return this.host.jqxTabs('selectedItem');
      }
   }

   selectionTracker(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('selectionTracker', arg);
      } else {
          return this.host.jqxTabs('selectionTracker');
      }
   }

   scrollable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('scrollable', arg);
      } else {
          return this.host.jqxTabs('scrollable');
      }
   }

   scrollPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('scrollPosition', arg);
      } else {
          return this.host.jqxTabs('scrollPosition');
      }
   }

   scrollStep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('scrollStep', arg);
      } else {
          return this.host.jqxTabs('scrollStep');
      }
   }

   showCloseButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('showCloseButtons', arg);
      } else {
          return this.host.jqxTabs('showCloseButtons');
      }
   }

   toggleMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('toggleMode', arg);
      } else {
          return this.host.jqxTabs('toggleMode');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('theme', arg);
      } else {
          return this.host.jqxTabs('theme');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTabs('width', arg);
      } else {
          return this.host.jqxTabs('width');
      }
   }


   // jqxTabsComponent functions
   addAt(index: number, title: string, content: string): void {
      this.host.jqxTabs('addAt', index, title, content);

   }
   addFirst(htmlElement: any): void {
      this.host.jqxTabs('addFirst', htmlElement);

   }
   addLast(htmlElement: any): void {
      this.host.jqxTabs('addLast', htmlElement);

   }
   collapse(): void {
      this.host.jqxTabs('collapse');

   }
   disable(): void {
      this.host.jqxTabs('disable');

   }
   disableAt(index: number): void {
      this.host.jqxTabs('disableAt', index);

   }
   destroy(): void {
      this.host.jqxTabs('destroy');

   }
   ensureVisible(index: number): void {
      this.host.jqxTabs('ensureVisible', index);

   }
   enableAt(index: number): void {
      this.host.jqxTabs('enableAt', index);

   }
   expand(): void {
      this.host.jqxTabs('expand');

   }
   enable(): void {
      this.host.jqxTabs('enable');

   }
   focus(): void {
      this.host.jqxTabs('focus');

   }
   getTitleAt(index: number): string {
      return this.host.jqxTabs('getTitleAt', index);

   }
   getContentAt(index: number): any {
      return this.host.jqxTabs('getContentAt', index);

   }
   hideCloseButtonAt(index: number): void {
      this.host.jqxTabs('hideCloseButtonAt', index);

   }
   hideAllCloseButtons(): void {
      this.host.jqxTabs('hideAllCloseButtons');

   }
   length(): number {
      return this.host.jqxTabs('length');

   }
   removeAt(index: number): void {
      this.host.jqxTabs('removeAt', index);

   }
   removeFirst(): void {
      this.host.jqxTabs('removeFirst');

   }
   removeLast(): void {
      this.host.jqxTabs('removeLast');

   }
   select(index: number): void {
      this.host.jqxTabs('select', index);

   }
   setContentAt(index: number, htmlElement: string): void {
      this.host.jqxTabs('setContentAt', index, htmlElement);

   }
   setTitleAt(index: number, htmlElement: string): void {
      this.host.jqxTabs('setTitleAt', index, htmlElement);

   }
   showCloseButtonAt(index: number): void {
      this.host.jqxTabs('showCloseButtonAt', index);

   }
   showAllCloseButtons(): void {
      this.host.jqxTabs('showAllCloseButtons');

   }
   val(value: string): string {
      return this.host.jqxTabs('val', value);

   }

   // jqxTabsComponent events
   @Output() OnAdd = new EventEmitter();
   @Output() OnCreated = new EventEmitter();
   @Output() OnCollapsed = new EventEmitter();
   @Output() OnDragStart = new EventEmitter();
   @Output() OnDragEnd = new EventEmitter();
   @Output() OnExpanded = new EventEmitter();
   @Output() OnRemoved = new EventEmitter();
   @Output() OnSelecting = new EventEmitter();
   @Output() OnSelected = new EventEmitter();
   @Output() OnTabclick = new EventEmitter();
   @Output() OnUnselecting = new EventEmitter();
   @Output() OnUnselected = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('add', (eventData) => { this.OnAdd.emit(eventData); });
      this.host.on('created', (eventData) => { this.OnCreated.emit(eventData); });
      this.host.on('collapsed', (eventData) => { this.OnCollapsed.emit(eventData); });
      this.host.on('dragStart', (eventData) => { this.OnDragStart.emit(eventData); });
      this.host.on('dragEnd', (eventData) => { this.OnDragEnd.emit(eventData); });
      this.host.on('expanded', (eventData) => { this.OnExpanded.emit(eventData); });
      this.host.on('removed', (eventData) => { this.OnRemoved.emit(eventData); });
      this.host.on('selecting', (eventData) => { this.OnSelecting.emit(eventData); });
      this.host.on('selected', (eventData) => { this.OnSelected.emit(eventData); });
      this.host.on('tabclick', (eventData) => { this.OnTabclick.emit(eventData); });
      this.host.on('unselecting', (eventData) => { this.OnUnselecting.emit(eventData); });
      this.host.on('unselected', (eventData) => { this.OnUnselected.emit(eventData); });
   }

} //jqxTabsComponent
