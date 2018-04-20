/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxDropDownButton extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationType','arrowSize','autoOpen','closeDelay','disabled','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownWidth','enableBrowserBoundsDetection','height','initContent','openDelay','popupZIndex','rtl','template','theme','width'];
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
        JQXLite(this.componentSelector).jqxDropDownButton(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxDropDownButton('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDropDownButton(arguments[i]);
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
            JQXLite(this.componentSelector).jqxDropDownButton('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('animationType');
        }
    };
    arrowSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('arrowSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('arrowSize');
        }
    };
    autoOpen(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('autoOpen', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('autoOpen');
        }
    };
    closeDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('closeDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('closeDelay');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('disabled');
        }
    };
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('dropDownHorizontalAlignment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('dropDownHorizontalAlignment');
        }
    };
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('dropDownVerticalAlignment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('dropDownVerticalAlignment');
        }
    };
    dropDownWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('dropDownWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('dropDownWidth');
        }
    };
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('enableBrowserBoundsDetection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('enableBrowserBoundsDetection');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('height');
        }
    };
    initContent(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('initContent', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('initContent');
        }
    };
    openDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('openDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('openDelay');
        }
    };
    popupZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('popupZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('popupZIndex');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('rtl');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('template');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDropDownButton('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDropDownButton('width');
        }
    };
    close() {
        JQXLite(this.componentSelector).jqxDropDownButton('close');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxDropDownButton('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxDropDownButton('focus');  
    };
    getContent() {
        return JQXLite(this.componentSelector).jqxDropDownButton('getContent');  
    };
    isOpened() {
        return JQXLite(this.componentSelector).jqxDropDownButton('isOpened');  
    };
    open() {
        JQXLite(this.componentSelector).jqxDropDownButton('open');  
    };
    setContent(content) {
        JQXLite(this.componentSelector).jqxDropDownButton('setContent', content);  
    };
    render() {
        let id = 'jqxDropDownButton' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

