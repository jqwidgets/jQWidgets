import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtagcloud';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxTagCloudComponent = class jqxTagCloudComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['alterTextCase', 'disabled', 'displayLimit', 'displayMember', 'displayValue', 'fontSizeUnit', 'height', 'maxColor', 'maxFontSize', 'maxValueToDisplay', 'minColor', 'minFontSize', 'minValueToDisplay', 'rtl', 'sortBy', 'sortOrder', 'source', 'tagRenderer', 'takeTopWeightedItems', 'textColor', 'urlBase', 'urlMember', 'valueMember', 'width'];
        // jqxTagCloudComponent events
        this.onBindingComplete = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTagCloud(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTagCloud(this.properties[i])) {
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
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
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTagCloud('setOptions', options);
    }
    // jqxTagCloudComponent properties
    alterTextCase(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('alterTextCase', arg);
        }
        else {
            return this.host.jqxTagCloud('alterTextCase');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('disabled', arg);
        }
        else {
            return this.host.jqxTagCloud('disabled');
        }
    }
    displayLimit(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayLimit', arg);
        }
        else {
            return this.host.jqxTagCloud('displayLimit');
        }
    }
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayMember', arg);
        }
        else {
            return this.host.jqxTagCloud('displayMember');
        }
    }
    displayValue(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayValue', arg);
        }
        else {
            return this.host.jqxTagCloud('displayValue');
        }
    }
    fontSizeUnit(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('fontSizeUnit', arg);
        }
        else {
            return this.host.jqxTagCloud('fontSizeUnit');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('height', arg);
        }
        else {
            return this.host.jqxTagCloud('height');
        }
    }
    maxColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxColor', arg);
        }
        else {
            return this.host.jqxTagCloud('maxColor');
        }
    }
    maxFontSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('maxFontSize');
        }
    }
    maxValueToDisplay(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('maxValueToDisplay');
        }
    }
    minColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minColor', arg);
        }
        else {
            return this.host.jqxTagCloud('minColor');
        }
    }
    minFontSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('minFontSize');
        }
    }
    minValueToDisplay(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('minValueToDisplay');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('rtl', arg);
        }
        else {
            return this.host.jqxTagCloud('rtl');
        }
    }
    sortBy(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortBy', arg);
        }
        else {
            return this.host.jqxTagCloud('sortBy');
        }
    }
    sortOrder(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortOrder', arg);
        }
        else {
            return this.host.jqxTagCloud('sortOrder');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('source', arg);
        }
        else {
            return this.host.jqxTagCloud('source');
        }
    }
    tagRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('tagRenderer', arg);
        }
        else {
            return this.host.jqxTagCloud('tagRenderer');
        }
    }
    takeTopWeightedItems(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('takeTopWeightedItems', arg);
        }
        else {
            return this.host.jqxTagCloud('takeTopWeightedItems');
        }
    }
    textColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('textColor', arg);
        }
        else {
            return this.host.jqxTagCloud('textColor');
        }
    }
    urlBase(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlBase', arg);
        }
        else {
            return this.host.jqxTagCloud('urlBase');
        }
    }
    urlMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlMember', arg);
        }
        else {
            return this.host.jqxTagCloud('urlMember');
        }
    }
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('valueMember', arg);
        }
        else {
            return this.host.jqxTagCloud('valueMember');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('width', arg);
        }
        else {
            return this.host.jqxTagCloud('width');
        }
    }
    // jqxTagCloudComponent functions
    destroy() {
        this.host.jqxTagCloud('destroy');
    }
    findTagIndex(tag) {
        return this.host.jqxTagCloud('findTagIndex', tag);
    }
    getHiddenTagsList() {
        return this.host.jqxTagCloud('getHiddenTagsList');
    }
    getRenderedTags() {
        return this.host.jqxTagCloud('getRenderedTags');
    }
    getTagsList() {
        return this.host.jqxTagCloud('getTagsList');
    }
    hideItem(index) {
        this.host.jqxTagCloud('hideItem', index);
    }
    insertAt(index, item) {
        this.host.jqxTagCloud('insertAt', index, item);
    }
    removeAt(index) {
        this.host.jqxTagCloud('removeAt', index);
    }
    updateAt(index, item) {
        this.host.jqxTagCloud('updateAt', index, item);
    }
    showItem(index) {
        this.host.jqxTagCloud('showItem', index);
    }
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('itemClick', (eventData) => { this.onItemClick.emit(eventData); });
    }
}; //jqxTagCloudComponent
jqxTagCloudComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('alterTextCase'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrAlterTextCase", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTagCloudComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('displayLimit'),
    tslib_1.__metadata("design:type", Number)
], jqxTagCloudComponent.prototype, "attrDisplayLimit", void 0);
tslib_1.__decorate([
    Input('displayMember'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrDisplayMember", void 0);
tslib_1.__decorate([
    Input('displayValue'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTagCloudComponent.prototype, "attrDisplayValue", void 0);
tslib_1.__decorate([
    Input('fontSizeUnit'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrFontSizeUnit", void 0);
tslib_1.__decorate([
    Input('maxColor'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrMaxColor", void 0);
tslib_1.__decorate([
    Input('maxFontSize'),
    tslib_1.__metadata("design:type", Number)
], jqxTagCloudComponent.prototype, "attrMaxFontSize", void 0);
tslib_1.__decorate([
    Input('maxValueToDisplay'),
    tslib_1.__metadata("design:type", Number)
], jqxTagCloudComponent.prototype, "attrMaxValueToDisplay", void 0);
tslib_1.__decorate([
    Input('minColor'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrMinColor", void 0);
tslib_1.__decorate([
    Input('minFontSize'),
    tslib_1.__metadata("design:type", Number)
], jqxTagCloudComponent.prototype, "attrMinFontSize", void 0);
tslib_1.__decorate([
    Input('minValueToDisplay'),
    tslib_1.__metadata("design:type", Number)
], jqxTagCloudComponent.prototype, "attrMinValueToDisplay", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTagCloudComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('sortBy'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrSortBy", void 0);
tslib_1.__decorate([
    Input('sortOrder'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrSortOrder", void 0);
tslib_1.__decorate([
    Input('source'),
    tslib_1.__metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrSource", void 0);
tslib_1.__decorate([
    Input('tagRenderer'),
    tslib_1.__metadata("design:type", Function)
], jqxTagCloudComponent.prototype, "attrTagRenderer", void 0);
tslib_1.__decorate([
    Input('takeTopWeightedItems'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTagCloudComponent.prototype, "attrTakeTopWeightedItems", void 0);
tslib_1.__decorate([
    Input('textColor'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrTextColor", void 0);
tslib_1.__decorate([
    Input('urlBase'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrUrlBase", void 0);
tslib_1.__decorate([
    Input('urlMember'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrUrlMember", void 0);
tslib_1.__decorate([
    Input('valueMember'),
    tslib_1.__metadata("design:type", String)
], jqxTagCloudComponent.prototype, "attrValueMember", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxTagCloudComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "onBindingComplete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxTagCloudComponent.prototype, "onItemClick", void 0);
jqxTagCloudComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxTagCloud',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxTagCloudComponent);
export { jqxTagCloudComponent };
