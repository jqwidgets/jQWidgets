/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxinput.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxInput extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
        this.val(this.props.value);
    };
    manageAttributes() {
        let properties = ['disabled','dropDownWidth','displayMember','height','items','minLength','maxLength','opened','placeHolder','popupZIndex','query','renderer','rtl','searchMode','source','theme','valueMember','width','value'];
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
        JQXLite(this.componentSelector).jqxInput(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxInput('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxInput(arguments[i]);
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
            JQXLite(this.componentSelector).jqxInput('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('disabled');
        }
    };
    dropDownWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('dropDownWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('dropDownWidth');
        }
    };
    displayMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('displayMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('displayMember');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('height');
        }
    };
    items(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('items', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('items');
        }
    };
    minLength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('minLength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('minLength');
        }
    };
    maxLength(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('maxLength', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('maxLength');
        }
    };
    opened(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('opened', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('opened');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('placeHolder');
        }
    };
    popupZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('popupZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('popupZIndex');
        }
    };
    query(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('query', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('query');
        }
    };
    renderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('renderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('renderer');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('rtl');
        }
    };
    searchMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('searchMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('searchMode');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('source');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('theme');
        }
    };
    valueMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('valueMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('valueMember');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('width');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxInput('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxInput('value');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxInput('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxInput('focus');  
    };
    selectAll() {
        JQXLite(this.componentSelector).jqxInput('selectAll');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxInput('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxInput('val');
        }
    };

    render() {
        let id = 'jqxInput' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <input type='text' id={id}></input>
        )
    };
};

