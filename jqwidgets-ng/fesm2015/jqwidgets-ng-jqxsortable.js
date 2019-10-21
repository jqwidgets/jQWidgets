import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxsortable';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxSortableComponent = class jqxSortableComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'axis', 'cancel', 'connectWith', 'containment', 'cursor', 'cursorAt', 'delay', 'disabled', 'distance', 'dropOnEmpty', 'forceHelperSize', 'forcePlaceholderSize', 'grid', 'handle', 'helper', 'items', 'opacity', 'placeholderShow', 'revert', 'scroll', 'scrollSensitivity', 'scrollSpeed', 'tolerance', 'zIndex'];
        // jqxSortableComponent events
        this.onActivate = new EventEmitter();
        this.onBeforeStop = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onOut = new EventEmitter();
        this.onOver = new EventEmitter();
        this.onReceive = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onStart = new EventEmitter();
        this.onStop = new EventEmitter();
        this.onUpdate = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSortable(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSortable(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSortable(this.properties[i])) {
                        this.host.jqxSortable(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSortable', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxSortable('setOptions', options);
    }
    // jqxSortableComponent properties
    appendTo(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('appendTo', arg);
        }
        else {
            return this.host.jqxSortable('appendTo');
        }
    }
    axis(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('axis', arg);
        }
        else {
            return this.host.jqxSortable('axis');
        }
    }
    cancel(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cancel', arg);
        }
        else {
            return this.host.jqxSortable('cancel');
        }
    }
    connectWith(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('connectWith', arg);
        }
        else {
            return this.host.jqxSortable('connectWith');
        }
    }
    containment(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('containment', arg);
        }
        else {
            return this.host.jqxSortable('containment');
        }
    }
    cursor(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cursor', arg);
        }
        else {
            return this.host.jqxSortable('cursor');
        }
    }
    cursorAt(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cursorAt', arg);
        }
        else {
            return this.host.jqxSortable('cursorAt');
        }
    }
    delay(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('delay', arg);
        }
        else {
            return this.host.jqxSortable('delay');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('disabled', arg);
        }
        else {
            return this.host.jqxSortable('disabled');
        }
    }
    distance(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('distance', arg);
        }
        else {
            return this.host.jqxSortable('distance');
        }
    }
    dropOnEmpty(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('dropOnEmpty', arg);
        }
        else {
            return this.host.jqxSortable('dropOnEmpty');
        }
    }
    forceHelperSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('forceHelperSize', arg);
        }
        else {
            return this.host.jqxSortable('forceHelperSize');
        }
    }
    forcePlaceholderSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('forcePlaceholderSize', arg);
        }
        else {
            return this.host.jqxSortable('forcePlaceholderSize');
        }
    }
    grid(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('grid', arg);
        }
        else {
            return this.host.jqxSortable('grid');
        }
    }
    handle(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('handle', arg);
        }
        else {
            return this.host.jqxSortable('handle');
        }
    }
    helper(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('helper', arg);
        }
        else {
            return this.host.jqxSortable('helper');
        }
    }
    items(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('items', arg);
        }
        else {
            return this.host.jqxSortable('items');
        }
    }
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('opacity', arg);
        }
        else {
            return this.host.jqxSortable('opacity');
        }
    }
    placeholderShow(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('placeholderShow', arg);
        }
        else {
            return this.host.jqxSortable('placeholderShow');
        }
    }
    revert(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('revert', arg);
        }
        else {
            return this.host.jqxSortable('revert');
        }
    }
    scroll(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scroll', arg);
        }
        else {
            return this.host.jqxSortable('scroll');
        }
    }
    scrollSensitivity(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scrollSensitivity', arg);
        }
        else {
            return this.host.jqxSortable('scrollSensitivity');
        }
    }
    scrollSpeed(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scrollSpeed', arg);
        }
        else {
            return this.host.jqxSortable('scrollSpeed');
        }
    }
    tolerance(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('tolerance', arg);
        }
        else {
            return this.host.jqxSortable('tolerance');
        }
    }
    zIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('zIndex', arg);
        }
        else {
            return this.host.jqxSortable('zIndex');
        }
    }
    // jqxSortableComponent functions
    cancelMethod() {
        this.host.jqxSortable('cancelMethod');
    }
    destroy() {
        this.host.jqxSortable('destroy');
    }
    disable() {
        this.host.jqxSortable('disable');
    }
    enable() {
        this.host.jqxSortable('enable');
    }
    refresh() {
        this.host.jqxSortable('refresh');
    }
    refreshPositions() {
        this.host.jqxSortable('refreshPositions');
    }
    serialize(object) {
        return this.host.jqxSortable('serialize', object);
    }
    toArray() {
        return this.host.jqxSortable('toArray');
    }
    __wireEvents__() {
        this.host.on('activate', (eventData) => { this.onActivate.emit(eventData); });
        this.host.on('beforeStop', (eventData) => { this.onBeforeStop.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('deactivate', (eventData) => { this.onDeactivate.emit(eventData); });
        this.host.on('out', (eventData) => { this.onOut.emit(eventData); });
        this.host.on('over', (eventData) => { this.onOver.emit(eventData); });
        this.host.on('receive', (eventData) => { this.onReceive.emit(eventData); });
        this.host.on('remove', (eventData) => { this.onRemove.emit(eventData); });
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
        this.host.on('start', (eventData) => { this.onStart.emit(eventData); });
        this.host.on('stop', (eventData) => { this.onStop.emit(eventData); });
        this.host.on('update', (eventData) => { this.onUpdate.emit(eventData); });
    }
}; //jqxSortableComponent
jqxSortableComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('appendTo'),
    __metadata("design:type", String)
], jqxSortableComponent.prototype, "attrAppendTo", void 0);
__decorate([
    Input('axis'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrAxis", void 0);
__decorate([
    Input('cancel'),
    __metadata("design:type", String)
], jqxSortableComponent.prototype, "attrCancel", void 0);
__decorate([
    Input('connectWith'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrConnectWith", void 0);
__decorate([
    Input('containment'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrContainment", void 0);
__decorate([
    Input('cursor'),
    __metadata("design:type", String)
], jqxSortableComponent.prototype, "attrCursor", void 0);
__decorate([
    Input('cursorAt'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrCursorAt", void 0);
__decorate([
    Input('delay'),
    __metadata("design:type", Number)
], jqxSortableComponent.prototype, "attrDelay", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxSortableComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('distance'),
    __metadata("design:type", Number)
], jqxSortableComponent.prototype, "attrDistance", void 0);
__decorate([
    Input('dropOnEmpty'),
    __metadata("design:type", Boolean)
], jqxSortableComponent.prototype, "attrDropOnEmpty", void 0);
__decorate([
    Input('forceHelperSize'),
    __metadata("design:type", Boolean)
], jqxSortableComponent.prototype, "attrForceHelperSize", void 0);
__decorate([
    Input('forcePlaceholderSize'),
    __metadata("design:type", Boolean)
], jqxSortableComponent.prototype, "attrForcePlaceholderSize", void 0);
__decorate([
    Input('grid'),
    __metadata("design:type", Array)
], jqxSortableComponent.prototype, "attrGrid", void 0);
__decorate([
    Input('handle'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrHandle", void 0);
__decorate([
    Input('helper'),
    __metadata("design:type", Function)
], jqxSortableComponent.prototype, "attrHelper", void 0);
__decorate([
    Input('items'),
    __metadata("design:type", String)
], jqxSortableComponent.prototype, "attrItems", void 0);
__decorate([
    Input('opacity'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrOpacity", void 0);
__decorate([
    Input('placeholderShow'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrPlaceholderShow", void 0);
__decorate([
    Input('revert'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrRevert", void 0);
__decorate([
    Input('scroll'),
    __metadata("design:type", Boolean)
], jqxSortableComponent.prototype, "attrScroll", void 0);
__decorate([
    Input('scrollSensitivity'),
    __metadata("design:type", Number)
], jqxSortableComponent.prototype, "attrScrollSensitivity", void 0);
__decorate([
    Input('scrollSpeed'),
    __metadata("design:type", Number)
], jqxSortableComponent.prototype, "attrScrollSpeed", void 0);
__decorate([
    Input('tolerance'),
    __metadata("design:type", String)
], jqxSortableComponent.prototype, "attrTolerance", void 0);
__decorate([
    Input('zIndex'),
    __metadata("design:type", Number)
], jqxSortableComponent.prototype, "attrZIndex", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxSortableComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onActivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onBeforeStop", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onDeactivate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onOut", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onOver", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onReceive", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onRemove", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onSort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onStop", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxSortableComponent.prototype, "onUpdate", void 0);
jqxSortableComponent = __decorate([
    Component({
        selector: 'jqxSortable',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxSortableComponent);

let jqxSortableModule = class jqxSortableModule {
};
jqxSortableModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxSortableComponent],
        exports: [jqxSortableComponent]
    })
], jqxSortableModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxSortableComponent, jqxSortableModule };
