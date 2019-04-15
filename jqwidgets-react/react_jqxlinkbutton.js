import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxLinkButton extends React.Component {
    constructor(props) {
        super(props);
        const widgetId = 'jqxLinkButton' + JQXLite.generateID();
        this.componentSelector = '#' + widgetId;
        this.state = { id: widgetId };
    };
    componentDidMount() {
        const options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        const properties = ['disabled','height','rtl','theme','width'];
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
            const classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
    	    JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxLinkButton(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxLinkButton('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxLinkButton(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('height');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('rtl');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('theme');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxLinkButton('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxLinkButton('width');
        }
    };

    render() {
        return (
            <a id={this.state.id} target={this.props.target} href={this.props.href}> {this.props.value}{this.props.children}</a>
        )
    };
};