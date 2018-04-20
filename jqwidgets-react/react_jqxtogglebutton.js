/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxToggleButton extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
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
        JQXLite(this.componentSelector).jqxToggleButton(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxToggleButton('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxToggleButton(arguments[i]);
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
            JQXLite(this.componentSelector).jqxToggleButton('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('height');
        }
    };
    imgSrc(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('imgSrc', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('imgSrc');
        }
    };
    imgWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('imgWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('imgWidth');
        }
    };
    imgHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('imgHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('imgHeight');
        }
    };
    imgPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('imgPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('imgPosition');
        }
    };
    roundedCorners(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('roundedCorners', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('roundedCorners');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('rtl');
        }
    };
    textPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('textPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('textPosition');
        }
    };
    textImageRelation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('textImageRelation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('textImageRelation');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('theme');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('template');
        }
    };
    toggled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('toggled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('toggled');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('width');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('value');
        }
    };
    check() {
        JQXLite(this.componentSelector).jqxToggleButton('check');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxToggleButton('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxToggleButton('focus');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxToggleButton('render');
    };
    toggle() {
        JQXLite(this.componentSelector).jqxToggleButton('toggle');  
    };
    unCheck() {
        JQXLite(this.componentSelector).jqxToggleButton('unCheck');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxToggleButton('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxToggleButton('val');
        }
    };

    render() {
        let id = 'jqxToggleButton' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

