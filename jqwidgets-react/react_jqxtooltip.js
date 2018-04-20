/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxTooltip extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['absolutePositionX','absolutePositionY','autoHide','autoHideDelay','animationShowDelay','animationHideDelay','content','closeOnClick','disabled','enableBrowserBoundsDetection','height','left','name','opacity','position','rtl','showDelay','showArrow','top','trigger','theme','width'];
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
        JQXLite(this.componentSelector).jqxTooltip(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxTooltip('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxTooltip(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    absolutePositionX(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('absolutePositionX', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('absolutePositionX');
        }
    };
    absolutePositionY(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('absolutePositionY', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('absolutePositionY');
        }
    };
    autoHide(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('autoHide', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('autoHide');
        }
    };
    autoHideDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('autoHideDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('autoHideDelay');
        }
    };
    animationShowDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('animationShowDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('animationShowDelay');
        }
    };
    animationHideDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('animationHideDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('animationHideDelay');
        }
    };
    content(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('content', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('content');
        }
    };
    closeOnClick(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('closeOnClick', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('closeOnClick');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('disabled');
        }
    };
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('enableBrowserBoundsDetection', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('enableBrowserBoundsDetection');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('height');
        }
    };
    left(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('left', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('left');
        }
    };
    name(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('name', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('name');
        }
    };
    opacity(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('opacity', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('opacity');
        }
    };
    position(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('position', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('position');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('rtl');
        }
    };
    showDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('showDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('showDelay');
        }
    };
    showArrow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('showArrow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('showArrow');
        }
    };
    top(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('top', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('top');
        }
    };
    trigger(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('trigger', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('trigger');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTooltip('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTooltip('width');
        }
    };
    close(index) {
        JQXLite(this.componentSelector).jqxTooltip('close', index);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxTooltip('destroy');  
    };
    open(left, top) {
        JQXLite(this.componentSelector).jqxTooltip('open', left, top);  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxTooltip('refresh');  
    };
    render() {
        let id = 'jqxTooltip' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

