/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxNotification extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['appendContainer','autoOpen','animationOpenDelay','animationCloseDelay','autoClose','autoCloseDelay','blink','browserBoundsOffset','closeOnClick','disabled','height','hoverOpacity','icon','notificationOffset','opacity','position','rtl','showCloseButton','template','theme','width'];
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
        JQXLite(this.componentSelector).jqxNotification(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxNotification('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxNotification(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    appendContainer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('appendContainer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('appendContainer');
        }
    };
    autoOpen(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('autoOpen', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('autoOpen');
        }
    };
    animationOpenDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('animationOpenDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('animationOpenDelay');
        }
    };
    animationCloseDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('animationCloseDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('animationCloseDelay');
        }
    };
    autoClose(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('autoClose', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('autoClose');
        }
    };
    autoCloseDelay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('autoCloseDelay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('autoCloseDelay');
        }
    };
    blink(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('blink', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('blink');
        }
    };
    browserBoundsOffset(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('browserBoundsOffset', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('browserBoundsOffset');
        }
    };
    closeOnClick(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('closeOnClick', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('closeOnClick');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('height');
        }
    };
    hoverOpacity(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('hoverOpacity', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('hoverOpacity');
        }
    };
    icon(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('icon', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('icon');
        }
    };
    notificationOffset(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('notificationOffset', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('notificationOffset');
        }
    };
    opacity(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('opacity', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('opacity');
        }
    };
    position(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('position', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('position');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('rtl');
        }
    };
    showCloseButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('showCloseButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('showCloseButton');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('template');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxNotification('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxNotification('width');
        }
    };
    closeAll() {
        JQXLite(this.componentSelector).jqxNotification('closeAll');  
    };
    closeLast() {
        JQXLite(this.componentSelector).jqxNotification('closeLast');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxNotification('destroy');  
    };
    open() {
        JQXLite(this.componentSelector).jqxNotification('open');  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxNotification('refresh');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxNotification('render');
    };
    render() {
        let id = 'jqxNotification' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

