/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxTagCloud extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['alterTextCase','disabled','displayLimit','displayMember','displayValue','fontSizeUnit','height','maxColor','maxFontSize','maxValueToDisplay','minColor','minFontSize','minValueToDisplay','rtl','sortBy','sortOrder','source','tagRenderer','takeTopWeightedItems','textColor','urlBase','urlMember','valueMember','width'];
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
        JQXLite(this.componentSelector).jqxTagCloud(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxTagCloud('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxTagCloud(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    alterTextCase(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('alterTextCase', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('alterTextCase');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('disabled');
        }
    };
    displayLimit(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('displayLimit', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('displayLimit');
        }
    };
    displayMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('displayMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('displayMember');
        }
    };
    displayValue(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('displayValue', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('displayValue');
        }
    };
    fontSizeUnit(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('fontSizeUnit', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('fontSizeUnit');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('height');
        }
    };
    maxColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('maxColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('maxColor');
        }
    };
    maxFontSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('maxFontSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('maxFontSize');
        }
    };
    maxValueToDisplay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('maxValueToDisplay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('maxValueToDisplay');
        }
    };
    minColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('minColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('minColor');
        }
    };
    minFontSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('minFontSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('minFontSize');
        }
    };
    minValueToDisplay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('minValueToDisplay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('minValueToDisplay');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('rtl');
        }
    };
    sortBy(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('sortBy', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('sortBy');
        }
    };
    sortOrder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('sortOrder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('sortOrder');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('source');
        }
    };
    tagRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('tagRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('tagRenderer');
        }
    };
    takeTopWeightedItems(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('takeTopWeightedItems', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('takeTopWeightedItems');
        }
    };
    textColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('textColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('textColor');
        }
    };
    urlBase(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('urlBase', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('urlBase');
        }
    };
    urlMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('urlMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('urlMember');
        }
    };
    valueMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('valueMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('valueMember');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTagCloud('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTagCloud('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxTagCloud('destroy');  
    };
    findTagIndex(tag) {
        return JQXLite(this.componentSelector).jqxTagCloud('findTagIndex', tag);  
    };
    getHiddenTagsList() {
        return JQXLite(this.componentSelector).jqxTagCloud('getHiddenTagsList');  
    };
    getRenderedTags() {
        return JQXLite(this.componentSelector).jqxTagCloud('getRenderedTags');  
    };
    getTagsList() {
        return JQXLite(this.componentSelector).jqxTagCloud('getTagsList');  
    };
    hideItem(index) {
        JQXLite(this.componentSelector).jqxTagCloud('hideItem', index);  
    };
    insertAt(index, item) {
        JQXLite(this.componentSelector).jqxTagCloud('insertAt', index, item);  
    };
    removeAt(index) {
        JQXLite(this.componentSelector).jqxTagCloud('removeAt', index);  
    };
    updateAt(index, item) {
        JQXLite(this.componentSelector).jqxTagCloud('updateAt', index, item);  
    };
    showItem(index) {
        JQXLite(this.componentSelector).jqxTagCloud('showItem', index);  
    };
    render() {
        let id = 'jqxTagCloud' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

