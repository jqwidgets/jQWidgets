import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxbuttons from '../../jqwidgets/jqxbuttons';
import * as jqxtabs from '../../jqwidgets/jqxtabs';
import { __spread } from 'tslib';
import { Component, Input, Output, EventEmitter, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxTabsComponent = /** @class */ (function () {
    function jqxTabsComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'autoHeight', 'closeButtonSize', 'collapsible', 'contentTransitionDuration', 'disabled', 'enabledHover', 'enableScrollAnimation', 'enableDropAnimation', 'height', 'initTabContent', 'keyboardNavigation', 'next', 'previous', 'position', 'reorder', 'rtl', 'scrollAnimationDuration', 'selectedItem', 'selectionTracker', 'scrollable', 'scrollPosition', 'scrollStep', 'showCloseButtons', 'toggleMode', 'theme', 'width'];
        // jqxTabsComponent events
        this.onAdd = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelecting = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.onTabclick = new EventEmitter();
        this.onUnselecting = new EventEmitter();
        this.onUnselected = new EventEmitter();
        this.elementRef = containerElement;
    }
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.ngOnInit = /**
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
    jqxTabsComponent.prototype.ngOnChanges = /**
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTabs(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTabs(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTabs(this.properties[i])) {
                        this.host.jqxTabs(this.properties[i], this[attrName]);
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
    jqxTabsComponent.prototype.arraysEqual = /**
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
    jqxTabsComponent.prototype.manageAttributes = /**
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
    jqxTabsComponent.prototype.moveClasses = /**
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
    jqxTabsComponent.prototype.moveStyles = /**
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
    jqxTabsComponent.prototype.createComponent = /**
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTabs', options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    jqxTabsComponent.prototype.createWidget = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.createComponent(options);
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.__updateRect__ = /**
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
    jqxTabsComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.host.jqxTabs('setOptions', options);
    };
    // jqxTabsComponent properties
    // jqxTabsComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.animationType = 
    // jqxTabsComponent properties
    /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('animationType', arg);
        }
        else {
            return this.host.jqxTabs('animationType');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.autoHeight = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('autoHeight', arg);
        }
        else {
            return this.host.jqxTabs('autoHeight');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.closeButtonSize = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('closeButtonSize', arg);
        }
        else {
            return this.host.jqxTabs('closeButtonSize');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.collapsible = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('collapsible', arg);
        }
        else {
            return this.host.jqxTabs('collapsible');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.contentTransitionDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('contentTransitionDuration', arg);
        }
        else {
            return this.host.jqxTabs('contentTransitionDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.disabled = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('disabled', arg);
        }
        else {
            return this.host.jqxTabs('disabled');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.enabledHover = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enabledHover', arg);
        }
        else {
            return this.host.jqxTabs('enabledHover');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.enableScrollAnimation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enableScrollAnimation', arg);
        }
        else {
            return this.host.jqxTabs('enableScrollAnimation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.enableDropAnimation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enableDropAnimation', arg);
        }
        else {
            return this.host.jqxTabs('enableDropAnimation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.height = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('height', arg);
        }
        else {
            return this.host.jqxTabs('height');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.initTabContent = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('initTabContent', arg);
        }
        else {
            return this.host.jqxTabs('initTabContent');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.keyboardNavigation = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTabs('keyboardNavigation');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.next = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('next', arg);
        }
        else {
            return this.host.jqxTabs('next');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.previous = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('previous', arg);
        }
        else {
            return this.host.jqxTabs('previous');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.position = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('position', arg);
        }
        else {
            return this.host.jqxTabs('position');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.reorder = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('reorder', arg);
        }
        else {
            return this.host.jqxTabs('reorder');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.rtl = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('rtl', arg);
        }
        else {
            return this.host.jqxTabs('rtl');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.scrollAnimationDuration = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollAnimationDuration', arg);
        }
        else {
            return this.host.jqxTabs('scrollAnimationDuration');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.selectedItem = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('selectedItem', arg);
        }
        else {
            return this.host.jqxTabs('selectedItem');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.selectionTracker = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('selectionTracker', arg);
        }
        else {
            return this.host.jqxTabs('selectionTracker');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.scrollable = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollable', arg);
        }
        else {
            return this.host.jqxTabs('scrollable');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.scrollPosition = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollPosition', arg);
        }
        else {
            return this.host.jqxTabs('scrollPosition');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.scrollStep = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollStep', arg);
        }
        else {
            return this.host.jqxTabs('scrollStep');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.showCloseButtons = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('showCloseButtons', arg);
        }
        else {
            return this.host.jqxTabs('showCloseButtons');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.toggleMode = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('toggleMode', arg);
        }
        else {
            return this.host.jqxTabs('toggleMode');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.theme = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('theme', arg);
        }
        else {
            return this.host.jqxTabs('theme');
        }
    };
    /**
     * @param {?=} arg
     * @return {?}
     */
    jqxTabsComponent.prototype.width = /**
     * @param {?=} arg
     * @return {?}
     */
    function (arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('width', arg);
        }
        else {
            return this.host.jqxTabs('width');
        }
    };
    // jqxTabsComponent functions
    // jqxTabsComponent functions
    /**
     * @param {?} index
     * @param {?} title
     * @param {?} content
     * @return {?}
     */
    jqxTabsComponent.prototype.addAt = 
    // jqxTabsComponent functions
    /**
     * @param {?} index
     * @param {?} title
     * @param {?} content
     * @return {?}
     */
    function (index, title, content) {
        this.host.jqxTabs('addAt', index, title, content);
    };
    /**
     * @param {?} htmlElement1
     * @param {?} htmlElement2
     * @return {?}
     */
    jqxTabsComponent.prototype.addFirst = /**
     * @param {?} htmlElement1
     * @param {?} htmlElement2
     * @return {?}
     */
    function (htmlElement1, htmlElement2) {
        this.host.jqxTabs('addFirst', htmlElement1, htmlElement2);
    };
    /**
     * @param {?} htmlElement1
     * @param {?=} htmlElement2
     * @return {?}
     */
    jqxTabsComponent.prototype.addLast = /**
     * @param {?} htmlElement1
     * @param {?=} htmlElement2
     * @return {?}
     */
    function (htmlElement1, htmlElement2) {
        this.host.jqxTabs('addLast', htmlElement1, htmlElement2);
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.collapse = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('collapse');
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('disable');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.disableAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTabs('disableAt', index);
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('destroy');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.ensureVisible = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTabs('ensureVisible', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.enableAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTabs('enableAt', index);
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.expand = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('expand');
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('enable');
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('focus');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.getTitleAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.host.jqxTabs('getTitleAt', index);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.getContentAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.host.jqxTabs('getContentAt', index);
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.getDisabledTabsCount = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTabs('getDisabledTabsCount');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.hideCloseButtonAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTabs('hideCloseButtonAt', index);
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.hideAllCloseButtons = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('hideAllCloseButtons');
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.length = /**
     * @return {?}
     */
    function () {
        return this.host.jqxTabs('length');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.removeAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTabs('removeAt', index);
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.removeFirst = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('removeFirst');
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.removeLast = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('removeLast');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.select = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTabs('select', index);
    };
    /**
     * @param {?} index
     * @param {?} htmlElement
     * @return {?}
     */
    jqxTabsComponent.prototype.setContentAt = /**
     * @param {?} index
     * @param {?} htmlElement
     * @return {?}
     */
    function (index, htmlElement) {
        this.host.jqxTabs('setContentAt', index, htmlElement);
    };
    /**
     * @param {?} index
     * @param {?} htmlElement
     * @return {?}
     */
    jqxTabsComponent.prototype.setTitleAt = /**
     * @param {?} index
     * @param {?} htmlElement
     * @return {?}
     */
    function (index, htmlElement) {
        this.host.jqxTabs('setTitleAt', index, htmlElement);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    jqxTabsComponent.prototype.showCloseButtonAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.host.jqxTabs('showCloseButtonAt', index);
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.showAllCloseButtons = /**
     * @return {?}
     */
    function () {
        this.host.jqxTabs('showAllCloseButtons');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    jqxTabsComponent.prototype.val = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            return this.host.jqxTabs('val', value);
        }
        else {
            return this.host.jqxTabs('val');
        }
    };
    /**
     * @return {?}
     */
    jqxTabsComponent.prototype.__wireEvents__ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.host.on('add', function (eventData) { _this.onAdd.emit(eventData); });
        this.host.on('collapsed', function (eventData) { _this.onCollapsed.emit(eventData); });
        this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
        this.host.on('expanded', function (eventData) { _this.onExpanded.emit(eventData); });
        this.host.on('removed', function (eventData) { _this.onRemoved.emit(eventData); });
        this.host.on('selecting', function (eventData) { _this.onSelecting.emit(eventData); });
        this.host.on('selected', function (eventData) { _this.onSelected.emit(eventData); });
        this.host.on('tabclick', function (eventData) { _this.onTabclick.emit(eventData); });
        this.host.on('unselecting', function (eventData) { _this.onUnselecting.emit(eventData); });
        this.host.on('unselected', function (eventData) { _this.onUnselected.emit(eventData); });
    };
    jqxTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jqxTabs',
                    template: '<div><ng-content></ng-content></div>'
                }] }
    ];
    /** @nocollapse */
    jqxTabsComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    jqxTabsComponent.propDecorators = {
        attrAnimationType: [{ type: Input, args: ['animationType',] }],
        attrAutoHeight: [{ type: Input, args: ['autoHeight',] }],
        attrCloseButtonSize: [{ type: Input, args: ['closeButtonSize',] }],
        attrCollapsible: [{ type: Input, args: ['collapsible',] }],
        attrContentTransitionDuration: [{ type: Input, args: ['contentTransitionDuration',] }],
        attrDisabled: [{ type: Input, args: ['disabled',] }],
        attrEnabledHover: [{ type: Input, args: ['enabledHover',] }],
        attrEnableScrollAnimation: [{ type: Input, args: ['enableScrollAnimation',] }],
        attrEnableDropAnimation: [{ type: Input, args: ['enableDropAnimation',] }],
        attrInitTabContent: [{ type: Input, args: ['initTabContent',] }],
        attrKeyboardNavigation: [{ type: Input, args: ['keyboardNavigation',] }],
        attrNext: [{ type: Input, args: ['next',] }],
        attrPrevious: [{ type: Input, args: ['previous',] }],
        attrPosition: [{ type: Input, args: ['position',] }],
        attrReorder: [{ type: Input, args: ['reorder',] }],
        attrRtl: [{ type: Input, args: ['rtl',] }],
        attrScrollAnimationDuration: [{ type: Input, args: ['scrollAnimationDuration',] }],
        attrSelectedItem: [{ type: Input, args: ['selectedItem',] }],
        attrSelectionTracker: [{ type: Input, args: ['selectionTracker',] }],
        attrScrollable: [{ type: Input, args: ['scrollable',] }],
        attrScrollPosition: [{ type: Input, args: ['scrollPosition',] }],
        attrScrollStep: [{ type: Input, args: ['scrollStep',] }],
        attrShowCloseButtons: [{ type: Input, args: ['showCloseButtons',] }],
        attrToggleMode: [{ type: Input, args: ['toggleMode',] }],
        attrTheme: [{ type: Input, args: ['theme',] }],
        attrWidth: [{ type: Input, args: ['width',] }],
        attrHeight: [{ type: Input, args: ['height',] }],
        autoCreate: [{ type: Input, args: ['auto-create',] }],
        onAdd: [{ type: Output }],
        onCollapsed: [{ type: Output }],
        onDragStart: [{ type: Output }],
        onDragEnd: [{ type: Output }],
        onExpanded: [{ type: Output }],
        onRemoved: [{ type: Output }],
        onSelecting: [{ type: Output }],
        onSelected: [{ type: Output }],
        onTabclick: [{ type: Output }],
        onUnselecting: [{ type: Output }],
        onUnselected: [{ type: Output }]
    };
    return jqxTabsComponent;
}()); //jqxTabsComponent

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jqxTabsModule = /** @class */ (function () {
    function jqxTabsModule() {
    }
    jqxTabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [jqxTabsComponent],
                    exports: [jqxTabsComponent]
                },] }
    ];
    return jqxTabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { jqxTabsComponent, jqxTabsModule };

