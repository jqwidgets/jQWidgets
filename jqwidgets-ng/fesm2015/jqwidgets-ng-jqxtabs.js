import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtabs';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxTabsComponent = class jqxTabsComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'autoHeight', 'closeButtonSize', 'collapsible', 'contentTransitionDuration', 'disabled', 'enabledHover', 'enableScrollAnimation', 'enableDropAnimation', 'height', 'initTabContent', 'keyboardNavigation', 'next', 'previous', 'position', 'reorder', 'rtl', 'scrollAnimationDuration', 'selectedItem', 'selectionTracker', 'scrollable', 'scrollPosition', 'scrollStep', 'showCloseButtons', 'toggleMode', 'theme', 'width'];
        // jqxTabsComponent events
        this.onAdd = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelecting = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.onTabclick = new EventEmitter();
        this.onUnselecting = new EventEmitter();
        this.onUnselected = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTabs(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTabs(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTabs(this.properties[i])) {
                        this.host.jqxTabs(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTabs', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTabs('setOptions', options);
    }
    // jqxTabsComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('animationType', arg);
        }
        else {
            return this.host.jqxTabs('animationType');
        }
    }
    autoHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('autoHeight', arg);
        }
        else {
            return this.host.jqxTabs('autoHeight');
        }
    }
    closeButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('closeButtonSize', arg);
        }
        else {
            return this.host.jqxTabs('closeButtonSize');
        }
    }
    collapsible(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('collapsible', arg);
        }
        else {
            return this.host.jqxTabs('collapsible');
        }
    }
    contentTransitionDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('contentTransitionDuration', arg);
        }
        else {
            return this.host.jqxTabs('contentTransitionDuration');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('disabled', arg);
        }
        else {
            return this.host.jqxTabs('disabled');
        }
    }
    enabledHover(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enabledHover', arg);
        }
        else {
            return this.host.jqxTabs('enabledHover');
        }
    }
    enableScrollAnimation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enableScrollAnimation', arg);
        }
        else {
            return this.host.jqxTabs('enableScrollAnimation');
        }
    }
    enableDropAnimation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enableDropAnimation', arg);
        }
        else {
            return this.host.jqxTabs('enableDropAnimation');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('height', arg);
        }
        else {
            return this.host.jqxTabs('height');
        }
    }
    initTabContent(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('initTabContent', arg);
        }
        else {
            return this.host.jqxTabs('initTabContent');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTabs('keyboardNavigation');
        }
    }
    next(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('next', arg);
        }
        else {
            return this.host.jqxTabs('next');
        }
    }
    previous(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('previous', arg);
        }
        else {
            return this.host.jqxTabs('previous');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('position', arg);
        }
        else {
            return this.host.jqxTabs('position');
        }
    }
    reorder(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('reorder', arg);
        }
        else {
            return this.host.jqxTabs('reorder');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('rtl', arg);
        }
        else {
            return this.host.jqxTabs('rtl');
        }
    }
    scrollAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollAnimationDuration', arg);
        }
        else {
            return this.host.jqxTabs('scrollAnimationDuration');
        }
    }
    selectedItem(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('selectedItem', arg);
        }
        else {
            return this.host.jqxTabs('selectedItem');
        }
    }
    selectionTracker(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('selectionTracker', arg);
        }
        else {
            return this.host.jqxTabs('selectionTracker');
        }
    }
    scrollable(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollable', arg);
        }
        else {
            return this.host.jqxTabs('scrollable');
        }
    }
    scrollPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollPosition', arg);
        }
        else {
            return this.host.jqxTabs('scrollPosition');
        }
    }
    scrollStep(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollStep', arg);
        }
        else {
            return this.host.jqxTabs('scrollStep');
        }
    }
    showCloseButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('showCloseButtons', arg);
        }
        else {
            return this.host.jqxTabs('showCloseButtons');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('toggleMode', arg);
        }
        else {
            return this.host.jqxTabs('toggleMode');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('theme', arg);
        }
        else {
            return this.host.jqxTabs('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('width', arg);
        }
        else {
            return this.host.jqxTabs('width');
        }
    }
    // jqxTabsComponent functions
    addAt(index, title, content) {
        this.host.jqxTabs('addAt', index, title, content);
    }
    addFirst(htmlElement1, htmlElement2) {
        this.host.jqxTabs('addFirst', htmlElement1, htmlElement2);
    }
    addLast(htmlElement1, htmlElement2) {
        this.host.jqxTabs('addLast', htmlElement1, htmlElement2);
    }
    collapse() {
        this.host.jqxTabs('collapse');
    }
    disable() {
        this.host.jqxTabs('disable');
    }
    disableAt(index) {
        this.host.jqxTabs('disableAt', index);
    }
    destroy() {
        this.host.jqxTabs('destroy');
    }
    ensureVisible(index) {
        this.host.jqxTabs('ensureVisible', index);
    }
    enableAt(index) {
        this.host.jqxTabs('enableAt', index);
    }
    expand() {
        this.host.jqxTabs('expand');
    }
    enable() {
        this.host.jqxTabs('enable');
    }
    focus() {
        this.host.jqxTabs('focus');
    }
    getTitleAt(index) {
        return this.host.jqxTabs('getTitleAt', index);
    }
    getContentAt(index) {
        return this.host.jqxTabs('getContentAt', index);
    }
    getDisabledTabsCount() {
        return this.host.jqxTabs('getDisabledTabsCount');
    }
    hideCloseButtonAt(index) {
        this.host.jqxTabs('hideCloseButtonAt', index);
    }
    hideAllCloseButtons() {
        this.host.jqxTabs('hideAllCloseButtons');
    }
    length() {
        return this.host.jqxTabs('length');
    }
    removeAt(index) {
        this.host.jqxTabs('removeAt', index);
    }
    removeFirst() {
        this.host.jqxTabs('removeFirst');
    }
    removeLast() {
        this.host.jqxTabs('removeLast');
    }
    select(index) {
        this.host.jqxTabs('select', index);
    }
    setContentAt(index, htmlElement) {
        this.host.jqxTabs('setContentAt', index, htmlElement);
    }
    setTitleAt(index, htmlElement) {
        this.host.jqxTabs('setTitleAt', index, htmlElement);
    }
    showCloseButtonAt(index) {
        this.host.jqxTabs('showCloseButtonAt', index);
    }
    showAllCloseButtons() {
        this.host.jqxTabs('showAllCloseButtons');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTabs('val', value);
        }
        else {
            return this.host.jqxTabs('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('add', (eventData) => { this.onAdd.emit(eventData); });
        this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
        this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
        this.host.on('removed', (eventData) => { this.onRemoved.emit(eventData); });
        this.host.on('selecting', (eventData) => { this.onSelecting.emit(eventData); });
        this.host.on('selected', (eventData) => { this.onSelected.emit(eventData); });
        this.host.on('tabclick', (eventData) => { this.onTabclick.emit(eventData); });
        this.host.on('unselecting', (eventData) => { this.onUnselecting.emit(eventData); });
        this.host.on('unselected', (eventData) => { this.onUnselected.emit(eventData); });
    }
}; //jqxTabsComponent
jqxTabsComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('animationType'),
    __metadata("design:type", String)
], jqxTabsComponent.prototype, "attrAnimationType", void 0);
__decorate([
    Input('autoHeight'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrAutoHeight", void 0);
__decorate([
    Input('closeButtonSize'),
    __metadata("design:type", Number)
], jqxTabsComponent.prototype, "attrCloseButtonSize", void 0);
__decorate([
    Input('collapsible'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrCollapsible", void 0);
__decorate([
    Input('contentTransitionDuration'),
    __metadata("design:type", Number)
], jqxTabsComponent.prototype, "attrContentTransitionDuration", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('enabledHover'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrEnabledHover", void 0);
__decorate([
    Input('enableScrollAnimation'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrEnableScrollAnimation", void 0);
__decorate([
    Input('enableDropAnimation'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrEnableDropAnimation", void 0);
__decorate([
    Input('initTabContent'),
    __metadata("design:type", Function)
], jqxTabsComponent.prototype, "attrInitTabContent", void 0);
__decorate([
    Input('keyboardNavigation'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrKeyboardNavigation", void 0);
__decorate([
    Input('next'),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "attrNext", void 0);
__decorate([
    Input('previous'),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "attrPrevious", void 0);
__decorate([
    Input('position'),
    __metadata("design:type", String)
], jqxTabsComponent.prototype, "attrPosition", void 0);
__decorate([
    Input('reorder'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrReorder", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('scrollAnimationDuration'),
    __metadata("design:type", Number)
], jqxTabsComponent.prototype, "attrScrollAnimationDuration", void 0);
__decorate([
    Input('selectedItem'),
    __metadata("design:type", Number)
], jqxTabsComponent.prototype, "attrSelectedItem", void 0);
__decorate([
    Input('selectionTracker'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrSelectionTracker", void 0);
__decorate([
    Input('scrollable'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrScrollable", void 0);
__decorate([
    Input('scrollPosition'),
    __metadata("design:type", String)
], jqxTabsComponent.prototype, "attrScrollPosition", void 0);
__decorate([
    Input('scrollStep'),
    __metadata("design:type", Number)
], jqxTabsComponent.prototype, "attrScrollStep", void 0);
__decorate([
    Input('showCloseButtons'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "attrShowCloseButtons", void 0);
__decorate([
    Input('toggleMode'),
    __metadata("design:type", String)
], jqxTabsComponent.prototype, "attrToggleMode", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxTabsComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxTabsComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onAdd", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onCollapsed", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onDragStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onDragEnd", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onExpanded", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onRemoved", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onSelecting", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onSelected", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onTabclick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onUnselecting", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxTabsComponent.prototype, "onUnselected", void 0);
jqxTabsComponent = __decorate([
    Component({
        selector: 'jqxTabs',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxTabsComponent);

let jqxTabsModule = class jqxTabsModule {
};
jqxTabsModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxTabsComponent],
        exports: [jqxTabsComponent]
    })
], jqxTabsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTabsComponent, jqxTabsModule };
