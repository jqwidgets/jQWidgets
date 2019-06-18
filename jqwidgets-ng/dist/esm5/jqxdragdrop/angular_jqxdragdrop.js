import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxdragdrop from '../../jqwidgets-scripts/jqwidgets/jqxdragdrop';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxDragDropComponent = /** @class */ (function () {
    function jqxDragDropComponent(containerElement) {
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
    jqxDragDropComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxDragDropComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
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
    };
    jqxDragDropComponent.prototype.arraysEqual = function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    jqxDragDropComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDragDropComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxDragDropComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxDragDropComponent.prototype.createComponent = function (options) {
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
    };
    jqxDragDropComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDragDropComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDragDropComponent.prototype.setOptions = function (options) {
        this.host.jqxDragDrop('setOptions', options);
    };
    // jqxDragDropComponent properties
    jqxDragDropComponent.prototype.appendTo = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('appendTo', arg);
        }
        else {
            return this.host.jqxDragDrop('appendTo');
        }
    };
    jqxDragDropComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('disabled', arg);
        }
        else {
            return this.host.jqxDragDrop('disabled');
        }
    };
    jqxDragDropComponent.prototype.distance = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('distance', arg);
        }
        else {
            return this.host.jqxDragDrop('distance');
        }
    };
    jqxDragDropComponent.prototype.data = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('data', arg);
        }
        else {
            return this.host.jqxDragDrop('data');
        }
    };
    jqxDragDropComponent.prototype.dropAction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropAction', arg);
        }
        else {
            return this.host.jqxDragDrop('dropAction');
        }
    };
    jqxDragDropComponent.prototype.dropTarget = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropTarget', arg);
        }
        else {
            return this.host.jqxDragDrop('dropTarget');
        }
    };
    jqxDragDropComponent.prototype.dragZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dragZIndex', arg);
        }
        else {
            return this.host.jqxDragDrop('dragZIndex');
        }
    };
    jqxDragDropComponent.prototype.feedback = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('feedback', arg);
        }
        else {
            return this.host.jqxDragDrop('feedback');
        }
    };
    jqxDragDropComponent.prototype.initFeedback = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('initFeedback', arg);
        }
        else {
            return this.host.jqxDragDrop('initFeedback');
        }
    };
    jqxDragDropComponent.prototype.opacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('opacity', arg);
        }
        else {
            return this.host.jqxDragDrop('opacity');
        }
    };
    jqxDragDropComponent.prototype.onDragEnd = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragEnd', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragEnd');
        }
    };
    jqxDragDropComponent.prototype.onDrag = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDrag', arg);
        }
        else {
            return this.host.jqxDragDrop('onDrag');
        }
    };
    jqxDragDropComponent.prototype.onDragStart = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragStart', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragStart');
        }
    };
    jqxDragDropComponent.prototype.onTargetDrop = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onTargetDrop', arg);
        }
        else {
            return this.host.jqxDragDrop('onTargetDrop');
        }
    };
    jqxDragDropComponent.prototype.onDropTargetEnter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetEnter', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetEnter');
        }
    };
    jqxDragDropComponent.prototype.onDropTargetLeave = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetLeave', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetLeave');
        }
    };
    jqxDragDropComponent.prototype.restricter = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('restricter', arg);
        }
        else {
            return this.host.jqxDragDrop('restricter');
        }
    };
    jqxDragDropComponent.prototype.revert = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revert', arg);
        }
        else {
            return this.host.jqxDragDrop('revert');
        }
    };
    jqxDragDropComponent.prototype.revertDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revertDuration', arg);
        }
        else {
            return this.host.jqxDragDrop('revertDuration');
        }
    };
    jqxDragDropComponent.prototype.tolerance = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('tolerance', arg);
        }
        else {
            return this.host.jqxDragDrop('tolerance');
        }
    };
    jqxDragDropComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('dragStart', function (eventData) { _this.ondragstart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.ondragend.emit(eventData); });
        this.host.on('dragging', function (eventData) { _this.ondragging.emit(eventData); });
        this.host.on('dropTargetEnter', function (eventData) { _this.ondroptargetenter.emit(eventData); });
        this.host.on('dropTargetLeave', function (eventData) { _this.ondroptargetleave.emit(eventData); });
    };
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
    return jqxDragDropComponent;
}()); //jqxDragDropComponent
export { jqxDragDropComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkcmFnZHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2pxd2lkZ2V0cy1uZy9qcXhkcmFnZHJvcC8iLCJzb3VyY2VzIjpbImFuZ3VsYXJfanF4ZHJhZ2Ryb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUFnQ0csOEJBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBb1J6UixpQ0FBaUM7UUFHakMsOEJBQThCO1FBQ3BCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF0UjlDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFFRiww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RTs7NkRBQWtDO0lBQ2pDO1FBQVQsTUFBTSxFQUFFOzsyREFBZ0M7SUFDL0I7UUFBVCxNQUFNLEVBQUU7OzREQUFpQztJQUNoQztRQUFULE1BQU0sRUFBRTs7bUVBQXdDO0lBQ3ZDO1FBQVQsTUFBTSxFQUFFOzttRUFBd0M7SUF2VHZDLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsc0NBQXNDO1NBQ25ELENBQUM7aURBa0MrQixVQUFVO09BaEM5QixvQkFBb0IsQ0FpVWhDO0lBQUQsMkJBQUM7Q0FBQSxBQWpVRCxJQWlVQyxDQUFDLHNCQUFzQjtTQWpVWCxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeERyYWdEcm9wJyxcbiAgICB0ZW1wbGF0ZTogJzxkaXY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBqcXhEcmFnRHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc1xue1xuICAgQElucHV0KCdhcHBlbmRUbycpIGF0dHJBcHBlbmRUbzogc3RyaW5nO1xuICAgQElucHV0KCdkaXNhYmxlZCcpIGF0dHJEaXNhYmxlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnZGlzdGFuY2UnKSBhdHRyRGlzdGFuY2U6IG51bWJlcjtcbiAgIEBJbnB1dCgnZGF0YScpIGF0dHJEYXRhOiBhbnk7XG4gICBASW5wdXQoJ2Ryb3BBY3Rpb24nKSBhdHRyRHJvcEFjdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdkcm9wVGFyZ2V0JykgYXR0ckRyb3BUYXJnZXQ6IGFueTtcbiAgIEBJbnB1dCgnZHJhZ1pJbmRleCcpIGF0dHJEcmFnWkluZGV4OiBudW1iZXI7XG4gICBASW5wdXQoJ2ZlZWRiYWNrJykgYXR0ckZlZWRiYWNrOiBzdHJpbmc7XG4gICBASW5wdXQoJ2luaXRGZWVkYmFjaycpIGF0dHJJbml0RmVlZGJhY2s6IChmZWVkYmFjaz86YW55KSA9PiB2b2lkO1xuICAgQElucHV0KCdvcGFjaXR5JykgYXR0ck9wYWNpdHk6IG51bWJlcjtcbiAgIEBJbnB1dCgnb25EcmFnRW5kJykgYXR0ck9uRHJhZ0VuZDogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnb25EcmFnJykgYXR0ck9uRHJhZzogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdbJ2RhdGEnXSwgcG9zaXRpb24/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdbJ3Bvc2l0aW9uJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ29uRHJhZ1N0YXJ0JykgYXR0ck9uRHJhZ1N0YXJ0OiAocG9zaXRpb24/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdTdGFydFsncG9zaXRpb24nXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnb25UYXJnZXREcm9wJykgYXR0ck9uVGFyZ2V0RHJvcDogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPblRhcmdldERyb3BbJ2RhdGEnXSkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnb25Ecm9wVGFyZ2V0RW50ZXInKSBhdHRyT25Ecm9wVGFyZ2V0RW50ZXI6ICgpID0+IHZvaWQ7XG4gICBASW5wdXQoJ29uRHJvcFRhcmdldExlYXZlJykgYXR0ck9uRHJvcFRhcmdldExlYXZlOiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJvcFRhcmdldExlYXZlWydkYXRhJ10pID0+IHZvaWQ7XG4gICBASW5wdXQoJ3Jlc3RyaWN0ZXInKSBhdHRyUmVzdHJpY3Rlcjogc3RyaW5nIHwgb2JqZWN0O1xuICAgQElucHV0KCdyZXZlcnQnKSBhdHRyUmV2ZXJ0OiBib29sZWFuO1xuICAgQElucHV0KCdyZXZlcnREdXJhdGlvbicpIGF0dHJSZXZlcnREdXJhdGlvbjogbnVtYmVyO1xuICAgQElucHV0KCd0b2xlcmFuY2UnKSBhdHRyVG9sZXJhbmNlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXBwZW5kVG8nLCdkaXNhYmxlZCcsJ2Rpc3RhbmNlJywnZGF0YScsJ2Ryb3BBY3Rpb24nLCdkcm9wVGFyZ2V0JywnZHJhZ1pJbmRleCcsJ2ZlZWRiYWNrJywnaW5pdEZlZWRiYWNrJywnb3BhY2l0eScsJ29uRHJhZ0VuZCcsJ29uRHJhZycsJ29uRHJhZ1N0YXJ0Jywnb25UYXJnZXREcm9wJywnb25Ecm9wVGFyZ2V0RW50ZXInLCdvbkRyb3BUYXJnZXRMZWF2ZScsJ3Jlc3RyaWN0ZXInLCdyZXZlcnQnLCdyZXZlcnREdXJhdGlvbicsJ3RvbGVyYW5jZSddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhEcmFnRHJvcDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhEcmFnRHJvcCcsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhEcmFnRHJvcENvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBhcHBlbmRUbyhhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdhcHBlbmRUbycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2FwcGVuZFRvJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXN0YW5jZShhcmc/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkaXN0YW5jZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2Rpc3RhbmNlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRhdGEoYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZGF0YScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2RhdGEnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJvcEFjdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkcm9wQWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZHJvcEFjdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcm9wVGFyZ2V0KGFyZz86IGFueSk6IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2Ryb3BUYXJnZXQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdkcm9wVGFyZ2V0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRyYWdaSW5kZXgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZHJhZ1pJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2RyYWdaSW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmVlZGJhY2soYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnZmVlZGJhY2snLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdmZWVkYmFjaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBpbml0RmVlZGJhY2soYXJnPzogKGZlZWRiYWNrPzphbnkpID0+IHZvaWQpOiAoZmVlZGJhY2s/OmFueSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2luaXRGZWVkYmFjaycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ2luaXRGZWVkYmFjaycpO1xuICAgICAgfVxuICAgfVxuXG4gICBvcGFjaXR5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29wYWNpdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvcGFjaXR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uRHJhZ0VuZChhcmc/OiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJhZ0VuZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJhZ0VuZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkRyYWcoYXJnPzogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdbJ2RhdGEnXSwgcG9zaXRpb24/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdbJ3Bvc2l0aW9uJ10pID0+IHZvaWQpOiAoZGF0YT86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1snZGF0YSddLCBwb3NpdGlvbj86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1sncG9zaXRpb24nXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJhZycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJhZycpO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkRyYWdTdGFydChhcmc/OiAocG9zaXRpb24/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPbkRyYWdTdGFydFsncG9zaXRpb24nXSkgPT4gdm9pZCk6IChwb3NpdGlvbj86IGpxd2lkZ2V0cy5EcmFnRHJvcE9uRHJhZ1N0YXJ0Wydwb3NpdGlvbiddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25EcmFnU3RhcnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyYWdTdGFydCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBvblRhcmdldERyb3AoYXJnPzogKGRhdGE/OiBqcXdpZGdldHMuRHJhZ0Ryb3BPblRhcmdldERyb3BbJ2RhdGEnXSkgPT4gdm9pZCk6IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25UYXJnZXREcm9wWydkYXRhJ10pID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvblRhcmdldERyb3AnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvblRhcmdldERyb3AnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25Ecm9wVGFyZ2V0RW50ZXIoYXJnPzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdvbkRyb3BUYXJnZXRFbnRlcicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJvcFRhcmdldEVudGVyJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uRHJvcFRhcmdldExlYXZlKGFyZz86IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25Ecm9wVGFyZ2V0TGVhdmVbJ2RhdGEnXSkgPT4gdm9pZCk6IChkYXRhPzoganF3aWRnZXRzLkRyYWdEcm9wT25Ecm9wVGFyZ2V0TGVhdmVbJ2RhdGEnXSkgPT4gdm9pZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RHJhZ0Ryb3AoJ29uRHJvcFRhcmdldExlYXZlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgnb25Ecm9wVGFyZ2V0TGVhdmUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmVzdHJpY3Rlcihhcmc/OiBzdHJpbmcgfCBvYmplY3QpOiBzdHJpbmcgfCBvYmplY3Qge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdyZXN0cmljdGVyJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgncmVzdHJpY3RlcicpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXZlcnQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdyZXZlcnQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdyZXZlcnQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcmV2ZXJ0RHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgncmV2ZXJ0RHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERyYWdEcm9wKCdyZXZlcnREdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICB0b2xlcmFuY2UoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgndG9sZXJhbmNlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEcmFnRHJvcCgndG9sZXJhbmNlJyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4RHJhZ0Ryb3BDb21wb25lbnQgZnVuY3Rpb25zXG5cblxuICAgLy8ganF4RHJhZ0Ryb3BDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25kcmFnc3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25kcmFnZW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uZHJhZ2dpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25kcm9wdGFyZ2V0ZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25kcm9wdGFyZ2V0bGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIF9fd2lyZUV2ZW50c19fKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnU3RhcnQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbmRyYWdzdGFydC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcmFnRW5kJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25kcmFnZW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdnaW5nJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25kcmFnZ2luZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcm9wVGFyZ2V0RW50ZXInLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbmRyb3B0YXJnZXRlbnRlci5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdkcm9wVGFyZ2V0TGVhdmUnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbmRyb3B0YXJnZXRsZWF2ZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4RHJhZ0Ryb3BDb21wb25lbnRcbiJdfQ==