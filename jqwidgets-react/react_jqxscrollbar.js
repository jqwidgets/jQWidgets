/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxScrollBar extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['disabled','height','largestep','min','max','rtl','step','showButtons','thumbMinSize','theme','vertical','value','width'];
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
        JQXLite(this.componentSelector).jqxScrollBar(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxScrollBar('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxScrollBar(arguments[i]);
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
            JQXLite(this.componentSelector).jqxScrollBar('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('height');
        }
    };
    largestep(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('largestep', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('largestep');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('min');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('max');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('rtl');
        }
    };
    step(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('step', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('step');
        }
    };
    showButtons(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('showButtons', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('showButtons');
        }
    };
    thumbMinSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('thumbMinSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('thumbMinSize');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('theme');
        }
    };
    vertical(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('vertical', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('vertical');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollBar('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollBar('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxScrollBar('destroy');  
    };
    isScrolling() {
        return JQXLite(this.componentSelector).jqxScrollBar('isScrolling');  
    };
    setPosition(index) {
        JQXLite(this.componentSelector).jqxScrollBar('setPosition', index);  
    };
    render() {
        let id = 'jqxScrollBar' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

