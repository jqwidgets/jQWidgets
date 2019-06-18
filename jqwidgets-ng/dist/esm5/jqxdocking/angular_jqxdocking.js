import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
import * as jqxdocking from '../../jqwidgets-scripts/jqwidgets/jqxdocking';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxDockingComponent = /** @class */ (function () {
    function jqxDockingComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['cookies', 'cookieOptions', 'disabled', 'floatingWindowOpacity', 'height', 'keyboardNavigation', 'mode', 'orientation', 'rtl', 'theme', 'width', 'windowsMode', 'windowsOffset'];
        // jqxDockingComponent events
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxDockingComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxDockingComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDocking(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDocking(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDocking(this.properties[i])) {
                        this.host.jqxDocking(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDockingComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxDockingComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDockingComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxDockingComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxDockingComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDocking', options);
    };
    jqxDockingComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDockingComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDockingComponent.prototype.setOptions = function (options) {
        this.host.jqxDocking('setOptions', options);
    };
    // jqxDockingComponent properties
    jqxDockingComponent.prototype.cookies = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookies', arg);
        }
        else {
            return this.host.jqxDocking('cookies');
        }
    };
    jqxDockingComponent.prototype.cookieOptions = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookieOptions', arg);
        }
        else {
            return this.host.jqxDocking('cookieOptions');
        }
    };
    jqxDockingComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('disabled', arg);
        }
        else {
            return this.host.jqxDocking('disabled');
        }
    };
    jqxDockingComponent.prototype.floatingWindowOpacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('floatingWindowOpacity', arg);
        }
        else {
            return this.host.jqxDocking('floatingWindowOpacity');
        }
    };
    jqxDockingComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('height', arg);
        }
        else {
            return this.host.jqxDocking('height');
        }
    };
    jqxDockingComponent.prototype.keyboardNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxDocking('keyboardNavigation');
        }
    };
    jqxDockingComponent.prototype.mode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('mode', arg);
        }
        else {
            return this.host.jqxDocking('mode');
        }
    };
    jqxDockingComponent.prototype.orientation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('orientation', arg);
        }
        else {
            return this.host.jqxDocking('orientation');
        }
    };
    jqxDockingComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('rtl', arg);
        }
        else {
            return this.host.jqxDocking('rtl');
        }
    };
    jqxDockingComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('theme', arg);
        }
        else {
            return this.host.jqxDocking('theme');
        }
    };
    jqxDockingComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('width', arg);
        }
        else {
            return this.host.jqxDocking('width');
        }
    };
    jqxDockingComponent.prototype.windowsMode = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsMode', arg);
        }
        else {
            return this.host.jqxDocking('windowsMode');
        }
    };
    jqxDockingComponent.prototype.windowsOffset = function (arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsOffset', arg);
        }
        else {
            return this.host.jqxDocking('windowsOffset');
        }
    };
    // jqxDockingComponent functions
    jqxDockingComponent.prototype.addWindow = function (windowId, mode, panel, position) {
        this.host.jqxDocking('addWindow', windowId, mode, panel, position);
    };
    jqxDockingComponent.prototype.closeWindow = function (windowId) {
        this.host.jqxDocking('closeWindow', windowId);
    };
    jqxDockingComponent.prototype.collapseWindow = function (windowId) {
        this.host.jqxDocking('collapseWindow', windowId);
    };
    jqxDockingComponent.prototype.destroy = function () {
        this.host.jqxDocking('destroy');
    };
    jqxDockingComponent.prototype.disableWindowResize = function (windowId) {
        this.host.jqxDocking('disableWindowResize', windowId);
    };
    jqxDockingComponent.prototype.disable = function () {
        this.host.jqxDocking('disable');
    };
    jqxDockingComponent.prototype.exportLayout = function () {
        return this.host.jqxDocking('exportLayout');
    };
    jqxDockingComponent.prototype.enable = function () {
        this.host.jqxDocking('enable');
    };
    jqxDockingComponent.prototype.expandWindow = function (windowId) {
        this.host.jqxDocking('expandWindow', windowId);
    };
    jqxDockingComponent.prototype.enableWindowResize = function (windowId) {
        this.host.jqxDocking('enableWindowResize', windowId);
    };
    jqxDockingComponent.prototype.focus = function () {
        this.host.jqxDocking('focus');
    };
    jqxDockingComponent.prototype.hideAllCloseButtons = function () {
        this.host.jqxDocking('hideAllCloseButtons');
    };
    jqxDockingComponent.prototype.hideAllCollapseButtons = function () {
        this.host.jqxDocking('hideAllCollapseButtons');
    };
    jqxDockingComponent.prototype.hideCollapseButton = function (windowId) {
        this.host.jqxDocking('hideCollapseButton', windowId);
    };
    jqxDockingComponent.prototype.hideCloseButton = function (windowId) {
        this.host.jqxDocking('hideCloseButton', windowId);
    };
    jqxDockingComponent.prototype.importLayout = function (Json) {
        this.host.jqxDocking('importLayout', Json);
    };
    jqxDockingComponent.prototype.move = function (windowId, panel, position) {
        this.host.jqxDocking('move', windowId, panel, position);
    };
    jqxDockingComponent.prototype.pinWindow = function (windowId) {
        this.host.jqxDocking('pinWindow', windowId);
    };
    jqxDockingComponent.prototype.setWindowMode = function (windowId, mode) {
        this.host.jqxDocking('setWindowMode', windowId, mode);
    };
    jqxDockingComponent.prototype.showCloseButton = function (windowId) {
        this.host.jqxDocking('showCloseButton', windowId);
    };
    jqxDockingComponent.prototype.showCollapseButton = function (windowId) {
        this.host.jqxDocking('showCollapseButton', windowId);
    };
    jqxDockingComponent.prototype.setWindowPosition = function (windowId, top, left) {
        this.host.jqxDocking('setWindowPosition', windowId, top, left);
    };
    jqxDockingComponent.prototype.showAllCloseButtons = function () {
        this.host.jqxDocking('showAllCloseButtons');
    };
    jqxDockingComponent.prototype.showAllCollapseButtons = function () {
        this.host.jqxDocking('showAllCollapseButtons');
    };
    jqxDockingComponent.prototype.unpinWindow = function (windowId) {
        this.host.jqxDocking('unpinWindow', windowId);
    };
    jqxDockingComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
    };
    tslib_1.__decorate([
        Input('cookies'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingComponent.prototype, "attrCookies", void 0);
    tslib_1.__decorate([
        Input('cookieOptions'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingComponent.prototype, "attrCookieOptions", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('floatingWindowOpacity'),
        tslib_1.__metadata("design:type", Number)
    ], jqxDockingComponent.prototype, "attrFloatingWindowOpacity", void 0);
    tslib_1.__decorate([
        Input('keyboardNavigation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingComponent.prototype, "attrKeyboardNavigation", void 0);
    tslib_1.__decorate([
        Input('mode'),
        tslib_1.__metadata("design:type", String)
    ], jqxDockingComponent.prototype, "attrMode", void 0);
    tslib_1.__decorate([
        Input('orientation'),
        tslib_1.__metadata("design:type", String)
    ], jqxDockingComponent.prototype, "attrOrientation", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxDockingComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('windowsMode'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingComponent.prototype, "attrWindowsMode", void 0);
    tslib_1.__decorate([
        Input('windowsOffset'),
        tslib_1.__metadata("design:type", Number)
    ], jqxDockingComponent.prototype, "attrWindowsOffset", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxDockingComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingComponent.prototype, "onDragStart", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxDockingComponent.prototype, "onDragEnd", void 0);
    jqxDockingComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxDocking',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxDockingComponent);
    return jqxDockingComponent;
}()); //jqxDockingComponent
export { jqxDockingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhkb2NraW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGRvY2tpbmcvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGRvY2tpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUF1QkcsNkJBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUMsUUFBUSxFQUFDLG9CQUFvQixFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLGVBQWUsQ0FBQyxDQUFDO1FBa1U3TCw2QkFBNkI7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBOVR0QyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFBQSxDQUFDO0lBRUYseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxD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QjtJQUNsQztRQUFmLEtBQUssQ0FBQyxPQUFPLENBQUM7OzBEQUE0QjtJQUMxQjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzsyREFBNkI7SUFFdkI7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7MkRBQTRCO0lBcVV2QztRQUFULE1BQU0sRUFBRTs7NERBQWtDO0lBQ2pDO1FBQVQsTUFBTSxFQUFFOzswREFBZ0M7SUF0Vi9CLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsc0NBQXNDO1NBQ25ELENBQUM7aURBeUIrQixVQUFVO09BdkI5QixtQkFBbUIsQ0E2Vi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTdWRCxJQTZWQyxDQUFDLHFCQUFxQjtTQTdWVixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeERvY2tpbmcnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeERvY2tpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnY29va2llcycpIGF0dHJDb29raWVzOiBib29sZWFuO1xuICAgQElucHV0KCdjb29raWVPcHRpb25zJykgYXR0ckNvb2tpZU9wdGlvbnM6IGpxd2lkZ2V0cy5Eb2NraW5nQ29va2llT3B0aW9ucztcbiAgIEBJbnB1dCgnZGlzYWJsZWQnKSBhdHRyRGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Zsb2F0aW5nV2luZG93T3BhY2l0eScpIGF0dHJGbG9hdGluZ1dpbmRvd09wYWNpdHk6IG51bWJlcjtcbiAgIEBJbnB1dCgna2V5Ym9hcmROYXZpZ2F0aW9uJykgYXR0cktleWJvYXJkTmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbW9kZScpIGF0dHJNb2RlOiBzdHJpbmc7XG4gICBASW5wdXQoJ29yaWVudGF0aW9uJykgYXR0ck9yaWVudGF0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoJ3J0bCcpIGF0dHJSdGw6IGJvb2xlYW47XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpbmRvd3NNb2RlJykgYXR0cldpbmRvd3NNb2RlOiBvYmplY3Q7XG4gICBASW5wdXQoJ3dpbmRvd3NPZmZzZXQnKSBhdHRyV2luZG93c09mZnNldDogbnVtYmVyO1xuICAgQElucHV0KCd3aWR0aCcpIGF0dHJXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdoZWlnaHQnKSBhdHRySGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgIEBJbnB1dCgnYXV0by1jcmVhdGUnKSBhdXRvQ3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJvcGVydGllczogc3RyaW5nW10gPSBbJ2Nvb2tpZXMnLCdjb29raWVPcHRpb25zJywnZGlzYWJsZWQnLCdmbG9hdGluZ1dpbmRvd09wYWNpdHknLCdoZWlnaHQnLCdrZXlib2FyZE5hdmlnYXRpb24nLCdtb2RlJywnb3JpZW50YXRpb24nLCdydGwnLCd0aGVtZScsJ3dpZHRoJywnd2luZG93c01vZGUnLCd3aW5kb3dzT2Zmc2V0J107XG4gICBob3N0OiBhbnk7XG4gICBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgd2lkZ2V0T2JqZWN0OiAganF3aWRnZXRzLmpxeERvY2tpbmc7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4RG9ja2luZyh0aGlzLnByb3BlcnRpZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcmVFcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZyh0aGlzLnByb3BlcnRpZXNbaV0sIHRoaXNbYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHRoaXMuaG9zdC5qcXhEb2NraW5nKHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pOyBcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYXJyYXlzRXF1YWwoYXR0clZhbHVlOiBhbnksIGhvc3RWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICBpZiAoKGF0dHJWYWx1ZSAmJiAhaG9zdFZhbHVlKSB8fCAoIWF0dHJWYWx1ZSAmJiBob3N0VmFsdWUpKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoYXR0clZhbHVlLmxlbmd0aCAhPSBob3N0VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgaWYgKGF0dHJWYWx1ZVtpXSAhPT0gaG9zdFZhbHVlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cblxuICAgbWFuYWdlQXR0cmlidXRlcygpOiBhbnkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBsZXQgYXR0ck5hbWUgPSAnYXR0cicgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnByb3BlcnRpZXNbaV0uc3Vic3RyaW5nKDEpO1xuICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5wcm9wZXJ0aWVzW2ldXSA9IHRoaXNbYXR0ck5hbWVdO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICB9XG5cbiAgIG1vdmVDbGFzc2VzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBjbGFzc2VzOiBhbnkgPSBwYXJlbnRFbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkRWwuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmNsYXNzTmFtZSA9ICcnO1xuICAgfVxuXG4gICBtb3ZlU3R5bGVzKHBhcmVudEVsOiBIVE1MRWxlbWVudCwgY2hpbGRFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGxldCBzdHlsZSA9IHBhcmVudEVsLnN0eWxlLmNzc1RleHQ7XG4gICAgICBjaGlsZEVsLnN0eWxlLmNzc1RleHQgPSBzdHlsZVxuICAgICAgcGFyZW50RWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgfVxuXG4gICBjcmVhdGVDb21wb25lbnQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgIEpRWExpdGUuZXh0ZW5kKG9wdGlvbnMsIHRoaXMubWFuYWdlQXR0cmlidXRlcygpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhvc3QgPSBKUVhMaXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICB0aGlzLm1vdmVDbGFzc2VzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuICAgICAgdGhpcy5tb3ZlU3R5bGVzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmhvc3RbMF0pO1xuXG4gICAgICB0aGlzLl9fd2lyZUV2ZW50c19fKCk7XG4gICAgICB0aGlzLndpZGdldE9iamVjdCA9IGpxd2lkZ2V0cy5jcmVhdGVJbnN0YW5jZSh0aGlzLmhvc3QsICdqcXhEb2NraW5nJywgb3B0aW9ucyk7XG5cbiAgIH1cblxuICAgY3JlYXRlV2lkZ2V0KG9wdGlvbnM/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICB9XG5cbiAgIF9fdXBkYXRlUmVjdF9fKCkgOiB2b2lkIHtcbiAgICAgIGlmKHRoaXMuaG9zdCkgdGhpcy5ob3N0LmNzcyh7IHdpZHRoOiB0aGlzLmF0dHJXaWR0aCwgaGVpZ2h0OiB0aGlzLmF0dHJIZWlnaHQgfSk7XG4gICB9XG5cbiAgIHNldE9wdGlvbnMob3B0aW9uczogYW55KSA6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4RG9ja2luZ0NvbXBvbmVudCBwcm9wZXJ0aWVzXG4gICBjb29raWVzKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdjb29raWVzJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdjb29raWVzJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvb2tpZU9wdGlvbnMoYXJnPzoganF3aWRnZXRzLkRvY2tpbmdDb29raWVPcHRpb25zKToganF3aWRnZXRzLkRvY2tpbmdDb29raWVPcHRpb25zIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdjb29raWVPcHRpb25zJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdjb29raWVPcHRpb25zJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGRpc2FibGVkKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdkaXNhYmxlZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZmxvYXRpbmdXaW5kb3dPcGFjaXR5KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZmxvYXRpbmdXaW5kb3dPcGFjaXR5JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdmbG9hdGluZ1dpbmRvd09wYWNpdHknKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnaGVpZ2h0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdoZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAga2V5Ym9hcmROYXZpZ2F0aW9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdrZXlib2FyZE5hdmlnYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2tleWJvYXJkTmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtb2RlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnbW9kZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygnbW9kZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBvcmllbnRhdGlvbihhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ29yaWVudGF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdvcmllbnRhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3J0bCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RG9ja2luZygncnRsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRoZW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygndGhlbWUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpZHRoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3dpZHRoJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpbmRvd3NNb2RlKGFyZz86IG9iamVjdCk6IG9iamVjdCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnd2luZG93c01vZGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3dpbmRvd3NNb2RlJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHdpbmRvd3NPZmZzZXQoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd3aW5kb3dzT2Zmc2V0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd3aW5kb3dzT2Zmc2V0Jyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4RG9ja2luZ0NvbXBvbmVudCBmdW5jdGlvbnNcbiAgIGFkZFdpbmRvdyh3aW5kb3dJZDogc3RyaW5nLCBtb2RlOiBhbnksIHBhbmVsOiBudW1iZXIsIHBvc2l0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdhZGRXaW5kb3cnLCB3aW5kb3dJZCwgbW9kZSwgcGFuZWwsIHBvc2l0aW9uKTtcbiAgIH1cblxuICAgY2xvc2VXaW5kb3cod2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Nsb3NlV2luZG93Jywgd2luZG93SWQpO1xuICAgfVxuXG4gICBjb2xsYXBzZVdpbmRvdyh3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnY29sbGFwc2VXaW5kb3cnLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZGVzdHJveScpO1xuICAgfVxuXG4gICBkaXNhYmxlV2luZG93UmVzaXplKHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdkaXNhYmxlV2luZG93UmVzaXplJywgd2luZG93SWQpO1xuICAgfVxuXG4gICBkaXNhYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2Rpc2FibGUnKTtcbiAgIH1cblxuICAgZXhwb3J0TGF5b3V0KCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2V4cG9ydExheW91dCcpO1xuICAgfVxuXG4gICBlbmFibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZW5hYmxlJyk7XG4gICB9XG5cbiAgIGV4cGFuZFdpbmRvdyh3aW5kb3dJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZXhwYW5kV2luZG93Jywgd2luZG93SWQpO1xuICAgfVxuXG4gICBlbmFibGVXaW5kb3dSZXNpemUod2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2VuYWJsZVdpbmRvd1Jlc2l6ZScsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnZm9jdXMnKTtcbiAgIH1cblxuICAgaGlkZUFsbENsb3NlQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdoaWRlQWxsQ2xvc2VCdXR0b25zJyk7XG4gICB9XG5cbiAgIGhpZGVBbGxDb2xsYXBzZUJ1dHRvbnMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnaGlkZUFsbENvbGxhcHNlQnV0dG9ucycpO1xuICAgfVxuXG4gICBoaWRlQ29sbGFwc2VCdXR0b24od2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ2hpZGVDb2xsYXBzZUJ1dHRvbicsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgaGlkZUNsb3NlQnV0dG9uKHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdoaWRlQ2xvc2VCdXR0b24nLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIGltcG9ydExheW91dChKc29uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdpbXBvcnRMYXlvdXQnLCBKc29uKTtcbiAgIH1cblxuICAgbW92ZSh3aW5kb3dJZDogc3RyaW5nLCBwYW5lbDogbnVtYmVyLCBwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RG9ja2luZygnbW92ZScsIHdpbmRvd0lkLCBwYW5lbCwgcG9zaXRpb24pO1xuICAgfVxuXG4gICBwaW5XaW5kb3cod2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3BpbldpbmRvdycsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgc2V0V2luZG93TW9kZSh3aW5kb3dJZDogc3RyaW5nLCBtb2RlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdzZXRXaW5kb3dNb2RlJywgd2luZG93SWQsIG1vZGUpO1xuICAgfVxuXG4gICBzaG93Q2xvc2VCdXR0b24od2luZG93SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3Nob3dDbG9zZUJ1dHRvbicsIHdpbmRvd0lkKTtcbiAgIH1cblxuICAgc2hvd0NvbGxhcHNlQnV0dG9uKHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdzaG93Q29sbGFwc2VCdXR0b24nLCB3aW5kb3dJZCk7XG4gICB9XG5cbiAgIHNldFdpbmRvd1Bvc2l0aW9uKHdpbmRvd0lkOiBzdHJpbmcsIHRvcDogYW55LCBsZWZ0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdzZXRXaW5kb3dQb3NpdGlvbicsIHdpbmRvd0lkLCB0b3AsIGxlZnQpO1xuICAgfVxuXG4gICBzaG93QWxsQ2xvc2VCdXR0b25zKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeERvY2tpbmcoJ3Nob3dBbGxDbG9zZUJ1dHRvbnMnKTtcbiAgIH1cblxuICAgc2hvd0FsbENvbGxhcHNlQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCdzaG93QWxsQ29sbGFwc2VCdXR0b25zJyk7XG4gICB9XG5cbiAgIHVucGluV2luZG93KHdpbmRvd0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhEb2NraW5nKCd1bnBpbldpbmRvdycsIHdpbmRvd0lkKTtcbiAgIH1cblxuXG4gICAvLyBqcXhEb2NraW5nQ29tcG9uZW50IGV2ZW50c1xuICAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgX193aXJlRXZlbnRzX18oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdTdGFydCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uRHJhZ1N0YXJ0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2RyYWdFbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkRyYWdFbmQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgIH1cblxufSAvL2pxeERvY2tpbmdDb21wb25lbnRcbiJdfQ==