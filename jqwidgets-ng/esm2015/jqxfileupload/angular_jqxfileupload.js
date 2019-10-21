import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxfileupload';
/// <reference path="../../jqwidgets.d.ts" />
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
let jqxFileUploadComponent = class jqxFileUploadComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoUpload', 'accept', 'browseTemplate', 'cancelTemplate', 'disabled', 'fileInputName', 'height', 'localization', 'multipleFilesUpload', 'renderFiles', 'rtl', 'theme', 'uploadUrl', 'uploadTemplate', 'width'];
        // jqxFileUploadComponent events
        this.onRemove = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUploadStart = new EventEmitter();
        this.onUploadEnd = new EventEmitter();
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxFileUpload', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxFileUpload('setOptions', options);
    }
    // jqxFileUploadComponent properties
    autoUpload(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('autoUpload', arg);
        }
        else {
            return this.host.jqxFileUpload('autoUpload');
        }
    }
    accept(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('accept', arg);
        }
        else {
            return this.host.jqxFileUpload('accept');
        }
    }
    browseTemplate(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('browseTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('browseTemplate');
        }
    }
    cancelTemplate(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('cancelTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('cancelTemplate');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('disabled', arg);
        }
        else {
            return this.host.jqxFileUpload('disabled');
        }
    }
    fileInputName(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('fileInputName', arg);
        }
        else {
            return this.host.jqxFileUpload('fileInputName');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('height', arg);
        }
        else {
            return this.host.jqxFileUpload('height');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('localization', arg);
        }
        else {
            return this.host.jqxFileUpload('localization');
        }
    }
    multipleFilesUpload(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('multipleFilesUpload', arg);
        }
        else {
            return this.host.jqxFileUpload('multipleFilesUpload');
        }
    }
    renderFiles(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('renderFiles', arg);
        }
        else {
            return this.host.jqxFileUpload('renderFiles');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('rtl', arg);
        }
        else {
            return this.host.jqxFileUpload('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('theme', arg);
        }
        else {
            return this.host.jqxFileUpload('theme');
        }
    }
    uploadUrl(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('uploadUrl', arg);
        }
        else {
            return this.host.jqxFileUpload('uploadUrl');
        }
    }
    uploadTemplate(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('uploadTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('uploadTemplate');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('width', arg);
        }
        else {
            return this.host.jqxFileUpload('width');
        }
    }
    // jqxFileUploadComponent functions
    browse() {
        this.host.jqxFileUpload('browse');
    }
    cancelFile(fileIndex) {
        this.host.jqxFileUpload('cancelFile', fileIndex);
    }
    cancelAll() {
        this.host.jqxFileUpload('cancelAll');
    }
    destroy() {
        this.host.jqxFileUpload('destroy');
    }
    render() {
        this.host.jqxFileUpload('render');
    }
    refresh() {
        this.host.jqxFileUpload('refresh');
    }
    uploadFile(fileIndex) {
        this.host.jqxFileUpload('uploadFile', fileIndex);
    }
    uploadAll() {
        this.host.jqxFileUpload('uploadAll');
    }
    __wireEvents__() {
        this.host.on('remove', (eventData) => { this.onRemove.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('uploadStart', (eventData) => { this.onUploadStart.emit(eventData); });
        this.host.on('uploadEnd', (eventData) => { this.onUploadEnd.emit(eventData); });
    }
}; //jqxFileUploadComponent
jqxFileUploadComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
export { jqxFileUploadComponent };
