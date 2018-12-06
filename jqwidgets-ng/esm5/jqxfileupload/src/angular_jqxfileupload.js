import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxfileupload from '../../jqwidgets/jqxfileupload';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.autoCreate) {
            this.createComponent();
        }
    };
    ;
    /**
     * @param {?} changes
     * @return {?}
     */
    jqxFileUploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                /** @type {?} */
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                /** @type {?} */
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
    /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    jqxFileUploadComponent.prototype.arraysEqual = /**
     * @param {?} attrValue
     * @param {?} hostValue
     * @return {?}
     */
    function (attrValue, hostValue) {
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
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.manageAttributes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            /** @type {?} */
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxFileUploadComponent.prototype.moveClasses = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        var _a;
        /** @type {?} */
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, tslib_1.__spread(classes));
        }
        parentEl.className = '';
    };
    /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    jqxFileUploadComponent.prototype.moveStyles = /**
     * @param {?} parentEl
     * @param {?} childEl
     * @return {?}
     */
    function (parentEl, childEl) {
        /** @type {?} */
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxFileUploadComponent.prototype.createComponent = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxFileUploadComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.__updateRect__ = /**
     * @return {?}
     */
    function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    jqxFileUploadComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxFileUpload('setOptions', options);
    };
    // jqxFileUploadComponent properties
    // jqxFileUploadComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.autoUpload = 
    // jqxFileUploadComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('autoUpload', arg);
        }
        else {
            return this.host.jqxFileUpload('autoUpload');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.accept = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('accept', arg);
        }
        else {
            return this.host.jqxFileUpload('accept');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.browseTemplate = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('browseTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('browseTemplate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.cancelTemplate = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('cancelTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('cancelTemplate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('disabled', arg);
        }
        else {
            return this.host.jqxFileUpload('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.fileInputName = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('fileInputName', arg);
        }
        else {
            return this.host.jqxFileUpload('fileInputName');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('height', arg);
        }
        else {
            return this.host.jqxFileUpload('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.localization = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('localization', arg);
        }
        else {
            return this.host.jqxFileUpload('localization');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.multipleFilesUpload = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('multipleFilesUpload', arg);
        }
        else {
            return this.host.jqxFileUpload('multipleFilesUpload');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.renderFiles = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('renderFiles', arg);
        }
        else {
            return this.host.jqxFileUpload('renderFiles');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('rtl', arg);
        }
        else {
            return this.host.jqxFileUpload('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('theme', arg);
        }
        else {
            return this.host.jqxFileUpload('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.uploadUrl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('uploadUrl', arg);
        }
        else {
            return this.host.jqxFileUpload('uploadUrl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.uploadTemplate = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('uploadTemplate', arg);
        }
        else {
            return this.host.jqxFileUpload('uploadTemplate');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxFileUploadComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxFileUpload('width', arg);
        }
        else {
            return this.host.jqxFileUpload('width');
        }
    };
    // jqxFileUploadComponent functions
    // jqxFileUploadComponent functions
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.browse = 
    // jqxFileUploadComponent functions
    /**
     * @return {?}
     */
    function () {
        this.host.jqxFileUpload('browse');
    };
    /**
     * @param {?} fileIndex
     * @return {?}
     */
    jqxFileUploadComponent.prototype.cancelFile = /**
     * @param {?} fileIndex
     * @return {?}
     */
    function (fileIndex) {
        this.host.jqxFileUpload('cancelFile', fileIndex);
    };
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.cancelAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxFileUpload('cancelAll');
    };
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxFileUpload('destroy');
    };
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        this.host.jqxFileUpload('render');
    };
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.host.jqxFileUpload('refresh');
    };
    /**
     * @param {?} fileIndex
     * @return {?}
     */
    jqxFileUploadComponent.prototype.uploadFile = /**
     * @param {?} fileIndex
     * @return {?}
     */
    function (fileIndex) {
        this.host.jqxFileUpload('uploadFile', fileIndex);
    };
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.uploadAll = /**
     * @return {?}
     */
    function () {
        this.host.jqxFileUpload('uploadAll');
    };
    /**
     * @return {?}
     */
    jqxFileUploadComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('remove', function (eventData) { _this.onRemove.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('uploadStart', function (eventData) { _this.onUploadStart.emit(eventData); });
        this.host.on('uploadEnd', function (eventData) { _this.onUploadEnd.emit(eventData); });
    };
    jqxFileUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxFileUpload',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxFileUploadComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return jqxFileUploadComponent;
}()); //jqxFileUploadComponent
export { jqxFileUploadComponent };
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
