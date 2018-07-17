/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxsortable.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxSortable extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['appendTo','axis','cancelProperty','connectWith','containment','cursor','cursorAt','delay','disabled','distance','dropOnEmpty','forceHelperSize','forcePlaceholderSize','grid','handle','helper','items','opacity','placeholderShow','revert','scroll','scrollSensitivity','scrollSpeed','tolerance','zIndex'];
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
        JQXLite(this.componentSelector).jqxSortable(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxSortable('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxSortable(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    appendTo(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('appendTo', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('appendTo');
        }
    };
    axis(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('axis', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('axis');
        }
    };
    cancelProperty(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('cancelProperty', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('cancelProperty');
        }
    };
    connectWith(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('connectWith', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('connectWith');
        }
    };
    containment(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('containment', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('containment');
        }
    };
    cursor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('cursor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('cursor');
        }
    };
    cursorAt(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('cursorAt', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('cursorAt');
        }
    };
    delay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('delay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('delay');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('disabled');
        }
    };
    distance(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('distance', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('distance');
        }
    };
    dropOnEmpty(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('dropOnEmpty', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('dropOnEmpty');
        }
    };
    forceHelperSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('forceHelperSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('forceHelperSize');
        }
    };
    forcePlaceholderSize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('forcePlaceholderSize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('forcePlaceholderSize');
        }
    };
    grid(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('grid', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('grid');
        }
    };
    handle(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('handle', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('handle');
        }
    };
    helper(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('helper', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('helper');
        }
    };
    items(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('items', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('items');
        }
    };
    opacity(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('opacity', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('opacity');
        }
    };
    placeholderShow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('placeholderShow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('placeholderShow');
        }
    };
    revert(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('revert', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('revert');
        }
    };
    scroll(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('scroll', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('scroll');
        }
    };
    scrollSensitivity(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('scrollSensitivity', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('scrollSensitivity');
        }
    };
    scrollSpeed(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('scrollSpeed', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('scrollSpeed');
        }
    };
    tolerance(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('tolerance', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('tolerance');
        }
    };
    zIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxSortable('zIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxSortable('zIndex');
        }
    };
    cancelMethod() {
        JQXLite(this.componentSelector).jqxSortable('cancelMethod');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxSortable('destroy');  
    };
    disable() {
        JQXLite(this.componentSelector).jqxSortable('disable');  
    };
    enable() {
        JQXLite(this.componentSelector).jqxSortable('enable');  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxSortable('refresh');  
    };
    refreshPositions() {
        JQXLite(this.componentSelector).jqxSortable('refreshPositions');  
    };
    serialize() {
        JQXLite(this.componentSelector).jqxSortable('serialize');  
    };
    toArray() {
        return JQXLite(this.componentSelector).jqxSortable('toArray');  
    };
    render() {
        let id = 'jqxSortable' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

