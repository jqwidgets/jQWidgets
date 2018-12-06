import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdata from '../../jqwidgets/jqxdata';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxscrollbar from '../../jqwidgets/jqxscrollbar';
import * as jqxlistmenu from '../../jqwidgets/jqxlistmenu';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, ElementRef } from '@angular/core';
export class jqxListMenuComponent {
    /**
     * @param {?} containerElement
     */
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['alwaysShowNavigationArrows', 'animationType', 'animationDuration', 'autoSeparators', 'backLabel', 'disabled', 'enableScrolling', 'filterCallback', 'height', 'headerAnimationDuration', 'placeHolder', 'readOnly', 'rtl', 'roundedCorners', 'showNavigationArrows', 'showFilter', 'showHeader', 'showBackButton', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxListMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxListMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxListMenu(this.properties[i])) {
                        this.host.jqxListMenu(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListMenu', options);
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
        this.host.jqxListMenu('setOptions', options);
    }
    // jqxListMenuComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    alwaysShowNavigationArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('alwaysShowNavigationArrows', arg);
        }
        else {
            return this.host.jqxListMenu('alwaysShowNavigationArrows');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('animationType', arg);
        }
        else {
            return this.host.jqxListMenu('animationType');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('animationDuration', arg);
        }
        else {
            return this.host.jqxListMenu('animationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoSeparators(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('autoSeparators', arg);
        }
        else {
            return this.host.jqxListMenu('autoSeparators');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    backLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('backLabel', arg);
        }
        else {
            return this.host.jqxListMenu('backLabel');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('disabled', arg);
        }
        else {
            return this.host.jqxListMenu('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    enableScrolling(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('enableScrolling', arg);
        }
        else {
            return this.host.jqxListMenu('enableScrolling');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    filterCallback(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('filterCallback', arg);
        }
        else {
            return this.host.jqxListMenu('filterCallback');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('height', arg);
        }
        else {
            return this.host.jqxListMenu('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    headerAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('headerAnimationDuration', arg);
        }
        else {
            return this.host.jqxListMenu('headerAnimationDuration');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('placeHolder', arg);
        }
        else {
            return this.host.jqxListMenu('placeHolder');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('readOnly', arg);
        }
        else {
            return this.host.jqxListMenu('readOnly');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('rtl', arg);
        }
        else {
            return this.host.jqxListMenu('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('roundedCorners', arg);
        }
        else {
            return this.host.jqxListMenu('roundedCorners');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showNavigationArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showNavigationArrows', arg);
        }
        else {
            return this.host.jqxListMenu('showNavigationArrows');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showFilter(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showFilter', arg);
        }
        else {
            return this.host.jqxListMenu('showFilter');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showHeader(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showHeader', arg);
        }
        else {
            return this.host.jqxListMenu('showHeader');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    showBackButton(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showBackButton', arg);
        }
        else {
            return this.host.jqxListMenu('showBackButton');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('theme', arg);
        }
        else {
            return this.host.jqxListMenu('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('width', arg);
        }
        else {
            return this.host.jqxListMenu('width');
        }
    }
    // jqxListMenuComponent functions
    /**
     * @return {?}
     */
    back() {
        this.host.jqxListMenu('back');
    }
    /**
     * @param {?} Item
     * @return {?}
     */
    changePage(Item) {
        this.host.jqxListMenu('changePage', Item);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxListMenu('destroy');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
    }
} //jqxListMenuComponent
jqxListMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxListMenu',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxListMenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxListMenuComponent.propDecorators = {
    attrAlwaysShowNavigationArrows: [{ type: Input, args: ['alwaysShowNavigationArrows',] }],
    attrAnimationType: [{ type: Input, args: ['animationType',] }],
    attrAnimationDuration: [{ type: Input, args: ['animationDuration',] }],
    attrAutoSeparators: [{ type: Input, args: ['autoSeparators',] }],
    attrBackLabel: [{ type: Input, args: ['backLabel',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrEnableScrolling: [{ type: Input, args: ['enableScrolling',] }],
    attrFilterCallback: [{ type: Input, args: ['filterCallback',] }],
    attrHeaderAnimationDuration: [{ type: Input, args: ['headerAnimationDuration',] }],
    attrPlaceHolder: [{ type: Input, args: ['placeHolder',] }],
    attrReadOnly: [{ type: Input, args: ['readOnly',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrRoundedCorners: [{ type: Input, args: ['roundedCorners',] }],
    attrShowNavigationArrows: [{ type: Input, args: ['showNavigationArrows',] }],
    attrShowFilter: [{ type: Input, args: ['showFilter',] }],
    attrShowHeader: [{ type: Input, args: ['showHeader',] }],
    attrShowBackButton: [{ type: Input, args: ['showBackButton',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }]
};
if (false) {
    /** @type {?} */
    jqxListMenuComponent.prototype.attrAlwaysShowNavigationArrows;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrAnimationType;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrAnimationDuration;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrAutoSeparators;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrBackLabel;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrEnableScrolling;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrFilterCallback;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrHeaderAnimationDuration;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrPlaceHolder;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrReadOnly;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrRtl;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrRoundedCorners;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrShowNavigationArrows;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrShowFilter;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrShowHeader;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrShowBackButton;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrTheme;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrWidth;
    /** @type {?} */
    jqxListMenuComponent.prototype.attrHeight;
    /** @type {?} */
    jqxListMenuComponent.prototype.autoCreate;
    /** @type {?} */
    jqxListMenuComponent.prototype.properties;
    /** @type {?} */
    jqxListMenuComponent.prototype.host;
    /** @type {?} */
    jqxListMenuComponent.prototype.elementRef;
    /** @type {?} */
    jqxListMenuComponent.prototype.widgetObject;
    /* Skipping unhandled member: ;*/
}
