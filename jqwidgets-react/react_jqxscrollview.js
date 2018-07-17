/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollview.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxScrollView extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['animationDuration','bounceEnabled','buttonsOffset','currentPage','disabled','height','moveThreshold','showButtons','slideShow','slideDuration','theme','width'];
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
        JQXLite(this.componentSelector).jqxScrollView(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxScrollView('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxScrollView(arguments[i]);
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
            JQXLite(this.componentSelector).jqxScrollView('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('animationDuration');
        }
    };
    bounceEnabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('bounceEnabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('bounceEnabled');
        }
    };
    buttonsOffset(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('buttonsOffset', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('buttonsOffset');
        }
    };
    currentPage(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('currentPage', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('currentPage');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('height');
        }
    };
    moveThreshold(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('moveThreshold', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('moveThreshold');
        }
    };
    showButtons(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('showButtons', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('showButtons');
        }
    };
    slideShow(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('slideShow', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('slideShow');
        }
    };
    slideDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('slideDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('slideDuration');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxScrollView('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxScrollView('width');
        }
    };
    back() {
        JQXLite(this.componentSelector).jqxScrollView('back');  
    };
    changePage(index) {
        JQXLite(this.componentSelector).jqxScrollView('changePage', index);  
    };
    forward() {
        JQXLite(this.componentSelector).jqxScrollView('forward');  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxScrollView('refresh');  
    };
    render() {
        let id = 'jqxScrollView' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

