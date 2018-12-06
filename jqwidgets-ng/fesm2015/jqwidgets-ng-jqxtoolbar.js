import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistbox from '../../jqwidgets/jqxlistbox';
import * as jqxdropdownlist from '../../jqwidgets/jqxdropdownlist';
import * as jqxcombobox from '../../jqwidgets/jqxcombobox';
import * as jqxinput from '../../jqwidgets/jqxinput';
import * as jqxtoolbar from '../../jqwidgets/jqxtoolbar';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxToolBarComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'initTools', 'minimizeWidth', 'minWidth', 'maxWidth', 'rtl', 'tools', 'theme', 'width'];
        // jqxToolBarComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxToolBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxToolBar(this.properties[i])) {
                        this.host.jqxToolBar(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createComponent(options) {
        if (this.host) {
            return;
        }
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxToolBar', options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxToolBar('setOptions', options);
    }
    // jqxToolBarComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('disabled', arg);
        }
        else {
            return this.host.jqxToolBar('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('height', arg);
        }
        else {
            return this.host.jqxToolBar('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initTools(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('initTools', arg);
        }
        else {
            return this.host.jqxToolBar('initTools');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minimizeWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minimizeWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minimizeWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    minWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('minWidth', arg);
        }
        else {
            return this.host.jqxToolBar('minWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    maxWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('maxWidth', arg);
        }
        else {
            return this.host.jqxToolBar('maxWidth');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('rtl', arg);
        }
        else {
            return this.host.jqxToolBar('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    tools(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('tools', arg);
        }
        else {
            return this.host.jqxToolBar('tools');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('theme', arg);
        }
        else {
            return this.host.jqxToolBar('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxToolBar('width', arg);
        }
        else {
            return this.host.jqxToolBar('width');
        }
    }
    // jqxToolBarComponent functions
    /**
     * @param {?} type
     * @param {?} position
     * @param {?} separator
     * @param {?} menuToolIninitialization
     * @return {?}
     */
    addTool(type, position, separator, menuToolIninitialization) {
        this.host.jqxToolBar('addTool', type, position, separator, menuToolIninitialization);
    }
    /**
     * @param {?} index
     * @param {?} disable
     * @return {?}
     */
    disableTool(index, disable) {
        this.host.jqxToolBar('disableTool', index, disable);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxToolBar('destroy');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    destroyTool(index) {
        this.host.jqxToolBar('destroyTool', index);
    }
    /**
     * @return {?}
     */
    getTools() {
        return this.host.jqxToolBar('getTools');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxToolBar('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxToolBar('refresh');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
    }
} //jqxToolBarComponent
jqxToolBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxToolbar',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxToolBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxToolBarComponent.propDecorators = {
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrInitTools: [{ type: Input, args: ['initTools',] }],
    attrMinimizeWidth: [{ type: Input, args: ['minimizeWidth',] }],
    attrMinWidth: [{ type: Input, args: ['minWidth',] }],
    attrMaxWidth: [{ type: Input, args: ['maxWidth',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTools: [{ type: Input, args: ['tools',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onClose: [{ type: Output }],
    onOpen: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxToolBarModule {
}
jqxToolBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [jqxToolBarComponent],
                exports: [jqxToolBarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxToolBarComponent, jqxToolBarModule };

