import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxmenu';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxMenuComponent = class jqxMenuComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'animationHideDelay', 'animationShowDelay', 'autoCloseInterval', 'autoSizeMainItems', 'autoCloseOnClick', 'autoOpenPopup', 'autoOpen', 'autoCloseOnMouseLeave', 'clickToOpen', 'disabled', 'enableHover', 'easing', 'height', 'keyboardNavigation', 'minimizeWidth', 'mode', 'popupZIndex', 'rtl', 'showTopLevelArrows', 'source', 'theme', 'width'];
        // jqxMenuComponent events
        this.onClosed = new EventEmitter();
        this.onItemclick = new EventEmitter();
        this.onShown = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMenu(this.properties[i])) {
                        this.host.jqxMenu(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxMenu('setOptions', options);
    }
    // jqxMenuComponent properties
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDuration');
        }
    }
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDuration');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDelay');
        }
    }
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDelay');
        }
    }
    autoCloseInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseInterval', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseInterval');
        }
    }
    autoSizeMainItems(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoSizeMainItems', arg);
        }
        else {
            return this.host.jqxMenu('autoSizeMainItems');
        }
    }
    autoCloseOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnClick', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnClick');
        }
    }
    autoOpenPopup(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpenPopup', arg);
        }
        else {
            return this.host.jqxMenu('autoOpenPopup');
        }
    }
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpen', arg);
        }
        else {
            return this.host.jqxMenu('autoOpen');
        }
    }
    autoCloseOnMouseLeave(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnMouseLeave', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnMouseLeave');
        }
    }
    clickToOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('clickToOpen', arg);
        }
        else {
            return this.host.jqxMenu('clickToOpen');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('disabled', arg);
        }
        else {
            return this.host.jqxMenu('disabled');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('enableHover', arg);
        }
        else {
            return this.host.jqxMenu('enableHover');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('easing', arg);
        }
        else {
            return this.host.jqxMenu('easing');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('height', arg);
        }
        else {
            return this.host.jqxMenu('height');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxMenu('keyboardNavigation');
        }
    }
    minimizeWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('minimizeWidth', arg);
        }
        else {
            return this.host.jqxMenu('minimizeWidth');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('mode', arg);
        }
        else {
            return this.host.jqxMenu('mode');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('popupZIndex', arg);
        }
        else {
            return this.host.jqxMenu('popupZIndex');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('rtl', arg);
        }
        else {
            return this.host.jqxMenu('rtl');
        }
    }
    showTopLevelArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('showTopLevelArrows', arg);
        }
        else {
            return this.host.jqxMenu('showTopLevelArrows');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('source', arg);
        }
        else {
            return this.host.jqxMenu('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('theme', arg);
        }
        else {
            return this.host.jqxMenu('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('width', arg);
        }
        else {
            return this.host.jqxMenu('width');
        }
    }
    // jqxMenuComponent functions
    closeItem(itemID) {
        this.host.jqxMenu('closeItem', itemID);
    }
    close() {
        this.host.jqxMenu('close');
    }
    disable(itemID, value) {
        this.host.jqxMenu('disable', itemID, value);
    }
    destroy() {
        this.host.jqxMenu('destroy');
    }
    focus() {
        this.host.jqxMenu('focus');
    }
    minimize() {
        this.host.jqxMenu('minimize');
    }
    open(left, top) {
        this.host.jqxMenu('open', left, top);
    }
    openItem(itemID) {
        this.host.jqxMenu('openItem', itemID);
    }
    restore() {
        this.host.jqxMenu('restore');
    }
    setItemOpenDirection(item, horizontaldirection, verticaldirection) {
        this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
    }
    __wireEvents__() {
        this.host.on('closed', (eventData) => { this.onClosed.emit(eventData); });
        this.host.on('itemclick', (eventData) => { this.onItemclick.emit(eventData); });
        this.host.on('shown', (eventData) => { this.onShown.emit(eventData); });
    }
}; //jqxMenuComponent
jqxMenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationShowDuration'),
    __metadata("design:type", Number)
], jqxMenuComponent.prototype, "attrAnimationShowDuration", void 0);
__decorate([
    Input('animationHideDuration'),
    __metadata("design:type", Number)
], jqxMenuComponent.prototype, "attrAnimationHideDuration", void 0);
__decorate([
    Input('animationHideDelay'),
    __metadata("design:type", Number)
], jqxMenuComponent.prototype, "attrAnimationHideDelay", void 0);
__decorate([
    Input('animationShowDelay'),
    __metadata("design:type", Number)
], jqxMenuComponent.prototype, "attrAnimationShowDelay", void 0);
__decorate([
    Input('autoCloseInterval'),
    __metadata("design:type", Number)
], jqxMenuComponent.prototype, "attrAutoCloseInterval", void 0);
__decorate([
    Input('autoSizeMainItems'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoSizeMainItems", void 0);
__decorate([
    Input('autoCloseOnClick'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoCloseOnClick", void 0);
__decorate([
    Input('autoOpenPopup'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoOpenPopup", void 0);
__decorate([
    Input('autoOpen'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoOpen", void 0);
__decorate([
    Input('autoCloseOnMouseLeave'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrAutoCloseOnMouseLeave", void 0);
__decorate([
    Input('clickToOpen'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrClickToOpen", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('enableHover'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrEnableHover", void 0);
__decorate([
    Input('easing'),
    __metadata("design:type", String)
], jqxMenuComponent.prototype, "attrEasing", void 0);
__decorate([
    Input('keyboardNavigation'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrKeyboardNavigation", void 0);
__decorate([
    Input('minimizeWidth'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrMinimizeWidth", void 0);
__decorate([
    Input('mode'),
    __metadata("design:type", String)
], jqxMenuComponent.prototype, "attrMode", void 0);
__decorate([
    Input('popupZIndex'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrPopupZIndex", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('showTopLevelArrows'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "attrShowTopLevelArrows", void 0);
__decorate([
    Input('source'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrSource", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxMenuComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxMenuComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "onClosed", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "onItemclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxMenuComponent.prototype, "onShown", void 0);
jqxMenuComponent = __decorate([
    Component({
        selector: 'jqxMenu',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxMenuComponent);

let jqxMenuModule = class jqxMenuModule {
};
jqxMenuModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxMenuComponent],
        exports: [jqxMenuComponent]
    })
], jqxMenuModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxMenuComponent, jqxMenuModule };
