/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxDraw extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['renderEngine'];
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
        JQXLite(this.componentSelector).jqxDraw(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxDraw('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDraw(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    renderEngine(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDraw('renderEngine', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDraw('renderEngine');
        }
    };
    attr(element, attributes) {
        JQXLite(this.componentSelector).jqxDraw('attr', element, attributes);  
    };
    circle(cx, cy, r, attributes) {
        return JQXLite(this.componentSelector).jqxDraw('circle', cx, cy, r, attributes);  
    };
    clear() {
        JQXLite(this.componentSelector).jqxDraw('clear');  
    };
    getAttr(element, attributes) {
        return JQXLite(this.componentSelector).jqxDraw('getAttr', element, attributes);  
    };
    getSize() {
        return JQXLite(this.componentSelector).jqxDraw('getSize');  
    };
    line(x1, y1, x2, y2, attributes) {
        return JQXLite(this.componentSelector).jqxDraw('line', x1, y1, x2, y2, attributes);  
    };
    measureText(text, angle, attributes) {
        return JQXLite(this.componentSelector).jqxDraw('measureText', text, angle, attributes);  
    };
    on(element, event, func) {
        JQXLite(this.componentSelector).jqxDraw('on', element, event, func);  
    };
    off(element, event, func) {
        JQXLite(this.componentSelector).jqxDraw('off', element, event, func);  
    };
    path(path, attributes) {
        return JQXLite(this.componentSelector).jqxDraw('path', path, attributes);  
    };
    pieslice(cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
        return JQXLite(this.componentSelector).jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);  
    };
    refresh() {
        JQXLite(this.componentSelector).jqxDraw('refresh');  
    };
    rect(x, y, width, height, attributes) {
        return JQXLite(this.componentSelector).jqxDraw('rect', x, y, width, height, attributes);  
    };
    saveAsJPEG(image, url) {
        JQXLite(this.componentSelector).jqxDraw('saveAsJPEG', image, url);  
    };
    saveAsPNG(image, url) {
        JQXLite(this.componentSelector).jqxDraw('saveAsPNG', image, url);  
    };
    text(text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
        return JQXLite(this.componentSelector).jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);  
    };
    render() {
        let id = 'jqxDraw' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

