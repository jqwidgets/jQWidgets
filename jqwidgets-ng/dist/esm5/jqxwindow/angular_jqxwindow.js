import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxwindow from '../../jqwidgets-scripts/jqwidgets/jqxwindow';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var jqxWindowComponent = /** @class */ (function () {
    function jqxWindowComponent(containerElement) {
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
    jqxWindowComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxWindowComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
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
    };
    jqxWindowComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxWindowComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxWindowComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxWindowComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxWindowComponent.prototype.createComponent = function (options) {
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
    };
    jqxWindowComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxWindowComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxWindowComponent.prototype.setOptions = function (options) {
        this.host.jqxWindow('setOptions', options);
    };
    // jqxWindowComponent properties
    jqxWindowComponent.prototype.autoOpen = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('autoOpen', arg);
        }
        else {
            return this.host.jqxWindow('autoOpen');
        }
    };
    jqxWindowComponent.prototype.animationType = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('animationType', arg);
        }
        else {
            return this.host.jqxWindow('animationType');
        }
    };
    jqxWindowComponent.prototype.collapsed = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapsed', arg);
        }
        else {
            return this.host.jqxWindow('collapsed');
        }
    };
    jqxWindowComponent.prototype.collapseAnimationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('collapseAnimationDuration');
        }
    };
    jqxWindowComponent.prototype.content = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('content', arg);
        }
        else {
            return this.host.jqxWindow('content');
        }
    };
    jqxWindowComponent.prototype.closeAnimationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('closeAnimationDuration');
        }
    };
    jqxWindowComponent.prototype.closeButtonSize = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonSize', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonSize');
        }
    };
    jqxWindowComponent.prototype.closeButtonAction = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonAction', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonAction');
        }
    };
    jqxWindowComponent.prototype.cancelButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('cancelButton', arg);
        }
        else {
            return this.host.jqxWindow('cancelButton');
        }
    };
    jqxWindowComponent.prototype.dragArea = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('dragArea', arg);
        }
        else {
            return this.host.jqxWindow('dragArea');
        }
    };
    jqxWindowComponent.prototype.draggable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('draggable', arg);
        }
        else {
            return this.host.jqxWindow('draggable');
        }
    };
    jqxWindowComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('disabled', arg);
        }
        else {
            return this.host.jqxWindow('disabled');
        }
    };
    jqxWindowComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('height', arg);
        }
        else {
            return this.host.jqxWindow('height');
        }
    };
    jqxWindowComponent.prototype.initContent = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('initContent', arg);
        }
        else {
            return this.host.jqxWindow('initContent');
        }
    };
    jqxWindowComponent.prototype.isModal = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('isModal', arg);
        }
        else {
            return this.host.jqxWindow('isModal');
        }
    };
    jqxWindowComponent.prototype.keyboardCloseKey = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardCloseKey', arg);
        }
        else {
            return this.host.jqxWindow('keyboardCloseKey');
        }
    };
    jqxWindowComponent.prototype.keyboardNavigation = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxWindow('keyboardNavigation');
        }
    };
    jqxWindowComponent.prototype.minHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minHeight', arg);
        }
        else {
            return this.host.jqxWindow('minHeight');
        }
    };
    jqxWindowComponent.prototype.maxHeight = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxHeight', arg);
        }
        else {
            return this.host.jqxWindow('maxHeight');
        }
    };
    jqxWindowComponent.prototype.minWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minWidth', arg);
        }
        else {
            return this.host.jqxWindow('minWidth');
        }
    };
    jqxWindowComponent.prototype.maxWidth = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxWidth', arg);
        }
        else {
            return this.host.jqxWindow('maxWidth');
        }
    };
    jqxWindowComponent.prototype.modalOpacity = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalOpacity', arg);
        }
        else {
            return this.host.jqxWindow('modalOpacity');
        }
    };
    jqxWindowComponent.prototype.modalZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalZIndex');
        }
    };
    jqxWindowComponent.prototype.modalBackgroundZIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalBackgroundZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalBackgroundZIndex');
        }
    };
    jqxWindowComponent.prototype.okButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('okButton', arg);
        }
        else {
            return this.host.jqxWindow('okButton');
        }
    };
    jqxWindowComponent.prototype.position = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('position', arg);
        }
        else {
            return this.host.jqxWindow('position');
        }
    };
    jqxWindowComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('rtl', arg);
        }
        else {
            return this.host.jqxWindow('rtl');
        }
    };
    jqxWindowComponent.prototype.resizable = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('resizable', arg);
        }
        else {
            return this.host.jqxWindow('resizable');
        }
    };
    jqxWindowComponent.prototype.showAnimationDuration = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('showAnimationDuration');
        }
    };
    jqxWindowComponent.prototype.showCloseButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCloseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCloseButton');
        }
    };
    jqxWindowComponent.prototype.showCollapseButton = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCollapseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCollapseButton');
        }
    };
    jqxWindowComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('theme', arg);
        }
        else {
            return this.host.jqxWindow('theme');
        }
    };
    jqxWindowComponent.prototype.title = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('title', arg);
        }
        else {
            return this.host.jqxWindow('title');
        }
    };
    jqxWindowComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('width', arg);
        }
        else {
            return this.host.jqxWindow('width');
        }
    };
    jqxWindowComponent.prototype.zIndex = function (arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('zIndex', arg);
        }
        else {
            return this.host.jqxWindow('zIndex');
        }
    };
    // jqxWindowComponent functions
    jqxWindowComponent.prototype.bringToFront = function () {
        this.host.jqxWindow('bringToFront');
    };
    jqxWindowComponent.prototype.close = function () {
        this.host.jqxWindow('close');
    };
    jqxWindowComponent.prototype.collapse = function () {
        this.host.jqxWindow('collapse');
    };
    jqxWindowComponent.prototype.closeAll = function () {
        this.host.jqxWindow('closeAll');
    };
    jqxWindowComponent.prototype.disable = function () {
        this.host.jqxWindow('disable');
    };
    jqxWindowComponent.prototype.destroy = function () {
        this.host.jqxWindow('destroy');
    };
    jqxWindowComponent.prototype.enable = function () {
        this.host.jqxWindow('enable');
    };
    jqxWindowComponent.prototype.expand = function () {
        this.host.jqxWindow('expand');
    };
    jqxWindowComponent.prototype.focus = function () {
        this.host.jqxWindow('focus');
    };
    jqxWindowComponent.prototype.isOpen = function () {
        return this.host.jqxWindow('isOpen');
    };
    jqxWindowComponent.prototype.move = function (top, left) {
        this.host.jqxWindow('move', top, left);
    };
    jqxWindowComponent.prototype.open = function () {
        this.host.jqxWindow('open');
    };
    jqxWindowComponent.prototype.hide = function () {
        this.host.jqxWindow('hide');
    };
    jqxWindowComponent.prototype.resize = function (top, left) {
        this.host.jqxWindow('resize', top, left);
    };
    jqxWindowComponent.prototype.setTitle = function (title) {
        this.host.jqxWindow('setTitle', title);
    };
    jqxWindowComponent.prototype.setContent = function (content) {
        this.host.jqxWindow('setContent', content);
    };
    jqxWindowComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('collapse', function (eventData) { _this.onCollapse.emit(eventData); });
        this.host.on('expand', function (eventData) { _this.onExpand.emit(eventData); });
        this.host.on('moving', function (eventData) { _this.onMoving.emit(eventData); });
        this.host.on('moved', function (eventData) { _this.onMoved.emit(eventData); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('resizing', function (eventData) { _this.onResizing.emit(eventData); });
        this.host.on('resized', function (eventData) { _this.onResized.emit(eventData); });
    };
    tslib_1.__decorate([
        Input('autoOpen'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrAutoOpen", void 0);
    tslib_1.__decorate([
        Input('animationType'),
        tslib_1.__metadata("design:type", String)
    ], jqxWindowComponent.prototype, "attrAnimationType", void 0);
    tslib_1.__decorate([
        Input('collapsed'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrCollapsed", void 0);
    tslib_1.__decorate([
        Input('collapseAnimationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxWindowComponent.prototype, "attrCollapseAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('content'),
        tslib_1.__metadata("design:type", String)
    ], jqxWindowComponent.prototype, "attrContent", void 0);
    tslib_1.__decorate([
        Input('closeAnimationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxWindowComponent.prototype, "attrCloseAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('closeButtonSize'),
        tslib_1.__metadata("design:type", Number)
    ], jqxWindowComponent.prototype, "attrCloseButtonSize", void 0);
    tslib_1.__decorate([
        Input('closeButtonAction'),
        tslib_1.__metadata("design:type", String)
    ], jqxWindowComponent.prototype, "attrCloseButtonAction", void 0);
    tslib_1.__decorate([
        Input('cancelButton'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrCancelButton", void 0);
    tslib_1.__decorate([
        Input('dragArea'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrDragArea", void 0);
    tslib_1.__decorate([
        Input('draggable'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrDraggable", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('initContent'),
        tslib_1.__metadata("design:type", Function)
    ], jqxWindowComponent.prototype, "attrInitContent", void 0);
    tslib_1.__decorate([
        Input('isModal'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrIsModal", void 0);
    tslib_1.__decorate([
        Input('keyboardCloseKey'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrKeyboardCloseKey", void 0);
    tslib_1.__decorate([
        Input('keyboardNavigation'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrKeyboardNavigation", void 0);
    tslib_1.__decorate([
        Input('minHeight'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrMinHeight", void 0);
    tslib_1.__decorate([
        Input('maxHeight'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrMaxHeight", void 0);
    tslib_1.__decorate([
        Input('minWidth'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrMinWidth", void 0);
    tslib_1.__decorate([
        Input('maxWidth'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrMaxWidth", void 0);
    tslib_1.__decorate([
        Input('modalOpacity'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrModalOpacity", void 0);
    tslib_1.__decorate([
        Input('modalZIndex'),
        tslib_1.__metadata("design:type", Number)
    ], jqxWindowComponent.prototype, "attrModalZIndex", void 0);
    tslib_1.__decorate([
        Input('modalBackgroundZIndex'),
        tslib_1.__metadata("design:type", Number)
    ], jqxWindowComponent.prototype, "attrModalBackgroundZIndex", void 0);
    tslib_1.__decorate([
        Input('okButton'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrOkButton", void 0);
    tslib_1.__decorate([
        Input('position'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrPosition", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('resizable'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrResizable", void 0);
    tslib_1.__decorate([
        Input('showAnimationDuration'),
        tslib_1.__metadata("design:type", Number)
    ], jqxWindowComponent.prototype, "attrShowAnimationDuration", void 0);
    tslib_1.__decorate([
        Input('showCloseButton'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrShowCloseButton", void 0);
    tslib_1.__decorate([
        Input('showCollapseButton'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "attrShowCollapseButton", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxWindowComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('title'),
        tslib_1.__metadata("design:type", String)
    ], jqxWindowComponent.prototype, "attrTitle", void 0);
    tslib_1.__decorate([
        Input('zIndex'),
        tslib_1.__metadata("design:type", Number)
    ], jqxWindowComponent.prototype, "attrZIndex", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxWindowComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "onClose", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "onCollapse", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "onExpand", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "onMoving", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "onMoved", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "onOpen", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "onResizing", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxWindowComponent.prototype, "onResized", void 0);
    jqxWindowComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxWindow',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxWindowComponent);
    return jqxWindowComponent;
}()); //jqxWindowComponent
export { jqxWindowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXh3aW5kb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qcXdpZGdldHMtbmcvanF4d2luZG93LyIsInNvdXJjZXMiOlsiYW5ndWxhcl9qcXh3aW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsNkNBQTZDOztBQUc3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRN0c7SUE2Q0csNEJBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxXQUFXLEVBQUMsMkJBQTJCLEVBQUMsU0FBUyxFQUFDLHdCQUF3QixFQUFDLGlCQUFpQixFQUFDLG1CQUFtQixFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLGFBQWEsRUFBQyx1QkFBdUIsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsdUJBQXVCLEVBQUMsaUJBQWlCLEVBQUMsb0JBQW9CLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLENBQUM7UUE4YzFnQiw0QkFBNEI7UUFDbEIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFoZHRDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFFRix3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRyxJQUFJLFFBQVEsR0FBWSxLQUFLLENBQUM7Z0JBRTlCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLEVBQUU7d0JBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEtBQUssRUFBRTs0QkFDbEMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN2Rjt3QkFDRCxJQUFJLFFBQVEsRUFBRTs0QkFDWCxPQUFPLEtBQUssQ0FBQzt5QkFDZjt3QkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxTQUFTO3FCQUNYO29CQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDMUQ7aUJBQ0g7YUFDSDtTQUNIO0lBQ0osQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxTQUFjLEVBQUUsU0FBYztRQUN2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRTtZQUN6RCxPQUFPLEtBQUssQ0FBQztTQUNmO1FBQ0QsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDZjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxLQUFLLENBQUM7YUFDZjtTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsNkNBQWdCLEdBQWhCO1FBQ0csSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2xCLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksUUFBcUIsRUFBRSxPQUFvQjs7UUFDcEQsSUFBSSxPQUFPLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLENBQUEsS0FBQSxPQUFPLENBQUMsU0FBUyxDQUFBLENBQUMsR0FBRyw0QkFBSSxPQUFPLEdBQUU7U0FDbkM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLFFBQXFCLEVBQUUsT0FBb0I7UUFDbkQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsNENBQWUsR0FBZixVQUFnQixPQUFhO1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE9BQU87U0FDVDtRQUNELElBQUksT0FBTyxFQUFFO1lBQ1YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUNuRDthQUNJO1lBQ0gsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVqRixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLE9BQWE7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkNBQWMsR0FBZDtRQUNHLElBQUcsSUFBSSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLE9BQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMscUNBQVEsR0FBUixVQUFTLEdBQWE7UUFDbkIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQztJQUNKLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsR0FBWTtRQUN2QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQy9DO0lBQ0osQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVSxHQUFhO1FBQ3BCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7SUFDSixDQUFDO0lBRUQsc0RBQXlCLEdBQXpCLFVBQTBCLEdBQVk7UUFDbkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDM0Q7SUFDSixDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLEdBQVk7UUFDakIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztJQUNKLENBQUM7SUFFRCxtREFBc0IsR0FBdEIsVUFBdUIsR0FBWTtRQUNoQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUN4RDtJQUNKLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLEdBQVk7UUFDekIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDakQ7SUFDSixDQUFDO0lBRUQsOENBQWlCLEdBQWpCLFVBQWtCLEdBQVk7UUFDM0IsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDbkQ7SUFDSixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEdBQVM7UUFDbkIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM5QztJQUNKLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsR0FBOEI7UUFDcEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQztJQUNKLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsR0FBYTtRQUNwQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0osQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxHQUFhO1FBQ25CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUM7SUFDSixDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLEdBQXFCO1FBQ3pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEM7SUFDSixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLEdBQWdCO1FBQ3pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0M7SUFDSixDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLEdBQWE7UUFDbEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztJQUNKLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsR0FBcUI7UUFDbkMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDbEQ7SUFDSixDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQW1CLEdBQWE7UUFDN0IsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDcEQ7SUFDSixDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEdBQXFCO1FBQzVCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7SUFDSixDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEdBQXFCO1FBQzVCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7SUFDSixDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEdBQXFCO1FBQzNCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUM7SUFDSixDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEdBQXFCO1FBQzNCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUM7SUFDSixDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEdBQWU7UUFDekIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM5QztJQUNKLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksR0FBWTtRQUNyQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzdDO0lBQ0osQ0FBQztJQUVELGtEQUFxQixHQUFyQixVQUFzQixHQUFZO1FBQy9CLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0osQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxHQUFTO1FBQ2YsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQztJQUNKLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsR0FBa0I7UUFDeEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQztJQUNKLENBQUM7SUFFRCxnQ0FBRyxHQUFILFVBQUksR0FBYTtRQUNkLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDSixDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEdBQWE7UUFDcEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztJQUNKLENBQUM7SUFFRCxrREFBcUIsR0FBckIsVUFBc0IsR0FBWTtRQUMvQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUN2RDtJQUNKLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLEdBQWE7UUFDMUIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDakQ7SUFDSixDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQW1CLEdBQWE7UUFDN0IsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDcEQ7SUFDSixDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLEdBQVk7UUFDZixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0osQ0FBQztJQUVELGtDQUFLLEdBQUwsVUFBTSxHQUFZO1FBQ2YsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNKLENBQUM7SUFFRCxrQ0FBSyxHQUFMLFVBQU0sR0FBcUI7UUFDeEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNKLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sR0FBWTtRQUNoQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0osQ0FBQztJQUdELCtCQUErQjtJQUMvQix5Q0FBWSxHQUFaO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGtDQUFLLEdBQUw7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQ0FBTSxHQUFOO1FBQ0csT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsaUNBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFJLEdBQUo7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLElBQVk7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsT0FBZTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQWFELDJDQUFjLEdBQWQ7UUFBQSxpQkFTQztRQVJFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLFNBQWMsSUFBTyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUF2Z0JrQjtRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOzs0REFBdUI7SUFDakI7UUFBdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7aUVBQTJCO0lBQzlCO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7OzZEQUF3QjtJQUNQO1FBQW5DLEtBQUssQ0FBQywyQkFBMkIsQ0FBQzs7NkVBQXVDO0lBQ3hEO1FBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7OzJEQUFxQjtJQUNMO1FBQWhDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzs7MEVBQW9DO0lBQzFDO1FBQXpCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7bUVBQTZCO0lBQzFCO1FBQTNCLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7cUVBQStCO0lBQ25DO1FBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7O2dFQUF1QjtJQUMxQjtRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOzs0REFBd0M7SUFDdEM7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7NkRBQXdCO0lBQ3hCO1FBQWxCLEtBQUssQ0FBQyxVQUFVLENBQUM7OzREQUF1QjtJQUNuQjtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzsrREFBNkI7SUFDaEM7UUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7MkRBQXNCO0lBQ1o7UUFBMUIsS0FBSyxDQUFDLGtCQUFrQixDQUFDOztvRUFBdUM7SUFDcEM7UUFBNUIsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztzRUFBaUM7SUFDekM7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7NkRBQWdDO0lBQy9CO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7OzZEQUFnQztJQUNoQztRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOzs0REFBK0I7SUFDOUI7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7NERBQStCO0lBQzFCO1FBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7O2dFQUFtQztJQUNuQztRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzsrREFBeUI7SUFDZDtRQUEvQixLQUFLLENBQUMsdUJBQXVCLENBQUM7O3lFQUFtQztJQUMvQztRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOzs0REFBbUI7SUFDbEI7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7NERBQTRCO0lBQ2hDO1FBQWIsS0FBSyxDQUFDLEtBQUssQ0FBQzs7dURBQWtCO0lBQ1g7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7NkRBQXdCO0lBQ1g7UUFBL0IsS0FBSyxDQUFDLHVCQUF1QixDQUFDOzt5RUFBbUM7SUFDeEM7UUFBekIsS0FBSyxDQUFDLGlCQUFpQixDQUFDOzttRUFBOEI7SUFDMUI7UUFBNUIsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztzRUFBaUM7SUFDN0M7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzt5REFBbUI7SUFDbEI7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOzt5REFBbUI7SUFDakI7UUFBaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7MERBQW9CO0lBQ3BCO1FBQWYsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7eURBQTRCO0lBQzFCO1FBQWhCLEtBQUssQ0FBQyxRQUFRLENBQUM7OzBEQUE2QjtJQUV2QjtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzswREFBNEI7SUFpZHZDO1FBQVQsTUFBTSxFQUFFOzt1REFBOEI7SUFDN0I7UUFBVCxNQUFNLEVBQUU7OzBEQUFpQztJQUNoQztRQUFULE1BQU0sRUFBRTs7d0RBQStCO0lBQzlCO1FBQVQsTUFBTSxFQUFFOzt3REFBK0I7SUFDOUI7UUFBVCxNQUFNLEVBQUU7O3VEQUE4QjtJQUM3QjtRQUFULE1BQU0sRUFBRTs7c0RBQTZCO0lBQzVCO1FBQVQsTUFBTSxFQUFFOzswREFBaUM7SUFDaEM7UUFBVCxNQUFNLEVBQUU7O3lEQUFnQztJQTlmL0Isa0JBQWtCO1FBTDlCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxzQ0FBc0M7U0FDbkQsQ0FBQztpREErQytCLFVBQVU7T0E3QzlCLGtCQUFrQixDQTJnQjlCO0lBQUQseUJBQUM7Q0FBQSxBQTNnQkQsSUEyZ0JDLENBQUMsb0JBQW9CO1NBM2dCVCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeFdpbmRvdycsXG4gICAgdGVtcGxhdGU6ICc8ZGl2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4nXG59KVxuXG5leHBvcnQgY2xhc3MganF4V2luZG93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXG57XG4gICBASW5wdXQoJ2F1dG9PcGVuJykgYXR0ckF1dG9PcGVuOiBib29sZWFuO1xuICAgQElucHV0KCdhbmltYXRpb25UeXBlJykgYXR0ckFuaW1hdGlvblR5cGU6IHN0cmluZztcbiAgIEBJbnB1dCgnY29sbGFwc2VkJykgYXR0ckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgnY29sbGFwc2VBbmltYXRpb25EdXJhdGlvbicpIGF0dHJDb2xsYXBzZUFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ2NvbnRlbnQnKSBhdHRyQ29udGVudDogc3RyaW5nO1xuICAgQElucHV0KCdjbG9zZUFuaW1hdGlvbkR1cmF0aW9uJykgYXR0ckNsb3NlQW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcbiAgIEBJbnB1dCgnY2xvc2VCdXR0b25TaXplJykgYXR0ckNsb3NlQnV0dG9uU2l6ZTogbnVtYmVyO1xuICAgQElucHV0KCdjbG9zZUJ1dHRvbkFjdGlvbicpIGF0dHJDbG9zZUJ1dHRvbkFjdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCdjYW5jZWxCdXR0b24nKSBhdHRyQ2FuY2VsQnV0dG9uOiBhbnk7XG4gICBASW5wdXQoJ2RyYWdBcmVhJykgYXR0ckRyYWdBcmVhOiBqcXdpZGdldHMuV2luZG93RHJhZ0FyZWE7XG4gICBASW5wdXQoJ2RyYWdnYWJsZScpIGF0dHJEcmFnZ2FibGU6IGJvb2xlYW47XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdpbml0Q29udGVudCcpIGF0dHJJbml0Q29udGVudDogKCkgPT4gdm9pZDtcbiAgIEBJbnB1dCgnaXNNb2RhbCcpIGF0dHJJc01vZGFsOiBib29sZWFuO1xuICAgQElucHV0KCdrZXlib2FyZENsb3NlS2V5JykgYXR0cktleWJvYXJkQ2xvc2VLZXk6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgna2V5Ym9hcmROYXZpZ2F0aW9uJykgYXR0cktleWJvYXJkTmF2aWdhdGlvbjogYm9vbGVhbjtcbiAgIEBJbnB1dCgnbWluSGVpZ2h0JykgYXR0ck1pbkhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICAgQElucHV0KCdtYXhIZWlnaHQnKSBhdHRyTWF4SGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ21pbldpZHRoJykgYXR0ck1pbldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ21heFdpZHRoJykgYXR0ck1heFdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICBASW5wdXQoJ21vZGFsT3BhY2l0eScpIGF0dHJNb2RhbE9wYWNpdHk6IG51bWJlciB8IHN0cmluZztcbiAgIEBJbnB1dCgnbW9kYWxaSW5kZXgnKSBhdHRyTW9kYWxaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgnbW9kYWxCYWNrZ3JvdW5kWkluZGV4JykgYXR0ck1vZGFsQmFja2dyb3VuZFpJbmRleDogbnVtYmVyO1xuICAgQElucHV0KCdva0J1dHRvbicpIGF0dHJPa0J1dHRvbjogYW55O1xuICAgQElucHV0KCdwb3NpdGlvbicpIGF0dHJQb3NpdGlvbjogc3RyaW5nIHwgYW55O1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCdyZXNpemFibGUnKSBhdHRyUmVzaXphYmxlOiBib29sZWFuO1xuICAgQElucHV0KCdzaG93QW5pbWF0aW9uRHVyYXRpb24nKSBhdHRyU2hvd0FuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gICBASW5wdXQoJ3Nob3dDbG9zZUJ1dHRvbicpIGF0dHJTaG93Q2xvc2VCdXR0b246IGJvb2xlYW47XG4gICBASW5wdXQoJ3Nob3dDb2xsYXBzZUJ1dHRvbicpIGF0dHJTaG93Q29sbGFwc2VCdXR0b246IGJvb2xlYW47XG4gICBASW5wdXQoJ3RoZW1lJykgYXR0clRoZW1lOiBzdHJpbmc7XG4gICBASW5wdXQoJ3RpdGxlJykgYXR0clRpdGxlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3pJbmRleCcpIGF0dHJaSW5kZXg6IG51bWJlcjtcbiAgIEBJbnB1dCgnd2lkdGgnKSBhdHRyV2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgIEBJbnB1dCgnaGVpZ2h0JykgYXR0ckhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICBASW5wdXQoJ2F1dG8tY3JlYXRlJykgYXV0b0NyZWF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByb3BlcnRpZXM6IHN0cmluZ1tdID0gWydhdXRvT3BlbicsJ2FuaW1hdGlvblR5cGUnLCdjb2xsYXBzZWQnLCdjb2xsYXBzZUFuaW1hdGlvbkR1cmF0aW9uJywnY29udGVudCcsJ2Nsb3NlQW5pbWF0aW9uRHVyYXRpb24nLCdjbG9zZUJ1dHRvblNpemUnLCdjbG9zZUJ1dHRvbkFjdGlvbicsJ2NhbmNlbEJ1dHRvbicsJ2RyYWdBcmVhJywnZHJhZ2dhYmxlJywnZGlzYWJsZWQnLCdoZWlnaHQnLCdpbml0Q29udGVudCcsJ2lzTW9kYWwnLCdrZXlib2FyZENsb3NlS2V5Jywna2V5Ym9hcmROYXZpZ2F0aW9uJywnbWluSGVpZ2h0JywnbWF4SGVpZ2h0JywnbWluV2lkdGgnLCdtYXhXaWR0aCcsJ21vZGFsT3BhY2l0eScsJ21vZGFsWkluZGV4JywnbW9kYWxCYWNrZ3JvdW5kWkluZGV4Jywnb2tCdXR0b24nLCdwb3NpdGlvbicsJ3J0bCcsJ3Jlc2l6YWJsZScsJ3Nob3dBbmltYXRpb25EdXJhdGlvbicsJ3Nob3dDbG9zZUJ1dHRvbicsJ3Nob3dDb2xsYXBzZUJ1dHRvbicsJ3RoZW1lJywndGl0bGUnLCd3aWR0aCcsJ3pJbmRleCddO1xuICAgaG9zdDogYW55O1xuICAgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgIHdpZGdldE9iamVjdDogIGpxd2lkZ2V0cy5qcXhXaW5kb3c7XG5cbiAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICB9XG5cbiAgIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYXV0b0NyZWF0ZSkge1xuICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTsgXG4gICAgICB9XG4gICB9OyBcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBsZXQgYXJlRXF1YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1thdHRyTmFtZV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgYXJlRXF1YWwgPSB0aGlzLmFycmF5c0VxdWFsKHRoaXNbYXR0ck5hbWVdLCB0aGlzLmhvc3QuanF4V2luZG93KHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3codGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaWYgKHRoaXNbYXR0ck5hbWVdICE9PSB0aGlzLmhvc3QuanF4V2luZG93KHRoaXMucHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3codGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeFdpbmRvdycsIG9wdGlvbnMpO1xuXG4gICB9XG5cbiAgIGNyZWF0ZVdpZGdldChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KG9wdGlvbnMpO1xuICAgfVxuXG4gICBfX3VwZGF0ZVJlY3RfXygpIDogdm9pZCB7XG4gICAgICBpZih0aGlzLmhvc3QpIHRoaXMuaG9zdC5jc3MoeyB3aWR0aDogdGhpcy5hdHRyV2lkdGgsIGhlaWdodDogdGhpcy5hdHRySGVpZ2h0IH0pO1xuICAgfVxuXG4gICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkgOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3NldE9wdGlvbnMnLCBvcHRpb25zKTtcbiAgIH1cblxuICAgLy8ganF4V2luZG93Q29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGF1dG9PcGVuKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2F1dG9PcGVuJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2F1dG9PcGVuJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGFuaW1hdGlvblR5cGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2FuaW1hdGlvblR5cGUnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnYW5pbWF0aW9uVHlwZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2xsYXBzZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnY29sbGFwc2VkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2NvbGxhcHNlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBjb2xsYXBzZUFuaW1hdGlvbkR1cmF0aW9uKGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdjb2xsYXBzZUFuaW1hdGlvbkR1cmF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2NvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29udGVudChhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnY29udGVudCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdjb250ZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNsb3NlQW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Nsb3NlQW5pbWF0aW9uRHVyYXRpb24nLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnY2xvc2VBbmltYXRpb25EdXJhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBjbG9zZUJ1dHRvblNpemUoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Nsb3NlQnV0dG9uU2l6ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdjbG9zZUJ1dHRvblNpemUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xvc2VCdXR0b25BY3Rpb24oYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Nsb3NlQnV0dG9uQWN0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Nsb3NlQnV0dG9uQWN0aW9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNhbmNlbEJ1dHRvbihhcmc/OiBhbnkpOiBhbnkge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnY2FuY2VsQnV0dG9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2NhbmNlbEJ1dHRvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBkcmFnQXJlYShhcmc/OiBqcXdpZGdldHMuV2luZG93RHJhZ0FyZWEpOiBqcXdpZGdldHMuV2luZG93RHJhZ0FyZWEge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnZHJhZ0FyZWEnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnZHJhZ0FyZWEnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZHJhZ2dhYmxlKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2RyYWdnYWJsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdkcmFnZ2FibGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnZGlzYWJsZWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGluaXRDb250ZW50KGFyZz86ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2luaXRDb250ZW50JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2luaXRDb250ZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGlzTW9kYWwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnaXNNb2RhbCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdpc01vZGFsJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIGtleWJvYXJkQ2xvc2VLZXkoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2tleWJvYXJkQ2xvc2VLZXknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygna2V5Ym9hcmRDbG9zZUtleScpO1xuICAgICAgfVxuICAgfVxuXG4gICBrZXlib2FyZE5hdmlnYXRpb24oYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygna2V5Ym9hcmROYXZpZ2F0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2tleWJvYXJkTmF2aWdhdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBtaW5IZWlnaHQoYXJnPzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ21pbkhlaWdodCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdtaW5IZWlnaHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbWF4SGVpZ2h0KGFyZz86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB8IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdtYXhIZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnbWF4SGVpZ2h0Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1pbldpZHRoKGFyZz86IG51bWJlciB8IHN0cmluZyk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdtaW5XaWR0aCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdtaW5XaWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtYXhXaWR0aChhcmc/OiBudW1iZXIgfCBzdHJpbmcpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnbWF4V2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnbWF4V2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbW9kYWxPcGFjaXR5KGFyZz86IHVuZGVmaW5lZCk6IHVuZGVmaW5lZCB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdtb2RhbE9wYWNpdHknLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnbW9kYWxPcGFjaXR5Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG1vZGFsWkluZGV4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdtb2RhbFpJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdtb2RhbFpJbmRleCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBtb2RhbEJhY2tncm91bmRaSW5kZXgoYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ21vZGFsQmFja2dyb3VuZFpJbmRleCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdtb2RhbEJhY2tncm91bmRaSW5kZXgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb2tCdXR0b24oYXJnPzogYW55KTogYW55IHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ29rQnV0dG9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ29rQnV0dG9uJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHBvc2l0aW9uKGFyZz86IHN0cmluZyB8IGFueSk6IHN0cmluZyB8IGFueSB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdwb3NpdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdwb3NpdGlvbicpO1xuICAgICAgfVxuICAgfVxuXG4gICBydGwoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygncnRsJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZXNpemFibGUoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygncmVzaXphYmxlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3Jlc2l6YWJsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBzaG93QW5pbWF0aW9uRHVyYXRpb24oYXJnPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3Nob3dBbmltYXRpb25EdXJhdGlvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdzaG93QW5pbWF0aW9uRHVyYXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Nsb3NlQnV0dG9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3Nob3dDbG9zZUJ1dHRvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdzaG93Q2xvc2VCdXR0b24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0NvbGxhcHNlQnV0dG9uKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3Nob3dDb2xsYXBzZUJ1dHRvbicsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCdzaG93Q29sbGFwc2VCdXR0b24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgdGhlbWUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3RoZW1lJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHRpdGxlKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCd0aXRsZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4V2luZG93KCd0aXRsZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnd2lkdGgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnd2lkdGgnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgekluZGV4KGFyZz86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4V2luZG93KCd6SW5kZXgnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnekluZGV4Jyk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8ganF4V2luZG93Q29tcG9uZW50IGZ1bmN0aW9uc1xuICAgYnJpbmdUb0Zyb250KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnYnJpbmdUb0Zyb250Jyk7XG4gICB9XG5cbiAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnY2xvc2UnKTtcbiAgIH1cblxuICAgY29sbGFwc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdjb2xsYXBzZScpO1xuICAgfVxuXG4gICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2Nsb3NlQWxsJyk7XG4gICB9XG5cbiAgIGRpc2FibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdkaXNhYmxlJyk7XG4gICB9XG5cbiAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdkZXN0cm95Jyk7XG4gICB9XG5cbiAgIGVuYWJsZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ2VuYWJsZScpO1xuICAgfVxuXG4gICBleHBhbmQoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdleHBhbmQnKTtcbiAgIH1cblxuICAgZm9jdXMoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdmb2N1cycpO1xuICAgfVxuXG4gICBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeFdpbmRvdygnaXNPcGVuJyk7XG4gICB9XG5cbiAgIG1vdmUodG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeFdpbmRvdygnbW92ZScsIHRvcCwgbGVmdCk7XG4gICB9XG5cbiAgIG9wZW4oKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdvcGVuJyk7XG4gICB9XG5cbiAgIGhpZGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdoaWRlJyk7XG4gICB9XG5cbiAgIHJlc2l6ZSh0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdyZXNpemUnLCB0b3AsIGxlZnQpO1xuICAgfVxuXG4gICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4V2luZG93KCdzZXRUaXRsZScsIHRpdGxlKTtcbiAgIH1cblxuICAgc2V0Q29udGVudChjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhXaW5kb3coJ3NldENvbnRlbnQnLCBjb250ZW50KTtcbiAgIH1cblxuXG4gICAvLyBqcXhXaW5kb3dDb21wb25lbnQgZXZlbnRzXG4gICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvbkNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uRXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uTW92aW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uTW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25PcGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uUmVzaXppbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgb25SZXNpemVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbignY2xvc2UnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkNsb3NlLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ2NvbGxhcHNlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25Db2xsYXBzZS5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdleHBhbmQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbkV4cGFuZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdtb3ZpbmcnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vbk1vdmluZy5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdtb3ZlZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uTW92ZWQuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignb3BlbicsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uT3Blbi5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgICAgdGhpcy5ob3N0Lm9uKCdyZXNpemluZycsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmVzaXppbmcuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVzaXplZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uUmVzaXplZC5lbWl0KGV2ZW50RGF0YSk7IH0pO1xuICAgfVxuXG59IC8vanF4V2luZG93Q29tcG9uZW50XG4iXX0=