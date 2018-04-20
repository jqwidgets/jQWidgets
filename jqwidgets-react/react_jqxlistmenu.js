/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxListMenu extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['alwaysShowNavigationArrows','animationType','animationDuration','autoSeparators','backLabel','disabled','enableScrolling','filterCallback','height','headerAnimationDuration','placeHolder','readOnly','rtl','roundedCorners','showNavigationArrows','showFilter','showHeader','showBackButton','theme','width'];
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
        JQXLite(this.componentSelector).jqxListMenu(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxListMenu('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxListMenu(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    alwaysShowNavigationArrows(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('alwaysShowNavigationArrows', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('alwaysShowNavigationArrows');
        }
    };
    animationType(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('animationType', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('animationType');
        }
    };
    animationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('animationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('animationDuration');
        }
    };
    autoSeparators(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('autoSeparators', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('autoSeparators');
        }
    };
    backLabel(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('backLabel', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('backLabel');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('disabled');
        }
    };
    enableScrolling(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('enableScrolling', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('enableScrolling');
        }
    };
    filterCallback(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('filterCallback', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('filterCallback');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('height');
        }
    };
    headerAnimationDuration(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('headerAnimationDuration', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('headerAnimationDuration');
        }
    };
    placeHolder(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('placeHolder', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('placeHolder');
        }
    };
    readOnly(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('readOnly', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('readOnly');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('rtl');
        }
    };
    roundedCorners(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('roundedCorners', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('roundedCorners');
        }
    };
    showNavigationArrows(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('showNavigationArrows', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('showNavigationArrows');
        }
    };
    showFilter(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('showFilter', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('showFilter');
        }
    };
    showHeader(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('showHeader', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('showHeader');
        }
    };
    showBackButton(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('showBackButton', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('showBackButton');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxListMenu('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxListMenu('width');
        }
    };
    back() {
        JQXLite(this.componentSelector).jqxListMenu('back');  
    };
    changePage(Item) {
        JQXLite(this.componentSelector).jqxListMenu('changePage', Item);  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxListMenu('destroy');  
    };
    render() {
        let id = 'jqxListMenu' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

