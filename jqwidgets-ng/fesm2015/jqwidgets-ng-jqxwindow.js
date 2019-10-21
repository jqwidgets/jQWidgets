import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxWindowComponent = class jqxWindowComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'animationType', 'collapsed', 'collapseAnimationDuration', 'content', 'closeAnimationDuration', 'closeButtonSize', 'closeButtonAction', 'cancelButton', 'dragArea', 'draggable', 'disabled', 'height', 'initContent', 'isModal', 'keyboardCloseKey', 'keyboardNavigation', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'modalOpacity', 'modalZIndex', 'modalBackgroundZIndex', 'okButton', 'position', 'rtl', 'resizable', 'showAnimationDuration', 'showCloseButton', 'showCollapseButton', 'theme', 'title', 'width', 'zIndex'];
        // jqxWindowComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onMoving = new EventEmitter();
        this.onMoved = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onResizing = new EventEmitter();
        this.onResized = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxWindow(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxWindow(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxWindow(this.properties[i])) {
                        this.host.jqxWindow(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxWindow', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxWindow('setOptions', options);
    }
    // jqxWindowComponent properties
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('autoOpen', arg);
        }
        else {
            return this.host.jqxWindow('autoOpen');
        }
    }
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('animationType', arg);
        }
        else {
            return this.host.jqxWindow('animationType');
        }
    }
    collapsed(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapsed', arg);
        }
        else {
            return this.host.jqxWindow('collapsed');
        }
    }
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('collapseAnimationDuration');
        }
    }
    content(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('content', arg);
        }
        else {
            return this.host.jqxWindow('content');
        }
    }
    closeAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('closeAnimationDuration');
        }
    }
    closeButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonSize', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonSize');
        }
    }
    closeButtonAction(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonAction', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonAction');
        }
    }
    cancelButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('cancelButton', arg);
        }
        else {
            return this.host.jqxWindow('cancelButton');
        }
    }
    dragArea(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('dragArea', arg);
        }
        else {
            return this.host.jqxWindow('dragArea');
        }
    }
    draggable(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('draggable', arg);
        }
        else {
            return this.host.jqxWindow('draggable');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('disabled', arg);
        }
        else {
            return this.host.jqxWindow('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('height', arg);
        }
        else {
            return this.host.jqxWindow('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('initContent', arg);
        }
        else {
            return this.host.jqxWindow('initContent');
        }
    }
    isModal(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('isModal', arg);
        }
        else {
            return this.host.jqxWindow('isModal');
        }
    }
    keyboardCloseKey(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardCloseKey', arg);
        }
        else {
            return this.host.jqxWindow('keyboardCloseKey');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxWindow('keyboardNavigation');
        }
    }
    minHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minHeight', arg);
        }
        else {
            return this.host.jqxWindow('minHeight');
        }
    }
    maxHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxHeight', arg);
        }
        else {
            return this.host.jqxWindow('maxHeight');
        }
    }
    minWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minWidth', arg);
        }
        else {
            return this.host.jqxWindow('minWidth');
        }
    }
    maxWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxWidth', arg);
        }
        else {
            return this.host.jqxWindow('maxWidth');
        }
    }
    modalOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalOpacity', arg);
        }
        else {
            return this.host.jqxWindow('modalOpacity');
        }
    }
    modalZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalZIndex');
        }
    }
    modalBackgroundZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalBackgroundZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalBackgroundZIndex');
        }
    }
    okButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('okButton', arg);
        }
        else {
            return this.host.jqxWindow('okButton');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('position', arg);
        }
        else {
            return this.host.jqxWindow('position');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('rtl', arg);
        }
        else {
            return this.host.jqxWindow('rtl');
        }
    }
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('resizable', arg);
        }
        else {
            return this.host.jqxWindow('resizable');
        }
    }
    showAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('showAnimationDuration');
        }
    }
    showCloseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCloseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCloseButton');
        }
    }
    showCollapseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCollapseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCollapseButton');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('theme', arg);
        }
        else {
            return this.host.jqxWindow('theme');
        }
    }
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('title', arg);
        }
        else {
            return this.host.jqxWindow('title');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('width', arg);
        }
        else {
            return this.host.jqxWindow('width');
        }
    }
    zIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('zIndex', arg);
        }
        else {
            return this.host.jqxWindow('zIndex');
        }
    }
    // jqxWindowComponent functions
    bringToFront() {
        this.host.jqxWindow('bringToFront');
    }
    close() {
        this.host.jqxWindow('close');
    }
    collapse() {
        this.host.jqxWindow('collapse');
    }
    closeAll() {
        this.host.jqxWindow('closeAll');
    }
    disable() {
        this.host.jqxWindow('disable');
    }
    destroy() {
        this.host.jqxWindow('destroy');
    }
    enable() {
        this.host.jqxWindow('enable');
    }
    expand() {
        this.host.jqxWindow('expand');
    }
    focus() {
        this.host.jqxWindow('focus');
    }
    isOpen() {
        return this.host.jqxWindow('isOpen');
    }
    move(top, left) {
        this.host.jqxWindow('move', top, left);
    }
    open() {
        this.host.jqxWindow('open');
    }
    hide() {
        this.host.jqxWindow('hide');
    }
    resize(top, left) {
        this.host.jqxWindow('resize', top, left);
    }
    setTitle(title) {
        this.host.jqxWindow('setTitle', title);
    }
    setContent(content) {
        this.host.jqxWindow('setContent', content);
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('moving', (eventData) => { this.onMoving.emit(eventData); });
        this.host.on('moved', (eventData) => { this.onMoved.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('resizing', (eventData) => { this.onResizing.emit(eventData); });
        this.host.on('resized', (eventData) => { this.onResized.emit(eventData); });
    }
}; //jqxWindowComponent
jqxWindowComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('autoOpen'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrAutoOpen", void 0);
__decorate([
    Input('animationType'),
    __metadata("design:type", String)
], jqxWindowComponent.prototype, "attrAnimationType", void 0);
__decorate([
    Input('collapsed'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrCollapsed", void 0);
__decorate([
    Input('collapseAnimationDuration'),
    __metadata("design:type", Number)
], jqxWindowComponent.prototype, "attrCollapseAnimationDuration", void 0);
__decorate([
    Input('content'),
    __metadata("design:type", String)
], jqxWindowComponent.prototype, "attrContent", void 0);
__decorate([
    Input('closeAnimationDuration'),
    __metadata("design:type", Number)
], jqxWindowComponent.prototype, "attrCloseAnimationDuration", void 0);
__decorate([
    Input('closeButtonSize'),
    __metadata("design:type", Number)
], jqxWindowComponent.prototype, "attrCloseButtonSize", void 0);
__decorate([
    Input('closeButtonAction'),
    __metadata("design:type", String)
], jqxWindowComponent.prototype, "attrCloseButtonAction", void 0);
__decorate([
    Input('cancelButton'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrCancelButton", void 0);
__decorate([
    Input('dragArea'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrDragArea", void 0);
__decorate([
    Input('draggable'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrDraggable", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('initContent'),
    __metadata("design:type", Function)
], jqxWindowComponent.prototype, "attrInitContent", void 0);
__decorate([
    Input('isModal'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrIsModal", void 0);
__decorate([
    Input('keyboardCloseKey'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrKeyboardCloseKey", void 0);
__decorate([
    Input('keyboardNavigation'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrKeyboardNavigation", void 0);
__decorate([
    Input('minHeight'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrMinHeight", void 0);
__decorate([
    Input('maxHeight'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrMaxHeight", void 0);
__decorate([
    Input('minWidth'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrMinWidth", void 0);
__decorate([
    Input('maxWidth'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrMaxWidth", void 0);
__decorate([
    Input('modalOpacity'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrModalOpacity", void 0);
__decorate([
    Input('modalZIndex'),
    __metadata("design:type", Number)
], jqxWindowComponent.prototype, "attrModalZIndex", void 0);
__decorate([
    Input('modalBackgroundZIndex'),
    __metadata("design:type", Number)
], jqxWindowComponent.prototype, "attrModalBackgroundZIndex", void 0);
__decorate([
    Input('okButton'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrOkButton", void 0);
__decorate([
    Input('position'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrPosition", void 0);
__decorate([
    Input('rtl'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrRtl", void 0);
__decorate([
    Input('resizable'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrResizable", void 0);
__decorate([
    Input('showAnimationDuration'),
    __metadata("design:type", Number)
], jqxWindowComponent.prototype, "attrShowAnimationDuration", void 0);
__decorate([
    Input('showCloseButton'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrShowCloseButton", void 0);
__decorate([
    Input('showCollapseButton'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "attrShowCollapseButton", void 0);
__decorate([
    Input('theme'),
    __metadata("design:type", String)
], jqxWindowComponent.prototype, "attrTheme", void 0);
__decorate([
    Input('title'),
    __metadata("design:type", String)
], jqxWindowComponent.prototype, "attrTitle", void 0);
__decorate([
    Input('zIndex'),
    __metadata("design:type", Number)
], jqxWindowComponent.prototype, "attrZIndex", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxWindowComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onClose", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onExpand", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onMoving", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onMoved", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onOpen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onResizing", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxWindowComponent.prototype, "onResized", void 0);
jqxWindowComponent = __decorate([
    Component({
        selector: 'jqxWindow',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxWindowComponent);

let jqxWindowModule = class jqxWindowModule {
};
jqxWindowModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxWindowComponent],
        exports: [jqxWindowComponent]
    })
], jqxWindowModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxWindowComponent, jqxWindowModule };
