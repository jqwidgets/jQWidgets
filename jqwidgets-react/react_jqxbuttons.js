/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxButton extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
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
        JQXLite(this.componentSelector).jqxButton(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxButton('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxButton(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    delay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('delay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('delay');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('height');
        }
    };
    imgSrc(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('imgSrc', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('imgSrc');
        }
    };
    imgWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('imgWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('imgWidth');
        }
    };
    imgHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('imgHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('imgHeight');
        }
    };
    imgPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('imgPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('imgPosition');
        }
    };
    roundedCorners(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('roundedCorners', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('roundedCorners');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('rtl');
        }
    };
    textPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('textPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('textPosition');
        }
    };
    textImageRelation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('textImageRelation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('textImageRelation');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('theme');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('template');
        }
    };
    toggled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('toggled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('toggled');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('width');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxButton('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxButton('value');
        }
    };
    check() {
        JQXLite(this.componentSelector).jqxButton('check');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxButton('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxButton('focus');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxButton('render');
    };
    toggle() {
        JQXLite(this.componentSelector).jqxButton('toggle');  
    };
    unCheck() {
        JQXLite(this.componentSelector).jqxButton('unCheck');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxButton('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxButton('val');
        }
    };

    render() {
        let id = 'jqxButton' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

