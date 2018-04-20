/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxPopover extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['arrowOffsetValue','animationOpenDelay','animationCloseDelay','autoClose','animationType','height','initContent','isModal','offset','position','rtl','selector','showArrow','showCloseButton','width','title','theme'];
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
        JQXLite(this.componentSelector).jqxPopover(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxPopover('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxPopover(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    arrowOffsetValue(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('arrowOffsetValue', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('arrowOffsetValue');
        }
    };
    animationOpenDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('animationOpenDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('animationOpenDelay');
        }
    };
    animationCloseDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('animationCloseDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('animationCloseDelay');
        }
    };
    autoClose(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('autoClose', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('autoClose');
        }
    };
    animationType(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('animationType');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('height');
        }
    };
    initContent(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('initContent', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('initContent');
        }
    };
    isModal(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('isModal', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('isModal');
        }
    };
    offset(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('offset', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('offset');
        }
    };
    position(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('position', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('position');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('rtl');
        }
    };
    selector(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('selector', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('selector');
        }
    };
    showArrow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('showArrow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('showArrow');
        }
    };
    showCloseButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('showCloseButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('showCloseButton');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('width');
        }
    };
    title(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('title', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('title');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPopover('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPopover('theme');
        }
    };
    close() {
        JQXLite(this.componentSelector).jqxPopover('close');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxPopover('destroy');  
    };
    open() {
        JQXLite(this.componentSelector).jqxPopover('open');  
    };
    render() {
        let id = 'jqxPopover' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

