import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdragdrop';
import { __decorate, __metadata } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
let jqxDragDropComponent = class jqxDragDropComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'disabled', 'distance', 'data', 'dropAction', 'dropTarget', 'dragZIndex', 'feedback', 'initFeedback', 'opacity', 'onDragEnd', 'onDrag', 'onDragStart', 'onTargetDrop', 'onDropTargetEnter', 'onDropTargetLeave', 'restricter', 'revert', 'revertDuration', 'tolerance'];
        // jqxDragDropComponent functions
        // jqxDragDropComponent events
        this.ondragstart = new EventEmitter();
        this.ondragend = new EventEmitter();
        this.ondragging = new EventEmitter();
        this.ondroptargetenter = new EventEmitter();
        this.ondroptargetleave = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDragDrop(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDragDrop(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDragDrop(this.properties[i])) {
                        this.host.jqxDragDrop(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDragDrop', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDragDrop('setOptions', options);
    }
    // jqxDragDropComponent properties
    appendTo(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('appendTo', arg);
        }
        else {
            return this.host.jqxDragDrop('appendTo');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('disabled', arg);
        }
        else {
            return this.host.jqxDragDrop('disabled');
        }
    }
    distance(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('distance', arg);
        }
        else {
            return this.host.jqxDragDrop('distance');
        }
    }
    data(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('data', arg);
        }
        else {
            return this.host.jqxDragDrop('data');
        }
    }
    dropAction(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropAction', arg);
        }
        else {
            return this.host.jqxDragDrop('dropAction');
        }
    }
    dropTarget(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropTarget', arg);
        }
        else {
            return this.host.jqxDragDrop('dropTarget');
        }
    }
    dragZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dragZIndex', arg);
        }
        else {
            return this.host.jqxDragDrop('dragZIndex');
        }
    }
    feedback(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('feedback', arg);
        }
        else {
            return this.host.jqxDragDrop('feedback');
        }
    }
    initFeedback(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('initFeedback', arg);
        }
        else {
            return this.host.jqxDragDrop('initFeedback');
        }
    }
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('opacity', arg);
        }
        else {
            return this.host.jqxDragDrop('opacity');
        }
    }
    onDragEnd(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragEnd', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragEnd');
        }
    }
    onDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDrag', arg);
        }
        else {
            return this.host.jqxDragDrop('onDrag');
        }
    }
    onDragStart(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragStart', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragStart');
        }
    }
    onTargetDrop(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onTargetDrop', arg);
        }
        else {
            return this.host.jqxDragDrop('onTargetDrop');
        }
    }
    onDropTargetEnter(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetEnter', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetEnter');
        }
    }
    onDropTargetLeave(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetLeave', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetLeave');
        }
    }
    restricter(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('restricter', arg);
        }
        else {
            return this.host.jqxDragDrop('restricter');
        }
    }
    revert(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revert', arg);
        }
        else {
            return this.host.jqxDragDrop('revert');
        }
    }
    revertDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revertDuration', arg);
        }
        else {
            return this.host.jqxDragDrop('revertDuration');
        }
    }
    tolerance(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('tolerance', arg);
        }
        else {
            return this.host.jqxDragDrop('tolerance');
        }
    }
    __wireEvents__() {
        this.host.on('dragStart', (eventData) => { this.ondragstart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.ondragend.emit(eventData); });
        this.host.on('dragging', (eventData) => { this.ondragging.emit(eventData); });
        this.host.on('dropTargetEnter', (eventData) => { this.ondroptargetenter.emit(eventData); });
        this.host.on('dropTargetLeave', (eventData) => { this.ondroptargetleave.emit(eventData); });
    }
}; //jqxDragDropComponent
jqxDragDropComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('appendTo'),
    __metadata("design:type", String)
], jqxDragDropComponent.prototype, "attrAppendTo", void 0);
__decorate([
    Input('disabled'),
    __metadata("design:type", Boolean)
], jqxDragDropComponent.prototype, "attrDisabled", void 0);
__decorate([
    Input('distance'),
    __metadata("design:type", Number)
], jqxDragDropComponent.prototype, "attrDistance", void 0);
__decorate([
    Input('data'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrData", void 0);
__decorate([
    Input('dropAction'),
    __metadata("design:type", String)
], jqxDragDropComponent.prototype, "attrDropAction", void 0);
__decorate([
    Input('dropTarget'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrDropTarget", void 0);
__decorate([
    Input('dragZIndex'),
    __metadata("design:type", Number)
], jqxDragDropComponent.prototype, "attrDragZIndex", void 0);
__decorate([
    Input('feedback'),
    __metadata("design:type", String)
], jqxDragDropComponent.prototype, "attrFeedback", void 0);
__decorate([
    Input('initFeedback'),
    __metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrInitFeedback", void 0);
__decorate([
    Input('opacity'),
    __metadata("design:type", Number)
], jqxDragDropComponent.prototype, "attrOpacity", void 0);
__decorate([
    Input('onDragEnd'),
    __metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDragEnd", void 0);
__decorate([
    Input('onDrag'),
    __metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDrag", void 0);
__decorate([
    Input('onDragStart'),
    __metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDragStart", void 0);
__decorate([
    Input('onTargetDrop'),
    __metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnTargetDrop", void 0);
__decorate([
    Input('onDropTargetEnter'),
    __metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDropTargetEnter", void 0);
__decorate([
    Input('onDropTargetLeave'),
    __metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDropTargetLeave", void 0);
__decorate([
    Input('restricter'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrRestricter", void 0);
__decorate([
    Input('revert'),
    __metadata("design:type", Boolean)
], jqxDragDropComponent.prototype, "attrRevert", void 0);
__decorate([
    Input('revertDuration'),
    __metadata("design:type", Number)
], jqxDragDropComponent.prototype, "attrRevertDuration", void 0);
__decorate([
    Input('tolerance'),
    __metadata("design:type", String)
], jqxDragDropComponent.prototype, "attrTolerance", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrWidth", void 0);
__decorate([
    Input('height'),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrHeight", void 0);
__decorate([
    Input('auto-create'),
    __metadata("design:type", Boolean)
], jqxDragDropComponent.prototype, "autoCreate", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragstart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragend", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragging", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondroptargetenter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondroptargetleave", void 0);
jqxDragDropComponent = __decorate([
    Component({
        selector: 'jqxDragDrop',
        template: '<div><ng-content></ng-content></div>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], jqxDragDropComponent);

let jqxDragDropModule = class jqxDragDropModule {
};
jqxDragDropModule = __decorate([
    NgModule({
        imports: [],
        declarations: [jqxDragDropComponent],
        exports: [jqxDragDropComponent]
    })
], jqxDragDropModule);

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDragDropComponent, jqxDragDropModule };
