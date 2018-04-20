/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxKanban extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['columnRenderer','columns','connectWith','headerHeight','headerWidth','height','itemRenderer','ready','rtl','source','resources','template','templateContent','theme','width'];
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
        JQXLite(this.componentSelector).jqxKanban(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxKanban('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxKanban(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    columnRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('columnRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('columnRenderer');
        }
    };
    columns(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('columns', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('columns');
        }
    };
    connectWith(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('connectWith', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('connectWith');
        }
    };
    headerHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('headerHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('headerHeight');
        }
    };
    headerWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('headerWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('headerWidth');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('height');
        }
    };
    itemRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('itemRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('itemRenderer');
        }
    };
    ready(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('ready', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('ready');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('rtl');
        }
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('source');
        }
    };
    resources(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('resources', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('resources');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('template');
        }
    };
    templateContent(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('templateContent', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('templateContent');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxKanban('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxKanban('width');
        }
    };
    addItem(newItem) {
        JQXLite(this.componentSelector).jqxKanban('addItem', newItem);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxKanban('destroy');  
    };
    getColumn(dataField) {
        return JQXLite(this.componentSelector).jqxKanban('getColumn', dataField);  
    };
    getColumnItems(dataField) {
        return JQXLite(this.componentSelector).jqxKanban('getColumnItems', dataField);  
    };
    getItems() {
        return JQXLite(this.componentSelector).jqxKanban('getItems');  
    };
    removeItem(itemId) {
        JQXLite(this.componentSelector).jqxKanban('removeItem', itemId);  
    };
    updateItem(itemId, newContent) {
        JQXLite(this.componentSelector).jqxKanban('updateItem', itemId, newContent);  
    };
    render() {
        let id = 'jqxKanban' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

