/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxDropDownListComponent),
    multi: true
}

@Component({
    selector: 'angularDropDownList',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxDropDownListComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxDropDownList;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownList', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxDropDownList('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxDropDownList('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxDropDownList('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxDropDownList('setOptions', options);
   }

   // jqxDropDownListComponent properties
   autoOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('autoOpen', arg);
      } else {
          return this.host.jqxDropDownList('autoOpen');
      }
   }

   autoDropDownHeight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('autoDropDownHeight', arg);
      } else {
          return this.host.jqxDropDownList('autoDropDownHeight');
      }
   }

   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('animationType', arg);
      } else {
          return this.host.jqxDropDownList('animationType');
      }
   }

   checkboxes(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('checkboxes', arg);
      } else {
          return this.host.jqxDropDownList('checkboxes');
      }
   }

   closeDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('closeDelay', arg);
      } else {
          return this.host.jqxDropDownList('closeDelay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('disabled', arg);
      } else {
          return this.host.jqxDropDownList('disabled');
      }
   }

   displayMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('displayMember', arg);
      } else {
          return this.host.jqxDropDownList('displayMember');
      }
   }

   dropDownHorizontalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('dropDownHorizontalAlignment', arg);
      } else {
          return this.host.jqxDropDownList('dropDownHorizontalAlignment');
      }
   }

   dropDownHeight(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('dropDownHeight', arg);
      } else {
          return this.host.jqxDropDownList('dropDownHeight');
      }
   }

   dropDownWidth(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('dropDownWidth', arg);
      } else {
          return this.host.jqxDropDownList('dropDownWidth');
      }
   }

   enableSelection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('enableSelection', arg);
      } else {
          return this.host.jqxDropDownList('enableSelection');
      }
   }

   enableBrowserBoundsDetection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('enableBrowserBoundsDetection', arg);
      } else {
          return this.host.jqxDropDownList('enableBrowserBoundsDetection');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('enableHover', arg);
      } else {
          return this.host.jqxDropDownList('enableHover');
      }
   }

   filterable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('filterable', arg);
      } else {
          return this.host.jqxDropDownList('filterable');
      }
   }

   filterHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('filterHeight', arg);
      } else {
          return this.host.jqxDropDownList('filterHeight');
      }
   }

   filterDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('filterDelay', arg);
      } else {
          return this.host.jqxDropDownList('filterDelay');
      }
   }

   filterPlaceHolder(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('filterPlaceHolder', arg);
      } else {
          return this.host.jqxDropDownList('filterPlaceHolder');
      }
   }

   height(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('height', arg);
      } else {
          return this.host.jqxDropDownList('height');
      }
   }

   incrementalSearch(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('incrementalSearch', arg);
      } else {
          return this.host.jqxDropDownList('incrementalSearch');
      }
   }

   incrementalSearchDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('incrementalSearchDelay', arg);
      } else {
          return this.host.jqxDropDownList('incrementalSearchDelay');
      }
   }

   itemHeight(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('itemHeight', arg);
      } else {
          return this.host.jqxDropDownList('itemHeight');
      }
   }

   openDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('openDelay', arg);
      } else {
          return this.host.jqxDropDownList('openDelay');
      }
   }

   placeHolder(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('placeHolder', arg);
      } else {
          return this.host.jqxDropDownList('placeHolder');
      }
   }

   popupZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('popupZIndex', arg);
      } else {
          return this.host.jqxDropDownList('popupZIndex');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('rtl', arg);
      } else {
          return this.host.jqxDropDownList('rtl');
      }
   }

   renderer(arg?: (index: Number, label?: String, value?: any) => String) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('renderer', arg);
      } else {
          return this.host.jqxDropDownList('renderer');
      }
   }

   selectionRenderer(arg?: (object?: any, index?: Number, label?: String) => String) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('selectionRenderer', arg);
      } else {
          return this.host.jqxDropDownList('selectionRenderer');
      }
   }

   searchMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('searchMode', arg);
      } else {
          return this.host.jqxDropDownList('searchMode');
      }
   }

   scrollBarSize(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('scrollBarSize', arg);
      } else {
          return this.host.jqxDropDownList('scrollBarSize');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('source', arg);
      } else {
          return this.host.jqxDropDownList('source');
      }
   }

   selectedIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('selectedIndex', arg);
      } else {
          return this.host.jqxDropDownList('selectedIndex');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('theme', arg);
      } else {
          return this.host.jqxDropDownList('theme');
      }
   }

   valueMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('valueMember', arg);
      } else {
          return this.host.jqxDropDownList('valueMember');
      }
   }

   width(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDropDownList('width', arg);
      } else {
          return this.host.jqxDropDownList('width');
      }
   }


   // jqxDropDownListComponent functions
   addItem(item: jqwidgets.DropDownListItem): boolean {
      return this.host.jqxDropDownList('addItem', item);

   }
   clearSelection(): void {
      this.host.jqxDropDownList('clearSelection');

   }
   clear(): void {
      this.host.jqxDropDownList('clear');

   }
   close(): void {
      this.host.jqxDropDownList('close');

   }
   checkIndex(index: number): void {
      this.host.jqxDropDownList('checkIndex', index);

   }
   checkItem(item: any): void {
      this.host.jqxDropDownList('checkItem', item);

   }
   checkAll(): void {
      this.host.jqxDropDownList('checkAll');

   }
   clearFilter(): void {
      this.host.jqxDropDownList('clearFilter');

   }
   destroy(): void {
      this.host.jqxDropDownList('destroy');

   }
   disableItem(item: any): void {
      this.host.jqxDropDownList('disableItem', item);

   }
   disableAt(index: number): void {
      this.host.jqxDropDownList('disableAt', index);

   }
   enableItem(item: any): void {
      this.host.jqxDropDownList('enableItem', item);

   }
   enableAt(index: number): void {
      this.host.jqxDropDownList('enableAt', index);

   }
   ensureVisible(index: number): void {
      this.host.jqxDropDownList('ensureVisible', index);

   }
   focus(): void {
      this.host.jqxDropDownList('focus');

   }
   getItem(index: number): jqwidgets.DropDownListItem {
      return this.host.jqxDropDownList('getItem', index);

   }
   getItemByValue(itemValue: string): jqwidgets.DropDownListItem {
      return this.host.jqxDropDownList('getItemByValue', itemValue);

   }
   getItems(): Array<jqwidgets.DropDownListItem> {
      return this.host.jqxDropDownList('getItems');

   }
   getCheckedItems(): Array<jqwidgets.DropDownListItem> {
      return this.host.jqxDropDownList('getCheckedItems');

   }
   getSelectedItem(): jqwidgets.DropDownListItem {
      return this.host.jqxDropDownList('getSelectedItem');

   }
   getSelectedIndex(): number {
      return this.host.jqxDropDownList('getSelectedIndex');

   }
   insertAt(item: jqwidgets.DropDownListItem, index: number): void {
      this.host.jqxDropDownList('insertAt', item, index);

   }
   isOpened(): boolean {
      return this.host.jqxDropDownList('isOpened');

   }
   indeterminateIndex(index: number): void {
      this.host.jqxDropDownList('indeterminateIndex', index);

   }
   indeterminateItem(item: any): void {
      this.host.jqxDropDownList('indeterminateItem', item);

   }
   loadFromSelect(arg: string): void {
      this.host.jqxDropDownList('loadFromSelect', arg);

   }
   open(): void {
      this.host.jqxDropDownList('open');

   }
   removeItem(item: any): void {
      this.host.jqxDropDownList('removeItem', item);

   }
   removeAt(index: number): void {
      this.host.jqxDropDownList('removeAt', index);

   }
   selectIndex(index: number): void {
      this.host.jqxDropDownList('selectIndex', index);

   }
   selectItem(item: jqwidgets.DropDownListItem): void {
      this.host.jqxDropDownList('selectItem', item);

   }
   setContent(content: string): void {
      this.host.jqxDropDownList('setContent', content);

   }
   updateItem(newItem: jqwidgets.DropDownListItem, item: any): void {
      this.host.jqxDropDownList('updateItem', newItem, item);

   }
   updateAt(item: jqwidgets.DropDownListItem, index: number): void {
      this.host.jqxDropDownList('updateAt', item, index);

   }
   unselectIndex(index: number): void {
      this.host.jqxDropDownList('unselectIndex', index);

   }
   unselectItem(item: any): void {
      this.host.jqxDropDownList('unselectItem', item);

   }
   uncheckIndex(index: number): void {
      this.host.jqxDropDownList('uncheckIndex', index);

   }
   uncheckItem(item: any): void {
      this.host.jqxDropDownList('uncheckItem', item);

   }
   uncheckAll(): void {
      this.host.jqxDropDownList('uncheckAll');

   }
   val(value: string): string {
      return this.host.jqxDropDownList('val', value);

   }

   // jqxDropDownListComponent events
   @Output() OnBindingComplete = new EventEmitter();
   @Output() OnClose = new EventEmitter();
   @Output() OnCheckChange = new EventEmitter();
   @Output() OnChange = new EventEmitter();
   @Output() OnOpen = new EventEmitter();
   @Output() OnSelect = new EventEmitter();
   @Output() OnUnselect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData) => { this.OnBindingComplete.emit(eventData); });
      this.host.on('close', (eventData) => { this.OnClose.emit(eventData); });
      this.host.on('checkChange', (eventData) => { this.OnCheckChange.emit(eventData); });
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('open', (eventData) => { this.OnOpen.emit(eventData); });
      this.host.on('select', (eventData) => { this.OnSelect.emit(eventData); });
      this.host.on('unselect', (eventData) => { this.OnUnselect.emit(eventData); });
   }

} //jqxDropDownListComponent
