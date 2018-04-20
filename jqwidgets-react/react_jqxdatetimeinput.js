/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxDateTimeInput extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationType','allowNullDate','allowKeyboardDelete','clearString','culture','closeDelay','closeCalendarAfterSelection','dropDownHorizontalAlignment','dropDownVerticalAlignment','disabled','enableBrowserBoundsDetection','enableAbsoluteSelection','firstDayOfWeek','formatString','height','min','max','openDelay','placeHolder','popupZIndex','rtl','readonly','showFooter','selectionMode','showWeeknumbers','showTimeButton','showCalendarButton','theme','template','textAlign','todayString','value','width'];
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
        JQXLite(this.componentSelector).jqxDateTimeInput(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxDateTimeInput('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDateTimeInput(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    animationType(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('animationType');
        }
    };
    allowNullDate(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('allowNullDate', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('allowNullDate');
        }
    };
    allowKeyboardDelete(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('allowKeyboardDelete', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('allowKeyboardDelete');
        }
    };
    clearString(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('clearString', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('clearString');
        }
    };
    culture(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('culture', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('culture');
        }
    };
    closeDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('closeDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('closeDelay');
        }
    };
    closeCalendarAfterSelection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('closeCalendarAfterSelection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('closeCalendarAfterSelection');
        }
    };
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('dropDownHorizontalAlignment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('dropDownHorizontalAlignment');
        }
    };
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('dropDownVerticalAlignment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('dropDownVerticalAlignment');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('disabled');
        }
    };
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('enableBrowserBoundsDetection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('enableBrowserBoundsDetection');
        }
    };
    enableAbsoluteSelection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('enableAbsoluteSelection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('enableAbsoluteSelection');
        }
    };
    firstDayOfWeek(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('firstDayOfWeek', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('firstDayOfWeek');
        }
    };
    formatString(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('formatString', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('formatString');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('height');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('min');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('max');
        }
    };
    openDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('openDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('openDelay');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('placeHolder');
        }
    };
    popupZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('popupZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('popupZIndex');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('rtl');
        }
    };
    readonly(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('readonly', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('readonly');
        }
    };
    showFooter(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('showFooter', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('showFooter');
        }
    };
    selectionMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('selectionMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('selectionMode');
        }
    };
    showWeeknumbers(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('showWeeknumbers', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('showWeeknumbers');
        }
    };
    showTimeButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('showTimeButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('showTimeButton');
        }
    };
    showCalendarButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('showCalendarButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('showCalendarButton');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('theme');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('template');
        }
    };
    textAlign(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('textAlign', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('textAlign');
        }
    };
    todayString(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('todayString', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('todayString');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('width');
        }
    };
    close() {
        JQXLite(this.componentSelector).jqxDateTimeInput('close');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxDateTimeInput('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxDateTimeInput('focus');  
    };
    getRange(date) {
        return JQXLite(this.componentSelector).jqxDateTimeInput('getRange', date);  
    };
    getText() {
        return JQXLite(this.componentSelector).jqxDateTimeInput('getText');  
    };
    getDate() {
        return JQXLite(this.componentSelector).jqxDateTimeInput('getDate');  
    };
    getMaxDate() {
        return JQXLite(this.componentSelector).jqxDateTimeInput('getMaxDate');  
    };
    getMinDate() {
        return JQXLite(this.componentSelector).jqxDateTimeInput('getMinDate');  
    };
    open() {
        JQXLite(this.componentSelector).jqxDateTimeInput('open');  
    };
    setRange(date, date2) {
        JQXLite(this.componentSelector).jqxDateTimeInput('setRange', date, date2);  
    };
    setMinDate(date) {
        JQXLite(this.componentSelector).jqxDateTimeInput('setMinDate', date);  
    };
    setMaxDate(date) {
        JQXLite(this.componentSelector).jqxDateTimeInput('setMaxDate', date);  
    };
    setDate(date) {
        JQXLite(this.componentSelector).jqxDateTimeInput('setDate', date);  
    };
    val(value, value2) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxDateTimeInput('val', value, value2)
        } else {
            return JQXLite(this.componentSelector).jqxDateTimeInput('val');
        }
    };

    render() {
        let id = 'jqxDateTimeInput' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

