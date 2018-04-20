/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxLoader extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['autoOpen','height','html','isModal','imagePosition','rtl','text','textPosition','theme','width'];
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
        JQXLite(this.componentSelector).jqxLoader(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxLoader('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxLoader(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    autoOpen(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('autoOpen', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('autoOpen');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('height');
        }
    };
    html(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('html', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('html');
        }
    };
    isModal(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('isModal', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('isModal');
        }
    };
    imagePosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('imagePosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('imagePosition');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('rtl');
        }
    };
    text(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('text', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('text');
        }
    };
    textPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('textPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('textPosition');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLoader('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLoader('width');
        }
    };
    close() {
        JQXLite(this.componentSelector).jqxLoader('close');  
    };
    open() {
        JQXLite(this.componentSelector).jqxLoader('open');  
    };
    render() {
        let id = 'jqxLoader' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

