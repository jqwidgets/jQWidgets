import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxfileupload from '../../jqwidgets/jqxfileupload';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
export class jqxFileUploadComponent {
    /**
     * @param {?} containerElement
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    manageAttributes() {
        /** @type {?} */
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveClasses(parentEl, childEl) {
        /** @type {?} */
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    moveStyles(parentEl, childEl) {
        /** @type {?} */
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    /**
     * @param {?=} options
     * @return {?}
     */
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
    /**
     * @param {?=} options
     * @return {?}
     */
    createWidget(options) {
        this.createComponent(options);
    }
    /**
     * @return {?}
     */
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.host.jqxFileUpload('setOptions', options);
    }
    // jqxFileUploadComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    autoUpload(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('autoUpload', arg);
        }
        else {
            return this.host.jqxFileUpload('autoUpload');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    accept(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('accept', arg);
        }
        else {
            return this.host.jqxFileUpload('accept');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    browseTemplate(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('browseTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('browseTemplate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    cancelTemplate(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('cancelTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('cancelTemplate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('disabled', arg);
        }
        else {
            return this.host.jqxFileUpload('disabled');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    fileInputName(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('fileInputName', arg);
        }
        else {
            return this.host.jqxFileUpload('fileInputName');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('height', arg);
        }
        else {
            return this.host.jqxFileUpload('height');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('localization', arg);
        }
        else {
            return this.host.jqxFileUpload('localization');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    multipleFilesUpload(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('multipleFilesUpload', arg);
        }
        else {
            return this.host.jqxFileUpload('multipleFilesUpload');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    renderFiles(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('renderFiles', arg);
        }
        else {
            return this.host.jqxFileUpload('renderFiles');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('rtl', arg);
        }
        else {
            return this.host.jqxFileUpload('rtl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('theme', arg);
        }
        else {
            return this.host.jqxFileUpload('theme');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    uploadUrl(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('uploadUrl', arg);
        }
        else {
            return this.host.jqxFileUpload('uploadUrl');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    uploadTemplate(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('uploadTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('uploadTemplate');
        }
    }
    /**
     * @param {?=} arg
     * @return {?}
     */
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('width', arg);
        }
        else {
            return this.host.jqxFileUpload('width');
        }
    }
    // jqxFileUploadComponent functions
    /**
     * @return {?}
     */
    browse() {
        this.host.jqxFileUpload('browse');
    }
    /**
     * @param {?} fileIndex
     * @return {?}
     */
    cancelFile(fileIndex) {
        this.host.jqxFileUpload('cancelFile', fileIndex);
    }
    /**
     * @return {?}
     */
    cancelAll() {
        this.host.jqxFileUpload('cancelAll');
    }
    /**
     * @return {?}
     */
    destroy() {
        this.host.jqxFileUpload('destroy');
    }
    /**
     * @return {?}
     */
    render() {
        this.host.jqxFileUpload('render');
    }
    /**
     * @return {?}
     */
    refresh() {
        this.host.jqxFileUpload('refresh');
    }
    /**
     * @param {?} fileIndex
     * @return {?}
     */
    uploadFile(fileIndex) {
        this.host.jqxFileUpload('uploadFile', fileIndex);
    }
    /**
     * @return {?}
     */
    uploadAll() {
        this.host.jqxFileUpload('uploadAll');
    }
    /**
     * @return {?}
     */
    __wireEvents__() {
        this.host.on('remove', (eventData) => { this.onRemove.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('uploadStart', (eventData) => { this.onUploadStart.emit(eventData); });
        this.host.on('uploadEnd', (eventData) => { this.onUploadEnd.emit(eventData); });
    }
} //jqxFileUploadComponent
jqxFileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'jqxFileUpload',
                template: '<div><ng-content></ng-content></div>'
            }] }
];
/** @nocollapse */
jqxFileUploadComponent.ctorParameters = () => [
    { type: ElementRef }
];
jqxFileUploadComponent.propDecorators = {
    attrAutoUpload: [{ type: Input, args: ['autoUpload',] }],
    attrAccept: [{ type: Input, args: ['accept',] }],
    attrBrowseTemplate: [{ type: Input, args: ['browseTemplate',] }],
    attrCancelTemplate: [{ type: Input, args: ['cancelTemplate',] }],
    attrDisabled: [{ type: Input, args: ['disabled',] }],
    attrFileInputName: [{ type: Input, args: ['fileInputName',] }],
    attrLocalization: [{ type: Input, args: ['localization',] }],
    attrMultipleFilesUpload: [{ type: Input, args: ['multipleFilesUpload',] }],
    attrRenderFiles: [{ type: Input, args: ['renderFiles',] }],
    attrRtl: [{ type: Input, args: ['rtl',] }],
    attrTheme: [{ type: Input, args: ['theme',] }],
    attrUploadUrl: [{ type: Input, args: ['uploadUrl',] }],
    attrUploadTemplate: [{ type: Input, args: ['uploadTemplate',] }],
    attrWidth: [{ type: Input, args: ['width',] }],
    attrHeight: [{ type: Input, args: ['height',] }],
    autoCreate: [{ type: Input, args: ['auto-create',] }],
    onRemove: [{ type: Output }],
    onSelect: [{ type: Output }],
    onUploadStart: [{ type: Output }],
    onUploadEnd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrAutoUpload;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrAccept;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrBrowseTemplate;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrCancelTemplate;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrDisabled;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrFileInputName;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrLocalization;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrMultipleFilesUpload;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrRenderFiles;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrRtl;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrTheme;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrUploadUrl;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrUploadTemplate;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrWidth;
    /** @type {?} */
    jqxFileUploadComponent.prototype.attrHeight;
    /** @type {?} */
    jqxFileUploadComponent.prototype.autoCreate;
    /** @type {?} */
    jqxFileUploadComponent.prototype.properties;
    /** @type {?} */
    jqxFileUploadComponent.prototype.host;
    /** @type {?} */
    jqxFileUploadComponent.prototype.elementRef;
    /** @type {?} */
    jqxFileUploadComponent.prototype.widgetObject;
    /** @type {?} */
    jqxFileUploadComponent.prototype.onRemove;
    /** @type {?} */
    jqxFileUploadComponent.prototype.onSelect;
    /** @type {?} */
    jqxFileUploadComponent.prototype.onUploadStart;
    /** @type {?} */
    jqxFileUploadComponent.prototype.onUploadEnd;
    /* Skipping unhandled member: ;*/
}
