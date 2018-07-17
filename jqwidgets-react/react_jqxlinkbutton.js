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

export default class JqxLinkButton extends React.Component {
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
        JQXLite(this.componentSelector).jqxLinkButton(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxLinkButton('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxLinkButton(arguments[i]);
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
            JQXLite(this.componentSelector).jqxLinkButton('delay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('delay');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('height');
        }
    };
    imgSrc(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('imgSrc', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('imgSrc');
        }
    };
    imgWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('imgWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('imgWidth');
        }
    };
    imgHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('imgHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('imgHeight');
        }
    };
    imgPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('imgPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('imgPosition');
        }
    };
    roundedCorners(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('roundedCorners', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('roundedCorners');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('rtl');
        }
    };
    textPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('textPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('textPosition');
        }
    };
    textImageRelation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('textImageRelation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('textImageRelation');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('theme');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('template');
        }
    };
    toggled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('toggled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('toggled');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('width');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('value');
        }
    };
    check() {
        JQXLite(this.componentSelector).jqxLinkButton('check');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxLinkButton('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxLinkButton('focus');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxLinkButton('render');
    };
    toggle() {
        JQXLite(this.componentSelector).jqxLinkButton('toggle');  
    };
    unCheck() {
        JQXLite(this.componentSelector).jqxLinkButton('unCheck');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('val');
        }
    };

    render() {
        let id = 'jqxLinkButton' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <a id={id} target={this.props.target} href={this.props.href}> {this.props.value}{this.props.children}</a>
        )
    };
};

