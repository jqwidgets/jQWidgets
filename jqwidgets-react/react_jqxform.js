/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxForm extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['padding','backgroundColor','borderColor','value','template'];
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
        JQXLite(this.componentSelector).jqxForm(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxForm('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxForm(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    padding(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxForm('padding', arg)
        } else {
            return JQXLite(this.componentSelector).jqxForm('padding');
        }
    };
    backgroundColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxForm('backgroundColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxForm('backgroundColor');
        }
    };
    borderColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxForm('borderColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxForm('borderColor');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxForm('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxForm('value');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxForm('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxForm('template');
        }
    };
    getInstance() {
        return JQXLite(this.componentSelector).jqxForm('getInstance');  
    };
    refresh() {
        return JQXLite(this.componentSelector).jqxForm('refresh');  
    };
    destroy() {
        return JQXLite(this.componentSelector).jqxForm('destroy');  
    };
    hideComponent(name) {
        return JQXLite(this.componentSelector).jqxForm('hideComponent', name);  
    };
    showComponent(name) {
        return JQXLite(this.componentSelector).jqxForm('showComponent', name);  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxForm('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxForm('val');
        }
    };

    submit(action, target, method) {
        return JQXLite(this.componentSelector).jqxForm('submit', action, target, method);  
    };
    getComponentByName(name) {
        return JQXLite(this.componentSelector).jqxForm('getComponentByName', name);  
    };
    render() {
        let id = 'jqxForm' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

