/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxdata.export.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxbuttongroup.js';
import '../jqwidgets/jqxscrollbar.js'
import '../jqwidgets/jqxmenu.js'
import '../jqwidgets/jqxlistbox.js'
import '../jqwidgets/jqxdropdownlist.js'
import '../jqwidgets/jqxcombobox.js'
import '../jqwidgets/jqxnumberinput.js'
import '../jqwidgets/jqxcheckbox.js'
import '../jqwidgets/globalization/globalize.js'
import '../jqwidgets/jqxcalendar.js'
import '../jqwidgets/jqxnumberinput.js'
import '../jqwidgets/jqxdatetimeinput.js'
import '../jqwidgets/jqxgrid.js'
import '../jqwidgets/jqxgrid.edit.js'
import '../jqwidgets/jqxgrid.pager.js'
import '../jqwidgets/jqxgrid.selection.js'
import '../jqwidgets/jqxgrid.filter.js'
import '../jqwidgets/jqxgrid.sort.js'
import '../jqwidgets/jqxgrid.storage.js'
import '../jqwidgets/jqxgrid.grouping.js'
import '../jqwidgets/jqxgrid.export.js'
import '../jqwidgets/jqxgrid.columnsresize.js'
import '../jqwidgets/jqxgrid.columnsreorder.js'
import '../jqwidgets/jqxgrid.aggregates.js'
import { Component, Input, Output, AfterViewInit, AfterViewChecked, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxGrid',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxGridComponent implements OnChanges, AfterViewInit, AfterViewChecked
{
   @Input('altrows') attrAltrows: boolean;
   @Input('altstart') attrAltstart: number;
   @Input('altstep') attrAltstep: number;
   @Input('autoshowloadelement') attrAutoshowloadelement: boolean;
   @Input('autoshowfiltericon') attrAutoshowfiltericon: boolean;
   @Input('autoshowcolumnsmenubutton') attrAutoshowcolumnsmenubutton: boolean;
   @Input('clipboard') attrClipboard: boolean;
   @Input('closeablegroups') attrCloseablegroups: boolean;
   @Input('columnsmenuwidth') attrColumnsmenuwidth: number;
   @Input('columnmenuopening') attrColumnmenuopening: (menu?: any, datafield?: string, height?: number | string) => boolean;
   @Input('columnmenuclosing') attrColumnmenuclosing: (menu?: any, datafield?: string, height?: number | string) => boolean;
   @Input('cellhover') attrCellhover: (cellhtmlElement?: any, x?: number, y?: number) => void;
   @Input('enablekeyboarddelete') attrEnablekeyboarddelete: boolean;
   @Input('enableellipsis') attrEnableellipsis: boolean;
   @Input('enablemousewheel') attrEnablemousewheel: boolean;
   @Input('enableanimations') attrEnableanimations: boolean;
   @Input('enabletooltips') attrEnabletooltips: boolean;
   @Input('enablehover') attrEnablehover: boolean;
   @Input('enablebrowserselection') attrEnablebrowserselection: boolean;
   @Input('everpresentrowposition') attrEverpresentrowposition: any;
   @Input('everpresentrowheight') attrEverpresentrowheight: number;
   @Input('everpresentrowactions') attrEverpresentrowactions: string;
   @Input('everpresentrowactionsmode') attrEverpresentrowactionsmode: any;
   @Input('filterrowheight') attrFilterrowheight: number;
   @Input('filtermode') attrFiltermode: any;
   @Input('groupsrenderer') attrGroupsrenderer: (text?: string, group?: number, expanded?: boolean, data?: any) => string;
   @Input('groupcolumnrenderer') attrGroupcolumnrenderer: (text?: string, group?: number, expanded?: boolean, data?: any) => string;
   @Input('groupsexpandedbydefault') attrGroupsexpandedbydefault: boolean;
   @Input('handlekeyboardnavigation') attrHandlekeyboardnavigation: (event: any) => boolean;
   @Input('pagerrenderer') attrPagerrenderer: () => any[];
   @Input('rtl') attrRtl: boolean;
   @Input('showdefaultloadelement') attrShowdefaultloadelement: boolean;
   @Input('showfiltercolumnbackground') attrShowfiltercolumnbackground: boolean;
   @Input('showfiltermenuitems') attrShowfiltermenuitems: boolean;
   @Input('showpinnedcolumnbackground') attrShowpinnedcolumnbackground: boolean;
   @Input('showsortcolumnbackground') attrShowsortcolumnbackground: boolean;
   @Input('showsortmenuitems') attrShowsortmenuitems: boolean;
   @Input('showgroupmenuitems') attrShowgroupmenuitems: boolean;
   @Input('showrowdetailscolumn') attrShowrowdetailscolumn: boolean;
   @Input('showheader') attrShowheader: boolean;
   @Input('showgroupsheader') attrShowgroupsheader: boolean;
   @Input('showaggregates') attrShowaggregates: boolean;
   @Input('showgroupaggregates') attrShowgroupaggregates: boolean;
   @Input('showeverpresentrow') attrShoweverpresentrow: boolean;
   @Input('showfilterrow') attrShowfilterrow: boolean;
   @Input('showemptyrow') attrShowemptyrow: boolean;
   @Input('showstatusbar') attrShowstatusbar: boolean;
   @Input('statusbarheight') attrStatusbarheight: number;
   @Input('showtoolbar') attrShowtoolbar: boolean;
   @Input('selectionmode') attrSelectionmode: any;
   @Input('updatefilterconditions') attrUpdatefilterconditions: (type?: string, defaultconditions?: any) => any;
   @Input('updatefilterpanel') attrUpdatefilterpanel: (filtertypedropdown1?: any, filtertypedropdown2?: any, filteroperatordropdown?: any, filterinputfield1?: any, filterinputfield2?: any, filterbutton?: any, clearbutton?: any, columnfilter?: any, filtertype?: any, filterconditions?: any) => any;
   @Input('theme') attrTheme: string;
   @Input('toolbarheight') attrToolbarheight: number;
   @Input('autoheight') attrAutoheight: boolean;
   @Input('autorowheight') attrAutorowheight: boolean;
   @Input('columnsheight') attrColumnsheight: number;
   @Input('deferreddatafields') attrDeferreddatafields: Array<string>;
   @Input('groupsheaderheight') attrGroupsheaderheight: number;
   @Input('groupindentwidth') attrGroupindentwidth: number;
   @Input('pagerheight') attrPagerheight: number | string;
   @Input('rowsheight') attrRowsheight: number;
   @Input('scrollbarsize') attrScrollbarsize: number | string;
   @Input('scrollmode') attrScrollmode: any;
   @Input('scrollfeedback') attrScrollfeedback: (row: any) => string;
   @Input('autosavestate') attrAutosavestate: boolean;
   @Input('autoloadstate') attrAutoloadstate: boolean;
   @Input('columns') attrColumns: Array<jqwidgets.GridColumn>;
   @Input('columngroups') attrColumngroups: Array<any>;
   @Input('columnsmenu') attrColumnsmenu: boolean;
   @Input('columnsresize') attrColumnsresize: boolean;
   @Input('columnsautoresize') attrColumnsautoresize: boolean;
   @Input('columnsreorder') attrColumnsreorder: boolean;
   @Input('disabled') attrDisabled: boolean;
   @Input('editable') attrEditable: boolean;
   @Input('editmode') attrEditmode: any;
   @Input('filter') attrFilter: (cellValue?: any, rowData?: any, dataField?: string, filterGroup?: any, defaultFilterResult?: boolean) => any;
   @Input('filterable') attrFilterable: boolean;
   @Input('groupable') attrGroupable: boolean;
   @Input('groups') attrGroups: Array<string>;
   @Input('horizontalscrollbarstep') attrHorizontalscrollbarstep: number;
   @Input('horizontalscrollbarlargestep') attrHorizontalscrollbarlargestep: number;
   @Input('initrowdetails') attrInitrowdetails: (index?: number, parentElement?: any, gridElement?: any, datarecord?: any) => void;
   @Input('keyboardnavigation') attrKeyboardnavigation: boolean;
   @Input('localization') attrLocalization: any;
   @Input('pagesize') attrPagesize: number;
   @Input('pagesizeoptions') attrPagesizeoptions: Array<number | string>;
   @Input('pagermode') attrPagermode: any;
   @Input('pagerbuttonscount') attrPagerbuttonscount: number;
   @Input('pageable') attrPageable: boolean;
   @Input('rowdetails') attrRowdetails: boolean;
   @Input('rowdetailstemplate') attrRowdetailstemplate: any;
   @Input('ready') attrReady: () => void;
   @Input('rendered') attrRendered: () => void;
   @Input('renderstatusbar') attrRenderstatusbar: (statusbar?: any) => void;
   @Input('rendertoolbar') attrRendertoolbar: (toolbar?: any) => void;
   @Input('rendergridrows') attrRendergridrows: (params?: any) => any;
   @Input('sortable') attrSortable: boolean;
   @Input('selectedrowindex') attrSelectedrowindex: number;
   @Input('selectedrowindexes') attrSelectedrowindexes: Array<number>;
   @Input('source') attrSource: any;
   @Input('sorttogglestates') attrSorttogglestates: any;
   @Input('updatedelay') attrUpdatedelay: number;
   @Input('virtualmode') attrVirtualmode: boolean;
   @Input('verticalscrollbarstep') attrVerticalscrollbarstep: number;
   @Input('verticalscrollbarlargestep') attrVerticalscrollbarlargestep: number;
   @Input('width') attrWidth: string | number;
   @Input('height') attrHeight: string | number;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['altrows','altstart','altstep','autoshowloadelement','autoshowfiltericon','autoshowcolumnsmenubutton','clipboard','closeablegroups','columnsmenuwidth','columnmenuopening','columnmenuclosing','cellhover','enablekeyboarddelete','enableellipsis','enablemousewheel','enableanimations','enabletooltips','enablehover','enablebrowserselection','everpresentrowposition','everpresentrowheight','everpresentrowactions','everpresentrowactionsmode','filterrowheight','filtermode','groupsrenderer','groupcolumnrenderer','groupsexpandedbydefault','handlekeyboardnavigation','pagerrenderer','rtl','showdefaultloadelement','showfiltercolumnbackground','showfiltermenuitems','showpinnedcolumnbackground','showsortcolumnbackground','showsortmenuitems','showgroupmenuitems','showrowdetailscolumn','showheader','showgroupsheader','showaggregates','showgroupaggregates','showeverpresentrow','showfilterrow','showemptyrow','showstatusbar','statusbarheight','showtoolbar','selectionmode','updatefilterconditions','updatefilterpanel','theme','toolbarheight','autoheight','autorowheight','columnsheight','deferreddatafields','groupsheaderheight','groupindentwidth','height','pagerheight','rowsheight','scrollbarsize','scrollmode','scrollfeedback','width','autosavestate','autoloadstate','columns','columngroups','columnsmenu','columnsresize','columnsautoresize','columnsreorder','disabled','editable','editmode','filter','filterable','groupable','groups','horizontalscrollbarstep','horizontalscrollbarlargestep','initrowdetails','keyboardnavigation','localization','pagesize','pagesizeoptions','pagermode','pagerbuttonscount','pageable','rowdetails','rowdetailstemplate','ready','rendered','renderstatusbar','rendertoolbar','rendergridrows','sortable','selectedrowindex','selectedrowindexes','source','sorttogglestates','updatedelay','virtualmode','verticalscrollbarstep','verticalscrollbarlargestep'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxGrid;

   content: String;
   container: HTMLDivElement;
   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
   }; 

    ngAfterViewInit() {
       let children = JQXLite(this.elementRef.nativeElement.children).find("tr"); 
       let html = ""; 
       let options = {}; 

       if (children.length > 0) {
           this.container = document.createElement('div');
           html = this.elementRef.nativeElement.innerHTML;
           this.container.appendChild(this.elementRef.nativeElement.firstChild);
           this.elementRef.nativeElement.innerHTML = html;
           this.content = html;

           let result = JQXLite.jqx.parseSourceTag(this.container);
           if (this['attrColumns'] !== undefined) {  
;                options['source'] = result.source;                
           }
           else {
                options['source'] = result.source;
                options['columns'] = result.columns;
           }
      }

      if (this.autoCreate) {
         this.createComponent(options); 
      }
   }; 

 ngAfterViewChecked() {
    if (this.container) {
        if (this.content !== this.container.innerHTML) {
            this.content = this.container.innerHTML;
            let result = JQXLite.jqx.parseSourceTag(this.container);

            let columns = this.host.jqxGrid('columns');

            if (columns.length === 0) {
                this.host.jqxGrid({ source: result.source, columns: result.columns });
            }
            else {
                this.host.jqxGrid({ source: result.source });
            }
        }
    }
    };

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean = false;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxGrid(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxGrid(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxGrid(this.properties[i])) {
                  this.host.jqxGrid(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
         return false;
      }
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

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      if (classes.length > 0) {
        childEl.classList.add(...classes);
      }
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGrid', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxGrid('setOptions', options);
   }

   // jqxGridComponent properties
   altrows(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('altrows', arg);
      } else {
          return this.host.jqxGrid('altrows');
      }
   }

   altstart(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('altstart', arg);
      } else {
          return this.host.jqxGrid('altstart');
      }
   }

   altstep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('altstep', arg);
      } else {
          return this.host.jqxGrid('altstep');
      }
   }

   autoshowloadelement(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('autoshowloadelement', arg);
      } else {
          return this.host.jqxGrid('autoshowloadelement');
      }
   }

   autoshowfiltericon(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('autoshowfiltericon', arg);
      } else {
          return this.host.jqxGrid('autoshowfiltericon');
      }
   }

   autoshowcolumnsmenubutton(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('autoshowcolumnsmenubutton', arg);
      } else {
          return this.host.jqxGrid('autoshowcolumnsmenubutton');
      }
   }

   clipboard(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('clipboard', arg);
      } else {
          return this.host.jqxGrid('clipboard');
      }
   }

   closeablegroups(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('closeablegroups', arg);
      } else {
          return this.host.jqxGrid('closeablegroups');
      }
   }

   columnsmenuwidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columnsmenuwidth', arg);
      } else {
          return this.host.jqxGrid('columnsmenuwidth');
      }
   }

   columnmenuopening(arg?: (menu?: any, datafield?: string, height?: number | string) => boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columnmenuopening', arg);
      } else {
          return this.host.jqxGrid('columnmenuopening');
      }
   }

   columnmenuclosing(arg?: (menu?: any, datafield?: string, height?: number | string) => boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columnmenuclosing', arg);
      } else {
          return this.host.jqxGrid('columnmenuclosing');
      }
   }

   cellhover(arg?: (cellhtmlElement?: any, x?: number, y?: number) => void) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('cellhover', arg);
      } else {
          return this.host.jqxGrid('cellhover');
      }
   }

   enablekeyboarddelete(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('enablekeyboarddelete', arg);
      } else {
          return this.host.jqxGrid('enablekeyboarddelete');
      }
   }

   enableellipsis(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('enableellipsis', arg);
      } else {
          return this.host.jqxGrid('enableellipsis');
      }
   }

   enablemousewheel(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('enablemousewheel', arg);
      } else {
          return this.host.jqxGrid('enablemousewheel');
      }
   }

   enableanimations(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('enableanimations', arg);
      } else {
          return this.host.jqxGrid('enableanimations');
      }
   }

   enabletooltips(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('enabletooltips', arg);
      } else {
          return this.host.jqxGrid('enabletooltips');
      }
   }

   enablehover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('enablehover', arg);
      } else {
          return this.host.jqxGrid('enablehover');
      }
   }

   enablebrowserselection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('enablebrowserselection', arg);
      } else {
          return this.host.jqxGrid('enablebrowserselection');
      }
   }

   everpresentrowposition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('everpresentrowposition', arg);
      } else {
          return this.host.jqxGrid('everpresentrowposition');
      }
   }

   everpresentrowheight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('everpresentrowheight', arg);
      } else {
          return this.host.jqxGrid('everpresentrowheight');
      }
   }

   everpresentrowactions(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('everpresentrowactions', arg);
      } else {
          return this.host.jqxGrid('everpresentrowactions');
      }
   }

   everpresentrowactionsmode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('everpresentrowactionsmode', arg);
      } else {
          return this.host.jqxGrid('everpresentrowactionsmode');
      }
   }

   filterrowheight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('filterrowheight', arg);
      } else {
          return this.host.jqxGrid('filterrowheight');
      }
   }

   filtermode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('filtermode', arg);
      } else {
          return this.host.jqxGrid('filtermode');
      }
   }

   groupsrenderer(arg?: (text?: string, group?: number, expanded?: boolean, data?: any) => string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('groupsrenderer', arg);
      } else {
          return this.host.jqxGrid('groupsrenderer');
      }
   }

   groupcolumnrenderer(arg?: (text?: string, group?: number, expanded?: boolean, data?: any) => string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('groupcolumnrenderer', arg);
      } else {
          return this.host.jqxGrid('groupcolumnrenderer');
      }
   }

   groupsexpandedbydefault(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('groupsexpandedbydefault', arg);
      } else {
          return this.host.jqxGrid('groupsexpandedbydefault');
      }
   }

   handlekeyboardnavigation(arg?: (event: any) => boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('handlekeyboardnavigation', arg);
      } else {
          return this.host.jqxGrid('handlekeyboardnavigation');
      }
   }

   pagerrenderer(arg?: () => any[]) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('pagerrenderer', arg);
      } else {
          return this.host.jqxGrid('pagerrenderer');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('rtl', arg);
      } else {
          return this.host.jqxGrid('rtl');
      }
   }

   showdefaultloadelement(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showdefaultloadelement', arg);
      } else {
          return this.host.jqxGrid('showdefaultloadelement');
      }
   }

   showfiltercolumnbackground(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showfiltercolumnbackground', arg);
      } else {
          return this.host.jqxGrid('showfiltercolumnbackground');
      }
   }

   showfiltermenuitems(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showfiltermenuitems', arg);
      } else {
          return this.host.jqxGrid('showfiltermenuitems');
      }
   }

   showpinnedcolumnbackground(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showpinnedcolumnbackground', arg);
      } else {
          return this.host.jqxGrid('showpinnedcolumnbackground');
      }
   }

   showsortcolumnbackground(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showsortcolumnbackground', arg);
      } else {
          return this.host.jqxGrid('showsortcolumnbackground');
      }
   }

   showsortmenuitems(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showsortmenuitems', arg);
      } else {
          return this.host.jqxGrid('showsortmenuitems');
      }
   }

   showgroupmenuitems(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showgroupmenuitems', arg);
      } else {
          return this.host.jqxGrid('showgroupmenuitems');
      }
   }

   showrowdetailscolumn(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showrowdetailscolumn', arg);
      } else {
          return this.host.jqxGrid('showrowdetailscolumn');
      }
   }

   showheader(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showheader', arg);
      } else {
          return this.host.jqxGrid('showheader');
      }
   }

   showgroupsheader(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showgroupsheader', arg);
      } else {
          return this.host.jqxGrid('showgroupsheader');
      }
   }

   showaggregates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showaggregates', arg);
      } else {
          return this.host.jqxGrid('showaggregates');
      }
   }

   showgroupaggregates(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showgroupaggregates', arg);
      } else {
          return this.host.jqxGrid('showgroupaggregates');
      }
   }

   showeverpresentrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showeverpresentrow', arg);
      } else {
          return this.host.jqxGrid('showeverpresentrow');
      }
   }

   showfilterrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showfilterrow', arg);
      } else {
          return this.host.jqxGrid('showfilterrow');
      }
   }

   showemptyrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showemptyrow', arg);
      } else {
          return this.host.jqxGrid('showemptyrow');
      }
   }

   showstatusbar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showstatusbar', arg);
      } else {
          return this.host.jqxGrid('showstatusbar');
      }
   }

   statusbarheight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('statusbarheight', arg);
      } else {
          return this.host.jqxGrid('statusbarheight');
      }
   }

   showtoolbar(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('showtoolbar', arg);
      } else {
          return this.host.jqxGrid('showtoolbar');
      }
   }

   selectionmode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('selectionmode', arg);
      } else {
          return this.host.jqxGrid('selectionmode');
      }
   }

   updatefilterconditions(arg?: (type?: string, defaultconditions?: any) => any) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('updatefilterconditions', arg);
      } else {
          return this.host.jqxGrid('updatefilterconditions');
      }
   }

   updatefilterpanel(arg?: (filtertypedropdown1?: any, filtertypedropdown2?: any, filteroperatordropdown?: any, filterinputfield1?: any, filterinputfield2?: any, filterbutton?: any, clearbutton?: any, columnfilter?: any, filtertype?: any, filterconditions?: any) => any) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('updatefilterpanel', arg);
      } else {
          return this.host.jqxGrid('updatefilterpanel');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('theme', arg);
      } else {
          return this.host.jqxGrid('theme');
      }
   }

   toolbarheight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('toolbarheight', arg);
      } else {
          return this.host.jqxGrid('toolbarheight');
      }
   }

   autoheight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('autoheight', arg);
      } else {
          return this.host.jqxGrid('autoheight');
      }
   }

   autorowheight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('autorowheight', arg);
      } else {
          return this.host.jqxGrid('autorowheight');
      }
   }

   columnsheight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columnsheight', arg);
      } else {
          return this.host.jqxGrid('columnsheight');
      }
   }

   deferreddatafields(arg?: Array<string>) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('deferreddatafields', arg);
      } else {
          return this.host.jqxGrid('deferreddatafields');
      }
   }

   groupsheaderheight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('groupsheaderheight', arg);
      } else {
          return this.host.jqxGrid('groupsheaderheight');
      }
   }

   groupindentwidth(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('groupindentwidth', arg);
      } else {
          return this.host.jqxGrid('groupindentwidth');
      }
   }

   height(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('height', arg);
      } else {
          return this.host.jqxGrid('height');
      }
   }

   pagerheight(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('pagerheight', arg);
      } else {
          return this.host.jqxGrid('pagerheight');
      }
   }

   rowsheight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('rowsheight', arg);
      } else {
          return this.host.jqxGrid('rowsheight');
      }
   }

   scrollbarsize(arg?: number | string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('scrollbarsize', arg);
      } else {
          return this.host.jqxGrid('scrollbarsize');
      }
   }

   scrollmode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('scrollmode', arg);
      } else {
          return this.host.jqxGrid('scrollmode');
      }
   }

   scrollfeedback(arg?: (row: any) => string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('scrollfeedback', arg);
      } else {
          return this.host.jqxGrid('scrollfeedback');
      }
   }

   width(arg?: string | number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('width', arg);
      } else {
          return this.host.jqxGrid('width');
      }
   }

   autosavestate(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('autosavestate', arg);
      } else {
          return this.host.jqxGrid('autosavestate');
      }
   }

   autoloadstate(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('autoloadstate', arg);
      } else {
          return this.host.jqxGrid('autoloadstate');
      }
   }

   columns(arg?: Array<jqwidgets.GridColumn>) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columns', arg);
      } else {
          return this.host.jqxGrid('columns');
      }
   }

   columngroups(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columngroups', arg);
      } else {
          return this.host.jqxGrid('columngroups');
      }
   }

   columnsmenu(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columnsmenu', arg);
      } else {
          return this.host.jqxGrid('columnsmenu');
      }
   }

   columnsresize(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columnsresize', arg);
      } else {
          return this.host.jqxGrid('columnsresize');
      }
   }

   columnsautoresize(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columnsautoresize', arg);
      } else {
          return this.host.jqxGrid('columnsautoresize');
      }
   }

   columnsreorder(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('columnsreorder', arg);
      } else {
          return this.host.jqxGrid('columnsreorder');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('disabled', arg);
      } else {
          return this.host.jqxGrid('disabled');
      }
   }

   editable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('editable', arg);
      } else {
          return this.host.jqxGrid('editable');
      }
   }

   editmode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('editmode', arg);
      } else {
          return this.host.jqxGrid('editmode');
      }
   }

   filter(arg?: (cellValue?: any, rowData?: any, dataField?: string, filterGroup?: any, defaultFilterResult?: boolean) => any) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('filter', arg);
      } else {
          return this.host.jqxGrid('filter');
      }
   }

   filterable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('filterable', arg);
      } else {
          return this.host.jqxGrid('filterable');
      }
   }

   groupable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('groupable', arg);
      } else {
          return this.host.jqxGrid('groupable');
      }
   }

   groups(arg?: Array<string>) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('groups', arg);
      } else {
          return this.host.jqxGrid('groups');
      }
   }

   horizontalscrollbarstep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('horizontalscrollbarstep', arg);
      } else {
          return this.host.jqxGrid('horizontalscrollbarstep');
      }
   }

   horizontalscrollbarlargestep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('horizontalscrollbarlargestep', arg);
      } else {
          return this.host.jqxGrid('horizontalscrollbarlargestep');
      }
   }

   initrowdetails(arg?: (index?: number, parentElement?: any, gridElement?: any, datarecord?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('initrowdetails', arg);
      } else {
          return this.host.jqxGrid('initrowdetails');
      }
   }

   keyboardnavigation(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('keyboardnavigation', arg);
      } else {
          return this.host.jqxGrid('keyboardnavigation');
      }
   }

   localization(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('localization', arg);
      } else {
          return this.host.jqxGrid('localization');
      }
   }

   pagesize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('pagesize', arg);
      } else {
          return this.host.jqxGrid('pagesize');
      }
   }

   pagesizeoptions(arg?: Array<number | string>) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('pagesizeoptions', arg);
      } else {
          return this.host.jqxGrid('pagesizeoptions');
      }
   }

   pagermode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('pagermode', arg);
      } else {
          return this.host.jqxGrid('pagermode');
      }
   }

   pagerbuttonscount(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('pagerbuttonscount', arg);
      } else {
          return this.host.jqxGrid('pagerbuttonscount');
      }
   }

   pageable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('pageable', arg);
      } else {
          return this.host.jqxGrid('pageable');
      }
   }

   rowdetails(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('rowdetails', arg);
      } else {
          return this.host.jqxGrid('rowdetails');
      }
   }

   rowdetailstemplate(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('rowdetailstemplate', arg);
      } else {
          return this.host.jqxGrid('rowdetailstemplate');
      }
   }

   ready(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('ready', arg);
      } else {
          return this.host.jqxGrid('ready');
      }
   }

   rendered(arg?: () => void) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('rendered', arg);
      } else {
          return this.host.jqxGrid('rendered');
      }
   }

   renderstatusbar(arg?: (statusbar?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('renderstatusbar', arg);
      } else {
          return this.host.jqxGrid('renderstatusbar');
      }
   }

   rendertoolbar(arg?: (toolbar?: any) => void) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('rendertoolbar', arg);
      } else {
          return this.host.jqxGrid('rendertoolbar');
      }
   }

   rendergridrows(arg?: (params?: any) => any) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('rendergridrows', arg);
      } else {
          return this.host.jqxGrid('rendergridrows');
      }
   }

   sortable(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('sortable', arg);
      } else {
          return this.host.jqxGrid('sortable');
      }
   }

   selectedrowindex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('selectedrowindex', arg);
      } else {
          return this.host.jqxGrid('selectedrowindex');
      }
   }

   selectedrowindexes(arg?: Array<number>) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('selectedrowindexes', arg);
      } else {
          return this.host.jqxGrid('selectedrowindexes');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('source', arg);
      } else {
          return this.host.jqxGrid('source');
      }
   }

   sorttogglestates(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('sorttogglestates', arg);
      } else {
          return this.host.jqxGrid('sorttogglestates');
      }
   }

   updatedelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('updatedelay', arg);
      } else {
          return this.host.jqxGrid('updatedelay');
      }
   }

   virtualmode(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('virtualmode', arg);
      } else {
          return this.host.jqxGrid('virtualmode');
      }
   }

   verticalscrollbarstep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('verticalscrollbarstep', arg);
      } else {
          return this.host.jqxGrid('verticalscrollbarstep');
      }
   }

   verticalscrollbarlargestep(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxGrid('verticalscrollbarlargestep', arg);
      } else {
          return this.host.jqxGrid('verticalscrollbarlargestep');
      }
   }


   // jqxGridComponent functions
   autoresizecolumns(type?: string): void {
      this.host.jqxGrid('autoresizecolumns', type);
   }

   autoresizecolumn(dataField: string, type?: string): void {
      this.host.jqxGrid('autoresizecolumn', dataField, type);
   }

   beginupdate(): void {
      this.host.jqxGrid('beginupdate');
   }

   clear(): void {
      this.host.jqxGrid('clear');
   }

   destroy(): void {
      this.host.jqxGrid('destroy');
   }

   endupdate(): void {
      this.host.jqxGrid('endupdate');
   }

   ensurerowvisible(rowBoundIndex: number): void {
      this.host.jqxGrid('ensurerowvisible', rowBoundIndex);
   }

   focus(): void {
      this.host.jqxGrid('focus');
   }

   getcolumnindex(dataField: string): number {
      return this.host.jqxGrid('getcolumnindex', dataField);
   }

   getcolumn(dataField: string): jqwidgets.GridGetColumn {
      return this.host.jqxGrid('getcolumn', dataField);
   }

   getcolumnproperty(dataField: string, propertyName: string): any {
      return this.host.jqxGrid('getcolumnproperty', dataField, propertyName);
   }

   getrowid(rowBoundIndex: number): string {
      return this.host.jqxGrid('getrowid', rowBoundIndex);
   }

   getrowdata(rowBoundIndex: number): any {
      return this.host.jqxGrid('getrowdata', rowBoundIndex);
   }

   getrowdatabyid(rowID: string): any {
      return this.host.jqxGrid('getrowdatabyid', rowID);
   }

   getrowboundindexbyid(rowID: string): number {
      return this.host.jqxGrid('getrowboundindexbyid', rowID);
   }

   getrowboundindex(rowDisplayIndex: number): number {
      return this.host.jqxGrid('getrowboundindex', rowDisplayIndex);
   }

   getrows(): Array<any> {
      return this.host.jqxGrid('getrows');
   }

   getboundrows(): Array<any> {
      return this.host.jqxGrid('getboundrows');
   }

   getdisplayrows(): Array<any> {
      return this.host.jqxGrid('getdisplayrows');
   }

   getdatainformation(): jqwidgets.GridGetDataInformation {
      return this.host.jqxGrid('getdatainformation');
   }

   getsortinformation(): jqwidgets.GridGetSortInformation {
      return this.host.jqxGrid('getsortinformation');
   }

   getpaginginformation(): jqwidgets.GridGetPagingInformation {
      return this.host.jqxGrid('getpaginginformation');
   }

   hidecolumn(dataField: string): void {
      this.host.jqxGrid('hidecolumn', dataField);
   }

   hideloadelement(): void {
      this.host.jqxGrid('hideloadelement');
   }

   hiderowdetails(rowBoundIndex: number): void {
      this.host.jqxGrid('hiderowdetails', rowBoundIndex);
   }

   iscolumnvisible(dataField: string): boolean {
      return this.host.jqxGrid('iscolumnvisible', dataField);
   }

   iscolumnpinned(dataField: string): boolean {
      return this.host.jqxGrid('iscolumnpinned', dataField);
   }

   localizestrings(localizationobject: jqwidgets.GridLocalizationobject): void {
      this.host.jqxGrid('localizestrings', localizationobject);
   }

   pincolumn(dataField: string): void {
      this.host.jqxGrid('pincolumn', dataField);
   }

   refreshdata(): void {
      this.host.jqxGrid('refreshdata');
   }

   refresh(): void {
      this.host.jqxGrid('refresh');
   }

   render(): void {
      this.host.jqxGrid('render');
   }

   scrolloffset(top: number, left: number): void {
      this.host.jqxGrid('scrolloffset', top, left);
   }

   scrollposition(): jqwidgets.GridScrollPosition {
      return this.host.jqxGrid('scrollposition');
   }

   showloadelement(): void {
      this.host.jqxGrid('showloadelement');
   }

   showrowdetails(rowBoundIndex: number): void {
      this.host.jqxGrid('showrowdetails', rowBoundIndex);
   }

   setcolumnindex(dataField: string, index: number): void {
      this.host.jqxGrid('setcolumnindex', dataField, index);
   }

   setcolumnproperty(dataField: string, propertyName: any, propertyValue: any): void {
      this.host.jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
   }

   showcolumn(dataField: string): void {
      this.host.jqxGrid('showcolumn', dataField);
   }

   unpincolumn(dataField: string): void {
      this.host.jqxGrid('unpincolumn', dataField);
   }

   updatebounddata(type?: any): void {
      this.host.jqxGrid('updatebounddata', type);
   }

   updating(): boolean {
      return this.host.jqxGrid('updating');
   }

   getsortcolumn(): string {
      return this.host.jqxGrid('getsortcolumn');
   }

   removesort(): void {
      this.host.jqxGrid('removesort');
   }

   sortby(dataField: string, sortOrder: string): void {
      this.host.jqxGrid('sortby', dataField, sortOrder);
   }

   addgroup(dataField: string): void {
      this.host.jqxGrid('addgroup', dataField);
   }

   cleargroups(): void {
      this.host.jqxGrid('cleargroups');
   }

   collapsegroup(group: number | string): void {
      this.host.jqxGrid('collapsegroup', group);
   }

   collapseallgroups(): void {
      this.host.jqxGrid('collapseallgroups');
   }

   expandallgroups(): void {
      this.host.jqxGrid('expandallgroups');
   }

   expandgroup(group: number | string): void {
      this.host.jqxGrid('expandgroup', group);
   }

   getrootgroupscount(): number {
      return this.host.jqxGrid('getrootgroupscount');
   }

   getgroup(groupIndex: number): jqwidgets.GridGetGroup {
      return this.host.jqxGrid('getgroup', groupIndex);
   }

   insertgroup(groupIndex: number, dataField: string): void {
      this.host.jqxGrid('insertgroup', groupIndex, dataField);
   }

   iscolumngroupable(): boolean {
      return this.host.jqxGrid('iscolumngroupable');
   }

   removegroupat(groupIndex: number): void {
      this.host.jqxGrid('removegroupat', groupIndex);
   }

   removegroup(dataField: string): void {
      this.host.jqxGrid('removegroup', dataField);
   }

   addfilter(dataField: string, filterGroup: any, refreshGrid?: boolean): void {
      this.host.jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
   }

   applyfilters(): void {
      this.host.jqxGrid('applyfilters');
   }

   clearfilters(): void {
      this.host.jqxGrid('clearfilters');
   }

   getfilterinformation(): any {
      return this.host.jqxGrid('getfilterinformation');
   }

   getcolumnat(index: number): any {
      return this.host.jqxGrid('getcolumnat', index);
   }

   removefilter(dataField: string, refreshGrid: boolean): void {
      this.host.jqxGrid('removefilter', dataField, refreshGrid);
   }

   refreshfilterrow(): void {
      this.host.jqxGrid('refreshfilterrow');
   }

   gotopage(pagenumber: number): void {
      this.host.jqxGrid('gotopage', pagenumber);
   }

   gotoprevpage(): void {
      this.host.jqxGrid('gotoprevpage');
   }

   gotonextpage(): void {
      this.host.jqxGrid('gotonextpage');
   }

   addrow(rowIds: any, data: any, rowPosition?: any): void {
      this.host.jqxGrid('addrow', rowIds, data, rowPosition);
   }

   begincelledit(rowBoundIndex: number, dataField: string): void {
      this.host.jqxGrid('begincelledit', rowBoundIndex, dataField);
   }

   beginrowedit(rowBoundIndex: number): void {
      this.host.jqxGrid('beginrowedit', rowBoundIndex);
   }

   closemenu(): void {
      this.host.jqxGrid('closemenu');
   }

   deleterow(rowIds: string | number | Array<number | string>): void {
      this.host.jqxGrid('deleterow', rowIds);
   }

   endcelledit(rowBoundIndex: number, dataField: string, confirmChanges: boolean): void {
      this.host.jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
   }

   endrowedit(rowBoundIndex: number, confirmChanges: boolean): void {
      this.host.jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
   }

   getcell(rowBoundIndex: number, datafield: string): jqwidgets.GridGetCell {
      return this.host.jqxGrid('getcell', rowBoundIndex, datafield);
   }

   getcellatposition(left: number, top: number): jqwidgets.GridGetCell {
      return this.host.jqxGrid('getcellatposition', left, top);
   }

   getcelltext(rowBoundIndex: number, dataField: string): string {
      return this.host.jqxGrid('getcelltext', rowBoundIndex, dataField);
   }

   getcelltextbyid(rowID: string, dataField: string): string {
      return this.host.jqxGrid('getcelltextbyid', rowID, dataField);
   }

   getcellvaluebyid(rowID: string, dataField: string): any {
      return this.host.jqxGrid('getcellvaluebyid', rowID, dataField);
   }

   getcellvalue(rowBoundIndex: number, dataField: string): any {
      return this.host.jqxGrid('getcellvalue', rowBoundIndex, dataField);
   }

   isBindingCompleted(): boolean {
      return this.host.jqxGrid('isBindingCompleted');
   }

   openmenu(dataField: string): void {
      this.host.jqxGrid('openmenu', dataField);
   }

   setcellvalue(rowBoundIndex: number, dataField: string, value: any): void {
      this.host.jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
   }

   setcellvaluebyid(rowID: string, dataField: string, value: any): void {
      this.host.jqxGrid('setcellvaluebyid', rowID, dataField, value);
   }

   showvalidationpopup(rowBoundIndex: number, dataField: string, validationMessage: string): void {
      this.host.jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
   }

   updaterow(rowIds: string | number | Array<number | string>, data: any): void {
      this.host.jqxGrid('updaterow', rowIds, data);
   }

   clearselection(): void {
      this.host.jqxGrid('clearselection');
   }

   getselectedrowindex(): number {
      return this.host.jqxGrid('getselectedrowindex');
   }

   getselectedrowindexes(): Array<number> {
      return this.host.jqxGrid('getselectedrowindexes');
   }

   getselectedcell(): jqwidgets.GridGetSelectedCell {
      return this.host.jqxGrid('getselectedcell');
   }

   getselectedcells(): Array<jqwidgets.GridGetSelectedCell> {
      return this.host.jqxGrid('getselectedcells');
   }

   selectcell(rowBoundIndex: number, dataField: string): void {
      this.host.jqxGrid('selectcell', rowBoundIndex, dataField);
   }

   selectallrows(): void {
      this.host.jqxGrid('selectallrows');
   }

   selectrow(rowBoundIndex: number): void {
      this.host.jqxGrid('selectrow', rowBoundIndex);
   }

   unselectrow(rowBoundIndex: number): void {
      this.host.jqxGrid('unselectrow', rowBoundIndex);
   }

   unselectcell(rowBoundIndex: number, dataField: string): void {
      this.host.jqxGrid('unselectcell', rowBoundIndex, dataField);
   }

   getcolumnaggregateddata(dataField: string, aggregates: Array<any>): string {
      return this.host.jqxGrid('getcolumnaggregateddata', dataField, aggregates);
   }

   refreshaggregates(): void {
      this.host.jqxGrid('refreshaggregates');
   }

   renderaggregates(): void {
      this.host.jqxGrid('renderaggregates');
   }

   exportdata(dataType: string, fileName?: string, exportHeader?: boolean, rows?: Array<number>, exportHiddenColumns?: boolean, serverURL?: string, charSet?: string): any {
      return this.host.jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
   }

   getstate(): jqwidgets.GridGetState {
      return this.host.jqxGrid('getstate');
   }

   loadstate(stateobject: any): void {
      this.host.jqxGrid('loadstate', stateobject);
   }

   savestate(): jqwidgets.GridGetState {
      return this.host.jqxGrid('savestate');
   }


   // jqxGridComponent events
   @Output() onBindingcomplete = new EventEmitter();
   @Output() onColumnresized = new EventEmitter();
   @Output() onColumnreordered = new EventEmitter();
   @Output() onColumnclick = new EventEmitter();
   @Output() onCellclick = new EventEmitter();
   @Output() onCelldoubleclick = new EventEmitter();
   @Output() onCellselect = new EventEmitter();
   @Output() onCellunselect = new EventEmitter();
   @Output() onCellvaluechanged = new EventEmitter();
   @Output() onCellbeginedit = new EventEmitter();
   @Output() onCellendedit = new EventEmitter();
   @Output() onFilter = new EventEmitter();
   @Output() onGroupschanged = new EventEmitter();
   @Output() onGroupexpand = new EventEmitter();
   @Output() onGroupcollapse = new EventEmitter();
   @Output() onPagechanged = new EventEmitter();
   @Output() onPagesizechanged = new EventEmitter();
   @Output() onRowclick = new EventEmitter();
   @Output() onRowdoubleclick = new EventEmitter();
   @Output() onRowselect = new EventEmitter();
   @Output() onRowunselect = new EventEmitter();
   @Output() onRowexpand = new EventEmitter();
   @Output() onRowcollapse = new EventEmitter();
   @Output() onSort = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingcomplete', (eventData: any) => { this.onBindingcomplete.emit(eventData); });
      this.host.on('columnresized', (eventData: any) => { this.onColumnresized.emit(eventData); });
      this.host.on('columnreordered', (eventData: any) => { this.onColumnreordered.emit(eventData); });
      this.host.on('columnclick', (eventData: any) => { this.onColumnclick.emit(eventData); });
      this.host.on('cellclick', (eventData: any) => { this.onCellclick.emit(eventData); });
      this.host.on('celldoubleclick', (eventData: any) => { this.onCelldoubleclick.emit(eventData); });
      this.host.on('cellselect', (eventData: any) => { this.onCellselect.emit(eventData); });
      this.host.on('cellunselect', (eventData: any) => { this.onCellunselect.emit(eventData); });
      this.host.on('cellvaluechanged', (eventData: any) => { this.onCellvaluechanged.emit(eventData); });
      this.host.on('cellbeginedit', (eventData: any) => { this.onCellbeginedit.emit(eventData); });
      this.host.on('cellendedit', (eventData: any) => { this.onCellendedit.emit(eventData); });
      this.host.on('filter', (eventData: any) => { this.onFilter.emit(eventData); });
      this.host.on('groupschanged', (eventData: any) => { this.onGroupschanged.emit(eventData); });
      this.host.on('groupexpand', (eventData: any) => { this.onGroupexpand.emit(eventData); });
      this.host.on('groupcollapse', (eventData: any) => { this.onGroupcollapse.emit(eventData); });
      this.host.on('pagechanged', (eventData: any) => { this.onPagechanged.emit(eventData); });
      this.host.on('pagesizechanged', (eventData: any) => { this.onPagesizechanged.emit(eventData); });
      this.host.on('rowclick', (eventData: any) => { this.onRowclick.emit(eventData); });
      this.host.on('rowdoubleclick', (eventData: any) => { this.onRowdoubleclick.emit(eventData); });
      this.host.on('rowselect', (eventData: any) => { this.onRowselect.emit(eventData); });
      this.host.on('rowunselect', (eventData: any) => { this.onRowunselect.emit(eventData); });
      this.host.on('rowexpand', (eventData: any) => { this.onRowexpand.emit(eventData); });
      this.host.on('rowcollapse', (eventData: any) => { this.onRowcollapse.emit(eventData); });
      this.host.on('sort', (eventData: any) => { this.onSort.emit(eventData); });
   }

} //jqxGridComponent


