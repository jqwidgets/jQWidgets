/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularDataAdapter',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxDataAdapterComponent implements OnChanges
{
   @Input('columnDelimiter') attrColumnDelimiter;
   @Input('datafields') attrDatafields;
   @Input('data') attrData;
   @Input('datatype') attrDatatype;
   @Input('type') attrType;
   @Input('id') attrId;
   @Input('localdata') attrLocaldata;
   @Input('mapChar') attrMapChar;
   @Input('rowDelimiter') attrRowDelimiter;
   @Input('root') attrRoot;
   @Input('record') attrRecord;
   @Input('url') attrUrl;
   @Input('async') attrAsync;
   @Input('autoBind') attrAutoBind;
   @Input('beforeSend') attrBeforeSend;
   @Input('beforeLoadComplete') attrBeforeLoadComplete;
   @Input('contentType') attrContentType;
   @Input('formatData') attrFormatData;
   @Input('loadError') attrLoadError;
   @Input('loadComplete') attrLoadComplete;
   @Input('loadServerData') attrLoadServerData;
   @Input('processData') attrProcessData;
   @Input('beginUpdate') attrBeginUpdate;
   @Input('dataBind') attrDataBind;
   @Input('endUpdate') attrEndUpdate;
   @Input('formatDate') attrFormatDate;
   @Input('formatNumber') attrFormatNumber;
   @Input('getRecordsHierarchy') attrGetRecordsHierarchy;
   @Input('getGroupedRecords') attrGetGroupedRecords;
   @Input('getAggregatedData') attrGetAggregatedData;
   @Input('records') attrRecords;
   @Input('width') attrWidth;
   @Input('height') attrHeight;

   properties: Array<string> = ['columnDelimiter','datafields','data','datatype','type','id','localdata','mapChar','rowDelimiter','root','record','url','async','autoBind','beforeSend','beforeLoadComplete','contentType','formatData','loadError','loadComplete','loadServerData','processData','beginUpdate','dataBind','endUpdate','formatDate','formatNumber','getRecordsHierarchy','getGroupedRecords','getAggregatedData','records'];
   host;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxDataAdapter;

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
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxDataAdapter(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxDataAdapter(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxDataAdapter(this.properties[i])) {
                  this.host.jqxDataAdapter(this.properties[i], this[attrName]); 
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
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataAdapter', options);
      this.__updateRect__();
   }

   __updateRect__() : void {
      this.host.css({width: this.attrWidth, height: this.attrHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxDataAdapter('setOptions', options);
   }

   // jqxDataAdapterComponent properties
   columnDelimiter(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('columnDelimiter', arg);
      } else {
          return this.host.jqxDataAdapter('columnDelimiter');
      }
   }

   datafields(arg?: Array<jqwidgets.DataAdapterDataFields>) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('datafields', arg);
      } else {
          return this.host.jqxDataAdapter('datafields');
      }
   }

   data(arg?: jqwidgets.DataAdapterData) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('data', arg);
      } else {
          return this.host.jqxDataAdapter('data');
      }
   }

   datatype(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('datatype', arg);
      } else {
          return this.host.jqxDataAdapter('datatype');
      }
   }

   type(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('type', arg);
      } else {
          return this.host.jqxDataAdapter('type');
      }
   }

   id(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('id', arg);
      } else {
          return this.host.jqxDataAdapter('id');
      }
   }

   localdata(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('localdata', arg);
      } else {
          return this.host.jqxDataAdapter('localdata');
      }
   }

   mapChar(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('mapChar', arg);
      } else {
          return this.host.jqxDataAdapter('mapChar');
      }
   }

   rowDelimiter(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('rowDelimiter', arg);
      } else {
          return this.host.jqxDataAdapter('rowDelimiter');
      }
   }

   root(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('root', arg);
      } else {
          return this.host.jqxDataAdapter('root');
      }
   }

   record(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('record', arg);
      } else {
          return this.host.jqxDataAdapter('record');
      }
   }

   url(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('url', arg);
      } else {
          return this.host.jqxDataAdapter('url');
      }
   }

   async(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('async', arg);
      } else {
          return this.host.jqxDataAdapter('async');
      }
   }

   autoBind(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('autoBind', arg);
      } else {
          return this.host.jqxDataAdapter('autoBind');
      }
   }

   beforeSend(arg?: (jqXHR:any , settings?:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('beforeSend', arg);
      } else {
          return this.host.jqxDataAdapter('beforeSend');
      }
   }

   beforeLoadComplete(arg?: (records:Array<any> , originalData?:Array<any>) => Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('beforeLoadComplete', arg);
      } else {
          return this.host.jqxDataAdapter('beforeLoadComplete');
      }
   }

   contentType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('contentType', arg);
      } else {
          return this.host.jqxDataAdapter('contentType');
      }
   }

   formatData(arg?: (data:any) => any) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('formatData', arg);
      } else {
          return this.host.jqxDataAdapter('formatData');
      }
   }

   loadError(arg?: (jqXHR?:any, status?: any, error?: String) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('loadError', arg);
      } else {
          return this.host.jqxDataAdapter('loadError');
      }
   }

   loadComplete(arg?: (records:Array<any>) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('loadComplete', arg);
      } else {
          return this.host.jqxDataAdapter('loadComplete');
      }
   }

   loadServerData(arg?: (serverdata:any, source:any, callback:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('loadServerData', arg);
      } else {
          return this.host.jqxDataAdapter('loadServerData');
      }
   }

   processData(arg?: (data:any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('processData', arg);
      } else {
          return this.host.jqxDataAdapter('processData');
      }
   }

   beginUpdate(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('beginUpdate', arg);
      } else {
          return this.host.jqxDataAdapter('beginUpdate');
      }
   }

   dataBind(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('dataBind', arg);
      } else {
          return this.host.jqxDataAdapter('dataBind');
      }
   }

   endUpdate(arg?: (automaticDataBind?: boolean ) => void) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('endUpdate', arg);
      } else {
          return this.host.jqxDataAdapter('endUpdate');
      }
   }

   formatDate(arg?: (value: any, format:string, calendar:any ) => string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('formatDate', arg);
      } else {
          return this.host.jqxDataAdapter('formatDate');
      }
   }

   formatNumber(arg?: (value: number, format:string, calendar:any ) => string) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('formatNumber', arg);
      } else {
          return this.host.jqxDataAdapter('formatNumber');
      }
   }

   getRecordsHierarchy(arg?: (id:number, parentField:number, name?:string, map?:any ) => any[]) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('getRecordsHierarchy', arg);
      } else {
          return this.host.jqxDataAdapter('getRecordsHierarchy');
      }
   }

   getGroupedRecords(arg?: (groupingFields:Array<any>, items:any, name:string, map:any ) => any[]) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('getGroupedRecords', arg);
      } else {
          return this.host.jqxDataAdapter('getGroupedRecords');
      }
   }

   getAggregatedData(arg?: (data : Array<any>) => any) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('getAggregatedData', arg);
      } else {
          return this.host.jqxDataAdapter('getAggregatedData');
      }
   }

   records(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxDataAdapter('records', arg);
      } else {
          return this.host.jqxDataAdapter('records');
      }
   }


   // jqxDataAdapterComponent functions


   // jqxDataAdapterComponent events


   __wireEvents__(): void {

   }

} //jqxDataAdapterComponent
