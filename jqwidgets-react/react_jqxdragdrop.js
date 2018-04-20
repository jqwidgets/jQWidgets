/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxDragDrop extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['appendTo','disabled','distance','data','dropAction','dropTarget','dragZIndex','feedback','initFeedback','opacity','onDragEnd','onDrag','onDragStart','onTargetDrop','onDropTargetEnter','onDropTargetLeave','restricter','revert','revertDuration','tolerance'];
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
        JQXLite(this.componentSelector).jqxDragDrop(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxDragDrop('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxDragDrop(arguments[i]);
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
            JQXLite(this.componentSelector).jqxDragDrop('appendTo', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('appendTo');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('disabled');
        }
    };
    distance(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('distance', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('distance');
        }
    };
    data(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('data', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('data');
        }
    };
    dropAction(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('dropAction', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('dropAction');
        }
    };
    dropTarget(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('dropTarget', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('dropTarget');
        }
    };
    dragZIndex(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('dragZIndex', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('dragZIndex');
        }
    };
    feedback(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('feedback', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('feedback');
        }
    };
    initFeedback(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('initFeedback', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('initFeedback');
        }
    };
    opacity(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('opacity', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('opacity');
        }
    };
    onDragEnd(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('onDragEnd', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('onDragEnd');
        }
    };
    onDrag(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('onDrag', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('onDrag');
        }
    };
    onDragStart(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('onDragStart', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('onDragStart');
        }
    };
    onTargetDrop(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('onTargetDrop', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('onTargetDrop');
        }
    };
    onDropTargetEnter(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('onDropTargetEnter', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('onDropTargetEnter');
        }
    };
    onDropTargetLeave(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('onDropTargetLeave', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('onDropTargetLeave');
        }
    };
    restricter(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('restricter', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('restricter');
        }
    };
    revert(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('revert', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('revert');
        }
    };
    revertDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('revertDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('revertDuration');
        }
    };
    tolerance(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxDragDrop('tolerance', arg)
        } else {
            return JQXLite(this.componentSelector).jqxDragDrop('tolerance');
        }
    };

    render() {
        let id = 'jqxDragDrop' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

