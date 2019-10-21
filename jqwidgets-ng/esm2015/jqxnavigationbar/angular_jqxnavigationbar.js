import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxnavigationbar';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxNavigationBarComponent = class jqxNavigationBarComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expandAnimationDuration', 'expandMode', 'expandedIndexes', 'height', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxNavigationBarComponent events
        this.onCollapsingItem = new EventEmitter();
        this.onCollapsedItem = new EventEmitter();
        this.onExpandingItem = new EventEmitter();
        this.onExpandedItem = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavigationBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavigationBar(this.properties[i])) {
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavigationBar', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxNavigationBar('setOptions', options);
    }
    // jqxNavigationBarComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('animationType', arg);
        }
        else {
            return this.host.jqxNavigationBar('animationType');
        }
    }
    arrowPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('arrowPosition', arg);
        }
        else {
            return this.host.jqxNavigationBar('arrowPosition');
        }
    }
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('collapseAnimationDuration');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('disabled', arg);
        }
        else {
            return this.host.jqxNavigationBar('disabled');
        }
    }
    expandAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandAnimationDuration');
        }
    }
    expandMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandMode');
        }
    }
    expandedIndexes(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandedIndexes', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandedIndexes');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('height', arg);
        }
        else {
            return this.host.jqxNavigationBar('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('initContent', arg);
        }
        else {
            return this.host.jqxNavigationBar('initContent');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('rtl', arg);
        }
        else {
            return this.host.jqxNavigationBar('rtl');
        }
    }
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('showArrow', arg);
        }
        else {
            return this.host.jqxNavigationBar('showArrow');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('theme', arg);
        }
        else {
            return this.host.jqxNavigationBar('theme');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('toggleMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('toggleMode');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('width', arg);
        }
        else {
            return this.host.jqxNavigationBar('width');
        }
    }
    // jqxNavigationBarComponent functions
    add(header, content) {
        this.host.jqxNavigationBar('add', header, content);
    }
    collapseAt(index) {
        this.host.jqxNavigationBar('collapseAt', index);
    }
    disableAt(index) {
        this.host.jqxNavigationBar('disableAt', index);
    }
    disable() {
        this.host.jqxNavigationBar('disable');
    }
    destroy() {
        this.host.jqxNavigationBar('destroy');
    }
    expandAt(index) {
        this.host.jqxNavigationBar('expandAt', index);
    }
    enableAt(index) {
        this.host.jqxNavigationBar('enableAt', index);
    }
    enable() {
        this.host.jqxNavigationBar('enable');
    }
    focus() {
        this.host.jqxNavigationBar('focus');
    }
    getHeaderContentAt(index) {
        return this.host.jqxNavigationBar('getHeaderContentAt', index);
    }
    getContentAt(index) {
        return this.host.jqxNavigationBar('getContentAt', index);
    }
    hideArrowAt(index) {
        this.host.jqxNavigationBar('hideArrowAt', index);
    }
    invalidate() {
        this.host.jqxNavigationBar('invalidate');
    }
    insert(Index, header, content) {
        this.host.jqxNavigationBar('insert', Index, header, content);
    }
    refresh() {
        this.host.jqxNavigationBar('refresh');
    }
    render() {
        this.host.jqxNavigationBar('render');
    }
    remove(index) {
        this.host.jqxNavigationBar('remove', index);
    }
    setContentAt(index, item) {
        this.host.jqxNavigationBar('setContentAt', index, item);
    }
    setHeaderContentAt(index, item) {
        this.host.jqxNavigationBar('setHeaderContentAt', index, item);
    }
    showArrowAt(index) {
        this.host.jqxNavigationBar('showArrowAt', index);
    }
    update(index, header, content) {
        this.host.jqxNavigationBar('update', index, header, content);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxNavigationBar('val', value);
        }
        else {
            return this.host.jqxNavigationBar('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('collapsingItem', (eventData) => { this.onCollapsingItem.emit(eventData); });
        this.host.on('collapsedItem', (eventData) => { this.onCollapsedItem.emit(eventData); });
        this.host.on('expandingItem', (eventData) => { this.onExpandingItem.emit(eventData); });
        this.host.on('expandedItem', (eventData) => { this.onExpandedItem.emit(eventData); });
    }
}; //jqxNavigationBarComponent
jqxNavigationBarComponent.ctorParameters = () => [
    { type: ElementRef }
];
tslib_1.__decorate([
    Input('animationType'),
    tslib_1.__metadata("design:type", String)
], jqxNavigationBarComponent.prototype, "attrAnimationType", void 0);
tslib_1.__decorate([
    Input('arrowPosition'),
    tslib_1.__metadata("design:type", String)
], jqxNavigationBarComponent.prototype, "attrArrowPosition", void 0);
tslib_1.__decorate([
    Input('collapseAnimationDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxNavigationBarComponent.prototype, "attrCollapseAnimationDuration", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxNavigationBarComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('expandAnimationDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxNavigationBarComponent.prototype, "attrExpandAnimationDuration", void 0);
tslib_1.__decorate([
    Input('expandMode'),
    tslib_1.__metadata("design:type", String)
], jqxNavigationBarComponent.prototype, "attrExpandMode", void 0);
tslib_1.__decorate([
    Input('expandedIndexes'),
    tslib_1.__metadata("design:type", Array)
], jqxNavigationBarComponent.prototype, "attrExpandedIndexes", void 0);
tslib_1.__decorate([
    Input('initContent'),
    tslib_1.__metadata("design:type", Function)
], jqxNavigationBarComponent.prototype, "attrInitContent", void 0);
tslib_1.__decorate([
    Input('rtl'),
    tslib_1.__metadata("design:type", Boolean)
], jqxNavigationBarComponent.prototype, "attrRtl", void 0);
tslib_1.__decorate([
    Input('showArrow'),
    tslib_1.__metadata("design:type", Boolean)
], jqxNavigationBarComponent.prototype, "attrShowArrow", void 0);
tslib_1.__decorate([
    Input('theme'),
    tslib_1.__metadata("design:type", String)
], jqxNavigationBarComponent.prototype, "attrTheme", void 0);
tslib_1.__decorate([
    Input('toggleMode'),
    tslib_1.__metadata("design:type", String)
], jqxNavigationBarComponent.prototype, "attrToggleMode", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxNavigationBarComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxNavigationBarComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxNavigationBarComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxNavigationBarComponent.prototype, "onCollapsingItem", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxNavigationBarComponent.prototype, "onCollapsedItem", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxNavigationBarComponent.prototype, "onExpandingItem", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxNavigationBarComponent.prototype, "onExpandedItem", void 0);
jqxNavigationBarComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxNavigationBar',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxNavigationBarComponent);
export { jqxNavigationBarComponent };
