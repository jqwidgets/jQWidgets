/*
jQWidgets v4.5.0 (2017-Jan)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
import React from 'react';

let jqxGrid = React.createClass ({
  getInitialState: function () {
    return { value: '' };
  },
  componentDidMount: function () {
      let options = this.manageAttributes();
    this.createComponent(options);
  },
  manageAttributes: function () {
      let properties = ['altrows','altstart','altstep','autoshowloadelement','autoshowfiltericon','autoshowcolumnsmenubutton','clipboard','closeablegroups','columnsmenuwidth','columnmenuopening','columnmenuclosing','cellhover','enablekeyboarddelete','enableellipsis','enablemousewheel','enableanimations','enabletooltips','enablehover','enablebrowserselection','everpresentrowposition','everpresentrowheight','everpresentrowactions','everpresentrowactionsmode','filterrowheight','filtermode','groupsrenderer','groupcolumnrenderer','groupsexpandedbydefault','handlekeyboardnavigation','pagerrenderer','rtl','showdefaultloadelement','showfiltercolumnbackground','showfiltermenuitems','showpinnedcolumnbackground','showsortcolumnbackground','showsortmenuitems','showgroupmenuitems','showrowdetailscolumn','showheader','showgroupsheader','showaggregates','showgroupaggregates','showeverpresentrow','showfilterrow','showemptyrow','showstatusbar','statusbarheight','showtoolbar','selectionmode','theme','toolbarheight','autoheight','autorowheight','columnsheight','deferreddatafields','groupsheaderheight','groupindentwidth','height','pagerheight','rowsheight','scrollbarsize','scrollmode','scrollfeedback','width','autosavestate','autoloadstate','columns','columngroups','columnsmenu','columnsresize','columnsautoresize','columnsreorder','disabled','editable','editmode','filter','filterable','groupable','groups','horizontalscrollbarstep','horizontalscrollbarlargestep','initrowdetails','keyboardnavigation','pagesize','pagesizeoptions','pagermode','pagerbuttonscount','pageable','rowdetails','rowdetailstemplate','ready','rendered','renderstatusbar','rendertoolbar','rendergridrows','sortable','selectedrowindex','selectedrowindexes','source','sorttogglestates','updatedelay','virtualmode','verticalscrollbarstep','verticalscrollbarlargestep'];
      let options = {};
    for(let item in this.props) {
        if(item === 'settings') {
          for(let itemTwo in this.props[item]) {
            options[itemTwo] = this.props[item][itemTwo];
              }
          } else {
              if(properties.indexOf(item) !== -1) {
              options[item] = this.props[item];
              }
          }
      }
      return options;
    },
  createComponent : function (options) {
    if(!this.style) {
        for (let style in this.props.style) {
          $('#' +this.componentSelector).css(style, this.props.style[style]);
        }
    }
    if(this.props.className !== undefined) {
      let classes = this.props.className.split(' ');
      for (let i = 0; i < classes.length; i++ ) {
        $('#' +this.componentSelector).addClass(classes[i]);
      }
    }
    if(!this.template) {
        $('#' +this.componentSelector).html(this.props.template);
    }
    $('#' +this.componentSelector).jqxGrid(options);
  },
  generateID : function () {    
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  },
  setOptions: function (options) {
    $('#' +this.componentSelector).jqxGrid('setOptions', options);
  },
  getOptions: function () {
    if(arguments.length === 0) {
      throw Error('At least one argument expected in getOptions()!');
    }
    let resultToReturn = {};
    for(let i = 0; i < arguments.length; i++) {
      resultToReturn[arguments[i]] = $('#' +this.componentSelector).jqxGrid(arguments[i]);
    }
    return resultToReturn;
  },
  on: function (name,callbackFn) {
    $('#' +this.componentSelector).on(name,callbackFn);
  },
  off: function (name) {
    $('#' +this.componentSelector).off(name);
  },
  altrows: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("altrows", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("altrows");
    }
  },
  altstart: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("altstart", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("altstart");
    }
  },
  altstep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("altstep", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("altstep");
    }
  },
  autoshowloadelement: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("autoshowloadelement", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("autoshowloadelement");
    }
  },
  autoshowfiltericon: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("autoshowfiltericon", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("autoshowfiltericon");
    }
  },
  autoshowcolumnsmenubutton: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("autoshowcolumnsmenubutton", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("autoshowcolumnsmenubutton");
    }
  },
  clipboard: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("clipboard", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("clipboard");
    }
  },
  closeablegroups: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("closeablegroups", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("closeablegroups");
    }
  },
  columnsmenuwidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columnsmenuwidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columnsmenuwidth");
    }
  },
  columnmenuopening: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columnmenuopening", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columnmenuopening");
    }
  },
  columnmenuclosing: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columnmenuclosing", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columnmenuclosing");
    }
  },
  cellhover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("cellhover", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("cellhover");
    }
  },
  enablekeyboarddelete: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("enablekeyboarddelete", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("enablekeyboarddelete");
    }
  },
  enableellipsis: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("enableellipsis", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("enableellipsis");
    }
  },
  enablemousewheel: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("enablemousewheel", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("enablemousewheel");
    }
  },
  enableanimations: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("enableanimations", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("enableanimations");
    }
  },
  enabletooltips: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("enabletooltips", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("enabletooltips");
    }
  },
  enablehover: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("enablehover", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("enablehover");
    }
  },
  enablebrowserselection: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("enablebrowserselection", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("enablebrowserselection");
    }
  },
  everpresentrowposition: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("everpresentrowposition", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("everpresentrowposition");
    }
  },
  everpresentrowheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("everpresentrowheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("everpresentrowheight");
    }
  },
  everpresentrowactions: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("everpresentrowactions", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("everpresentrowactions");
    }
  },
  everpresentrowactionsmode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("everpresentrowactionsmode", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("everpresentrowactionsmode");
    }
  },
  filterrowheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("filterrowheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("filterrowheight");
    }
  },
  filtermode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("filtermode", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("filtermode");
    }
  },
  groupsrenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("groupsrenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("groupsrenderer");
    }
  },
  groupcolumnrenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("groupcolumnrenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("groupcolumnrenderer");
    }
  },
  groupsexpandedbydefault: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("groupsexpandedbydefault", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("groupsexpandedbydefault");
    }
  },
  handlekeyboardnavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("handlekeyboardnavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("handlekeyboardnavigation");
    }
  },
  pagerrenderer: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("pagerrenderer", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("pagerrenderer");
    }
  },
  rtl: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("rtl", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("rtl");
    }
  },
  showdefaultloadelement: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showdefaultloadelement", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showdefaultloadelement");
    }
  },
  showfiltercolumnbackground: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showfiltercolumnbackground", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showfiltercolumnbackground");
    }
  },
  showfiltermenuitems: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showfiltermenuitems", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showfiltermenuitems");
    }
  },
  showpinnedcolumnbackground: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showpinnedcolumnbackground", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showpinnedcolumnbackground");
    }
  },
  showsortcolumnbackground: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showsortcolumnbackground", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showsortcolumnbackground");
    }
  },
  showsortmenuitems: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showsortmenuitems", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showsortmenuitems");
    }
  },
  showgroupmenuitems: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showgroupmenuitems", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showgroupmenuitems");
    }
  },
  showrowdetailscolumn: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showrowdetailscolumn", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showrowdetailscolumn");
    }
  },
  showheader: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showheader", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showheader");
    }
  },
  showgroupsheader: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showgroupsheader", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showgroupsheader");
    }
  },
  showaggregates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showaggregates", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showaggregates");
    }
  },
  showgroupaggregates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showgroupaggregates", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showgroupaggregates");
    }
  },
  showeverpresentrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showeverpresentrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showeverpresentrow");
    }
  },
  showfilterrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showfilterrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showfilterrow");
    }
  },
  showemptyrow: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showemptyrow", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showemptyrow");
    }
  },
  showstatusbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showstatusbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showstatusbar");
    }
  },
  statusbarheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("statusbarheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("statusbarheight");
    }
  },
  showtoolbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("showtoolbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("showtoolbar");
    }
  },
  selectionmode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("selectionmode", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("selectionmode");
    }
  },
  theme: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("theme", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("theme");
    }
  },
  toolbarheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("toolbarheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("toolbarheight");
    }
  },
  autoheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("autoheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("autoheight");
    }
  },
  autorowheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("autorowheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("autorowheight");
    }
  },
  columnsheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columnsheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columnsheight");
    }
  },
  deferreddatafields: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("deferreddatafields", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("deferreddatafields");
    }
  },
  groupsheaderheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("groupsheaderheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("groupsheaderheight");
    }
  },
  groupindentwidth: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("groupindentwidth", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("groupindentwidth");
    }
  },
  height: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("height", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("height");
    }
  },
  pagerheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("pagerheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("pagerheight");
    }
  },
  rowsheight: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("rowsheight", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("rowsheight");
    }
  },
  scrollbarsize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("scrollbarsize", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("scrollbarsize");
    }
  },
  scrollmode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("scrollmode", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("scrollmode");
    }
  },
  scrollfeedback: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("scrollfeedback", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("scrollfeedback");
    }
  },
  width: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("width", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("width");
    }
  },
  autosavestate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("autosavestate", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("autosavestate");
    }
  },
  autoloadstate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("autoloadstate", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("autoloadstate");
    }
  },
  columns: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columns", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columns");
    }
  },
  columngroups: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columngroups", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columngroups");
    }
  },
  columnsmenu: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columnsmenu", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columnsmenu");
    }
  },
  columnsresize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columnsresize", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columnsresize");
    }
  },
  columnsautoresize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columnsautoresize", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columnsautoresize");
    }
  },
  columnsreorder: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("columnsreorder", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("columnsreorder");
    }
  },
  disabled: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("disabled", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("disabled");
    }
  },
  editable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("editable", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("editable");
    }
  },
  editmode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("editmode", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("editmode");
    }
  },
  filter: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("filter", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("filter");
    }
  },
  filterable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("filterable", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("filterable");
    }
  },
  groupable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("groupable", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("groupable");
    }
  },
  groups: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("groups", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("groups");
    }
  },
  horizontalscrollbarstep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("horizontalscrollbarstep", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("horizontalscrollbarstep");
    }
  },
  horizontalscrollbarlargestep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("horizontalscrollbarlargestep", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("horizontalscrollbarlargestep");
    }
  },
  initrowdetails: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("initrowdetails", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("initrowdetails");
    }
  },
  keyboardnavigation: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("keyboardnavigation", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("keyboardnavigation");
    }
  },
  pagesize: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("pagesize", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("pagesize");
    }
  },
  pagesizeoptions: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("pagesizeoptions", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("pagesizeoptions");
    }
  },
  pagermode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("pagermode", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("pagermode");
    }
  },
  pagerbuttonscount: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("pagerbuttonscount", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("pagerbuttonscount");
    }
  },
  pageable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("pageable", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("pageable");
    }
  },
  rowdetails: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("rowdetails", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("rowdetails");
    }
  },
  rowdetailstemplate: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("rowdetailstemplate", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("rowdetailstemplate");
    }
  },
  ready: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("ready", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("ready");
    }
  },
  rendered: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("rendered", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("rendered");
    }
  },
  renderstatusbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("renderstatusbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("renderstatusbar");
    }
  },
  rendertoolbar: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("rendertoolbar", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("rendertoolbar");
    }
  },
  rendergridrows: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("rendergridrows", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("rendergridrows");
    }
  },
  sortable: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("sortable", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("sortable");
    }
  },
  selectedrowindex: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("selectedrowindex", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("selectedrowindex");
    }
  },
  selectedrowindexes: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("selectedrowindexes", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("selectedrowindexes");
    }
  },
  source: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("source", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("source");
    }
  },
  sorttogglestates: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("sorttogglestates", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("sorttogglestates");
    }
  },
  updatedelay: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("updatedelay", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("updatedelay");
    }
  },
  virtualmode: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("virtualmode", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("virtualmode");
    }
  },
  verticalscrollbarstep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("verticalscrollbarstep", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("verticalscrollbarstep");
    }
  },
  verticalscrollbarlargestep: function (arg) {
    if (arg !== undefined) {
      $("#" +this.componentSelector).jqxGrid("verticalscrollbarlargestep", arg)
    } else {
      return $("#" +this.componentSelector).jqxGrid("verticalscrollbarlargestep");
    }
  },
  autoresizecolumns: function (type) {
    $("#" +this.componentSelector).jqxGrid("autoresizecolumns", type);  
  },
  autoresizecolumn: function (dataField, type) {
    $("#" +this.componentSelector).jqxGrid("autoresizecolumn", dataField, type);  
  },
  beginupdate: function () {
    $("#" +this.componentSelector).jqxGrid("beginupdate");  
  },
  clear: function () {
    $("#" +this.componentSelector).jqxGrid("clear");  
  },
  destroy: function () {
    $("#" +this.componentSelector).jqxGrid("destroy");  
  },
  endupdate: function () {
    $("#" +this.componentSelector).jqxGrid("endupdate");  
  },
  ensurerowvisible: function (rowBoundIndex) {
    $("#" +this.componentSelector).jqxGrid("ensurerowvisible", rowBoundIndex);  
  },
  focus: function () {
    $("#" +this.componentSelector).jqxGrid("focus");  
  },
  getcolumnindex: function (dataField) {
    return $("#" +this.componentSelector).jqxGrid("getcolumnindex", dataField);  
  },
  getcolumn: function (dataField) {
    return $("#" +this.componentSelector).jqxGrid("getcolumn", dataField);  
  },
  getcolumnproperty: function (dataField, propertyName) {
    return $("#" +this.componentSelector).jqxGrid("getcolumnproperty", dataField, propertyName);  
  },
  getrowid: function (rowBoundIndex) {
    return $("#" +this.componentSelector).jqxGrid("getrowid", rowBoundIndex);  
  },
  getrowdata: function (rowBoundIndex) {
    return $("#" +this.componentSelector).jqxGrid("getrowdata", rowBoundIndex);  
  },
  getrowdatabyid: function (rowID) {
    return $("#" +this.componentSelector).jqxGrid("getrowdatabyid", rowID);  
  },
  getrowboundindexbyid: function (rowID) {
    return $("#" +this.componentSelector).jqxGrid("getrowboundindexbyid", rowID);  
  },
  getrowboundindex: function (rowDisplayIndex) {
    return $("#" +this.componentSelector).jqxGrid("getrowboundindex", rowDisplayIndex);  
  },
  getrows: function () {
    return $("#" +this.componentSelector).jqxGrid("getrows");  
  },
  getboundrows: function () {
    return $("#" +this.componentSelector).jqxGrid("getboundrows");  
  },
  getdisplayrows: function () {
    return $("#" +this.componentSelector).jqxGrid("getdisplayrows");  
  },
  getdatainformation: function () {
    return $("#" +this.componentSelector).jqxGrid("getdatainformation");  
  },
  getsortinformation: function () {
    return $("#" +this.componentSelector).jqxGrid("getsortinformation");  
  },
  getpaginginformation: function () {
    return $("#" +this.componentSelector).jqxGrid("getpaginginformation");  
  },
  hidecolumn: function (dataField) {
    $("#" +this.componentSelector).jqxGrid("hidecolumn", dataField);  
  },
  hideloadelement: function () {
    $("#" +this.componentSelector).jqxGrid("hideloadelement");  
  },
  hiderowdetails: function (rowBoundIndex) {
    $("#" +this.componentSelector).jqxGrid("hiderowdetails", rowBoundIndex);  
  },
  iscolumnvisible: function (dataField) {
    return $("#" +this.componentSelector).jqxGrid("iscolumnvisible", dataField);  
  },
  iscolumnpinned: function (dataField) {
    return $("#" +this.componentSelector).jqxGrid("iscolumnpinned", dataField);  
  },
  localizestrings: function (localizationObject) {
    $("#" +this.componentSelector).jqxGrid("localizestrings", localizationObject);  
  },
  pincolumn: function (dataField) {
    $("#" +this.componentSelector).jqxGrid("pincolumn", dataField);  
  },
  refreshdata: function () {
    $("#" +this.componentSelector).jqxGrid("refreshdata");  
  },
  refresh: function () {
    $("#" +this.componentSelector).jqxGrid("refresh");  
  },
  performRender: function () {
    $("#" +this.componentSelector).jqxGrid("render");
  },
  scrolloffset: function (top, left) {
    $("#" +this.componentSelector).jqxGrid("scrolloffset", top, left);  
  },
  scrollposition: function () {
    return $("#" +this.componentSelector).jqxGrid("scrollposition");  
  },
  showloadelement: function () {
    $("#" +this.componentSelector).jqxGrid("showloadelement");  
  },
  showrowdetails: function (rowBoundIndex) {
    $("#" +this.componentSelector).jqxGrid("showrowdetails", rowBoundIndex);  
  },
  setcolumnindex: function (dataField, index) {
    $("#" +this.componentSelector).jqxGrid("setcolumnindex", dataField, index);  
  },
  setcolumnproperty: function (dataField, propertyName, propertyValue) {
    $("#" +this.componentSelector).jqxGrid("setcolumnproperty", dataField, propertyName, propertyValue);  
  },
  showcolumn: function (dataField) {
    $("#" +this.componentSelector).jqxGrid("showcolumn", dataField);  
  },
  unpincolumn: function (dataField) {
    $("#" +this.componentSelector).jqxGrid("unpincolumn", dataField);  
  },
  updatebounddata: function (type) {
    $("#" +this.componentSelector).jqxGrid("updatebounddata", type);  
  },
  updating: function () {
    return $("#" +this.componentSelector).jqxGrid("updating");  
  },
  getsortcolumn: function () {
    return $("#" +this.componentSelector).jqxGrid("getsortcolumn");  
  },
  removesort: function () {
    $("#" +this.componentSelector).jqxGrid("removesort");  
  },
  sortby: function (dataField, sortOrder) {
    $("#" +this.componentSelector).jqxGrid("sortby", dataField, sortOrder);  
  },
  addgroup: function (dataField) {
    $("#" +this.componentSelector).jqxGrid("addgroup", dataField);  
  },
  cleargroups: function () {
    $("#" +this.componentSelector).jqxGrid("cleargroups");  
  },
  collapsegroup: function (group) {
    $("#" +this.componentSelector).jqxGrid("collapsegroup", group);  
  },
  collapseallgroups: function () {
    $("#" +this.componentSelector).jqxGrid("collapseallgroups");  
  },
  expandallgroups: function () {
    $("#" +this.componentSelector).jqxGrid("expandallgroups");  
  },
  expandgroup: function (group) {
    $("#" +this.componentSelector).jqxGrid("expandgroup", group);  
  },
  getrootgroupscount: function () {
    return $("#" +this.componentSelector).jqxGrid("getrootgroupscount");  
  },
  getgroup: function (groupIndex) {
    return $("#" +this.componentSelector).jqxGrid("getgroup", groupIndex);  
  },
  insertgroup: function (groupIndex, dataField) {
    $("#" +this.componentSelector).jqxGrid("insertgroup", groupIndex, dataField);  
  },
  iscolumngroupable: function () {
    return $("#" +this.componentSelector).jqxGrid("iscolumngroupable");  
  },
  removegroupat: function (groupIndex) {
    $("#" +this.componentSelector).jqxGrid("removegroupat", groupIndex);  
  },
  removegroup: function (dataField) {
    $("#" +this.componentSelector).jqxGrid("removegroup", dataField);  
  },
  addfilter: function (dataField, filterGroup, refreshGrid) {
    $("#" +this.componentSelector).jqxGrid("addfilter", dataField, filterGroup, refreshGrid);  
  },
  applyfilters: function () {
    $("#" +this.componentSelector).jqxGrid("applyfilters");  
  },
  clearfilters: function () {
    $("#" +this.componentSelector).jqxGrid("clearfilters");  
  },
  getfilterinformation: function () {
    return $("#" +this.componentSelector).jqxGrid("getfilterinformation");  
  },
  removefilter: function (dataField, refreshGrid) {
    $("#" +this.componentSelector).jqxGrid("removefilter", dataField, refreshGrid);  
  },
  refreshfilterrow: function () {
    $("#" +this.componentSelector).jqxGrid("refreshfilterrow");  
  },
  gotopage: function (pageNumber) {
    $("#" +this.componentSelector).jqxGrid("gotopage", pageNumber);  
  },
  gotoprevpage: function () {
    $("#" +this.componentSelector).jqxGrid("gotoprevpage");  
  },
  gotonextpage: function () {
    $("#" +this.componentSelector).jqxGrid("gotonextpage");  
  },
  addrow: function (rowIds, data, rowPosition) {
    $("#" +this.componentSelector).jqxGrid("addrow", rowIds, data, rowPosition);  
  },
  begincelledit: function (rowBoundIndex, dataField) {
    $("#" +this.componentSelector).jqxGrid("begincelledit", rowBoundIndex, dataField);  
  },
  beginrowedit: function (rowBoundIndex) {
    $("#" +this.componentSelector).jqxGrid("beginrowedit", rowBoundIndex);  
  },
  closemenu: function () {
    $("#" +this.componentSelector).jqxGrid("closemenu");  
  },
  deleterow: function (rowIds) {
    $("#" +this.componentSelector).jqxGrid("deleterow", rowIds);  
  },
  endcelledit: function (rowBoundIndex, dataField, confirmChanges) {
    $("#" +this.componentSelector).jqxGrid("endcelledit", rowBoundIndex, dataField, confirmChanges);  
  },
  endrowedit: function (rowBoundIndex, confirmChanges) {
    $("#" +this.componentSelector).jqxGrid("endrowedit", rowBoundIndex, confirmChanges);  
  },
  getcell: function (rowBoundIndex, datafield) {
    return $("#" +this.componentSelector).jqxGrid("getcell", rowBoundIndex, datafield);  
  },
  getcellatposition: function (left, top) {
    return $("#" +this.componentSelector).jqxGrid("getcellatposition", left, top);  
  },
  getcelltext: function (rowBoundIndex, dataField) {
    return $("#" +this.componentSelector).jqxGrid("getcelltext", rowBoundIndex, dataField);  
  },
  getcelltextbyid: function (rowID, dataField) {
    return $("#" +this.componentSelector).jqxGrid("getcelltextbyid", rowID, dataField);  
  },
  getcellvaluebyid: function (rowID, dataField) {
    return $("#" +this.componentSelector).jqxGrid("getcellvaluebyid", rowID, dataField);  
  },
  getcellvalue: function (rowBoundIndex, dataField) {
    return $("#" +this.componentSelector).jqxGrid("getcellvalue", rowBoundIndex, dataField);  
  },
  isBindingCompleted: function () {
    return $("#" +this.componentSelector).jqxGrid("isBindingCompleted");  
  },
  openmenu: function (dataField) {
    $("#" +this.componentSelector).jqxGrid("openmenu", dataField);  
  },
  setcellvalue: function (rowBoundIndex, dataField, value) {
    $("#" +this.componentSelector).jqxGrid("setcellvalue", rowBoundIndex, dataField, value);  
  },
  setcellvaluebyid: function (rowID, dataField, value) {
    $("#" +this.componentSelector).jqxGrid("setcellvaluebyid", rowID, dataField, value);  
  },
  showvalidationpopup: function (rowBoundIndex, dataField, validationMessage) {
    $("#" +this.componentSelector).jqxGrid("showvalidationpopup", rowBoundIndex, dataField, validationMessage);  
  },
  updaterow: function (rowIds, data) {
    $("#" +this.componentSelector).jqxGrid("updaterow", rowIds, data);  
  },
  clearselection: function () {
    $("#" +this.componentSelector).jqxGrid("clearselection");  
  },
  getselectedrowindex: function () {
    return $("#" +this.componentSelector).jqxGrid("getselectedrowindex");  
  },
  getselectedrowindexes: function () {
    return $("#" +this.componentSelector).jqxGrid("getselectedrowindexes");  
  },
  getselectedcell: function () {
    return $("#" +this.componentSelector).jqxGrid("getselectedcell");  
  },
  getselectedcells: function () {
    return $("#" +this.componentSelector).jqxGrid("getselectedcells");  
  },
  selectcell: function (rowBoundIndex, dataField) {
    $("#" +this.componentSelector).jqxGrid("selectcell", rowBoundIndex, dataField);  
  },
  selectallrows: function () {
    $("#" +this.componentSelector).jqxGrid("selectallrows");  
  },
  selectrow: function (rowBoundIndex) {
    $("#" +this.componentSelector).jqxGrid("selectrow", rowBoundIndex);  
  },
  unselectrow: function (rowBoundIndex) {
    $("#" +this.componentSelector).jqxGrid("unselectrow", rowBoundIndex);  
  },
  unselectcell: function (rowBoundIndex, dataField) {
    $("#" +this.componentSelector).jqxGrid("unselectcell", rowBoundIndex, dataField);  
  },
  getcolumnaggregateddata: function (dataField, aggregates) {
    return $("#" +this.componentSelector).jqxGrid("getcolumnaggregateddata", dataField, aggregates);  
  },
  refreshaggregates: function () {
    $("#" +this.componentSelector).jqxGrid("refreshaggregates");  
  },
  renderaggregates: function () {
    $("#" +this.componentSelector).jqxGrid("renderaggregates");  
  },
  exportdata: function (dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
    return $("#" +this.componentSelector).jqxGrid("exportdata", dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);  
  },
  getstate: function () {
    return $("#" +this.componentSelector).jqxGrid("getstate");  
  },
  loadstate: function (stateObject) {
    $("#" +this.componentSelector).jqxGrid("loadstate", stateObject);  
  },
  savestate: function () {
    return $("#" +this.componentSelector).jqxGrid("savestate");  
  },
  render: function () {
    let id = 'jqxGrid' + this.generateID() + this.generateID();
    this.componentSelector = id;    return (
      <div id={id}>{this.value ? null : this.props.value}{this.props.children}</div>
    )
  }
});

module.exports = jqxGrid;

