/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxProgressBar extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationDuration','colorRanges','disabled','height','layout','max','min','orientation','rtl','renderText','showText','template','theme','value','width'];
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
        JQXLite(this.componentSelector).jqxProgressBar(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxProgressBar('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxProgressBar(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    animationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('animationDuration');
        }
    };
    colorRanges(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('colorRanges', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('colorRanges');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('height');
        }
    };
    layout(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('layout', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('layout');
        }
    };
    max(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('max', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('max');
        }
    };
    min(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('min', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('min');
        }
    };
    orientation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('orientation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('orientation');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('rtl');
        }
    };
    renderText(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('renderText', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('renderText');
        }
    };
    showText(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('showText', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('showText');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('template');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('theme');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('value');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('width');
        }
    };
    actualValue(value) {
        JQXLite(this.componentSelector).jqxProgressBar('actualValue', value);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxProgressBar('destroy');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxProgressBar('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxProgressBar('val');
        }
    };

    render() {
        let id = 'jqxProgressBar' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

