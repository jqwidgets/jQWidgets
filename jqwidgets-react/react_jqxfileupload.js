/*
jQWidgets v5.7.2 (2018-Apr)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxFileUpload extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['autoUpload','accept','browseTemplate','cancelTemplate','disabled','fileInputName','height','localization','multipleFilesUpload','renderFiles','rtl','theme','uploadUrl','uploadTemplate','width'];
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
        JQXLite(this.componentSelector).jqxFileUpload(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxFileUpload('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxFileUpload(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    autoUpload(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('autoUpload', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('autoUpload');
        }
    };
    accept(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('accept', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('accept');
        }
    };
    browseTemplate(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('browseTemplate', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('browseTemplate');
        }
    };
    cancelTemplate(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('cancelTemplate', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('cancelTemplate');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('disabled');
        }
    };
    fileInputName(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('fileInputName', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('fileInputName');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('height');
        }
    };
    localization(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('localization', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('localization');
        }
    };
    multipleFilesUpload(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('multipleFilesUpload', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('multipleFilesUpload');
        }
    };
    renderFiles(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('renderFiles', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('renderFiles');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('rtl');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('theme');
        }
    };
    uploadUrl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('uploadUrl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('uploadUrl');
        }
    };
    uploadTemplate(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('uploadTemplate', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('uploadTemplate');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxFileUpload('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxFileUpload('width');
        }
    };
    browse() {
        JQXLite(this.componentSelector).jqxFileUpload('browse');  
    };
    cancelFile(fileIndex) {
        JQXLite(this.componentSelector).jqxFileUpload('cancelFile', fileIndex);  
    };
    cancelAll() {
        JQXLite(this.componentSelector).jqxFileUpload('cancelAll');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxFileUpload('destroy');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxFileUpload('render');
    };
    refresh() {
        JQXLite(this.componentSelector).jqxFileUpload('refresh');  
    };
    uploadFile(fileIndex) {
        JQXLite(this.componentSelector).jqxFileUpload('uploadFile', fileIndex);  
    };
    uploadAll() {
        JQXLite(this.componentSelector).jqxFileUpload('uploadAll');  
    };
    render() {
        let id = 'jqxFileUpload' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

