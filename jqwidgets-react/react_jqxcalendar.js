/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxtooltip.js';
import '../jqwidgets/globalization/globalize.js';
import '../jqwidgets/jqxdatetimeinput.js';
import '../jqwidgets/jqxcalendar.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxCalendar extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['backText','columnHeaderHeight','clearString','culture','dayNameFormat','disabled','enableWeekend','enableViews','enableOtherMonthDays','enableFastNavigation','enableHover','enableAutoNavigation','enableTooltips','forwardText','firstDayOfWeek','height','min','max','navigationDelay','rowHeaderWidth','readOnly','restrictedDates','rtl','stepMonths','showWeekNumbers','showDayNames','showOtherMonthDays','showFooter','selectionMode','specialDates','theme','titleHeight','titleFormat','todayString','value','width'];
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
        JQXLite(this.componentSelector).jqxCalendar(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxCalendar('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxCalendar(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    backText(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('backText', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('backText');
        }
    };
    columnHeaderHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('columnHeaderHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('columnHeaderHeight');
        }
    };
    clearString(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('clearString', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('clearString');
        }
    };
    culture(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('culture', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('culture');
        }
    };
    dayNameFormat(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('dayNameFormat', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('dayNameFormat');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('disabled');
        }
    };
    enableWeekend(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('enableWeekend', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('enableWeekend');
        }
    };
    enableViews(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('enableViews', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('enableViews');
        }
    };
    enableOtherMonthDays(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('enableOtherMonthDays', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('enableOtherMonthDays');
        }
    };
    enableFastNavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('enableFastNavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('enableFastNavigation');
        }
    };
    enableHover(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('enableHover', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('enableHover');
        }
    };
    enableAutoNavigation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('enableAutoNavigation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('enableAutoNavigation');
        }
    };
    enableTooltips(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('enableTooltips', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('enableTooltips');
        }
    };
    forwardText(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('forwardText', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('forwardText');
        }
    };
    firstDayOfWeek(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('firstDayOfWeek', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('firstDayOfWeek');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('height');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('min');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('max');
        }
    };
    navigationDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('navigationDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('navigationDelay');
        }
    };
    rowHeaderWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('rowHeaderWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('rowHeaderWidth');
        }
    };
    readOnly(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('readOnly', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('readOnly');
        }
    };
    restrictedDates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('restrictedDates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('restrictedDates');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('rtl');
        }
    };
    stepMonths(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('stepMonths', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('stepMonths');
        }
    };
    showWeekNumbers(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('showWeekNumbers', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('showWeekNumbers');
        }
    };
    showDayNames(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('showDayNames', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('showDayNames');
        }
    };
    showOtherMonthDays(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('showOtherMonthDays', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('showOtherMonthDays');
        }
    };
    showFooter(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('showFooter', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('showFooter');
        }
    };
    selectionMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('selectionMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('selectionMode');
        }
    };
    specialDates(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('specialDates', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('specialDates');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('theme');
        }
    };
    titleHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('titleHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('titleHeight');
        }
    };
    titleFormat(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('titleFormat', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('titleFormat');
        }
    };
    todayString(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('todayString', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('todayString');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('width');
        }
    };
    clear() {
        JQXLite(this.componentSelector).jqxCalendar('clear');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxCalendar('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxCalendar('focus');  
    };
    addSpecialDate(date, tooltip, text) {
        JQXLite(this.componentSelector).jqxCalendar('addSpecialDate', date, tooltip, text);  
    };
    getMinDate() {
        return JQXLite(this.componentSelector).jqxCalendar('getMinDate');  
    };
    getMaxDate() {
        return JQXLite(this.componentSelector).jqxCalendar('getMaxDate');  
    };
    getDate() {
        return JQXLite(this.componentSelector).jqxCalendar('getDate');  
    };
    getRange() {
        return JQXLite(this.componentSelector).jqxCalendar('getRange');  
    };
    navigateForward(months) {
        JQXLite(this.componentSelector).jqxCalendar('navigateForward', months);  
    };
    navigateBackward(months) {
        JQXLite(this.componentSelector).jqxCalendar('navigateBackward', months);  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxCalendar('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxCalendar('refresh');  
    };
    setMinDate(date) {
        JQXLite(this.componentSelector).jqxCalendar('setMinDate', date);  
    };
    setMaxDate(date) {
        JQXLite(this.componentSelector).jqxCalendar('setMaxDate', date);  
    };
    setDate(date) {
        JQXLite(this.componentSelector).jqxCalendar('setDate', date);  
    };
    setRange(date, date2) {
        JQXLite(this.componentSelector).jqxCalendar('setRange', date, date2);  
    };
    today() {
        JQXLite(this.componentSelector).jqxCalendar('today');  
    };
    val(value, value2) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxCalendar('val',  value, value2)
        } else {
            return JQXLite(this.componentSelector).jqxCalendar('val');
        }
    };

    render() {
        let id = 'jqxCalendar' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

