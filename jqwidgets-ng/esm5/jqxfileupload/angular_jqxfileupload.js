import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxfileupload';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
var jqxFileUploadComponent = /** @class */ (function () {
    function jqxFileUploadComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoUpload', 'accept', 'browseTemplate', 'cancelTemplate', 'disabled', 'fileInputName', 'height', 'localization', 'multipleFilesUpload', 'renderFiles', 'rtl', 'theme', 'uploadUrl', 'uploadTemplate', 'width'];
        // jqxFileUploadComponent events
        this.onRemove = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUploadStart = new EventEmitter();
        this.onUploadEnd = new EventEmitter();
        this.elementRef = containerElement;
    }
    jqxFileUploadComponent.prototype.ngOnInit = function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    jqxFileUploadComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxFileUpload(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxFileUpload(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxFileUpload(this.properties[i])) {
                        this.host.jqxFileUpload(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxFileUploadComponent.prototype.arraysEqual = function (attrValue, hostValue) {
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
    jqxFileUploadComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxFileUploadComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    jqxFileUploadComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxFileUploadComponent.prototype.createComponent = function (options) {
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFileUpload', options);
    };
    jqxFileUploadComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxFileUploadComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxFileUploadComponent.prototype.setOptions = function (options) {
        this.host.jqxFileUpload('setOptions', options);
    };
    // jqxFileUploadComponent properties
    jqxFileUploadComponent.prototype.autoUpload = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('autoUpload', arg);
        }
        else {
            return this.host.jqxFileUpload('autoUpload');
        }
    };
    jqxFileUploadComponent.prototype.accept = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('accept', arg);
        }
        else {
            return this.host.jqxFileUpload('accept');
        }
    };
    jqxFileUploadComponent.prototype.browseTemplate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('browseTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('browseTemplate');
        }
    };
    jqxFileUploadComponent.prototype.cancelTemplate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('cancelTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('cancelTemplate');
        }
    };
    jqxFileUploadComponent.prototype.disabled = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('disabled', arg);
        }
        else {
            return this.host.jqxFileUpload('disabled');
        }
    };
    jqxFileUploadComponent.prototype.fileInputName = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('fileInputName', arg);
        }
        else {
            return this.host.jqxFileUpload('fileInputName');
        }
    };
    jqxFileUploadComponent.prototype.height = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('height', arg);
        }
        else {
            return this.host.jqxFileUpload('height');
        }
    };
    jqxFileUploadComponent.prototype.localization = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('localization', arg);
        }
        else {
            return this.host.jqxFileUpload('localization');
        }
    };
    jqxFileUploadComponent.prototype.multipleFilesUpload = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('multipleFilesUpload', arg);
        }
        else {
            return this.host.jqxFileUpload('multipleFilesUpload');
        }
    };
    jqxFileUploadComponent.prototype.renderFiles = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('renderFiles', arg);
        }
        else {
            return this.host.jqxFileUpload('renderFiles');
        }
    };
    jqxFileUploadComponent.prototype.rtl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('rtl', arg);
        }
        else {
            return this.host.jqxFileUpload('rtl');
        }
    };
    jqxFileUploadComponent.prototype.theme = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('theme', arg);
        }
        else {
            return this.host.jqxFileUpload('theme');
        }
    };
    jqxFileUploadComponent.prototype.uploadUrl = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('uploadUrl', arg);
        }
        else {
            return this.host.jqxFileUpload('uploadUrl');
        }
    };
    jqxFileUploadComponent.prototype.uploadTemplate = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('uploadTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('uploadTemplate');
        }
    };
    jqxFileUploadComponent.prototype.width = function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('width', arg);
        }
        else {
            return this.host.jqxFileUpload('width');
        }
    };
    // jqxFileUploadComponent functions
    jqxFileUploadComponent.prototype.browse = function () {
        this.host.jqxFileUpload('browse');
    };
    jqxFileUploadComponent.prototype.cancelFile = function (fileIndex) {
        this.host.jqxFileUpload('cancelFile', fileIndex);
    };
    jqxFileUploadComponent.prototype.cancelAll = function () {
        this.host.jqxFileUpload('cancelAll');
    };
    jqxFileUploadComponent.prototype.destroy = function () {
        this.host.jqxFileUpload('destroy');
    };
    jqxFileUploadComponent.prototype.render = function () {
        this.host.jqxFileUpload('render');
    };
    jqxFileUploadComponent.prototype.refresh = function () {
        this.host.jqxFileUpload('refresh');
    };
    jqxFileUploadComponent.prototype.uploadFile = function (fileIndex) {
        this.host.jqxFileUpload('uploadFile', fileIndex);
    };
    jqxFileUploadComponent.prototype.uploadAll = function () {
        this.host.jqxFileUpload('uploadAll');
    };
    jqxFileUploadComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('remove', function (eventData) { _this.onRemove.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('uploadStart', function (eventData) { _this.onUploadStart.emit(eventData); });
        this.host.on('uploadEnd', function (eventData) { _this.onUploadEnd.emit(eventData); });
    };
    jqxFileUploadComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input('autoUpload'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFileUploadComponent.prototype, "attrAutoUpload", void 0);
    tslib_1.__decorate([
        Input('accept'),
        tslib_1.__metadata("design:type", String)
    ], jqxFileUploadComponent.prototype, "attrAccept", void 0);
    tslib_1.__decorate([
        Input('browseTemplate'),
        tslib_1.__metadata("design:type", String)
    ], jqxFileUploadComponent.prototype, "attrBrowseTemplate", void 0);
    tslib_1.__decorate([
        Input('cancelTemplate'),
        tslib_1.__metadata("design:type", String)
    ], jqxFileUploadComponent.prototype, "attrCancelTemplate", void 0);
    tslib_1.__decorate([
        Input('disabled'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFileUploadComponent.prototype, "attrDisabled", void 0);
    tslib_1.__decorate([
        Input('fileInputName'),
        tslib_1.__metadata("design:type", String)
    ], jqxFileUploadComponent.prototype, "attrFileInputName", void 0);
    tslib_1.__decorate([
        Input('localization'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFileUploadComponent.prototype, "attrLocalization", void 0);
    tslib_1.__decorate([
        Input('multipleFilesUpload'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFileUploadComponent.prototype, "attrMultipleFilesUpload", void 0);
    tslib_1.__decorate([
        Input('renderFiles'),
        tslib_1.__metadata("design:type", Function)
    ], jqxFileUploadComponent.prototype, "attrRenderFiles", void 0);
    tslib_1.__decorate([
        Input('rtl'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFileUploadComponent.prototype, "attrRtl", void 0);
    tslib_1.__decorate([
        Input('theme'),
        tslib_1.__metadata("design:type", String)
    ], jqxFileUploadComponent.prototype, "attrTheme", void 0);
    tslib_1.__decorate([
        Input('uploadUrl'),
        tslib_1.__metadata("design:type", String)
    ], jqxFileUploadComponent.prototype, "attrUploadUrl", void 0);
    tslib_1.__decorate([
        Input('uploadTemplate'),
        tslib_1.__metadata("design:type", String)
    ], jqxFileUploadComponent.prototype, "attrUploadTemplate", void 0);
    tslib_1.__decorate([
        Input('width'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFileUploadComponent.prototype, "attrWidth", void 0);
    tslib_1.__decorate([
        Input('height'),
        tslib_1.__metadata("design:type", Object)
    ], jqxFileUploadComponent.prototype, "attrHeight", void 0);
    tslib_1.__decorate([
        Input('auto-create'),
        tslib_1.__metadata("design:type", Boolean)
    ], jqxFileUploadComponent.prototype, "autoCreate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxFileUploadComponent.prototype, "onRemove", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxFileUploadComponent.prototype, "onSelect", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxFileUploadComponent.prototype, "onUploadStart", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], jqxFileUploadComponent.prototype, "onUploadEnd", void 0);
    jqxFileUploadComponent = tslib_1.__decorate([
        Component({
            selector: 'jqxFileUpload',
            template: '<div><ng-content></ng-content></div>'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], jqxFileUploadComponent);
    return jqxFileUploadComponent;
}()); //jqxFileUploadComponent
export { jqxFileUploadComponent };
