/*
jQWidgets v6.0.4 (2018-July)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxmenu.js';
import '../jqwidgets/jqxwindow.js';
import '../jqwidgets/jqxdragdrop.js';
import '../jqwidgets/jqxcheckbox.js';
import '../jqwidgets/jqxinput.js';
import '../jqwidgets/jqxlistbox.js';
import '../jqwidgets/jqxdropdownlist.js';
import '../jqwidgets/jqxpivot.js';
import '../jqwidgets/jqxpivotgrid.js';
import '../jqwidgets/jqxpivotdesigner.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxPivotGrid extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['source','localization','scrollBarsEnabled','selectionEnabled','multipleSelectionEnabled','treeStyleRows','autoResize','itemsRenderer','cellsRenderer'];
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
        JQXLite(this.componentSelector).jqxPivotGrid(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxPivotGrid('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxPivotGrid(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    source(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('source', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('source');
        }
    };
    localization(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('localization', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('localization');
        }
    };
    scrollBarsEnabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('scrollBarsEnabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('scrollBarsEnabled');
        }
    };
    selectionEnabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('selectionEnabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('selectionEnabled');
        }
    };
    multipleSelectionEnabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('multipleSelectionEnabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('multipleSelectionEnabled');
        }
    };
    treeStyleRows(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('treeStyleRows', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('treeStyleRows');
        }
    };
    autoResize(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('autoResize', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('autoResize');
        }
    };
    itemsRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('itemsRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('itemsRenderer');
        }
    };
    cellsRenderer(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxPivotGrid('cellsRenderer', arg)
        } else {
            return JQXLite(this.componentSelector).jqxPivotGrid('cellsRenderer');
        }
    };
    getInstance() {
        return JQXLite(this.componentSelector).jqxPivotGrid('getInstance');  
    };
    refresh() {
        return JQXLite(this.componentSelector).jqxPivotGrid('refresh');  
    };
    destroy() {
        return JQXLite(this.componentSelector).jqxPivotGrid('destroy');  
    };
    getPivotRows() {
        return JQXLite(this.componentSelector).jqxPivotGrid('getPivotRows');  
    };
    getPivotColumns() {
        return JQXLite(this.componentSelector).jqxPivotGrid('getPivotColumns');  
    };
    getPivotCells() {
        return JQXLite(this.componentSelector).jqxPivotGrid('getPivotCells');  
    };
    render() {
        let id = 'jqxPivotGrid' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

