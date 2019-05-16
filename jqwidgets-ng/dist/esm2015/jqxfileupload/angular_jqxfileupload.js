import * as jqxcore from '../../jqwidgets-scripts/jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets-scripts/jqwidgets/jqxbuttons';
import * as jqxfileupload from '../../jqwidgets-scripts/jqwidgets/jqxfileupload';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.host.on('remove', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onRemove.emit(eventData); }));
        this.host.on('select', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onSelect.emit(eventData); }));
        this.host.on('uploadStart', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onUploadStart.emit(eventData); }));
        this.host.on('uploadEnd', (/**
         * @param {?} eventData
         * @return {?}
         */
        (eventData) => { this.onUploadEnd.emit(eventData); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcXhmaWxldXBsb2FkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vanF3aWRnZXRzLW5nL2pxeGZpbGV1cGxvYWQvIiwic291cmNlcyI6WyJhbmd1bGFyX2pxeGZpbGV1cGxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLDZDQUE2Qzs7QUFHN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBUTdHLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUF5QmhDLFlBQVksZ0JBQTRCO1FBUGxCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFakQsZUFBVSxHQUFhLENBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMscUJBQXFCLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLE9BQU8sQ0FBQyxDQUFDOztRQStRak4sYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTVReEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixXQUFXLENBQUMsT0FBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUs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OztJQUU3Qyw0Q0FBaUQ7O0lBRWpELDRDQUEyTjs7SUFDM04sc0NBQVU7O0lBQ1YsNENBQXVCOztJQUN2Qiw4Q0FBdUM7O0lBNFF2QywwQ0FBd0M7O0lBQ3hDLDBDQUF3Qzs7SUFDeEMsK0NBQTZDOztJQUM3Qyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9qcXdpZGdldHMuZC50c1wiIC8+XG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZGVjbGFyZSBsZXQgSlFYTGl0ZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2pxeEZpbGVVcGxvYWQnLFxuICAgIHRlbXBsYXRlOiAnPGRpdj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+J1xufSlcblxuZXhwb3J0IGNsYXNzIGpxeEZpbGVVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgIEBJbnB1dCgnYXV0b1VwbG9hZCcpIGF0dHJBdXRvVXBsb2FkOiBib29sZWFuO1xuICAgQElucHV0KCdhY2NlcHQnKSBhdHRyQWNjZXB0OiBzdHJpbmc7XG4gICBASW5wdXQoJ2Jyb3dzZVRlbXBsYXRlJykgYXR0ckJyb3dzZVRlbXBsYXRlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2NhbmNlbFRlbXBsYXRlJykgYXR0ckNhbmNlbFRlbXBsYXRlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2Rpc2FibGVkJykgYXR0ckRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCdmaWxlSW5wdXROYW1lJykgYXR0ckZpbGVJbnB1dE5hbWU6IHN0cmluZztcbiAgIEBJbnB1dCgnbG9jYWxpemF0aW9uJykgYXR0ckxvY2FsaXphdGlvbjoganF3aWRnZXRzLkZpbGVVcGxvYWRMb2NhbGl6YXRpb247XG4gICBASW5wdXQoJ211bHRpcGxlRmlsZXNVcGxvYWQnKSBhdHRyTXVsdGlwbGVGaWxlc1VwbG9hZDogYm9vbGVhbjtcbiAgIEBJbnB1dCgncmVuZGVyRmlsZXMnKSBhdHRyUmVuZGVyRmlsZXM6IChmaWxlbmFtZTpqcXdpZGdldHMuRmlsZVVwbG9hZFJlbmRlckZpbGVzWydmaWxlTmFtZSddKSA9PiB2b2lkO1xuICAgQElucHV0KCdydGwnKSBhdHRyUnRsOiBib29sZWFuO1xuICAgQElucHV0KCd0aGVtZScpIGF0dHJUaGVtZTogc3RyaW5nO1xuICAgQElucHV0KCd1cGxvYWRVcmwnKSBhdHRyVXBsb2FkVXJsOiBzdHJpbmc7XG4gICBASW5wdXQoJ3VwbG9hZFRlbXBsYXRlJykgYXR0clVwbG9hZFRlbXBsYXRlOiBzdHJpbmc7XG4gICBASW5wdXQoJ3dpZHRoJykgYXR0cldpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gICBASW5wdXQoJ2hlaWdodCcpIGF0dHJIZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICAgQElucHV0KCdhdXRvLWNyZWF0ZScpIGF1dG9DcmVhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IFsnYXV0b1VwbG9hZCcsJ2FjY2VwdCcsJ2Jyb3dzZVRlbXBsYXRlJywnY2FuY2VsVGVtcGxhdGUnLCdkaXNhYmxlZCcsJ2ZpbGVJbnB1dE5hbWUnLCdoZWlnaHQnLCdsb2NhbGl6YXRpb24nLCdtdWx0aXBsZUZpbGVzVXBsb2FkJywncmVuZGVyRmlsZXMnLCdydGwnLCd0aGVtZScsJ3VwbG9hZFVybCcsJ3VwbG9hZFRlbXBsYXRlJywnd2lkdGgnXTtcbiAgIGhvc3Q6IGFueTtcbiAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICB3aWRnZXRPYmplY3Q6ICBqcXdpZGdldHMuanF4RmlsZVVwbG9hZDtcblxuICAgY29uc3RydWN0b3IoY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgdGhpcy5lbGVtZW50UmVmID0gY29udGFpbmVyRWxlbWVudDtcbiAgIH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ3JlYXRlKSB7XG4gICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpOyBcbiAgICAgIH1cbiAgIH07IFxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gJ2F0dHInICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm9wZXJ0aWVzW2ldLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBhcmVFcXVhbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2F0dHJOYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICBhcmVFcXVhbCA9IHRoaXMuYXJyYXlzRXF1YWwodGhpc1thdHRyTmFtZV0sIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKHRoaXMucHJvcGVydGllc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKGFyZUVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKHRoaXMucHJvcGVydGllc1tpXSwgdGhpc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGlmICh0aGlzW2F0dHJOYW1lXSAhPT0gdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQodGhpcy5wcm9wZXJ0aWVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQodGhpcy5wcm9wZXJ0aWVzW2ldLCB0aGlzW2F0dHJOYW1lXSk7IFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBhcnJheXNFcXVhbChhdHRyVmFsdWU6IGFueSwgaG9zdFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIGlmICgoYXR0clZhbHVlICYmICFob3N0VmFsdWUpIHx8ICghYXR0clZhbHVlICYmIGhvc3RWYWx1ZSkpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRyVmFsdWUubGVuZ3RoICE9IGhvc3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0clZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBpZiAoYXR0clZhbHVlW2ldICE9PSBob3N0VmFsdWVbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxuXG4gICBtYW5hZ2VBdHRyaWJ1dGVzKCk6IGFueSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIGxldCBhdHRyTmFtZSA9ICdhdHRyJyArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHRoaXMucHJvcGVydGllc1tpXS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICBpZiAodGhpc1thdHRyTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9uc1t0aGlzLnByb3BlcnRpZXNbaV1dID0gdGhpc1thdHRyTmFtZV07XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgIH1cblxuICAgbW92ZUNsYXNzZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IGNsYXNzZXM6IGFueSA9IHBhcmVudEVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2hpbGRFbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgcGFyZW50RWwuY2xhc3NOYW1lID0gJyc7XG4gICB9XG5cbiAgIG1vdmVTdHlsZXMocGFyZW50RWw6IEhUTUxFbGVtZW50LCBjaGlsZEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgbGV0IHN0eWxlID0gcGFyZW50RWwuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGNoaWxkRWwuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG4gICAgICBwYXJlbnRFbC5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICB9XG5cbiAgIGNyZWF0ZUNvbXBvbmVudChvcHRpb25zPzogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgSlFYTGl0ZS5leHRlbmQob3B0aW9ucywgdGhpcy5tYW5hZ2VBdHRyaWJ1dGVzKCkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm1hbmFnZUF0dHJpYnV0ZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaG9zdCA9IEpRWExpdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cbiAgICAgIHRoaXMubW92ZUNsYXNzZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG4gICAgICB0aGlzLm1vdmVTdHlsZXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaG9zdFswXSk7XG5cbiAgICAgIHRoaXMuX193aXJlRXZlbnRzX18oKTtcbiAgICAgIHRoaXMud2lkZ2V0T2JqZWN0ID0ganF3aWRnZXRzLmNyZWF0ZUluc3RhbmNlKHRoaXMuaG9zdCwgJ2pxeEZpbGVVcGxvYWQnLCBvcHRpb25zKTtcblxuICAgfVxuXG4gICBjcmVhdGVXaWRnZXQob3B0aW9ucz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgIH1cblxuICAgX191cGRhdGVSZWN0X18oKSA6IHZvaWQge1xuICAgICAgaWYodGhpcy5ob3N0KSB0aGlzLmhvc3QuY3NzKHsgd2lkdGg6IHRoaXMuYXR0cldpZHRoLCBoZWlnaHQ6IHRoaXMuYXR0ckhlaWdodCB9KTtcbiAgIH1cblxuICAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIDogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnc2V0T3B0aW9ucycsIG9wdGlvbnMpO1xuICAgfVxuXG4gICAvLyBqcXhGaWxlVXBsb2FkQ29tcG9uZW50IHByb3BlcnRpZXNcbiAgIGF1dG9VcGxvYWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ2F1dG9VcGxvYWQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ2F1dG9VcGxvYWQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYWNjZXB0KGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnYWNjZXB0JywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdhY2NlcHQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgYnJvd3NlVGVtcGxhdGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdicm93c2VUZW1wbGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnYnJvd3NlVGVtcGxhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2FuY2VsVGVtcGxhdGUoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdjYW5jZWxUZW1wbGF0ZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnY2FuY2VsVGVtcGxhdGUnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZGlzYWJsZWQoYXJnPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ2Rpc2FibGVkJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBmaWxlSW5wdXROYW1lKGFyZz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnZmlsZUlucHV0TmFtZScsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnZmlsZUlucHV0TmFtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICBoZWlnaHQoYXJnPzogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdoZWlnaHQnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgfVxuXG4gICBsb2NhbGl6YXRpb24oYXJnPzoganF3aWRnZXRzLkZpbGVVcGxvYWRMb2NhbGl6YXRpb24pOiBqcXdpZGdldHMuRmlsZVVwbG9hZExvY2FsaXphdGlvbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnbG9jYWxpemF0aW9uJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdsb2NhbGl6YXRpb24nKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbXVsdGlwbGVGaWxlc1VwbG9hZChhcmc/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnbXVsdGlwbGVGaWxlc1VwbG9hZCcsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnbXVsdGlwbGVGaWxlc1VwbG9hZCcpO1xuICAgICAgfVxuICAgfVxuXG4gICByZW5kZXJGaWxlcyhhcmc/OiAoZmlsZW5hbWU6anF3aWRnZXRzLkZpbGVVcGxvYWRSZW5kZXJGaWxlc1snZmlsZU5hbWUnXSkgPT4gdm9pZCk6IChmaWxlbmFtZTpqcXdpZGdldHMuRmlsZVVwbG9hZFJlbmRlckZpbGVzWydmaWxlTmFtZSddKSA9PiB2b2lkIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdyZW5kZXJGaWxlcycsIGFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgncmVuZGVyRmlsZXMnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcnRsKGFyZz86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdydGwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ3J0bCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB0aGVtZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ3RoZW1lJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCd0aGVtZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB1cGxvYWRVcmwoYXJnPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIGlmIChhcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCd1cGxvYWRVcmwnLCBhcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ3VwbG9hZFVybCcpO1xuICAgICAgfVxuICAgfVxuXG4gICB1cGxvYWRUZW1wbGF0ZShhcmc/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ3VwbG9hZFRlbXBsYXRlJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCd1cGxvYWRUZW1wbGF0ZScpO1xuICAgICAgfVxuICAgfVxuXG4gICB3aWR0aChhcmc/OiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ3dpZHRoJywgYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCd3aWR0aCcpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgIC8vIGpxeEZpbGVVcGxvYWRDb21wb25lbnQgZnVuY3Rpb25zXG4gICBicm93c2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgnYnJvd3NlJyk7XG4gICB9XG5cbiAgIGNhbmNlbEZpbGUoZmlsZUluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5qcXhGaWxlVXBsb2FkKCdjYW5jZWxGaWxlJywgZmlsZUluZGV4KTtcbiAgIH1cblxuICAgY2FuY2VsQWxsKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ2NhbmNlbEFsbCcpO1xuICAgfVxuXG4gICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ2Rlc3Ryb3knKTtcbiAgIH1cblxuICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ3JlbmRlcicpO1xuICAgfVxuXG4gICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ3JlZnJlc2gnKTtcbiAgIH1cblxuICAgdXBsb2FkRmlsZShmaWxlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5ob3N0LmpxeEZpbGVVcGxvYWQoJ3VwbG9hZEZpbGUnLCBmaWxlSW5kZXgpO1xuICAgfVxuXG4gICB1cGxvYWRBbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLmhvc3QuanF4RmlsZVVwbG9hZCgndXBsb2FkQWxsJyk7XG4gICB9XG5cblxuICAgLy8ganF4RmlsZVVwbG9hZENvbXBvbmVudCBldmVudHNcbiAgIEBPdXRwdXQoKSBvblJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBvblVwbG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgQE91dHB1dCgpIG9uVXBsb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBfX3dpcmVFdmVudHNfXygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG9zdC5vbigncmVtb3ZlJywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25SZW1vdmUuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbignc2VsZWN0JywgKGV2ZW50RGF0YTogYW55KSA9PiB7IHRoaXMub25TZWxlY3QuZW1pdChldmVudERhdGEpOyB9KTtcbiAgICAgIHRoaXMuaG9zdC5vbigndXBsb2FkU3RhcnQnLCAoZXZlbnREYXRhOiBhbnkpID0+IHsgdGhpcy5vblVwbG9hZFN0YXJ0LmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICAgICB0aGlzLmhvc3Qub24oJ3VwbG9hZEVuZCcsIChldmVudERhdGE6IGFueSkgPT4geyB0aGlzLm9uVXBsb2FkRW5kLmVtaXQoZXZlbnREYXRhKTsgfSk7XG4gICB9XG5cbn0gLy9qcXhGaWxlVXBsb2FkQ29tcG9uZW50XG4iXX0=