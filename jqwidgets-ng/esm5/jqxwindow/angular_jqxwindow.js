import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
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
    jqxWindowComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
