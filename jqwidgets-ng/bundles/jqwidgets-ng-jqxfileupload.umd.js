require('../../jqwidgets/jqxcore');
require('../../jqwidgets/jqxbuttons');
require('../../jqwidgets/jqxfileupload');
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('jqwidgets-ng/jqxfileupload', ['exports', '@angular/core'], factory) :
    (factory((global['jqwidgets-ng'] = global['jqwidgets-ng'] || {}, global['jqwidgets-ng'].jqxfileupload = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxFileUploadComponent = /** @class */ (function () {
        function jqxFileUploadComponent(containerElement) {
            this.autoCreate = true;
            this.properties = ['autoUpload', 'accept', 'browseTemplate', 'cancelTemplate', 'disabled', 'fileInputName', 'height', 'localization', 'multipleFilesUpload', 'renderFiles', 'rtl', 'theme', 'uploadUrl', 'uploadTemplate', 'width'];
            // jqxFileUploadComponent events
            this.onRemove = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onUploadStart = new core.EventEmitter();
            this.onUploadEnd = new core.EventEmitter();
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
                    (_a = childEl.classList).add.apply(_a, __spread(classes));
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
            { type: core.Component, args: [{
                        selector: 'jqxFileUpload',
                        template: '<div><ng-content></ng-content></div>'
                    }] }
        ];
        /** @nocollapse */
        jqxFileUploadComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        jqxFileUploadComponent.propDecorators = {
            attrAutoUpload: [{ type: core.Input, args: ['autoUpload',] }],
            attrAccept: [{ type: core.Input, args: ['accept',] }],
            attrBrowseTemplate: [{ type: core.Input, args: ['browseTemplate',] }],
            attrCancelTemplate: [{ type: core.Input, args: ['cancelTemplate',] }],
            attrDisabled: [{ type: core.Input, args: ['disabled',] }],
            attrFileInputName: [{ type: core.Input, args: ['fileInputName',] }],
            attrLocalization: [{ type: core.Input, args: ['localization',] }],
            attrMultipleFilesUpload: [{ type: core.Input, args: ['multipleFilesUpload',] }],
            attrRenderFiles: [{ type: core.Input, args: ['renderFiles',] }],
            attrRtl: [{ type: core.Input, args: ['rtl',] }],
            attrTheme: [{ type: core.Input, args: ['theme',] }],
            attrUploadUrl: [{ type: core.Input, args: ['uploadUrl',] }],
            attrUploadTemplate: [{ type: core.Input, args: ['uploadTemplate',] }],
            attrWidth: [{ type: core.Input, args: ['width',] }],
            attrHeight: [{ type: core.Input, args: ['height',] }],
            autoCreate: [{ type: core.Input, args: ['auto-create',] }],
            onRemove: [{ type: core.Output }],
            onSelect: [{ type: core.Output }],
            onUploadStart: [{ type: core.Output }],
            onUploadEnd: [{ type: core.Output }]
        };
        return jqxFileUploadComponent;
    }()); //jqxFileUploadComponent

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jqxFileUploadModule = /** @class */ (function () {
        function jqxFileUploadModule() {
        }
        jqxFileUploadModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [jqxFileUploadComponent],
                        exports: [jqxFileUploadComponent]
                    },] }
        ];
        return jqxFileUploadModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.jqxFileUploadComponent = jqxFileUploadComponent;
    exports.jqxFileUploadModule = jqxFileUploadModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

