/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxTreeMap extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['baseColor','colorRanges','colorRange','colorMode','displayMember','height','hoverEnabled','headerHeight','legendLabel','legendPosition','legendScaleCallback','renderCallbacks','selectionEnabled','showLegend','source','theme','valueMember','width'];
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
    JQXLite(this.componentSelector).css('margin-left', '1px');        if(!this.template) {
              JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxTreeMap(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxTreeMap('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxTreeMap(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    baseColor(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('baseColor', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('baseColor');
        }
    };
    colorRanges(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('colorRanges', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('colorRanges');
        }
    };
    colorRange(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('colorRange', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('colorRange');
        }
    };
    colorMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('colorMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('colorMode');
        }
    };
    displayMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('displayMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('displayMember');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('height');
        }
    };
    hoverEnabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('hoverEnabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('hoverEnabled');
        }
    };
    headerHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('headerHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('headerHeight');
        }
    };
    legendLabel(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('legendLabel', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('legendLabel');
        }
    };
    legendPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('legendPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('legendPosition');
        }
    };
    legendScaleCallback(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('legendScaleCallback', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('legendScaleCallback');
        }
    };
    renderCallbacks(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('renderCallbacks', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('renderCallbacks');
        }
    };
    selectionEnabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('selectionEnabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('selectionEnabled');
        }
    };
    showLegend(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('showLegend', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('showLegend');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('source');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('theme');
        }
    };
    valueMember(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('valueMember', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('valueMember');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxTreeMap('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxTreeMap('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxTreeMap('destroy');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxTreeMap('render');
    };
    render() {
        let id = 'jqxTreeMap' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

