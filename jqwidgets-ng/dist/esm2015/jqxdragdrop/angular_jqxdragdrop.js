import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
tslib_1.__decorate([
    Input('appendTo'),
    tslib_1.__metadata("design:type", String)
], jqxDragDropComponent.prototype, "attrAppendTo", void 0);
tslib_1.__decorate([
    Input('disabled'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDragDropComponent.prototype, "attrDisabled", void 0);
tslib_1.__decorate([
    Input('distance'),
    tslib_1.__metadata("design:type", Number)
], jqxDragDropComponent.prototype, "attrDistance", void 0);
tslib_1.__decorate([
    Input('data'),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrData", void 0);
tslib_1.__decorate([
    Input('dropAction'),
    tslib_1.__metadata("design:type", String)
], jqxDragDropComponent.prototype, "attrDropAction", void 0);
tslib_1.__decorate([
    Input('dropTarget'),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrDropTarget", void 0);
tslib_1.__decorate([
    Input('dragZIndex'),
    tslib_1.__metadata("design:type", Number)
], jqxDragDropComponent.prototype, "attrDragZIndex", void 0);
tslib_1.__decorate([
    Input('feedback'),
    tslib_1.__metadata("design:type", String)
], jqxDragDropComponent.prototype, "attrFeedback", void 0);
tslib_1.__decorate([
    Input('initFeedback'),
    tslib_1.__metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrInitFeedback", void 0);
tslib_1.__decorate([
    Input('opacity'),
    tslib_1.__metadata("design:type", Number)
], jqxDragDropComponent.prototype, "attrOpacity", void 0);
tslib_1.__decorate([
    Input('onDragEnd'),
    tslib_1.__metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDragEnd", void 0);
tslib_1.__decorate([
    Input('onDrag'),
    tslib_1.__metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDrag", void 0);
tslib_1.__decorate([
    Input('onDragStart'),
    tslib_1.__metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDragStart", void 0);
tslib_1.__decorate([
    Input('onTargetDrop'),
    tslib_1.__metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnTargetDrop", void 0);
tslib_1.__decorate([
    Input('onDropTargetEnter'),
    tslib_1.__metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDropTargetEnter", void 0);
tslib_1.__decorate([
    Input('onDropTargetLeave'),
    tslib_1.__metadata("design:type", Function)
], jqxDragDropComponent.prototype, "attrOnDropTargetLeave", void 0);
tslib_1.__decorate([
    Input('restricter'),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrRestricter", void 0);
tslib_1.__decorate([
    Input('revert'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDragDropComponent.prototype, "attrRevert", void 0);
tslib_1.__decorate([
    Input('revertDuration'),
    tslib_1.__metadata("design:type", Number)
], jqxDragDropComponent.prototype, "attrRevertDuration", void 0);
tslib_1.__decorate([
    Input('tolerance'),
    tslib_1.__metadata("design:type", String)
], jqxDragDropComponent.prototype, "attrTolerance", void 0);
tslib_1.__decorate([
    Input('width'),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrWidth", void 0);
tslib_1.__decorate([
    Input('height'),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "attrHeight", void 0);
tslib_1.__decorate([
    Input('auto-create'),
    tslib_1.__metadata("design:type", Boolean)
], jqxDragDropComponent.prototype, "autoCreate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragstart", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragend", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondragging", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondroptargetenter", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], jqxDragDropComponent.prototype, "ondroptargetleave", void 0);
jqxDragDropComponent = tslib_1.__decorate([
    Component({
        selector: 'jqxDragDrop',
        template: '<div><ng-content></ng-content></div>'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], jqxDragDropComponent);
export { jqxDragDropComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkcmFnZHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhkcmFnZHJvcC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4ZHJhZ2Ryb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0csSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFnQzlCLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBb1J6UixpQ0FBaUM7UUFHakMsOEJBQThCO1FBQ3BCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF0UjlDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQztJQUVELFFBQVE7UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lB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VCxNQUFNLEVBQUU7OytEQUF3QztBQXZUdkMsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxzQ0FBc0M7S0FDbkQsQ0FBQzs2Q0FrQytCLFVBQVU7R0FoQzlCLG9CQUFvQixDQWlVaEM7U0FqVVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vanF3aWRnZXRzLmQudHNcIiAvPlxuXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmRlY2xhcmUgbGV0IEpRWExpdGU6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqcXhEcmFnRHJvcCcsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4RHJhZ0Ryb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYXBwZW5kVG8nKSBhdHRyQXBwZW5kVG86IHN0cmluZztcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Rpc3RhbmNlJykgYXR0ckRpc3RhbmNlOiBudW1iZXI7XG4gICBASW5wdXQoJ2RhdGEnKSBhdHRyRGF0YTogYW55O1xuICAgQElucHV0KCdkcm9wQWN0aW9uJykgYXR0ckRyb3BBY3Rpb246IHN0cmluZztcbiAgIEBJbnB1dCgnZHJvcFRhcmdldCcpIGF0dHJEcm9wVGFyZ2V0OiBhbnk7XG4gICBASW5wdXQoJ2RyYWdaSW5kZXgnKSBhdHRyRHJhZ1pJbmRleDogbnVtYmVyO1xuICAgQElucHV0KCdmZWVkYmFjaycpIGF0dHJGZWVkYmFjazogc3RyaW5nO1xuICAgQElucHV0KCdpbml0RmVlZGJhY2snKSBhdHRySW5pdEZlZWRiYWNrOiAoZmVlZGJhY2s/OmFueSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnb3BhY2l0eScpIGF0dHJPcGFjaXR5OiBudW1iZXI7XG4gICBASW5wdXQoJ29uRHJhZ0VuZCcpIGF0dHJPbkRyYWdFbmQ6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ29uRHJhZycpIGF0dHJPbkRyYWc6IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnWydkYXRhJ10sIHBvc2l0aW9uPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnWydwb3NpdGlvbiddKSA9PiB2b2lkO1xuICAgQElucHV0KCdvbkRyYWdTdGFydCcpIGF0dHJPbkRyYWdTdGFydDogKHBvc2l0aW9uPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnU3RhcnRbJ3Bvc2l0aW9uJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ29uVGFyZ2V0RHJvcCcpIGF0dHJPblRhcmdldERyb3A6IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25UYXJnZXREcm9wWydkYXRhJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ29uRHJvcFRhcmdldEVudGVyJykgYXR0ck9uRHJvcFRhcmdldEVudGVyOiAoKSA9PiB2b2lkO1xuICAgQElucHV0KCdvbkRyb3BUYXJnZXRMZWF2ZScpIGF0dHJPbkRyb3BUYXJnZXRMZWF2ZTogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyb3BUYXJnZXRMZWF2ZVsnZGF0YSddKSA9PiB2b2lkO1xuICAgQElucHV0KCdyZXN0cmljdGVyJykgYXR0clJlc3RyaWN0ZXI6IHN0cmluZyB8IG9iamVjdDtcbiAgIEBJbnB1dCgncmV2ZXJ0JykgYXR0clJldmVydDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmV2ZXJ0RHVyYXRpb24nKSBhdHRyUmV2ZXJ0RHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgndG9sZXJhbmNlJykgYXR0clRvbGVyYW5jZTogc3RyaW5nO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2FwcGVuZFRvJywnZGlzYWJsZWQnLCdkaXN0YW5jZScsJ2RhdGEnLCdkcm9wQWN0aW9uJywnZHJvcFRhcmdldCcsJ2RyYWdaSW5kZXgnLCdmZWVkYmFjaycsJ2luaXRGZWVkYmFjaycsJ29wYWNpdHknLCdvbkRyYWdFbmQnLCdvbkRyYWcnLCdvbkRyYWdTdGFydCcsJ29uVGFyZ2V0RHJvcCcsJ29uRHJvcFRhcmdldEVudGVyJywnb25Ecm9wVGFyZ2V0TGVhdmUnLCdyZXN0cmljdGVyJywncmV2ZXJ0JywncmV2ZXJ0RHVyYXRpb24nLCd0b2xlcmFuY2UnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4RHJhZ0Ryb3A7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AodGhpcy5wcm9wZXJ0aWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoYXJlRXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeERyYWdEcm9wKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTsgXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGFycmF5c0VxdWFsKGF0dHJWYWx1ZTogYW55LCBob3N0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgaWYgKChhdHRyVmFsdWUgJiYgIWhvc3RWYWx1ZSkgfHwgKCFhdHRyVmFsdWUgJiYgaG9zdFZhbHVlKSkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJWYWx1ZS5sZW5ndGggIT0gaG9zdFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGlmIChhdHRyVmFsdWVbaV0gIT09IGhvc3RWYWx1ZVtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICB9XG5cbiAgIG1hbmFnZUF0dHJpYnV0ZXMoKTogYW55IHtcbiAgICAgIGxldCBvcHRpb25zID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMucHJvcGVydGllc1tpXV0gPSB0aGlzW2F0dHJOYW1lXTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBtb3ZlQ2xhc3NlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0gcGFyZW50RWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjaGlsZEVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgICBwYXJlbnRFbC5jbGFzc05hbWUgPSAnJztcbiAgIH1cblxuICAgbW92ZVN0eWxlcyhwYXJlbnRFbDogSFRNTEVsZW1lbnQsIGNoaWxkRWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBsZXQgc3R5bGUgPSBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0O1xuICAgICAgY2hpbGRFbC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVcbiAgICAgIHBhcmVudEVsLnN0eWxlLmNzc1RleHQgPSAnJztcbiAgIH1cblxuICAgY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICBKUVhMaXRlLmV4dGVuZChvcHRpb25zLCB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMubWFuYWdlQXR0cmlidXRlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5ob3N0ID0gSlFYTGl0ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcblxuICAgICAgdGhpcy5tb3ZlQ2xhc3Nlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcbiAgICAgIHRoaXMubW92ZVN0eWxlcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5ob3N0WzBdKTtcblxuICAgICAgdGhpcy5fX3dpcmVFdmVudHNfXygpO1xuICAgICAgdGhpcy53aWRnZXRPYmplY3QgPSBqcXdpZGdldHMuY3JlYXRlSW5zdGFuY2UodGhpcy5ob3N0LCAnanF4RHJhZ0Ryb3AnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4RHJhZ0Ryb3BDb21wb25lbnQgcHJvcGVydGllc1xuICAgYXBwZW5kVG8oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnYXBwZW5kVG8nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdhcHBlbmRUbycpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNhYmxlZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzdGFuY2UoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZGlzdGFuY2UnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkaXN0YW5jZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBkYXRhKGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2RhdGEnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkYXRhJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyb3BBY3Rpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZHJvcEFjdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2Ryb3BBY3Rpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJvcFRhcmdldChhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkcm9wVGFyZ2V0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZHJvcFRhcmdldCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmFnWkluZGV4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2RyYWdaSW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkcmFnWkluZGV4Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGZlZWRiYWNrKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2ZlZWRiYWNrJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZmVlZGJhY2snKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaW5pdEZlZWRiYWNrKGFyZz86IChmZWVkYmFjaz86YW55KSA9PiB2b2lkKTogKGZlZWRiYWNrPzphbnkpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdpbml0RmVlZGJhY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdpbml0RmVlZGJhY2snKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb3BhY2l0eShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvcGFjaXR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb3BhY2l0eScpO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkRyYWdFbmQoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyYWdFbmQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyYWdFbmQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25EcmFnKGFyZz86IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnWydkYXRhJ10sIHBvc2l0aW9uPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnWydwb3NpdGlvbiddKSA9PiB2b2lkKTogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdbJ2RhdGEnXSwgcG9zaXRpb24/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdbJ3Bvc2l0aW9uJ10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyYWcnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyYWcnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25EcmFnU3RhcnQoYXJnPzogKHBvc2l0aW9uPzoganF3aWRnZXRzLkRyYWdEcm9wT25EcmFnU3RhcnRbJ3Bvc2l0aW9uJ10pID0+IHZvaWQpOiAocG9zaXRpb24/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdTdGFydFsncG9zaXRpb24nXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJhZ1N0YXJ0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25EcmFnU3RhcnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25UYXJnZXREcm9wKGFyZz86IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25UYXJnZXREcm9wWydkYXRhJ10pID0+IHZvaWQpOiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uVGFyZ2V0RHJvcFsnZGF0YSddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25UYXJnZXREcm9wJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25UYXJnZXREcm9wJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uRHJvcFRhcmdldEVudGVyKGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25Ecm9wVGFyZ2V0RW50ZXInLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyb3BUYXJnZXRFbnRlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkRyb3BUYXJnZXRMZWF2ZShhcmc/OiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJvcFRhcmdldExlYXZlWydkYXRhJ10pID0+IHZvaWQpOiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJvcFRhcmdldExlYXZlWydkYXRhJ10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyb3BUYXJnZXRMZWF2ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJvcFRhcmdldExlYXZlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJlc3RyaWN0ZXIoYXJnPzogc3RyaW5nIHwgb2JqZWN0KTogc3RyaW5nIHwgb2JqZWN0IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgncmVzdHJpY3RlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3Jlc3RyaWN0ZXInKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmV2ZXJ0KGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgncmV2ZXJ0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgncmV2ZXJ0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHJldmVydER1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3JldmVydER1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgncmV2ZXJ0RHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdG9sZXJhbmNlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3RvbGVyYW5jZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ3RvbGVyYW5jZScpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeERyYWdEcm9wQ29tcG9uZW50IGZ1bmN0aW9uc1xuXG5cbiAgIC8vIGpxeERyYWdEcm9wQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uZHJhZ3N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uZHJhZ2VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbmRyYWdnaW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uZHJvcHRhcmdldGVudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uZHJvcHRhcmdldGxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ1N0YXJ0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25kcmFnc3RhcnQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJhZ0VuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uZHJhZ2VuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnZ2luZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uZHJhZ2dpbmcuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJvcFRhcmdldEVudGVyJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25kcm9wdGFyZ2V0ZW50ZXIuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignZHJvcFRhcmdldExlYXZlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25kcm9wdGFyZ2V0bGVhdmUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeERyYWdEcm9wQ29tcG9uZW50XG4iXX0=