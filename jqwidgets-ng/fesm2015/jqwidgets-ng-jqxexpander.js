import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxexpander from '../../jqwidgets/jqxexpander';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxExpanderComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expanded', 'expandAnimationDuration', 'height', 'headerPosition', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxExpanderComponent events
        this.onCollapsing = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onExpanding = new EventEmitter();
        this.onExpanded = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxExpander(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxExpander(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxExpander(this.properties[i])) {
                        this.host.jqxExpander(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxExpander', options);
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
        this.host.jqxExpander('setOptions', options);
    }
    // jqxExpanderComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('animationType', arg);
        }
        else {
            return this.host.jqxExpander('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    arrowPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('arrowPosition', arg);
        }
        else {
            return this.host.jqxExpander('arrowPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxExpander('collapseAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('disabled', arg);
        }
        else {
            return this.host.jqxExpander('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    expanded(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('expanded', arg);
        }
        else {
            return this.host.jqxExpander('expanded');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    expandAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxExpander('expandAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('height', arg);
        }
        else {
            return this.host.jqxExpander('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    headerPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('headerPosition', arg);
        }
        else {
            return this.host.jqxExpander('headerPosition');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('initContent', arg);
        }
        else {
            return this.host.jqxExpander('initContent');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('rtl', arg);
        }
        else {
            return this.host.jqxExpander('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('showArrow', arg);
        }
        else {
            return this.host.jqxExpander('showArrow');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('theme', arg);
        }
        else {
            return this.host.jqxExpander('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('toggleMode', arg);
        }
        else {
            return this.host.jqxExpander('toggleMode');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('width', arg);
        }
        else {
            return this.host.jqxExpander('width');
        }
    }
    // jqxExpanderComponent functions
    /**
     * @return {?}
     */
    collapse() {
        this.host.jqxExpander('collapse');
    }
    /**
     * @return {?}
     */
    disable() {
        this.host.jqxExpander('disable');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxExpander('destroy');
    }
    /**
     * @return {?}
     */
    enable() {
        this.host.jqxExpander('enable');
    }
    /**
     * @return {?}
     */
    expand() {
        this.host.jqxExpander('expand');
    }
    /**
     * @return {?}
     */
    focus() {
        this.host.jqxExpander('focus');
    }
    /**
     * @return {?}
     */
    getContent() {
        return this.host.jqxExpander('getContent');
    }
    /**
     * @return {?}
     */
    getHeaderContent() {
        return this.host.jqxExpander('getHeaderContent');
    }
    /**
     * @return {?}
     */
    invalidate() {
        this.host.jqxExpander('invalidate');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxExpander('refresh');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxExpander('render');
    }
    /**
     * @param {?} headerContent
     * @return {?}
     */
    setHeaderContent(headerContent) {
        this.host.jqxExpander('setHeaderContent', headerContent);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        this.host.jqxExpander('setContent', content);
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('collapsing', (eventData) => { this.onCollapsing.emit(eventData); });
        this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
        this.host.on('expanding', (eventData) => { this.onExpanding.emit(eventData); });
        this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
    }
} //jqxExpanderComponent
jqxExpanderComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxExpander',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxExpanderComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxExpanderComponent.propDecorators = {
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrArrowPosition: [{ type: Input, args: ['arrowPosition',] }],
    attrCollapseAnimationDuration: [{ type: Input, args: ['collapseAnimationDuration',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrExpanded: [{ type: Input, args: ['expanded',] }],
    attrExpandAnimationDuration: [{ type: Input, args: ['expandAnimationDuration',] }],
    attrHeaderPosition: [{ type: Input, args: ['headerPosition',] }],
    attrInitContent: [{ type: Input, args: ['initContent',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrShowArrow: [{ type: Input, args: ['showArrow',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrToggleMode: [{ type: Input, args: ['toggleMode',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onCollapsing: [{ type: Output }],
    onCollapsed: [{ type: Output }],
    onExpanding: [{ type: Output }],
    onExpanded: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class jqxExpanderModule {
}
jqxExpanderModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [jqxExpanderComponent],
                exports: [jqxExpanderComponent]
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

export { jqxExpanderComponent, jqxExpanderModule };

