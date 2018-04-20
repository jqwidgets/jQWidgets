/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxTextArea extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','displayMember','dropDownWidth','height','items','maxLength','minLength','opened','placeHolder','popupZIndex','query','renderer','roundedCorners','rtl','scrollBarSize','searchMode','source','theme','valueMember','width'];
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
        JQXLite(this.componentSelector).jqxTextArea(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxTextArea('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxTextArea(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('disabled');
        }
    };
    displayMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('displayMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('displayMember');
        }
    };
    dropDownWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('dropDownWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('dropDownWidth');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('height');
        }
    };
    items(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('items', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('items');
        }
    };
    maxLength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('maxLength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('maxLength');
        }
    };
    minLength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('minLength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('minLength');
        }
    };
    opened(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('opened', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('opened');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('placeHolder');
        }
    };
    popupZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('popupZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('popupZIndex');
        }
    };
    query(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('query', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('query');
        }
    };
    renderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('renderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('renderer');
        }
    };
    roundedCorners(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('roundedCorners', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('roundedCorners');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('rtl');
        }
    };
    scrollBarSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('scrollBarSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('scrollBarSize');
        }
    };
    searchMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('searchMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('searchMode');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('source');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('theme');
        }
    };
    valueMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('valueMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('valueMember');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxTextArea('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxTextArea('focus');  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxTextArea('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxTextArea('render');
    };
    selectAll() {
        JQXLite(this.componentSelector).jqxTextArea('selectAll');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxTextArea('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxTextArea('val');
        }
    };

    render() {
        let id = 'jqxTextArea' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

