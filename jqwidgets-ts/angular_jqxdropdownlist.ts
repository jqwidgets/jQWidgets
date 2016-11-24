/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => { };
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

export class jqxDropDownListComponent implements ControlValueAccessor, OnChanges 
{
   @Input('autoOpen') attrAutoOpen;
   @Input('autoDropDownHeight') attrAutoDropDownHeight;
   @Input('animationType') attrAnimationType;
   @Input('checkboxes') attrCheckboxes;
   @Input('closeDelay') attrCloseDelay;
   @Input('disabled') attrDisabled;
   @Input('displayMember') attrDisplayMember;
   @Input('dropDownHorizontalAlignment') attrDropDownHorizontalAlignment;
   @Input('dropDownHeight') attrDropDownHeight;
   @Input('dropDownWidth') attrDropDownWidth;
   @Input('enableSelection') attrEnableSelection;
   @Input('enableBrowserBoundsDetection') attrEnableBrowserBoundsDetection;
   @Input('enableHover') attrEnableHover;
   @Input('filterable') attrFilterable;
   @Input('filterHeight') attrFilterHeight;
   @Input('filterDelay') attrFilterDelay;
   @Input('filterPlaceHolder') attrFilterPlaceHolder;
   @Input('incrementalSearch') attrIncrementalSearch;
   @Input('incrementalSearchDelay') attrIncrementalSearchDelay;
   @Input('itemHeight') attrItemHeight;
   @Input('openDelay') attrOpenDelay;
   @Input('placeHolder') attrPlaceHolder;
   @Input('popupZIndex') attrPopupZIndex;
   @Input('rtl') attrRtl;
   @Input('renderer') attrRenderer;
   @Input('selectionRenderer') attrSelectionRenderer;
   @Input('searchMode') attrSearchMode;
   @Input('scrollBarSize') attrScrollBarSize;
   @Input('source') attrSource;
   @Input('selectedIndex') attrSelectedIndex;
   @Input('theme') attrTheme;
   @Input('valueMember') attrValueMember;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['autoOpen','autoDropDownHeight','animationType','checkboxes','closeDelay','disabled','displayMember','dropDownHorizontalAlignment','dropDownHeight','dropDownWidth','enableSelection','enableBrowserBoundsDetection','enableHover','filterable','filterHeight','filterDelay','filterPlaceHolder','height','incrementalSearch','incrementalSearchDelay','itemHeight','openDelay','placeHolder','popupZIndex','rtl','renderer','selectionRenderer','searchMode','scrollBarSize','source','selectedIndex','theme','valueMember','width'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDropDownList;

   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownList(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDropDownList(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDropDownList(this.properties[i])) {
                  this.host.jqxDropDownList(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownList', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   writeValue(value: any): void {
       if(this.widgetObject) {
           this.onChangeCallback(this.host.val());
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
   @Output() onBindingComplete = new EventEmitter();
   @Output() onClose = new EventEmitter();
   @Output() onCheckChange = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onOpen = new EventEmitter();
   @Output() onSelect = new EventEmitter();
   @Output() onUnselect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
      this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
      this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
      this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(eventData.args.item.label); });
      this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
      this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
      this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
   }

} //jqxDropDownListComponent
