/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxGrid extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['altrows','altstart','altstep','autoshowloadelement','autoshowfiltericon','autoshowcolumnsmenubutton','clipboard','closeablegroups','columnsmenuwidth','columnmenuopening','columnmenuclosing','cellhover','enablekeyboarddelete','enableellipsis','enablemousewheel','enableanimations','enabletooltips','enablehover','enablebrowserselection','everpresentrowposition','everpresentrowheight','everpresentrowactions','everpresentrowactionsmode','filterrowheight','filtermode','groupsrenderer','groupcolumnrenderer','groupsexpandedbydefault','handlekeyboardnavigation','pagerrenderer','rtl','showdefaultloadelement','showfiltercolumnbackground','showfiltermenuitems','showpinnedcolumnbackground','showsortcolumnbackground','showsortmenuitems','showgroupmenuitems','showrowdetailscolumn','showheader','showgroupsheader','showaggregates','showgroupaggregates','showeverpresentrow','showfilterrow','showemptyrow','showstatusbar','statusbarheight','showtoolbar','selectionmode','updatefilterconditions','updatefilterpanel','theme','toolbarheight','autoheight','autorowheight','columnsheight','deferreddatafields','groupsheaderheight','groupindentwidth','height','pagerheight','rowsheight','scrollbarsize','scrollmode','scrollfeedback','width','autosavestate','autoloadstate','columns','columngroups','columnsmenu','columnsresize','columnsautoresize','columnsreorder','disabled','editable','editmode','filter','filterable','groupable','groups','horizontalscrollbarstep','horizontalscrollbarlargestep','initrowdetails','keyboardnavigation','localization','pagesize','pagesizeoptions','pagermode','pagerbuttonscount','pageable','rowdetails','rowdetailstemplate','ready','rendered','renderstatusbar','rendertoolbar','rendergridrows','sortable','selectedrowindex','selectedrowindexes','source','sorttogglestates','updatedelay','virtualmode','verticalscrollbarstep','verticalscrollbarlargestep'];
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
      };
    createComponent(options) {
        if(!this.style) {
              for (let style in this.props.style) {
                  JQXLite(this.componentSelector).css(style, this.props.style[style]);
              }
        }
        if(this.props.className !== undefined) {
            let classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
              JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxGrid(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxGrid('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxGrid(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    altrows(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('altrows', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('altrows');
        }
    };
    altstart(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('altstart', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('altstart');
        }
    };
    altstep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('altstep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('altstep');
        }
    };
    autoshowloadelement(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('autoshowloadelement', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('autoshowloadelement');
        }
    };
    autoshowfiltericon(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('autoshowfiltericon', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('autoshowfiltericon');
        }
    };
    autoshowcolumnsmenubutton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('autoshowcolumnsmenubutton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('autoshowcolumnsmenubutton');
        }
    };
    clipboard(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('clipboard', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('clipboard');
        }
    };
    closeablegroups(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('closeablegroups', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('closeablegroups');
        }
    };
    columnsmenuwidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columnsmenuwidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columnsmenuwidth');
        }
    };
    columnmenuopening(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columnmenuopening', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columnmenuopening');
        }
    };
    columnmenuclosing(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columnmenuclosing', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columnmenuclosing');
        }
    };
    cellhover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('cellhover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('cellhover');
        }
    };
    enablekeyboarddelete(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('enablekeyboarddelete', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('enablekeyboarddelete');
        }
    };
    enableellipsis(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('enableellipsis', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('enableellipsis');
        }
    };
    enablemousewheel(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('enablemousewheel', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('enablemousewheel');
        }
    };
    enableanimations(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('enableanimations', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('enableanimations');
        }
    };
    enabletooltips(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('enabletooltips', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('enabletooltips');
        }
    };
    enablehover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('enablehover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('enablehover');
        }
    };
    enablebrowserselection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('enablebrowserselection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('enablebrowserselection');
        }
    };
    everpresentrowposition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('everpresentrowposition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('everpresentrowposition');
        }
    };
    everpresentrowheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('everpresentrowheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('everpresentrowheight');
        }
    };
    everpresentrowactions(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('everpresentrowactions', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('everpresentrowactions');
        }
    };
    everpresentrowactionsmode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('everpresentrowactionsmode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('everpresentrowactionsmode');
        }
    };
    filterrowheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('filterrowheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('filterrowheight');
        }
    };
    filtermode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('filtermode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('filtermode');
        }
    };
    groupsrenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('groupsrenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('groupsrenderer');
        }
    };
    groupcolumnrenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('groupcolumnrenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('groupcolumnrenderer');
        }
    };
    groupsexpandedbydefault(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('groupsexpandedbydefault', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('groupsexpandedbydefault');
        }
    };
    handlekeyboardnavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('handlekeyboardnavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('handlekeyboardnavigation');
        }
    };
    pagerrenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('pagerrenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('pagerrenderer');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('rtl');
        }
    };
    showdefaultloadelement(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showdefaultloadelement', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showdefaultloadelement');
        }
    };
    showfiltercolumnbackground(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showfiltercolumnbackground', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showfiltercolumnbackground');
        }
    };
    showfiltermenuitems(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showfiltermenuitems', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showfiltermenuitems');
        }
    };
    showpinnedcolumnbackground(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showpinnedcolumnbackground', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showpinnedcolumnbackground');
        }
    };
    showsortcolumnbackground(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showsortcolumnbackground', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showsortcolumnbackground');
        }
    };
    showsortmenuitems(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showsortmenuitems', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showsortmenuitems');
        }
    };
    showgroupmenuitems(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showgroupmenuitems', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showgroupmenuitems');
        }
    };
    showrowdetailscolumn(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showrowdetailscolumn', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showrowdetailscolumn');
        }
    };
    showheader(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showheader', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showheader');
        }
    };
    showgroupsheader(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showgroupsheader', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showgroupsheader');
        }
    };
    showaggregates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showaggregates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showaggregates');
        }
    };
    showgroupaggregates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showgroupaggregates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showgroupaggregates');
        }
    };
    showeverpresentrow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showeverpresentrow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showeverpresentrow');
        }
    };
    showfilterrow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showfilterrow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showfilterrow');
        }
    };
    showemptyrow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showemptyrow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showemptyrow');
        }
    };
    showstatusbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showstatusbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showstatusbar');
        }
    };
    statusbarheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('statusbarheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('statusbarheight');
        }
    };
    showtoolbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('showtoolbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('showtoolbar');
        }
    };
    selectionmode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('selectionmode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('selectionmode');
        }
    };
    updatefilterconditions(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('updatefilterconditions', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('updatefilterconditions');
        }
    };
    updatefilterpanel(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('updatefilterpanel', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('updatefilterpanel');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('theme');
        }
    };
    toolbarheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('toolbarheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('toolbarheight');
        }
    };
    autoheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('autoheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('autoheight');
        }
    };
    autorowheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('autorowheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('autorowheight');
        }
    };
    columnsheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columnsheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columnsheight');
        }
    };
    deferreddatafields(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('deferreddatafields', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('deferreddatafields');
        }
    };
    groupsheaderheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('groupsheaderheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('groupsheaderheight');
        }
    };
    groupindentwidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('groupindentwidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('groupindentwidth');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('height');
        }
    };
    pagerheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('pagerheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('pagerheight');
        }
    };
    rowsheight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('rowsheight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('rowsheight');
        }
    };
    scrollbarsize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('scrollbarsize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('scrollbarsize');
        }
    };
    scrollmode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('scrollmode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('scrollmode');
        }
    };
    scrollfeedback(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('scrollfeedback', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('scrollfeedback');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('width');
        }
    };
    autosavestate(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('autosavestate', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('autosavestate');
        }
    };
    autoloadstate(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('autoloadstate', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('autoloadstate');
        }
    };
    columns(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columns', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columns');
        }
    };
    columngroups(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columngroups', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columngroups');
        }
    };
    columnsmenu(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columnsmenu', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columnsmenu');
        }
    };
    columnsresize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columnsresize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columnsresize');
        }
    };
    columnsautoresize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columnsautoresize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columnsautoresize');
        }
    };
    columnsreorder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('columnsreorder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('columnsreorder');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('disabled');
        }
    };
    editable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('editable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('editable');
        }
    };
    editmode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('editmode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('editmode');
        }
    };
    filter(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('filter', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('filter');
        }
    };
    filterable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('filterable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('filterable');
        }
    };
    groupable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('groupable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('groupable');
        }
    };
    groups(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('groups', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('groups');
        }
    };
    horizontalscrollbarstep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarstep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarstep');
        }
    };
    horizontalscrollbarlargestep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarlargestep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('horizontalscrollbarlargestep');
        }
    };
    initrowdetails(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('initrowdetails', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('initrowdetails');
        }
    };
    keyboardnavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('keyboardnavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('keyboardnavigation');
        }
    };
    localization(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('localization', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('localization');
        }
    };
    pagesize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('pagesize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('pagesize');
        }
    };
    pagesizeoptions(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('pagesizeoptions', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('pagesizeoptions');
        }
    };
    pagermode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('pagermode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('pagermode');
        }
    };
    pagerbuttonscount(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('pagerbuttonscount', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('pagerbuttonscount');
        }
    };
    pageable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('pageable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('pageable');
        }
    };
    rowdetails(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('rowdetails', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('rowdetails');
        }
    };
    rowdetailstemplate(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('rowdetailstemplate', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('rowdetailstemplate');
        }
    };
    ready(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('ready', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('ready');
        }
    };
    rendered(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('rendered', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('rendered');
        }
    };
    renderstatusbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('renderstatusbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('renderstatusbar');
        }
    };
    rendertoolbar(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('rendertoolbar', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('rendertoolbar');
        }
    };
    rendergridrows(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('rendergridrows', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('rendergridrows');
        }
    };
    sortable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('sortable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('sortable');
        }
    };
    selectedrowindex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('selectedrowindex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('selectedrowindex');
        }
    };
    selectedrowindexes(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('selectedrowindexes', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('selectedrowindexes');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('source');
        }
    };
    sorttogglestates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('sorttogglestates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('sorttogglestates');
        }
    };
    updatedelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('updatedelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('updatedelay');
        }
    };
    virtualmode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('virtualmode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('virtualmode');
        }
    };
    verticalscrollbarstep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('verticalscrollbarstep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('verticalscrollbarstep');
        }
    };
    verticalscrollbarlargestep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxGrid('verticalscrollbarlargestep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxGrid('verticalscrollbarlargestep');
        }
    };
    autoresizecolumns(type) {
        JQXLite(this.componentSelector).jqxGrid('autoresizecolumns', type);  
    };
    autoresizecolumn(dataField, type) {
        JQXLite(this.componentSelector).jqxGrid('autoresizecolumn', dataField, type);  
    };
    beginupdate() {
        JQXLite(this.componentSelector).jqxGrid('beginupdate');  
    };
    clear() {
        JQXLite(this.componentSelector).jqxGrid('clear');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxGrid('destroy');  
    };
    endupdate() {
        JQXLite(this.componentSelector).jqxGrid('endupdate');  
    };
    ensurerowvisible(rowBoundIndex) {
        JQXLite(this.componentSelector).jqxGrid('ensurerowvisible', rowBoundIndex);  
    };
    focus() {
        JQXLite(this.componentSelector).jqxGrid('focus');  
    };
    getcolumnindex(dataField) {
        return JQXLite(this.componentSelector).jqxGrid('getcolumnindex', dataField);  
    };
    getcolumn(dataField) {
        return JQXLite(this.componentSelector).jqxGrid('getcolumn', dataField);  
    };
    getcolumnproperty(dataField, propertyName) {
        return JQXLite(this.componentSelector).jqxGrid('getcolumnproperty', dataField, propertyName);  
    };
    getrowid(rowBoundIndex) {
        return JQXLite(this.componentSelector).jqxGrid('getrowid', rowBoundIndex);  
    };
    getrowdata(rowBoundIndex) {
        return JQXLite(this.componentSelector).jqxGrid('getrowdata', rowBoundIndex);  
    };
    getrowdatabyid(rowID) {
        return JQXLite(this.componentSelector).jqxGrid('getrowdatabyid', rowID);  
    };
    getrowboundindexbyid(rowID) {
        return JQXLite(this.componentSelector).jqxGrid('getrowboundindexbyid', rowID);  
    };
    getrowboundindex(rowDisplayIndex) {
        return JQXLite(this.componentSelector).jqxGrid('getrowboundindex', rowDisplayIndex);  
    };
    getrows() {
        return JQXLite(this.componentSelector).jqxGrid('getrows');  
    };
    getboundrows() {
        return JQXLite(this.componentSelector).jqxGrid('getboundrows');  
    };
    getdisplayrows() {
        return JQXLite(this.componentSelector).jqxGrid('getdisplayrows');  
    };
    getdatainformation() {
        return JQXLite(this.componentSelector).jqxGrid('getdatainformation');  
    };
    getsortinformation() {
        return JQXLite(this.componentSelector).jqxGrid('getsortinformation');  
    };
    getpaginginformation() {
        return JQXLite(this.componentSelector).jqxGrid('getpaginginformation');  
    };
    hidecolumn(dataField) {
        JQXLite(this.componentSelector).jqxGrid('hidecolumn', dataField);  
    };
    hideloadelement() {
        JQXLite(this.componentSelector).jqxGrid('hideloadelement');  
    };
    hiderowdetails(rowBoundIndex) {
        JQXLite(this.componentSelector).jqxGrid('hiderowdetails', rowBoundIndex);  
    };
    iscolumnvisible(dataField) {
        return JQXLite(this.componentSelector).jqxGrid('iscolumnvisible', dataField);  
    };
    iscolumnpinned(dataField) {
        return JQXLite(this.componentSelector).jqxGrid('iscolumnpinned', dataField);  
    };
    localizestrings(localizationobject) {
        JQXLite(this.componentSelector).jqxGrid('localizestrings', localizationobject);  
    };
    pincolumn(dataField) {
        JQXLite(this.componentSelector).jqxGrid('pincolumn', dataField);  
    };
    refreshdata() {
        JQXLite(this.componentSelector).jqxGrid('refreshdata');  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxGrid('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxGrid('render');
    };
    scrolloffset(top, left) {
        JQXLite(this.componentSelector).jqxGrid('scrolloffset', top, left);  
    };
    scrollposition() {
        return JQXLite(this.componentSelector).jqxGrid('scrollposition');  
    };
    showloadelement() {
        JQXLite(this.componentSelector).jqxGrid('showloadelement');  
    };
    showrowdetails(rowBoundIndex) {
        JQXLite(this.componentSelector).jqxGrid('showrowdetails', rowBoundIndex);  
    };
    setcolumnindex(dataField, index) {
        JQXLite(this.componentSelector).jqxGrid('setcolumnindex', dataField, index);  
    };
    setcolumnproperty(dataField, propertyName, propertyValue) {
        JQXLite(this.componentSelector).jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);  
    };
    showcolumn(dataField) {
        JQXLite(this.componentSelector).jqxGrid('showcolumn', dataField);  
    };
    unpincolumn(dataField) {
        JQXLite(this.componentSelector).jqxGrid('unpincolumn', dataField);  
    };
    updatebounddata(type) {
        JQXLite(this.componentSelector).jqxGrid('updatebounddata', type);  
    };
    updating() {
        return JQXLite(this.componentSelector).jqxGrid('updating');  
    };
    getsortcolumn() {
        return JQXLite(this.componentSelector).jqxGrid('getsortcolumn');  
    };
    removesort() {
        JQXLite(this.componentSelector).jqxGrid('removesort');  
    };
    sortby(dataField, sortOrder) {
        JQXLite(this.componentSelector).jqxGrid('sortby', dataField, sortOrder);  
    };
    addgroup(dataField) {
        JQXLite(this.componentSelector).jqxGrid('addgroup', dataField);  
    };
    cleargroups() {
        JQXLite(this.componentSelector).jqxGrid('cleargroups');  
    };
    collapsegroup(group) {
        JQXLite(this.componentSelector).jqxGrid('collapsegroup', group);  
    };
    collapseallgroups() {
        JQXLite(this.componentSelector).jqxGrid('collapseallgroups');  
    };
    expandallgroups() {
        JQXLite(this.componentSelector).jqxGrid('expandallgroups');  
    };
    expandgroup(group) {
        JQXLite(this.componentSelector).jqxGrid('expandgroup', group);  
    };
    getrootgroupscount() {
        return JQXLite(this.componentSelector).jqxGrid('getrootgroupscount');  
    };
    getgroup(groupIndex) {
        return JQXLite(this.componentSelector).jqxGrid('getgroup', groupIndex);  
    };
    insertgroup(groupIndex, dataField) {
        JQXLite(this.componentSelector).jqxGrid('insertgroup', groupIndex, dataField);  
    };
    iscolumngroupable() {
        return JQXLite(this.componentSelector).jqxGrid('iscolumngroupable');  
    };
    removegroupat(groupIndex) {
        JQXLite(this.componentSelector).jqxGrid('removegroupat', groupIndex);  
    };
    removegroup(dataField) {
        JQXLite(this.componentSelector).jqxGrid('removegroup', dataField);  
    };
    addfilter(dataField, filterGroup, refreshGrid) {
        JQXLite(this.componentSelector).jqxGrid('addfilter', dataField, filterGroup, refreshGrid);  
    };
    applyfilters() {
        JQXLite(this.componentSelector).jqxGrid('applyfilters');  
    };
    clearfilters() {
        JQXLite(this.componentSelector).jqxGrid('clearfilters');  
    };
    getfilterinformation() {
        return JQXLite(this.componentSelector).jqxGrid('getfilterinformation');  
    };
    getcolumnat(index) {
        return JQXLite(this.componentSelector).jqxGrid('getcolumnat', index);  
    };
    removefilter(dataField, refreshGrid) {
        JQXLite(this.componentSelector).jqxGrid('removefilter', dataField, refreshGrid);  
    };
    refreshfilterrow() {
        JQXLite(this.componentSelector).jqxGrid('refreshfilterrow');  
    };
    gotopage(pagenumber) {
        JQXLite(this.componentSelector).jqxGrid('gotopage', pagenumber);  
    };
    gotoprevpage() {
        JQXLite(this.componentSelector).jqxGrid('gotoprevpage');  
    };
    gotonextpage() {
        JQXLite(this.componentSelector).jqxGrid('gotonextpage');  
    };
    addrow(rowIds, data, rowPosition) {
        JQXLite(this.componentSelector).jqxGrid('addrow', rowIds, data, rowPosition);  
    };
    begincelledit(rowBoundIndex, dataField) {
        JQXLite(this.componentSelector).jqxGrid('begincelledit', rowBoundIndex, dataField);  
    };
    beginrowedit(rowBoundIndex) {
        JQXLite(this.componentSelector).jqxGrid('beginrowedit', rowBoundIndex);  
    };
    closemenu() {
        JQXLite(this.componentSelector).jqxGrid('closemenu');  
    };
    deleterow(rowIds) {
        JQXLite(this.componentSelector).jqxGrid('deleterow', rowIds);  
    };
    endcelledit(rowBoundIndex, dataField, confirmChanges) {
        JQXLite(this.componentSelector).jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);  
    };
    endrowedit(rowBoundIndex, confirmChanges) {
        JQXLite(this.componentSelector).jqxGrid('endrowedit', rowBoundIndex, confirmChanges);  
    };
    getcell(rowBoundIndex, datafield) {
        return JQXLite(this.componentSelector).jqxGrid('getcell', rowBoundIndex, datafield);  
    };
    getcellatposition(left, top) {
        return JQXLite(this.componentSelector).jqxGrid('getcellatposition', left, top);  
    };
    getcelltext(rowBoundIndex, dataField) {
        return JQXLite(this.componentSelector).jqxGrid('getcelltext', rowBoundIndex, dataField);  
    };
    getcelltextbyid(rowID, dataField) {
        return JQXLite(this.componentSelector).jqxGrid('getcelltextbyid', rowID, dataField);  
    };
    getcellvaluebyid(rowID, dataField) {
        return JQXLite(this.componentSelector).jqxGrid('getcellvaluebyid', rowID, dataField);  
    };
    getcellvalue(rowBoundIndex, dataField) {
        return JQXLite(this.componentSelector).jqxGrid('getcellvalue', rowBoundIndex, dataField);  
    };
    isBindingCompleted() {
        return JQXLite(this.componentSelector).jqxGrid('isBindingCompleted');  
    };
    openmenu(dataField) {
        JQXLite(this.componentSelector).jqxGrid('openmenu', dataField);  
    };
    setcellvalue(rowBoundIndex, dataField, value) {
        JQXLite(this.componentSelector).jqxGrid('setcellvalue', rowBoundIndex, dataField, value);  
    };
    setcellvaluebyid(rowID, dataField, value) {
        JQXLite(this.componentSelector).jqxGrid('setcellvaluebyid', rowID, dataField, value);  
    };
    showvalidationpopup(rowBoundIndex, dataField, validationMessage) {
        JQXLite(this.componentSelector).jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);  
    };
    updaterow(rowIds, data) {
        JQXLite(this.componentSelector).jqxGrid('updaterow', rowIds, data);  
    };
    clearselection() {
        JQXLite(this.componentSelector).jqxGrid('clearselection');  
    };
    getselectedrowindex() {
        return JQXLite(this.componentSelector).jqxGrid('getselectedrowindex');  
    };
    getselectedrowindexes() {
        return JQXLite(this.componentSelector).jqxGrid('getselectedrowindexes');  
    };
    getselectedcell() {
        return JQXLite(this.componentSelector).jqxGrid('getselectedcell');  
    };
    getselectedcells() {
        return JQXLite(this.componentSelector).jqxGrid('getselectedcells');  
    };
    selectcell(rowBoundIndex, dataField) {
        JQXLite(this.componentSelector).jqxGrid('selectcell', rowBoundIndex, dataField);  
    };
    selectallrows() {
        JQXLite(this.componentSelector).jqxGrid('selectallrows');  
    };
    selectrow(rowBoundIndex) {
        JQXLite(this.componentSelector).jqxGrid('selectrow', rowBoundIndex);  
    };
    unselectrow(rowBoundIndex) {
        JQXLite(this.componentSelector).jqxGrid('unselectrow', rowBoundIndex);  
    };
    unselectcell(rowBoundIndex, dataField) {
        JQXLite(this.componentSelector).jqxGrid('unselectcell', rowBoundIndex, dataField);  
    };
    getcolumnaggregateddata(dataField, aggregates) {
        return JQXLite(this.componentSelector).jqxGrid('getcolumnaggregateddata', dataField, aggregates);  
    };
    refreshaggregates() {
        JQXLite(this.componentSelector).jqxGrid('refreshaggregates');  
    };
    renderaggregates() {
        JQXLite(this.componentSelector).jqxGrid('renderaggregates');  
    };
    exportdata(dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
        return JQXLite(this.componentSelector).jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);  
    };
    getstate() {
        return JQXLite(this.componentSelector).jqxGrid('getstate');  
    };
    loadstate(stateobject) {
        JQXLite(this.componentSelector).jqxGrid('loadstate', stateobject);  
    };
    savestate() {
        return JQXLite(this.componentSelector).jqxGrid('savestate');  
    };
    render() {
        let id = 'jqxGrid' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

